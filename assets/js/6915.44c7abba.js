"use strict";
exports.id = 6915;
exports.ids = [6915];
exports.modules = {

/***/ 46915:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  uploadAssets: () => (/* binding */ B)
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(21690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssetErrors.js
var uploadAssetErrors = __webpack_require__(29567);
;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
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
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function progressUtils_i(s,t=s=>{},e){return new n(s,t,e)}class n{constructor(s,t=s=>{},e){if(this.onProgress=t,this.taskName=e,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let t=0;t<s;t++){const e=t,r=1/s;this._weights[e]=r,this._progressMap.set(e,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[t,e]of this._progressMap.entries()){s+=e*this._weights[t]}if(1===s&&(0,has/* default */.A)("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,e]of this._timingsMap){const r=Math.round(e.end-e.start)/1e3,o=Math.round(r/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:r,relativeTime:o})}}this.onProgress(s)}setProgress(s,e){if(this._progressMap.set(s,e),(0,has/* default */.A)("enable-feature:esri-3dofl-upload-timings")){const r=performance.now();this._startTime??=r;const o=(0,MapUtils/* getOrCreateMapValue */.tE)(this._timingsMap,s,(()=>({start:r,end:0})));1===e&&(o.end=r)}this.emitProgress()}simulate(s,t){return a((t=>this.setProgress(s,t)),t)}makeOnProgress(s){return t=>this.setProgress(s,t)}}function a(t=s=>{},e=l){const r=performance.now();t(0);const o=setInterval((()=>{const s=performance.now()-r,o=1-Math.exp(-s/e);t(o)}),g);return (0,handleUtils/* makeHandle */.hA)((()=>{clearInterval(o),t(1)}))}function progressUtils_h(s,t=c){return (0,time/* millisecondsFromSeconds */.gr)((0,time/* Seconds */.Kp)(s*f/t))}function m(s,t=p){return (0,time/* millisecondsFromSeconds */.gr)((0,time/* Seconds */.Kp)(s*f/t))}const c=10,p=10,f=8e-6,g=(0,time/* Milliseconds */.l5)(50),l=(0,time/* Milliseconds */.l5)(1e3);

;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const uploads_n=1e6,i=20*uploads_n,uploads_p=2e9,uploads_l=3;async function uploads_m({data:m,name:f,description:d},u,h){let w=null;try{const y=(0,urlUtils/* join */.fj)(u,"uploads"),j=(0,urlUtils/* join */.fj)(y,"info"),{data:g}=await (0,request/* default */.A)(j,{query:{f:"json"},responseType:"json"});(0,promiseUtils/* throwIfAborted */.Te)(h);const q=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(u),z=g.maxUploadFileSize*uploads_n,T=q?uploads_p:z,U=q?Math.min(i,z):i;if(m.size>T)throw new Error("Data too large");const A=(0,urlUtils/* join */.fj)(y,"register"),{data:E}=await (0,request/* default */.A)(A,{query:{f:"json",itemName:uploads_c(f),description:d},responseType:"json",method:"post"});if((0,promiseUtils/* throwIfAborted */.Te)(h),!E.success)throw new Error("Registration failed");const{itemID:P}=E.item;w=(0,urlUtils/* join */.fj)(y,P);const D=(0,urlUtils/* join */.fj)(w,"uploadPart"),I=Math.ceil(m.size/U),M=new Array;for(let e=0;e<I;++e)M.push(m.slice(e*U,Math.min((e+1)*U,m.size)));const v=M.slice().reverse(),x=new Array,F=progressUtils_i(I,h?.onProgress,"uploadItem"),_=async()=>{for(;0!==v.length;){const t=M.length-v.length,r=v.pop(),s=new FormData,n=F.simulate(t,progressUtils_h(r.size));try{s.append("f","json"),s.append("file",r),s.append("partId",`${t}`);const{data:a}=await (0,request/* default */.A)(D,{timeout:0,body:s,responseType:"json",method:"post"});if((0,promiseUtils/* throwIfAborted */.Te)(h),!a.success)throw new Error("Part upload failed")}finally{n.remove()}}};for(let e=0;e<uploads_l&&0!==v.length;++e)x.push(_());await Promise.all(x);const b=(0,urlUtils/* join */.fj)(w,"commit"),{data:C}=await (0,request/* default */.A)(b,{query:{f:"json",parts:M.map(((e,o)=>o)).join(",")},responseType:"json",method:"post"});if((0,promiseUtils/* throwIfAborted */.Te)(h),!C.success)throw new Error("Commit failed");return C.item}catch(y){if(null!=w){const o=(0,urlUtils/* join */.fj)(w,"delete");await (0,request/* default */.A)(o,{query:{f:"json"},responseType:"json",method:"post"})}throw y}}function uploads_c(e){return e.replaceAll("/","_").replaceAll("\\","_")}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(40906);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/meshSpatialReferenceScaleUtils.js
var meshSpatialReferenceScaleUtils = __webpack_require__(44335);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/meshFeatureAttributes.js
var meshFeatureAttributes = __webpack_require__(29178);
;// ../node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function B(e,s,t){const r=e.length;if(!r)return t?.onProgress?.(1),[];const o=progressUtils_i(r,t?.onProgress,"uploadAssets");return Promise.all(e.map(((e,r)=>q(e,s,{...t,onProgress:o.makeOnProgress(r)}))))}async function q(e,{layer:s,ongoingUploads:t},r){const o=t.get(e);if(o)return o;if(!ne(s))throw new uploadAssetErrors/* UnsupportedError */.Wt;if(L(e,s))return r?.onProgress?.(1),e;const n=H(e,s,r);t.set(e,n);try{await n}finally{t.delete(e)}return e}function L(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>(0,External/* externalIsOnService */.eN)(e,t)))}async function H(e,s,r){const{metadata:o}=e,{displaySource:n}=o,a=W(n?.source,s,{checkForConversionRequired:(0,has/* default */.A)("enable-feature:georeferenced-uploads")}),i=null!=a?$(a,s,r):o.externalSources.length>0?J(e,s,r):z(e,s,r),c=await i;return (0,promiseUtils/* throwIfAborted */.Te)(r),e.addExternalSources([c]),e}async function $(e,s,t){return{source:{type:"service",assets:await Q(e,s,t)},original:!0,unitConversionDisabled:!0}}async function J(e,s,t){const r=ae(s),{externalSources:o}=e.metadata,n=M(o,s);if(!n)throw new uploadAssetErrors/* NoSupportedSourceError */.xY;const a=progressUtils_i(uploadProgressWeights_e.uploadConvertibleSource,t?.onProgress,"uploadConvertibleSource"),i={type:"service",assets:await Q(n,s,{onProgress:a.makeOnProgress("uploadEditSource")})};e.addExternalSources([{source:i,original:!0}]);const c=n.reduce(((e,{asset:s})=>s instanceof File?e+s.size:e),0),u=a.simulate("serviceAssetsToGlb",m(c));try{const{source:o,transform:n,origin:a}=await se(i,s,r);return e.transform=n,a&&(e.metadata.georeferenced=!0,t?.useAssetOrigin&&(e.vertexSpace.origin=[a.x,a.y,a.z??0],e.spatialReference=a.spatialReference)),{source:o,unitConversionDisabled:!0}}finally{u.remove()}}async function z(e,s,t){const r=progressUtils_i(uploadProgressWeights_e.uploadLocalMesh,t?.onProgress,"uploadLocalMesh"),o=G(e,s,{...t,onProgress:r.makeOnProgress("meshToAssetBlob")});return{source:{type:"service",assets:await V([o],s,{...t,onProgress:r.makeOnProgress("uploadAssetBlobs")})},extent:e.extent.clone(),original:!0}}async function G(e,s,r){const o=ae(s),n=await e.load(r),a=await n.toBinaryGLTF({origin:n.origin,signal:r?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return (0,promiseUtils/* throwIfAborted */.Te)(r),{blob:new Blob([a],{type:"model/gltf-binary"}),assetName:`${(0,uuid/* generateBracedUUID */.yS)()}.glb`,assetType:o}}function M(e,s){for(const t of e){const e=W(t.source,s);if(e)return e}return null}function W(e,{infoFor3D:s},t={}){if(!e)return null;const r=(0,External/* externalSourceToMultiPart */.WN)(e);if(!r)return null;const{supportedFormats:o,editFormats:n}=s,a=new Array,i=(0,infoFor3D/* getPrjFormatId */.ND)(s),c=(0,infoFor3D/* getWorldFileFormatId */.nr)(s);let u=!1;for(const l of r){const e=K(l,o);if(!e)return null;const{assetType:s}=e;if(t.checkForConversionRequired&&(s===i||s===c))return null;n.includes(s)&&(u=!0),a.push(e)}return u?a:null}function K(e,s){const t=(0,External/* assetFormatId */.fH)(e,s);return t?{asset:e,assetType:t}:null}async function Q(e,s,t){return V(e.map((e=>X(e,t))),s,t)}async function V(e,s,r){const o=progressUtils_i(uploadProgressWeights_e.uploadAssetBlobs,r?.onProgress,"uploadAssetBlobs"),n=await Z(e,s,{...r,onProgress:o.makeOnProgress("prepareAssetItems")});(0,promiseUtils/* throwIfAborted */.Te)(r);const a=n.map((({item:e})=>e)),{uploadResults:i}=await _(a,s,{...r,onProgress:o.makeOnProgress("uploadAssetItems")});return (0,promiseUtils/* throwIfAborted */.Te)(r),e.map(((e,t)=>ee(n[t],i[t],s)))}async function X(e,s){const{asset:r,assetType:o}=e;if(r instanceof File)return{blob:r,assetName:r.name,assetType:o};const n=await r.toBlob(s);return (0,promiseUtils/* throwIfAborted */.Te)(s),{blob:n,assetName:r.assetName,assetType:o}}async function Y(e,s,r){const{blob:n,assetType:a,assetName:c}=e;let u=null;try{const e=await uploads_m({data:n,name:c},s.url,r);(0,promiseUtils/* throwIfAborted */.Te)(r),u={assetType:a,assetUploadId:e.itemID}}catch(l){(0,promiseUtils/* throwIfAbortError */.QP)(l),ie().warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!u){const e=await (0,urlUtils/* parseData */._0)(n);if((0,promiseUtils/* throwIfAborted */.Te)(r),!e.isBase64)throw new uploadAssetErrors/* NotBase64Error */.$1;u={assetType:a,assetData:e.data}}if(!u)throw new uploadAssetErrors/* UnableToPrepareOptionsError */.WF;return{item:u,assetName:c}}function Z(e,s,r){const o=progressUtils_i(e.length,r?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,n)=>{const a=Y(await e,s,{...r,onProgress:o.makeOnProgress(n)});return (0,promiseUtils/* throwIfAborted */.Te)(r),a})))}async function _(s,r,o){const n=a(o?.onProgress);try{const n=await (0,request/* default */.A)((0,urlUtils/* join */.fj)(r.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(s)},method:"post",responseType:"json"});if((0,promiseUtils/* throwIfAborted */.Te)(o),n.data.uploadResults.length!==s.length)throw new uploadAssetErrors/* BadResponseError */.nS(s.length,n.data.uploadResults.length);return n.data}finally{n.remove()}}function ee(e,s,t){const{success:r}=s;if(!r){const{error:t}=s;throw new uploadAssetErrors/* UploadFailedError */.hK(e.assetName,t)}const{assetHash:o}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=(0,infoFor3D/* getFormatIdMimeType */.Fm)(a,i);if(!c)throw new uploadAssetErrors/* UnsupportedFormatUploadedError */.H2(a);return new External/* ServiceAsset */.Qp(n,c,[new External/* ServiceAssetPart */.Bq(`${t.parsedUrl.path}/assets/${o}`,o)])}async function se({assets:e},s,t){const r=e.map((({assetName:e,parts:s})=>({assetName:e,assetHash:s[0].partHash})));let o;try{const e=(0,urlUtils/* join */.fj)(s.parsedUrl.path,"convert3D"),n=s.capabilities?.operations.supportsAsyncConvert3D;o=(await(n?oe:re)(e,{query:{f:"json",assets:JSON.stringify(r),transportType:"esriTransportTypeUrl",targetFormat:t,async:n},responseType:"json",timeout:0})).data}catch(n){throw new uploadAssetErrors/* Convert3DFailedError */.MT}return te(s,o)}function te(e,s){const t={source:{type:"service",assets:s.assets.map((s=>{const t=(0,infoFor3D/* getMimeTypeFormatId */.R_)(s.contentType,e.infoFor3D.supportedFormats);if(!t)throw new uploadAssetErrors/* UnsupportedFormatUploadedError */.H2(t);return new External/* ServiceAsset */.Qp(s.assetName,s.contentType,[new External/* ServiceAssetPart */.Bq(s.assetURL,s.assetHash)])}))},origin:void 0,transform:void 0};if((0,has/* default */.A)("enable-feature:georeferenced-uploads")&&s.transform){if(t.transform=(0,meshFeatureAttributes/* extractMeshFeatureTransform */.f)(s.transform),s.spatialReference){const e=SpatialReference/* default */.A.fromJSON(s.spatialReference);t.origin=(0,meshFeatureAttributes/* extractMeshFeatureOrigin */.V)(s.transform,e)}}else t.transform=(0,meshSpatialReferenceScaleUtils/* getMeshTransformForMetersToSpatialReference */.Z)(e.spatialReference);return t}function re(s,t){return (0,request/* default */.A)(s,t)}async function oe(s,t){const o=(await (0,request/* default */.A)(s,t)).data.statusUrl;for(;;){const s=(await (0,request/* default */.A)(o,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return (0,request/* default */.A)(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(s.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await (0,promiseUtils/* after */.Pl)(ce)}}function ne(e){return!!e.infoFor3D&&!!e.url}function ae({infoFor3D:e}){const s=(0,infoFor3D/* getGlbFormatId */.U9)(e);if(!s)throw new uploadAssetErrors/* NoGlbSupportError */.uh;return s}function ie(){return Logger/* default */.A.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const ce=(0,time/* Milliseconds */.l5)(1e3);


/***/ }),

/***/ 29178:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97066);
/* harmony import */ var _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8695);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(o,n,i=r){return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({x:o[i.originX],y:o[i.originY],z:o[i.originZ],spatialReference:n})}function i(t,n=r){return new _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({translation:[t[n.translationX],-t[n.translationZ],t[n.translationY]],rotationAxis:[t[n.rotationX],-t[n.rotationZ],t[n.rotationY]],rotationAngle:t[n.rotationDeg],scale:[t[n.scaleX],t[n.scaleZ],t[n.scaleY]]})}const r={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};


/***/ })

};
;