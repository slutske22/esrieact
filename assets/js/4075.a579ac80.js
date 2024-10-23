"use strict";
exports.id = 4075;
exports.ids = [4075];
exports.modules = {

/***/ 24075:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uploadAssets: () => (/* binding */ O)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/time.js
var time = __webpack_require__(60882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(33880);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(21690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssetErrors.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e="upload-assets",o=()=>new Error;class uploadAssetErrors_r extends core_Error/* default */.A{constructor(){super(`${e}:unsupported`,"Layer does not support asset uploads.",o())}}class uploadAssetErrors_t extends core_Error/* default */.A{constructor(){super(`${e}:no-glb-support`,"Layer does not support glb.",o())}}class uploadAssetErrors_a extends core_Error/* default */.A{constructor(){super(`${e}:no-supported-source`,"No supported external source found",o())}}class uploadAssetErrors_n extends core_Error/* default */.A{constructor(){super(`${e}:not-base-64`,"Expected gltf data in base64 format after conversion.",o())}}class p extends core_Error/* default */.A{constructor(){super(`${e}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",o())}}class u extends core_Error/* default */.A{constructor(s,r){super(`${e}:bad-response`,`Bad response. Uploaded ${s} items and received ${r} results.`,o())}}class uploadAssetErrors_c extends core_Error/* default */.A{constructor(s,r){super(`${e}-layer:upload-failed`,`Failed to upload mesh file ${s}. Error code: ${r?.code??"-1"}. Error message: ${r?.messages??"unknown"}`,o())}}class d extends core_Error/* default */.A{constructor(s){super(`${e}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${s}, but it does not list it in its supported formats.`,o())}}class uploadAssetErrors_l extends core_Error/* default */.A{constructor(){super(`${e}:convert3D-failed`,"convert3D failed.")}}

;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const uploadProgressWeights_e={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(16123);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(20464);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
;// ../node_modules/@arcgis/core/support/progressUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function progressUtils_i(s,t=(s=>{}),e){return new n(s,t,e)}class n{constructor(s,t=(s=>{}),e){if(this.onProgress=t,this.taskName=e,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let t=0;t<s;t++){const e=t,r=1/s;this._weights[e]=r,this._progressMap.set(e,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[t,e]of this._progressMap.entries()){s+=e*this._weights[t]}if(1===s&&(0,has/* default */.A)("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,e]of this._timingsMap){const r=Math.round(e.end-e.start)/1e3,o=Math.round(r/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:r,relativeTime:o})}}this.onProgress(s)}setProgress(s,e){if(this._progressMap.set(s,e),(0,has/* default */.A)("enable-feature:esri-3dofl-upload-timings")){const r=performance.now();this._startTime??=r;const o=(0,MapUtils/* getOrCreateMapValue */.tE)(this._timingsMap,s,(()=>({start:r,end:0})));1===e&&(o.end=r)}this.emitProgress()}simulate(s,t){return a((t=>this.setProgress(s,t)),t)}makeOnProgress(s){return t=>this.setProgress(s,t)}}function a(t=(s=>{}),e=l){const r=performance.now();t(0);const o=setInterval((()=>{const s=performance.now()-r,o=1-Math.exp(-s/e);t(o)}),g);return (0,handleUtils/* makeHandle */.hA)((()=>{clearInterval(o),t(1)}))}function progressUtils_h(s,t=c){return (0,time/* millisecondsFromSeconds */.gr)((0,time/* Seconds */.Kp)(s*f/t))}function m(s,t=progressUtils_p){return (0,time/* millisecondsFromSeconds */.gr)((0,time/* Seconds */.Kp)(s*f/t))}const c=10,progressUtils_p=10,f=8e-6,g=(0,time/* Milliseconds */.l5)(50),l=(0,time/* Milliseconds */.l5)(1e3);

;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i=1e6,uploads_p=20*i,uploads_l=2e9,uploads_m=3;async function uploads_c({data:r,name:c,description:u},d,h){let j=null;try{const w=(0,urlUtils/* join */.fj)(d,"uploads"),y=(0,urlUtils/* join */.fj)(w,"info"),{data:g}=await (0,request/* default */.A)(y,{query:{f:"json"},responseType:"json"});(0,promiseUtils/* throwIfAborted */.Te)(h);const U=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(d),q=g.maxUploadFileSize*i,z=U?uploads_l:q,T=U?Math.min(uploads_p,q):uploads_p;if(r.size>z)throw new Error("Data too large");const A=(0,urlUtils/* join */.fj)(w,"register"),{data:E}=await (0,request/* default */.A)(A,{query:{f:"json",itemName:uploads_f(c),description:u},responseType:"json",method:"post"});if((0,promiseUtils/* throwIfAborted */.Te)(h),!E.success)throw new Error("Registration failed");const{itemID:P}=E.item;j=(0,urlUtils/* join */.fj)(w,P);const D=(0,urlUtils/* join */.fj)(j,"uploadPart"),I=Math.ceil(r.size/T),M=new Array;for(let e=0;e<I;++e)M.push(r.slice(e*T,Math.min((e+1)*T,r.size)));const b=M.slice().reverse(),v=new Array,x=progressUtils_i(I,h?.onProgress,"uploadItem"),F=async()=>{for(;0!==b.length;){const t=M.length-b.length,s=b.pop(),r=new FormData,a=x.simulate(t,progressUtils_h(s.size));try{const a=s;r.append("f","json"),r.append("file",a),r.append("partId",`${t}`);const{data:n}=await (0,request/* default */.A)(D,{timeout:0,body:r,responseType:"json",method:"post"});if((0,promiseUtils/* throwIfAborted */.Te)(h),!n.success)throw new Error("Part upload failed")}finally{a.remove()}}};for(let e=0;e<uploads_m&&0!==b.length;++e)v.push(F());await Promise.all(v);const _=(0,urlUtils/* join */.fj)(j,"commit"),{data:C}=await (0,request/* default */.A)(_,{query:{f:"json",parts:M.map(((e,o)=>o)).join(",")},responseType:"json",method:"post"});if((0,promiseUtils/* throwIfAborted */.Te)(h),!C.success)throw new Error("Commit failed");return C.item}catch(w){if(null!=j){const o=(0,urlUtils/* join */.fj)(j,"delete");await (0,request/* default */.A)(o,{query:{f:"json"},responseType:"json",method:"post"})}throw w}}function uploads_f(e){return e.replaceAll("/","_").replaceAll("\\","_")}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(40906);
;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function O(s,e,t){const r=s.length;if(!r)return t?.onProgress?.(1),[];const o=progressUtils_i(r,t?.onProgress,"uploadAssets");return Promise.all(s.map(((s,r)=>v(s,e,{...t,onProgress:o.makeOnProgress(r)}))))}async function v(s,{layer:e,ongoingUploads:t},r){const o=t.get(s);if(o)return o;if(!Z(e))throw new uploadAssetErrors_r;if(I(s,e))return r?.onProgress?.(1),s;const n=k(s,e,r);t.set(s,n);try{await n}finally{t.delete(s)}return s}function I(s,e){const{parsedUrl:t}=e;return null!=t&&s.metadata.externalSources.some((s=>(0,External/* externalIsOnService */.eN)(s,t)))}async function k(s,e,r){const{metadata:o}=s,{displaySource:n}=o,a=H(n?.source,e),i=!!a,c=o.externalSources.length>0,u=i?B(a,e,r):c?R(s,e,r):C(s,e,r),l=await u;return (0,promiseUtils/* throwIfAborted */.Te)(r),s.addExternalSources([l]),s}async function B(s,e,t){return{source:await G(s,e,t),original:!0}}async function R(s,e,t){const r=_(e),{externalSources:o}=s.metadata,n=q(o,e);if(!n)throw new uploadAssetErrors_a;const a=progressUtils_i(uploadProgressWeights_e.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),i=await G(n,e,{onProgress:a.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:i,original:!0}]);const c=n.reduce(((s,{asset:e})=>e instanceof File?s+e.size:s),0),u=a.simulate("serviceAssetsToGlb",m(c));try{return{source:await V(i,e,r)}}finally{u.remove()}}async function C(s,e,t){const r=progressUtils_i(uploadProgressWeights_e.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),o=L(s,e,{...t,onProgress:r.makeOnProgress("meshToAssetBlob")});return{source:await J([o],e,{...t,onProgress:r.makeOnProgress("uploadAssetBlobs")}),extent:s.extent.clone(),original:!0}}async function L(s,e,r){const o=_(e),n=await s.load(r),a=await n.toBinaryGLTF({ignoreLocalTransform:!0});(0,promiseUtils/* throwIfAborted */.Te)(r);const i=await a.buffer();return (0,promiseUtils/* throwIfAborted */.Te)(r),{blob:new Blob([i.data],{type:i.type}),assetName:`${(0,uuid/* generateBracedUUID */.yS)()}.glb`,assetType:o}}function q(s,e){for(const t of s){const s=H(t.source,e);if(s)return s}return null}function H(s,e){if(!s)return null;const{infoFor3D:{supportedFormats:t,editFormats:r}}=e,o=(0,External/* externalSourceToMultiPart */.WN)(s),n=new Array;let a=!1;for(let i=0;i<o.length;++i){const s=$(o[i],t);if(!s)return null;r.includes(s.assetType)&&(a=!0),n.push(s)}return a?n:null}function $(s,e){const t=(0,External/* assetFormatId */.fH)(s,e);return t?{asset:s,assetType:t}:null}async function G(s,e,t){return J(s.map((s=>M(s,t))),e,t)}async function J(s,e,r){const o=progressUtils_i(uploadProgressWeights_e.uploadAssetBlobs,r?.onProgress,"uploadAssetBlobs"),n=await z(s,e,{...r,onProgress:o.makeOnProgress("prepareAssetItems")});(0,promiseUtils/* throwIfAborted */.Te)(r);const a=n.map((({item:s})=>s)),{uploadResults:i}=await K(a,e,{...r,onProgress:o.makeOnProgress("uploadAssetItems")});return (0,promiseUtils/* throwIfAborted */.Te)(r),s.map(((s,t)=>Q(n[t],i[t],e)))}async function M(s,e){const{asset:r,assetType:o}=s;if(r instanceof File)return{blob:r,assetName:r.name,assetType:o};const n=await r.toBlob(e);return (0,promiseUtils/* throwIfAborted */.Te)(e),{blob:n,assetName:r.assetName,assetType:o}}async function W(s,e,r){const{blob:n,assetType:a,assetName:c}=s;let u=null;try{const s=await uploads_c({data:n,name:c},e.url,r);(0,promiseUtils/* throwIfAborted */.Te)(r),u={assetType:a,assetUploadId:s.itemID}}catch(l){(0,promiseUtils/* throwIfAbortError */.QP)(l),ss().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!u){const s=await (0,urlUtils/* parseData */._0)(n);if((0,promiseUtils/* throwIfAborted */.Te)(r),!s.isBase64)throw new uploadAssetErrors_n;u={assetType:a,assetData:s.data}}if(!u)throw new p;return{item:u,assetName:c}}function z(s,e,r){const o=progressUtils_i(s.length,r?.onProgress,"prepareAssetItems");return Promise.all(s.map((async(s,n)=>{const a=W(await s,e,{...r,onProgress:o.makeOnProgress(n)});return (0,promiseUtils/* throwIfAborted */.Te)(r),a})))}async function K(e,r,o){const n=a(o?.onProgress);try{const n=await (0,request/* default */.A)((0,urlUtils/* join */.fj)(r.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if((0,promiseUtils/* throwIfAborted */.Te)(o),n.data.uploadResults.length!==e.length)throw new u(e.length,n.data.uploadResults.length);return n.data}finally{n.remove()}}function Q(s,e,t){const{success:r}=e;if(!r){const{error:t}=e;throw new uploadAssetErrors_c(s.assetName,t)}const{assetHash:o}=e,{assetName:n,item:{assetType:a}}=s,{infoFor3D:{supportedFormats:i}}=t,c=(0,infoFor3D/* getFormatIdMimeType */.Fm)(a,i);if(!c)throw new d(a);return new External/* ServiceAsset */.Qp(n,c,[new External/* ServiceAssetPart */.Bq(`${t.parsedUrl.path}/assets/${o}`,o)])}async function V(s,e,t){const r=s.map((({assetName:s,parts:e})=>({assetName:s,assetHash:e[0].partHash}))),o=e.capabilities?.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:o},i=(0,urlUtils/* join */.fj)(e.parsedUrl.path,"convert3D");let c;try{c=(await(o?Y:X)(i,{query:n,responseType:"json",timeout:0})).data}catch(l){throw new uploadAssetErrors_l}const{supportedFormats:u}=e.infoFor3D;return c.assets.map((s=>{const e=(0,infoFor3D/* getMimeTypeFormatId */.R_)(s.contentType,u);if(!e)throw new d(e);return new External/* ServiceAsset */.Qp(s.assetName,s.contentType,[new External/* ServiceAssetPart */.Bq(s.assetURL,s.assetHash)])}))}function X(e,t){return (0,request/* default */.A)(e,t)}async function Y(e,t){const o=(await (0,request/* default */.A)(e,t)).data.statusUrl;for(;;){const e=(await (0,request/* default */.A)(o,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return (0,request/* default */.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await (0,promiseUtils/* after */.Pl)(es)}}function Z(s){return!!s.infoFor3D&&!!s.url}function _(s){const{infoFor3D:e}=s,t=(0,infoFor3D/* getMimeTypeFormatId */.R_)("model/gltf-binary",e.supportedFormats)??(0,infoFor3D/* getFilenameFormatId */.E1)("glb",e.supportedFormats);if(!t)throw new uploadAssetErrors_t;return t}function ss(){return Logger/* default */.A.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const es=(0,time/* Milliseconds */.l5)(1e3);


/***/ })

};
;