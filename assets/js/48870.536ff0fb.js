"use strict";
exports.id = 48870;
exports.ids = [48870];
exports.modules = {

/***/ 83055:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20464);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90752);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_4__/* .open */ .ho)(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeHandle */ .hA)((()=>{i.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t,s){return this.invokeMethod(this._mainMethod,e,t,s)}invokeMethod(e,t,s,i){if(this._thread){const r=this._transferLists[e],h=r?r(t):[];return this._thread.invoke(e,t,{transferList:h,signal:s,priority:i})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ 48870:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ T)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(34064);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISCachedService.js
var ArcGISCachedService = __webpack_require__(9127);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(45681);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(76592);
;// ../node_modules/@arcgis/core/layers/support/ElevationTileData.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ElevationTileData_a{constructor(a,t,s,e){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in a?(this.values=a.pixelData,this.width=a.width,this.height=a.height,this.noDataValue=a.noDataValue):(this.values=a,this.width=t,this.height=s,this.noDataValue=e)}get hasNoDataValues(){if(null==this._hasNoDataValues){const a=this.noDataValue;this._hasNoDataValues=this.values.includes(a)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}get cachedMemory(){return this.values.byteLength+256}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:a,values:t}=this;let s=1/0,e=-1/0,i=!0;for(const h of t)h===a?this._hasNoDataValues=!0:(s=h<s?h:s,e=h>e?h:e,i=!1);i?(this._minValue=0,this._maxValue=0):(this._minValue=s,this._maxValue=e>-3e38?e:0)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/workers/WorkerHandle.js
var WorkerHandle = __webpack_require__(83055);
;// ../node_modules/@arcgis/core/layers/support/LercDecoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r extends WorkerHandle/* WorkerHandle */.B{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}release(){--this.ref<=0&&(t.forEach(((e,r)=>{e===this&&t.delete(r)})),this.destroy())}}const t=new Map;function s(e=null){let s=t.get(e);return s||(null!=e?(s=new r((r=>e.immediate.schedule(r))),t.set(e,s)):(s=new r,t.set(null,s))),++s.ref,s}

;// ../node_modules/@arcgis/core/layers/ElevationLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let S=class extends((0,ArcGISCachedService/* ArcGISCachedService */.f)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A)))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=s()}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}destroy(){this._lercDecoder=(0,maybe/* releaseMaybe */.Gz)(this._lercDecoder)}readCapabilities(e,r){const t=r.capabilities&&r.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return{operations:{supportsTileMap:!1}};return{operations:{supportsTileMap:t.includes("tilemap")}}}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new Error/* default */.A("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchImageService(r)))),Promise.resolve(this)}fetchTile(e,t,i,o){const s=o?.signal,a={responseType:"array-buffer",signal:s},p={noDataValue:o?.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,o))).then((()=>(0,request/* default */.A)(this.getTileUrl(e,t,i),a))).then((e=>this._lercDecoder.decode(e.data,p,s))).then((e=>new ElevationTileData_a(e)))}getTileUrl(e,r,t){const i=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,o=(0,urlUtils/* objectToQuery */.x0)({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${o?"?"+o:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/* import() */ 75323).then(__webpack_require__.bind(__webpack_require__, 75323));(0,promiseUtils/* throwIfAborted */.Te)(r);return(new t).query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await __webpack_require__.e(/* import() */ 75323).then(__webpack_require__.bind(__webpack_require__, 75323));(0,promiseUtils/* throwIfAborted */.Te)(r);return(new t).createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await (0,request/* default */.A)(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[w]}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],S.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities",["capabilities"])],S.prototype,"readCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"copyrightText"}}})],S.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],S.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],S.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],S.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],S.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISTiledElevationServiceLayer"]})],S.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},value:"elevation",readOnly:!0})],S.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],S.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["currentVersion"])],S.prototype,"readVersion",null),S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.ElevationLayer")],S);const w=Symbol("default-fetch-tile");S.prototype.fetchTile[w]=!0;const T=S;


/***/ })

};
;