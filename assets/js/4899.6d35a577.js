"use strict";
exports.id = 4899;
exports.ids = [4899];
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

/***/ 24121:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ n),
/* harmony export */   b: () => (/* binding */ f),
/* harmony export */   c: () => (/* binding */ t),
/* harmony export */   d: () => (/* binding */ i),
/* harmony export */   e: () => (/* binding */ o),
/* harmony export */   n: () => (/* binding */ s),
/* harmony export */   s: () => (/* binding */ u),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports f, v */
/* harmony import */ var _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64521);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(e,t,f){r(e.typedBuffer,t.typedBuffer,f,e.typedBufferStride,t.typedBufferStride)}function r(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements"),t;const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[4],c=f[5],l=f[6],p=f[8],y=f[9],h=f[10],m=f[12],B=f[13],g=f[14];let S=0,M=0;for(let e=0;e<u;e++){const e=r[S],f=r[S+1],u=r[S+2];t[M]=i*e+d*f+p*u+m,t[M+1]=s*e+c*f+y*u+B,t[M+2]=a*e+l*f+h*u+g,S+=o,M+=n}return t}function f(e,t,r){n(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function n(t,r,f,n=3,o=n){if(t.length/n!==Math.ceil(r.length/o))return void _geometry_support_buffer_math_common_js__WEBPACK_IMPORTED_MODULE_0__/* .mathLogger */ .J.error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],a=f[2],d=f[3],c=f[4],l=f[5],p=f[6],y=f[7],h=f[8];let m=0,B=0;for(let e=0;e<u;e++){const e=r[m],f=r[m+1],u=r[m+2];t[B]=i*e+d*f+p*u,t[B+1]=s*e+c*f+y*u,t[B+2]=a*e+l*f+h*u,m+=o,B+=n}}function o(e,t,r){u(e.typedBuffer,t,r,e.typedBufferStride)}function u(e,t,r,f=3){const n=Math.min(e.length/f,t.count),o=t.typedBuffer,u=t.typedBufferStride;let i=0,s=0;for(let a=0;a<n;a++)e[s]=r*o[i],e[s+1]=r*o[i+1],e[s+2]=r*o[i+2],i+=u,s+=f}function i(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r=3,f=r){const n=Math.min(e.length/r,t.length/f);let o=0,u=0;for(let i=0;i<n;i++){const n=t[o],i=t[o+1],s=t[o+2],a=n*n+i*i+s*s;if(a>0){const t=1/Math.sqrt(a);e[u]=t*n,e[u+1]=t*i,e[u+2]=t*s}o+=f,u+=r}}function a(e,t,r){const f=Math.min(e.count,t.count),n=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;let s=0,a=0;for(let d=0;d<f;d++)n[a]=u[s]>>r,n[a+1]=u[s+1]>>r,n[a+2]=u[s+2]>>r,s+=i,a+=o}const d=Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:i,scale:u,scaleView:o,shiftRight:a,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:t},Symbol.toStringTag,{value:"Module"}));


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

/***/ 90166:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ns: () => (/* binding */ y),
/* harmony export */   jh: () => (/* binding */ t),
/* harmony export */   l5: () => (/* binding */ a),
/* harmony export */   s: () => (/* binding */ o),
/* harmony export */   xm: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(n,t=!1){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?t?new Array(n).fill(0):new Array(n):new Float64Array(n)}function e(t){return((0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isArray */ .cy)(t)?t.length:t.byteLength/8)<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?Array.from(t):new Float64Array(t)}function a(r,n,t){return Array.isArray(r)?r.slice(n,n+t):r.subarray(n,n+t)}function o(r,n){for(let t=0;t<n.length;++t)r[t]=n[t];return r}function y(r){return Array.isArray(r)?new Float64Array(r):r}


/***/ }),

/***/ 29317:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22279);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78632);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let a=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.c)()}getOriginPoint(e){const[r,o,t]=this.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({x:r,y:o,z:t,spatialReference:e})}setOriginFromPoint({x:e,y:r,z:o}){this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.f)(e,r,o??0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],a.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],a.prototype,"origin",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],a);const m=a;


/***/ }),

/***/ 99218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(22279);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78632);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.c)()}getOriginPoint(o){const[r,e,s]=this.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A({x:r,y:e,z:s,spatialReference:o})}setOriginFromPoint({x:o,y:r,z:e}){this.origin=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__.f)(o,r,e??0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],n.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],n.prototype,"origin",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],n);const m=n;


/***/ }),

/***/ 64521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.views.3d.support.buffer.math");


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

/***/ 14899:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  destroyContext: () => (/* binding */ b),
  dracoDecompressPointCloudData: () => (/* binding */ c),
  filterObbsForModifications: () => (/* binding */ u),
  filterObbsForModificationsSync: () => (/* binding */ L),
  initialize: () => (/* binding */ I),
  interpretObbModificationResults: () => (/* binding */ A),
  process: () => (/* binding */ l),
  project: () => (/* binding */ p),
  setLegacySchema: () => (/* binding */ y),
  setModifications: () => (/* binding */ m),
  setModificationsSync: () => (/* binding */ E),
  test: () => (/* binding */ M),
  transformNormals: () => (/* binding */ SceneLayerWorker_d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/DoubleArray.js
var DoubleArray = __webpack_require__(90166);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedRelativeVertexSpace.js
var MeshGeoreferencedRelativeVertexSpace = __webpack_require__(29317);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(99218);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
;// ../node_modules/@arcgis/core/libs/i3s/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var enums_n,e;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32"}(enums_n||(enums_n={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished"}(e||(e={}));

// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
;// ../node_modules/@arcgis/core/libs/i3s/I3SModule.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function I3SModule_e(){return n||(n=new Promise((t=>__webpack_require__.e(/* import() */ 3983).then(__webpack_require__.bind(__webpack_require__, 13983)).then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((t=>{throw t}))),n}function i(e){return (0,assets/* getAssetUrl */.s)(`esri/libs/i3s/${e}`)}let n;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/sphere.js
var sphere = __webpack_require__(96245);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class I3SNode_i{constructor(i,t){this.id=i,this.mbs=t,this.renderMbs=(0,sphere.f)(0,0,0,-1),this.elevationRangeMin=NaN,this.elevationRangeMax=NaN}invalidateElevationRange(){this.elevationRangeMin=NaN}}var t,I3SNode_n,o,a,s;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(t||(t={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(I3SNode_n||(I3SNode_n={}));class h extends I3SNode_i{constructor(e,i,t,a,s,h,d,c,r,l){super(e,t),this.index=i,this.childCount=a,this.level=s,this.resources=h,this.version=d,this.lodMetric=c,this.maxError=r,this.numFeatures=l,this.failed=!1,this.cacheState=o.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=I3SNode_n.NotChecked}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(o||(o={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(s||(s={}));class d{constructor(e,i,t,n){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=t,this.version=n}}

;// ../node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function l(e){g=await j();const r=[e.geometryBuffer];return{result:w(g,e,r),transferList:r}}async function c(e){g=await j();const r=[e.geometryBuffer],{geometryBuffer:t}=e,o=t.byteLength,n=g._malloc(o),s=new Uint8Array(g.HEAPU8.buffer,n,o);s.set(new Uint8Array(t));const i=g.dracoDecompressPointCloudData(n,s.byteLength);if(g._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&r.push(a.buffer),r.push(f.buffer),{result:{positions:f,featureIds:a},transferList:r}}async function u(e){await j(),L(e);const r={buffer:e.buffer};return{result:r,transferList:[r.buffer]}}async function m(e){await j(),E(e)}async function y(e){g=await j(),g.setLegacySchema(e.context,e.jsonSchema)}async function p(n){const{localMatrix:s,origin:i,positions:a,vertexSpace:f,localMode:l}=n,c=SpatialReference/* default */.A.fromJSON(n.inSpatialReference),u=SpatialReference/* default */.A.fromJSON(n.outSpatialReference);let m;if("georeferenced"===f.type){const[{projectBuffer:e},{initializeProjection:r}]=await Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 84119)),Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 13484))]);await r(c,u),m=new Float64Array(a.length),e(a,c,0,m,u,0,m.length/3)}else{const e="georeferencedRelative"===f.type?MeshGeoreferencedRelativeVertexSpace/* default */.A.fromJSON(f):MeshLocalVertexSpace/* default */.A.fromJSON(f),{project:n}=await __webpack_require__.e(/* import() */ 7519).then(__webpack_require__.bind(__webpack_require__, 97519));m=(0,DoubleArray/* toFloat64Array */.Ns)(n({positions:a,transform:s?{localMatrix:s}:void 0,vertexSpace:e,inSpatialReference:c,outSpatialReference:u,localMode:l}))}const y=m.length,[p,d,b]=i;for(let e=0;e<y;e+=3)m[e]-=p,m[e+1]-=d,m[e+2]-=b;return{result:{projected:m,original:a},transferList:[m.buffer,a.buffer]}}async function SceneLayerWorker_d({normalMatrix:e,normals:r}){const t=new Float32Array(r.length);return (0,vec32.a)(t,r,e),(0,vec32.n)(t,t),{result:{transformed:t,original:r},transferList:[t.buffer,r.buffer]}}function b(e){S(e)}let SceneLayerWorker_h,g;function E(e){if(!g)return;const r=e.modifications,t=g._malloc(8*r.length),o=new Float64Array(g.HEAPU8.buffer,t,r.length);for(let n=0;n<r.length;++n)o[n]=r[n];g.setModifications(e.context,t,r.length,e.isGeodetic),g._free(t)}function w(e,r,t){const{context:o,localOrigin:n,globalTrafo:s,mbs:a,obb:f,elevationOffset:l,geometryBuffer:c,geometryDescriptor:u,indexToVertexProjector:m,vertexToRenderProjector:y}=r,p=e._malloc(c.byteLength),d=33,b=e._malloc(d*Float64Array.BYTES_PER_ELEMENT),h=new Uint8Array(e.HEAPU8.buffer,p,c.byteLength);h.set(new Uint8Array(c));const g=new Float64Array(e.HEAPU8.buffer,b,d);_(g,n);let E=g.byteOffset+3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E);_(w,s),E+=16*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E),_(w,a),E+=4*g.BYTES_PER_ELEMENT,null!=f&&(w=new Float64Array(g.buffer,E),_(w,f.center),E+=3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E),_(w,f.halfSize),E+=3*g.BYTES_PER_ELEMENT,w=new Float64Array(g.buffer,E),_(w,f.quaternion));const A=u,L={isDraco:!1,isLegacy:!1,color:r.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:r.needNormals&&r.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:r.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:r.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},S=e.process(o,!!r.obb,p,h.byteLength,A,L,b,l,m,y,r.normalReferenceFrame);if(e._free(b),e._free(p),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const I=S.componentOffsets.length>0?S.componentOffsets.slice():null,j=S.featureIds.length>0?S.featureIds.slice():null,M=S.anchorIds.length>0?Array.from(S.anchorIds):null,P=S.anchors.length>0?Array.from(S.anchors):null,T=S.interleavedVertedData.slice().buffer,x=S.indicesType===enums_n.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),R=S.positions.slice(),U=S.positionIndicesType===enums_n.Int16?new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2).slice():new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4).slice(),v={layout:r.layouts[0],interleavedVertexData:T,indices:x,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:R,indices:U}};return j&&t.push(j.buffer),I&&t.push(I.buffer),t.push(T),t.push(x.buffer),t.push(R.buffer),t.push(U.buffer),{componentOffsets:I,featureIds:j,anchorIds:M,anchors:P,transformedGeometry:v,obb:S.obb}}function A(e){return 0===e?I3SNode_n.Unmodified:1===e?I3SNode_n.PotentiallyModified:2===e?I3SNode_n.Culled:I3SNode_n.Unknown}function L(e){if(!g)return;const{context:r,buffer:t}=e,o=g._malloc(t.byteLength),n=t.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(g.HEAPU8.buffer,o,n),i=new Float64Array(t);s.set(i),g.filterOBBs(r,o,n),i.set(s),g._free(o)}function S(e){g&&0===g.destroy(e)&&(g=null)}function _(e,r){for(let t=0;t<r.length;++t)e[t]=r[t]}async function I(){g||await j()}function j(){return g?Promise.resolve(g):(SceneLayerWorker_h||(SceneLayerWorker_h=I3SModule_e().then((e=>(g=e,SceneLayerWorker_h=null,g)))),SceneLayerWorker_h)}const M={transform:(e,r)=>g&&w(g,e,r),destroy:S};


/***/ })

};
;