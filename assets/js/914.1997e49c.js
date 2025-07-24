"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 6530:
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

/***/ 72029:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hh: () => (/* binding */ u),
/* harmony export */   fz: () => (/* binding */ a),
/* harmony export */   g7: () => (/* binding */ i),
/* harmony export */   s1: () => (/* binding */ s),
/* harmony export */   zo: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_SimpleGeometryCursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6530);
/* harmony import */ var _chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89349);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let o;function s(){return!!o&&(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.i)()}async function u(){if(!s()){const[e,t]=await Promise.all([__webpack_require__.e(/* import() */ 95507).then(__webpack_require__.bind(__webpack_require__, 95507)),__webpack_require__.e(/* import() */ 22881).then(__webpack_require__.bind(__webpack_require__, 45262)).then((e=>e.aG)).then((({injectPe:e})=>e)),(0,_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.l)()]);o=new e.OperatorGeodesicBuffer,t(_chunks_pe_js__WEBPACK_IMPORTED_MODULE_1__.p)}}function i(e,r,n,t,s){return o.execute(e,r,n,t,s,!1,null)}function c(r,n,t,s,u,i){const c=o.executeMany(new _chunks_SimpleGeometryCursor_js__WEBPACK_IMPORTED_MODULE_0__.S(r),n,t,s,u,!1,i,null);return Array.from(c)}function a(){return o.supportsCurves()}


/***/ }),

/***/ 914:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   execute: () => (/* binding */ f),
/* harmony export */   executeMany: () => (/* binding */ l),
/* harmony export */   isLoaded: () => (/* binding */ u),
/* harmony export */   load: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3223);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5262);
/* harmony import */ var _gx_operatorGeodesicBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72029);
/* harmony import */ var _support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65897);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a,m,c;function u(){return!!a&&(0,_gx_operatorGeodesicBuffer_js__WEBPACK_IMPORTED_MODULE_2__/* .isLoaded */ .s1)()}async function p(){if(!u()){const[e]=await Promise.all([__webpack_require__.e(/* import() */ 17586).then(__webpack_require__.bind(__webpack_require__, 17586)),(0,_gx_operatorGeodesicBuffer_js__WEBPACK_IMPORTED_MODULE_2__/* .load */ .Hh)()]);a=e.fromGeometries,m=e.fromGeometry,c=e.toGeometry}}function f(e,r,i={}){let{curveType:s="geodesic",maxDeviation:a=NaN,unit:u}=i;u&&(r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .convertUnit */ .oU)(r,u,"meters"),a&&(a=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .convertUnit */ .oU)(a,u,"meters")));const p=m(e),f=p.getSpatialReference();return c((0,_gx_operatorGeodesicBuffer_js__WEBPACK_IMPORTED_MODULE_2__/* .execute */ .g7)(p.getGeometry(),f,_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_3__/* .geodeticCurveType */ .O[s],r,a),f)}function l(r,o,i={}){let{curveType:m="geodesic",maxDeviation:u=NaN,union:p=!1,unit:f}=i;f&&(o=o.map((e=>(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .convertUnit */ .oU)(e,f,"meters"))),u&&(u=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .convertUnit */ .oU)(u,f,"meters")));const[l,y]=a(r);return (0,_gx_operatorGeodesicBuffer_js__WEBPACK_IMPORTED_MODULE_2__/* .executeMany */ .zo)(l,y,_support_geodeticCurveType_js__WEBPACK_IMPORTED_MODULE_3__/* .geodeticCurveType */ .O[m],o,u,p).map((e=>c(e,y))).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .Ru)}


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