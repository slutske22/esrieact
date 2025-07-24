"use strict";
exports.id = 28064;
exports.ids = [28064];
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

/***/ 28064:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  execute: () => (/* binding */ E),
  executeMany: () => (/* binding */ g),
  isLoaded: () => (/* binding */ T),
  load: () => (/* binding */ d),
  supportsCurves: () => (/* binding */ projectOperator_j)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/SimpleGeometryCursor.js
var SimpleGeometryCursor = __webpack_require__(6530);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/pe.js
var pe = __webpack_require__(89349);
;// ./node_modules/@arcgis/core/geometry/operators/gx/operatorProject.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let o;function u(){return!!o&&(0,pe.i)()}async function i(){if(!u()){const[n,e]=await Promise.all([__webpack_require__.e(/* import() */ 22881).then(__webpack_require__.bind(__webpack_require__, 45262)).then((n=>n.aH)),__webpack_require__.e(/* import() */ 22881).then(__webpack_require__.bind(__webpack_require__, 45262)).then((n=>n.aG)).then((({injectPe:n})=>n)),(0,pe.l)()]);o=new n.OperatorProject,e(pe.p)}}function c(n,r,t){return o.clipToSpatialReference(n,r,null,t)}function operatorProject_a(n,r){return o.execute(n,r,null)}function s(r,t){const e=o.executeMany(new SimpleGeometryCursor.S(r),t,null);return Array.from(e)}function f(n,r){return o.foldInto360Range(n,r)}function l(n,r,t){return o.foldInto360RangeGeodetic(n,r,t)}function m(n,r,t){return o.normalizeGeometry(n,r,t)}function p(){return o.supportsCurves()}function j(n,r,t,e,u){return o.transform(n,r,t,e,u)}

;// ./node_modules/@arcgis/core/geometry/operators/projectOperator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n,projectOperator_s,projectOperator_c,projectOperator_i,projectOperator_m,projectOperator_f,projectOperator_p,projectOperator_u,h,projectOperator_l,x,projectOperator_j;function T(){return!!projectOperator_s&&u()}async function d(){if(!T()){const[t,o,a,T]=await Promise.all([__webpack_require__.e(/* import() */ 43153).then(__webpack_require__.bind(__webpack_require__, 65534)),__webpack_require__.e(/* import() */ 22881).then(__webpack_require__.bind(__webpack_require__, 45262)).then((e=>e.aI)).then((({CompositeGeographicTransformationEditor:e})=>e)),__webpack_require__.e(/* import() */ 22881).then(__webpack_require__.bind(__webpack_require__, 45262)).then((e=>e.aJ)).then((({create:e,createFromWKT:t})=>({create:e,createFromWKT:t}))),__webpack_require__.e(/* import() */ 22881).then(__webpack_require__.bind(__webpack_require__, 45262)).then((e=>e.aK)).then((({create:e,createEx:t,createFromAoi:r})=>({create:e,createEx:t,createFromAoi:r}))),i()]);n=t.fromExtent,projectOperator_s=t.fromGeometry,projectOperator_c=t.fromSpatialReference,projectOperator_i=t.getSpatialReference,projectOperator_m=t.toGeometry,projectOperator_f=o,projectOperator_p=a.create,projectOperator_u=a.createFromWKT,h=T.createEx,projectOperator_l=T.createFromAoi,x=T.create,projectOperator_j=p()}}function E(e,t,r={}){const a=k(projectOperator_i(e),t,r);return projectOperator_m(operatorProject_a(projectOperator_s(e),a),t)}function g(e,t,r={}){const o=e.map(projectOperator_s),n=k(projectOperator_i(e),t,r);return s(o,n).map((e=>projectOperator_m(e,t)))}function k(e,t,r={}){let o;const a=projectOperator_c(e),s=projectOperator_c(t);if(r?.geographicTransformation){const e=new projectOperator_f;e.setInputSpatialReference(a),e.setOutputSpatialReference(s);for(const t of r.geographicTransformation.steps){let r;r=t.wkid?projectOperator_p(t.wkid,t.isInverse):projectOperator_u(t.wkt,t.isInverse),e.add(r)}o=e.create()}else if(r?.areaOfInterestExtent)return projectOperator_l(a,s,n(r.areaOfInterestExtent).asEnvelope2D());return o?h(a,s,o):x(a,s)}


/***/ })

};
;