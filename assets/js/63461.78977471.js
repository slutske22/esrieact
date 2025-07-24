"use strict";
exports.id = 63461;
exports.ids = [63461];
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

/***/ 63461:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(54483);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 5 modules
var workers = __webpack_require__(99722);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(77159);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/ogc/wfsUtils.js
var wfsUtils = __webpack_require__(28809);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js + 1 modules
var AttributeBinsFeatureSet = __webpack_require__(54922);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/time/constants.js
var constants = __webpack_require__(82506);
;// ./node_modules/@arcgis/core/layers/graphics/sources/WFSSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let F=class extends Loadable/* default */.A{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=(0,clientSideDefaults/* createCapabilities */.f)(!1,!1),this.type="wfs",this.refresh=(0,promiseUtils/* debounce */.sg)((async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:t}=await this._workerHandler.refresh(e);return t&&(this.sourceJSON.extent=t),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,t={}){const r=await this.queryFeaturesJSON(e,t);return FeatureSet/* default */.A.fromJSON(r)}async queryFeaturesJSON(e,t={}){return await this.load(t),this._workerHandler.queryFeatures(e?e.toJSON():void 0,t)}async queryFeatureCount(e,t={}){return await this.load(t),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,t)}async queryObjectIds(e,t={}){return await this.load(t),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,t)}async queryExtent(e,t={}){await this.load(t);const r=await this._workerHandler.queryExtent(e?e.toJSON():void 0,t);return{count:r.count,extent:Extent/* default */.A.fromJSON(r.extent)}}async querySnapping(e,t={}){return await this.load(t),this._workerHandler.querySnapping(e,t)}async queryAttributeBins(e,t={}){await this.load(t);const r=await this._workerHandler.queryAttributeBins(e?.toJSON(),t);return AttributeBinsFeatureSet/* default */.A.fromJSON(r)}async _createLoadOptions(e){const{url:r,customParameters:o,name:a,namespaceUri:s,fields:i,geometryType:n,maxRecordCount:l,maxPageCount:u,maxTotalRecordCount:p,swapXY:m}=this.layer,w="defaults"===this.layer.originOf("spatialReference")?void 0:this.layer.spatialReference;if(!r)throw new Error/* default */.A("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await (0,wfsUtils/* getCapabilities */.Fu)(r,{customParameters:o,...e}));const g=["fields","geometryType","name","namespaceUri","swapXY"].some((e=>null==this.layer[e])),S=g?await (0,wfsUtils/* getWFSLayerInfo */.O8)(this.wfsCapabilities,a,s,{spatialReference:w,customParameters:o,signal:e?.signal}):{...(0,wfsUtils/* prepareWFSLayerFields */.YW)(i??[]),geometryType:n,name:a,namespaceUri:s,spatialReference:w,swapXY:m},F=(0,wfsUtils/* findFeatureType */.mG)(this.wfsCapabilities.readFeatureTypes(),S.name,S.namespaceUri),x=typeUtils/* featureGeometryTypeKebabDictionary */.gy.toJSON(S.geometryType),{operations:O}=this.wfsCapabilities,j=O.GetFeature.url,C=O.GetFeature.outputFormat;return{customParameters:o,featureType:F,fields:S.fields?.map((e=>e.toJSON()))??[],geometryField:S.geometryField,geometryType:x,getFeatureUrl:j,getFeatureOutputFormat:C,maxRecordCount:l,maxPageCount:u,maxTotalRecordCount:p,objectIdField:S.objectIdField,spatialReference:S.spatialReference?.toJSON(),swapXY:!!S.swapXY}}async _startWorker(e){const[t,r]=await (0,promiseUtils/* eachAlways */.Lx)([this._createLoadOptions(e),(0,workers/* open */.ho)("WFSSourceWorker",{...e,strategy:(0,has/* default */.A)("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),a=t.error||r.error||null,n=r.value||null;if(a)throw n&&n.close(),a;const l=t.value;this._connection=r.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(l,e);for(const s of u.warnings)Logger/* default */.A.getLogger(this.layer).warn("#load()",`${s.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:s});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:constants/* utc */.n$},extent:u.extent,fields:l.fields,geometryType:l.geometryType,objectIdField:l.objectIdField,geometryField:l.geometryField,drawingInfo:(0,clientSideDefaults/* createDrawingInfo */.F0)(l.geometryType),name:l.featureType.title,wfsInfo:{name:l.featureType.name,featureUrl:l.getFeatureUrl,maxFeatures:l.maxRecordCount,swapXY:l.swapXY,supportedSpatialReferences:l.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:l.featureType.namespaceUri}}}};(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],F.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"wfsCapabilities",void 0),F=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.WFSSource")],F);

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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(75235);
;// ./node_modules/@arcgis/core/layers/WFSLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var J;const M=(0,fieldProperties/* defineFieldProperties */.p)();let Z=J=class extends((0,OrderedLayer/* OrderedLayer */.fY)((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)((0,BlendLayer/* BlendLayer */.dM)((0,TemporalLayer/* TemporalLayer */.e)((0,TrackableLayer/* TrackableLayer */.d)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A)))))))))))))){static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:m,wfsCapabilities:d}=e;return new J({customParameters:t,fields:r,geometryField:i,geometryType:o,name:s,namespaceUri:n,objectIdField:p,spatialReference:a,swapXY:l,url:m,wfsCapabilities:d})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new F({layer:this}),this.spatialReference=SpatialReference/* default */.A.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get capabilities(){return this.source?.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const o=e.filter((e=>e.name!==wfsUtils/* wfsOidFieldName */.i5));this.geometryField&&o.unshift(new Field/* default */.A({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,object/* setDeepValue */.sM)(r,o.map((e=>e.toJSON())),t)}get parsedUrl(){return (0,urlUtils/* urlToObject */.An)(this.url)}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){return this.source?.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}createQuery(){const e=new Query/* default */.A({returnGeometry:!0,outFields:["*"],where:this.definitionExpression||"1=1"}),{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex?.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Query/* default */.A.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Query/* default */.A.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Query/* default */.A.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Query/* default */.A.from(e)||this.createQuery(),t)))}async queryAttributeBins(e,t){const{source:r,capabilities:i}=await this.load();(0,featureLayerUtils/* validateBinsQuery */.ZJ)(e,i,"WFSLayer");const o=await __webpack_require__.e(/* import() */ 14232).then(__webpack_require__.bind(__webpack_require__, 14232)),s=await r.queryAttributeBins(o.default.from(e),t);if(s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh();return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Z.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Z.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Z.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],Z.prototype,"customParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],Z.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Z.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],Z.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Z.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],Z.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"featureUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],Z.prototype,"fields",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("fields")],Z.prototype,"writeFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(M.fieldsIndex)],Z.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{name:"extent"}})],Z.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Z.prototype,"geometryField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:typeUtils/* featureGeometryTypeKebabDictionary */.gy.read},write:{target:"layerDefinition.geometryType",writer:typeUtils/* featureGeometryTypeKebabDictionary */.gy.write,ignoreOrigin:!0},origins:{service:{read:typeUtils/* featureGeometryTypeKebabDictionary */.gy.read}}}})],Z.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Z.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],Z.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.w},write:!0}})],Z.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],Z.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],Z.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Z.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["WFS"]})],Z.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"maxRecordCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],Z.prototype,"maxPageCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],Z.prototype,"maxTotalRecordCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],Z.prototype,"mode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"namespaceUri",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacityDrawingInfo */.Ih)],Z.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(M.outFields)],Z.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Z.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],Z.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],Z.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:support_typeUtils/* rendererTypes */.Hg,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:support_typeUtils/* webSceneRendererTypes */.XJ,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],Z.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* screenSizePerspectiveEnabled */.PY)],Z.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Z.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],Z.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:[ensureType/* Integer */.jz],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"spatialReferences",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"swapXY",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],Z.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],Z.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],Z.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],Z.prototype,"version",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Z.prototype,"wfsCapabilities",null),Z=J=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.WFSLayer")],Z);const _=Z;


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

/***/ 28809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ ee),
/* harmony export */   Fu: () => (/* binding */ v),
/* harmony export */   O8: () => (/* binding */ W),
/* harmony export */   UH: () => (/* binding */ oe),
/* harmony export */   YW: () => (/* binding */ z),
/* harmony export */   i5: () => (/* binding */ F),
/* harmony export */   mG: () => (/* binding */ Y),
/* harmony export */   x$: () => (/* binding */ K)
/* harmony export */ });
/* unused harmony exports describeFeatureType, getFeatureTypeInfo, parseDescribeFeatureTypeResponse, parseGetCapabilitiesResponse */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(88938);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19759);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8000);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(27646);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67488);
/* harmony import */ var _geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(54483);
/* harmony import */ var _graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51774);
/* harmony import */ var _xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(78972);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63457);
/* harmony import */ var _support_Field_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45352);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46227);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const T="xlink:href",S="2.0.0",F="__esri_wfs_id__",x="wfs-layer:getWFSLayerTypeInfo-error",C="wfs-layer:empty-service",E="wfs-layer:feature-type-not-found",R="wfs-layer:geojson-not-supported",k="wfs-layer:kvp-encoding-not-supported",P="wfs-layer:malformed-json",j="wfs-layer:unknown-geometry-type",A="wfs-layer:unknown-field-type",N="wfs-layer:unsupported-spatial-reference",G="wfs-layer:unsupported-wfs-version";async function v(t,r){const n=U((await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:S,...r?.customParameters},signal:r?.signal})).data);return D(t,n),n}function U(e){const t=te(e);ne(t),ae(t);const r=t.firstElementChild,a=(0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .cache */ .PP)(O(r));return{operations:M(r),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const I=["json","application/json; subtype=geojson; charset=utf-8","application/json; subtype=geojson","application/json","geojson","application/geo+json"];function L(e){for(const t of I){const r=e.findIndex((e=>e.toLowerCase()===t));if(r>=0)return e[r]}return null}function M(e){let r=!0;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],o=[];if((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .visitXML */ .p)(e,{OperationsMetadata:{Parameter:e=>{if("outputformat"===e.getAttribute("name")?.toLowerCase())return{AllowedValues:{Value:({textContent:e})=>{e&&a.push(e)}}}},Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(T)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(T)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(T)}}},Parameter:e=>{if("outputformat"===e.getAttribute("name")?.toLowerCase())return{AllowedValues:{Value:({textContent:e})=>{e&&o.push(e)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{r="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),n.GetFeature.outputFormat=L(o)??L(a),!r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(k,"WFS service doesn't support key/value pair (KVP) encoding");if(null==n.GetFeature.outputFormat)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(R,"WFS service doesn't support GeoJSON output format");return n}function D(e,t){(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isHTTPSProtocol */ .m3)(e)&&((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .hasSameOrigin */ .FX)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .toHTTPS */ .lM)(t.operations.DescribeFeatureType.url)),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .hasSameOrigin */ .FX)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .toHTTPS */ .lM)(t.operations.GetFeature.url)))}function V(e){const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function O(e){return (0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .iterateXML */ .i)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},r=new Set;return (0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .visitXML */ .p)(e,{Name:e=>{const{name:r,prefix:n}=re(e.textContent);t.typeName=`${n}:${r}`,t.name=r,t.namespacePrefix=n,t.namespaceUri=e.lookupNamespaceURI(n)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON($(e))},DefaultCRS:e=>{const n=V(e);n&&(t.defaultSpatialReference=n,r.add(n))},OtherCRS:e=>{const t=V(e);t&&r.add(t)}}),t.title||(t.title=t.name),r.add(4326),t.supportedSpatialReferences.push(...r),t}}})}function $(e){let t,r,n,a;for(const o of e.children)switch(o.localName){case"LowerCorner":[t,r]=o.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[n,a]=o.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:r,xmax:n,ymax:a,spatialReference:_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .wgs84 */ .KK}}function Y(e,t,n){return (0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .find */ .I6)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function W(e,t,r,n={}){const{featureType:a,extent:o}=await X(e,t,r,n),{spatialReference:s}=oe(e.operations.GetFeature.url,a,n.spatialReference),{fields:i,geometryType:p,swapXY:u,objectIdField:c,geometryField:m}=await q(e,a,s,n);return{url:e.operations.GetCapabilities.url,name:a.name,namespaceUri:a.namespaceUri,fields:i,geometryField:m,geometryType:p,objectIdField:c,spatialReference:n.spatialReference??new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({wkid:a.defaultSpatialReference}),extent:o,swapXY:u,wfsCapabilities:e,customParameters:n.customParameters}}async function X(e,r,n,a={}){const o=e.readFeatureTypes(),s=r?Y(o,r,n):o.next().value,{spatialReference:i=new _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({wkid:s?.defaultSpatialReference})}=a;if(null==s)throw r?new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(E,`The type '${r}' could not be found in the service`):new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(C,"The service is empty");let m=s.extent;if(m&&!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .equals */ .aI)(m.spatialReference,i))try{await (0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.initializeProjection)(m.spatialReference,i,void 0,a),m=(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_4__.project)(m,i)}catch{throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(N,"Projection not supported")}return{extent:m,spatialReference:i,featureType:s}}async function q(e,r,n,a={}){const{typeName:o}=r,[s,i]=await Promise.allSettled([J(e.operations.DescribeFeatureType.url,o,a),_(e,o,n,a)]),p=e=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(x,`An error occurred while getting info about the feature type '${o}'`,{error:e});if("rejected"===s.status)throw p(s.reason);if("rejected"===i.status)throw p(i.reason);const{fields:u,errors:l}=s.value??{},c=s.value?.geometryType||i.value?.geometryType,m=i.value?.swapXY??!1;if(null==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(j,`The geometry type could not be determined for type '${o}`,{typeName:o,geometryType:c,fields:u,errors:l});return{...z(u??[]),geometryType:c,swapXY:m}}function z(e){const t=e.find((e=>"geometry"===e.type));let r=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),r||(r=new _support_Field_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({name:F,type:"oid",alias:F}),e.unshift(r)),{geometryField:t?.name??null,objectIdField:r.name,fields:e}}async function _(t,r,n,a={}){let o,s=!1;const[i,p]=await Promise.all([K(t.operations.GetFeature.url,r,n,t.operations.GetFeature.outputFormat,{...a,count:1}),(0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.operations.GetFeature.url,{responseType:"text",query:Z(r,n,void 0,{...a,count:1}),signal:a?.signal})]),u="FeatureCollection"===i.type&&i.features[0]?.geometry;if(u){let e;switch(o=_geometry_support_typeUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .featureGeometryTypeKebabDictionary */ .gy.fromJSON((0,_graphics_sources_geojson_geojson_js__WEBPACK_IMPORTED_MODULE_8__/* .getGeometryType */ .xD)(u.type)),u.type){case"Point":e=u.coordinates;break;case"LineString":case"MultiPoint":e=u.coordinates[0];break;case"MultiLineString":case"Polygon":e=u.coordinates[0][0];break;case"MultiPolygon":e=u.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(p.data);if(t){const r=e[0].toFixed(3),n=e[1].toFixed(3),a=parseFloat(t[1]).toFixed(3);r===parseFloat(t[2]).toFixed(3)&&n===a&&(s=!0)}}return{geometryType:o,swapXY:s}}async function J(t,r,n){return Q(r,(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:S,TYPENAME:r,TYPENAMES:r,...n?.customParameters},signal:n?.signal})).data)}function Q(e,n){const{name:a}=re(e),o=te(n);ae(o);const s=(0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .find */ .I6)((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .iterateXML */ .i)(o.firstElementChild,{element:e=>e}),(e=>e.getAttribute("name")===a));if(null!=s){const e=s.getAttribute("type"),t=e?(0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .find */ .I6)((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .iterateXML */ .i)(o.firstElementChild,{complexType:e=>e}),(t=>t.getAttribute("name")===re(e).name)):(0,_core_iteratorUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .find */ .I6)((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .iterateXML */ .i)(s,{complexType:e=>e}),(()=>!0));if(t)return B(t)}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(E,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(o)})}const H=new Set(["objectid","fid"]);function B(e){const r=[],n=[];let a;const o=(0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .iterateXML */ .i)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const s of o){const o=s.getAttribute("name");if(!o)continue;let i,p;if(s.hasAttribute("type")?i=re(s.getAttribute("type")).name:(0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .visitXML */ .p)(s,{simpleType:{restriction:e=>(i=re(e.getAttribute("base")).name,{maxLength:e=>{p=+e.getAttribute("value")}})}}),!i)continue;const u="true"===s.getAttribute("nillable");let l=!1;switch(i.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({name:o,alias:o,type:"integer",nullable:u,length:(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getFieldDefaultLength */ ._b)("integer")}));break;case"float":case"double":case"decimal":n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({name:o,alias:o,type:"double",nullable:u,length:(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getFieldDefaultLength */ ._b)("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({name:o,alias:o,type:"string",nullable:u,length:p??(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getFieldDefaultLength */ ._b)("string")}));break;case"datetime":case"date":n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({name:o,alias:o,type:"date",nullable:u,length:p??(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getFieldDefaultLength */ ._b)("date")}));break;case"pointpropertytype":a="point",l=!0;break;case"multipointpropertytype":a="multipoint",l=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",l=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",l=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":l=!0,r.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(j,`geometry type '${i}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:r.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(A,`Unknown field type '${i}'`,{type:(new XMLSerializer).serializeToString(e)}))}l&&n.push(new _support_Field_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({name:o,alias:o,type:"geometry",nullable:u}))}for(const t of n)if("integer"===t.type&&!t.nullable&&H.has(t.name.toLowerCase())){t.type="oid";break}return{geometryType:a,fields:n,errors:r}}async function K(r,n,a,o,s){let{data:i}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(r,{responseType:"text",query:Z(n,a,o,s),signal:s?.signal});i=i.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(i)}catch(p){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(P,"Error while parsing the response",{response:i,error:p})}}function Z(e,t,r,n){const a="number"==typeof t?t:t.wkid;return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:S,TYPENAMES:e,OUTPUTFORMAT:r,SRSNAME:"EPSG:"+a,STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}async function ee(t,r,n){const a=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:S,TYPENAMES:r,RESULTTYPE:"hits",...n?.customParameters},signal:n?.signal}),o=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(o?.groups)return+o.groups.numberMatched}function te(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function re(e){const[t,r]=e.split(":");return{prefix:r?t:"",name:r??t}}function ne(e){const r=e.firstElementChild?.getAttribute("version");if(r&&r!==S)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(G,`Unsupported WFS version ${r}. Supported version: ${S}`)}function ae(e){let r="",n="";if((0,_xmlUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .visitXML */ .p)(e.firstElementChild,{Exception:e=>(r=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`wfs-layer:${r}`,n)}function oe(e,t,r){const n={wkid:t.defaultSpatialReference},a=null!=r?.wkid?{wkid:r.wkid}:n;return{spatialReference:a,getFeatureSpatialReference:(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_9__/* .isArcGISUrl */ .Fi)(e)||a.wkid&&t.supportedSpatialReferences.includes(a.wkid)?{wkid:a.wkid}:{wkid:t.defaultSpatialReference}}}


/***/ }),

/***/ 78972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ n),
/* harmony export */   p: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(n,c){if(n&&c)for(const f of n.children)if(f.localName in c){const n=c[f.localName];if("function"==typeof n){const c=n(f);c&&o(f,c)}else o(f,n)}}function*n(o,c){for(const f of o.children)if(f.localName in c){const o=c[f.localName];"function"==typeof o?yield o(f):yield*n(f,o)}}


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