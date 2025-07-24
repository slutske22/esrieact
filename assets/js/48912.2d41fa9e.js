"use strict";
exports.id = 48912;
exports.ids = [48912];
exports.modules = {

/***/ 48912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  destroyWasm: () => (/* binding */ Lyr3DWorker_i),
  initialize: () => (/* binding */ Lyr3DWorker_o),
  process: () => (/* binding */ Lyr3DWorker_n)
});

;// ./node_modules/@arcgis/core/layers/ILyr3DWasmPerSceneView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var t,e,a,i,n,o,r,c,s,N,p,l,S,g,ILyr3DWasmPerSceneView_u;!function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"}(t||(t={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Bc7="Bc7",t.Basis="Basis",t.Etc1="Etc1",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(e||(e={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.FeatureVariable="FeatureVariable",t.NotSet="NotSet"}(a||(a={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(i||(i={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(n||(n={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(o||(o={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(r||(r={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(c||(c={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(s||(s={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(N||(N={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(p||(p={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(l||(l={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(S||(S={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.Ga8="Ga8",t.Etc1="Etc1",t.Etc2="Etc2",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Bc7="Bc7",t.NotSet="NotSet"}(g||(g={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(ILyr3DWasmPerSceneView_u||(ILyr3DWasmPerSceneView_u={}));const m=(/* unused pure expression or super */ null && (-1)),d=(/* unused pure expression or super */ null && (-2));

// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(44764);
;// ./node_modules/@arcgis/core/libs/lyr3d/Lyr3DModule.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function Lyr3DModule_n(){return new Promise((t=>__webpack_require__.e(/* import() */ 78505).then(__webpack_require__.bind(__webpack_require__, 78505)).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:Lyr3DModule_i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function Lyr3DModule_e(){return new Promise((t=>__webpack_require__.e(/* import() */ 63654).then(__webpack_require__.bind(__webpack_require__, 63654)).then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:Lyr3DModule_i,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function Lyr3DModule_i(n){return (0,assets/* getAssetUrl */.s)(`esri/libs/lyr3d/${n}`)}

;// ./node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Lyr3DWorker_e,Lyr3DWorker_r;async function Lyr3DWorker_n(t){await Lyr3DWorker_o();const e={status:ILyr3DWasmPerSceneView_u.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]};if(t.inputs.length<1)return{result:e,transferList:[]};const n={ptrs:[],sizes:[]};for(const s of t.inputs){const t=Lyr3DWorker_r._malloc(s.byteLength);new Uint8Array(Lyr3DWorker_r.HEAPU8.buffer,t,s.byteLength).set(new Uint8Array(s)),n.ptrs.push(t),n.sizes.push(s.byteLength)}const i=Lyr3DWorker_r.process(t.jobDescJson,t.id,n,t.isMissingResourceCase);e.status=i.status,e.missingInputUrls=i.missingInputUrls.slice();const u=i.status===ILyr3DWasmPerSceneView_u.Succeeded&&i.data,l=e.status===ILyr3DWasmPerSceneView_u.MissingInputs&&e.missingInputUrls.length>0;e.jobDescJson=i.jobDescJson.slice(),e.error=i.error.slice(),u?e.data=i.data.slice():l&&(e.originalInputs=t.inputs.slice());for(let s=0;s<n.ptrs.length;++s)Lyr3DWorker_r._free(n.ptrs[s]);const a=[];if(u)a.push(e.data.buffer);else if(l)for(const s of t.inputs)a.push(s);return{result:e,transferList:a}}function Lyr3DWorker_i(){Lyr3DWorker_r&&(Lyr3DWorker_r.uninitialize_lyr3d_worker_wasm(),Lyr3DWorker_r=null)}function Lyr3DWorker_o(){return Lyr3DWorker_r?Promise.resolve():(Lyr3DWorker_e||(Lyr3DWorker_e=Lyr3DModule_e().then((s=>{Lyr3DWorker_r=s,Lyr3DWorker_r.initialize_lyr3d_worker_wasm(),Lyr3DWorker_e=null}))),Lyr3DWorker_e)}


/***/ })

};
;