"use strict";
exports.id = 39586;
exports.ids = [39586,90081,16730,94349,61492,39111];
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

/***/ 53244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26325);
/* harmony import */ var _accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89370);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles((0,_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .autorun */ .fm)((()=>this._refresh()),_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .sync */ .OH))}destroy(){this.getCollections=null}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let o=0;for(const e of t)null!=e&&(o=this._processCollection(o,e));this.splice(o)}_createNewInstance(t){return new _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(t)}_processCollection(t,o){if(!o)return t;const e=this.itemFilterFunction??(t=>!!t);for(const s of o)if(s){if(e(s)){const o=this.indexOf(s,t);o>=0?o!==t&&this.reorder(s,t):this.add(s,t),++t}if(this.getChildrenFunction){const o=this.getChildrenFunction(s);if(Array.isArray(o))for(const e of o)t=this._processCollection(t,e);else t=this._processCollection(t,o)}}return t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getCollections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getChildrenFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"itemFilterFunction",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.core.CollectionFlattener")],l);


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

/***/ 2527:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47980);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){i?.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{(0,_multiOriginJSONSupportUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isMultiOriginJSONMixin */ .H)(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e)}))}


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

/***/ 52686:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ a),
/* harmony export */   g: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _Loadable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11965);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(o,l){return await o.load(),a(o,l)}async function a(t,a){const s=[],c=(...o)=>{for(const l of o)null!=l&&(Array.isArray(l)?c(...l):_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.isCollection(l)?l.forEach((o=>c(o))):_Loadable_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.isLoadable(l)&&s.push(l))};a(c);let f=null;if(await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .map */ .Tj)(s,(async o=>{const n=await (0,_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(i(o)?o.loadAll():o.load());!1!==n.ok||f||(f=n)})),f)throw f.error;return t}function i(o){return"loadAll"in o&&"function"==typeof o.loadAll}


/***/ }),

/***/ 47980:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ i)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(i){return i&&"getAtOrigin"in i&&"originOf"in i}


/***/ }),

/***/ 70345:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ V)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/SetUtils.js
var SetUtils = __webpack_require__(98592);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/form/ExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* default */.A{constructor(e){super(e),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["boolean","date","number","string"],json:{write:!0}})],i.prototype,"returnType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.ExpressionInfo")],i);const p=i;

;// ./node_modules/@arcgis/core/form/elements/Element.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* default */.A{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"visibilityExpression",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.Element")],e);const Element_i=e;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Input_p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_p.prototype,"type",void 0),Input_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.Input")],Input_p);const c=Input_p;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/support/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["any","capture","upload"];

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/AudioInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AudioInput_p=class extends c{constructor(o){super(o),this.type="audio",this.inputMethod="any",this.maxDuration=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["audio"],readOnly:!0,json:{write:!0}})],AudioInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],AudioInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AudioInput_p.prototype,"maxDuration",void 0),AudioInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.AudioInput")],AudioInput_p);const AudioInput_i=AudioInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/DocumentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let DocumentInput_s=class extends c{constructor(o){super(o),this.type="document",this.maxFileSize=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["document"],readOnly:!0,json:{write:!0}})],DocumentInput_s.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],DocumentInput_s.prototype,"maxFileSize",void 0),DocumentInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.DocumentInput")],DocumentInput_s);const DocumentInput_p=DocumentInput_s;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/ImageInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ImageInput_p=class extends c{constructor(t){super(t),this.type="image",this.inputMethod="any",this.maxImageSize=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["image"],readOnly:!0,json:{write:!0}})],ImageInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],ImageInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ImageInput_p.prototype,"maxImageSize",void 0),ImageInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.ImageInput")],ImageInput_p);const ImageInput_i=ImageInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/SignatureInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let SignatureInput_p=class extends c{constructor(t){super(t),this.type="signature",this.inputMethod="any"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["signature"],readOnly:!0,json:{write:!0}})],SignatureInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],SignatureInput_p.prototype,"inputMethod",void 0),SignatureInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.SignatureInput")],SignatureInput_p);const SignatureInput_i=SignatureInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/VideoInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VideoInput_p=class extends c{constructor(o){super(o),this.type="video",this.inputMethod="any",this.maxDuration=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["video"],readOnly:!0,json:{write:!0}})],VideoInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],VideoInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VideoInput_p.prototype,"maxDuration",void 0),VideoInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.VideoInput")],VideoInput_p);const VideoInput_i=VideoInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/support/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(e){return{nestableTypes:{base:c,key:"type",typeMap:{audio:AudioInput_i,document:DocumentInput_p,image:ImageInput_i,signature:SignatureInput_i,video:VideoInput_i}},allTypes:{base:c,key:"type",typeMap:{attachment:e,audio:AudioInput_i,document:DocumentInput_p,image:ImageInput_i,signature:SignatureInput_i,video:VideoInput_i}}}}function inputs_s(t,p,n){return t?t.map((t=>(0,ensureType/* ensureOneOfType */.aq)(n?p.nestableTypes:p.allTypes,t))):null}function inputs_i(e,t,p){if(!e)return null;const n=p?t.nestableTypes.typeMap:t.allTypes.typeMap;return e.filter((e=>n[e.type])).map((e=>n[e.type].fromJSON(e)))}function m(e,t,p){if(!e)return null;const n=p?t.nestableTypes.typeMap:t.allTypes.typeMap;return e.filter((e=>n[e.type])).map((e=>e.toJSON()))}

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/AttachmentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AttachmentInput_m=class extends c{constructor(t){super(t),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(t){return inputs_s(t,y,!0)}readInputs(t,r){return inputs_i(r.inputTypes,y,!0)}writeInputs(t,r){r.inputTypes=m(t,y,!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],readOnly:!0,json:{write:!0}})],AttachmentInput_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["any","exact","exactOrNone"],json:{write:!0}})],AttachmentInput_m.prototype,"attachmentAssociationType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],AttachmentInput_m.prototype,"inputTypes",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("inputTypes")],AttachmentInput_m.prototype,"castInputs",null),(0,tslib_es6._)([(0,reader/* reader */.w)("inputTypes")],AttachmentInput_m.prototype,"readInputs",null),(0,tslib_es6._)([(0,writer/* writer */.K)("inputTypes")],AttachmentInput_m.prototype,"writeInputs",null),AttachmentInput_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.AttachmentInput")],AttachmentInput_m);const y=u(AttachmentInput_m),d=AttachmentInput_m;

;// ./node_modules/@arcgis/core/form/elements/AttachmentElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var r;const AttachmentElement_a=u(d);let AttachmentElement_p=r=class extends Element_i{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new r({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"allowUserRename",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],AttachmentElement_p.prototype,"attachmentKeyword",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"displayFilename",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"filenameExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:AttachmentElement_a.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],AttachmentElement_p.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AttachmentElement_p.prototype,"maxAttachmentCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AttachmentElement_p.prototype,"minAttachmentCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],AttachmentElement_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"useOriginalFilename",void 0),AttachmentElement_p=r=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.AttachmentElement")],AttachmentElement_p);const AttachmentElement_m=AttachmentElement_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Input_e=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_e.prototype,"type",void 0),Input_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.Input")],Input_e);const inputs_Input_p=Input_e;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TextInput_s=class extends inputs_Input_p{constructor(o){super(o),this.maxLength=null,this.minLength=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_s.prototype,"maxLength",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_s.prototype,"minLength",void 0),TextInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextInput")],TextInput_s);const TextInput_p=TextInput_s;

;// ./node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BarcodeScannerInput_s;let n=BarcodeScannerInput_s=class extends TextInput_p{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new BarcodeScannerInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["barcode-scanner"],json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=BarcodeScannerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.BarcodeScannerInput")],n);const BarcodeScannerInput_c=n;

;// ./node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var ComboBoxInput_s;let ComboBoxInput_p=ComboBoxInput_s=class extends inputs_Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ComboBoxInput_s({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],ComboBoxInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],ComboBoxInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["combo-box"],json:{read:!1,write:!0}})],ComboBoxInput_p.prototype,"type",void 0),ComboBoxInput_p=ComboBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.ComboBoxInput")],ComboBoxInput_p);const ComboBoxInput_i=ComboBoxInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DatePickerInput_p;function DatePickerInput_s(r){return null!=r?r:null}function DatePickerInput_a(r){return null!=r?r:null}let DatePickerInput_m=DatePickerInput_p=class extends inputs_Input_p{constructor(r){super(r),this.max=null,this.min=null,this.type="date-picker"}readMax(r,t){return DatePickerInput_s(t.max)}writeMax(r,t){t.max=DatePickerInput_a(r)}readMin(r,t){return DatePickerInput_s(t.min)}writeMin(r,t){t.min=DatePickerInput_a(r)}clone(){return new DatePickerInput_p({max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_m.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DatePickerInput_m.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DatePickerInput_m.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_m.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DatePickerInput_m.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DatePickerInput_m.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["date-picker"],json:{read:!1,write:!0}})],DatePickerInput_m.prototype,"type",void 0),DatePickerInput_m=DatePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DatePickerInput")],DatePickerInput_m);const DatePickerInput_c=DatePickerInput_m;

;// ./node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DateTimeOffsetPickerInput_s;function DateTimeOffsetPickerInput_p(t){return null!=t?t:null}function DateTimeOffsetPickerInput_m(t){return null!=t?t:null}let DateTimeOffsetPickerInput_u=DateTimeOffsetPickerInput_s=class extends inputs_Input_p{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,e){return DateTimeOffsetPickerInput_p(e.max)}writeMax(t,e){e.max=DateTimeOffsetPickerInput_m(t)}readMin(t,e){return DateTimeOffsetPickerInput_p(e.min)}writeMin(t,e){e.min=DateTimeOffsetPickerInput_m(t)}readTimeResolution(t,e){return DateTimeOffsetPickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=DateTimeOffsetPickerInput_m(t)}clone(){return new DateTimeOffsetPickerInput_s({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimeOffsetPickerInput_u.prototype,"includeTimeOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimeOffsetPickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimeOffsetPickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimeOffsetPickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimeOffsetPickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],DateTimeOffsetPickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],DateTimeOffsetPickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"type",void 0),DateTimeOffsetPickerInput_u=DateTimeOffsetPickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimeOffsetPickerInput")],DateTimeOffsetPickerInput_u);const l=DateTimeOffsetPickerInput_u;

;// ./node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DateTimePickerInput_p;function DateTimePickerInput_s(e){return null!=e?new Date(e):null}function DateTimePickerInput_m(e){return e?e.getTime():null}let DateTimePickerInput_a=DateTimePickerInput_p=class extends inputs_Input_p{constructor(e){super(e),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(e,r){return DateTimePickerInput_s(r.max)}writeMax(e,r){r.max=DateTimePickerInput_m(e)}readMin(e,r){return DateTimePickerInput_s(r.min)}writeMin(e,r){r.min=DateTimePickerInput_m(e)}clone(){return new DateTimePickerInput_p({includeTime:this.includeTime,max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimePickerInput_a.prototype,"includeTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_a.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimePickerInput_a.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimePickerInput_a.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_a.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimePickerInput_a.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimePickerInput_a.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetime-picker"],json:{read:!1,write:!0}})],DateTimePickerInput_a.prototype,"type",void 0),DateTimePickerInput_a=DateTimePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimePickerInput")],DateTimePickerInput_a);const DateTimePickerInput_c=DateTimePickerInput_a;

;// ./node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RadioButtonsInput_s;let RadioButtonsInput_p=RadioButtonsInput_s=class extends inputs_Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new RadioButtonsInput_s({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RadioButtonsInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],RadioButtonsInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radio-buttons"],json:{read:!1,write:!0}})],RadioButtonsInput_p.prototype,"type",void 0),RadioButtonsInput_p=RadioButtonsInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.RadioButtonsInput")],RadioButtonsInput_p);const RadioButtonsInput_i=RadioButtonsInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SwitchInput_s;let SwitchInput_p=SwitchInput_s=class extends inputs_Input_p{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new SwitchInput_s({offValue:this.offValue,onValue:this.onValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"offValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"onValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["switch"],json:{read:!1,write:!0}})],SwitchInput_p.prototype,"type",void 0),SwitchInput_p=SwitchInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.SwitchInput")],SwitchInput_p);const SwitchInput_i=SwitchInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextAreaInput_s;let TextAreaInput_p=TextAreaInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-area"}clone(){return new TextAreaInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-area"],json:{read:!1,write:!0}})],TextAreaInput_p.prototype,"type",void 0),TextAreaInput_p=TextAreaInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextAreaInput")],TextAreaInput_p);const TextAreaInput_a=TextAreaInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextBoxInput_s;let TextBoxInput_p=TextBoxInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-box"}clone(){return new TextBoxInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-box"],json:{read:!1,write:!0}})],TextBoxInput_p.prototype,"type",void 0),TextBoxInput_p=TextBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextBoxInput")],TextBoxInput_p);const TextBoxInput_n=TextBoxInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TimePickerInput_s;function TimePickerInput_p(t){return null!=t?t:null}function TimePickerInput_m(t){return null!=t?t:null}let TimePickerInput_u=TimePickerInput_s=class extends inputs_Input_p{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,e){return TimePickerInput_p(e.max)}writeMax(t,e){e.max=TimePickerInput_m(t)}readMin(t,e){return TimePickerInput_p(e.min)}writeMin(t,e){e.min=TimePickerInput_m(t)}readTimeResolution(t,e){return TimePickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=TimePickerInput_m(t)}clone(){return new TimePickerInput_s({max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],TimePickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],TimePickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],TimePickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],TimePickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],TimePickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],TimePickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["time-picker"],json:{read:!1,write:!0}})],TimePickerInput_u.prototype,"type",void 0),TimePickerInput_u=TimePickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TimePickerInput")],TimePickerInput_u);const TimePickerInput_l=TimePickerInput_u;

;// ./node_modules/@arcgis/core/form/elements/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const inputs_c={base:inputs_Input_p,key:"type",typeMap:{"barcode-scanner":BarcodeScannerInput_c,"combo-box":ComboBoxInput_i,"date-picker":DatePickerInput_c,"datetime-picker":DateTimePickerInput_c,"datetimeoffset-picker":l,"radio-buttons":RadioButtonsInput_i,switch:SwitchInput_i,"text-area":TextAreaInput_a,"text-box":TextBoxInput_n,"time-picker":TimePickerInput_l}};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js + 2 modules
var domains = __webpack_require__(83611);
;// ./node_modules/@arcgis/core/form/elements/FieldElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var FieldElement_n;let FieldElement_l=FieldElement_n=class extends Element_i{constructor(e){super(e),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new FieldElement_n({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:domains/* types */.gK,json:{read:{reader:domains/* fromJSON */.rS},write:!0}})],FieldElement_l.prototype,"domain",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],FieldElement_l.prototype,"editable",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"hint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:inputs_c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],FieldElement_l.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"requiredExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],FieldElement_l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"valueExpression",void 0),FieldElement_l=FieldElement_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.FieldElement")],FieldElement_l);const FieldElement_a=FieldElement_l;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var RelatedRecordsInfoFieldOrder = __webpack_require__(10357);
;// ./node_modules/@arcgis/core/form/elements/RelationshipElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RelationshipElement_p;let RelationshipElement_l=RelationshipElement_p=class extends Element_i{constructor(e){super(e),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new RelationshipElement_p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:(0,lang/* clone */.o8)(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["list"],json:{write:!0}})],RelationshipElement_l.prototype,"displayType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RelationshipElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[RelatedRecordsInfoFieldOrder/* default */.A],json:{write:!0}})],RelationshipElement_l.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"relationshipId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["relationship"],json:{read:!1,write:!0}})],RelationshipElement_l.prototype,"type",void 0),RelationshipElement_l=RelationshipElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.RelationshipElement")],RelationshipElement_l);const RelationshipElement_n=RelationshipElement_l;

;// ./node_modules/@arcgis/core/form/elements/TextElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextElement_s;let TextElement_i=TextElement_s=class extends Element_i{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new TextElement_s({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TextElement_i.prototype,"text",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TextElement_i.prototype,"textFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],TextElement_i.prototype,"type",void 0),TextElement_i=TextElement_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.TextElement")],TextElement_i);const TextElement_p=TextElement_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/support/UtilityNetworkAssociationType.js
var UtilityNetworkAssociationType = __webpack_require__(45441);
;// ./node_modules/@arcgis/core/form/elements/UtilityNetworkAssociationsElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let UtilityNetworkAssociationsElement_p=class extends(Clonable/* default */.A.ClonableMixin(Element_i)){constructor(o){super(o),this.associationTypes=null,this.editableExpression=null,this.type="utilityNetworkAssociations"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UtilityNetworkAssociationType/* default */.A],json:{write:{isRequired:!0}}})],UtilityNetworkAssociationsElement_p.prototype,"associationTypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],UtilityNetworkAssociationsElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["utilityNetworkAssociations"],json:{read:!1,write:!0}})],UtilityNetworkAssociationsElement_p.prototype,"type",void 0),UtilityNetworkAssociationsElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.UtilityNetworkAssociationsElement")],UtilityNetworkAssociationsElement_p);const UtilityNetworkAssociationsElement_n=UtilityNetworkAssociationsElement_p;

;// ./node_modules/@arcgis/core/form/support/formUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const formUtils_s=t=>"field"===t.type,formUtils_u=t=>"group"===t.type,formUtils_m=t=>"text"===t.type,formUtils_y=t=>"relationship"===t.type,formUtils_l=t=>"utilityNetworkAssociations"===t.type;function formUtils_a(t){return f(t)||formUtils_c(t)}function f(t){return"text-area"===t.type}function formUtils_c(t){return"text-box"===t.type}function h(t){return{typesWithGroup:{base:Element_i,key:"type",typeMap:{attachment:AttachmentElement_m,field:FieldElement_a,group:t,relationship:RelationshipElement_n,text:TextElement_p,utilityNetworkAssociations:UtilityNetworkAssociationsElement_n}},typesWithoutGroup:{base:Element_i,key:"type",typeMap:{attachment:AttachmentElement_m,field:FieldElement_a,relationship:RelationshipElement_n,text:TextElement_p,utilityNetworkAssociations:UtilityNetworkAssociationsElement_n}}}}function x(t,e,o=!0){if(!t)return null;const p=o?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>p[t.type])).map((t=>p[t.type].fromJSON(t)))}function G(t,e,o=!0){if(!t)return null;const p=o?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>p[t.type])).map((t=>t.toJSON()))}function W(e,o,p=!0){return e?e.map((e=>(0,ensureType/* ensureOneOfType */.aq)(p?o.typesWithGroup:o.typesWithoutGroup,e))):null}

;// ./node_modules/@arcgis/core/form/elements/GroupElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var GroupElement_d;let GroupElement_u=GroupElement_d=class extends Element_i{constructor(e){super(e),this.elements=null,this.initialState="expanded",this.type="group"}castElements(e){return W(e,E,!1)}readElements(e,t){return x(t.formElements,E,!1)}writeElements(e,t){t.formElements=G(e,E,!1)}clone(){return new GroupElement_d({description:this.description,elements:(0,lang/* clone */.o8)(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],GroupElement_u.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],GroupElement_u.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],GroupElement_u.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],GroupElement_u.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["collapsed","expanded"],json:{write:!0}})],GroupElement_u.prototype,"initialState",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],GroupElement_u.prototype,"type",void 0),GroupElement_u=GroupElement_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.GroupElement")],GroupElement_u);const E=h(GroupElement_u),j=GroupElement_u;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
;// ./node_modules/@arcgis/core/form/FormTemplate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var I;const b=h(j);let F=I=class extends JSONSupport/* default */.A{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(e){return W(e,b)}readElements(e,s){return x(s.formElements,b)}writeElements(e,s){s.formElements=G(e,b)}clone(){return new I({description:this.description,expressionInfos:(0,lang/* clone */.o8)(this.expressionInfos),elements:(0,lang/* clone */.o8)(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(e,s){const t=new Set,{description:r,elements:o,expressionInfos:i,title:n}=this;if(U(t,e,r),U(t,e,n),!o)return[];const l=k(o,i).map((s=>(0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,s)));await Promise.all(l);for(const p of o)g(t,{fieldsIndex:e,relationships:s},p);return Array.from(t).sort()}};function g(e,s,t){const{fieldsIndex:r}=s;if(!r||r.fields.length!==e.size)switch(U(e,r,t.label),U(e,r,t.description),t.type){case"field":(0,fieldUtils/* collectField */.rq)(e,r,t.fieldName);break;case"group":t.elements.forEach((t=>g(e,s,t)));break;case"relationship":if(s.relationships){const o=s.relationships.find((e=>e.id===t.relationshipId));o&&(0,fieldUtils/* collectField */.rq)(e,r,o.keyField)}(0,fieldUtils/* collectFields */._w)(e,r,t.orderByFields?.map((e=>e.field)));break;case"text":U(e,r,t.text)}}function k(e,s){if(!s||0===s.length)return[];const t=H(e),r=[];for(const o of s)t.has(o.name)&&r.push(o.expression);return r}function H(e){const s=new Set;for(const t of e)if((0,SetUtils/* addMaybe */.kb)(s,t.visibilityExpression),!formUtils_m(t))if(formUtils_u(t))(0,SetUtils/* addMany */.FB)(s,H(t.elements));else if((0,SetUtils/* addMaybe */.kb)(s,t.editableExpression),formUtils_s(t)){const{requiredExpression:e,valueExpression:r}=t;(0,SetUtils/* addMany */.FB)(s,[e,r])}return s}function U(e,s,t){(0,fieldUtils/* collectFields */._w)(e,s,(0,fieldUtils/* extractSubstitutionTemplatesFromString */.nw)(t))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],F.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],F.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],F.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],F.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],F.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],F.prototype,"expressionInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"preserveFieldValuesWhenHidden",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=I=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.FormTemplate")],F);const V=F;


/***/ }),

/***/ 21570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5262);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97629);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48524);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const p=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .removeUnordered */ .Xy)(u,"orthometric");const g=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const i=p.read(e);return i||(r?.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const i=g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .unitFromRESTJSON */ .LA)(e)||g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVerticalUnitStringForSR */ .k1)(t);return new d({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal",write:{isRequired:!0}}}}})],m.prototype,"heightModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:{writer:g.write,isRequired:!0}}}}})],m.prototype,"heightUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.geometry.HeightModelInfo")],m);


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

/***/ 39586:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ J)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(53244);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(70214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/loadAll.js
var loadAll = __webpack_require__(52686);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(20857);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(71004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(85716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/FeatureLayer.js + 3 modules
var FeatureLayer = __webpack_require__(16730);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(23377);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
;// ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(Identifiable/* default */.A.IdentifiableMixin(MultiOriginJSONSupport/* MultiOriginJSONSupport */.L)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,o){return"string"==typeof o.alias?o.alias:"string"==typeof o.name?o.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],n.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["alias","name"])],n.prototype,"readTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],n.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,isRequired:!0}}})],n.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","id")],n.prototype,"readIdOnlyOnce",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,commonProperties/* readOnlyService */.Qo)(String))],n.prototype,"modelName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,commonProperties/* readOnlyService */.Qo)(Boolean))],n.prototype,"isEmpty",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0})],n.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],n.prototype,"visible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],n.prototype,"opacity",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.buildingSublayers.BuildingSublayer")],n);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/capabilities.js
var capabilities = __webpack_require__(21200);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(51387);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(72197);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SLayerDefinitions.js
var I3SLayerDefinitions = __webpack_require__(27708);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/typeUtils.js + 11 modules
var typeUtils = __webpack_require__(94403);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(42663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(93695);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js + 8 modules
var I3SUtil = __webpack_require__(29672);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/layers/support/popupUtils.js
var support_popupUtils = __webpack_require__(96444);
;// ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingComponentSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const A=(0,fieldProperties/* defineFieldProperties */.p)();let _=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(n))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new FieldsIndex/* default */.A(this.fields)}readAssociatedLayer(e,t){const r=this.layer.associatedFeatureServiceItem,o=t.associatedLayerID;return null!=r&&"number"==typeof o?new FeatureLayer["default"]({portalItem:r,customParameters:this.customParameters,layerId:o}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return""}get globalIdField(){if(null!=this.fields)for(const e of this.fields)if("global-id"===e.type)return e.name;return""}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,r=this._fetchService(t).then((()=>{this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,Logger/* default */.A.getLogger(this),t)}));return this.addResolvingPromise(r),Promise.resolve(this)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}async _fetchService(e){const t=(await (0,request/* default */.A)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getField(e)?.domain??null;return this.associatedLayer?(0,featureLayerUtils/* getFieldDomain */.Vq)(this.associatedLayer,e,t,r):r}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:capabilities/* zeroCapabilities */.P,{query:t,operations:{supportsQuery:r},data:{supportsZ:o,supportsM:s,isVersioned:i}}=e;return{query:t,operations:{supportsQuery:r},data:{supportsZ:o,supportsM:s,isVersioned:i}}}createQuery(){const e=new Query/* default */.A;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}async queryObjectIds(e,t){const r=await this._getAssociatedLayerForQuery();return(await r.queryObjectIds(e||this.createQuery(),t)).filter(guards/* isNumber */.Et)}async queryCachedAttributes(e,t){const r=(0,fieldUtils/* unpackFieldNames */.hL)(this.fieldsIndex,await (0,support_popupUtils/* getRequiredFields */.TO)(this,(0,support_popupUtils/* getFetchPopupTemplate */.D8)(this)));return (0,I3SUtil/* queryAttributesFromCachedAttributesId */.s1)(this.parsedUrl.path,this.attributeStorageInfo,e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,r){const o=await this.queryCachedAttributes(e,[r]);if(!o||0===o.length)throw new Error/* default */.A("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new Graphic/* default */.A({attributes:o[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new Error/* default */.A("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new Error/* default */.A("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:I3SLayerDefinitions/* I3SNodePageDefinition */.W4,readOnly:!0})],_.prototype,"nodePages",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3SMaterialDefinition */.uV],readOnly:!0})],_.prototype,"materialDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3STextureSetDefinition */.Ot],readOnly:!0})],_.prototype,"textureSetDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[I3SLayerDefinitions/* I3SGeometryDefinition */.L0],readOnly:!0})],_.prototype,"geometryDefinitions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"serviceUpdateTimeStamp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],_.prototype,"rootNode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"attributeStorageInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(A.fields)],_.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:FeatureLayer["default"]})],_.prototype,"associatedLayer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","associatedLayer",["associatedLayerID"])],_.prototype,"readAssociatedLayer",null),(0,tslib_es6._)([(0,property/* property */.MZ)(A.outFields)],_.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],_.prototype,"objectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],_.prototype,"globalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{read:!1}})],_.prototype,"displayField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String})],_.prototype,"apiKey",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String})],_.prototype,"customParameters",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Extent/* default */.A})],_.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:SpatialReference/* default */.A})],_.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"version",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:ElevationInfo/* default */.A})],_.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Number})],_.prototype,"minScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Number})],_.prototype,"maxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Number})],_.prototype,"effectiveScaleRange",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["hide","show"],json:{write:!0}})],_.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:typeUtils/* webSceneRendererTypes */.XJ,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],_.prototype,"renderer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],_.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],_.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],_.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],_.prototype,"normalReferenceFrame",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"types",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"typeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!1}}),(0,enumeration/* enumeration */.e)(new jsonMap/* JSONMap */.J({"3DObject":"3d-object",Point:"point"}))],_.prototype,"layerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],_.prototype,"profile",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],_.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],_.prototype,"statisticsInfo",void 0),_=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.buildingSublayers.BuildingComponentSublayer")],_);const C=_;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Warning.js
var Warning = __webpack_require__(97629);
;// ./node_modules/@arcgis/core/layers/buildingSublayers/BuildingGroupSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;const l={type:Collection/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:p}}},read:!1}};function p(r,o,t){if(r&&Array.isArray(r))return new Collection/* default */.A(r.map((r=>{const e=y(r);if(e){const o=new e;return o.read(r,t),o}return t?.messages&&r&&t.messages.push(new Warning/* default */.A("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(r.type||"unknown")+"' are not supported",{definition:r,context:t})),null})))}let c=a=class extends n{constructor(r){super(r),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return (0,loadAll/* loadAllChildren */.L)(this,(r=>a.forEachSublayer(this.sublayers,(e=>{"building-group"!==e.type&&r(e)}))))}};function y(r){return"group"===r.layerType?c:C}(0,tslib_es6._)([(0,property/* property */.MZ)({type:["hide","show","hide-children"],json:{write:!0}})],c.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(l)],c.prototype,"sublayers",void 0),c=a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.buildingSublayers.BuildingGroupSublayer")],c),function(r){function e(r,o){r.forEach((r=>{o(r),"building-group"===r.type&&e(r.sublayers,o)}))}r.sublayersProperty=l,r.readSublayers=p,r.forEachSublayer=e}(c||(c={}));

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/SceneService.js + 1 modules
var SceneService = __webpack_require__(32655);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/associatedFeatureServiceUtils.js
var associatedFeatureServiceUtils = __webpack_require__(28904);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(1874);
;// ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{write:{isRequired:!0}}})],e.prototype,"type",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfo")],e);const BuildingFilterAuthoringInfo_p=e;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoType.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var i;let BuildingFilterAuthoringInfoType_p=i=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new i({filterType:this.filterType,filterValues:(0,lang/* clone */.o8)(this.filterValues)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],BuildingFilterAuthoringInfoType_p.prototype,"filterType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{isRequired:!0}}})],BuildingFilterAuthoringInfoType_p.prototype,"filterValues",void 0),BuildingFilterAuthoringInfoType_p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfoType")],BuildingFilterAuthoringInfoType_p);const BuildingFilterAuthoringInfoType_l=BuildingFilterAuthoringInfoType_p;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoBlock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoBlock_c;const BuildingFilterAuthoringInfoBlock_l=Collection/* default */.A.ofType(BuildingFilterAuthoringInfoType_l);let m=BuildingFilterAuthoringInfoBlock_c=class extends JSONSupport/* default */.A{clone(){return new BuildingFilterAuthoringInfoBlock_c({filterTypes:(0,lang/* clone */.o8)(this.filterTypes)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:BuildingFilterAuthoringInfoBlock_l,json:{write:{isRequired:!0}}})],m.prototype,"filterTypes",void 0),m=BuildingFilterAuthoringInfoBlock_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfoBlock")],m);const BuildingFilterAuthoringInfoBlock_n=m;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterAuthoringInfoCheckbox.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterAuthoringInfoCheckbox_p;const BuildingFilterAuthoringInfoCheckbox_l=Collection/* default */.A.ofType(BuildingFilterAuthoringInfoBlock_n);let BuildingFilterAuthoringInfoCheckbox_n=BuildingFilterAuthoringInfoCheckbox_p=class extends BuildingFilterAuthoringInfo_p{constructor(){super(...arguments),this.type="checkbox"}clone(){return new BuildingFilterAuthoringInfoCheckbox_p({filterBlocks:(0,lang/* clone */.o8)(this.filterBlocks)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["checkbox"]})],BuildingFilterAuthoringInfoCheckbox_n.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:BuildingFilterAuthoringInfoCheckbox_l,json:{write:{isRequired:!0}}})],BuildingFilterAuthoringInfoCheckbox_n.prototype,"filterBlocks",void 0),BuildingFilterAuthoringInfoCheckbox_n=BuildingFilterAuthoringInfoCheckbox_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],BuildingFilterAuthoringInfoCheckbox_n);const BuildingFilterAuthoringInfoCheckbox_m=BuildingFilterAuthoringInfoCheckbox_n;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterMode.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* default */.A{};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:{isRequired:!0}}})],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterMode")],t);const BuildingFilterMode_p=t;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterModeSolid.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterModeSolid_t;let BuildingFilterModeSolid_i=BuildingFilterModeSolid_t=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="solid"}clone(){return new BuildingFilterModeSolid_t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["solid"],readOnly:!0,json:{write:{isRequired:!0}}})],BuildingFilterModeSolid_i.prototype,"type",void 0),BuildingFilterModeSolid_i=BuildingFilterModeSolid_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterModeSolid")],BuildingFilterModeSolid_i);const BuildingFilterModeSolid_p=BuildingFilterModeSolid_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/edges/utils.js + 1 modules
var utils = __webpack_require__(83862);
;// ./node_modules/@arcgis/core/layers/support/BuildingFilterModeWireFrame.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterModeWireFrame_c;let BuildingFilterModeWireFrame_m=BuildingFilterModeWireFrame_c=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new BuildingFilterModeWireFrame_c({edges:(0,lang/* clone */.o8)(this.edges)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({wireFrame:"wire-frame"})],BuildingFilterModeWireFrame_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(utils/* symbol3dEdgesProperty */.J)],BuildingFilterModeWireFrame_m.prototype,"edges",void 0),BuildingFilterModeWireFrame_m=BuildingFilterModeWireFrame_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterModeWireFrame")],BuildingFilterModeWireFrame_m);const BuildingFilterModeWireFrame_a=BuildingFilterModeWireFrame_m;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterModeXRay.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilterModeXRay_t;let BuildingFilterModeXRay_p=BuildingFilterModeXRay_t=class extends BuildingFilterMode_p{constructor(){super(...arguments),this.type="x-ray"}clone(){return new BuildingFilterModeXRay_t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["x-ray"],readOnly:!0,json:{write:{isRequired:!0}}})],BuildingFilterModeXRay_p.prototype,"type",void 0),BuildingFilterModeXRay_p=BuildingFilterModeXRay_t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterModeXRay")],BuildingFilterModeXRay_p);const BuildingFilterModeXRay_i=BuildingFilterModeXRay_p;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilterBlock.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const BuildingFilterBlock_a={nonNullable:!0,types:{key:"type",base:BuildingFilterMode_p,typeMap:{solid:BuildingFilterModeSolid_p,"wire-frame":BuildingFilterModeWireFrame_a,"x-ray":BuildingFilterModeXRay_i}},json:{read:e=>{switch(e?.type){case"solid":return BuildingFilterModeSolid_p.fromJSON(e);case"wireFrame":return BuildingFilterModeWireFrame_a.fromJSON(e);case"x-ray":return BuildingFilterModeXRay_i.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let BuildingFilterBlock_m=d=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new BuildingFilterModeSolid_p,this.title=""}clone(){return new d({filterExpression:this.filterExpression,filterMode:(0,lang/* clone */.o8)(this.filterMode),title:this.title})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilterBlock_m.prototype,"filterExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(BuildingFilterBlock_a)],BuildingFilterBlock_m.prototype,"filterMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilterBlock_m.prototype,"title",void 0),BuildingFilterBlock_m=d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilterBlock")],BuildingFilterBlock_m);const BuildingFilterBlock_c=BuildingFilterBlock_m;

;// ./node_modules/@arcgis/core/layers/support/BuildingFilter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BuildingFilter_d;const u=Collection/* default */.A.ofType(BuildingFilterBlock_c);let BuildingFilter_m=BuildingFilter_d=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=(0,uuid/* generateUUID */.lk)(),this.name=null}clone(){return new BuildingFilter_d({description:this.description,filterBlocks:(0,lang/* clone */.o8)(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:(0,lang/* clone */.o8)(this.filterAuthoringInfo)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],BuildingFilter_m.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"filterBlocks",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:BuildingFilterAuthoringInfo_p,typeMap:{checkbox:BuildingFilterAuthoringInfoCheckbox_m}},json:{read:o=>"checkbox"===o?.type?BuildingFilterAuthoringInfoCheckbox_m.fromJSON(o):null,write:!0}})],BuildingFilter_m.prototype,"filterAuthoringInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{enabled:!0,isRequired:!0}}})],BuildingFilter_m.prototype,"name",void 0),BuildingFilter_m=BuildingFilter_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingFilter")],BuildingFilter_m);

;// ./node_modules/@arcgis/core/layers/support/BuildingSummaryStatistics.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let BuildingSummaryStatistics_p=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],BuildingSummaryStatistics_p.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],BuildingSummaryStatistics_p.prototype,"modelName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],BuildingSummaryStatistics_p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],BuildingSummaryStatistics_p.prototype,"min",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],BuildingSummaryStatistics_p.prototype,"max",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:t=>Array.isArray(t)&&(t.every((t=>"string"==typeof t))||t.every((t=>"number"==typeof t)))?t.slice():null}})],BuildingSummaryStatistics_p.prototype,"mostFrequentValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number]})],BuildingSummaryStatistics_p.prototype,"subLayerIds",void 0),BuildingSummaryStatistics_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],BuildingSummaryStatistics_p);let BuildingSummaryStatistics_n=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(JSONSupport/* default */.A))){constructor(t){super(t),this.url=null,this.customParameters=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(Logger/* default */.A.getLogger(this).error("building summary statistics are not loaded"),null)}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._fetchService(e)),Promise.resolve(this)}async _fetchService(t){const r=(await (0,request/* default */.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t})).data;this.read(r,{origin:"service"})}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,type:String})],BuildingSummaryStatistics_n.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],BuildingSummaryStatistics_n.prototype,"customParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],BuildingSummaryStatistics_n.prototype,"apiKey",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:[BuildingSummaryStatistics_p],json:{read:{source:"summary"}}})],BuildingSummaryStatistics_n.prototype,"fields",null),BuildingSummaryStatistics_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.BuildingSummaryStatistics")],BuildingSummaryStatistics_n);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(19541);
;// ./node_modules/@arcgis/core/layers/BuildingSceneLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R=Collection/* default */.A.ofType(BuildingFilter_m),M=(0,lang/* clone */.o8)(c.sublayersProperty),k=M.json?.origins;k&&(k["web-scene"]={type:[C],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},k["portal-item"]={type:[C],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let H=class extends((0,SceneService/* SceneService */.w6)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new CollectionFlattener/* default */.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new R,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,t){const i=c.readSublayers(e,r,t);return c.forEachSublayer(i,(e=>e.layer=this)),this._allSublayerOverrides&&(N(i,this._allSublayerOverrides),this._allSublayerOverrides=null),i}write(e,r){return e=super.write(e,r),!r||"web-scene"!==r.origin&&"portal-item"!==r.origin||(this.sublayers?W(this.sublayers,e,r):this._allSublayerOverrides&&z(this._allSublayerOverrides,e,r)),e}read(e,r){if(super.read(e,r),("web-scene"===r?.origin||"portal-item"===r?.origin)&&Array.isArray(e?.sublayers)){const t=V(e.sublayers,r);this.sublayers?G(this.sublayers,t):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(r.origin,t))}}readSummaryStatistics(e,r){if("string"==typeof r.statisticsHRef&&this.parsedUrl){const e=(0,urlUtils/* join */.fj)(this.parsedUrl.path,r.statisticsHRef);return new BuildingSummaryStatistics_n({url:e,apiKey:this.apiKey,customParameters:this.customParameters})}return null}set elevationInfo(e){null!=e&&"absolute-height"!==e.mode||this._set("elevationInfo",e),this._validateElevationInfo(e)}load(e){const r=null!=e?e.signal:null,t=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r))).then((()=>this._fetchAssociatedFeatureService(r)));return this.addResolvingPromise(t),Promise.resolve(this)}loadAll(){return (0,loadAll/* loadAll */.g)(this,(e=>{c.forEachSublayer(this.sublayers,(r=>{"building-group"!==r.type&&e(r)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,r){return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(SceneService/* SaveOperationType */.Xh.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new Error/* default */.A("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await (0,associatedFeatureServiceUtils/* findAssociatedFeatureService */.L)(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){(0,promiseUtils/* ignoreAbortErrors */.QZ)(this._logWarningOnPopupEnabled())}}async _logWarningOnPopupEnabled(){const e=new AbortController;this.addHandles((0,handleUtils/* abortHandle */.rE)(e)),await (0,reactiveUtils/* whenOnce */.C_)((()=>this.allSublayers.filter((e=>"building-component"===e.type)).some((e=>e.popupEnabled&&null!=e.popupTemplate))),e.signal);const r=this.allSublayers.filter((e=>"building-component"===e.type)).filter((e=>e.popupEnabled&&null!=e.popupTemplate)),t=[],i=[];for(const s of r){const e=s.title??`untitled ${s.id}`;s.attributeStorageInfo?t.push(e):i.push(e)}const o="\n  ",a=t.length>0?`\nThe following sublayers will fall back to binary attributes for Popups:${o}${t.join(o)}`:"",n=i.length>0?`\nThe following sublayers have no binary attributes and will not work with Popups:${o}${i.join(o)}`:"";Logger/* default */.A.getLogger(this).warn(`Associated FeatureLayer could not be loaded for this BuildingSceneLayer: ${this.title}.`,a,n)}_validateElevationInfo(e){const r="Building scene layers";(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* elevationModeRequiredMessage */.B)(r,"absolute-height",e)),(0,elevationInfoUtils/* logInvalidElevationInfoWarning */.XF)(Logger/* default */.A.getLogger(this),(0,elevationInfoUtils/* featureExpressionUnsupportedMessage */.tW)(r,e))}};function N(e,r){r.forEach((r=>G(e,r)))}function G(e,r){const{overrides:t,context:i}=r;c.forEachSublayer(e,(e=>e.read(t.get(e.id),i)))}function V(e,r){const t=new Map;for(const s of e)null!=s&&"object"==typeof s&&"number"==typeof s.id?t.set(s.id,s):r.messages?.push(new Error/* default */.A("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:s}));return{overrides:t,context:r}}function W(e,r,t){const i=[];c.forEachSublayer(e,(e=>{const r=e.write({},t);Object.keys(r).length>1&&i.push(r)})),i.length>0&&(r.sublayers=i)}function z(e,r,t){const i=t?.origin&&e.get(t.origin);i&&(r.sublayers=[],i.overrides.forEach((e=>{r.sublayers.push((0,lang/* clone */.o8)(e))})))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:["BuildingSceneLayer"]})],H.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],H.prototype,"allSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(M)],H.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","sublayers")],H.prototype,"readSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:R,nonNullable:!0,json:{write:!0}})],H.prototype,"filters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],H.prototype,"activeFilterId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:BuildingSummaryStatistics_n})],H.prototype,"summaryStatistics",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("summaryStatistics",["statisticsHRef"])],H.prototype,"readSummaryStatistics",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{read:!1}})],H.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* sceneLayerFullExtent */.Fm)],H.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],H.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"]})],H.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,commonProperties/* readOnlyService */.Qo)(SpatialReference/* default */.A))],H.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* elevationInfo */.Yj)],H.prototype,"elevationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],H.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],H.prototype,"associatedFeatureServiceItem",void 0),H=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.BuildingSceneLayer")],H);const J=H;


/***/ }),

/***/ 16730:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Xe)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/form/FormTemplate.js + 31 modules
var FormTemplate = __webpack_require__(70345);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(20857);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(71004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 5 modules
var workers = __webpack_require__(99722);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
var shared = __webpack_require__(50078);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(54483);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/editsZScale.js
var editsZScale = __webpack_require__(29323);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/queryZScale.js
var queryZScale = __webpack_require__(11378);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let _=0,T=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(Collection/* default */.A))){constructor(e){super(e),this._idToClientGeometry=null,this.type="memory"}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);(0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r);const o=FeatureSet/* default */.A.fromJSON(r);if(!this._requiresClientGraphicMapping()||!this._idToClientGeometry)return o;const s=this.layer.objectIdField;for(const i of o.features){const e=i.attributes[s],t=this._idToClientGeometry.get(e);void 0!==t&&(i.geometry=t)}return o.geometryType=this.layer.geometryType,o}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new Error/* default */.A("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return (0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:Extent/* default */.A.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async queryAttributeBins(e,t={}){return await this.load(),this._connection.invoke("queryAttributeBins",e?.toJSON(),t)}async _applyEdits(e){if(!this._connection)throw new Error/* default */.A("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const s=[],i=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const n=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const o of e.deleteFeatures){const e=n(o);null!=e&&s.push(e)}const a=e.updateFeatures&&this._idToClientGeometry?new Map:null;if(e.updateFeatures)for(const o of e.updateFeatures)if(i.push(this._serializeFeature(o)),a&&null!=o.geometry){const e=n(o);null!=e&&a.set(e,o)}(0,editsZScale/* unapplyEditsZUnitScaling */.u)(r?r.features:null,i,this.layer.spatialReference);const{fullExtent:l,featureEditResults:u}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:i,deletes:s});return this.fullExtent=l,r&&r.finish(u.uidToObjectId),this._updateIdToClientGeometries(a,u),this._createEditsResult(u)}async _prepareClientMapping(e,t){if("mesh"!==this._layerOrSourceGeometryType||null==e)return;const r=[];for(const{geometry:o}of e)null==o||"mesh"!==o.type||o.hasExtent||o.loaded||r.push(o.load({signal:t}));r.length&&await Promise.all(r)}_updateIdToClientGeometries(e,t){if(this._idToClientGeometry){if(e)for(const r of t.updateResults){if(!r.success)continue;const t=e.get(r.objectId);null!=t&&this._addIdToClientGeometry(t)}for(const e of t.deleteResults)e.success&&this._idToClientGeometry.delete(e.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:""};return{objectId:e.objectId,globalId:e.globalId,error:t?new Error/* default */.A("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let o=null;for(let i=0;i<e.length;i++){const s=e[i],n=this._serializeFeature(s);o||null==s.geometry||(o=s.geometry.type),r[i]=n,t.set(`${n.uid}`,s)}const s=this;return{features:r,inferredGeometryType:o,finish(e){const r=s.sourceJSON.objectIdField;for(const o in e){const i=e[o],n=t.get(o);n&&(n.attributes||(n.attributes={}),-1===i?delete n.attributes[r]:n.attributes[r]=i,s._addIdToClientGeometry(n))}}}}_addIdToClientGeometry(e){if(!this._idToClientGeometry)return;const t=this.sourceJSON.objectIdField,r=e.attributes?.[t];null!=r&&this._idToClientGeometry.set(r,e.geometry??null)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),o=(_++).toString();return r?{uid:o,geometry:r.toJSON(),attributes:t}:{uid:o,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;if(null==t)return null;if(this._geometryRequiresClientGraphicMapping(t)){return t.extent?Polygon/* default */.A.fromExtent(t.extent):null}return t}async _startWorker(e){this._connection=await (0,workers/* open */.ho)("MemorySourceWorker",{strategy:(0,has/* default */.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:o,hasM:s,hasZ:n,timeInfo:l,dateFieldsTimeZone:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,e);const c=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",(e=>{Logger/* default */.A.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()})));const d={features:c.features,fields:t?.map((e=>e.toJSON())),geometryType:typeUtils/* typeKebabDictionary */.Ye.toJSON(this._workerGeometryType),hasM:"mesh"!==this._layerOrSourceGeometryType&&s,hasZ:"mesh"===this._layerOrSourceGeometryType||n,objectIdField:o,spatialReference:p?null:r&&r.toJSON(),timeInfo:l?.toJSON()??null,dateFieldsTimeZone:u},y=await this._connection.invoke("load",d,{signal:e});for(const a of y.warnings)Logger/* default */.A.getLogger(this.layer).warn("#load()",`${a.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:a});y.featureErrors.length&&Logger/* default */.A.getLogger(this.layer).warn("#load()",`Encountered ${y.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:y.featureErrors});const m=y.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(c.inferredGeometryType)&&(m.geometryType=typeUtils/* typeKebabDictionary */.Ye.toJSON(c.inferredGeometryType)),this.sourceJSON=m,this._requiresClientGraphicMapping()&&(this._idToClientGeometry=new Map),c.finish(y.assignedObjectIds)}};(0,tslib_es6._)([(0,shared/* shared */.u)({Type:Graphic/* default */.A,ensureType:(0,ensureType/* ensureType */.dp)(Graphic/* default */.A)})],T.prototype,"itemType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],T.prototype,"_workerGeometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"sourceJSON",void 0),T=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.MemorySource")],T);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/DisplayFilteredLayer.js + 2 modules
var DisplayFilteredLayer = __webpack_require__(57546);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(88940);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js + 2 modules
var FeatureEffectLayer = __webpack_require__(42383);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 4 modules
var FeatureLayerBase = __webpack_require__(13268);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js + 1 modules
var FeatureReductionLayer = __webpack_require__(46197);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
var OrderedLayer = __webpack_require__(87917);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
;// ./node_modules/@arcgis/core/layers/support/PublishingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends Accessor/* default */.A{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"status",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.PublishingInfo")],e);

;// ./node_modules/@arcgis/core/layers/mixins/PublishableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=Symbol();function i(t){return null!=t&&"object"==typeof t&&o in t}const n=i=>{var n;let a=class extends i{constructor(){super(...arguments),this[n]=!0}static{n=o}get publishingInfo(){if(this.destroyed)return null;const t=this._get("publishingInfo");if(t)return t;const s=new e;return this._checkPublishingStatus(s),s}_checkPublishingStatus(t){const s=250,e=125;let r=0;const o=async s=>{let n;t.updating=!0;try{n=await this.fetchPublishingStatus()}catch(a){n="unavailable"}"published"!==n&&"unavailable"!==n||("publishing"===t.status&&this.refresh(),i.remove()),t.status=n,t.updating=!1,i.removed||(r=setTimeout(o,s,s+e))},i={removed:!1,remove(){this.removed=!0,clearTimeout(r)}};this.when().catch((()=>i.remove())),o(s),this.addHandles(i)}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1})],a.prototype,"publishingInfo",null),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.PublishableLayer")],a),a};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TrackableLayer.js + 2 modules
var TrackableLayer = __webpack_require__(6907);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(84700);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(52202);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js
var LabelClass = __webpack_require__(47659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(6488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(29093);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(72523);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TitleCreator.js
var TitleCreator = __webpack_require__(52884);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(95298);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(29221);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(99650);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/typeUtils.js + 11 modules
var support_typeUtils = __webpack_require__(94403);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(42663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/typeUtils.js + 1 modules
var symbols_support_typeUtils = __webpack_require__(59343);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(93802);
;// ./node_modules/@arcgis/core/layers/FeatureLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Ze="FeatureLayer";function He(e,t){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function ke(e){return e&&e instanceof Collection/* default */.A}const ze=(0,fieldProperties/* defineFieldProperties */.p)();function Ke(e,t,r){const i=!!r?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let Xe=class extends((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)(n((0,EditBusLayer/* EditBusLayer */.w6)((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,BlendLayer/* BlendLayer */.dM)((0,OrderedLayer/* OrderedLayer */.fY)((0,TemporalLayer/* TemporalLayer */.e)((0,TrackableLayer/* TrackableLayer */.d)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Clonable/* default */.A.ClonableMixin(Layer/* default */.A)))))))))))))))))))){constructor(...e){super(...e),this.attributeTableTemplate=null,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="ArcGISFeatureLayer",this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeCode=null,this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{const{save:i,saveAs:o}=await __webpack_require__.e(/* import() */ 10900).then(__webpack_require__.bind(__webpack_require__, 10900));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,t);case interfaces/* SaveOperationType */.X.SAVE_AS:return o(this,r,t)}}))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then((e=>this.initLayerProperties(e)))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const e=await this._fetchFirstValidLayerId(t);null!=e&&(this.layerId=e)}if(!this.url&&!this._hasMemorySource())throw new Error/* default */.A("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get _titleCreator(){const e=this._get("_titleCreator");return (0,maybe/* destroyMaybe */.pR)(e),new TitleCreator/* default */.A({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,fields:this.fields,displayField:this.displayField,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}readCapabilities(e,t){return t=t.layerDefinition||t,(0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return (0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this)}get featureTitleFields(){return[...this._titleCreator.requiredFields]}readIsTable(e,t){return"Table"===(t=t?.layerDefinition??t).type||!t.geometryType}writeIsTable(e,t,r,i){i?.writeLayerSchema&&(0,object/* setDeepValue */.sM)(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t.layerDefinition||t)}readObjectIdField(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t.layerDefinition||t)}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&(null!=this.dynamicDataSource?e.path=(0,urlUtils/* join */.fj)(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){t=t.layerDefinition||t;const i=t.drawingInfo?.renderer;if(i){const e=(0,jsonUtils/* read */.L)(i,t,r)??void 0;return e||Logger/* default */.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}return (0,featureLayerUtils/* createDefaultRenderer */.PD)(t,r)}set source(e){const t=this._get("source");t!==e&&(ke(t)&&this._resetMemorySource(t),ke(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof Collection/* default */.A?new T({layer:this,items:e}):e:null}readSource(e,t){const r=FeatureSet/* default */.A.fromJSON(t.featureSet);return new T({layer:this,items:r?.features??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r?.creatorField,o=r?.editorField;return e=e?.map((e=>FeatureTemplate/* default */.A.fromJSON(e))),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,t){const r=t.layerDefinition?.name??t.name,i=t.title||t.layerDefinition?.title;if(r){const e=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,r):r;let t=r;if(!t&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(t=e.title)}if(!t)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==t&&(t=e+" - "+t),(0,arcgisLayerUrl/* cleanTitle */.cr)(t)}if("item-title"===this.sublayerTitleMode&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition?.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r?.creatorField,o=r?.editorField;return e?.map((e=>(e=FeatureType/* default */.A.fromJSON(e),this._fixTemplates(e.templates,i),this._fixTemplates(e.templates,o),e)))}readVisible(e,t){return null!=t.layerDefinition?.defaultVisibility?!!t.layerDefinition.defaultVisibility:null!=t.visibility?!!t.visibility:void 0}async addAttachment(e,t){const r=await (0,featureLayerUtils/* addAttachment */.Xl)(this,e,t,Ze);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await (0,featureLayerUtils/* updateAttachment */.bt)(this,e,t,r,Ze);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,t)}async uploadAssets(e,t){return (0,featureLayerUtils/* uploadAssets */.rn)(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 75089).then(__webpack_require__.bind(__webpack_require__, 97470)),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=(0,featureLayerUtils/* createQuery */.VZ)(this);e.dynamicDataSource=this.dynamicDataSource;const t=null!=this.subtypeCode?`${this.subtypeField} = ${this.subtypeCode}`:null,r=(0,sql/* sqlAnd */.mA)(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){const r=await (0,featureLayerUtils/* deleteAttachments */.mm)(this,e,t,Ze);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return (0,featureLayerUtils/* fetchRecomputedExtents */.WP)(this,e,Ze)}async getFeatureTitle(e,t){return this._titleCreator.getTitle(this,e,t)}async getFeatureTitles(e,t){return this._titleCreator.getTitles(this,e,t)}getFeatureType(e){return (0,featureLayerUtils/* getFeatureType */.xd)(this.types,this.typeIdField,e)}getFieldDomain(e,t){return (0,featureLayerUtils/* getFieldDomain */.Vq)(this,e,t,this.getField(e)?.domain??null)}async queryAttachments(e,t){return (0,featureLayerUtils/* queryAttachments */.lV)(this,e,t,Ze)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(Query/* default */.A.from(e)??r.createQuery(),t);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=r;return i}async queryObjectIds(e,t){return await (0,featureLayerUtils/* queryObjectIds */.sg)(this,e,t,Ze)}async queryFeatureCount(e,t){return (0,featureLayerUtils/* queryFeatureCount */.Ye)(this,e,t,Ze)}async queryExtent(e,t){return (0,featureLayerUtils/* queryExtent */.B5)(this,e,t,Ze)}async queryRelatedFeatures(e,t){return (0,featureLayerUtils/* queryRelatedFeatures */.hM)(this,e,t,Ze)}async queryRelatedFeaturesCount(e,t){return (0,featureLayerUtils/* queryRelatedFeaturesCount */.S2)(this,e,t,Ze)}async queryTopFeatures(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryTopFeatures capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745)),a=await r.queryTopFeatures(o.default.from(e),t);if(a?.features)for(const s of a.features)s.layer=s.sourceLayer=this;return a}async queryAttributeBins(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryAttributeBins)throw new Error/* default */.A(Ze,"Layer source does not support queryAttributeBins capability");(0,featureLayerUtils/* validateBinsQuery */.ZJ)(e,i,Ze);const o=await __webpack_require__.e(/* import() */ 14232).then(__webpack_require__.bind(__webpack_require__, 14232)),a=await r.queryAttributeBins(o.default.from(e),t);if(a.features)for(const s of a.features)s.layer=s.sourceLayer=this;return a}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryTopObjectIds capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745));return(await r.queryTopObjectIds(o.default.from(e),t)).filter(guards/* isNumber */.Et)}async queryTopFeaturesExtent(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryTopExtents capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745));return r.queryTopExtents(o.default.from(e),t)}async queryTopFeatureCount(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryFeatureCount capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745));return r.queryTopCount(o.default.from(e),t)}read(e,t){const r=e.featureCollection;if((r||"Feature Collection"===e.type)&&(this.resourceInfo=e),r){const{layers:e,showLegend:i}=r;1===e?.length&&(super.read(e[0],t),null!=i&&super.read({showLegend:i},t))}super.read(e,t),t&&"service"===t.origin&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:t?.origin??void 0,writeLayerSchema:t?.writeLayerSchema??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:o}=t;if(this.dynamicDataSource)return o?.push(He(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(("web-map"===r||"web-scene"===r)&&"tables"!==i)return o?.push(He(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return o?.push(He(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&("web-map"===r||"web-scene"===r)&&"tables"===i)return o?.push(He(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new Error/* default */.A(Ze,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&("memory"===this.source?.type||(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&"web-map"===r?.origin&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")}_writeEditingEnabled(e,t,r,i){if(!e){const e=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";(0,object/* setDeepValue */.sM)("layerDefinition.capabilities",e,t),r&&!i?.writeLayerSchema&&(t.capabilities=e)}}_fetchFirstValidLayerId(e){return (0,request/* default */.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{const t=e.data;if(t)return this.applyPreferredHost(t),this.findFirstValidLayerId(t)}))}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex),this._hasMemorySource()&&"mesh"===this.geometryType&&(this.capabilities.query.supportsReturnMesh=!0),(0,styleUtils/* loadStyleRenderer */.L)(this,{origin:"service"})}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach((e=>{const r=e.prototype?.attributes;r&&t&&delete r[t]}))}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new Error/* default */.A("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new Error/* default */.A("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this.addHandles([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")}_resetMemorySource(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],Xe.prototype,"_titleCreator",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* attributeTableTemplate */.zQ)],Xe.prototype,"attributeTableTemplate",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],Xe.prototype,"readCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],Xe.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.copyrightText"}}})],Xe.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.displayField"}}})],Xe.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols_support_typeUtils/* symbolTypes */.Es,readOnly:!0})],Xe.prototype,"defaultSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],Xe.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],Xe.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],Xe.prototype,"readEditingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],Xe.prototype,"readEditingEnabledFromWebMap",null),(0,tslib_es6._)([(0,writer/* writer */.K)(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],Xe.prototype,"writeEditingEnabled",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],Xe.prototype,"writeEditingEnabledToWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],Xe.prototype,"featureTitleFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...ze.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:Ke}}}}})],Xe.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ze.fieldsIndex)],Xe.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Xe.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent"}}})],Xe.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:Ke,writer(e,t,r){const i=e?featureLayerUtils/* geometryTypeKebabDict */.iX.toJSON(e):null;i&&(0,object/* setDeepValue */.sM)(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}})],Xe.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasM"}}})],Xe.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasZ"}}})],Xe.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],Xe.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],Xe.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],Xe.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type","geometryType"]),(0,reader/* reader */.w)("isTable",["layerDefinition.type","layerDefinition.geometryType"])],Xe.prototype,"readIsTable",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","isTable")],Xe.prototype,"writeIsTable",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],Xe.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}})],Xe.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* opacityDrawingInfo */.Ih);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(e,t,r){(0,object/* setDeepValue */.sM)(r,(0,opacityUtils/* opacityToTransparency */.p)(e),t)}}},e})())],Xe.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],Xe.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"],json:(()=>{const e=(0,lang/* clone */.o8)(commonProperties/* listMode */.C1.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],Xe.prototype,"listMode",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Xe.prototype,"readGlobalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:Ke}}}}})],Xe.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Xe.prototype,"readObjectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISFeatureLayer"],json:{write:{target:"layerType",ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}})],Xe.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ze.outFields)],Xe.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Xe.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],Xe.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],Xe.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:support_typeUtils/* rendererTypes */.Hg,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:support_typeUtils/* webSceneRendererTypes */.XJ,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:layerContainerType/* excludeTables */.K,overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema,layerContainerTypes:layerContainerType/* excludeTables */.K})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema,layerContainerTypes:layerContainerType/* excludeTables */.K})}}})],Xe.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Xe.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Xe.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* screenSizePerspectiveEnabled */.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],Xe.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],Xe.prototype,"source",null),(0,tslib_es6._)([(0,cast/* cast */.w)("source")],Xe.prototype,"castSource",null),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","source",["featureSet"]),(0,reader/* reader */.w)("web-map","source",["featureSet"])],Xe.prototype,"readSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],Xe.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],Xe.prototype,"subtypeCode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureTemplate/* default */.A]})],Xe.prototype,"templates",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("templates",["editFieldsInfo","creatorField","editorField","templates"])],Xe.prototype,"readTemplates",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A})],Xe.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Xe.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"]),(0,reader/* reader */.w)("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],Xe.prototype,"readTitle",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","title",["layerDefinition.name","title"])],Xe.prototype,"readTitleFromWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Xe.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],Xe.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Xe.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","typeIdField"),(0,reader/* reader */.w)("typeIdField",["layerDefinition.typeIdField"])],Xe.prototype,"readTypeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],Xe.prototype,"types",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","types",["types"]),(0,reader/* reader */.w)("types",["layerDefinition.types"])],Xe.prototype,"readTypes",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility",layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],Xe.prototype,"visible",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],Xe.prototype,"readVisible",null),Xe=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.FeatureLayer")],Xe);


/***/ }),

/***/ 94763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e){return"portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):s(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 30179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg)(this.url);if(t?.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 88940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ p),
/* harmony export */   Zk: () => (/* binding */ c),
/* harmony export */   w6: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports emitUpdateMomentEvent, isLayerWithGDBVersion, onApplyEditsEvent, onUpdateMomentEvent, versionMatches */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57888);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49175);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6893);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventEmitter;function l(t){return a.on("apply-edits",new WeakRef(t))}function h(t){return a.on("update-moment",new WeakRef(t))}function c(t,e,i=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)();return r=null==e||r,a.emit("apply-edits",{serviceUrl:t,layerId:e,gdbVersion:i,mayReceiveServiceEdits:r,result:d.promise}),d}function u(t,e,i=null,s){a.emit("update-moment",{serviceUrl:t,layerId:e,gdbVersion:i,moment:s})}const m=Symbol();function p(t){return null!=t&&"object"==typeof t&&m in t}function b(t){return null!=t&&"object"==typeof t&&"gdbVersion"in t}function g(t,e,i){const s=new URL(t).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .defaultVersionNameLookup */ .Z3.get(s),d=t=>!t||t===r;return d(e)&&d(i)||e===i}const F=e=>{var s;let n=class extends e{static{s=m}constructor(...t){super(...t),this[s]=!0,this._applyEditsHandler=t=>{const{serviceUrl:e,layerId:s,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=t,n=e===this.url,a=null!=s&&null!=this.layerId&&s===this.layerId,l=b(this),h=b(this)&&g(e,r,this.gdbVersion);if(!n||l&&!h||!a&&!d)return;const c=o.then((t=>{if(this.lastEditsEventDate=new Date,a&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)),t;const s=t.editedFeatures?.find((({layerId:t})=>t===this.layerId));if(s){const{adds:e,updates:r,deletes:d}=s.editedFeatures,o={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:e?e.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.historicMoment)};return this.emit("edits",o),o}const d={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,d.historicMoment)&&this.emit("edits",d),d})).then((t=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,t.historicMoment)&&(this.historicMoment=t.historicMoment),t)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=t=>{const{serviceUrl:e,gdbVersion:i,moment:s}=t,r=e===this.url,d=b(this),o=b(this)&&g(e,i,this.gdbVersion),n=b(this)&&!g(e,this.gdbVersion,null);r&&d&&o&&n&&"historicMoment"in this&&this.historicMoment!==s&&(this.historicMoment=s)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(h(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(t,e,i){return"historicMoment"in this&&this.historicMoment!==i&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isVersionInEditSession */ .w5)(t,e)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],n.prototype,"lastEditsEventDate",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.mixins.EditBusLayer")],n),n};


/***/ }),

/***/ 13268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ k)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(75235);
;// ./node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"creatorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"creationDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"editorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"editDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"realm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference",!0))],l.prototype,"timeZone",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.EditFieldsInfo")],l);

;// ./node_modules/@arcgis/core/layers/support/FeatureIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"isAscending",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"indexType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"isUnique",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"description",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureIndex")],p);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(5262);
;// ./node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(e){super(e),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:e=>unitUtils/* areaUnitsJSONMap */.dk.read(e)||unitUtils/* lengthUnitsJSONMap */.Sk.read(e)}})],a.prototype,"units",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeometryFieldsInfo")],a);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var LayerFloorInfo = __webpack_require__(76591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/layerUtils.js + 1 modules
var layerUtils = __webpack_require__(44837);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Relationship.js
var Relationship = __webpack_require__(46148);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(29093);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js + 2 modules
var domains = __webpack_require__(83611);
;// ./node_modules/@arcgis/core/layers/support/Subtype.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(o){if(!o)return null;const r={};for(const t of Object.keys(o))r[t]=(0,domains/* fromJSON */.rS)(o[t]);return r}writeDomains(o,r){if(!o)return;const t={};for(const e of Object.keys(o))o[e]&&(t[e]=o[e]?.toJSON());r.domains=t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],n.prototype,"code",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,json:{write:!0}})],n.prototype,"defaultValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("domains")],n.prototype,"readDomains",null),(0,tslib_es6._)([(0,writer/* writer */.K)("domains")],n.prototype,"writeDomains",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"name",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Subtype")],n);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalItemUtils.js
var portalItemUtils = __webpack_require__(86074);
;// ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const k=k=>{let L=class extends k{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.fieldsIndex=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Collection/* default */.A.ofType(p)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.uniqueIdFields=null,this.version=void 0,this._isUrlHostModified=!1,this._isUrlHostModificationEnabled=!1}getFieldDomain(){throw new Error("Not implemented")}getField(e){return this.fieldsIndex.get(e)}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:e}=this;if(e){const{query:t,operations:i,editing:r}=e;if(!t.supportsQueryByOthers||!t.supportsQueryByAnonymous)return"load";if(i.supportsEditing&&!(r.supportsUpdateByOthers&&r.supportsUpdateByAnonymous&&r.supportsDeleteByOthers&&r.supportsDeleteByAnonymous))return"load"}if((0,featureLayerUtils/* hasCurrentUser */.rQ)(this.serviceDefinitionExpression)||(0,featureLayerUtils/* hasCurrentUser */.rQ)(this.definitionExpression))return"load";if(this.userHasUpdateItemPrivileges){if((0,featureLayerUtils/* isLayerCacheStale */.tG)(this))return"load";if(this.hasUpdateItemRestrictions)return e.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const t=this.editFieldsInfo;return(t?.creatorField||t?.editorField)&&e?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(e,t){return (0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}readEditingInfo(e,t){const{editingInfo:i}=t;return i?{lastEditDate:null!=i.lastEditDate?new Date(i.lastEditDate):null}:null}get effectiveCapabilities(){const e=this.capabilities;if(!e)return null;const t=(0,lang/* clone */.o8)(e),{operations:r,editing:o}=t;return (0,featureLayerUtils/* supportsQueryOnly */.Pt)(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),t):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=o.supportsDeleteByOthers=o.supportsGeometryUpdate=o.supportsUpdateByOthers=!0,t):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=o.supportsGeometryUpdate=!0),t)}get effectiveEditingEnabled(){return!1}readGlobalIdFieldFromService(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t)}get hasFullEditingRestrictions(){const e=this.capabilities;if(!e||(0,featureLayerUtils/* supportsQueryOnly */.Pt)(this))return!1;const{operations:t,editing:i}=e;return t.supportsEditing&&!(t.supportsAdd&&t.supportsDelete&&t.supportsUpdate&&i.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const e=this.capabilities;if(!e)return!1;const{operations:t,editing:i}=e;return (0,featureLayerUtils/* supportsQueryOnly */.Pt)(this)?!t.supportsQuery:!(t.supportsAdd&&t.supportsDelete&&t.supportsEditing&&t.supportsQuery&&t.supportsUpdate&&i.supportsDeleteByOthers&&i.supportsGeometryUpdate&&i.supportsUpdateByOthers)}readIsTableFromService(e,t){return"Table"===t.type}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readMinScale(e,t){return t.effectiveMinScale||e||0}readObjectIdFieldFromService(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t)}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}readUniqueIdFields(e,t){return t.uniqueIdInfo?.OIDFieldContainsHashValue?t.uniqueIdInfo.fields:null}set url(e){if(null==e)return void this._set("url",e);const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!0,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,null,t,r)}readVersion(e,t){return (0,featureLayerUtils/* readVersion */.$4)(t)}get isUrlHostModified(){const{loaded:e,url:t,_isUrlHostModified:i}=this;if(i)return!0;if(!e||!t)return!1;if(this.originIdOf("url")<PropertyOrigin/* OriginId */.Gr.USER)return!1;const r=this.sourceJSON?.preferredHost;if(!r)return!1;if(!(0,urlUtils/* hasSameOrigin */.FX)(t,`https://${r}`,!0))return!1;for(let s=PropertyOrigin/* OriginId */.Gr.USER-1;s>=PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM;s--){const e=this.getAtOrigin("url",(0,PropertyOrigin/* idToName */.OL)(s));if(e)return!(0,urlUtils/* hasSameOrigin */.FX)(t,e,!0)}return!1}applyPreferredHost(e){const{url:t,portalItem:i}=this;if(!t||!(0,layerUtils/* isPreferredUrlApplicable */.OP)(i))return;const r=(0,layerUtils/* getPreferredUrl */.$x)();r&&this._isUrlHostModificationEnabled&&(this._set("url",r),this._isUrlHostModified=!0,i&&(0,layerUtils/* applyPreferredHostToPortalItem */.Gh)(i,(0,layerUtils/* getPreferredHost */.G$)()))}applyHostFromPortalItem(){const{url:e,portalItem:t}=this;if(!e||this.originIdOf("url")===PropertyOrigin/* OriginId */.Gr.USER||!t?.url||!(0,layerUtils/* isPreferredUrlApplicable */.OP)(t)||!(0,portalItemUtils/* hasTypeKeyword */.Y)(t,portalItemUtils/* typeKeyword */.mm.HOSTED_SERVICE)||(0,urlUtils/* hasSameOrigin */.FX)(e,t.url,!0)||!this._isUrlHostModificationEnabled)return;const i=(0,urlUtils/* getHost */.Ln)(t.url);this._set("url",(0,urlUtils/* changeHost */.hf)(e,i)),this._isUrlHostModified=!0}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"authenticationTriggerEvent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],L.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","maxUniqueIDCount","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],L.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],L.prototype,"readCapabilitiesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],L.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"datesInUnknownTimezone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],L.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],L.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:l})],L.prototype,"editFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"editingInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("editingInfo")],L.prototype,"readEditingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* elevationInfo */.Yj),t=e.json.origins;return t["web-map"]={read:!1,write:!1},t["portal-item"]={read:!1,write:!1},e})())],L.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LayerFloorInfo/* default */.A,json:{name:"layerDefinition.floorInfo",write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}})],L.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{origins:{service:{read:{source:"extent"}}}}})],L.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:a,json:{read:{source:"geometryProperties"}}})],L.prototype,"geometryFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}}})],L.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],L.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","globalIdField",["globalIdField","fields"])],L.prototype,"readGlobalIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"hasFullEditingRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],L.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"hasUpdateItemRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],L.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],L.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],L.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(p),readOnly:!0})],L.prototype,"indexes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type"])],L.prototype,"readIsTableFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],L.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* maxScale */.hG)],L.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","maxScale",["maxScale","effectiveMaxScale"])],L.prototype,"readMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* minScale */.hn)],L.prototype,"minScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","minScale",["minScale","effectiveMinScale"])],L.prototype,"readMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],L.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","objectIdField",["objectIdField","fields"])],L.prototype,"readObjectIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("preferredTimeReference"))],L.prototype,"preferredTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Relationship/* default */.A],readOnly:!0})],L.prototype,"relationships",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1}})],L.prototype,"serverGens",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"serviceDefinitionExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],L.prototype,"readServiceDefinitionExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],L.prototype,"serviceItemId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],L.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],L.prototype,"subtypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],L.prototype,"subtypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],L.prototype,"trackIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],readOnly:!0})],L.prototype,"uniqueIdFields",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","uniqueIdFields",["uniqueIdInfo.OIDFieldContainsHashValue","uniqueIdInfo.fields"])],L.prototype,"readUniqueIdFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],L.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],L.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:!0}},read:!1}})],L.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],L.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"isUrlHostModified",null),L=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureLayerBase")],L),L};


/***/ }),

/***/ 32655:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xh: () => (/* binding */ V),
  w6: () => (/* binding */ R)
});

// UNUSED EXPORTS: sceneServiceItemType

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/originUtils.js
var originUtils = __webpack_require__(2527);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/I3SIndexInfo.js
var I3SIndexInfo = __webpack_require__(72197);
;// ./node_modules/@arcgis/core/layers/support/schemaValidatorLoader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=null;function t(t){n=t}function u(){return n}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(62304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/jsonContext.js
var jsonContext = __webpack_require__(10069);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/resourceUtils.js
var resourceUtils = __webpack_require__(20267);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/saveUtils.js
var saveUtils = __webpack_require__(49972);
;// ./node_modules/@arcgis/core/layers/mixins/SceneService.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R=R=>{let C=class extends R{constructor(){super(...arguments),this.spatialReference=null,this.fullExtent=null,this.heightModelInfo=null,this.minScale=0,this.maxScale=0,this.version={major:Number.NaN,minor:Number.NaN,versionString:""},this.copyright=null,this.sublayerTitleMode="item-title",this.title=null,this.layerId=null,this.indexInfo=null,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{switch(e){case V.SAVE:return this._save(t);case V.SAVE_AS:return this._saveAs(r,t)}}))}readSpatialReference(e,t){return U(t)}readFullExtent(e,t,r){if(null!=e&&"object"==typeof e){const o=null==e.spatialReference?{...e,spatialReference:U(t)}:e;return Extent/* default */.A.fromJSON(o,r)}const o=t.store,i=U(t);return null==i||null==o?.extent||!Array.isArray(o.extent)||o.extent.some((e=>e<L))?null:new Extent/* default */.A({xmin:o.extent[0],ymin:o.extent[1],xmax:o.extent[2],ymax:o.extent[3],spatialReference:i})}parseVersionString(e){const t={major:Number.NaN,minor:Number.NaN,versionString:e},r=e.split(".");return r.length>=2&&(t.major=parseInt(r[0],10),t.minor=parseInt(r[1],10)),t}readVersion(e,t){const r=t.store,o=null!=r.version?r.version.toString():"";return this.parseVersionString(o)}readTitlePortalItem(e){return"item-title"!==this.sublayerTitleMode?void 0:e}readTitleService(e,t){const r=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,t.name):t.name;let o=t.name;if(!o&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(o=e.title)}return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),(0,arcgisLayerUrl/* cleanTitle */.cr)(o)}set url(e){if(null==e)return void this._set("url",e);const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!1,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,r,o){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,"layers",t,o)}get parsedUrl(){const e=this._get("url"),t=(0,urlUtils/* urlToObject */.An)(e);return t&&null!=this.layerId&&(t.path=`${t.path}/layers/${this.layerId}`),t}async _fetchIndexAndUpdateExtent(e,t){this.indexInfo=(0,I3SIndexInfo/* fetchIndexInfo */.F)(this.parsedUrl?.path??"",this.rootNode,e,this.customParameters,this.apiKey,Logger/* default */.A.getLogger(this),t),null==this.fullExtent||this.fullExtent.hasZ||this._updateExtent(await this.indexInfo)}_updateExtent(e){if("page"===e?.type){const t=e.rootIndex%e.pageSize,o=e.rootPage?.nodes?.[t];if(null==o?.obb?.center||null==o.obb.halfSize)throw new Error/* default */.A("sceneservice:invalid-node-page","Invalid node page.");if(o.obb.center[0]<L||null==this.fullExtent||this.fullExtent.hasZ)return;const i=o.obb.halfSize,s=o.obb.center[2],a=Math.sqrt(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);this.fullExtent.zmin=s-a,this.fullExtent.zmax=s+a}else if("node"===e?.type){const t=e.rootNode?.mbs;if(!Array.isArray(t)||4!==t.length||t[0]<L)return;const r=t[2],o=t[3],{fullExtent:i}=this;i&&(i.zmin=r-o,i.zmax=r+o)}}async _fetchService(e){if(null==this.url)throw new Error/* default */.A("sceneservice:url-not-set","Scene service can not be loaded without valid portal item or url");if(null==this.layerId&&/SceneServer\/*$/i.test(this.url)){const t=await this._fetchFirstLayerId(e);null!=t&&(this.layerId=t)}return this._fetchServiceLayer(e)}async _fetchFirstLayerId(e){const r=await (0,request/* default */.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(r.data&&Array.isArray(r.data.layers)&&r.data.layers.length>0)return r.data.layers[0].id}async _fetchServiceLayer(e){const r=await (0,request/* default */.A)(this.parsedUrl?.path??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});r.ssl&&this.url&&(this.url=this.url.replace(/^http:/i,"https:"));let o=!1;if(r.data.layerType&&"Voxel"===r.data.layerType&&(o=!0),o)return this._fetchVoxelServiceLayer();const i=r.data;this.read(i,this._getServiceContext()),this.validateLayer(i)}async _fetchVoxelServiceLayer(e){const r=(await (0,request/* default */.A)(this.parsedUrl?.path+"/layer",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(r,this._getServiceContext()),this.validateLayer(r)}_getServiceContext(){return{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}}async _ensureLoadBeforeSave(){await this.load(),"beforeSave"in this&&"function"==typeof this.beforeSave&&await this.beforeSave()}validateLayer(e){}async _saveAs(e,t){const o={...K,...t};let i=PortalItem["default"].from(e);if(!i)throw new Error/* default */.A("sceneservice:portal-item-required","_saveAs() requires a portal item to save to");i.id&&(i=i.clone(),i.id=null);const s=i.portal||Portal/* default */.A.getDefault();await this._ensureLoadBeforeSave(),i.type=P,i.portal=s;const a=(0,jsonContext/* createForItemWrite */.m)(i,"portal-item",!0),n={layers:[this.write({},a)]};return await Promise.all(a.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(n,a,o),this.url&&(i.url=this.url),i.title||(i.title=this.title),T(i,o,O.newItem),await s.signIn(),await s.user.addItem({item:i,folder:o?.folder,data:n}),await (0,resourceUtils/* saveResources */.r)(this.resourceReferences,a),this.portalItem=i,(0,originUtils/* updateOrigins */.v)(a),a.portalItem=i,i}async _save(e){const t={...K,...e};if(!this.portalItem)throw new Error/* default */.A("sceneservice:portal-item-not-set","Portal item to save to has not been set on this SceneService");if(this.portalItem.type!==P)throw new Error/* default */.A("sceneservice:portal-item-wrong-type",`Portal item needs to have type "${P}"`);await this._ensureLoadBeforeSave();const o=(0,jsonContext/* createForItemWrite */.m)(this.portalItem,"portal-item",!0),i={layers:[this.write({},o)]};return await Promise.all(o.resources.pendingOperations??[]),await this._validateAgainstJSONSchema(i,o,t),this.url&&(this.portalItem.url=this.url),this.portalItem.title||(this.portalItem.title=this.title),T(this.portalItem,t,O.existingItem),await (0,resourceUtils/* updateItemWithResources */.S)(this.portalItem,i,this.resourceReferences,o),(0,originUtils/* updateOrigins */.v)(o),this.portalItem}async _validateAgainstJSONSchema(e,t,i){const s=i?.validationOptions;(0,saveUtils/* evaluateWriteErrors */.ci)(t,{errorName:"sceneservice:save"},{ignoreUnsupported:s?.ignoreUnsupported,supplementalUnsupportedErrors:["scenemodification:unsupported"]});const a=s?.enabled,n=u();if(a&&n){const t=(await n()).validate(e,i.portalItemLayerType);if(!t.length)return;const a=`Layer item did not validate:\n${t.join("\n")}`;if(Logger/* default */.A.getLogger(this).error(`_validateAgainstJSONSchema(): ${a}`),"throw"===s.failPolicy){const e=t.map((e=>new Error/* default */.A("sceneservice:schema-validation",e)));throw new Error/* default */.A("sceneservice-validate:error","Failed to save layer item due to schema validation, see `details.errors`.",{validationErrors:e})}}}};return (0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],C.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],C.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readSpatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],C.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent","store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],C.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],C.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.minScale",write:!0,origins:{service:{read:{source:"minScale"},write:!1}}}})],C.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{name:"layerDefinition.maxScale",write:!0,origins:{service:{read:{source:"maxScale"},write:!1}}}})],C.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("version",["store.version"])],C.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"copyrightText"}}})],C.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1}})],C.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],C.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","title")],C.prototype,"readTitlePortalItem",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"])],C.prototype,"readTitleService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{write:{target:"id",isRequired:!0,ignoreOrigin:!0},read:!1}}}})],C.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],C.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],C.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],C.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],C.prototype,"store",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],C.prototype,"rootNode",void 0),C=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.SceneService")],C),C},L=-1e38;function U(e){if(null!=e.spatialReference)return SpatialReference/* default */.A.fromJSON(e.spatialReference);const t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.slice(r.lastIndexOf("/")+1),10);return null!=o?new SpatialReference/* default */.A(o):null}function T(e,t,r){e.typeKeywords||(e.typeKeywords=[]);const o=t.getTypeKeywords();for(const i of o)e.typeKeywords.push(i);e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)),r===O.newItem&&(e.typeKeywords=e.typeKeywords.filter((e=>"Hosted Service"!==e))))}var O;!function(e){e[e.existingItem=0]="existingItem",e[e.newItem=1]="newItem"}(O||(O={}));const P="Scene Service",K={getTypeKeywords:()=>[],portalItemLayerType:"unknown",validationOptions:{enabled:!0,ignoreUnsupported:!1,failPolicy:"throw"}};var V;!function(e){e[e.SAVE=0]="SAVE",e[e.SAVE_AS=1]="SAVE_AS"}(V||(V={}));


/***/ }),

/***/ 52202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48524);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83611);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84700);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const t of Object.keys(o))r[t]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[t]);return r}writeDomains(o,r){const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],n.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],n.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],n.prototype,"templates",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],n);


/***/ }),

/***/ 72197:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function r(r,n,t,s,a,i,l){let d=null;if(null!=t){const o=`${r}/nodepages/`,n=o+Math.floor(t.rootIndex/t.nodesPerPage);try{return{type:"page",rootPage:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(n,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,rootIndex:t.rootIndex,pageSize:t.nodesPerPage,lodMetric:t.lodSelectionMetricType,urlPrefix:o}}catch(g){null!=i&&i.warn("#fetchIndexInfo()","Failed to load root node page. Falling back to node documents.",n,g),d=g}}if(!n)return null;const p=n?.split("/").pop(),c=`${r}/nodes/`,u=c+p;try{return{type:"node",rootNode:(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(u,{query:{f:"json",...s,token:a},responseType:"json",signal:l})).data,urlPrefix:c}}catch(g){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("sceneservice:root-node-missing","Root node missing.",{pageError:d,nodeError:g,url:u})}}


/***/ }),

/***/ 27708:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L0: () => (/* binding */ m),
/* harmony export */   Ot: () => (/* binding */ y),
/* harmony export */   W4: () => (/* binding */ p),
/* harmony export */   uV: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony exports I3SGeometryAttribute, I3SGeometryBuffer, I3SGeometryCompressedAttributes, I3SMaterialPBRMetallicRoughness, I3SMaterialTexture, I3STextureFormat */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85716);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],p.prototype,"nodesPerPage",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],p.prototype,"rootIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"lodSelectionMetricType",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],p);let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.factor=1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],i.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],i.prototype,"factor",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],i);let n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number]})],n.prototype,"baseColorFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],n.prototype,"baseColorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],n.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],n.prototype,"metallicFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],n.prototype,"roughnessFactor",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],n);let a=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({opaque:"opaque",mask:"mask",blend:"blend"})],a.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],a.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Boolean})],a.prototype,"doubleSided",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({none:"none",back:"back",front:"front"})],a.prototype,"cullFace",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],a.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],a.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:i})],a.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number]})],a.prototype,"emissiveFactor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:n})],a.prototype,"pbrMetallicRoughness",void 0),a=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],a);let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],l.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],l.prototype,"format",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],l);let y=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.atlas=!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[l]})],y.prototype,"formats",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Boolean})],y.prototype,"atlas",void 0),y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],y);let u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],u.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],u.prototype,"component",void 0),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],u);let d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({draco:"draco"})],d.prototype,"encoding",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[String]})],d.prototype,"attributes",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],d);let c=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this.offset=0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number})],c.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"uv0",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"uvRegion",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"featureId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:u})],c.prototype,"faceRange",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:d})],c.prototype,"compressedAttributes",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],c);let m=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_6__/* .enumeration */ .e)({triangle:"triangle"})],m.prototype,"topology",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],m.prototype,"geometryBuffers",void 0),m=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],m);


/***/ }),

/***/ 76591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let i=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:{isRequired:!0}}})],i.prototype,"floorField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.LayerFloorInfo")],i);


/***/ }),

/***/ 46148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),l=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)){constructor(o){super(o),this.cardinality=null,this.catalogId=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:a.read,write:a.write}})],n.prototype,"cardinality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{name:"catalogID"}})],n.prototype,"catalogId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"composite",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"keyField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"keyFieldInRelationshipTable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"relatedTableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"relationshipTableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:l.read,write:l.write}})],n.prototype,"role",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.Relationship")],n);


/***/ }),

/***/ 52884:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93741);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3223);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3132);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54192);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46227);
/* harmony import */ var _support_loadArcade_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68717);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d="relationships/",p="expression/";let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this._featureUtils=null,this.effectivePopupTemplate=null}get _arcadeTask(){if(this.expressionsUsedInTitle.length>0){return this._get("_arcadeTask")||(0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createTask */ .UT)((()=>(0,_support_loadArcade_js__WEBPACK_IMPORTED_MODULE_10__/* .loadArcade */ .l)()))}return null}get featureUtilsPromise(){return this._get("featureUtilsPromise")??__webpack_require__.e(/* import() */ 79687).then(__webpack_require__.bind(__webpack_require__, 79687)).then((e=>this._featureUtils=e))}get calculatedExpressions(){const e=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;if(!this.expressionsUsedInTitle.length)return e;if(!this._arcadeTask?.value){for(const t of this.expressionsUsedInTitle??[])e.push({name:t.name,invalid:!0});return e}for(const t of this.expressionsUsedInTitle)try{const s=this._arcadeTask.value.arcade.parseScript(t.expression,["$layer","$map","$datastore"]);if(s.isAsync){e.push({name:t.name,invalid:!0});break}e.push({name:t.name,syntax:s,invalid:!1,func:this._arcadeTask.value.arcade.compileScript(s,{vars:{$feature:"any"}})})}catch{e.push({name:t.name,invalid:!0});break}return e}get expressionsUsedInTitle(){let e=this.effectivePopupTemplate?.title??"";return"string"!=typeof e?[]:(e=e.toLowerCase(),this.effectivePopupTemplate?.expressionInfos?.filter((t=>e.includes(`{expression/${t.name.toLowerCase()}}`)))??[])}get fieldInfoMap(){return this._featureUtils?this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)):null}get hasBadExpressions(){return this.calculatedExpressions.some((e=>!0===e.invalid))}get requiredFields(){const e=new Set;if(this._arcadeTask?.value&&!this.hasBadExpressions)for(const s of this.calculatedExpressions?.toArray()??[])try{const t=this._arcadeTask.value.arcade.extractFieldLiterals(s.syntax);for(const s of t){const t=s.split("."),i=this.fieldsIndex.get(t.at(-1)??"");i&&e.add(i.name)}}catch{}const t=this._extractFieldNames(this.workingTitle);for(const s of t){const t=this.fieldsIndex.get(s);t&&e.add(t.name)}return null!=this.objectIdField&&e.add(this.objectIdField),e}get titleFromDisplayField(){let e="";return this.displayField&&(e=this.fieldsIndex.get(this.displayField)?.name??""),e||(e=this.fieldsIndex.get(this.objectIdField)?.name??""),e?`{${e}}`:""}get workingTitle(){const e=this.effectivePopupTemplate?this.effectivePopupTemplate.title:"";return""===e||null==e||this.hasBadExpressions||"string"!=typeof e?this.titleFromDisplayField:e}async getTitle(e,t,s){const i=t.getObjectId()??t.attributes[e.objectIdField];return(await this.getTitles(e,[t],s)).get(i)??""}async getTitles(e,t,s){const i=new Map,r=s?.timeZone??"system";try{const[{substituteFieldsInLinksAndAttributes:a}]=await Promise.all([this.featureUtilsPromise,this._arcadeTask?.promise]);s?.fetchMissingFields&&(t=await this._checkAndReQueryGraphics(e,t));const{fieldInfoMap:o,workingTitle:l}=this,n=l&&o;t.forEach((t=>{const s=t.getObjectId()??t.attributes[e.objectIdField],c=n?a({attributes:t.attributes,expressionAttributes:null,fieldInfoMap:o,globalAttributes:this._createFormattedAttributes(e,t,r).global,layer:e,text:l}):"";i.set(s,c)}))}catch{}return i}async _checkAndReQueryGraphics(e,t){const i=t.map((t=>t.getObjectId()??t.attributes[e.objectIdField])).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSome */ .Ru);if(i.length!==t.length)return t;if(t.some((e=>!(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .featureHasFields */ .Kl)(e,this.requiredFields)))){const s=e.createQuery();s.where="1=1",s.outFields=[...this.requiredFields],s.objectIds=i;const r=await e.queryFeatures(s);if(r?.features.length===t.length)return r.features}return t}_createFieldInfoMap(e){const t=new Map;if(!e)return t;for(const s of e){if(!s.fieldName)continue;const e=this.fieldsIndex.get(s.fieldName),i=e?.name??s.fieldName;s.fieldName=i,t.set(i.toLowerCase(),s)}return t}_createFormattedAttributes(e,t,s="system"){const i=this.effectivePopupTemplate?.fieldInfos??[],r={};if(!this._featureUtils)return{};if(!this.hasBadExpressions&&this.calculatedExpressions.length>0&&this._arcadeTask?.value){const s=this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry,t.attributes,e,null);for(const e of this.calculatedExpressions)try{r[`expression/${e.name}`]=e.func({vars:{$feature:s}})}catch{}}const a={...t.attributes,...r};return{global:this._featureUtils.formatAttributes({fieldInfos:i,attributes:a,graphic:t,timeZone:s,layer:e,fieldInfoMap:this.fieldInfoMap}),content:[]}}_extractFieldNames(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .extractSubstitutionTemplatesFromString */ .nw)(e).filter((e=>!(0===e.indexOf(d)||0===e.indexOf(p))))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"_arcadeTask",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"_featureUtils",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"featureUtilsPromise",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"calculatedExpressions",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"displayField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"effectivePopupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"expressionsUsedInTitle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fieldsIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fieldInfoMap",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"objectIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"requiredFields",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.TitleCreator")],u);


/***/ }),

/***/ 21200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ s),
/* harmony export */   P: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s={supportsDate:!1,supportsFixedInterval:!1,supportsAutoInterval:!1,supportsFixedBoundaries:!1,supportsStackBy:!1,supportsSplitBy:!1,supportsSnapToData:!1,supportsReturnFullIntervalBin:!1,supportsFirstDayOfWeek:!1,supportsNormalization:!1,supportedStatistics:void 0,supportedNormalizationTypes:void 0},t={analytics:{supportsCacheHint:!1},attachment:{supportsContentType:!1,supportsExifInfo:!1,supportsKeywords:!1,supportsName:!1,supportsSize:!1,supportsCacheHint:!1,supportsOrderByFields:!1,supportsResize:!1},data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsAsyncApplyEdits:!1,zDefault:void 0},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryBins:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryAttributeBins:s,query:{maxRecordCount:0,maxRecordCountFactor:0,maxUniqueIDCount:0,standardMaxRecordCount:0,supportsCacheHint:!1,supportsCentroid:!1,supportsCompactGeometry:!1,supportsCurrentUser:!1,supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPaginationOnAggregatedQueries:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsReturnMesh:!1,supportsSqlExpression:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsTrueCurve:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsStatistics:!1,tileMaxRecordCount:0}};


/***/ }),

/***/ 52360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ s),
/* harmony export */   Hz: () => (/* binding */ d),
/* harmony export */   JQ: () => (/* binding */ p),
/* harmony export */   JZ: () => (/* binding */ h),
/* harmony export */   ND: () => (/* binding */ F),
/* harmony export */   R_: () => (/* binding */ u),
/* harmony export */   U9: () => (/* binding */ a),
/* harmony export */   fu: () => (/* binding */ n),
/* harmony export */   nr: () => (/* binding */ m),
/* harmony export */   oF: () => (/* binding */ r),
/* harmony export */   rq: () => (/* binding */ c),
/* harmony export */   z$: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports getFilePickerAcceptType, getFilenameFormatId, getFormatDescription, getFormatExtensions, getFormatId, getFormatMimeType, getGltfFormatId, getSupportedExtensions */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=[["binary","application/octet-stream","bin",""]];function n(t,n){return null!=L(n.name,t?.supportedFormats??[])}function r(t,n){if(!t)return!1;const r=c(n,t.supportedFormats??[]);return null!=r&&t.editFormats.includes(r)}function o(t){return w(t?.supportedFormats??[]).flatMap(j).map((t=>`.${t}`))}function e(t){const n={};for(const r of w(t?.supportedFormats??[])){const[t,o]=y(r).split(";"),e=t.trim().toLowerCase(),u=j(r).map((t=>`.${t}`));n[e]??=[],n[e].push(...u)}return{description:"3D Models",accept:n}}function u(t,n){return g(C(t,n))}function i(t,n){return g(L(t,n))}function s(t,n){return y(b(t,n))}function c(t,n){return i(t.name,n)??u(t.type,n)}function f(t,n,r){return u(t,r)??i(n,r)}function a({supportedFormats:t}){return f("model/gltf-binary","glb",t)}function p(t){const n=a(t);return null!=n&&t.editFormats.includes(n)}function l({supportedFormats:t}){return f("model/gltf+json","gltf",t)}function d(t){if(!t)return null;const n=a(t),r=l(t);let o=null;for(const e of t.queryFormats){if(e===n)return e;e===r&&(o=e)}return o}function m({supportedFormats:t}){return f("application/esri3do-SR_world","wld",t)}function F({supportedFormats:t}){return f("application/esri3do-SR_prj","prj",t)}function w(n){return[...t,...n]}function b(t,n){return w(n).find((n=>g(n)===t))}function C(t,n){const r=t.toLowerCase();return w(n).find((t=>y(t)===r))}function L(t,n){const r=t.toLowerCase();return w(n).find((t=>j(t).some((t=>r.endsWith(t)))))}function g(t){return t?.[0]}function y(t){return t?.[1].toLowerCase()}function j(t){return t?.[2].split(",").map((t=>t.toLowerCase()))??[]}function M(t){return t?.[3]}function h(t){return t.tables?.find((t=>"assetMaps"===t.role))}


/***/ }),

/***/ 29093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ c),
  d: () => (/* binding */ A)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(52360);
;// ./node_modules/@arcgis/core/rest/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function jsonUtils_n(n,r,u){return!!t(n,r,u)}function r(n,r,u){return t(n,r,u)}function t(n,r,t){return n&&n.hasOwnProperty(r)?n[r]:t}

;// ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function n(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function i(t){const s=t?.supportedStatisticTypes?.map((t=>t.toLowerCase()));return{count:!!s?.includes("count"),sum:!!s?.includes("sum"),min:!!s?.includes("min"),max:!!s?.includes("max"),avg:!!s?.includes("avg"),var:!!s?.includes("var"),stddev:!!s?.includes("stddev"),percentileContinuous:!!s?.includes("percentile_cont"),percentileDiscrete:!!s?.includes("percentile_disc"),envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function a(t){const s=t?.supportedNormalizationTypes?.map((t=>t.toLowerCase()));return{field:!!s?.includes("field"),log:!!s?.includes("log"),naturalLog:!!s?.includes("naturallog"),percentOfTotal:!!s?.includes("percentoftotal"),squareRoot:!!s?.includes("squareroot")}}function c(t,s){return{analytics:l(t),attachment:d(t),data:y(t),metadata:m(t),operations:g(t.capabilities,t,s),query:C(t,s),queryAttributeBins:S(t),queryRelated:v(t),queryTopFeatures:h(t),editing:f(t)}}function l(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryAnalytics")}}function d(t){const s=t.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:n(t.advancedQueryCapabilities,"queryAttachments"),supportsOrderByFields:jsonUtils_n(t.advancedQueryCapabilities,"supportsQueryAttachmentOrderByFields",!1),supportsResize:jsonUtils_n(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=o[t.name];s&&(e[s]=!!t.isEnabled)})),e}function y(t){return{isVersioned:jsonUtils_n(t,"isDataVersioned",!1),isBranchVersioned:jsonUtils_n(t,"isDataBranchVersioned",!1),supportsAttachment:jsonUtils_n(t,"hasAttachments",!1),supportsM:jsonUtils_n(t,"hasM",!1),supportsZ:jsonUtils_n(t,"hasZ",!1)}}function m(t){return{supportsAdvancedFieldProperties:jsonUtils_n(t,"supportsFieldDescriptionProperty",!1)}}function g(t,e,r){const o=t?.toLowerCase().split(",").map((t=>t.trim()))??[],u=r?(0,arcgisLayerUrl/* parse */.qg)(r):null,n=o.includes("MapServer"===u?.serverType?"data":"query"),i=o.includes("editing")&&!e.datesInUnknownTimezone&&!(!0===e.uniqueIdInfo?.OIDFieldContainsHashValue);let a=i&&o.includes("create"),c=i&&o.includes("delete"),l=i&&o.includes("update");const d=o.includes("changetracking"),y=e.advancedQueryCapabilities;return i&&!(a||c||l)&&(a=c=l=!0),{supportsCalculate:jsonUtils_n(e,"supportsCalculate",!1),supportsTruncate:jsonUtils_n(e,"supportsTruncate",!1),supportsValidateSql:jsonUtils_n(e,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:c,supportsEditing:i,supportsChangeTracking:d,supportsQuery:n,supportsQueryAnalytics:jsonUtils_n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:jsonUtils_n(y,"supportsQueryAttachments",!1),supportsQueryBins:jsonUtils_n(y,"supportsQueryBins",!1)||!!e.queryBinsCapabilities,supportsQueryTopFeatures:jsonUtils_n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:jsonUtils_n(e,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:jsonUtils_n(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:jsonUtils_n(e,"supportsAsyncConvert3D",!1)}}function C(s,o){const i=s.advancedQueryCapabilities,a=s.ownershipBasedAccessControlForFeatures,c=s.archivingInfo,l=s.currentVersion,d=o?.includes("MapServer"),y=!d||l>=(0,has/* default */.A)("mapserver-pbf-version-support"),m=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(o),g=new Set((s.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{maxRecordCount:r(s,"maxRecordCount",void 0),maxRecordCountFactor:r(s,"maxRecordCountFactor",void 0),maxUniqueIDCount:r(s,"maxUniqueIDCount",void 0),standardMaxRecordCount:r(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:u(i),supportsCacheHint:jsonUtils_n(i,"supportsQueryWithCacheHint",!1)||n(i,"query"),supportsCentroid:jsonUtils_n(i,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:m,supportsCurrentUser:jsonUtils_n(i,"supportsCurrentUserQueries",!1),supportsDefaultSpatialReference:jsonUtils_n(i,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:jsonUtils_n(i,"supportsDisjointSpatialRel",!1),supportsDistance:jsonUtils_n(i,"supportsQueryWithDistance",!1),supportsDistinct:jsonUtils_n(i,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:jsonUtils_n(i,"supportsReturningQueryExtent",!1),supportsFormatPBF:y&&g.has("pbf"),supportsFullTextSearch:jsonUtils_n(i,"supportsFullTextSearch",!1),supportsGeometryProperties:jsonUtils_n(i,"supportsReturningGeometryProperties",!1),supportsHavingClause:jsonUtils_n(i,"supportsHavingClause",!1),supportsHistoricMoment:jsonUtils_n(c,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:jsonUtils_n(i,"supportsMaxRecordCountFactor",!1),supportsOrderBy:jsonUtils_n(i,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:jsonUtils_n(i,"supportsPagination",!1),supportsPaginationOnAggregatedQueries:jsonUtils_n(i,"supportsPaginationOnAggregatedQueries",!1),supportsPercentileStatistics:jsonUtils_n(i,"supportsPercentileStatistics",!1),supportsQuantization:jsonUtils_n(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:jsonUtils_n(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:jsonUtils_n(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:jsonUtils_n(a,"allowOthersToQuery",!0),supportsQueryGeometry:jsonUtils_n(s,"supportsReturningQueryGeometry",!1),supportsResultType:jsonUtils_n(i,"supportsQueryWithResultType",!1),supportsReturnMesh:!!(0,infoFor3D/* getGltfQueryFormat */.Hz)(s.infoFor3D),supportsSpatialAggregationStatistics:jsonUtils_n(i,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:jsonUtils_n(i,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:jsonUtils_n(s,"useStandardizedQueries",!1),supportsStatistics:jsonUtils_n(i,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:jsonUtils_n(i,"supportsTopFeaturesQuery",!1),supportsTrueCurve:jsonUtils_n(i,"supportsTrueCurve",!1),tileMaxRecordCount:r(s,"tileMaxRecordCount",void 0)}}function v(t){const s=t.advancedQueryCapabilities,e=jsonUtils_n(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:jsonUtils_n(s,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:n(s,"queryRelated")}}function h(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryTopFilter")}}function S(t){const s=t?t.queryBinsCapabilities:void 0;return{supportsDate:jsonUtils_n(s,"supportsDateBin",!1),supportsFixedInterval:jsonUtils_n(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:jsonUtils_n(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:jsonUtils_n(s,"supportsFixedBoundariesBin",!1),supportsStackBy:jsonUtils_n(s,"supportsStackBy",!1),supportsSplitBy:jsonUtils_n(s,"supportsSplitBy",!1),supportsSnapToData:jsonUtils_n(s,"supportsSnapToData",!1),supportsReturnFullIntervalBin:jsonUtils_n(s,"supportsReturnFullIntervalBin",!1),supportsFirstDayOfWeek:jsonUtils_n(s,"supportsFirstDayOfWeek",!1),supportsNormalization:jsonUtils_n(s,"supportsNormalization",!1),supportedStatistics:i(s),supportedNormalizationTypes:a(s)}}function f(t){const s=t.ownershipBasedAccessControlForFeatures,e=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:jsonUtils_n(t,"allowGeometryUpdates",!0),supportsGlobalId:jsonUtils_n(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:jsonUtils_n(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:jsonUtils_n(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:jsonUtils_n(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:jsonUtils_n(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:jsonUtils_n(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:jsonUtils_n(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:jsonUtils_n(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:jsonUtils_n(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:jsonUtils_n(e,"supportsAsyncApplyEdits",!1),zDefault:r(t,"zDefault",void 0)}}function A(t){return{operations:{supportsAppend:jsonUtils_n(t,"supportsAppend",!1),supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1,supportsExportClip:jsonUtils_n(t,"supportsExportClip",!1),supportsExportFrameset:jsonUtils_n(t,"supportsExportFrameset",!1),supportsMensuration:jsonUtils_n(t,"supportsMensuration",!1),supportsPreviews:jsonUtils_n(t,"supportsPreviews",!1),supportsUpdate:jsonUtils_n(t,"supportsUpdate",!1)}}}


/***/ }),

/***/ 23123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r=[];function t(t,e){if((0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__/* .isHostedAgolService */ .Wo)(t.url??""))return!0;const{wkid:o}=e;for(const d of r){if((t.version??0)>=d[0])return!0;if("function"==typeof d[1]&&(d[1]=d[1]()),d[1].has(o))return!1}return!0}r.push([10.91,()=>{const d=new Set([9709,9716,9741,9761,9766]);for(let r=9712;r<=9713;r++)d.add(r);for(let r=9748;r<=9749;r++)d.add(r);for(let r=20904;r<=20932;r++)d.add(r);for(let r=21004;r<=21032;r++)d.add(r);for(let r=21207;r<=21264;r++)d.add(r);for(let r=21307;r<=21364;r++)d.add(r);for(let r=23301;r<=23333;r++)d.add(r);for(let r=102759;r<=102760;r++)d.add(r);for(let r=102934;r<=102955;r++)d.add(r);return d}]),r.push([10.9,()=>{const d=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let r=9356;r<=9360;r++)d.add(r);for(let r=9404;r<=9407;r++)d.add(r);for(let r=9476;r<=9482;r++)d.add(r);for(let r=9487;r<=9494;r++)d.add(r);for(let r=9697;r<=9699;r++)d.add(r);return d}]),r.push([10.81,()=>{const d=new Set([9265,9333,103598,103699]);for(let r=9248;r<=9254;r++)d.add(r);for(let r=9271;r<=9273;r++)d.add(r);for(let r=9284;r<=9285;r++)d.add(r);for(let r=21453;r<=21463;r++)d.add(r);return d}]),r.push([10.8,()=>{const d=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let r=8035;r<=8036;r++)d.add(r);for(let r=8455;r<=8456;r++)d.add(r);for(let r=8518;r<=8529;r++)d.add(r);for(let r=8533;r<=8536;r++)d.add(r);for(let r=8538;r<=8540;r++)d.add(r);for(let r=8677;r<=8679;r++)d.add(r);for(let r=8902;r<=8903;r++)d.add(r);for(let r=8907;r<=8910;r++)d.add(r);for(let r=8949;r<=8951;r++)d.add(r);for(let r=8972;r<=8987;r++)d.add(r);for(let r=9039;r<=9040;r++)d.add(r);for(let r=9068;r<=9069;r++)d.add(r);for(let r=9140;r<=9141;r++)d.add(r);for(let r=9148;r<=9150;r++)d.add(r);for(let r=9153;r<=9159;r++)d.add(r);for(let r=9205;r<=9218;r++)d.add(r);for(let r=9221;r<=9222;r++)d.add(r);for(let r=54098;r<=54101;r++)d.add(r);return d}]),r.push([10.71,()=>{const d=new Set([6316]);for(let r=8351;r<=8353;r++)d.add(r);for(let r=9294;r<=9297;r++)d.add(r);for(let r=22619;r<=22621;r++)d.add(r);for(let r=103586;r<=103594;r++)d.add(r);return d}]);


/***/ }),

/***/ 10069:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ o),
/* harmony export */   v: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19759);
/* harmony import */ var _Portal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62304);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,r){return{...l(t,r),readResourcePaths:[]}}function o(r,e,o){const i=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(r.itemUrl);return{...l(r,e),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:i?{rootPath:i.path,writtenUrls:[]}:null,resources:o?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function l(e,o){return{origin:o,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .urlToObject */ .An)(e.itemUrl),portal:e.portal||_Portal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getDefault(),portalItem:e}}


/***/ }),

/***/ 90081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addOrUpdateResources: () => (/* binding */ a),
/* harmony export */   bg: () => (/* binding */ m),
/* harmony export */   cL: () => (/* binding */ p),
/* harmony export */   fetchResources: () => (/* binding */ o),
/* harmony export */   removeAllResources: () => (/* binding */ c),
/* harmony export */   removeResource: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports getSiblingOfSameType, splitPrefixFileNameAndExtension */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19759);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e,t={},s){await e.load(s);const o=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.itemUrl,"resources"),{start:a=1,num:n=10,sortOrder:c="asc",sortField:l="resource"}=t,i={query:{start:a,num:n,sortOrder:c,sortField:l,token:e.apiKey},signal:s?.signal},u=await e.portal.request(o,i);return{total:u.total,nextStart:u.nextStart,resources:u.resources.map((({created:t,size:r,resource:s})=>({created:new Date(t),size:r,resource:e.resourceFromPath(s)})))}}async function a(e,s,o,a){const n=new Map;for(const{resource:r,content:i,compress:u,access:p}of s){if(!r.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(`portal-item-resource-${o}:invalid-path`,"Resource does not have a valid path");const[e,s]=l(r.path),a=`${e}/${u??""}/${p??""}`;n.has(a)||n.set(a,{prefix:e,compress:u,access:p,files:[]});n.get(a).files.push({fileName:s,content:i})}await e.load(a);const c=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"add"===o?"addResources":"updateResources");for(const{prefix:t,compress:r,access:l,files:i}of n.values()){const s=25;for(let o=0;o<i.length;o+=s){const n=i.slice(o,o+s),u=new FormData;t&&"."!==t&&u.append("resourcesPrefix",t),r&&u.append("compress","true"),l&&u.append("access",l);let p=0;for(const{fileName:e,content:t}of n)u.append("file"+ ++p,t,e);u.append("f","json"),await e.portal.request(c,{method:"post",body:u,signal:a?.signal})}}}async function n(e,s,o){if(!s.hasPath())throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(o);const a=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");await e.portal.request(a,{method:"post",query:{resource:s.path},signal:o?.signal}),s.portalItem=null}async function c(e,t){await e.load(t);const s=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(e.userItemUrl,"removeResources");return e.portal.request(s,{method:"post",query:{deleteAll:!0},signal:t?.signal})}function l(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function i(e){const[t,r]=u(e),[s,o]=l(t);return[s,o,r]}function u(e){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getPathExtension */ .Zo)(e);return null==t?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function p(t){if("blob"===t.type)return t.blob;if("json"===t.type)return new Blob([t.jsonString],{type:"application/json"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t.url,{responseType:"blob"})).data}function f(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath(r(s,t+o))}function m(e,t){if(!e.hasPath())return null;const[s,,o]=i(e.path);return e.portalItem.resourceFromPath((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .join */ .fj)(s,t+o))}


/***/ }),

/***/ 99650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97629);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 29323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67488);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(n,e,t){if(null==n.hasM||n.hasZ)for(const i of e)for(const n of i)n.length>2&&(n[2]*=t)}function i(e,t,i){if(!e&&!t||!i)return;const s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i);o(e,i,s),o(t,i,s)}function o(n,e,t){if(n)for(const i of n)s(i.geometry,e,t)}function s(i,o,s){if(!i?.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(i.spatialReference,o))return;const f=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i.spatialReference)/s;if(1!==f)if("x"in i)null!=i.z&&(i.z*=f);else if("rings"in i)t(i,i.rings,f);else if("paths"in i)t(i,i.paths,f);else if("points"in i&&(null==i.hasM||i.hasZ))for(const n of i.points)n.length>2&&(n[2]*=f)}


/***/ }),

/***/ 11378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55792);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .N)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


/***/ }),

/***/ 19541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $7: () => (/* binding */ P),
/* harmony export */   B: () => (/* binding */ Z),
/* harmony export */   XF: () => (/* binding */ $),
/* harmony export */   tW: () => (/* binding */ w),
/* harmony export */   w7: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports absoluteHeightElevationInfo, elevationContextAffectsAlignment, featureExpressionInfoIsZero, getConvertedElevation, getConvertedElevationFromVector, getConvertedElevationFromXYZ, getEffectiveElevationInfo, getEffectiveElevationMode, getElevationOffset, getElevationOffsetInMeters, getGeometryEffectiveElevationInfo, getGraphicEffectiveElevationInfo, getGraphicEffectiveElevationMode, getZForElevationMode, hasEffectiveFeatureExpressionInfo, hasFeatureExpressionInfo, hasGraphicFeatureExpressionInfo, onTheGroundElevationInfo, zValueInAbsoluteHeightMode */
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69172);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return e?j:z}function r(e,n){return n?.mode?n.mode:o(e).mode}function u(e,n){return null!=n?n:o(e)}function i(e,n){return r(null==e||(e.hasZ??!1),n)}function s(e,n){return u(null==e||(e.hasZ??!1),n)}function l(e){const n=g(e);return i(e.geometry,n)}function a(e){const n=g(e),t=i(e.geometry,n),o=null!=n&&"on-the-ground"!==t?R(n):0,r=n?.featureExpressionInfo;return{mode:t,offset:o,featureExpressionInfo:r}}function f(e){return v(a(e))}function c(e){return v(e)||d(e)}function d(e){return"0"===e?.featureExpressionInfo?.expression}function v(e){if(!e)return!1;if("on-the-ground"===e.mode)return!1;const n=e?.featureExpressionInfo?e.featureExpressionInfo.expression:null;return!(!n||"0"===n)}function g(e){return e.layer&&"elevationInfo"in e.layer?e.layer.elevationInfo:null}function h(t,o){if(!t?.offset)return 0;const{offset:r,unit:u}=t;if("decimal-degrees"===u)return 0;const i="unknown"!==u&&u?u:"meters",s=e(o);return s?n(r,i,s):0}function p(e,n,t){if(!t?.mode)return;const o=e.hasZ?e.z:0,r=h(t,e.spatialReference);switch(t.mode){case"absolute-height":return o-r;case"on-the-ground":return 0;case"relative-to-ground":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"ground")??0)+r);case"relative-to-scene":return o-((n.elevationProvider.getElevation(e.x,e.y,o,e.spatialReference,"scene")??0)+r)}}function m(e,n,t,o=null){return E(e,n.x,n.y,n.hasZ?n.z:0,n.spatialReference,t,o)}function x(e,n,t,o,r=null){return E(e,n[0],n[1],n.length>2?n[2]:0,t,o,r)}function E(e,n,t,o,r,u,i=null){if(null==u)return;const s=null!=i?i.mode:"absolute-height";if("on-the-ground"===s)return 0;const{absoluteZ:l}=b(n,t,o,r,e,u);return I(l,n,t,o,r,e,i,s)}function b(e,n,t,o,r,u){const i=h(u,o);switch(u.mode){case"absolute-height":return{absoluteZ:t+i,elevation:0};case"on-the-ground":{const t=r.elevationProvider.getElevation(e,n,0,o,"ground")??0;return{absoluteZ:t,elevation:t}}case"relative-to-ground":{const u=r.elevationProvider.getElevation(e,n,t,o,"ground")??0;return{absoluteZ:t+u+i,elevation:u}}case"relative-to-scene":{const u=r.elevationProvider.getElevation(e,n,t,o,"scene")??0;return{absoluteZ:t+u+i,elevation:u}}}}function I(e,n,t,o,r,u,i,s){const l=h(i,r);switch(s){case"absolute-height":return e-l;case"relative-to-ground":return e-((u.elevationProvider.getElevation(n,t,o,r,"ground")??0)+l);case"relative-to-scene":return e-((u.elevationProvider.getElevation(n,t,o,r,"scene")??0)+l)}}function y(e,n){if(null==n)return!1;const{mode:t}=n;return null!=t&&("scene"===e&&"relative-to-scene"===t||"ground"===e&&"absolute-height"!==t)}function Z(e,n,t){return t&&t.mode!==n?`${e} only support ${n} elevation mode`:null}function P(e,n,t){return t?.mode===n?`${e} do not support ${n} elevation mode`:null}function w(e,n){return null!=n?.featureExpressionInfo&&"0"!==n.featureExpressionInfo.expression?`${e} do not support featureExpressionInfo`:null}function $(e,n){n&&e.warn(".elevationInfo=",n)}function R(e){return(e?.offset??0)*t(e?.unit)}const j={mode:"absolute-height",offset:0},z={mode:"on-the-ground",offset:null};


/***/ }),

/***/ 6893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TA: () => (/* binding */ t),
/* harmony export */   We: () => (/* binding */ o),
/* harmony export */   Z3: () => (/* binding */ n),
/* harmony export */   ZJ: () => (/* binding */ i),
/* harmony export */   w5: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports versionCollection, versionCollectionCount */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1874);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_1__/* .generateLowercaseBracedUUID */ .vD)(),n=new Map,s=new Map,a=new Map;async function o(r,t,s){if(!r||!s)return!1;if(!t)return!0;const a=new URL(r).host;let o=n.get(a);if(!o){const t=r.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");o=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return o===t}async function i(e,r,n=!1){if(!e||!r)return!0;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=s.get(a)?.entries();if(o)for(const[s,i]of o)if(i.name===r){const e=!i.stack?.hasForwardEdits();if(!e&&n){const[{deleteForwardEdits:e},{default:r}]=await Promise.all([__webpack_require__.e(/* import() */ 71611).then(__webpack_require__.bind(__webpack_require__, 71611)),__webpack_require__.e(/* import() */ 1767).then(__webpack_require__.bind(__webpack_require__, 1767))]),n=await e(a,s,new r({sessionId:t,moment:i.moment}));return n.success&&i.stack?.clearForwardEdits(),n.success}return e}return!0}function c(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=s.get(t)?.entries();if(n)for(const[s,a]of n)if(a.name===r){return"edit"===a.lockType}return!1}


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

/***/ 96444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D8: () => (/* binding */ p),
/* harmony export */   TO: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export hasPopupTemplate */
/* harmony import */ var _layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46227);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function n(n,p=n.popupTemplate){if(null==p)return[];const u=await p.getRequiredFields(n.fieldsIndex),{lastEditInfoEnabled:t}=p,{objectIdField:d,typeIdField:s,globalIdField:i,relationships:a}=n;if(u.includes("*"))return["*"];const o=t?(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getFeatureEditFields */ .eX)(n):[],f=(0,_layers_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .fixFields */ .DB)(n.fieldsIndex,[...u,...o]);return s&&f.push(s),f&&d&&n.fieldsIndex?.has(d)&&!f.includes(d)&&f.push(d),f&&i&&n.fieldsIndex?.has(i)&&!f.includes(i)&&f.push(i),a&&a.forEach((e=>{const{keyField:l}=e;f&&l&&n.fieldsIndex?.has(l)&&!f.includes(l)&&f.push(l)})),f}function p(e,l){return e.popupTemplate?e.popupTemplate:null!=l&&l.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}function u(e,l){return null!=p(e,{defaultPopupTemplateEnabled:l})}


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


/***/ }),

/***/ 29759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ }),

/***/ 20267:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ n),
/* harmony export */   r: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1874);
/* harmony import */ var _portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90081);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function p(e,t,r){const o=await u(e,t,r);await h(o,t,r)}async function n(e,t,r,o,s){const a=await u(r,o,s);await e.update({data:t}),await h(a,o,s)}async function u(o,p,n){if(!p?.resources)return;const u=p.portalItem===o.portalItem?new Set(o.paths):new Set;o.paths.length=0,o.portalItem=p.portalItem;const h=new Set(p.resources.toKeep.map((e=>e.resource.path))),i=new Set,m=[];h.forEach((e=>{u.delete(e),o.paths.push(e)}));const f=[],l=[],w=[];for(const e of p.resources.toUpdate)if(u.delete(e.resource.path),h.has(e.resource.path)||i.has(e.resource.path)){const{resource:t,content:r,finish:p}=e,n=(0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getSiblingOfSameTypeI */ .bg)(t,(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_2__/* .generateUUID */ .lk)());o.paths.push(n.path),f.push({resource:n,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(r),compress:e.compress}),p&&w.push((()=>p(n)))}else{o.paths.push(e.resource.path),l.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource))),i.add(e.resource.path)}for(const e of p.resources.toAdd)if(o.paths.push(e.resource.path),u.has(e.resource.path))u.delete(e.resource.path);else{f.push({resource:e.resource,content:await (0,_portal_support_resourceUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .contentToBlob */ .cL)(e.content),compress:e.compress});const t=e.finish;t&&w.push((()=>t(e.resource)))}if(f.length||l.length){const{addOrUpdateResources:e}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 90081));await e(p.portalItem,f,"add",n),await e(p.portalItem,l,"update",n)}if(w.forEach((e=>e())),0===m.length)return u;const d=await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .allSettledErrors */ .Ol)(m);if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),d.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("save:resources","Failed to save one or more resources",{errors:d});return u}async function h(e,t,r){if(!e||!t.portalItem)return;const s=[];for(const o of e){const e=t.portalItem.resourceFromPath(o);s.push(e.portalItem.removeResource(e,r))}await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .eachAlways */ .Lx)(s)}


/***/ }),

/***/ 49972:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ci: () => (/* binding */ s),
/* harmony export */   dL: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export hasCharts */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _layers_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function o(e){const r=[];for(const o of e.allLayers)if("beforeSave"in o&&"function"==typeof o.beforeSave){const e=o.beforeSave();e&&r.push(e)}await Promise.allSettled(r)}const t=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(r,o,s){let n=(r.messages??[]).filter((({type:e})=>"error"===e)).map((({name:r,message:o,details:t})=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(r,o,t)));if(r.blockedRelativeUrls&&(n=n.concat(r.blockedRelativeUrls.map((r=>new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("url:unsupported",`Relative url '${r}' is not supported`))))),s){const{ignoreUnsupported:e,supplementalUnsupportedErrors:r=[],requiredPropertyChecksDisabled:o}=s;e&&(n=n.filter((({name:e})=>!(t.has(e)||r.includes(e))))),o&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(o.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}function n(e){return r(e).some((e=>!!e.charts?.length))}


/***/ })

};
;