"use strict";
exports.id = 68735;
exports.ids = [68735,91851];
exports.modules = {

/***/ 94625:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t={convertToGEGeometry:s,exportPoint:n,exportPolygon:o,exportPolyline:a,exportMultipoint:c,exportExtent:m};function s(t,s){return null==s?null:t.convertJSONToGeometry(s)}class i{constructor(t,s,i){this.x=t,this.y=s,this.spatialReference=i,this.z=void 0,this.m=void 0}}function n(t,s,n){const e=new i(t.getPointX(s),t.getPointY(s),n),o=t.hasZ(s),h=t.hasM(s);return o&&(e.z=t.getPointZ(s)),h&&(e.m=t.getPointM(s)),e}class e{constructor(t,s,i,n){this.rings=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function o(t,s,i){return new e(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class h{constructor(t,s,i,n){this.paths=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function a(t,s,i){return new h(t.exportPaths(s),i,t.hasZ(s),t.hasM(s))}class r{constructor(t,s,i,n){this.points=t,this.spatialReference=s,this.hasZ=void 0,this.hasM=void 0,i&&(this.hasZ=i),n&&(this.hasM=n)}}function c(t,s,i){return new r(t.exportPoints(s),i,t.hasZ(s),t.hasM(s))}class x{constructor(t,s,i,n,e){this.xmin=t,this.ymin=s,this.xmax=i,this.ymax=n,this.spatialReference=e,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function m(t,s,i){const n=t.hasZ(s),e=t.hasM(s),o=new x(t.getXMin(s),t.getYMin(s),t.getXMax(s),t.getYMax(s),i);if(n){const i=t.getZExtent(s);o.zmin=i.vmin,o.zmax=i.vmax}if(e){const i=t.getMExtent(s);o.mmin=i.vmin,o.mmax=i.vmax}return o}


/***/ }),

/***/ 48277:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cv: () => (/* binding */ j),
/* harmony export */   Nk: () => (/* binding */ x),
/* harmony export */   lK: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3223);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27646);
/* harmony import */ var _geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94625);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67488);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64672);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=[0,0];function c(s,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=s(t.x,t.y,p),null!=t.z&&(e.z=t.z),null!=t.m&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=s(t.xmin,t.ymin,p),[e.xmax,e.ymax]=s(t.xmax,t.ymax,p),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:h(t.rings,s),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:h(t.paths,s),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:f(t.points,s),hasM:t.hasM,hasZ:t.hasZ}:null}function h(s,t){const e=[];for(const n of s)e.push(f(n,t));return e}function f(s,t){const e=[];for(const n of s){const s=t(n[0],n[1],[0,0]);e.push(s),n.length>2&&s.push(n[2]),n.length>3&&s.push(n[3])}return e}async function x(t,n){if(!t||!n)return;const r=Array.isArray(t)?t.map((s=>null!=s.geometry?s.geometry.spatialReference:null)).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isSome */ .Ru):[t];await (0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.initializeProjection)(r.map((s=>({source:s,dest:n}))))}const y=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .lngLatToXY */ .je),g=c.bind(null,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .xyToLngLat */ .tD);function j(s,t,e,u){if(!s)return null;if(e||(e=t,t=s.spatialReference),!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isValid */ .fn)(t)||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isValid */ .fn)(e)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .equals */ .aI)(t,e))return s;if((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .canProject */ .y7)(t,e)){const t=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isWebMercator */ .K8)(e)?y(s):g(s);return t.spatialReference=e,t}return (0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__/* .jsonAdapter */ .g,[s],t,e,null,u)[0]}class _{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(s,e,n,r){if(!s?.length||!e||!n||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .equals */ .aI)(e,n))return s;const i={geometries:s,inSpatialReference:e,outSpatialReference:n,geographicTransformation:r,resolve:(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)()};return this._jobs.push(i),this._timer??=setTimeout(this._process,10),i.resolve.promise}_process(){this._timer=null;const s=this._jobs.shift();if(!s)return;const{geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:o,geographicTransformation:u}=s;(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .canProject */ .y7)(e,i)?(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isWebMercator */ .K8)(i)?o(t.map(y)):o(t.map(g)):o((0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_2__.projectMany)(_geometry_geometryAdapters_json_js__WEBPACK_IMPORTED_MODULE_3__/* .jsonAdapter */ .g,t,e,i,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const M=new _;function b(s,t,e,n){return M.push(s,t,e,n)}


/***/ }),

/***/ 18160:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GC: () => (/* binding */ x),
/* harmony export */   T2: () => (/* binding */ B),
/* harmony export */   VY: () => (/* binding */ g),
/* harmony export */   dO: () => (/* binding */ h),
/* harmony export */   iJ: () => (/* binding */ w),
/* harmony export */   v8: () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5262);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27646);
/* harmony import */ var _geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34475);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56053);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43861);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67488);
/* harmony import */ var _projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(48277);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const g=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),S=Object.freeze({}),R="frequency";async function w(t,e,i){const r=t.bin;return r.onField&&(r.onField=r.onField.trim()),r.onExpression?.value&&(r.onExpression.value=r.onExpression.value.trim()),r.splitBy&&(r.splitBy.value&&(r.splitBy.value=r.splitBy.value.trim()),r.splitBy.outAlias&&(r.splitBy.outAlias=r.splitBy.outAlias.trim())),r.stackBy&&(r.stackBy.value&&(r.stackBy.value=r.stackBy.value.trim()),r.stackBy.outAlias&&(r.stackBy.outAlias=r.stackBy.outAlias.trim())),"normalizationField"in r.parameters&&r.parameters.normalizationField&&(r.parameters.normalizationField=r.parameters.normalizationField.trim()),t.outStatistics?.length||(t.outStatistics=[{statisticType:"count",onStatisticField:"1",outStatisticFieldName:R}]),x(t,e,i)}async function x(t,e,i){const{outFields:r,orderByFields:n,groupByFieldsForStatistics:a,outStatistics:o}=t;if(r)for(let s=0;s<r.length;s++)r[s]=r[s].trim();if(n)for(let s=0;s<n.length;s++)n[s]=n[s].trim();if(a)for(let s=0;s<a.length;s++)a[s]=a[s].trim();if(o)for(let s=0;s<o.length;s++)o[s].onStatisticField&&(o[s].onStatisticField=o[s].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),B(t,e,i)}async function B(t,e,i){if(!t)return null;let{where:r}=t;if(t.where=r=r?.trim(),(!r||/^1 *= *1$/.test(r)||e&&e===r)&&(t.where=null),!t.geometry)return t;let o=await v(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;o=(0,_geometry_support_extentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getGeometryExtent */ .HA)(o),o.spatialReference=e}if(o){await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .checkProjectionSupport */ .Nk)(o.spatialReference,i),o=j(o,i);const e=(await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .normalizeCentralMeridian */ .el)((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromJSON */ .rS)(o)))[0];if(null==e)throw S;const r="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,n=r&&F(o,i)?{densificationStep:8*r}:void 0,s=e.toJSON(),l=(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .project */ .Cv)(s,s.spatialReference,i,n);if(!l)throw S;l.spatialReference=i,t.geometry=l}return t}function F(t,e){if(!t)return!1;const i=t.spatialReference;return((0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isExtent */ .ZC)(t)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isPolygon */ .Bi)(t)||(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isPolyline */ .Rg)(t))&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .equals */ .aI)(i,e)&&!(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_3__.canProjectWithoutEngine)(i,e)}function j(t,e){const i=t.spatialReference;return F(t,e)&&(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isExtent */ .ZC)(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function v(e){const{distance:r,units:n}=e,a=e.geometry;if(null==r||"vertexAttributes"in a)return a;const s=a.spatialReference,l=n?g.fromJSON(n):(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getUnitString */ .Ij)(s),m=s&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isGeographic */ .EA)(s)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isWebMercator */ .K8)(s))?a:await (0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .checkProjectionSupport */ .Nk)(s,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .wgs84 */ .KK).then((()=>(0,_projectionSupport_js__WEBPACK_IMPORTED_MODULE_8__/* .project */ .Cv)(a,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .wgs84 */ .KK))),f=await __webpack_require__.e(/* import() */ 914).then(__webpack_require__.bind(__webpack_require__, 914));await f.load();const S=f.execute(m,r||1,{unit:l})??void 0;if(!S||!(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isPolygon */ .Bi)(S)||0===S.rings.length)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("unsupported-query:invalid-parameters","Invalid parameters for query by distance");return S}function h(t,e){return null==t?null:"string"==typeof t?e?new Date(`1970-01-01T${t}Z`).getTime():new Date(t).getTime():t instanceof Date?t.getTime():t}


/***/ }),

/***/ 68735:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  executeAttributeBinsQuery: () => (/* binding */ i)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js + 2 modules
var normalizeUtils = __webpack_require__(43861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/operations/urlUtils.js
var operations_urlUtils = __webpack_require__(49173);
;// ./node_modules/@arcgis/core/rest/query/operations/queryAttributeBins.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(t){const e=t.geometry,i=t.toJSON(),r=i;let u,l,a;if(null!=e&&(l=e.spatialReference,a=(0,spatialReferenceUtils/* srToRESTValue */.YX)(l),r.geometryType=(0,jsonUtils/* getJsonType */.$B)(e),r.geometry=JSON.stringify(e),r.inSR=a),i.outSR?(r.outSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(i.outSR),u=t.outSpatialReference):e&&(r.outSR=r.inSR,u=l),r.bin&&=JSON.stringify(r.bin),r.quantizationParameters&&=JSON.stringify(r.quantizationParameters),r.outStatistics&&=JSON.stringify(r.outStatistics),r.outTimeReference&&=JSON.stringify(r.outTimeReference),i.timeExtent){const t=i.timeExtent,{start:e,end:n}=t;null==e&&null==n||(r.time=e===n?e:`${e??"null"},${n??"null"}`),delete i.timeExtent}return t.defaultSpatialReference&&(0,spatialReferenceUtils/* equals */.aI)(l,u)&&(r.defaultSR=r.inSR,delete r.inSR,delete r.outSR),r}async function a(t,e,i){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{features:[]}}:await m(t,e,i)}async function m(n,o,s={}){const a="string"==typeof n?(0,urlUtils/* urlToObject */.An)(n):n,m=o.geometry?[o.geometry]:[],f=await (0,normalizeUtils/* normalizeCentralMeridian */.el)(m,null,{signal:s.signal}),y=f?.[0];null!=y&&((o=o.clone()).geometry=y);const p=(0,operations_urlUtils/* mapParameters */.z)({...a.query,f:"json",...l(o)});return (0,request/* default */.A)((0,urlUtils/* join */.fj)(a.path,"queryBins"),{...s,query:{...p,...s.query}})}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js + 1 modules
var AttributeBinsFeatureSet = __webpack_require__(54922);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/AttributeBinsQuery.js
var AttributeBinsQuery = __webpack_require__(14232);
;// ./node_modules/@arcgis/core/rest/query/executeAttributeBinsQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function i(i,s,u){const{data:m}=await a((0,utils/* parseUrl */.Dl)(i),AttributeBinsQuery["default"].from(s),u);return AttributeBinsFeatureSet/* default */.A.fromJSON(m)}


/***/ }),

/***/ 54922:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ AttributeBinsFeatureSet_i)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(20857);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
;// ./node_modules/@arcgis/core/AttributeBinsGraphic.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var i;let a=class extends(Clonable/* default */.A.ClonableMixin(Graphic/* default */.A)){static{i=this}constructor(t){super(t),this.stackedAttributes=null}cloneShallow(){return new i({...super.cloneShallow(),stackedAttributes:this.stackedAttributes})}toJSON(){return{...super.toJSON(),stackedAttributes:(0,lang/* clone */.o8)(this.stackedAttributes)}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"stackedAttributes",void 0),a=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.AttributeBinsGraphic")],a);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AttributeBinsFeatureSet_i=class extends(Clonable/* default */.A.ClonableMixin(FeatureSet/* default */.A)){constructor(){super(...arguments),this.features=[]}readFeatures(r,t){return this.readFeaturesWithClass(r,t,a)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[a],json:{write:!0}})],AttributeBinsFeatureSet_i.prototype,"features",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("features")],AttributeBinsFeatureSet_i.prototype,"readFeatures",null),AttributeBinsFeatureSet_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.AttributeBinsFeatureSet")],AttributeBinsFeatureSet_i);


/***/ }),

/***/ 14232:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8636);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56053);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(54483);
/* harmony import */ var _layers_graphics_data_queryUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(18160);
/* harmony import */ var _AutoIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(80595);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(75648);
/* harmony import */ var _DateBinParameters_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(35571);
/* harmony import */ var _FixedBoundariesBinParameters_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40147);
/* harmony import */ var _FixedIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(66442);
/* harmony import */ var _spatialRelationships_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(24193);
/* harmony import */ var _StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(23271);
/* harmony import */ var _chunks_TimeExtent_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(72991);
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(75235);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const b=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({asc:"ascending",desc:"descending"}),B={base:_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A,key:"type",typeMap:{"auto-interval":_AutoIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A,date:_DateBinParameters_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A,"fixed-boundaries":_FixedBoundariesBinParameters_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A,"fixed-interval":_FixedIntervalBinParameters_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A}};let R=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)){constructor(e){super(e),this.binParameters=null,this.binOrder="ascending",this.cacheHint=void 0,this.datumTransformation=null,this.defaultSpatialReference=null,this.distance=void 0,this.geometry=null,this.lowerBoundaryAlias=null,this.outSpatialReference=null,this.outStatistics=null,this.returnDistinctValues=null,this.spatialRelationship="intersects",this.timeExtent=null,this.upperBoundaryAlias=null,this.units=null,this.where="1=1"}set outTimeZone(e){this._set("outTimeZone",e),e&&!(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .isTimeZoneValid */ .wr)(e)&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).warn("#outTimeZone",`the parsed value '${e}' may not be a valid IANA time zone`)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({types:B,json:{name:"bin",write:!0}})],R.prototype,"binParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__/* .enumeration */ .e)(b)],R.prototype,"binOrder",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],R.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({json:{write:!0}})],R.prototype,"datumTransformation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,json:{name:"defaultSR",write:!0}})],R.prototype,"defaultSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],R.prototype,"distance",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({types:_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .geometryTypes */ .yR,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .fromJSON */ .rS,write:!0}})],R.prototype,"geometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],R.prototype,"lowerBoundaryAlias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,json:{name:"outSR",write:!0}})],R.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:[_StatisticDefinition_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A],json:{write:{enabled:!0,overridePolicy(){return{enabled:null!=this.outStatistics&&this.outStatistics.length>0}}}}})],R.prototype,"outStatistics",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({value:null,json:{name:"outTimeReference",read:{reader:e=>e.ianaTimeZone},write:{writer:(e,t,o)=>{e&&(t[o]={ianaTimeZone:e})}}}})],R.prototype,"outTimeZone",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],R.prototype,"returnDistinctValues",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_9__/* .enumeration */ .e)(_spatialRelationships_js__WEBPACK_IMPORTED_MODULE_20__/* .spatialRelKebabDict */ .x,{name:"spatialRel"})],R.prototype,"spatialRelationship",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:_chunks_TimeExtent_js__WEBPACK_IMPORTED_MODULE_22__.T,json:{write:!0}})],R.prototype,"timeExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],R.prototype,"upperBoundaryAlias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{read:_layers_graphics_data_queryUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .unitsKebabDict */ .VY.read,write:{writer:_layers_graphics_data_queryUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .unitsKebabDict */ .VY.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance}}}}})],R.prototype,"units",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({type:String,json:{write:!0}})],R.prototype,"where",void 0),R=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.rest.support.AttributeBinsQuery")],R),R.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_6__/* .ensureType */ .dp)(R);


/***/ }),

/***/ 80595:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21750);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75648);
/* harmony import */ var _NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40603);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(r,e,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(o,r instanceof Date?r.getTime():r,e)}let m=class extends((0,_NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__/* .NormalizationBinParametersMixin */ .K)(_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)){constructor(r){super(r),this.numBins=null,this.end=null,this.start=null,this.type="auto-interval"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{name:"parameters.numberOfBins",write:!0}})],m.prototype,"numBins",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.end",write:{writer:p}}})],m.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.start",write:{writer:p}}})],m.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({autoIntervalBin:"auto-interval"},{readOnly:!0})],m.prototype,"type",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.rest.support.AutoIntervalBinParameters")],m),m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureType */ .dp)(m);


/***/ }),

/***/ 75648:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ y)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
;// ./node_modules/@arcgis/core/rest/support/AttributeBinsGrouping.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new jsonMap/* JSONMap */.J({esriFieldTypeInteger:"integer",esriFieldTypeString:"string"});let l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.alias=null,this.responseType=null,this.type=null,this.value=null,this.valueType=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"outAlias",write:!0}})],l.prototype,"alias",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],l.prototype,"responseType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],l.prototype,"value",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(a)],l.prototype,"valueType",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.AttributeBinsGrouping")],l);const c=l;l.from=(0,ensureType/* ensureType */.dp)(l);

;// ./node_modules/@arcgis/core/rest/support/BinParametersBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const BinParametersBase_l=new jsonMap/* JSONMap */.J({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeDate:"date",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"}),BinParametersBase_a=new jsonMap/* JSONMap */.J({naturalLog:"natural-log",squareRoot:"square-root"});let y=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(e){super(e),this.expression=null,this.expressionValueType=null,this.field=null,this.firstDayOfWeek=null,this.hideUpperBound=null,this.splitBy=null,this.stackBy=null,this.transformation=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"onExpression.value",write:!0}})],y.prototype,"expression",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(BinParametersBase_l,{name:"onExpression.valueType"})],y.prototype,"expressionValueType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"onField",write:!0}})],y.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],y.prototype,"firstDayOfWeek",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],y.prototype,"hideUpperBound",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:{overridePolicy(){return{enabled:null!=this.splitBy?.value||null!=this.splitBy?.type}}}}})],y.prototype,"splitBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:{target:{stackBy:{type:c},jsonStyle:{type:String}},writer:(e,t)=>{e&&(t.stackBy=e.toJSON(),null!=e.responseType&&(t.jsonStyle=e.responseType))},overridePolicy(){return{enabled:null!=this.stackBy?.value||null!=this.stackBy?.type}}},read:{source:["stackBy","jsonStyle"],reader:(e,t)=>c.fromJSON({...t.stackBy,responseType:t.jsonStyle})}}})],y.prototype,"stackBy",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(BinParametersBase_a)],y.prototype,"transformation",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.BinParametersBase")],y);


/***/ }),

/***/ 35571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ DateBinParameters_m)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/BinParametersBase.js + 1 modules
var BinParametersBase = __webpack_require__(75648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/DateBinUtils.js
var DateBinUtils = __webpack_require__(92428);
;// ./node_modules/@arcgis/core/rest/support/DateBinTimeInterval.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let m=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.value=null,this.unit=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"number",write:!0}})],m.prototype,"value",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(DateBinUtils/* unitsDict */.g)],m.prototype,"unit",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.DateBinTimeInterval")],m);const a=m;m.from=(0,ensureType/* ensureType */.dp)(m);

;// ./node_modules/@arcgis/core/rest/support/DateBinParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(t,r,o){(0,object/* setDeepValue */.sM)(o,"string"==typeof t?t:t?.getTime(),r)}function l(t,e){const r=t.parameters[e];return r?"string"==typeof r?r:new Date(r):null}let DateBinParameters_m=class extends BinParametersBase/* default */.A{constructor(t){super(t),this.end=null,this.interval=null,this.offset=null,this.returnFullIntervalBin=!1,this.start=null,this.snapToData=null,this.type="date"}};(0,tslib_es6._)([(0,property/* property */.MZ)({cast:t=>null!=t?"string"==typeof t?t:new Date(t):null,json:{name:"parameters.end",read:{reader:(t,e)=>l(e,"end")},write:{writer:i}}})],DateBinParameters_m.prototype,"end",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{name:"parameters",write:!0}})],DateBinParameters_m.prototype,"interval",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{name:"parameters.offset",write:!0}})],DateBinParameters_m.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"parameters.returnFullIntervalBin",write:!0}})],DateBinParameters_m.prototype,"returnFullIntervalBin",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:t=>null!=t?"string"==typeof t?t:new Date(t):null,json:{name:"parameters.start",read:{reader:(t,e)=>l(e,"start")},write:{writer:i}}})],DateBinParameters_m.prototype,"start",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"parameters.snapToData",write:!0}})],DateBinParameters_m.prototype,"snapToData",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({dateBin:"date"},{readOnly:!0})],DateBinParameters_m.prototype,"type",void 0),DateBinParameters_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.DateBinParameters")],DateBinParameters_m),DateBinParameters_m.from=(0,ensureType/* ensureType */.dp)(DateBinParameters_m);


/***/ }),

/***/ 92428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1817);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .strict */ .O)()({year:"years",quarter:"quarters",month:"months",week:"weeks",day:"days",hour:"hours",minute:"minutes",second:"seconds"});


/***/ }),

/***/ 40147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21750);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75648);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(r){return r[0]instanceof Date}function c(r,e,s){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(s,r&&p(r)?r.map((r=>r.getTime())):r,e)}let n=class extends _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A{constructor(r){super(r),this.boundaries=[],this.type="fixed-boundaries"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.boundaries",write:{writer:c}}})],n.prototype,"boundaries",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({fixedBoundariesBin:"fixed-boundaries"},{readOnly:!0})],n.prototype,"type",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.rest.support.FixedBoundariesBinParameters")],n),n.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureType */ .dp)(n);


/***/ }),

/***/ 66442:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21750);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75648);
/* harmony import */ var _NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(40603);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(r,t,o){(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(o,r instanceof Date?r.getTime():r,t)}let m=class extends((0,_NormalizationBinParametersMixin_js__WEBPACK_IMPORTED_MODULE_9__/* .NormalizationBinParametersMixin */ .K)(_BinParametersBase_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A)){constructor(r){super(r),this.end=null,this.interval=null,this.start=null,this.type="fixed-interval"}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.end",write:{writer:n}}})],m.prototype,"end",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{name:"parameters.interval",write:!0}})],m.prototype,"interval",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{name:"parameters.start",write:{writer:n}}})],m.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({fixedIntervalBin:"fixed-interval"},{readOnly:!0})],m.prototype,"type",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.rest.support.FixedIntervalBinParameters")],m),m.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .ensureType */ .dp)(m);


/***/ })

};
;