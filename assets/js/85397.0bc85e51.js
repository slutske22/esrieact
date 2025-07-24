"use strict";
exports.id = 85397;
exports.ids = [85397];
exports.modules = {

/***/ 59661:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ U),
  c: () => (/* binding */ E),
  e: () => (/* binding */ w),
  f: () => (/* binding */ V),
  g: () => (/* binding */ N),
  k: () => (/* binding */ H),
  o: () => (/* binding */ it),
  s: () => (/* binding */ ft)
});

// UNUSED EXPORTS: A, B, C, D, E, N, b, d, h, i, j, l, m, n, p, q, r, t, u, v, w, x, y, z

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(25336);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(74772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js
var common = __webpack_require__(78115);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/Axis.js
var Axis = __webpack_require__(60929);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/ray.js
var ray = __webpack_require__(63918);
;// ./node_modules/@arcgis/core/geometry/support/sphereUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function sphereUtils_n(n,a){const c=(0,vec32.l)(n),i=(0,mathUtils/* asinClamped */.YN)(n[2]/c),r=Math.atan2(n[1]/c,n[0]/c);return (0,vec32.i)(a,c,i,r),a}function a(t,o){const n=t[0],a=t[1],c=t[2],i=Math.cos(a);s(o,n*i*Math.cos(c),n*i*Math.sin(c),n*Math.sin(a))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(74695);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(83339);
;// ./node_modules/@arcgis/core/chunks/sphere.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const C=E();function E(){return (0,vec4f64/* create */.vt)()}const _=vec42.e,k=vec42.e;function w(t,r){return (0,vec42.c)(r,t)}function O(t,r){return (0,vec4f64/* fromValues */.fA)(t[0],t[1],t[2],r)}function T(t){return t}function z(t){t[0]=t[1]=t[2]=t[3]=0}function L(t,r){return t[0]=t[1]=t[2]=0,t[3]=r,t}function N(t){return t[3]}function U(t){return t}function V(t,r,n,s){return (0,vec4f64/* fromValues */.fA)(t,r,n,s)}function Z(t,r,n){return t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2]),n[3]=t[3]+r,n}function B(t,r,n){return t!==n&&w(t,n),n}function D(t,r){return r}function F(t,r,n){if(null==r)return!1;if(!Y(t,r,X))return!1;let{t0:s,t1:o}=X;if((s<0||o<s&&o>0)&&(s=o),s<0)return!1;if(n){const{origin:t,direction:o}=r;n[0]=t[0]+o[0]*s,n[1]=t[1]+o[1]*s,n[2]=t[2]+o[2]*s}return!0}function I(t,r,n){const s=(0,ray/* fromPoints */.Cr)(r,n);if(!Y(t,s,X))return[];const{origin:o,direction:e}=s,{t0:i,t1:a}=X,c=r=>{const n=(0,vec3f64/* create */.vt)();return (0,vec32.b)(n,o,e,r),$(t,n,n)};return Math.abs(i-a)<(0,common/* getEpsilon */.FD)()?[c(i)]:[c(i),c(a)]}const X={t0:0,t1:0};function Y(t,r,n){const{origin:s,direction:o}=r,e=G;e[0]=s[0]-t[0],e[1]=s[1]-t[1],e[2]=s[2]-t[2];const i=o[0]*o[0]+o[1]*o[1]+o[2]*o[2];if(0===i)return!1;const a=2*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2]),c=a*a-4*i*(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]-t[3]*t[3]);if(c<0)return!1;const u=Math.sqrt(c);return n.t0=(-a-u)/(2*i),n.t1=(-a+u)/(2*i),!0}const G=(0,vec3f64/* create */.vt)();function H(t,r){return F(t,r,null)}function J(t,r,n){if(F(t,r,n))return n;const a=K(t,r,vectorStacks/* sv3d */.rq.get());return (0,vec32.f)(n,r.origin,(0,vec32.g)(vectorStacks/* sv3d */.rq.get(),r.direction,(0,vec32.j)(r.origin,a)/(0,vec32.l)(r.direction))),n}function K(t,n,s){const e=vectorStacks/* sv3d */.rq.get(),u=vectorStacks/* sm4d */.Rc.get();(0,vec32.h)(e,n.origin,n.direction);const f=N(t);(0,vec32.h)(s,e,n.origin),(0,vec32.g)(s,s,1/(0,vec32.l)(s)*f);const m=rt(t,n.origin),l=(0,vector/* angle */.g7)(n.origin,s);return (0,mat4/* fromRotation */.$0)(u,l+m,e),(0,vec32.t)(s,s,u),s}function Q(t,r,n,s){const o=N(t),e=o*o,i=r+.5*Math.PI,a=n*n+e-2*Math.cos(i)*n*o,c=Math.sqrt(a),u=a-e;if(u<=0)return.5;const f=Math.sqrt(u),m=Math.acos(f/c)-Math.asin(o/(c/Math.sin(i)));return Math.min(1,(m+.5*s)/s)}function W(t,r,n){return F(t,r,n)?n:((0,ray/* closestPoint */.oC)(r,U(t),n),$(t,n,n))}function $(t,r,n){const e=(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),r,U(t)),a=(0,vec32.g)(vectorStacks/* sv3d */.rq.get(),e,t[3]/(0,vec32.l)(e));return (0,vec32.f)(n,a,U(t))}function tt(t,r){const n=(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),r,U(t)),s=(0,vec32.k)(n),o=t[3]*t[3];return Math.sqrt(Math.abs(s-o))}function rt(r,n){const s=(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),n,U(r)),o=(0,vec32.l)(s),e=N(r),a=e+Math.abs(e-o);return (0,mathUtils/* acosClamped */.XM)(e/a)}const nt=(0,vec3f64/* create */.vt)();function st(t,r,n,s){const o=(0,vec32.d)(nt,r,U(t));switch(n){case Axis/* Axis */._.X:{const t=sphereUtils_n(o,nt)[2];return (0,vec32.i)(s,-Math.sin(t),Math.cos(t),0)}case Axis/* Axis */._.Y:{const t=sphereUtils_n(o,nt),r=t[1],n=t[2],e=Math.sin(r);return (0,vec32.i)(s,-e*Math.cos(n),-e*Math.sin(n),Math.cos(r))}case Axis/* Axis */._.Z:return (0,vec32.n)(s,o);default:return}}function ot(t,r){const n=(0,vec32.d)(ct,r,U(t));return (0,vec32.l)(n)-t[3]}function et(t,r,n,e){const i=ot(t,r),a=st(t,r,Axis/* Axis */._.Z,ct),c=(0,vec32.g)(ct,a,n-i);return (0,vec32.f)(e,r,c)}function it(t,r){const s=(0,vec32.s)(U(t),r),o=N(t);return s<=o*o}function at(t,r,n=(0,vec4f64/* create */.vt)()){const s=(0,vec32.j)(U(t),U(r)),o=t[3],i=r[3];return s+i<o?((0,vec42.c)(n,t),n):s+o<i?((0,vec42.c)(n,r),n):((0,vec32.m)(n,U(t),U(r),(s+i-o)/(2*s)),n[3]=(s+o+i)/2,n)}const ct=(0,vec3f64/* create */.vt)(),ut=E(),ft=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:C,altitudeAt:ot,angleToSilhouette:rt,axisAt:st,cameraFrustumCoverage:Q,clear:z,closestPoint:W,closestPointOnSilhouette:K,containsPoint:it,copy:w,create:E,distanceToSilhouette:tt,elevate:Z,equals:k,exactEquals:_,fromCenterAndRadius:O,fromRadius:L,fromValues:V,getCenter:U,getExtent:D,getRadius:N,intersectLine:I,intersectRay:F,intersectRayClosestSilhouette:J,intersectsRay:H,projectPoint:$,setAltitudeAt:et,setExtent:B,tmpSphere:ut,union:at,wrap:T},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 72449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ a),
/* harmony export */   b: () => (/* binding */ n),
/* harmony export */   c: () => (/* binding */ f),
/* harmony export */   d: () => (/* binding */ e),
/* harmony export */   e: () => (/* binding */ s),
/* harmony export */   f: () => (/* binding */ l),
/* harmony export */   l: () => (/* binding */ u),
/* harmony export */   n: () => (/* binding */ d),
/* harmony export */   t: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports g, h, s, v */
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36137);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80861);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,e,f){r(t.typedBuffer,e.typedBuffer,f,t.typedBufferStride,e.typedBufferStride)}function r(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[4],s=r[5],d=r[6],c=r[8],p=r[9],h=r[10],y=r[12],B=r[13],g=r[14];let S=0,m=0;for(let M=0;M<o;M++){const r=e[S],o=e[S+1],M=e[S+2];t[m]=i*r+a*o+c*M+y,t[m+1]=u*r+s*o+p*M+B,t[m+2]=l*r+d*o+h*M+g,S+=n,m+=f}return t}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function n(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[3],s=r[4],d=r[5],c=r[6],p=r[7],h=r[8];let y=0,B=0;for(let g=0;g<o;g++){const r=e[y],o=e[y+1],g=e[y+2];t[B]=i*r+a*o+c*g,t[B+1]=u*r+s*o+p*g,t[B+2]=l*r+d*o+h*g,y+=n,B+=f}}function o(t,e,r){i(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function i(t,e,r,f=3,n=f){const o=Math.min(t.length/f,e.length/n);let i=0,u=0;for(let l=0;l<o;l++)t[u]=r*e[i],t[u+1]=r*e[i+1],t[u+2]=r*e[i+2],i+=n,u+=f;return t}function u(t,e,r,f){l(t.typedBuffer,e.typedBuffer,r,f,t.typedBufferStride,e.typedBufferStride)}function l(e,r,f,n,o=3,i=o){const u=Math.min(e.length/o,r.length/i);let l=0,a=0;const s=1/_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .colorGamma */ .Tf;for(let t=0;t<u;t++)e[a]=n*(f*r[l])**s,e[a+1]=n*(f*r[l+1])**s,e[a+2]=n*(f*r[l+2])**s,l+=i,a+=o}function a(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let i=0,u=0;for(let l=0;l<o;l++)t[u]=e[i]+r[0],t[u+1]=e[i+1]+r[1],t[u+2]=e[i+2]+r[2],i+=n,u+=f;return t}function s(t,e){d(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function d(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,i=0;for(let u=0;u<n;u++){const n=e[o],u=e[o+1],l=e[o+2],a=n*n+u*u+l*l;if(a>0){const e=1/Math.sqrt(a);t[i]=e*n,t[i+1]=e*u,t[i+2]=e*l}o+=f,i+=r}}function c(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,u=e.typedBufferStride;let l=0,a=0;for(let s=0;s<f;s++)n[a]=i[l]>>r,n[a+1]=i[l+1]>>r,n[a+2]=i[l+2]>>r,l+=u,a+=o}const p=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:l,linearToSRGBView:u,normalize:d,normalizeView:s,scale:i,scaleView:o,shiftRight:c,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e,translate:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 80347:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l),
/* harmony export */   B: () => (/* binding */ m),
/* harmony export */   C: () => (/* binding */ e),
/* harmony export */   D: () => (/* binding */ i),
/* harmony export */   E: () => (/* binding */ K),
/* harmony export */   F: () => (/* binding */ W),
/* harmony export */   H: () => (/* binding */ Y),
/* harmony export */   a: () => (/* binding */ R),
/* harmony export */   b: () => (/* binding */ q),
/* harmony export */   c: () => (/* binding */ s),
/* harmony export */   d: () => (/* binding */ c),
/* harmony export */   e: () => (/* binding */ P),
/* harmony export */   f: () => (/* binding */ u),
/* harmony export */   g: () => (/* binding */ g),
/* harmony export */   h: () => (/* binding */ _),
/* harmony export */   i: () => (/* binding */ o),
/* harmony export */   j: () => (/* binding */ p),
/* harmony export */   k: () => (/* binding */ j),
/* harmony export */   l: () => (/* binding */ r),
/* harmony export */   m: () => (/* binding */ I),
/* harmony export */   n: () => (/* binding */ A),
/* harmony export */   o: () => (/* binding */ N),
/* harmony export */   q: () => (/* binding */ H),
/* harmony export */   r: () => (/* binding */ z),
/* harmony export */   s: () => (/* binding */ v),
/* harmony export */   t: () => (/* binding */ E),
/* harmony export */   u: () => (/* binding */ y),
/* harmony export */   v: () => (/* binding */ Q),
/* harmony export */   w: () => (/* binding */ f),
/* harmony export */   x: () => (/* binding */ X),
/* harmony export */   y: () => (/* binding */ Z),
/* harmony export */   z: () => (/* binding */ d)
/* harmony export */ });
/* unused harmony exports G, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, p */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19913);
/* harmony import */ var _core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78115);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t){const n=t[0],a=t[1],r=t[2];return Math.sqrt(n*n+a*a+r*r)}function s(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function o(t,n,a,r){return t[0]=n,t[1]=a,t[2]=r,t}function u(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t}function c(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t}function e(t,n,a){return t[0]=n[0]*a[0],t[1]=n[1]*a[1],t[2]=n[2]*a[2],t}function i(t,n,a){return t[0]=n[0]/a[0],t[1]=n[1]/a[1],t[2]=n[2]/a[2],t}function h(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t[2]=Math.ceil(n[2]),t}function M(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t[2]=Math.floor(n[2]),t}function f(t,n){return t[0]=Math.abs(n[0]),t[1]=Math.abs(n[1]),t[2]=Math.abs(n[2]),t}function m(t,n){return t[0]=Math.sign(n[0]),t[1]=Math.sign(n[1]),t[2]=Math.sign(n[2]),t}function l(t,n,a){return t[0]=Math.min(n[0],a[0]),t[1]=Math.min(n[1],a[1]),t[2]=Math.min(n[2],a[2]),t}function d(t,n,a){return t[0]=Math.max(n[0],a[0]),t[1]=Math.max(n[1],a[1]),t[2]=Math.max(n[2],a[2]),t}function b(t,n=0,a=1){return t[0]=Math.min(Math.max(t[0],n),a),t[1]=Math.min(Math.max(t[1],n),a),t[2]=Math.min(Math.max(t[2],n),a),t}function x(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t[2]=Math.round(n[2]),t}function g(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t}function q(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t}function p(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2];return Math.sqrt(a*a+r*r+s*s)}function v(t,n){const a=n[0]-t[0],r=n[1]-t[1],s=n[2]-t[2];return a*a+r*r+s*s}function j(t){const n=t[0],a=t[1],r=t[2];return n*n+a*a+r*r}function y(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t}function z(t,n){return t[0]=1/n[0],t[1]=1/n[1],t[2]=1/n[2],t}function A(t,n){const a=n[0],r=n[1],s=n[2];let o=a*a+r*r+s*s;return o>0&&(o=1/Math.sqrt(o),t[0]=n[0]*o,t[1]=n[1]*o,t[2]=n[2]*o),t}function P(t,n){return t[0]*n[0]+t[1]*n[1]+t[2]*n[2]}function _(t,n,a){const r=n[0],s=n[1],o=n[2],u=a[0],c=a[1],e=a[2];return t[0]=s*e-o*c,t[1]=o*u-r*e,t[2]=r*c-s*u,t}function D(t,n,a){const r=n[0],s=n[1],o=n[2],u=a[0],c=a[1],e=a[2],i=s*e-o*c,h=o*u-r*e,M=r*c-s*u,f=Math.sqrt(i*i+h*h+M*M);return t[0]=i/f,t[1]=h/f,t[2]=M/f,t}function I(t,n,a,r){const s=n[0],o=n[1],u=n[2];return t[0]=s+r*(a[0]-s),t[1]=o+r*(a[1]-o),t[2]=u+r*(a[2]-u),t}function L(t,n,a,r,s,o){const u=o*o,c=u*(2*o-3)+1,e=u*(o-2)+o,i=u*(o-1),h=u*(3-2*o);return t[0]=n[0]*c+a[0]*e+r[0]*i+s[0]*h,t[1]=n[1]*c+a[1]*e+r[1]*i+s[1]*h,t[2]=n[2]*c+a[2]*e+r[2]*i+s[2]*h,t}function O(t,n,a,r,s,o){const u=1-o,c=u*u,e=o*o,i=c*u,h=3*o*c,M=3*e*u,f=e*o;return t[0]=n[0]*i+a[0]*h+r[0]*M+s[0]*f,t[1]=n[1]*i+a[1]*h+r[1]*M+s[1]*f,t[2]=n[2]*i+a[2]*h+r[2]*M+s[2]*f,t}function S(t,n=1){const r=_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_1__/* .RANDOM */ .Ov,s=2*r()*Math.PI,o=2*r()-1,u=Math.sqrt(1-o*o)*n;return t[0]=Math.cos(s)*u,t[1]=Math.sin(s)*u,t[2]=o*n,t}function E(t,n,a){const r=n[0],s=n[1],o=n[2];return t[0]=a[0]*r+a[4]*s+a[8]*o+a[12],t[1]=a[1]*r+a[5]*s+a[9]*o+a[13],t[2]=a[2]*r+a[6]*s+a[10]*o+a[14],t}function N(t,n,a){const r=n[0],s=n[1],o=n[2];return t[0]=r*a[0]+s*a[3]+o*a[6],t[1]=r*a[1]+s*a[4]+o*a[7],t[2]=r*a[2]+s*a[5]+o*a[8],t}function Q(t,n,a){const r=a[0],s=a[1],o=a[2],u=a[3],c=n[0],e=n[1],i=n[2],h=s*i-o*e,M=o*c-r*i,f=r*e-s*c,m=s*f-o*M,l=o*h-r*f,d=r*M-s*h,b=2*u;return t[0]=c+h*b+2*m,t[1]=e+M*b+2*l,t[2]=i+f*b+2*d,t}function T(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[0],o[1]=s[1]*Math.cos(r)-s[2]*Math.sin(r),o[2]=s[1]*Math.sin(r)+s[2]*Math.cos(r),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function k(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[2]*Math.sin(r)+s[0]*Math.cos(r),o[1]=s[1],o[2]=s[2]*Math.cos(r)-s[0]*Math.sin(r),t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function w(t,n,a,r){const s=[],o=[];return s[0]=n[0]-a[0],s[1]=n[1]-a[1],s[2]=n[2]-a[2],o[0]=s[0]*Math.cos(r)-s[1]*Math.sin(r),o[1]=s[0]*Math.sin(r)+s[1]*Math.cos(r),o[2]=s[2],t[0]=o[0]+a[0],t[1]=o[1]+a[1],t[2]=o[2]+a[2],t}function B(t,n){A(C,t),A(F,n);const a=P(C,F);return a>1?0:a<-1?Math.PI:Math.acos(a)}const C=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),F=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();function G(t){return"vec3("+t[0]+", "+t[1]+", "+t[2]+")"}function H(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]}function J(t,a){if(t===a)return!0;const r=t[0],s=t[1],o=t[2],u=a[0],c=a[1],e=a[2],i=(0,_core_libs_gl_matrix_2_math_common_js__WEBPACK_IMPORTED_MODULE_1__/* .getEpsilon */ .FD)();return Math.abs(r-u)<=i*Math.max(1,Math.abs(r),Math.abs(u))&&Math.abs(s-c)<=i*Math.max(1,Math.abs(s),Math.abs(c))&&Math.abs(o-e)<=i*Math.max(1,Math.abs(o),Math.abs(e))}function K(t,n,a){const r=a[0]-n[0],s=a[1]-n[1],o=a[2]-n[2];let u=r*r+s*s+o*o;return u>0?(u=1/Math.sqrt(u),t[0]=r*u,t[1]=s*u,t[2]=o*u,t):(t[0]=0,t[1]=0,t[2]=0,t)}const R=c,U=e,V=i,W=p,X=v,Y=r,Z=j,$=Object.freeze(Object.defineProperty({__proto__:null,abs:f,add:u,angle:B,bezier:O,ceil:h,clamp:b,copy:s,cross:_,crossAndNormalize:D,direction:K,dist:W,distance:p,div:V,divide:i,dot:P,equals:J,exactEquals:H,floor:M,hermite:L,inverse:z,len:Y,length:r,lerp:I,max:d,min:l,mul:U,multiply:e,negate:y,normalize:A,random:S,rotateX:T,rotateY:k,rotateZ:w,round:x,scale:g,scaleAndAdd:q,set:o,sign:m,sqrDist:X,sqrLen:Z,squaredDistance:v,squaredLength:j,str:G,sub:R,subtract:c,transformMat3:N,transformMat4:E,transformQuat:Q},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 82444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _nextTick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71709);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,_nextTick_js__WEBPACK_IMPORTED_MODULE_0__/* .nextTick */ .d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*i);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,i));t++)this._items.push(this._allocator())}}const i=1024;


/***/ }),

/***/ 39637:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export unpackFloatRGBA */
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(o,r,e=0){const i=(0,_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .clamp */ .qE)(o,0,f);for(let t=0;t<4;t++)r[e+t]=Math.floor(256*l(i*n[t]))}function r(t,o=0){let r=0;for(let n=0;n<4;n++)r+=t[o+n]*e[n];return r}const n=[1,256,65536,16777216],e=[1/256,1/65536,1/16777216,1/4294967296],f=r(new Uint8ClampedArray([255,255,255,255]));function l(t){return t-Math.floor(t)}


/***/ }),

/***/ 79441:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fA: () => (/* binding */ n),
/* harmony export */   vt: () => (/* binding */ e),
/* harmony export */   zK: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports clone, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function n(e,t,n,r,o,u,c,l,f){return[e,t,n,r,o,u,c,l,f]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 26110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o8: () => (/* binding */ t),
/* harmony export */   vt: () => (/* binding */ e),
/* harmony export */   zK: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports fromValues, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function n(e,t,n,r,o,u,c,l,f,a,i,_,b,m,p,s){return[e,t,n,r,o,u,c,l,f,a,i,_,b,m,p,s]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 19165:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o8: () => (/* binding */ t),
/* harmony export */   vt: () => (/* binding */ e),
/* harmony export */   zK: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports fromValues, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function t(e){return[e[0],e[1],e[2],e[3]]}function n(e,t,n,r){return[e,t,n,r]}const r=e(),o=Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:r,clone:t,create:e,fromValues:n},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 56560:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Un: () => (/* binding */ a),
/* harmony export */   fA: () => (/* binding */ r),
/* harmony export */   vt: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports UNIT_X, UNIT_Y, ZEROS, clone, freeze, fromArray, ones, unitX, unitY, v, zeros */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(){return[0,0]}function t(n){return[n[0],n[1]]}function r(n,t){return[n,t]}function e(n,t){return[n,t]}function o(t,r=n()){const e=Math.min(2,t.length);for(let n=0;n<e;++n)r[n]=t[n];return r}function u(){return n()}function c(){return r(1,1)}function f(){return r(1,0)}function i(){return r(0,1)}const l=u(),a=c(),s=f(),_=i(),m=Object.freeze(Object.defineProperty({__proto__:null,ONES:a,UNIT_X:s,UNIT_Y:_,ZEROS:l,clone:t,create:n,freeze:e,fromArray:o,fromValues:r,ones:c,unitX:f,unitY:i,zeros:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 82541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B8: () => (/* binding */ s),
/* harmony export */   Ge: () => (/* binding */ j),
/* harmony export */   I0: () => (/* binding */ p),
/* harmony export */   KC: () => (/* binding */ c),
/* harmony export */   hZ: () => (/* binding */ r),
/* harmony export */   hs: () => (/* binding */ f),
/* harmony export */   lw: () => (/* binding */ i),
/* harmony export */   mg: () => (/* binding */ u),
/* harmony export */   z0: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports add, copy, determinant, equals, exactEquals, frob, fromMat2d, fromRotation, fromScaling, fromTranslation, identity, isOrthoNormal, m, mul, multiplyScalar, multiplyScalarAndAdd, normalFromMat4Legacy, projection, rotate, scaleByVec2, str, sub, subtract, translate */
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78115);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[4],t[4]=n[5],t[5]=n[6],t[6]=n[8],t[7]=n[9],t[8]=n[10],t}function a(t,n){return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t}function r(t,n,a,r,o,u,s,c,e,i){return t[0]=n,t[1]=a,t[2]=r,t[3]=o,t[4]=u,t[5]=s,t[6]=c,t[7]=e,t[8]=i,t}function o(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function u(t,n){if(t===n){const a=n[1],r=n[2],o=n[5];t[1]=n[3],t[2]=n[6],t[3]=a,t[5]=n[7],t[6]=r,t[7]=o}else t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8];return t}function s(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8],h=M*s-c*i,f=-M*u+c*e,b=i*u-s*e;let l=a*h+r*f+o*b;return l?(l=1/l,t[0]=h*l,t[1]=(-M*r+o*i)*l,t[2]=(c*r-o*s)*l,t[3]=f*l,t[4]=(M*a-o*e)*l,t[5]=(-c*a+o*u)*l,t[6]=b*l,t[7]=(-i*a+r*e)*l,t[8]=(s*a-r*u)*l,t):null}function c(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8];return t[0]=s*M-c*i,t[1]=o*i-r*M,t[2]=r*c-o*s,t[3]=c*e-u*M,t[4]=a*M-o*e,t[5]=o*u-a*c,t[6]=u*i-s*e,t[7]=r*e-a*i,t[8]=a*s-r*u,t}function e(t){const n=t[0],a=t[1],r=t[2],o=t[3],u=t[4],s=t[5],c=t[6],e=t[7],i=t[8];return n*(i*u-s*e)+a*(-i*o+s*c)+r*(e*o-u*c)}function i(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=a[0],b=a[1],l=a[2],m=a[3],d=a[4],x=a[5],p=a[6],y=a[7],j=a[8];return t[0]=f*r+b*s+l*i,t[1]=f*o+b*c+l*M,t[2]=f*u+b*e+l*h,t[3]=m*r+d*s+x*i,t[4]=m*o+d*c+x*M,t[5]=m*u+d*e+x*h,t[6]=p*r+y*s+j*i,t[7]=p*o+y*c+j*M,t[8]=p*u+y*e+j*h,t}function M(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=a[0],b=a[1];return t[0]=r,t[1]=o,t[2]=u,t[3]=s,t[4]=c,t[5]=e,t[6]=f*r+b*s+i,t[7]=f*o+b*c+M,t[8]=f*u+b*e+h,t}function h(t,n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=Math.sin(a),b=Math.cos(a);return t[0]=b*r+f*s,t[1]=b*o+f*c,t[2]=b*u+f*e,t[3]=b*s-f*r,t[4]=b*c-f*o,t[5]=b*e-f*u,t[6]=i,t[7]=M,t[8]=h,t}function f(t,n,a){const r=a[0],o=a[1],u=a[2];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t[6]=u*n[6],t[7]=u*n[7],t[8]=u*n[8],t}function b(t,n,a){const r=a[0],o=a[1];return t[0]=r*n[0],t[1]=r*n[1],t[2]=r*n[2],t[3]=o*n[3],t[4]=o*n[4],t[5]=o*n[5],t}function l(t,n){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=n[0],t[7]=n[1],t[8]=1,t}function m(t,n){const a=Math.sin(n),r=Math.cos(n);return t[0]=r,t[1]=a,t[2]=0,t[3]=-a,t[4]=r,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function d(t,n){return t[0]=n[0],t[1]=0,t[2]=0,t[3]=0,t[4]=n[1],t[5]=0,t[6]=0,t[7]=0,t[8]=1,t}function x(t,n){return t[0]=n[0],t[1]=n[1],t[2]=0,t[3]=n[2],t[4]=n[3],t[5]=0,t[6]=n[4],t[7]=n[5],t[8]=1,t}function p(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=a+a,c=r+r,e=o+o,i=a*s,M=r*s,h=r*c,f=o*s,b=o*c,l=o*e,m=u*s,d=u*c,x=u*e;return t[0]=1-h-l,t[3]=M-x,t[6]=f+d,t[1]=M+x,t[4]=1-i-l,t[7]=b-m,t[2]=f-d,t[5]=b+m,t[8]=1-i-h,t}function y(t,n){const a=n[0],r=n[1],o=n[2],u=n[4],s=n[5],c=n[6],e=n[8],i=n[9],M=n[10],h=M*s-c*i,f=-M*u+c*e,b=i*u-s*e,l=a*h+r*f+o*b;if(!l)return null;const m=1/l;return t[0]=h*m,t[1]=(-M*r+o*i)*m,t[2]=(c*r-o*s)*m,t[3]=f*m,t[4]=(M*a-o*e)*m,t[5]=(-c*a+o*u)*m,t[6]=b*m,t[7]=(-i*a+r*e)*m,t[8]=(s*a-r*u)*m,t}function j(t,n){const a=n[0],r=n[1],o=n[2],u=n[3],s=n[4],c=n[5],e=n[6],i=n[7],M=n[8],h=n[9],f=n[10],b=n[11],l=n[12],m=n[13],d=n[14],x=n[15],p=a*c-r*s,y=a*e-o*s,j=a*i-u*s,S=r*e-o*c,g=r*i-u*c,_=o*i-u*e,q=M*m-h*l,O=M*d-f*l,v=M*x-b*l,A=h*d-f*m,F=h*x-b*m,T=f*x-b*d;let z=p*T-y*F+j*A+S*v-g*O+_*q;return z?(z=1/z,t[0]=(c*T-e*F+i*A)*z,t[1]=(e*v-s*T-i*O)*z,t[2]=(s*F-c*v+i*q)*z,t[3]=(o*F-r*T-u*A)*z,t[4]=(a*T-o*v+u*O)*z,t[5]=(r*v-a*F-u*q)*z,t[6]=(m*_-d*g+x*S)*z,t[7]=(d*j-l*_-x*y)*z,t[8]=(l*g-m*j+x*p)*z,t):null}function S(t,n,a){return t[0]=2/n,t[1]=0,t[2]=0,t[3]=0,t[4]=-2/a,t[5]=0,t[6]=-1,t[7]=1,t[8]=1,t}function g(t){return"mat3("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+")"}function _(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+t[6]**2+t[7]**2+t[8]**2)}function q(t,n,a){return t[0]=n[0]+a[0],t[1]=n[1]+a[1],t[2]=n[2]+a[2],t[3]=n[3]+a[3],t[4]=n[4]+a[4],t[5]=n[5]+a[5],t[6]=n[6]+a[6],t[7]=n[7]+a[7],t[8]=n[8]+a[8],t}function O(t,n,a){return t[0]=n[0]-a[0],t[1]=n[1]-a[1],t[2]=n[2]-a[2],t[3]=n[3]-a[3],t[4]=n[4]-a[4],t[5]=n[5]-a[5],t[6]=n[6]-a[6],t[7]=n[7]-a[7],t[8]=n[8]-a[8],t}function v(t,n,a){return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=n[3]*a,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=n[7]*a,t[8]=n[8]*a,t}function A(t,n,a,r){return t[0]=n[0]+a[0]*r,t[1]=n[1]+a[1]*r,t[2]=n[2]+a[2]*r,t[3]=n[3]+a[3]*r,t[4]=n[4]+a[4]*r,t[5]=n[5]+a[5]*r,t[6]=n[6]+a[6]*r,t[7]=n[7]+a[7]*r,t[8]=n[8]+a[8]*r,t}function F(t,n){return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]&&t[3]===n[3]&&t[4]===n[4]&&t[5]===n[5]&&t[6]===n[6]&&t[7]===n[7]&&t[8]===n[8]}function T(n,a){const r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8],f=a[0],b=a[1],l=a[2],m=a[3],d=a[4],x=a[5],p=a[6],y=a[7],j=a[8],S=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__/* .getEpsilon */ .FD)();return Math.abs(r-f)<=S*Math.max(1,Math.abs(r),Math.abs(f))&&Math.abs(o-b)<=S*Math.max(1,Math.abs(o),Math.abs(b))&&Math.abs(u-l)<=S*Math.max(1,Math.abs(u),Math.abs(l))&&Math.abs(s-m)<=S*Math.max(1,Math.abs(s),Math.abs(m))&&Math.abs(c-d)<=S*Math.max(1,Math.abs(c),Math.abs(d))&&Math.abs(e-x)<=S*Math.max(1,Math.abs(e),Math.abs(x))&&Math.abs(i-p)<=S*Math.max(1,Math.abs(i),Math.abs(p))&&Math.abs(M-y)<=S*Math.max(1,Math.abs(M),Math.abs(y))&&Math.abs(h-j)<=S*Math.max(1,Math.abs(h),Math.abs(j))}function z(n){const a=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__/* .getEpsilon */ .FD)(),r=n[0],o=n[1],u=n[2],s=n[3],c=n[4],e=n[5],i=n[6],M=n[7],h=n[8];return Math.abs(1-(r*r+s*s+i*i))<=a&&Math.abs(1-(o*o+c*c+M*M))<=a&&Math.abs(1-(u*u+e*e+h*h))<=a}const B=i,E=O,L=Object.freeze(Object.defineProperty({__proto__:null,add:q,adjoint:c,copy:a,determinant:e,equals:T,exactEquals:F,frob:_,fromMat2d:x,fromMat4:n,fromQuat:p,fromRotation:m,fromScaling:d,fromTranslation:l,identity:o,invert:s,isOrthoNormal:z,mul:B,multiply:i,multiplyScalar:v,multiplyScalarAndAdd:A,normalFromMat4:j,normalFromMat4Legacy:y,projection:S,rotate:h,scale:f,scaleByVec2:b,set:r,str:g,sub:E,subtract:O,translate:M,transpose:u},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 31753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A6: () => (/* binding */ T),
/* harmony export */   Xd: () => (/* binding */ v),
/* harmony export */   Xr: () => (/* binding */ O),
/* harmony export */   hZ: () => (/* binding */ X),
/* harmony export */   lw: () => (/* binding */ x),
/* harmony export */   t2: () => (/* binding */ N),
/* harmony export */   x8: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports add, calculateW, copy, dot, equals, fromMat3, identity, invert, len, length, lerp, mul, normalize, q, random, rotateX, rotateY, rotateZ, rotationTo, scale, setAxes, slerp, sqlerp, sqrLen, squaredLength, str */
/* harmony import */ var _factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79441);
/* harmony import */ var _factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19165);
/* harmony import */ var _factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19913);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78115);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80347);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74772);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function I(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function b(t,n,s){s*=.5;const o=Math.sin(s);return t[0]=o*n[0],t[1]=o*n[1],t[2]=o*n[2],t[3]=Math.cos(s),t}function v(t,n){const s=2*Math.acos(n[3]),o=Math.sin(s/2);return o>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__/* .getEpsilon */ .FD)()?(t[0]=n[0]/o,t[1]=n[1]/o,t[2]=n[2]/o):(t[0]=1,t[1]=0,t[2]=0),s}function x(t,n,s){const o=n[0],a=n[1],r=n[2],e=n[3],c=s[0],i=s[1],u=s[2],h=s[3];return t[0]=o*h+e*c+a*u-r*i,t[1]=a*h+e*i+r*c-o*u,t[2]=r*h+e*u+o*i-a*c,t[3]=e*h-o*c-a*i-r*u,t}function y(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+e*c,t[1]=a*i+r*c,t[2]=r*i-a*c,t[3]=e*i-o*c,t}function A(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i-r*c,t[1]=a*i+e*c,t[2]=r*i+o*c,t[3]=e*i-a*c,t}function _(t,n,s){s*=.5;const o=n[0],a=n[1],r=n[2],e=n[3],c=Math.sin(s),i=Math.cos(s);return t[0]=o*i+a*c,t[1]=a*i-o*c,t[2]=r*i+e*c,t[3]=e*i-r*c,t}function k(t,n){const s=n[0],o=n[1],a=n[2];return t[0]=s,t[1]=o,t[2]=a,t[3]=Math.sqrt(Math.abs(1-s*s-o*o-a*a)),t}function z(t,n,s,o){const r=n[0],e=n[1],c=n[2],i=n[3];let u,h,M,f,l,m=s[0],p=s[1],q=s[2],j=s[3];return h=r*m+e*p+c*q+i*j,h<0&&(h=-h,m=-m,p=-p,q=-q,j=-j),1-h>(0,_common_js__WEBPACK_IMPORTED_MODULE_3__/* .getEpsilon */ .FD)()?(u=Math.acos(h),M=Math.sin(u),f=Math.sin((1-o)*u)/M,l=Math.sin(o*u)/M):(f=1-o,l=o),t[0]=f*r+l*m,t[1]=f*e+l*p,t[2]=f*c+l*q,t[3]=f*i+l*j,t}function E(t){const n=_common_js__WEBPACK_IMPORTED_MODULE_3__/* .RANDOM */ .Ov,s=n(),o=n(),a=n(),e=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=e*Math.sin(2*Math.PI*o),t[1]=e*Math.cos(2*Math.PI*o),t[2]=c*Math.sin(2*Math.PI*a),t[3]=c*Math.cos(2*Math.PI*a),t}function L(t,n){const s=n[0],o=n[1],a=n[2],r=n[3],e=s*s+o*o+a*a+r*r,c=e?1/e:0;return t[0]=-s*c,t[1]=-o*c,t[2]=-a*c,t[3]=r*c,t}function O(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function S(t,n){const s=n[0]+n[4]+n[8];let o;if(s>0)o=Math.sqrt(s+1),t[3]=.5*o,o=.5/o,t[0]=(n[5]-n[7])*o,t[1]=(n[6]-n[2])*o,t[2]=(n[1]-n[3])*o;else{let s=0;n[4]>n[0]&&(s=1),n[8]>n[3*s+s]&&(s=2);const a=(s+1)%3,r=(s+2)%3;o=Math.sqrt(n[3*s+s]-n[3*a+a]-n[3*r+r]+1),t[s]=.5*o,o=.5/o,t[3]=(n[3*a+r]-n[3*r+a])*o,t[a]=(n[3*a+s]+n[3*s+a])*o,t[r]=(n[3*r+s]+n[3*s+r])*o}return t}function T(t,n,s,o){const a=.5*Math.PI/180;n*=a,s*=a,o*=a;const r=Math.sin(n),e=Math.cos(n),c=Math.sin(s),i=Math.cos(s),u=Math.sin(o),h=Math.cos(o);return t[0]=r*i*h-e*c*u,t[1]=e*c*h+r*i*u,t[2]=e*i*u-r*c*h,t[3]=e*i*h+r*c*u,t}function H(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const W=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.c,X=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.s,Y=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.g,Z=x,w=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.d,B=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.h,C=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.l,D=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.j,F=D,G=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.b,J=G,K=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.n,N=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.a,Q=_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_5__.e;function R(t,n,s){const o=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.e)(n,s);return o<-.999999?((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,V,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.H)(U)<1e-6&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,$,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),b(t,U,Math.PI),t):o>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.h)(U,n,s),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+o,K(t,t))}const U=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),V=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .fromValues */ .fA)(1,0,0),$=(0,_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .fromValues */ .fA)(0,1,0);function tt(t,n,s,o,a,r){return z(nt,n,a,r),z(st,s,o,r),z(t,nt,st,2*r*(1-r)),t}const nt=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)(),st=(0,_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_1__/* .create */ .vt)();function ot(t,n,s,o){const a=at;return a[0]=s[0],a[3]=s[1],a[6]=s[2],a[1]=o[0],a[4]=o[1],a[7]=o[2],a[2]=-n[0],a[5]=-n[1],a[8]=-n[2],K(t,S(t,a))}const at=(0,_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)(),rt=Object.freeze(Object.defineProperty({__proto__:null,add:Y,calculateW:k,conjugate:O,copy:W,dot:B,equals:Q,exactEquals:N,fromEuler:T,fromMat3:S,getAxisAngle:v,identity:I,invert:L,len:F,length:D,lerp:C,mul:Z,multiply:x,normalize:K,random:E,rotateX:y,rotateY:A,rotateZ:_,rotationTo:R,scale:w,set:X,setAxes:ot,setAxisAngle:b,slerp:z,sqlerp:tt,sqrLen:J,squaredLength:G,str:H},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 8189:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3223);
/* harmony import */ var _handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70214);
/* harmony import */ var _Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80861);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49175);
/* harmony import */ var _workers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99722);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h{constructor(e,t,r,h,o={}){this._mainMethod=t,this._transferLists=r,this._listeners=[],this._promise=(0,_workers_js__WEBPACK_IMPORTED_MODULE_4__/* .open */ .ho)(e,{...o,schedule:h}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,o.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((t=>_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${e} worker: ${t}`)))}on(s,r){const i={removed:!1,eventName:s,callback:r,threadHandle:null};return this._listeners.push(i),this._connectListener(i),(0,_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .makeHandle */ .hA)((()=>{i.removed=!0,(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this._listeners,i),this._thread&&null!=i.threadHandle&&i.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t,s){return this.invokeMethod(this._mainMethod,e,t,s)}invokeMethod(e,t,s,i){if(this._thread){const r=this._transferLists[e],h=r?r(t):[];return this._thread.invoke(e,t,{transferList:h,signal:s,priority:i})}return this._promise?this._promise.then((()=>((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(s),this.invokeMethod(e,t,s)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}


/***/ }),

/***/ 70600:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ m)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(25336);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
;// ./node_modules/@arcgis/core/geometry/projection/localRotationUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t,n,o){const r=Math.sin(t),a=Math.cos(t),i=Math.sin(n),s=Math.cos(n),c=o;return c[0]=-r,c[4]=-i*a,c[8]=s*a,c[12]=0,c[1]=a,c[5]=-i*r,c[9]=s*r,c[13]=0,c[2]=0,c[6]=s,c[10]=i,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function o(o,r,a){return n(o,r,a),(0,mat4/* transpose */.mg)(a,a),a}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectors.js + 1 modules
var projectors = __webpack_require__(36603);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
;// ./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function m(r,e,m,R){const p=(0,projectors/* getProjectorClassification */.Tp)(r,R);if(null==p)return!1;const _=p.source.spatialReferenceId,A=p.dest.spatialReferenceId;if(_===A&&!u(A)&&(_!==projectors/* ProjectionID */.rz.UNKNOWN||(0,spatialReferenceUtils/* equals */.aI)(r,R)))return (0,mat4/* fromTranslation */.kN)(m,e),!0;if(u(A)){const r=projectors/* projectionTable */.w5[_][projectors/* ProjectionID */.rz.LON_LAT],t=projectors/* projectionTable */.w5[projectors/* ProjectionID */.rz.LON_LAT][A];return null!=r&&null!=t&&(r(e,0,C,0),t(C,0,E,0),n(a*C[0],a*C[1],m),m[12]=E[0],m[13]=E[1],m[14]=E[2],!0)}const L=u(_);if((A===projectors/* ProjectionID */.rz.WEB_MERCATOR||A===projectors/* ProjectionID */.rz.PLATE_CARREE||A===projectors/* ProjectionID */.rz.WGS84||A===projectors/* ProjectionID */.rz.CGCS2000)&&(_===projectors/* ProjectionID */.rz.WGS84||L||_===projectors/* ProjectionID */.rz.WEB_MERCATOR||_===projectors/* ProjectionID */.rz.CGCS2000)){const r=projectors/* projectionTable */.w5[_][projectors/* ProjectionID */.rz.LON_LAT],t=projectors/* projectionTable */.w5[projectors/* ProjectionID */.rz.LON_LAT][A];return null!=r&&null!=t&&(r(e,0,C,0),t(C,0,E,0),L?o(a*C[0],a*C[1],m):(0,mat4/* identity */.D_)(m),m[12]=E[0],m[13]=E[1],m[14]=E[2],!0)}return!1}function u(r){return r===projectors/* ProjectionID */.rz.SPHERICAL_ECEF||r===projectors/* ProjectionID */.rz.SPHERICAL_MARS_PCPF||r===projectors/* ProjectionID */.rz.SPHERICAL_MOON_PCPF||r===projectors/* ProjectionID */.rz.WGS84_ECEF}const a=(0,mathUtils/* deg2rad */.kU)(1),C=(0,vec3f64/* create */.vt)(),E=(0,vec3f64/* create */.vt)();


/***/ }),

/***/ 64159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony export projectPointToVectorAsync */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19913);
/* harmony import */ var _projectionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27646);
/* harmony import */ var _projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88133);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(e,o,i,c){if((0,_projectionUtils_js__WEBPACK_IMPORTED_MODULE_1__.canProjectWithoutEngine)(e.spatialReference,i)){f[0]=e.x,f[1]=e.y;const r=e.z;return f[2]=r??c??0,(0,_projectBuffer_js__WEBPACK_IMPORTED_MODULE_2__.projectBuffer)(f,e.spatialReference,0,o,i,0)}const s=(0,_projectionUtils_js__WEBPACK_IMPORTED_MODULE_1__.tryProjectWithZConversion)(e,i);return!!s&&(o[0]=s?.x,o[1]=s?.y,o[2]=s?.z??c??0,!0)}async function c(e,r,t,n,c){return await o(e.spatialReference,t,null,c),i(e,r,t,n)}const f=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();


/***/ }),

/***/ 42437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ projectVectorToVector_n)
});

// UNUSED EXPORTS: projectVectorToVectorAsync

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(64159);
;// ./node_modules/@arcgis/core/layers/graphics/dehydratedPoint.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,n,t,a){return{x:e,y:n,z:t,hasZ:null!=t,hasM:!1,spatialReference:a,type:"point"}}function n(e,n,t,a,l){e.x=n,e.y=t,e.z=a,e.hasZ=null!=a,e.spatialReference=l}

;// ./node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function projectVectorToVector_n(r,t,e,n,i){return!(null==t||null==n||r.length<2)&&(l.x=r[0],l.y=r[1],l.z=r[2],l.spatialReference=t,(0,projectPointToVector/* projectPointToVector */.g)(l,e,n,i))}async function i(t,o,e,i,l,a){return await r(o,i,null,a),projectVectorToVector_n(t,o,e,i,l)}const l=e(0,0,0,SpatialReference/* default */.A.WGS84);


/***/ }),

/***/ 32159:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y0: () => (/* binding */ w),
/* harmony export */   lO: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports SphericalECEFSpatialReference, SphericalPCPFMars, SphericalPCPFMoon */
/* harmony import */ var _ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34670);
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44153);
/* harmony import */ var _support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67488);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalECEFSpatialReferenceLike */ .fv),l=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalPCPFMarsLike */ .FY),f=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .SphericalPCPFMoonLike */ .LJ),w=new _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(_ellipsoidUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .WGS84ECEFSpatialReferenceLike */ .Ro);function a(e){const t=c.get(e);if(t)return t;let s=p;if(e)if(e===l)s=l;else if(e===f)s=f;else{const t=e.wkid,n=e.latestWkid;if(null!=t||null!=n)(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWKIDFromMars */ .tl)(t)||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWKIDFromMars */ .tl)(n)?s=l:((0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWKIDFromMoon */ .ZL)(t)||(0,_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isWKIDFromMoon */ .ZL)(n))&&(s=f);else{const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===k?s=l:e===m&&(s=f)}}}return c.set(e,s),s}const c=new Map,k=l.wkt.toUpperCase(),m=f.wkt.toUpperCase();


/***/ }),

/***/ 58823:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){static{c=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new c}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);


/***/ }),

/***/ 93320:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19913);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],i);


/***/ }),

/***/ 76836:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C: () => (/* binding */ plane_h),
  vt: () => (/* binding */ plane_M),
  lU: () => (/* binding */ plane_v),
  fA: () => (/* binding */ plane_U),
  mR: () => (/* binding */ P),
  Qj: () => (/* binding */ O),
  T7: () => (/* binding */ plane_x),
  gv: () => (/* binding */ plane_w),
  Ui: () => (/* binding */ plane_q),
  Tj: () => (/* binding */ plane_z),
  _I: () => (/* binding */ H),
  mP: () => (/* binding */ plane_y),
  LV: () => (/* binding */ D)
});

// UNUSED EXPORTS: IntersectFlags, IntersectResult, clip, clipInfinite, distance, equals, exactEquals, fromArray, fromNormalAndOffset, fromPoints, fromPositionAndNormal, intersectLine, intersectLineOrRay, negate, projectPointLocal, projectVector, signedDistance, up

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(74772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vector.js
var vector = __webpack_require__(74695);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(83339);
;// ./node_modules/@arcgis/core/views/3d/support/mathUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function mathUtils_f(t,n){return t>n?Math.cos(n):Math.cos(t)}function M(t,n,s){return 2*Math.atan(s*Math.tan(.5*t)/n)}function l(t,n,s){return 2*Math.atan(n*Math.tan(.5*t)/s)}function m(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],s=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,s,r))}function g(t,n){const s=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),r=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),o=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return c(t,s,r,o),t}function p(t,n,r){r=r||t;const o=s(t,n);c(r,t[0]-o*n[0],t[1]-o*n[1],t[2]-o*n[2]),u(r,r)}function q(t,n,s){Math.abs(t[0])>Math.abs(t[1])?c(n,0,1,0):c(n,1,0,0),i(s,t,n),i(n,s,t),u(s,s),u(n,n)}function b(t,n,s,r,o,a){const c=t+(n-t)*o;return c+(s+(r-s)*o-c)*a}function j(t,c,i,u=e()){const h=n(t),f=n(c),M=s(t,c)/(h*f);if(M<.9999999999999999){const n=Math.acos(M),s=((1-i)*h+i*f)/Math.sin(n),a=s/h*Math.sin((1-i)*n),e=s/f*Math.sin(i*n);return r(A,t,a),r(B,c,e),o(u,A,B)}return a(u,t,c,i)}function x(t,c,i,f=e(),M=e()){const l=n(t),m=n(c),g=s(t,c)/(l*m);if(g<.9999999999999999){const n=Math.acos(g),s=Math.sin(n),a=Math.sin(i*n),u=Math.sin((1-i)*n),h=(1-i)*l+i*m;{const n=h/s,i=n/m*a;r(A,t,n/l*u),r(B,c,i),o(f,A,B)}{const e=1/l*(-Math.cos((1-i)*n)*n*h+u*(-l+m));r(A,t,e);const f=1/m*(Math.cos(i*n)*n*h+a*(-l+m));r(B,c,f),o(M,A,B),r(M,M,1/s)}return M}return a(f,t,c,i),h(M,c,t),u(M,M),M}function v(n,r,o){n=u(A,n),r=u(B,r);const a=t(s(n,r));if(o){const t=i(z,n,r);if(s(t,o)<0)return-a}return a}function d(t){const n=t.length;return s=>{if(s<=t[0][0])return t[0][1];if(s>=t[n-1][0])return t[n-1][1];let r=1;for(;s>t[r][0];)r++;const o=t[r-1][0],a=t[r][0],c=(a-s)/(a-o);return c*t[r-1][1]+(1-c)*t[r][1]}}function k(t,n,r,o){h(w,n,t),h(y,r,t),i(o,w,y),u(o,o),o[3]=-s(t,o)}function U(t,n){if(c(n,0,0,0),t.length>0){for(let s=0;s<t.length;++s)o(n,n,t[s]);r(n,n,1/t.length)}}const w=(0,vec3f64/* create */.vt)(),y=(0,vec3f64/* create */.vt)(),z=(0,vec3f64/* create */.vt)(),A=(0,vec3f64/* create */.vt)(),B=(0,vec3f64/* create */.vt)();

;// ./node_modules/@arcgis/core/geometry/support/plane.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function plane_M(t=$){return[t[0],t[1],t[2],t[3]]}const plane_m=(/* unused pure expression or super */ null && (N)),plane_g=(/* unused pure expression or super */ null && (E));function D(t=$[0],n=$[1],r=$[2],o=$[3]){return plane_U(t,n,r,o,vectorStacks/* sv4d */.Km.get())}function plane_h(t,n){return plane_U(n[0],n[1],n[2],n[3],t)}function O(t){return t}function plane_U(t,n,r,o,c=plane_M()){return c[0]=t,c[1]=n,c[2]=r,c[3]=o,c}function C(t,n,r){return f(r,t),r[3]=n,r}function plane_l(t,n,r){const o=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;return r[0]=n[0]*c,r[1]=n[1]*c,r[2]=n[2]*c,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function plane_p(t,n,r,o=plane_M()){const c=r[0]-n[0],e=r[1]-n[1],u=r[2]-n[2],I=t[0]-n[0],i=t[1]-n[1],f=t[2]-n[2],s=e*f-u*i,N=u*I-c*f,E=c*i-e*I,a=s*s+N*N+E*E,T=Math.abs(a-1)>1e-5&&a>1e-12?1/Math.sqrt(a):1;return o[0]=s*T,o[1]=N*T,o[2]=E*T,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function plane_v(t,r,o,c=0,i=Math.floor(o*(1/3)),f=Math.floor(o*(2/3))){if(o<3)return!1;r(R,c);let s=i,N=!1;for(;s<o-1&&!N;)r(plane_j,s),s++,N=!(0,vec32.q)(R,plane_j);if(!N)return!1;for(s=Math.max(s,f),N=!1;s<o&&!N;)r(plane_b,s),s++,(0,vec32.d)(plane_d,R,plane_j),(0,vec32.n)(plane_d,plane_d),(0,vec32.d)(X,plane_j,plane_b),(0,vec32.n)(X,X),N=!(0,vec32.q)(R,plane_b)&&!(0,vec32.q)(plane_j,plane_b)&&Math.abs((0,vec32.e)(plane_d,X))<F;return N?(plane_p(R,plane_j,plane_b,t),!0):(0!==c||1!==i||2!==f)&&plane_v(t,r,o,0,1,2)}function plane_A(t,n,r=!0){const o=n.length/3;return plane_v(t,((t,r)=>i(t,n[3*r+0],n[3*r+1],n[3*r+2])),r?o-1:o)}const F=.99619469809,R=(0,vec3f64/* create */.vt)(),plane_j=(0,vec3f64/* create */.vt)(),plane_b=(0,vec3f64/* create */.vt)(),plane_d=(0,vec3f64/* create */.vt)(),X=(0,vec3f64/* create */.vt)();function plane_y(t,r,o){return r!==t&&plane_h(t,r),t[3]=-(0,vec32.e)(O(t),o),t}function L(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function P(t,n,r,o){return (0,vec32.h)(plane_b,n,t),plane_l(r,plane_b,o)}function plane_k(t,n,r,o){return Y(Z(t,n,e(S.get(),r,n),nt,o))}function plane_q(t,n,r){return null!=n&&Y(Z(t,n.origin,n.direction,rt,r))}function plane_x(t,n,r){return Y(Z(t,n.origin,n.vector,tt.NONE,r))}function plane_w(t,n,r){return Y(Z(t,n.origin,n.vector,tt.CLAMP,r))}function plane_z(t,n){return V(t,n)>=0}function plane_B(t,r){const o=n(O(t),r.ray.direction),c=-V(t,r.ray.origin);if(c<0&&o>=0)return!1;if(o>-1e-6&&o<1e-6)return c>0;if((c<0||o<0)&&!(c<0&&o<0))return!0;const e=c/o;return o>0?e<r.c1&&(r.c1=e):e>r.c0&&(r.c0=e),r.c0<=r.c1}function G(t,r){const o=n(O(t),r.ray.direction),c=-V(t,r.ray.origin);if(o>-1e-6&&o<1e-6)return c>0;const e=c/o;return o>0?e<r.c1&&(r.c1=e):e>r.c0&&(r.c0=e),r.c0<=r.c1}function H(t,n,c){const u=(0,vec32.g)(vectorStacks/* sv3d */.rq.get(),O(t),-t[3]),I=K(t,(0,vec32.d)(vectorStacks/* sv3d */.rq.get(),n,u),vectorStacks/* sv3d */.rq.get());return (0,vec32.f)(c,I,u),c}function J(t,n,r,o){const c=O(t),u=S.get(),I=S.get();_(c,u,I);const f=e(S.get(),r,n),s=a(u,f),N=a(I,f),E=a(c,f);return i(o,s,N,E)}function K(t,r,c){const u=(0,vec32.g)(vectorStacks/* sv3d */.rq.get(),O(t),(0,vec32.e)(O(t),r));return (0,vec32.d)(c,r,u),c}function Q(t,n){return Math.abs(V(t,n))}function V(t,r){return (0,vec32.e)(O(t),r)+t[3]}var W;function Y(t){return t===W.INTERSECTS_INSIDE_OUT||t===W.INTERSECTS_OUTSIDE_IN}function Z(c,e,u,I,i){const f=(0,vec32.e)(O(c),u),s=V(c,e);if(0===f)return s>=0?W.INSIDE:W.OUTSIDE;let N=-s/f;return I&tt.CLAMP&&(N=(0,mathUtils/* clamp */.qE)(N,0,1)),!(I&tt.INFINITE_MIN)&&N<0||!(I&tt.INFINITE_MAX)&&N>1?s>=0?W.INSIDE:W.OUTSIDE:((0,vec32.f)(i,e,(0,vec32.g)(i,u,N)),s>=0?W.INTERSECTS_INSIDE_OUT:W.INTERSECTS_OUTSIDE_IN)}!function(t){t[t.INTERSECTS_INSIDE_OUT=0]="INTERSECTS_INSIDE_OUT",t[t.INTERSECTS_OUTSIDE_IN=1]="INTERSECTS_OUTSIDE_IN",t[t.INSIDE=2]="INSIDE",t[t.OUTSIDE=3]="OUTSIDE"}(W||(W={}));const $=[0,0,1,0];var tt;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(tt||(tt={}));const nt=tt.INFINITE_MIN|tt.INFINITE_MAX,rt=tt.INFINITE_MAX;


/***/ }),

/***/ 63918:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ v),
/* harmony export */   Cr: () => (/* binding */ S),
/* harmony export */   LV: () => (/* binding */ k),
/* harmony export */   kb: () => (/* binding */ w),
/* harmony export */   oC: () => (/* binding */ y),
/* harmony export */   vt: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports closestPoints, equals, fromValues */
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3223);
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82444);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82541);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79441);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19913);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83339);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function b(i){return i?h((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(i.origin),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .clone */ .o8)(i.direction)):h((0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)())}function h(i,r){return{origin:i,direction:r}}function x(r,n){return i(r.origin,n.origin)&&i(r.direction,n.direction)}function k(i,r){const n=O.get();return n.origin=i,n.direction=r,n}function v(i,r=b()){return q(i.origin,i.direction,r)}function S(i,r,n=b()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(n.origin,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.d)(n.direction,r,i),n}function q(i,r,n=b()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(n.origin,i),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.c)(n.direction,r),n}function w(i,r){const n=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.h)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__/* .sv3d */ .rq.get(),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.n)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__/* .sv3d */ .rq.get(),i.direction),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.d)(_vectorStacks_js__WEBPACK_IMPORTED_MODULE_5__/* .sv3d */ .rq.get(),r,i.origin));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(n,n)}function y(i,r,n){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.e)(i.direction,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.d)(n,r,i.origin));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.f)(n,i.origin,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_3__.g)(n,i.direction,t)),n}function M(i,r,o,e){const c=i.origin,l=r.origin,j=i.direction,p=r.direction,b=s(g(z,j),g(A,p));if(Math.abs(b)>=1)return null;const h=f(z,j,p),x=m(U,l,c),k=n(B,j[0],j[1],j[2],-p[0],-p[1],-p[2],h[0],h[1],h[2]),v=t(B,k);if(null==v)return[o,e];const S=s(d(z,v[0],v[3],v[6]),x),q=s(d(A,v[1],v[4],v[7]),x);return a(o,c,u(U,j,S)),a(e,l,u(U,p,q)),[o,e]}const O=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_6__/* .ObjectStack */ .I((()=>b())),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),z=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),A=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),B=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 74695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EJ: () => (/* binding */ u),
/* harmony export */   g7: () => (/* binding */ f),
/* harmony export */   gr: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export projectPoint */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19913);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(t,r,o){const s=n(t,r)/n(t,t);return c(o,t,s)}function a(t,r){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(t,r)/(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(t)}function f(r,o){const c=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(r,o)/((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(r)*(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.l)(o));return-(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(c)}function u(s,c,e){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(m,s),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.n)(h,c);const i=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(m,h),a=(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .acosClamped */ .XM)(i),f=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.h)(m,m,h);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_1__.e)(f,e)<0?2*Math.PI-a:a}const m=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)(),h=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 83339:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rc: () => (/* binding */ f),
  J8: () => (/* binding */ o),
  rq: () => (/* binding */ c),
  Km: () => (/* binding */ r)
});

// UNUSED EXPORTS: sm3d, sv2d

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/nextTick.js
var nextTick = __webpack_require__(71709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(79441);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(26110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(19165);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(56560);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
;// ./node_modules/@arcgis/core/core/VectorStack.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class m{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,nextTick/* nextTick */.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new m(vec2f64/* create */.vt)}static createVec3f64(){return new m(vec3f64/* create */.vt)}static createVec4f64(){return new m(vec4f64/* create */.vt)}static createMat3f64(){return new m(mat3f64/* create */.vt)}static createMat4f64(){return new m(mat4f64/* create */.vt)}static createQuatf64(){return new m(quatf64/* create */.vt)}get test(){}}

;// ./node_modules/@arcgis/core/geometry/support/vectorStacks.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=m.createVec2f64(),c=m.createVec3f64(),r=m.createVec4f64(),a=m.createMat3f64(),f=m.createMat4f64(),o=m.createQuatf64();


/***/ }),

/***/ 85397:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  destroyContext: () => (/* binding */ g),
  dracoDecompressPointCloudData: () => (/* binding */ m),
  filterObbsForModifications: () => (/* binding */ y),
  filterObbsForModificationsSync: () => (/* binding */ S),
  initialize: () => (/* binding */ P),
  interpretObbModificationResults: () => (/* binding */ L),
  process: () => (/* binding */ SceneLayerWorker_u),
  project: () => (/* binding */ SceneLayerWorker_h),
  setLegacySchema: () => (/* binding */ SceneLayerWorker_d),
  setModifications: () => (/* binding */ p),
  setModificationsSync: () => (/* binding */ j),
  test: () => (/* binding */ M),
  transformNormals: () => (/* binding */ b)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(58823);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(93320);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(72449);
;// ./node_modules/@arcgis/core/libs/i3s/enums.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var enums_n,enums_e;!function(n){n[n.None=0]="None",n[n.Int16=1]="Int16",n[n.Int32=2]="Int32"}(enums_n||(enums_n={})),function(n){n[n.Replace=0]="Replace",n[n.Outside=1]="Outside",n[n.Inside=2]="Inside",n[n.Finished=3]="Finished"}(enums_e||(enums_e={}));

// EXTERNAL MODULE: ./node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(44764);
;// ./node_modules/@arcgis/core/libs/i3s/I3SModule.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return n||(n=new Promise((t=>__webpack_require__.e(/* import() */ 85585).then(__webpack_require__.bind(__webpack_require__, 85585)).then((t=>t.i)).then((({default:e})=>{const n=e({locateFile:i,onRuntimeInitialized:()=>t(n)});delete n.then})))).catch((t=>{throw t}))),n}function i(e){return (0,assets/* getAssetUrl */.s)(`esri/libs/i3s/${e}`)}let n;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(11268);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/WorkerHandle.js
var WorkerHandle = __webpack_require__(8189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js + 1 modules
var projectVectorToVector = __webpack_require__(42437);
;// ./node_modules/@arcgis/core/views/3d/layers/I3SMeshWorkerHandle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class I3SMeshWorkerHandle_n{constructor(s,e,t,o,r,i){this.layout=s,this.interleavedVertexData=e,this.indices=t,this.hasColors=o,this.hasModifications=r,this.positionData=i}}class I3SMeshWorkerHandle_p{constructor(s,e,t,o,r,i,h){this.componentOffsets=s,this.featureIds=e,this.anchorIds=t,this.anchors=o,this.transformedGeometry=r,this.globalTrafo=i,this.obb=h}}class a extends WorkerHandle/* WorkerHandle */.B{constructor(s){super("SceneLayerWorker","process",{process:s=>[s.geometryBuffer],project:s=>[s.positions.buffer],transformNormals:s=>[s.normals.buffer]},s,{hasInitialize:!0})}setModifications(s,e,t,o){const r={context:s,modifications:f(e,t,o),isGeodetic:o.isGeographic};this.broadcast(r,"setModifications")}setLegacySchema(s,e){const t=JSON.stringify(e);return this.broadcast({context:s,jsonSchema:t},"setLegacySchema")}destroyContext(s){return this.broadcast(s,"destroyContext")}project(s,e){return this.invokeMethod("project",s,e)}transformNormals(s,e){return this.invokeMethod("transformNormals",s,e)}}const u=new PooledArray/* default */.A({deallocator:null}),c=(0,vec3f64/* create */.vt)();function f(e,t,o){u.clear();let n=1/0,p=1/0,a=-1/0,f=-1/0,l=!1;for(const d of t){const e="clip"===d.type?enums_e.Inside:"mask"===d.type?enums_e.Outside:enums_e.Replace,t=d.geometry;let m=s=>s;if(t.spatialReference){if(!(0,projectionUtils.canProjectWithoutEngine)(t.spatialReference,o)){Logger/* default */.A.getLogger("esri.views.3d.layers.I3SMeshWorkerHandle").warn("Can't project modification polygon into layer spatial reference, ignoring modification");continue}m=s=>((0,projectVectorToVector/* projectVectorToVector */.F)(s,t.spatialReference,c,o),c)}else t.hasZ||(c[2]=0,m=s=>(c[0]=s[0],c[1]=s[1],c));l=l||e===enums_e.Outside,u.push(e),u.push(t.rings.length);for(const s of t.rings){u.push(s.length);for(const e of s){const s=m(e);u.push(s[0]),u.push(s[1]),u.push(s[2]),n=Math.min(n,s[0]),p=Math.min(p,s[1]),a=Math.max(a,s[0]),f=Math.max(f,s[1])}}}if(null!=e)if(l){const s=1e-4;u.push(enums_e.Inside),u.push(2),u.push(4),u.push(n-s),u.push(p-s),u.push(0),u.push(a+s),u.push(p-s),u.push(0),u.push(a+s),u.push(f+s),u.push(0),u.push(n-s),u.push(f+s),u.push(0),u.push(4),u.push(e[0]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[3]),u.push(0),u.push(e[0]),u.push(e[3]),u.push(0)}else u.push(enums_e.Outside),u.push(1),u.push(4),u.push(e[0]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[1]),u.push(0),u.push(e[2]),u.push(e[3]),u.push(0),u.push(e[0]),u.push(e[3]),u.push(0);u.push(enums_e.Finished);const m=new Float64Array(u.length);for(let s=0;s<u.length;++s)m[s]=u.at(s);return m}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(59661);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js + 8 modules
var I3SUtil = __webpack_require__(29672);
;// ./node_modules/@arcgis/core/views/3d/support/ElevationRange.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class ElevationRange_e{constructor(e=1/0,a=-1/0){this.elevationRangeMin=e,this.elevationRangeMax=a}get elevationRangeValid(){return!Number.isNaN(this.elevationRangeMin)}invalidateElevationRange(){this.elevationRangeMin=NaN}expandElevationRangeValues(e,a){this.elevationRangeMin=Math.min(this.elevationRangeMin,e),this.elevationRangeMax=Math.max(this.elevationRangeMax,a)}expandElevationRange(e){this.elevationRangeMin=Math.min(this.elevationRangeMin,e.elevationRangeMin),this.elevationRangeMax=Math.max(this.elevationRangeMax,e.elevationRangeMax)}setElevationRange(e){this.elevationRangeMin=e.elevationRangeMin,this.elevationRangeMax=e.elevationRangeMax}}

;// ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SNode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s extends ElevationRange_e{constructor(e,n){super(NaN,NaN),this.id=e,this.serviceMbsInIndexSR=n,this.serviceMbsInRenderSR=(0,sphere.f)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){(0,I3SUtil/* invalidateMbs */.Q7)(this.serviceMbsInRenderSR),this.serviceObbInRenderSR?.invalidate()}shareServiceBVsInRenderSRWith(e){this.serviceObbInRenderSR=e.serviceObbInRenderSR,this.serviceMbsInRenderSR=e.serviceMbsInRenderSR}}var o,r,I3SNode_a,d,I3SNode_c;!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(o||(o={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(r||(r={}));class h extends s{constructor(i,n,t,s,o,d,c,h,l,u){super(i,t),this.index=n,this.childCount=s,this.level=o,this.resources=d,this.version=c,this.lodMetric=h,this.maxError=l,this.numFeatures=u,this.failed=!1,this.cacheState=I3SNode_a.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=r.NotChecked,this.elevationAgnosticBoundingVolume=(0,vec4f64/* fromValues */.fA)(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(I3SNode_a||(I3SNode_a={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(d||(d={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(I3SNode_c||(I3SNode_c={}));class l{constructor(e,i,n,t){this.nodeHasLOD=e,this.isChosen=i,this.lodLevel=n,this.version=t}}

;// ./node_modules/@arcgis/core/views/3d/layers/SceneLayerWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function SceneLayerWorker_u(e){E=await U();const r=[e.geometryBuffer];return{result:A(E,e,r),transferList:r}}async function m(e){E=await U();const r=[e.geometryBuffer],{geometryBuffer:t}=e,o=t.byteLength,n=E._malloc(o),s=new Uint8Array(E.HEAPU8.buffer,n,o);s.set(new Uint8Array(t));const i=E.dracoDecompressPointCloudData(n,s.byteLength);if(E._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const a=i.featureIds?.length>0?i.featureIds.slice():null,f=i.positions.slice();return a&&r.push(a.buffer),r.push(f.buffer),{result:{positions:f,featureIds:a},transferList:r}}async function y(e){await U(),S(e);const r={buffer:e.buffer};return{result:r,transferList:[r.buffer]}}async function p(e){await U(),j(e)}async function SceneLayerWorker_d(e){E=await U(),E.setLegacySchema(e.context,e.jsonSchema)}async function SceneLayerWorker_h(e){const{localMatrix:n,origin:s,positions:i,vertexSpace:a}=e,f=SpatialReference/* default */.A.fromJSON(e.inSpatialReference),c=SpatialReference/* default */.A.fromJSON(e.outSpatialReference);let l;const[{projectBuffer:u},{initializeProjection:m}]=await Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 88133)),Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 27646))]);await m(f,c);const y=[0,0,0];if(!u(s,f,0,y,c,0))throw new Error("Failed to project");if("georeferenced"===a.type&&null==a.origin){if(l=new Float64Array(i.length),!u(i,f,0,l,c,0,l.length/3))throw new Error("Failed to project")}else{const e="georeferenced"===a.type?MeshGeoreferencedVertexSpace/* default */.A.fromJSON(a):MeshLocalVertexSpace/* default */.A.fromJSON(a),{projectMeshVertexPositions:r}=await __webpack_require__.e(/* import() */ 23513).then(__webpack_require__.bind(__webpack_require__, 23513)),s=r({vertexAttributes:{position:i},transform:n?{localMatrix:n}:void 0,vertexSpace:e,spatialReference:f},c);if(!s)throw new Error("Failed to project");l=s}const p=l.length,[d,h,b]=y;for(let r=0;r<p;r+=3)l[r]-=d,l[r+1]-=h,l[r+2]-=b;return{result:{projected:l,original:i,projectedOrigin:y},transferList:[l.buffer,i.buffer]}}async function b({normalMatrix:r,normals:t}){const o=new Float32Array(t.length);return (0,vec3.b)(o,t,r),(0,mathUtils/* hasScaling */.or)(r)&&(0,vec3.n)(o,o),{result:{transformed:o,original:t},transferList:[o.buffer,t.buffer]}}function g(e){x(e)}let w,E;function j(e){if(!E)return;const r=e.modifications,t=E._malloc(8*r.length),o=new Float64Array(E.HEAPU8.buffer,t,r.length);for(let n=0;n<r.length;++n)o[n]=r[n];E.setModifications(e.context,t,r.length,e.isGeodetic),E._free(t)}function A(e,r,t){const{context:o,globalTrafo:n,mbs:s,obbData:a,elevationOffset:l,geometryBuffer:u,geometryDescriptor:m,indexToVertexProjector:y,vertexToRenderProjector:p}=r,d=e._malloc(u.byteLength),h=33,b=e._malloc(h*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(e.HEAPU8.buffer,d,u.byteLength);g.set(new Uint8Array(u));const w=new Float64Array(e.HEAPU8.buffer,b,h);_(w,[NaN,NaN,NaN]);let E=w.byteOffset+3*w.BYTES_PER_ELEMENT,j=new Float64Array(w.buffer,E);_(j,n),E+=16*w.BYTES_PER_ELEMENT,j=new Float64Array(w.buffer,E),_(j,s),E+=4*w.BYTES_PER_ELEMENT,a&&(j=new Float64Array(w.buffer,E),_(j,a));const A=m,L={isDraco:!1,isLegacy:!1,color:r.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:r.needNormals&&r.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:r.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:r.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:A.featureIndex},S=e.process(o,!!r.obbData,d,g.byteLength,A,L,b,l,y,p,r.normalReferenceFrame);if(e._free(b),e._free(d),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const x=S.componentOffsets.length>0?S.componentOffsets.slice():null,P=S.featureIds.length>0?S.featureIds.slice():null,U=S.anchorIds.length>0?Array.from(S.anchorIds):null,M=S.anchors.length>0?Array.from(S.anchors):null,N=S.interleavedVertedData.slice().buffer,I=S.indicesType===enums_n.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),F=S.positions.slice(),{buffer:T,byteOffset:B,byteLength:O}=S.positionIndices,R=S.positionIndicesType===enums_n.Int16?new Uint16Array(T,B,O/2).slice():new Uint32Array(T,B,O/4).slice(),v=new I3SMeshWorkerHandle_n(r.layouts[0],N,I,S.hasColors,S.hasModifications,{data:F,indices:R});return P&&t.push(P.buffer),x&&t.push(x.buffer),t.push(N),t.push(I.buffer),t.push(F.buffer),t.push(R.buffer),new I3SMeshWorkerHandle_p(x,P,U,M,v,n,S.obb)}function L(e){return 0===e?r.Unmodified:1===e?r.PotentiallyModified:2===e?r.Culled:r.Unknown}function S(e){if(!E)return;const{context:r,buffer:t}=e,o=E._malloc(t.byteLength),n=t.byteLength/Float64Array.BYTES_PER_ELEMENT,s=new Float64Array(E.HEAPU8.buffer,o,n),i=new Float64Array(t);s.set(i),E.filterOBBs(r,o,n),i.set(s),E._free(o)}function x(e){E&&0===E.destroy(e)&&(E=null)}function _(e,r){for(let t=0;t<r.length;++t)e[t]=r[t]}async function P(){E||await U()}async function U(){return E||(E=await(w??=e())),E}const M={transform:(e,r)=>E&&A(E,e,r),destroy:x};


/***/ }),

/***/ 29392:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  wH: () => (/* binding */ U),
  MA: () => (/* binding */ w),
  E5: () => (/* binding */ C),
  m0: () => (/* binding */ D)
});

// UNUSED EXPORTS: createAttributeDataIndex, createGeometryDescriptor, createGeometryDescriptorForDraco, createGeometryDescriptorFromDefinition, createGeometryDescriptorFromSchema, createRawView, getBytesPerValue, isValueType, readDateStringArray, readHeader, readStringArray, valueType2ArrayBufferReader, valueType2TypedArrayClassMap

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(62088);
;// ./node_modules/@arcgis/core/geometry/support/UCharArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function UCharArray_t(t){return Array.isArray(t)?t.length<typedArrayUtil/* nativeArrayMaxSize */.y9?t:new Uint8Array(t):t.length<typedArrayUtil/* nativeArrayMaxSize */.y9?Array.from(t):t}

;// ./node_modules/@arcgis/core/geometry/support/UShortArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function UShortArray_t(t){return Array.isArray(t)?t.length<typedArrayUtil/* nativeArrayMaxSize */.y9?t:new Uint16Array(t):t.length<typedArrayUtil/* nativeArrayMaxSize */.y9?Array.from(t):t}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js
var LEPCC = __webpack_require__(70564);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(33763);
;// ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const b=()=>Logger/* default */.A.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function y(t,n,r){let o="",i=0;for(;i<r;){const u=t[n+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new Error/* default */.A("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new Error/* default */.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new Error/* default */.A("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new Error/* default */.A("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function g(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=F[u];n.fields[i.property]=a(e,r),r+=j[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function p(e,t,n){return m(e,t,n).map((e=>{const t=e?Date.parse(e):null;return null==t||Number.isNaN(t)?null:t}))}function m(t,n,r){const o=[];let i,u,a=0;for(u=0;u<t;u+=1){if(i=n[u],i>0){if(o.push(y(r,a,i-1)),0!==r[a+i-1])throw new Error/* default */.A("string-array-error","Invalid string array: missing null termination.")}else o.push(null);a+=i}return o}function w(e,t){return new(0,j[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function v(e,t){const n=w(e,t);if(n.length>=typedArrayUtil/* nativeArrayMaxSize */.y9)return n;const r=new Array;return n.forEach(((e,t)=>r.push(C(n,t)))),r}function C(e,t){if(!e)return null;const n=e[t];if((0,typedArrayUtil/* isInt16Array */.IY)(e))return n===typedArrayUtil/* minInt16 */.PI?null:n;if((0,typedArrayUtil/* isInt32Array */._G)(e))return n===typedArrayUtil/* minInt32 */.h2?null:n;return n!=n?null:n}function I(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function h(n,r,o){const i=null!=r.header?g(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let a=i.byteCount;for(let s=0;s<r.ordering.length;s++){const n=r.ordering[s],o=(0,lang/* clone */.o8)(r[n]);if(o.count=i.fields.count??0,"String"===o.valueType){if(o.byteOffset=a,o.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==o.encoding)throw new Error/* default */.A("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding});if(o.timeEncoding&&"ECMA_ISO8601"!==o.timeEncoding)throw new Error/* default */.A("unsupported-time-encoding","Unsupported time encoding.",{timeEncoding:o.timeEncoding})}else{if(!R(o.valueType))throw new Error/* default */.A("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=B(o.valueType);a+=a%e!==0?e-a%e:0,o.byteOffset=a,o.byteCount=e*o.valuesPerElement*o.count}}a+=o.byteCount??0,u.entries[n]=o}return u.byteCount=a-u.byteOffset,u}function A(t,n,r){if(n!==t&&b().error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new Error/* default */.A("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function O(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function U(e,t){const n=g(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const c of t.ordering){if(!t.vertexAttributes[c])continue;const e={...t.vertexAttributes[c],byteOffset:r,count:u},n=x[c]||"_"+c;o.vertexAttributes[n]=e,r+=B(e.valueType)*e.valuesPerElement*u}const a=i.faceCount;if(t.faces&&a){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:a};o.faces[e]=n,r+=B(n.valueType)*n.valuesPerElement*a}}const s=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&s){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:s};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:B(n.valueType))*n.valuesPerElement*s}}return A(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function E(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?S(e.compressedAttributes.attributes):e?O(e):T(t)}function T(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function S(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const x={position:VertexAttribute/* VertexAttribute */.r.POSITION,normal:VertexAttribute/* VertexAttribute */.r.NORMAL,color:VertexAttribute/* VertexAttribute */.r.COLOR,uv0:VertexAttribute/* VertexAttribute */.r.UV0,region:VertexAttribute/* VertexAttribute */.r.UVREGION};function D(t,n,r,o=!1){if("lepcc-rgb"===t.encoding)return o?(0,LEPCC/* decodeRGB */.mb)(n):UCharArray_t((0,LEPCC/* decodeRGB */.mb)(n));if("lepcc-intensity"===t.encoding)return o?(0,LEPCC/* decodeIntensity */.Ax)(n):UShortArray_t((0,LEPCC/* decodeIntensity */.Ax)(n));if(null!=t.encoding&&""!==t.encoding)throw new Error/* default */.A("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(b().warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(b().warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const i=h(n,t,r);A(i.byteOffset+i.byteCount,n.byteLength,"attribute");const u=i.entries.attributeValues||i.entries.objectIds;if(u){if("String"===u.valueType){const e=i.entries.attributeByteCounts,t=w(n,e),r=I(n,u);return u.timeEncoding?p(e.count,t,r):m(e.count,t,r)}return o?w(n,u):v(n,u)}throw new Error/* default */.A("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const j={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},F={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function R(e){return j.hasOwnProperty(e)}function B(e){return R(e)?j[e].BYTES_PER_ELEMENT:0}


/***/ }),

/***/ 29672:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Q7: () => (/* binding */ pe),
  s1: () => (/* binding */ B)
});

// UNUSED EXPORTS: MbsIntersectResult, SymbolInfo, addWraparound, checkPointCloudLayerCompatibleWithView, checkPointCloudLayerValid, checkRecyclable, checkSceneLayerCompatibleWithView, checkSceneLayerValid, checkSpatialReference, checkSpatialReferences, computeVisibilityObb, containsDraco, extractWkid, filterInPlace, findFieldsCaseInsensitive, findIntersectingNodes, getClipRect, getIndexCrs, getSymbolInfo, getVertexCrs, intersectBoundingRectWithMbs, isSupportedLocalModeProjection, isValidMbs, objectIdFilter, rendererNeedsTextures, transparentEdgeMaterial, whenGraphicAttributes

// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var core_has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(25336);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(26110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectVectorToVector.js + 1 modules
var projectVectorToVector = __webpack_require__(42437);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(2532);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/sphere.js + 1 modules
var sphere = __webpack_require__(59661);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
;// ./node_modules/@arcgis/core/layers/support/featurePopupQueryUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function featurePopupQueryUtils_s(n,s,l,u){const c=new Array(s.length),a=new Map,d=new Map,p=o(n.fieldsIndex,l.outFields),f=u?.hasRequiredFields??i;for(let t=0;t<s.length;t++){const o=s[t];if(o.isAggregate){c[t]=o;continue}let i=!1;if(u?.getPopupTemplate){const t=o.origin?.layer??o.sourceLayer??o.layer,n=u.getPopupTemplate(t);if(null==n)continue;const s=await featurePopupQueryUtils_r(n);e(u),i=s&&s.arcadeUtils.hasGeometryOperations(n)}if(i||!f(o,p)){const e=o.getObjectId();if(null!=e){a.set(e,{graphic:o,index:t});continue}const i=o.getGlobalId();if(null!=i){d.set(i,{graphic:o,index:t});continue}}c[t]=o}if(!n.queryFeatures||0===a.size&&0===d.size)return c.filter(Boolean);const g=[],y=(e,t)=>{t&&(e.outFields??=[],e.outFields.includes(t)||e.outFields.push(t))};if(a.size>0){const e=l.clone();y(e,n.objectIdField),"uniqueIdFields"in n&&n.uniqueIdFields?.length&&(e.outFields??=[],e.outFields.push(...n.uniqueIdFields)),e.objectIds=Array.from(a.keys()),g.push({type:"object-id",query:e,map:a})}const m="globalIdField"in n?n.globalIdField:null;if(null!=m&&d.size>0){const e=l.clone();y(e,m);const o=Array.from(d.keys());e.where=t(l.where,`${m} IN (${o.map((e=>`'${e}'`)).join(",")})`),g.push({type:"global-id",query:e,map:d})}const b=u?.updateSourceAttributes??!1;for(const{type:e,query:t,map:o}of g)try{const i=await n.queryFeatures(t,u);for(const t of i.features){const i="object-id"===e?t.getObjectId():t.getGlobalId();if(null==i)continue;const n=o.get(i);if(!n)continue;const{graphic:s,index:r}=n;if(b&&t.attributes){s.attributes??={};for(const e of p)e in t.attributes&&(s.attributes[e]=t.attributes[e])}const{geometry:l,origin:u}=s;t.geometry||=l,t.origin=u,c[r]=t}}catch{}return c.filter(Boolean)}async function featurePopupQueryUtils_r(e){if(e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return n()}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js + 2 modules
var I3SBinaryReader = __webpack_require__(29392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(34670);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js + 1 modules
var computeTranslationToOriginAndRotation = __webpack_require__(70600);
;// ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function I3SProjectionUtil_n(r,a,n,s,e){const h="east-north-up"===n?o(r):I3SProjectionUtil_c(r,a,s),m=t();return i(s,h,m,e),m}const I3SProjectionUtil_s=1,I3SProjectionUtil_e=5-I3SProjectionUtil_s;function I3SProjectionUtil_c(t,o,i){const n=r(),c=t[3],h=2**(Math.ceil(Math.log(c)*Math.LOG2E/I3SProjectionUtil_e)*I3SProjectionUtil_e+I3SProjectionUtil_s);if(i.isGeographic){const o=h/a(i).radius*180/Math.PI,r=Math.round(t[1]/o),s=Math.max(-90,Math.min(90,r*o)),e=o/Math.cos((Math.abs(s)-o/2)/180*Math.PI),c=Math.round(t[0]/e)*e;n[0]=c,n[1]=s}else{const o=Math.round(t[0]/h),r=Math.round(t[1]/h);n[0]=o*h,n[1]=r*h}const m=t[2]+o,M=Math.round(m/h);return n[2]=M*h,n}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
;// ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/interfaces.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var A;!function(A){A[A.TRANSPARENT=0]="TRANSPARENT",A[A.OPAQUE=1]="OPAQUE"}(A||(A={}));

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(95039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/floatRGBA.js
var floatRGBA = __webpack_require__(39637);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js
var DecodeSymbolColor_glsl = __webpack_require__(89458);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var ShaderOutput = __webpack_require__(77788);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js
var RgbaFloatEncoding_glsl = __webpack_require__(80002);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4DrawUniform.js
var Float4DrawUniform = __webpack_require__(7792);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/glsl.js
var glsl = __webpack_require__(62462);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/BindType.js
var BindType = __webpack_require__(78455);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/webgl/Uniform.js
var Uniform = __webpack_require__(29162);
;// ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/IntegerDrawUniform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class IntegerDrawUniform_e extends Uniform/* Uniform */.n{constructor(o,e){super(o,"int",BindType/* BindType */.c.Draw,((r,s,t)=>r.setUniform1i(o,e(s,t))))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Texture2DDrawUniform.js
var Texture2DDrawUniform = __webpack_require__(29247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/effects/geometry/olidUtils.js
var olidUtils = __webpack_require__(84618);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(33763);
;// ./node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var C;!function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"}(C||(C={}));const ComponentData_glsl_m=429496.7296;function ComponentData_glsl_f(o,r){e(o/ComponentData_glsl_m*.5+.5,r)}function ComponentData_glsl_u(e,r){switch(r.componentData){case C.Varying:return ComponentData_glsl_v(e,r);case C.Uniform:return p(e,r);case C.COUNT:return;default:o(r.componentData)}}function ComponentData_glsl_v(o,e){const{vertex:a,fragment:l}=o;a.include(n),a.uniforms.add(new i("componentColorTex",(o=>o.componentParameters.texture.texture))),o.attributes.add(x.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4");const c=e.output===t.ObjectAndLayerIdColor;c&&o.varyings.add("vObjectAndLayerIdColor","vec4"),o.include(r),a.constants.add("stride","float",s()?3:2),a.code.add(d`vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
float index = componentIndex * stride + typeOffset;
float texSize = float(textureSize(componentColorTex, 0).x);
float coordX = mod(index, texSize);
float coordY = floor(index / texSize);
return vec2(coordX, coordY) + 0.5;
}`),a.code.add(d`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);
    return texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
   }

  float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);
    vec4 encodedElevation = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
    return uninterpolatedRGBAToFloat(encodedElevation) * ${d.float(ComponentData_glsl_m)};
  }

  ${c?d`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);
            vObjectAndLayerIdColor = texelFetch(componentColorTex, ivec2(textureCoordinates), 0);
          }`:d`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),l.code.add(d`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${c?d`fragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function p(o,e){const{vertex:r,fragment:n}=o;o.varyings.add("vExternalColor","vec4"),r.uniforms.add(new a("externalColor",(o=>o.componentParameters.externalColor))).code.add(d`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`);const i=e.output===t.ObjectAndLayerIdColor;n.uniforms.add(new c("externalColorMixMode",(o=>o.componentParameters.externalColorMixMode))).code.add(d`
    void readExternalColor(out vec4 color, out int colorMixMode) {
      color = vExternalColor;
      colorMixMode = externalColorMixMode;
    }

    void outputObjectAndLayerIdColor() {
      ${l(i,"fragColor = vec4(0, 0, 0, 0);")}
    }
  `)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
var NormalAttribute_glsl = __webpack_require__(3525);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js
var DoublePrecision_glsl = __webpack_require__(30588);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3DrawUniform.js
var Float3DrawUniform = __webpack_require__(223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js
var Float3PassUniform = __webpack_require__(64802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js
var Matrix3DrawUniform = __webpack_require__(26746);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js
var Matrix3PassUniform = __webpack_require__(19835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix4BindUniform.js
var Matrix4BindUniform = __webpack_require__(7574);
;// ./node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function EdgeUtil_glsl_f(f,v){const{vertex:u}=f;u.include(t),f.include(e,v);const{silhouette:x,legacy:p,spherical:w}=v;u.uniforms.add(new s("componentDataTex",(o=>o.componentDataTexture))),f.attributes.add(c.COMPONENTINDEX,"float");const M=0,F=1,T=2,h=3,P=8,V=128;u.constants.add("lineWidthFractionFactor","float",8),u.constants.add("extensionLengthOffset","float",128),u.code.add(n`
    vec2 _componentTextureCoords(float componentIndex, float fieldOffset) {
      float fieldIndex = ${n.float(h)}  * componentIndex + fieldOffset;
      float texSize = float(textureSize(componentDataTex, 0).x);
      float colIndex = mod(fieldIndex, texSize);
      float rowIndex = floor(fieldIndex / texSize);

      return vec2(colIndex, rowIndex) + 0.5;
    }

    struct ComponentData {
      vec4 color;
      vec3 normal;
      vec3 normal2;
      float lineWidth;
      float extensionLength;
      float type;
      float verticalOffset;
    };

    ComponentData readComponentData() {
      vec2 colorIndex = _componentTextureCoords(componentIndex, ${n.float(M)});
      vec2 otherIndex = _componentTextureCoords(componentIndex, ${n.float(F)});
      vec2 verticalOffsetIndex = _componentTextureCoords(float(componentIndex), ${n.float(T)} );
      vec3 normal = normalModel();
      vec3 normal2 = ${x?n`decompressNormal(normal2Compressed)`:n`normal`};

      vec4 colorValue = texelFetch(componentDataTex, ivec2(colorIndex), 0);
      vec4 otherValue = texelFetch(componentDataTex, ivec2(otherIndex), 0);
      float verticalOffset = uninterpolatedRGBAToFloat(texelFetch(componentDataTex, ivec2(verticalOffsetIndex), 0)) * ${n.float(o)};

      return ComponentData(
        vec4(colorValue.rgb, colorValue.a * otherValue.w), // otherValue.w stores separate opacity
        normal, normal2,
        otherValue.x * (255.0 / ${n.float(P)} ),
        otherValue.y * 255.0 - ${n.float(V)},
        -(otherValue.z * 255.0) + 0.5, // SOLID (=0/255) needs to be > 0.0, SKETCHY (=1/255) needs to be <= 0;
        verticalOffset
      );
    }
  `),p?u.code.add(n`vec3 _modelToWorldNormal(vec3 normal) {
return (model * vec4(normal, 0.0)).xyz;
}
vec3 _modelToViewNormal(vec3 normal) {
return (localView * model * vec4(normal, 0.0)).xyz;
}`):(u.uniforms.add(new d("transformNormalGlobalFromModel",(o=>o.transformNormalGlobalFromModel))),u.code.add(n`vec3 _modelToWorldNormal(vec3 normal) {
return transformNormalGlobalFromModel * normal;
}`)),x?(f.attributes.add(c.NORMAL2COMPRESSED,"vec2"),u.code.add(n`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(normalize(data.normal + data.normal2));
}`)):u.code.add(n`vec3 worldNormal(ComponentData data) {
return _modelToWorldNormal(data.normal);
}`),p?u.code.add(n`void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
worldPos = (model * vec4(modelPos, 1.0)).xyz;
viewPos = (localView * vec4(worldPos, 1.0)).xyz;
}`):(u.include(r,v),u.uniforms.add(new m("transformViewFromCameraRelativeRS",(o=>o.transformViewFromCameraRelativeRS)),new d("transformWorldFromModelRS",(o=>o.transformWorldFromModelRS)),new a("transformWorldFromModelTL",(o=>o.transformWorldFromModelTL)),new a("transformWorldFromModelTH",(o=>o.transformWorldFromModelTH)),new l("transformWorldFromViewTL",(o=>o.transformWorldFromViewTL)),new l("transformWorldFromViewTH",(o=>o.transformWorldFromViewTH))),u.code.add(n`
      void worldAndViewFromModelPosition(vec3 modelPos, float verticalOffset, out vec3 worldPos, out vec3 viewPos) {
        vec3 rotatedModelPosition = transformWorldFromModelRS * modelPos;

        vec3 transformCameraRelativeFromModel = dpAdd(
          transformWorldFromModelTL,
          transformWorldFromModelTH,
          -transformWorldFromViewTL,
          -transformWorldFromViewTH
        );

        worldPos = transformCameraRelativeFromModel + rotatedModelPosition;

        if (verticalOffset != 0.0) {
          vec3 vUp = ${w?"normalize(transformWorldFromModelTL + rotatedModelPosition);":"vec3(0.0, 0.0, 1.0);"}
          worldPos += verticalOffset * vUp;
        }

        viewPos = transformViewFromCameraRelativeRS * worldPos;
      }
    `)),u.uniforms.add(new i("transformProjFromView",(o=>o.camera.projectionMatrix))).code.add(n`vec4 projFromViewPosition(vec3 position) {
return transformProjFromView * vec4(position, 1.0);
}`),u.code.add(n`float calculateExtensionLength(float extensionLength, float lineLength) {
return extensionLength / (log2(max(1.0, 256.0 / lineLength)) * 0.2 + 1.0);
}`)}function EdgeUtil_glsl_v(o){return o===EdgeUtil_glsl_u.Sketch||o===EdgeUtil_glsl_u.Mixed}var EdgeUtil_glsl_u,EdgeUtil_glsl_x;!function(o){o[o.Solid=0]="Solid",o[o.Sketch=1]="Sketch",o[o.Mixed=2]="Mixed",o[o.COUNT=3]="COUNT"}(EdgeUtil_glsl_u||(EdgeUtil_glsl_u={})),function(o){o[o.REGULAR=0]="REGULAR",o[o.SILHOUETTE=1]="SILHOUETTE"}(EdgeUtil_glsl_x||(EdgeUtil_glsl_x={}));

;// ./node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function edgeUtils_c(e){return e&&e.enabled&&(o(e)||i(e))&&null!=e.edges}function edgeUtils_u(e){return e&&e.enabled&&e.edges||null}function edgeUtils_a(e,n){return edgeUtils_f(edgeUtils_u(e),n)}function edgeUtils_f(o,i){if(null==o)return null;const s=null!=o.color?t(e.toUnitRGBA(o.color)):r(0,0,0,0),l=n(o.size),c=n(o.extensionLength);switch(o.type){case"solid":return edgeUtils_g({color:s,size:l,extensionLength:c,...i});case"sketch":return edgeUtils_p({color:s,size:l,extensionLength:c,...i});default:return}}function edgeUtils_g(e){return{...edgeUtils_m,...e,type:EdgeUtil_glsl_u.Solid}}function edgeUtils_p(e){return{...edgeUtils_d,...e,type:l.Sketch}}const edgeUtils_m={color:(0,vec4f64/* fromValues */.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1},edgeUtils_d={color:(0,vec4f64/* fromValues */.fA)(0,0,0,.2),size:1,extensionLength:0,opacity:1,objectTransparency:A.OPAQUE,hasSlicePlane:!1};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var symbolColorUtils = __webpack_require__(96153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js + 1 modules
var orientedBoundingBox = __webpack_require__(75359);
;// ./node_modules/@arcgis/core/views/support/layerViewUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function layerViewUtils_n(e){return e&&"function"==typeof e.highlight}function layerViewUtils_i(e){return e&&"function"==typeof e.maskOccludee}function layerViewUtils_r(e,n,i){return null==e||e>=i&&(0===n||e<=n)}function layerViewUtils_t(e,n){if(n&&e){const{minScale:i,maxScale:t}=e;if(layerViewUtils_c(i,t))return layerViewUtils_r(n,i,t)}return!0}function layerViewUtils_c(e,n){return null!=e&&e>0||null!=n&&n>0}function layerViewUtils_a(e){return!e?.minScale||!e.maxScale||e.minScale>=e.maxScale}const layerViewUtils_o=()=>!has("disable-feature:layer-based-scale-visibility");function layerViewUtils_u(e){return null!=e&&"object"==typeof e&&"createQuery"in e&&"queryFeatures"in e&&"layer"in e&&"view"in e}function layerViewUtils_l(n,i,r){return new e("layerview:spatial-reference-incompatible",`The spatial reference of this ${n}${i?`(wkid:${i})`:""} is incompatible with the spatial reference of the view${r?`(wkid:${r})`:""}.`,{})}

;// ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function I3SUtil_C(e){return e?parseInt(e.slice(e.lastIndexOf("/")+1),10):void 0}function U(e){if(has("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes?.encoding)return!0;return!1}function N(e,t,r,o){r.traverse(t,(t=>{const r=t.serviceMbsInIndexSR;return(null!=r&&I3SUtil_A(e,r))!==_.OUTSIDE&&(o(t),!0)}))}function k(e,t,r){let o=0,n=0;for(let i=0;i<t.length&&o<e.length;i++)e[o]===t[i]&&(r(i)&&(e[n]=e[o],n++),o++);e.length=n}function D(e,r,o){let n=0,i=0;for(;n<o.length;){t(e,o[n])>=0===r&&(o[i]=o[n],i++),n++}o.length=i}function O(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return W[0]=(e[0]-t.position[0])/t.rotationScale[0],W[1]=(e[1]-t.position[1])/t.rotationScale[4],W[2]=(e[2]-t.position[0])/t.rotationScale[0],W[3]=(e[3]-t.position[1])/t.rotationScale[4],W}const W=(0,aaBoundingRect/* create */.vt)();var _;function I3SUtil_A(e,t){const r=t[0],o=t[1],n=t[3],i=e[0]-r,s=r-e[2],a=e[1]-o,l=o-e[3],c=Math.max(i,s,0),u=Math.max(a,l,0),f=c*c+u*u;if(f>n*n)return _.OUTSIDE;if(f>0)return _.INTERSECTS_CENTER_OUTSIDE;return-Math.max(i,s,a,l)>n?_.INSIDE:_.INTERSECTS_CENTER_INSIDE}function K(e,t,r){const o=[],n=r?.missingFields,i=r?.originalFields;let s=!1;for(const a of e){const e=t.get(a);e?(i?.push(a),o.push(e.name),a!==e.name&&(s=!0)):n?.push(a)}return r&&"hasMismatchedCasing"in r&&(r.hasMismatchedCasing=s),o}async function L(e,t,o,n,i,s){if(0===t.length)return[];const a=e.attributeStorageInfo;if(null!=e.associatedLayer)try{return await G(e.associatedLayer,t,n,s)}catch(l){if(e.associatedLayer.loaded)throw l}if(a){const r=q(e,t,o,i),l=e.parsedUrl.path;return await Promise.allSettled(r.map((t=>P(l,a,t.node,t.indices,n,e.apiKey,e.customParameters,s).then((e=>{for(let r=0;r<t.graphics.length;r++){const o=t.graphics[r],n=e[r];if(o.attributes)for(const e in o.attributes)e in n||(n[e]=o.attributes[e]);o.attributes=n}}))))),t}throw new r("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function q({globalIdField:e},t,r,o){const n=new Map,i=[],s=o();for(const a of t){const t=a.attributes?.[r],o=null==t?a.getGlobalId():void 0;for(let r=0;r<s.length;r++){const l=s[r],c=F(l,t,e,o);if(c<0)continue;let u=n.get(l.node);u||(u={node:l.node,indices:[],graphics:[]},i.push(u),n.set(l.node,u)),u.indices.push(c),u.graphics.push(a);for(let e=r;e>0;e--)s[e]=s[e-1];s[0]=l;break}}return i}function F(e,t,r,o){if(null!=t&&"number"==typeof t)return e.featureIds.indexOf(t);if(null==o||null==r)return-1;const n=e.attributeInfo?.attributeData?.[r];return n?n.indexOf(o):-1}async function G(e,t,r,o){const n=[],i={hasMismatchedCasing:!1,originalFields:n},s=K(r,e.fieldsIndex,i),a=new S({outFields:[...s]});if(await g(e,t,a,{updateSourceAttributes:!0,...o}),!i.hasMismatchedCasing)return t;for(let l=0;l<t.length;l++){const e=t[l];if(e.attributes)for(let t=0;t<n.length;t++){const r=n[t],o=s[t];o in e.attributes&&(e.attributes[r]=e.attributes[o],delete e.attributes[o])}}return t}function P(e,t,r,o,n,i,s,a){return B(e,t,r.resources.attributes,o,n,i,s,a)}async function B(t,r,o,n,i,s,a,l){const c=[];for(const e of r)if(e&&i.includes(e.name)){const r=`${t}/nodes/${o}/attributes/${e.key}/0`;c.push({url:r,storageInfo:e})}const u=await Promise.allSettled(c.map((t=>(0,request/* default */.A)(t.url,{responseType:"array-buffer",query:{...a,token:s},signal:l?.signal}).then((e=>(0,I3SBinaryReader/* readBinaryAttribute */.m0)(t.storageInfo,e.data)))))),f=[];for(const e of n){const t={};for(let r=0;r<u.length;r++){const o=u[r];if("fulfilled"===o.status){const n=o.value;t[c[r].storageInfo.name]=(0,I3SBinaryReader/* getCachedAttributeValue */.E5)(n,e)}}f.push(t)}return f}function V(e){const t=e.store,o=t.indexCRS||t.geographicCRS,n=void 0===o?t.indexWKT:void 0;if(n){if(!e.spatialReference)throw new r("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new r("layerview:store-spatial-reference-wkt-index-incompatible","The indexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const i=o?new u(I3SUtil_C(o)):e.spatialReference;return i.equals(e.spatialReference)?e.spatialReference:i}function $(e){const t=e.store,o=t.vertexCRS||t.projectedCRS,n=void 0===o?t.vertexWKT:void 0;if(n){if(!e.spatialReference)throw new r("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(n!==e.spatialReference.wkt)throw new r("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const i=o?new u(I3SUtil_C(o)):e.spatialReference;return i.equals(e.spatialReference)?e.spatialReference:i}function z(e,t,r){if(!c(e,t))throw j("scene layer",e?.wkid,t?.wkid);if("local"===r&&!Z(e,t))throw j("scene layer",e?.wkid,t?.wkid)}function Q(e,t,o){if(e.serviceUpdateTimeStamp?.lastUpdate!==t.serviceUpdateTimeStamp?.lastUpdate||!o.isEmpty||e.associatedLayer?.url!==t.associatedLayer?.url)throw new r("layerview:recycle-failed","Could not recycle layerview")}function Z(e,t){return e.equals(t)||e.isWGS84&&t.isWebMercator||e.isWebMercator&&t.isWGS84}function H(e,t,r){const o=V(e),n=$(e);z(o,t,r),z(n,t,r)}function J(e){return(null==e.geometryType||"triangles"===e.geometryType)&&((null==e.topology||"PerAttributeArray"===e.topology)&&null!=e.vertexAttributes?.position)}function X(e){if(null==e.store?.defaultGeometrySchema||!J(e.store.defaultGeometrySchema))throw new r("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function Y(e,t){H(e,t.spatialReference,t.viewingMode)}function ee(e){return null!=e.geometryType&&"points"===e.geometryType&&((null==e.topology||"PerAttributeArray"===e.topology)&&((null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&null!=e.vertexAttributes?.position))}function te(e){if(null==e.store?.defaultGeometrySchema||!ee(e.store.defaultGeometrySchema))throw new r("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function re(e,t){z(e.spatialReference,t.spatialReference,t.viewingMode)}function oe(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function ne(e){return"mesh-3d"===e.type}function ie(e){if(null==e||!oe(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.symbols;if(0===t.length)return!0;for(const r of t){if(!ne(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items)if("fill"!==e.type||null==e.material?.color||"replace"!==e.material.colorMixMode)return!0}return!1}!function(e){e[e.OUTSIDE=0]="OUTSIDE",e[e.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",e[e.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",e[e.INSIDE=3]="INSIDE"}(_||(_={}));const se=edgeUtils_g({color:[0,0,0,0],opacity:0});class ae{constructor(){this.edgeMaterial=null,this.material=null,this.castShadows=!0}}function le(e){const t=new ae;let r=!1,o=!1;for(const n of e.symbolLayers.items)if("fill"===n.type&&n.enabled){const e=n.material,i=n.edges;if(null!=e&&!r){const o=e.color,i=x(e.colorMixMode);t.material=null!=o?{color:[o.r/255,o.g/255,o.b/255],alpha:o.a,colorMixMode:i}:{color:[1,1,1],alpha:1,colorMixMode:E.Multiply},t.castShadows=n.castShadows,r=!0}null==i||o||(t.edgeMaterial=v(i,{}),o=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:E.Multiply}),t}function ce(e,t){return(0|e)+(0|t)|0}function ue(e,t,r,n,l,c,u){if(!c||0===c.length||null==t||!e.serviceMbsInIndexSR)return null;const p=I(e.serviceMbsInIndexSR,l,"none",r,t);o(be,p);let g=null;const S=()=>{if(!g)if(g=me,m(he),null!=e.serviceObbInIndexSR){e.serviceObbInIndexSR.transform(ye,r,t,l,u),ye.getCorners(g);for(const e of g)s(e,e,be),d(he,e)}else{const o=e.serviceMbsInIndexSR;if(!o)return;const n=o[3];f(y(o),r,ge,t),s(ge,ge,be),ge[2]+=l;for(let e=0;e<8;++e){const t=1&e?n:-n,r=2&e?n:-n,o=4&e?n:-n,i=g[e];a(i,[ge[0]+t,ge[1]+r,ge[2]+o]),d(he,i)}}};let b=1/0,w=-1/0;const T=e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r?.hasZ)return;m(de);const o=r.spatialReference||n,a=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>(i(ge,r[0],r[1],r[2]),f(ge,o,ge,t),s(ge,ge,be),d(de,ge),Math.min(ge[2],e))),e)),1/0);S(),h(he,de)&&(b=Math.min(b,a),w=Math.max(w,a))};if(c.forEach((e=>T(e))),b===1/0)return null;const v=(e,t,r)=>{s(ge,r,p),e[t]=ge[0],e[t+1]=ge[1],e[t+2]=ge[2],t+=24,r[2]=b,s(ge,r,p),e[t]=ge[0],e[t+1]=ge[1],e[t+2]=ge[2],t+=24,r[2]=w,s(ge,r,p),e[t]=ge[0],e[t+1]=ge[1],e[t+2]=ge[2]};for(let o=0;o<8;++o)v(Se.data,3*o,g[o]);return M(Se)}function fe(e){return e[3]>=0}function pe(e){null!=e&&(e[3]=-1)}const me=[(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)(),(0,vec3f64/* create */.vt)()],de=(0,aaBoundingRect/* create */.vt)(),he=(0,aaBoundingRect/* create */.vt)(),ye=new orientedBoundingBox/* Obb */.ab,ge=(0,vec3f64/* create */.vt)(),Se={data:new Array(72),size:3,exclusive:!0,stride:3},be=(0,mat4f64/* create */.vt)();


/***/ }),

/***/ 70564:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ax: () => (/* binding */ w),
/* harmony export */   Me: () => (/* binding */ c),
/* harmony export */   mb: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function r(e,r,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,t),checksum:r.getUint32(n+o.checksumOffset,t)}}const n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return{sizeLo:e.getUint32(o+n.sizeLo,t),sizeHi:e.getUint32(o+n.sizeHi,t),minX:e.getFloat64(o+n.minX,t),minY:e.getFloat64(o+n.minY,t),minZ:e.getFloat64(o+n.minZ,t),maxX:e.getFloat64(o+n.maxX,t),maxY:e.getFloat64(o+n.maxY,t),maxZ:e.getFloat64(o+n.maxZ,t),errorX:e.getFloat64(o+n.errorX,t),errorY:e.getFloat64(o+n.errorY,t),errorZ:e.getFloat64(o+n.errorZ,t),count:e.getUint32(o+n.count,t),reserved:e.getUint32(o+n.reserved,t)}}function c(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad identifier");if(a>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Unknown version");const u=i(c,d);d+=n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s(t,d,h),d=s(t,d,w),d=s(t,d,g),d=s(t,d,p),d!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s(e,t,o){const r=[];t=d(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function d(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,t),r+=5;else if(1===l)a=i.getUint16(1,t),r+=3;else{if(2!==l)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2}if(d)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return r+g}const l={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function a(e,o){return{sizeLo:e.getUint32(o+l.sizeLo,t),sizeHi:e.getUint32(o+l.sizeHi,t),count:e.getUint32(o+l.count,t),colorMapCount:e.getUint16(o+l.colorMapCount,t),lookupMethod:e.getUint8(o+l.lookupMethod),compressionMethod:e.getUint8(o+l.compressionMethod)}}function u(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Unknown version");const d=a(n,i);i+=l.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2]}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,o){return{sizeLo:e.getUint32(o+f.sizeLo,t),sizeHi:e.getUint32(o+f.sizeHi,t),count:e.getUint32(o+f.count,t),scaleFactor:e.getUint16(o+f.scaleFactor,t),bitsPerPoint:e.getUint8(o+f.bitsPerPoint),reserved:e.getUint8(o+f.reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad identifier");if(s>1)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Unknown version");const l=h(n,i);i+=f.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else{const o=[];if(d(t,i,o)!==t.byteLength)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}return a}


/***/ }),

/***/ 96153:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k5: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports encodeSymbolColor, parseColorMixMode */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;function e(t){switch(t){case"multiply":default:return n.Multiply;case"ignore":return n.Ignore;case"replace":return n.Replace;case"tint":return n.Tint}}function r(e,r,a){if(null==e||r===n.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const c=t(Math.round(e[3]*i),0,i),p=0===c||r===n.Tint?0:r===n.Replace?u:l;a[0]=t(Math.round(e[0]*o),0,o),a[1]=t(Math.round(e[1]*o),0,o),a[2]=t(Math.round(e[2]*o),0,o),a[3]=c+p}!function(t){t[t.Multiply=1]="Multiply",t[t.Ignore=2]="Ignore",t[t.Replace=3]="Replace",t[t.Tint=4]="Tint"}(n||(n={}));const o=255,i=85,u=(/* unused pure expression or super */ null && (i)),l=2*i;


/***/ }),

/***/ 75359:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ab: () => (/* binding */ orientedBoundingBox_I),
  gm: () => (/* binding */ orientedBoundingBox_L)
});

// UNUSED EXPORTS: compute

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(82541);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(79441);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(26110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
var quat = __webpack_require__(31753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(19165);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(74772);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec4f64.js
var vec4f64 = __webpack_require__(76982);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(34670);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var spatialReferenceEllipsoidUtils = __webpack_require__(32159);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js + 1 modules
var computeTranslationToOriginAndRotation = __webpack_require__(70600);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(88133);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectors.js + 1 modules
var projectors = __webpack_require__(36603);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/plane.js + 1 modules
var plane = __webpack_require__(76836);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/vectorStacks.js + 1 modules
var vectorStacks = __webpack_require__(83339);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/ViewingMode.js
var ViewingMode = __webpack_require__(84456);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(56560);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var Attribute = __webpack_require__(10941);
;// ./node_modules/@arcgis/core/views/3d/support/dito.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const m=1e-6,f=(0,vec3f64/* create */.vt)(),h=(0,vec3f64/* create */.vt)();function u(t,r){const{data:n,size:i}=t,o=n.length/i;if(o<=0)return;const s=new tt(t);it(f,s.minProj,s.maxProj),st(f,f,.5),ot(h,s.maxProj,s.minProj);const a=nt(h),m=new rt;m.quality=a,o<14&&(t=new Attribute/* Vertices */.K(new Float64Array(s.buffer,112,42),3));const u=(0,vec3f64/* create */.vt)(),j=(0,vec3f64/* create */.vt)(),P=(0,vec3f64/* create */.vt)(),b=(0,vec3f64/* create */.vt)(),x=(0,vec3f64/* create */.vt)(),I=(0,vec3f64/* create */.vt)(),N=(0,vec3f64/* create */.vt)();switch(l(s,t,N,u,j,P,b,x,I,m)){case 1:return void O(f,h,r);case 2:return void K(t,b,r)}w(t,N,u,j,P,b,x,I,m),L(t,m.b0,m.b1,m.b2,D,H);const V=(0,vec3f64/* create */.vt)();ot(V,H,D),m.quality=nt(V),m.quality<a?Z(m.b0,m.b1,m.b2,D,H,V,r):O(f,h,r)}function l(t,r,n,i,o,s,e,a,c,f){if(A(t,i,o),ft(i,o)<m)return 1;ot(e,i,o),ct(e,e);return q(r,i,e,s)<m?2:(ot(a,o,s),ct(a,a),ot(c,s,i),ct(c,c),at(n,a,e),ct(n,n),Y(r,n,e,a,c,f),0)}const j=(0,vec3f64/* create */.vt)(),P=(0,vec3f64/* create */.vt)(),b=(0,vec3f64/* create */.vt)(),x=(0,vec3f64/* create */.vt)(),I=(0,vec3f64/* create */.vt)(),N=(0,vec3f64/* create */.vt)(),V=(0,vec3f64/* create */.vt)(),y=(0,vec3f64/* create */.vt)();function w(t,r,n,i,o,s,e,a,c){M(t,r,n,j,P),void 0!==j[0]&&(ot(b,j,n),ct(b,b),ot(x,j,i),ct(x,x),ot(I,j,o),ct(I,I),at(N,x,s),ct(N,N),at(V,I,e),ct(V,V),at(y,b,a),ct(y,y),Y(t,N,s,x,b,c),Y(t,V,e,I,x,c),Y(t,y,a,b,I,c)),void 0!==P[0]&&(ot(b,P,n),ct(b,b),ot(x,P,i),ct(x,x),ot(I,P,o),ct(I,I),at(N,x,s),ct(N,N),at(V,I,e),ct(V,V),at(y,b,a),ct(y,y),Y(t,N,s,x,b,c),Y(t,V,e,I,x,c),Y(t,y,a,b,I,c))}function A(t,r,n){let i=ft(t.maxVert[0],t.minVert[0]),o=0;for(let s=1;s<7;++s){const r=ft(t.maxVert[s],t.minVert[s]);r>i&&(i=r,o=s)}et(r,t.minVert[o]),et(n,t.maxVert[o])}const g=[0,0,0];function q(t,r,n,i){const{data:o,size:s}=t;let e=Number.NEGATIVE_INFINITY,a=0;for(let c=0;c<o.length;c+=s){g[0]=o[c]-r[0],g[1]=o[c+1]-r[1],g[2]=o[c+2]-r[2];const t=n[0]*g[0]+n[1]*g[1]+n[2]*g[2],i=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=g[0]*g[0]+g[1]*g[1]+g[2]*g[2]-t*t/i;s>e&&(e=s,a=c)}return et(i,o,a),e}const d=(0,vec2f64/* create */.vt)();function M(t,r,n,i,o){G(t,r,d,o,i);const s=ht(n,r);d[1]-m<=s&&(i[0]=void 0),d[0]+m>=s&&(o[0]=void 0)}const F=(0,vec3f64/* create */.vt)(),T=(0,vec3f64/* create */.vt)(),v=(0,vec3f64/* create */.vt)(),E=(0,vec3f64/* create */.vt)(),p=(0,vec3f64/* create */.vt)(),z=(0,vec3f64/* create */.vt)();function Y(t,r,n,i,o,s){if(mt(r)<m)return;at(F,n,r),at(T,i,r),at(v,o,r),S(t,r,d),p[1]=d[0],E[1]=d[1],z[1]=E[1]-p[1];const e=[n,i,o],a=[F,T,v];for(let c=0;c<3;++c){S(t,e[c],d),p[0]=d[0],E[0]=d[1],S(t,a[c],d),p[2]=d[0],E[2]=d[1],z[0]=E[0]-p[0],z[2]=E[2]-p[2];const n=nt(z);n<s.quality&&(et(s.b0,e[c]),et(s.b1,r),et(s.b2,a[c]),s.quality=n)}}const _=(0,vec3f64/* create */.vt)();function S(t,r,n){const{data:i,size:o}=t;n[0]=Number.POSITIVE_INFINITY,n[1]=Number.NEGATIVE_INFINITY;for(let s=0;s<i.length;s+=o){const t=i[s]*r[0]+i[s+1]*r[1]+i[s+2]*r[2];n[0]=Math.min(n[0],t),n[1]=Math.max(n[1],t)}}function G(t,r,n,i,o){const{data:s,size:e}=t;et(i,s),et(o,i),n[0]=ht(_,r),n[1]=n[0];for(let a=e;a<s.length;a+=e){const t=s[a]*r[0]+s[a+1]*r[1]+s[a+2]*r[2];t<n[0]&&(n[0]=t,et(i,s,a)),t>n[1]&&(n[1]=t,et(o,s,a))}}function O(t,n,i){i.center=t,i.halfSize=(0,vec32.g)(n,n,.5),i.quaternion=quatf64/* IDENTITY */.zK}const k=(0,vec3f64/* create */.vt)(),B=(0,vec3f64/* create */.vt)(),C=(0,vec3f64/* create */.vt)(),D=(0,vec3f64/* create */.vt)(),H=(0,vec3f64/* create */.vt)(),J=(0,vec3f64/* create */.vt)();function K(t,r,n){et(k,r),Math.abs(r[0])>Math.abs(r[1])&&Math.abs(r[0])>Math.abs(r[2])?k[0]=0:Math.abs(r[1])>Math.abs(r[2])?k[1]=0:k[2]=0,mt(k)<m&&(k[0]=k[1]=k[2]=1),at(B,r,k),ct(B,B),at(C,r,B),ct(C,C),L(t,r,B,C,D,H),ot(J,H,D),Z(r,B,C,D,H,J,n)}function L(t,r,n,i,o,s){S(t,r,d),o[0]=d[0],s[0]=d[1],S(t,n,d),o[1]=d[0],s[1]=d[1],S(t,i,d),o[2]=d[0],s[2]=d[1]}const Q=(0,vec3f64/* create */.vt)(),R=(0,vec3f64/* create */.vt)(),U=(0,vec3f64/* create */.vt)(),W=(0,mat3f64/* fromValues */.fA)(1,0,0,0,1,0,0,0,1),X=(0,quatf64/* create */.vt)();function Z(t,r,n,i,e,a,c){W[0]=t[0],W[1]=t[1],W[2]=t[2],W[3]=r[0],W[4]=r[1],W[5]=r[2],W[6]=n[0],W[7]=n[1],W[8]=n[2],c.quaternion=ut(X,W),it(Q,i,e),st(Q,Q,.5),st(R,t,Q[0]),st(U,r,Q[1]),it(R,R,U),st(U,n,Q[2]),c.center=(0,vec32.f)(R,R,U),c.halfSize=(0,vec32.g)(Q,a,.5)}const $=7;class tt{constructor(t){this.minVert=new Array($),this.maxVert=new Array($);const r=64*$;this.buffer=new ArrayBuffer(r);let n=0;this.minProj=new Float64Array(this.buffer,n,$),n+=8*$,this.maxProj=new Float64Array(this.buffer,n,$),n+=8*$;for(let a=0;a<$;++a)this.minVert[a]=new Float64Array(this.buffer,n,3),n+=24;for(let a=0;a<$;++a)this.maxVert[a]=new Float64Array(this.buffer,n,3),n+=24;for(let a=0;a<$;++a)this.minProj[a]=Number.POSITIVE_INFINITY,this.maxProj[a]=Number.NEGATIVE_INFINITY;const i=new Array($),o=new Array($),{data:s,size:e}=t;for(let a=0;a<s.length;a+=e){let t=s[a];t<this.minProj[0]&&(this.minProj[0]=t,i[0]=a),t>this.maxProj[0]&&(this.maxProj[0]=t,o[0]=a),t=s[a+1],t<this.minProj[1]&&(this.minProj[1]=t,i[1]=a),t>this.maxProj[1]&&(this.maxProj[1]=t,o[1]=a),t=s[a+2],t<this.minProj[2]&&(this.minProj[2]=t,i[2]=a),t>this.maxProj[2]&&(this.maxProj[2]=t,o[2]=a),t=s[a]+s[a+1]+s[a+2],t<this.minProj[3]&&(this.minProj[3]=t,i[3]=a),t>this.maxProj[3]&&(this.maxProj[3]=t,o[3]=a),t=s[a]+s[a+1]-s[a+2],t<this.minProj[4]&&(this.minProj[4]=t,i[4]=a),t>this.maxProj[4]&&(this.maxProj[4]=t,o[4]=a),t=s[a]-s[a+1]+s[a+2],t<this.minProj[5]&&(this.minProj[5]=t,i[5]=a),t>this.maxProj[5]&&(this.maxProj[5]=t,o[5]=a),t=s[a]-s[a+1]-s[a+2],t<this.minProj[6]&&(this.minProj[6]=t,i[6]=a),t>this.maxProj[6]&&(this.maxProj[6]=t,o[6]=a)}for(let a=0;a<$;++a){let t=i[a];et(this.minVert[a],s,t),t=o[a],et(this.maxVert[a],s,t)}}}class rt{constructor(){this.b0=(0,vec3f64/* fromValues */.fA)(1,0,0),this.b1=(0,vec3f64/* fromValues */.fA)(0,1,0),this.b2=(0,vec3f64/* fromValues */.fA)(0,0,1),this.quality=0}}function nt(t){return t[0]*t[1]+t[0]*t[2]+t[1]*t[2]}function it(t,r,n){t[0]=r[0]+n[0],t[1]=r[1]+n[1],t[2]=r[2]+n[2]}function ot(t,r,n){t[0]=r[0]-n[0],t[1]=r[1]-n[1],t[2]=r[2]-n[2]}function st(t,r,n){t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n}function et(t,r,n=0){t[0]=r[n],t[1]=r[n+1],t[2]=r[n+2]}function at(t,r,n){const i=r[0],o=r[1],s=r[2],e=n[0],a=n[1],c=n[2];t[0]=o*c-s*a,t[1]=s*e-i*c,t[2]=i*a-o*e}function ct(t,r){const n=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(n>0){const i=1/Math.sqrt(n);t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i}}function mt(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]}function ft(t,r){const n=r[0]-t[0],i=r[1]-t[1],o=r[2]-t[2];return n*n+i*i+o*o}function ht(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]}function ut(t,r){const n=r[0]+r[4]+r[8];if(n>0){let i=Math.sqrt(n+1);t[3]=.5*i,i=.5/i,t[0]=(r[5]-r[7])*i,t[1]=(r[6]-r[2])*i,t[2]=(r[1]-r[3])*i}else{let n=0;r[4]>r[0]&&(n=1),r[8]>r[3*n+n]&&(n=2);const i=(n+1)%3,o=(n+2)%3;let s=Math.sqrt(r[3*n+n]-r[3*i+i]-r[3*o+o]+1);t[n]=.5*s,s=.5/s,t[3]=(r[3*i+o]-r[3*o+i])*s,t[i]=(r[3*i+n]+r[3*n+i])*s,t[o]=(r[3*o+n]+r[3*n+o])*s}return t}

;// ./node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class orientedBoundingBox_I{constructor(t=vec3f64/* ZEROS */.uY,a=gt,e=quatf64/* IDENTITY */.zK){this._data=[t[0],t[1],t[2],a[0],a[1],a[2],e[0],e[1],e[2],e[3]]}clone(){const t=new orientedBoundingBox_I;return t._data=this._data.slice(),t}invalidate(){this._data[3]=-1}get isValid(){return this._data[3]>=0}static fromData(t){const a=new orientedBoundingBox_I;return a._data=t.slice(),a}static fromJSON(t){return new orientedBoundingBox_I(t.center,t.halfSize,t.quaternion)}copy(t){this._data=t.data.slice()}get center(){return (0,vec32.i)(vectorStacks/* sv3d */.rq.get(),this._data[0],this._data[1],this._data[2])}get centerX(){return this._data[0]}get centerY(){return this._data[1]}get centerZ(){return this._data[2]}getCenter(t){return t[0]=this._data[0],t[1]=this._data[1],t[2]=this._data[2],t}set center(t){this._data[0]=t[0],this._data[1]=t[1],this._data[2]=t[2]}setCenter(t,a,e){this._data[0]=t,this._data[1]=a,this._data[2]=e}get halfSize(){return (0,vec32.i)(vectorStacks/* sv3d */.rq.get(),this._data[3],this._data[4],this._data[5])}get halfSizeX(){return this._data[3]}get halfSizeY(){return this._data[4]}get halfSizeZ(){return this._data[5]}getHalfSize(t){return t[0]=this._data[3],t[1]=this._data[4],t[2]=this._data[5],t}set halfSize(t){this._data[3]=t[0],this._data[4]=t[1],this._data[5]=t[2]}get quaternion(){return (0,quat/* set */.hZ)(vectorStacks/* sq4d */.J8.get(),this._data[6],this._data[7],this._data[8],this._data[9])}getQuaternion(t){return t[0]=this._data[6],t[1]=this._data[7],t[2]=this._data[8],t[3]=this._data[9],t}set quaternion(t){this._data[6]=t[0],this._data[7]=t[1],this._data[8]=t[2],this._data[9]=t[3]}get data(){return this._data}getCorners(t){const a=orientedBoundingBox_O,e=this._data;a[0]=e[6],a[1]=e[7],a[2]=e[8],a[3]=e[9];for(let s=0;s<8;++s){const i=t[s];i[0]=(1&s?-1:1)*e[3],i[1]=(2&s?-1:1)*e[4],i[2]=(4&s?-1:1)*e[5],(0,vec32.v)(i,i,a),i[0]+=e[0],i[1]+=e[1],i[2]+=e[2]}}doesIntersectFrustumConservativeApproximation(t){return this.intersectPlane(t[0])<=0&&this.intersectPlane(t[1])<=0&&this.intersectPlane(t[2])<=0&&this.intersectPlane(t[3])<=0&&this.intersectPlane(t[4])<=0&&this.intersectPlane(t[5])<=0}get radius(){const t=this._data[3],a=this._data[4],e=this._data[5];return Math.sqrt(t*t+a*a+e*e)}intersectSphere(t){orientedBoundingBox_X[0]=this._data[0]-t[0],orientedBoundingBox_X[1]=this._data[1]-t[1],orientedBoundingBox_X[2]=this._data[2]-t[2];const a=this.getQuaternion(orientedBoundingBox_T);return (0,quat/* conjugate */.Xr)(orientedBoundingBox_O,a),(0,vec32.v)(orientedBoundingBox_X,orientedBoundingBox_X,orientedBoundingBox_O),(0,vec32.w)(orientedBoundingBox_X,orientedBoundingBox_X),orientedBoundingBox_Y[0]=Math.min(orientedBoundingBox_X[0],this._data[3]),orientedBoundingBox_Y[1]=Math.min(orientedBoundingBox_X[1],this._data[4]),orientedBoundingBox_Y[2]=Math.min(orientedBoundingBox_X[2],this._data[5]),(0,vec32.x)(orientedBoundingBox_Y,orientedBoundingBox_X)<t[3]*t[3]}intersectSphereWithMBS(t,a=this.radius){const e=this._data;orientedBoundingBox_X[0]=e[0]-t[0],orientedBoundingBox_X[1]=e[1]-t[1],orientedBoundingBox_X[2]=e[2]-t[2];const s=t[3],i=s+a;return!((0,vec32.y)(orientedBoundingBox_X)>i*i)&&(orientedBoundingBox_O[0]=-e[6],orientedBoundingBox_O[1]=-e[7],orientedBoundingBox_O[2]=-e[8],orientedBoundingBox_O[3]=e[9],(0,vec32.v)(orientedBoundingBox_X,orientedBoundingBox_X,orientedBoundingBox_O),(0,vec32.w)(orientedBoundingBox_X,orientedBoundingBox_X),orientedBoundingBox_Y[0]=Math.min(orientedBoundingBox_X[0],e[3]),orientedBoundingBox_Y[1]=Math.min(orientedBoundingBox_X[1],e[4]),orientedBoundingBox_Y[2]=Math.min(orientedBoundingBox_X[2],e[5]),(0,vec32.x)(orientedBoundingBox_Y,orientedBoundingBox_X)<s*s)}intersectPlane(t){const a=t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3],e=this.projectedRadius((0,plane/* getNormal */.Qj)(t));return a>e?1:a<-e?-1:0}intersectRay(t,a,e=0){const s=this._data,i=orientedBoundingBox_O;i[0]=-s[6],i[1]=-s[7],i[2]=-s[8],i[3]=s[9],orientedBoundingBox_X[0]=t[0]-s[0],orientedBoundingBox_X[1]=t[1]-s[1],orientedBoundingBox_X[2]=t[2]-s[2];const r=(0,vec32.v)(orientedBoundingBox_X,orientedBoundingBox_X,orientedBoundingBox_O),n=(0,vec32.v)(orientedBoundingBox_Y,a,orientedBoundingBox_O);let o=-1/0,h=1/0;const c=this.getHalfSize(orientedBoundingBox_ct);for(let d=0;d<3;d++){const t=r[d],a=n[d],s=c[d]+e;if(Math.abs(a)>1e-6){const e=(s-t)/a,i=(-s-t)/a;o=Math.max(o,Math.min(e,i)),h=Math.min(h,Math.max(e,i))}else if(t>s||t<-s)return!1}return o<=h}projectedArea(e,s,i,n){const o=this.getQuaternion(orientedBoundingBox_T);(0,quat/* conjugate */.Xr)(orientedBoundingBox_O,o),orientedBoundingBox_X[0]=e[0]-this._data[0],orientedBoundingBox_X[1]=e[1]-this._data[1],orientedBoundingBox_X[2]=e[2]-this._data[2],(0,vec32.v)(orientedBoundingBox_X,orientedBoundingBox_X,orientedBoundingBox_O);const h=this.getHalfSize(orientedBoundingBox_ct),_=orientedBoundingBox_X[0]<-h[0]?-1:orientedBoundingBox_X[0]>h[0]?1:0,l=orientedBoundingBox_X[1]<-h[1]?-1:orientedBoundingBox_X[1]>h[1]?1:0,m=orientedBoundingBox_X[2]<-h[2]?-1:orientedBoundingBox_X[2]>h[2]?1:0,g=Math.abs(_)+Math.abs(l)+Math.abs(m);if(0===g)return 1/0;const p=1===g?4:6,M=6*(_+3*l+9*m+13);(0,mat3/* fromQuat */.I0)(dt,o),(0,mat3/* scale */.hs)(dt,dt,h);const b=this.getCenter(orientedBoundingBox_ot);for(let t=0;t<p;t++){const a=orientedBoundingBox_K[M+t];(0,vec32.i)(orientedBoundingBox_X,((1&a)<<1)-1,(2&a)-1,((4&a)>>1)-1),(0,vec32.o)(orientedBoundingBox_X,orientedBoundingBox_X,dt),(0,vec32.f)(orientedBoundingBox_E,b,orientedBoundingBox_X),orientedBoundingBox_E[3]=1,(0,vec42.t)(orientedBoundingBox_E,orientedBoundingBox_E,s);const e=1/Math.max(1e-6,orientedBoundingBox_E[3]);orientedBoundingBox_N[2*t]=orientedBoundingBox_E[0]*e,orientedBoundingBox_N[2*t+1]=orientedBoundingBox_E[1]*e}const j=2*p-2;let S=orientedBoundingBox_N[0]*(orientedBoundingBox_N[3]-orientedBoundingBox_N[j+1])+orientedBoundingBox_N[j]*(orientedBoundingBox_N[1]-orientedBoundingBox_N[j-1]);for(let t=2;t<j;t+=2)S+=orientedBoundingBox_N[t]*(orientedBoundingBox_N[t+3]-orientedBoundingBox_N[t-1]);return Math.abs(S)*i*n*.125}projectedRadius(t){const a=this.getQuaternion(orientedBoundingBox_T);return (0,quat/* conjugate */.Xr)(orientedBoundingBox_O,a),(0,vec32.v)(orientedBoundingBox_X,t,orientedBoundingBox_O),Math.abs(orientedBoundingBox_X[0]*this._data[3])+Math.abs(orientedBoundingBox_X[1]*this._data[4])+Math.abs(orientedBoundingBox_X[2]*this._data[5])}minimumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]-this.projectedRadius((0,plane/* getNormal */.Qj)(t))}maximumDistancePlane(t){return t[0]*this._data[0]+t[1]*this._data[1]+t[2]*this._data[2]+t[3]+this.projectedRadius((0,plane/* getNormal */.Qj)(t))}toAaBoundingBox(a){const e=this.getQuaternion(orientedBoundingBox_T),s=(0,mat3/* fromQuat */.I0)(dt,e),i=this._data[3]*Math.abs(s[0])+this._data[4]*Math.abs(s[3])+this._data[5]*Math.abs(s[6]),r=this._data[3]*Math.abs(s[1])+this._data[4]*Math.abs(s[4])+this._data[5]*Math.abs(s[7]),n=this._data[3]*Math.abs(s[2])+this._data[4]*Math.abs(s[5])+this._data[5]*Math.abs(s[8]);a[0]=this._data[0]-i,a[1]=this._data[1]-r,a[2]=this._data[2]-n,a[3]=this._data[0]+i,a[4]=this._data[1]+r,a[5]=this._data[2]+n}transform(t,a,e,s=0,i=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(e),r=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(a),n=(0,projectors/* getProjector */.jd)(a,r)){if(e===i)a.isGeographic?orientedBoundingBox_st(this,t,a,s,r):orientedBoundingBox_et(this,t,a,s,r,n);else if(a.isWGS84&&(e.isWebMercator||(0,spatialReferenceUtils/* isPlateCarree */.r1)(e)))orientedBoundingBox_$(a,this,e,t,s);else if(a.isWebMercator&&(0,spatialReferenceUtils/* isPlateCarree */.r1)(e))orientedBoundingBox_tt(a,this,e,t,s);else{const i=this.getCenter(orientedBoundingBox_ot);i[2]+=s,(0,projectBuffer.projectBuffer)(i,a,0,i,e,0),t.center=i,this!==t&&(t.quaternion=this.getQuaternion(orientedBoundingBox_T),t.halfSize=this.getHalfSize(orientedBoundingBox_ct))}}}const orientedBoundingBox_O=(0,quatf64/* create */.vt)(),orientedBoundingBox_T=(0,quatf64/* create */.vt)(),orientedBoundingBox_V=(0,quatf64/* create */.vt)(),orientedBoundingBox_X=(0,vec3f64/* create */.vt)(),orientedBoundingBox_Y=(0,vec3f64/* create */.vt)(),orientedBoundingBox_E=(0,vec4f64/* create */.vt)();function orientedBoundingBox_J(t,a=new orientedBoundingBox_I){return u(t,a),a}const orientedBoundingBox_N=[.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2],orientedBoundingBox_K=(()=>{const t=new Int8Array(162);let a=0;const e=e=>{for(let s=0;s<e.length;s++)t[a+s]=e[s];a+=6};return e([6,2,3,1,5,4]),e([0,2,3,1,5,4]),e([0,2,3,7,5,4]),e([0,1,3,2,6,4]),e([0,1,3,2,0,0]),e([0,1,5,7,3,2]),e([0,1,3,7,6,4]),e([0,1,3,7,6,2]),e([0,1,5,7,6,2]),e([0,1,5,4,6,2]),e([0,1,5,4,0,0]),e([0,1,3,7,5,4]),e([0,2,6,4,0,0]),e([0,0,0,0,0,0]),e([1,3,7,5,0,0]),e([2,3,7,6,4,0]),e([2,3,7,6,0,0]),e([2,3,1,5,7,6]),e([0,1,5,7,6,2]),e([0,1,5,7,6,4]),e([0,1,3,7,6,4]),e([4,5,7,6,2,0]),e([4,5,7,6,0,0]),e([4,5,1,3,7,6]),e([0,2,3,7,5,4]),e([6,2,3,7,5,4]),e([6,2,3,1,5,4]),t})();function orientedBoundingBox_L(t,a,e,s,i){const n=t.getQuaternion(orientedBoundingBox_T);i.quaternion=n,(0,quat/* conjugate */.Xr)(orientedBoundingBox_O,n);const o=t.getCenter(orientedBoundingBox_ot),h=t.getHalfSize(orientedBoundingBox_ct);if(s===ViewingMode/* ViewingMode */.RT.Global){(0,vec32.v)(orientedBoundingBox_mt,o,orientedBoundingBox_O),(0,vec32.w)(orientedBoundingBox_ft,orientedBoundingBox_mt),(0,vec32.A)(orientedBoundingBox_ut,orientedBoundingBox_ft,h),(0,vec32.a)(orientedBoundingBox_ut,orientedBoundingBox_ft,orientedBoundingBox_ut);const s=(0,vec32.l)(orientedBoundingBox_ut);(0,vec32.f)(orientedBoundingBox_ut,orientedBoundingBox_ft,h);const r=(0,vec32.l)(orientedBoundingBox_ut);if(s<e)i.center=o,(0,vec32.i)(orientedBoundingBox_mt,e,e,e),i.halfSize=(0,vec32.f)(orientedBoundingBox_mt,h,orientedBoundingBox_mt);else{const n=r>0?1+a/r:1,o=s>0?1+e/s:1,c=(o+n)/2,_=(o-n)/2;(0,vec32.g)(orientedBoundingBox_ut,orientedBoundingBox_ft,_),i.halfSize=(0,vec32.b)(orientedBoundingBox_ut,orientedBoundingBox_ut,h,c),(0,vec32.g)(orientedBoundingBox_ut,orientedBoundingBox_ft,c),(0,vec32.b)(orientedBoundingBox_ut,orientedBoundingBox_ut,h,_),(0,vec32.B)(orientedBoundingBox_mt,orientedBoundingBox_mt),(0,vec32.C)(orientedBoundingBox_mt,orientedBoundingBox_ut,orientedBoundingBox_mt);const l=t.getQuaternion(orientedBoundingBox_V);i.center=(0,vec32.v)(orientedBoundingBox_mt,orientedBoundingBox_mt,l)}}else{i.center=(0,vec32.b)(orientedBoundingBox_mt,o,vec3f64/* UNIT_Z */.Cb,(e+a)/2);const t=(0,vec32.v)(orientedBoundingBox_mt,vec3f64/* UNIT_Z */.Cb,orientedBoundingBox_O);(0,vec32.w)(t,t),i.halfSize=(0,vec32.b)(orientedBoundingBox_ft,h,t,(e-a)/2)}return i}function orientedBoundingBox_$(t,a,e,s,i){a.getCenter(orientedBoundingBox_ot),orientedBoundingBox_ot[2]+=i;const r=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(e);(0,projectBuffer.projectBuffer)(orientedBoundingBox_ot,t,0,orientedBoundingBox_ot,r,0),orientedBoundingBox_at(r,a,orientedBoundingBox_ot,e,s)}function orientedBoundingBox_tt(t,a,e,s,i){a.getCenter(orientedBoundingBox_ot),orientedBoundingBox_ot[2]+=i,orientedBoundingBox_at(t,a,orientedBoundingBox_ot,e,s)}function orientedBoundingBox_at(a,e,s,i,r){const n=e.getQuaternion(orientedBoundingBox_T),o=(0,mat3/* fromQuat */.I0)(dt,n),h=e.getHalfSize(orientedBoundingBox_ct);for(let t=0;t<8;++t){for(let a=0;a<3;++a)orientedBoundingBox_nt[a]=h[a]*(t&1<<a?-1:1);for(let a=0;a<3;++a){let e=s[a];for(let t=0;t<3;++t)e+=orientedBoundingBox_nt[t]*o[3*t+a];orientedBoundingBox_it[3*t+a]=e}}(0,projectBuffer.projectBuffer)(orientedBoundingBox_it,a,0,orientedBoundingBox_it,i,0,8),orientedBoundingBox_J(orientedBoundingBox_rt,r)}function orientedBoundingBox_et(t,a,e,s,i=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(e),o=(0,projectors/* getProjector */.jd)(e,i)){t.getCorners(lt),t.getCenter(orientedBoundingBox_nt),orientedBoundingBox_nt[2]+=s,(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(e,orientedBoundingBox_nt,_t,i),a.setCenter(_t[12],_t[13],_t[14]);const h=2*Math.sqrt(1+_t[0]+_t[5]+_t[10]);orientedBoundingBox_O[0]=(_t[6]-_t[9])/h,orientedBoundingBox_O[1]=(_t[8]-_t[2])/h,orientedBoundingBox_O[2]=(_t[1]-_t[4])/h,orientedBoundingBox_O[3]=.25*h;const l=t.getQuaternion(orientedBoundingBox_T);a.quaternion=(0,quat/* multiply */.lw)(orientedBoundingBox_O,orientedBoundingBox_O,l),(0,quat/* conjugate */.Xr)(orientedBoundingBox_O,orientedBoundingBox_O),(0,vec32.i)(orientedBoundingBox_ft,0,0,0);const m=a.getCenter(orientedBoundingBox_ht);for(const r of lt)r[2]+=s,o(r,0,r,0),(0,vec32.a)(orientedBoundingBox_mt,r,m),(0,vec32.v)(orientedBoundingBox_mt,orientedBoundingBox_mt,orientedBoundingBox_O),(0,vec32.w)(orientedBoundingBox_mt,orientedBoundingBox_mt),(0,vec32.z)(orientedBoundingBox_ft,orientedBoundingBox_ft,orientedBoundingBox_mt);a.halfSize=orientedBoundingBox_ft}function orientedBoundingBox_st(t,a,e,s,i=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(e)){const n=(0,ellipsoidUtils/* getReferenceEllipsoid */.tO)(e),o=1+Math.max(0,s)/(n.radius+t.centerZ);t.getCenter(orientedBoundingBox_nt),orientedBoundingBox_nt[2]+=s,(0,projectBuffer.projectBuffer)(orientedBoundingBox_nt,e,0,orientedBoundingBox_nt,i,0),a.center=orientedBoundingBox_nt;const h=t.getQuaternion(orientedBoundingBox_T);a.quaternion=h,(0,quat/* conjugate */.Xr)(orientedBoundingBox_O,h),(0,vec32.i)(orientedBoundingBox_mt,0,0,1),(0,vec32.v)(orientedBoundingBox_mt,orientedBoundingBox_mt,orientedBoundingBox_O);const _=t.getHalfSize(orientedBoundingBox_ct);(0,vec32.i)(orientedBoundingBox_mt,_[0]*Math.abs(orientedBoundingBox_mt[0]),_[1]*Math.abs(orientedBoundingBox_mt[1]),_[2]*Math.abs(orientedBoundingBox_mt[2])),(0,vec32.g)(orientedBoundingBox_mt,orientedBoundingBox_mt,n.inverseFlattening),(0,vec32.f)(orientedBoundingBox_mt,_,orientedBoundingBox_mt),a.halfSize=(0,vec32.g)(orientedBoundingBox_mt,orientedBoundingBox_mt,o)}const orientedBoundingBox_it=new Array(24),orientedBoundingBox_rt=new Attribute/* Vertices */.K(orientedBoundingBox_it,3),orientedBoundingBox_nt=(0,vec3f64/* create */.vt)(),orientedBoundingBox_ot=(0,vec3f64/* create */.vt)(),orientedBoundingBox_ht=(0,vec3f64/* create */.vt)(),orientedBoundingBox_ct=(0,vec3f64/* create */.vt)(),dt=(0,mat3f64/* create */.vt)(),_t=(0,mat4f64/* create */.vt)(),lt=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],orientedBoundingBox_mt=(0,vec3f64/* create */.vt)(),orientedBoundingBox_ft=(0,vec3f64/* create */.vt)(),orientedBoundingBox_ut=(0,vec3f64/* create */.vt)(),gt=(0,vec3f64/* freeze */.CN)(-1,-1,-1);


/***/ }),

/***/ 89458:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96153);
/* harmony import */ var _core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62462);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(a){a.vertex.code.add((0,_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${_core_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H.int(_layers_support_symbolColorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .ColorMixModeEnum */ .k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}


/***/ }),

/***/ 77788:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LG: () => (/* binding */ C),
/* harmony export */   Mb: () => (/* binding */ w),
/* harmony export */   PJ: () => (/* binding */ o),
/* harmony export */   RN: () => (/* binding */ u),
/* harmony export */   V: () => (/* binding */ n),
/* harmony export */   Vg: () => (/* binding */ H),
/* harmony export */   XY: () => (/* binding */ t),
/* harmony export */   iq: () => (/* binding */ r)
/* harmony export */ });
/* unused harmony exports is2DGeometryOutput, isColor, isColorEmissionHighlightOIDOrDepth, isColorHighlightOIDOrDepth, isColorHighlightOrDepth, isColorHighlightOrOID, isColorOrColorEmissionOrOID, isColorOrHighlight, isColorOrOID, isDepth, isHighlightOrOID */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;function o(o){return o===n.Shadow||o===n.ShadowHighlight||o===n.ShadowExcludeHighlight||o===n.ViewshedShadow}function t(o){return f(o)||o===n.Normal}function r(o){return s(o)||o===n.Normal}function i(o){return o===n.Highlight||o===n.ObjectAndLayerIdColor}function e(n){return h(n)||i(n)}function h(o){return o===n.Color}function u(n){return h(n)||C(n)}function c(o){return h(o)||o===n.ObjectAndLayerIdColor}function d(o){return u(o)||o===n.ObjectAndLayerIdColor}function a(o){return h(o)||o===n.Highlight}function l(n){return a(n)||S(n)}function g(n){return h(n)||i(n)}function w(n){return u(n)||i(n)}function f(n){return g(n)||S(n)}function s(n){return w(n)||S(n)}function S(o){return o===n.Depth}function C(o){return o===n.ColorEmission}function H(o){switch(o){case n.Depth:case n.Shadow:case n.ShadowHighlight:case n.ShadowExcludeHighlight:case n.ViewshedShadow:return!0}return!1}!function(n){n[n.Color=0]="Color",n[n.ColorEmission=1]="ColorEmission",n[n.Depth=2]="Depth",n[n.Normal=3]="Normal",n[n.Shadow=4]="Shadow",n[n.ShadowHighlight=5]="ShadowHighlight",n[n.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",n[n.ViewshedShadow=7]="ViewshedShadow",n[n.Highlight=8]="Highlight",n[n.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",n[n.COUNT=10]="COUNT"}(n||(n={}));


/***/ }),

/***/ 3525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95039);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62462);
/* harmony import */ var _lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33763);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,i){switch(i.normalType){case a.Compressed:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMALCOMPRESSED,"vec2"),t.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case a.Attribute:t.attributes.add(_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_2__/* .VertexAttribute */ .r.NORMAL,"vec3"),t.vertex.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 normalModel() {
return normal;
}`);break;case a.ScreenDerivative:t.fragment.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,_core_compilerUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .neverReached */ .Xb)(i.normalType);case a.COUNT:}}var a;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.ScreenDerivative=2]="ScreenDerivative",e[e.COUNT=3]="COUNT"}(a||(a={}));


/***/ }),

/***/ 30588:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41281);
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62462);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e({code:e,uniforms:i},l){i.add(new _shaderModules_FloatBindUniform_js__WEBPACK_IMPORTED_MODULE_0__/* .FloatBindUniform */ .U("dpDummy",(()=>1))),e.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_1__/* .glsl */ .H)`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 hiD = hiA + hiB;
vec3 loD = loA + loB;
return  dpDummy * hiD + loD;
}`)}


/***/ }),

/***/ 80002:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62462);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){t.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),t.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),t.code.add((0,_shaderModules_glsl_js__WEBPACK_IMPORTED_MODULE_0__/* .glsl */ .H)`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}


/***/ }),

/***/ 223:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"vec3",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw,((r,s,t,m)=>r.setUniform3fv(e,o(s,t,m))))}}


/***/ }),

/***/ 64802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,e){super(s,"vec3",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,o,t)=>r.setUniform3fv(s,e(o,t))))}}


/***/ }),

/***/ 7792:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"vec4",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw,((r,s,t)=>r.setUniform4fv(e,o(s,t))))}}


/***/ }),

/***/ 41281:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(r,e){super(r,"float",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((o,s)=>o.setUniform1f(r,e(s))))}}


/***/ }),

/***/ 26746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(o,t){super(o,"mat3",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw,((r,e,s)=>r.setUniformMatrix3fv(o,t(e,s))))}}


/***/ }),

/***/ 19835:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(s,o){super(s,"mat3",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Pass,((r,t,e)=>r.setUniformMatrix3fv(s,o(t,e))))}}


/***/ }),

/***/ 7574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(o,t){super(o,"mat4",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Bind,((r,e)=>r.setUniformMatrix4fv(o,t(e))))}}


/***/ }),

/***/ 29247:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78455);
/* harmony import */ var _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29162);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class o extends _webgl_Uniform_js__WEBPACK_IMPORTED_MODULE_1__/* .Uniform */ .n{constructor(e,o){super(e,"sampler2D",_webgl_BindType_js__WEBPACK_IMPORTED_MODULE_0__/* .BindType */ .c.Draw,((r,s,t)=>r.bindTexture(e,o(s,t))))}}


/***/ }),

/***/ 62462:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ n),
/* harmony export */   If: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n,...t){let r="";for(let o=0;o<t.length;o++)r+=n[o]+t[o];return r+=n[n.length-1],r}function t(n,t,r=""){return n?t:r}!function(n){function t(n){return Math.round(n).toString()}function r(n){return n.toPrecision(8)}n.int=t,n.float=r}(n||(n={}));


/***/ }),

/***/ 84618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6273);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(){return!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:objectAndLayerId-rendering")}


/***/ }),

/***/ 10941:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ s),
/* harmony export */   n: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(s,t,i=t){this.data=s,this.size=t,this.stride=i}}class t extends s{constructor(s,t,i,e=!1,c=i){super(s,i,c),this.indices=t,this.exclusive=e}}


/***/ }),

/***/ 33763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export affectsGeometry */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var e;function E(E){return E===e.POSITION}!function(e){e.POSITION="position",e.NORMAL="normal",e.NORMALCOMPRESSED="normalCompressed",e.UV0="uv0",e.UVI="uvi",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.ROTATION="rotation",e.TANGENT="tangent",e.OFFSET="offset",e.PERSPECTIVEDIVIDE="perspectiveDivide",e.CENTEROFFSETANDDISTANCE="centerOffsetAndDistance",e.LENGTH="length",e.NEXTDELTA="nextDelta",e.PREVIOUSDELTA="previousDelta",e.U0="u0",e.LINEPARAMETERS="lineParameters",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.PROFILEAUXDATA="profileAuxData",e.INSTANCEMODELORIGINHI="instanceModelOriginHi",e.INSTANCEMODELORIGINLO="instanceModelOriginLo",e.INSTANCEMODEL="instanceModel",e.INSTANCEMODELNORMAL="instanceModelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMAL2COMPRESSED="normal2Compressed",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.START_UP="startUp",e.END_UP="endUp",e.EXTRUDE="extrude",e.OLIDCOLOR="objectAndLayerIdColor",e.INSTANCEOBJECTANDLAYERIDCOLOR="instanceObjectAndLayerIdColor"}(e||(e={}));


/***/ }),

/***/ 84456:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RT: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports stringFromViewingMode, viewingModeFromString */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;function o(o){return"global"===o?l.Global:l.Local}function a(o){return o===l.Global?"global":"local"}!function(l){l[l.Global=1]="Global",l[l.Local=2]="Local"}(l||(l={}));


/***/ }),

/***/ 78455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;!function(a){a[a.Bind=0]="Bind",a[a.Pass=1]="Pass",a[a.Draw=2]="Draw"}(a||(a={}));


/***/ }),

/***/ 29162:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6273);
/* harmony import */ var _BindType_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78455);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i{constructor(i,a,e,r,t=null){if(this.name=i,this.type=a,this.arraySize=t,this.bind={[_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Bind]:null,[_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass]:null,[_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw]:null},r)switch(e){case void 0:break;case _BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Bind:this.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Bind]=r;break;case _BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass:this.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Pass]=r;break;case _BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw:this.bind[_BindType_js__WEBPACK_IMPORTED_MODULE_1__/* .BindType */ .c.Draw]=r}}equals(s){return this.type===s.type&&this.name===s.name&&this.arraySize===s.arraySize}}


/***/ })

};
;