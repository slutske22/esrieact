"use strict";
exports.id = 3867;
exports.ids = [3867];
exports.modules = {

/***/ 63867:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeObjectLayerResourceSize: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports clearBoundingBoxCache, computeIconLayerResourceSize */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89926);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22279);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4675);
/* harmony import */ var _symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97728);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=u();function u(){return new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__/* .LRUCache */ .q(50)}function a(){c=u()}async function m(e,o){if(e.resource?.href)return l(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new r("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function l(r){return e(r,{responseType:"image"}).then((e=>e.data))}async function f(e,o=null){if(!e.isPrimitive){const o=e.resource.href;if(!o)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbol:invalid-resource","The symbol does not have a valid resource");const s=c.get(o);if(void 0!==s)return s;const{fetch:n}=await __webpack_require__.e(/* import() */ 2470).then(__webpack_require__.bind(__webpack_require__, 2470)),u=await n(o,{disableTextures:!0}),a=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__/* .size */ .Ej)(u.referenceBoundingBox,(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)());return c.put(o,a),a}if(!e.resource?.primitive)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbol:invalid-resource","The symbol does not have a valid resource");const u=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)((0,_symbolLayerUtils3D_js__WEBPACK_IMPORTED_MODULE_5__/* .objectSymbolLayerPrimitiveBoundingBox */ .Fq)(e.resource.primitive));if(null!=o)for(let r=0;r<u.length;r++)u[r]*=o;return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_4__/* .size */ .Ej)(u,(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)())}


/***/ })

};
;