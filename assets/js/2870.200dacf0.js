"use strict";
exports.id = 2870;
exports.ids = [2870];
exports.modules = {

/***/ 32870:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   previewWebStyleSymbol: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(89882);
/* harmony import */ var _previewUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88148);
/* harmony import */ var _webStyleAcceptedFormats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97175);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e,i,o){const r=e.thumbnail?.url;if(r){const e=s((await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r,{responseType:"image"})).data,o);return o?.node?(o.node.appendChild(e),o.node):e}const a=await e.fetchSymbol({acceptedFormats:_webStyleAcceptedFormats_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultAcceptedFormats */ .t});return a?i(a,o):null}function s(t,n){const o=!/\\.svg$/i.test(t.src)&&n?.disableUpsampling,s=Math.max(t.width,t.height);let r=null!=n?.maxSize?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(n.maxSize):_previewUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .SymbolSizeDefaults */ .CB.maxSize;o&&(r=Math.min(s,r));const a="number"==typeof n?.size?n?.size:null,h=Math.min(r,null!=a?(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .pt2px */ .Lz)(a):s);if(h!==s){const e=0!==t.width&&0!==t.height?t.width/t.height:1;e>=1?(t.width=h,t.height=h/e):(t.width=h*e,t.height=h)}return t}


/***/ })

};
;