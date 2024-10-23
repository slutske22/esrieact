"use strict";
exports.id = 1743;
exports.ids = [1743,7724];
exports.modules = {

/***/ 1743:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  executeRelationshipQuery: () => (/* binding */ n),
  executeRelationshipQueryForCount: () => (/* binding */ u)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(11499);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(87926);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/operations/urlUtils.js
var urlUtils = __webpack_require__(80323);
;// ../node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r(e,o){const r=e.toJSON();return r.objectIds&&(r.objectIds=r.objectIds.join(",")),r.orderByFields&&(r.orderByFields=r.orderByFields.join(",")),r.outFields&&!o?.returnCountOnly?r.outFields.includes("*")?r.outFields="*":r.outFields=r.outFields.join(","):delete r.outFields,r.outSR&&(r.outSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(r.outSR)),r.dynamicDataSource&&(r.layer=JSON.stringify({source:r.dynamicDataSource}),delete r.dynamicDataSource),r}async function s(e,t,o){const r=await a(e,t,o),s=r.data,n=s.geometryType,d=s.spatialReference,c={};for(const a of s.relatedRecordGroups){const e={fields:void 0,objectIdFieldName:void 0,geometryType:n,spatialReference:d,hasZ:!!s.hasZ,hasM:!!s.hasM,features:a.relatedRecords};if(null!=a.objectId)c[a.objectId]=e;else for(const t of Object.keys(a))"relatedRecords"!==t&&(c[a[t]]=e)}return{...r,data:c}}async function queryRelatedRecords_n(e,t,o){const r=await a(e,t,o,{returnCountOnly:!0}),s=r.data,n={};for(const a of s.relatedRecordGroups)null!=a.objectId&&(n[a.objectId]=a.count);return{...r,data:n}}async function a(t,s,n={},a){const d=(0,urlUtils/* mapParameters */.z)({...t.query,f:"json",...a,...r(s,a)});return (0,request/* default */.A)(t.path+"/queryRelatedRecords",{...n,query:{...n.query,...d}})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var RelationshipQuery = __webpack_require__(97724);
;// ../node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function n(e,n,u){n=RelationshipQuery["default"].from(n);const a=(0,utils/* parseUrl */.Dl)(e);return s(a,n,u).then((t=>{const r=t.data,e={};return Object.keys(r).forEach((t=>e[t]=FeatureSet/* default */.A.fromJSON(r[t]))),e}))}async function u(r,o,n){o=RelationshipQuery["default"].from(o);const u=(0,utils/* parseUrl */.Dl)(r);return queryRelatedRecords_n(u,o,{...n}).then((t=>t.data))}


/***/ }),

/***/ 97724:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(77542);
/* harmony import */ var _layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(44360);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(78983);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;let c=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(t){super(t),this.cacheHint=void 0,this.dynamicDataSource=void 0,this.gdbVersion=null,this.geometryPrecision=void 0,this.historicMoment=null,this.maxAllowableOffset=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.relationshipId=void 0,this.start=void 0,this.num=void 0,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.where=null}_writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}writeStart(t,e){e.resultOffset=this.start,e.resultRecordCount=this.num||10,this.start>0&&null==this.where&&(e.definitionExpression="1=1")}clone(){return new u((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8)({cacheHint:this.cacheHint,dynamicDataSource:this.dynamicDataSource,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&new Date(this.historicMoment.getTime()),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,start:this.start,num:this.num,returnGeometry:this.returnGeometry,where:this.where,returnZ:this.returnZ,returnM:this.returnM}))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],c.prototype,"cacheHint",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_layers_support_source_DataLayerSource_js__WEBPACK_IMPORTED_MODULE_8__/* .DataLayerSource */ .L,json:{write:!0}})],c.prototype,"dynamicDataSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"gdbVersion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"geometryPrecision",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Date})],c.prototype,"historicMoment",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("historicMoment")],c.prototype,"_writeHistoricMoment",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],c.prototype,"maxAllowableOffset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[Number],json:{write:!0}})],c.prototype,"objectIds",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"orderByFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[String],json:{write:!0}})],c.prototype,"outFields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],c.prototype,"outSpatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"relationshipId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultOffset"}}})],c.prototype,"start",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("start"),(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_7__/* .writer */ .K)("num")],c.prototype,"writeStart",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],c.prototype,"num",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],c.prototype,"returnGeometry",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnM",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],c.prototype,"returnZ",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:{source:"definitionExpression"},write:{target:"definitionExpression"}}})],c.prototype,"where",void 0),c=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.support.RelationshipQuery")],c),c.from=(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureType */ .dp)(c);const d=c;


/***/ })

};
;