"use strict";
exports.id = 5204;
exports.ids = [5204];
exports.modules = {

/***/ 15204:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCIMSymbolReference: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19382);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63680);
/* harmony import */ var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28051);
/* harmony import */ var _symbols_support_webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19989);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function f(t,r,s){if(!t.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("style-symbol-reference-name-missing","Missing name in style symbol reference");if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return p(t,s);try{return b(await (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .fetchStyle */ .cF)(t,r,s),t.name,r,s)}catch(l){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(l),null}}async function p(t,r){const o=_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .Style2DUrlTemplate */ .jg.replaceAll(/\{SymbolName\}/gi,t.name);try{const t=await (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .requestJSON */ .yA)(o,r);return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .makeCIMSymbolRef */ .bo)(t.data)}catch(s){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(s),null}}async function b(m,a,f,p){const b={portal:null!=f?.portal?f.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault(),url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(m.baseUrl),origin:"portal-item"},j=(0,_symbols_support_webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getStyleItemFromStyle */ .p)(a,m.data);if(!j){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let w=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)((0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .symbolUrlFromStyleItem */ .o5)(j,"cimRef"),b);(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isDevEnvironment */ .b5)()&&(w=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .adjustStaticAGOUrl */ .EM)(w));try{const t=await (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .requestJSON */ .yA)(w,p);return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .makeCIMSymbolRef */ .bo)(t.data)}catch(U){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(U),null}}


/***/ })

};
;