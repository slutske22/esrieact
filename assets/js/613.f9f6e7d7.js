"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 74408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ _)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var _;!function(_){_[_.ETC1_RGB=0]="ETC1_RGB",_[_.ETC2_RGBA=1]="ETC2_RGBA",_[_.BC1_RGB=2]="BC1_RGB",_[_.BC3_RGBA=3]="BC3_RGBA",_[_.BC4_R=4]="BC4_R",_[_.BC5_RG=5]="BC5_RG",_[_.BC7_M6_RGB=6]="BC7_M6_RGB",_[_.BC7_M5_RGBA=7]="BC7_M5_RGBA",_[_.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",_[_.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",_[_.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",_[_.ATC_RGB=11]="ATC_RGB",_[_.ATC_RGBA=12]="ATC_RGBA",_[_.FXT1_RGB=17]="FXT1_RGB",_[_.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",_[_.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",_[_.ETC2_EAC_R11=20]="ETC2_EAC_R11",_[_.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",_[_.RGBA32=13]="RGBA32",_[_.RGB565=14]="RGB565",_[_.BGR565=15]="BGR565",_[_.RGBA4444=16]="RGBA4444"}(_||(_={}));


/***/ }),

/***/ 80613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TextureCompressionWorkerOutput: () => (/* binding */ o),
  compress: () => (/* binding */ u),
  compressRGBADataToKTX2: () => (/* binding */ d),
  createTextureDataKTX2: () => (/* binding */ f),
  initializeBasisEncoder: () => (/* binding */ c),
  initializeDXTEncoder: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
;// ../node_modules/@arcgis/core/libs/basisu/BasisUEncoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(){return t??=(async()=>{const i=await __webpack_require__.e(/* import() */ 7919).then(__webpack_require__.bind(__webpack_require__, 17919)),t=await i.default({locateFile:i=>(0,assets/* getAssetUrl */.s)(`esri/libs/basisu/${i}`)});return t.initializeBasis(),t})(),t}let t;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/libs/basisu/TextureFormat.js
var TextureFormat = __webpack_require__(74408);
;// ../node_modules/@arcgis/core/libs/dxtEncoder/DXTEncoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return r??=(async()=>{const e=await __webpack_require__.e(/* import() */ 8901).then(__webpack_require__.bind(__webpack_require__, 38901));return await e.default({locateFile:e=>(0,assets/* getAssetUrl */.s)(`esri/libs/dxtEncoder/${e}`)})})(),r}let r;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/views/support/TextureCompressionWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a,s,l=null,TextureCompressionWorker_i=null;class o{constructor(e,t){this.internalFormat=e,this.compressedTexture=t}}async function u(e){let t;if(t=e.data instanceof ImageBitmap?p(e.data):m(e.data,e.width,e.height,e.components,e.needsFlip),e.hasS3TC){TextureCompressionWorker_i||await h();const n=new Uint8Array(t.length);if(TextureCompressionWorker_i?.encode(t,e.width,e.height,e.preMultiplyAlpha,n)){const e=M(n,!0),t=[n.buffer];return{result:new o(e?.internalFormat??null,e?.textureData??null),transferList:t}}return{result:new o(null,null)}}if(e.hasETC){if(l||await c(),e.preMultiplyAlpha&&!TextureCompressionWorker_i&&await h(),e.preMultiplyAlpha){const n=new Uint8ClampedArray(t.length);TextureCompressionWorker_i?.premultiply(new Uint8Array(t),e.width,e.height,n),t=n}const n=await d(t,e.width,e.height,e.hasMipmap),r=n?await f(n):null,a=r?.compressedTexture?.levels.map((e=>e.buffer))||[];return{result:new o(r?.internalFormat??null,r?.compressedTexture??null),transferList:a}}return{result:new o(null,null)}}async function c(){l||(l=await(a??=i()))}async function h(){TextureCompressionWorker_i||(TextureCompressionWorker_i=await(s??=e()))}async function d(e,t,n,r,a=255,s=0,i=!1,o=!1){if(!l)return null;const u=new l.BasisEncoder;u.setPerceptual(!o),u.setCheckForAlpha(!0),u.setForceAlpha(!1),u.setRenormalize(o),u.setMipGen(r),u.setMipSRGB(!o),u.setCreateKTX2File(!0),u.setKTX2SRGBTransferFunc(!o),u.setQualityLevel(a),u.setCompressionLevel(s);const c=new Uint8Array(e.byteLength);u.setSliceSourceImage(0,new Uint8Array(e),t,n,i);const h=u.encode(c),d=new Uint8Array(c.buffer,0,h),f=new l.KTX2File(new Uint8Array(d));return f.isValid()?(u.delete(),d):(f.close(),f.delete(),u.delete(),null)}async function f(e){if(!l)return new o(null,null);const n=new l.KTX2File(new Uint8Array(e));n.startTranscoding();const[a,s]=n.getHasAlpha()?[TextureFormat/* TextureFormat */.n.ETC2_RGBA,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[TextureFormat/* TextureFormat */.n.ETC1_RGB,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB8_ETC2],i=n.getLevels(),u=[];for(let t=0;t<i;t++)u.push(new Uint8Array(n.getImageTranscodedSizeInBytes(t,0,0,a))),n.transcodeImage(u[t],t,0,0,a,0,-1,-1);return n.close(),n.delete(),{internalFormat:s,compressedTexture:{type:"compressed",levels:u}}}function p(e){const t=new OffscreenCanvas(e.width,e.height),n=t.getContext("2d");n.drawImage(e,0,0);return n.getImageData(0,0,t.width,t.height).data}function m(e,t,n,r,a){const s=new Uint8ClampedArray(e).subarray(0,t*n*r);if(!a)return s;const l=new Uint8ClampedArray(s.length),i=t*r;for(let o=0;o<n;o++){const e=o*i,t=(n-o-1)*i;l.set(s.subarray(e,e+i),t)}return l}const w=31,y=1,T=2,A=3,C=4,g=7,E=21,b=131072;function S(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const _=S("DXT1"),D=S("DXT3"),R=S("DXT5");function M(e,t){const n=new Int32Array(e.buffer,e.byteOffset,w);let a,s;switch(n[E]){case _:a=8,s=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case D:a=16,s=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case R:a=16,s=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}let l=1,i=n[C],o=n[A];(3&i||3&o)&&(i=i+3&-4,o=o+3&-4);const u=i,c=o;let h,d;n[T]&b&&!1!==t&&(l=Math.max(1,n[g]));let f=e.byteOffset+n[y]+4;const p=[];for(let r=0;r<l;++r)d=(i+3>>2)*(o+3>>2)*a,h=new Uint8Array(e.buffer,f,d),p.push(h),f+=d,i=Math.max(1,i>>1),o=Math.max(1,o>>1);return{textureData:{type:"compressed",levels:p},internalFormat:s,width:u,height:c}}


/***/ })

};
;