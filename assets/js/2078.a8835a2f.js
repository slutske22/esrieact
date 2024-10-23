"use strict";
exports.id = 2078;
exports.ids = [2078];
exports.modules = {

/***/ 62078:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeTopFeaturesQuery: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11499);
/* harmony import */ var _operations_queryTopFeatures_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69130);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57822);
/* harmony import */ var _support_TopFeaturesQuery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56051);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function s(s,p,u,a){const m=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(s),i={...a},{data:f}=await (0,_operations_queryTopFeatures_js__WEBPACK_IMPORTED_MODULE_1__/* .executeTopFeaturesQuery */ .Yb)(m,_support_TopFeaturesQuery_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.from(p),u,i);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(f)}


/***/ }),

/***/ 69130:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $K: () => (/* binding */ d),
/* harmony export */   KW: () => (/* binding */ m),
/* harmony export */   Yb: () => (/* binding */ p),
/* harmony export */   xs: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export queryToQueryStringParameters */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20909);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1171);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87926);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80323);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(27604);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u="Layer does not support extent calculation.";function y(t,e){const r=t.geometry,o=t.toJSON(),s=o;if(null!=r&&(s.geometry=JSON.stringify(r),s.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .$B)(r),s.inSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(r.spatialReference)),o.topFilter?.groupByFields&&(s.topFilter.groupByFields=o.topFilter.groupByFields.join(",")),o.topFilter?.orderByFields&&(s.topFilter.orderByFields=o.topFilter.orderByFields.join(",")),o.topFilter&&(s.topFilter=JSON.stringify(s.topFilter)),o.objectIds&&(s.objectIds=o.objectIds.join(",")),o.orderByFields&&(s.orderByFields=o.orderByFields.join(",")),o.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?o.outFields.includes("*")?s.outFields="*":s.outFields=o.outFields.join(","):delete s.outFields,o.outSR?s.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(o.outSR):r&&o.returnGeometry&&(s.outSR=s.inSR),o.returnGeometry&&delete o.returnGeometry,o.timeExtent){const t=o.timeExtent,{start:e,end:r}=t;null==e&&null==r||(s.time=e===r?e:`${e??"null"},${r??"null"}`),delete o.timeExtent}return s}async function p(t,e,r,n){const o=await c(t,e,"json",n);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_5__/* .applyFeatureSetZUnitScaling */ .q)(e,r,o.data),o}async function m(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:c(t,e,"json",r,{returnIdsOnly:!0})}async function d(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{count:0,extent:null}}:c(t,e,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const e=t.data;if(e.hasOwnProperty("extent"))return t;if(e.features)throw new Error(u);if(e.hasOwnProperty("count"))throw new Error(u);return t}))}function a(t,e,r){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,e,"json",r,{returnIdsOnly:!0,returnCountOnly:!0})}function c(n,i,l,u={},p={}){const m="string"==typeof n?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(n):n,d=i.geometry?[i.geometry]:[];return u.responseType="pbf"===l?"array-buffer":"json",(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .el)(d,null,u).then((e=>{const n=e?.[0];null!=n&&((i=i.clone()).geometry=n);const o=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .mapParameters */ .z)({...m.query,f:l,...p,...y(i,p)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .fj)(m.path,"queryTopFeatures"),{...u,query:{...o,...u.query}})}))}


/***/ }),

/***/ 56051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/rest/support/TopFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;let p=e=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new e({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],p.prototype,"groupByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],p.prototype,"topCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],p.prototype,"orderByFields",void 0),p=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.TopFilter")],p);const i=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
;// ../node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var y;const m=new jsonMap/* JSONMap */.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),h=new jsonMap/* JSONMap */.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let j=y=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new y((0,lang/* clone */.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],j.prototype,"cacheHint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],j.prototype,"distance",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:geometry/* geometryTypes */.yR,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],j.prototype,"geometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],j.prototype,"geometryPrecision",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],j.prototype,"maxAllowableOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],j.prototype,"num",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"objectIds",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],j.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],j.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],j.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"resultType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],j.prototype,"returnGeometry",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],j.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],j.prototype,"start",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("start"),(0,writer/* writer */.K)("num")],j.prototype,"writeStart",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"spatialRel",reader:m.read},write:{target:"spatialRel",writer:m.write}}})],j.prototype,"spatialRelationship",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeExtent/* default */.A,json:{write:!0}})],j.prototype,"timeExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i,json:{write:!0}})],j.prototype,"topFilter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:h.read,write:{writer:h.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance&&this.distance>0}}}}})],j.prototype,"units",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],j.prototype,"where",void 0),j=y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.TopFeaturesQuery")],j),j.from=(0,ensureType/* ensureType */.dp)(j);const S=j;


/***/ })

};
;