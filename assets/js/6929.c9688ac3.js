"use strict";
exports.id = 6929;
exports.ids = [6929];
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

/***/ 46929:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ w)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/scheduling.js
var scheduling = __webpack_require__(61449);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js
var ILyr3DWasmPerSceneView = __webpack_require__(86777);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/workers/WorkerHandle.js
var WorkerHandle = __webpack_require__(83055);
;// ../node_modules/@arcgis/core/layers/Lyr3DWorkerHandle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Lyr3DWorkerHandle_s extends WorkerHandle/* WorkerHandle */.B{constructor(r){super("Lyr3DWorker","process",{process:r=>r.inputs},r,{hasInitialize:!0})}destroyWasm(){return this.broadcast({},"destroyWasm")}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js
var Lyr3DModule = __webpack_require__(77207);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
;// ../node_modules/@arcgis/core/views/3d/layers/support/makeScheduleFunction.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function makeScheduleFunction_e(e){return r=>{if(e.immediate)return e.immediate.schedule(r);const o="No immediate scheduler";throw console.error(o),new Error(o)}}

;// ../node_modules/@arcgis/core/layers/Lyr3DWasmPerSceneView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c,b;!function(e){e[e.Lifetime=0]="Lifetime",e[e.Jobs=1]="Jobs",e[e.Renderables=2]="Renderables"}(c||(c={})),function(e){e[e.Critical=0]="Critical",e[e.Error=1]="Error",e[e.Warning=2]="Warning",e[e.Info=3]="Info"}(b||(b={}));let f=class extends Accessor/* default */.A{constructor(e){super(e),this._lyr3DMainPromise=null,this._lyr3DMain=null,this._layers=new Map,this._debugFlags=new Set,this._debugLevel=b.Critical,this._wasmNotLoaded="method requiring WASM was called when WASM isn't loaded",this._pulseTaskHandle=null,this._session=null,this._debugFlags.add(c.Lifetime),this._debugFlags.add(c.Jobs),this._debugFlags.add(c.Renderables)}_debugLog(e,t,i,s=!0){if(this._debugFlags.has(e)&&this._debugLevel>=t){const e=s?`[js] ${i}`:`${i}`;t===b.Critical||t===b.Error?Logger/* default */.A.getLogger(this).error(e):t===b.Warning&&Logger/* default */.A.getLogger(this).warn(e),Logger/* default */.A.getLogger(this).info(e)}}initialize(){this._debugLevel>b.Warning&&(Logger/* default */.A.getLogger(this).level="info"),this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.initialize()"),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.view.state?.contentCamera),(()=>this._updateWasmCamera()))]),this._pulseTaskHandle=(0,scheduling/* addFrameTask */.mg)({preRender:()=>this._pulseTask()})}destroy(){this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.destroy()"),this._lyr3DMain&&(this._layers.forEach((e=>{e.abortController.abort()})),this._lyr3DMain.uninitialize_lyr3d_wasm(),this._lyr3DMain=null);const e=this._worker;e&&e.destroyWasm().then((()=>{this._worker?.destroy(),this._worker=null})),this._pulseTaskHandle?.remove(),this._pulseTaskHandle=null}add3DTilesLayerView(e){return this._lyr3DMain?this._add3DTilesLayerView(e):(this._debugLog(c.Lifetime,b.Error,"Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"),{wasmLayerId:ILyr3DWasmPerSceneView/* wasmFailedToInit */.vE})}remove3DTilesLayerView(e){if(!this._lyr3DMain)return this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded),0;this._doRemoveLayerView(e);const t=this._layers.size;return 0===t&&(this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"),this.destroy()),t}getValidLayerViewCount(){if(!this._lyr3DMain)return this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded),0;let e=0;return this._layers.forEach((t=>{t.layerView.wasmLayerId>=0&&++e})),e}setEnabled(e,t){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);const i=this._layers.get(e.wasmLayerId);i&&(this._lyr3DMain.set_enabled(e.wasmLayerId,t),i.needMemoryUsageUpdate=!0,i.needFrame=!0,i.layerView.updatingFlagChanged())}setLayerOffset(e,t){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.set_carto_offset_z(e.wasmLayerId,t)}getAttributionText(){if(!this._lyr3DMain)return this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded),[];return this._lyr3DMain.get_current_attribution_text().split("|")}onRenderableEvicted(e,t,i){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);this._layers.get(e.wasmLayerId)&&this._lyr3DMain.on_renderable_evicted(e.wasmLayerId,t,i)}setMeshModifications(e,t,i){if(!this._lyr3DMain)return void this._debugLog(c.Lifetime,b.Error,this._wasmNotLoaded);const r=this._layers.get(e.wasmLayerId);if(r){const s=this._lyr3DMain._malloc(8*t.length),a=new Float64Array(this._lyr3DMain.HEAPF64.buffer,s,t.length);for(let e=0;e<t.length;++e)a[e]=t[e];this._lyr3DMain.set_mesh_modification_polygons(e.wasmLayerId,s,t.length,i),this._lyr3DMain._free(s),r.needFrame=!0,r.layerView.updatingFlagChanged()}}isUpdating(e){if(!this._lyr3DMain&&this._lyr3DMainPromise)return!0;const t=this._layers.get(e);return!!t&&(t.outstandingJobCount>0||t.outstandingRenderableCount>0||t.needFrame)}initializeWasm(e,t){return this._lyr3DMain?Promise.resolve():(this._debugLog(c.Lifetime,b.Info,"Lyr3DWasmPerSceneView.initializeWasm()"),this._lyr3DMainPromise||(this._lyr3DMainPromise=(0,Lyr3DModule/* loadLyr3DMainWASM */.a)().then((i=>{this._lyr3DMain=i,this._lyr3DMainPromise=null;const r=this._lyr3DMain.addFunction(this._onNewJob.bind(this),"v"),s=this._lyr3DMain.addFunction(this._onNewRenderable.bind(this),"v"),a=this._lyr3DMain.addFunction(this._freeRenderables.bind(this),"viii"),n=this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this),"viiii"),o=this._lyr3DMain.addFunction(this._onWasmError.bind(this),"viiii"),l="global"===this.view.viewingMode,d=this.view.renderSpatialReference?.isWebMercator?3857:this.view.renderSpatialReference?.wkid??-1,h=this.view.heightModelInfo?.heightModel,_=!h||"gravity-related-height"===h;return this._lyr3DMain.initialize_lyr3d_wasm(o,r,s,a,n,e,t,l,_,d,this._debugLevel)?(this._worker=new Lyr3DWorkerHandle_s(makeScheduleFunction_e(this.view.resourceController)),this._worker.promise?this._worker.promise:void 0):(this._lyr3DMain=null,void this._debugLog(c.Lifetime,b.Critical,"Lyr3d Main WASM failed to initialize",!1))})).catch((e=>{this._debugLog(c.Lifetime,b.Critical,`Lyr3d WASM failed to download error = ${e}`,!1)}))),this._lyr3DMainPromise)}_pulseTask(){if(this._lyr3DMain){let e=0,t=0;this._layers.forEach((i=>{e+=i.layerView.usedMemory,t+=i.layerView.cachedMemory})),e/=1048576,t/=1048576;const i=this.view.resourceController.memoryController,r=i.usedMemory*i.maxMemory-e;this._lyr3DMain.frame_pulse(i.memoryFactor,e,t,r,i.maxMemory),this._layers.forEach((e=>{!0===e.needFrame&&(e.needFrame=!1,e.layerView.updatingFlagChanged())}))}}_incrementJobCount(e){e.outstandingJobCount+=1,1===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_decrementJobCount(e){e.outstandingJobCount-=1,0===e.outstandingJobCount&&e.outstandingRenderableCount<1&&e.layerView.updatingFlagChanged()}_incrementRenderableCount(e){e.outstandingRenderableCount+=1,e.outstandingJobCount<1&&1===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_decrementRenderableCount(e){e.outstandingRenderableCount-=1,e.outstandingJobCount<1&&0===e.outstandingRenderableCount&&e.layerView.updatingFlagChanged()}_onJobFailed(e,t,i){t.error.length&&this._debugLog(c.Jobs,b.Error,t.error,!1),this._lyr3DMain&&this._lyr3DMain.on_job_failed(i.jobId,i.desc),this._decrementJobCount(e)}_onJobSucceeded(e,t,i){if(this._lyr3DMain){const e=t.data.byteLength,r=this._lyr3DMain._malloc(e);new Uint8Array(this._lyr3DMain.HEAPU8.buffer,r,e).set(t.data),this._lyr3DMain.on_job_completed(i.jobId,t.jobDescJson,r,e),this._lyr3DMain._free(r)}this._decrementJobCount(e)}_getRequestPromises(e,i,r){const s=[];for(const a of e){const e=new URL(a),n=e.searchParams.get("session");n?this._session=n:!this._session||e.origin===r.origin&&e.pathname===r.pathname||e.searchParams.append("session",this._session),s.push((0,request/* default */.A)(e.toString(),i).then((e=>e.data)))}return s}_onNewJob(){const e=this._lyr3DMain.get_next_job(),t=this._layers.get(e.layerId);if(!t)return;this._incrementJobCount(t);const i=t.abortController.signal,r={responseType:"array-buffer",signal:i,query:{...t.customParameters,token:t.apiKey}},a={id:e.jobId,inputs:[],jobDescJson:e.desc.slice(),isMissingResourceCase:!1},n=new URL(t.layerView.layer.url),o=this._getRequestPromises(e.urls,r,n);Promise.all(o).then((e=>(a.inputs=e,this._worker.invoke(a,i)))).then((e=>e)).catch((t=>((0,promiseUtils/* isAbortError */.zf)(t)?this._debugLog(c.Jobs,b.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(c.Jobs,b.Error,`job ${e.jobId} failed with error ${t}.`),{status:ILyr3DWasmPerSceneView/* Lyr3DWasmWorkerOutputStatus */.Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[],inputs:[]}))).then((o=>{if(o.status===ILyr3DWasmPerSceneView/* Lyr3DWasmWorkerOutputStatus */.Qg.Failed)this._onJobFailed(t,o,e);else if(o.status===ILyr3DWasmPerSceneView/* Lyr3DWasmWorkerOutputStatus */.Qg.Succeeded)this._onJobSucceeded(t,o,e);else if(o.status===ILyr3DWasmPerSceneView/* Lyr3DWasmWorkerOutputStatus */.Qg.MissingInputs){const l=this._getRequestPromises(o.missingInputUrls,r,n);Promise.all(l).then((e=>{a.jobDescJson=o.jobDescJson,o.originalInputs?a.inputs=o.originalInputs:a.inputs=[],a.isMissingResourceCase=!0;for(const t of e)a.inputs.push(t);return this._worker.invoke(a,i)})).then((i=>{i.status===ILyr3DWasmPerSceneView/* Lyr3DWasmWorkerOutputStatus */.Qg.Failed?this._onJobFailed(t,i,e):i.status===ILyr3DWasmPerSceneView/* Lyr3DWasmWorkerOutputStatus */.Qg.Succeeded&&this._onJobSucceeded(t,i,e)})).catch((i=>{this._decrementJobCount(t),(0,promiseUtils/* isAbortError */.zf)(i)?this._debugLog(c.Jobs,b.Warning,`job ${e.jobId} was cancelled.`):this._debugLog(c.Jobs,b.Error,`job ${e.jobId} failed with error2 ${i}.`),this._lyr3DMain&&this._lyr3DMain.on_job_failed(e.jobId,e.desc)}))}}))}_onNewRenderable(){const e=this._lyr3DMain.get_next_renderable(),t=e.meshData;if(t.data&&t.data.byteLength>0){const e=t.data.slice();t.data=e}const i=this._layers.get(e.layerId);i&&(this._incrementRenderableCount(i),i.layerView.createRenderable(e).then((t=>{this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!0,e.layerId,e.handle,t.memUsageBytes),this._decrementRenderableCount(i)})).catch((t=>{(0,promiseUtils/* isAbortError */.zf)(t)||this._debugLog(c.Renderables,b.Error,`createRenderable failed with error ${t}.`),this._lyr3DMain&&this._lyr3DMain.on_renderable_created(!1,e.layerId,e.handle,0),this._decrementRenderableCount(i)})))}_freeRenderables(e,t,i){if(i<1)return;const r=this._layers.get(e);if(!r)return;const s=r.layerView,a=[],n=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,i);for(let o=0;o<i;++o)a.push(n[o]);for(let o=0;o<i;++o)s.freeRenderable(a[o])}_setRenderableVisibility(e,t,i,r){if(r<1)return;const s=this._layers.get(e);if(!s)return;const a=s.layerView,n=[],o=[],l=new Uint32Array(this._lyr3DMain.HEAPU32.buffer,t,r),d=new Uint8Array(this._lyr3DMain.HEAPU8.buffer,i,r);for(let h=0;h<r;++h)n.push(l[h]),o.push(1===d[h]);a.setRenderableVisibility(n,o,r)}_onWasmError(e,t,i,r){this._lyr3DMain&&this._debugLog(i,r,this._lyr3DMain.UTF8ToString(e,t),!1)}_doRemoveLayerView(e){const t=this._layers.get(e.wasmLayerId);return!!t&&(t.abortController.abort(),this._lyr3DMain.remove_layer(e.wasmLayerId),this._layers.delete(e.wasmLayerId),!0)}_add3DTilesLayerView(e){const t=e.layer;if(!t.url||!t.rootTilesetJSON)return{wasmLayerId:ILyr3DWasmPerSceneView/* invalidLayerView */.Pl};const i=this._lyr3DMain.validate_root_tileset(JSON.stringify(t.rootTilesetJSON));if(0!==i.errorCode)return{wasmLayerId:ILyr3DWasmPerSceneView/* invalidLayerView */.Pl,check:i};const r=this._lyr3DMain.get_next_layer_id(),s=new AbortController;this._layers.set(r,{layerView:e,abortController:s,needMemoryUsageUpdate:!1,outstandingJobCount:0,outstandingRenderableCount:0,customParameters:t.customParameters,apiKey:t.apiKey,needFrame:!1});const a=(0,elevationInfoUtils/* getElevationOffsetInMeters */.M7)(t.elevationInfo);return this._lyr3DMain.add_layer(t.url,r,a)?(this._updateWasmCamera(),{wasmLayerId:r}):(this._layers.delete(r),{wasmLayerId:ILyr3DWasmPerSceneView/* invalidLayerView */.Pl})}_updateWasmCamera(){const e=this.view.state?.contentCamera;if(!e||!this._lyr3DMain)return;const{eye:t,center:i,up:r,near:s,far:a,fovY:n}=e,o=[e.viewport[2],e.viewport[3]],l=e.width/e.height;this._lyr3DMain.set_camera_parameters({eye:t,center:i,up:r,near:s,far:a,fov:n,aspectRatio:l,viewport:o})}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],f.prototype,"view",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.Lyr3DWasmPerSceneView")],f);const w=f;


/***/ }),

/***/ 77207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ n),
/* harmony export */   h: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99050);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(){return new Promise((t=>__webpack_require__.e(/* import() */ 2139).then(__webpack_require__.bind(__webpack_require__, 32139)).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function e(){return new Promise((t=>__webpack_require__.e(/* import() */ 9896).then(__webpack_require__.bind(__webpack_require__, 79896)).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function i(n){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .s)(`esri/libs/lyr3d/${n}`)}


/***/ })

};
;