"use strict";
exports.id = 8467;
exports.ids = [8467];
exports.modules = {

/***/ 42965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ t),
/* harmony export */   EH: () => (/* binding */ A),
/* harmony export */   JH: () => (/* binding */ f),
/* harmony export */   my: () => (/* binding */ i),
/* harmony export */   tM: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t){if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(t);let i=!0,f=!0;return t.some(((r,n)=>(i=i&&0===r,f=f&&r===n,!i&&!f))),i?A(t.length):f?l(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?e(t):t}function e(n){let t=!0;for(const e of n){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(n)?new Uint32Array(n):n;e>=256&&(t=!1)}return t?new Uint8Array(n):new Uint16Array(n)}function i(r){return r<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}function f(r){return r<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(r):new Uint32Array(r)}let a=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const u=[0],o=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function l(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(new Uint16Array(o.buffer,0,r));if(r<o.length)return new Uint16Array(o.buffer,0,r);if(r>a.length){const n=Math.max(2*a.length,r);a=new Uint32Array(n);for(let r=0;r<a.length;r++)a[r]=r}return new Uint32Array(a.buffer,0,r)}let y=new Uint8Array(65536);function A(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return new Array(r).fill(0);if(r>y.length){const n=Math.max(2*y.length,r);y=new Uint8Array(n)}return new Uint8Array(y.buffer,0,r)}


/***/ }),

/***/ 57813:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y$: () => (/* binding */ y),
  qB: () => (/* binding */ o),
  Qt: () => (/* binding */ k),
  My: () => (/* binding */ C),
  bf: () => (/* binding */ j),
  jZ: () => (/* binding */ l),
  j0: () => (/* binding */ a),
  Sx: () => (/* binding */ p),
  E$: () => (/* binding */ b),
  h: () => (/* binding */ g),
  P: () => (/* binding */ B),
  SL: () => (/* binding */ d),
  gH: () => (/* binding */ u),
  si: () => (/* binding */ m),
  mJ: () => (/* binding */ q),
  UL: () => (/* binding */ D),
  D6: () => (/* binding */ V),
  Yi: () => (/* binding */ w),
  An: () => (/* binding */ F),
  LC: () => (/* binding */ A),
  xs: () => (/* binding */ i),
  Xm: () => (/* binding */ T),
  Vp: () => (/* binding */ v),
  zD: () => (/* binding */ G),
  m8: () => (/* binding */ M),
  nS: () => (/* binding */ E),
  H$: () => (/* binding */ I),
  eI: () => (/* binding */ O),
  Eq: () => (/* binding */ c),
  Aj: () => (/* binding */ h),
  E7: () => (/* binding */ z),
  Y4: () => (/* binding */ H),
  TX: () => (/* binding */ S),
  Uz: () => (/* binding */ L),
  ml: () => (/* binding */ U),
  XP: () => (/* binding */ x)
});

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}t.ElementCount=9;

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Mat4_t{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<16;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}Mat4_t.ElementCount=16;

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Scalar_t{constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}Scalar_t.ElementCount=1;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2.js
var vec2 = __webpack_require__(58680);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2.s)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=2;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Vec3_e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec3.s)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}Vec3_e.ElementCount=3;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Vec4_e{constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec4.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}Vec4_e.ElementCount=4;

;// ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class y extends Scalar_t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}static fromTypedArray(e,t){return new y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}y.ElementType="f32";class u extends e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(u,e,t)}static fromTypedArray(e,t){return new u(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}u.ElementType="f32";class i extends Vec3_e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(i,e,t)}static fromTypedArray(e,t){return new i(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}i.ElementType="f32";class c extends Vec4_e{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(c,e,t)}static fromTypedArray(e,t){return new c(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}c.ElementType="f32";class l extends t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(l,e,t)}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class a extends t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(a,e,t)}static fromTypedArray(e,t){return new a(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}a.ElementType="f64";class p extends Mat4_t{constructor(e,t=0,r,s){super(Float32Array,e,t,r,s),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class b extends Mat4_t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class o extends Scalar_t{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}o.ElementType="f64";class m extends e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class T extends Vec3_e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f64";class h extends Vec4_e{constructor(e,t=0,r,s){super(Float64Array,e,t,r,s),this.elementType="f64"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f64";class d extends Scalar_t{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="u8";class A extends e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="u8";class O extends Vec3_e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class x extends Vec4_e{constructor(e,t=0,r,s){super(Uint8Array,e,t,r,s),this.elementType="u8"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u8";class g extends Scalar_t{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="u16";class w extends e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class E extends Vec3_e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="u16";class L extends Vec4_e{constructor(e,t=0,r,s){super(Uint16Array,e,t,r,s),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u16";class B extends Scalar_t{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="u32";class F extends e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class I extends Vec3_e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="u32";class U extends Vec4_e{constructor(e,t=0,r,s){super(Uint32Array,e,t,r,s),this.elementType="u32"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="u32";class j extends Scalar_t{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class V extends e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i8";class M extends Vec3_e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="i8";class S extends Vec4_e{constructor(e,t=0,r,s){super(Int8Array,e,t,r,s),this.elementType="i8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="i8";class k extends Scalar_t{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i16";class q extends e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class v extends Vec3_e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="i16";class z extends Vec4_e{constructor(e,t=0,r,s){super(Int16Array,e,t,r,s),this.elementType="i16"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i16";class C extends Scalar_t{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="i32";class D extends e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(D,e,t)}static fromTypedArray(e,t){return new D(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}D.ElementType="i32";class G extends Vec3_e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(G,e,t)}static fromTypedArray(e,t){return new G(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}G.ElementType="i32";class H extends Vec4_e{constructor(e,t=0,r,s){super(Int32Array,e,t,r,s),this.elementType="i32"}slice(e,t){return this.sliceBuffer(H,e,t)}static fromTypedArray(e,t){return new H(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}H.ElementType="i32";


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

/***/ 6214:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $e: () => (/* binding */ y),
/* harmony export */   j1: () => (/* binding */ p),
/* harmony export */   mO: () => (/* binding */ g),
/* harmony export */   vt: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports copy, fromLineSegmentAndDirection, fromValues, getAt, wrap */
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21839);
/* harmony import */ var _ray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(r){return r?{ray:(0,_ray_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(r.ray),c0:r.c0,c1:r.c1}:{ray:(0,_ray_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),c0:0,c1:Number.MAX_VALUE}}function i(r,c,n){const t=A.get();return t.ray=r,t.c0=c,t.c1=n,t}function s(r,c=a()){return f(r.ray,r.c0,r.c1,c)}function f(r,c,n,t=a()){return e(r,t.ray),t.c0=c,t.c1=n,t}function y(r,c=a()){return (0,_ray_js__WEBPACK_IMPORTED_MODULE_1__/* .copy */ .C)(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function m(r,n,t=a()){const o=c(r.vector);return u(r.origin,n,t.ray),t.c0=0,t.c1=o,t}function p(r,c){return j(r,r.c0,c)}function g(r,c){return j(r,r.c1,c)}function j(r,c,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.g)(o,r.ray.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.i)(o,r.ray.direction,c))}const A=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_2__/* .ObjectStack */ .I((()=>a()));


/***/ }),

/***/ 94982:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ u),
/* harmony export */   FB: () => (/* binding */ l),
/* harmony export */   ig: () => (/* binding */ m),
/* harmony export */   m7: () => (/* binding */ P),
/* harmony export */   ui: () => (/* binding */ L),
/* harmony export */   vt: () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports NumPlanes, NumPoints, PointIndex, computePlanes, createPoints, intersectsLineSegment, intersectsPoint, intersectsRay, planePointIndices */
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(92114);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37046);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52712);
/* harmony import */ var _clipRay_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6214);
/* harmony import */ var _plane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38774);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function I(T){return T?[(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[0]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[1]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[2]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[3]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[4]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(T[5])]:[(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)()]}function N(){return[(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()]}function u(T,_){for(let O=0;O<v;O++)(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .copy */ .C)(T[O],_[O]);return T}function L(T,t,E,F=S){const r=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.m)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_7__/* .sm4d */ .Rc.get(),t,T);(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_0__.i)(r,r);for(let _=0;_<g;++_){const T=(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_3__.t)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_7__/* .sv4d */ .Km.get(),b[_],r);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.s)(F[_],T[0]/T[3],T[1]/T[3],T[2]/T[3])}s(E,F)}function s(T,_){(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[k.FAR_BOTTOM_LEFT],_[k.NEAR_BOTTOM_LEFT],_[k.NEAR_TOP_LEFT],T[l.LEFT]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[k.NEAR_BOTTOM_RIGHT],_[k.FAR_BOTTOM_RIGHT],_[k.FAR_TOP_RIGHT],T[l.RIGHT]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[k.FAR_BOTTOM_LEFT],_[k.FAR_BOTTOM_RIGHT],_[k.NEAR_BOTTOM_RIGHT],T[l.BOTTOM]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[k.NEAR_TOP_LEFT],_[k.NEAR_TOP_RIGHT],_[k.FAR_TOP_RIGHT],T[l.TOP]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[k.NEAR_BOTTOM_LEFT],_[k.NEAR_BOTTOM_RIGHT],_[k.NEAR_TOP_RIGHT],T[l.NEAR]),(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .fromPoints */ .Cr)(_[k.FAR_BOTTOM_RIGHT],_[k.FAR_BOTTOM_LEFT],_[k.FAR_TOP_LEFT],T[l.FAR])}function P(T,_){for(let O=0;O<v;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return!1}return!0}function i(T,_){return j(T,r(_,y.get()))}function m(T,_){for(let O=0;O<v;O++){const R=T[O];if(!(0,_plane_js__WEBPACK_IMPORTED_MODULE_6__/* .clipInfinite */ .b6)(R,_))return!1}return!0}function a(T,_,O){return j(T,n(_,O,y.get()))}function p(T,_){for(let O=0;O<v;O++){if(B(T[O],_)>0)return!1}return!0}function j(T,_){for(let O=0;O<v;O++)if(!M(T[O],_))return!1;return!0}var l,k;!function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR"}(l||(l={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(k||(k={}));const h={bottom:[k.FAR_BOTTOM_RIGHT,k.NEAR_BOTTOM_RIGHT,k.NEAR_BOTTOM_LEFT,k.FAR_BOTTOM_LEFT],near:[k.NEAR_BOTTOM_LEFT,k.NEAR_BOTTOM_RIGHT,k.NEAR_TOP_RIGHT,k.NEAR_TOP_LEFT],far:[k.FAR_BOTTOM_RIGHT,k.FAR_BOTTOM_LEFT,k.FAR_TOP_LEFT,k.FAR_TOP_RIGHT],right:[k.NEAR_BOTTOM_RIGHT,k.FAR_BOTTOM_RIGHT,k.FAR_TOP_RIGHT,k.NEAR_TOP_RIGHT],left:[k.FAR_BOTTOM_LEFT,k.NEAR_BOTTOM_LEFT,k.NEAR_TOP_LEFT,k.FAR_TOP_LEFT],top:[k.FAR_TOP_LEFT,k.NEAR_TOP_LEFT,k.NEAR_TOP_RIGHT,k.FAR_TOP_RIGHT]},v=6,g=8,b=[(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(-1,-1,-1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(1,-1,-1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(1,1,-1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(-1,1,-1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(-1,-1,1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(1,-1,1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(1,1,1,1),(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(-1,1,1,1)],y=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_8__/* .ObjectStack */ .I(_clipRay_js__WEBPACK_IMPORTED_MODULE_5__/* .create */ .vt),S=N();


/***/ }),

/***/ 22759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ p),
/* harmony export */   Cr: () => (/* binding */ b),
/* harmony export */   H6: () => (/* binding */ d),
/* harmony export */   _I: () => (/* binding */ l),
/* harmony export */   dz: () => (/* binding */ B),
/* harmony export */   fA: () => (/* binding */ h),
/* harmony export */   kb: () => (/* binding */ M),
/* harmony export */   ld: () => (/* binding */ k),
/* harmony export */   sd: () => (/* binding */ A),
/* harmony export */   vt: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports closestLineSegmentDistance2, distance, wrap */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.origin),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.vector)}:{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}function m(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function p(t,r=v()){return h(t.origin,t.vector,r)}function h(t,r,o=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.vector,r),o}function b(t,r,i=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(i.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(i.vector,r,t),i}function M(r,n){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),n,r.origin),s=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(r.vector,c),u=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(r.vector,r.vector),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(s/u,0,1),g=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),r.vector,a),c);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(g,g)}function j(t,r){return Math.sqrt(M(t,r))}function l(t,r,n){return d(t,r,0,1,n)}function A(t,r,n){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(n,t.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(n,t.vector,r))}function d(r,n,u,a,g){const{vector:v,origin:m}=r,p=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),n,m),h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(v,p)/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.m)(v);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(h,u,a)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(g,g,r.origin)}function B(t,r){if(q(t,m(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)(t.origin,n);if(r>1)return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,s=r.origin,a=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),s,r.vector),g=n.origin,v=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),g,n.vector),m=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),p=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get();if(m[0]=s[0]-g[0],m[1]=s[1]-g[1],m[2]=s[2]-g[2],p[0]=v[0]-g[0],p[1]=v[1]-g[1],p[2]=v[2]-g[2],Math.abs(p[0])<e&&Math.abs(p[1])<e&&Math.abs(p[2])<e)return!1;const h=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get();if(h[0]=a[0]-s[0],h[1]=a[1]-s[1],h[2]=a[2]-s[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const b=m[0]*p[0]+m[1]*p[1]+m[2]*p[2],M=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],j=m[0]*h[0]+m[1]*h[1]+m[2]*h[2],l=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],A=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*l-M*M;if(Math.abs(A)<e)return!1;let d=(b*M-j*l)/A,B=(b+M*d)/l;o&&(d=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(d,0,1),B=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(B,0,1));const k=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),S=_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get();return k[0]=s[0]+d*h[0],k[1]=s[1]+d*h[1],k[2]=s[2]+d*h[2],S[0]=g[0]+B*p[0],S[1]=g[1]+B*p[1],S[2]=g[2]+B*p[2],i.tA=d,i.tB=B,i.pA=k,i.pB=S,i.distance2=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.a)(k,S),!0}const w={tA:0,tB:0,pA:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),pB:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>v()));


/***/ }),

/***/ 52209:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,s,u){const c=Array.isArray(e),a=c?e.length/s:e.byteLength/(4*s),h=c?e:new Uint32Array(e,0,a*s),y=u?.minReduction??0,A=u?.originalIndices||null,g=A?A.length:0,m=u?.componentOffsets||null;let w=0;if(m)for(let t=0;t<m.length-1;t++){const n=m[t+1]-m[t];n>w&&(w=n)}else w=a;const U=Math.floor(1.1*w)+1;(null==i||i.length<2*U)&&(i=new Uint32Array((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .nextHighestPowerOfTwo */ .cU)(2*U)));for(let t=0;t<2*U;t++)i[t]=0;let b=0;const d=!!m&&!!A,p=d?g:a;let M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(a);const j=new Uint32Array(g),q=1.96;let I=0!==y?Math.ceil(4*q*q/(y*y)*y*(1-y)):p,k=1,x=m?m[1]:p;for(let t=0;t<p;t++){if(t===I){const n=1-b/t;if(n+q*Math.sqrt(n*(1-n)/t)<y)return null;I*=2}if(t===x){for(let t=0;t<2*U;t++)i[t]=0;if(A)for(let t=m[k-1];t<m[k];t++)j[t]=M[A[t]];x=m[++k]}const n=d?A[t]:t,r=n*s,e=f(h,r,s);let o=e%U,u=b;for(;0!==i[2*o+1];){if(i[2*o]===e){const t=i[2*o+1]-1;if(l(h,r,t*s,s)){u=M[t];break}}o++,o>=U&&(o-=U)}u===b&&(i[2*o]=e,i[2*o+1]=n+1,b++),M[n]=u}if(0!==y&&1-b/a<y)return null;if(d){for(let t=m[k-1];t<j.length;t++)j[t]=M[A[t]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactIndices */ .Dg)(j)}const C=c?new Array(b):new Uint32Array(b*s);b=0;for(let t=0;t<p;t++)if(M[t]===b){o(h,(d?A[t]:t)*s,C,b*s,s),b++}if(A&&!d){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=M[A[n]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactIndices */ .Dg)(t)}return{buffer:Array.isArray(C)?C:C.buffer,indices:M,uniqueCount:b}}function l(t,n,r,e){for(let l=0;l<e;l++)if(t[n+l]!==t[r+l])return!1;return!0}function o(t,n,r,e,l){for(let o=0;o<l;o++)r[e+o]=t[n+o]}function f(t,n,r){let e=0;for(let l=0;l<r;l++)e=t[n+l]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let i=null;


/***/ }),

/***/ 11110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BP: () => (/* binding */ H),
/* harmony export */   l5: () => (/* binding */ I),
/* harmony export */   q3: () => (/* binding */ G)
/* harmony export */ });
/* unused harmony export InterleavedBuffer */
/* harmony import */ var _geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57813);
/* harmony import */ var _geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32846);
/* harmony import */ var _webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class D{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const s of e.fields.keys()){const t=e.fields.get(s);this[s]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const s=this[e];return s&&s.elementCount===t.ElementCount&&s.elementType===t.ElementType?s:null}slice(e,t){return new D(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t=0,s=0,i=e.count){const r=this.stride;if(r%4==0){const n=new Uint32Array(e.buffer,t*r,i*r/4);new Uint32Array(this.buffer,s*r,i*r/4).set(n)}else{const n=new Uint8Array(e.buffer,t*r,i*r);new Uint8Array(this.buffer,s*r,i*r).set(n)}return this}get usedMemory(){return this.byteLength}dispose(){}}class G{constructor(e=null){this._stride=0,this._lastAligned=0,this._fields=new Map,e&&(this._stride=e.stride,e.fields.forEach((e=>this._fields.set(e[0],{...e[1],constructor:N(e[1].constructor)}))))}vec2f(t,s){return this._appendField(t,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f */ .gH,s),this}vec2f64(e,s){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f64 */ .si,s),this}vec3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f */ .xs,t),this}vec3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f64 */ .Xm,t),this}vec4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f */ .Eq,t),this}vec4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f64 */ .Aj,t),this}mat3f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f */ .jZ,t),this}mat3f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f64 */ .j0,t),this}mat4f(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f */ .Sx,t),this}mat4f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f64 */ .E$,t),this}vec4u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u8 */ .XP,t),this}f32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat */ .Y$,t),this}f64(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat64 */ .qB,t),this}u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint8 */ .SL,t),this}u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint16 */ .h,t),this}i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt8 */ .bf,t),this}vec2i8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i8 */ .D6,t),this}vec2i16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i16 */ .mJ,t),this}vec2u8(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u8 */ .LC,t),this}vec4u16(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u16 */ .Uz,t),this}u32(e,t){return this._appendField(e,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint32 */ .P,t),this}_appendField(e,t,s){if(this._fields.has(e))return void (0,_webgl_engine_lib_Util_js__WEBPACK_IMPORTED_MODULE_1__/* .assert */ .vA)(!1,`${e} already added to vertex buffer layout`);const i=t.ElementCount*(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_2__/* .elementTypeSize */ .GJ)(t.ElementType),r=this._stride;this._stride+=i,this._fields.set(e,{size:i,constructor:t,offset:r,optional:s})}createBuffer(e){return new D(this,e)}createView(e){return new D(this,e)}clone(){const e=new G;return e._stride=this._stride,e._fields=new Map,this._fields.forEach(((t,s)=>e._fields.set(s,t))),e.BufferType=this.BufferType,e}get stride(){if(this._lastAligned!==this._fields.size){let e=1;this._fields.forEach((t=>e=Math.max(e,(0,_geometry_support_buffer_types_js__WEBPACK_IMPORTED_MODULE_2__/* .elementTypeSize */ .GJ)(t.constructor.ElementType)))),this._stride=Math.floor((this._stride+e-1)/e)*e,this._lastAligned=this._fields.size}return this._stride}get fields(){return this._fields}}function H(){return new G}class I{constructor(e){this.fields=new Array,e.fields.forEach(((e,t)=>{const s={...e,constructor:K(e.constructor)};this.fields.push([t,s])})),this.stride=e.stride}}const J=[_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat */ .Y$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f */ .gH,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f */ .xs,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f */ .Eq,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f */ .jZ,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f */ .Sx,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewFloat64 */ .qB,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2f64 */ .si,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3f64 */ .Xm,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4f64 */ .Aj,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat3f64 */ .j0,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewMat4f64 */ .E$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint8 */ .SL,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u8 */ .LC,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3u8 */ .eI,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u8 */ .XP,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint16 */ .h,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u16 */ .Yi,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3u16 */ .nS,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u16 */ .Uz,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewUint32 */ .P,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2u32 */ .An,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3u32 */ .H$,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4u32 */ .ml,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt8 */ .bf,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i8 */ .D6,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3i8 */ .m8,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4i8 */ .TX,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt16 */ .Qt,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i16 */ .mJ,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3i16 */ .Vp,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4i16 */ .E7,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewInt32 */ .My,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec2i32 */ .UL,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec3i32 */ .zD,_geometry_support_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_0__/* .BufferViewVec4i32 */ .Y4];function K(e){return`${e.ElementType}_${e.ElementCount}`}function N(e){return O.get(e)}const O=new Map;J.forEach((e=>O.set(K(e),e)));


/***/ }),

/***/ 15788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41746);
/* harmony import */ var _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69955);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r(e,r=0){const n=e.stride;return Array.from(e.fields.keys()).map((i=>{const s=e.fields.get(i),u=s.constructor.ElementCount,f=o(s.constructor.ElementType),c=s.offset,l=!(!s.optional||!s.optional.glNormalized);return new _webgl_VertexElementDescriptor_js__WEBPACK_IMPORTED_MODULE_1__/* .VertexElementDescriptor */ ._(i,u,f,c,n,l,r)}))}function o(e){const t=n[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const n={u8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.UNSIGNED_BYTE,u16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.UNSIGNED_SHORT,u32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.UNSIGNED_INT,i8:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.BYTE,i16:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.SHORT,i32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.INT,f32:_webgl_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .DataType */ .pe.FLOAT};


/***/ }),

/***/ 91337:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ W)
/* harmony export */ });
/* harmony import */ var _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90086);
/* harmony import */ var _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63678);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22279);
/* harmony import */ var _geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94982);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32532);
/* harmony import */ var _chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96245);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58947);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new g,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),g.clearPool(),B[0]=null,P.prune(),H.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const o=g.acquire();for(let n=0;n<t;n++){const t=e[n];this._isDegenerate(t)?this._degenerateObjects.add(t):(o.init(this._root),this._add(t,o))}g.release(o)}remove(e,t=null){this._objectCount-=e.length;const o=g.acquire();for(const n of e){const e=null!=t?t:(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.h)(this.objectToBoundingSphere(n),w);E(e[3])?(o.init(this._root),this._remove(n,e,o)):this._degenerateObjects.delete(n)}g.release(o),this._shrink()}update(e,t){if(!E(t[3])&&this._isDegenerate(e))return;const o=R(e);this.remove(o,t),this.add(o)}forEachAlongRay(e,t,o){const n=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__/* .wrap */ .LV)(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(n,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(n,e)&&o(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(n,e)&&o(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,o,n){const i=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_5__/* .wrap */ .LV)(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,n))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e)})),!0}))}forEach(e){this._forEachNode(this._root,(t=>{const o=t.node;return o.terminals.forAll(e),null!==o.residents&&o.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,i,s=(()=>!0),r=1/0){let h=1/0,a=1/0,l=null;const u=T(e,t),c=o=>{if(--r,!s(o))return;const n=this.objectToBoundingSphere(o);if(!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(i,n))return;const u=z(e,t,(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(n)),c=u-n[3],m=u+n[3];c<h&&(h=c,a=m,l=o)};return this._forEachNodeDepthOrdered(this._root,(s=>{if(r<=0||!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(i,s.bounds))return!1;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,u,s.halfSize),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(v,v,s.bounds);if(z(e,t,v)>a)return!1;const h=s.node;return h.terminals.forAll((e=>c(e))),null!==h.residents&&h.residents.forAll((e=>c(e))),!0}),e,t),l}forEachInDepthRange(e,t,i,s,r,h,a){let l=-1/0,u=1/0;const c={setRange:e=>{i===b.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,e.near),u=Math.min(u,e.far)):(l=Math.max(l,-e.far),u=Math.min(u,-e.near))}};c.setRange(s);const m=z(t,i,e),_=T(t,i),p=T(t,-i),g=e=>{if(!a(e))return;const o=this.objectToBoundingSphere(e),n=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(o),s=z(t,i,n)-m,_=s-o[3],p=s+o[3];_>u||p<l||!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(h,o)||r(e,c)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!(0,_geometry_support_frustum_js__WEBPACK_IMPORTED_MODULE_4__/* .intersectsSphere */ .m7)(h,e.bounds))return!1;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,_,e.halfSize),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(v,v,e.bounds);if(z(t,i,v)-m>u)return!1;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.i)(v,p,e.halfSize),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.g)(v,v,e.bounds);if(z(t,i,v)-m<l)return!1;const s=e.node;return s.terminals.forAll((e=>g(e))),null!==s.residents&&s.residents.forAll((e=>g(e))),!0}),t,i)}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)))}forEachNeighbor(e,t){const o=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(t),n=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(t),s=t=>{const s=this.objectToBoundingSphere(t),r=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(s),h=o+r;return!((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(s),n)-h*h<=0)||e(t)};let r=!0;const h=e=>{r&&(r=s(e))};this._forEachNode(this._root,(e=>{const t=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.a)(e.bounds),s=o+t;if((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.g)(e.bounds),n)-s*s>0)return!1;const a=e.node;return a.terminals.forAll(h),r&&null!==a.residents&&a.residents.forAll(h),r})),r&&this.forEachDegenerateObject(h)}_intersectsNode(e,t){return j(t.bounds,2*-t.halfSize,C),j(t.bounds,2*t.halfSize,y),(0,_Util_js__WEBPACK_IMPORTED_MODULE_7__/* .rayBoxTest */ .O_)(e.origin,e.direction,C,y)}_intersectsNodeWithOffset(e,t,o){return j(t.bounds,2*-t.halfSize,C),j(t.bounds,2*t.halfSize,y),o.applyToMinMax(C,y),(0,_Util_js__WEBPACK_IMPORTED_MODULE_7__/* .rayBoxTest */ .O_)(e.origin,e.direction,C,y)}_intersectsObject(e,t){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.j)(o,e)}_intersectsObjectWithOffset(e,t,o){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.j)(o.applyToBoundingSphere(n),e)}_forEachNode(e,t){let o=g.acquire().init(e);const n=[o];for(;0!==n.length;){if(o=n.pop(),t(o)&&!o.isLeaf())for(let e=0;e<o.node.children.length;e++){o.node.children[e]&&n.push(g.acquire().init(o).advance(e))}g.release(o)}}_forEachNodeDepthOrdered(e,t,o,n=b.DepthOrder.FRONT_TO_BACK){let i=g.acquire().init(e);const s=[i];for(N(o,n,K);0!==s.length;){if(i=s.pop(),t(i)&&!i.isLeaf())for(let e=7;e>=0;--e){const t=K[e];i.node.children[t]&&s.push(g.acquire().init(i).advance(t))}g.release(i)}}_remove(e,t,o){P.clear();const n=o.advanceTo(t,((e,t)=>{P.push(e.node),P.push(t)}))?o.node.terminals:o.node.residents;if(n.removeUnordered(e),0===n.length)for(let i=P.length-2;i>=0;i-=2){const e=P.data[i],t=P.data[i+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}_purge(e,o){return o>=0&&(e.children[o]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({shrink:!0})),!0)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let o=0;o<t.length;o++){const n=g.acquire().init(e);this._add(t.at(o),n),g.release(n)}}_grow(e,t){if(0!==t&&(x(e,t,(e=>this.objectToBoundingSphere(e)),k),E(k[3])&&!this._fitsInsideTree(k)))if(this._nodeIsEmpty(this._root.node))(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.h)(k,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const e=this._rootBoundsForRootAsSubNode(k);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(k,e):this._growRootAsSubNode(e),g.release(e)}}_rebuildTree(e,t){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(q,t.bounds),q[3]=t.halfSize,x([e,q],2,(e=>e),I);const o=g.acquire().init(this._root);this._root.initFrom(null,I,I[3]),this._root.increaseHalfSize(1.25),this._forEachNode(o,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),g.release(o)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return this._forEachNode(this._root,(e=>(o=Math.max(o,e.depth),o+t<=this._maximumDepth))),o+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],o=e;let n=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let h=0;h<3;h++){const e=i[h]-s-(o[h]-t),r=o[h]+t-(i[h]+s),a=Math.max(0,Math.ceil(e/(2*s))),d=Math.max(0,Math.ceil(r/(2*s)))+1,l=2**Math.ceil(Math.log(a+d)*Math.LOG2E);n=Math.max(n,l),L[h].min=a,L[h].max=d}for(let h=0;h<3;h++){let e=L[h].min,t=L[h].max;const o=(n-(e+t))/2;e+=Math.ceil(o),t+=Math.floor(o);const r=i[h]-s-e*s*2;F[h]=r+(t+e)*s}const r=n*s;return F[3]=r*A,g.acquire().initFrom(null,F,r,0)}_growRootAsSubNode(e){const t=this._root.node;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(k,this._root.bounds),k[3]=this._root.halfSize,this._root.init(e),e.advanceTo(k,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let o=0,n=0;for(;n<t.length&&null==e;)o=n++,e=t[o];for(;n<t.length;)if(t[n++])return-1;return o}_isDegenerate(e){return!E(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,o=this._root.halfSize;return e[3]<=o&&e[0]>=t[0]-o&&e[0]<=t[0]+o&&e[1]>=t[1]-o&&e[1]<=t[1]+o&&e[2]>=t[2]-o&&e[2]<=t[2]+o}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:o}=this,n=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:o,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:n}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),o=e.residents?.map((e=>this.objectToBoundingSphere(e))),n=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return{children:t,residents:o,terminals:n}}static fromJSON(e){const t=new b((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class g{constructor(){this.bounds=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,o,n=this.depth){return this.node=null!=e?e:g.createEmptyNode(),null!=t&&(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.h)(t,this.bounds),this.halfSize=o,this.depth=n,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*A}advance(e){let t=this.node.children[e];t||(t=g.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const o=M[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,o=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!o)return t&&t(this,-1),!1;this.node.residents=null}const n=this._childIndex(e);t&&t(this,n),this.advance(n)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({shrink:!0}),residents:new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({shrink:!0})}}static acquire(){return g._pool.acquire()}static release(e){g._pool.release(e)}static clearPool(){g._pool.prune()}}function S(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function O(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function j(e,t,o){o[0]=e[0]+t,o[1]=e[1]+t,o[2]=e[2]+t}function x(e,t,o,n){if(1===t){const t=o(e[0]);(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.h)(t,n)}else{C[0]=1/0,C[1]=1/0,C[2]=1/0,y[0]=-1/0,y[1]=-1/0,y[2]=-1/0;for(let n=0;n<t;n++){const t=o(e[n]);E(t[3])&&(S(C,t),O(y,t))}(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.p)(n,C,y,.5),n[3]=Math.max(y[0]-C[0],y[1]-C[1],y[2]-C[2])/2}}function N(e,t,o){if(!H.length)for(let n=0;n<8;++n)H.push({index:0,distance:0});for(let n=0;n<8;++n){const o=M[n];H.data[n].index=n,H.data[n].distance=z(e,t,o)}H.sort(((e,t)=>e.distance-t.distance));for(let n=0;n<8;++n)o[n]=H.data[n].index}function T(e,t){let o,n=1/0;for(let i=0;i<8;++i){const s=z(e,t,D[i]);s<n&&(n=s,o=D[i])}return o}function z(e,t,o){return t*(e[0]*o[0]+e[1]*o[1]+e[2]*o[2])}function E(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}g._pool=new _core_ObjectPool_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(g),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(b||(b={}));const M=[(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,-1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,-1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,-1,1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,-1,1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,1,1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,1,1)],D=[(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,-1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,-1,1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(-1,1,1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,-1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,-1,1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,1,-1),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.f)(1,1,1)],A=Math.sqrt(3),B=[null];function R(e){return B[0]=e,B}const F=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),v=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),C=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),y=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),P=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,w=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),k=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),q=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),I=(0,_chunks_sphere_js__WEBPACK_IMPORTED_MODULE_6__.c)(),L=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],H=new _core_PooledArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,K=[0,0,0,0,0,0,0,0],W=b;


/***/ }),

/***/ 58914:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I$: () => (/* binding */ T),
/* harmony export */   In: () => (/* binding */ S),
/* harmony export */   gr: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports EdgeShaderAttributeLocations, VertexLayout, glVertexLayout */
/* harmony import */ var _support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15788);
/* harmony import */ var _support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11110);
/* harmony import */ var _VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50645);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const T=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__/* .newLayout */ .BP)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.COMPONENTINDEX),A=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__/* .newLayout */ .BP)().vec2u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.SIDENESS),E=(0,_support_buffer_glUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .glLayout */ .U)(A),e=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__/* .newLayout */ .BP)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION1).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMAL).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTEXTENSION,{glNormalized:!0}),S=(0,_support_buffer_InterleavedLayout_js__WEBPACK_IMPORTED_MODULE_1__/* .newLayout */ .BP)().vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION0).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION1).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMALA).vec3f(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMALB).u16(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.COMPONENTINDEX).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTOFFSET,{glNormalized:!0}).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTSTROKE).u8(_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTEXTENSION,{glNormalized:!0}),r=new Map([[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION0,0],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.POSITION1,1],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.COMPONENTINDEX,2],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTOFFSET,3],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTSTROKE,4],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.VARIANTEXTENSION,5],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMAL,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMALA,6],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMALB,7],[_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.SIDENESS,8]]);


/***/ }),

/***/ 27226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export EdgeType */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m=-1;var u;function p(n,a,i,l=V){const f=n.vertices.position,g=n.vertices.componentIndex,u=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .deg2rad */ .kU)(l.anglePlanar),p=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .deg2rad */ .kU)(l.angleSignificantEdge),y=Math.cos(p),E=Math.cos(u),N=I.edge,S=N.position0,j=N.position1,x=N.faceNormal0,D=N.faceNormal1,F=w(n),C=d(n),L=C.length/4,b=a.allocate(L);let k=0;const H=L,K=i.allocate(H);let M=0,O=0,P=0;const T=(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .range */ .y1)(0,L),U=new Float32Array(L);U.forEach(((e,t,n)=>{f.getVec(C[4*t],S),f.getVec(C[4*t+1],j),n[t]=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.o)(S,j)})),T.sort(((e,t)=>U[t]-U[e]));const q=new Array,z=new Array;for(let e=0;e<L;e++){const t=T[e],n=U[t],o=C[4*t],l=C[4*t+1],p=C[4*t+2],d=C[4*t+3],w=d===m;if(f.getVec(o,S),f.getVec(l,j),w)(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(x,F[3*p],F[3*p+1],F[3*p+2]),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(D,x),N.componentIndex=g.get(o),N.cosAngle=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.j)(x,D);else{if((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(x,F[3*p],F[3*p+1],F[3*p+2]),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.s)(D,F[3*d],F[3*d+1],F[3*d+2]),N.componentIndex=g.get(o),N.cosAngle=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.j)(x,D),v(N,E))continue;N.cosAngle<-.9999&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.c)(D,x)}O+=n,P++,w||h(N,y)?(a.write(b,k++,N),q.push(n)):A(N,u)&&(i.write(K,M++,N),z.push(n))}const B=new Float32Array(q.reverse()),G=new Float32Array(z.reverse());return{regular:{instancesData:a.trim(b,k),lodInfo:{lengths:B}},silhouette:{instancesData:i.trim(K,M),lodInfo:{lengths:G}},averageEdgeLength:O/P}}function h(e,t){return e.cosAngle<t}function v(e,t){return e.cosAngle>t}function A(e,t){const o=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .acosClamped */ .XM)(e.cosAngle),c=I.fwd,r=I.ortho;(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.C)(c,e.position1,e.position0);return o*((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.j)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(r,e.faceNormal0,e.faceNormal1),c)>0?-1:1)>t}function d(e){const t=e.faces.length/3,n=e.faces,o=e.neighbors;let c=0;for(let a=0;a<t;a++){const e=o[3*a],t=o[3*a+1],r=o[3*a+2],s=n[3*a],i=n[3*a+1],l=n[3*a+2];c+=e===m||s<i?1:0,c+=t===m||i<l?1:0,c+=r===m||l<s?1:0}const r=new Int32Array(4*c);let s=0;for(let a=0;a<t;a++){const e=o[3*a],t=o[3*a+1],c=o[3*a+2],i=n[3*a],l=n[3*a+1],f=n[3*a+2];(e===m||i<l)&&(r[s++]=i,r[s++]=l,r[s++]=a,r[s++]=e),(t===m||l<f)&&(r[s++]=l,r[s++]=f,r[s++]=a,r[s++]=t),(c===m||f<i)&&(r[s++]=f,r[s++]=i,r[s++]=a,r[s++]=c)}return r}function w(e){const t=e.faces.length/3,n=e.vertices.position,o=e.faces,c=y.v0,r=y.v1,s=y.v2,a=new Float32Array(3*t);for(let g=0;g<t;g++){const e=o[3*g],t=o[3*g+1],m=o[3*g+2];n.getVec(e,c),n.getVec(t,r),n.getVec(m,s),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(r,r,c),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.f)(s,s,c),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.b)(c,r,s),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_2__.n)(c,c),a[3*g]=c[0],a[3*g+1]=c[1],a[3*g+2]=c[2]}return a}!function(e){e[e.SOLID=0]="SOLID",e[e.SKETCH=1]="SKETCH"}(u||(u={}));const I={edge:{position0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),position1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),faceNormal0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),faceNormal1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),componentIndex:0,cosAngle:0},ortho:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),fwd:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)()},y={v0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),v1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),v2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)()},V={anglePlanar:4,angleSignificantEdge:35};


/***/ }),

/***/ 11215:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  o6: () => (/* binding */ edgeProcessing_f),
  HY: () => (/* binding */ edgeProcessing_m),
  hx: () => (/* binding */ edgeProcessing_u),
  Jb: () => (/* binding */ edgeProcessing_d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js
var deduplicate = __webpack_require__(52209);
;// ../node_modules/@arcgis/core/views/3d/support/meshProcessing.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,o,n){const r=o/3,c=new Uint32Array(n+1),e=new Uint32Array(n+1),s=(t,o)=>{t<o?c[t+1]++:e[o+1]++};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];s(o,n),s(n,r),s(r,o)}let f=0,l=0;for(let x=0;x<n;x++){const t=c[x+1],o=e[x+1];c[x+1]=f,e[x+1]=l,f+=t,l+=o}const i=new Uint32Array(6*r),a=c[n],w=(t,o,n)=>{if(t<o){const r=c[t+1]++;i[2*r]=o,i[2*r+1]=n}else{const r=e[o+1]++;i[2*a+2*r]=t,i[2*a+2*r+1]=n}};for(let x=0;x<r;x++){const o=t[3*x],n=t[3*x+1],r=t[3*x+2];w(o,n,x),w(n,r,x),w(r,o,x)}const y=(t,o)=>{const n=2*t,r=o-t;for(let c=1;c<r;c++){const t=i[n+2*c],o=i[n+2*c+1];let r=c-1;for(;r>=0&&i[n+2*r]>t;r--)i[n+2*r+2]=i[n+2*r],i[n+2*r+3]=i[n+2*r+1];i[n+2*r+2]=t,i[n+2*r+3]=o}};for(let x=0;x<n;x++)y(c[x],c[x+1]),y(a+e[x],a+e[x+1]);const A=new Int32Array(3*r),U=(o,n)=>o===t[3*n]?0:o===t[3*n+1]?1:o===t[3*n+2]?2:-1,u=(t,o)=>{const n=U(t,o);A[3*o+n]=-1},p=(t,o,n,r)=>{const c=U(t,o);A[3*o+c]=r;const e=U(n,r);A[3*r+e]=o};for(let x=0;x<n;x++){let t=c[x];const o=c[x+1];let n=e[x];const r=e[x+1];for(;t<o&&n<r;){const o=i[2*t],r=i[2*a+2*n];o===r?(p(x,i[2*t+1],r,i[2*a+2*n+1]),t++,n++):o<r?(u(x,i[2*t+1]),t++):(u(r,i[2*a+2*n+1]),n++)}for(;t<o;)u(x,i[2*t+1]),t++;for(;n<r;){u(i[2*a+2*n],i[2*a+2*n+1]),n++}}return A}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js
var bufferLayouts = __webpack_require__(58914);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/glUtil.js
var glUtil = __webpack_require__(15788);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?f:p}write(t,o,e){const n=this._edgeHashFunction(e);y.seed=n;const i=y.getIntRange(0,255),r=y.getIntRange(0,this.settings.variants-1),s=.7,a=y.getFloat(),c=255*(.5*g(-(1-Math.min(a/s,1))+Math.max(0,a-s)/(1-s),1.2)+.5);t.position0.setVec(o,e.position0),t.position1.setVec(o,e.position1),t.componentIndex.set(o,e.componentIndex),t.variantOffset.set(o,i),t.variantStroke.set(o,r),t.variantExtension.set(o,c)}trim(t,o){return t.slice(0,o)}}const c=new Float32Array(6),m=new Uint32Array(c.buffer),u=new Uint32Array(1);function p(t){const o=c;o[0]=t.position0[0],o[1]=t.position0[1],o[2]=t.position0[2],o[3]=t.position1[0],o[4]=t.position1[1],o[5]=t.position1[2],u[0]=5381;for(let e=0;e<m.length;e++)u[0]=31*u[0]+m[e];return u[0]}function f(t){const o=c;o[0]=h(t.position0[0]),o[1]=h(t.position0[1]),o[2]=h(t.position0[2]),o[3]=h(t.position1[0]),o[4]=h(t.position1[1]),o[5]=h(t.position1[2]),u[0]=5381;for(let e=0;e<m.length;e++)u[0]=31*u[0]+m[e];return u[0]}const l=1e4;function h(t){return Math.round(t*l)/l}function g(t,o){const e=t<0?-1:1;return Math.abs(t)**o*e}class d{constructor(){this._commonWriter=new a}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return bufferLayouts/* RegularEdgeInstancesLayout */.gr.createBuffer(t)}write(t,n,i){this._commonWriter.write(t,n,i),(0,vec3.g)(_,i.faceNormal0,i.faceNormal1),(0,vec3.n)(_,_),t.normal.setVec(n,_)}trim(t,o){return this._commonWriter.trim(t,o)}}d.Layout=bufferLayouts/* RegularEdgeInstancesLayout */.gr,d.glLayout=(0,glUtil/* glLayout */.U)(bufferLayouts/* RegularEdgeInstancesLayout */.gr,1);class w{constructor(){this._commonWriter=new a}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return bufferLayouts/* SilhouetteEdgeInstancesLayout */.In.createBuffer(t)}write(t,o,e){this._commonWriter.write(t,o,e),t.normalA.setVec(o,e.faceNormal0),t.normalB.setVec(o,e.faceNormal1)}trim(t,o){return this._commonWriter.trim(t,o)}}w.Layout=bufferLayouts/* SilhouetteEdgeInstancesLayout */.In,w.glLayout=(0,glUtil/* glLayout */.U)(bufferLayouts/* SilhouetteEdgeInstancesLayout */.In,1);const _=(0,vec3f64.c)(),y=new RandomLCG/* default */.A;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js
var edgePreprocessing = __webpack_require__(27226);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function edgeProcessing_f(e){const t=edgeProcessing_u(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return edgeProcessing_g.updateSettings(e.writerSettings),edgeProcessing_a.updateSettings(e.writerSettings),(0,edgePreprocessing/* extractEdges */.K)(t,edgeProcessing_g,edgeProcessing_a)}function edgeProcessing_u(r,i,n,o){if(i){const e=t(n,o,r.count);return new edgeProcessing_p(n,o,e,r)}const c=(0,deduplicate/* deduplicate */.b)(r.buffer,r.stride/4,{originalIndices:n,originalIndicesLength:o}),f=t(c.indices,o,c.uniqueCount);return{faces:c.indices,facesLength:c.indices.length,neighbors:f,vertices:bufferLayouts/* EdgeInputBufferLayout */.I$.createView(c.buffer)}}class edgeProcessing_p{constructor(e,t,r,i){this.faces=e,this.facesLength=t,this.neighbors=r,this.vertices=i}}const edgeProcessing_g=new d,edgeProcessing_a=new w,edgeProcessing_d=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION0).vec3f(VertexAttribute/* VertexAttribute */.r.POSITION1),edgeProcessing_m=(0,InterleavedLayout/* newLayout */.BP)().vec3f(VertexAttribute/* VertexAttribute */.r.POSITION0).vec3f(VertexAttribute/* VertexAttribute */.r.POSITION1).u16(VertexAttribute/* VertexAttribute */.r.COMPONENTINDEX);


/***/ }),

/***/ 58467:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ f)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/lineSegment.js
var lineSegment = __webpack_require__(22759);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
var Octree = __webpack_require__(91337);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js + 2 modules
var edgeProcessing = __webpack_require__(11215);
;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const sceneLayerSnappingUtils_t=1e3;function sceneLayerSnappingUtils_e(t,e,a){const m=(0,sphere.c)(),p=(0,sphere.g)(m);return (0,vec3.q)(p,p,t,.5),(0,vec3.q)(p,p,e,.5),m[3]=(0,vec3.o)(p,t),(0,vec3.g)(p,p,a),m}

;// ../node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let _=class{constructor(){this._idToComponent=new Map,this._components=new Octree/* default */.A((e=>e.bounds)),this._edges=new Octree/* default */.A((e=>e.bounds)),this._tmpLineSegment=(0,lineSegment/* create */.vt)(),this._tmpP1=(0,vec3f64.c)(),this._tmpP2=(0,vec3f64.c)(),this._tmpP3=(0,vec3f64.c)(),this.remoteClient=null}async fetchCandidates(e,s){await Promise.resolve(),(0,promiseUtils/* throwIfAborted */.Te)(s),await this._ensureEdgeLocations(e,s);const o=[];return this._edges.forEachNeighbor((t=>(this._addCandidates(e,t,o),o.length<sceneLayerSnappingUtils_t)),e.bounds),{result:{candidates:o}}}async _ensureEdgeLocations(e,t){const s=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:o}=e;s.push({id:t,uid:o})}return!0}),e.bounds),!s.length)return;const o={components:s},n=await this.remoteClient.invoke("fetchAllEdgeLocations",o,t??{});for(const i of n.components)this._setFetchEdgeLocations(i)}async add(e){const t=new b(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((s=>(s.component===t&&e.push(s),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if(null==t||e.uid!==t.uid)return;const s=edgeProcessing/* extractComponentsEdgeLocationsLayout */.HY.createView(e.locations),o=new Array(s.count),n=(0,vec3f64.c)(),r=(0,vec3f64.c)();for(let i=0;i<s.count;i++){s.position0.getVec(i,n),s.position1.getVec(i,r);const d=sceneLayerSnappingUtils_e(n,r,e.origin),c=new j(t,i,d);o[i]=c}this._edges.add(o);const{objectIds:d,origin:c}=e;t.info={locations:s,objectIds:d,origin:c}}_addCandidates(e,t,s){const{info:n}=t.component,{origin:i,objectIds:r}=n,d=n.locations,c=d.position0.getVec(t.index,this._tmpP1),a=d.position1.getVec(t.index,this._tmpP2);(0,vec3.g)(c,c,i),(0,vec3.g)(a,a,i);const p=r[d.componentIndex.get(t.index)];this._addEdgeCandidate(e,p,c,a,s),this._addVertexCandidate(e,p,c,s),this._addVertexCandidate(e,p,a,s)}_addEdgeCandidate(e,t,s,o,i){if(!e.returnEdge)return;const d=(0,sphere.g)(e.bounds),h=(0,lineSegment/* fromPoints */.Cr)(s,o,this._tmpLineSegment),m=(0,lineSegment/* projectPoint */._I)(h,d,this._tmpP3);(0,sphere.n)(e.bounds,m)&&i.push({type:"edge",objectId:t,target:(0,vec3f64.g)(m),distance:(0,vec3.o)(d,m),start:(0,vec3f64.g)(s),end:(0,vec3f64.g)(o)})}_addVertexCandidate(e,t,s,o){if(!e.returnVertex)return;const i=(0,sphere.g)(e.bounds);(0,sphere.n)(e.bounds,s)&&o.push({type:"vertex",objectId:t,target:(0,vec3f64.g)(s),distance:(0,vec3.o)(i,s)})}};_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],_);const f=_;class b{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++b.uid}}b.uid=0;class j{constructor(e,t,s){this.component=e,this.index=t,this.bounds=s}}


/***/ })

};
;