"use strict";
exports.id = 8721;
exports.ids = [8721];
exports.modules = {

/***/ 52712:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ u),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports O, U, Z, b, d, e, g, h, i, j, k, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(){return[0,0,0,0]}function t(n){return[n[0],n[1],n[2],n[3]]}function r(n,t,r,e){return[n,t,r,e]}function e(t,r=n()){const e=Math.min(4,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(n,t){return new Float64Array(n,t,4)}function a(){return n()}function o(){return r(1,1,1,1)}function s(){return r(1,0,0,0)}function i(){return r(0,1,0,0)}function c(){return r(0,0,1,0)}function f(){return r(0,0,0,1)}const l=a(),_=o(),N=s(),O=i(),T=c(),U=f(),b=Object.freeze(Object.defineProperty({__proto__:null,ONES:_,UNIT_W:U,UNIT_X:N,UNIT_Y:O,UNIT_Z:T,ZEROS:l,clone:t,create:n,createView:u,fromArray:e,fromValues:r,ones:o,unitW:f,unitX:s,unitY:i,unitZ:c,zeros:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 42965:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ t),
/* harmony export */   my: () => (/* binding */ i),
/* harmony export */   tM: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports getZeroIndexArray, newIntArray */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t){if((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(t);let i=!0,f=!0;return t.some(((r,n)=>(i=i&&0===r,f=f&&r===n,!i&&!f))),i?A(t.length):f?l(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)||t.BYTES_PER_ELEMENT!==Uint16Array.BYTES_PER_ELEMENT?e(t):t}function e(n){let t=!0;for(const e of n){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(n)?new Uint32Array(n):n;e>=256&&(t=!1)}return t?new Uint8Array(n):new Uint16Array(n)}function i(r){return r<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(r):r<=65536?new Uint16Array(r):new Uint32Array(r)}function f(r){return r<=n?new Array(r):new Uint32Array(r)}let a=(()=>{const r=new Uint32Array(131072);for(let n=0;n<r.length;++n)r[n]=n;return r})();const u=[0],o=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function l(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(new Uint16Array(o.buffer,0,r));if(r<o.length)return new Uint16Array(o.buffer,0,r);if(r>a.length){const n=Math.max(2*a.length,r);a=new Uint32Array(n);for(let r=0;r<a.length;r++)a[r]=r}return new Uint32Array(a.buffer,0,r)}let y=new Uint8Array(65536);function A(r){if(1===r)return u;if(r<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return new Array(r).fill(0);if(r>y.length){const n=Math.max(2*y.length,r);y=new Uint8Array(n)}return new Uint8Array(y.buffer,0,r)}


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
/* harmony export */   l5: () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports InterleavedBuffer, InterleavedLayout */
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

/***/ 58947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O_: () => (/* binding */ i),
/* harmony export */   vA: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports isTranslationMatrix, logWithBase, project, rayRay2D, setMatrixTranslation3, verify */
/* harmony import */ var _chunks_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78286);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25102);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52712);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=(0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();class e{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,n){if(!t){n=n||"Assertion";const t=new Error(n).stack;throw new e(`${n} at ${t}`)}}function c(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function i(t,n,r,o){let e,s=(r[0]-t[0])/n[0],c=(o[0]-t[0])/n[0];s>c&&(e=s,s=c,c=e);let i=(r[1]-t[1])/n[1],f=(o[1]-t[1])/n[1];if(i>f&&(e=i,i=f,f=e),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let u=(r[2]-t[2])/n[2],a=(o[2]-t[2])/n[2];return u>a&&(e=u,u=a,a=e),!(s>a||u>c)&&(a<c&&(c=a),!(c<0))}function f(n,r,o,e,s,c=t()){const i=(e[s]-o[s])*(r[0]-n[0])-(e[0]-o[0])*(r[s]-n[s]),f=(e[0]-o[0])*(n[s]-o[s])-(e[s]-o[s])*(n[0]-o[0]);if(0===i)return!1;const u=f/i;return c[0]=n[0]+u*(r[0]-n[0]),c[1]=n[s]+u*(r[s]-n[s]),!0}function u(t,r,e,c,i){o[0]=t[0],o[1]=t[1],o[2]=t[2],o[3]=1,n(o,o,r),i.length>2&&(i[2]=-o[2]),n(o,o,e),s(0!==o[3]),i[0]=o[0]/o[3],i[1]=o[1]/o[3],i[2]=o[2]/o[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function a(t,n){return Math.log(t)/Math.log(n)}function h(t,n,r,o){t[12]=n,t[13]=r,t[14]=o}function l(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


/***/ }),

/***/ 50645:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export affectsGeometry */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;function E(E){return E===e.POSITION}!function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(e||(e={}));


/***/ }),

/***/ 78721:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ o)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/buffer/InterleavedLayout.js
var InterleavedLayout = __webpack_require__(11110);
;// ../node_modules/@arcgis/core/views/3d/support/buffer/workerHelper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function u(r,u){return u.push(r.buffer),{buffer:r.buffer,layout:new InterleavedLayout/* PackedLayout */.l5(r.layout)}}function t(e){return new r(e.layout).createView(e.buffer)}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js
var bufferLayouts = __webpack_require__(58914);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js
var edgePreprocessing = __webpack_require__(27226);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js + 2 modules
var edgeProcessing = __webpack_require__(11215);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeProcessingWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=(0,edgeProcessing/* extract */.o6)(t),r=[t.data.buffer];return{result:l(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const s=c(t),i=(0,edgeProcessing/* extractEdgeInformation */.hx)(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=(0,edgePreprocessing/* extractEdges */.K)(i,p,g),o=[];return{result:u(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const s=c(t),i=(0,edgeProcessing/* extractEdgeInformation */.hx)(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=(0,edgePreprocessing/* extractEdges */.K)(i,f,g),o=[];return{result:u(a.regular.instancesData,o),transferList:o}}}function c(e){return{data:bufferLayouts/* EdgeInputBufferLayout */.I$.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:u(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class EdgeProcessingWorker_u{allocate(e){return edgeProcessing/* extractEdgeLocationsLayout */.Jb.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}}class d{allocate(e){return edgeProcessing/* extractComponentsEdgeLocationsLayout */.HY.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}}const f=new EdgeProcessingWorker_u,p=new d,g={allocate:()=>null,write:()=>{},trim:()=>null};


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

/***/ 69955:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,h,o,e=!1,r=0){this.name=t,this.count=s,this.type=i,this.offset=h,this.stride=o,this.normalized=e,this.divisor=r}}


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