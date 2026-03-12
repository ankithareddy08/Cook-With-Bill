📋 COOK WITH BILL - COMPLETE DEBUG SETUP
==========================================

🎯 PROBLEM STATEMENT:
Recipe cards are not displaying when selecting ingredients with Spoonacular API.


🔧 SOLUTION PROVIDED:
Three-level debugging system to identify and fix the issue.


📁 PROJECT FILES (8 total):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. index.html (MAIN APP)
   - Recipe finder interface
   - Glassmorphic design
   - Ingredient selection
   - Recipe grid display
   - Modal for recipe details

2. config.js (CONFIGURATION module)
   - Loads values from `.env` via Vite (`import.meta.env.VITE_SPOONACULAR_API_KEY`)
   - API Endpoints
   - Ingredient categories
   - App settings
   - ENHANCED: Initialization logging
   - Exported functions/constants for modular imports

3. app.js (MAIN LOGIC)
   - Ingredient selection handler
   - Recipe API fetching
   - Recipe display/grid
   - Recipe detail modal
   - ENHANCED: 8-step detailed logging in fetchRecipesByIngredients()
   - ENHANCED: 6-step detailed logging in displayRecipes()

4. logger.js (DEBUG SYSTEM)
   - Logger.success() - Green logs
   - Logger.error() - Red error logs
   - Logger.info() - Blue info logs
   - Logger.debug() - Purple debug logs
   - Logger.api() - API call tracking
   - Logger.state() - State change tracking
   - Logger.timer() - Performance monitoring
   - Logger.table() - Data visualization

5. styles.css (DESIGN)
   - Glassmorphism effects
   - Smooth animations
   - Hover effects
   - Loading states
   - Responsive design

6. test-api.html ⭐ (QUICK TEST)
   - Direct API testing
   - Pre-built test templates
   - Custom ingredient input
   - Real-time responses
   - Config info display
   → START HERE for quick diagnosis

7. debug.html ⭐ (DIAGNOSTICS)
   - System health checks
   - Component verification
   - API key validation
   - DOM element detection
   - Direct API test button
   → USE FOR detailed verification

8. QUICK_FIX.txt (ACTION GUIDE)
   - Step-by-step instructions
   - Quick fix checklist
   - Success indicators
   - File references
   → FOLLOW THIS for systematic debugging


🚀 DEVELOPMENT & USAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Setup (once per machine):**
1. Clone repository / open workspace
2. Run `npm install` to install dependencies
3. Create a `.env` file at project root containing:
   ```
   VITE_SPOONACULAR_API_KEY=YOUR_API_KEY_HERE
   ```
   Replace `YOUR_API_KEY_HERE` with your Spoonacular key.

**Start development server:**
```bash
npm run dev
```
Open http://localhost:5173/ in the browser. Vite injects the API key from `.env` and supports hot module reload.

**Testing tools:**
- `index.html` – Main application (module entry `src/app.js`).
- `debug.html` – Diagnostic dashboard powered by `src/debug.js`.
- `test-api.html` – API tester powered by `src/test-api.js`.

Steps to reproduce recipe lookups:
1. Open `index.html` from Vite server.
2. Click ingredient pills or use search.
3. Watch browser console for detailed logs (8-step API trace).

Note: Because the scripts are ES modules, pages must be served via Vite or a static server; direct file:// access will not work.


📊 DEBUGGING LEVELS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Level 1 - SUPERFICIAL (test-api.html)
  Time: 30 seconds
  What: Quick API test in isolation
  Identifies: Is API working at all?

Level 2 - DIAGNOSTIC (debug.html)
  Time: 1 minute
  What: Check all components
  Identifies: Which component is broken?

Level 3 - DEEP (Browser F12 Console)
  Time: 2-5 minutes
  What: Step-by-step execution trace
  Identifies: Exact point of failure

Level 4 - NETWORK (Browser Network Tab)
  Time: 2-5 minutes
  What: HTTP request/response details
  Identifies: API response issues


🔍 WHAT TO LOOK FOR:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

In Console (F12 → Console):
  ✓ "Config loaded successfully"
  ✓ "App initialized successfully"
  ✓ "Step 1: Validate inputs" (when selecting ingredient)
  ✓ "Step 4: Response received" (should show status: 200)
  ✓ "Step 6: JSON parsed successfully" (should show recipe count)
  ✓ "Displayed X recipes" (recipes should appear on page)
  ✓ After clicking a recipe card you'll see logs from `fetchRecipeDetails` and "Recipe details loaded" (if request succeeds)

**Ingredient filtering:** when only one ingredient is selected, the app now filters the results to ensure the chosen ingredient appears in each recipe's usedIngredients list.

**API quota notice:** the app watches for Spoonacular 402 errors (daily quota exceeded) and displays a clear notification to the user instead of a generic failure message.  See console logs for details.

**Supercook-style UX:**
- You can type a custom ingredient in the sidebar and press Enter to add it.
- Selected ingredients are displayed at the top of the sidebar for quick removal, similar to Supercook.
- Recipes are sorted by how many of your ingredients they use.
- Cards list which ingredients are missing; clicking a missing ingredient adds it as a selected ingredient and refreshes results.

**Recipe modal:** raw API endpoint used for details; if details fail to load you’ll see an error notification and logs showing the URL or network issue.
In Network Tab (F12 → Network):
  ✓ Request to api.spoonacular.com
  ✓ Status code: 200 OK
  ✓ Response is JSON array with recipe objects
  ✓ Each recipe has: id, title, image, usedIngredients, etc.

On the Page:
  ✓ Selected ingredient pills show pink/active state
  ✓ Recipe cards appear after API call
  ✓ Cards have images, titles, ingredient count
  ✓ Clicking cards opens detail modal


⚡ IF SOMETHING BREAKS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Browser Shows Error:
  → Check red messages in F12 Console
  → Copy-paste error text
  → Check which file it's from

API Returns 401/400:
  → API key is invalid
  → Get new key: https://spoonacular.com/food-api
  → Update config.js line 12

No Network Request Shows:
  → Ingredient selection not triggering
  → Check: Is pill button being clicked?
  → Check: Is handleIngredientSelect() being called?

Recipes Don't Appear But Logs Say "Fetched 12 Recipes":
  → displayRecipes() not updating DOM
  → Grid element not found
  → CSS hiding the cards


🎓 LEARNING RESOURCES:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Spoonacular API Docs:
  https://spoonacular.com/food-api/docs

Find by Ingredients Endpoint:
  /recipes/findByIngredients
  Returns: Array of recipes matching ingredients

Search Recipes Endpoint:
  /recipes/complexSearch
  Returns: Object with {results: Array}

Get Recipe Details Endpoint:
  /recipes/{id}/information
  Returns: Single recipe object with all details


💾 MEMORY FILES FOR FUTURE REFERENCE:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project Overview:
  /memories/session/recipe_app_steps.md – migration plan and changes
  /memories/session/cook-bill-progress.md – general progress notes
  /memories/session/debugging-guide.md – debugging system details

  - Current status
  - Completed tasks
  - Files created/modified
  - Next steps

Debugging Guide:
  /memories/session/debugging-guide.md
  - Troubleshooting tree
  - Common issues
  - Debug information format
  - Performance notes


✅ NEXT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Open QUICK_FIX.txt and follow the checklist
2. Run test-api.html to verify API works
3. Run debug.html to verify components
4. Check browser console while selecting ingredients
5. Note which step logger shows in console
6. Share results and we'll fix it

Once debugging complete:
  → Fix the identified issue
  → Test functionality
  → Enhance animations
  → Add more features


🎉 YOU'VE GOT THIS!
Everything is set up for success. Time to debug! 🚀

Questions? Check the memory files or QUICK_FIX.txt
