// test-api.js - module for API testing page
import { SPOONACULAR_API_KEY } from './config.js';

// copy utility functions and event handlers from previous inline script

// handle dropdown change
const select = document.getElementById('testType');
select.addEventListener('change', function(e) {
    const customInput = document.getElementById('customInput');
    if (e.target.value.startsWith('custom')) {
        customInput.style.display = 'block';
    } else {
        customInput.style.display = 'none';
    }
});

function showStatus(message, type) {
    const el = document.getElementById('status');
    el.innerHTML = `<div class="status ${type}">${message}</div>`;
    el.style.display = 'block';
}

function showResult(content) {
    const el = document.getElementById('result');
    el.textContent = content;
    el.style.display = 'block';
}

function clearResult() {
    document.getElementById('status').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}

async function runTest() {
    clearResult();
    showStatus('⏳ Running test...', 'loading');
    
    const testType = document.getElementById('testType').value;
    let url = '';
    
    try {
        switch(testType) {
            case 'ingredients':
                url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=tomato&number=5`;
                break;
            case 'search':
                url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=pasta&number=5`;
                break;
            case 'details':
                url = `https://api.spoonacular.com/recipes/716627/information?apiKey=${SPOONACULAR_API_KEY}`;
                break;
            case 'custom-ingredients':
                const ingredients = document.getElementById('customValue').value;
                if (!ingredients) {
                    showStatus('❌ No ingredients entered', 'error');
                    return;
                }
                url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=${encodeURIComponent(ingredients)}&number=10`;
                break;
            case 'custom-search':
                const query = document.getElementById('customValue').value;
                if (!query) {
                    showStatus('❌ No search query entered', 'error');
                    return;
                }
                url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${SPOONACULAR_API_KEY}&query=${encodeURIComponent(query)}&number=10`;
                break;
        }
        
        showStatus('⏳ Fetching from API...', 'loading');
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
            showStatus(`❌ API Error: ${response.status}`, 'error');
            showResult(JSON.stringify(data, null, 2));
            return;
        }
        
        const count = Array.isArray(data) ? data.length : (data.results?.length || 'N/A');
        showStatus(`✓ Success! Got response with ${count} items`, 'success');
        showResult(JSON.stringify(data, null, 2));
        
    } catch (error) {
        showStatus(`❌ Error: ${error.message}`, 'error');
    }
}

// expose to global for button handlers
window.runTest = runTest;
window.clearResult = clearResult;
