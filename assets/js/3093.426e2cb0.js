"use strict";
exports.id = 3093;
exports.ids = [3093];
exports.modules = {

/***/ 43093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteForwardEdits: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11499);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function e(e,n,m,u){if(!n)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("post:missing-guid","guid for version is missing");const a=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .parseUrl */ .Dl)(e),c=m.toJSON(),d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .asValidOptions */ .jV)(a.query,{query:(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .encode */ .lF)({...c,f:"json"}),...u,method:"post"});n.startsWith("{")&&(n=n.slice(1,-1));const f=`${a.path}/versions/${n}/deleteForwardEdits`,{data:p}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(f,d);return p.success}


/***/ })

};
;