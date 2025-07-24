"use strict";
exports.id = 1133;
exports.ids = [1133];
exports.modules = {

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
function n(){return new Promise((t=>__webpack_require__.e(/* import() */ 32139).then(__webpack_require__.bind(__webpack_require__, 32139)).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function e(){return new Promise((t=>__webpack_require__.e(/* import() */ 79896).then(__webpack_require__.bind(__webpack_require__, 79896)).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function i(n){return (0,_assets_js__WEBPACK_IMPORTED_MODULE_0__/* .getAssetUrl */ .s)(`esri/libs/lyr3d/${n}`)}


/***/ }),

/***/ 1133:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   destroyWasm: () => (/* binding */ i),
/* harmony export */   initialize: () => (/* binding */ o),
/* harmony export */   process: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86777);
/* harmony import */ var _libs_lyr3d_Lyr3DModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77207);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e,r;async function n(t){await o();const e={status:_layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__/* .Lyr3DWasmWorkerOutputStatus */ .Qg.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]};if(t.inputs.length<1)return{result:e,transferList:[]};const n={ptrs:[],sizes:[]};for(const s of t.inputs){const t=r._malloc(s.byteLength);new Uint8Array(r.HEAPU8.buffer,t,s.byteLength).set(new Uint8Array(s)),n.ptrs.push(t),n.sizes.push(s.byteLength)}const i=r.process(t.jobDescJson,t.id,n,t.isMissingResourceCase);e.status=i.status,e.missingInputUrls=i.missingInputUrls.slice();const u=i.status===_layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__/* .Lyr3DWasmWorkerOutputStatus */ .Qg.Succeeded&&i.data,l=e.status===_layers_ILyr3DWasmPerSceneView_js__WEBPACK_IMPORTED_MODULE_0__/* .Lyr3DWasmWorkerOutputStatus */ .Qg.MissingInputs&&e.missingInputUrls.length>0;e.jobDescJson=i.jobDescJson.slice(),e.error=i.error.slice(),u?e.data=i.data.slice():l&&(e.originalInputs=t.inputs.slice());for(let s=0;s<n.ptrs.length;++s)r._free(n.ptrs[s]);const a=[];if(u)a.push(e.data.buffer);else if(l)for(const s of t.inputs)a.push(s);return{result:e,transferList:a}}function i(){r&&(r.uninitialize_lyr3d_worker_wasm(),r=null)}function o(){return r?Promise.resolve():(e||(e=(0,_libs_lyr3d_Lyr3DModule_js__WEBPACK_IMPORTED_MODULE_1__/* .loadLyr3DWorkerWASM */ .h)().then((s=>{r=s,r.initialize_lyr3d_worker_wasm(),e=null}))),e)}


/***/ })

};
;