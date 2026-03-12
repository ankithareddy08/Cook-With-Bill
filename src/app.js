/**
 * COOK WITH BILL - Main Application Logic
 * Handles ingredient selection, recipe fetching, and display
 */

// Import required modules
import { Logger } from './logger.js';
import {
  isApiKeyValid,
  API_ENDPOINTS,
  APP_CONFIG,
  SPOONACULAR_API_KEY,
  SPOONACULAR_API_BASE,
} from './config.js';
import { getRecipesByIngredients, getAllRecipes } from './recipes.js';

// Use local recipes by default (set to false to use API)
const USE_LOCAL_RECIPES = true;

// ============================================
// STATE MANAGEMENT
// ============================================
const appState = {
  selectedIngredients: [],
  selectedDishes: [],
  allRecipes: [],
  filteredRecipes: [],
  isLoading: false,
  currentPage: 1,
  recipeDetails: {}, // Store detailed recipe info
};

// ============================================
// DOM ELEMENT REFERENCES
// ============================================
let domElements = {
  ingredientSearch: null,
  ingredientCategoryButtons: null,
  recipeSearchInput: null,
  recipeGrid: null,
  suggestedIngredients: null,
  loadingSpinner: null,
};

/**
 * Initialize DOM elements on page load
 */
function initializeDOMElements() {
  Logger.debug("🔍 Initializing DOM elements");
  
  domElements = {
    ingredientSearch: document.getElementById('ingredientSearch'),
    customIngredient: document.getElementById('customIngredient'),
    recipeSearchInput: document.querySelector('input[placeholder="Search recipes..."]'),
    recipeGrid: document.querySelector('[data-purpose="recipe-grid"]'),
    suggestedIngredients: document.querySelector('[data-purpose="suggestions"]'),
    categoryContainers: document.querySelectorAll('[data-purpose^="category-"]'),
  };
  
  Logger.table("DOM Elements Found", {
    "ingredientSearch": !!domElements.ingredientSearch,
    "customIngredient": !!domElements.customIngredient,
    "recipeSearchInput": !!domElements.recipeSearchInput,
    "recipeGrid": !!domElements.recipeGrid,
    "categoryContainers": domElements.categoryContainers.length,
  });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  Logger.info("📄 DOM Content Loaded - Starting initialization");
  
  initializeDOMElements();
  setupEventListeners();
  updateSelectedList();
  
  Logger.success("✓ App initialized successfully");
  
  if (!isApiKeyValid()) {
    Logger.error("API Key Missing", "Please add your Spoonacular API key to config.js");
    showNotification(
      "API Key Missing",
      "Please add your Spoonacular API key to config.js",
      "warning"
    );
  }
});

/**
 * Setup all event listeners
 */
function setupEventListeners() {
  Logger.info("🔗 Setting up event listeners");
  
  // Ingredient search
  if (domElements.ingredientSearch) {
    domElements.ingredientSearch.addEventListener("input", function(e) {
      Logger.debug("🔍 Ingredient search triggered", e.target.value);
      handleIngredientSearch(e);
    });
    Logger.debug("  ✓ Ingredient search listener attached");
  } else {
    Logger.warning("  ⚠ Ingredient search input not found");
  }

  // Custom ingredient add (press enter)
  if (domElements.customIngredient) {
    domElements.customIngredient.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        const val = e.target.value.trim();
        if (val) {
          addCustomIngredient(val);
          e.target.value = "";
        }
      }
    });
    Logger.debug("  ✓ Custom ingredient listener attached");
  }

  // Recipe search
  if (domElements.recipeSearchInput) {
    domElements.recipeSearchInput.addEventListener("input", debounce(function(e) {
      Logger.debug("🔍 Recipe search triggered (debounced)", e.target.value);
      handleRecipeSearch(e);
    }, APP_CONFIG.debounceDelay));
    Logger.debug("  ✓ Recipe search listener attached");
  } else {
    Logger.warning("  ⚠ Recipe search input not found");
  }

// Delegate click events for ingredient pills and missing ingredient links
  document.addEventListener("click", function (e) {
    if (e.target.matches(".pill-button")) {
      Logger.debug("👆 Pill button clicked", e.target.textContent);
      handleIngredientSelect(e.target);
    }
    if (e.target.matches(".missing-ingredient")) {
      const ing = e.target.textContent.trim();
      Logger.info("📍 Missing ingredient clicked", ing);
      addCustomIngredient(ing);
    }
  });
  Logger.debug("  ✓ Pill button click delegation attached");
  
  Logger.success("Event listeners setup complete");
}

// ============================================
// INGREDIENT SELECTION LOGIC
// ============================================

/**
 * Handle ingredient search/filter
 * @param {Event} event
 */
function handleIngredientSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  Logger.debug("🔍 Filtering ingredients", searchTerm);
  
  const allButtons = document.querySelectorAll('[data-purpose^="category-"] .pill-button');
  let visibleCount = 0;

  allButtons.forEach((button) => {
    const buttonText = button.textContent.toLowerCase();
    if (buttonText.includes(searchTerm)) {
      button.style.display = "block";
      visibleCount++;
    } else {
      button.style.display = "none";
    }
  });
  
  Logger.debug(`  → Showing ${visibleCount}/${allButtons.length} ingredients`);
}

/**
 * Handle ingredient selection/deselection
 * @param {HTMLElement} button
 */
function handleIngredientSelect(button) {
  // Ignore clicks if they happen on the top "selected" list
  if (button.classList.contains("selected-pill")) return;

  const ingredientName = button.textContent.trim();
  const wasActive = button.classList.contains("active");

  // SINGLE SELECT LOGIC: Deactivate all pills in the sidebar first
  document.querySelectorAll('.pill-button').forEach(btn => btn.classList.remove('active'));

  if (wasActive) {
    // If they clicked the active one, turn it off and clear the list
    appState.selectedIngredients = [];
  } else {
    // Turn on ONLY the newly clicked one
    button.classList.add("active");
    appState.selectedIngredients = [ingredientName]; // Replaces the array instead of pushing to it
  }

  updateSelectedList();

  // Fetch or clear recipes based on new state
  if (appState.selectedIngredients.length > 0) {
    fetchRecipesByIngredients(appState.selectedIngredients);
  } else {
    displayDefaultRecipes();
  }
}

// ============================================
// RECIPE FETCHING LOGIC
// ============================================

/**
 * Fetch recipes by selected ingredients from Spoonacular API
 * @param {Array} ingredients - Array of ingredient names
 */
async function fetchRecipesByIngredients(ingredients) {
  const timer = Logger.timer("fetchRecipesByIngredients");
  
  Logger.debug("🔍 Fetch Mode: " + (USE_LOCAL_RECIPES ? "LOCAL" : "API"));
  Logger.debug("🔍 Step 1: Validate inputs", {
    hasIngredients: ingredients.length > 0,
    ingredientCount: ingredients.length,
    ingredientList: ingredients,
  });

  if (ingredients.length === 0) {
    Logger.warning("No ingredients provided");
    displayDefaultRecipes();
    return;
  }

  showLoadingState();

  try {
    let recipes;
    
    if (USE_LOCAL_RECIPES) {
      // Use local recipe database - max 5 recipes
      Logger.info("📚 Using local recipe database");
      recipes = getRecipesByIngredients(ingredients);
      Logger.success(`✓ Got ${recipes.length} local recipes`, {
        ingredientCount: ingredients.length,
        recipeCount: recipes.length,
      });
    } else {
      // Use Spoonacular API (quota-dependent)
      Logger.api("POST", API_ENDPOINTS.findByIngredients, {
        ingredients: ingredients,
        number: APP_CONFIG.recipesPerPage,
      });
      
      if (!isApiKeyValid()) {
        Logger.error("API Key Invalid", "Cannot fetch recipes without valid API key");
        showNotification("Error", "API key not configured", "error");
        return;
      }

      const ingredientQuery = ingredients.join(",");
      const url = `${API_ENDPOINTS.findByIngredients}?apiKey=${SPOONACULAR_API_KEY}&ingredients=${encodeURIComponent(
        ingredientQuery
      )}&number=${APP_CONFIG.recipesPerPage}&ranking=2`;

      Logger.debug("🔍 Step 2: Build API URL", {
        maskedUrl: url.replace(SPOONACULAR_API_KEY, "***"),
      });

      Logger.debug("🔍 Step 3: Making fetch request...");
      const response = await fetch(url);
      
      Logger.debug("🔍 Step 4: Response received", {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
      });

      if (!response.ok) {
        const errorText = await response.text();
        Logger.error("API Response Not OK", {
          status: response.status,
          statusText: response.statusText,
          responseBody: errorText,
        });
        // handle quota error - fallback to local
        if (response.status === 402 || errorText.toLowerCase().includes('daily points')) {
          showNotification(
            "Quota Exceeded",
            "Using local recipes instead.",
            "warning"
          );
          recipes = getRecipesByIngredients(ingredients);
        } else {
          throw new Error(`API Error: ${response.status} ${response.statusText} - ${errorText}`);
        }
      } else {
        Logger.debug("🔍 Step 5: Parsing response JSON...");
        recipes = await response.json();
        Logger.debug("🔍 Step 6: JSON parsed successfully", {
          length: recipes.length,
        });
      }
    }

    appState.allRecipes = recipes;
    appState.filteredRecipes = recipes;

    Logger.table("Recipes Loaded", recipes.slice(0, 3).map(r => ({
      id: r.id,
      title: r.title,
      used: r.usedIngredients?.length || 0,
    })));

    displayRecipes(recipes, ingredients);
    hideLoadingState();
    timer.end();
    
    Logger.success("✅ Recipe load complete!");
  } catch (error) {
    Logger.error("Failed to fetch recipes", {
      message: error.message,
      stack: error.stack,
    });
    if (!error.message.toLowerCase().includes('quota')) {
      showNotification("Error", `Failed to fetch recipes: ${error.message}`, "error");
    }
    hideLoadingState();
    timer.end();
  }
}

/**
 * Search recipes by name
 * @param {Event} event
 */
async function handleRecipeSearch(event) {
  const searchTerm = event.target.value.trim();
  Logger.debug("🔎 Recipe search", searchTerm);

  if (searchTerm.length === 0) {
    Logger.info("Search cleared - showing ingredient results");
    displayRecipes(appState.allRecipes);
    return;
  }

  if (!isApiKeyValid()) {
    Logger.error("API Key Invalid");
    showNotification("Error", "API key not configured", "error");
    return;
  }

  showLoadingState();

  try {
    const url = `${API_ENDPOINTS.searchRecipes}?apiKey=${SPOONACULAR_API_KEY}&query=${encodeURIComponent(
      searchTerm
    )}&number=${APP_CONFIG.recipesPerPage}`;

    Logger.api("GET", API_ENDPOINTS.searchRecipes, { query: searchTerm });
    Logger.debug("Making API request", url.replace(SPOONACULAR_API_KEY, "***"));

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    appState.filteredRecipes = data.results;

    Logger.success(`Found ${data.results.length} recipes for "${searchTerm}"`);
    displayRecipes(data.results);
    hideLoadingState();
  } catch (error) {
    Logger.error("Recipe search failed", error);
    if (error.message.includes('402') || error.message.toLowerCase().includes('daily points')) {
      showNotification(
        "Quota Exceeded",
        "Your daily Spoonacular quota has been reached. Please upgrade your plan or try later.",
        "error"
      );
    } else {
      showNotification("Error", `Failed to search recipes: ${error.message}`, "error");
    }
    hideLoadingState();
  }
}

/**
 * Get detailed information about a specific recipe
 * @param {number} recipeId
 */
async function fetchRecipeDetails(recipeId) {
  Logger.debug("📖 Fetching recipe details", { recipeId });
  
  if (!isApiKeyValid()) {
    Logger.error("API Key Invalid");
    showNotification("Error", "API key not configured", "error");
    return null;
  }

  try {
    // use endpoint template from config
    const url = API_ENDPOINTS.getRecipeDetails.replace("{id}", recipeId) +
      `?apiKey=${SPOONACULAR_API_KEY}&includeNutrition=true`;
    
    Logger.api("GET", `recipes/${recipeId}/information`, { recipeId });
    Logger.debug("Making API request", url.replace(SPOONACULAR_API_KEY, "***"));

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const details = await response.json();
    appState.recipeDetails[recipeId] = details;

    Logger.success(`Recipe details loaded: ${details.title}`, {
      id: details.id,
      servings: details.servings,
      time: details.readyInMinutes,
      ingredients: details.extendedIngredients.length,
    });

    return details;
  } catch (error) {
    Logger.error("Failed to fetch recipe details", error);
    return null;
  }
}

// ============================================
// RECIPE DISPLAY LOGIC
// ============================================

/**
 * Display recipes in the grid
 * @param {Array} recipes - Array of recipe objects
 */
function displayRecipes(recipes, ingredients = []) {
  Logger.info(`🎨 Rendering ${recipes.length} recipes`, { count: recipes.length, ingredients });
  
  // Dynamic header for single ingredient
  let headerHTML = '';
  if (ingredients.length === 1) {
    headerHTML = `
      <div class="col-span-full mb-6 p-4 bg-white/5 rounded-xl">
        <h3 class="text-2xl font-bold text-brand mb-1">${recipes.length} Recipes for <span class="text-white">${ingredients[0]}</span></h3>
        <p class="text-white/60">Click any recipe to view full details</p>
      </div>
    `;
  }
  
  Logger.debug("🔍 Step 1: Validate recipe grid element", {
    gridExists: !!domElements.recipeGrid,
    gridSelector: '[data-purpose="recipe-grid"]',
    gridElement: domElements.recipeGrid ? domElements.recipeGrid.tagName : "NOT FOUND",
  });
  
  if (!domElements.recipeGrid) {
    Logger.error("Recipe grid element not found in DOM");
    return;
  }

  Logger.debug("🔍 Step 2: Clear existing recipe cards");
  const existingCards = domElements.recipeGrid.querySelectorAll("article:not(.border-dashed), div.col-span-full");
  Logger.debug(`Found ${existingCards.length} existing cards/headers to remove`, {
    count: existingCards.length,
  });
  existingCards.forEach((el) => el.remove());

  if (recipes.length === 0) {
    Logger.warning("No recipes to display");
    domElements.recipeGrid.innerHTML =
      '<div class="col-span-full text-center py-12"><p class="text-white/60">No recipes found. Try different ingredients!</p></div>';
    Logger.debug("Displayed empty state message");
    return;
  }

  Logger.debug("🔍 Step 3: Generate recipe card HTML", {
    recipeCount: recipes.length,
  });
  const recipesHTML = recipes.map((recipe, index) => {
    Logger.debug(`  Generating card ${index + 1}/${recipes.length}`, {
      id: recipe.id,
      title: recipe.title,
    });
    return createRecipeCard(recipe);
  }).join("");

  Logger.debug("🔍 Step 4: Insert cards into DOM");
  const lastCard = domElements.recipeGrid.querySelector(".border-dashed");
  
  Logger.debug("Looking for discover button", {
    discoverButtonExists: !!lastCard,
  });
  
  if (lastCard) {
    Logger.debug("Inserting cards before discover button");
    lastCard.insertAdjacentHTML("beforebegin", recipesHTML);
  } else {
    Logger.warning("Discover button not found, inserting at beginning of grid");
    domElements.recipeGrid.innerHTML = recipesHTML + domElements.recipeGrid.innerHTML;
  }

  Logger.debug("🔍 Step 5: Verify cards in DOM", {
    cardsInDOM: domElements.recipeGrid.querySelectorAll("article[data-recipe-id]").length,
  });

  Logger.debug("🔍 Step 6: Attach click listeners to cards");
  attachRecipeCardListeners();
  Logger.success(`✓ Displayed ${recipes.length} recipes`);
}

/**
 * Create HTML for a recipe card
 * @param {Object} recipe - Recipe object from API
 * @returns {string} - HTML string
 */
function createRecipeCard(recipe) {
  const imageUrl = recipe.image || "https://via.placeholder.com/400x300?text=No+Image";
  const usedIngredients = recipe.usedIngredients ? recipe.usedIngredients.length : 0;
  const missedIngredients = recipe.missedIngredients ? recipe.missedIngredients.length : 0;
  const missedList = recipe.missedIngredients
    ? recipe.missedIngredients.map(i => i.name).join(", ")
    : "";

  return `
    <article class="glass-card rounded-2xl overflow-hidden group cursor-pointer" data-recipe-id="${recipe.id}">
      <div class="h-48 bg-white/10 flex items-center justify-center overflow-hidden relative">
        <img 
          alt="${recipe.title}" 
          class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
          src="${imageUrl}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop'; this.onerror=null;"
        />
        <div class="absolute top-3 right-3 bg-black/40 backdrop-blur-md rounded-full px-3 py-1 text-sm">
          ${usedIngredients}/${usedIngredients + missedIngredients} ingredients
        </div>
      </div>
      <div class="p-4">
        <h4 class="text-lg font-semibold mb-2 line-clamp-2">${recipe.title}</h4>
        <p class="text-white/60 text-sm mb-1">
          ${usedIngredients > 0 ? `${usedIngredients} of your ingredients` : "View recipe details"}
        </p>
        ${missedIngredients > 0 ? `<p class="text-red-400 text-xs mb-2">Missing: ` +
            recipe.missedIngredients.map(i => `<span class="missing-ingredient cursor-pointer underline">${i.name}</span>`).join(", ") +
            `</p>` : ``}
        <button class="w-full py-2 px-3 rounded-lg bg-brand/20 hover:bg-brand/30 text-brand font-medium transition-colors duration-200 text-sm">
          View Recipe
        </button>
      </div>
    </article>
  `;
}

/**
 * Attach click listeners to recipe cards
 */
function attachRecipeCardListeners() {
  const recipeCards = domElements.recipeGrid.querySelectorAll("article[data-recipe-id]");
  Logger.debug(`Attaching listeners to ${recipeCards.length} recipe cards`);

  recipeCards.forEach((card) => {
    card.addEventListener("click", async function () {
      const recipeId = this.getAttribute("data-recipe-id");
      const recipeTitle = this.querySelector("h4").textContent;
      Logger.info(`🖱 Recipe card clicked`, { recipeId, title: recipeTitle });
      await showRecipeModal(recipeId);
    });
  });
}

/**
 * Show recipe modal with detailed information
 * @param {number|string} recipeId
 */
async function showRecipeModal(recipeId) {
  Logger.group(`📋 Recipe Modal - ID: ${recipeId}`, () => {
    Logger.info("Opening recipe details modal");
  });

  let details;

  // FIX: Pull the fully formatted recipe directly from the app's current memory!
  if (appState.allRecipes && appState.allRecipes.length > 0) {
    // We use String() here to prevent any number vs string comparison bugs
    details = appState.allRecipes.find(r => String(r.id) === String(recipeId));
    
    if (details) {
      Logger.success("Loaded recipe details from local state", { recipeId });
    }
  }

  // Fallback to API if it wasn't found in our local data
  if (!details) {
    details = await fetchRecipeDetails(recipeId);
  }

  // If it still can't find anything, show the error notification
  if (!details) {
    Logger.error("Failed to load recipe details", { recipeId });
    showNotification("Error", "Recipe details unavailable", "error");
    return;
  }

  Logger.success(`Modal data ready: ${details.title}`);

  // Create and show modal
  const modal = createRecipeModal(details);
  document.body.appendChild(modal);
  Logger.debug("Modal element added to DOM");

  // Add fade-in animation
  setTimeout(() => {
    modal.classList.add("show");
    Logger.debug("Modal animation started");
  }, 10);

  // Close on background click
  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      Logger.debug("Modal closed by background click");
      this.remove();
    }
  });
}

/**
 * Create recipe modal HTML
 * @param {Object} recipe - Recipe details object
 * @returns {HTMLElement}
 */
function createRecipeModal(recipe) {
  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 modal";
  modal.style.opacity = "0";
  modal.style.transition = "opacity 0.3s ease";

  const ingredientsList = (recipe.extendedIngredients || [])
    .map((ing) => `<li class="flex items-center gap-2"><span class="text-brand">✓</span> ${ing.original}</li>`)
    .join("");

  const instructions = recipe.instructions || "Instructions not available";

  modal.innerHTML = `
    <div class="glass-panel rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 modal-content">
      <div class="flex justify-between items-start mb-6">
        <h2 class="text-3xl font-bold text-white">${recipe.title}</h2>
        <button class="text-white/60 hover:text-white text-2xl close-modal">×</button>
      </div>
      
      <img src="${recipe.image}" alt="${recipe.title}" class="w-full h-64 object-cover rounded-xl mb-6" />
      
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div class="bg-white/10 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-brand">${recipe.readyInMinutes || "N/A"}</div>
          <div class="text-white/60 text-sm">Minutes</div>
        </div>
        <div class="bg-white/10 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-brand">${recipe.servings || "N/A"}</div>
          <div class="text-white/60 text-sm">Servings</div>
        </div>
        <div class="bg-white/10 rounded-lg p-4 text-center">
          <div class="text-2xl font-bold text-brand">${recipe.healthScore || "N/A"}</div>
          <div class="text-white/60 text-sm">Health Score</div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Ingredients</h3>
          <ul class="space-y-2 text-white/80">
            ${ingredientsList || "<li>No ingredients listed</li>"}
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-white mb-4">Instructions</h3>
          <p class="text-white/80 leading-relaxed">${instructions}</p>
        </div>
      </div>

      <button class="w-full bg-brand hover:bg-brand/80 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
        Try this Recipe!
      </button>
    </div>
  `;

  const closeBtn = modal.querySelector(".close-modal");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.remove());
  }

  setTimeout(() => {
    modal.style.opacity = "1";
  }, 10);

  return modal;
}

/**
 * Display default recipes (sample)
 */
function displayDefaultRecipes() {
  // This will be called when no ingredients are selected
  // You can either show nothing or show popular recipes
  if (domElements.recipeGrid) {
    const existingCards = domElements.recipeGrid.querySelectorAll("article:not(.border-dashed)");
    existingCards.forEach((card) => card.remove());
  }
}

// ============================================
// UI STATE HELPERS
// ============================================

/**
 * Show loading spinner
 */
function showLoadingState() {
  appState.isLoading = true;
  Logger.debug("⏳ Loading state: ON");
  if (domElements.recipeGrid) {
    domElements.recipeGrid.style.opacity = "0.5";
    domElements.recipeGrid.style.pointerEvents = "none";
  }
}

/**
 * Hide loading spinner
 */
function hideLoadingState() {
  appState.isLoading = false;
  Logger.debug("⏳ Loading state: OFF");
  if (domElements.recipeGrid) {
    domElements.recipeGrid.style.opacity = "1";
    domElements.recipeGrid.style.pointerEvents = "auto";
  }
}

/**
 * Show notification to user
 * @param {string} title
 * @param {string} message
 * @param {string} type - 'success', 'error', 'warning'
 */
function showNotification(title, message, type = "success") {
  Logger.info(`📢 Notification [${type.toUpperCase()}]`, { title, message });
  
  const notification = document.createElement("div");
  notification.className = `fixed top-4 right-4 glass-panel rounded-lg p-4 max-w-sm z-40 notification notification-${type}`;
  notification.innerHTML = `
    <h4 class="font-semibold text-white mb-1">${title}</h4>
    <p class="text-white/80 text-sm">${message}</p>
  `;

  document.body.appendChild(notification);
  Logger.debug("Notification element added to DOM");

  setTimeout(() => {
    notification.remove();
    Logger.debug("Notification removed from DOM");
  }, 4000);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Debounce function to avoid excessive API calls
 * @param {Function} func
 * @param {number} wait
 * @returns {Function}
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Toggle pill styling (enhanced original function)
 * @param {HTMLElement} element
 */
function togglePill(element) {
  // Toggle active class
  element.classList.toggle("active");
  
  Logger.debug("💊 Pill toggled", {
    text: element.textContent.trim(),
    active: element.classList.contains("active"),
  });
}

/**
 * Create and add a custom ingredient pill
 * @param {string} name
 */
function addCustomIngredient(name) {
  // avoid duplicates in state
  if (appState.selectedIngredients.includes(name)) {
    Logger.info("Ingredient already selected", name);
    return;
  }

  const pill = document.createElement("button");
  pill.className = "pill-button px-4 py-1.5 rounded-full border border-white/30 bg-white/5 hover:bg-white/20 text-sm active";
  pill.textContent = name;
  pill.onclick = function() { togglePill(this); };

  // insert into sidebar near top
  const sidebar = document.querySelector('[data-purpose="ingredients-sidebar"] .glass-panel');
  if (sidebar) {
    let container = sidebar.querySelector('#custom-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'custom-container';
      container.className = 'flex flex-wrap gap-2 mb-4';
      // insert after header section inside panel
      const header = sidebar.querySelector('div.flex.items-center');
      if (header && header.parentNode) {
        header.parentNode.insertBefore(container, header.nextSibling);
      } else {
        sidebar.insertBefore(container, sidebar.firstChild);
      }
    }
    container.appendChild(pill);
  }

  appState.selectedIngredients.push(name);
  Logger.info("✓ Added custom ingredient", name);
  fetchRecipesByIngredients(appState.selectedIngredients);
}


// function to update visual list of selected ingredients
function updateSelectedList() {
  const container = document.getElementById('selected-ingredients');
  if (!container) return;
  container.innerHTML = '';

  appState.selectedIngredients.forEach((ing) => {
    const btn = document.createElement('button');
    // We changed 'pill-button' to 'selected-pill' to prevent the ghost-text bug!
    btn.className = 'selected-pill px-4 py-1.5 rounded-full border border-white/30 bg-brand text-white text-sm flex items-center gap-1 transition-colors hover:bg-red-500';
    btn.innerHTML = `${ing} <span class="ml-1 text-lg leading-none">&times;</span>`;

    btn.onclick = (e) => {
      e.stopPropagation(); // Stops the click from causing other events
      // Find the pill in the sidebar and turn it off
      document.querySelectorAll('.pill-button').forEach(el => {
        if (el.textContent.trim() === ing) el.classList.remove('active');
      });
      // Clear array and reset UI
      appState.selectedIngredients = [];
      updateSelectedList();
      displayDefaultRecipes();
    };

    container.appendChild(btn);
  });
}

// ============================================
// APP STARTUP
// ============================================
Logger.success("✓ app.js loaded successfully");
Logger.info("Application ready for user interaction");
