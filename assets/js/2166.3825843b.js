"use strict";
exports.id = 2166;
exports.ids = [2166];
exports.modules = {

/***/ 76287:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   c: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports b, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function t(e,r,t,n,o,a,u,c,f){return[e,r,t,n,o,a,u,c,f]}function n(e,r){return new Float64Array(e,r,9)}const o=Object.freeze(Object.defineProperty({__proto__:null,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 56192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function t(e,r,t,n,o,a,u,c,f,l,s,i,b,_,m,p){return[e,r,t,n,o,a,u,c,f,l,s,i,b,_,m,p]}function n(e,r){return new Float64Array(e,r,16)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 46991:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ o),
/* harmony export */   a: () => (/* binding */ e),
/* harmony export */   b: () => (/* binding */ r),
/* harmony export */   c: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports f, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function r(e){return[e[0],e[1],e[2],e[3]]}function t(e,r,t,n){return[e,r,t,n]}function n(e,r){return new Float64Array(e,r,4)}const o=e(),a=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:r,create:e,createView:n,fromValues:t},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 96245:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ B),
/* harmony export */   c: () => (/* binding */ E),
/* harmony export */   f: () => (/* binding */ V),
/* harmony export */   g: () => (/* binding */ U),
/* harmony export */   h: () => (/* binding */ T),
/* harmony export */   j: () => (/* binding */ J),
/* harmony export */   n: () => (/* binding */ it)
/* harmony export */ });
/* unused harmony exports A, B, C, N, b, d, e, i, k, l, m, o, p, q, r, s, t, u, v, w, x, y, z */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92504);
/* harmony import */ var _mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37046);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25102);
/* harmony import */ var _vec4f64_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(52712);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57137);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(32532);
/* harmony import */ var _geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(16597);
/* harmony import */ var _geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const w=E();function E(){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.c)()}const L=_vec4_js__WEBPACK_IMPORTED_MODULE_6__.e,O=_vec4_js__WEBPACK_IMPORTED_MODULE_6__.e;function T(t,n=E()){return (0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(n,t)}function k(t,n){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(t[0],t[1],t[2],n)}function z(t){return t}function N(t){t[0]=t[1]=t[2]=t[3]=0}function Z(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t}function B(t){return t[3]}function U(t){return t}function V(t,n,r,o){return (0,_vec4f64_js__WEBPACK_IMPORTED_MODULE_7__.f)(t,n,r,o)}function X(t,n,r){return t!==r&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(r,t),r[3]=t[3]+n,r}function Y(n,r,o){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),n===o?o:T(n,o)}function D(t,n,r){if(null==n)return!1;if(!H(t,n,G))return!1;let{t0:o,t1:e}=G;if((o<0||e<o&&e>0)&&(o=e),o<0)return!1;if(r){const{origin:t,direction:e}=n;r[0]=t[0]+e[0]*o,r[1]=t[1]+e[1]*o,r[2]=t[2]+e[2]*o}return!0}function F(t,n,r){const o=(0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .fromPoints */ .Cr)(n,r);if(!H(t,o,G))return[];const{origin:e,direction:s}=o,{t0:i,t1:c}=G,a=n=>{const r=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.q)(r,e,s,n),$(t,r,r)};return Math.abs(i-c)<(0,_common_js__WEBPACK_IMPORTED_MODULE_8__.g)()?[a(i)]:[a(i),a(c)]}const G={t0:0,t1:0};function H(t,n,r){const{origin:o,direction:e}=n,s=I;s[0]=o[0]-t[0],s[1]=o[1]-t[1],s[2]=o[2]-t[2];const i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2];if(0===i)return!1;const c=2*(e[0]*s[0]+e[1]*s[1]+e[2]*s[2]),a=c*c-4*i*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const u=Math.sqrt(a);return r.t0=(-c-u)/(2*i),r.t1=(-c+u)/(2*i),!0}const I=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();function J(t,n){return D(t,n,null)}function K(t,n,r){if(D(t,n,r))return r;const o=Q(t,n,_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get());return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(r,n.origin,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n.direction,(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.o)(n.origin,o)/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(n.direction))),r}function Q(t,n,r){const e=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),s=_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sm4d */ .Rc.get();(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(e,n.origin,n.direction);const c=B(t);(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.b)(r,e,n.origin),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(r,r,1/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(r)*c);const m=nt(t,n.origin),p=(0,_geometry_support_vector_js__WEBPACK_IMPORTED_MODULE_11__/* .angle */ .g7)(n.origin,r);return (0,_mat4_js__WEBPACK_IMPORTED_MODULE_3__.c)(s,p+m,e),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.e)(r,r,s),r}function W(t,n,r){return D(t,n,r)?r:((0,_geometry_support_ray_js__WEBPACK_IMPORTED_MODULE_10__/* .closestPoint */ .oC)(n,U(t),r),$(t,r,r))}function $(t,n,r){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,U(t)),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),o,t[3]/(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(o));return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(r,e,U(t))}function tt(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),n,U(t)),o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.m)(r),e=t[3]*t[3];return Math.sqrt(Math.abs(o-e))}function nt(t,r){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(_geometry_support_vectorStacks_js__WEBPACK_IMPORTED_MODULE_12__/* .sv3d */ .rq.get(),r,U(t)),e=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(o),s=B(t),i=s+Math.abs(s-e);return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .acosClamped */ .XM)(s/i)}const rt=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)();function ot(t,n,o,e){const s=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(rt,n,U(t));switch(o){case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.X:{const t=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .cartesianToSpherical */ .jU)(s,rt)[2];return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,-Math.sin(t),Math.cos(t),0)}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Y:{const t=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .cartesianToSpherical */ .jU)(s,rt),n=t[1],o=t[2],i=Math.sin(n);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(e,-i*Math.cos(o),-i*Math.sin(o),Math.cos(n))}case _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Z:return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(e,s);default:return}}function et(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.f)(at,n,U(t));return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.l)(r)-t[3]}function st(t,n,r,o){const e=et(t,n),c=ot(t,n,_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_9__/* .Axis */ ._.Z,at),a=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.i)(at,c,r-e);return (0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.g)(o,n,a)}function it(t,n){const r=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.a)(U(t),n),o=B(t);return r<=o*o}function ct(t,n,r=E()){const o=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.o)(t,n),e=t[3],s=n[3];return o+s<e?((0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,t),r):o+e<s?((0,_vec4_js__WEBPACK_IMPORTED_MODULE_6__.c)(r,n),r):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.p)(r,t,n,(o+s-e)/(2*o)),r[3]=(o+e+s)/2,r)}const at=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:w,altitudeAt:et,angleToSilhouette:nt,axisAt:ot,clear:N,closestPoint:W,closestPointOnSilhouette:Q,containsPoint:it,copy:T,create:E,distanceToSilhouette:tt,elevate:X,equals:O,exactEquals:L,fromCenterAndRadius:k,fromRadius:Z,fromValues:V,getCenter:U,getRadius:B,intersectLine:F,intersectRay:D,intersectRayClosestSilhouette:K,intersectsRay:J,projectPoint:$,setAltitudeAt:st,setExtent:Y,tmpSphere:ut,union:ct,wrap:z},Symbol.toStringTag,{value:"Module"}));


/***/ }),

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

/***/ 84858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ E)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var E;!function(E){E[E.KILOBYTES=1024]="KILOBYTES",E[E.MEGABYTES=1048576]="MEGABYTES",E[E.GIGABYTES=1073741824]="GIGABYTES"}(E||(E={}));


/***/ }),

/***/ 92114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37103);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024;


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

/***/ 22759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ b),
/* harmony export */   _I: () => (/* binding */ l),
/* harmony export */   vt: () => (/* binding */ v)
/* harmony export */ });
/* unused harmony exports closestLineSegmentDistance2, closestLineSegmentPoint, closestRayDistance2, copy, distance, distance2, fromValues, pointAt, projectPointClamp, wrap */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function v(t){return t?{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.origin),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(t.vector)}:{origin:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),vector:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)()}}function m(t,r){const n=x.get();return n.origin=t,n.vector=r,n}function p(t,r=v()){return h(t.origin,t.vector,r)}function h(t,r,o=v()){return n(o.origin,t),n(o.vector,r),o}function b(t,r,i=v()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(i.origin,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(i.vector,r,t),i}function M(r,n){const c=o(f.get(),n,r.origin),s=i(r.vector,c),u=i(r.vector,r.vector),a=t(s/u,0,1),g=o(f.get(),e(f.get(),r.vector,a),c);return i(g,g)}function j(t,r){return Math.sqrt(M(t,r))}function l(t,r,n){return d(t,r,0,1,n)}function A(t,r,n){return c(n,t.origin,e(n,t.vector,r))}function d(r,n,u,a,g){const{vector:v,origin:m}=r,p=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__/* .sv3d */ .rq.get(),n,m),h=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(v,p)/(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.m)(v);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(g,v,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(h,u,a)),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(g,g,r.origin)}function B(t,r){if(q(t,m(r.origin,r.direction),!1,w)){const{tA:r,pB:n,distance2:o}=w;if(r>=0&&r<=1)return o;if(r<0)return u(t.origin,n);if(r>1)return u(c(f.get(),t.origin,t.vector),n)}return null}function k(t,r,o){return!!q(t,r,!0,w)&&(n(o,w.pA),!0)}function S(t,r){return q(t,r,!0,w)?w.distance2:null}function q(r,n,o,i){const e=1e-6,s=r.origin,a=c(f.get(),s,r.vector),g=n.origin,v=c(f.get(),g,n.vector),m=f.get(),p=f.get();if(m[0]=s[0]-g[0],m[1]=s[1]-g[1],m[2]=s[2]-g[2],p[0]=v[0]-g[0],p[1]=v[1]-g[1],p[2]=v[2]-g[2],Math.abs(p[0])<e&&Math.abs(p[1])<e&&Math.abs(p[2])<e)return!1;const h=f.get();if(h[0]=a[0]-s[0],h[1]=a[1]-s[1],h[2]=a[2]-s[2],Math.abs(h[0])<e&&Math.abs(h[1])<e&&Math.abs(h[2])<e)return!1;const b=m[0]*p[0]+m[1]*p[1]+m[2]*p[2],M=p[0]*h[0]+p[1]*h[1]+p[2]*h[2],j=m[0]*h[0]+m[1]*h[1]+m[2]*h[2],l=p[0]*p[0]+p[1]*p[1]+p[2]*p[2],A=(h[0]*h[0]+h[1]*h[1]+h[2]*h[2])*l-M*M;if(Math.abs(A)<e)return!1;let d=(b*M-j*l)/A,B=(b+M*d)/l;o&&(d=t(d,0,1),B=t(B,0,1));const k=f.get(),S=f.get();return k[0]=s[0]+d*h[0],k[1]=s[1]+d*h[1],k[2]=s[2]+d*h[2],S[0]=g[0]+B*p[0],S[1]=g[1]+B*p[1],S[2]=g[2]+B*p[2],i.tA=d,i.tB=B,i.pA=k,i.pB=S,i.distance2=u(k,S),!0}const w={tA:0,tB:0,pA:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),pB:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),distance2:0},x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>v()));


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

/***/ 80530:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  vt: () => (/* binding */ plane_b),
  lU: () => (/* binding */ X),
  qb: () => (/* binding */ ot)
});

// UNUSED EXPORTS: clip, clipInfinite, copy, distance, equals, exactEquals, fromArray, fromNormalAndOffset, fromPoints, fromPositionAndNormal, fromValues, fromVectorsAndPoint, intersectLine, intersectLineSegment, intersectLineSegmentClamp, intersectPlanes, intersectRay, isPointInside, isPointOutside, isSphereFullyInside, isSphereFullyOutside, isVertical, negate, projectPoint, projectPointLocal, projectVector, setOffsetFromPoint, signedDistance, up, wrap

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/common.js
var common = __webpack_require__(57137);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(16597);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(45573);
;// ../node_modules/@arcgis/core/views/3d/support/mathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function mathUtils_M(t,n){return t>n?Math.cos(n):Math.cos(t)}function mathUtils_e(t,n,s){return 2*Math.atan(s*Math.tan(.5*t)/n)}function mathUtils_m(t,n,s){return 2*Math.atan(n*Math.tan(.5*t)/s)}function mathUtils_p(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],a=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,a))}function mathUtils_j(t,s){const a=Math.sqrt(s[0]*s[0]+s[4]*s[4]+s[8]*s[8]),r=Math.sqrt(s[1]*s[1]+s[5]*s[5]+s[9]*s[9]),o=Math.sqrt(s[2]*s[2]+s[6]*s[6]+s[10]*s[10]);return n(t,a,r,o),t}function l(t,r,o){o=o||t;const c=s(t,r);n(o,t[0]-c*r[0],t[1]-c*r[1],t[2]-c*r[2]),a(o,o)}function q(t,s,o){Math.abs(t[0])>Math.abs(t[1])?n(s,0,1,0):n(s,1,0,0),r(o,t,s),a(s,s),r(s,o,t),a(o,o)}function b(t,n,s,a,r,o){const c=t+(n-t)*r;return c+(s+(a-s)*r-c)*o}function mathUtils_g(t,n,a,r=f()){const h=o(t),M=o(n),e=s(t,n)/(h*M);if(e<.9999999999999999){const s=Math.acos(e),o=((1-a)*h+a*M)/Math.sin(s),i=o/h*Math.sin((1-a)*s),f=o/M*Math.sin(a*s);return c(z,t,i),c(A,n,f),u(r,z,A)}return i(r,t,n,a)}function k(t,n,r,M=f(),e=f()){const m=o(t),p=o(n),j=s(t,n)/(m*p);if(j<.9999999999999999){const s=Math.acos(j),a=Math.sin(s),o=Math.sin(r*s),i=Math.sin((1-r)*s),h=(1-r)*m+r*p;{const s=h/a,r=s/p*o;c(z,t,s/m*i),c(A,n,r),u(M,z,A)}{const f=1/m*(-Math.cos((1-r)*s)*s*h+i*(-m+p));c(z,t,f);const M=1/p*(Math.cos(r*s)*s*h+o*(-m+p));c(A,n,M),u(e,z,A),c(e,e,1/a)}return e}return i(M,t,n,r),h(e,n,t),a(e,e),e}function v(n,o,c){n=a(z,n),o=a(A,o);const u=t(s(n,o));if(c){const t=r(y,n,o);if(s(t,c)<0)return-u}return u}function x(t){const n=t.length;return s=>{if(s<=t[0][0])return t[0][1];if(s>=t[n-1][0])return t[n-1][1];let a=1;for(;s>t[a][0];)a++;const r=t[a-1][0],o=t[a][0],c=(o-s)/(o-r);return c*t[a-1][1]+(1-c)*t[a][1]}}function U(t,n,o,c){h(d,n,t),h(w,o,t),r(c,d,w),a(c,c),c[3]=-s(t,c)}const d=(0,vec3f64.c)(),w=(0,vec3f64.c)(),y=(0,vec3f64.c)(),z=(0,vec3f64.c)(),A=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/geometry/support/plane.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function plane_b(t=ut){return[t[0],t[1],t[2],t[3]]}const plane_l=(/* unused pure expression or super */ null && (N)),plane_v=(/* unused pure expression or super */ null && (M));function plane_A(t=ut[0],n=ut[1],r=ut[2],o=ut[3]){return T(t,n,r,o,p.get())}function F(t,n){return T(n[0],n[1],n[2],n[3],t)}function T(t,n,r,o,c=plane_b()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function _(t,r,o){return n(o,t),o[3]=r,o}function plane_k(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function plane_d(t,n,r,o=plane_b()){const c=r[0]-n[0],u=r[1]-n[1],e=r[2]-n[2],i=t[0]-n[0],s=t[1]-n[1],f=t[2]-n[2],a=u*f-e*s,I=e*i-c*f,N=c*s-u*i,M=a*a+I*I+N*N,h=Math.abs(M-1)>1e-5&&M>1e-12?1/Math.sqrt(M):1;return o[0]=a*h,o[1]=I*h,o[2]=N*h,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function X(t,n,e,i=0,s=Math.floor(e*(1/3)),f=Math.floor(e*(2/3))){if(e<3)return!1;n(L,i);let a=s,I=!1;for(;a<e-1&&!I;)n(P,a),a++,I=!(0,vec3.h)(L,P);if(!I)return!1;for(a=Math.max(a,f),I=!1;a<e&&!I;)n(O,a),a++,(0,vec3.f)(plane_q,L,P),(0,vec3.n)(plane_q,plane_q),(0,vec3.f)(plane_x,P,O),(0,vec3.n)(plane_x,plane_x),I=!(0,vec3.h)(L,O)&&!(0,vec3.h)(P,O)&&Math.abs((0,vec3.j)(plane_q,plane_x))<C;return I?(plane_d(L,P,O,t),!0):(0!==i||1!==s||2!==f)&&X(t,n,e,0,1,2)}function plane_y(t,n,r=!0){const o=n.length/3;return X(t,((t,r)=>e(t,n[3*r+0],n[3*r+1],n[3*r+2])),r?o-1:o)}const C=.99619469809,L=(0,vec3f64.c)(),P=(0,vec3f64.c)(),O=(0,vec3f64.c)(),plane_q=(0,vec3f64.c)(),plane_x=(0,vec3f64.c)();function plane_U(t,n,r){return n!==t&&F(t,n),t[3]=-u(ot(t),r),t}function plane_w(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function S(t,n,r,o){return i(O,n,t),plane_k(r,O,o)}function plane_z(t,n,r,c){return rt(t,n,o(E.get(),r,n),it,c)}function B(t,n,r){return null!=n&&rt(t,n.origin,n.direction,st,r)}function D(t,n,r){return rt(t,n.origin,n.vector,et.NONE,r)}function G(t,n,r){return rt(t,n.origin,n.vector,et.CLAMP,r)}const H=(()=>{const t=(0,vec3f64.c)();return(r,o,u)=>{const e=ot(r),f=ot(o);(0,vec3.b)(t,e,f);if((0,vec3.m)(t)<(0,common.g)())return!1;(0,vec3.n)(t,t);const[a,I,N]=t,M=u.origin,m=Math.abs(a),g=Math.abs(I),p=Math.abs(N),[E,j,b]=e,[l,v,A]=f,F=r[3],T=o[3];return m>g&&m>p?(M[1]=(T*b-F*A)/a,M[2]=(F*v-T*j)/a):g>p?(M[0]=(F*A-T*b)/I,M[2]=(T*E-F*l)/I):(M[0]=(T*j-F*v)/N,M[1]=(F*l-T*E)/N),(0,vec3.c)(u.direction,t),!0}})();function J(t,n){return nt(t,m(n))-n[3]>=0}function K(t,n){return nt(t,m(n))+n[3]<0}function Q(t,n){return nt(t,n)>=0}function R(t,n){return nt(t,n)<0}function V(t,n){const r=u(ot(t),n.ray.direction),o=-nt(t,n.ray.origin);if(o<0&&r>=0)return!1;if(r>-1e-6&&r<1e-6)return o>0;if((o<0||r<0)&&!(o<0&&r<0))return!0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function W(t,n){const r=u(ot(t),n.ray.direction),o=-nt(t,n.ray.origin);if(r>-1e-6&&r<1e-6)return o>0;const c=o/r;return r>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function Y(t,n,r){const c=f(E.get(),ot(t),-t[3]),u=$(t,o(E.get(),n,c),E.get());return a(r,u,c),r}function Z(t,n,r,c){const u=ot(t),i=E.get(),s=E.get();j(u,i,s);const f=o(E.get(),r,n),a=g(i,f),I=g(s,f),N=g(u,f);return e(c,a,I,N)}function $(t,n,r){const c=f(E.get(),ot(t),u(ot(t),n));return o(r,n,c),r}function tt(t,n){return Math.abs(nt(t,n))}function nt(t,n){return u(ot(t),n)+t[3]}function rt(n,r,o,c,e){const i=u(ot(n),o);if(0===i)return!1;let s=-(u(ot(n),r)+n[3])/i;return c&et.CLAMP&&(s=t(s,0,1)),!(!(c&et.INFINITE_MIN)&&s<0||!(c&et.INFINITE_MAX)&&s>1)&&(a(e,r,f(e,o,s)),!0)}function ot(t){return t}function ct(t){return Math.abs(ot(t)[2])<h()}const ut=[0,0,1,0];var et;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(et||(et={}));const it=et.INFINITE_MIN|et.INFINITE_MAX,st=et.INFINITE_MAX;


/***/ }),

/***/ 32532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cr: () => (/* binding */ h),
/* harmony export */   LV: () => (/* binding */ p),
/* harmony export */   oC: () => (/* binding */ q),
/* harmony export */   vt: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports copy, distance, distance2, equals, fromValues */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function d(i){return i?m((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.origin),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.g)(i.direction)):m((0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)())}function m(i,n){return{origin:i,direction:n}}function j(n,r){return i(n.origin,r.origin)&&i(n.direction,r.direction)}function p(i,n){const r=S.get();return r.origin=i,r.direction=n,r}function k(i,n=d()){return v(i.origin,i.direction,n)}function h(i,n,o=d()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.c)(o.origin,i),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(o.direction,n,i),o}function v(i,n,t=d()){return r(t.origin,i),r(t.direction,n),t}function b(i,n){const r=o(a.get(),c(a.get(),i.direction),t(a.get(),n,i.origin));return e(r,r)}function l(i,n){return Math.sqrt(b(i,n))}function q(i,n,r){const o=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(i.direction,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.f)(r,n,i.origin));return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.g)(r,i.origin,(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.i)(r,i.direction,o)),r}const S=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>d()));


/***/ }),

/***/ 16597:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g7: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports angleAroundAxis, projectPoint, projectPointSignedLength */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(n,r,s){const c=t(n,r)/t(n,n);return o(s,n,c)}function a(n,o){return t(n,o)/r(n)}function e(o,s){const c=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.j)(o,s)/((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(o)*(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_1__.l)(s));return-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(c)}function f(o,r,u){s(m,o),s(h,r);const i=t(m,h),a=n(i),e=c(m,m,h);return t(e,u)<0?2*Math.PI-a:a}const m=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),h=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)();


/***/ }),

/***/ 45573:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rc: () => (/* binding */ f),
  rq: () => (/* binding */ vectorStacks_c)
});

// UNUSED EXPORTS: sm3d, sq4d, sv2d, sv4d

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ByteSizeUnit.js
var ByteSizeUnit = __webpack_require__(84858);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/nextTick.js
var nextTick = __webpack_require__(37103);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/quatf64.js
var quatf64 = __webpack_require__(46991);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec2f64.js
var vec2f64 = __webpack_require__(78286);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
;// ../node_modules/@arcgis/core/core/VectorStack.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class c{constructor(t,e,s){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(s/this._itemByteSize)}get(){0===this._itemsPtr&&(0,nextTick/* nextTick */.d)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=a){return new c(16,vec2f64.c,t)}static createVec3f64(t=a){return new c(24,vec3f64.a,t)}static createVec4f64(t=a){return new c(32,vec4f64.a,t)}static createMat3f64(t=a){return new c(72,mat3f64.c,t)}static createMat4f64(t=a){return new c(128,mat4f64.c,t)}static createQuatf64(t=a){return new c(32,quatf64.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const a=4*ByteSizeUnit/* ByteSizeUnit */.u.KILOBYTES;

;// ../node_modules/@arcgis/core/geometry/support/vectorStacks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=c.createVec2f64(),vectorStacks_c=c.createVec3f64(),r=c.createVec4f64(),vectorStacks_a=c.createMat3f64(),f=c.createMat4f64(),o=c.createQuatf64();


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

/***/ 32166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SceneLayerSnappingSourceWorker_f)
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ObjectPool.js
var ObjectPool = __webpack_require__(90086);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ObjectStack.js
var ObjectStack = __webpack_require__(92114);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4.js
var vec4 = __webpack_require__(25102);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec4f64.js
var vec4f64 = __webpack_require__(52712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(32532);
;// ../node_modules/@arcgis/core/geometry/support/clipRay.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(r){return r?{ray:(0,ray/* create */.vt)(r.ray),c0:r.c0,c1:r.c1}:{ray:(0,ray/* create */.vt)(),c0:0,c1:Number.MAX_VALUE}}function i(r,c,n){const t=clipRay_A.get();return t.ray=r,t.c0=c,t.c1=n,t}function s(r,c=a()){return clipRay_f(r.ray,r.c0,r.c1,c)}function clipRay_f(r,c,n,t=a()){return e(r,t.ray),t.c0=c,t.c1=n,t}function y(r,c=a()){return e(r,c.ray),c.c0=0,c.c1=Number.MAX_VALUE,c}function m(r,n,t=a()){const o=c(r.vector);return u(r.origin,n,t.ray),t.c0=0,t.c1=o,t}function p(r,c){return j(r,r.c0,c)}function g(r,c){return j(r,r.c1,c)}function j(r,c,o){return n(o,r.ray.origin,t(o,r.ray.direction,c))}const clipRay_A=new ObjectStack/* ObjectStack */.I((()=>a()));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/plane.js + 1 modules
var plane = __webpack_require__(80530);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(45573);
;// ../node_modules/@arcgis/core/geometry/support/frustum.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function I(T){return T?[o(T[0]),o(T[1]),o(T[2]),o(T[3]),o(T[4]),o(T[5])]:[o(),o(),o(),o(),o(),o()]}function N(){return[(0,vec3f64.c)(),(0,vec3f64.c)(),(0,vec3f64.c)(),(0,vec3f64.c)(),(0,vec3f64.c)(),(0,vec3f64.c)(),(0,vec3f64.c)(),(0,vec3f64.c)()]}function frustum_u(T,_){for(let O=0;O<v;O++)e(T[O],_[O]);return T}function L(T,t,E,F=S){const r=_(G.get(),t,T);O(r,r);for(let _=0;_<frustum_g;++_){const T=A(H.get(),b[_],r);R(F[_],T[0]/T[3],T[1]/T[3],T[2]/T[3])}frustum_s(E,F)}function frustum_s(T,_){c(_[k.FAR_BOTTOM_LEFT],_[k.NEAR_BOTTOM_LEFT],_[k.NEAR_TOP_LEFT],T[l.LEFT]),c(_[k.NEAR_BOTTOM_RIGHT],_[k.FAR_BOTTOM_RIGHT],_[k.FAR_TOP_RIGHT],T[l.RIGHT]),c(_[k.FAR_BOTTOM_LEFT],_[k.FAR_BOTTOM_RIGHT],_[k.NEAR_BOTTOM_RIGHT],T[l.BOTTOM]),c(_[k.NEAR_TOP_LEFT],_[k.NEAR_TOP_RIGHT],_[k.FAR_TOP_RIGHT],T[l.TOP]),c(_[k.NEAR_BOTTOM_LEFT],_[k.NEAR_BOTTOM_RIGHT],_[k.NEAR_TOP_RIGHT],T[l.NEAR]),c(_[k.FAR_BOTTOM_RIGHT],_[k.FAR_BOTTOM_LEFT],_[k.FAR_TOP_LEFT],T[l.FAR])}function P(T,_){for(let O=0;O<v;O++){const R=T[O];if(R[0]*_[0]+R[1]*_[1]+R[2]*_[2]+R[3]>=_[3])return!1}return!0}function frustum_i(T,_){return frustum_j(T,r(_,frustum_y.get()))}function frustum_m(T,_){for(let O=0;O<v;O++){const R=T[O];if(!f(R,_))return!1}return!0}function frustum_a(T,_,O){return frustum_j(T,n(_,O,frustum_y.get()))}function frustum_p(T,_){for(let O=0;O<v;O++){if(B(T[O],_)>0)return!1}return!0}function frustum_j(T,_){for(let O=0;O<v;O++)if(!M(T[O],_))return!1;return!0}var l,k;!function(T){T[T.LEFT=0]="LEFT",T[T.RIGHT=1]="RIGHT",T[T.BOTTOM=2]="BOTTOM",T[T.TOP=3]="TOP",T[T.NEAR=4]="NEAR",T[T.FAR=5]="FAR"}(l||(l={})),function(T){T[T.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",T[T.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",T[T.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",T[T.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",T[T.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",T[T.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",T[T.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",T[T.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(k||(k={}));const h={bottom:[k.FAR_BOTTOM_RIGHT,k.NEAR_BOTTOM_RIGHT,k.NEAR_BOTTOM_LEFT,k.FAR_BOTTOM_LEFT],near:[k.NEAR_BOTTOM_LEFT,k.NEAR_BOTTOM_RIGHT,k.NEAR_TOP_RIGHT,k.NEAR_TOP_LEFT],far:[k.FAR_BOTTOM_RIGHT,k.FAR_BOTTOM_LEFT,k.FAR_TOP_LEFT,k.FAR_TOP_RIGHT],right:[k.NEAR_BOTTOM_RIGHT,k.FAR_BOTTOM_RIGHT,k.FAR_TOP_RIGHT,k.NEAR_TOP_RIGHT],left:[k.FAR_BOTTOM_LEFT,k.NEAR_BOTTOM_LEFT,k.NEAR_TOP_LEFT,k.FAR_TOP_LEFT],top:[k.FAR_TOP_LEFT,k.NEAR_TOP_LEFT,k.NEAR_TOP_RIGHT,k.FAR_TOP_RIGHT]},v=6,frustum_g=8,b=[(0,vec4f64.f)(-1,-1,-1,1),(0,vec4f64.f)(1,-1,-1,1),(0,vec4f64.f)(1,1,-1,1),(0,vec4f64.f)(-1,1,-1,1),(0,vec4f64.f)(-1,-1,1,1),(0,vec4f64.f)(1,-1,1,1),(0,vec4f64.f)(1,1,1,1),(0,vec4f64.f)(-1,1,1,1)],frustum_y=new ObjectStack/* ObjectStack */.I(a),S=N();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class Octree_b{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new Octree_g,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),Octree_g.clearPool(),Octree_B[0]=null,Octree_P.prune(),Octree_H.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const o=Octree_g.acquire();for(let n=0;n<t;n++){const t=e[n];this._isDegenerate(t)?this._degenerateObjects.add(t):(o.init(this._root),this._add(t,o))}Octree_g.release(o)}remove(e,t=null){this._objectCount-=e.length;const o=Octree_g.acquire();for(const n of e){const e=null!=t?t:(0,sphere.h)(this.objectToBoundingSphere(n),w);E(e[3])?(o.init(this._root),this._remove(n,e,o)):this._degenerateObjects.delete(n)}Octree_g.release(o),this._shrink()}update(e,t){if(!E(t[3])&&this._isDegenerate(e))return;const o=Octree_R(e);this.remove(o,t),this.add(o)}forEachAlongRay(e,t,o){const n=(0,ray/* wrap */.LV)(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(n,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(n,e)&&o(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(n,e)&&o(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,o,n){const i=(0,ray/* wrap */.LV)(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,n))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,n)&&o(e)})),!0}))}forEach(e){this._forEachNode(this._root,(t=>{const o=t.node;return o.terminals.forAll(e),null!==o.residents&&o.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,i,s=(()=>!0),r=1/0){let h=1/0,a=1/0,l=null;const u=T(e,t),c=o=>{if(--r,!s(o))return;const n=this.objectToBoundingSphere(o);if(!P(i,n))return;const u=z(e,t,(0,sphere.g)(n)),c=u-n[3],m=u+n[3];c<h&&(h=c,a=m,l=o)};return this._forEachNodeDepthOrdered(this._root,(s=>{if(r<=0||!P(i,s.bounds))return!1;(0,vec3.i)(Octree_v,u,s.halfSize),(0,vec3.g)(Octree_v,Octree_v,s.bounds);if(z(e,t,Octree_v)>a)return!1;const h=s.node;return h.terminals.forAll((e=>c(e))),null!==h.residents&&h.residents.forAll((e=>c(e))),!0}),e,t),l}forEachInDepthRange(e,t,i,s,r,h,a){let l=-1/0,u=1/0;const c={setRange:e=>{i===Octree_b.DepthOrder.FRONT_TO_BACK?(l=Math.max(l,e.near),u=Math.min(u,e.far)):(l=Math.max(l,-e.far),u=Math.min(u,-e.near))}};c.setRange(s);const m=z(t,i,e),_=T(t,i),p=T(t,-i),g=e=>{if(!a(e))return;const o=this.objectToBoundingSphere(e),n=(0,sphere.g)(o),s=z(t,i,n)-m,_=s-o[3],p=s+o[3];_>u||p<l||!P(h,o)||r(e,c)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!P(h,e.bounds))return!1;(0,vec3.i)(Octree_v,_,e.halfSize),(0,vec3.g)(Octree_v,Octree_v,e.bounds);if(z(t,i,Octree_v)-m>u)return!1;(0,vec3.i)(Octree_v,p,e.halfSize),(0,vec3.g)(Octree_v,Octree_v,e.bounds);if(z(t,i,Octree_v)-m<l)return!1;const s=e.node;return s.terminals.forAll((e=>g(e))),null!==s.residents&&s.residents.forAll((e=>g(e))),!0}),t,i)}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)))}forEachNeighbor(e,t){const o=(0,sphere.a)(t),n=(0,sphere.g)(t),s=t=>{const s=this.objectToBoundingSphere(t),r=(0,sphere.a)(s),h=o+r;return!((0,vec3.a)((0,sphere.g)(s),n)-h*h<=0)||e(t)};let r=!0;const h=e=>{r&&(r=s(e))};this._forEachNode(this._root,(e=>{const t=(0,sphere.a)(e.bounds),s=o+t;if((0,vec3.a)((0,sphere.g)(e.bounds),n)-s*s>0)return!1;const a=e.node;return a.terminals.forAll(h),r&&null!==a.residents&&a.residents.forAll(h),r})),r&&this.forEachDegenerateObject(h)}_intersectsNode(e,t){return Octree_j(t.bounds,2*-t.halfSize,C),Octree_j(t.bounds,2*t.halfSize,Octree_y),(0,Util/* rayBoxTest */.O_)(e.origin,e.direction,C,Octree_y)}_intersectsNodeWithOffset(e,t,o){return Octree_j(t.bounds,2*-t.halfSize,C),Octree_j(t.bounds,2*t.halfSize,Octree_y),o.applyToMinMax(C,Octree_y),(0,Util/* rayBoxTest */.O_)(e.origin,e.direction,C,Octree_y)}_intersectsObject(e,t){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||(0,sphere.j)(o,e)}_intersectsObjectWithOffset(e,t,o){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||(0,sphere.j)(o.applyToBoundingSphere(n),e)}_forEachNode(e,t){let o=Octree_g.acquire().init(e);const n=[o];for(;0!==n.length;){if(o=n.pop(),t(o)&&!o.isLeaf())for(let e=0;e<o.node.children.length;e++){o.node.children[e]&&n.push(Octree_g.acquire().init(o).advance(e))}Octree_g.release(o)}}_forEachNodeDepthOrdered(e,t,o,n=Octree_b.DepthOrder.FRONT_TO_BACK){let i=Octree_g.acquire().init(e);const s=[i];for(Octree_N(o,n,K);0!==s.length;){if(i=s.pop(),t(i)&&!i.isLeaf())for(let e=7;e>=0;--e){const t=K[e];i.node.children[t]&&s.push(Octree_g.acquire().init(i).advance(t))}Octree_g.release(i)}}_remove(e,t,o){Octree_P.clear();const n=o.advanceTo(t,((e,t)=>{Octree_P.push(e.node),Octree_P.push(t)}))?o.node.terminals:o.node.residents;if(n.removeUnordered(e),0===n.length)for(let i=Octree_P.length-2;i>=0;i-=2){const e=Octree_P.data[i],t=Octree_P.data[i+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}_purge(e,o){return o>=0&&(e.children[o]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new PooledArray/* default */.A({shrink:!0})),!0)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let o=0;o<t.length;o++){const n=Octree_g.acquire().init(e);this._add(t.at(o),n),Octree_g.release(n)}}_grow(e,t){if(0!==t&&(x(e,t,(e=>this.objectToBoundingSphere(e)),Octree_k),E(Octree_k[3])&&!this._fitsInsideTree(Octree_k)))if(this._nodeIsEmpty(this._root.node))(0,sphere.h)(Octree_k,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const e=this._rootBoundsForRootAsSubNode(Octree_k);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(Octree_k,e):this._growRootAsSubNode(e),Octree_g.release(e)}}_rebuildTree(e,t){(0,vec3.c)(q,t.bounds),q[3]=t.halfSize,x([e,q],2,(e=>e),Octree_I);const o=Octree_g.acquire().init(this._root);this._root.initFrom(null,Octree_I,Octree_I[3]),this._root.increaseHalfSize(1.25),this._forEachNode(o,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),Octree_g.release(o)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let o=0;return this._forEachNode(this._root,(e=>(o=Math.max(o,e.depth),o+t<=this._maximumDepth))),o+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],o=e;let n=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let h=0;h<3;h++){const e=i[h]-s-(o[h]-t),r=o[h]+t-(i[h]+s),a=Math.max(0,Math.ceil(e/(2*s))),d=Math.max(0,Math.ceil(r/(2*s)))+1,l=2**Math.ceil(Math.log(a+d)*Math.LOG2E);n=Math.max(n,l),Octree_L[h].min=a,Octree_L[h].max=d}for(let h=0;h<3;h++){let e=Octree_L[h].min,t=Octree_L[h].max;const o=(n-(e+t))/2;e+=Math.ceil(o),t+=Math.floor(o);const r=i[h]-s-e*s*2;F[h]=r+(t+e)*s}const r=n*s;return F[3]=r*Octree_A,Octree_g.acquire().initFrom(null,F,r,0)}_growRootAsSubNode(e){const t=this._root.node;(0,vec3.c)(Octree_k,this._root.bounds),Octree_k[3]=this._root.halfSize,this._root.init(e),e.advanceTo(Octree_k,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let o=0,n=0;for(;n<t.length&&null==e;)o=n++,e=t[o];for(;n<t.length;)if(t[n++])return-1;return o}_isDegenerate(e){return!E(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,o=this._root.halfSize;return e[3]<=o&&e[0]>=t[0]-o&&e[0]<=t[0]+o&&e[1]>=t[1]-o&&e[1]<=t[1]+o&&e[2]>=t[2]-o&&e[2]<=t[2]+o}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:o}=this,n=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:o,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:n}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),o=e.residents?.map((e=>this.objectToBoundingSphere(e))),n=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return{children:t,residents:o,terminals:n}}static fromJSON(e){const t=new Octree_b((e=>e),{maximumDepth:e.maximumDepth,maximumObjectsPerNode:e.maximumObjectsPerNode});return t._objectCount=e.objectCount,t._root.initFrom(e.root.node,e.root.bounds,e.root.halfSize,e.root.depth),t}}class Octree_g{constructor(){this.bounds=(0,sphere.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,o,n=this.depth){return this.node=null!=e?e:Octree_g.createEmptyNode(),null!=t&&(0,sphere.h)(t,this.bounds),this.halfSize=o,this.depth=n,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*Octree_A}advance(e){let t=this.node.children[e];t||(t=Octree_g.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const o=Octree_M[e];return this.bounds[0]+=o[0]*this.halfSize,this.bounds[1]+=o[1]*this.halfSize,this.bounds[2]+=o[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,o=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!o)return t&&t(this,-1),!1;this.node.residents=null}const n=this._childIndex(e);t&&t(this,n),this.advance(n)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new PooledArray/* default */.A({shrink:!0}),residents:new PooledArray/* default */.A({shrink:!0})}}static acquire(){return Octree_g._pool.acquire()}static release(e){Octree_g._pool.release(e)}static clearPool(){Octree_g._pool.prune()}}function Octree_S(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function Octree_O(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function Octree_j(e,t,o){o[0]=e[0]+t,o[1]=e[1]+t,o[2]=e[2]+t}function x(e,t,o,n){if(1===t){const t=o(e[0]);(0,sphere.h)(t,n)}else{C[0]=1/0,C[1]=1/0,C[2]=1/0,Octree_y[0]=-1/0,Octree_y[1]=-1/0,Octree_y[2]=-1/0;for(let n=0;n<t;n++){const t=o(e[n]);E(t[3])&&(Octree_S(C,t),Octree_O(Octree_y,t))}(0,vec3.p)(n,C,Octree_y,.5),n[3]=Math.max(Octree_y[0]-C[0],Octree_y[1]-C[1],Octree_y[2]-C[2])/2}}function Octree_N(e,t,o){if(!Octree_H.length)for(let n=0;n<8;++n)Octree_H.push({index:0,distance:0});for(let n=0;n<8;++n){const o=Octree_M[n];Octree_H.data[n].index=n,Octree_H.data[n].distance=z(e,t,o)}Octree_H.sort(((e,t)=>e.distance-t.distance));for(let n=0;n<8;++n)o[n]=Octree_H.data[n].index}function T(e,t){let o,n=1/0;for(let i=0;i<8;++i){const s=z(e,t,D[i]);s<n&&(n=s,o=D[i])}return o}function z(e,t,o){return t*(e[0]*o[0]+e[1]*o[1]+e[2]*o[2])}function E(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}Octree_g._pool=new ObjectPool/* default */.A(Octree_g),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(Octree_b||(Octree_b={}));const Octree_M=[(0,vec3f64.f)(-1,-1,-1),(0,vec3f64.f)(1,-1,-1),(0,vec3f64.f)(-1,1,-1),(0,vec3f64.f)(1,1,-1),(0,vec3f64.f)(-1,-1,1),(0,vec3f64.f)(1,-1,1),(0,vec3f64.f)(-1,1,1),(0,vec3f64.f)(1,1,1)],D=[(0,vec3f64.f)(-1,-1,-1),(0,vec3f64.f)(-1,-1,1),(0,vec3f64.f)(-1,1,-1),(0,vec3f64.f)(-1,1,1),(0,vec3f64.f)(1,-1,-1),(0,vec3f64.f)(1,-1,1),(0,vec3f64.f)(1,1,-1),(0,vec3f64.f)(1,1,1)],Octree_A=Math.sqrt(3),Octree_B=[null];function Octree_R(e){return Octree_B[0]=e,Octree_B}const F=(0,sphere.c)(),Octree_v=(0,vec3f64.c)(),C=(0,vec3f64.c)(),Octree_y=(0,vec3f64.c)(),Octree_P=new PooledArray/* default */.A,w=(0,sphere.c)(),Octree_k=(0,sphere.c)(),q=(0,sphere.c)(),Octree_I=(0,sphere.c)(),Octree_L=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],Octree_H=new PooledArray/* default */.A,K=[0,0,0,0,0,0,0,0],W=Octree_b;

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
let SceneLayerSnappingSourceWorker_=class{constructor(){this._idToComponent=new Map,this._components=new W((e=>e.bounds)),this._edges=new W((e=>e.bounds)),this._tmpLineSegment=(0,lineSegment/* create */.vt)(),this._tmpP1=(0,vec3f64.c)(),this._tmpP2=(0,vec3f64.c)(),this._tmpP3=(0,vec3f64.c)(),this.remoteClient=null}async fetchCandidates(e,s){await Promise.resolve(),(0,promiseUtils/* throwIfAborted */.Te)(s),await this._ensureEdgeLocations(e,s);const o=[];return this._edges.forEachNeighbor((t=>(this._addCandidates(e,t,o),o.length<sceneLayerSnappingUtils_t)),e.bounds),{result:{candidates:o}}}async _ensureEdgeLocations(e,t){const s=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:o}=e;s.push({id:t,uid:o})}return!0}),e.bounds),!s.length)return;const o={components:s},n=await this.remoteClient.invoke("fetchAllEdgeLocations",o,t??{});for(const i of n.components)this._setFetchEdgeLocations(i)}async add(e){const t=new SceneLayerSnappingSourceWorker_b(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((s=>(s.component===t&&e.push(s),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if(null==t||e.uid!==t.uid)return;const s=edgeProcessing/* extractComponentsEdgeLocationsLayout */.HY.createView(e.locations),o=new Array(s.count),n=(0,vec3f64.c)(),r=(0,vec3f64.c)();for(let i=0;i<s.count;i++){s.position0.getVec(i,n),s.position1.getVec(i,r);const d=sceneLayerSnappingUtils_e(n,r,e.origin),c=new SceneLayerSnappingSourceWorker_j(t,i,d);o[i]=c}this._edges.add(o);const{objectIds:d,origin:c}=e;t.info={locations:s,objectIds:d,origin:c}}_addCandidates(e,t,s){const{info:n}=t.component,{origin:i,objectIds:r}=n,d=n.locations,c=d.position0.getVec(t.index,this._tmpP1),a=d.position1.getVec(t.index,this._tmpP2);(0,vec3.g)(c,c,i),(0,vec3.g)(a,a,i);const p=r[d.componentIndex.get(t.index)];this._addEdgeCandidate(e,p,c,a,s),this._addVertexCandidate(e,p,c,s),this._addVertexCandidate(e,p,a,s)}_addEdgeCandidate(e,t,s,o,i){if(!e.returnEdge)return;const d=(0,sphere.g)(e.bounds),h=(0,lineSegment/* fromPoints */.Cr)(s,o,this._tmpLineSegment),m=(0,lineSegment/* projectPoint */._I)(h,d,this._tmpP3);(0,sphere.n)(e.bounds,m)&&i.push({type:"edge",objectId:t,target:(0,vec3f64.g)(m),distance:(0,vec3.o)(d,m),start:(0,vec3f64.g)(s),end:(0,vec3f64.g)(o)})}_addVertexCandidate(e,t,s,o){if(!e.returnVertex)return;const i=(0,sphere.g)(e.bounds);(0,sphere.n)(e.bounds,s)&&o.push({type:"vertex",objectId:t,target:(0,vec3f64.g)(s),distance:(0,vec3.o)(i,s)})}};SceneLayerSnappingSourceWorker_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],SceneLayerSnappingSourceWorker_);const SceneLayerSnappingSourceWorker_f=SceneLayerSnappingSourceWorker_;class SceneLayerSnappingSourceWorker_b{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++SceneLayerSnappingSourceWorker_b.uid}}SceneLayerSnappingSourceWorker_b.uid=0;class SceneLayerSnappingSourceWorker_j{constructor(e,t,s){this.component=e,this.index=t,this.bounds=s}}


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