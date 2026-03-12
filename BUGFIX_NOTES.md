# Bug Fixes Applied

**Fixed Issues:**
1. **Recipe Modal "Failed to load"** → Now detects local IDs (1001+) & uses LOCAL_RECIPES data (no API call needed)
2. **Exported LOCAL_RECIPES** from src/recipes.js for dynamic import in modals
3. **Graceful fallback** in showRecipeModal()

**Next Steps (if needed):**
- Add recipes for Potato/Carrot/Apple/etc. (LOCAL_RECIPES missing them)
- Test: Click Tomato recipe → modal shows local details
- Refresh http://localhost:5176

Dev server auto-reloaded changes ✅
