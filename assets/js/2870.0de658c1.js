"use strict";
exports.id = 2870;
exports.ids = [2870];
exports.modules = {

/***/ 32870:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewWebStyleSymbol: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89882);
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88148);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55056);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function h(e,i,h){const s=e.thumbnail&&e.thumbnail.url;return s?(0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(s,{responseType:"image"}).then((t=>{const e=r(t.data,h);return h?.node?(h.node.appendChild(e),h.node):e})):(0,_utils_js__WEBPACK_IMPORTED_MODULE_2__/* .fetchWebStyleSymbol */ .yG)(e).then((t=>t?i(t,h):null))}function r(t,n){const h=!/\\.svg$/i.test(t.src)&&n&&n.disableUpsampling,r=Math.max(t.width,t.height);let s=null!=n?.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(n.maxSize):_previewUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .SymbolSizeDefaults */ .CB.maxSize;h&&(s=Math.min(r,s));const o="number"==typeof n?.size?n?.size:null,m=Math.min(s,null!=o?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(o):r);if(m!==r){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=m,t.height=m/e):(t.width=m*e,t.height=m)}return t}


/***/ })

};
;