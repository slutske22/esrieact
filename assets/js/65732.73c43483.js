"use strict";
exports.id = 65732;
exports.ids = [65732];
exports.modules = {

/***/ 65732:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ oe)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(70214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/layers/support/PurgeOptions.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var r;let i=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}static{r=this}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],i.prototype,"age",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],i.prototype,"ageReceived",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],i.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],i.prototype,"maxObservations",void 0),i=r=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.PurgeOptions")],i);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/streamLayerUtils.js
var streamLayerUtils = __webpack_require__(14204);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(29221);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(99650);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/typeUtils.js + 11 modules
var support_typeUtils = __webpack_require__(94403);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(93695);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
;// ./node_modules/@arcgis/core/layers/StreamLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const te=(0,fieldProperties/* defineFieldProperties */.p)();function re(e,t){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let ie=class extends((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)((0,BlendLayer/* BlendLayer */.dM)((0,TemporalLayer/* TemporalLayer */.e)((0,TrackableLayer/* TrackableLayer */.d)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)(Clonable/* default */.A.ClonableMixin(Layer/* default */.A))))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new i,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{const{save:i,saveAs:o}=await __webpack_require__.e(/* import() */ 8380).then(__webpack_require__.bind(__webpack_require__, 8380));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,t);case interfaces/* SaveOperationType */.X.SAVE_AS:return o(this,r,t)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new Error/* default */.A("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){t=t.layerDefinition||t;const i=t.drawingInfo?.renderer;if(i){const e=(0,jsonUtils/* read */.L)(i,t,r)||void 0;return e||Logger/* default */.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}return (0,featureLayerUtils/* createDefaultRenderer */.PD)(t,r)}async connect(e){const[{createConnection:t}]=await Promise.all([__webpack_require__.e(/* import() */ 20248).then(__webpack_require__.bind(__webpack_require__, 20248)),this.load()]),r=this.geometryType?typeUtils/* featureGeometryTypeKebabDictionary */.gy.toJSON(this.geometryType):null,{customParameters:i=null,definitionExpression:o=null,geometryDefinition:n=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:p=20,spatialReference:l=this.spatialReference}=e||this.createConnectionParameters(),m=t(this.parsedUrl,this.spatialReference,l,r,o,n,a,p,i??void 0),d=(0,handleUtils/* handlesGroup */.vE)([this.on("send-message-to-socket",(e=>m.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>m.sendMessageToClient(e)))]);return m.once("destroy",d.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}createQuery(){const e=new Query/* default */.A;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,t,e)}write(e,t){const r=t?.messages;return this.webSocketUrl?(r?.push(re(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(r?.push(re(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!!!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await (0,request/* default */.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new Error/* default */.A("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new Error/* default */.A("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new Error/* default */.A("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new Field/* default */.A({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new Error/* default */.A("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField=streamLayerUtils/* defaultStreamIdField */.DN),(0,styleUtils/* loadStyleRenderer */.L)(this,{origin:"service"})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],ie.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ie.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ie.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],ie.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ElevationInfo/* default */.A})],ie.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],ie.prototype,"featureReduction",null),(0,tslib_es6._)([(0,property/* property */.MZ)(te.fields)],ie.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(te.fieldsIndex)],ie.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{name:"layerDefinition.definitionGeometry",write:!0}})],ie.prototype,"geometryDefinition",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:typeUtils/* featureGeometryTypeKebabDictionary */.gy.apiValues,json:{read:{reader:typeUtils/* featureGeometryTypeKebabDictionary */.gy.read}}})],ie.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],ie.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:labelingInfo/* reader */.w},write:!0}})],ie.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],ie.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ie.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],ie.prototype,"maxReconnectionAttempts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],ie.prototype,"maxReconnectionInterval",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* maxScale */.hG)],ie.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* minScale */.hn)],ie.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],ie.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ie.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ie.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],ie.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],ie.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:i})],ie.prototype,"purgeOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],ie.prototype,"refreshInterval",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:support_typeUtils/* rendererTypes */.Hg,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:support_typeUtils/* webSceneRendererTypes */.XJ,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ie.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ie.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* screenSizePerspectiveEnabled */.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],ie.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ie.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ie.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],ie.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],ie.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],ie.prototype,"updateInterval",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],ie.prototype,"useViewTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],ie.prototype,"webSocketUrl",void 0),ie=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.StreamLayer")],ie);const oe=ie;


/***/ }),

/***/ 30179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg)(this.url);if(t?.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 14204:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Aw: () => (/* binding */ i),
/* harmony export */   DN: () => (/* binding */ _),
/* harmony export */   EA: () => (/* binding */ r),
/* harmony export */   Gm: () => (/* binding */ e),
/* harmony export */   t0: () => (/* binding */ s),
/* harmony export */   xq: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const _="__esri_stream_id__",e="__esri_timestamp__",r="__esri_track_part__",i="__esri_time_received__",t="__esri_track_line__";var s;!function(_){_[_.TrackLine=0]="TrackLine",_[_.LatestObservation=1]="LatestObservation",_[_.PreviousObservation=2]="PreviousObservation"}(s||(s={}));


/***/ }),

/***/ 99650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97629);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 29759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ })

};
;