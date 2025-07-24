"use strict";
exports.id = 53986;
exports.ids = [53986];
exports.modules = {

/***/ 30037:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Br: () => (/* binding */ t),
/* harmony export */   Cq: () => (/* binding */ e),
/* harmony export */   _U: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e){return null!=r(e)||null!=u(e)}function t(e){return s.test(e)}function n(e){return r(e)??u(e)}function u(e){const t=new Date(e);return o(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function r(e){const t=s.exec(e);if(!t?.groups)return null;const n=t.groups,u=+n.year,r=+n.month-1,o=+n.day,i=+(n.hours??"0"),f=+(n.minutes??"0"),l=+(n.seconds??"0");if(i>23)return null;if(f>59)return null;if(l>59)return null;const c=n.ms??"0",m=c?+c.padEnd(3,"0").slice(0,3):0;let a;if(n.isUTC||!n.offsetSign)a=Date.UTC(u,r,o,i,f,l,m);else{const e=+n.offsetHours,t=+n.offsetMinutes;a=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(u,r,o,i,f,l,m)}return Number.isNaN(a)?null:a}const s=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;function o(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(f&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,u=0;for(;!t&&u<=e.length;)t=!i.test(e[u]),u++;n=!t}}return n}const i=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,f=!Number.isNaN(new Date("technology 10").getTime());


/***/ }),

/***/ 28208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* binding */ t),
/* harmony export */   Qf: () => (/* binding */ i),
/* harmony export */   Qh: () => (/* binding */ u),
/* harmony export */   RS: () => (/* binding */ n),
/* harmony export */   ez: () => (/* binding */ a),
/* harmony export */   lM: () => (/* binding */ e),
/* harmony export */   qK: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports baseTypedArrayMemory, estimateFixedArrayMemory */
/* harmony import */ var _typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62088);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(r){return 32+r.length}const n=16;function e(r){if(!r)return 0;let t=s;for(const n in r)r.hasOwnProperty(n)&&(t+=f(r[n],!1));return t}function u(r){if(!r)return 0;if("number"==typeof r[0])return i(r);if(Array.isArray(r))return o(r);let t=s;for(const n in r)r.hasOwnProperty(n)&&(t+=f(r[n]));return t}function o(r){const t=r.length;if(0===t||"number"==typeof r[0])return c(r,8);let n=a;for(let e=0;e<t;e++)n+=f(r[e]);return n}function f(r,e=!0){switch(typeof r){case"object":return e?u(r):s;case"string":return t(r);case"number":return n;case"boolean":return 4;default:return 8}}function i(...t){return t.reduce(((t,e)=>t+(e?(0,_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(e)?e.byteLength+y:Array.isArray(e)?c(e,n):0:0)),0)}function c(r,t){return a+r.length*t}const s=32,a=16,y=145;


/***/ }),

/***/ 53986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ V)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(54483);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(21332);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/ogc/ogcFeatureUtils.js
var ogcFeatureUtils = __webpack_require__(636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/capabilities.js
var capabilities = __webpack_require__(21200);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/layers/graphics/sources/OGCFeatureSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let C=class extends Loadable/* default */.A{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(t){return this.addResolvingPromise(this._loadOGCServices(this.layer,t)),this.when()}getSource(){const{featureDefinition:{collection:t,layerDefinition:e,spatialReference:s,supportedCrs:r},layer:{apiKey:o,customParameters:p,effectiveMaxRecordCount:i}}=this;return{type:"ogc-source",collection:t,layerDefinition:e,maxRecordCount:i,queryParameters:{apiKey:o,customParameters:p},spatialReference:s,supportedCrs:r}}queryExtent(t,e={}){return null}queryFeatureCount(t,e={}){return null}queryFeatures(t,e={}){return this.queryFeaturesJSON(t,e).then((t=>FeatureSet/* default */.A.fromJSON(t)))}queryFeaturesJSON(t,e={}){const s=this.getSource();return this.load(e).then((()=>(0,ogcFeatureUtils/* queryFeatureSetJSON */.bW)(s,t,e)))}queryObjectIds(t,e={}){return null}serviceSupportsSpatialReference(t){return!(!t.isWGS84&&!t.isWebMercator)||!!this.featureDefinition.supportedCrs[t.wkid]}_conformsToType(t,e){const s=new RegExp(`^${(0,string/* escapeRegExpString */.Cj)(e)}$`,"i");return t.conformsTo.some((t=>s.test(t)))??!1}_getCapabilities(t,e){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:e,maxRecordCountFactor:void 0,maxUniqueIDCount:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsCurrentUser:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPaginationOnAggregatedQueries:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,supportsTrueCurve:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:capabilities/* zeroQueryBins */.$,editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(t){const e=t?.components?.parameters;return e?.limit?.schema?.maximum??e?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(t){const e=t.storageCrs??ogcFeatureUtils/* crsDefault */.QE,s=(0,ogcFeatureUtils/* getSpatialReferenceWkid */.J0)(e);return null==s?SpatialReference/* default */.A.WGS84:new SpatialReference/* default */.A({wkid:s})}_getSupportedSpatialReferences(t,e){const s="#/crs",r=t.crs??[ogcFeatureUtils/* crsDefault */.QE],o=r.includes(s)?r.filter((t=>t!==s)).concat(e.crs??[]):r,p=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((t=>!p.test(t)))}async _loadOGCServices(t,s){const o=null!=s?s.signal:null,{apiKey:p,collectionId:i,customParameters:u,fields:n,geometryType:h,hasZ:S,objectIdField:C,timeInfo:R,url:w}=t,v={fields:n?.map((t=>t.toJSON())),geometryType:typeUtils/* typeKebabDictionary */.Ye.toJSON(h),hasZ:S??!1,objectIdField:C,timeInfo:R?.toJSON()},x={apiKey:p,customParameters:u,signal:o},j=await (0,ogcFeatureUtils/* getServerLandingPage */.Ki)(w,x),[F,O]=await Promise.all([(0,ogcFeatureUtils/* getServerConformance */.Px)(j,x),(0,ogcFeatureUtils/* getServerCollections */.bV)(j,x)]);if(!this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new Error/* default */.A("ogc-feature-layer:no-geojson-support","Server does not support geojson");const D=O.collections.find((({id:t})=>t===i));if(!D)throw new Error/* default */.A("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const T=this._conformsToType(F,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await (0,ogcFeatureUtils/* getServerOpenApi */.GA)(j,x):null,A=await (0,ogcFeatureUtils/* getCollectionDefinition */.GL)(D,v,x),b=this._getMaxRecordCount(T),q=this._getCapabilities(A.hasZ,b),P=this._getStorageSpatialReference(D).toJSON(),_=this._getSupportedSpatialReferences(D,O),Q=new RegExp(`^${(0,string/* escapeRegExpString */.Cj)(ogcFeatureUtils/* crsPrefix */.vJ)}`,"i"),B={};for(const e of _){const t=(0,ogcFeatureUtils/* getSpatialReferenceWkid */.J0)(e);null!=t&&(B[t]||(B[t]=e.replace(Q,"")))}this.featureDefinition={capabilities:q,collection:D,layerDefinition:A,spatialReference:P,supportedCrs:B}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"featureDefinition",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],C.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"type",void 0),C=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.OGCFeatureSource")],C);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/DisplayFilteredLayer.js + 2 modules
var DisplayFilteredLayer = __webpack_require__(57546);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js + 2 modules
var FeatureEffectLayer = __webpack_require__(42383);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js + 1 modules
var FeatureReductionLayer = __webpack_require__(46197);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
var OrderedLayer = __webpack_require__(87917);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TrackableLayer.js + 2 modules
var TrackableLayer = __webpack_require__(6907);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(52202);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(45352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js
var LabelClass = __webpack_require__(47659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(6488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/typeUtils.js + 11 modules
var support_typeUtils = __webpack_require__(94403);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
;// ./node_modules/@arcgis/core/layers/OGCFeatureLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const N=(0,fieldProperties/* defineFieldProperties */.p)();let Q=class extends((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,APIKeyMixin/* APIKeyMixin */.p)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)((0,BlendLayer/* BlendLayer */.dM)((0,OrderedLayer/* OrderedLayer */.fY)((0,TemporalLayer/* TemporalLayer */.e)((0,TrackableLayer/* TrackableLayer */.d)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,RefreshableLayer/* RefreshableLayer */.J)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new C({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}on(e,r){return super.on(e,r)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}createQuery(){return new Query/* default */.A}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,r){let t,i=!1;const o=r?.feature?.attributes,s=this.typeIdField&&o?.[this.typeIdField];return null!=s&&this.types&&(i=this.types.some((r=>r.id==s&&(t=r.domains?.[e],"inherited"===t?.type&&(t=this._getLayerDomain(e)),!0)))),i||t||(t=this._getLayerDomain(e)),t}queryFeatures(e,r){return this.load().then((()=>this.source.queryFeatures(Query/* default */.A.from(e)||this.createQuery(),r))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}async queryAttributeBins(e,r){throw new Error/* default */.A("OGCFeatureLayer","Layer source does not support queryAttributeBins capability")}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const r of this.fields)if(r.name===e&&r.domain)return r.domain;return null}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{origins:{service:{read:!0}}}})],Q.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],Q.prototype,"collectionId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Q.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Q.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],Q.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Q.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],Q.prototype,"effectiveMaxRecordCount",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],Q.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A],json:{origins:{service:{name:"layerDefinition.fields"}}}})],Q.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(N.fieldsIndex)],Q.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Extent/* default */.A,json:{origins:{service:{name:"layerDefinition.extent"}}}})],Q.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:typeUtils/* featureGeometryTypeKebabDictionary */.gy.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:typeUtils/* featureGeometryTypeKebabDictionary */.gy.read}}}}})],Q.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],Q.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!0})],Q.prototype,"isTable",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.w},write:!0}}}})],Q.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],Q.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],Q.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],Q.prototype,"maxRecordCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],Q.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["OGCFeatureLayer"]})],Q.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],Q.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],Q.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:support_typeUtils/* rendererTypes */.Hg,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:support_typeUtils/* webSceneRendererTypes */.XJ,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],Q.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* screenSizePerspectiveEnabled */.PY)],Q.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Q.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:SpatialReference/* default */.A,json:{origins:{service:{read:!0}}}})],Q.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],Q.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],Q.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],Q.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],Q.prototype,"types",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],Q.prototype,"url",void 0),Q=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.OGCFeatureLayer")],Q);const V=Q;


/***/ }),

/***/ 85747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N3: () => (/* binding */ o),
/* harmony export */   Om: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export OptimizedFeatureWithGeometry */
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28208);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91658);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65977);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t=null,e={},r,s,o=0){this.geometry=t,this.attributes=e,this.centroid=r,this.objectId=s,this.displayId=o}static fromJSON(t){const e=t.geometry?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(t.geometry):null,o=t.centroid?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(t.centroid):null,i=t.objectId;return new s(e,t.attributes,o,i)}weakClone(){const t=new s(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new s(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_2__/* .getCentroidOptimizedGeometry */ .Q)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__/* .estimateAttributesMemory */ .lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function o(t){return!!t.geometry?.coords?.length}class i extends (/* unused pure expression or super */ null && (s)){}


/***/ }),

/***/ 97011:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ 65977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28208);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=2;class e{constructor(t=[],s=[]){this.lengths=t??[],this.coords=s??[]}static fromJSON(t){return new e(t.lengths,t.coords)}static fromRect(t){const[s,o,r,h]=t,n=r-s,i=h-o;return new e([5],[s,o,n,0,0,i,-n,0,0,-i])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,s)=>t+s))}get usedMemory(){return 64+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__/* .estimateNumberArrayMemory */ .Qf)(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let o=0;o<this.lengths.length;o++){const r=this.lengths[o];if(r<3)continue;let h=this.coords[s*e],n=this.coords[s*e+1];for(let o=1;o<r;o+=1){const r=this.coords[s*(o+e)],i=this.coords[s*(o+e)+1];t+=-.5*(r-h)*(i+n),h=r,n=i}e+=r}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let o=0;o<this.lengths.length;o++){const r=this.lengths[o];for(let o=0;o<r;o++){t(this.coords[s*(o+e)],this.coords[s*(o+e)+1])}e+=r}}deltaDecode(){const t=this.clone(),{coords:s,lengths:e}=t;let o=0;for(const r of e){for(let t=1;t<r;t++)s[2*(o+t)]+=s[2*(o+t)-2],s[2*(o+t)+1]+=s[2*(o+t)-1];o+=r}return t}clone(t){if(0===this.lengths.length)return new e([],[this.coords[0],this.coords[1]]);const o=(0===this.lengths.length?1:this.lengths.reduce(((t,s)=>t+s)))*s,r=this.coords.slice(0,o);return t?(t.set(r),new e(this.lengths,t)):new e(Array.from(this.lengths),Array.from(r))}}


/***/ }),

/***/ 91658:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export lineCentroid */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,n){return t?n?4:3:n?3:2}function n(n,I,u,o){if(!I?.lengths.length)return null;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const N=n.coords,l=[],s=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:T}=I,f=t(u,o);let h=0;for(const t of c){const n=e(s,T,h,t,u,o);n&&l.push(n),h+=t*f}if(l.sort(((t,n)=>{let e=t[2]-n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),l.length){let t=6*l[0][2];N[0]=l[0][0]/t,N[1]=l[0][1]/t,u&&(t=6*l[0][4],N[2]=0!==t?l[0][3]/t:0),(N[0]<s[0]||N[0]>s[1]||N[1]<s[2]||N[1]>s[3]||u&&(N[2]<s[4]||N[2]>s[5]))&&(N.length=0)}if(!N.length){const t=I.lengths[0]?r(T,0,c[0],u,o):null;if(!t)return null;N[0]=t[0],N[1]=t[1],u&&t.length>2&&(N[2]=t[2])}return n}function e(n,e,r,I,u,o){const N=t(u,o);let l=r,s=r+N,c=0,T=0,f=0,h=0,i=0;for(let t=0,g=I-1;t<g;t++,l+=N,s+=N){const t=e[l],r=e[l+1],I=e[l+2],o=e[s],N=e[s+1],E=e[s+2];let g=t*N-o*r;h+=g,c+=(t+o)*g,T+=(r+N)*g,u&&(g=t*E-o*I,f+=(I+E)*g,i+=g),t<n[0]&&(n[0]=t),t>n[1]&&(n[1]=t),r<n[2]&&(n[2]=r),r>n[3]&&(n[3]=r),u&&(I<n[4]&&(n[4]=I),I>n[5]&&(n[5]=I))}if(h>0&&(h*=-1),i>0&&(i*=-1),!h)return null;const E=[c,T,.5*h];return u&&(E[3]=f,E[4]=.5*i),E}function r(n,e,r,l,s){const c=t(l,s);let T=e,f=e+c,h=0,i=0,E=0,g=0;for(let t=0,b=r-1;t<b;t++,T+=c,f+=c){const t=n[T],e=n[T+1],r=n[T+2],s=n[f],c=n[f+1],b=n[f+2],m=l?u(t,e,r,s,c,b):I(t,e,s,c);if(m)if(h+=m,l){const n=N(t,e,r,s,c,b);i+=m*n[0],E+=m*n[1],g+=m*n[2]}else{const n=o(t,e,s,c);i+=m*n[0],E+=m*n[1]}}return h>0?l?[i/h,E/h,g/h]:[i/h,E/h]:r>0?l?[n[e],n[e+1],n[e+2]]:[n[e],n[e+1]]:null}function I(t,n,e,r){const I=e-t,u=r-n;return Math.sqrt(I*I+u*u)}function u(t,n,e,r,I,u){const o=r-t,N=I-n,l=u-e;return Math.sqrt(o*o+N*N+l*l)}function o(t,n,e,r){return[t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,u){return[t+.5*(r-t),n+.5*(I-n),e+.5*(u-e)]}


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B2: () => (/* binding */ T),
/* harmony export */   BW: () => (/* binding */ D),
/* harmony export */   Ch: () => (/* binding */ wt),
/* harmony export */   DF: () => (/* binding */ E),
/* harmony export */   Di: () => (/* binding */ rt),
/* harmony export */   E2: () => (/* binding */ ot),
/* harmony export */   IE: () => (/* binding */ b),
/* harmony export */   Nl: () => (/* binding */ gt),
/* harmony export */   Q4: () => (/* binding */ Gt),
/* harmony export */   Rk: () => (/* binding */ Nt),
/* harmony export */   Ux: () => (/* binding */ ut),
/* harmony export */   Ye: () => (/* binding */ X),
/* harmony export */   ZF: () => (/* binding */ ft),
/* harmony export */   eU: () => (/* binding */ tt),
/* harmony export */   eY: () => (/* binding */ ht),
/* harmony export */   hK: () => (/* binding */ xt),
/* harmony export */   jH: () => (/* binding */ mt),
/* harmony export */   jQ: () => (/* binding */ Mt),
/* harmony export */   kz: () => (/* binding */ dt),
/* harmony export */   oN: () => (/* binding */ st),
/* harmony export */   q3: () => (/* binding */ at),
/* harmony export */   qK: () => (/* binding */ $),
/* harmony export */   qN: () => (/* binding */ R),
/* harmony export */   z5: () => (/* binding */ Q),
/* harmony export */   zv: () => (/* binding */ lt)
/* harmony export */ });
/* unused harmony exports convertFromMultipoint, convertFromMultipointFeatures, convertFromPointFeatures, convertFromPolyline, convertFromPolylineFeatures, convertToFeatures, convertToMultipointFeatures, getQuantizedBoundsOptimizedGeometry, getSignedQuantizedRingArea, removeCollinearVertices, unquantizeValue, unquantizeX, unquantizeY */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57725);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46373);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56053);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85747);
/* harmony import */ var _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97011);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65977);
/* harmony import */ var _data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function g(t,e){return t?e?4:3:e?3:2}const d=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.graphics.featureConversionUtils"),y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},p=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s},M=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2]},I=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+3]},w=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2],t[n+3]=e[o+3]};function G(t,e,n,o){if(t){if(n)return e&&o?w:M;if(e&&o)return I}else if(e&&o)return M;return p}function b({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function T({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function N({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function P({scale:t,translate:e},n){return Math.round((n-e[1])/t[1])}function x(t,e){return Z(t,e,0)}function F(t,e){return Z(t,-e,1)}function Z({scale:t,translate:e},n,o){return n*t[o]+e[o]}function E(t,e,n){return t?e?n?v(t):z(t):n?Y(t):j(t):null}function j(t){const e=t.coords;return{x:e[0],y:e[1]}}function k(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function z(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function V(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function Y(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function _(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function v(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function L(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function O(t,e,n,o){let r=j;n&&o?r=v:n?r=z:o&&(r=Y);for(const s of e){const{geometry:e,attributes:n}=s,o=null!=e?r(e):null;t.push({attributes:n,geometry:o})}return t}function S(t,e){return t&&e?L:t?V:e?_:k}function U(t,e,n,o,r){const s=S(n,o);for(const u of e){const e=null!=u.geometry?s(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,null,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function R(t,e,n=S(null!=e.z,null!=e.m)){return n(t,e)}function A(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?$(r,n,o):null});return t}function $(t,e,n){if(null==t)return null;const o=g(e,n),r=[];for(let s=0;s<t.coords.length;s+=o){const e=[];for(let n=0;n<o;n++)e.push(t.coords[s+n]);r.push(e)}return e?n?{points:r,hasZ:e,hasM:n}:{points:r,hasZ:e}:n?{points:r,hasM:n}:{points:r}}function q(t,e,n,o,r){const s=g(n,o);for(const u of e){const e=null!=u.geometry?B(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry,s):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,null,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function B(t,e,n=g(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const o=t.coords;let r=0;for(const s of e.points)for(let t=0;t<n;t++)o[r++]=s[t];return t}function C(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?D(r,n,o):null});return t}function D(t,e,n){if(!t)return null;const o=g(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{paths:u,hasZ:e,hasM:n}:{paths:u,hasZ:e}:n?{paths:u,hasM:n}:{paths:u}}function H(t,e,n,o,r){const s=g(n,o);for(const u of e){const e=null!=u.geometry?J(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry,s):null,n=null!=u.centroid?R(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.centroid):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,n,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function J(t,e,n=g(e.hasZ,e.hasM)){const{lengths:o,coords:r}=t;let s=0;for(const u of e.paths){for(const t of u)for(let e=0;e<n;e++)r[s++]=t[e];o.push(u.length)}return t}function K(t,e,n,o){for(const{geometry:r,attributes:s,centroid:u}of e){const e=null!=r?Q(r,n,o):null;if(null!=u){const n=j(u);t.push({attributes:s,centroid:n,geometry:e})}else t.push({attributes:s,geometry:e})}return t}function Q(t,e,n){if(!t)return null;const o=g(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{rings:u,hasZ:e,hasM:n}:{rings:u,hasZ:e}:n?{rings:u,hasM:n}:{rings:u}}function W(t,e,n,o,r){for(const s of e){const e=null!=s.geometry?X(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,s.geometry,n,o):null,u=(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(s,r);null!=s.centroid?t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,s.attributes,k(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,s.centroid),u)):t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,s.attributes,null,u))}return t}function X(t,e,n=e.hasZ,o=e.hasM){return tt(t,e.rings,n,o)}function tt(t,e,n,o){const r=g(n,o),{lengths:s,coords:u}=t;let l=0;Ft(t);for(const c of e){for(const t of c)for(let e=0;e<r;e++)u[l++]=t[e];s.push(c.length)}return t}const et=[],nt=[];function ot(t,e,n,o,r){et[0]=t;const[s]=rt(nt,et,e,n,o,r);return Zt(et),Zt(nt),s}function rt(e,n,o,r,s,u){if(Zt(e),!o){for(const t of n){const n=(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(t,u);e.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(null,t.attributes,null,n))}return e}switch(o){case"esriGeometryPoint":return U(e,n,r,s,u);case"esriGeometryMultipoint":return q(e,n,r,s,u);case"esriGeometryPolyline":return H(e,n,r,s,u);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return W(e,n,r,s,u);default:d().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${o}'`)),Zt(e)}return e}function st(t,e,n,o){nt[0]=t,it(et,nt,e,n,o);const r=et[0];return Zt(et),Zt(nt),r}function ut(e,n,o){if(null==e)return null;const r=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A;if("hasZ"in e&&null==n&&(n=e.hasZ),"hasM"in e&&null==o&&(o=e.hasM),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPoint */ .fT)(e)){return S(null!=n?n:null!=e.z,null!=o?o:null!=e.m)(r,e)}return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolygon */ .Bi)(e)?X(r,e,n,o):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(e)?J(r,e,g(n,o)):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isMultipoint */ .U9)(e)?B(r,e,g(n,o)):void d().error("convertFromGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${e}'`))}function lt(e,n,o,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(n){case"esriGeometryPoint":{let t=j;return o&&r?t=v:o?t=z:r&&(t=Y),t(s)}case"esriGeometryMultipoint":return $(s,o,r);case"esriGeometryPolyline":return D(s,o,r);case"esriGeometryPolygon":return Q(s,o,r);default:return d().error("convertToGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${n}'`)),null}}function ct(t,e){for(const n of e)t.push({attributes:n.attributes});return t}function it(e,n,o,r,s){if(Zt(e),null==o)return ct(e,n);switch(o){case"esriGeometryPoint":return O(e,n,r,s);case"esriGeometryMultipoint":return A(e,n,r,s);case"esriGeometryPolyline":return C(e,n,r,s);case"esriGeometryPolygon":return K(e,n,r,s);default:d().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${o}'`))}return e}function ft(t){const{spatialReference:e,transform:n,fields:o,hasM:r,hasZ:s,features:u,geometryType:l,exceededTransferLimit:c,queryGeometry:i,queryGeometryType:f}=t,a={features:it([],u,l,s,r),fields:o,geometryType:l,spatialReference:e,queryGeometry:lt(i,f,!1,!1)};return n&&(a.transform=n),c&&(a.exceededTransferLimit=c),r&&(a.hasM=r),s&&(a.hasZ=s),a}function at(t,e){const n=new _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{hasM:o,hasZ:r,features:s,spatialReference:u,geometryType:l,exceededTransferLimit:c,transform:i,fields:f}=t;return f&&(n.fields=f),n.geometryType=l??null,n.spatialReference=u??null,s&&rt(n.features,s,l,r,o,e),c&&(n.exceededTransferLimit=c),o&&(n.hasM=o),r&&(n.hasZ=r),i&&(n.transform=i),n}function ht(t){const{transform:e,features:n,hasM:o,hasZ:r}=t;if(!e)return t;for(const s of n)null!=s.geometry&&wt(s.geometry,s.geometry,o,r,e),null!=s.centroid&&wt(s.centroid,s.centroid,o,r,e);return t.transform=null,t}function mt(t,e){const{geometryType:n,features:o,hasM:r,hasZ:s}=e;if(!t)return e;for(let u=0;u<o.length;u++){const e=o[u],l=e.weakClone();l.geometry=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,gt(l.geometry,e.geometry,r,s,n,t),e.centroid&&(l.centroid=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,gt(l.centroid,e.centroid,r,s,"esriGeometryPoint",t)),o[u]=l}return e.transform=t,e}function gt(t,e,n,o,r,s,u=n,l=o){if(Ft(t),!e?.coords.length)return null;const c=y[r],{coords:i,lengths:f}=e,a=g(n,o),h=g(n&&u,o&&l),m=G(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,b(s,i[0]),T(s,i[1])),Ft(t,a,0),t;let d,p,M,I,w=0,N=0,P=N;for(const g of f){if(g<c)continue;let e=0;N=P,M=d=b(s,i[w]),I=p=T(s,i[w+1]),m(t.coords,i,N,w,M,I),e++,w+=a,N+=h;for(let n=1;n<g;n++,w+=a)M=b(s,i[w]),I=T(s,i[w+1]),M===d&&I===p||(m(t.coords,i,N,w,M-d,I-p),N+=h,e++,d=M,p=I);e>=c&&(t.lengths.push(e),P=N)}return Zt(t.coords,P),t.coords.length?t:null}function dt(t,e,n,o,r,s,u=n,l=o){if(Ft(t),!e?.coords.length)return null;const c=y[r],{coords:i,lengths:f}=e,a=g(n,o),h=g(n&&u,o&&l),m=G(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),Ft(t,a,0),t;let d=0;const p=s*s;for(const g of f){if(g<c){d+=g*a;continue}const e=t.coords.length/h,n=d,o=d+(g-1)*a;m(t.coords,i,t.coords.length,n,i[n],i[n+1]),pt(t.coords,i,a,p,m,n,o),m(t.coords,i,t.coords.length,o,i[o],i[o+1]);const r=t.coords.length/h-e;r>=c?t.lengths.push(r):Zt(t.coords,e*h),d+=g*a}return t.coords.length?t:null}function yt(t,e,n,o){const r=t[e],s=t[e+1],u=t[n],l=t[n+1],c=t[o],i=t[o+1];let f=u,a=l,h=c-f,m=i-a;if(0!==h||0!==m){const t=((r-f)*h+(s-a)*m)/(h*h+m*m);t>1?(f=c,a=i):t>0&&(f+=h*t,a+=m*t)}return h=r-f,m=s-a,h*h+m*m}function pt(t,e,n,o,r,s,u){let l,c=o,i=0;for(let f=s+n;f<u;f+=n)l=yt(e,f,s,u),l>c&&(i=f,c=l);c>o&&(i-s>n&&pt(t,e,n,o,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),u-i>n&&pt(t,e,n,o,r,i,u))}function Mt(t,e,n,u){if(!e?.coords?.length)return null;const l=g(n,u);let c=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=l){const n=t[e],o=t[e+1];c=Math.min(c,n),f=Math.max(f,n),i=Math.min(i,o),a=Math.max(a,o)}}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.is)(t)?(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .fromRectValues */ .BI)(t,c,i,f,a):(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(c,i,f,a,t),t}function It(t,e,n,o){const r=g(n,o),{lengths:s,coords:u}=e;let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=0;for(const h of s){let t=u[a],e=u[a+1];l=Math.min(t,l),c=Math.min(e,c),i=Math.max(t,i),f=Math.max(e,f),a+=r;for(let n=1;n<h;n++,a+=r){const n=u[a],o=u[a+1];t+=n,e+=o,n<0&&(l=Math.min(l,t)),n>0&&(i=Math.max(i,t)),o<0?c=Math.min(c,e):o>0&&(f=Math.max(f,e))}}return t[0]=l,t[1]=c,t[2]=i,t[3]=f,t}function wt(t,e,o,r,s){const{coords:u,lengths:l}=e,c=g(o,r);if(!u.length)return t!==e&&Ft(t),t;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .assertIsSome */ .Lw)(s);const{originPosition:i,scale:f,translate:a}=s,h=Et;h.originPosition=i;const m=h.scale;m[0]=f[0]??1,m[1]=-(f[1]??1),m[2]=f[2]??1,m[3]=f[3]??1;const d=h.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!l.length){for(let e=0;e<c;++e)t.coords[e]=Z(h,u[e],e);return t!==e&&Ft(t,c,0),t}let y=0;for(let n=0;n<l.length;n++){const e=l[n];t.lengths[n]=e;for(let n=0;n<c;++n)t.coords[y+n]=Z(h,u[y+n],n);let o=t.coords[y],r=t.coords[y+1];y+=c;for(let n=1;n<e;n++,y+=c){o+=u[y]*m[0],r+=u[y+1]*m[1],t.coords[y]=o,t.coords[y+1]=r;for(let e=2;e<c;++e)t.coords[y+e]=Z(h,u[y+e],e)}}return t!==e&&Ft(t,u.length,l.length),t}function Gt(t,e,n,o,r,s){if(Ft(t),t.lengths.push(...e.lengths),n===r&&o===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=g(n,o),l=G(n,o,r,s),c=e.coords;for(let e=0;e<c.length;e+=u)l(t.coords,c,t.coords.length,e,c[e],c[e+1])}return t}function bt(t,e,n,o,r){if(!e?.coords?.length)return null;const s=y[n],{coords:u,lengths:l}=e,c=G(o,r,o,r),i=g(o,r);let f=0,a=0,h=0,m=0;for(const g of l){a=m,c(t.coords,u,a,f,u[f],u[f+1]),f+=i;let e=u[f],n=u[f+1],o=e,r=n,l=n/e;a+=i,c(t.coords,u,a,f,o,r),f+=i;for(let s=2;s<g;s++){e=u[f],n=u[f+1];const s=n/e,h=l===s||!isFinite(l)&&!isFinite(s),m=h&&isFinite(s)?l>=0&&s>=0||l<=0&&s<=0:r>=0&&n>=0||r<=0&&n<=0;h&&m?(o+=e,r+=n):(o=e,r=n,a+=i),c(t.coords,u,a,f,o,r),f+=i,l=s}a+=i;const d=(a-m)/i;d>=s&&(t.lengths[h]=d,m=a,h++)}return t.coords.length>m&&(t.coords.length=m),t.lengths.length>h&&(t.lengths.length=h),t.coords.length&&t.lengths.length?t:null}function Tt(t,e,n,o){let r=0,s=t[o*e],u=t[o*(e+1)];for(let l=1;l<n;l++){const n=s+t[o*(e+l)],c=u+t[o*(e+l)+1],i=(n-s)*(c+u);s=n,u=c,r+=i}return.5*r}function Nt(t,e){const{coords:n,lengths:o}=t;let r=0,s=0;for(let u=0;u<o.length;u++){const t=o[u];s+=Tt(n,r,t,e),r+=t}return Math.abs(s)}function Pt(t,e,n,o){return 0===t*o-n*e&&t*n+e*o>0}function xt(t,e,n,o,r){const s=g(o,r);if(!t.lengths.length){if(t.coords.length<2)return null;const[n,o]=t.coords,r=N(e,n),s=P(e,o);return new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A([],[r,s])}const u=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A([],[0,0]),l=y[n],c="esriGeometryPolygon"===n||"esriGeometryPolyline"===n;let i=0,f=0;for(let a=0;a<t.lengths.length;a++){const n=t.lengths[a],o=f;let r=N(e,t.coords[s*i]),h=P(e,t.coords[s*i+1]);u.coords[f++]=r,u.coords[f++]=h;let m=0,g=0,d=1;for(let l=1;l<n;l++){const n=N(e,t.coords[s*(l+i)]),o=P(e,t.coords[s*(l+i)+1]);if(n!==r||o!==h){const t=n-r,e=o-h;c&&Pt(m,g,t,e)?(u.coords[f-2]+=t,u.coords[f-1]+=e,r+=t,h+=e):(u.coords[f++]=n,u.coords[f++]=o,r=n,h=o,m=t,g=e,d+=1)}}d<l?f=o:u.lengths.push(d),i+=n}return 0===u.lengths.length?null:u}function Ft(t,e=0,n=0){Zt(t.lengths,n),Zt(t.coords,e)}function Zt(t,e=0){t.length!==e&&(t.length=e)}const Et={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};


/***/ }),

/***/ 51774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BM: () => (/* binding */ I),
/* harmony export */   bd: () => (/* binding */ N),
/* harmony export */   sO: () => (/* binding */ E),
/* harmony export */   xD: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30037);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67488);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85747);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65977);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46227);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const c={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return c[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*f(e){if(e)switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*p(e,t={}){const{geometryType:n,objectIdField:i}=t;for(const s of e){const{geometry:e,properties:c,id:l}=s;if(e&&u(e.type)!==n)continue;const f=c||{};let p;i&&(p=f[i],null==l||p||(f[i]=p=l));const a=new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_3__/* .OptimizedFeature */ .Om(e?h(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,e,t):null,f,null,p);yield a}}function a(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){return!g(e)}function d(e){return g(e)}function g(e){let t=0;for(let n=0;n<e.length;n++){const o=e[n],r=e[(n+1)%e.length];t+=o[0]*r[1]-r[0]*o[1]}return t<=0}function m(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function h(e,t,n){switch(t.type){case"LineString":return w(e,t,n);case"MultiLineString":return P(e,t,n);case"MultiPoint":return j(e,t,n);case"MultiPolygon":return b(e,t,n);case"Point":return S(e,t,n);case"Polygon":return F(e,t,n)}}function w(e,t,n){return M(e,t.coordinates,n),e}function P(e,t,n){for(const o of t.coordinates)M(e,o,n);return e}function j(e,t,n){return M(e,t.coordinates,n),e}function b(e,t,n){for(const o of t.coordinates){G(e,o[0],n);for(let t=1;t<o.length;t++)k(e,o[t],n)}return e}function S(e,t,n){return O(e,t.coordinates,n),e}function F(e,t,n){const o=t.coordinates;G(e,o[0],n);for(let r=1;r<o.length;r++)k(e,o[r],n);return e}function G(e,t,n){const o=m(t);y(o)?T(e,o,n):M(e,o,n)}function k(e,t,n){const o=m(t);d(o)?T(e,o,n):M(e,o,n)}function M(e,t,n){for(const o of t)O(e,o,n);e.lengths.push(t.length)}function T(e,t,n){for(let o=t.length-1;o>=0;o--)O(e,t[o],n);e.lengths.push(t.length)}function O(e,t,n){const[o,r,i]=t;e.coords.push(o,r),n.hasZ&&e.coords.push(i||0)}function L(t){switch(typeof t){case"string":return (0,_core_date_js__WEBPACK_IMPORTED_MODULE_0__/* .isISO8601Date */ .Br)(t)?"esriFieldTypeDate":"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function E(e,o=4326){if(!e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:r}=e;if(!r)return;const i="string"==typeof r?r:"name"===r.type?r.properties.name:"EPSG"===r.type?r.properties.code:null,s=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWGS84 */ .oT)({wkid:o})?new RegExp(".*(CRS84H?|4326)$","i"):new RegExp(`.*(${o})$`,"i");if(!i||!s.test(i))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("geojson:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:r})}function I(e,t={}){const n=[],o=new Set,r=new Set;let c,p=!1,y=null,d=!1,{geometryType:g=null}=t;for(const s of l(e)){const{geometry:e,properties:t,id:l}=s;if(!e||(g||(g=u(e.type)),u(e.type)===g)){if(!p){p=a(f(e))}if(d||(d=null!=l,d&&(c=typeof l,t&&(y=Object.keys(t).filter((e=>t[e]===l))))),t&&y&&d&&null!=l&&(y.length>1?y=y.filter((e=>t[e]===l)):1===y.length&&(y=t[y[0]]===l?y:[])),t)for(const e in t){if(o.has(e))continue;const s=L(t[e]);if("unknown"===s){r.add(e);continue}r.delete(e),o.add(e);const c=(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeFieldName */ .rS)(e);c&&n.push({name:c,alias:e,type:s})}}}const m=(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .normalizeFieldName */ .rS)(1===y?.length&&y[0]||null)??void 0;if(m)for(const i of n)if(i.name===m&&(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isNumericField */ .WA)(i)){i.type="esriFieldTypeOID";break}return{fields:n,geometryType:g,hasZ:p,objectIdFieldName:m,objectIdFieldType:c,unknownFields:Array.from(r)}}function N(e,t){return Array.from(p(l(e),t))}


/***/ }),

/***/ 84347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $1: () => (/* binding */ E),
/* harmony export */   CR: () => (/* binding */ h),
/* harmony export */   MB: () => (/* binding */ d),
/* harmony export */   PC: () => (/* binding */ S),
/* harmony export */   Yx: () => (/* binding */ p),
/* harmony export */   bP: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _core_date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30037);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67488);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46227);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class l{constructor(t){this.description=t,this.code=null}}class a{constructor(t){this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error=new l(t)}}function p(t){return new a(t)}class c{constructor(t){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=t}}function f(t){return new c(t)}const g=new Set;function d(t,e,o,s=!1){g.clear();for(const i in o){const u=t.get(i);if(!u)continue;const l=m(u,o[i]);if(g.add(u.name),u&&(s||u.editable)){const t=(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .validateFieldValue */ .CJ)(u,l);if(t)return p((0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .validationErrorToString */ .uo)(t,u,l));e[u.name]=l}}for(const n of t.requiredFields??[])if(!g.has(n.name))return p(`missing required field "${n.name}"`);return null}function m(e,n){let r=n;return (0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isNumericField */ .WA)(e)&&"string"==typeof n?r=parseFloat(n):(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isStringField */ .yM)(e)&&null!=n&&"string"!=typeof n?r=String(n):(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isDateField */ .vE)(e)&&"string"==typeof n&&(r=(0,_core_date_js__WEBPACK_IMPORTED_MODULE_0__/* .parseDate */ ._U)(n)),(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .sanitizeNullFieldValue */ .WX)(r)}let y;function h(t,n){if(!t||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isValid */ .fn)(n))return t;if("rings"in t||"paths"in t){if(null==y)throw new TypeError("geometry engine not loaded");return y.simplify(n,t)}return t}async function I(){return null==y&&(y=await __webpack_require__.e(/* import() */ 7963).then(__webpack_require__.bind(__webpack_require__, 30344))),y}async function E(t,n){!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isValid */ .fn)(t)||"esriGeometryPolygon"!==n&&"esriGeometryPolyline"!==n||await I()}const S={supportsAutoIntervalBin:!0,supportsFixedIntervalBin:!0,supportsFixedBoundariesBin:!0,supportsDateBin:!0,supportsStackBy:!0,supportsSplitBy:!0,supportsNormalization:!0,supportedStatisticTypes:["COUNT","SUM","AVG","VAR","STDDEV","MIN","MAX","PERCENTILE_CONT","PERCENTILE_DISC","CentroidAggregate","EnvelopeAggregate","ConvexHullAggregate"],supportedNormalizationTypes:["field","log","naturalLog","percentOfTotal","squareRoot"]};


/***/ }),

/***/ 94763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e){return"portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):s(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GA: () => (/* binding */ N),
/* harmony export */   GL: () => (/* binding */ v),
/* harmony export */   I: () => (/* binding */ $),
/* harmony export */   J0: () => (/* binding */ C),
/* harmony export */   Ki: () => (/* binding */ q),
/* harmony export */   Px: () => (/* binding */ P),
/* harmony export */   QE: () => (/* binding */ x),
/* harmony export */   bV: () => (/* binding */ O),
/* harmony export */   bW: () => (/* binding */ R),
/* harmony export */   vJ: () => (/* binding */ k)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80861);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67488);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64672);
/* harmony import */ var _graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5525);
/* harmony import */ var _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97011);
/* harmony import */ var _graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51774);
/* harmony import */ var _graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77159);
/* harmony import */ var _graphics_sources_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84347);
/* harmony import */ var _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(51387);
/* harmony import */ var _support_fieldType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(94832);
/* harmony import */ var _time_constants_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(82506);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const F=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.ogc.ogcFeatureUtils"),I="startindex",T=new Set([I,"offset"]),k="http://www.opengis.net/def/crs/",x=`${k}OGC/1.3/CRS84`;var S;async function v(n,o,s={},a=5){const{links:l}=n,c=U(l,"items",S.geojson)||U(l,"http://www.opengis.net/def/rel/ogc/1.0/items",S.geojson);if(null==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:u,customParameters:d,signal:f}=s,g=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .makeAbsolute */ .s2)(c.href,n.landingPage.url),w={limit:a,...d,token:u},T=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .addQueryParameters */ .a6)(g,w),k={accept:S.geojson},{data:x}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(T,{signal:f,headers:k}),v=A(T,a,x.links)??I;(0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__/* .validateGeoJSON */ .sO)(x);const O=(0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__/* .inferLayerProperties */ .BM)(x,{geometryType:o.geometryType}),P=o.fields||O.fields||[],q=null!=o.hasZ?o.hasZ:O.hasZ,N=O.geometryType,C=o.objectIdField||O.objectIdFieldName||"OBJECTID";let R=o.timeInfo;const $=P.find((({name:e})=>e===C));if($)$.editable=!1,$.nullable=!1;else{if(!O.objectIdFieldType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");P.unshift({name:C,alias:C,type:"number"===O.objectIdFieldType?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(C!==O.objectIdFieldName){const e=P.find((({name:e})=>e===O.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}P===O.fields&&O.unknownFields.length>0&&F().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:O.unknownFields}});for(const e of P){if(null==e.name&&(e.name=e.alias),null==e.alias&&(e.alias=e.name),"esriFieldTypeOID"!==e.type&&"esriFieldTypeGlobalID"!==e.type&&(e.editable=null==e.editable||!!e.editable,e.nullable=null==e.nullable||!!e.nullable),!e.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:invalid-field-name","field name is missing",{field:e});if(!_support_fieldType_js__WEBPACK_IMPORTED_MODULE_12__/* .kebabDict */ .m.jsonValues.includes(e.type))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:invalid-field-type",`invalid type for field "${e.name}"`,{field:e})}if(R){const e=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A(P);if(R.startTimeField){const t=e.get(R.startTimeField);t?(R.startTimeField=t.name,t.type="esriFieldTypeDate"):R.startTimeField=null}if(R.endTimeField){const t=e.get(R.endTimeField);t?(R.endTimeField=t.name,t.type="esriFieldTypeDate"):R.endTimeField=null}if(R.trackIdField){const t=e.get(R.trackIdField);t?R.trackIdField=t.name:(R.trackIdField=null,F().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:R}}))}R.timeReference||={timeZoneIANA:_time_constants_js__WEBPACK_IMPORTED_MODULE_13__/* .utc */ .n$},R.startTimeField||R.endTimeField||(F().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:R}}),R=void 0)}return{drawingInfo:N?(0,_graphics_sources_support_clientSideDefaults_js__WEBPACK_IMPORTED_MODULE_9__/* .createDrawingInfo */ .F0)(N):null,extent:L(n),geometryType:N,fields:P,hasZ:!!q,objectIdField:C,paginationParameter:v,timeInfo:R}}async function O(n,r={}){const{links:o,url:s}=n,a=U(o,"data",S.json)||U(o,"http://www.opengis.net/def/rel/ogc/1.0/data",S.json);if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:l,customParameters:c,signal:u}=r,d=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .makeAbsolute */ .s2)(a.href,s),{data:f}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(d,{signal:u,headers:{accept:S.json},query:{...c,token:l}});for(const e of f.collections)e.landingPage=n;return f}async function P(n,r={}){const{links:o,url:s}=n,a=U(o,"conformance",S.json)||U(o,"http://www.opengis.net/def/rel/ogc/1.0/conformance",S.json);if(null==a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:l,customParameters:c,signal:u}=r,d=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .makeAbsolute */ .s2)(a.href,s),{data:f}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(d,{signal:u,headers:{accept:S.json},query:{...c,token:l}});return f}async function q(t,n={}){const{apiKey:i,customParameters:r,signal:o}=n,{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{signal:o,headers:{accept:S.json},query:{...r,token:i}});return s.url=t,s}async function N(t,n={}){const{links:r,url:o}=t,s=U(r,"service-desc",S.openapi);if(null==s)return F().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:a,customParameters:l,signal:c}=n,u=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .makeAbsolute */ .s2)(s.href,o),{data:d}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u,{signal:c,headers:{accept:S.openapi},query:{...l,token:a}});return d}function C(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),n=t?.groups;if(!n)return null;const{authority:i,code:r}=n;switch(i.toLowerCase()){case"ogc":switch(r.toLowerCase()){case"crs27":return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(r,10);return Number.isNaN(e)?null:e}default:return null}}async function R(e,t,n){const i=await $(e,t,n);return (0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .convertToFeatureSet */ .ZF)(i)}async function $(n,r,o){const{collection:{links:c,landingPage:{url:m}},layerDefinition:p,maxRecordCount:y,queryParameters:{apiKey:h,customParameters:b},spatialReference:F,supportedCrs:I}=n,T=U(c,"items",S.geojson)||U(c,"http://www.opengis.net/def/rel/ogc/1.0/items",S.geojson);if(null==T)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:k,num:x,start:v,timeExtent:O,where:P}=r;if(r.objectIds)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const q=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.fromJSON(F),N=r.outSpatialReference??q,C=N.isWGS84?null:W(N,I),R=K(k,I),$=M(O),G=Z(P),D=x??(null==v?y:10),L=0===v?void 0:v,{fields:A,geometryType:J,hasZ:z,objectIdField:E,paginationParameter:_}=p,B=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .makeAbsolute */ .s2)(T.href,m),{data:Q}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(B,{...o,query:{...b,...R,crs:C,datetime:$,query:G,limit:D,[_]:L,token:h},headers:{accept:S.geojson}}),V=(0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__/* .createOptimizedFeatures */ .bd)(Q,{geometryType:J,hasZ:z,objectIdField:E}),H=V.length===D&&!!U(Q.links??[],"next",S.geojson),X=new _support_FieldsIndex_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A(A);for(const e of V){const t={};(0,_graphics_sources_support_sourceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .mixAttributes */ .MB)(X,t,e.attributes,!0);for(const e of X.fields)e.nullable&&!(e.name in t)&&(t[e.name]=null);t[E]=e.attributes[E],e.attributes=t}if(!C&&N.isWebMercator)for(const e of V)if(null!=e.geometry&&null!=J){const t=(0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .convertToGeometry */ .zv)(e.geometry,J,z,!1);t.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.WGS84,e.geometry=(0,_graphics_featureConversionUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .convertFromGeometry */ .Ux)((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .project */ .Cv)(t,N))}for(const e of V)e.objectId=e.attributes[E];const Y=C||!C&&N.isWebMercator?N.toJSON():_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .wgs84 */ .KK,ee=new _graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A;return ee.exceededTransferLimit=H,ee.features=V,ee.fields=A,ee.geometryType=J,ee.hasZ=z,ee.spatialReference=Y,ee}function G(e){return null!=e&&"extent"===e.type}function W(e,t){const{isWebMercator:n,wkid:i}=e;if(!i)return null;const r=n?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return r?`${k}${r}`:null}function D(e){if(null==e)return"";const{xmin:t,ymin:n,xmax:i,ymax:r}=e;return`${t},${n},${i},${r}`}function M(e){if(null==e)return null;const{start:t,end:n}=e;return`${null!=t?t.toISOString():".."}/${null!=n?n.toISOString():".."}`}function Z(e){return null!=e&&e&&"1=1"!==e?e:null}function K(e,t){if(!G(e))return null;const{spatialReference:n}=e;if(!n||n.isWGS84)return{bbox:D(e)};const i=W(n,t);return null!=i?{bbox:D(e),"bbox-crs":i}:n.isWebMercator?{bbox:D((0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .project */ .Cv)(e,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.WGS84))}:null}function L(e){const t=e.extent?.spatial;if(!t)return null;const n=t.bbox[0],i=4===n.length,[r,o]=n,a=i?void 0:n[2];return{xmin:r,ymin:o,xmax:i?n[2]:n[3],ymax:i?n[3]:n[4],zmin:a,zmax:i?void 0:n[5],spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.WGS84.toJSON()}}function U(e,t,n){return e.find((({rel:e,type:i})=>e===t&&i===n))??e.find((({rel:e,type:n})=>e===t&&!n))}function A(e,t,n){if(!n)return;const i=U(n,"next",S.geojson),r=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(i?.href)?.query;if(!r)return;const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(e).query,a=Object.keys(s??{}),l=Object.entries(r).filter((([e])=>!a.includes(e))).find((([e,n])=>T.has(e.toLowerCase())&&Number.parseInt(n,10)===t)),c=l?.[0];return c}!function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"}(S||(S={}));


/***/ }),

/***/ 52202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48524);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83611);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84700);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const t of Object.keys(o))r[t]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[t]);return r}writeDomains(o,r){const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],n.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],n.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],n.prototype,"templates",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],n);


/***/ }),

/***/ 21200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ s),
/* harmony export */   P: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportsStackBy:!1,supportsSplitBy:!1,supportsSnapToData:!1,supportsReturnFullIntervalBin:!1,supportsFirstDayOfWeek:!1,supportsNormalization:!1,supportedStatistics:void 0,supportedNormalizationTypes:void 0},t={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsOrderByFields:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,maxUniqueIDCount:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsCurrentUser:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPaginationOnAggregatedQueries:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsTrueCurve:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ })

};
;