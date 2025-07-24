"use strict";
exports.id = 71611;
exports.ids = [71611];
exports.modules = {

/***/ 36321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ f),
/* harmony export */   gf: () => (/* binding */ a),
/* harmony export */   jV: () => (/* binding */ s),
/* harmony export */   lF: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export findToken */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32083);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6480);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44945);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(t,n){return n?{...n,query:{...t??{},...n.query}}:{query:t}}function f(t){return"string"==typeof t?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(t):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)}function u(t,n,r){const e={};for(const i in t){if("declaredClass"===i)continue;const o=t[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o))e[i]=o.map((t=>u(t)));else if("object"==typeof o)if(o.toJSON){const t=o.toJSON(r?.[i]);e[i]=n?t:JSON.stringify(t)}else e[i]=n?o:JSON.stringify(o);else e[i]=o}return e}function c(t,r){return t?r&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .supportsApiKey */ .Qc)(t)?r:(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getApiKey */ .CG)(t)??_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(t)?.token:null}async function a(r,e,i){const o=c(r,e);if(o)return o;!_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id&&_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.request.useIdentity&&await __webpack_require__.e(/* import() */ 94018).then(__webpack_require__.bind(__webpack_require__, 94018));const s=await _kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.getCredential(r,i);return s?.token}


/***/ }),

/***/ 71611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteForwardEdits: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36321);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function e(e,n,m,a){if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("post:missing-guid","guid for version is missing");const u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .parseUrl */ .Dl)(e),d=m.toJSON(),f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .asValidOptions */ .jV)(u.query,{query:(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .lF)({...d,f:"json"}),...a,method:"post"});n.startsWith("{")&&(n=n.slice(1,-1));const p=`${u.path}/versions/${n}/deleteForwardEdits`,{data:c}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(p,f);return c}


/***/ })

};
;