"use strict";
exports.id = 19158;
exports.ids = [19158,90081];
exports.modules = {

/***/ 2527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47980);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


/***/ }),

/***/ 47980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 21570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5262);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97629);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48524);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const p=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .removeUnordered */ .Xy)(u,"orthometric");const g=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const i=p.read(e);return i||(r?.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const i=g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .unitFromRESTJSON */ .LA)(e)||g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVerticalUnitStringForSR */ .k1)(t);return new d({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal",write:{isRequired:!0}}}}})],m.prototype,"heightModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:{writer:g.write,isRequired:!0}}}}})],m.prototype,"heightUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.geometry.HeightModelInfo")],m);


/***/ }),

/***/ 19158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ U)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(32655);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* default */.A{constructor(o){super(o),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1,write:{isRequired:!0}}})],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudFilter")],t);const i=t;

;// ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;let p=d=class extends i{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new d({field:this.field,requiredClearBits:(0,lang/* clone */.o8)(this.requiredClearBits),requiredSetBits:(0,lang/* clone */.o8)(this.requiredSetBits)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ensureType/* Integer */.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ensureType/* Integer */.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);const u=p;

;// ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let PointCloudReturnFilter_p=n=class extends i{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new n({field:this.field,includedReturns:(0,lang/* clone */.o8)(this.includedReturns)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudReturnFilter_p.prototype,"includedReturns",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudReturnFilter:"return"})],PointCloudReturnFilter_p.prototype,"type",void 0),PointCloudReturnFilter_p=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],PointCloudReturnFilter_p);const PointCloudReturnFilter_u=PointCloudReturnFilter_p;

;// ./node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let PointCloudValueFilter_p=l=class extends i{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new l({field:this.field,mode:this.mode,values:(0,lang/* clone */.o8)(this.values)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudValueFilter_p.prototype,"mode",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudValueFilter:"value"})],PointCloudValueFilter_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudValueFilter_p.prototype,"values",void 0),PointCloudValueFilter_p=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],PointCloudValueFilter_p);const PointCloudValueFilter_u=PointCloudValueFilter_p;

;// ./node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e={key:"type",base:i,typeMap:{value:PointCloudValueFilter_u,bitfield:u,return:PointCloudReturnFilter_u}};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(45352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/ExpressionInfo.js
var ExpressionInfo = __webpack_require__(47096);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js + 1 modules
var PointCloudClassBreaksRenderer = __webpack_require__(10211);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(90620);
;// ./node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointCloudRGBRenderer_p;let c=PointCloudRGBRenderer_p=class extends PointCloudRenderer/* default */.A{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new PointCloudRGBRenderer_p({...this.cloneProperties(),field:(0,lang/* clone */.o8)(this.field)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],c.prototype,"field",void 0),c=PointCloudRGBRenderer_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudRGBRenderer")],c);const PointCloudRGBRenderer_n=c;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var PointCloudStretchRenderer = __webpack_require__(35753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js + 1 modules
var PointCloudUniqueValueRenderer = __webpack_require__(4072);
;// ./node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const typeUtils_i={key:"type",base:PointCloudRenderer/* default */.A,typeMap:{"point-cloud-class-breaks":PointCloudClassBreaksRenderer/* default */.A,"point-cloud-rgb":PointCloudRGBRenderer_n,"point-cloud-stretch":PointCloudStretchRenderer/* default */.A,"point-cloud-unique-value":PointCloudUniqueValueRenderer/* default */.A},errorContext:"renderer"};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(19541);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
;// ./node_modules/@arcgis/core/layers/PointCloudLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O=(0,fieldProperties/* defineFieldProperties */.p)();let V=class extends((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A))))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r?.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new Field/* default */.A;return"FieldTypeInteger"===e.type&&((e=(0,lang/* clone */.o8)(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new Field/* default */.A({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}writeRenderer(e,r,t,o){(0,object/* setDeepValue */.sM)("layerDefinition.drawingInfo.renderer",e.write({},o),r)}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=(0,popupUtils/* createPopupTemplate */.tn)(this,e);return r&&(this._formatPopupTemplateReturnsField(r),this._formatPopupTemplateRGBField(r)),r}_formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new ExpressionInfo/* default */.A({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new ExpressionInfo/* default */.A({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new Error/* default */.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new Error/* default */.A("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=(0,urlUtils/* join */.fj)(this.parsedUrl?.path??"",`./statistics/${o.key}`);return (0,request/* default */.A)(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new Error/* default */.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new Error/* default */.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error/* default */.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new Error/* default */.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(e){(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* elevationModeRequiredMessage */.B)("Point cloud layers","absolute-height",e)),(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* featureExpressionUnsupportedMessage */.tW)("Point cloud layers",e))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["PointCloudLayer"]})],V.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],V.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],V.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],V.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],V.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],V.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],V.prototype,"filters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A]})],V.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(O.fieldsIndex)],V.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","fields",["fields","attributeStorageInfo"])],V.prototype,"readServiceFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(O.outFields)],V.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],V.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],V.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:typeUtils_i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:typeUtils_i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],V.prototype,"renderer",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("renderer")],V.prototype,"writeRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],V.prototype,"type",void 0),V=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.PointCloudLayer")],V);const U=V;


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

/***/ 32655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xh: () => (/* binding */ V),
  w6: () => (/* binding */ R)
});

// UNUSED EXPORTS: sceneServiceItemType

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(2527);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(72197);
;// ./node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(62304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/jsonContext.js
var jsonContext = __webpack_require__(10069);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/resourceUtils.js
var resourceUtils = __webpack_require__(20267);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(49972);
;// ./node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R=R=>{let C=class extends R{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{switch(e){case V.SAVE:return this._save(t);case V.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return U(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:U(t)}:e;return Extent/* default */.A.fromJSON(o,r)}const o=t.store,i=U(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<L))?null:new Extent/* default */.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t.name):t.name;let o=t.name;if(!o&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,arcgisLayerUrl/* cleanTitle */.cr)(o)}set url(e){if(null==e)return void this._set("url",e);const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,urlUtils/* urlToObject */.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,Logger/* default */.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new Error/* default */.A("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<L||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<L)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new Error/* default */.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request/* default */.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request/* default */.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});r.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,request/* default */.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const o={...K,...t};let i=PortalItem["default"].from(e);if(!i)throw new Error/* default */.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");i.id&&(i=i.clone(),i.id=null);const s=i.portal||Portal/* default */.A.getDefault();await this._ensureLoadBeforeSave(),i.type=P,i.portal=s;const a=(0,jsonContext/* createForItemWrite */.m)(i,"portal-item",!0),n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),this.url&&(i.url=this.url),i.title||(i.title=this.title),T(i,o,O.newItem),await s.signIn(),await s.user.addItem({item:i,folder:o?.folder,data:n}),await (0,resourceUtils/* saveResources */.r)(this.resourceReferences,a),this.portalItem=i,(0,originUtils/* updateOrigins */.v)(a),a.portalItem=i,i}async _save(e){const t={...K,...e};if(!this.portalItem)throw new Error/* default */.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==P)throw new Error/* default */.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${P}"`);await this._ensureLoadBeforeSave();const o=(0,jsonContext/* createForItemWrite */.m)(this.portalItem,"portal-item",!0),i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),T(this.portalItem,t,O.existingItem),await (0,resourceUtils/* updateItemWithResources */.S)(this.portalItem,i,this.resourceReferences,o),(0,originUtils/* updateOrigins */.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const s=i?.validationOptions;(0,saveUtils/* evaluateWriteErrors */.ci)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:s?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=s?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,i.portalItemLayerType);if(!t.length)return;const a=`Layer item did not validate:\n${t.join("\n")}`;if(Logger/* default */.A.getLogger(this).error(`_validateAgainstJSONSchema(): ${a}`),"throw"===s.failPolicy){const e=t.map((e=>new Error/* default */.A("sceneservice:schema-validation",e)));throw new Error/* default */.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return (0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],C.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],C.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],C.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],C.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],C.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],C.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["store.version"])],C.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"copyrightText"}}})],C.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],C.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],C.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","title")],C.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],C.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],C.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],C.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],C.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],C.prototype,"rootNode",void 0),C=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.SceneService")],C),C},L=-1e38;function U(e){if(null!=e.spatialReference)return SpatialReference/* default */.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new SpatialReference/* default */.A(o):null}function T(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const P="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var V;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(V||(V={}));


/***/ }),

/***/ 72197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i,l){let d=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(n,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(g){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,g),d=g}}if(!n)return null;const p=n?.split("/").pop(),c=`${r}/nodes/`,u=c+p;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,urlPrefix:c}}catch(g){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:g,url:u})}}


/***/ }),

/***/ 10069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ o),
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19759);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62304);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e}}


/***/ }),

/***/ 90081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResources: () => (/* binding */ a),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ c),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19759);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e,t={},s){await e.load(s);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,i={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},u=await e.portal.request(o,i);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s,o,a){const n=new Map;for(const{resource:r,content:i,compress:u,access:p}of s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[e,s]=l(r.path),a=`${e}/${u??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:u,access:p,files:[]});n.get(a).files.push({fileName:s,content:i})}await e.load(a);const c=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:l,files:i}of n.values()){const s=25;for(let o=0;o<i.length;o+=s){const n=i.slice(o,o+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(c,{method:"post",body:u,signal:a?.signal})}}}async function n(e,s,o){if(!s.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s.path},signal:o?.signal}),s.portalItem=null}async function c(e,t){await e.load(t);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,r]=u(e),[s,o]=l(t);return[s,o,r]}function u(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath(r(s,t+o))}function m(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(s,t+o))}


/***/ }),

/***/ 10211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PointCloudClassBreaksRenderer_a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(90620);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js
var RendererLegendOptions = __webpack_require__(94838);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
;// ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;let p=a=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue",isRequired:!0}}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue",isRequired:!0}}})],p.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],p.prototype,"color",void 0),p=a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const u=p;

;// ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let PointCloudClassBreaksRenderer_a=n=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new n({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,lang/* clone */.o8)(this.colorClassBreakInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],PointCloudClassBreaksRenderer_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}},type:String})],PointCloudClassBreaksRenderer_a.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:RendererLegendOptions/* default */.A,json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],PointCloudClassBreaksRenderer_a.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[u],json:{write:{isRequired:!0}}})],PointCloudClassBreaksRenderer_a.prototype,"colorClassBreakInfos",void 0),PointCloudClassBreaksRenderer_a=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudClassBreaksRenderer")],PointCloudClassBreaksRenderer_a);


/***/ }),

/***/ 90620:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PointCloudRenderer_c)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],i.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],i.prototype,"maxValue",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorModulation")],i);const l=i;

;// ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=new jsonMap/* JSONMap */.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let PointSizeAlgorithm_i=class extends JSONSupport/* default */.A{};(0,tslib_es6._)([(0,property/* property */.MZ)({type:p.apiValues,readOnly:!0,nonNullable:!0,json:{type:p.jsonValues,read:!1,write:{writer:p.write,isRequired:!0}}})],PointSizeAlgorithm_i.prototype,"type",void 0),PointSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],PointSizeAlgorithm_i);const a=PointSizeAlgorithm_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
;// ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointSizeFixedSizeAlgorithm_i;let PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=class extends a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new PointSizeFixedSizeAlgorithm_i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],PointSizeFixedSizeAlgorithm_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],PointSizeFixedSizeAlgorithm_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"useRealWorldSymbolSizes",void 0),PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],PointSizeFixedSizeAlgorithm_p);const PointSizeFixedSizeAlgorithm_l=PointSizeFixedSizeAlgorithm_p;

;// ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointSizeSplatAlgorithm_p;let c=PointSizeSplatAlgorithm_p=class extends a{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new PointSizeSplatAlgorithm_p({scaleFactor:this.scaleFactor})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"scaleFactor",void 0),c=PointSizeSplatAlgorithm_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const PointSizeSplatAlgorithm_a=c;

;// ./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e={key:"type",base:a,typeMap:{"fixed-size":PointSizeFixedSizeAlgorithm_l,splat:PointSizeSplatAlgorithm_a}};

;// ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const u=(0,jsonMap/* strict */.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let PointCloudRenderer_c=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,lang/* clone */.o8)(this.pointSizeAlgorithm),colorModulation:(0,lang/* clone */.o8)(this.colorModulation),pointsPerInch:(0,lang/* clone */.o8)(this.pointsPerInch)}}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:{writer:u.write,isRequired:!0}}})],PointCloudRenderer_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:e,json:{write:!0}})],PointCloudRenderer_c.prototype,"pointSizeAlgorithm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:l,json:{write:!0}})],PointCloudRenderer_c.prototype,"colorModulation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},nonNullable:!0,type:Number})],PointCloudRenderer_c.prototype,"pointsPerInch",void 0),PointCloudRenderer_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudRenderer")],PointCloudRenderer_c),function(o){o.fieldTransformTypeKebabDict=new jsonMap/* JSONMap */.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(PointCloudRenderer_c||(PointCloudRenderer_c={}));


/***/ }),

/***/ 35753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15565);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90620);
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94838);
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36903);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__/* .enumeration */ .e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:{isRequired:!0}},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A],json:{write:{isRequired:!0}}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.PointCloudStretchRenderer")],d);


/***/ }),

/***/ 4072:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ u)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(90620);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js
var RendererLegendOptions = __webpack_require__(94838);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
;// ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let c=l=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,lang/* clone */.o8)(this.values),color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{isRequired:!0}}})],c.prototype,"values",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],c.prototype,"color",void 0),c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

;// ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointCloudUniqueValueRenderer_l;let u=PointCloudUniqueValueRenderer_l=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new PointCloudUniqueValueRenderer_l({...this.cloneProperties(),field:(0,lang/* clone */.o8)(this.field),fieldTransformType:(0,lang/* clone */.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,lang/* clone */.o8)(this.colorUniqueValueInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}},type:String})],u.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],json:{write:{isRequired:!0}}})],u.prototype,"colorUniqueValueInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:RendererLegendOptions/* default */.A,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=PointCloudUniqueValueRenderer_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudUniqueValueRenderer")],u);


/***/ }),

/***/ 19541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $7: () => (/* binding */ P),
/* harmony export */   B: () => (/* binding */ Z),
/* harmony export */   XF: () => (/* binding */ $),
/* harmony export */   tW: () => (/* binding */ w),
/* harmony export */   w7: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports absoluteHeightElevationInfo, elevationContextAffectsAlignment, featureExpressionInfoIsZero, getConvertedElevation, getConvertedElevationFromVector, getConvertedElevationFromXYZ, getEffectiveElevationInfo, getEffectiveElevationMode, getElevationOffset, getElevationOffsetInMeters, getGeometryEffectiveElevationInfo, getGraphicEffectiveElevationInfo, getGraphicEffectiveElevationMode, getZForElevationMode, hasEffectiveFeatureExpressionInfo, hasFeatureExpressionInfo, hasGraphicFeatureExpressionInfo, onTheGroundElevationInfo, zValueInAbsoluteHeightMode */
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return e?j:z}function r(e,n){return n?.mode?n.mode:o(e).mode}function u(e,n){return null!=n?n:o(e)}function i(e,n){return r(null==e||(e.hasZ??!1),n)}function s(e,n){return u(null==e||(e.hasZ??!1),n)}function l(e){const n=g(e);return i(e.geometry,n)}function a(e){const n=g(e),t=i(e.geometry,n),o=null!=n&&"on-the-ground"!==t?R(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function f(e){return v(a(e))}function c(e){return v(e)||d(e)}function d(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const n=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||"0"===n)}function g(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(t,o){if(!t?.offset)return 0;const{offset:r,unit:u}=t;if("decimal-degrees"===u)return 0;const i="unknown"!==u&&u?u:"meters",s=e(o);return s?n(r,i,s):0}function p(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=h(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function m(e,n,t,o=null){return E(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function x(e,n,t,o,r=null){return E(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function E(e,n,t,o,r,u,i=null){if(null==u)return;const s=null!=i?i.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:l}=b(n,t,o,r,e,u);return I(l,n,t,o,r,e,i,s)}function b(e,n,t,o,r,u){const i=h(u,o);switch(u.mode){case"absolute-height":return{absoluteZ:t+i,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+i,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+i,elevation:u}}}}function I(e,n,t,o,r,u,i,s){const l=h(i,r);switch(s){case"absolute-height":return e-l;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+l);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+l)}}function y(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function Z(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function P(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function w(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function $(e,n){n&&e.warn(".elevationInfo=",n)}function R(e){return(e?.offset??0)*t(e?.unit)}const j={mode:"absolute-height",offset:0},z={mode:"on-the-ground",offset:null};


/***/ }),

/***/ 20267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ n),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1874);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function p(e,t,r){const o=await u(e,t,r);await h(o,t,r)}async function n(e,t,r,o,s){const a=await u(r,o,s);await e.update({data:t}),await h(a,o,s)}async function u(o,p,n){if(!p?.resources)return;const u=p.portalItem===o.portalItem?new Set(o.paths):new Set;o.paths.length=0,o.portalItem=p.portalItem;const h=new Set(p.resources.toKeep.map((e=>e.resource.path))),i=new Set,m=[];h.forEach((e=>{u.delete(e),o.paths.push(e)}));const f=[],l=[],w=[];for(const e of p.resources.toUpdate)if(u.delete(e.resource.path),h.has(e.resource.path)||i.has(e.resource.path)){const{resource:t,content:r,finish:p}=e,n=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getSiblingOfSameTypeI */ .bg)(t,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_2__/* .generateUUID */ .lk)());o.paths.push(n.path),f.push({resource:n,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(r),compress:e.compress}),p&&w.push((()=>p(n)))}else{o.paths.push(e.resource.path),l.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource))),i.add(e.resource.path)}for(const e of p.resources.toAdd)if(o.paths.push(e.resource.path),u.has(e.resource.path))u.delete(e.resource.path);else{f.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource)))}if(f.length||l.length){const{addOrUpdateResources:e}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 90081));await e(p.portalItem,f,"add",n),await e(p.portalItem,l,"update",n)}if(w.forEach((e=>e())),0===m.length)return u;const d=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .allSettledErrors */ .Ol)(m);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:d});return u}async function h(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .eachAlways */ .Lx)(s)}


/***/ }),

/***/ 49972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ci: () => (/* binding */ s),
/* harmony export */   dL: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export hasCharts */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}const t=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(r,o,s){let n=(r.messages??[]).filter((({type:e})=>"error"===e)).map((({name:r,message:o,details:t})=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r,o,t)));if(r.blockedRelativeUrls&&(n=n.concat(r.blockedRelativeUrls.map((r=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("url:unsupported",`Relative url '${r}' is not supported`))))),s){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:o}=s;e&&(n=n.filter((({name:e})=>!(t.has(e)||r.includes(e))))),o&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}function n(e){return r(e).some((e=>!!e.charts?.length))}


/***/ })

};
;