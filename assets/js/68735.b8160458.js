"use strict";
exports.id = 68735;
exports.ids = [68735];
exports.modules = {

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


/***/ })

};
;