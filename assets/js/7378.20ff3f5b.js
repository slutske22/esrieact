"use strict";
exports.id = 7378;
exports.ids = [7378];
exports.modules = {

/***/ 53244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26325);
/* harmony import */ var _accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89370);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles((0,_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .autorun */ .fm)((()=>this._refresh()),_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .sync */ .OH))}destroy(){this.getCollections=null}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let o=0;for(const e of t)null!=e&&(o=this._processCollection(o,e));this.splice(o)}_createNewInstance(t){return new _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(t)}_processCollection(t,o){if(!o)return t;const e=this.itemFilterFunction??(t=>!!t);for(const s of o)if(s){if(e(s)){const o=this.indexOf(s,t);o>=0?o!==t&&this.reorder(s,t):this.add(s,t),++t}if(this.getChildrenFunction){const o=this.getChildrenFunction(s);if(Array.isArray(o))for(const e of o)t=this._processCollection(t,e);else t=this._processCollection(t,o)}}return t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getCollections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getChildrenFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"itemFilterFunction",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.core.CollectionFlattener")],l);


/***/ }),

/***/ 52686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ a),
/* harmony export */   g: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _Loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(o,l){return await o.load(),a(o,l)}async function a(t,a){const s=[],c=(...o)=>{for(const l of o)null!=l&&(Array.isArray(l)?c(...l):_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.isCollection(l)?l.forEach((o=>c(o))):_Loadable_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.isLoadable(l)&&s.push(l))};a(c);let f=null;if(await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(s,(async o=>{const n=await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(i(o)?o.loadAll():o.load());!1!==n.ok||f||(f=n)})),f)throw f.error;return t}function i(o){return"loadAll"in o&&"function"==typeof o.loadAll}


/***/ }),

/***/ 7378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ E)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(53244);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(52686);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(66361);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/layersCreator.js + 1 modules
var layersCreator = __webpack_require__(41570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(97364);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
;// ./node_modules/@arcgis/core/support/collectionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){return new CollectionFlattener/* default */.A({getCollections:()=>[t.tables,t.layers],getChildrenFunction:e=>{const t=[];return"tables"in e&&t.push(e.tables),"layers"in e&&t.push(e.layers),t},itemFilterFunction:e=>{const t=e.parent;return!!t&&"tables"in t&&t.tables.includes(e)}})}function n(e){for(const t of e.values())t?.destroy();e.clear()}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(48);
;// ./node_modules/@arcgis/core/support/LayersMixin.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function d(e,r,t){let s,o;if(e)for(let a=0,i=e.length;a<i;a++){if(s=e.at(a),s?.[r]===t)return s;if("group"===s?.type&&(o=d(s.layers,r,t),o))return o}}const l=l=>{let y=class extends l{constructor(...e){super(...e),this.layers=new Collection/* default */.A;const t=e=>{e.parent&&"remove"in e.parent&&e.parent.remove(e)},o=e=>{e.parent=this,this.layerAdded(e),"elevation"!==e.type&&"base-elevation"!==e.type||Logger/* default */.A.getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as an operational layer and will therefore be ignored.`)},a=e=>{e.parent=null,this.layerRemoved(e)};this.addHandles([this.layers.on("before-add",(e=>{if(e.item===this)return e.preventDefault(),void Logger/* default */.A.getLogger(this).error("#add()","Cannot add layer to itself.");t(e.item)})),this.layers.on("after-add",(e=>o(e.item))),this.layers.on("after-remove",(e=>a(e.item)))])}destroy(){const e=this.layers.toArray();for(const r of e)r.destroy();this.layers.destroy()}set layers(e){this._set("layers",(0,collectionUtils/* referenceSetter */.V)(e,this._get("layers")))}add(e,r){const t=this.layers;if(r=t.getNextIndex(r),e instanceof Layer/* default */.A){const s=e;s.parent===this?this.reorder(s,r):t.add(s,r)}else (0,promiseUtils/* isPromiseLike */.$X)(e)?e.then((e=>{this.destroyed||this.add(e,r)})):Logger/* default */.A.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,r){const t=this.layers;let s=t.getNextIndex(r);e.slice().forEach((e=>{e.parent!==this?(t.add(e,s),s+=1):this.reorder(e,s)}))}findLayerById(e){return d(this.layers,"id",e)}findLayerByUid(e){return d(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,r){return this.layers.reorder(e,r)}layerAdded(e){}layerRemoved(e){}};return (0,tslib_es6._)([(0,property/* property */.MZ)()],y.prototype,"layers",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.support.LayersMixin")],y),y};

;// ./node_modules/@arcgis/core/support/TablesMixin.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new Set(["feature","subtype-group"]);function TablesMixin_n(t,e,r){if(t)for(let s=0,o=t.length;s<o;s++){const o=t.at(s);if(o[e]===r)return o;if("group"===o?.type){const t=TablesMixin_n(o.tables,e,r);if(t)return t}}}const TablesMixin_l=l=>{let p=class extends l{constructor(...t){super(...t),this.tables=new Collection/* default */.A,this.addHandles([this.tables.on("after-add",(t=>{const e=t.item;e.parent&&e.parent!==this&&"tables"in e.parent&&e.parent.tables.remove(e),e.parent=this,a.has(e.type)||Logger/* default */.A.getLogger(this).error(`Layer 'title:${e.title}, id:${e.id}' of type '${e.type}' is not supported as a table and will therefore be ignored.`)})),this.tables.on("after-remove",(t=>{t.item.parent=null}))])}destroy(){const t=this.tables.toArray();for(const e of t)e.destroy();this.tables.destroy()}set tables(t){this._set("tables",(0,collectionUtils/* referenceSetter */.V)(t,this._get("tables")))}findTableById(t){return TablesMixin_n(this.tables,"id",t)}findTableByUid(t){return TablesMixin_n(this.tables,"uid",t)}};return (0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"tables",null),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.support.TablesMixin")],p),p};

;// ./node_modules/@arcgis/core/support/tagSymbols.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const tagSymbols_e=Symbol("WebScene");

// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(49972);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/writeUtils.js
var writeUtils = __webpack_require__(52380);
;// ./node_modules/@arcgis/core/layers/GroupLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let C=class extends((0,BlendLayer/* BlendLayer */.dM)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)(TablesMixin_l(l((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A)))))))){constructor(e){super(e),this.allLayers=new CollectionFlattener/* default */.A({getCollections:()=>[this.layers],getChildrenFunction:e=>"layers"in e?e.layers:null}),this.allTables=t(this),this.fullExtent=void 0,this.operationalLayerType="GroupLayer",this.spatialReference=void 0,this.type="group",this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,t)=>{const{save:i,saveAs:s}=await __webpack_require__.e(/* import() */ 42521).then(__webpack_require__.bind(__webpack_require__, 42521));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return s(this,t,r)}}))}initialize(){this._enforceVisibility(this.visibilityMode,this.visible),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>{let e=this.parent;for(;e&&"parent"in e&&e.parent;)e=e.parent;return e&&tagSymbols_e in e}),(e=>{const r="prevent-adding-tables";this.removeHandles(r),e&&(this.tables.removeAll(),this.addHandles((0,reactiveUtils.on)((()=>this.tables),"before-add",(e=>{e.preventDefault(),Logger/* default */.A.getLogger(this).errorOnce("tables","tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.")})),r))}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.visible),this._onVisibilityChange.bind(this),reactiveUtils/* sync */.OH)])}destroy(){this.allLayers.destroy(),this.allTables.destroy()}get sourceIsPortalItem(){return this.portalItem&&this.originIdOf("portalItem")===PropertyOrigin/* OriginId */.Gr.USER}_writeLayers(e,r,t,i){const s=[];if(!e)return s;e.forEach((e=>{const r=(0,writeUtils/* getLayerJSON */.CJ)(e,i.webmap?i.webmap.getLayerJSONFromResourceInfo(e):null,i);r?.layerType&&s.push(r)})),r.layers=s}set portalItem(e){this._set("portalItem",e)}readPortalItem(e,r,t){const{itemId:i,layerType:s}=r;if("GroupLayer"===s&&i)return new PortalItem["default"]({id:i,portal:t?.portal})}writePortalItem(e,r){e?.id&&(r.itemId=e.id)}set visibilityMode(e){const r=this._get("visibilityMode")!==e;this._set("visibilityMode",e),r&&this._enforceVisibility(e,this.visible)}async beforeSave(){return (0,saveUtils/* beforeSave */.dL)(this)}load(e){const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Group Layer","Scene Service","Video Service"],layerModuleTypeMap:lazyLayerLoader/* layerLookupMap */.S,populateGroupLayer:layersCreator/* populateGroupLayer */.N},e).catch((e=>{if((0,promiseUtils/* throwIfAbortError */.QP)(e),this.sourceIsPortalItem)throw e}));return this.addResolvingPromise(r),Promise.resolve(this)}async loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{e(this.layers,this.tables)}))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}layerAdded(e){e.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(e):"inherited"===this.visibilityMode&&(e.visible=this.visible),this.hasHandles(e.uid)?console.error(`Layer read to Grouplayer: uid=${e.uid}`):this.addHandles((0,reactiveUtils/* watch */.wB)((()=>e.visible),(r=>this._onChildVisibilityChange(e,r)),reactiveUtils/* sync */.OH),e.uid)}layerRemoved(e){this.removeHandles(e.uid),this._enforceVisibility(this.visibilityMode,this.visible)}_turnOffOtherLayers(e){this.layers.forEach((r=>{r!==e&&(r.visible=!1)}))}_enforceVisibility(e,r){if(!(0,utils/* getProperties */.oY)(this).initialized)return;const t=this.layers;let i=t.find((e=>e.visible));switch(e){case"exclusive":t.length&&!i&&(i=t.at(0),i.visible=!0),this._turnOffOtherLayers(i);break;case"inherited":t.forEach((e=>{e.visible=r}))}}_onVisibilityChange(e){"inherited"===this.visibilityMode&&this.layers.forEach((r=>{r.visible=e}))}_onChildVisibilityChange(e,r){switch(this.visibilityMode){case"exclusive":r?this._turnOffOtherLayers(e):this._isAnyLayerVisible()||(e.visible=!0);break;case"inherited":e.visible=this.visible}}_isAnyLayerVisible(){return this.layers.some((e=>e.visible))}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,dependsOn:[]})],C.prototype,"allLayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"allTables",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],C.prototype,"blendMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"sourceIsPortalItem",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:{ignoreOrigin:!0}}})],C.prototype,"layers",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("layers")],C.prototype,"_writeLayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["GroupLayer"]})],C.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{read:!1,write:{overridePolicy(e,r,t){return{enabled:"Group Layer"===e?.type&&t?.initiator!==this}}}},"web-scene":{read:!1,write:!1}}}})],C.prototype,"portalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","portalItem",["itemId"])],C.prototype,"readPortalItem",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","portalItem",{itemId:{type:String}})],C.prototype,"writePortalItem",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0,value:"group"})],C.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["independent","inherited","exclusive"],value:"independent",json:{write:!0,origins:{"web-map":{type:["independent","exclusive"],write:(e,r,t)=>{"inherited"!==e&&(r[t]=e)}}}}})],C.prototype,"visibilityMode",null),C=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.GroupLayer")],C);const E=C;


/***/ }),

/***/ 86270:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88426);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this._serviceMetadatas=new Map,this._itemDatas=new Map}async fetchServiceMetadata(e,a){const s=this._serviceMetadatas.get(e);if(s)return s;const r=await (0,_support_requestPresets_js__WEBPACK_IMPORTED_MODULE_0__/* .fetchArcGISServiceJSON */ .V)(e,a);return this._serviceMetadatas.set(e,r),r}async fetchItemData(t){const{id:e}=t;if(!e)return null;const{_itemDatas:a}=this;if(a.has(e))return a.get(e);const s=await t.fetchData();return a.set(e,s),s}async fetchCustomParameters(t,e){const a=await this.fetchItemData(t);return a&&"object"==typeof a&&(e?e(a):a.customParameters)||null}}


/***/ }),

/***/ 41570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ v),
  populateOperationalLayers: () => (/* binding */ l)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LayerLoadContext.js
var LayerLoadContext = __webpack_require__(86270);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/lazyLayerLoader.js
var lazyLayerLoader = __webpack_require__(97364);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
;// ./node_modules/@arcgis/core/portal/support/featureCollectionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function featureCollectionUtils_e(e){return t(e,"notes")}function r(e){return t(e,"markup")}function featureCollectionUtils_n(e){return t(e,"route")}function t(e,r){return!(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)&&e.featureCollectionType===r}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalLayers.js
var portalLayers = __webpack_require__(25302);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(99650);
;// ./node_modules/@arcgis/core/layers/support/layersCreator.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function l(e,r,a){if(!r)return;const y=r.map((e=>G(e,a))),t=await Promise.allSettled(y);for(const i of t)"rejected"===i.status||i.value&&e.add(i.value)}const c={ArcGISDimensionLayer:"DimensionLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BuildingSceneLayer:"BuildingSceneLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GroupLayer:"GroupLayer",IntegratedMesh3DTilesLayer:"IntegratedMesh3DTilesLayer",Object3DTilesLayer:"UnsupportedLayer",IntegratedMeshLayer:"IntegratedMeshLayer",KML:"KMLLayer",LineOfSightLayer:"LineOfSightLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",PointCloudLayer:"PointCloudLayer",RasterDataLayer:"UnsupportedLayer",VectorTileLayer:"VectorTileLayer",ViewshedLayer:"ViewshedLayer",Voxel:"VoxelLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},s={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",ArcGISSceneServiceLayer:"SceneLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"UnsupportedLayer",WMS:"UnsupportedLayer",WebTiledLayer:"WebTileLayer"},u={ArcGISAnnotationLayer:"UnsupportedLayer",ArcGISDimensionLayer:"UnsupportedLayer",ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",ArcGISVideoLayer:"VideoLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",CatalogLayer:"CatalogLayer",CSV:"CSVLayer",DefaultTileLayer:"TileLayer",GeoJSON:"GeoJSONLayer",GeoRSS:"GeoRSSLayer",GroupLayer:"GroupLayer",KML:"KMLLayer",KnowledgeGraphLayer:"KnowledgeGraphLayer",MediaLayer:"MediaLayer",OGCFeatureLayer:"OGCFeatureLayer",OrientedImageryLayer:"OrientedImageryLayer",SubtypeGroupLayer:"SubtypeGroupLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WFS:"WFSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},d={ArcGISFeatureLayer:"FeatureLayer",SubtypeGroupTable:"SubtypeGroupLayer"},I={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",BingMapsAerial:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",DefaultTileLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WCS:"WCSLayer",WMS:"WMSLayer",WebTiledLayer:"WebTileLayer"},m={...u,LinkChartLayer:"LinkChartLayer"},g={...d},T={...I};async function G(e,r){return f(await M(e,r),e,r)}async function f(e,r,a){const y=new e;return y.read(r,a.context),"group"===y.type&&("GroupLayer"===r.layerType?await v(y,r,a):b(r)?C(y,r,a.context):A(r)&&await h(y,r,a.context)),await (0,styleUtils/* loadStyleRenderer */.L)(y,a.context),y}async function M(e,n){const l=n.context,c=w(l);let s=e.layerType||e.type;!s&&n?.defaultLayerType&&(s=n.defaultLayerType);const p=c[s];let S=p?lazyLayerLoader/* layerLookupMap */.S[p]:lazyLayerLoader/* layerLookupMap */.S.UnknownLayer;if(b(e)){const t=l?.portal;if(e.itemId){const i=new PortalItem["default"]({id:e.itemId,portal:t});await i.load();const L=(await (0,portalLayers/* selectLayerClassPath */.n)(i,new LayerLoadContext/* LayerLoadContext */.v)).className||"UnknownLayer";S=lazyLayerLoader/* layerLookupMap */.S[L]}}else"ArcGISFeatureLayer"===s?featureCollectionUtils_e(e)||r(e)?S=lazyLayerLoader/* layerLookupMap */.S.MapNotesLayer:featureCollectionUtils_n(e)?S=lazyLayerLoader/* layerLookupMap */.S.RouteLayer:A(e)&&(S=lazyLayerLoader/* layerLookupMap */.S.GroupLayer):e.wmtsInfo?.url&&e.wmtsInfo.layerIdentifier?S=lazyLayerLoader/* layerLookupMap */.S.WMTSLayer:"WFS"===s&&"2.0.0"!==e.wfsInfo?.version&&(S=lazyLayerLoader/* layerLookupMap */.S.UnsupportedLayer);return S()}function A(e){if("ArcGISFeatureLayer"!==e.layerType||b(e))return!1;return(e.featureCollection?.layers?.length??0)>1}function b(e){return"Feature Collection"===e.type}function w(e){let r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=S;break;case"ground":r=s;break;case"tables":r=p;break;default:r=c}break;case"link-chart":switch(e.layerContainerType){case"basemap":r=T;break;case"tables":r=g;break;default:r=m}break;default:switch(e.layerContainerType){case"basemap":r=I;break;case"tables":r=d;break;default:r=u}}return r}async function v(r,a,y){const t=new Collection/* default */.A,i=l(t,Array.isArray(a.layers)?a.layers:[],y);try{try{if(await i,"group"===r.type)return r.layers.addMany(t),r}catch(L){r.destroy();for(const e of t)e.destroy();throw L}}catch(L){throw L}}function C(e,r,a){r.itemId&&(e.portalItem=new PortalItem["default"]({id:r.itemId,portal:a?.portal}),e.when((()=>{const y=y=>{const t=y.layerId;W(y,e,r,t,a);const i=r.featureCollection?.layers?.[t];i&&y.read(i,a)};e.layers?.forEach(y),e.tables?.forEach(y)})))}async function h(e,r,y){const t=lazyLayerLoader/* layerLookupMap */.S.FeatureLayer,i=await t(),L=r.featureCollection,o=L?.showLegend,n=L?.layers?.map(((a,t)=>{const L=new i;L.read(a,y);const n={...y,ignoreDefaults:!0};return W(L,e,r,t,n),null!=o&&L.read({showLegend:o},n),L}));e.layers.addMany(n??[])}function W(e,r,a,y,t){e.read({id:`${r.id}-sublayer-${y}`,visibility:a.visibleLayers?.includes(y)??!0},t)}


/***/ }),

/***/ 3173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ju: () => (/* binding */ u),
/* harmony export */   K8: () => (/* binding */ i),
/* harmony export */   XH: () => (/* binding */ c),
/* harmony export */   _r: () => (/* binding */ a),
/* harmony export */   bO: () => (/* binding */ l),
/* harmony export */   l: () => (/* binding */ o),
/* harmony export */   nu: () => (/* binding */ y),
/* harmony export */   pJ: () => (/* binding */ s),
/* harmony export */   rc: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28904);
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48101);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(e){const t={id:e.id,name:e.name},a=(0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_1__/* .getLayerModuleType */ .K)(e.type);return"FeatureLayer"!==a&&(t.layerType=a),t}async function l(e,r,l){let n;if(null==e?.layers||null==e?.tables){const u=await l.fetchServiceMetadata(r,{customParameters:s(e)?.customParameters});n=(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPreferredHost */ .G$)(),(e=e||{}).layers=e.layers||u?.layers?.map(a),e.tables=e.tables||u?.tables?.map(a)}return{data:e,preferredHost:n}}function s(e){if(!e)return null;const{layers:r,tables:t}=e;return r?.length?r[0]:t?.length?t[0]:null}function n(e,r){if(null==r)return null;return[...e.layers||[],...e.tables||[]].find((e=>e.id===r))}function u(e,r){return[...e.layers||[],...e.tables||[]].filter((({layerType:e})=>e?r.includes(e):r.includes("ArcGISFeatureLayer")))}function c(e){return(e?.layers?.length??0)+(e?.tables?.length??0)}function o(e){switch(e){case"catalog":return["CatalogLayer"];case"feature":return["ArcGISFeatureLayer"];case"oriented-imagery":return["OrientedImageryLayer"];case"subtype-group":return["SubtypeGroupLayer","SubtypeGroupTable"]}return null}function i(e){switch(e){case"CatalogLayer":return"CatalogLayer";case"OrientedImageryLayer":return"OrientedImageryLayer";case"SubtypeGroupLayer":case"SubtypeGroupTable":return"SubtypeGroupLayer"}return"FeatureLayer"}async function y(r,t,l){if(!r?.url)return t??{};if(t??={},!t.layers){const e=await l.fetchServiceMetadata(r.url);t.layers=e.layers?.map(a)}const{serverUrl:n,portalItem:u}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .findAssociatedFeatureService */ .L)(r.url,{sceneLayerItem:r,customParameters:s(t)?.customParameters}).catch((()=>({serverUrl:null,portalItem:null})));if(null==n)return t.tables=[],t;if(!t.tables&&u){const e=await u.fetchData().catch((()=>null));if(e?.tables)t.tables=e.tables.map(a);else{const r=await l.fetchServiceMetadata(n,{customParameters:s(e)?.customParameters}).catch((()=>null));t.tables=r?.tables?.map(a)}}if(t.tables)for(const e of t.tables)e.url=`${n}/${e.id}`;return t}


/***/ }),

/***/ 25302:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromItem: () => (/* binding */ L),
/* harmony export */   n: () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28904);
/* harmony import */ var _layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48101);
/* harmony import */ var _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86270);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44837);
/* harmony import */ var _layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97364);
/* harmony import */ var _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11969);
/* harmony import */ var _loadUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3173);
/* harmony import */ var _portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(86074);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function L(e){let{portalItem:a}=e;!a||a instanceof _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"]||(a=new _PortalItem_js__WEBPACK_IMPORTED_MODULE_6__["default"](a));const r=await w(a);return new(0,r.constructor)({portalItem:a,...r.properties})}async function w(e){await e.load();const a=new _layers_support_LayerLoadContext_js__WEBPACK_IMPORTED_MODULE_3__/* .LayerLoadContext */ .v;return S(await N(e,a))}async function N(a,r){switch(a.type){case"3DTiles Service":return a.typeKeywords.includes("3DObject")?b():P();case"CSV":return F();case"Feature Collection":return M(a);case"Feature Service":return h(a,r);case"Feed":return x();case"GeoJson":return G();case"Group Layer":return J();case"Image Service":return g(a,r);case"KML":return V();case"Knowledge Graph Layer":return K();case"Map Service":return v(a,r);case"Media Layer":return k();case"Scene Service":return I(a,r);case"Stream Service":return j();case"Video Service":return T(a,r);case"Vector Tile Service":return C();case"WCS":return W();case"WFS":return U();case"WMS":return D();case"WMTS":return O();default:throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("portal:unknown-item-type","Unknown item type '${type}'",{type:a.type})}}async function S(e){const a=e.className,r=_layers_support_lazyLayerLoader_js__WEBPACK_IMPORTED_MODULE_5__/* .layerLookupMap */ .S[a];return{constructor:await r(),properties:e.properties}}async function v(e,a){return await $(e,a)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function h(e,a){const r=await A(e,a);if("object"==typeof r){const{sourceJSON:e,className:a}=r,t={sourceJSON:e};return null!=r.id&&(t.layerId=r.id),{className:a||"FeatureLayer",properties:t}}return{className:"GroupLayer"}}async function I(e,r){const t=await A(e,r,(async()=>{try{if(!e.url)return[];const{serverUrl:t}=await (0,_layers_support_associatedFeatureServiceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .findAssociatedFeatureService */ .L)(e.url,{sceneLayerItem:e}),s=await r.fetchServiceMetadata(t);return s?.tables??[]}catch{return[]}}));if("object"==typeof t){const a={};let c;if(null!=t.id?(a.layerId=t.id,c=`${e.url}/layers/${t.id}`):c=e.url,e.typeKeywords?.length)for(const r of Object.keys(_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .sceneServiceLayerTypeToClassName */ .XX))if(e.typeKeywords.includes(r))return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .sceneServiceLayerTypeToClassName */ .XX[r]};const n=await r.fetchServiceMetadata(c,{customParameters:await r.fetchCustomParameters(e,(e=>(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(e)?.customParameters))});return{className:_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .sceneServiceLayerTypeToClassName */ .XX[n?.layerType]||"SceneLayer",properties:a}}if(!1===t){const a=await r.fetchServiceMetadata(e.url);if("Voxel"===a?.layerType)return{className:"VoxelLayer"}}return{className:"GroupLayer"}}async function M(e){await e.load();const a=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(e,"Map Notes"),r=(0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if((0,_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasTypeKeyword */ .Y)(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(t)?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function g(e,a){await e.load();const r=e.typeKeywords?.map((e=>e.toLowerCase()))??[];if(r.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(r.includes("tiled imagery"))return{className:"ImageryTileLayer"};const t=await a.fetchItemData(e),s=t?.layerType;if("ArcGISTiledImageServiceLayer"===s)return{className:"ImageryTileLayer"};if("ArcGISImageServiceLayer"===s)return{className:"ImageryLayer"};const c=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)}),n=c.cacheType?.toLowerCase(),o=c.capabilities?.toLowerCase().includes("tilesonly"),i=c.tileInfo?.format?.toLowerCase()??"",u=null==n&&["jpg","jpeg","png","png8","png24","png32","mixed"].includes(i);return"map"===n||u||o?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function j(){return{className:"StreamLayer"}}async function T(e,a){return"object"==typeof await A(e,a)?{className:"VideoLayer"}:{className:"GroupLayer"}}function C(){return{className:"VectorTileLayer"}}function G(){return{className:"GeoJSONLayer"}}function P(){return{className:"IntegratedMesh3DTilesLayer"}}function b(){return{className:"UnsupportedLayer"}}function F(){return{className:"CSVLayer"}}function V(){return{className:"KMLLayer"}}function K(){return{className:"KnowledgeGraphLayer"}}function W(){return{className:"WCSLayer"}}function U(){return{className:"WFSLayer"}}function D(){return{className:"WMSLayer"}}function O(){return{className:"WMTSLayer"}}function x(){return{className:"StreamLayer"}}function J(){return{className:"GroupLayer"}}function k(){return{className:"MediaLayer"}}async function $(e,a){const{tileInfo:r}=await a.fetchServiceMetadata(e.url,{customParameters:await a.fetchCustomParameters(e)});return r}async function A(e,a,t){const{url:s,type:o}=e,i="Feature Service"===o;if(!s)return{};if(/\/\d+$/.test(s)){if(i){const t=await a.fetchServiceMetadata(s,{customParameters:await a.fetchCustomParameters(e,(e=>(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(e)?.customParameters))});return (0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyPreferredHostToPortalItem */ .Gh)(e,(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getPreferredHost */ .G$)()),{id:t.id,className:(0,_layers_support_fetchService_js__WEBPACK_IMPORTED_MODULE_2__/* .getLayerModuleType */ .K)(t.type),sourceJSON:t}}return{}}if("Video Service"===o){const e=await a.fetchServiceMetadata(s);return!((e.layers?.length??0)>1)&&{}}await e.load();let d=await a.fetchItemData(e);if(i){const{data:r,preferredHost:t}=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .preprocessFSItemData */ .bO)(d,s,a);(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .applyPreferredHostToPortalItem */ .Gh)(e,t);const n=E(r);if("object"==typeof n){const e=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getLayerOrTable */ .rc)(r,n.id);n.className=(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .layerTypeToLayerModuleType */ .K8)(e?.layerType)}return n}"Scene Service"===o&&(d=await (0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .populateSceneServiceItemData */ .nu)(e,d,a));if((0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(d)>0)return E(d);const L=await a.fetchServiceMetadata(s);return t&&(L.tables=await t()),E(L)}function E(e){return 1===(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getNumLayersAndTables */ .XH)(e)&&{id:(0,_loadUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getFirstLayerOrTable */ .pJ)(e)?.id}}


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


/***/ }),

/***/ 52380:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CJ: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony exports disableRestrictedWriting, enableRestrictedWriting */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15565);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21750);
/* harmony import */ var _core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18051);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=new Set(["bing-maps","imagery","imagery-tile","map-image","open-street-map","tile","unknown","unsupported","vector-tile","web-tile","wcs","wms","wmts"]),l=new Set(["catalog","csv","feature","geo-rss","geojson","group","imagery","imagery-tile","kml","knowledge-graph","map-image","map-notes","media","ogc-feature","oriented-imagery","route","stream","subtype-group","tile","unknown","unsupported","vector-tile","video","web-tile","wcs","wfs","wms","wmts"]),a=new Set([...l,"link-chart"]);function s(e){o.delete(e),l.delete(e)}function c(e){o.add(e),l.add(e)}function u(e){switch(e.layerContainerType){case"basemap":return o;case"operational-layers":return"link-chart"===e.origin?a:l;default:return null}}function d(e,t){if(t.restrictedWebMapWriting){const n=u(t);return null==n||n.has(e.type)&&!(0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isFeatureCollectionLayer */ .Ov)(e)}return!0}function p(e,t){if(t)if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isFeatureCollectionLayer */ .Ov)(e)){const r=(0,_core_object_js__WEBPACK_IMPORTED_MODULE_2__/* .getDeepValue */ .wc)("featureCollection.layers",t),i=r?.[0]?.layerDefinition;i&&m(e,i)}else"group"!==e.type&&m(e,t)}function m(e,t){"maxScale"in e&&(t.maxScale=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToJSON */ .B)(e.maxScale)??void 0),"minScale"in e&&(t.minScale=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToJSON */ .B)(e.minScale)??void 0)}function f(e,t){if(p(e,t),t&&(t.id=e.id,"blendMode"in e&&(t.blendMode=e.blendMode,"normal"===t.blendMode&&delete t.blendMode),t.opacity=(0,_core_accessorSupport_extensions_serializableProperty_writer_js__WEBPACK_IMPORTED_MODULE_3__/* .numberToJSON */ .B)(e.opacity)??void 0,t.title=e.title||"Layer",t.visibility=e.visible,"legendEnabled"in e&&"wmts"!==e.type))if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isFeatureCollectionLayer */ .Ov)(e)){const n=t.featureCollection;n&&(n.showLegend=e.legendEnabled)}else t.showLegend=e.legendEnabled}function g(n,r,o){if(!n.persistenceEnabled)return null;if(!("write"in n)||!n.write)return o?.messages&&o.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("layer:unsupported",`Layers (${n.title}, ${n.id}) of type '${n.declaredClass}' cannot be persisted`,{layer:n})),null;if((0,_layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isFeatureCollectionLayer */ .Ov)(n)&&!n.isTable)r=n.resourceInfo;else if(d(n,o)){const e={};return n.write(e,o)?e:null}return null!=r&&f(n,r=(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(r)),r}


/***/ })

};
;