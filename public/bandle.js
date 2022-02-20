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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setTask\": () => (/* binding */ setTask)\n/* harmony export */ });\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/component */ \"./src/core/component.js\");\n\r\n\r\nclass setTask extends _core_component__WEBPACK_IMPORTED_MODULE_0__.Component {\r\n   constructor(id) {\r\n      super(id);\r\n   }\r\n   init() {\r\n      this.status = 0; // Статус задачи по умолчанию\r\n \r\n      this.$list = document.getElementById(\"todo-list\"); // Блок со списком\r\n \r\n      // Добавление задачи\r\n      this.$id.querySelector(\".header-todo__btn\").addEventListener(\"click\", this.addTask.bind(this));\r\n      this.$list.addEventListener(\"click\", this.done.bind(this))\r\n\r\n      this.action(this.$list);\r\n     \r\n   }\r\n\r\n\r\n   getDataLocal(){\r\n      return localStorage.getItem(\"mylist\")\r\n   }\r\n\r\n   setDataLocal(data){\r\n      localStorage.setItem(\"mylist\", JSON.stringify(data))\r\n   }\r\n\r\n   jsonParseLocal(){\r\n     return JSON.parse(this.getDataLocal())\r\n   }\r\n\r\n   addTask() {\r\n\r\n      const inputValue = this.$id.querySelector(\".input\");\r\n      const dataList = this.jsonParseLocal();\r\n      let idTask = 1  \r\n\r\n      dataList === null ? idTask : idTask = dataList.length + 1\r\n      \r\n      if(inputValue.value){\r\n         const newTask = {\r\n            id: idTask,\r\n            task: inputValue.value,\r\n            status: this.status,\r\n         }\r\n\r\n         dataList \r\n            ? this.setDataLocal([...dataList, newTask])\r\n            : this.setDataLocal([newTask])\r\n         \r\n         this.action(this.$list);\r\n         inputValue.value = \"\";\r\n\r\n      }else{\r\n         alert('Specify a task!')\r\n      }\r\n   }\r\n\r\n   \r\n\r\n   // Вывод списка из Localstorage \r\n   action(list) {\r\n     \r\n      if(this.getDataLocal()){\r\n         list.innerHTML = ''\r\n         list = this.jsonParseLocal()\r\n         list.forEach((item, index) => {\r\n      \r\n            let statusTask = item.status == 1 ? \"ok\" : ''; \r\n            let status = item.status == 1 ? \"_ev\" : ''; \r\n            let taskItem = `\r\n            <li data-id=\"${index}\" class=\"todo__item ${statusTask}\">\r\n               <div class=\"_text\" ><div>${item.task}</div></div>\r\n               <label class=\"_next ${status}\"></label>\r\n               <div class=\"_del\"></div>\r\n            </li>`;\r\n         \r\n            this.$list.insertAdjacentHTML(\"afterbegin\", taskItem);\r\n         });\r\n      }else{\r\n         list.innerHTML = '<div class=\"post__null\">the list is empty</div>'\r\n      }\r\n   }\r\n\r\n   done(e) {\r\n\r\n      let list = this.jsonParseLocal()\r\n      const el = e.target.classList\r\n      const elParent = e.target.parentElement\r\n\r\n      if (el.contains(\"_next\")) {\r\n   \r\n         elParent.classList.toggle(\"ok\");\r\n         el.toggle(\"_ev\");\r\n\r\n         elParent.classList.contains(\"ok\")\r\n            ? list[elParent.dataset.id].status = 1\r\n            : list[elParent.dataset.id].status = 0;\r\n\r\n        return  this.setDataLocal(list)\r\n      }\r\n\r\n      if (el.contains(\"_del\")) {\r\n\r\n         list.splice([elParent.dataset.id],1)\r\n         let clone = elParent.cloneNode(true)\r\n\r\n         const productImageFlyTop = elParent.getBoundingClientRect().top;\r\n         const productImageFlyLeft = elParent.getBoundingClientRect().left;\r\n\r\n         clone.style.cssText = \r\n            `top: ${productImageFlyTop}px;\r\n            left: ${productImageFlyLeft}px;\r\n            transition: all 10s ease 0s;\r\n            width: ${elParent.offsetWidth}px; `;\r\n\r\n         document.body.append(clone)\r\n\r\n         const basket = document.querySelector('.basket')\r\n         const cartFlyLeft = basket.getBoundingClientRect().left;\r\n         const cartFlyTop = basket.getBoundingClientRect().top;\r\n\r\n         clone.style.cssText = \r\n            `position: fixed;\r\n            top:${cartFlyTop}px;\r\n            left: ${cartFlyLeft}px;\r\n            z-index: 10;\r\n            width: 0;\r\n            opacity:0;\r\n            transition: all 0.4s ease 0s;`;\r\n \r\n         this.setDataLocal(list)\r\n         if(this.getDataLocal() == '[]')  localStorage.removeItem('mylist') \r\n         this.action(this.$list) \r\n      } \r\n   }\r\n}\r\n\n\n//# sourceURL=webpack://webpack_example/./src/components/setTask.component.js?");

/***/ }),

/***/ "./src/core/component.js":
/*!*******************************!*\
  !*** ./src/core/component.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\r\n   constructor(id) {\r\n      this.$id = document.getElementById(id);\r\n\r\n      this.init();\r\n   }\r\n   init() {}\r\n}\r\n\n\n//# sourceURL=webpack://webpack_example/./src/core/component.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_all_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/all.scss */ \"./src/styles/all.scss\");\n/* harmony import */ var _components_setTask_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/setTask.component */ \"./src/components/setTask.component.js\");\n\r\n\r\n\r\n\r\nnew _components_setTask_component__WEBPACK_IMPORTED_MODULE_1__.setTask('todo');\r\n\n\n//# sourceURL=webpack://webpack_example/./src/main.js?");

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