"use strict";
exports.id = 2102;
exports.ids = [2102,8751];
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

/***/ 62102:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ E)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(14798);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(12434);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(26099);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/collectionUtils.js
var collectionUtils = __webpack_require__(62090);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/LayersMixin.js
var LayersMixin = __webpack_require__(82576);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/TablesMixin.js
var TablesMixin = __webpack_require__(18437);
;// ../node_modules/@arcgis/core/support/tagSymbols.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const tagSymbols_e=Symbol("WebScene");

// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(15954);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(22942);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/writeUtils.js
var writeUtils = __webpack_require__(91146);
;// ../node_modules/@arcgis/core/layers/GroupLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let V=class extends((0,BlendLayer/* BlendLayer */.d)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,TablesMixin/* TablesMixin */.l)((0,LayersMixin/* LayersMixin */.Q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A)))))))){constructor(e){super(e),this.allLayers=new CollectionFlattener/* default */.A({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=(0,collectionUtils/* createFlattenedTablesCollection */.Z)(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,t)=>{const{save:i,saveAs:s}=await __webpack_require__.e(/* import() */ 4627).then(__webpack_require__.bind(__webpack_require__, 84627));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return s(this,t,r)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&tagSymbols_e in e}),(e=>{const r="prevent-adding-tables";this.removeHandles(r),e&&(this.tables.removeAll(),this.addHandles((0,reactiveUtils.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),Logger/* default */.A.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),r))}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.visible),this._onVisibilityChange.bind(this),reactiveUtils/* sync */.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===PropertyOrigin/* OriginId */.Gr.USER}_writeLayers(e,r,t,i){const s=[];if(!e)return s;e.forEach((e=>{const r=(0,writeUtils/* getLayerJSON */.CJ)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);r?.layerType&&s.push(r)})),r.layers=s}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,r,t){const{itemId:i,layerType:s}=r;if("GroupLayer"===s&&i)return new PortalItem["default"]({id:i,portal:t?.portal})}writePortalItem(e,r){e?.id&&(r.itemId=e.id)}set visibilityMode(e){const r=this._get("visibilityMode")!==e;this._set("visibilityMode",e),r&&this._enforceVisibility(e,this.visible)}async beforeSave(){return (0,saveUtils/* beforeSave */.dL)(this)}load(e){const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service"],layerModuleTypeMap:lazyLayerLoader/* layerLookupMap */.S},e).catch((e=>{if((0,promiseUtils/* throwIfAbortError */.QP)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(r),Promise.resolve(this)}async loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer readded to Grouplayer: uid=${e.uid}`):this.addHandles((0,reactiveUtils/* watch */.wB)((()=>e.visible),(r=>this._onChildVisibilityChange(e,r)),reactiveUtils/* sync */.OH),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((r=>{r!==e&&(r.visible=!1)}))}_enforceVisibility(e,r){if(!(0,utils/* getProperties */.oY)(this).initialized)return;const t=this.layers;let i=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!i&&(i=t.at(0),i.visible=!0),this._turnOffOtherLayers(i);break;case"inherited":t.forEach((e=>{e.visible=r}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((r=>{r.visible=e}))}_onChildVisibilityChange(e,r){switch(this.visibilityMode){case"exclusive":r?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,dependsOn:[]})],V.prototype,"allLayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"allTables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],V.prototype,"blendMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],V.prototype,"sourceIsPortalItem",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],V.prototype,"layers",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("layers")],V.prototype,"_writeLayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["GroupLayer"]})],V.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,r,t){return{enabled:"Group Layer"===e?.type&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],V.prototype,"portalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","portalItem",["itemId"])],V.prototype,"readPortalItem",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","portalItem",{itemId:{type:String}})],V.prototype,"writePortalItem",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],V.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0,value:"group"})],V.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,r,t)=>{"inherited"!==e&&(r[t]=e)}}}}})],V.prototype,"visibilityMode",null),V=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.GroupLayer")],V);const E=V;


/***/ }),

/***/ 27664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LF: () => (/* binding */ n),
/* harmony export */   M9: () => (/* binding */ a),
/* harmony export */   zu: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports fromJSON, toJSON */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81816);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e,t,r){try{return c(e)}catch(s){r?.messages?.push(s)}return null}function a(e,r,s,n){try{const n=o(e);(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(s,n,r)}catch(a){n.messages&&n.messages.push(a)}}function o(e){const t=(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(e);return t?(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .isEffectFunctions */ .dw)(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}function c(e){if(!e||0===e.length)return null;if(f(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:i(r.value)});return t}return i(e)}function f(e){const t=e[0];return!!t&&"scale"in t}function i(e){if(!e?.length)return"";const t=[];for(const s of e){let e=[];switch(s.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(s,"amount")];break;case"blur":e=[u(s,"radius","pt")];break;case"hue-rotate":e=[u(s,"angle","deg")];break;case"drop-shadow":e=[u(s,"xoffset","pt"),u(s,"yoffset","pt"),u(s,"blurRadius","pt"),l(s,"color")];break;case"bloom":e=[u(s,"strength"),u(s,"radius","pt"),u(s,"threshold")]}const n=`${s.type}(${e.filter(Boolean).join(" ")})`;(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(n),t.push(n)}return t.join(" ")}function u(t,r,s){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});return s?t[r]+s:""+t[r]}function l(t,r){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});const s=t[r];return`rgba(${s[0]||0}, ${s[1]||0}, ${s[2]||0}, ${s[3]/255||0})`}


/***/ }),

/***/ 81816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78138);
/* harmony import */ var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42784);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m,g,v={exports:{}};v.exports,g=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,r,n,u){var a=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(a,e.prototype),a.expected=r,a.found=n,a.location=u,a.name="SyntaxError",a}function r(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}function n(t,r){var n,u={},a=(r=void 0!==r?r:{}).grammarSource,o={start:Lt},c=Lt,i="none",s=")",f=",",l="(",p="%",h="px",m="cm",g="mm",v="in",d="pt",y="pc",A="deg",w="rad",x="grad",b="turn",C="#",F=".",E="e",j=/^[ \t\n\r]/,$=/^[a-z\-]/,O=/^[0-9a-fA-F]/,k=/^[+\-]/,q=/^[0-9]/,S=Bt("none"),z=Ut("none",!1),R=Ut(")",!1),I=Ut(",",!1),M=Bt("whitespace"),P=Ht([" ","\t","\n","\r"],!1,!1),N=Bt("function"),T=Ut("(",!1),U=Bt("identifier"),H=Ht([["a","z"],"-"],!1,!1),_=Bt("percentage"),B=Ut("%",!1),D=Bt("length"),G=Ut("px",!1),J=Ut("cm",!1),K=Ut("mm",!1),L=Ut("in",!1),Q=Ut("pt",!1),V=Ut("pc",!1),W=Bt("angle"),X=Ut("deg",!1),Y=Ut("rad",!1),Z=Ut("grad",!1),tt=Ut("turn",!1),et=Bt("number"),rt=Bt("color"),nt=Ut("#",!1),ut=Ht([["0","9"],["a","f"],["A","F"]],!1,!1),at=Ht(["+","-"],!1,!1),ot=Ht([["0","9"]],!1,!1),ct=Ut(".",!1),it=Ut("e",!1),st=function(){return[]},ft=function(t,e){return{type:"function",name:t,parameters:e||[]}},lt=function(t,e){return e.length>0?se(t,e,3):[t]},pt=function(t){return{type:"quantity",value:t.value,unit:t.unit}},ht=function(t){return{type:"color",colorType:t.type,value:t.value}},mt=function(t){return t},gt=function(){return Tt()},vt=function(t){return{value:t,unit:"%"}},dt=function(t){return{value:t,unit:"px"}},yt=function(t){return{value:t,unit:"cm"}},At=function(t){return{value:t,unit:"mm"}},wt=function(t){return{value:t,unit:"in"}},xt=function(t){return{value:t,unit:"pt"}},bt=function(t){return{value:t,unit:"pc"}},Ct=function(t){return{value:t,unit:"deg"}},Ft=function(t){return{value:t,unit:"rad"}},Et=function(t){return{value:t,unit:"grad"}},jt=function(t){return{value:t,unit:"turn"}},$t=function(t){return{value:t,unit:null}},Ot=function(){return{type:"hex",value:Tt()}},kt=function(t){return{type:"function",value:t}},qt=function(){return{type:"named",value:Tt()}},St=function(){return parseFloat(Tt())},zt=0,Rt=0,It=[{line:1,column:1}],Mt=0,Pt=[],Nt=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');c=o[r.startRule]}function Tt(){return t.substring(Rt,zt)}function Ut(t,e){return{type:"literal",text:t,ignoreCase:e}}function Ht(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function _t(){return{type:"end"}}function Bt(t){return{type:"other",description:t}}function Dt(e){var r,n=It[e];if(n)return n;for(r=e-1;!It[r];)r--;for(n={line:(n=It[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return It[e]=n,n}function Gt(t,e,r){var n=Dt(t),u=Dt(e),o={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:u.line,column:u.column}};return r&&a&&"function"==typeof a.offset&&(o.start=a.offset(o.start),o.end=a.offset(o.end)),o}function Jt(t){zt<Mt||(zt>Mt&&(Mt=zt,Pt=[]),Pt.push(t))}function Kt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function Lt(){var t;return(t=Qt())===u&&(t=Vt()),t}function Qt(){var e,r;return Nt++,e=zt,Zt(),t.substr(zt,4)===i?(r=i,zt+=4):(r=u,0===Nt&&Jt(z)),r!==u?(Zt(),Rt=e,e=st()):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(S),e}function Vt(){var t,e;if(t=[],(e=Wt())!==u)for(;e!==u;)t.push(e),e=Wt();else t=u;return t}function Wt(){var e,r,n,a;return e=zt,Zt(),(r=te())!==u?(Zt(),(n=Xt())===u&&(n=null),Zt(),41===t.charCodeAt(zt)?(a=s,zt++):(a=u,0===Nt&&Jt(R)),a!==u?(Zt(),Rt=e,e=ft(r,n)):(zt=e,e=u)):(zt=e,e=u),e}function Xt(){var e,r,n,a,o,c,i,s;if(e=zt,(r=Yt())!==u){for(n=[],a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);a!==u;)n.push(a),a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);Rt=e,e=lt(r,n)}else zt=e,e=u;return e}function Yt(){var t,e;return t=zt,(e=re())===u&&(e=ne())===u&&(e=ue())===u&&(e=ae()),e!==u&&(Rt=t,e=pt(e)),(t=e)===u&&(t=zt,(e=oe())!==u&&(Rt=t,e=ht(e)),t=e),t}function Zt(){var e,r;for(Nt++,e=[],j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));r!==u;)e.push(r),j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));return Nt--,r=u,0===Nt&&Jt(M),e}function te(){var e,r,n;return Nt++,e=zt,(r=ee())!==u?(40===t.charCodeAt(zt)?(n=l,zt++):(n=u,0===Nt&&Jt(T)),n!==u?(Rt=e,e=mt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&(r=u,0===Nt&&Jt(N)),e}function ee(){var e,r,n;if(Nt++,e=zt,r=[],$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H)),n!==u)for(;n!==u;)r.push(n),$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H));else r=u;return r!==u&&(Rt=e,r=gt()),Nt--,(e=r)===u&&(r=u,0===Nt&&Jt(U)),e}function re(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(37===t.charCodeAt(zt)?(n=p,zt++):(n=u,0===Nt&&Jt(B)),n!==u?(Rt=e,e=vt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(_),e}function ne(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===h?(n=h,zt+=2):(n=u,0===Nt&&Jt(G)),n!==u?(Rt=e,e=dt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===m?(n=m,zt+=2):(n=u,0===Nt&&Jt(J)),n!==u?(Rt=e,e=yt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===g?(n=g,zt+=2):(n=u,0===Nt&&Jt(K)),n!==u?(Rt=e,e=At(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===v?(n=v,zt+=2):(n=u,0===Nt&&Jt(L)),n!==u?(Rt=e,e=wt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===d?(n=d,zt+=2):(n=u,0===Nt&&Jt(Q)),n!==u?(Rt=e,e=xt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===y?(n=y,zt+=2):(n=u,0===Nt&&Jt(V)),n!==u?(Rt=e,e=bt(r)):(zt=e,e=u)):(zt=e,e=u)))))),Nt--,e===u&&0===Nt&&Jt(D),e}function ue(){var e,r,n;return Nt++,e=zt,(r=ce())!==u?(t.substr(zt,3)===A?(n=A,zt+=3):(n=u,0===Nt&&Jt(X)),n!==u?(Rt=e,e=Ct(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,3)===w?(n=w,zt+=3):(n=u,0===Nt&&Jt(Y)),n!==u?(Rt=e,e=Ft(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===x?(n=x,zt+=4):(n=u,0===Nt&&Jt(Z)),n!==u?(Rt=e,e=Et(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===b?(n=b,zt+=4):(n=u,0===Nt&&Jt(tt)),n!==u?(Rt=e,e=jt(r)):(zt=e,e=u)):(zt=e,e=u)))),Nt--,e===u&&(r=u,0===Nt&&Jt(W)),e}function ae(){var t,e;return Nt++,t=zt,Zt(),(e=ce())!==u?(Rt=t,t=$t(e)):(zt=t,t=u),Nt--,t===u&&0===Nt&&Jt(et),t}function oe(){var e,r,n,a;if(Nt++,e=zt,35===t.charCodeAt(zt)?(r=C,zt++):(r=u,0===Nt&&Jt(nt)),r!==u){if(n=[],O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut)),a!==u)for(;a!==u;)n.push(a),O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut));else n=u;n!==u?(Rt=e,e=Ot()):(zt=e,e=u)}else zt=e,e=u;return e===u&&(e=zt,(r=Wt())!==u&&(Rt=e,r=kt(r)),(e=r)===u&&(e=zt,(r=ee())!==u&&(Rt=e,r=qt()),e=r)),Nt--,e===u&&(r=u,0===Nt&&Jt(rt)),e}function ce(){var e,r,n,a,o,c,i;for(e=zt,k.test(t.charAt(zt))?(t.charAt(zt),zt++):0===Nt&&Jt(at),r=zt,n=[],q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));a!==u;)n.push(a),q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));if(46===t.charCodeAt(zt)?(a=F,zt++):(a=u,0===Nt&&Jt(ct)),a!==u){if(o=[],q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot)),c!==u)for(;c!==u;)o.push(c),q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot));else o=u;o!==u?r=n=[n,a,o]:(zt=r,r=u)}else zt=r,r=u;if(r===u)if(r=[],q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot)),n!==u)for(;n!==u;)r.push(n),q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot));else r=u;if(r!==u){if(n=zt,101===t.charCodeAt(zt)?(a=E,zt++):(a=u,0===Nt&&Jt(it)),a!==u){if(k.test(t.charAt(zt))?(o=t.charAt(zt),zt++):(o=u,0===Nt&&Jt(at)),o===u&&(o=null),c=[],q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot)),i!==u)for(;i!==u;)c.push(i),q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot));else c=u;c!==u?n=a=[a,o,c]:(zt=n,n=u)}else zt=n,n=u;n===u&&(n=null),Rt=e,e=St()}else zt=e,e=u;return e}function ie(t,e){return t.map((function(t){return t[e]}))}function se(t,e,r){return[t].concat(ie(e,r))}if((n=c())!==u&&zt===t.length)return n;throw n!==u&&zt<t.length&&Jt(_t()),Kt(Pt,Mt<t.length?t.charAt(Mt):null,Mt<t.length?Gt(Mt,Mt+1):Gt(Mt,Mt))}return t(e,Error),e.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var n,u=null;for(n=0;n<t.length;n++)if(t[n].source===this.location.source){u=t[n].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,o=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(a):a,c=this.location.source+":"+o.line+":"+o.column;if(u){var i=this.location.end,s=r("",o.line.toString().length," "),f=u[a.line-1],l=(a.line===i.line?i.column:f.length+1)-a.column||1;e+="\n --\x3e "+c+"\n"+s+" |\n"+o.line+" | "+f+"\n"+s+" | "+r("",a.column-1," ")+r("",l,"^")}else e+="\n at "+c}return e},e.buildMessage=function(t,e){var r={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var e=t.parts.map((function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)}));return"["+(t.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){return r[t.type](t)}function c(t){var e,r,n=t.map(o);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+u(t)+'"':"end of input"}return"Expected "+c(t)+" but "+i(e)+" found."},{SyntaxError:e,parse:n}},(m=v).exports&&(m.exports=g());var d=v.exports;function y(t){if(!t||0===t.length)return null;if("string"==typeof t){const e=A(t);return e&&0!==e.length?e:null}const e=t.map((t=>{if(!Number.isFinite(t.scale)||t.scale<=0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-scale","scale must be finite and greater than 0",{stop:t});return{scale:t.scale,effects:A(t.value)}}));e.sort(((t,e)=>e.effects.length-t.effects.length));for(let r=0;r<e.length-1;r++){if(!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .canInterpolateEffects */ .mj)(e[r].effects,e[r+1].effects))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[r].effects,b:e[r+1].effects});(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeEffects */ .O9)(e[r].effects,e[r+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}function A(t){let e;if(!t)return[];try{e=d.parse(t)}catch(r){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-syntax","Invalid effect syntax",{value:t,error:r})}return e.map((t=>w(t)))}function w(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return x(t);case"opacity":return b(t);case"hue-rotate":return C(t);case"blur":return F(t);case"drop-shadow":return E(t);case"bloom":return j(t)}}catch(e){throw e.details.filter=t,e}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function x(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorMatrixEffect */ .yG(t.name,e)}function b(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .OpacityEffect */ .jm(e)}function C(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=T(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .HueRotateEffect */ .Nd(e)}function F(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=U(t.parameters[0]),k(e,t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BlurEffect */ .Fk(e)}function E(t){const e=[];let r=null;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","Accepts only one color",{});r=H(n)}else{const t=U(n);if(Object.isFrozen(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&k(t,n)}if(e.length<2||e.length>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .DropShadowEffect */ .$b(e[0],e[1],e[2]||0,r||_("black"))}function j(t){let e=1,r=0,n=0;return $(t.parameters,3),t.parameters[0]&&(e=P(t.parameters[0])),t.parameters[1]&&(r=U(t.parameters[1]),k(r,t.parameters[1])),t.parameters[2]&&(n=P(t.parameters[2])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BloomEffect */ .bv(e,r,n)}function $(t,e){if(t.length>e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function O(t){if("color"===t.type)return"<color>";if(t.unit){if(t.unit in I)return"<length>";if(t.unit in z)return"<angle>";if("%"===t.unit)return"<percentage>"}return"<double>"}function k(t,e){if(t<0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}function q(t){if("quantity"!==t.type||null!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double>, Actual: ${O(t)}`,{term:t})}function S(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double> or <percentage>, Actual: ${O(t)}`,{term:t})}const z={deg:1,grad:.9,rad:180/Math.PI,turn:360};function R(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=z[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <angle>, Actual: ${O(t)}`,{term:t})}const I={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function M(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=I[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>, Actual: ${O(t)}`,{term:t})}function P(t){S(t);const e=t.value;return k(e,t),"%"===t.unit?.01*e:e}function N(t){return q(t),k(t.value,t),t.value}function T(t){return R(t),t.value*z[t.unit]||0}function U(t){return M(t),t.value*I[t.unit]||0}function H(e){switch(e.colorType){case"hex":return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hex2rgba */ .qh)(e.value);case"named":return _(e.value);case"function":return G(e.value)}}function _(t){if(!(0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNamedColor */ .V6)(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getNamedColorCopy */ .c4)(t)}const B=/^rgba?/i,D=/^hsla?/i;function G(t){if($(t.parameters,4),B.test(t.name))return[P(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1];if(D.test(t.name))return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hsla2rgba */ .z$)(N(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}


/***/ }),

/***/ 15305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27664);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .read */ .LF},write:{allowNull:!0,writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .write */ .M9}},a=t=>{let s=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],s.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({json:{read:!1,write:!1,origins:{"web-map":i,"portal-item":i}}})],s.prototype,"effect",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.BlendLayer")],s),s};


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

/***/ 15954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


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