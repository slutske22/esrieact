"use strict";
exports.id = 8358;
exports.ids = [8358];
exports.modules = {

/***/ 50256:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ t),
/* harmony export */   S: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export O */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{*[Symbol.iterator](){let t=this.next();for(;t;)yield t,t=this.next()}}class e extends (/* unused pure expression or super */ null && (t)){}class s extends t{constructor(t){super(),this.m_iGeom=-1,this.m_aGeoms=t?t.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const t=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,t}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}


/***/ }),

/***/ 36854:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ d),
/* harmony export */   e: () => (/* binding */ y),
/* harmony export */   g: () => (/* binding */ g),
/* harmony export */   i: () => (/* binding */ f),
/* harmony export */   l: () => (/* binding */ l),
/* harmony export */   s: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_operators_gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55468);
/* harmony import */ var _geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76203);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i,p,u,c,m;function f(){return!!i&&(0,_geometry_operators_gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__/* .isLoaded */ .s1)()}async function l(){if(!f()){const[e]=await Promise.all([__webpack_require__.e(/* import() */ 519).then(__webpack_require__.bind(__webpack_require__, 62900)),(0,_geometry_operators_gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__/* .load */ .Hh)()]);i=e.fromGeometry,p=e.fromSpatialReference,u=e.getSpatialReference,c=e.toGeometry,m=(0,_geometry_operators_gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__/* .supportsCurves */ .fz)()}}function y(t,o,r={}){const{curveType:a="geodesic",unit:m}=r;m&&(o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(o,m,"meters"));const f=u(t);return c((0,_geometry_operators_gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__/* .execute */ .g7)(i(t),o,p(f),_geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__/* .geodeticCurveType */ .O[a]),f)}function d(t,o,r={}){const{curveType:s="geodesic",unit:m}=r;m&&(o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(o,m,"meters"));const f=t.map(i),l=u(t);return (0,_geometry_operators_gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__/* .executeMany */ .zo)(f,o,p(l),_geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__/* .geodeticCurveType */ .O[s]).map((e=>c(e,l)))}const g=Object.freeze(Object.defineProperty({__proto__:null,execute:y,executeMany:d,isLoaded:f,load:l,get supportsCurves(){return m}},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 68358:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   execute: () => (/* reexport safe */ _chunks_geodeticDensifyOperator_js__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   executeMany: () => (/* reexport safe */ _chunks_geodeticDensifyOperator_js__WEBPACK_IMPORTED_MODULE_3__.a),
/* harmony export */   isLoaded: () => (/* reexport safe */ _chunks_geodeticDensifyOperator_js__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   load: () => (/* reexport safe */ _chunks_geodeticDensifyOperator_js__WEBPACK_IMPORTED_MODULE_3__.l),
/* harmony export */   supportsCurves: () => (/* reexport safe */ _chunks_geodeticDensifyOperator_js__WEBPACK_IMPORTED_MODULE_3__.s)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _gx_operatorGeodeticDensify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55468);
/* harmony import */ var _support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76203);
/* harmony import */ var _chunks_geodeticDensifyOperator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36854);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/



/***/ }),

/***/ 55468:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* binding */ i),
/* harmony export */   fz: () => (/* binding */ a),
/* harmony export */   g7: () => (/* binding */ u),
/* harmony export */   s1: () => (/* binding */ s),
/* harmony export */   zo: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_SimpleGeometryCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50256);
/* harmony import */ var _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47063);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let o;function s(){return!!o&&(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.i)()}async function i(){if(!s()){const[n,r]=await Promise.all([__webpack_require__.e(/* import() */ 8935).then(__webpack_require__.bind(__webpack_require__, 38935)),__webpack_require__.e(/* import() */ 2830).then(__webpack_require__.bind(__webpack_require__, 57592)).then((n=>n.aG)).then((({injectPe:n})=>n)),(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.l)()]);o=new n.OperatorGeodeticDensifyByLength,r(_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.p)}}function u(n,e,t,r){return o.execute(n,e,t,r,null)}function c(e,t,r,s){const i=o.executeMany(new _chunks_SimpleGeometryCursor_js__WEBPACK_IMPORTED_MODULE_0__.S(e),t,r,s,null);return Array.from(i)}function a(){return o.supportsCurves()}


/***/ })

};
;