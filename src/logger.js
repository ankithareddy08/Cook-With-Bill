/**
 * DEBUG LOGGER - Comprehensive logging system for Cook with Bill
 * Provides colored console logs for debugging
 */

const DEBUG_MODE = true; // Set to false to disable all debug logs

// Color codes for console
const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

// Browser console styles
const CONSOLE_STYLES = {
  success: "color: #10b981; font-weight: bold; font-size: 12px;",
  error: "color: #ef4444; font-weight: bold; font-size: 12px;",
  warning: "color: #f59e0b; font-weight: bold; font-size: 12px;",
  info: "color: #3b82f6; font-weight: bold; font-size: 12px;",
  debug: "color: #8b5cf6; font-weight: bold; font-size: 12px;",
  api: "color: #06b6d4; font-weight: bold; font-size: 12px;",
  state: "color: #ec4899; font-weight: bold; font-size: 12px;",
};

/**
 * Logger Object with multiple logging methods
 */
const Logger = {
  /**
   * Success log
   */
  success(message, data = null) {
    if (!DEBUG_MODE) return;
    console.log(
      "%c✓ SUCCESS",
      CONSOLE_STYLES.success,
      message,
      data ? "\n→ Data:" : "",
      data || ""
    );
  },

  /**
   * Error log
   */
  error(message, error = null) {
    if (!DEBUG_MODE) return;
    console.error(
      "%c✗ ERROR",
      CONSOLE_STYLES.error,
      message,
      error ? "\n→ Details:" : "",
      error || ""
    );
  },

  /**
   * Warning log
   */
  warning(message, data = null) {
    if (!DEBUG_MODE) return;
    console.warn(
      "%c⚠ WARNING",
      CONSOLE_STYLES.warning,
      message,
      data ? "\n→ Data:" : "",
      data || ""
    );
  },

  /**
   * Info log
   */
  info(message, data = null) {
    if (!DEBUG_MODE) return;
    console.log(
      "%c ℹ INFO",
      CONSOLE_STYLES.info,
      message,
      data ? "\n→ Data:" : "",
      data || ""
    );
  },

  /**
   * Debug log
   */
  debug(message, data = null) {
    if (!DEBUG_MODE) return;
    console.log(
      "%c► DEBUG",
      CONSOLE_STYLES.debug,
      message,
      data ? "\n→ Data:" : "",
      data || ""
    );
  },

  /**
   * API call log
   */
  api(method, url, params = null, response = null) {
    if (!DEBUG_MODE) return;
    console.log(
      `%c🔌 API ${method}`,
      CONSOLE_STYLES.api,
      `\n📍 URL: ${url}`,
      params ? `\n📦 Params: ${JSON.stringify(params)}` : "",
      response ? `\n✓ Response: ${JSON.stringify(response, null, 2)}` : ""
    );
  },

  /**
   * State change log
   */
  state(label, oldState, newState) {
    if (!DEBUG_MODE) return;
    console.log(
      "%c⚙ STATE CHANGE",
      CONSOLE_STYLES.state,
      `\n${label}`,
      `\nOld:`, oldState,
      `\nNew:`, newState
    );
  },

  /**
   * Performance timer
   */
  timer(label) {
    if (!DEBUG_MODE) return;
    const startTime = performance.now();
    return {
      end() {
        const endTime = performance.now();
        const duration = (endTime - startTime).toFixed(2);
        console.log(
          `%c⏱ TIMING: ${label}`,
          CONSOLE_STYLES.debug,
          `took ${duration}ms`
        );
      },
    };
  },

  /**
   * Table log for data
   */
  table(label, data) {
    if (!DEBUG_MODE) return;
    console.log(`%c📊 ${label}`, CONSOLE_STYLES.info);
    console.table(data);
  },

  /**
   * Group logs
   */
  group(label, fn) {
    if (!DEBUG_MODE) return;
    console.group(`%c📂 ${label}`, CONSOLE_STYLES.info);
    fn();
    console.groupEnd();
  },
};

// Export for use in other files
console.log(
  "%c🔧 DEBUG LOGGER INITIALIZED",
  CONSOLE_STYLES.success,
  "Debug mode is ON. Set DEBUG_MODE=false in logger.js to disable."
);

console.log(
  "%c📋 Available Methods:",
  CONSOLE_STYLES.info,
  "\n• Logger.success(message, data)",
  "\n• Logger.error(message, error)",
  "\n• Logger.warning(message, data)",
  "\n• Logger.info(message, data)",
  "\n• Logger.debug(message, data)",
  "\n• Logger.api(method, url, params, response)",
  "\n• Logger.state(label, oldState, newState)",
  "\n• Logger.timer(label)",
  "\n• Logger.table(label, data)",
  "\n• Logger.group(label, function)"
);

// named exports
export { Logger, DEBUG_MODE, COLORS, CONSOLE_STYLES };
