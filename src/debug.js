// debug.js - module version of debug console logic
import { Logger } from './logger.js';
import { isApiKeyValid, SPOONACULAR_API_KEY } from './config.js';
import { appState, domElements, fetchRecipesByIngredients } from './app.js';

let logOutput = [];

function addLog(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    const colors = {
        'success': '✓',
        'error': '✗',
        'warn': '⚠',
        'info': 'ℹ'
    };
    const line = `[${timestamp}] ${colors[type] || '→'} ${message}`;
    logOutput.push(line);
    updateLogOutput();
}

function updateLogOutput() {
    const el = document.getElementById('log-output');
    el.innerHTML = logOutput.map(line =>
        `<div class="log-line">${line}</div>`
    ).join('');
    el.scrollTop = el.scrollHeight;
}

function clearLogs() {
    logOutput = [];
    updateLogOutput();
    addLog('Logs cleared', 'info');
}

function setCheck(checkId, status, message) {
    const el = document.getElementById(checkId);
    if (!el) return;
    
    const indicator = el.querySelector('.indicator');
    const classes = el.classList;
    classes.remove('check-pass', 'check-fail', 'check-warn');
    
    if (status === 'pass') {
        indicator.textContent = '✓';
        classes.add('check-pass');
    } else if (status === 'fail') {
        indicator.textContent = '✗';
        classes.add('check-fail');
    } else if (status === 'warn') {
        indicator.textContent = '⚠';
        classes.add('check-warn');
    }
    
    addLog(message, status);
}

function runDiagnostics() {
    addLog('=== STARTING DIAGNOSTICS ===', 'info');
    
    // Check 1: JavaScript
    setCheck('check-js', 'pass', 'JavaScript is enabled');
    
    // Check 2: Logger
    if (typeof Logger !== 'undefined') {
        setCheck('check-logger', 'pass', 'Logger object is available');
    } else {
        setCheck('check-logger', 'fail', 'Logger object NOT found');
    }
    
    // Check 3: Config
    if (typeof isApiKeyValid === 'function') {
        setCheck('check-config', 'pass', 'Config loaded successfully');
    } else {
        setCheck('check-config', 'fail', 'Config NOT loaded');
    }
    
    // Check 4: API Key
    if (typeof isApiKeyValid === 'function') {
        const isValid = isApiKeyValid();
        if (isValid) {
            document.getElementById('api-key-status').textContent = '✓ Valid';
            setCheck('check-api-key', 'pass', 'API key is valid');
        } else {
            document.getElementById('api-key-status').textContent = '✗ Invalid';
            setCheck('check-api-key', 'fail', 'API key is NOT valid');
        }
    }
    
    // Check 5: App State
    if (typeof appState !== 'undefined') {
        setCheck('check-app', 'pass', 'App state initialized');
        addLog(`Selected ingredients: ${appState.selectedIngredients.length}`, 'info');
        addLog(`Stored recipes: ${appState.allRecipes.length}`, 'info');
    } else {
        setCheck('check-app', 'fail', 'App state NOT initialized');
    }
    
    // Check 6: DOM
    if (typeof domElements !== 'undefined' && domElements.recipeGrid) {
        const count = document.querySelectorAll('article[data-recipe-id]').length;
        document.getElementById('dom-count').textContent = count;
        setCheck('check-dom', 'pass', `Found ${count} recipe cards in DOM`);
    } else {
        setCheck('check-dom', 'fail', 'Recipe grid NOT found in DOM');
    }
    
    addLog('=== DIAGNOSTICS COMPLETE ===', 'info');
}

async function testApiCall() {
    addLog('=== TESTING API CALL ===', 'info');
    
    if (typeof isApiKeyValid !== 'function') {
        addLog('Cannot test: app not loaded', 'error');
        return;
    }
    
    if (!isApiKeyValid()) {
        addLog('Cannot test: API key invalid', 'error');
        return;
    }
    
    try {
        addLog('Making test API call...', 'info');
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${SPOONACULAR_API_KEY}&ingredients=tomato&number=5`;
        
        const response = await fetch(url);
        addLog(`Response status: ${response.status} ${response.statusText}`, 'info');
        
        if (!response.ok) {
            const text = await response.text();
            addLog(`Response error: ${text}`, 'error');
            return;
        }
        
        const data = await response.json();
        addLog(`✓ API returned ${data.length} recipes`, 'success');
        addLog(`Sample recipe: ${data[0]?.title || 'N/A'}`, 'info');
    } catch (error) {
        addLog(`API test failed: ${error.message}`, 'error');
    }
    
    addLog('=== API TEST COMPLETE ===', 'info');
}

// Auto run on load
window.addEventListener('load', function() {
    addLog('Debug console loaded', 'success');
    runDiagnostics();
});

// expose functions globally for inline event handlers
window.runDiagnostics = runDiagnostics;
window.testApiCall = testApiCall;
window.clearLogs = clearLogs;
