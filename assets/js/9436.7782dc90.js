"use strict";
exports.id = 9436;
exports.ids = [9436];
exports.modules = {

/***/ 59436:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ J)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(14798);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(6412);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(84410);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/FeatureLayer.js + 3 modules
var FeatureLayer = __webpack_require__(83780);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(65667);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(76592);
;// ../node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(Identifiable/* default */.A.IdentifiableMixin(MultiOriginJSONSupport/* MultiOriginJSONSupport */.L)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,o){return"string"==typeof o.alias?o.alias:"string"==typeof o.name?o.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["alias","name"])],n.prototype,"readTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],n.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,isRequired:!0}}})],n.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","id")],n.prototype,"readIdOnlyOnce",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,commonProperties/* readOnlyService */.Qo)(String))],n.prototype,"modelName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,commonProperties/* readOnlyService */.Qo)(Boolean))],n.prototype,"isEmpty",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0})],n.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.buildingSublayers.BuildingSublayer")],n);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/capabilities.js
var capabilities = __webpack_require__(97934);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/featureLayerUtils.js
var featureLayerUtils = __webpack_require__(52506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(77567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(79005);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(8575);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var I3SLayerDefinitions = __webpack_require__(84546);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/typeUtils.js + 10 modules
var typeUtils = __webpack_require__(53835);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14474);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(8701);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js + 1 modules
var I3SUtil = __webpack_require__(15976);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/layers/support/popupUtils.js
var support_popupUtils = __webpack_require__(18846);
;// ../node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const A=(0,fieldProperties/* defineFieldProperties */.p)();let _=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(n))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new FieldsIndex/* default */.A(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,o=t.associatedLayerID;return null!=r&&"number"==typeof o?new FeatureLayer["default"]({portalItem:r,customParameters:this.customParameters,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return""}get globalIdField(){if(null!=this.fields)for(const e of this.fields)if("global-id"===e.type)return e.name;return""}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,Logger/* default */.A.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}async _fetchService(e){const t=(await (0,request/* default */.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getField(e)?.domain??null;return this.associatedLayer?(0,featureLayerUtils/* getFieldDomain */.Vq)(this.associatedLayer,e,t,r):r}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:capabilities/* zeroCapabilities */.P,{query:t,operations:{supportsQuery:r},data:{supportsZ:o,supportsM:s,isVersioned:i}}=e;return{query:t,operations:{supportsQuery:r},data:{supportsZ:o,supportsM:s,isVersioned:i}}}createQuery(){const e=new Query/* default */.A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}async queryObjectIds(e,t){const r=await this._getAssociatedLayerForQuery();return(await r.queryObjectIds(e||this.createQuery(),t)).filter(guards/* isNumber */.Et)}async queryCachedAttributes(e,t){const r=(0,fieldUtils/* unpackFieldNames */.hL)(this.fieldsIndex,await (0,support_popupUtils/* getRequiredFields */.TO)(this,(0,support_popupUtils/* getFetchPopupTemplate */.D8)(this)));return (0,I3SUtil/* queryAttributesFromCachedAttributesId */.s1)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const o=await this.queryCachedAttributes(e,[r]);if(!o||0===o.length)throw new Error/* default */.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new Graphic/* default */.A({attributes:o[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new Error/* default */.A("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new Error/* default */.A("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:I3SLayerDefinitions/* I3SNodePageDefinition */.W4,readOnly:!0})],_.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3SMaterialDefinition */.uV],readOnly:!0})],_.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3STextureSetDefinition */.Ot],readOnly:!0})],_.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3SGeometryDefinition */.L0],readOnly:!0})],_.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],_.prototype,"rootNode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(A.fields)],_.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:FeatureLayer["default"]})],_.prototype,"associatedLayer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","associatedLayer",["associatedLayerID"])],_.prototype,"readAssociatedLayer",null),(0,tslib_es6._)([(0,property/* property */.MZ)(A.outFields)],_.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],_.prototype,"objectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],_.prototype,"globalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{read:!1}})],_.prototype,"displayField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String})],_.prototype,"apiKey",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String})],_.prototype,"customParameters",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Extent/* default */.A})],_.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:SpatialReference/* default */.A})],_.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"version",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:ElevationInfo/* default */.A})],_.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Number})],_.prototype,"minScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Number})],_.prototype,"maxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Number})],_.prototype,"effectiveScaleRange",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["hide","show"],json:{write:!0}})],_.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:typeUtils/* webSceneRendererTypes */.XJ,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],_.prototype,"renderer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],_.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],_.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],_.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],_.prototype,"normalReferenceFrame",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"types",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"typeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!1}}),(0,enumeration/* enumeration */.e)(new jsonMap/* JSONMap */.J({"3DObject":"3d-object",Point:"point"}))],_.prototype,"layerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"profile",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"statisticsInfo",void 0),_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.buildingSublayers.BuildingComponentSublayer")],_);const C=_;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(68659);
;// ../node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;const l={type:Collection/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:p}}},read:!1}};function p(r,o,t){if(r&&Array.isArray(r))return new Collection/* default */.A(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}return t?.messages&&r&&t.messages.push(new Warning/* default */.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t})),null})))}let c=a=class extends n{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return (0,loadAll/* loadAllChildren */.L)(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e)}))))}};function y(r){return"group"===r.layerType?c:C}(0,tslib_es6._)([(0,property/* property */.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(l)],c.prototype,"sublayers",void 0),c=a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o)}))}r.sublayersProperty=l,r.readSublayers=p,r.forEachSublayer=e}(c||(c={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(16161);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(68821);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js
var associatedFeatureServiceUtils = __webpack_require__(98154);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(33880);
;// ../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],e.prototype,"type",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfo")],e);const BuildingFilterAuthoringInfo_p=e;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var i;let BuildingFilterAuthoringInfoType_p=i=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new i({filterType:this.filterType,filterValues:(0,lang/* clone */.o8)(this.filterValues)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],BuildingFilterAuthoringInfoType_p.prototype,"filterType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{isRequired:!0}}})],BuildingFilterAuthoringInfoType_p.prototype,"filterValues",void 0),BuildingFilterAuthoringInfoType_p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfoType")],BuildingFilterAuthoringInfoType_p);const BuildingFilterAuthoringInfoType_l=BuildingFilterAuthoringInfoType_p;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoBlock_c;const BuildingFilterAuthoringInfoBlock_l=Collection/* default */.A.ofType(BuildingFilterAuthoringInfoType_l);let m=BuildingFilterAuthoringInfoBlock_c=class extends JSONSupport/* default */.A{clone(){return new BuildingFilterAuthoringInfoBlock_c({filterTypes:(0,lang/* clone */.o8)(this.filterTypes)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:BuildingFilterAuthoringInfoBlock_l,json:{write:{isRequired:!0}}})],m.prototype,"filterTypes",void 0),m=BuildingFilterAuthoringInfoBlock_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],m);const BuildingFilterAuthoringInfoBlock_n=m;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoCheckbox_p;const BuildingFilterAuthoringInfoCheckbox_l=Collection/* default */.A.ofType(BuildingFilterAuthoringInfoBlock_n);let BuildingFilterAuthoringInfoCheckbox_n=BuildingFilterAuthoringInfoCheckbox_p=class extends BuildingFilterAuthoringInfo_p{constructor(){super(...arguments),this.type="checkbox"}clone(){return new BuildingFilterAuthoringInfoCheckbox_p({filterBlocks:(0,lang/* clone */.o8)(this.filterBlocks)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["checkbox"]})],BuildingFilterAuthoringInfoCheckbox_n.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:BuildingFilterAuthoringInfoCheckbox_l,json:{write:{isRequired:!0}}})],BuildingFilterAuthoringInfoCheckbox_n.prototype,"filterBlocks",void 0),BuildingFilterAuthoringInfoCheckbox_n=BuildingFilterAuthoringInfoCheckbox_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],BuildingFilterAuthoringInfoCheckbox_n);const BuildingFilterAuthoringInfoCheckbox_m=BuildingFilterAuthoringInfoCheckbox_n;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterMode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* default */.A{};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterMode")],t);const BuildingFilterMode_p=t;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterModeSolid_t;let BuildingFilterModeSolid_i=BuildingFilterModeSolid_t=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="solid"}clone(){return new BuildingFilterModeSolid_t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],BuildingFilterModeSolid_i.prototype,"type",void 0),BuildingFilterModeSolid_i=BuildingFilterModeSolid_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterModeSolid")],BuildingFilterModeSolid_i);const BuildingFilterModeSolid_p=BuildingFilterModeSolid_i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/edges/utils.js + 1 modules
var utils = __webpack_require__(62848);
;// ../node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterModeWireFrame_c;let BuildingFilterModeWireFrame_m=BuildingFilterModeWireFrame_c=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new BuildingFilterModeWireFrame_c({edges:(0,lang/* clone */.o8)(this.edges)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({wireFrame:"wire-frame"})],BuildingFilterModeWireFrame_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(utils/* symbol3dEdgesProperty */.J)],BuildingFilterModeWireFrame_m.prototype,"edges",void 0),BuildingFilterModeWireFrame_m=BuildingFilterModeWireFrame_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterModeWireFrame")],BuildingFilterModeWireFrame_m);const BuildingFilterModeWireFrame_a=BuildingFilterModeWireFrame_m;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterModeXRay_t;let BuildingFilterModeXRay_p=BuildingFilterModeXRay_t=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="x-ray"}clone(){return new BuildingFilterModeXRay_t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],BuildingFilterModeXRay_p.prototype,"type",void 0),BuildingFilterModeXRay_p=BuildingFilterModeXRay_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterModeXRay")],BuildingFilterModeXRay_p);const BuildingFilterModeXRay_i=BuildingFilterModeXRay_p;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const BuildingFilterBlock_a={nonNullable:!0,types:{key:"type",base:BuildingFilterMode_p,typeMap:{solid:BuildingFilterModeSolid_p,"wire-frame":BuildingFilterModeWireFrame_a,"x-ray":BuildingFilterModeXRay_i}},json:{read:e=>{switch(e?.type){case"solid":return BuildingFilterModeSolid_p.fromJSON(e);case"wireFrame":return BuildingFilterModeWireFrame_a.fromJSON(e);case"x-ray":return BuildingFilterModeXRay_i.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let BuildingFilterBlock_m=d=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new BuildingFilterModeSolid_p,this.title=""}clone(){return new d({filterExpression:this.filterExpression,filterMode:(0,lang/* clone */.o8)(this.filterMode),title:this.title})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilterBlock_m.prototype,"filterExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(BuildingFilterBlock_a)],BuildingFilterBlock_m.prototype,"filterMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilterBlock_m.prototype,"title",void 0),BuildingFilterBlock_m=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterBlock")],BuildingFilterBlock_m);const BuildingFilterBlock_c=BuildingFilterBlock_m;

;// ../node_modules/@arcgis/core/layers/support/BuildingFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilter_d;const u=Collection/* default */.A.ofType(BuildingFilterBlock_c);let BuildingFilter_m=BuildingFilter_d=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,uuid/* generateUUID */.lk)(),this.name=null}clone(){return new BuildingFilter_d({description:this.description,filterBlocks:(0,lang/* clone */.o8)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,lang/* clone */.o8)(this.filterAuthoringInfo)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],BuildingFilter_m.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"filterBlocks",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:BuildingFilterAuthoringInfo_p,typeMap:{checkbox:BuildingFilterAuthoringInfoCheckbox_m}},json:{read:o=>"checkbox"===o?.type?BuildingFilterAuthoringInfoCheckbox_m.fromJSON(o):null,write:!0}})],BuildingFilter_m.prototype,"filterAuthoringInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"name",void 0),BuildingFilter_m=BuildingFilter_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilter")],BuildingFilter_m);

;// ../node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let BuildingSummaryStatistics_p=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],BuildingSummaryStatistics_p.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],BuildingSummaryStatistics_p.prototype,"modelName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],BuildingSummaryStatistics_p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],BuildingSummaryStatistics_p.prototype,"min",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],BuildingSummaryStatistics_p.prototype,"max",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:t=>Array.isArray(t)&&(t.every((t=>"string"==typeof t))||t.every((t=>"number"==typeof t)))?t.slice():null}})],BuildingSummaryStatistics_p.prototype,"mostFrequentValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number]})],BuildingSummaryStatistics_p.prototype,"subLayerIds",void 0),BuildingSummaryStatistics_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],BuildingSummaryStatistics_p);let BuildingSummaryStatistics_n=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(JSONSupport/* default */.A))){constructor(t){super(t),this.url=null,this.customParameters=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Logger/* default */.A.getLogger(this).error("building summary statistics are not loaded"),null)}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._fetchService(e)),Promise.resolve(this)}async _fetchService(t){const r=(await (0,request/* default */.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t})).data;this.read(r,{origin:"service"})}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,type:String})],BuildingSummaryStatistics_n.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],BuildingSummaryStatistics_n.prototype,"customParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],BuildingSummaryStatistics_n.prototype,"apiKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:[BuildingSummaryStatistics_p],json:{read:{source:"summary"}}})],BuildingSummaryStatistics_n.prototype,"fields",null),BuildingSummaryStatistics_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingSummaryStatistics")],BuildingSummaryStatistics_n);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
;// ../node_modules/@arcgis/core/layers/BuildingSceneLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R=Collection/* default */.A.ofType(BuildingFilter_m),M=(0,lang/* clone */.o8)(c.sublayersProperty),k=M.json?.origins;k&&(k["web-scene"]={type:[C],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},k["portal-item"]={type:[C],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let H=class extends((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new CollectionFlattener/* default */.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new R,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,t){const i=c.readSublayers(e,r,t);return c.forEachSublayer(i,(e=>e.layer=this)),this._allSublayerOverrides&&(N(i,this._allSublayerOverrides),this._allSublayerOverrides=null),i}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?W(this.sublayers,e,r):this._allSublayerOverrides&&z(this._allSublayerOverrides,e,r)),e}read(e,r){if(super.read(e,r),("web-scene"===r?.origin||"portal-item"===r?.origin)&&Array.isArray(e?.sublayers)){const t=V(e.sublayers,r);this.sublayers?G(this.sublayers,t):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(r.origin,t))}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef&&this.parsedUrl){const e=(0,urlUtils/* join */.fj)(this.parsedUrl.path,r.statisticsHRef);return new BuildingSummaryStatistics_n({url:e,apiKey:this.apiKey,customParameters:this.customParameters})}return null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{c.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,r){return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new Error/* default */.A("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await (0,associatedFeatureServiceUtils/* findAssociatedFeatureService */.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){(0,promiseUtils/* ignoreAbortErrors */.QZ)(this._logWarningOnPopupEnabled())}}async _logWarningOnPopupEnabled(){const e=new AbortController;this.addHandles((0,handleUtils/* abortHandle */.rE)(e)),await (0,reactiveUtils/* whenOnce */.C_)((()=>this.allSublayers.filter((e=>"building-component"===e.type)).some((e=>e.popupEnabled&&null!=e.popupTemplate))),e.signal);const r=this.allSublayers.filter((e=>"building-component"===e.type)).filter((e=>e.popupEnabled&&null!=e.popupTemplate)),t=[],i=[];for(const s of r){const e=s.title??`untitled ${s.id}`;s.attributeStorageInfo?t.push(e):i.push(e)}const o="\n  ",a=t.length>0?`\nThe following sublayers will fall back to binary attributes for Popups:${o}${t.join(o)}`:"",n=i.length>0?`\nThe following sublayers have no binary attributes and will not work with Popups:${o}${i.join(o)}`:"";Logger/* default */.A.getLogger(this).warn(`Associated FeatureLayer could not be loaded for this BuildingSceneLayer: ${this.title}.`,a,n)}_validateElevationInfo(e){const r="Building scene layers";(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* elevationModeRequiredMessage */.B)(r,"absolute-height",e)),(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* featureExpressionUnsupportedMessage */.tW)(r,e))}};function N(e,r){r.forEach((r=>G(e,r)))}function G(e,r){const{overrides:t,context:i}=r;c.forEachSublayer(e,(e=>e.read(t.get(e.id),i)))}function V(e,r){const t=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?t.set(s.id,s):r.messages?.push(new Error/* default */.A("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:t,context:r}}function W(e,r,t){const i=[];c.forEachSublayer(e,(e=>{const r=e.write({},t);Object.keys(r).length>1&&i.push(r)})),i.length>0&&(r.sublayers=i)}function z(e,r,t){const i=t?.origin&&e.get(t.origin);i&&(r.sublayers=[],i.overrides.forEach((e=>{r.sublayers.push((0,lang/* clone */.o8)(e))})))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:["BuildingSceneLayer"]})],H.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],H.prototype,"allSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(M)],H.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","sublayers")],H.prototype,"readSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:R,nonNullable:!0,json:{write:!0}})],H.prototype,"filters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],H.prototype,"activeFilterId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:BuildingSummaryStatistics_n})],H.prototype,"summaryStatistics",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("summaryStatistics",["statisticsHRef"])],H.prototype,"readSummaryStatistics",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{read:!1}})],H.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* sceneLayerFullExtent */.Fm)],H.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],H.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,commonProperties/* readOnlyService */.Qo)(SpatialReference/* default */.A))],H.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],H.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],H.prototype,"associatedFeatureServiceItem",void 0),H=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.BuildingSceneLayer")],H);const J=H;


/***/ })

};
;