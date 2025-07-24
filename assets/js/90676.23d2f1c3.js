"use strict";
exports.id = 90676;
exports.ids = [90676];
exports.modules = {

/***/ 65680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ l),
/* harmony export */   g: () => (/* binding */ f),
/* harmony export */   i: () => (/* binding */ c),
/* harmony export */   l: () => (/* binding */ m),
/* harmony export */   s: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _geometry_operators_gx_operatorGeodeticLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46174);
/* harmony import */ var _geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65897);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i,p,n,u;function c(){return!!i&&(0,_geometry_operators_gx_operatorGeodeticLength_js__WEBPACK_IMPORTED_MODULE_1__/* .isLoaded */ .s1)()}async function m(){if(!c()){const[e]=await Promise.all([__webpack_require__.e(/* import() */ 65534).then(__webpack_require__.bind(__webpack_require__, 65534)),(0,_geometry_operators_gx_operatorGeodeticLength_js__WEBPACK_IMPORTED_MODULE_1__/* .load */ .Hh)()]);i=e.fromGeometry,p=e.fromSpatialReference,n=e.getSpatialReference,u=(0,_geometry_operators_gx_operatorGeodeticLength_js__WEBPACK_IMPORTED_MODULE_1__/* .supportsCurves */ .fz)()}}function l(t,o={}){const{curveType:r="geodesic",unit:u}=o,c=n(t);let m=(0,_geometry_operators_gx_operatorGeodeticLength_js__WEBPACK_IMPORTED_MODULE_1__/* .execute */ .g7)(i(t),p(c),_geometry_operators_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__/* .geodeticCurveType */ .O[r]);return m&&u&&(m=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(m,"meters",u)),m}const f=Object.freeze(Object.defineProperty({__proto__:null,execute:l,isLoaded:c,load:m,get supportsCurves(){return u}},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 90676:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   execute: () => (/* reexport safe */ _chunks_geodeticLengthOperator_js__WEBPACK_IMPORTED_MODULE_3__.e),
/* harmony export */   isLoaded: () => (/* reexport safe */ _chunks_geodeticLengthOperator_js__WEBPACK_IMPORTED_MODULE_3__.i),
/* harmony export */   load: () => (/* reexport safe */ _chunks_geodeticLengthOperator_js__WEBPACK_IMPORTED_MODULE_3__.l),
/* harmony export */   supportsCurves: () => (/* reexport safe */ _chunks_geodeticLengthOperator_js__WEBPACK_IMPORTED_MODULE_3__.s)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _gx_operatorGeodeticLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46174);
/* harmony import */ var _support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65897);
/* harmony import */ var _chunks_geodeticLengthOperator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/



/***/ }),

/***/ 46174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* binding */ i),
/* harmony export */   fz: () => (/* binding */ c),
/* harmony export */   g7: () => (/* binding */ s),
/* harmony export */   s1: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89349);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let r;function o(){return!!r&&(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.i)()}async function i(){if(!o()){const[e,o]=await Promise.all([__webpack_require__.e(/* import() */ 46840).then(__webpack_require__.bind(__webpack_require__, 46840)),__webpack_require__.e(/* import() */ 45262).then(__webpack_require__.bind(__webpack_require__, 45262)).then((t=>t.aG)).then((({injectPe:t})=>t)),(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.l)()]);r=new e.OperatorGeodeticLength,o(_chunks_pe_js__WEBPACK_IMPORTED_MODULE_0__.p)}}function s(t,n,e){return r.execute(t,n,e,null)}function c(){return r.supportsCurves()}


/***/ }),

/***/ 65897:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e={geodesic:0,loxodrome:1,"great-elliptic":2,"normal-section":3,"shape-preserving":4};


/***/ })

};
;