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

/***/ "./src/styles/all.scss":
/*!*****************************!*\
  !*** ./src/styles/all.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_example/./src/styles/all.scss?");

/***/ }),

/***/ "./src/components/setTask.component.js":
/*!*********************************************!*\
  !*** ./src/components/setTask.component.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setTask\": () => (/* binding */ setTask)\n/* harmony export */ });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\r\n\r\nclass setTask extends _core_component__WEBPACK_IMPORTED_MODULE_0__.Component {\r\n   constructor(id) {\r\n      super(id);\r\n      this.status = 0;\r\n      // this.data = localStorage.getItem(\"mylist\");\r\n   }\r\n   init() {\r\n      // if (data) {\r\n      this.$id.querySelector(\".header-todo__btn\").addEventListener(\"click\", this.add.bind(this));\r\n      // }\r\n      // console.log(this.$id.querySelector(\".header-todo__btn\"));\r\n   }\r\n\r\n   add() {\r\n      let inputValue = this.$id.querySelector(\".input\").value;\r\n      let dataLocal = localStorage.getItem(\"mylist\");\r\n      let arrData = [\r\n         {\r\n            task: inputValue,\r\n            status: this.status,\r\n         },\r\n      ];\r\n\r\n      console.log(dataLocal);\r\n      if (dataLocal) {\r\n         let arrGetData = JSON.parse(dataLocal);\r\n\r\n         let newTask = {\r\n            task: inputValue,\r\n            status: this.status,\r\n         };\r\n         console.log(arrGetData);\r\n         let addData = arrGetData.push(newTask);\r\n\r\n         localStorage.setItem(\"mylist\", JSON.stringify(addData));\r\n      } else {\r\n         console.log(2);\r\n         localStorage.setItem(\"mylist\", JSON.stringify(arrData));\r\n      }\r\n   }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_example/./src/components/setTask.component.js?");

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n   constructor(id) {\r\n      this.$id = document.getElementById(id);\r\n      this.init();\r\n   }\r\n   init() {}\r\n}\r\n\n\n//# sourceURL=webpack://webpack_example/./src/core/component.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/all.scss */ \"./src/styles/all.scss\");\n/* harmony import */ var _components_setTask_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/setTask.component */ \"./src/components/setTask.component.js\");\n\r\n\r\n\r\n\r\nnew _components_setTask_component__WEBPACK_IMPORTED_MODULE_1__.setTask(\"todo-set\");\r\n\n\n//# sourceURL=webpack://webpack_example/./src/main.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;