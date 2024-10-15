/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _diluc_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diluc.png */ \"./src/diluc.png\");\n/* harmony import */ var _noelle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noelle.png */ \"./src/noelle.png\");\n\r\n\r\n\r\nconst about = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    content.style.display = \"flex\";\r\n    content.style.flexDirection = \"column\";\r\n    content.style.alignItems = \"center\";\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"About Us\";\r\n    content.append(title);\r\n\r\n    const manager_picture = document.createElement(\"img\");\r\n    manager_picture.src = _diluc_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    manager_picture.alt = \"Diluc\";\r\n    content.append(manager_picture);\r\n\r\n    const manager = document.createElement(\"h2\");\r\n    manager.textContent = \"Manager: Diluc\";\r\n    content.append(manager);\r\n\r\n    const worker_picture = document.createElement(\"img\");\r\n    worker_picture.src = _noelle_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    worker_picture.alt = \"Noelle\";\r\n    content.append(worker_picture);\r\n\r\n    const worker = document.createElement(\"h2\");\r\n    worker.textContent = \"Worker: Noelle\";\r\n    content.append(worker);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://odin-restaurant/./src/about.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _kfc_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kfc.png */ \"./src/kfc.png\");\n\r\n\r\nconst home = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    content.style.display = \"flex\";\r\n    content.style.flexDirection = \"column\";\r\n    content.style.alignItems = \"center\";\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Welcome to my restaurant!\";\r\n    content.append(title);\r\n\r\n    const mainImg = document.createElement(\"img\");\r\n    mainImg.src = _kfc_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    mainImg.alt = \"Picture of a guy stealing a cutout of Noelle\";\r\n    content.append(mainImg);\r\n\r\n    const welcome = document.createElement(\"h2\");\r\n    welcome.textContent = \"My restaurant is the best! See what this guy is doing!\";\r\n    content.append(welcome);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://odin-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector(\"#content\");\r\n\r\n(0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\ndocument.querySelector('button:nth-child(1)').addEventListener('click', () => {\r\n    content.textContent = '';\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\ndocument.querySelector('button:nth-child(2)').addEventListener('click', () => {\r\n    content.textContent = '';\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n\r\ndocument.querySelector('button:nth-child(3)').addEventListener('click', () => {\r\n    content.textContent = '';\r\n    (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Item_Golden_Fried_Chicken_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item_Golden_Fried_Chicken.webp */ \"./src/Item_Golden_Fried_Chicken.webp\");\n/* harmony import */ var _Item_Golden_Chicken_Burger_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item_Golden_Chicken_Burger.webp */ \"./src/Item_Golden_Chicken_Burger.webp\");\n\r\n\r\n\r\nconst menu = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    content.style.display = \"flex\";\r\n    content.style.flexDirection = \"column\";\r\n    content.style.alignItems = \"center\";\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = \"Menu\";\r\n    content.append(title);\r\n\r\n    const picture1 = document.createElement(\"img\");\r\n    picture1.src = _Item_Golden_Fried_Chicken_webp__WEBPACK_IMPORTED_MODULE_0__;\r\n    picture1.alt = \"Golden Fried Chicken\";\r\n    content.append(picture1);\r\n\r\n    const item1 = document.createElement(\"h2\");\r\n    item1.textContent = \"Golden Fried Chicken\";\r\n    content.append(item1);\r\n\r\n    const picture2 = document.createElement(\"img\");\r\n    picture2.src = _Item_Golden_Chicken_Burger_webp__WEBPACK_IMPORTED_MODULE_1__;\r\n    picture2.alt = \"Golden Chicken Burger\";\r\n    content.append(picture2);\r\n\r\n    const item2 = document.createElement(\"h2\");\r\n    item2.textContent = \"Golden Chicken Burger\";\r\n    content.append(item2);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://odin-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/Item_Golden_Chicken_Burger.webp":
/*!*********************************************!*\
  !*** ./src/Item_Golden_Chicken_Burger.webp ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"77cdb34b0e33a446bc82.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/Item_Golden_Chicken_Burger.webp?");

/***/ }),

/***/ "./src/Item_Golden_Fried_Chicken.webp":
/*!********************************************!*\
  !*** ./src/Item_Golden_Fried_Chicken.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7eef43c915f8c822cefd.webp\";\n\n//# sourceURL=webpack://odin-restaurant/./src/Item_Golden_Fried_Chicken.webp?");

/***/ }),

/***/ "./src/diluc.png":
/*!***********************!*\
  !*** ./src/diluc.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a6a0e52fad2ded9f99e7.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/diluc.png?");

/***/ }),

/***/ "./src/kfc.png":
/*!*********************!*\
  !*** ./src/kfc.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b2161b59f1129228d78.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/kfc.png?");

/***/ }),

/***/ "./src/noelle.png":
/*!************************!*\
  !*** ./src/noelle.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb55cb52655b33799652.png\";\n\n//# sourceURL=webpack://odin-restaurant/./src/noelle.png?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;