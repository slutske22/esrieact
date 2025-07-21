"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 51752:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ l),
/* harmony export */   g: () => (/* binding */ f),
/* harmony export */   i: () => (/* binding */ c),
/* harmony export */   l: () => (/* binding */ m),
/* harmony export */   s: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_operators_gx_operatorGeodeticArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88549);
/* harmony import */ var _geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76203);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i,p,u,n;function c(){return!!i&&(0,_geometry_operators_gx_operatorGeodeticArea_js__WEBPACK_IMPORTED_MODULE_1__/* .isLoaded */ .s1)()}async function m(){if(!c()){const[e]=await Promise.all([__webpack_require__.e(/* import() */ 2900).then(__webpack_require__.bind(__webpack_require__, 62900)),(0,_geometry_operators_gx_operatorGeodeticArea_js__WEBPACK_IMPORTED_MODULE_1__/* .load */ .Hh)()]);i=e.fromGeometry,p=e.fromSpatialReference,u=e.getSpatialReference,n=(0,_geometry_operators_gx_operatorGeodeticArea_js__WEBPACK_IMPORTED_MODULE_1__/* .supportsCurves */ .fz)()}}function l(r,o={}){const{curveType:t="geodesic",unit:n}=o,c=u(r);let m=(0,_geometry_operators_gx_operatorGeodeticArea_js__WEBPACK_IMPORTED_MODULE_1__/* .execute */ .g7)(i(r),p(c),_geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__/* .geodeticCurveType */ .O[t]);return m&&n&&(m=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(m,"square-meters",n)),m}const f=Object.freeze(Object.defineProperty({__proto__:null,execute:l,isLoaded:c,load:m,get supportsCurves(){return n}},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 80427:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   execute: () => (/* reexport safe */ _chunks_geodeticAreaOperator_js__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   isLoaded: () => (/* reexport safe */ _chunks_geodeticAreaOperator_js__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   load: () => (/* reexport safe */ _chunks_geodeticAreaOperator_js__WEBPACK_IMPORTED_MODULE_3__.l),
/* harmony export */   supportsCurves: () => (/* reexport safe */ _chunks_geodeticAreaOperator_js__WEBPACK_IMPORTED_MODULE_3__.s)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _gx_operatorGeodeticArea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88549);
/* harmony import */ var _support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76203);
/* harmony import */ var _chunks_geodeticAreaOperator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51752);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/



/***/ }),

/***/ 88549:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* binding */ i),
/* harmony export */   fz: () => (/* binding */ a),
/* harmony export */   g7: () => (/* binding */ s),
/* harmony export */   s1: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47063);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let r;function o(){return!!r&&(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.i)()}async function i(){if(!o()){const[n,o]=await Promise.all([__webpack_require__.e(/* import() */ 6811).then(__webpack_require__.bind(__webpack_require__, 46811)),__webpack_require__.e(/* import() */ 7592).then(__webpack_require__.bind(__webpack_require__, 57592)).then((e=>e.aG)).then((({injectPe:e})=>e)),(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.l)()]);r=new n.OperatorGeodeticArea,o(_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.p)}}function s(e,t,n){return r.execute(e,t,n,null)}function a(){return r.supportsCurves()}


/***/ })

};
;