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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html,\r\nbody {\r\n    margin: 0;\r\n    height: 100%;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n\r\n    font-family: \"Marker Felt\", fantasy;\r\n    color: white;\r\n}\r\n\r\n\r\n/* Menu */\r\n\r\nheader {\r\n    width: 100%;\r\n    height: 5rem;\r\n    background-color: black;\r\n}\r\n\r\n.menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n    padding: 1rem;\r\n}\r\n\r\n.menu div {\r\n    width: 10rem;\r\n    \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    font-size: 2rem;\r\n    font-weight: 600;\r\n}\r\n\r\n.menu div:hover{\r\n    text-decoration: underline;\r\n    text-decoration-thickness: 5px;  \r\n\r\n\r\n}\r\n\r\n/* Content */\r\n\r\n#content {\r\n    flex: 1;\r\n    min-height: 0;\r\n}\r\n\r\n\r\n/* Home */\r\n\r\n.home {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.home img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.home h1 {\r\n    position: absolute;\r\n\r\n    top: 30%;\r\n    left: 50%;\r\n\r\n    transform: translate(-50%, -50%);\r\n\r\n    margin: 0;\r\n\r\n    font-size: 4rem;\r\n    font-weight: 800;\r\n}\r\n\r\n\r\n/* Footer */\r\n\r\nfooter {\r\n    width: 100%;\r\n    padding: 1rem 0;\r\n    text-align: center;\r\n    background-color: black;\r\n}\r\n\r\nfooter p {\r\n    margin: 0;\r\n}\r\n\r\n/* Menu */\r\n.menu_page {\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n    \r\n}\r\n\r\n.menu_page > h1 {\r\n    margin: 0;\r\n    font-size: 8rem;\r\n}\r\n\r\n.menu_page > p {\r\n    margin: 0 0 2rem;\r\n    font-size: 2rem;\r\n}\r\n\r\n.dishes {\r\n    display: grid;\r\n\r\n    grid-template-columns: repeat(4, 250px);\r\n\r\n    gap: 8rem;\r\n}\r\n\r\n.dishes > div {\r\n    background-color: black;\r\n    border-radius: 1rem;\r\n    border: 1px solid white;\r\n\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 310px;\r\n}\r\n\r\n.dishes img {\r\n    display: block;\r\n\r\n    width: 100%;\r\n    height: 200px;\r\n\r\n    object-fit: cover;\r\n\r\n    border: 1px solid white;\r\n}\r\n\r\n.dishes h1 {\r\n    margin: 1rem 0 0.5rem;\r\n    font-size: 2.3rem;\r\n}\r\n\r\n.dishes span {\r\n    text-align: center;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n/*Contact Page*/\r\n.contact_page{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.contactTextContainer{\r\n    background-color: black;\r\n\r\n    border-radius: 1rem;\r\n    border: 1px solid white;\r\n\r\n    padding: 1rem;\r\n\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.contact_page h1{\r\n    font-size: 8rem;\r\n}\r\n\r\n/*About Page*/\r\n.about_page{\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.aboutTextContainer{\r\n    width: 70%;\r\n    background-color: black;\r\n\r\n    border-radius: 1rem;\r\n    border: 1px solid white;\r\n\r\n    padding: 1rem;\r\n\r\n    font-size: 1.4rem;\r\n}\r\n\r\n.about_page h1{\r\n    font-size: 8rem;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/hamburger.jpg"
/*!**********************************!*\
  !*** ./src/images/hamburger.jpg ***!
  \**********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0ddf855097f63f2a30f1.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hamburger.jpg?\n}");

/***/ },

/***/ "./src/images/pasta.jpg"
/*!******************************!*\
  !*** ./src/images/pasta.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5f21ae9f3a3d3c4f822e.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pasta.jpg?\n}");

/***/ },

/***/ "./src/images/pizza.jpg"
/*!******************************!*\
  !*** ./src/images/pizza.jpg ***!
  \******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"aae5776f46be7492ef68.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/pizza.jpg?\n}");

/***/ },

/***/ "./src/images/restaurant.jpg"
/*!***********************************!*\
  !*** ./src/images/restaurant.jpg ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ba995d7d06b123663c8b.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/restaurant.jpg?\n}");

/***/ },

/***/ "./src/images/salmon.jpg"
/*!*******************************!*\
  !*** ./src/images/salmon.jpg ***!
  \*******************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e746e9c9edffd8fe7f06.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/salmon.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n\r\n\r\nconst about = () => {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const aboutContainer = document.createElement(\"div\");\r\n    aboutContainer.classList.add(\"about_page\");\r\n\r\n    aboutContainer.style.backgroundImage = `url(${_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n    const aboutTextContainer = document.createElement(\"div\");\r\n    aboutTextContainer.classList.add(\"aboutTextContainer\");\r\n\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"About Us\";\r\n\r\n\r\n    const description1 = document.createElement(\"p\");\r\n    description1.textContent = \"Since 2020, our restaurant has been a place where simple ingredients, homemade recipes, and a love for good food come together.\";\r\n\r\n    const description2 = document.createElement(\"p\");\r\n    description2.textContent = \"What started as a small idea between friends quickly became a place where people could gather, share a meal, and enjoy something made with care. Our menu brings together familiar favorites and our own interpretations of dishes we love, always with fresh ingredients and plenty of passion.\";\r\n\r\n    const description3 = document.createElement(\"p\");\r\n    description3.textContent = \"We believe great food doesn't have to be complicated. It just needs to be honest, comforting, and made for sharing.\"\r\n\r\n    const description4 = document.createElement(\"p\");\r\n    description4.textContent = \"Come hungry, stay a while, and become part of our story.\"\r\n\r\n    aboutContainer.appendChild(heading);\r\n    aboutTextContainer.appendChild(description1);\r\n    aboutTextContainer.appendChild(description2);\r\n    aboutTextContainer.appendChild(description3);\r\n    aboutTextContainer.appendChild(description4);\r\n\r\n\r\n    aboutContainer.appendChild(aboutTextContainer);\r\n    content.appendChild(aboutContainer);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/contact.js"
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n\r\n\r\nconst contact = () => {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const contactContainer = document.createElement(\"div\");\r\n    contactContainer.classList.add(\"contact_page\");\r\n\r\n    contactContainer.style.backgroundImage = `url(${_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n    const contactTextContainer = document.createElement(\"div\");\r\n    contactTextContainer.classList.add(\"contactTextContainer\");\r\n\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Get in Touch\";\r\n\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.textContent =\r\n        \"Our team of elite chefs would love to hear from you. Give us a call or send us an email.\";\r\n\r\n    const numberPhone = document.createElement(\"p\");\r\n    numberPhone.textContent = \"Phone: 912 345 678\"\r\n\r\n    const email = document.createElement(\"p\");\r\n    email.textContent = \"Email: rafa2003ribeiro@gmail.com\"\r\n\r\n    contactContainer.appendChild(heading);\r\n    contactTextContainer.appendChild(description);\r\n    contactTextContainer.appendChild(numberPhone);\r\n    contactTextContainer.appendChild(email);\r\n\r\n    contactContainer.appendChild(contactTextContainer);\r\n    content.appendChild(contactContainer);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n\r\n\r\n\r\nconst home = () => {\r\n    \r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const homeContainer = document.createElement(\"div\");\r\n    homeContainer.classList.add(\"home\");\r\n\r\n    content.appendChild(homeContainer);\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    image.alt = \"Interior do nosso restaurante\";\r\n\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Welcome to our restaurant\";\r\n\r\n    homeContainer.appendChild(image);\r\n    homeContainer.appendChild(heading);\r\n    content.appendChild(homeContainer);\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\nconst clearContent = () => {\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n};\r\n\r\n\r\n// Home tab\r\nlet homeBtn = document.getElementById('home');\r\nhomeBtn.onclick = () => {\r\n    clearContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n\r\n// Menu tab\r\nlet menuBtn = document.getElementById('menu');\r\nmenuBtn.onclick = () => {\r\n    clearContent();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\n\r\n// Contact tab\r\nlet contactBtn = document.getElementById('contact');\r\ncontactBtn.onclick = () => {\r\n    clearContent();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n};\r\n\r\n// About tab\r\nlet aboutBtn = document.getElementById('about');\r\naboutBtn.onclick = () => {\r\n    clearContent();\r\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n};\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/restaurant.jpg */ \"./src/images/restaurant.jpg\");\n/* harmony import */ var _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pizza.jpg */ \"./src/images/pizza.jpg\");\n/* harmony import */ var _images_hamburger_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/hamburger.jpg */ \"./src/images/hamburger.jpg\");\n/* harmony import */ var _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/pasta.jpg */ \"./src/images/pasta.jpg\");\n/* harmony import */ var _images_salmon_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/salmon.jpg */ \"./src/images/salmon.jpg\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst createDish = (name, description, img) => {\r\n    const dish = document.createElement(\"div\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.src = img;\r\n    image.alt = name;\r\n\r\n    const title = document.createElement(\"h1\");\r\n    title.textContent = name;\r\n\r\n    const text = document.createElement(\"span\");\r\n    text.textContent = description;\r\n\r\n    dish.appendChild(image);\r\n    dish.appendChild(title);\r\n    dish.appendChild(text);\r\n\r\n    return dish;\r\n};\r\n\r\nconst menu = () => {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"menu_page\");\r\n\r\n    menuContainer.style.backgroundImage = `url(${_images_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\r\n\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Menu\";\r\n\r\n\r\n    const description = document.createElement(\"p\");\r\n    description.textContent =\r\n        \"Discover our selection of delicious homemade dishes.\";\r\n\r\n\r\n    const dishesContainer = document.createElement(\"div\");\r\n    dishesContainer.classList.add(\"dishes\");\r\n\r\n    // Pratos\r\n    const dish_1 = createDish(\r\n        \"Pizza\",\r\n        \"Pizza with tomato, cheese and basil.\",\r\n        _images_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__\r\n    );\r\n\r\n    const dish_2 = createDish(\r\n        \"Hamburger\",\r\n        \"Homemade hamburger with cheese and fries.\",\r\n        _images_hamburger_jpg__WEBPACK_IMPORTED_MODULE_2__\r\n    );\r\n\r\n    const dish_3 = createDish(\r\n        \"Pasta\",\r\n        \"Fresh pasta with tomato sauce and parmesan.\",\r\n        _images_pasta_jpg__WEBPACK_IMPORTED_MODULE_3__\r\n    );\r\n\r\n    const dish_4 = createDish(\r\n        \"Salmon\",\r\n        \"Grilled salmon with vegetables and lemon.\",\r\n        _images_salmon_jpg__WEBPACK_IMPORTED_MODULE_4__\r\n    );\r\n\r\n    dishesContainer.appendChild(dish_1);\r\n    dishesContainer.appendChild(dish_2);\r\n    dishesContainer.appendChild(dish_3);\r\n    dishesContainer.appendChild(dish_4);\r\n\r\n    menuContainer.appendChild(heading);\r\n    menuContainer.appendChild(description);\r\n    menuContainer.appendChild(dishesContainer);\r\n\r\n    content.appendChild(menuContainer);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;