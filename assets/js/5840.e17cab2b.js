"use strict";
exports.id = 5840;
exports.ids = [5840,8751];
exports.modules = {

/***/ 35775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ m),
  L: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
var defaultsStoreUtils = __webpack_require__(52700);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
;// ../node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class MultiOriginStore_r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(PropertyOrigin/* OriginIdNum */.Qg),this._values=new Map,this.multipleOriginsSupported=!0}clone(i){const o=new MultiOriginStore_r,n=this._originStores[PropertyOrigin/* OriginId */.Gr.DEFAULTS];n&&n.forEach(((s,r)=>{o.set(r,(0,lang/* clone */.o8)(s),PropertyOrigin/* OriginId */.Gr.DEFAULTS)}));for(let r=PropertyOrigin/* OriginId */.Gr.SERVICE;r<PropertyOrigin/* OriginIdNum */.Qg;r++){const s=this._originStores[r];s&&s.forEach(((s,e)=>{i&&i.has(e)||o.set(e,(0,lang/* clone */.o8)(s),r)}))}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,s,r=PropertyOrigin/* OriginId */.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,s),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const e=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,r),e!==s}return!1}delete(t,s=PropertyOrigin/* OriginId */.Gr.USER){const r=this._originStores[s];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e?.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||PropertyOrigin/* OriginId */.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,utils/* getProperties */.oY)(this),e=t.store,i=new MultiOriginStore_r;t.store=i,(0,defaultsStoreUtils/* setupConstructedDefaults */.k)(t,e,i)}read(r,t){(0,read/* read */.L)(this,r,t)}getAtOrigin(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t);if("string"==typeof r)return s.get(r,o);const i={};return r.forEach((r=>{i[r]=s.get(r,o)})),i}originOf(r){return (0,PropertyOrigin/* idToName */.OL)(this.originIdOf(r))}originIdOf(r){return a(this).originOf(r)}revert(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t),i=(0,utils/* getProperties */.oY)(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{i.invalidate(r),s.revert(r,o),i.commit(r)}))}};return u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],u),u};function a(r){return (0,utils/* getProperties */.oY)(r).store}let f=class extends(u(Accessor/* default */.A)){};f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(45066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return O(this).delete(r,(0,PropertyOrigin/* nameToId */.aB)(t))}write(r,t){return (0,write/* write */.M)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,utils/* getProperties */.oY)(this).setAtOrigin(r,t,(0,PropertyOrigin/* nameToId */.aB)(s))}removeOrigin(r){const t=O(this),s=(0,PropertyOrigin/* nameToId */.aB)(r),e=t.keys(s);for(const o of e)t.originOf(o)===s&&t.set(o,t.get(o,s),PropertyOrigin/* OriginId */.Gr.USER)}updateOrigin(r,t){const s=O(this),i=(0,PropertyOrigin/* nameToId */.aB)(t),c=(0,get/* get */.Jt)(this,r);for(let e=i+1;e<PropertyOrigin/* OriginIdNum */.Qg;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function O(r){return (0,utils/* getProperties */.oY)(r).store}const m=t=>{let e=class extends(l(u(t))){constructor(...r){super(...r)}};return e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],e),e};let S=class extends(m(Accessor/* default */.A)){};S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],S);


/***/ }),

/***/ 73324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=(a=>a)(["operational-layers","basemap","ground"]);


/***/ }),

/***/ 34541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55750);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


/***/ }),

/***/ 55750:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 90709:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GB: () => (/* binding */ t),
/* harmony export */   Qo: () => (/* binding */ i),
/* harmony export */   Y4: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony export adoptTimeZone */
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{}function r(n){return n instanceof luxon__WEBPACK_IMPORTED_MODULE_0__/* .Zone */ .bo?n===t.instance:"unknown"===n?.toString().toLowerCase()}function i(n){return r(n)?t.instance:n}function c(n,o){return e.fromObject({day:n.day,year:n.year,month:n.month,hour:n.hour,minute:n.minute,second:n.second,millisecond:n.millisecond},{zone:o})}t.instance=new luxon__WEBPACK_IMPORTED_MODULE_0__/* .IANAZone */ .oh("Etc/UTC");


/***/ }),

/***/ 75840:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ V)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/PopupTemplate.js + 3 modules
var PopupTemplate = __webpack_require__(56542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(50193);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(68821);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],t.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,nonNullable:!0,json:{read:!1}})],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudFilter")],t);const l=t;

;// ../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d;let p=d=class extends l{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new d({field:this.field,requiredClearBits:(0,lang/* clone */.o8)(this.requiredClearBits),requiredSetBits:(0,lang/* clone */.o8)(this.requiredSetBits)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ensureType/* Integer */.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],p.prototype,"requiredClearBits",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[ensureType/* Integer */.jz],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],p.prototype,"requiredSetBits",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudBitfieldFilter:"bitfield"})],p.prototype,"type",void 0),p=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],p);const u=p;

;// ../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let PointCloudReturnFilter_p=n=class extends l{constructor(r){super(r),this.includedReturns=[],this.type="return"}clone(){return new n({field:this.field,includedReturns:(0,lang/* clone */.o8)(this.includedReturns)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudReturnFilter_p.prototype,"includedReturns",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudReturnFilter:"return"})],PointCloudReturnFilter_p.prototype,"type",void 0),PointCloudReturnFilter_p=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudReturnFilter")],PointCloudReturnFilter_p);const PointCloudReturnFilter_u=PointCloudReturnFilter_p;

;// ../node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointCloudValueFilter_p;let PointCloudValueFilter_l=PointCloudValueFilter_p=class extends l{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new PointCloudValueFilter_p({field:this.field,mode:this.mode,values:(0,lang/* clone */.o8)(this.values)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudValueFilter_l.prototype,"mode",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudValueFilter:"value"})],PointCloudValueFilter_l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],PointCloudValueFilter_l.prototype,"values",void 0),PointCloudValueFilter_l=PointCloudValueFilter_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.pointCloudFilters.PointCloudValueFilter")],PointCloudValueFilter_l);const PointCloudValueFilter_u=PointCloudValueFilter_l;

;// ../node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={key:"type",base:l,typeMap:{value:PointCloudValueFilter_u,bitfield:u,return:PointCloudReturnFilter_u}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/Field.js
var Field = __webpack_require__(24738);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(77567);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/popup/ExpressionInfo.js
var ExpressionInfo = __webpack_require__(57026);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js + 1 modules
var PointCloudClassBreaksRenderer = __webpack_require__(93321);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
;// ../node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let c=i=class extends PointCloudRenderer/* default */.A{constructor(r){super(r),this.type="point-cloud-rgb",this.field=null}clone(){return new i({...this.cloneProperties(),field:(0,lang/* clone */.o8)(this.field)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudRGBRenderer:"point-cloud-rgb"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"field",void 0),c=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudRGBRenderer")],c);const PointCloudRGBRenderer_n=c;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var PointCloudStretchRenderer = __webpack_require__(36275);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js + 1 modules
var PointCloudUniqueValueRenderer = __webpack_require__(12954);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const typeUtils_i={key:"type",base:PointCloudRenderer/* default */.A,typeMap:{"point-cloud-class-breaks":PointCloudClassBreaksRenderer/* default */.A,"point-cloud-rgb":PointCloudRGBRenderer_n,"point-cloud-stretch":PointCloudStretchRenderer/* default */.A,"point-cloud-unique-value":PointCloudUniqueValueRenderer/* default */.A},errorContext:"renderer"};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(44116);
;// ../node_modules/@arcgis/core/layers/PointCloudLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const R=(0,fieldProperties/* defineFieldProperties */.p)();let O=class extends((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const r=this.fieldsIndex.get(e);return r?.domain?r.domain:null}readServiceFields(e,r,t){return Array.isArray(e)?e.map((e=>{const r=new Field/* default */.A;return"FieldTypeInteger"===e.type&&((e=(0,lang/* clone */.o8)(e)).type="esriFieldTypeInteger"),r.read(e,t),r})):Array.isArray(r.attributeStorageInfo)?r.attributeStorageInfo.map((e=>new Field/* default */.A({name:e.name,type:"ELEVATION"===e.name?"double":"integer"}))):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,r,t,o){(0,object/* setDeepValue */.sM)("layerDefinition.drawingInfo.renderer",e.write({},o),r)}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}createPopupTemplate(e){const r=(0,popupUtils/* createPopupTemplate */.tn)(this,e);return r&&(this._formatPopupTemplateReturnsField(r),this._formatPopupTemplateRGBField(r)),r}_formatPopupTemplateReturnsField(e){const r=this.fieldsIndex.get("RETURNS");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new ExpressionInfo/* default */.A({name:"pcl-returns-decoded",title:r.alias||r.name,expression:`\n        var returnValue = $feature.${r.name};\n        return (returnValue % 16) + " / " + Floor(returnValue / 16);\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){const r=this.fieldsIndex.get("RGB");if(!r)return;const t=e.fieldInfos?.find((e=>e.fieldName===r.name));if(!t)return;const o=new ExpressionInfo/* default */.A({name:"pcl-rgb-decoded",title:r.alias||r.name,expression:`\n        var rgb = $feature.${r.name};\n        var red = Floor(rgb / 65536, 0);\n        var green = Floor((rgb - (red * 65536)) / 256,0);\n        var blue = rgb - (red * 65536) - (green * 256);\n\n        return "rgb(" + red + "," + green + "," + blue + ")";\n      `});e.expressionInfos=[...e.expressionInfos||[],o],t.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,r){if(await this.load(r),!this.attributeStorageInfo)throw new Error/* default */.A("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const i=this.fieldsIndex.get(e);if(!i)throw new Error/* default */.A("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const o of this.attributeStorageInfo)if(o.name===i.name){const e=(0,urlUtils/* join */.fj)(this.parsedUrl.path,`./statistics/${o.key}`);return (0,request/* default */.A)(e,{query:{f:"json",token:this.apiKey},responseType:"json",signal:r?r.signal:null}).then((e=>e.data))}throw new Error/* default */.A("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,r){return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE,e)}validateLayer(e){if(e.layerType&&"PointCloud"!==e.layerType)throw new Error/* default */.A("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new Error/* default */.A("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new Error/* default */.A("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return null!=this.attributeStorageInfo&&this.attributeStorageInfo.some((r=>r.name===e))}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* elevationModeRequiredMessage */.B)("Point cloud layers","absolute-height",e)),(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* featureExpressionUnsupportedMessage */.tW)("Point cloud layers",e))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["PointCloudLayer"]})],O.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],O.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],O.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],O.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],O.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],O.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:[e],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],O.prototype,"filters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Field/* default */.A]})],O.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(R.fieldsIndex)],O.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","fields",["fields","attributeStorageInfo"])],O.prototype,"readServiceFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(R.outFields)],O.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],O.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],O.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],O.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:typeUtils_i,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:typeUtils_i},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],O.prototype,"renderer",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("renderer")],O.prototype,"writeRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],O.prototype,"type",void 0),O=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.PointCloudLayer")],O);const V=O;


/***/ }),

/***/ 50193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(r){return"portalItem"in r}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):t(this)?this.portalItem?.apiKey:null}set apiKey(r){null!=r?this._override("apiKey",r):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 45681:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16123);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .parse */ .qg)(this.url);if(null!=t&&t.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_7__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 41506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ u)
});

// UNUSED EXPORTS: isOperationalLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/layers/mixins/operationalLayers.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},r={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},a={ArcGISFeatureLayer:!0},S={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":e,"web-map/basemap":r,"web-map/tables":a,"link-chart/operational-layers":{...e,LinkChartLayer:!0},"link-chart/basemap":r,"link-chart/tables":a,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
;// ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){return"Group Layer"===t?.portalItem?.type?void 0:e}writeListMode(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&(0,write/* willPropertyWrite */.R)(this,t,{},o))&&(r[t]=e)}writeOperationalLayerType(e,r,t,o){e&&"tables"!==o?.layerContainerType&&(r.layerType=e)}writeTitle(e,r){r.title=e??"Layer"}read(e,r){r&&(r.layer=this),(0,read/* readLoadable */.t)(this,e,(r=>super.read(e,r)),r)}write(e,o){if(!this.persistenceEnabled)return null;if(o?.origin){const e=`${o.origin}/${o.layerContainerType||"operational-layers"}`,t=S[e];let i=!!t?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return o.messages?.push(new Error/* default */.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const i=super.write(e,{...o,layer:this}),s=!!o&&!!o.messages&&!!o.messages.filter((e=>e instanceof Error/* default */.A&&"web-document-write:property-required"===e.name)).length;return (0,urlUtils/* isBlobProtocol */.w8)(i?.url)?(o?.messages?.push(new Error/* default */.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:i}beforeSave(){}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],m.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("id",["id"])],m.prototype,"readId",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* listMode */.C1)],m.prototype,"listMode",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("listMode")],m.prototype,"writeListMode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("operationalLayerType")],m.prototype,"writeOperationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],m.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!1})],m.prototype,"persistenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],m.prototype,"title",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("title"),(0,writer/* writer */.K)(["web-scene"],"title")],m.prototype,"writeTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"visibility",write:!0}})],m.prototype,"visible",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OperationalLayer")],m),m};function m(e){return"operationalLayerType"in e}


/***/ }),

/***/ 34722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21121);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20909);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77542);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40454);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26099);
/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68770);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const j=j=>{let _=class extends j{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_21__/* .destroyMaybe */ .pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await __webpack_require__.e(/* import() */ 4085).then(__webpack_require__.bind(__webpack_require__, 14085));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isAbortError */ .zf)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(e),!0))))}async setUserPrivileges(e,r){if(!_config_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(e,r);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(s)}}async _fetchUserPrivileges(e,t){let s=this.portalItem;if(!e||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===s.id;if(i&&s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s);let o,a;if(i)o=s.portal.url;else try{o=await (0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getOwningPortalUrl */ .wI)(this.url,t)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}if(!o||!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSameCanonicalPortal */ .b8)(o,s.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}const l=!0,n=!1,p=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:p}};try{if(i?await s.reload():(s=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:e,portal:{url:o}}),await s.load(t)),s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}return{features:{edit:l,fullEdit:n},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(this.url):null;if(!t)return!0;const s=E.credential===t?E.user:await this._fetchEditingUser(e);return E.credential=t,E.user=s,null==s?.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const o=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault();if(l&&l.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(l.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(a))return l.user;const n=`${a}/community/self`,p=null!=e?e.signal:null,u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .result */ .Ke)((0,_request_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(n,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSamePortal */ .ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],_.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__/* .reader */ .w)("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__/* .writer */ .K)("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({clonable:!1})],_.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__/* .subclass */ .$)("esri.layers.mixins.PortalLayer")],_),_},E={credential:null,user:null};


/***/ }),

/***/ 25389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=t=>{let l=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},a=this.parent;a&&"effectiveScaleRange"in a&&r(e,a.effectiveScaleRange);const c=this._get("effectiveScaleRange");return c&&c.minScale===e.minScale&&c.maxScale===e.maxScale?c:e}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ScaleRangeLayer")],l),l};function r(e,a){return e.minScale=e.minScale>0?a.minScale>0?Math.min(e.minScale,a.minScale):e.minScale:a.minScale,e.maxScale=e.maxScale>0?a.maxScale>0?Math.max(e.maxScale,a.maxScale):e.maxScale:a.maxScale,e}


/***/ }),

/***/ 68821:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xh: () => (/* binding */ P),
  w6: () => (/* binding */ E)
});

// UNUSED EXPORTS: sceneServiceItemType

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(34541);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(34064);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(8575);
;// ../node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(10282);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(26099);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/saveAPIKeyUtils.js
var saveAPIKeyUtils = __webpack_require__(54383);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(22942);
;// ../node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const N="esri.layers.mixins.SceneService",U=Logger/* default */.A.getLogger(N),E=o=>{let E=class extends o{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{switch(e){case P.SAVE:return this._save(t);case P.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return this._readSpatialReference(t)}_readSpatialReference(e){if(null!=e.spatialReference)return SpatialReference/* default */.A.fromJSON(e.spatialReference);{const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new SpatialReference/* default */.A(o):null}}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:this._readSpatialReference(t)}:e;return Extent/* default */.A.fromJSON(o,r)}const o=t.store,i=this._readSpatialReference(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<T))?null:new Extent/* default */.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return (0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t.name);let o=t.name;if(!o&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,arcgisLayerUrl/* cleanTitle */.cr)(o)}set url(e){const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:U});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,urlUtils/* urlToObject */.An)(e);return null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl.path,this.rootNode,e,this.apiKey,U,t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new Error/* default */.A("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<T||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<T)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new Error/* default */.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request/* default */.A)(this.url,{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request/* default */.A)(this.parsedUrl?.path??"",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e});r.ssl&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,request/* default */.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}_updateTypeKeywords(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}async _saveAs(e,t){const o={...L,...t};let i=PortalItem["default"].from(e);if(!i)throw new Error/* default */.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");(0,saveAPIKeyUtils/* validateSaveAPIKey */.X)(i),i.id&&(i=i.clone(),i.id=null);const s=i.portal||Portal/* default */.A.getDefault();await this._ensureLoadBeforeSave(),i.type=K,i.portal=s;const a={origin:"portal-item",url:null,messages:[],portal:s,portalItem:i,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),i.url=this.url,i.title||(i.title=this.title),this._updateTypeKeywords(i,o,O.newItem),await s.signIn(),await(s.user?.addItem({item:i,folder:o?.folder,data:n})),await (0,saveUtils/* saveResources */.rH)(this.resourceReferences,a,null),this.portalItem=i,(0,originUtils/* updateOrigins */.v)(a),a.portalItem=i,i}async _save(e){const t={...L,...e};if(!this.portalItem)throw new Error/* default */.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if((0,saveAPIKeyUtils/* validateSaveAPIKey */.X)(this.portalItem),this.portalItem.type!==K)throw new Error/* default */.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${K}"`);await this._ensureLoadBeforeSave();const o={origin:"portal-item",url:this.portalItem.itemUrl&&(0,urlUtils/* urlToObject */.An)(this.portalItem.itemUrl),messages:[],portal:this.portalItem.portal||Portal/* default */.A.getDefault(),portalItem:this.portalItem,writtenProperties:[],blockedRelativeUrls:[],resources:{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}},i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.portalItem.url=this.url,this.portalItem.title||(this.portalItem.title=this.title),this._updateTypeKeywords(this.portalItem,t,O.existingItem),await (0,saveUtils/* updateItemWithResources */.SO)(this.portalItem,i,this.resourceReferences,o,null),(0,originUtils/* updateOrigins */.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,o){let i=t.messages?.filter((e=>"error"===e.type)).map((e=>new Error/* default */.A(e.name,e.message,e.details)))??[];o?.validationOptions?.ignoreUnsupported&&(i=i.filter((e=>"layer:unsupported"!==e.name&&"symbol:unsupported"!==e.name&&"symbol-layer:unsupported"!==e.name&&"property:unsupported"!==e.name&&"url:unsupported"!==e.name&&"scenemodification:unsupported"!==e.name)));const s=o?.validationOptions,a=s?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,o.portalItemLayerType);if(t.length>0){const e=`Layer item did not validate:\n${t.join("\n")}`;if(U.error(`_validateAgainstJSONSchema(): ${e}`),"throw"===s.failPolicy){const e=t.map((e=>new Error/* default */.A("sceneservice:schema-validation",e))).concat(i);throw new Error/* default */.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{combined:e})}}}if(i.length>0)throw new Error/* default */.A("sceneservice:save","Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:i})}};return (0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],E.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],E.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],E.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],E.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],E.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],E.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],E.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],E.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["store.version"])],E.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"copyrightText"}}})],E.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],E.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],E.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","title")],E.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],E.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],E.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],E.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],E.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],E.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],E.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],E.prototype,"rootNode",void 0),E=(0,tslib_es6._)([(0,subclass/* subclass */.$)(N)],E),E},T=-1e38;var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const K="Scene Service",L={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var P;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(P||(P={}));


/***/ }),

/***/ 24738:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59851);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38938);
/* harmony import */ var _fieldType_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(17930);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var u;const c=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let o=null;try{o=t?JSON.parse(t):null}catch(r){}return o?.value??null}readValueType(e,{description:t}){let o=null;try{o=t?JSON.parse(t):null}catch(r){}return o?c.fromJSON(o.fieldValueType):null}clone(){return new u({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],m.prototype,"description",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("description")],m.prototype,"readDescription",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({types:_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .types */ .gK,json:{read:{reader:_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS},write:!0}})],m.prototype,"domain",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz,json:{write:{overridePolicy:e=>({enabled:Number.isFinite(e)})}}})],m.prototype,"length",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)(_fieldType_js__WEBPACK_IMPORTED_MODULE_11__/* .kebabDict */ .m)],m.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],m.prototype,"valueType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("valueType",["description"])],m.prototype,"readValueType",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.layers.support.Field")],m);const y=m;


/***/ }),

/***/ 79005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Z)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(82256);
/* harmony import */ var _core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90709);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/* harmony import */ var _time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12129);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34495);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function y(e){return"timeZone"in e}function _(e){return"timeZone"in e}function g(e){return"dateFieldsTimeZone"in e}const T=new Map;class Z{static fromJSON(e){return new Z(e.fields,e.timeZoneByFieldName)}static fromLayer(e){return new Z(e.fields??[],S(e))}static fromLayerJSON(e){return new Z(e.fields??[],S(e))}constructor(e=[],i){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=e||[],this._timeZoneByFieldName=i?new Map(i):null;const t=[];for(const s of this.fields){const e=s?.name,i=M(e);if(e&&i){const n=w(e);this._fieldsMap.set(e,s),this._fieldsMap.set(n,s),this._normalizedFieldsMap.set(i,s),t.push(`${n}:${s.type}:${this._timeZoneByFieldName?.get(e)}`),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDateField */ .vE)(s)?(this.dateFields.push(s),this._dateFieldsSet.add(s)):(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isNumericField */ .WA)(s)&&(this._numericFieldsSet.add(s),this.numericFields.push(s)),(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isObjectIDField */ .te)(s)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isGlobalIDField */ .Xz)(s)||(s.editable=null==s.editable||!!s.editable,s.nullable=null==s.nullable||!!s.nullable)}}t.sort(),this.uid=t.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isObjectIDField */ .te)(e)||(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isGlobalIDField */ .Xz)(e)||e.nullable||void 0!==(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getFieldDefaultValue */ .lD)(e)||this._requiredFields.push(e)}return this._requiredFields}equals(e){return this.uid===e?.uid}has(e){return null!=this.get(e)}get(e){if(!e)return;let i=this._fieldsMap.get(e);return i||(i=this._fieldsMap.get(w(e))??this._normalizedFieldsMap.get(M(e)),i&&this._fieldsMap.set(e,i),i)}getTimeZone(i){const s=this.get(i&&"string"!=typeof i?i.name:i);return s?this._timeZoneByFieldName?this._timeZoneByFieldName.get(s.name):"date"===s.type||"esriFieldTypeDate"===s.type?(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.layers.support.FieldsIndex").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("getTimeZone:no-timezone-information",`no time zone information for field '${s.name}'`)),_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$):N.has(s.type)?_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5:null:null}getLuxonTimeZone(e){const i=this.getTimeZone(e);return i?i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5?_core_sql_UnknownTimeZone_js__WEBPACK_IMPORTED_MODULE_3__/* .UnknownTimeZone */ .GB.instance:i===_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$?luxon__WEBPACK_IMPORTED_MODULE_6__/* .FixedOffsetZone */ .mQ.utcInstance:(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getOrCreateMapValue */ .tE)(T,i,(()=>luxon__WEBPACK_IMPORTED_MODULE_6__/* .IANAZone */ .oh.create(i))):null}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isTimeOnlyField(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isTimeOnlyField */ .OH)(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){return this.get(e)?.name??void 0}toJSON(){return{fields:this.fields.map((e=>(0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .isSerializable */ .Wj)(e)?e.toJSON():e)),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function w(e){return e.trim().toLowerCase()}function M(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeFieldName */ .rS)(e)?.toLowerCase()??""}const N=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function S(e){const i=new Map;if(!e.fields)return i;const t=!0===e.datesInUnknownTimezone,{timeInfo:s,editFieldsInfo:n}=e,r=(s?"startField"in s?s.startField:s.startTimeField:"")??"",l=(s?"endField"in s?s.endField:s.endTimeField:"")??"",o=g(e)?e.dateFieldsTimeZone??null:e.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(e.dateFieldsTimeReference):null,d=n?y(n)?n.timeZone??o:n.dateFieldsTimeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(n.dateFieldsTimeReference):o??_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .utc */ .n$:null,a=s?_(s)?s.timeZone??o:s.timeReference?(0,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .fromTimeReference */ .ZS)(s.timeReference):o:null,m=new Map([[w(n?.creationDateField??""),d],[w(n?.editDateField??""),d],[w(r),a],[w(l),a]]);for(const{name:u,type:f}of e.fields)if(N.has(f))i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5);else if("date"!==f&&"esriFieldTypeDate"!==f)i.set(u,null);else if(t)i.set(u,_time_timeZoneUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .unknown */ .L5);else{const e=m.get(w(u??""))??o;i.set(u,e)}return i}


/***/ }),

/***/ 8575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i){let l=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(n,{query:{f:"json",token:s},responseType:"json",signal:i})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(u){null!=a&&a.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,u),l=u}}if(!n)return null;const d=n?.split("/").pop(),p=`${r}/nodes/`,c=p+d;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(c,{query:{f:"json",token:s},responseType:"json",signal:i})).data,urlPrefix:p}}catch(u){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("sceneservice:root-node-missing","Root node missing.",{pageError:l,nodeError:u,url:c})}}


/***/ }),

/***/ 84356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ui: () => (/* binding */ j),
  Yj: () => (/* binding */ f),
  id: () => (/* binding */ I),
  kF: () => (/* binding */ m),
  fV: () => (/* binding */ c),
  C1: () => (/* binding */ C),
  hG: () => (/* binding */ S),
  hn: () => (/* binding */ T),
  ke: () => (/* binding */ g),
  Ih: () => (/* binding */ b),
  M6: () => (/* binding */ y),
  Qo: () => (/* binding */ w),
  Fm: () => (/* binding */ v),
  PY: () => (/* binding */ p),
  OZ: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/timeUtils.js
var timeUtils = __webpack_require__(46437);
;// ../node_modules/@arcgis/core/support/timeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(t){return void 0!==t.timeInfo}async function r(n,r){if(0===n.length)return t.allTime;const l=n.filter(i);await Promise.all(l.map((t=>t.load({signal:r}))));const s=[],o=[];for(const t of l)"feature"!==t?.type&&"map-image"!==t?.type||!t.timeInfo?.hasLiveData?o.push(t):s.push(t);const m=t=>null==t||t.isAllTime,u=o.map((t=>t.timeInfo?.fullTimeExtent));if(u.some(m))return t.allTime;const a=s.map((async t=>{const{timeExtent:e}=await t.fetchRecomputedExtents({signal:r});return e||t.timeInfo?.fullTimeExtent})),f=(await Promise.allSettled(a)).map((t=>"fulfilled"===t.status?t.value:null));if(f.some(m))return t.allTime;return[...f,...u].filter(e).reduce(((t,e)=>t.union(e)))}function timeUtils_l(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,-i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function timeUtils_s(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,r.getTimezoneOffset(),"minutes"):r})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/support/commonProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,n){r[n]=!e}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}},c={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},f={value:null,type:ElevationInfo/* default */.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}};function w(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},read:!0},g={type:Number,json:{origins:{"web-document":u,"portal-item":{write:!0}}}},b={...g,json:{...g.json,origins:{"web-document":{...u,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,n)=>n&&"service"!==n.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition?.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,opacityUtils/* transparencyToOpacity */.D)(r.layerDefinition.drawingInfo.transparency):void 0:(0,opacityUtils/* transparencyToOpacity */.D)(r.drawingInfo.transparency)}}},j={type:TimeExtent/* default */.A,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:n}=this.layer,i=this.view?.timeExtent;let t=this.layer.timeExtent;e&&(t=timeUtils_s(t));let s=n?i&&t?i.intersection(t):i||t:t;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=timeUtils_l(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},v={type:Extent/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const t=Extent/* default */.A.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=SpatialReference/* default */.A.fromJSON(r.spatialReference)),t}}}},read:!1}},I={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},T={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.minScale",write:!0}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.maxScale",write:!0}},C={json:{write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},origins:{"web-map":{read:!1,write:!1}}}};


/***/ }),

/***/ 38938:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rS: () => (/* binding */ domains_i),
  gK: () => (/* binding */ domains_n)
});

// UNUSED EXPORTS: CodedValueDomain, DomainBase, InheritedDomain, RangeDomain

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
;// ../node_modules/@arcgis/core/layers/support/CodedValue.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;let p=t=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.name=null,this.code=null}clone(){return new t({name:this.name,code:this.code})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],p.prototype,"code",void 0),p=t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.CodedValue")],p);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
;// ../node_modules/@arcgis/core/layers/support/Domain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const c=new jsonMap/* JSONMap */.J({inherited:"inherited",codedValue:"coded-value",range:"range"});let a=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.name=null,this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],a.prototype,"name",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)(c)],a.prototype,"type",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Domain")],a);const i=a;

;// ../node_modules/@arcgis/core/layers/support/CodedValueDomain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var d;let CodedValueDomain_p=d=class extends i{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let o=null;if(this.codedValues){const r=String(e);this.codedValues.some((e=>(String(e.code)===r&&(o=e.name),!!o)))}return o}clone(){return new d({codedValues:(0,lang/* clone */.o8)(this.codedValues),name:this.name})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],CodedValueDomain_p.prototype,"codedValues",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({codedValue:"coded-value"})],CodedValueDomain_p.prototype,"type",void 0),CodedValueDomain_p=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.CodedValueDomain")],CodedValueDomain_p);const u=CodedValueDomain_p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
;// ../node_modules/@arcgis/core/layers/support/InheritedDomain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var InheritedDomain_t;let InheritedDomain_i=InheritedDomain_t=class extends i{constructor(r){super(r),this.type="inherited"}clone(){return new InheritedDomain_t}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({inherited:"inherited"})],InheritedDomain_i.prototype,"type",void 0),InheritedDomain_i=InheritedDomain_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.InheritedDomain")],InheritedDomain_i);const InheritedDomain_p=InheritedDomain_i;

;// ../node_modules/@arcgis/core/layers/support/RangeDomain.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let RangeDomain_i=s=class extends i{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new s({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,r,a){r[a]=[this.minValue||0,e]}}}})],RangeDomain_i.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{type:[Number],read:{source:"range",reader:(e,r)=>r.range?.[0]},write:{target:"range",writer(e,r,a){r[a]=[e,this.maxValue||0]}}}})],RangeDomain_i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({range:"range"})],RangeDomain_i.prototype,"type",void 0),RangeDomain_i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.RangeDomain")],RangeDomain_i);const n=RangeDomain_i;

;// ../node_modules/@arcgis/core/layers/support/domains.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const domains_n={key:"type",base:i,typeMap:{range:n,"coded-value":u,inherited:InheritedDomain_p}};function domains_i(r){if(!r?.type)return null;switch(r.type){case"range":return n.fromJSON(r);case"codedValue":return u.fromJSON(r);case"inherited":return InheritedDomain_p.fromJSON(r)}return null}


/***/ }),

/***/ 77567:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _Field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24738);
/* harmony import */ var _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79005);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42453);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(){return{fields:{type:[_Field_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A],value:null,set:function(i){if(i&&(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("big-integer-warning-enabled")){const t=i.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(t.length){const i=t.map((e=>`'${e.name}'`)).join(", ");_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this).warn("#fields",`Layer (title: '${this.title??"no title"}', id: '${this.id??"no id"}') references big-integer field(s): ${i}, support for which is experimental. Only integers less than ${Number.MAX_SAFE_INTEGER} (Number.MAX_SAFE_INTEGER) are supported.`)}}this._set("fields",i)}},fieldsIndex:{readOnly:!0,get(){return _FieldsIndex_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromLayer(this)}},outFields:{type:[String],json:{read:!1},set:function(e){this._userOutFields=e,this.notifyChange("outFields")},get:function(){const i=this._userOutFields;if(!i?.length)return null;if(i.includes("*"))return["*"];if(!this.fields)return i;for(const t of i){const r=this.fieldsIndex?.has(t);r||_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.support.fieldProperties").error("field-attributes-layer:invalid-field",`Invalid field ${t} found in outFields`,{layer:this,outFields:i})}return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .fixFields */ .DB)(this.fieldsIndex,i)}}}}


/***/ }),

/***/ 17930:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59851);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .J({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml",esriFieldTypeBigInteger:"big-integer",esriFieldTypeDateOnly:"date-only",esriFieldTypeTimeOnly:"time-only",esriFieldTypeTimestampOffset:"timestamp-offset"});


/***/ }),

/***/ 39532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ce: () => (/* binding */ f),
/* harmony export */   It: () => (/* binding */ p),
/* harmony export */   LG: () => (/* binding */ i),
/* harmony export */   OM: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ s),
/* harmony export */   bK: () => (/* binding */ c),
/* harmony export */   sQ: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export toggleTypeKeword */
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13484);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .webMercatorToGeographic */ .ci)(o);const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84;return await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(i,s),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.project)(o,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function s(e,t){return!!e.typeKeywords?.includes(t)}function c(e){return s(e,f.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function u(e,t,r){r?i(e,t):a(e,t)}async function l(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return o(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const c="update"===n||"admin"===n;return c?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:c}}}


/***/ }),

/***/ 98751:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResource: () => (/* binding */ s),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ l),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(e,t={},a){await e.load(a);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:s=1,num:n=10,sortOrder:l="asc",sortField:u="created"}=t,c={query:{start:s,num:n,sortOrder:l,sortField:u,token:e.apiKey},signal:a?.signal},i=await e.portal.request(o,c);return{total:i.total,nextStart:i.nextStart,resources:i.resources.map((({created:t,size:r,resource:a})=>({created:new Date(t),size:r,resource:e.resourceFromPath(a)})))}}async function s(e,a,o,s){if(!e.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${a}:invalid-path`,"Resource does not have a valid path");const n=e.portalItem;await n.load(s);const l=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(n.userItemUrl,"add"===a?"addResources":"updateResources"),[c,i]=u(e.path),p=new FormData;return c&&"."!==c&&p.append("resourcesPrefix",c),null!=s&&s.compress&&p.append("compress","true"),p.append("fileName",i),p.append("file",o,i),p.append("f","json"),s?.access&&p.append("access",s.access),await n.portal.request(l,{method:"post",body:p,signal:s?.signal}),e}async function n(e,a,o){if(!a.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(s,{method:"post",query:{resource:a.path},signal:o?.signal}),a.portalItem=null}async function l(e,t){await e.load(t);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(a,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function u(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function c(e){const[t,r]=i(e),[a,o]=u(t);return[a,o,r]}function i(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function d(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath(r(a,t+o))}function m(e,t){if(!e.hasPath())return null;const[a,,o]=c(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(a,t+o))}


/***/ }),

/***/ 93321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var a;let p=a=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:!0}})],p.prototype,"color",void 0),p=a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c=p;

;// ../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let PointCloudClassBreaksRenderer_a=l=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new l({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,lang/* clone */.o8)(this.colorClassBreakInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],PointCloudClassBreaksRenderer_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},type:String})],PointCloudClassBreaksRenderer_a.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],PointCloudClassBreaksRenderer_a.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[c],json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"colorClassBreakInfos",void 0),PointCloudClassBreaksRenderer_a=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudClassBreaksRenderer")],PointCloudClassBreaksRenderer_a);const d=PointCloudClassBreaksRenderer_a;


/***/ }),

/***/ 42422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PointCloudRenderer_a)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"maxValue",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorModulation")],i);const p=i;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const PointSizeAlgorithm_p=new jsonMap/* JSONMap */.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let PointSizeAlgorithm_i=class extends JSONSupport/* JSONSupport */.oY{};(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointSizeAlgorithm_p.apiValues,readOnly:!0,nonNullable:!0,json:{type:PointSizeAlgorithm_p.jsonValues,read:!1,write:PointSizeAlgorithm_p.write}})],PointSizeAlgorithm_i.prototype,"type",void 0),PointSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],PointSizeAlgorithm_i);const a=PointSizeAlgorithm_i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointSizeFixedSizeAlgorithm_i;let PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=class extends a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new PointSizeFixedSizeAlgorithm_i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],PointSizeFixedSizeAlgorithm_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"useRealWorldSymbolSizes",void 0),PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],PointSizeFixedSizeAlgorithm_p);const l=PointSizeFixedSizeAlgorithm_p;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointSizeSplatAlgorithm_p;let c=PointSizeSplatAlgorithm_p=class extends a{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new PointSizeSplatAlgorithm_p({scaleFactor:this.scaleFactor})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=PointSizeSplatAlgorithm_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const PointSizeSplatAlgorithm_a=c;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={key:"type",base:a,typeMap:{"fixed-size":l,splat:PointSizeSplatAlgorithm_a}};

;// ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=(0,jsonMap/* strict */.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let PointCloudRenderer_c=class extends JSONSupport/* JSONSupport */.oY{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,lang/* clone */.o8)(this.pointSizeAlgorithm),colorModulation:(0,lang/* clone */.o8)(this.colorModulation),pointsPerInch:(0,lang/* clone */.o8)(this.pointsPerInch)}}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],PointCloudRenderer_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:e,json:{write:!0}})],PointCloudRenderer_c.prototype,"pointSizeAlgorithm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:p,json:{write:!0}})],PointCloudRenderer_c.prototype,"colorModulation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},nonNullable:!0,type:Number})],PointCloudRenderer_c.prototype,"pointsPerInch",void 0),PointCloudRenderer_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudRenderer")],PointCloudRenderer_c),function(o){o.fieldTransformTypeKebabDict=new jsonMap/* JSONMap */.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(PointCloudRenderer_c||(PointCloudRenderer_c={}));const PointCloudRenderer_a=PointCloudRenderer_c;


/***/ }),

/***/ 36275:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42422);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38785);
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5001);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_4__/* .enumeration */ .e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_7__/* .LegendOptions */ .q,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A],json:{write:!0}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.renderers.PointCloudStretchRenderer")],d);const a=d;


/***/ }),

/***/ 12954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ a)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(38785);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,lang/* clone */.o8)(this.values),color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:!0}})],c.prototype,"values",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:!0}})],c.prototype,"color",void 0),c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

;// ../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var PointCloudUniqueValueRenderer_l;let u=PointCloudUniqueValueRenderer_l=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new PointCloudUniqueValueRenderer_l({...this.cloneProperties(),field:(0,lang/* clone */.o8)(this.field),fieldTransformType:(0,lang/* clone */.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,lang/* clone */.o8)(this.colorUniqueValueInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},type:String})],u.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LegendOptions/* LegendOptions */.q,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=PointCloudUniqueValueRenderer_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;


/***/ }),

/***/ 38785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let p=s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.support.LegendOptions")],p);


/***/ }),

/***/ 10301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99817);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={unknown:1,inches:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","inches"),feet:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","feet"),"us-feet":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","us-feet"),yards:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","yards"),miles:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","miles"),"nautical-miles":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","nautical-miles"),millimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","millimeters"),centimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","centimeters"),decimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","decimeters"),meters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","meters"),kilometers:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToDegrees */ .vl)(1,"meters",_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__/* .earth */ .$O.radius)};


/***/ }),

/***/ 5001:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77542);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let c=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(r){super(r),this.color=null,this.label=null,this.value=null}writeValue(r,o,e){o[e]=r??0}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{type:[_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__/* .Integer */ .jz],write:!0}})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],c.prototype,"value",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_8__/* .writer */ .K)("value")],c.prototype,"writeValue",null),c=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.renderers.visualVariables.support.ColorStop")],c);const a=c;


/***/ }),

/***/ 27451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $7: () => (/* binding */ b),
/* harmony export */   B: () => (/* binding */ p),
/* harmony export */   XF: () => (/* binding */ x),
/* harmony export */   tW: () => (/* binding */ E),
/* harmony export */   w7: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports absoluteHeightElevationInfo, elevationContextAffectsAlignment, elevationInfoLikeEquals, getConvertedElevation, getConvertedElevationFromVector, getEffectiveElevationInfo, getEffectiveElevationMode, getGeometryEffectiveElevationInfo, getGraphicEffectiveElevationInfo, getGraphicEffectiveElevationMode, getZForElevationMode, hasGraphicFeatureExpressionInfo, onTheGroundElevationInfo, zValueInAbsoluteHeightMode */
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97046);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e){return e?y:Z}function t(e,t){return t?.mode?t.mode:n(e).mode}function o(e,t){return null!=t?t:n(e)}function r(e,n){return t(null!=e&&e.hasZ,n)}function u(e,n){return o(null!=e&&!!e.hasZ,n)}function l(e){const n=a(e);return r(e.geometry,n)}function s(n){const t=a(n),o=r(n.geometry,t);return{mode:o,offset:null!=t&&"on-the-ground"!==o?(t.offset??0)*e(t.unit??"meters"):0}}function i(e){if("on-the-ground"===l(e))return!1;const n=a(e),t=n?.featureExpressionInfo?n.featureExpressionInfo.expression:null;return!(!t||"0"===t)}function a(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function f(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=null!=t.offset?t.offset:0;switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function c(e,n,t,o=null){return v(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function d(e,n,t,o,r=null){return v(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function v(e,n,t,o,r,u,l=null){if(null==u)return;const s=null!=l?l.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:i}=g(n,t,o,r,e,u);return h(i,n,t,o,r,e,l,s)}function g(e,n,t,o,r,u){const l=null!=u.offset?u.offset:0;switch(u.mode){case"absolute-height":return{absoluteZ:t+l,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+l,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+l,elevation:u}}}}function h(e,n,t,o,r,u,l,s){const i=null!=l?.offset?l.offset:0;switch(s){case"absolute-height":return e-i;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+i);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+i)}}function m(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function p(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function b(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function E(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function x(e,n){n&&e.warn(".elevationInfo=",n)}const y={mode:"absolute-height",offset:0},Z={mode:"on-the-ground",offset:null};function I(e,n){return e===n||null!=e&&null!=n&&e.mode===n.mode&&e.offset===n.offset}


/***/ }),

/***/ 44116:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tn: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports createFieldInfos, createFieldsContent, createPopupTemplateForFeatureReduction */
/* harmony import */ var _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56542);
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42453);
/* harmony import */ var _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51777);
/* harmony import */ var _popup_content_Content_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27597);
/* harmony import */ var _popup_content_CustomContent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80004);
/* harmony import */ var _popup_content_ExpressionContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44395);
/* harmony import */ var _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3082);
/* harmony import */ var _popup_content_MediaContent_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53155);
/* harmony import */ var _popup_content_RelationshipContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73875);
/* harmony import */ var _popup_content_TextContent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23676);
/* harmony import */ var _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31386);
/* harmony import */ var _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56473);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function p({displayField:t,editFieldsInfo:n,fields:i,objectIdField:o,title:r},s){if(!i)return null;const l=w({editFieldsInfo:n,fields:i,objectIdField:o},s);if(!l.length)return null;const a=y({titleBase:r,fields:i,displayField:t}),p=j();return new _PopupTemplate_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({title:a,content:p,fieldInfos:l})}function u(t){const{fields:n,featureReduction:i,title:o}=t,r=i.fields;if(!r)return null;const s=b(r,n??[]);if(!s.length)return null;const l=C();return new e({title:o,content:l,fieldInfos:s})}const c=(e,t)=>t.visibleFieldNames?t.visibleFieldNames.has(e.name):(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldVisibleByDefault */ .Bz)(e,t);function f(e,t){const n=e;return t&&(e=e.filter((e=>!t.includes(e.type)))),e===n&&(e=e.slice()),e.sort(d),e}function d(e,t){return"oid"===e.type?-1:"oid"===t.type?1:I(e)?-1:I(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function m(e,t){return new s({fieldInfos:w(e,t).filter((e=>e.visible))})}function w(e,n){const i=n?.visibleFieldNames;return f(e.fields??[],n?.ignoreFieldTypes||v).map((n=>new _popup_FieldInfo_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({fieldName:n.name,isEditable:(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isFieldEditable */ .R$)(n,e),label:n.alias,format:g(n),visible:c(n,{...e,visibleFieldNames:i})})))}function b(e,t){return e.map((e=>new l({fieldName:e.name,isEditable:!1,label:e.alias,format:F(e,t),visible:!0})))}function F(e,t){const{onStatisticField:n,onStatisticExpression:i,statisticType:o}=e;if(n){const e=t.find((e=>n===e.name));if(e)return g(e)}return"number"===i?.returnType?new a({digitSeparator:!0,places:2}):"count"===o?new a({digitSeparator:!0,places:0}):null}function g(e){switch(e.type){case"small-integer":case"integer":case"single":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0});case"double":return new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:2});case"string":return (0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isRasterPixelValueField */ .JL)(e.name)?new _popup_support_FieldInfoFormat_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({digitSeparator:!0,places:0}):null;default:return null}}function j(){return[new _popup_content_FieldsContent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,new _popup_content_AttachmentsContent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A]}function C(){return[new s]}function y(e){const t=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getDisplayFieldName */ .mB)(e),{titleBase:n}=e;return t?`${n}: {${t.trim()}}`:n??""}function I(e){if("name"===(e.name&&e.name.toLowerCase()))return!0;return"name"===(e.alias&&e.alias.toLowerCase())}const v=["geometry","blob","raster","guid","xml"];


/***/ }),

/***/ 60973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r)}async collectRequiredFields(r,s){return (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,s,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureExpressionInfo")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
var unitConversionUtils = __webpack_require__(97046);
;// ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;const m=(0,jsonMap/* strict */.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new jsonMap/* JSONMap */.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let ElevationInfo_c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,maybe/* equalsMaybe */.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],ElevationInfo_c.prototype,"featureExpressionInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],ElevationInfo_c.prototype,"readFeatureExpressionInfo",null),(0,tslib_es6._)([(0,writer/* writer */.K)("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],ElevationInfo_c.prototype,"writeFeatureExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],ElevationInfo_c.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ElevationInfo_c.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:unitConversionUtils/* supportedUnits */.KQ,json:{type:String,read:d.read,write:d.write}})],ElevationInfo_c.prototype,"unit",null),ElevationInfo_c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ElevationInfo")],ElevationInfo_c);const h=ElevationInfo_c;


/***/ }),

/***/ 97046:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ r),
/* harmony export */   KQ: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export supportsUnit */
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10301);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){return!!n&&null!=t[n]}function r(n){return 1/(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j[n]||1)}function e(){const n=Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j);return n.sort(),n}const o=e();


/***/ }),

/***/ 54383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71647);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(i){if(_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.apiKey&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .supportsApiKey */ .Q)(i.portal.url))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save-api-key-utils:api-key-not-supported",`Saving is not supported on ${i.portal.url} when using an api key`)}


/***/ }),

/***/ 22942:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SO: () => (/* binding */ p),
/* harmony export */   dL: () => (/* binding */ m),
/* harmony export */   rH: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33880);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98751);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function u(e,r,o=null){const t=await i(e,r,o);await h(t,r,o)}async function p(e,r,o,t,s=null){const a=await i(o,t,s);await e.update({data:r}),await h(a,t,s)}async function i(e,s,n=null){if(!s?.resources)return;const u=s.portalItem===e.portalItem?new Set(e.paths):new Set;e.paths.length=0,e.portalItem=s.portalItem;const p=new Set(s.resources.toKeep.map((e=>e.resource.path))),i=new Set,h=[];p.forEach((r=>{u.delete(r),e.paths.push(r)}));for(const r of s.resources.toUpdate)if(u.delete(r.resource.path),p.has(r.resource.path)||i.has(r.resource.path)){const{resource:o,content:t,finish:s,error:u}=r,p=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getSiblingOfSameTypeI */ .bg)(o,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_3__/* .generateUUID */ .lk)());e.paths.push(p.path),h.push(f({resource:p,content:t,compress:r.compress,finish:s,error:u},n))}else e.paths.push(r.resource.path),h.push(l(r,n)),i.add(r.resource.path);for(const r of s.resources.toAdd)e.paths.push(r.resource.path),u.has(r.resource.path)?u.delete(r.resource.path):h.push(f(r,n));if(0===h.length)return u;const m=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .allSettledErrors */ .Ol)(h);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(n),m.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:m});return u}async function h(e,r,o=null){if(!e||!r.portalItem)return;const t=[];for(const s of e){const e=r.portalItem.resourceFromPath(s);t.push(e.portalItem.removeResource(e,o))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .eachAlways */ .Lx)(t)}async function f(r,o){const t={...null!=o?o:{},compress:r.compress},s=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(r.resource.portalItem.addResource(r.resource,await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .contentToBlob */ .cL)(r.content),t));if(!0!==s.ok)throw r.error?.(s.error),s.error;r.finish?.(r.resource)}async function l(r,o){const t=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(r.resource.update(await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .contentToBlob */ .cL)(r.content),o));if(!0!==t.ok)throw r.error?.(t.error),t.error;r.finish?.(r.resource)}async function m(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}


/***/ })

};
;