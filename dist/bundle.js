/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script-1.js":
/*!*************************!*\
  !*** ./src/script-1.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var message = __webpack_require__(/*! ./script-2 */ \"./src/script-2.js\");\nvar _require = __webpack_require__(/*! ./script-3 */ \"./src/script-3.js\"),\n  getMessage = _require.getMessage,\n  getGreeting = _require.getGreeting;\nalert(message);\nconsole.log(getMessage());\nconsole.log(getGreeting());\nvar school = \"Bathpahge ICT Center\";\nconsole.log(school);\n\n//# sourceURL=webpack://webpack-playlist/./src/script-1.js?");

/***/ }),

/***/ "./src/script-2.js":
/*!*************************!*\
  !*** ./src/script-2.js ***!
  \*************************/
/***/ ((module) => {

eval("module.exports = \"Welcome to Webpack Class dear student.\";\n\n//# sourceURL=webpack://webpack-playlist/./src/script-2.js?");

/***/ }),

/***/ "./src/script-3.js":
/*!*************************!*\
  !*** ./src/script-3.js ***!
  \*************************/
/***/ ((module) => {

eval("var message = \"Welcome to Bathphage ICT Center\";\nvar greeting = \"Hello! our amiable student\";\nfunction getMessage() {\n  return message;\n}\nfunction getGreeting() {\n  return greeting;\n}\nmodule.exports = {\n  getMessage: getMessage,\n  getGreeting: getGreeting\n};\n\n//# sourceURL=webpack://webpack-playlist/./src/script-3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script-1.js");
/******/ 	
/******/ })()
;