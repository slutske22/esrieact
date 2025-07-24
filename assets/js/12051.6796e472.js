"use strict";
exports.id = 12051;
exports.ids = [12051];
exports.modules = {

/***/ 60638:
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

/***/ 12051:
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

// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(44764);
;// ./node_modules/@arcgis/core/libs/basisu/BasisUEncoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(){return t??=(async()=>{const i=await __webpack_require__.e(/* import() */ 6449).then(__webpack_require__.bind(__webpack_require__, 6449)),t=await i.default({locateFile:i=>(0,assets/* getAssetUrl */.s)(`esri/libs/basisu/${i}`)});return t.initializeBasis(),t})(),t}let t;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/libs/basisu/TextureFormat.js
var TextureFormat = __webpack_require__(60638);
;// ./node_modules/@arcgis/core/libs/dxtEncoder/DXTEncoder.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return r??=(async()=>{const e=await __webpack_require__.e(/* import() */ 90595).then(__webpack_require__.bind(__webpack_require__, 90595));return await e.default({locateFile:e=>(0,assets/* getAssetUrl */.s)(`esri/libs/dxtEncoder/${e}`)})})(),r}let r;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(68716);
;// ./node_modules/@arcgis/core/views/support/TextureCompressionWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a,s,l=null,TextureCompressionWorker_i=null;class o{constructor(e,t){this.internalFormat=e,this.compressedTexture=t}}async function u(e){let t;if(t=e.data instanceof ImageBitmap?p(e.data):m(e.data,e.width,e.height,e.components,e.needsFlip),e.hasS3TC){TextureCompressionWorker_i||await h();const n=new Uint8Array(t.length);if(TextureCompressionWorker_i?.encode(t,e.width,e.height,e.preMultiplyAlpha,n)){const e=M(n,!0),t=[n.buffer];return{result:new o(e?.internalFormat??null,e?.textureData??null),transferList:t}}return{result:new o(null,null)}}if(e.hasETC){if(l||await c(),e.preMultiplyAlpha&&!TextureCompressionWorker_i&&await h(),e.preMultiplyAlpha){const n=new Uint8ClampedArray(t.length);TextureCompressionWorker_i?.premultiply(new Uint8Array(t),e.width,e.height,n),t=n}const n=await d(t,e.width,e.height,e.hasMipmap),r=n?await f(n):null,a=r?.compressedTexture?.levels.map((e=>e.buffer))||[];return{result:new o(r?.internalFormat??null,r?.compressedTexture??null),transferList:a}}return{result:new o(null,null)}}async function c(){l||(l=await(a??=i()))}async function h(){TextureCompressionWorker_i||(TextureCompressionWorker_i=await(s??=e()))}async function d(e,t,n,r,a=255,s=0,i=!1,o=!1){if(!l)return null;const u=new l.BasisEncoder;u.setPerceptual(!o),u.setCheckForAlpha(!0),u.setForceAlpha(!1),u.setRenormalize(o),u.setMipGen(r),u.setMipSRGB(!o),u.setCreateKTX2File(!0),u.setKTX2SRGBTransferFunc(!o),u.setQualityLevel(a),u.setCompressionLevel(s);const c=new Uint8Array(e.byteLength);u.setSliceSourceImage(0,new Uint8Array(e),t,n,i);const h=u.encode(c),d=new Uint8Array(c.buffer,0,h),f=new l.KTX2File(new Uint8Array(d));return f.isValid()?(u.delete(),d):(f.close(),f.delete(),u.delete(),null)}async function f(e){if(!l)return new o(null,null);const n=new l.KTX2File(new Uint8Array(e));n.startTranscoding();const[a,s]=n.getHasAlpha()?[TextureFormat/* TextureFormat */.n.ETC2_RGBA,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA8_ETC2_EAC]:[TextureFormat/* TextureFormat */.n.ETC1_RGB,enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB8_ETC2],i=n.getLevels(),u=[];for(let t=0;t<i;t++)u.push(new Uint8Array(n.getImageTranscodedSizeInBytes(t,0,0,a))),n.transcodeImage(u[t],t,0,0,a,0,-1,-1);return n.close(),n.delete(),{internalFormat:s,compressedTexture:{type:"compressed",levels:u}}}function p(e){const t=new OffscreenCanvas(e.width,e.height),n=t.getContext("2d");n.drawImage(e,0,0);return n.getImageData(0,0,t.width,t.height).data}function m(e,t,n,r,a){const s=new Uint8ClampedArray(e).subarray(0,t*n*r);if(!a)return s;const l=new Uint8ClampedArray(s.length),i=t*r;for(let o=0;o<n;o++){const e=o*i,t=(n-o-1)*i;l.set(s.subarray(e,e+i),t)}return l}const w=31,y=1,T=2,A=3,C=4,g=7,E=21,b=131072;function S(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const _=S("DXT1"),D=S("DXT3"),R=S("DXT5");function M(e,t){const n=new Int32Array(e.buffer,e.byteOffset,w);let a,s;switch(n[E]){case _:a=8,s=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case D:a=16,s=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case R:a=16,s=enums/* CompressedTextureFormat */.CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}let l=1,i=n[C],o=n[A];(3&i||3&o)&&(i=i+3&-4,o=o+3&-4);const u=i,c=o;let h,d;n[T]&b&&!1!==t&&(l=Math.max(1,n[g]));let f=e.byteOffset+n[y]+4;const p=[];for(let r=0;r<l;++r)d=(i+3>>2)*(o+3>>2)*a,h=new Uint8Array(e.buffer,f,d),p.push(h),f+=d,i=Math.max(1,i>>1),o=Math.max(1,o>>1);return{textureData:{type:"compressed",levels:p},internalFormat:s,width:u,height:c}}


/***/ }),

/***/ 68716:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ab: () => (/* binding */ M),
/* harmony export */   Ac: () => (/* binding */ I),
/* harmony export */   Ap: () => (/* binding */ G),
/* harmony export */   CQ: () => (/* binding */ l),
/* harmony export */   Cj: () => (/* binding */ L),
/* harmony export */   Fq: () => (/* binding */ r),
/* harmony export */   H0: () => (/* binding */ B),
/* harmony export */   H3: () => (/* binding */ U),
/* harmony export */   Hr: () => (/* binding */ u),
/* harmony export */   MT: () => (/* binding */ C),
/* harmony export */   NV: () => (/* binding */ _),
/* harmony export */   SB: () => (/* binding */ n),
/* harmony export */   Tb: () => (/* binding */ T),
/* harmony export */   WR: () => (/* binding */ R),
/* harmony export */   Xo: () => (/* binding */ V),
/* harmony export */   Y7: () => (/* binding */ S),
/* harmony export */   bh: () => (/* binding */ __),
/* harmony export */   dn: () => (/* binding */ A),
/* harmony export */   eA: () => (/* binding */ D),
/* harmony export */   iE: () => (/* binding */ H),
/* harmony export */   j7: () => (/* binding */ F),
/* harmony export */   ld: () => (/* binding */ X),
/* harmony export */   nI: () => (/* binding */ g),
/* harmony export */   pF: () => (/* binding */ P),
/* harmony export */   pe: () => (/* binding */ O),
/* harmony export */   r6: () => (/* binding */ e),
/* harmony export */   vt: () => (/* binding */ o),
/* harmony export */   yI: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports BufferContent, BufferType, ClientWaitSyncStatus, ColorAttachment10, ColorAttachment11, ColorAttachment12, ColorAttachment13, ColorAttachment14, ColorAttachment15, ColorAttachment3, ColorAttachment4, ColorAttachment5, ColorAttachment6, ColorAttachment7, ColorAttachment8, ColorAttachment9, DepthAttachment, Extension, FramebufferTarget, ShaderType, StencilAttachment, SyncCondition, SyncFlag, SyncParameter, SyncStatus, UniformType, Usage, baseTextureUnit */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var _,E,R,A,T,N,S,I,O,C,D,L,P,G,U,M,B,F,H,n,V,X,Y,f,t;!function(_){_[_.DEPTH=256]="DEPTH",_[_.STENCIL=1024]="STENCIL",_[_.COLOR=16384]="COLOR"}(_||(_={})),function(_){_[_.COLOR=6144]="COLOR",_[_.DEPTH=6145]="DEPTH",_[_.STENCIL=6146]="STENCIL",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL"}(E||(E={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(R||(R={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(A||(A={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER",_[_.TRANSFORM_FEEDBACK_BUFFER=35982]="TRANSFORM_FEEDBACK_BUFFER"}(N||(N={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(S||(S={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(I||(I={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT",_[_.HALF_FLOAT=5131]="HALF_FLOAT"}(O||(O={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(C||(C={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(D||(D={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(L||(L={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(P||(P={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(G||(G={})),function(_){_[_.MIN_LOD=33082]="MIN_LOD",_[_.MAX_LOD=33083]="MAX_LOD",_[_.BASE_LEVEL=33084]="BASE_LEVEL",_[_.MAX_LEVEL=33085]="MAX_LEVEL",_[_.MAX_TEXTURE_SIZE=3379]="MAX_TEXTURE_SIZE"}(U||(U={})),function(_){_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(M||(M={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(B||(B={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL"}(F||(F={})),function(_){_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(H||(H={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F"}(n||(n={})),function(_){_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8"}(V||(V={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(X||(X={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(Y||(Y={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(f||(f={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(t||(t={}));const c=33984;var o,u;!function(_){_[_.Texture=0]="Texture",_[_.TileTexture=1]="TileTexture",_[_.BufferObject=2]="BufferObject",_[_.VertexArrayObject=3]="VertexArrayObject",_[_.Shader=4]="Shader",_[_.Program=5]="Program",_[_.FramebufferObject=6]="FramebufferObject",_[_.Renderbuffer=7]="Renderbuffer",_[_.TransformFeedback=8]="TransformFeedback",_[_.Sync=9]="Sync",_[_.UNCOUNTED=10]="UNCOUNTED",_[_.LinesOfCode=10]="LinesOfCode",_[_.Uniform=11]="Uniform",_[_.COUNT=12]="COUNT"}(o||(o={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(u||(u={}));const e=36064,i=36065,r=36066,W=36067,x=36068,K=36069,a=36070,b=36071,Z=36072,d=36073,m=36074,Q=36075,j=36076,s=36077,y=36078,v=36079,g=33306,h=36096,k=36128;var l,J,p,q,w,z,$,__,E_;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(l||(l={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(J||(J={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(p||(p={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(q||(q={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(w||(w={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(z||(z={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}($||($={})),function(_){_[_.INVALID_ENUM=1280]="INVALID_ENUM",_[_.INVALID_VALUE=1281]="INVALID_VALUE",_[_.INVALID_OPERATION=1282]="INVALID_OPERATION",_[_.OUT_OF_MEMORY=1285]="OUT_OF_MEMORY",_[_.INVALID_FRAMEBUFFER_OPERATION=1286]="INVALID_FRAMEBUFFER_OPERATION",_[_.CONTEXT_LOST_WEBGL=37442]="CONTEXT_LOST_WEBGL"}(__||(__={})),function(_){_[_.COMPLETION_STATUS_KHR=37297]="COMPLETION_STATUS_KHR"}(E_||(E_={}));


/***/ })

};
;