"use strict";
exports.id = 1879;
exports.ids = [1879];
exports.modules = {

/***/ 51879:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSymbolSchema: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48002);
/* harmony import */ var _engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79432);
/* harmony import */ var _engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59601);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(e){if("line-marker"===e.type){return{type:"line-marker",color:e.color?.toJSON(),placement:e.placement,style:e.style}}return e.constructor.fromJSON(e.toJSON()).toJSON()}function o(e){return (0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .hydrateMaterialKey */ .A1)(e)}function i(e,t,r=!1){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return c(e,t,r);case"simple-marker":case"picture-marker":return h(e,t,r);case"simple-line":return y(e,t,r);case"text":return u(e,t,r);case"label":return m(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...s(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function m(e,r,l){const n=e.toJSON(),s=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.LABEL,{...r,placement:n.labelPlacement});return{materialKey:l?o(s):s,hash:e.hash(),...n,labelPlacement:n.labelPlacement}}function c(e,r,n){const i=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.FILL,r),m=n?o(i):i,c=e.clone(),y=c.outline,h=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .isOutlineFillSymbology */ .tq)(r.symbologyType);h||(c.outline=null);const u={materialKey:m,hash:c.hash(),...s(c)};if(h)return u;const p=[];if(p.push(u),y){const e=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.LINE,{...r,isOutline:!0}),l={materialKey:n?o(e):e,hash:y.hash(),...s(y)};p.push(l)}return{type:"composite-symbol",layers:p,hash:p.reduce(((e,t)=>t.hash+e),"")}}function y(e,n,i){const m=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .isOutlineFillSymbology */ .tq)(n.symbologyType)?_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLSymbologyType */ .w4.DEFAULT:n.symbologyType,c=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.LINE,{...n,symbologyType:m}),y=i?o(c):c,h=e.clone(),u=h.marker;h.marker=null;const p=[];if(p.push({materialKey:y,hash:h.hash(),...s(h)}),u){const e=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.MARKER,n),r=i?o(e):e;u.color=u.color??h.color,p.push({materialKey:r,hash:u.hash(),lineWidth:h.width,...s(u)})}return{type:"composite-symbol",layers:p,hash:p.reduce(((e,t)=>t.hash+e),"")}}function h(r,l,n){if("simple-marker"===r.type&&("path"===r.style||r.outline&&"solid"!==r.outline.style&&"none"!==r.outline.style)){return i({type:"CIMSymbolReference",symbol:_symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .CIMSymbolHelper */ .wp.fromSimpleMarker(r)},l,n)}const m=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.MARKER,l),c=n?o(m):m,y=s(r);return{materialKey:c,hash:r.hash(),...y,angle:r.angle,maxVVSize:l.maxVVSize}}function u(e,r,l){const n=(0,_engine_webgl_materialKey_MaterialKey_js__WEBPACK_IMPORTED_MODULE_2__/* .createMaterialKey */ .Zl)(_engine_webgl_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .WGLGeometryType */ .ZG.TEXT,r),i=l?o(n):n,m=s(e);return{materialKey:i,hash:e.hash(),...m,angle:e.angle,maxVVSize:r.maxVVSize}}


/***/ })

};
;