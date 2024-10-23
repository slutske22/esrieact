"use strict";
exports.id = 1596;
exports.ids = [1596];
exports.modules = {

/***/ 3192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export s */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,t){const o=e.count;t||(t=new e.TypedArrayConstructor(o));for(let r=0;r<o;r++)t[r]=e.get(r);return t}const t=Object.freeze(Object.defineProperty({__proto__:null,makeDense:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 56016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ o),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   n: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export v */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(e,t){n(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function n(o,n,l=2,u=l){const i=n.length/2;let a=0,d=0;if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(n)||(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isFloat */ .dk)(n)){for(let e=0;e<i;++e)o[a]=n[d],o[a+1]=n[d+1],a+=l,d+=u;return}const c=(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .maximumValue */ .a3)(n);if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isSigned */ .JI)(n))for(let e=0;e<i;++e)o[a]=Math.max(n[d]/c,-1),o[a+1]=Math.max(n[d+1]/c,-1),a+=l,d+=u;else for(let e=0;e<i;++e)o[a]=n[d]/c,o[a+1]=n[d+1]/c,a+=l,d+=u}function l(e,t,r,f){const o=e.typedBuffer,n=e.typedBufferStride,l=f?.count??e.count;let u=(f?.dstIndex??0)*n;for(let i=0;i<l;++i)o[u]=t,o[u+1]=r,u+=n}const u=Object.freeze(Object.defineProperty({__proto__:null,fill:l,normalizeIntegerBuffer:n,normalizeIntegerBufferView:o},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 53866:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   f: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export v */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f.typedBuffer,e.typedBufferStride,f.typedBufferStride)}function t(e,t,f=3,o=f){const r=t.length/o;let n=0,u=0;for(let c=0;c<r;++c)e[n]=t[u],e[n+1]=t[u+1],e[n+2]=t[u+2],n+=f,u+=o}function f(e,t,f,o,r){const n=e.typedBuffer,u=e.typedBufferStride,c=r?.count??e.count;let d=(r?.dstIndex??0)*u;for(let l=0;l<c;++l)n[d]=t,n[d+1]=f,n[d+2]=o,d+=u}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 2662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ r),
/* harmony export */   b: () => (/* binding */ o),
/* harmony export */   n: () => (/* binding */ n),
/* harmony export */   s: () => (/* binding */ u),
/* harmony export */   t: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports c, v */
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64521);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,r,f){if(t.count!==r.count)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const n=t.count,o=f[0],u=f[1],s=f[2],d=f[3],a=f[4],i=f[5],c=f[6],p=f[7],l=f[8],m=f[9],y=f[10],B=f[11],h=f[12],S=f[13],b=f[14],g=f[15],M=t.typedBuffer,v=t.typedBufferStride,_=r.typedBuffer,j=r.typedBufferStride;for(let e=0;e<n;e++){const t=e*v,r=e*j,f=_[r],n=_[r+1],w=_[r+2],z=_[r+3];M[t]=o*f+a*n+l*w+h*z,M[t+1]=u*f+i*n+m*w+S*z,M[t+2]=s*f+c*n+y*w+b*z,M[t+3]=d*f+p*n+B*w+g*z}}function r(e,t,r){f(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function f(t,r,f,n=4,o=n){if(t.length/n!=r.length/o)return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const u=t.length/n,s=f[0],d=f[1],a=f[2],i=f[3],c=f[4],p=f[5],l=f[6],m=f[7],y=f[8];let B=0,h=0;for(let e=0;e<u;e++){const e=r[B],f=r[B+1],u=r[B+2],S=r[B+3];t[h]=s*e+i*f+l*u,t[h+1]=d*e+c*f+m*u,t[h+2]=a*e+p*f+y*u,t[h+3]=S,B+=o,h+=n}}function n(e,t){const r=Math.min(e.count,t.count),f=e.typedBuffer,n=e.typedBufferStride,o=t.typedBuffer,u=t.typedBufferStride;for(let s=0;s<r;s++){const e=s*n,t=s*u,r=o[t],d=o[t+1],a=o[t+2],i=r*r+d*d+a*a;if(i>0){const t=1/Math.sqrt(i);f[e]=t*r,f[e+1]=t*d,f[e+2]=t*a}}}function o(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r,f=4){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let s=0,d=0;for(let a=0;a<n;a++)e[d]=r*o[s],e[d+1]=r*o[s+1],e[d+2]=r*o[s+2],e[d+3]=r*o[s+3],s+=u,d+=f}const s=Object.freeze(Object.defineProperty({__proto__:null,normalize:n,scale:u,scaleView:o,transformMat3:f,transformMat3View:r,transformMat4:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 33381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   f: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export v */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,f){t(e.typedBuffer,f,e.typedBufferStride)}function t(e,t,f=4){const o=t.typedBuffer,r=t.typedBufferStride,n=t.count;let u=0,c=0;for(let d=0;d<n;++d)e[u]=o[c],e[u+1]=o[c+1],e[u+2]=o[c+2],e[u+3]=o[c+3],u+=f,c+=r}function f(e,t,f,o,r,n){const u=e.typedBuffer,c=e.typedBufferStride,d=n?.count??e.count;let l=(n?.dstIndex??0)*c;for(let p=0;p<d;++p)u[l]=t,u[l+1]=f,u[l+2]=o,u[l+3]=r,l+=c}const o=Object.freeze(Object.defineProperty({__proto__:null,copy:t,copyView:e,fill:f},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 32846:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GJ: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports isInteger, isSigned, maximumValue */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e){switch(e){case"u8":case"i8":return 1;case"u16":case"i16":return 2;case"u32":case"i32":case"f32":return 4;case"f64":return 8}}function c(e){switch(e){case"u8":case"u16":case"u32":return!1;case"i8":case"i16":case"i32":case"f32":case"f64":return!0}}function s(e){switch(e){case"u8":case"u16":case"u32":case"i8":case"i16":case"i32":return!0;case"f32":case"f64":return!1}}function r(e){switch(e){case"u8":return 255;case"u16":return 65535;case"u32":return 4294967295;case"i8":return 127;case"i16":return 32767;case"i32":return 2147483647;case"f32":return 3402823e32;case"f64":return 179769e303}}


/***/ }),

/***/ 91596:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  loadGLTFMesh: () => (/* binding */ N)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshComponent.js
var MeshComponent = __webpack_require__(21104);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshMaterialMetallicRoughness.js
var MeshMaterialMetallicRoughness = __webpack_require__(93413);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshTexture.js
var MeshTexture = __webpack_require__(34804);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshTextureTransform.js
var MeshTextureTransform = __webpack_require__(94578);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var MeshVertexAttributes = __webpack_require__(29796);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/types.js
var types = __webpack_require__(32846);
;// ../node_modules/@arcgis/core/chunks/mat32.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<9;++e)r[u+e]=d[l+e];u+=f,l+=n}}const t=Object.freeze(Object.defineProperty({__proto__:null,copy:e},Symbol.toStringTag,{value:"Module"}));

;// ../node_modules/@arcgis/core/chunks/mat42.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function mat42_e(e,t,o){const r=e.typedBuffer,f=e.typedBufferStride,d=t.typedBuffer,n=t.typedBufferStride,c=o?o.count:t.count;let u=(o?.dstIndex??0)*f,l=(o?.srcIndex??0)*n;for(let p=0;p<c;++p){for(let e=0;e<16;++e)r[u+e]=d[l+e];u+=f,l+=n}}const mat42_t=Object.freeze(Object.defineProperty({__proto__:null,copy:mat42_e},Symbol.toStringTag,{value:"Module"}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/scalar.js
var scalar = __webpack_require__(3192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec22.js
var vec22 = __webpack_require__(56016);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec33.js
var vec33 = __webpack_require__(53866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec43.js
var vec43 = __webpack_require__(33381);
;// ../node_modules/@arcgis/core/geometry/support/buffer/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r(s,r){return new s(new ArrayBuffer(r*s.ElementCount*(0,types/* elementTypeSize */.GJ)(s.ElementType)))}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/georeference.js
var georeference = __webpack_require__(97519);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var DefaultLoadingContext = __webpack_require__(13298);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/loader.js + 6 modules
var loader = __webpack_require__(31068);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
var indexUtils = __webpack_require__(8823);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial_COLOR_GAMMA.js
var DefaultMaterial_COLOR_GAMMA = __webpack_require__(42440);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function N(e,t,r){const o={...r,useTransform:r?.useTransform??!0},n=new DefaultLoadingContext/* DefaultLoadingContext */.R(z(o)),s=(await (0,loader/* loadGLTF */.y)(n,t,o,!0)).model,a=s.lods.shift(),l=new Map,i=new Map;s.textures.forEach(((e,t)=>l.set(t,H(e)))),s.materials.forEach(((e,t)=>i.set(t,J(e,l))));const u=Q(a);for(const p of u.parts)W(u,p,i);const{position:c,normal:f,tangent:m,color:d,texCoord0:g}=u.vertexAttributes,x={position:c.typedBuffer,normal:null!=f?f.typedBuffer:null,tangent:null!=m?m.typedBuffer:null,uv:null!=g?g.typedBuffer:null,color:null!=d?d.typedBuffer:null},T=(0,georeference/* georeferenceByTransform */.qD)(x,e,o);return{transform:T.transform,vertexSpace:T.vertexSpace,components:u.components,spatialReference:e.spatialReference,vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({position:T.vertexAttributes.position,normal:T.vertexAttributes.normal,tangent:T.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function z(e){const r=e?.resolveFile,o=e?.requestFile;return r||o?{busy:!1,request:async(e,n,s)=>{const a=r?.(e)??e;if(o){const e=await o(a,n,s?.signal);if(void 0!==e)return e}const l="image"===n?"image":"binary"===n?"array-buffer":"json";return(await (0,request/* default */.A)(a,{responseType:l,signal:null!=s?s.signal:null})).data}}:null}function G(e,t){if(null==e)return"-";const o=e.typedBuffer;return`${(0,MapUtils/* getOrCreateMapValue */.tE)(t,o.buffer,(()=>t.size))}/${o.byteOffset}/${o.byteLength}`}function K(e){return null!=e?e.toString():"-"}function Q(e){let t=0;const has={color:!1,tangent:!1,normal:!1,texCoord0:!1},o=new Map,n=new Map,s=[];for(const a of e.parts){const{attributes:{position:e,normal:l,color:i,tangent:u,texCoord0:c}}=a,f=`\n      ${G(e,o)}/\n      ${G(l,o)}/\n      ${G(i,o)}/\n      ${G(u,o)}/\n      ${G(c,o)}/\n      ${K(a.transform)}\n    `;let m=!1;const p=(0,MapUtils/* getOrCreateMapValue */.tE)(n,f,(()=>(m=!0,{start:t,length:e.count})));m&&(t+=e.count),l&&(has.normal=!0),i&&(has.color=!0),u&&(has.tangent=!0),c&&(has.texCoord0=!0),s.push({gltf:a,writeVertices:m,region:p})}return{vertexAttributes:{position:r(BufferView/* BufferViewVec3f64 */.Xm,t),normal:has.normal?r(BufferView/* BufferViewVec3f */.xs,t):null,tangent:has.tangent?r(BufferView/* BufferViewVec4f */.Eq,t):null,color:has.color?r(BufferView/* BufferViewVec4u8 */.XP,t):null,texCoord0:has.texCoord0?r(BufferView/* BufferViewVec2f */.gH,t):null},parts:s,components:[]}}function H(e){return new MeshTexture/* default */.A({data:((0,resourceUtils/* isEncodedMeshTexture */.x3)(e.data),e.data),wrap:Z(e.parameters.wrap)})}function J(t,r){const o=new Color/* default */.A(re(t.color,t.opacity)),s=t.emissiveFactor?new Color/* default */.A(oe(t.emissiveFactor)):null,a=e=>e?new MeshTextureTransform/* default */.A({scale:e.scale?[e.scale[0],e.scale[1]]:[1,1],rotation:(0,mathUtils/* rad2deg */.KJ)(e.rotation??0),offset:e.offset?[e.offset[0],e.offset[1]]:[0,0]}):null;return new MeshMaterialMetallicRoughness/* default */.A({color:o,colorTexture:r.get(t.textureColor),normalTexture:r.get(t.textureNormal),emissiveColor:s,emissiveTexture:r.get(t.textureEmissive),occlusionTexture:r.get(t.textureOcclusion),alphaMode:Y(t.alphaMode),alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,metallic:t.metallicFactor,roughness:t.roughnessFactor,metallicRoughnessTexture:r.get(t.textureMetallicRoughness),colorTextureTransform:a(t.colorTextureTransform),normalTextureTransform:a(t.normalTextureTransform),occlusionTextureTransform:a(t.occlusionTextureTransform),emissiveTextureTransform:a(t.emissiveTextureTransform),metallicRoughnessTextureTransform:a(t.metallicRoughnessTextureTransform)})}function W(e,t,r){t.writeVertices&&X(e,t);const{indices:o,attributes:n,primitiveType:s,material:a}=t.gltf;let l=(0,indexUtils/* convertPrimitiveToTriangles */.x)(o||n.position.count,s);const i=t.region.start;if(i){const e=new Uint32Array(l);for(let t=0;t<l.length;t++)e[t]+=i;l=e}e.components.push(new MeshComponent/* default */.A({name:t.gltf.name,faces:l,material:r.get(a),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function X(e,t){const{position:r,normal:n,tangent:l,color:i,texCoord0:u}=e.vertexAttributes,c=t.region.start,{attributes:f,transform:m}=t.gltf,p=f.position.count;if((0,vec32.c)(r.slice(c,p),f.position,m),null!=f.normal&&null!=n){const e=(0,mat3.n)((0,mat3f64.a)(),m),t=n.slice(c,p);(0,vec32.b)(t,f.normal,e),(0,mathUtils/* hasScaling */.or)(e)&&(0,vec32.d)(t,t)}else null!=n&&(0,vec33.f)(n,0,0,1,{dstIndex:c,count:p});if(null!=f.tangent&&null!=l){const e=(0,mat3.n)((0,mat3f64.a)(),m),t=l.slice(c,p);(0,vec42.a)(t,f.tangent,e),(0,mathUtils/* hasScaling */.or)(e)&&(0,vec42.n)(t,t)}else null!=l&&(0,vec43.f)(l,0,0,1,1,{dstIndex:c,count:p});if(null!=f.texCoord0&&null!=u?(0,vec22.a)(u.slice(c,p),f.texCoord0):null!=u&&(0,vec22.f)(u,0,0,{dstIndex:c,count:p}),null!=f.color&&null!=i){const e=f.color,t=i.slice(c,p);if(4===e.elementCount)e instanceof BufferView/* BufferViewVec4f */.Eq?(0,vec42.b)(t,e,255):e instanceof BufferView/* BufferViewVec4u8 */.XP?(0,vec43.a)(t,e):e instanceof BufferView/* BufferViewVec4u16 */.Uz&&(0,vec42.b)(t,e,1/256);else{(0,vec43.f)(t,255,255,255,255);const r=BufferView/* BufferViewVec3u8 */.eI.fromTypedArray(t.typedBuffer,t.typedBufferStride);e instanceof BufferView/* BufferViewVec3f */.xs?(0,vec32.e)(r,e,255):e instanceof BufferView/* BufferViewVec3u8 */.eI?(0,vec33.a)(r,e):e instanceof BufferView/* BufferViewVec3u16 */.nS&&(0,vec32.e)(r,e,1/256)}}else null!=i&&(0,vec43.f)(i.slice(c,p),255,255,255,255)}function Y(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Z(e){return{horizontal:ee(e.s),vertical:ee(e.t)}}function ee(e){switch(e){case enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE:return"clamp";case enums/* TextureWrapMode */.pF.MIRRORED_REPEAT:return"mirror";case enums/* TextureWrapMode */.pF.REPEAT:return"repeat"}}function te(e){return e**(1/DefaultMaterial_COLOR_GAMMA/* colorGamma */.T)*255}function re(e,t){return (0,vec4f64.f)(te(e[0]),te(e[1]),te(e[2]),t)}function oe(e){return (0,vec3f64.f)(te(e[0]),te(e[1]),te(e[2]))}


/***/ }),

/***/ 13298:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20909);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class n{constructor(r){this._streamDataRequester=r}async loadJSON(r,e){return this._load("json",r,e)}async loadBinary(r,e){return (0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isDataProtocol */ .DB)(r)?((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(e),(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .dataToArrayBuffer */ .lJ)(r)):this._load("binary",r,e)}async loadImage(r,e){return this._load("image",r,e)}async _load(a,o,i){if(null==this._streamDataRequester)return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o,{responseType:m[a]})).data;const n=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .result */ .Ke)(this._streamDataRequester.request(o,a,i));if(!0===n.ok)return n.value;throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAbortError */ .QP)(n.error),new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("",`Request for resource failed: ${n.error}`)}}const m={image:"image",binary:"array-buffer",json:"json","image+type":void 0};


/***/ }),

/***/ 8823:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42965);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(r,t){switch(t){case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLES:return f(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLE_STRIP:return u(r);case _webgl_enums_js__WEBPACK_IMPORTED_MODULE_2__/* .PrimitiveType */ .WR.TRIANGLE_FAN:return i(r)}}function f(e){return"number"==typeof e?(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .getContinuousIndexArray */ .tM)(e):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isUint8Array */ .mg)(e)?new Uint16Array(e):e}function u(r){const t="number"==typeof r?r:r.length;if(t<3)return[];const n=t-2,o=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(3*n);if("number"==typeof r){let r=0;for(let t=0;t<n;t+=1)t%2==0?(o[r++]=t,o[r++]=t+1,o[r++]=t+2):(o[r++]=t+1,o[r++]=t,o[r++]=t+2)}else{let t=0;for(let e=0;e<n;e+=1)e%2==0?(o[t++]=r[e],o[t++]=r[e+1],o[t++]=r[e+2]):(o[t++]=r[e+1],o[t++]=r[e],o[t++]=r[e+2])}return o}function i(r){const t="number"==typeof r?r:r.length;if(t<3)return new Uint16Array(0);const e=t-2,n=e<=65536?new Uint16Array(3*e):new Uint32Array(3*e);if("number"==typeof r){let r=0;for(let t=0;t<e;++t)n[r++]=0,n[r++]=t+1,n[r++]=t+2;return n}const o=r[0];let f=r[1],u=0;for(let i=0;i<e;++i){const t=r[i+2];n[u++]=o,n[u++]=f,n[u++]=t,f=t}return n}


/***/ }),

/***/ 46629:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KB: () => (/* binding */ n),
/* harmony export */   Xi: () => (/* binding */ t),
/* harmony export */   pn: () => (/* binding */ o),
/* harmony export */   x3: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91013);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t){this.data=t,this.type="encoded-mesh-texture",this.encoding=_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureEncodingMimeType */ .JS.KTX2_ENCODING}}function r(e){return"encoded-mesh-texture"===e?.type}async function n(e){const t=new Blob([e]),r=await t.text();return JSON.parse(r)}async function o(r,n){if(n===_webgl_engine_lib_basicInterfaces_js__WEBPACK_IMPORTED_MODULE_1__/* .TextureEncodingMimeType */ .JS.KTX2_ENCODING)return new t(r);const o=new Blob([r],{type:n}),c=URL.createObjectURL(o),s=new Image;if((0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-iPhone"))return new Promise(((e,t)=>{const r=()=>{o(),e(s)},n=e=>{o(),t(e)},o=()=>{URL.revokeObjectURL(c),s.removeEventListener("load",r),s.removeEventListener("error",n)};s.addEventListener("load",r),s.addEventListener("error",n),s.src=c}));try{s.src=c,await s.decode()}catch(i){console.warn("Failed decoding HTMLImageElement")}return URL.revokeObjectURL(c),s}


/***/ }),

/***/ 31068:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ loader_l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
;// ../node_modules/@arcgis/core/views/3d/glTF/LoaderResult.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function LoaderResult_r(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}function l(r,l={}){return{data:r,parameters:{wrap:{s:enums/* TextureWrapMode */.pF.REPEAT,t:enums/* TextureWrapMode */.pF.REPEAT,...l.wrap},noUnpackFlip:!0,mipmap:!1,...l}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Version.js
var Version = __webpack_require__(50579);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(76743);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js + 6 modules
var BufferView = __webpack_require__(57813);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/scalar.js
var scalar = __webpack_require__(3192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/BinaryStreamReader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class BinaryStreamReader_t{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const s=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,s,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}

;// ../node_modules/@arcgis/core/views/3d/glTF/internal/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var A,E;!function(A){A.SCALAR="SCALAR",A.VEC2="VEC2",A.VEC3="VEC3",A.VEC4="VEC4",A.MAT2="MAT2",A.MAT3="MAT3",A.MAT4="MAT4"}(A||(A={})),function(A){A[A.ARRAY_BUFFER=34962]="ARRAY_BUFFER",A[A.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(E||(E={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(73345);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/fillDefaults.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},a={pbrMetallicRoughness:t,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},fillDefaults_l={ESRI_externalColorMixMode:"tint"},fillDefaults_i=(e={})=>{const o={...t,...e.pbrMetallicRoughness},r=s({...fillDefaults_l,...e.extras});return{...a,...e,pbrMetallicRoughness:o,extras:r}};function s(o){switch(o.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:(0,compilerUtils/* neverReached */.Xb)(o.ESRI_externalColorMixMode),o.ESRI_externalColorMixMode="tint"}return o}const n={magFilter:enums/* TextureSamplingMode */.Cj.LINEAR,minFilter:enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR,wrapS:enums/* TextureWrapMode */.pF.REPEAT,wrapT:enums/* TextureWrapMode */.pF.REPEAT},c=e=>({...n,...e});

;// ../node_modules/@arcgis/core/views/3d/glTF/internal/pathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function pathUtils_r(r){let e,t;return r.replace(/^(.*\/)?([^/]*)$/,((r,a,i)=>(e=a||"",t=i||"",""))),{dirPart:e,filePart:t}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/glTF/internal/resourceUtils.js
var resourceUtils = __webpack_require__(46629);
;// ../node_modules/@arcgis/core/views/3d/glTF/internal/Resource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const K={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class Y{constructor(t,r,o,n){if(this._context=t,this.uri=r,this.json=o,this._glbBuffer=n,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu"],this._baseUri=pathUtils_r(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==o.scenes)throw new Error/* default */.A("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==o.meshes)throw new Error/* default */.A("gltf-loader-unsupported-feature","Meshes must be defined");if(null==o.nodes)throw new Error/* default */.A("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(t,r,o){if((0,urlUtils/* isDataProtocol */.DB)(r)){const e=(0,urlUtils/* dataComponents */.r$)(r);if(e&&"model/gltf-binary"!==e.mediaType)try{const o=JSON.parse(e.isBase64?atob(e.data):e.data);return new Y(t,r,o)}catch{}const o=(0,urlUtils/* dataToArrayBuffer */.lJ)(r);if(Y._isGLBData(o))return this._fromGLBData(t,r,o)}if(Q.test(r)||"gltf"===o?.expectedType){const e=await t.loadJSON(r,o);return new Y(t,r,e)}const i=await t.loadBinary(r,o);if(Y._isGLBData(i))return this._fromGLBData(t,r,i);if(Z.test(r)||"glb"===o?.expectedType)throw new Error/* default */.A("gltf-loader-invalid-glb","This is not a valid glb file.");const u=await t.loadJSON(r,o);return new Y(t,r,u)}static _isGLBData(e){if(null==e)return!1;const t=new BinaryStreamReader_t(e);return t.remainingBytes()>=4&&t.readUint32()===K.MAGIC}static async _fromGLBData(e,t,r){const o=await Y._parseGLBData(r);return new Y(e,t,o.json,o.binaryData)}static async _parseGLBData(r){const o=new BinaryStreamReader_t(r);if(o.remainingBytes()<12)throw new Error/* default */.A("gltf-loader-error","glb binary data is insufficiently large.");const n=o.readUint32(),s=o.readUint32(),a=o.readUint32();if(n!==K.MAGIC)throw new Error/* default */.A("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(r.byteLength<a)throw new Error/* default */.A("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==s)throw new Error/* default */.A("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let i,u,f=0;for(;o.remainingBytes()>=8;){const r=o.readUint32(),n=o.readUint32();if(0===f){if(n!==K.CHUNK_TYPE_JSON)throw new Error/* default */.A("gltf-loader-error","First glb chunk must be JSON.");if(r<0)throw new Error/* default */.A("gltf-loader-error","No JSON data found.");i=await (0,resourceUtils/* jsonFromBinaryData */.KB)(o.readUint8Array(r))}else if(1===f){if(n!==K.CHUNK_TYPE_BIN)throw new Error/* default */.A("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");u=o.readUint8Array(r)}else Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");f+=1}if(!i)throw new Error/* default */.A("gltf-loader-error","No glb JSON chunk detected.");return{json:i,binaryData:u}}async getBuffer(t,r){const o=this.json.buffers[t];if(null==o.uri){if(null==this._glbBuffer)throw new Error/* default */.A("gltf-loader-error","glb buffer not present");return this._glbBuffer}const n=await this._getBufferLoader(t,r);if(n.byteLength!==o.byteLength)throw new Error/* default */.A("gltf-loader-error","Buffer byte lengths should match.");return n}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(t,r){if(!this.json.accessors)throw new Error/* default */.A("gltf-loader-unsupported-feature","Accessors missing.");const o=this.json.accessors[t];if(null==o?.bufferView)throw new Error/* default */.A("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(o.type in[A.MAT2,A.MAT3,A.MAT4])throw new Error/* default */.A("gltf-loader-unsupported-feature",`AttributeType ${o.type} is not supported`);const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,r),a=X[o.type],i=$[o.componentType],u=a*i,f=n.byteStride||u;return{raw:s.buffer,byteStride:f,byteOffset:s.byteOffset+(n.byteOffset||0)+(o.byteOffset||0),entryCount:o.count,isDenselyPacked:f===u,componentCount:a,componentByteSize:i,componentType:o.componentType,min:o.min,max:o.max,normalized:!!o.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case enums/* DataType */.pe.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case enums/* DataType */.pe.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case enums/* DataType */.pe.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case enums/* DataType */.pe.UNSIGNED_BYTE:return (0,scalar.m)(this._wrapAccessor(BufferView/* BufferViewUint8 */.SL,r));case enums/* DataType */.pe.UNSIGNED_SHORT:return (0,scalar.m)(this._wrapAccessor(BufferView/* BufferViewUint16 */.h,r));case enums/* DataType */.pe.UNSIGNED_INT:return (0,scalar.m)(this._wrapAccessor(BufferView/* BufferViewUint32 */.P,r))}}async getPositionData(t,r){if(null==t.attributes.POSITION)throw new Error/* default */.A("gltf-loader-unsupported-feature","No POSITION vertex data found.");const o=await this.getAccessor(t.attributes.POSITION,r);if(o.componentType!==enums/* DataType */.pe.FLOAT)throw new Error/* default */.A("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+enums/* DataType */.pe[o.componentType]);if(3!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return this._wrapAccessor(BufferView/* BufferViewVec3f */.xs,o)}async getNormalData(t,r){if(null==t.attributes.NORMAL)throw new Error/* default */.A("gltf-loader-error","No NORMAL vertex data found.");const o=await this.getAccessor(t.attributes.NORMAL,r);if(o.componentType!==enums/* DataType */.pe.FLOAT)throw new Error/* default */.A("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+enums/* DataType */.pe[o.componentType]);if(3!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+o.componentCount.toFixed());return this._wrapAccessor(BufferView/* BufferViewVec3f */.xs,o)}async getTangentData(t,r){if(null==t.attributes.TANGENT)throw new Error/* default */.A("gltf-loader-error","No TANGENT vertex data found.");const o=await this.getAccessor(t.attributes.TANGENT,r);if(o.componentType!==enums/* DataType */.pe.FLOAT)throw new Error/* default */.A("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+enums/* DataType */.pe[o.componentType]);if(4!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+o.componentCount.toFixed());return new BufferView/* BufferViewVec4f */.Eq(o.raw,o.byteOffset,o.byteStride,o.byteOffset+o.byteStride*o.entryCount)}async getTextureCoordinates(t,r){if(null==t.attributes.TEXCOORD_0)throw new Error/* default */.A("gltf-loader-error","No TEXCOORD_0 vertex data found.");const o=await this.getAccessor(t.attributes.TEXCOORD_0,r);if(2!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+o.componentCount.toFixed());if(o.componentType===enums/* DataType */.pe.FLOAT)return this._wrapAccessor(BufferView/* BufferViewVec2f */.gH,o);if(!o.normalized)throw new Error/* default */.A("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return W(o)}async getVertexColors(t,r){if(null==t.attributes.COLOR_0)throw new Error/* default */.A("gltf-loader-error","No COLOR_0 vertex data found.");const o=await this.getAccessor(t.attributes.COLOR_0,r);if(4!==o.componentCount&&3!==o.componentCount)throw new Error/* default */.A("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+o.componentCount.toFixed());if(4===o.componentCount){if(o.componentType===enums/* DataType */.pe.FLOAT)return this._wrapAccessor(BufferView/* BufferViewVec4f */.Eq,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_BYTE)return this._wrapAccessor(BufferView/* BufferViewVec4u8 */.XP,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_SHORT)return this._wrapAccessor(BufferView/* BufferViewVec4u16 */.Uz,o)}else if(3===o.componentCount){if(o.componentType===enums/* DataType */.pe.FLOAT)return this._wrapAccessor(BufferView/* BufferViewVec3f */.xs,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_BYTE)return this._wrapAccessor(BufferView/* BufferViewVec3u8 */.eI,o);if(o.componentType===enums/* DataType */.pe.UNSIGNED_SHORT)return this._wrapAccessor(BufferView/* BufferViewVec3u16 */.nS,o)}throw new Error/* default */.A("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+enums/* DataType */.pe[o.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const n=null!=e.material?fillDefaults_i(this.json.materials[e.material]):fillDefaults_i(),s=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),f=r?this.getTexture(n.occlusionTexture,t):void 0,c=r?this.getTexture(n.emissiveTexture,t):void 0,d=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,l=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:s.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:l,occlusionTexture:await f,emissiveTexture:await c,emissiveFactor:n.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await d,hasVertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform}}return o}async getTexture(t,o){if(!t)return;if(0!==(t.texCoord||0))throw new Error/* default */.A("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const n=t.index,s=this.json.textures[n],a=c(null!=s.sampler?this.json.samplers[s.sampler]:{}),i=this._getTextureSourceId(s),u=this.json.images[i],f=await this._loadTextureImageData(n,s,o);return (0,MapUtils/* getOrCreateMapValue */.tE)(this._textureCache,n,(()=>{const t=e=>33071===e||33648===e||10497===e,r=t=>{throw new Error/* default */.A("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return{data:f,wrapS:t(a.wrapS)?a.wrapS:r(a.wrapS),wrapT:t(a.wrapT)?a.wrapT:r(a.wrapT),minFilter:a.minFilter,name:u.name,id:n}}))}getNodeTransform(e){if(void 0===e)return q;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=(0,mat4.m)((0,mat4f64.a)(),r,o.matrix):o.translation||o.rotation||o.scale?(t=(0,mat4f64.b)(r),o.translation&&(0,mat4.w)(t,t,o.translation),o.rotation&&(z[3]=(0,quat.g)(z,o.rotation),(0,mat4.k)(t,t,z[3],z)),o.scale&&(0,mat4.b)(t,t,o.scale)):t=(0,mat4f64.b)(r),this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return (0,urlUtils/* makeAbsolute */.s2)(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=Version/* Version */.R.parse(this.json.asset.version,"glTF");J.validate(e)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new Error/* default */.A("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}_getTextureSourceId(t){if(void 0!==t.extensions&&null!==t.extensions.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new Error/* default */.A("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(t,r){const o=this._getTextureSourceId(t),n=this.json.images[o];if(n.uri){if(n.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(n.uri),r);return new resourceUtils/* EncodedMeshTexture */.Xi(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(n.uri),r)}if(null==n.bufferView)throw new Error/* default */.A("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==n.mimeType)throw new Error/* default */.A("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[n.bufferView],a=await this.getBuffer(s.buffer,r);if(null!=s.byteStride)throw new Error/* default */.A("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return (0,resourceUtils/* imageFromBinaryData */.pn)(new Uint8Array(a.buffer,i,s.byteLength),n.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await (0,promiseUtils/* allSettledValues */.nA)(Array.from(this._bufferLoaders.values())),t=await (0,promiseUtils/* allSettledValues */.nA)(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?(0,resourceUtils/* isEncodedMeshTexture */.x3)(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const q=(0,mat4.A)((0,mat4f64.a)(),Math.PI/2),J=new Version/* Version */.R(2,0,"glTF"),z=(0,quatf64.a)(),X={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$={[enums/* DataType */.pe.BYTE]:1,[enums/* DataType */.pe.UNSIGNED_BYTE]:1,[enums/* DataType */.pe.SHORT]:2,[enums/* DataType */.pe.UNSIGNED_SHORT]:2,[enums/* DataType */.pe.FLOAT]:4,[enums/* DataType */.pe.INT]:4,[enums/* DataType */.pe.UNSIGNED_INT]:4};function W(e){switch(e.componentType){case enums/* DataType */.pe.BYTE:return new BufferView/* BufferViewVec2i8 */.D6(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.UNSIGNED_BYTE:return new BufferView/* BufferViewVec2u8 */.LC(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.SHORT:return new BufferView/* BufferViewVec2i16 */.mJ(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.UNSIGNED_SHORT:return new BufferView/* BufferViewVec2u16 */.Yi(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.UNSIGNED_INT:return new BufferView/* BufferViewVec2u32 */.An(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case enums/* DataType */.pe.FLOAT:return new BufferView/* BufferViewVec2f */.gH(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}const Q=/\.gltf$/i,Z=/\.glb$/i;

;// ../node_modules/@arcgis/core/views/3d/glTF/loader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let i=0;async function loader_l(t,r,a={},l=!0){const m=await Y.load(t,r,a),p="gltf_"+i++,T={lods:[],materials:new Map,textures:new Map,meta:u(m)},f=!(!m.json.asset.extras||"symbolResource"!==m.json.asset.extras.ESRI_type),x=new Map;await loader_c(m,(async(t,r,s,i)=>{const u=x.get(s)??0;x.set(s,u+1);const c=void 0!==t.mode?t.mode:enums/* PrimitiveType */.WR.TRIANGLES,f=c===enums/* PrimitiveType */.WR.TRIANGLES||c===enums/* PrimitiveType */.WR.TRIANGLE_STRIP||c===enums/* PrimitiveType */.WR.TRIANGLE_FAN?c:null;if(null==f)return void Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+enums/* PrimitiveType */.WR[c]+"). Skipping primitive.");if(!m.hasPositions(t))return void Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const g=m.getPositionData(t,a),h=m.getMaterial(t,a,l),w=m.hasNormals(t)?m.getNormalData(t,a):null,v=m.hasTangents(t)?m.getTangentData(t,a):null,R=m.hasTextureCoordinates(t)?m.getTextureCoordinates(t,a):null,S=m.hasVertexColors(t)?m.getVertexColors(t,a):null,_=m.getIndexData(t,a),E={name:i,transform:(0,mat4f64.b)(r),attributes:{position:await g,normal:w?await w:null,texCoord0:R?await R:null,color:S?await S:null,tangent:v?await v:null},indices:await _,primitiveType:f,material:d(T,await h,p)};let I=null;null!=T.meta?.ESRI_lod&&"screenSpaceRadius"===T.meta.ESRI_lod.metric&&(I=T.meta.ESRI_lod.thresholds[s]),T.lods[s]=T.lods[s]||{parts:[],name:i,lodThreshold:I},T.lods[s].parts[u]=E}));for(const e of T.lods)e.parts=e.parts.filter((e=>!!e));const g=await m.getLoadedBuffersSize();return{model:T,meta:{isEsriSymbolResource:f,uri:m.uri},customMeta:{},size:g}}function u(e){const o=e.json;let t=null;return o.nodes.forEach((e=>{const o=e.extras;null!=o&&(o.ESRI_proxyEllipsoid||o.ESRI_lod)&&(t=o)})),t}async function loader_c(o,t){const r=o.json,s=r.scenes[r.scene||0].nodes,a=s.length>1,n=[];for(const e of s){const o=r.nodes[e];if(n.push(i(e,0)),m(o)&&!a){o.extensions.MSFT_lod.ids.forEach(((e,o)=>i(e,o+1)))}}async function i(s,a){const l=r.nodes[s],u=o.getNodeTransform(s);if(null!=l.weights&&Logger/* default */.A.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=l.mesh){const e=r.meshes[l.mesh];for(const o of e.primitives)n.push(t(o,u,a,e.name))}for(const e of l.children||[])n.push(i(e,a))}await Promise.all(n)}function m(e){return e.extensions?.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function d(e,o,s){const a=o=>{const t=`${s}_tex_${o&&o.id}${o?.name?"_"+o.name:""}`;if(o&&!e.textures.has(t)){const s=l(o.data,{wrap:{s:o.wrapS,t:o.wrapT},mipmap:p.has(o.minFilter),noUnpackFlip:!0});e.textures.set(t,s)}return t},n=`${s}_mat_${o.id}_${o.name}`;if(!e.materials.has(n)){const r=LoaderResult_r({color:[o.color[0],o.color[1],o.color[2]],opacity:o.color[3],alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,doubleSided:o.doubleSided,colorMixMode:o.ESRI_externalColorMixMode,textureColor:o.colorTexture?a(o.colorTexture):void 0,textureNormal:o.normalTexture?a(o.normalTexture):void 0,textureOcclusion:o.occlusionTexture?a(o.occlusionTexture):void 0,textureEmissive:o.emissiveTexture?a(o.emissiveTexture):void 0,textureMetallicRoughness:o.metallicRoughnessTexture?a(o.metallicRoughnessTexture):void 0,emissiveFactor:[o.emissiveFactor[0],o.emissiveFactor[1],o.emissiveFactor[2]],colorTextureTransform:o.colorTextureTransform,normalTextureTransform:o.normalTextureTransform,occlusionTextureTransform:o.occlusionTextureTransform,emissiveTextureTransform:o.emissiveTextureTransform,metallicRoughnessTextureTransform:o.metallicRoughnessTextureTransform,metallicFactor:o.metallicFactor,roughnessFactor:o.roughnessFactor});e.materials.set(n,r)}return n}const p=new Set([enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR,enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_NEAREST]);


/***/ }),

/***/ 42440:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=2.1;


/***/ }),

/***/ 41746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ab: () => (/* binding */ G),
/* harmony export */   Ac: () => (/* binding */ S),
/* harmony export */   Ap: () => (/* binding */ M),
/* harmony export */   CQ: () => (/* binding */ c),
/* harmony export */   Cj: () => (/* binding */ L),
/* harmony export */   Co: () => (/* binding */ H),
/* harmony export */   H0: () => (/* binding */ P),
/* harmony export */   Hr: () => (/* binding */ f),
/* harmony export */   MT: () => (/* binding */ O),
/* harmony export */   NZ: () => (/* binding */ A),
/* harmony export */   Nm: () => (/* binding */ X),
/* harmony export */   R: () => (/* binding */ n),
/* harmony export */   Tb: () => (/* binding */ T),
/* harmony export */   WR: () => (/* binding */ E),
/* harmony export */   Y7: () => (/* binding */ N),
/* harmony export */   _U: () => (/* binding */ F),
/* harmony export */   dn: () => (/* binding */ R),
/* harmony export */   eA: () => (/* binding */ I),
/* harmony export */   hn: () => (/* binding */ _),
/* harmony export */   ld: () => (/* binding */ U),
/* harmony export */   nI: () => (/* binding */ t),
/* harmony export */   pF: () => (/* binding */ D),
/* harmony export */   pe: () => (/* binding */ C),
/* harmony export */   sS: () => (/* binding */ e),
/* harmony export */   tx: () => (/* binding */ r),
/* harmony export */   vt: () => (/* binding */ V),
/* harmony export */   xM: () => (/* binding */ Y),
/* harmony export */   xV: () => (/* binding */ o),
/* harmony export */   yQ: () => (/* binding */ B)
/* harmony export */ });
/* unused harmony exports SyncFlag, SyncParameter, SyncStatus */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var _,E,R,T,A,N,S,C,O,I,L,D,M,G,P,U,B,F,H,n;!function(_){_[_.DEPTH_BUFFER_BIT=256]="DEPTH_BUFFER_BIT",_[_.STENCIL_BUFFER_BIT=1024]="STENCIL_BUFFER_BIT",_[_.COLOR_BUFFER_BIT=16384]="COLOR_BUFFER_BIT"}(_||(_={})),function(_){_[_.POINTS=0]="POINTS",_[_.LINES=1]="LINES",_[_.LINE_LOOP=2]="LINE_LOOP",_[_.LINE_STRIP=3]="LINE_STRIP",_[_.TRIANGLES=4]="TRIANGLES",_[_.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",_[_.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(E||(E={})),function(_){_[_.ZERO=0]="ZERO",_[_.ONE=1]="ONE",_[_.SRC_COLOR=768]="SRC_COLOR",_[_.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",_[_.SRC_ALPHA=770]="SRC_ALPHA",_[_.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",_[_.DST_ALPHA=772]="DST_ALPHA",_[_.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",_[_.DST_COLOR=774]="DST_COLOR",_[_.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",_[_.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE",_[_.CONSTANT_COLOR=32769]="CONSTANT_COLOR",_[_.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",_[_.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",_[_.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA"}(R||(R={})),function(_){_[_.ADD=32774]="ADD",_[_.MIN=32775]="MIN",_[_.MAX=32776]="MAX",_[_.SUBTRACT=32778]="SUBTRACT",_[_.REVERSE_SUBTRACT=32779]="REVERSE_SUBTRACT"}(T||(T={})),function(_){_[_.ARRAY_BUFFER=34962]="ARRAY_BUFFER",_[_.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",_[_.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",_[_.PIXEL_PACK_BUFFER=35051]="PIXEL_PACK_BUFFER",_[_.PIXEL_UNPACK_BUFFER=35052]="PIXEL_UNPACK_BUFFER",_[_.COPY_READ_BUFFER=36662]="COPY_READ_BUFFER",_[_.COPY_WRITE_BUFFER=36663]="COPY_WRITE_BUFFER"}(A||(A={})),function(_){_[_.FRONT=1028]="FRONT",_[_.BACK=1029]="BACK",_[_.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(N||(N={})),function(_){_[_.CW=2304]="CW",_[_.CCW=2305]="CCW"}(S||(S={})),function(_){_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.INT=5124]="INT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.FLOAT=5126]="FLOAT"}(C||(C={})),function(_){_[_.NEVER=512]="NEVER",_[_.LESS=513]="LESS",_[_.EQUAL=514]="EQUAL",_[_.LEQUAL=515]="LEQUAL",_[_.GREATER=516]="GREATER",_[_.NOTEQUAL=517]="NOTEQUAL",_[_.GEQUAL=518]="GEQUAL",_[_.ALWAYS=519]="ALWAYS"}(O||(O={})),function(_){_[_.ZERO=0]="ZERO",_[_.KEEP=7680]="KEEP",_[_.REPLACE=7681]="REPLACE",_[_.INCR=7682]="INCR",_[_.DECR=7683]="DECR",_[_.INVERT=5386]="INVERT",_[_.INCR_WRAP=34055]="INCR_WRAP",_[_.DECR_WRAP=34056]="DECR_WRAP"}(I||(I={})),function(_){_[_.NEAREST=9728]="NEAREST",_[_.LINEAR=9729]="LINEAR",_[_.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",_[_.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",_[_.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",_[_.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(L||(L={})),function(_){_[_.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",_[_.REPEAT=10497]="REPEAT",_[_.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(D||(D={})),function(_){_[_.TEXTURE_2D=3553]="TEXTURE_2D",_[_.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",_[_.TEXTURE_3D=32879]="TEXTURE_3D",_[_.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",_[_.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",_[_.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",_[_.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",_[_.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",_[_.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY"}(M||(M={})),function(_){_[_.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.ALPHA=6406]="ALPHA",_[_.RGB=6407]="RGB",_[_.RGBA=6408]="RGBA",_[_.LUMINANCE=6409]="LUMINANCE",_[_.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",_[_.RED=6403]="RED",_[_.RG=33319]="RG",_[_.RED_INTEGER=36244]="RED_INTEGER",_[_.RG_INTEGER=33320]="RG_INTEGER",_[_.RGB_INTEGER=36248]="RGB_INTEGER",_[_.RGBA_INTEGER=36249]="RGBA_INTEGER"}(G||(G={})),function(_){_[_.RGBA4=32854]="RGBA4",_[_.R16F=33325]="R16F",_[_.RG16F=33327]="RG16F",_[_.RGB32F=34837]="RGB32F",_[_.RGBA16F=34842]="RGBA16F",_[_.R32F=33326]="R32F",_[_.RG32F=33328]="RG32F",_[_.RGBA32F=34836]="RGBA32F",_[_.R11F_G11F_B10F=35898]="R11F_G11F_B10F",_[_.RGB8=32849]="RGB8",_[_.RGBA8=32856]="RGBA8",_[_.RGB5_A1=32855]="RGB5_A1",_[_.R8=33321]="R8",_[_.RG8=33323]="RG8",_[_.R8I=33329]="R8I",_[_.R8UI=33330]="R8UI",_[_.R16I=33331]="R16I",_[_.R16UI=33332]="R16UI",_[_.R32I=33333]="R32I",_[_.R32UI=33334]="R32UI",_[_.RG8I=33335]="RG8I",_[_.RG8UI=33336]="RG8UI",_[_.RG16I=33337]="RG16I",_[_.RG16UI=33338]="RG16UI",_[_.RG32I=33339]="RG32I",_[_.RG32UI=33340]="RG32UI",_[_.RGB16F=34843]="RGB16F",_[_.RGB9_E5=35901]="RGB9_E5",_[_.SRGB8=35905]="SRGB8",_[_.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",_[_.RGB565=36194]="RGB565",_[_.RGBA32UI=36208]="RGBA32UI",_[_.RGB32UI=36209]="RGB32UI",_[_.RGBA16UI=36214]="RGBA16UI",_[_.RGB16UI=36215]="RGB16UI",_[_.RGBA8UI=36220]="RGBA8UI",_[_.RGB8UI=36221]="RGB8UI",_[_.RGBA32I=36226]="RGBA32I",_[_.RGB32I=36227]="RGB32I",_[_.RGBA16I=36232]="RGBA16I",_[_.RGB16I=36233]="RGB16I",_[_.RGBA8I=36238]="RGBA8I",_[_.RGB8I=36239]="RGB8I",_[_.R8_SNORM=36756]="R8_SNORM",_[_.RG8_SNORM=36757]="RG8_SNORM",_[_.RGB8_SNORM=36758]="RGB8_SNORM",_[_.RGBA8_SNORM=36759]="RGBA8_SNORM",_[_.RGB10_A2=32857]="RGB10_A2",_[_.RGB10_A2UI=36975]="RGB10_A2UI"}(P||(P={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",_[_.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",_[_.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",_[_.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",_[_.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",_[_.BYTE=5120]="BYTE",_[_.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",_[_.SHORT=5122]="SHORT",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.INT=5124]="INT",_[_.HALF_FLOAT=5131]="HALF_FLOAT",_[_.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",_[_.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",_[_.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",_[_.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV"}(U||(U={})),function(_){_[_.DEPTH_COMPONENT16=33189]="DEPTH_COMPONENT16",_[_.STENCIL_INDEX8=36168]="STENCIL_INDEX8",_[_.DEPTH_STENCIL=34041]="DEPTH_STENCIL",_[_.DEPTH_COMPONENT24=33190]="DEPTH_COMPONENT24",_[_.DEPTH_COMPONENT32F=36012]="DEPTH_COMPONENT32F",_[_.DEPTH24_STENCIL8=35056]="DEPTH24_STENCIL8",_[_.DEPTH32F_STENCIL8=36013]="DEPTH32F_STENCIL8"}(B||(B={})),function(_){_[_.STATIC_DRAW=35044]="STATIC_DRAW",_[_.DYNAMIC_DRAW=35048]="DYNAMIC_DRAW",_[_.STREAM_DRAW=35040]="STREAM_DRAW",_[_.STATIC_READ=35045]="STATIC_READ",_[_.DYNAMIC_READ=35049]="DYNAMIC_READ",_[_.STREAM_READ=35041]="STREAM_READ",_[_.STATIC_COPY=35046]="STATIC_COPY",_[_.DYNAMIC_COPY=35050]="DYNAMIC_COPY",_[_.STREAM_COPY=35042]="STREAM_COPY"}(F||(F={})),function(_){_[_.FRAGMENT_SHADER=35632]="FRAGMENT_SHADER",_[_.VERTEX_SHADER=35633]="VERTEX_SHADER"}(H||(H={})),function(_){_[_.FRAMEBUFFER=36160]="FRAMEBUFFER",_[_.READ_FRAMEBUFFER=36008]="READ_FRAMEBUFFER",_[_.DRAW_FRAMEBUFFER=36009]="DRAW_FRAMEBUFFER"}(n||(n={}));const Y=33984;var V,X,f;!function(_){_[_.Texture=0]="Texture",_[_.BufferObject=1]="BufferObject",_[_.VertexArrayObject=2]="VertexArrayObject",_[_.Shader=3]="Shader",_[_.Program=4]="Program",_[_.FramebufferObject=5]="FramebufferObject",_[_.Renderbuffer=6]="Renderbuffer",_[_.Sync=7]="Sync",_[_.UNCOUNTED=8]="UNCOUNTED",_[_.LinesOfCode=8]="LinesOfCode",_[_.Uniform=9]="Uniform",_[_.COUNT=10]="COUNT"}(V||(V={})),function(_){_[_.COLOR_ATTACHMENT0=36064]="COLOR_ATTACHMENT0",_[_.COLOR_ATTACHMENT1=36065]="COLOR_ATTACHMENT1",_[_.COLOR_ATTACHMENT2=36066]="COLOR_ATTACHMENT2",_[_.COLOR_ATTACHMENT3=36067]="COLOR_ATTACHMENT3",_[_.COLOR_ATTACHMENT4=36068]="COLOR_ATTACHMENT4",_[_.COLOR_ATTACHMENT5=36069]="COLOR_ATTACHMENT5",_[_.COLOR_ATTACHMENT6=36070]="COLOR_ATTACHMENT6",_[_.COLOR_ATTACHMENT7=36071]="COLOR_ATTACHMENT7",_[_.COLOR_ATTACHMENT8=36072]="COLOR_ATTACHMENT8",_[_.COLOR_ATTACHMENT9=36073]="COLOR_ATTACHMENT9",_[_.COLOR_ATTACHMENT10=36074]="COLOR_ATTACHMENT10",_[_.COLOR_ATTACHMENT11=36075]="COLOR_ATTACHMENT11",_[_.COLOR_ATTACHMENT12=36076]="COLOR_ATTACHMENT12",_[_.COLOR_ATTACHMENT13=36077]="COLOR_ATTACHMENT13",_[_.COLOR_ATTACHMENT14=36078]="COLOR_ATTACHMENT14",_[_.COLOR_ATTACHMENT15=36079]="COLOR_ATTACHMENT15"}(X||(X={})),function(_){_[_.NONE=0]="NONE",_[_.BACK=1029]="BACK"}(f||(f={}));const t=33306;var c,o,u,i,e,r,W;!function(_){_[_.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",_[_.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",_[_.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",_[_.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",_[_.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",_[_.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",_[_.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",_[_.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",_[_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",_[_.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",_[_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"}(c||(c={})),function(_){_[_.FLOAT=5126]="FLOAT",_[_.FLOAT_VEC2=35664]="FLOAT_VEC2",_[_.FLOAT_VEC3=35665]="FLOAT_VEC3",_[_.FLOAT_VEC4=35666]="FLOAT_VEC4",_[_.INT=5124]="INT",_[_.INT_VEC2=35667]="INT_VEC2",_[_.INT_VEC3=35668]="INT_VEC3",_[_.INT_VEC4=35669]="INT_VEC4",_[_.BOOL=35670]="BOOL",_[_.BOOL_VEC2=35671]="BOOL_VEC2",_[_.BOOL_VEC3=35672]="BOOL_VEC3",_[_.BOOL_VEC4=35673]="BOOL_VEC4",_[_.FLOAT_MAT2=35674]="FLOAT_MAT2",_[_.FLOAT_MAT3=35675]="FLOAT_MAT3",_[_.FLOAT_MAT4=35676]="FLOAT_MAT4",_[_.SAMPLER_2D=35678]="SAMPLER_2D",_[_.SAMPLER_CUBE=35680]="SAMPLER_CUBE",_[_.UNSIGNED_INT=5125]="UNSIGNED_INT",_[_.UNSIGNED_INT_VEC2=36294]="UNSIGNED_INT_VEC2",_[_.UNSIGNED_INT_VEC3=36295]="UNSIGNED_INT_VEC3",_[_.UNSIGNED_INT_VEC4=36296]="UNSIGNED_INT_VEC4",_[_.FLOAT_MAT2x3=35685]="FLOAT_MAT2x3",_[_.FLOAT_MAT2x4=35686]="FLOAT_MAT2x4",_[_.FLOAT_MAT3x2=35687]="FLOAT_MAT3x2",_[_.FLOAT_MAT3x4=35688]="FLOAT_MAT3x4",_[_.FLOAT_MAT4x2=35689]="FLOAT_MAT4x2",_[_.FLOAT_MAT4x3=35690]="FLOAT_MAT4x3",_[_.SAMPLER_3D=35679]="SAMPLER_3D",_[_.SAMPLER_2D_SHADOW=35682]="SAMPLER_2D_SHADOW",_[_.SAMPLER_2D_ARRAY=36289]="SAMPLER_2D_ARRAY",_[_.SAMPLER_2D_ARRAY_SHADOW=36292]="SAMPLER_2D_ARRAY_SHADOW",_[_.SAMPLER_CUBE_SHADOW=36293]="SAMPLER_CUBE_SHADOW",_[_.INT_SAMPLER_2D=36298]="INT_SAMPLER_2D",_[_.INT_SAMPLER_3D=36299]="INT_SAMPLER_3D",_[_.INT_SAMPLER_CUBE=36300]="INT_SAMPLER_CUBE",_[_.INT_SAMPLER_2D_ARRAY=36303]="INT_SAMPLER_2D_ARRAY",_[_.UNSIGNED_INT_SAMPLER_2D=36306]="UNSIGNED_INT_SAMPLER_2D",_[_.UNSIGNED_INT_SAMPLER_3D=36307]="UNSIGNED_INT_SAMPLER_3D",_[_.UNSIGNED_INT_SAMPLER_CUBE=36308]="UNSIGNED_INT_SAMPLER_CUBE",_[_.UNSIGNED_INT_SAMPLER_2D_ARRAY=36311]="UNSIGNED_INT_SAMPLER_2D_ARRAY"}(o||(o={})),function(_){_[_.OBJECT_TYPE=37138]="OBJECT_TYPE",_[_.SYNC_CONDITION=37139]="SYNC_CONDITION",_[_.SYNC_STATUS=37140]="SYNC_STATUS",_[_.SYNC_FLAGS=37141]="SYNC_FLAGS"}(u||(u={})),function(_){_[_.UNSIGNALED=37144]="UNSIGNALED",_[_.SIGNALED=37145]="SIGNALED"}(i||(i={})),function(_){_[_.ALREADY_SIGNALED=37146]="ALREADY_SIGNALED",_[_.TIMEOUT_EXPIRED=37147]="TIMEOUT_EXPIRED",_[_.CONDITION_SATISFIED=37148]="CONDITION_SATISFIED",_[_.WAIT_FAILED=37149]="WAIT_FAILED"}(e||(e={})),function(_){_[_.SYNC_GPU_COMMANDS_COMPLETE=37143]="SYNC_GPU_COMMANDS_COMPLETE"}(r||(r={})),function(_){_[_.SYNC_FLUSH_COMMANDS_BIT=1]="SYNC_FLUSH_COMMANDS_BIT"}(W||(W={}));


/***/ })

};
;