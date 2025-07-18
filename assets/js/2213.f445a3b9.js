"use strict";
exports.id = 2213;
exports.ids = [2213];
exports.modules = {

/***/ 38561:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t){this.size=0,this._start=0,this.maxSize=t,this._buffer=new Array(t)}get entries(){return this._buffer}enqueue(t){if(this.size===this.maxSize){const s=this._buffer[this._start];return this._buffer[this._start]=t,this._start=(this._start+1)%this.maxSize,s}return this._buffer[(this._start+this.size++)%this.maxSize]=t,null}dequeue(){if(0===this.size)return null;const t=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,t}peek(){return 0===this.size?null:this._buffer[this._start]}find(t){if(0===this.size)return null;for(const s of this._buffer)if(null!=s&&t(s))return s;return null}clear(t){let s=this.dequeue();for(;null!=s;)t&&t(s),s=this.dequeue()}}


/***/ }),

/***/ 95694:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LQ: () => (/* binding */ y),
/* harmony export */   ag: () => (/* binding */ h),
/* harmony export */   pL: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21355);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,f=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,m=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,c={esriGeometryPoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPoint */ .DF,esriGeometryPolyline:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPolyline */ .BW,esriGeometryPolygon:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPolygon */ .z5,esriGeometryMultipoint:_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToMultipoint */ .qK};function y(r,t,o,i=r.hasZ,s=r.hasM){if(null==t)return null;const l=r.hasZ&&i,u=r.hasM&&s;if(o){const f=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .quantizeOptimizedGeometry */ .Nl)(m,t,r.hasZ,r.hasM,"esriGeometryPoint",o,i,s);return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPoint */ .DF)(f,l,u)}return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertToPoint */ .DF)(t,l,u)}function a(e,o,i,s,l,y,a=o,h=i){const p=o&&a,G=i&&h,g=null!=s?"coords"in s?s:s.geometry:null;if(null==g)return null;if(l){let t=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .generalizeOptimizedGeometry */ .kz)(f,g,o,i,e,l,a,h);return y&&(t=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .quantizeOptimizedGeometry */ .Nl)(m,t,p,G,e,y)),c[e]?.(t,p,G)??null}if(y){const r=(0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .quantizeOptimizedGeometry */ .Nl)(m,g,o,i,e,y,a,h);return c[e]?.(r,p,G)??null}return (0,_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .removeZMValues */ .Q4)(u,g,o,i,a,h),c[e]?.(u,p,G)??null}function h(n){return n&&p in n?JSON.parse(JSON.stringify(n,G)):n}const p="_geVersion",G=(n,e)=>n!==p?e:void 0;


/***/ }),

/***/ 35746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GC: () => (/* binding */ S),
/* harmony export */   T2: () => (/* binding */ j),
/* harmony export */   v8: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony export unitsKebabDict */
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59851);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92976);
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97303);
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90557);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1171);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87926);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(23783);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const R=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),g=Object.freeze({});async function S(e,t,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:o,outStatistics:s}=e;if(r)for(let a=0;a<r.length;a++)r[a]=r[a].trim();if(n)for(let a=0;a<n.length;a++)n[a]=n[a].trim();if(o)for(let a=0;a<o.length;a++)o[a]=o[a].trim();if(s)for(let a=0;a<s.length;a++)s[a].onStatisticField&&(s[a].onStatisticField=s[a].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),j(e,t,i)}async function j(e,t,i){if(!e)return null;let{where:o}=e;if(e.where=o=o?.trim(),(!o||/^1 *= *1$/.test(o)||t&&t===o)&&(e.where=null),!e.geometry)return e;let s=await d(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;s=(0,_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getGeometryExtent */ .HA)(s),s.spatialReference=t}if(s){await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .checkProjectionSupport */ .Nk)(s.spatialReference,i),s=x(s,i);const t=(await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeCentralMeridian */ .el)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .fromJSON */ .rS)(s)))[0];if(null==t)throw g;const r="quantizationParameters"in e&&e.quantizationParameters?.tolerance||"maxAllowableOffset"in e&&e.maxAllowableOffset||0,o=r&&w(s,i)?{densificationStep:8*r}:void 0,a=t.toJSON(),m=(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .project */ .Cv)(a,a.spatialReference,i,o);if(!m)throw g;m.spatialReference=i,e.geometry=m}return e}function w(e,t){if(!e)return!1;const r=e.spatialReference;return((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isExtent */ .ZC)(e)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolygon */ .Bi)(e)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(e))&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .equals */ .aI)(r,t)&&!(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_2__.canProjectWithoutEngine)(r,t)}function x(e,t){const i=e.spatialReference;return w(e,t)&&(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isExtent */ .ZC)(e)?{spatialReference:i,rings:[[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]]}:e}async function d(e){const{distance:i,units:r}=e,n=e.geometry;if(null==i||"vertexAttributes"in n)return n;const o=n.spatialReference,s=r?R.fromJSON(r):(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getUnitString */ .Ij)(o),a=o&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isGeographic */ .EA)(o)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isWebMercator */ .K8)(o))?n:await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .checkProjectionSupport */ .Nk)(o,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .WGS84 */ .w5).then((()=>(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_7__/* .project */ .Cv)(n,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .WGS84 */ .w5)));return(await U())(a.spatialReference,a,i,s)}async function U(){return(await __webpack_require__.e(/* import() */ 985).then(__webpack_require__.bind(__webpack_require__, 53366))).geodesicBuffer}


/***/ }),

/***/ 70759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tC: () => (/* binding */ I),
  c0: () => (/* binding */ P),
  xt: () => (/* binding */ v)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/contains.js
var contains = __webpack_require__(1364);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/intersectsBase.js
var intersectsBase = __webpack_require__(43525);
;// ../node_modules/@arcgis/core/geometry/support/intersects.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(s){return"mesh"===s?intersectsBase/* extentIntersectsExtent */.xB:(0,intersectsBase/* getFeatureExtentIntersector */.xK)(s)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
;// ../node_modules/@arcgis/core/layers/graphics/contains.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n,t){return n?t?4:3:t?3:2}function t(n,t,r,e){return o(n,t,r,e.coords[0],e.coords[1])}function contains_r(t,r,e,c,u,f){const s=n(u,f),{coords:i,lengths:l}=c;if(!l)return!1;for(let n=0,d=0;n<l.length;n++,d+=s)if(!o(t,r,e,i[d],i[d+1]))return!1;return!0}function o(t,r,o,c,u){if(!t)return!1;const f=n(r,o),{coords:s,lengths:i}=t;let l=!1,d=0;for(const n of i)l=e(l,s,f,d,n,c,u),d+=n*f;return l}function e(n,t,r,o,e,c,u){let f=n,s=o;for(let i=o,l=o+e*r;i<l;i+=r){s=i+r,s===l&&(s=o);const n=t[i],e=t[i+1],d=t[s],g=t[s+1];(e<u&&g>=u||g<u&&e>=u)&&n+(u-e)/(g-e)*(d-n)<c&&(f=!f)}return f}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(21355);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/OptimizedGeometry.js
var OptimizedGeometry = __webpack_require__(88443);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/geometryUtils.js
var geometryUtils = __webpack_require__(95694);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/projectionSupport.js
var projectionSupport = __webpack_require__(23783);
;// ../node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f="unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},S={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function G(e){return null!=e&&!0===S.spatialRelationship[e]}function g(e){return null!=e&&!0===S.queryGeometry[(0,jsonUtils/* getJsonType */.$B)(e)]}function j(e){return null!=e&&!0===S.layerGeometry[e]}function h(){return __webpack_require__.e(/* import() */ 985).then(__webpack_require__.bind(__webpack_require__, 53366))}function v(e,n,l,c,f){if((0,jsonUtils/* isPolygon */.Bi)(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=(0,featureConversionUtils/* convertFromPolygon */.Ye)(new OptimizedGeometry/* default */.A,n,!1,!1);return Promise.resolve((r=>t(e,!1,!1,r)))}if((0,jsonUtils/* isPolygon */.Bi)(n)&&"esriGeometryMultipoint"===l){const r=(0,featureConversionUtils/* convertFromPolygon */.Ye)(new OptimizedGeometry/* default */.A,n,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>contains_r(r,!1,!1,e,c,f)))}if((0,jsonUtils/* isExtent */.ZC)(n)&&"esriGeometryPoint"===l&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>(0,contains/* extentContainsPoint */.qz)(n,(0,geometryUtils/* getGeometry */.pL)(l,c,f,e))));if((0,jsonUtils/* isExtent */.ZC)(n)&&"esriGeometryMultipoint"===l&&"esriSpatialRelContains"===e)return Promise.resolve((e=>(0,contains/* extentContainsMultipoint */.rL)(n,(0,geometryUtils/* getGeometry */.pL)(l,c,f,e))));if((0,jsonUtils/* isExtent */.ZC)(n)&&"esriSpatialRelIntersects"===e){const e=s(l);return Promise.resolve((r=>e(n,(0,geometryUtils/* getGeometry */.pL)(l,c,f,r))))}return h().then((r=>{const t=r[R[e]].bind(null,n.spatialReference,n);return e=>t((0,geometryUtils/* getGeometry */.pL)(l,c,f,e))}))}async function P(r,t,i){const{spatialRel:s,geometry:o}=r;if(o){if(!G(s))throw new Error/* default */.A(f,"Unsupported query spatial relationship",{query:r});if((0,spatialReferenceUtils/* isValid */.fn)(o.spatialReference)&&(0,spatialReferenceUtils/* isValid */.fn)(i)){if(!g(o))throw new Error/* default */.A(f,"Unsupported query geometry type",{query:r});if(!j(t))throw new Error/* default */.A(f,"Unsupported layer geometry type",{query:r});if(r.outSR)return (0,projectionSupport/* checkProjectionSupport */.Nk)(r.geometry?.spatialReference,r.outSR)}}}function I(e){if((0,jsonUtils/* isExtent */.ZC)(e))return!0;if((0,jsonUtils/* isPolygon */.Bi)(e)){for(const r of e.rings){if(5!==r.length)return!1;if(r[0][0]!==r[1][0]||r[0][0]!==r[4][0]||r[2][0]!==r[3][0]||r[0][1]!==r[3][1]||r[0][1]!==r[4][1]||r[1][1]!==r[2][1])return!1}return!0}return!1}


/***/ }),

/***/ 71339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ t),
/* harmony export */   W: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function n(n,t){if(!n)return null;const l=t.featureAdapter,{startTimeField:u,endTimeField:e}=n;let r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;if(u&&e)await t.forEach((n=>{const t=l.getAttribute(n,u),o=l.getAttribute(n,e);null==t||isNaN(t)||(r=Math.min(r,t)),null==o||isNaN(o)||(i=Math.max(i,o))}));else{const n=u||e;await t.forEach((t=>{const u=l.getAttribute(t,n);null==u||isNaN(u)||(r=Math.min(r,u),i=Math.max(i,u))}))}return{start:r,end:i}}function t(n,t,r){if(!t||!n)return null;const{startTimeField:i,endTimeField:o}=n;if(!i&&!o)return null;const{start:s,end:a}=t;if(null===s&&null===a)return null;if(void 0===s&&void 0===a)return e();const c=r.getAttributeAsTimestamp?.bind(r)??r.getAttribute.bind(r);return i&&o?l(c,i,o,s,a):u(c,i||o,s,a)}function l(n,t,l,u,e){return null!=u&&null!=e?r=>{const i=n(r,t),o=n(r,l);return(null==i||i<=e)&&(null==o||o>=u)}:null!=u?t=>{const e=n(t,l);return null==e||e>=u}:null!=e?l=>{const u=n(l,t);return null==u||u<=e}:void 0}function u(n,t,l,u){return null!=l&&null!=u&&l===u?u=>n(u,t)===l:null!=l&&null!=u?e=>{const r=n(e,t);return null!=r&&r>=l&&r<=u}:null!=l?u=>{const e=n(u,t);return null!=e&&e>=l}:null!=u?l=>{const e=n(l,t);return null!=e&&e<=u}:void 0}function e(){return()=>!1}


/***/ }),

/***/ 91085:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ I),
/* harmony export */   q: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38561);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17306);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _chunks_rbush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73030);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4675);
/* harmony import */ var _Store2D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77500);
/* harmony import */ var _support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64399);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)();function d(t,e){return t<<16|e}function h(t){return(4294901760&t)>>>16}function c(t){return 65535&t}const I={getObjectId:t=>t.getObjectId(),getAttributes:t=>t.readAttributes(),getAttribute:(t,e)=>t.readAttribute(e),getAttributeAsTimestamp:(t,e)=>t.readAttributeAsTimestamp(e),cloneWithGeometry:(t,e)=>t,getGeometry:t=>t.readHydratedGeometry(),getCentroid:(t,e)=>t.readCentroid()};class u extends _Store2D_js__WEBPACK_IMPORTED_MODULE_4__/* .Store2D */ .m{constructor(a,r,n){super(a,r),this.featureAdapter=I,this.events=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A,this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new _core_CircularArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A(50),this._index=(0,_chunks_rbush_js__WEBPACK_IMPORTED_MODULE_2__.r)(9,(t=>({minX:this._storage.getXMin(t),minY:this._storage.getYMin(t),maxX:this._storage.getXMax(t),maxY:this._storage.getYMax(t)}))),this.mode=n}get storeStatistics(){let t=0,e=0,s=0;return this.forEach((a=>{const r=a.readGeometry();r&&(e+=r.isPoint?1:r.lengths.reduce(((t,e)=>t+e),0),s+=r.isPoint?1:r.lengths.length,t+=1)})),{featureCount:t,vertexCount:e,ringCount:s}}hasInstance(t){return this._featureSetsByInstance.has(t)}onTileData(t,e,s){if(null==e.addOrUpdate)return e;if(e.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const a=e.addOrUpdate.getCursor();for(;a.next();){const e=a.getDisplayId();this.setComputedAttributes(this._storage,a,e,t.scale,s)}return e}this._featureSetsByInstance.set(e.addOrUpdate.instance,e.addOrUpdate);const a=e.addOrUpdate.getCursor();for(;a.next();)this._insertFeature(a,t.scale,s);return this._spatialIndexInvalid=!0,this.events.emit("changed"),e}search(t){this._rebuildIndex();const e=t.id,s=this._indexSearchCache.find((t=>t.tileId===e));if(null!=s)return s.readers;const a=new Map,r=this._searchIndex(t.bounds),n=[];for(const i of r){const t=this._storage.getInstanceId(i),e=h(t),s=c(t);a.has(e)||a.set(e,[]);a.get(e).push(s)}return a.forEach(((t,e)=>{const s=this._featureSetsByInstance.get(e);n.push(_support_FeatureSetReaderPBFIndirect_js__WEBPACK_IMPORTED_MODULE_5__/* .FeatureSetReaderIndirect */ .e.from(s,t))})),this._indexSearchCache.enqueue({tileId:e,readers:n}),n}insert(t){const e=t.getCursor(),s=this._storage;for(;e.next();){const t=d(e.instance,e.getIndex()),a=e.getObjectId(),r=this._objectIdToDisplayId.get(a)??this._storage.createDisplayId();e.setDisplayId(r),s.setInstanceId(r,t),this._objectIdToDisplayId.set(a,r)}this._featureSetsByInstance.set(t.instance,t),this._spatialIndexInvalid=!0}remove(t){const e=this._objectIdToDisplayId.get(t);if(!e)return;const s=this._storage.getInstanceId(e),a=c(s),r=h(s),n=this._featureSetsByInstance.get(r);this._objectIdToDisplayId.delete(t),this._storage.releaseDisplayId(e),n.removeAtIndex(a),n.isEmpty&&this._featureSetsByInstance.delete(r),this._spatialIndexInvalid=!0}forEach(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=this._lookupFeature(s);t(a)}))}forEachUnsafe(t){this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e),a=h(s),r=c(s),n=this._getFeatureSet(a);n.setIndex(r),t(n)}))}forEachInBounds(t,e){const s=this._searchIndex(t);for(const a of s){e(this.lookupFeatureByDisplayId(a,this._storage))}}forEachBounds(t,e){this._rebuildIndex();for(const s of t){if(!s.readGeometry())continue;const t=s.getDisplayId();(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_3__/* .fromRectValues */ .BI)(o,this._storage.getXMin(t),this._storage.getYMin(t),this._storage.getXMax(t),this._storage.getYMax(t)),e(o)}}sweepFeatures(t,e,s){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach(((a,r)=>{t.has(a)||(e.releaseDisplayId(a),s&&s.unsetAttributeData(a),this._objectIdToDisplayId.delete(r))})),this.events.emit("changed")}sweepFeatureSets(t){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach(((e,s)=>{t.has(s)||this._featureSetsByInstance.delete(s)}))}lookupObjectId(t,e){const s=this.lookupFeatureByDisplayId(t,e);return null==s?null:s.getObjectId()}lookupDisplayId(t){return this._objectIdToDisplayId.get(t)}lookupFeatureByDisplayId(t,e){const s=e.getInstanceId(t);return this._lookupFeature(s)}lookupByDisplayIdUnsafe(t){const e=this._storage.getInstanceId(t),s=h(e),a=c(e),r=this._getFeatureSet(s);return r?(r.setIndex(a),r):null}_insertFeature(t,e,s){const a=this._storage,r=t.getObjectId(),n=d(t.instance,t.getIndex());a.getInstanceId(t.getDisplayId());let i=this._objectIdToDisplayId.get(r);i||(i=a.createDisplayId(),this._objectIdToDisplayId.set(r,i),this._spatialIndexInvalid=!0),t.setDisplayId(i),a.setInstanceId(i,n),this.setComputedAttributes(a,t,i,e,s)}_searchIndex(t){this._rebuildIndex();const e={minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]};return this._index.search(e)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const t=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach((e=>{const s=e.getCursor();for(;s.next();){const e=s.getDisplayId();this._storage.setBounds(e,s)&&t.push(e)}})):this._objectIdToDisplayId.forEach((e=>{const s=this._storage.getInstanceId(e);this._storage.setBounds(e,this._lookupFeature(s))&&t.push(e)})),this._index.clear(),this._index.load(t),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(t){const e=h(t),s=this._getFeatureSet(e);if(!s)return;const a=s.getCursor(),r=c(t);return a.setIndex(r),a}_getFeatureSet(t){return this._featureSetsByInstance.get(t)}}


/***/ }),

/***/ 77500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ a)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/diffUtils.js
var diffUtils = __webpack_require__(64442);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/arcadeOnDemand.js
var arcadeOnDemand = __webpack_require__(28965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/views/2d/arcade/callExpressionWithCursor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function callExpressionWithCursor_r(r,t,a){if(null==r)return null;const n=t.readArcadeFeature();t.contextTimeZone=a.$view?.timeZone;try{return r.evaluate({...a,$feature:n},r.services)}catch(u){return Logger/* default */.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",u),null}}

;// ../node_modules/@arcgis/core/views/2d/layers/features/Store2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a{constructor(e,s){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._storage=s,this._bitsets={computed:s.getBitset(s.createBitset())}}get storage(){return this._storage}invalidate(){this._bitsets.computed.clear()}async updateSchema(t,i){const a=(0,diffUtils/* diff */.Ui)(this._schema,i);if(this._schema=i,!i||null==a||!(0,diffUtils/* hasDiff */.EB)(a,"attributes"))return;(0,has/* default */.A)("esri-2d-update-debug")&&console.debug("Applying Update - Store:",a),this._bitsets.computed.clear(),t.targets[i.name]=!0;const r=i.attributes,o=[],c=[];for(const e in r){const s=r[e];switch(s.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(s));break;case"label-expression":o.push(this._createLabelArcadeComputedField(s));break;case"statistic":c.push(s)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some((e=>"expression"===e.type&&null!=e.expression&&e.expression.referencesScale())),this._statisticFields=c}setComputedAttributes(e,s,t,i,a){const r=this._bitsets.computed;if(!this._canCacheExpressionValue||!r.has(t)){r.set(t);for(const r of this._computedFields){const o=this._evaluateField(s,r,i,a);switch(r.resultType){case"numeric":e.setComputedNumericAtIndex(t,r.fieldIndex,o);break;case"string":e.setComputedStringAtIndex(t,r.fieldIndex,o)}}}}async _createArcadeComputedField(e){const s=this._sourceInfo.spatialReference,i=this._sourceInfo.fieldsIndex;return{...e,expression:await (0,arcadeOnDemand/* createRendererExpression */.Ad)(e.valueExpression,s,i)}}async _createLabelArcadeComputedField(e){const s=this._sourceInfo.spatialReference,t=this._sourceInfo.fieldsIndex,{createLabelFunction:i}=await __webpack_require__.e(/* import() */ 526).then(__webpack_require__.bind(__webpack_require__, 50526)),a=await i(e.label,t,s);return{...e,builder:a}}_evaluateField(e,s,t,a){switch(s.type){case"label-expression":{const t=e.readArcadeFeature();return s.builder.evaluate(t,a)||""}case"expression":{const{expression:r}=s;return callExpressionWithCursor_r(r,e,{$view:{scale:t,timeZone:a}})}}}}


/***/ }),

/***/ 92213:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ p)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/boundsUtils.js
var boundsUtils = __webpack_require__(36358);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/queryUtils.js
var queryUtils = __webpack_require__(35746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/spatialQuerySupport.js + 2 modules
var spatialQuerySupport = __webpack_require__(70759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/data/timeSupport.js
var timeSupport = __webpack_require__(71339);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14474);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/layers/features/FeatureStore2D.js
var FeatureStore2D = __webpack_require__(91085);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(76859);
;// ../node_modules/@arcgis/core/views/2d/layers/features/support/whereUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=Logger/* default */.A.getLogger("esri.views.2d.layers.features.support.whereUtils"),o={getAttribute:(e,r)=>e.readAttribute(r)};async function s(r,s){try{const n=await (0,sql/* parseWhereClause */.G)(r,s);if(!n.isStandardized){const r=new Error/* default */.A("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",n);a.error(r)}return e=>{const r=e.readArcadeFeature();return n.testFeature(r,o)}}catch(n){return a.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),e=>!0}}

;// ../node_modules/@arcgis/core/views/2d/layers/features/support/FeatureFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const d=1,m=2;class p{constructor(t){this._geometryBounds=(0,aaBoundingRect/* create */.vt)(),this._idToVisibility=new Map,this._serviceInfo=t}get hash(){return this._hash}check(t){return this._applyFilter(t)}clear(){const t=this._resetAllHiddenIds();return this.update(),{show:t,hide:[]}}invalidate(){this._idToVisibility.forEach(((t,e)=>{this._idToVisibility.set(e,0)}))}setKnownIds(t){for(const e of t)this._idToVisibility.set(e,d)}setTrue(t){const e=[],i=[],s=new Set(t);return this._idToVisibility.forEach(((t,r)=>{const o=!!(this._idToVisibility.get(r)&d),h=s.has(r);!o&&h?e.push(r):o&&!h&&i.push(r),this._idToVisibility.set(r,h?d|m:0)})),{show:e,hide:i}}createQuery(){const{geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r}=this;return Query/* default */.A.fromJSON({geometry:t,spatialRel:e,where:i,timeExtent:s,objectIds:r})}async update(t,e){this._hash=JSON.stringify(t);const i=await (0,queryUtils/* normalizeQueryLike */.T2)(t,null,e);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(t){if(!t?.where)return this._clause=null,void(this.where=null);this._clause=await s(t.where,this._serviceInfo.fieldsIndex),this.where=t.where}_setIdFilter(t){this._idsToShow=t?.objectIds&&new Set(t.objectIds),this._idsToHide=t?.hiddenIds&&new Set(t.hiddenIds),this.objectIds=t?.objectIds}async _setGeometryFilter(t){if(!t?.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const e=t.geometry,i=t.spatialRel||"esriSpatialRelIntersects",r=await (0,spatialQuerySupport/* getSpatialQueryOperator */.xt)(i,e,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);(0,boundsUtils/* getBoundsXY */.Rg)(this._geometryBounds,e),this._spatialQueryOperator=r,this.geometry=e,this.spatialRel=i}_setTimeFilter(i){if(this.timeExtent=this._timeOperator=null,i?.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=i.timeExtent,this._timeOperator=(0,timeSupport/* getTimeOperator */.I)(this._serviceInfo.timeInfo,i.timeExtent,FeatureStore2D/* featureAdapter */.Y);else{const s=new Error/* default */.A("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",i.timeExtent);Logger/* default */.A.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(s)}}_applyFilter(t){return this._filterByGeometry(t)&&this._filterById(t)&&this._filterByTime(t)&&this._filterByExpression(t)}_filterByExpression(t){return!this.where||this._clause(t)}_filterById(t){return(!this._idsToHide?.size||!this._idsToHide.has(t.getObjectId()))&&(!this._idsToShow?.size||this._idsToShow.has(t.getObjectId()))}_filterByGeometry(t){if(!this.geometry)return!0;const e=t.readHydratedGeometry();return!!e&&this._spatialQueryOperator(e)}_filterByTime(t){return null==this._timeOperator||this._timeOperator(t)}_resetAllHiddenIds(){const t=[];return this._idToVisibility.forEach(((e,i)=>{e&d||(this._idToVisibility.set(i,d),t.push(i))})),t}}


/***/ }),

/***/ 64399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42549);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r extends _FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetReader */ .Y{static from(e,t){return new r(e.copy(),t)}constructor(r,t){super(_FeatureSetReader_js__WEBPACK_IMPORTED_MODULE_0__/* .FeatureSetReader */ .Y.createInstance(),r.fullSchema()),this._currentIndex=-1,this._reader=r,this._indices=t}get fields(){return this._reader.fields}get hasNext(){return this._currentIndex+1<this._indices.length}getSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new r(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}get contextTimeZone(){return this._reader.contextTimeZone}set contextTimeZone(e){this._reader.contextTimeZone=e}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,r){return this._reader.setComputedNumericAtIndex(r,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,r){return this._reader.setComputedStringAtIndex(0,r)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,r){this._reader.setComputedNumericAtIndex(e,r)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,r){return this._reader.setComputedStringAtIndex(e,r)}transform(e,r,t,d){const a=this.copy();return a._reader=this._reader.transform(e,r,t,d),a}readAttribute(e,r=!1){return this._reader.readAttribute(e,r)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,r){return this._reader.setField(e,r)}keys(){return this._reader.keys()}castToText(e=!1){return this._reader.castToText(e)}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrated(){return this._reader.getXHydrated()}getYHydrated(){return this._reader.getYHydrated()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_readAttribute(e,r){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}


/***/ })

};
;