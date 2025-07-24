"use strict";
exports.id = 87027;
exports.ids = [87027];
exports.modules = {

/***/ 87027:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ P)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35775);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40189);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(77841);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(68833);
/* harmony import */ var _mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(50193);
/* harmony import */ var _mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(45681);
/* harmony import */ var _mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16161);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41506);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(34722);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(25389);
/* harmony import */ var _mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68821);
/* harmony import */ var _support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(76592);
/* harmony import */ var _support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(84546);
/* harmony import */ var _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(75624);
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(27451);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(63680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let A=class extends((0,_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_19__/* .SceneService */ .w6)((0,_mixins_ArcGISService_js__WEBPACK_IMPORTED_MODULE_14__/* .ArcGISService */ .b)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__/* .OperationalLayer */ .q)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__/* .PortalLayer */ .A)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_18__/* .ScaleRangeLayer */ .j)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* .MultiOriginJSONMixin */ .P)((0,_mixins_CustomParametersMixin_js__WEBPACK_IMPORTED_MODULE_15__/* .CustomParametersMixin */ .d)((0,_mixins_APIKeyMixin_js__WEBPACK_IMPORTED_MODULE_13__/* .APIKeyMixin */ .p)(_Layer_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A))))))))){constructor(...e){super(...e),this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this.path=null,this.definitionExpression=null}initialize(){this.addHandles((0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__.on)((()=>this.modifications),"after-changes",(()=>this.modifications=this.modifications),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .sync */ .OH))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readModifications(e,t,o){this._modificationsSource={url:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_24__.f)(e,o),context:o}}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const t=e?.signal;try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(o){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .throwIfAbortError */ .QP)(o)}if(await this._fetchService(t),null!=this._modificationsSource){const t=await _support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",t,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,t)}beforeSave(){if(null!=this._modificationsSource)return this.load().then((()=>{}),(()=>{}))}async saveAs(e,t){return this._debouncedSaveOperations(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_19__/* .SaveOperationType */ .Xh.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(_mixins_SceneService_js__WEBPACK_IMPORTED_MODULE_19__/* .SaveOperationType */ .Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}_validateElevationInfo(e){const t="Integrated mesh layers";(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .logInvalidElevationInfoWarning */ .XF)(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger(this),(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .elevationModeRequiredMessage */ .B)(t,"absolute-height",e)),(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .logInvalidElevationInfoWarning */ .XF)(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger(this),(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .featureExpressionUnsupportedMessage */ .tW)(t,e))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,readOnly:!0})],A.prototype,"geometryType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:["IntegratedMeshLayer"]})],A.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__/* .I3SNodePageDefinition */ .W4,readOnly:!0})],A.prototype,"nodePages",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__/* .I3SMaterialDefinition */ .uV],readOnly:!0})],A.prototype,"materialDefinitions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__/* .I3STextureSetDefinition */ .Ot],readOnly:!0})],A.prototype,"textureSetDefinitions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:[_support_I3SLayerDefinitions_js__WEBPACK_IMPORTED_MODULE_21__/* .I3SGeometryDefinition */ .L0],readOnly:!0})],A.prototype,"geometryDefinitions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],A.prototype,"serviceUpdateTimeStamp",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:_support_SceneModifications_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,clonable:e=>e.clone()}),(0,_core_accessorSupport_decorators_persistable_js__WEBPACK_IMPORTED_MODULE_11__/* .persistable */ .P)({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],A.prototype,"modifications",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)(["web-scene","portal-item"],"modifications")],A.prototype,"readModifications",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)(_support_commonProperties_js__WEBPACK_IMPORTED_MODULE_20__/* .elevationInfo */ .Yj)],A.prototype,"elevationInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],A.prototype,"path",void 0),A=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.layers.IntegratedMeshLayer")],A);const P=A;


/***/ }),

/***/ 75624:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ n)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(68659);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(77841);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
;// ../node_modules/@arcgis/core/layers/support/SceneModification.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var m;let f=m=class extends JSONSupport/* default */.A{constructor(e){super(e),this.geometry=null,this.type="clip"}writeGeometry(e,r,o,s){if(s.layer?.spatialReference&&!s.layer.spatialReference.equals(this.geometry.spatialReference)){if(!(0,projectionUtils.canProjectWithoutEngine)(e.spatialReference,s.layer.spatialReference))return void(s?.messages&&s.messages.push(new Warning/* default */.A("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:s.layer.spatialReference,context:s})));const p=new Polygon/* default */.A;(0,projectionUtils.projectPolygon)(e,p,s.layer.spatialReference),r[o]=p.toJSON(s)}else r[o]=e.toJSON(s);delete r[o].spatialReference}clone(){return new m({geometry:(0,lang/* clone */.o8)(this.geometry),type:this.type})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Polygon/* default */.A}),(0,persistable/* persistable */.P)()],f.prototype,"geometry",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)(["web-scene","portal-item"],"geometry")],f.prototype,"writeGeometry",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["clip","mask","replace"],nonNullable:!0}),(0,persistable/* persistable */.P)()],f.prototype,"type",void 0),f=m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.SceneModification")],f);

;// ../node_modules/@arcgis/core/layers/support/SceneModifications.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SceneModifications_m;let n=SceneModifications_m=class extends(JSONSupport/* default */.A.JSONSupportMixin(Collection/* default */.A.ofType(f))){constructor(r){super(r),this.url=null}clone(){return new SceneModifications_m({url:this.url,items:this.items.map((r=>r.clone()))})}toJSON(r){return this.toArray().map((o=>o.toJSON(r))).filter((r=>!!r.geometry))}static fromJSON(r,o){const t=new SceneModifications_m;for(const e of r)t.add(f.fromJSON(e,o));return t}static async fromUrl(r,t,e){const i={url:(0,urlUtils/* urlToObject */.An)(r),origin:"service"},c=await (0,request/* default */.A)(r,{responseType:"json",signal:e?.signal}),n=t.toJSON(),a=[];for(const o of c.data)a.push(f.fromJSON({...o,geometry:{...o.geometry,spatialReference:n}},i));return new SceneModifications_m({url:r,items:a})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],n.prototype,"url",void 0),n=SceneModifications_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.SceneModifications")],n);


/***/ })

};
;