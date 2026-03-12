/**
 * Configuration File for Cook with Bill Recipe App
 * Store API keys and constants here
 */

// ============================================
// SPOONACULAR API CONFIGURATION
// ============================================
// Get your free API key from: https://spoonacular.com/food-api
// Free tier: 150 requests/day
const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY || "YOUR_API_KEY_HERE";
const SPOONACULAR_API_BASE = "https://api.spoonacular.com";

// ============================================
// API ENDPOINTS
// ============================================
const API_ENDPOINTS = {
  findByIngredients: `${SPOONACULAR_API_BASE}/recipes/findByIngredients`,
  searchRecipes: `${SPOONACULAR_API_BASE}/recipes/complexSearch`,
  getRecipeDetails: `${SPOONACULAR_API_BASE}/recipes/{id}/information`,
  getRecipeInstructions: `${SPOONACULAR_API_BASE}/recipes/{id}/analyzedInstructions`,
};

// ============================================
// APP CONFIGURATION
// ============================================
const APP_CONFIG = {
  recipesPerPage: 12,
  debounceDelay: 300, // ms
  imageHeight: 200, // pixels
  animationDuration: 0.3, // seconds
  maxIngredients: 10,
};

// ============================================
// INGREDIENT CATEGORIES
// ============================================
const INGREDIENT_CATEGORIES = {
  vegetables: ["Tomato", "Potato", "Onion", "Carrot", "Broccoli", "Spinach", "Garlic", "Bell Pepper"],
  meat: ["Chicken", "Mutton", "Beef", "Pork", "Turkey", "Lamb"],
  fruits: ["Apple", "Banana", "Orange", "Mango", "Strawberry", "Blueberry"],
  seafood: ["Fish", "Prawns", "Salmon", "Tuna", "Shrimp", "Crab"],
  pulses: ["Lentils", "Chickpeas", "Black Beans", "Red Beans", "Kidney Beans"],
  dairy: ["Cheese", "Milk", "Yogurt", "Butter", "Cream"],
  pantry: ["Coconut", "Garlic", "Ginger", "Soy Sauce", "Olive Oil"],
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Build query string for API calls
 * @param {Object} params - Query parameters
 * @returns {string} - URL encoded query string
 */
function buildQueryString(params) {
  return Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
}

/**
 * Validate API key is set
 * @returns {boolean}
 */
function isApiKeyValid() {
  return SPOONACULAR_API_KEY !== "YOUR_API_KEY_HERE" && SPOONACULAR_API_KEY.length > 20;
}

// ============================================
// VALIDATION & INITIALIZATION
// ============================================

/**
 * Initialize and validate configuration
 */
function initializeConfig() {
  console.log("%c⚙️ INITIALIZING CONFIG", "color: #8b5cf6; font-weight: bold; font-size: 13px;");
  
  // Check API key
  const apiKeyValid = isApiKeyValid();
  console.log(
    `%c${apiKeyValid ? "✓" : "✗"} API Key Status`,
    `color: ${apiKeyValid ? "#10b981" : "#ef4444"}; font-weight: bold;`,
    apiKeyValid ? "Valid and configured" : "NOT configured"
  );
  
  if (apiKeyValid) {
    const maskedKey = SPOONACULAR_API_KEY.substring(0, 8) + "***" + SPOONACULAR_API_KEY.substring(-4);
    console.log("%c  → Key:", "color: #06b6d4;", maskedKey);
  }
  
  // Check API endpoints
  console.log("%c📍 API Endpoints Configured", "color: #3b82f6; font-weight: bold;");
  console.log("  → findByIngredients:", API_ENDPOINTS.findByIngredients);
  console.log("  → searchRecipes:", API_ENDPOINTS.searchRecipes);
  
  // Check ingredient categories
  const categories = Object.keys(INGREDIENT_CATEGORIES);
  console.log(`%c🥘 Ingredient Categories`, "color: #3b82f6; font-weight: bold;");
  console.log(`  → ${categories.length} categories loaded:`, categories);
  
  // Check app config
  console.log("%c⚡ App Configuration", "color: #3b82f6; font-weight: bold;");
  console.log(
    `  → Recipes per page: ${APP_CONFIG.recipesPerPage}`,
    `\n  → Debounce delay: ${APP_CONFIG.debounceDelay}ms`,
    `\n  → Max ingredients: ${APP_CONFIG.maxIngredients}`
  );
  
  console.log("%c✓ Config initialized successfully!", "color: #10b981; font-weight: bold; font-size: 13px;");
}

// ============================================
// EXPORT / MAKE AVAILABLE
// ============================================
// Initialize on load
initializeConfig();

// Export key values and helper functions for modules
export {
  SPOONACULAR_API_KEY,
  SPOONACULAR_API_BASE,
  API_ENDPOINTS,
  APP_CONFIG,
  INGREDIENT_CATEGORIES,
  buildQueryString,
  isApiKeyValid,
  initializeConfig,
};
