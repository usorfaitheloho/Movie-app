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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  /* primary colors */\\r\\n  --black: #000;\\r\\n  --white: #fff;\\r\\n  --gray: #d3d3d3;\\r\\n  --red: red;\\r\\n}\\r\\n\\r\\n/* global styling  */\\r\\n*,\\r\\n::before,\\r\\n::after {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  scroll-behavior: smooth;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 1rem;\\r\\n  font-family: 'poppins', sans-serif;\\r\\n  font-style: normal;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  background-color: var(--black);\\r\\n  overflow-x: hidden;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n/* header styling starts here */\\r\\n\\r\\n.nav-element {\\r\\n  width: 100%;\\r\\n  padding: 5% 8%;\\r\\n  z-index: 2;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 120px;\\r\\n}\\r\\n\\r\\n.nav-items {\\r\\n  display: flex;\\r\\n  gap: 10px;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav-items li {\\r\\n  font-size: 0.9rem;\\r\\n  line-height: 20px;\\r\\n  color: var(--white);\\r\\n  padding: 8px;\\r\\n  border-radius: 10px;\\r\\n  text-align: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-items li:hover {\\r\\n  color: var(--red);\\r\\n}\\r\\n\\r\\n/* main section styling starts here */\\r\\n\\r\\nmain {\\r\\n  width: 85%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nmain h1 {\\r\\n  color: var(--white);\\r\\n  padding: 20px 0;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.movies {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 50px;\\r\\n  flex-direction: column;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.movie {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 2px 2px 2px rgba(58, 57, 57, 0.2);\\r\\n  border-radius: 10px;\\r\\n  flex-wrap: wrap;\\r\\n  transition: all 1s ease;\\r\\n}\\r\\n\\r\\n.movie:hover {\\r\\n  transform: scale(1.05);\\r\\n}\\r\\n\\r\\n.movie img {\\r\\n  height: 150px;\\r\\n  width:200px;\\r\\n}\\r\\n\\r\\n.movie-description {\\r\\n  display: flex;\\r\\n  justify-content: flex-start;\\r\\n  color: var(--white);\\r\\n  font-size: 0.8rem;\\r\\n  gap: 20px;\\r\\n  padding: 0 10px;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background-color: var(--white);\\r\\n  padding: 7px 10px;\\r\\n  border-radius: 5px;\\r\\n  color: var(--black);\\r\\n  outline: none;\\r\\n  box-shadow: 1px 1px 2px rgba(248, 246, 246, 0.2);\\r\\n}\\r\\n\\r\\n.footer-element{\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  padding: 20px 0 0 20px;\\r\\n  height: 40px;\\r\\n  bottom: 0;\\r\\n  left: 0;\\r\\n  font-weight: bolder;\\r\\n  font-size: 15px;\\r\\n  color: var(--white);\\r\\n  margin-top:20px ;\\r\\n  background-color: rgba(255, 0, 0, 0.678);\\r\\n}\\r\\n\\r\\n.comment-section{\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  padding: 20px 0;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  gap: 20px;\\r\\n  flex-direction: column;\\r\\n  box-shadow: 2px 2px 2px rgba(58, 57, 57, 0.2);\\r\\n  border-radius: 10px;\\r\\n  flex-wrap: wrap;\\r\\n  padding: 40px 30px 40px 30px;\\r\\n  background-color: #fff;\\r\\n  transition: all 1s ease;\\r\\n}\\r\\n.movie-image{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 30px 0  30px 0;\\r\\n}\\r\\n.movie-detail img{\\r\\n  width: 40vw;\\r\\n}\\r\\n.movie-detail h2{\\r\\n  font-size: 50px;\\r\\n  text-align: center;\\r\\n  padding-bottom: 30px;\\r\\n}\\r\\nform {\\r\\n  align-self: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 30%;\\r\\n  gap: 20px;\\r\\n}\\r\\ninput {\\r\\n  border: 2px solid #000;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  height: 80%;\\r\\n  padding: 5px;\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #000;\\r\\n}\\r\\n.show-comment{\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  flex-direction: column;\\r\\n  border: 2px solid #000 ;\\r\\n width :50%;\\r\\n}\\r\\n\\r\\n#submit {\\r\\n  width: 80px;\\r\\n  padding: 6px;\\r\\n  border-radius: 5px;\\r\\n  background-color: skyblue;\\r\\n  align-self: center;\\r\\n  border: 2px solid skyblue;\\r\\n}\\r\\n\\r\\n#submit:hover {\\r\\n  opacity: 0.9;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n\\r\\n@media only screen and (min-width: 768px) {\\r\\n  .nav-element {\\r\\n    padding: 2% 8%;\\r\\n  }\\r\\n\\r\\n  .movies {\\r\\n    flex-direction: row;\\r\\n    flex-wrap: wrap;\\r\\n  }\\r\\n\\r\\n  .movie {\\r\\n    flex-wrap: wrap;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Movie-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Movie-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Movie-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/nav.js */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_comments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/comments */ \"./src/modules/comments.js\");\n/* harmony import */ var _modules_movies_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/movies.js */ \"./src/modules/movies.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_nav_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_comments__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_movies_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack://Movie-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_download_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/download.jpg */ \"./src/images/download.jpg\");\n\r\n\r\n\r\nconst comments =`\r\n<div class =\"comments\">\r\n    <div class=\"movie-detail\">\r\n       <div class=\"movie-image\">\r\n       <img src=${_images_download_jpg__WEBPACK_IMPORTED_MODULE_0__} />\r\n       </div>\r\n        <h2>Two and Half men</h2>\r\n        <p>Charlie is a well-to-do bachelor with a house at the beach, a Jaguar in the front, and an easy way with women. His casual Malibu lifestyle is interrupted when his tightly wound brother Alan, who's facing a divorce, and his son Jake, come to live with him. Together, these two and a half men confront the challenges of growing up; finally. Complicating matters are the brothers' self-obsessed, controlling mother, Evelyn, Alan's estranged wife, Judith and Charlie's crazy neighbor Rose, who wants to be a part of his life and is willing to do anything to be around. After the death of his brother, Alan Harper meets and befriends a lonely young man named Walden Schmidt who turns out to be a billionaire. Unable to afford his brother's home, Alan sells Walden the house, and as a way of showing his gratitude, Walden allows</p>\r\n    </div>\r\n    <div class=\"show-comment\">\r\n        <h3> comments (0) </h3>\r\n        <p>thomas: hi</p>\r\n    </div>\r\n    <div class =\"form-end\">\r\n    <form id=\"new-comment\">\r\n    <input class=\"name-input\" type=\"text\" placeholder=\"Your name\" required>\r\n    <textarea>Add your comment here</textarea>\r\n    <button class=\"btn-submit\" id=\"submit\" type=\"submit\">Comment</button>\r\n    </form>\r\n    </div>\r\n</div>\r\n`;\r\nconst renderComments = () => {\r\n    document.querySelector('.comment-section').innerHTML = comments ;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);\n\n//# sourceURL=webpack://Movie-app/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_fetchApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/fetchApi.js */ \"./src/modules/services/fetchApi.js\");\n/* harmony import */ var _services_rootEndpoints_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/rootEndpoints.js */ \"./src/modules/services/rootEndpoints.js\");\n\r\n\r\n\r\nconst Movies = document.querySelector('.movies');\r\nconst renderMovies = async(data) => {\r\n   let moviesHTML = '';\r\n   data.forEach((show,index)  => {\r\n       if(index < 20 ){\r\n        moviesHTML +=`\r\n        <div class=\"movie\">\r\n        <img src=${show.image.medium} />\r\n        <div class=\"movie-description\">\r\n        <p>${show.name}</p>\r\n        <div class=\"movie-likes\">\r\n        <i class=\"far fa-heart\"></i>\r\n        <div class=\"counter\"> ${show.likes}</div>\r\n        </div>\r\n        </div>\r\n        <button class=\"btn\">Comments</button>\r\n        </div>\r\n        `; \r\n       }\r\n    \r\n\r\n   });\r\n   Movies.innerHTML = moviesHTML;\r\n\r\n};\r\nconst showMovies = async () => {\r\n    const data = await (0,_services_fetchApi_js__WEBPACK_IMPORTED_MODULE_0__.get)(_services_rootEndpoints_js__WEBPACK_IMPORTED_MODULE_1__.SHOWS_API);\r\n    renderMovies(data);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMovies);\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/movies.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_netmovies_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/netmovies.png */ \"./src/images/netmovies.png\");\n\r\n\r\nconst navigations = `\r\n<nav class=\"nav-element\">\r\n<div class=\"logo\"> \r\n<img src=${_images_netmovies_png__WEBPACK_IMPORTED_MODULE_0__} alt=\"logo\" />\r\n</div>\r\n<ul class=\"nav-items\">\r\n<li class=\"list\">Series</li>\r\n<li class=\"list\">Film</li>\r\n<li class=\"list\" id=\"shows-counter\">My List</li>\r\n</ul>\r\n</nav>\r\n`;\r\n\r\nconst renderNav = () => {\r\n  document.querySelector('#header').innerHTML = navigations;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderNav);\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/services/fetchApi.js":
/*!******************************************!*\
  !*** ./src/modules/services/fetchApi.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"get\": () => (/* binding */ get),\n/* harmony export */   \"post\": () => (/* binding */ post)\n/* harmony export */ });\nconst get = async (url) => {\r\n   try {\r\n    const res = await fetch(url);\r\n    const data = await res.json();\r\n    return data\r\n       \r\n   } catch (error) {\r\n     return error  \r\n   } \r\n\r\n}\r\n\r\nconst post = async (url,data) => {\r\n    const config ={\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: JSON.stringify(data)\r\n    }\r\n\r\n    try {\r\n        const res = await fetch(url, config);\r\n        const data = await res.json();\r\n        return data\r\n           \r\n       } catch (error) {\r\n         return error  \r\n       } \r\n}\r\n\n\n//# sourceURL=webpack://Movie-app/./src/modules/services/fetchApi.js?");

/***/ }),

/***/ "./src/modules/services/rootEndpoints.js":
/*!***********************************************!*\
  !*** ./src/modules/services/rootEndpoints.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"COMMENTS\": () => (/* binding */ COMMENTS),\n/* harmony export */   \"INVOLVEMENT_API\": () => (/* binding */ INVOLVEMENT_API),\n/* harmony export */   \"LIKES\": () => (/* binding */ LIKES),\n/* harmony export */   \"SHOWS_API\": () => (/* binding */ SHOWS_API)\n/* harmony export */ });\nconst SHOWS_API = 'https://api.tvmaze.com/shows';\r\nconst INVOLVEMENT_API = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\r\nconst LIKES = ':app_id/likes';\r\nconst COMMENTS = ':app_id/comments';\n\n//# sourceURL=webpack://Movie-app/./src/modules/services/rootEndpoints.js?");

/***/ }),

/***/ "./src/images/download.jpg":
/*!*********************************!*\
  !*** ./src/images/download.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b143a5ac50f1ab437c9e.jpg\";\n\n//# sourceURL=webpack://Movie-app/./src/images/download.jpg?");

/***/ }),

/***/ "./src/images/netmovies.png":
/*!**********************************!*\
  !*** ./src/images/netmovies.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2297adfd38bcadf294c3.png\";\n\n//# sourceURL=webpack://Movie-app/./src/images/netmovies.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
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