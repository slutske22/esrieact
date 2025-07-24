"use strict";
exports.id = 33173;
exports.ids = [33173,75089,57774,97470];
exports.modules = {

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

/***/ 51074:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99595);
/* harmony import */ var _accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(e){this._observable=new _accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__/* .SimpleObservable */ .I,this._map=new Map(e)}get size(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(e){const t=this._map.delete(e);return t&&this._observable.notify(),t}entries(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.entries()}forEach(t,s){(0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.forEach(((e,r)=>t.call(s,e,r,this)),s)}get(t){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.get(t)}has(t){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.has(t)}keys(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.keys()}set(e,t){return this._map.set(e,t),this._observable.notify(),this}values(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.values()}[Symbol.iterator](){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map[Symbol.iterator]()}[Symbol.dispose](){this._observable.destroy()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}


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

/***/ 28208:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $B: () => (/* binding */ t),
/* harmony export */   Qf: () => (/* binding */ i),
/* harmony export */   Qh: () => (/* binding */ u),
/* harmony export */   RS: () => (/* binding */ n),
/* harmony export */   ez: () => (/* binding */ a),
/* harmony export */   lM: () => (/* binding */ e),
/* harmony export */   qK: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports baseTypedArrayMemory, estimateFixedArrayMemory */
/* harmony import */ var _typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62088);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(r){return 32+r.length}const n=16;function e(r){if(!r)return 0;let t=s;for(const n in r)r.hasOwnProperty(n)&&(t+=f(r[n],!1));return t}function u(r){if(!r)return 0;if("number"==typeof r[0])return i(r);if(Array.isArray(r))return o(r);let t=s;for(const n in r)r.hasOwnProperty(n)&&(t+=f(r[n]));return t}function o(r){const t=r.length;if(0===t||"number"==typeof r[0])return c(r,8);let n=a;for(let e=0;e<t;e++)n+=f(r[e]);return n}function f(r,e=!0){switch(typeof r){case"object":return e?u(r):s;case"string":return t(r);case"number":return n;case"boolean":return 4;default:return 8}}function i(...t){return t.reduce(((t,e)=>t+(e?(0,_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(e)?e.byteLength+y:Array.isArray(e)?c(e,n):0:0)),0)}function c(r,t){return a+r.length*t}const s=32,a=16,y=145;


/***/ }),

/***/ 16269:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6273);
/* harmony import */ var _memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28208);
/* harmony import */ var _ObjectPool_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39744);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var i;!function(t){t[t.varint=0]="varint",t[t.fixed64=1]="fixed64",t[t.delimited=2]="delimited",t[t.fixed32=5]="fixed32",t[t.unknown=99]="unknown"}(i||(i={}));const s=4294967296,r=new TextDecoder("utf-8"),n=(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("safari")||(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ios")?6:(0,_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("ff")?12:32;class a{constructor(t,e,s=0,r=(t?t.byteLength:0)){this._tag=0,this._dataType=i.unknown,this._init(t,e,s,r)}_init(t,e,i,s){this._data=t,this._dataView=e,this._pos=i,this._end=s}get usedMemory(){return 64+(0,_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_1__/* .estimateNumberArrayMemory */ .Qf)(this._data)}asUnsafe(){return this}clone(){return new a(this._data,this._dataView,this._pos,this._end)}pos(){return this._pos}move(t){this._pos=t}nextTag(t){for(;;){if(this._pos===this._end)return!1;const e=this._decodeVarint();if(this._tag=e>>3,this._dataType=7&e,!t||t===this._tag)break;this.skip()}return!0}next(){if(this._pos===this._end)return!1;const t=this._decodeVarint();return this._tag=t>>3,this._dataType=7&t,!0}empty(){return this._pos>=this._end}tag(){return this._tag}getInt32(){return this._decodeVarint()}getInt64(){return this._decodeVarint()}getUInt32(){let t=4294967295;if(t=(127&this._data[this._pos])>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<7)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<14)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(127&this._data[this._pos])<<21)>>>0,this._data[this._pos++]<128)return t;if(t=(t|(15&this._data[this._pos])<<28)>>>0,this._data[this._pos++]<128)return t;throw new Error("Varint overflow")}getUInt64(){return this._decodeVarint()}getSInt32(){const t=this.getUInt32();return t>>>1^-(1&t)}getSInt64(){return this._decodeSVarint()}getBool(){const t=0!==this._data[this._pos];return this._skip(1),t}getEnum(){return this._decodeVarint()}getFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getUint32(e+4,!0)*s;return this._skip(8),i}getSFixed64(){const t=this._dataView,e=this._pos,i=t.getUint32(e,!0)+t.getInt32(e+4,!0)*s;return this._skip(8),i}getDouble(){const t=this._dataView.getFloat64(this._pos,!0);return this._skip(8),t}getFixed32(){const t=this._dataView.getUint32(this._pos,!0);return this._skip(4),t}getSFixed32(){const t=this._dataView.getInt32(this._pos,!0);return this._skip(4),t}getFloat(){const t=this._dataView.getFloat32(this._pos,!0);return this._skip(4),t}getString(){const t=this._getLength(),e=this._pos,i=this._toString(this._data,e,e+t);return this._skip(t),i}getBytes(){const t=this._getLength(),e=this._pos,i=this._toBytes(this._data,e,e+t);return this._skip(t),i}getLength(){return this._getLengthUnsafe()}processMessageWithArgs(t,e,i,s){const r=this.getMessage(),n=t(r,e,i,s);return r.release(),n}processMessage(t){const e=this.getMessage(),i=t(e);return e.release(),i}getMessage(){const t=this._getLength(),e=a.pool.acquire();return e._init(this._data,this._dataView,this._pos,this._pos+t),this._skip(t),e}release(){a.pool.release(this)}dataType(){return this._dataType}skip(){switch(this._dataType){case i.varint:this._decodeVarint();break;case i.fixed64:this._skip(8);break;case i.delimited:this._skip(this._getLength());break;case i.fixed32:this._skip(4);break;default:throw new Error("Invalid data type!")}}skipLen(t){this._skip(t)}_skip(t){if(this._pos+t>this._end)throw new Error("Attempt to skip past the end of buffer!");this._pos+=t}_decodeVarint(){const t=this._data;let e=this._pos,i=0,s=0;if(this._end-e>=10)do{if(s=t[e++],i|=127&s,!(128&s))break;if(s=t[e++],i|=(127&s)<<7,!(128&s))break;if(s=t[e++],i|=(127&s)<<14,!(128&s))break;if(s=t[e++],i|=(127&s)<<21,!(128&s))break;if(s=t[e++],i+=268435456*(127&s),!(128&s))break;if(s=t[e++],i+=34359738368*(127&s),!(128&s))break;if(s=t[e++],i+=4398046511104*(127&s),!(128&s))break;if(s=t[e++],i+=562949953421312*(127&s),!(128&s))break;if(s=t[e++],i+=72057594037927940*(127&s),!(128&s))break;if(s=t[e++],i+=0x8000000000000000*(127&s),!(128&s))break;throw new Error("Varint too long!")}while(0);else{let r=1;for(;e!==this._end&&(s=t[e],128&s);)++e,i+=(127&s)*r,r*=128;if(e===this._end)throw new Error("Varint overrun!");++e,i+=s*r}return this._pos=e,i}_decodeSVarint(){const t=this._data;let e,i=0,s=0;const r=1&t[this._pos];if(s=t[this._pos++],i|=127&s,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<7,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<14,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i|=(127&s)<<21,!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=268435456*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=34359738368*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(s=t[this._pos++],i+=4398046511104*(127&s),!(128&s))return r?-(i+1)/2:i/2;if(e=BigInt(i),s=t[this._pos++],e+=0x2000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x100000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);if(s=t[this._pos++],e+=0x8000000000000000n*BigInt(127&s),!(128&s))return Number(r?-(e+1n)/2n:e/2n);throw new Error("Varint too long!")}_getLength(){if(this._dataType!==i.delimited)throw new Error("Not a delimited data type!");return this._decodeVarint()}_getLengthUnsafe(){return this.getUInt32()}_toString(t,e,i){if((i=Math.min(this._end,i))-e>n){const s=t.subarray(e,i);return r.decode(s)}let s="",a="";for(let r=e;r<i;++r){const e=t[r];128&e?a+="%"+e.toString(16):(s+=decodeURIComponent(a)+String.fromCharCode(e),a="")}return a.length&&(s+=decodeURIComponent(a)),s}_toBytes(t,e,i){return i=Math.min(this._end,i),new Uint8Array(t.buffer,e,i-e)}static{this.pool=new _ObjectPool_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(a,void 0,(t=>{t._data=null,t._dataView=null}))}}


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

/***/ 77873:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25336);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26110);
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(31753);
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(19165);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19913);
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(43785);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var y;let A=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{static{y=this}constructor(t){super(t),this.translation=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .create */ .vt)(),this.rotationAxis=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .fromArray */ .ci)(_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__.up),this.rotationAngle=0,this.scale=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .fromValues */ .fA)(1,1,1)}get rotation(){return (0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__/* .fromAxisAndAngle */ .i4)(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .clone */ .o8)((0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__/* .axis */ .yo)(t)),this.rotationAngle=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__/* .angle */ .g7)(t)}get localMatrix(){const t=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)();return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_9__/* .setAxisAngle */ .x8)(d,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__/* .axis */ .yo)(this.rotation),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_12__/* .angleRad */ .$I)(this.rotation)),(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__/* .fromRotationTranslationScale */ .o1)(t,d,this.translation,this.scale),t}get localMatrixInverse(){return (0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__/* .invert */ .B8)((0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(),this.localMatrix)}equals(t){return this===t||null!=t&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_7__/* .exactEquals */ .t2)(this.localMatrix,t.localMatrix)}clone(){const t={translation:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .clone */ .o8)(this.translation),rotationAxis:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .clone */ .o8)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_11__/* .clone */ .o8)(this.scale)};return new y(t)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"translation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAxis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],A.prototype,"rotationAngle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],A.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],A.prototype,"rotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],A.prototype,"localMatrix",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],A.prototype,"localMatrixInverse",null),A=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshTransform")],A);const d=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_10__/* .create */ .vt)();


/***/ }),

/***/ 43785:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: () => (/* binding */ z),
/* harmony export */   AU: () => (/* binding */ d),
/* harmony export */   g7: () => (/* binding */ y),
/* harmony export */   i4: () => (/* binding */ q),
/* harmony export */   ui: () => (/* binding */ k),
/* harmony export */   up: () => (/* binding */ B),
/* harmony export */   vt: () => (/* binding */ j),
/* harmony export */   yo: () => (/* binding */ w)
/* harmony export */ });
/* unused harmony exports compose, copy, fromPoints, fromValues, setAngle, wrap, wrapAxisAngle */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25336);
/* harmony import */ var _core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31753);
/* harmony import */ var _core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19165);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19913);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function j(r=B){return[r[0],r[1],r[2],r[3]]}function h(r,t,n,o){return g(r,t,n,o,E)}function x(r,t){return g(r[0],r[1],r[2],t,E)}function b(r,t=j()){return g(r[0],r[1],r[2],r[3],t)}function g(r,t,n,o,i=j()){return i[0]=r,i[1]=t,i[2]=n,i[3]=o,i}function q(r,t,n=j()){return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_4__.c)(w(n),r),n[3]=t,n}function v(r,t,n){return f(n,r,t),s(n,n),n[3]=-m(r,t),n}function k(r,o=j()){const i=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_1__/* .getRotation */ .l)(C,r);return A(o,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .rad2deg */ .KJ)((0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__/* .getAxisAngle */ .Xd)(o,i))),o}function U(r,n,c=j()){return (0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__/* .setAxisAngle */ .x8)(C,w(r),z(r)),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__/* .setAxisAngle */ .x8)(D,w(n),z(n)),(0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__/* .multiply */ .lw)(C,D,C),A(c,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .rad2deg */ .KJ)((0,_core_libs_gl_matrix_2_math_quat_js__WEBPACK_IMPORTED_MODULE_2__/* .getAxisAngle */ .Xd)(w(c),C)))}function d(r,t,n,o=j()){return q(_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .UNIT_X */ .Cw,r,F),q(_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .UNIT_Y */ .JP,t,G),q(_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__/* .UNIT_Z */ .Cb,n,H),U(F,G,F),U(F,H,o),o}function w(r){return r}function y(r){return r[3]}function z(t){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(t[3])}function A(r,t){return r[3]=t,r}const B=[0,0,1,0],C=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),D=(0,_core_libs_gl_matrix_2_factories_quatf64_js__WEBPACK_IMPORTED_MODULE_3__/* .create */ .vt)(),E=j(),F=j(),G=j(),H=j();


/***/ }),

/***/ 28936:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bq: () => (/* binding */ n),
/* harmony export */   Qp: () => (/* binding */ i),
/* harmony export */   WN: () => (/* binding */ b),
/* harmony export */   dK: () => (/* binding */ v),
/* harmony export */   eN: () => (/* binding */ f),
/* harmony export */   fH: () => (/* binding */ y),
/* harmony export */   "in": () => (/* binding */ m),
/* harmony export */   yr: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports isDisplayAsset, isDisplaySource */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49175);
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52360);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i{constructor(s,t,e){this.assetName=s,this.assetMimeType=t,this.parts=e}equals(s){return this===s||this.assetName===s.assetName&&this.assetMimeType===s.assetMimeType&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(this.parts,s.parts,((s,t)=>s.equals(t)))}isOnService(s){return this.parts.every((t=>t.isOnService(s)))}makeHash(){let s="";for(const t of this.parts)s+=t.partHash;return s}async toBlob(s){const{parts:t}=this;if(1===t.length)return t[0].toBlob(s);const r=await Promise.all(t.map((t=>t.toBlob(s))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(s),new Blob(r)}}class n{constructor(s,t){this.partUrl=s,this.partHash=t}equals(s){return this===s||this.partUrl===s.partUrl&&this.partHash===s.partHash}isOnService(s){return this.partUrl.startsWith(`${s.path}/assets/`)}async toBlob(t){const{data:r}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.partUrl,{responseType:"blob"});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(t),r}}function o(s){return l(s?.source)}const c=/^(model\/gltf\+json)|(model\/gltf-binary)$/,u=/\.(gltf|glb)/i;function l(s){switch(s?.type){case"client":return Array.isArray(s.files)?s.files.some(p):p(s.files);case"service":return s.assets.some(p);case"loadable":return!0;default:return!1}}function p(s){if(s instanceof File){const{type:t,name:e}=s;return c.test(t)||u.test(e)}return c.test(s.assetMimeType)||u.test(s.assetName)}function f(s,t){if(!s)return!1;const{source:e}=s;return h(e,t)}function m(s,t){if(s===t)return!0;const{source:e}=s,{source:r}=t;if(e===r)return!0;if("service"===e.type&&"service"===r.type){if(e.assets.length!==r.assets.length)return!1;const s=(s,t)=>s.assetName<t.assetName?-1:s.assetName>t.assetName?1:0,t=[...e.assets].sort(s),a=[...r.assets].sort(s);for(let e=0;e<t.length;++e)if(!t[e].equals(a[e]))return!1;return!0}return!1}function h(s,t){return"service"===s.type&&s.assets.every((s=>s.isOnService(t)))}function y(s,t){return s instanceof File?(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_4__/* .getFileFormatId */ .rq)(s,t):(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_4__/* .getMimeTypeOrFilenameFormatId */ .z$)(s.assetMimeType,s.assetName,t)}function b(s){switch(s.type){case"client":return Array.isArray(s.files)?s.files:[s.files];case"service":return s.assets;case"loadable":return}}function v(s){return!!s.original}


/***/ }),

/***/ 28364:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CK: () => (/* binding */ c),
/* harmony export */   Hq: () => (/* binding */ t),
/* harmony export */   MW: () => (/* binding */ u),
/* harmony export */   TE: () => (/* binding */ l),
/* harmony export */   yJ: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export isAbsoluteVertexSpace */
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80347);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30214);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58823);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93320);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return null==e.origin}function t(e){return null!=e.origin}function c(e){return t(e.vertexSpace)}function u(e,r){if(!t(e))return null;const[i,o,c]=e.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:i,y:o,z:c,spatialReference:r})}function l(e,n){const{x:o,y:t,z:c,spatialReference:u}=e,l=[o,t,c??0];return"local"===(n?.vertexSpace??f(u))?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({origin:l}):new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({origin:l})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function a(n,r){return n.type===r.type&&(n.origin===r.origin||null!=n.origin&&null!=r.origin&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(n.origin,r.origin))}


/***/ }),

/***/ 43861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O7: () => (/* binding */ P),
  el: () => (/* binding */ R)
});

// UNUSED EXPORTS: getDenormalizedExtent, normalizeMapX, straightLineDensify

// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polyline.js
var Polyline = __webpack_require__(38648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtilsCommon.js
var normalizeUtilsCommon = __webpack_require__(75981);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var webMercatorUtils = __webpack_require__(64672);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
;// ./node_modules/@arcgis/core/rest/geometryService/cut.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function i(i,n,p,m){const a=(0,utils/* parseUrl */.Dl)(i),u=n[0].spatialReference,c={...m,responseType:"json",query:{...a.query,f:"json",sr:(0,spatialReferenceUtils/* srToRESTValue */.YX)(u),target:JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.$B)(n[0]),geometries:n}),cutter:JSON.stringify(p)}},f=await (0,request/* default */.A)(a.path+"/cut",c),{cutIndexes:y,geometries:g=[]}=f.data;return{cutIndexes:y,geometries:g.map((e=>{const t=(0,jsonUtils/* fromJSON */.rS)(e);return t.spatialReference=u,t}))}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/geometryService/utils.js
var geometryService_utils = __webpack_require__(96905);
;// ./node_modules/@arcgis/core/rest/geometryService/simplify.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function m(m,p,f){const n="string"==typeof m?(0,urlUtils/* urlToObject */.An)(m):m,a=p[0].spatialReference,u=(0,jsonUtils/* getJsonType */.$B)(p[0]),l={...f,query:{...n.query,f:"json",sr:(0,spatialReferenceUtils/* srToRESTValue */.YX)(a),geometries:JSON.stringify((0,geometryService_utils/* encodeGeometries */.X)(p))}},{data:y}=await (0,request/* default */.A)(n.path+"/simplify",l);return (0,geometryService_utils/* decodeGeometries */.V)(y.geometries,u,a)}

;// ./node_modules/@arcgis/core/geometry/support/normalizeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const normalizeUtils_m=()=>Logger/* default */.A.getLogger("esri.geometry.support.normalizeUtils");function g(t){return"polygon"===t.type}function y(t){return"polygon"===t[0].type}function x(t){return"polyline"===t[0].type}function d(t){const e=[];let n=0,o=0;for(let s=0;s<t.length;s++){const r=t[s];let i=null;for(let t=0;t<r.length;t++)i=r[t],e.push(i),0===t?(n=i[0],o=n):(n=Math.min(n,i[0]),o=Math.max(o,i[0]));i&&e.push([(n+o)/2,0])}return e}function M(t,n){if(!(t instanceof Polyline/* default */.A||t instanceof Polygon/* default */.A)){const t="straightLineDensify: the input geometry is neither polyline nor polygon";throw normalizeUtils_m().error(t),new Error/* default */.A("internal:geometry",t)}const r=(0,normalizeUtilsCommon/* getGeometryParts */.r8)(t),i=[];for(const e of r){const t=[];i.push(t),t.push([e[0][0],e[0][1]]);for(let o=0;o<e.length-1;o++){const s=e[o][0],r=e[o][1],i=e[o+1][0],l=e[o+1][1],c=Math.sqrt((i-s)*(i-s)+(l-r)*(l-r)),f=(l-r)/c,u=(i-s)/c,p=c/n;if(p>1){for(let l=1;l<=p-1;l++){const e=l*n,o=u*e+s,i=f*e+r;t.push([o,i])}const e=(c+Math.floor(p-1)*n)/2,o=u*e+s,i=f*e+r;t.push([o,i])}t.push([i,l])}}return g(t)?new Polygon/* default */.A({rings:i,spatialReference:t.spatialReference}):new Polyline/* default */.A({paths:i,spatialReference:t.spatialReference})}function w(t,e,n){if(e){const e=M(t,1e6);t=(0,webMercatorUtils/* webMercatorToGeographic */.ci)(e,!0)}return n&&(t=(0,normalizeUtilsCommon/* updatePolyGeometry */.kS)(t,n)),t}function b(t,e,n){if(Array.isArray(t)){const o=t[0];if(o>e){const n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,e);t[0]=o+n*(-2*e)}else if(o<n){const e=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,n);t[0]=o+e*(-2*n)}}else{const o=t.x;if(o>e){const n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,e);t=t.clone().offset(n*(-2*e),0)}else if(o<n){const e=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(o,n);t=t.clone().offset(e*(-2*n),0)}}return t}function j(t,e){let n=-1;for(let o=0;o<e.cutIndexes.length;o++){const s=e.cutIndexes[o],r=e.geometries[o],l=(0,normalizeUtilsCommon/* getGeometryParts */.r8)(r);for(let t=0;t<l.length;t++){const e=l[t];e.some((n=>{if(n[0]<180)return!0;{let n=0;for(let t=0;t<e.length;t++){const o=e[t][0];n=o>n?o:n}n=Number(n.toFixed(9));const o=-360*(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(n,180);for(let s=0;s<e.length;s++){const e=r.getPoint(t,s);r.setPoint(t,s,e.clone().offset(o,0))}return!0}}))}if(s===n){if(y(t))for(const e of (0,normalizeUtilsCommon/* getGeometryParts */.r8)(r))t[s]=t[s].addRing(e);else if(x(t))for(const e of (0,normalizeUtilsCommon/* getGeometryParts */.r8)(r))t[s]=t[s].addPath(e)}else n=s,t[s]=r}return t}async function R(e,n,c){if(!Array.isArray(e))return R([e],n);n&&"string"!=typeof n&&normalizeUtils_m().warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const p="string"==typeof n?n:n?.url??config/* default */.A.geometryServiceUrl;let g,y,x,d,M,v,P,L,U=0;const z=[],A=[];for(const t of e)if(null!=t)if(g||(g=t.spatialReference,y=(0,spatialReferenceUtils/* getInfo */.Vp)(g),x=g.isWebMercator,v=x?102100:4326,d=normalizeUtilsCommon/* cutParams */.j7[v].maxX,M=normalizeUtilsCommon/* cutParams */.j7[v].minX,P=normalizeUtilsCommon/* cutParams */.j7[v].plus180Line,L=normalizeUtilsCommon/* cutParams */.j7[v].minus180Line),y)if("mesh"===t.type)A.push(t);else if("point"===t.type)A.push(b(t.clone(),d,M));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((t=>b(t,d,M))),A.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,y);A.push(e.rings?new Polygon/* default */.A(e):e)}else if(t.extent){const e=t.extent,n=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(e.xmin,M)*(2*d);let o=0===n?t.clone():(0,normalizeUtilsCommon/* updatePolyGeometry */.kS)(t.clone(),n);e.offset(n,0);let{xmin:s,xmax:r}=e;s=Number(s.toFixed(9)),r=Number(r.toFixed(9)),e.intersects(P)&&r!==d?(U=r>U?r:U,o=w(o,x),z.push(o),A.push("cut")):e.intersects(L)&&s!==M?(U=r*(2*d)>U?r*(2*d):U,o=w(o,x,360),z.push(o),A.push("cut")):A.push(o)}else A.push(t.clone());else A.push(t);else A.push(t);let F=(0,normalizeUtilsCommon/* offsetMagnitude */.kd)(U,d),N=-90;const S=F,k=new Polyline/* default */.A;for(;F>0;){const t=360*F-180;k.addPath([[t,N],[t,-1*N]]),N*=-1,F--}if(z.length>0&&S>0){const t=j(z,await i(p,z,k,c)),n=[],o=[];for(let i=0;i<A.length;i++){const s=A[i];if("cut"!==s)o.push(s);else{const s=t.shift(),r=e[i];null!=r&&"polygon"===r.type&&r.rings&&r.rings.length>1&&s.rings.length>=r.rings.length?(n.push(s),o.push("simplify")):o.push(x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(s):s)}}if(!n.length)return o;const s=await m(p,n,c),r=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?r.push(t):r.push(x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(s.shift()):s.shift())}return r}const C=[];for(let t=0;t<A.length;t++){const e=A[t];if("cut"!==e)C.push(e);else{const t=z.shift();C.push(!0===x?(0,webMercatorUtils/* geographicToWebMercator */.Gh)(t):t)}}return C}function v(t){if(!t)return null;const e=t.extent;if(!e)return null;const n=t.spatialReference&&f(t.spatialReference);if(!n)return e;const[o,s]=n.valid,r=2*s,{width:i}=e;let l,{xmin:c,xmax:u}=e;if([c,u]=[u,c],"extent"===t.type||0===i||i<=s||i>r||c<o||u>s)return e;switch(t.type){case"polygon":if(!(t.rings.length>1))return e;l=d(t.rings);break;case"polyline":if(!(t.paths.length>1))return e;l=d(t.paths);break;case"multipoint":l=t.points}const p=e.clone();for(let f=0;f<l.length;f++){let t=l[f][0];t<0?(t+=s,u=Math.max(t,u)):(t-=s,c=Math.min(t,c))}return p.xmin=c,p.xmax=u,p.width<i?(p.xmin-=s,p.xmax-=s,p):e}function P(t,e,n){const o=(0,spatialReferenceUtils/* getInfo */.Vp)(n);if(null==o)return t;const[s,r]=o.valid,i=2*r;let l=0,c=0;e>r?l=Math.ceil(Math.abs(e-r)/i):e<s&&(l=-Math.ceil(Math.abs(e-s)/i)),t>r?c=Math.ceil(Math.abs(t-r)/i):t<s&&(c=-Math.ceil(Math.abs(t-s)/i));let u=t+(l-c)*i;const p=u-e;return p>r?u-=i:p<s&&(u+=i),u}function L(t,e){const n=f(e);if(n){const[e,o]=n.valid,s=o-e;if(t<e)for(;t<e;)t+=s;if(t>o)for(;t>o;)t-=s}return t}


/***/ }),

/***/ 75981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j7: () => (/* binding */ r),
/* harmony export */   kS: () => (/* binding */ s),
/* harmony export */   kd: () => (/* binding */ i),
/* harmony export */   r8: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _Polyline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38648);
/* harmony import */ var _SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44153);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56053);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WebMercator}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[180,-180],[180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84}),minus180Line:new _Polyline_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({paths:[[[-180,-180],[-180,180]]],spatialReference:_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84})}};function i(e,n){return Math.ceil((e-n)/(2*n))}function s(e,n){const t=o(e);for(const r of t)for(const e of r)e[0]+=n;return e}function o(e){return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isPolygon */ .Bi)(e)?e.rings:e.paths}


/***/ }),

/***/ 55554:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ z)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(80294);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/handleUtils.js
var handleUtils = __webpack_require__(70214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/LRUCache.js + 1 modules
var LRUCache = __webpack_require__(49481);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/ReactiveMap.js
var ReactiveMap = __webpack_require__(51074);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/signal.js
var signal = __webpack_require__(39369);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/OrderByInfo.js
var OrderByInfo = __webpack_require__(65681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/statistics/utils.js
var utils = __webpack_require__(76408);
;// ./node_modules/@arcgis/core/layers/catalog/CatalogDynamicGroupLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let v=class extends((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,BlendLayer/* BlendLayer */.dM)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A)))){constructor(e){super(e),this._layerCache=new LRUCache/* LRUCache */.q(20,(e=>e.destroy())),this._oidToReference=new ReactiveMap/* default */.A,this._layerToReference=new Map,this.legendEnabled=!0,this.layers=new Collection/* default */.A,this.maximumVisibleSublayers=10,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.title="Layers in view",this.type="catalog-dynamic-group",this.visible=!0}initialize(){this.addHandles([this.layers.on("after-add",(({item:e})=>{e.parent=this})),this.layers.on("after-remove",(({item:e})=>{e.parent=null})),(0,reactiveUtils/* watch */.wB)((()=>this._orderBy),(()=>{this._updateLayerSortValues(),this._sortAllLayers()}))])}load(e){return this.addResolvingPromise(this.parent.load()),Promise.resolve(this)}destroy(){this._layerCache.destroy(),this._oidToReference.clear(),this._layerToReference.clear()}get _orderBy(){return this.parent?this.parent.orderBy?.find((e=>!e.valueExpression&&e.field))??new OrderByInfo/* default */.A({field:this.parent.objectIdField}):null}get _referenceComparator(){const e=this._orderBy;if(!this.parent||!e)return()=>0;const t=this.parent.fieldsIndex.get(e.field),r=(0,utils/* getAttributeComparator */.FM)(t?.toJSON().type,"descending"===e.order),o=(0,utils/* getAttributeComparator */.FM)("esriFieldTypeOID","descending"===e.order);return(e,t)=>r(t.sortValue,e.sortValue)||o(t.objectId,e.objectId)}get fullExtent(){return this.parent?.fullExtent??null}get updating(){return (0,MapUtils/* someMap */.Bs)(this._oidToReference,(({pending:e})=>null!=e))}acquireLayer(e){if(this.destroyed)return (0,handleUtils/* makeHandle */.hA)();const t=this._getLayerReference(e);return t.count++,(0,handleUtils/* makeHandle */.hA)((()=>{t.count--,t.count||this._destroyLayerReference(t)}))}_getLayerReference(e){const t=e.getObjectId();return (0,MapUtils/* getOrCreateMapValue */.tE)(this._oidToReference,t,(()=>{const t=e.getObjectId(),r=`${t}`,o=e.getAttribute(this.parent.itemSourceField),i=new b(e,t,o),s=this._layerCache.pop(r);return s?(this._addLayer(i,s),i):(i.pending=this.parent.createLayerFromFootprint(e).then((e=>{i.count?this._addLayer(i,e):(this.destroyed||this._layerCache.get(r)||this._layerCache.put(r,e),i.layer=null)})).catch((()=>{})).finally((()=>{i.pending=null})),i)}))}_destroyLayerReference(e){e.layer&&(this._layerToReference.delete(e.layer),this.layers.remove(e.layer),this.destroyed?e.layer.destroy():this._layerCache.put(`${e.objectId}`,e.layer),e.layer=null),this._oidToReference.delete(e.objectId)}_addLayer(e,t){e.layer=t,t.persistenceEnabled=!1,this._layerToReference.set(t,e),this._updateLayerSortValue(e),this.layers.add(t),this._sortAllLayers()}_updateLayerSortValues(){for(const e of this._layerToReference.values())this._updateLayerSortValue(e)}_updateLayerSortValue(e){this._orderBy&&(e.sortValue=e.footprint.getAttribute(this._orderBy.field))}_sortAllLayers(){this.layers.sort(((e,t)=>this._referenceComparator(this._layerToReference.get(e),this._layerToReference.get(t))))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"_orderBy",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"_referenceComparator",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],v.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"],json:{write:!0}})],v.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0,isRequired:!0}}})],v.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"layers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz,range:{min:0,max:50},json:{write:!0,default:10}})],v.prototype,"maximumVisibleSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],v.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],v.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],v.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],v.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],v.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],v.prototype,"visible",void 0),v=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.catalog.CatalogDynamicGroupLayer")],v);class b{constructor(e,t,r){this.footprint=e,this.objectId=t,this.itemSource=r,this.count=0,this.layer=null,this.sortValue=void 0,this._pending=(0,signal/* signal */.v)(null)}get pending(){return this._pending.value}set pending(e){this._pending.value=e}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/form/FormTemplate.js + 31 modules
var FormTemplate = __webpack_require__(70345);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js + 2 modules
var FeatureEffectLayer = __webpack_require__(42383);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js
var LabelClass = __webpack_require__(47659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(6488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(79645);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/typeUtils.js + 11 modules
var typeUtils = __webpack_require__(94403);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(55736);
;// ./node_modules/@arcgis/core/layers/catalog/CatalogFootprintLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function S(){const e=new SimpleFillSymbol/* default */.A({style:"solid",color:[0,0,0,0],outline:{style:"solid",color:[96,96,96,.75],width:.75}});return new SimpleRenderer/* default */.A({symbol:e})}let P=class extends((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)((0,BlendLayer/* BlendLayer */.dM)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))))){constructor(e){super(e),this.attributeTableTemplate=null,this.charts=null,this.editingEnabled=!0,this.elevationInfo=null,this.formTemplate=null,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.opacity=1,this.parent=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.title="Footprints",this.type="catalog-footprint",this.visible=!0}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.parent.load(e),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),this.addHandles([this.parent.on("apply-edits",(e=>this.emit("apply-edits",e))),this.parent.on("edits",(e=>this.emit("edits",e))),this.parent.on("refresh",(e=>this.emit("refresh",e)))])}get apiKey(){return this.parent?.apiKey}get capabilities(){return this.parent?.capabilities}get customParameters(){return this.parent?.customParameters}get dateFieldsTimeZone(){return this.parent?.dateFieldsTimeZone??null}get datesInUnknownTimezone(){return this.parent?.datesInUnknownTimezone??!1}get definitionExpression(){return this.parent?.definitionExpression}get editingInfo(){return this.parent?.editingInfo}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get createQueryVersion(){return this.parent?.createQueryVersion}get defaultPopupTemplate(){return this.createPopupTemplate()}get displayField(){return this.parent?.displayField}get displayFilterEnabled(){return this.parent?.displayFilterEnabled??!0}get displayFilterInfo(){return this.parent?.displayFilterInfo??null}get effectiveEditingEnabled(){return!1}get fields(){return this.parent?.fields}get fieldsIndex(){return this.parent?.fieldsIndex}get fullExtent(){return this.parent?.fullExtent}get geometryFieldsInfo(){return this.parent?.geometryFieldsInfo}get geometryType(){return this.parent?.geometryType}get globalIdField(){return this.parent?.globalIdField}get hasM(){return this.parent?.hasM??!1}get hasZ(){return this.parent?.hasZ??!1}get objectIdField(){return this.parent?.objectIdField}get orderBy(){return this.parent?.orderBy??null}get outFields(){return this.parent?.outFields}get parsedUrl(){return this.parent?.parsedUrl??null}get preferredTimeZone(){return this.parent?.preferredTimeZone??null}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):S()}get returnM(){return this.parent?.returnM}get returnZ(){return this.parent?.returnZ}get source(){return this.parent?.source}get timeExtent(){return this.parent?.timeExtent}get timeInfo(){return this.parent?.timeInfo}get timeOffset(){return this.parent?.timeOffset}get typeIdField(){return this.parent?.typeIdField}get types(){return this.parent?.types}get useViewTime(){return this.parent?.useViewTime??!0}get version(){return this.parent?.version}async applyEdits(e,t){return await this.load(),this.parent.applyEdits(e,t)}createPopupTemplate(e){const t={fields:this.fields,objectIdField:this.objectIdField,title:this.title};return (0,popupUtils/* createPopupTemplate */.tn)(t,e)}createQuery(){return this.parent?.createQuery()}getField(e){return this.parent?.getField(e)}getFieldDomain(e,t){return this.parent?.getFieldDomain(e,t)}async queryExtent(e,t){return await this.load(),this.parent.queryExtent(e,t)}async queryFeatures(e,t){return await this.load(),this.parent.queryFeatures(e,t)}async queryFeatureCount(e,t){return await this.load(),this.parent.queryFeatureCount(e,t)}async queryObjectIds(e,t){return await this.load(),this.parent.queryObjectIds(e,t)}async queryAttributeBins(e,t){return await this.load(),this.parent.queryAttributeBins(e,t)}};(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* attributeTableTemplate */.zQ)],P.prototype,"attributeTableTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"apiKey",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"capabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"customParameters",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],P.prototype,"dateFieldsTimeZone",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"datesInUnknownTimezone",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"definitionExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"editingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],P.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"displayField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],P.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* elevationInfo */.Yj);return e.json.origins["web-map"]={read:!1,write:!1},e})())],P.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"fields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"fieldsIndex",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],P.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"geometryFieldsInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"geometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"globalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"hasM",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"hasZ",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0,isRequired:!0}}})],P.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!0}})],P.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],P.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],P.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"],json:{write:!0}})],P.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* maxScale */.hG);return e.json.origins.service.read=!1,e})())],P.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* minScale */.hn);return e.json.origins.service.read=!1,e})())],P.prototype,"minScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"objectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],P.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"orderBy",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"outFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],P.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],P.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],P.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"preferredTimeZone",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:typeUtils/* rendererTypes */.Hg,json:{origins:{"web-scene":{types:typeUtils/* webSceneRendererTypes */.XJ}},name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy(e,t){return{ignoreOrigin:this.originIdOf(t)<PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM}}}}})],P.prototype,"renderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"returnM",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"returnZ",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"source",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"timeExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"timeInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"timeOffset",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,nonNullable:!0,json:{write:{ignoreOrigin:!0,isRequired:!0}}})],P.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],P.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"typeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"types",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],P.prototype,"useViewTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{name:"visibility",write:!0}})],P.prototype,"visible",void 0),P=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.catalog.CatalogFootprintLayer")],P);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js + 1 modules
var FeatureLayerSource = __webpack_require__(97470);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/DisplayFilteredLayer.js + 2 modules
var DisplayFilteredLayer = __webpack_require__(57546);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(88940);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 4 modules
var FeatureLayerBase = __webpack_require__(13268);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
var OrderedLayer = __webpack_require__(87917);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(52202);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(62304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/urlUtils.js
var support_urlUtils = __webpack_require__(9856);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
;// ./node_modules/@arcgis/core/layers/CatalogLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const V=(0,fieldProperties/* defineFieldProperties */.p)();function k(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}function J(e){return"object"==typeof e&&null!=e&&"url"in e}function H(e){if(null==e)return!0;const t=Object.keys(e);return!t.length||1===t.length&&"id"===t[0]}function K(e,t,r,i){const o=e.write({},i);H(o)||(t[r]=o)}let W=class extends((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,EditBusLayer/* EditBusLayer */.w6)((0,BlendLayer/* BlendLayer */.dM)((0,OrderedLayer/* OrderedLayer */.fY)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A))))))))))))))){constructor(e){super(e),this.legendEnabled=!0,this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new v({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new P({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new Collection/* default */.A([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new FeatureLayerSource["default"]({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{const{url:e,source:r,portalItem:o}=this;if(!e)throw new Error/* default */.A("catalog-layer:missing-url","Catalog layer must be created with a url");if(null==this.layerId){const r=await this._fetchFirstValidLayerId(t);if(null==r)throw new Error/* default */.A("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:e});this.layerId=r}await r.load({signal:t});const{sourceJSON:s}=r;s&&(this.sourceJSON=s,this.read(s,{origin:"service",portalItem:o,portal:o?.portal,url:this.parsedUrl}))})).then((()=>{const e=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],t=e.filter((e=>!this.fieldsIndex.has(e)));if(t.length)throw new Error/* default */.A("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:e,missingFields:t})})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString())),e}async applyEdits(e,t){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){return this._layerToFootprint.get(e)?.clone()}createQuery(){const e=new Query/* default */.A,t=this.capabilities?.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return (0,featureLayerUtils/* getFeatureType */.xd)(this.types,this.typeIdField,e)}getFieldDomain(e,t){const r=t?.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this.getField(e)?.domain}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(Query/* default */.A.from(e)??r.createQuery(),t);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=r.footprintLayer;return i}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(Query/* default */.A.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(Query/* default */.A.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(Query/* default */.A.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:r,dynamicGroupLayer:i}=e;r&&this.footprintLayer.read(r,t),i&&this.dynamicGroupLayer.read(i,t)}}async queryAttributeBins(e,t){const{source:r,capabilities:i}=await this.load();(0,featureLayerUtils/* validateBinsQuery */.ZJ)(e,i,"CatalogLayer");const o=await __webpack_require__.e(/* import() */ 91851).then(__webpack_require__.bind(__webpack_require__, 14232)),s=await r.queryAttributeBins(o.default.from(e),t);if(s.features)for(const a of s.features)a.layer=a.sourceLayer=this.footprintLayer;return s}async _fetchFirstValidLayerId(e){const{data:r}=await (0,request/* default */.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(this.applyPreferredHost(r),Array.isArray(r?.layers))return r.layers.find((({type:e})=>this.supportedSourceTypes.has(e)))?.id}async _createLayer(e){const t=e.getAttribute(this.itemSourceField);if(!t)throw new Error/* default */.A("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const r=JSON.parse(t);if(k(r)){const{itemId:e,portalUrl:t}=r,i=(0,support_urlUtils/* normalizeArcGISOnlineOrgDomain */.qG)(t),s=this.portalItem?.portal,a=Portal/* default */.A.getDefault();let n,l=!0;s&&(0,urlUtils/* hasSamePortal */.ut)(t,s.url)?n=s:(0,urlUtils/* hasSamePortal */.ut)(t,a.url)?n=a:(n=(0,MapUtils/* getOrCreateMapValue */.tE)(this._portals,i,(()=>new Portal/* default */.A({url:i}))),l=!1);const y=await Layer/* default */.A.fromPortalItem(new PortalItem["default"]({id:e,portal:n}));return l||await $(y),y}if(J(r))return Layer/* default */.A.fromArcGISServerUrl({url:r.url});const{default:s}=await __webpack_require__.e(/* import() */ 94122).then(__webpack_require__.bind(__webpack_require__, 94122));return new s}_configureLayer(e,t){const r=t.getAttribute(this.itemNameField);r&&(e.title=r);const i=t.getAttribute(this.maxScaleField);null!=i&&"maxScale"in e&&(e.maxScale=i);const o=t.getAttribute(this.minScaleField);null!=o&&"minScale"in e&&(e.minScale=o)}};async function $(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,"group"===e.type&&await Promise.allSettled([...e.layers.map((e=>$(e))),...e.tables.map((e=>$(e)))])}}(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],W.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"drawOrderField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:K}}})],W.prototype,"dynamicGroupLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],W.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({...V.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],W.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(V.fieldsIndex)],W.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],W.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:P,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:K}}})],W.prototype,"footprintLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],W.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"itemNameField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"itemSourceField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"itemTypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"layers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"]})],W.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"maxScaleField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"minScaleField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:"CatalogLayer",type:["CatalogLayer"]})],W.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],W.prototype,"orderBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(V.outFields)],W.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],W.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],W.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],W.prototype,"types",void 0),W=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.CatalogLayer")],W);const z=W;


/***/ }),

/***/ 85747:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N3: () => (/* binding */ o),
/* harmony export */   Om: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export OptimizedFeatureWithGeometry */
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28208);
/* harmony import */ var _centroid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(91658);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65977);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t=null,e={},r,s,o=0){this.geometry=t,this.attributes=e,this.centroid=r,this.objectId=s,this.displayId=o}static fromJSON(t){const e=t.geometry?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(t.geometry):null,o=t.centroid?_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(t.centroid):null,i=t.objectId;return new s(e,t.attributes,o,i)}weakClone(){const t=new s(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new s(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=(0,_centroid_js__WEBPACK_IMPORTED_MODULE_2__/* .getCentroidOptimizedGeometry */ .Q)(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__/* .estimateAttributesMemory */ .lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function o(t){return!!t.geometry?.coords?.length}class i extends (/* unused pure expression or super */ null && (s)){}


/***/ }),

/***/ 97011:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{constructor(){this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const t=new e;return t.globalIdFieldName=this.globalIdFieldName,t.geohashFieldName=this.geohashFieldName,t.geometryProperties=this.geometryProperties,t.geometryType=this.geometryType,t.spatialReference=this.spatialReference,t.hasZ=this.hasZ,t.hasM=this.hasM,t.features=this.features,t.fields=this.fields,t.transform=this.transform,t.exceededTransferLimit=this.exceededTransferLimit,t.uniqueIdField=this.uniqueIdField,t.queryGeometry=this.queryGeometry,t.queryGeometryType=this.queryGeometryType,t}}


/***/ }),

/***/ 65977:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28208);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const s=2;class e{constructor(t=[],s=[]){this.lengths=t??[],this.coords=s??[]}static fromJSON(t){return new e(t.lengths,t.coords)}static fromRect(t){const[s,o,r,h]=t,n=r-s,i=h-o;return new e([5],[s,o,n,0,0,i,-n,0,0,-i])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((t,s)=>t+s))}get usedMemory(){return 64+(0,_core_memoryEstimations_js__WEBPACK_IMPORTED_MODULE_0__/* .estimateNumberArrayMemory */ .Qf)(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let o=0;o<this.lengths.length;o++){const r=this.lengths[o];if(r<3)continue;let h=this.coords[s*e],n=this.coords[s*e+1];for(let o=1;o<r;o+=1){const r=this.coords[s*(o+e)],i=this.coords[s*(o+e)+1];t+=-.5*(r-h)*(i+n),h=r,n=i}e+=r}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let o=0;o<this.lengths.length;o++){const r=this.lengths[o];for(let o=0;o<r;o++){t(this.coords[s*(o+e)],this.coords[s*(o+e)+1])}e+=r}}deltaDecode(){const t=this.clone(),{coords:s,lengths:e}=t;let o=0;for(const r of e){for(let t=1;t<r;t++)s[2*(o+t)]+=s[2*(o+t)-2],s[2*(o+t)+1]+=s[2*(o+t)-1];o+=r}return t}clone(t){if(0===this.lengths.length)return new e([],[this.coords[0],this.coords[1]]);const o=(0===this.lengths.length?1:this.lengths.reduce(((t,s)=>t+s)))*s,r=this.coords.slice(0,o);return t?(t.set(r),new e(this.lengths,t)):new e(Array.from(this.lengths),Array.from(r))}}


/***/ }),

/***/ 91658:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony export lineCentroid */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,n){return t?n?4:3:n?3:2}function n(n,I,u,o){if(!I?.lengths.length)return null;n.lengths.length&&(n.lengths.length=0),n.coords.length&&(n.coords.length=0);const N=n.coords,l=[],s=u?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:c,coords:T}=I,f=t(u,o);let h=0;for(const t of c){const n=e(s,T,h,t,u,o);n&&l.push(n),h+=t*f}if(l.sort(((t,n)=>{let e=t[2]-n[2];return 0===e&&u&&(e=t[4]-n[4]),e})),l.length){let t=6*l[0][2];N[0]=l[0][0]/t,N[1]=l[0][1]/t,u&&(t=6*l[0][4],N[2]=0!==t?l[0][3]/t:0),(N[0]<s[0]||N[0]>s[1]||N[1]<s[2]||N[1]>s[3]||u&&(N[2]<s[4]||N[2]>s[5]))&&(N.length=0)}if(!N.length){const t=I.lengths[0]?r(T,0,c[0],u,o):null;if(!t)return null;N[0]=t[0],N[1]=t[1],u&&t.length>2&&(N[2]=t[2])}return n}function e(n,e,r,I,u,o){const N=t(u,o);let l=r,s=r+N,c=0,T=0,f=0,h=0,i=0;for(let t=0,g=I-1;t<g;t++,l+=N,s+=N){const t=e[l],r=e[l+1],I=e[l+2],o=e[s],N=e[s+1],E=e[s+2];let g=t*N-o*r;h+=g,c+=(t+o)*g,T+=(r+N)*g,u&&(g=t*E-o*I,f+=(I+E)*g,i+=g),t<n[0]&&(n[0]=t),t>n[1]&&(n[1]=t),r<n[2]&&(n[2]=r),r>n[3]&&(n[3]=r),u&&(I<n[4]&&(n[4]=I),I>n[5]&&(n[5]=I))}if(h>0&&(h*=-1),i>0&&(i*=-1),!h)return null;const E=[c,T,.5*h];return u&&(E[3]=f,E[4]=.5*i),E}function r(n,e,r,l,s){const c=t(l,s);let T=e,f=e+c,h=0,i=0,E=0,g=0;for(let t=0,b=r-1;t<b;t++,T+=c,f+=c){const t=n[T],e=n[T+1],r=n[T+2],s=n[f],c=n[f+1],b=n[f+2],m=l?u(t,e,r,s,c,b):I(t,e,s,c);if(m)if(h+=m,l){const n=N(t,e,r,s,c,b);i+=m*n[0],E+=m*n[1],g+=m*n[2]}else{const n=o(t,e,s,c);i+=m*n[0],E+=m*n[1]}}return h>0?l?[i/h,E/h,g/h]:[i/h,E/h]:r>0?l?[n[e],n[e+1],n[e+2]]:[n[e],n[e+1]]:null}function I(t,n,e,r){const I=e-t,u=r-n;return Math.sqrt(I*I+u*u)}function u(t,n,e,r,I,u){const o=r-t,N=I-n,l=u-e;return Math.sqrt(o*o+N*N+l*l)}function o(t,n,e,r){return[t+.5*(e-t),n+.5*(r-n)]}function N(t,n,e,r,I,u){return[t+.5*(r-t),n+.5*(I-n),e+.5*(u-e)]}


/***/ }),

/***/ 35393:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyEdits: () => (/* binding */ $),
/* harmony export */   r3: () => (/* binding */ A),
/* harmony export */   uploadAssets: () => (/* binding */ q),
/* harmony export */   zp: () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports checkEditingCapabilities, isFeatureIdentifierWithGlobalId, isFeatureIdentifierWithObjectId, normalizeCollections, normalizeEdits, normalizeGeometries, shallowCloneFeature */
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20857);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62991);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15565);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49175);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19759);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1874);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43861);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(67488);
/* harmony import */ var _mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88940);
/* harmony import */ var _support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46227);
/* harmony import */ var _support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(52360);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44837);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function w(e){return null!=e?.applyEdits}function F(e){return"object"==typeof e&&null!=e&&"objectId"in e&&!!e.objectId}function A(e){return e.every(F)}function v(e){return"object"==typeof e&&null!=e&&"globalId"in e&&!!e.globalId}function I(e){return e.every(v)}async function $(e,t,a,s={}){let n;const o="gdbVersion"in e?e.gdbVersion:null,l=s.gdbVersion??o;if((0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__/* .isEditBusLayer */ .Mk)(e)&&e.url)n=(0,_mixins_EditBusLayer_js__WEBPACK_IMPORTED_MODULE_10__/* .emitApplyEditsEvent */ .Zk)(e.url,e.layerId,l,"original-and-current-features"===s.returnServiceEditsOption);else{n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .createResolver */ .Tw)(),n.promise.then((t=>{(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length)&&e.emit("edits",t)}));const t={result:n.promise};e.emit("apply-edits",t)}try{const{results:i,edits:o}=await E(e,t,a,s),l=e=>e.filter((e=>!e.error)).map(_core_lang_js__WEBPACK_IMPORTED_MODULE_3__/* .clone */ .o8),d={edits:o,addedFeatures:l(i.addFeatureResults),updatedFeatures:l(i.updateFeatureResults),deletedFeatures:l(i.deleteFeatureResults),addedAttachments:l(i.addAttachmentResults),updatedAttachments:l(i.updateAttachmentResults),deletedAttachments:l(i.deleteAttachmentResults),exceededTransferLimit:!1,historicMoment:i.editMoment?new Date(i.editMoment):null,globalIdToObjectId:s.globalIdToObjectId};return i.editedFeatureResults?.length&&(d.editedFeatures=i.editedFeatureResults),n.resolve(d),i}catch(d){throw n.reject(d),d}}async function E(e,t,r,s){if(await e.load(),!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getEffectiveEditingEnabled */ .tk)(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:editing-disabled`,"Editing is disabled for layer",{layer:e});const{edits:i,options:n}=await S(e,r,s);return i.addFeatures?.length||i.updateFeatures?.length||i.deleteFeatures?.length||i.addAttachments?.length||i.updateAttachments?.length||i.deleteAttachments?.length?{edits:i,results:await t.applyEdits(i,n)}:{edits:i,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}async function S(e,t,r){const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getEffectiveLayerCapabilities */ .BR)(e),n=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),o=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments),l=null!=e.infoFor3D;if(V(t,i,r,!!n,!!o,`${e.type}-layer`),!i.data.isVersioned&&r?.gdbVersion)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!i.editing.supportsRollbackOnFailure&&r?.rollbackOnFailureEnabled)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");const d={...r};if(null!=d.rollbackOnFailureEnabled||i.editing.supportsRollbackOnFailure||(d.rollbackOnFailureEnabled=!0),d.rollbackOnFailureEnabled||"original-and-current-features"!==d.returnServiceEditsOption||(!1===d.rollbackOnFailureEnabled&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger("esri.layers.graphics.editingSupport").warn(`${e.type}-layer:invalid-parameter`,"'original-and-current-features' is valid for 'returnServiceEditsOption' only when 'rollBackOnFailure' is true, but 'rollBackOnFailure' was set to false. 'rollBackOnFailure' has been overwritten and set to true."),d.rollbackOnFailureEnabled=!0),!i.editing.supportsReturnServiceEditsInSourceSpatialReference&&d.returnServiceEditsInSourceSR)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"This layer does not support 'returnServiceEditsInSourceSR' parameter. See: 'capabilities.editing.supportsReturnServiceEditsInSourceSpatialReference'");if(d.returnServiceEditsInSourceSR&&"original-and-current-features"!==d.returnServiceEditsOption)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"'returnServiceEditsInSourceSR' is valid only when 'returnServiceEditsOption' is set to 'original-and-current-features'");const u=G(t,i,`${e.type}-layer`),p=r?.globalIdUsed||l,c=e.fields.filter((e=>"big-integer"===e.type||"oid"===e.type&&(e.length||0)>=8));if(p){const{globalIdField:t}=e;if(null==t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:invalid-parameter`,"Layer does not specify a global id field.");u.addFeatures.forEach((e=>T(e,t)))}u.addFeatures.forEach((t=>O(t,e,p,c))),u.updateFeatures.forEach((t=>k(t,e,p,c))),u.deleteFeatures.forEach((t=>U(t,e,p,c))),u.addAttachments.forEach((t=>L(t,e))),u.updateAttachments.forEach((t=>L(t,e))),l&&await x(u,e);return{edits:await B(u),options:d}}function R(e,t,r,s){if(r){if("attributes"in e&&!e.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,`Feature should have '${t.globalIdField}' when 'globalIdUsed' is true`);if(!("attributes"in e)&&!e.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"`'globalId' of the feature should be passed when 'globalIdUsed' is true")}if(s.length&&"attributes"in e)for(const i of s){const r=e.attributes[i.name];if(void 0!==r&&!(0,_support_fieldUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .isValidFieldValue */ .OG)(i,r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,`Big-integer field '${i.name}' of the feature must be less than ${Number.MAX_SAFE_INTEGER}`,{feature:e})}if("geometry"in e&&null!=e.geometry){if(e.geometry.hasZ&&!1===t.capabilities?.data.supportsZ)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:z-unsupported`,"Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities?.data.supportsM)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:m-unsupported`,"Layer does not support m values while feature has m values.")}}function j(e,t){if("geometry"in e&&"mesh"===e.geometry?.type&&null!=t.infoFor3D&&null!=t.spatialReference){const{geometry:r}=e,{spatialReference:s,vertexSpace:i}=r,n=t.spatialReference,o="local"===i.type,l=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isGeographic */ .EA)(n),h=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .equals */ .aI)(n,s),m=h||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isWGS84 */ .oT)(n)&&((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isWGS84 */ .oT)(s)||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isWebMercator */ .K8)(s));if(!(o&&l&&m||!o&&!l&&h))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:mesh-unsupported`,`Uploading a mesh with a ${i.type} vertex space and a spatial reference wkid:${s.wkid} to a layer with a spatial reference wkid:${n.wkid} is not supported.`)}}function O(e,t,a,r){R(e,t,a,r),j(e,t)}function U(e,t,a,r){R(e,t,a,r)}function k(e,t,r,s){R(e,t,r,s),j(e,t);const i=(0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getEffectiveLayerCapabilities */ .BR)(t);if("geometry"in e&&null!=e.geometry&&!i?.editing.supportsGeometryUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:unsupported-operation`,"Layer does not support geometry updates.")}function L(e,t){const{feature:r,attachment:s}=e;if(!r||"attributes"in r&&!r.attributes[t.globalIdField])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to a feature with 'globalId'");if(!("attributes"in r)&&!r.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have reference to 'globalId' of the parent feature");if(!s.globalId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'globalId'");if(!s.data&&!s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment should have 'data' or 'uploadId'");if(!(s.data instanceof File&&!!s.data.name)&&!s.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities?.editing.supportsUploadWithItemId&&s.uploadId)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof s.data){const e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .dataComponents */ .r$)(s.data);if(e&&!e.isBase64)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:invalid-parameter`,"Attachment 'data' should be a Blob, File or Base64 encoded string")}}function T(e,t){const{attributes:a}=e;null==a[t]&&(a[t]=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_7__/* .generateBracedUUID */ .yS)())}async function B(e){const t=e.addFeatures??[],a=e.updateFeatures??[],r=t.concat(a).map((e=>e.geometry)),s=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalizeCentralMeridian */ .el)(r),i=t.length,n=a.length;return s.slice(0,i).forEach(((e,a)=>t[a].geometry=e)),s.slice(i,i+n).forEach(((e,t)=>a[t].geometry=e)),e}function D(e){return{addFeatures:Array.from(e?.addFeatures??[]),updateFeatures:Array.from(e?.updateFeatures??[]),deleteFeatures:e&&_core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.isCollection(e.deleteFeatures)?e.deleteFeatures.toArray():e.deleteFeatures||[],addAttachments:e.addAttachments||[],updateAttachments:e.updateAttachments||[],deleteAttachments:e.deleteAttachments||[]}}function G(e,t,r){const s=D(e);if(s.addFeatures?.length&&!t.operations.supportsAdd)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support adding features.");if(s.updateFeatures?.length&&!t.operations.supportsUpdate)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support updating features.");if(s.deleteFeatures?.length&&!t.operations.supportsDelete)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${r}:unsupported-operation`,"Layer does not support deleting features.");return s.addFeatures=s.addFeatures.map(M),s.updateFeatures=s.updateFeatures.map(M),s.addAssetFeatures=[],s}function V(e,t,r,s,i,n){if(!(e&&(s||i)||r?.usingTelecomOperations))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:missing-parameters`,"'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!t.editing.supportsGlobalId&&r?.globalIdUsed&&!r.usingFeatureServiceEndpoint)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:invalid-parameter`,"This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!t.editing.supportsGlobalId&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:invalid-parameter`,"'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if(!r?.globalIdUsed&&i)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${n}:invalid-parameter`,"When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true")}function M(t){const a=new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;return t.attributes||(t.attributes={}),a.geometry=t.geometry,a.attributes=t.attributes,a}async function x(e,t){const{infoFor3D:r}=t;if(null==r)return;if(!(0,_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_13__/* .isGlbSupportedEditFormat */ .JQ)(r))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${t.type}-layer:binary-gltf-asset-not-supported`,"3DObjectFeatureLayer requires binary glTF (.glb) support for updating mesh geometry.");e.addAssetFeatures??=[];const{addAssetFeatures:s}=e;for(const a of e.addFeatures??[])z(a)&&s.push(a);for(const a of e.updateFeatures??[])z(a)&&s.push(a)}function z(e){return"mesh"===e?.geometry?.type}function q(e,t,r,s){if(!w(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-editing-support`,"Layer source does not support applyEdits capability",{layer:e});if(!t.uploadAssets)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A(`${e.type}-layer:no-asset-upload-support`,"Layer source does not support uploadAssets capability",{layer:e});return t.uploadAssets(r,s)}


/***/ }),

/***/ 5525:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B2: () => (/* binding */ T),
/* harmony export */   BW: () => (/* binding */ D),
/* harmony export */   Ch: () => (/* binding */ wt),
/* harmony export */   DF: () => (/* binding */ E),
/* harmony export */   Di: () => (/* binding */ rt),
/* harmony export */   E2: () => (/* binding */ ot),
/* harmony export */   IE: () => (/* binding */ b),
/* harmony export */   Nl: () => (/* binding */ gt),
/* harmony export */   Q4: () => (/* binding */ Gt),
/* harmony export */   Rk: () => (/* binding */ Nt),
/* harmony export */   Ux: () => (/* binding */ ut),
/* harmony export */   Ye: () => (/* binding */ X),
/* harmony export */   ZF: () => (/* binding */ ft),
/* harmony export */   eU: () => (/* binding */ tt),
/* harmony export */   eY: () => (/* binding */ ht),
/* harmony export */   hK: () => (/* binding */ xt),
/* harmony export */   jH: () => (/* binding */ mt),
/* harmony export */   jQ: () => (/* binding */ Mt),
/* harmony export */   kz: () => (/* binding */ dt),
/* harmony export */   oN: () => (/* binding */ st),
/* harmony export */   q3: () => (/* binding */ at),
/* harmony export */   qK: () => (/* binding */ $),
/* harmony export */   qN: () => (/* binding */ R),
/* harmony export */   z5: () => (/* binding */ Q),
/* harmony export */   zv: () => (/* binding */ lt)
/* harmony export */ });
/* unused harmony exports convertFromMultipoint, convertFromMultipointFeatures, convertFromPointFeatures, convertFromPolyline, convertFromPolylineFeatures, convertToFeatures, convertToMultipointFeatures, getQuantizedBoundsOptimizedGeometry, getSignedQuantizedRingArea, removeCollinearVertices, unquantizeValue, unquantizeX, unquantizeY */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57725);
/* harmony import */ var _geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46373);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2532);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(56053);
/* harmony import */ var _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85747);
/* harmony import */ var _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97011);
/* harmony import */ var _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65977);
/* harmony import */ var _data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62942);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function g(t,e){return t?e?4:3:e?3:2}const d=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.layers.graphics.featureConversionUtils"),y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryMultiPatch:3,esriGeometryEnvelope:0},p=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s},M=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2]},I=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+3]},w=(t,e,n,o,r,s)=>{t[n]=r,t[n+1]=s,t[n+2]=e[o+2],t[n+3]=e[o+3]};function G(t,e,n,o){if(t){if(n)return e&&o?w:M;if(e&&o)return I}else if(e&&o)return M;return p}function b({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function T({scale:t,translate:e},n){return Math.round((e[1]-n)/t[1])}function N({scale:t,translate:e},n){return Math.round((n-e[0])/t[0])}function P({scale:t,translate:e},n){return Math.round((n-e[1])/t[1])}function x(t,e){return Z(t,e,0)}function F(t,e){return Z(t,-e,1)}function Z({scale:t,translate:e},n,o){return n*t[o]+e[o]}function E(t,e,n){return t?e?n?v(t):z(t):n?Y(t):j(t):null}function j(t){const e=t.coords;return{x:e[0],y:e[1]}}function k(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t}function z(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2]}}function V(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t}function Y(t){const e=t.coords;return{x:e[0],y:e[1],m:e[2]}}function _(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.m,t}function v(t){const e=t.coords;return{x:e[0],y:e[1],z:e[2],m:e[3]}}function L(t,e){return t.coords[0]=e.x,t.coords[1]=e.y,t.coords[2]=e.z,t.coords[3]=e.m,t}function O(t,e,n,o){let r=j;n&&o?r=v:n?r=z:o&&(r=Y);for(const s of e){const{geometry:e,attributes:n}=s,o=null!=e?r(e):null;t.push({attributes:n,geometry:o})}return t}function S(t,e){return t&&e?L:t?V:e?_:k}function U(t,e,n,o,r){const s=S(n,o);for(const u of e){const e=null!=u.geometry?s(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,null,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function R(t,e,n=S(null!=e.z,null!=e.m)){return n(t,e)}function A(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?$(r,n,o):null});return t}function $(t,e,n){if(null==t)return null;const o=g(e,n),r=[];for(let s=0;s<t.coords.length;s+=o){const e=[];for(let n=0;n<o;n++)e.push(t.coords[s+n]);r.push(e)}return e?n?{points:r,hasZ:e,hasM:n}:{points:r,hasZ:e}:n?{points:r,hasM:n}:{points:r}}function q(t,e,n,o,r){const s=g(n,o);for(const u of e){const e=null!=u.geometry?B(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry,s):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,null,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function B(t,e,n=g(e.hasZ,e.hasM)){t.lengths[0]=e.points.length;const o=t.coords;let r=0;for(const s of e.points)for(let t=0;t<n;t++)o[r++]=s[t];return t}function C(t,e,n,o){for(const{geometry:r,attributes:s}of e)t.push({attributes:s,geometry:null!=r?D(r,n,o):null});return t}function D(t,e,n){if(!t)return null;const o=g(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{paths:u,hasZ:e,hasM:n}:{paths:u,hasZ:e}:n?{paths:u,hasM:n}:{paths:u}}function H(t,e,n,o,r){const s=g(n,o);for(const u of e){const e=null!=u.geometry?J(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.geometry,s):null,n=null!=u.centroid?R(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,u.centroid):null;t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,u.attributes,n,(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(u,r)))}return t}function J(t,e,n=g(e.hasZ,e.hasM)){const{lengths:o,coords:r}=t;let s=0;for(const u of e.paths){for(const t of u)for(let e=0;e<n;e++)r[s++]=t[e];o.push(u.length)}return t}function K(t,e,n,o){for(const{geometry:r,attributes:s,centroid:u}of e){const e=null!=r?Q(r,n,o):null;if(null!=u){const n=j(u);t.push({attributes:s,centroid:n,geometry:e})}else t.push({attributes:s,geometry:e})}return t}function Q(t,e,n){if(!t)return null;const o=g(e,n),{coords:r,lengths:s}=t,u=[];let l=0;for(const c of s){const t=[];for(let e=0;e<c;e++){const e=[];for(let t=0;t<o;t++)e.push(r[l++]);t.push(e)}u.push(t)}return e?n?{rings:u,hasZ:e,hasM:n}:{rings:u,hasZ:e}:n?{rings:u,hasM:n}:{rings:u}}function W(t,e,n,o,r){for(const s of e){const e=null!=s.geometry?X(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,s.geometry,n,o):null,u=(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(s,r);null!=s.centroid?t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,s.attributes,k(new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,s.centroid),u)):t.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(e,s.attributes,null,u))}return t}function X(t,e,n=e.hasZ,o=e.hasM){return tt(t,e.rings,n,o)}function tt(t,e,n,o){const r=g(n,o),{lengths:s,coords:u}=t;let l=0;Ft(t);for(const c of e){for(const t of c)for(let e=0;e<r;e++)u[l++]=t[e];s.push(c.length)}return t}const et=[],nt=[];function ot(t,e,n,o,r){et[0]=t;const[s]=rt(nt,et,e,n,o,r);return Zt(et),Zt(nt),s}function rt(e,n,o,r,s,u){if(Zt(e),!o){for(const t of n){const n=(0,_data_createFeatureId_js__WEBPACK_IMPORTED_MODULE_7__/* .createFeatureId */ .W)(t,u);e.push(new _OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_5__/* .OptimizedFeature */ .Om(null,t.attributes,null,n))}return e}switch(o){case"esriGeometryPoint":return U(e,n,r,s,u);case"esriGeometryMultipoint":return q(e,n,r,s,u);case"esriGeometryPolyline":return H(e,n,r,s,u);case"esriGeometryPolygon":case"esriGeometryMultiPatch":return W(e,n,r,s,u);default:d().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${o}'`)),Zt(e)}return e}function st(t,e,n,o){nt[0]=t,it(et,nt,e,n,o);const r=et[0];return Zt(et),Zt(nt),r}function ut(e,n,o){if(null==e)return null;const r=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A;if("hasZ"in e&&null==n&&(n=e.hasZ),"hasM"in e&&null==o&&(o=e.hasM),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPoint */ .fT)(e)){return S(null!=n?n:null!=e.z,null!=o?o:null!=e.m)(r,e)}return (0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolygon */ .Bi)(e)?X(r,e,n,o):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isPolyline */ .Rg)(e)?J(r,e,g(n,o)):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isMultipoint */ .U9)(e)?B(r,e,g(n,o)):void d().error("convertFromGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${e}'`))}function lt(e,n,o,r){const s=e&&("coords"in e?e:e.geometry);if(null==s)return null;switch(n){case"esriGeometryPoint":{let t=j;return o&&r?t=v:o?t=z:r&&(t=Y),t(s)}case"esriGeometryMultipoint":return $(s,o,r);case"esriGeometryPolyline":return D(s,o,r);case"esriGeometryPolygon":return Q(s,o,r);default:return d().error("convertToGeometry:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${n}'`)),null}}function ct(t,e){for(const n of e)t.push({attributes:n.attributes});return t}function it(e,n,o,r,s){if(Zt(e),null==o)return ct(e,n);switch(o){case"esriGeometryPoint":return O(e,n,r,s);case"esriGeometryMultipoint":return A(e,n,r,s);case"esriGeometryPolyline":return C(e,n,r,s);case"esriGeometryPolygon":return K(e,n,r,s);default:d().error("convertToFeatureSet:unknown-geometry",new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("internal:geometry",`Unable to parse unknown geometry type '${o}'`))}return e}function ft(t){const{spatialReference:e,transform:n,fields:o,hasM:r,hasZ:s,features:u,geometryType:l,exceededTransferLimit:c,queryGeometry:i,queryGeometryType:f}=t,a={features:it([],u,l,s,r),fields:o,geometryType:l,spatialReference:e,queryGeometry:lt(i,f,!1,!1)};return n&&(a.transform=n),c&&(a.exceededTransferLimit=c),r&&(a.hasM=r),s&&(a.hasZ=s),a}function at(t,e){const n=new _OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,{hasM:o,hasZ:r,features:s,spatialReference:u,geometryType:l,exceededTransferLimit:c,transform:i,fields:f}=t;return f&&(n.fields=f),n.geometryType=l??null,n.spatialReference=u??null,s&&rt(n.features,s,l,r,o,e),c&&(n.exceededTransferLimit=c),o&&(n.hasM=o),r&&(n.hasZ=r),i&&(n.transform=i),n}function ht(t){const{transform:e,features:n,hasM:o,hasZ:r}=t;if(!e)return t;for(const s of n)null!=s.geometry&&wt(s.geometry,s.geometry,o,r,e),null!=s.centroid&&wt(s.centroid,s.centroid,o,r,e);return t.transform=null,t}function mt(t,e){const{geometryType:n,features:o,hasM:r,hasZ:s}=e;if(!t)return e;for(let u=0;u<o.length;u++){const e=o[u],l=e.weakClone();l.geometry=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,gt(l.geometry,e.geometry,r,s,n,t),e.centroid&&(l.centroid=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,gt(l.centroid,e.centroid,r,s,"esriGeometryPoint",t)),o[u]=l}return e.transform=t,e}function gt(t,e,n,o,r,s,u=n,l=o){if(Ft(t),!e?.coords.length)return null;const c=y[r],{coords:i,lengths:f}=e,a=g(n,o),h=g(n&&u,o&&l),m=G(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,b(s,i[0]),T(s,i[1])),Ft(t,a,0),t;let d,p,M,I,w=0,N=0,P=N;for(const g of f){if(g<c)continue;let e=0;N=P,M=d=b(s,i[w]),I=p=T(s,i[w+1]),m(t.coords,i,N,w,M,I),e++,w+=a,N+=h;for(let n=1;n<g;n++,w+=a)M=b(s,i[w]),I=T(s,i[w+1]),M===d&&I===p||(m(t.coords,i,N,w,M-d,I-p),N+=h,e++,d=M,p=I);e>=c&&(t.lengths.push(e),P=N)}return Zt(t.coords,P),t.coords.length?t:null}function dt(t,e,n,o,r,s,u=n,l=o){if(Ft(t),!e?.coords.length)return null;const c=y[r],{coords:i,lengths:f}=e,a=g(n,o),h=g(n&&u,o&&l),m=G(n,o,u,l);if(!f.length)return m(t.coords,i,0,0,i[0],i[1]),Ft(t,a,0),t;let d=0;const p=s*s;for(const g of f){if(g<c){d+=g*a;continue}const e=t.coords.length/h,n=d,o=d+(g-1)*a;m(t.coords,i,t.coords.length,n,i[n],i[n+1]),pt(t.coords,i,a,p,m,n,o),m(t.coords,i,t.coords.length,o,i[o],i[o+1]);const r=t.coords.length/h-e;r>=c?t.lengths.push(r):Zt(t.coords,e*h),d+=g*a}return t.coords.length?t:null}function yt(t,e,n,o){const r=t[e],s=t[e+1],u=t[n],l=t[n+1],c=t[o],i=t[o+1];let f=u,a=l,h=c-f,m=i-a;if(0!==h||0!==m){const t=((r-f)*h+(s-a)*m)/(h*h+m*m);t>1?(f=c,a=i):t>0&&(f+=h*t,a+=m*t)}return h=r-f,m=s-a,h*h+m*m}function pt(t,e,n,o,r,s,u){let l,c=o,i=0;for(let f=s+n;f<u;f+=n)l=yt(e,f,s,u),l>c&&(i=f,c=l);c>o&&(i-s>n&&pt(t,e,n,o,r,s,i),r(t,e,t.length,i,e[i],e[i+1]),u-i>n&&pt(t,e,n,o,r,i,u))}function Mt(t,e,n,u){if(!e?.coords?.length)return null;const l=g(n,u);let c=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(e&&e.coords){const t=e.coords;for(let e=0;e<t.length;e+=l){const n=t[e],o=t[e+1];c=Math.min(c,n),f=Math.max(f,n),i=Math.min(i,o),a=Math.max(a,o)}}return (0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__.is)(t)?(0,_geometry_support_aaBoundingBox_js__WEBPACK_IMPORTED_MODULE_2__/* .fromRectValues */ .BI)(t,c,i,f,a):(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_3__/* .fromValues */ .fA)(c,i,f,a,t),t}function It(t,e,n,o){const r=g(n,o),{lengths:s,coords:u}=e;let l=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=0;for(const h of s){let t=u[a],e=u[a+1];l=Math.min(t,l),c=Math.min(e,c),i=Math.max(t,i),f=Math.max(e,f),a+=r;for(let n=1;n<h;n++,a+=r){const n=u[a],o=u[a+1];t+=n,e+=o,n<0&&(l=Math.min(l,t)),n>0&&(i=Math.max(i,t)),o<0?c=Math.min(c,e):o>0&&(f=Math.max(f,e))}}return t[0]=l,t[1]=c,t[2]=i,t[3]=f,t}function wt(t,e,o,r,s){const{coords:u,lengths:l}=e,c=g(o,r);if(!u.length)return t!==e&&Ft(t),t;(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .assertIsSome */ .Lw)(s);const{originPosition:i,scale:f,translate:a}=s,h=Et;h.originPosition=i;const m=h.scale;m[0]=f[0]??1,m[1]=-(f[1]??1),m[2]=f[2]??1,m[3]=f[3]??1;const d=h.translate;if(d[0]=a[0]??0,d[1]=a[1]??0,d[2]=a[2]??0,d[3]=a[3]??0,!l.length){for(let e=0;e<c;++e)t.coords[e]=Z(h,u[e],e);return t!==e&&Ft(t,c,0),t}let y=0;for(let n=0;n<l.length;n++){const e=l[n];t.lengths[n]=e;for(let n=0;n<c;++n)t.coords[y+n]=Z(h,u[y+n],n);let o=t.coords[y],r=t.coords[y+1];y+=c;for(let n=1;n<e;n++,y+=c){o+=u[y]*m[0],r+=u[y+1]*m[1],t.coords[y]=o,t.coords[y+1]=r;for(let e=2;e<c;++e)t.coords[y+e]=Z(h,u[y+e],e)}}return t!==e&&Ft(t,u.length,l.length),t}function Gt(t,e,n,o,r,s){if(Ft(t),t.lengths.push(...e.lengths),n===r&&o===s)for(let u=0;u<e.coords.length;u++)t.coords.push(e.coords[u]);else{const u=g(n,o),l=G(n,o,r,s),c=e.coords;for(let e=0;e<c.length;e+=u)l(t.coords,c,t.coords.length,e,c[e],c[e+1])}return t}function bt(t,e,n,o,r){if(!e?.coords?.length)return null;const s=y[n],{coords:u,lengths:l}=e,c=G(o,r,o,r),i=g(o,r);let f=0,a=0,h=0,m=0;for(const g of l){a=m,c(t.coords,u,a,f,u[f],u[f+1]),f+=i;let e=u[f],n=u[f+1],o=e,r=n,l=n/e;a+=i,c(t.coords,u,a,f,o,r),f+=i;for(let s=2;s<g;s++){e=u[f],n=u[f+1];const s=n/e,h=l===s||!isFinite(l)&&!isFinite(s),m=h&&isFinite(s)?l>=0&&s>=0||l<=0&&s<=0:r>=0&&n>=0||r<=0&&n<=0;h&&m?(o+=e,r+=n):(o=e,r=n,a+=i),c(t.coords,u,a,f,o,r),f+=i,l=s}a+=i;const d=(a-m)/i;d>=s&&(t.lengths[h]=d,m=a,h++)}return t.coords.length>m&&(t.coords.length=m),t.lengths.length>h&&(t.lengths.length=h),t.coords.length&&t.lengths.length?t:null}function Tt(t,e,n,o){let r=0,s=t[o*e],u=t[o*(e+1)];for(let l=1;l<n;l++){const n=s+t[o*(e+l)],c=u+t[o*(e+l)+1],i=(n-s)*(c+u);s=n,u=c,r+=i}return.5*r}function Nt(t,e){const{coords:n,lengths:o}=t;let r=0,s=0;for(let u=0;u<o.length;u++){const t=o[u];s+=Tt(n,r,t,e),r+=t}return Math.abs(s)}function Pt(t,e,n,o){return 0===t*o-n*e&&t*n+e*o>0}function xt(t,e,n,o,r){const s=g(o,r);if(!t.lengths.length){if(t.coords.length<2)return null;const[n,o]=t.coords,r=N(e,n),s=P(e,o);return new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A([],[r,s])}const u=new _OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A([],[0,0]),l=y[n],c="esriGeometryPolygon"===n||"esriGeometryPolyline"===n;let i=0,f=0;for(let a=0;a<t.lengths.length;a++){const n=t.lengths[a],o=f;let r=N(e,t.coords[s*i]),h=P(e,t.coords[s*i+1]);u.coords[f++]=r,u.coords[f++]=h;let m=0,g=0,d=1;for(let l=1;l<n;l++){const n=N(e,t.coords[s*(l+i)]),o=P(e,t.coords[s*(l+i)+1]);if(n!==r||o!==h){const t=n-r,e=o-h;c&&Pt(m,g,t,e)?(u.coords[f-2]+=t,u.coords[f-1]+=e,r+=t,h+=e):(u.coords[f++]=n,u.coords[f++]=o,r=n,h=o,m=t,g=e,d+=1)}}d<l?f=o:u.lengths.push(d),i+=n}return 0===u.lengths.length?null:u}function Ft(t,e=0,n=0){Zt(t.lengths,n),Zt(t.coords,e)}function Zt(t,e=0){t.length!==e&&(t.length=e)}const Et={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};


/***/ }),

/***/ 97470:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ G)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(3223);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(1874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(58823);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
var meshVertexSpaceUtils = __webpack_require__(28364);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(28936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(20857);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(5262);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshTransform.js
var MeshTransform = __webpack_require__(77873);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/editingSupport.js
var editingSupport = __webpack_require__(35393);
;// ./node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function applyEditsUtils_m(e,t,r){const{geometry:s}=t,i={...t.attributes};if(null!=r&&"mesh"===s?.type){const{transformFieldRoles:t}=r,{origin:c,spatialReference:p,vertexSpace:m}=s,f=s.transform??new MeshTransform/* default */.A,g="local"===m.type,b=e.spatialReference,y=b.isGeographic,R=(0,spatialReferenceUtils/* equals */.aI)(b,p),h=(0,projectionUtils.isEqualBaseGCS)(p,b)&&(0,projectionUtils.canProjectWithoutEngine)(p,b);if(!(g&&y&&h||!g&&!y&&R))return null;const I=(0,projectionUtils.projectWithoutEngine)(c,p,b);if(null==I)return null;if(i[t.originX]=I.x,i[t.originY]=I.y,i[t.originZ]=I.z??0,null!=f){const{translation:e,scale:r,rotation:s}=f,o=g?1:(0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(p)/(0,unitUtils/* getMetersPerCartesianUnitForSR */.KX)(b);i[t.translationX]=e[0]*o,i[t.translationY]=e[2]*o,i[t.translationZ]=-e[1]*o,i[t.scaleX]=r[0],i[t.scaleY]=r[2],i[t.scaleZ]=r[1],i[t.rotationX]=s[0],i[t.rotationY]=s[2],i[t.rotationZ]=-s[1],i[t.rotationDeg]=s[3]}return{attributes:i}}return null==s?{attributes:i}:"mesh"===s.type||"extent"===s.type?null:{geometry:s.toJSON(),attributes:i}}async function applyEditsUtils_f(e,t){const r=await Promise.all((t.addAttachments??[]).map((t=>g(e,t)))),a=await Promise.all((t.updateAttachments??[]).map((t=>g(e,t)))),s=t.deleteAttachments??[];return r.length||a.length||s.length?{adds:r,updates:a,deletes:[...s]}:null}async function g(e,t){const{feature:r,attachment:a}=t,{globalId:o,name:n,contentType:l,data:i,uploadId:u}=a,d={globalId:o};if(r&&("attributes"in r?d.parentGlobalId=r.attributes?.[e.globalIdField]:r.globalId&&(d.parentGlobalId=r.globalId)),u)d.uploadId=u;else if(i){const e=await (0,urlUtils/* parseData */._0)(i);e&&(d.contentType=e.mediaType,d.data=e.data),i instanceof File&&(d.name=i.name)}return n&&(d.name=n),l&&(d.contentType=l),d}function b(e,t,r){if(!t||0===t.length)return[];if(r&&(0,editingSupport/* isFeatureIdentifierArrayWithGlobalId */.zp)(t))return t.map((e=>e.globalId));if((0,editingSupport/* isFeatureIdentifierArrayWithObjectId */.r3)(t))return t.map((e=>e.objectId));const a=r?e.globalIdField:e.objectIdField;return a?t.map((e=>e.getAttribute(a))):[]}function y(e){const t=e?.assetMaps;if(t){for(const e of t.addResults)e.success||Logger/* default */.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`);for(const e of t.updateResults)e.success||Logger/* default */.A.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${e.globalId}.`)}const a=e?.attachments,s={addFeatureResults:e?.addResults?.map(R)??[],updateFeatureResults:e?.updateResults?.map(R)??[],deleteFeatureResults:e?.deleteResults?.map(R)??[],addAttachmentResults:a?.addResults?a.addResults.map(R):[],updateAttachmentResults:a?.updateResults?a.updateResults.map(R):[],deleteAttachmentResults:a?.deleteResults?a.deleteResults.map(R):[]};return e?.editMoment&&(s.editMoment=e.editMoment),s}function R(e){const r=!0===e.success?null:e.error||{code:void 0,description:"Feature edit failed"};return{objectId:e.objectId,globalId:e.globalId,error:r?new Error/* default */.A("feature-layer-source:edit-failure",r.description,{code:r.code}):null}}function h(t,r){return new Graphic/* default */.A({attributes:t.attributes,geometry:(0,jsonUtils/* fromJSON */.rS)({...t.geometry,spatialReference:r})})}function I(e,t){return{adds:e?.adds?.map((e=>h(e,t)))||[],updates:e?.updates?.map((e=>({original:h(e[0],t),current:h(e[1],t)})))||[],deletes:e?.deletes?.map((e=>h(e,t)))||[],spatialReference:t}}function j(e){const t=e.details.raw,r=+t.code,a=+t.extendedCode;return 500===r&&(-2147217144===a||-2147467261===a)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(77159);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js + 3 modules
var QueryTask = __webpack_require__(62781);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(52360);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/editsZScale.js
var editsZScale = __webpack_require__(29323);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/TimeExtent.js
var TimeExtent = __webpack_require__(72991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/versionManagement/support/versionManagementUtils.js
var versionManagementUtils = __webpack_require__(6893);
;// ./node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const V=new jsonMap/* JSONMap */.J({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),$=new jsonMap/* JSONMap */.J({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let G=class extends Loadable/* default */.A{constructor(e){super(e),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=(0,promiseUtils/* debounce */.sg)((async()=>{await this.load();const e=this.sourceJSON.editingInfo?.lastEditDate;if(null==e)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const t=e!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:t,updates:t?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(e){const t=this.layer.sourceJSON,s=this._fetchService(t,{...e}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,e))).then((()=>this._ensureLatestMetadata(e)));return this.addResolvingPromise(s),Promise.resolve(this)}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>{const e=this.layer;return e&&"lastEditsEventDate"in e?e.lastEditsEventDate:null}),(e=>this._handleLastEditsEventChange(e)))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:e,parsedUrl:t,gdbVersion:s,spatialReference:r,fieldsIndex:a,uniqueIdFields:i}=this.layer,n="infoFor3D"in this.layer?this.layer.infoFor3D:null,o="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,u=(0,has/* default */.A)("featurelayer-pbf")&&e?.query.supportsFormatPBF&&null==n;return new QueryTask/* default */.A({dynamicDataSource:o,fieldsIndex:a,gdbVersion:s,infoFor3D:n,pbfSupported:u,queryAttachmentsSupported:e?.operations?.supportsQueryAttachments??!1,sourceSpatialReference:r,uniqueIdFields:i,url:t.path})}async addAttachment(e,t){await this.load();const{layer:r}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/addAttachment",n=this._getLayerRequestOptions(),o=this._getFormDataForAttachment(t,n.query);try{const e=await (0,request/* default */.A)(i,{body:o});return R(e.data.addAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async updateAttachment(e,t,r){await this.load();const{layer:a}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(a,"editing");const i=e.attributes[a.objectIdField],n=a.parsedUrl.path+"/"+i+"/updateAttachment",o=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(r,o.query);try{const e=await (0,request/* default */.A)(n,{body:u});return R(e.data.updateAttachmentResult)}catch(l){throw this._createAttachmentErrorResult(i,l)}}async applyEdits(e,t){await this.load();const{layer:a}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(a,"editing");const n="infoFor3D"in a?a.infoFor3D:null,o=null!=n,u=o||(t?.globalIdUsed??!1),l=o?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,c=e.addFeatures?.map((e=>applyEditsUtils_m(this.layer,e,n)))??[],d=(await Promise.all(c)).filter(arrayUtils/* isSome */.Ru),p=e.updateFeatures?.map((e=>applyEditsUtils_m(this.layer,e,n)))??[],y=(await Promise.all(p)).filter(arrayUtils/* isSome */.Ru),h=b(this.layer,e.deleteFeatures,u);(0,editsZScale/* unapplyEditsZUnitScaling */.u)(d,y,a.spatialReference);const m=await applyEditsUtils_f(this.layer,e),f=a.capabilities.editing.supportsAsyncApplyEdits&&o,g=t?.gdbVersion||a.gdbVersion,w={gdbVersion:g,rollbackOnFailure:t?.rollbackOnFailureEnabled,useGlobalIds:u,returnEditMoment:t?.returnEditMoment,usePreviousEditMoment:t?.usePreviousEditMoment,async:f};await (0,versionManagementUtils/* isSafeToEditVersion */.ZJ)(this.layer.url,g,!0);const q=(0,versionManagementUtils/* isVersionInEditSession */.w5)(this.layer.url,g||null);if(await (0,versionManagementUtils/* isHistoricVersion */.We)(a.url,g,a.historicMoment))throw new Error/* default */.A("feature-layer-source:historic-version","Editing a historic version is not allowed");t?.returnServiceEditsOption?(w.edits=JSON.stringify([{id:a.layerId,adds:d.length?d:null,updates:y.length?y:null,deletes:h.length?h:null,attachments:m,assetMaps:l}]),w.returnServiceEditsOption=V.toJSON(t?.returnServiceEditsOption),w.returnServiceEditsInSourceSR=t?.returnServiceEditsInSourceSR):(w.adds=d.length?JSON.stringify(d):null,w.updates=y.length?JSON.stringify(y):null,w.deletes=h.length?u?JSON.stringify(h):h.join(","):null,w.attachments=m&&JSON.stringify(m),w.assetMaps=null!=l?JSON.stringify(l):void 0);const S=this._getLayerRequestOptions({method:"post",query:w});q&&(S.authMode="immediate",S.query.returnEditMoment=!0,S.query.sessionId=versionManagementUtils/* currentSessionId */.TA);const E=t?.returnServiceEditsOption?a.url:a.parsedUrl.path;let O;try{O=f?await this._asyncApplyEdits(E+"/applyEdits",S):await (0,request/* default */.A)(E+"/applyEdits",S)}catch(_){if(!j(_))throw _;S.authMode="immediate",O=f?await this._asyncApplyEdits(E+"/applyEdits",S):await (0,request/* default */.A)(E+"/applyEdits",S)}return this._createEditsResult(O)}async deleteAttachments(e,t){await this.load();const{layer:r}=this;await (0,featureLayerUtils/* ensureLayerCredential */.VA)(r,"editing");const a=e.attributes[r.objectIdField],i=r.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await (0,request/* default */.A)(i,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(R)}catch(n){throw this._createAttachmentErrorResult(a,n)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then((async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:r,url:a}=this.layer,{data:i}=await (0,request/* default */.A)(`${a}/${r}`,t),{id:n,extent:o,fullExtent:u,timeExtent:l}=i,c=o||u;return{id:n,fullExtent:c&&Extent/* default */.A.fromJSON(c),timeExtent:l&&TimeExtent.T.fromJSON({start:l[0],end:l[1]})}}))}async queryAttachments(e,t={}){await this.load();const s=this._getLayerRequestOptions(t);return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){await this.load();const s=await this.queryTask.execute(e,{...t,query:this._createRequestQueryOptions(t)});if(e.outStatistics?.length&&s.features.length){const t=new Map;if(s.features.forEach((s=>{const r=s.attributes;e.outStatistics?.forEach((({outStatisticFieldName:e})=>{if(e){const s=e.toLowerCase();s&&s in r&&e!==s&&(r[e]=r[s],delete r[s],t.set(s,e))}}))})),null!=s.fields)for(const e of s.fields){const s=t.get(e.name.toLowerCase());null!=s&&(e.name=s)}}return s}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:this._createRequestQueryOptions(t)})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopFeatures(e,t){return await this.load(),this.queryTask.executeTopFeaturesQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryAttributeBins(e,t){return await this.load(),this.queryTask.executeAttributeBinsQuery(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopObjectIds(e,t){return await this.load(),this.queryTask.executeForTopIds(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopExtents(e,t){return await this.load(),this.queryTask.executeForTopExtents(e,{...t,query:this._createRequestQueryOptions(t)})}async queryTopCount(e,t){return await this.load(),this.queryTask.executeForTopCount(e,{...t,query:this._createRequestQueryOptions(t)})}async fetchPublishingStatus(){if(!(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(this.layer.url))return"unavailable";const e=(0,urlUtils/* join */.fj)(this.layer.url,"status"),t=await (0,request/* default */.A)(e,{query:{f:"json"}});return $.fromJSON(t.data.status)}async uploadAssets(e,t){const{uploadAssets:s}=await __webpack_require__.e(/* import() */ 36197).then(__webpack_require__.bind(__webpack_require__, 36197));return s(e,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},t)}_handleLastEditsEventChange(e){const t=this.layer;if(null==e||!("capabilities"in t)||!("effectiveCapabilities"in t))return;if(!(!t.capabilities?.operations?.supportsEditing&&t.effectiveCapabilities?.operations?.supportsEditing))return;const s=t.url;if(null==s)return;"layerId"in t&&(0,urlUtils/* join */.fj)(s,t.layerId.toString());this._getOrCreateEditInterceptor(s).before=t=>{const s=t.requestOptions.method??"auto";if("auto"===s||"head"===s){const s=t.requestOptions.query??{};s._ts=e.getTime(),t.requestOptions.query=s}}}_getOrCreateEditInterceptor(e){return null==this._editInterceptor&&(this._editInterceptor={urls:e},config/* default */.A.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){null!=this._editInterceptor&&((0,arrayUtils/* remove */.TF)(config/* default */.A.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(e,t){const r=(await (0,request/* default */.A)(e,t)).data.statusUrl;for(;;){const e=(await (0,request/* default */.A)(r,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return (0,request/* default */.A)(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error/* default */.A("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error/* default */.A("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await (0,promiseUtils/* after */.Pl)(H)}}_createRequestQueryOptions(e){const t={...this.layer.customParameters,token:this.layer.apiKey,...e?.query};return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}async _fetchService(e,t){if(!e){const r={};(0,has/* default */.A)("featurelayer-advanced-symbols")&&(r.returnAdvancedSymbols=!0),t?.cacheBust&&(r._ts=Date.now());const{data:a}=await (0,request/* default */.A)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:r,signal:t?.signal}));e=a}this.layer.applyPreferredHost(e),this.sourceJSON=await this._patchServiceJSON(e,t?.signal);const r=e.type;if(!this.supportedSourceTypes.has(r))throw new Error/* default */.A("feature-layer-source:unsupported-type",`Source type "${r}" is not supported`)}async _patchServiceJSON(e,t){if("Table"!==e.type&&e.geometryType&&!e?.drawingInfo?.renderer&&!e.defaultSymbol){const t=(0,clientSideDefaults/* createDrawingInfo */.F0)(e.geometryType).renderer;(0,object/* setDeepValue */.sM)("drawingInfo.renderer",t,e)}if("esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),null==e.extent)try{const{data:r}=await (0,request/* default */.A)(this.layer.url,this._getLayerRequestOptions({signal:t}));r.spatialReference&&(e.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:r.spatialReference})}catch(r){(0,promiseUtils/* throwIfAbortError */.QP)(r)}return e}async _ensureLatestMetadata(e){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...e,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:t}=e;if(!t?.length)return null;if(await this._areAllAssetsAlreadyMapped(t))return null;const s=e.addFeatures.filter((e=>e.geometry));if(t.length!==s.length+e.updateFeatures.length)throw new Error/* default */.A("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const r=new Array,a=new Map;for(const i of t){const{geometry:e}=i,{vertexSpace:t}=e;if((0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(t))r.push(e);else{const t=e.origin,{convertMeshVertexSpace:s}=await __webpack_require__.e(/* import() */ 86053).then(__webpack_require__.bind(__webpack_require__, 86053)),n=await s(e,new MeshGeoreferencedVertexSpace/* default */.A({origin:[t.x,t.y,t.z??0]}));a.set(n,e),i.geometry=n,r.push(n)}}await this.uploadAssets(r);for(const[i,n]of a)n.addExternalSources(i.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(t),updates:[],deletes:[]}}_getAssetMapEditsJSON(e){const t=new Array,s=this.layer.globalIdField,r=this.layer.parsedUrl;for(const a of e){const e=a.geometry,{metadata:i}=e,n=i.getExternalSourcesOnService(r),o=a.getAttribute(s);if(0===n.length){Logger/* default */.A.getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:l}=n.find(External/* isOriginalExternal */.dK)??n[0];for(const s of l.assets)1===s.parts.length?t.push({globalId:(0,uuid/* generateBracedUUID */.yS)(),parentGlobalId:o,assetName:s.assetName,assetHash:s.parts[0].partHash,flags:[]}):Logger/* default */.A.getLogger(this).error(`Skipping asset ${s.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return t}_createEditsResult(e){const t=e.data,{layerId:s}=this.layer,r=[];let a=null;if(Array.isArray(t))for(const n of t)r.push({id:n.id,editedFeatures:n.editedFeatures}),n.id===s&&(a={addResults:n.addResults??[],updateResults:n.updateResults??[],deleteResults:n.deleteResults??[],attachments:n.attachments,editMoment:n.editMoment});else a=t;const i=y(a);if(r.length>0){i.editedFeatureResults=[];for(const e of r){const{editedFeatures:t}=e,s=t?.spatialReference?new SpatialReference/* default */.A(t.spatialReference):null;i.editedFeatureResults.push({layerId:e.id,editedFeatures:I(t,s)})}}return i}_createAttachmentErrorResult(e,t){const s=t.details.messages?.[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new Error/* default */.A("feature-layer-source:attachment-failure",s,{code:r})}}_getFormDataForAttachment(e,t){const s=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(s)for(const r in t){const e=t[r];null!=e&&(s.set?s.set(r,e):s.append(r,e))}return s}_getLayerRequestOptions(e={}){const{layer:t,layer:{parsedUrl:s,gdbVersion:r}}=this;return{...e,query:{gdbVersion:r,layer:"dynamicDataSource"in t&&t.dynamicDataSource?JSON.stringify({source:t.dynamicDataSource}):void 0,...s.query,f:"json",...this._createRequestQueryOptions(e)},responseType:"json"}}async _areAllAssetsAlreadyMapped(e){const{layer:t}=this,{globalIdField:s,parsedUrl:a}=t,i="infoFor3D"in t?t.infoFor3D:null;if(null==i||null==s)return!1;const n=(0,infoFor3D/* getAssetMapTable */.JZ)(i);if(null==n)return!1;const o=(0,urlUtils/* join */.fj)(a.path,`../${n.id}`),u=new Array;for(const r of e){if(!(r.geometry.metadata.getExternalSourcesOnService(a).length>0))return!1;u.push(r)}const l=u.map((e=>e.getAttribute(s))).filter(arrayUtils/* isSome */.Ru);if(0===l.length)return!1;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:d}}=i,p=new Query/* default */.A({where:`${c} IN (${l.map((e=>`'${e}'`))})`,outFields:[d,c],returnGeometry:!1}),y=await (0,executeQueryJSON/* executeQueryJSON */.s)(o,p),{features:m}=y;return 0!==m.length&&!u.some((e=>{const t=e.getAttribute(s);if(!t)return!0;const{metadata:r}=e.geometry,i=m.filter((e=>e.getAttribute(c)===t));if(0===i.length)return!0;const n=i.map((e=>e.getAttribute(d)));return r.getExternalSourcesOnService(a).flatMap((({source:e})=>e.assets.flatMap((e=>e.parts.map((e=>e.partHash)))))).some((e=>n.every((t=>e!==t))))}))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],G.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],G.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],G.prototype,"supportedSourceTypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],G.prototype,"queryTask",null),G=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.FeatureLayerSource")],G);const H=1e3;


/***/ }),

/***/ 62781:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ S)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(52360);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(95298);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeForCount.js
var executeForCount = __webpack_require__(15830);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(95254);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
;// ./node_modules/@arcgis/core/rest/query/executeForExtent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function executeForExtent_a(a,m,e){const i=(0,utils/* parseUrl */.Dl)(a),s=await (0,query/* executeQueryForExtent */.Jf)(i,Query/* default */.A.from(m),{...e}),u=s.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:Extent/* default */.A.fromJSON(u)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeForIds.js
var executeForIds = __webpack_require__(30271);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(55792);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/featureConversionUtils.js
var featureConversionUtils = __webpack_require__(5525);
;// ./node_modules/@arcgis/core/rest/query/operations/pbfJSONFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function pbfJSONFeatureSet_o(e,t){return t}function i(e,t,r,s){switch(r){case 0:return u(e,t+s,0);case 1:return"lowerLeft"===e.originPosition?u(e,t+s,1):l(e,t+s,1)}}function n(e,t,r,s){return 2===r?u(e,t,2):i(e,t,r,s)}function pbfJSONFeatureSet_a(e,t,r,s){return 2===r?0===t?0:u(e,t,3):i(e,t,r,s)}function h(e,t,r,s){return 3===r?0===t?0:u(e,t,3):n(e,t,r,s)}function u({translate:e,scale:t},r,s){return e[s]+r*t[s]}function l({translate:e,scale:t},r,s){return e[s]-r*t[s]}class d{constructor(e){this._options=e,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=pbfJSONFeatureSet_o,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const r=(0,zscale/* getGeometryZScaler */.N)(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=r)for(const t of e.features)r(t.geometry)}createSpatialReference(){return{}}addField(t,r){const s=t.fields;(0,maybe/* assertIsSome */.Lw)(s),s.push(r);const o=s.map((e=>e.name));this._attributesConstructor=function(){for(const e of o)this[e]=null}}addFeature(e,t){e.features.push(t)}prepareFeatures(e){switch(this._transform=e.transform,this._options.applyTransform&&e.transform&&(this._applyTransform=this._deriveApplyTransform(e)),this._mValueOffset=null,this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),e.geometryType){case"esriGeometryPoint":this.addCoordinate=(e,t,r)=>this.addCoordinatePoint(e,t,r),this.createGeometry=e=>this.createPointGeometry(e);break;case"esriGeometryPolygon":this.addCoordinate=(e,t,r)=>this._addCoordinatePolygon(e,t,r),this.createGeometry=e=>this._createPolygonGeometry(e);break;case"esriGeometryPolyline":this.addCoordinate=(e,t,r)=>this._addCoordinatePolyline(e,t,r),this.createGeometry=e=>this._createPolylineGeometry(e);break;case"esriGeometryMultipoint":this.addCoordinate=(e,t,r)=>this._addCoordinateMultipoint(e,t,r),this.createGeometry=e=>this._createMultipointGeometry(e)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(e,t,r){0===this._lengths.length&&(this._toAddInCurrentPath=t),this._lengths.push(t)}addQueryGeometry(e,t){const{queryGeometry:o,queryGeometryType:i}=t,n=this._transform?(0,featureConversionUtils/* unquantizeOptimizedGeometry */.Ch)(o.clone(),o,!1,!1,this._transform):o.clone(),a=(0,featureConversionUtils/* convertToGeometry */.zv)(n,i,!1,!1);e.queryGeometryType=i,e.queryGeometry={...a}}createPointGeometry(e){const t={x:0,y:0,spatialReference:e.spatialReference};return e.hasZ&&(t.z=0),e.hasM&&(t.m=0),t}addCoordinatePoint(e,t,r){const s=this._transform;switch(t=this._applyTransform(s,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:"z"in e?e.z=t:e.m=t;break;case 3:e.m=t}}_transformPathLikeValue(e,t){let r=0;t<=1&&(r=this._previousCoordinate[t],this._previousCoordinate[t]+=e);const s=this._transform;return null!==this._mValueOffset&&0===e&&t>0&&!(t%this._mValueOffset)?0:this._applyTransform(s,e,t,r)}_addCoordinatePolyline(e,t,r){this._dehydratedAddPointsCoordinate(e.paths,t,r)}_addCoordinatePolygon(e,t,r){this._dehydratedAddPointsCoordinate(e.rings,t,r)}_addCoordinateMultipoint(e,t,r){0===r&&e.points.push([]);const s=this._transformPathLikeValue(t,r);e.points[e.points.length-1].push(s)}_createPolygonGeometry(e){return{rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createPolylineGeometry(e){return{paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_createMultipointGeometry(e){return{points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}_dehydratedAddPointsCoordinate(e,t,r){0===r&&0===this._toAddInCurrentPath--&&(e.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const s=this._transformPathLikeValue(t,r),o=e[e.length-1];0===r&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),o.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=s}_deriveApplyTransform(e){const{hasZ:t,hasM:r}=e;return t&&r?h:t?n:r?pbfJSONFeatureSet_a:i}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/rest/query/executeQueryPBF.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(r,e,t,s){const p=await executeQueryPBF_n(r,a.from(e),t,s);return o.fromJSON(p)}async function executeQueryPBF_n(o,s,n,p){const i=(0,utils/* parseUrl */.Dl)(o),u={...n},m=Query/* default */.A.from(s),f=!m.quantizationParameters,{data:c}=await (0,query/* executeQueryPBF */.IJ)(i,m,new d({sourceSpatialReference:m.sourceSpatialReference,applyTransform:f}),u,p);return c}

;// ./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let S=class extends Accessor/* default */.A{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.uniqueIdFields=null,this.url=null}get parsedUrl(){return (0,urlUtils/* urlToObject */.An)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),o=null!=e.outStatistics?.[0],s=(0,has/* default */.A)("featurelayer-pbf-statistics"),i=(!o||s)&&!0!==e.returnTrueCurves;let u;if(this.pbfSupported&&i)try{u=await executeQueryPBF_n(this.url,r,t,{uniqueIdFields:this.uniqueIdFields})}catch(n){if("query:parsing-pbf"!==n.name)throw n;this.pbfSupported=!1}return this.pbfSupported&&i||(u=await (0,executeQueryJSON/* executeRawQueryJSON */.e)(this.url,r,t,{uniqueIdFields:this.uniqueIdFields})),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return FeatureSet/* default */.A.fromJSON(t);const{meshFeatureSetFromJSON:s}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 78621).then(__webpack_require__.bind(__webpack_require__, 78621)),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return (0,executeForCount/* executeForCount */.I)(this.url,this._normalizeQuery(e),t,{uniqueIdFields:this.uniqueIdFields})}executeForExtent(e,t){return executeForExtent_a(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return (0,executeForIds/* executeForIds */.V)(this.url,this._normalizeQuery(e),t,{uniqueIdFields:this.uniqueIdFields})}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63498)),__webpack_require__.e(/* import() */ 41213).then(__webpack_require__.bind(__webpack_require__, 41213))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63498)),__webpack_require__.e(/* import() */ 41213).then(__webpack_require__.bind(__webpack_require__, 41213))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 18740).then(__webpack_require__.bind(__webpack_require__, 18740)),t),u=(0,utils/* parseUrl */.Dl)(this.url);return i(u,await(this.queryAttachmentsSupported?r(u,e,t):s(u,e,t)))}async executeAttributeBinsQuery(e,t){const{executeAttributeBinsQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 68735).then(__webpack_require__.bind(__webpack_require__, 68735)),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 73304).then(__webpack_require__.bind(__webpack_require__, 50923)),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 9766).then(__webpack_require__.bind(__webpack_require__, 9766)),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 53981).then(__webpack_require__.bind(__webpack_require__, 53981)),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 52751).then(__webpack_require__.bind(__webpack_require__, 52751)),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=Query/* default */.A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?DataLayerSource/* DataLayerSource */.L.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:o}=this;if(null!=o&&this._queryIs3DObjectFormat(e)){if(t=t===e?t.clone():t,t.formatOf3DObjects=(0,infoFor3D/* getGltfQueryFormat */.Hz)(o),!t.formatOf3DObjects)throw new Error/* default */.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!(0,spatialReferenceUtils/* equals */.aI)(t.outSpatialReference,this.sourceSpatialReference))throw new Error/* default */.A("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:r,originY:s,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:l,rotationX:d,rotationY:m,rotationZ:y,rotationDeg:h}=o.transformFieldRoles;t.outFields.push(r,s,i,u,n,a,c,p,l,d,m,y,h)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],S.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],S.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"pbfSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"queryAttachmentsSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"uniqueIdFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],S.prototype,"url",void 0),S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.support.QueryTask")],S);


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

/***/ 96905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ o),
/* harmony export */   X: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56053);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(e){return{geometryType:(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getJsonType */ .$B)(e[0]),geometries:e.map((e=>e.toJSON()))}}function o(t,r,o){const n=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryType */ .xD)(r);return t.map((e=>{const t=n.fromJSON(e);return t.spatialReference=o,t}))}


/***/ }),

/***/ 49173:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(n){const o={};for(const e in n){if("declaredClass"===e)continue;const r=n[e];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){o[e]=[];for(let n=0;n<r.length;n++)o[e][n]=t(r[n])}else"object"==typeof r?r.toJSON&&(o[e]=JSON.stringify(r)):o[e]=r}return o}


/***/ }),

/***/ 15830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36321);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95254);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39609);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(s,i,m,n){const p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(s),{data:u}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForCount */ .gW)(p,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(i),m,n);return u.count}


/***/ }),

/***/ 30271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36321);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95254);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39609);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function i(i,n,u,a){const e=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(i),{data:f}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQueryForIds */ .Pk)(e,_support_Query_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.from(n),u,a);return f.objectIds??s(f.uniqueIds)??[]}function n(r){return!Array.isArray(r[0])}function s(r){if(r)return n(r)?r:r.map((r=>JSON.stringify(r)))}


/***/ }),

/***/ 500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ a),
/* harmony export */   s: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36321);
/* harmony import */ var _operations_query_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95254);
/* harmony import */ var _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74704);
/* harmony import */ var _support_Query_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39609);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function s(r,t,e,s){const n=await a(r,t,e,s);return _support_FeatureSet_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(n)}async function a(o,s,a,n){const i=(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__/* .parseUrl */ .Dl)(o),p={...a},u=_support_Query_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.from(s),{data:m}=await (0,_operations_query_js__WEBPACK_IMPORTED_MODULE_1__/* .executeQuery */ .eW)(i,u,u.sourceSpatialReference,p,n);return m}


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

/***/ 91212:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SH: () => (/* binding */ S),
/* harmony export */   ae: () => (/* binding */ h),
/* harmony export */   cn: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony export parseFieldType */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16269);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65977);
/* harmony import */ var _pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12443);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],n=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],i=["upperLeft","lowerLeft"];function o(e){return e>=a.length?null:a[e]}function c(e){return e>=n.length?null:n[e]}function l(e){return e>=i.length?null:i[e]}function g(e,t){return t>=e.geometryTypes.length?null:e.geometryTypes[t]}function p(e,t,s){const r=3,a=e.asUnsafe(),n=t.createPointGeometry(s);for(;a.next();)switch(a.tag()){case r:{const e=a.getUInt32(),s=a.pos()+e;let r=0;for(;a.pos()<s;)t.addCoordinatePoint(n,a.getSInt64(),r++);break}default:a.skip()}return n}function u(e,t,s){const r=2,a=3,n=e.asUnsafe(),i=t.createGeometry(s),o=2+(s.hasZ?1:0)+(s.hasM?1:0);for(;n.next();)switch(n.tag()){case r:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(;n.pos()<s;)t.addLength(i,n.getUInt32(),r++);break}case a:{const e=n.getUInt32(),s=n.pos()+e;let r=0;for(t.allocateCoordinates(i);n.pos()<s;)t.addCoordinate(i,n.getSInt64(),r),r++,r===o&&(r=0);break}default:n.skip()}return i}function f(e){const t=1,a=2,n=3,i=e.asUnsafe(),o=new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A;let c="esriGeometryPoint";for(;i.next();)switch(i.tag()){case a:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.lengths.push(i.getUInt32());break}case n:{const e=i.getUInt32(),t=i.pos()+e;for(;i.pos()<t;)o.coords.push(i.getSInt64());break}case t:c=_pbfOptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_3__/* .optimizedGeometryTypes */ .z[i.getEnum()];break;default:i.skip()}return{queryGeometry:o,queryGeometryType:c}}function y(e){const t=1,s=2,r=3,a=4,n=5,i=6,o=7,c=8,l=9,g=e.asUnsafe();for(;g.next();)switch(g.tag()){case t:return g.getString();case s:return g.getFloat();case r:return g.getDouble();case a:return g.getSInt32();case n:return g.getUInt32();case i:return g.getInt64();case o:return g.getUInt64();case c:return g.getSInt64();case l:return g.getBool();default:return g.skip(),null}return null}function b(e){const t=1,s=2,r=3,a=4,n=5,i=6,l=e.asUnsafe(),g={type:o(0)};for(;l.next();)switch(l.tag()){case t:g.name=l.getString();break;case s:g.type=o(l.getEnum());break;case r:g.alias=l.getString();break;case a:g.sqlType=c(l.getEnum());break;case n:l.skip();break;case i:g.defaultValue=l.getString();break;default:l.skip()}return g}function k(e){const t=1,s=2,r={},a=e.asUnsafe();for(;a.next();)switch(a.tag()){case t:r.name=a.getString();break;case s:r.isSystemMaintained=a.getBool();break;default:a.skip()}return r}function d(e,t,s,r){const a=1,n=2,i=4,o=t.createFeature(s);let c=0;for(;e.next();)switch(e.tag()){case a:{const t=r[c++].name;o.attributes[t]=e.processMessage(y);break}case n:o.geometry=e.processMessageWithArgs(u,t,s);break;case i:o.centroid=e.processMessageWithArgs(p,t,s);break;default:e.skip()}return o}function T(e){const t=1,s=2,r=3,a=4,n=[1,1,1,1],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function m(e){const t=1,s=2,r=3,a=4,n=[0,0,0,0],i=e.asUnsafe();for(;i.next();)switch(i.tag()){case t:n[0]=i.getDouble();break;case s:n[1]=i.getDouble();break;case a:n[2]=i.getDouble();break;case r:n[3]=i.getDouble();break;default:i.skip()}return n}function h(e){const t=1,s=2,r=3,a={originPosition:l(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.originPosition=l(n.getEnum());break;case s:a.scale=n.processMessage(T);break;case r:a.translate=n.processMessage(m);break;default:n.skip()}return a}function F(e){const t=1,s=2,r=3,a={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case t:a.shapeAreaFieldName=n.getString();break;case s:a.shapeLengthFieldName=n.getString();break;case r:a.units=n.getString();break;default:n.skip()}return a}function q(e,t){const s=1,r=2,a=3,n=4,i=5,o=t.createSpatialReference();for(;e.next();)switch(e.tag()){case s:o.wkid=e.getUInt32();break;case i:o.wkt=e.getString();break;case r:o.latestWkid=e.getUInt32();break;case a:o.vcsWkid=e.getUInt32();break;case n:o.latestVcsWkid=e.getUInt32();break;default:e.skip()}return o}function I(e,t){const s=1,r=2,a=3,n=4,i=5,o=7,c=8,l=9,p=10,u=11,f=12,y=13,T=15,m=t.createFeatureResult(),I=e.asUnsafe();m.geometryType=g(t,0);let U=!1;for(;I.next();)switch(I.tag()){case s:m.objectIdFieldName=I.getString();break;case a:m.globalIdFieldName=I.getString();break;case n:m.geohashFieldName=I.getString();break;case i:m.geometryProperties=I.processMessage(F);break;case o:m.geometryType=g(t,I.getEnum());break;case c:m.spatialReference=I.processMessageWithArgs(q,t);break;case p:m.hasZ=I.getBool();break;case u:m.hasM=I.getBool();break;case f:m.transform=I.processMessage(h);break;case l:m.exceededTransferLimit=I.getBool();break;case y:t.addField(m,I.processMessage(b));break;case T:U||(t.prepareFeatures(m),U=!0),t.addFeature(m,I.processMessageWithArgs(d,t,m,m.fields));break;case r:m.uniqueIdField=I.processMessage(k);break;default:I.skip()}return t.finishFeatureResult(m),m}function U(e,t){const s=1,r=4,a={};let n=null;for(;e.next();)switch(e.tag()){case r:n=e.processMessageWithArgs(f);break;case s:a.featureResult=e.processMessageWithArgs(I,t);break;default:e.skip()}return null!=n&&a.featureResult&&t.addQueryGeometry(a,n),a}function S(s,r){try{const e=2,a=new _core_pbf_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(new Uint8Array(s),new DataView(s)),n={};for(;a.next();)if(a.tag()===e)n.queryResult=a.processMessageWithArgs(U,r);else a.skip();return n}catch(a){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:a})}}


/***/ }),

/***/ 12443:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ a),
/* harmony export */   z: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67488);
/* harmony import */ var _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85747);
/* harmony import */ var _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97011);
/* harmony import */ var _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65977);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class a{constructor(e){this._options=e,this.geometryTypes=n,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new _layers_graphics_OptimizedFeatureSet_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(o){if(!o?.features||!o.hasZ||!this._options.sourceSpatialReference||!o.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(o.spatialReference,this._options.sourceSpatialReference)||o.spatialReference.vcsWkid)return;const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(this._options.sourceSpatialReference)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(o.spatialReference);if(1!==i)for(const e of o.features){if(!(0,_layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__/* .hasGeometry */ .N3)(e))continue;const t=e.geometry.coords;for(let e=2;e<t.length;e+=3)t[e]*=i}}addFeature(e,t){e.features.push(t)}createFeature(){return new _layers_graphics_OptimizedFeature_js__WEBPACK_IMPORTED_MODULE_2__/* .OptimizedFeature */ .Om(null,{},null,0)}createSpatialReference(){return{wkid:0}}createGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A}addField(e,t){e.fields.push(t)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,t)=>e+t),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,t){e.coords[this._coordinatePtr++]=t}addCoordinatePoint(e,t){e.coords.push(t)}addLength(e,t){e.lengths.push(t)}addQueryGeometry(e,t){e.queryGeometry=t.queryGeometry,e.queryGeometryType=t.queryGeometryType}createPointGeometry(){return new _layers_graphics_OptimizedGeometry_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A}}


/***/ }),

/***/ 91039:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91212);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,r){const u=(0,_pbfFeatureServiceParser_js__WEBPACK_IMPORTED_MODULE_0__/* .parseFeatureQuery */ .SH)(t,r),o=u.queryResult.featureResult,s=u.queryResult.queryGeometry,y=u.queryResult.queryGeometryType;if(o&&o.features&&o.features.length&&o.objectIdFieldName){const e=o.objectIdFieldName;for(const t of o.features)t.attributes&&(t.objectId=t.attributes[e])}return o&&(o.queryGeometry=s,o.queryGeometryType=y),o}


/***/ }),

/***/ 95254:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IJ: () => (/* binding */ f),
/* harmony export */   Jf: () => (/* binding */ O),
/* harmony export */   Pk: () => (/* binding */ p),
/* harmony export */   eW: () => (/* binding */ c),
/* harmony export */   gW: () => (/* binding */ S),
/* harmony export */   kS: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports encodeGeometry, queryToQueryStringParameters, runQuery */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19759);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56053);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43861);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67488);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49173);
/* harmony import */ var _pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(91039);
/* harmony import */ var _queryZScale_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11378);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l="Layer does not support extent calculation.";function d(e,t){if(t&&"extent"===e.type)return`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`;if(t&&"point"===e.type)return`${e.x},${e.y}`;const r=e.toJSON();return delete r.spatialReference,JSON.stringify(r)}function y(e,t,r){const i=e.geometry,a=e.toJSON();delete a.compactGeometryEnabled,delete a.defaultSpatialReferenceEnabled;const s=a;let u,l,y;if(i&&(l=i.spatialReference,y=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(l),s.geometryType=(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getJsonType */ .$B)(i),s.geometry=d(i,e.compactGeometryEnabled),s.inSR=y),a.groupByFieldsForStatistics&&(s.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(",")),a.objectIds)switch(r?.uniqueIdFields?.length){case void 0:s.objectIds=a.objectIds.join(",");break;case 1:s.uniqueIds=JSON.stringify(a.objectIds),delete s.objectIds;break;default:s.uniqueIds=JSON.stringify(a.objectIds.map((e=>JSON.parse(e)))),delete s.objectIds}if(a.orderByFields&&(s.orderByFields=a.orderByFields.join(",")),!a.outFields||!a.returnDistinctValues&&(t?.returnCountOnly||t?.returnExtentOnly||t?.returnIdsOnly)?delete s.outFields:a.outFields.includes("*")?s.outFields="*":s.outFields=a.outFields.join(","),a.outSR?(s.outSR=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .srToRESTValue */ .YX)(a.outSR),u=e.outSpatialReference):i&&(a.returnGeometry||a.returnCentroid)&&(s.outSR=s.inSR,u=l),a.returnGeometry&&delete a.returnGeometry,a.outStatistics&&(s.outStatistics=JSON.stringify(a.outStatistics)),a.fullText&&(s.fullText=JSON.stringify(a.fullText)),a.pixelSize&&(s.pixelSize=JSON.stringify(a.pixelSize)),a.quantizationParameters&&(e.defaultSpatialReferenceEnabled&&null!=l&&null!=e.quantizationParameters?.extent&&l.equals(e.quantizationParameters.extent.spatialReference)&&delete a.quantizationParameters.extent.spatialReference,s.quantizationParameters=JSON.stringify(a.quantizationParameters)),a.parameterValues&&(s.parameterValues=JSON.stringify(a.parameterValues)),a.rangeValues&&(s.rangeValues=JSON.stringify(a.rangeValues)),a.dynamicDataSource&&(s.layer=JSON.stringify({source:a.dynamicDataSource}),delete a.dynamicDataSource),a.timeExtent){const e=a.timeExtent,{start:t,end:r}=e;null==t&&null==r||(s.time=t===r?t:`${t??"null"},${r??"null"}`),delete a.timeExtent}return e.defaultSpatialReferenceEnabled&&null!=l&&null!=u&&l.equals(u)&&(s.defaultSR=s.inSR,delete s.inSR,delete s.outSR),s}async function c(e,t,r,n,i){const o=t.timeExtent?.isEmpty?{data:{features:[]}}:await g(e,t,"json",n,void 0,i);return (0,_queryZScale_js__WEBPACK_IMPORTED_MODULE_6__/* .applyFeatureSetZUnitScaling */ .q)(t,r,o.data),o}async function f(e,t,r,n,i){if(t.timeExtent?.isEmpty)return{data:r.createFeatureResult()};const o=await m(e,t,n,i),a=o;return a.data=(0,_pbfQueryUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .parsePBFFeatureQuery */ .m)(o.data,r),a}function m(e,t,r,n){return g(e,t,"pbf",r,void 0,n)}function p(e,t,r,n){return t.timeExtent?.isEmpty?Promise.resolve({data:{objectIds:[]}}):g(e,t,"json",r,{returnIdsOnly:!0},n)}function S(e,t,r,n){return t.timeExtent?.isEmpty?Promise.resolve({data:{count:0}}):g(e,t,"json",r,{returnIdsOnly:!0,returnCountOnly:!0},n)}async function O(e,t,r){if(t.timeExtent?.isEmpty)return{data:{count:0,extent:null}};const n=await g(e,t,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}),i=n.data;if(i.hasOwnProperty("extent"))return n;if(i.features)throw new Error(l);if(i.hasOwnProperty("count"))throw new Error(l);return n}function x(e,t){if(!e.returnIdsOnly||!t.uniqueIdFields)return e;const r={...e,returnUniqueIdsOnly:!0};return delete r.returnIdsOnly,r}async function g(n,o,s,u={},l={},d={}){const c="string"==typeof n?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .urlToObject */ .An)(n):n,f=o.geometry?[o.geometry]:[],m=await (0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalizeCentralMeridian */ .el)(f,null,{signal:u.signal}),p=m?.[0];null!=p&&((o=o.clone()).geometry=p);const S=(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .mapParameters */ .z)({...c.query,f:s,...x(l,d),...y(o,l,d)});return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .join */ .fj)(c.path,j(o,l)?"query3d":"query"),{...u,responseType:"pbf"===s?"array-buffer":"json",query:{...S,...u.query}})}function j(e,t){return null!=e.formatOf3DObjects&&!(t.returnCountOnly||t.returnExtentOnly||t.returnIdsOnly)}


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

/***/ 75809:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
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
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),n=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({classBreaksDef:"class-breaks-definition"})],l.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],l.prototype,"breakCount",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],l.prototype,"classificationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{read:a.read,write:a.write}})],l.prototype,"classificationMethod",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],l.prototype,"normalizationField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:n.read,write:n.write}})],l.prototype,"normalizationType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({value:null,json:{write:!0}})],l.prototype,"standardDeviationInterval",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({value:null,json:{write:!0}})],l.prototype,"definedInterval",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.rest.support.ClassBreaksDefinition")],l);


/***/ }),

/***/ 31405:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export createGenerateRendererUniqueValues */
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80861);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.rest.support.generateRendererUtils");function l(e,t){return Number(e.toFixed(t))}function n(e){const t=o(e),l=[],n=t.uniqueValues.length;for(let a=0;a<n;a++){const e=t.uniqueValues[a],n=t.valueFrequency[a],u=e.toString();l.push({value:e,count:n,label:u})}return{uniqueValues:l}}function a(e,t){const{normalizationTotal:l}=e;return{classBreaks:u(e,t),normalizationTotal:l}}function u(e,t){const n=e.definition,{classificationMethod:a,normalizationType:u,definedInterval:i}=n,c=n.breakCount??1,b=[];let V=e.values;if(0===V.length)return[];V=V.sort(((e,t)=>e-t));const[p,g]=t??[V.at(0),V.at(-1)];if("equal-interval"===a)if(V.length>=c){const e=(g-p)/c;let t=p;for(let n=1;n<c;n++){const a=l(p+n*e,6);b.push({minValue:t,maxValue:a,label:s(t,a,u)}),t=a}b.push({minValue:t,maxValue:g,label:s(t,g,u)})}else V.forEach((e=>{b.push({minValue:e,maxValue:e,label:s(e,e,u)})}));else if("natural-breaks"===a){const t=o(V),n=e.valueFrequency||t.valueFrequency,a=r(t.uniqueValues,n,c);let i=p;for(let e=1;e<c;e++)if(t.uniqueValues.length>e){const n=l(t.uniqueValues[a[e]],6);b.push({minValue:i,maxValue:n,label:s(i,n,u)}),i=n}b.push({minValue:i,maxValue:g,label:s(i,g,u)})}else if("quantile"===a)if(V.length>=c&&p!==g){let e=p,t=Math.ceil(V.length/c),l=0;for(let n=1;n<c;n++){let a=t+l-1;a>V.length&&(a=V.length-1),a<0&&(a=0),b.push({minValue:e,maxValue:V[a],label:s(e,V[a],u)}),e=V[a],l+=t,t=Math.ceil((V.length-l)/(c-n))}b.push({minValue:e,maxValue:g,label:s(e,g,u)})}else{let e=-1;for(let t=0;t<V.length;t++){const l=V[t];l!==e&&(e=l,b.push({minValue:e,maxValue:l,label:s(e,l,u)}),e=l)}}else if("standard-deviation"===a){const e=h(V),t=m(V,e);if(0===t)b.push({minValue:V[0],maxValue:V[0],label:s(V[0],V[0],u)});else{const n=f(p,g,c,e,t)*t;let a=0,o=p;for(let t=c;t>=1;t--){const r=l(e-(t-.5)*n,6);b.push({minValue:o,maxValue:r,label:s(o,r,u)}),o=r,a++}let r=l(e+.5*n,6);b.push({minValue:o,maxValue:r,label:s(o,r,u)}),o=r,a++;for(let t=1;t<=c;t++)r=a===2*c?g:l(e+(t+.5)*n,6),b.push({minValue:o,maxValue:r,label:s(o,r,u)}),o=r,a++}}else if("defined-interval"===a){if(!i)return b;const[e,n]=t??[V.at(0),V.at(-1)],a=Math.ceil((n-e)/i);let o=e;for(let t=1;t<a;t++){const n=l(e+t*i,6);b.push({minValue:o,maxValue:n,label:s(o,n,u)}),o=n}b.push({minValue:o,maxValue:n,label:s(o,n,u)})}return b}function s(e,t,l){let n=null;return n=e===t?l&&"percent-of-total"===l?e+"%":e.toString():l&&"percent-of-total"===l?e+"% - "+t+"%":e+" - "+t,n}function o(e){const t=[],l=[];let n=Number.MIN_VALUE,a=1,u=-1;for(let s=0;s<e.length;s++){const o=e[s];o===n?(a++,l[u]=a):null!==o&&(t.push(o),n=o,a=1,l.push(a),u++)}return{uniqueValues:t,valueFrequency:l}}function r(e,t,l){const n=e.length,a=[];l>n&&(l=n);for(let s=0;s<l;s++)a.push(Math.round(s*n/l-1));a.push(n-1);let u=i(a,e,t,l);return c(u.mean,u.sdcm,a,e,t,l)&&(u=i(a,e,t,l)),a}function i(e,t,l,n){let a=[],u=[],s=[],o=0;const r=[],i=[];for(let m=0;m<n;m++){const n=b(m,e,t,l);r.push(n.sbMean),i.push(n.sbSdcm),o+=i[m]}let c,f=o,h=!0;for(;h||o<f;){h=!1,a=[];for(let t=0;t<n;t++)a.push(e[t]);for(let l=0;l<n;l++)for(let a=e[l]+1;a<=e[l+1];a++)if(c=t[a],l>0&&a!==e[l+1]&&Math.abs(c-r[l])>Math.abs(c-r[l-1]))e[l]=a;else if(l<n-1&&e[l]!==a-1&&Math.abs(c-r[l])>Math.abs(c-r[l+1])){e[l+1]=a-1;break}f=o,o=0,u=[],s=[];for(let a=0;a<n;a++){u.push(r[a]),s.push(i[a]);const n=b(a,e,t,l);r[a]=n.sbMean,i[a]=n.sbSdcm,o+=i[a]}}if(o>f){for(let t=0;t<n;t++)e[t]=a[t],r[t]=u[t],i[t]=s[t];o=f}return{mean:r,sdcm:i}}function c(e,t,l,n,a,u){let s=0,o=0,r=0,i=0,c=!0;for(let f=0;f<2&&c;f++){0===f&&(c=!1);for(let f=0;f<u-1;f++)for(;l[f+1]+1!==l[f+2];){l[f+1]=l[f+1]+1;const u=b(f,l,n,a);r=u.sbMean,s=u.sbSdcm;const h=b(f+1,l,n,a);if(i=h.sbMean,o=h.sbSdcm,!(s+o<t[f]+t[f+1])){l[f+1]=l[f+1]-1;break}t[f]=s,t[f+1]=o,e[f]=r,e[f+1]=i,c=!0}for(let f=u-1;f>0;f--)for(;l[f]!==l[f-1]+1;){l[f]=l[f]-1;const u=b(f-1,l,n,a);r=u.sbMean,s=u.sbSdcm;const h=b(f,l,n,a);if(i=h.sbMean,o=h.sbSdcm,!(s+o<t[f-1]+t[f])){l[f]=l[f]+1;break}t[f-1]=s,t[f]=o,e[f-1]=r,e[f]=i,c=!0}}return c}function f(e,t,l,n,a){let u=Math.max(n-e,t-n)/a/l;return u=u>=1?1:u>=.5?.5:.25,u}function h(e){let t=0;for(let l=0;l<e.length;l++)t+=e[l];return t/=e.length,t}function m(e,t){let l=0;for(let n=0;n<e.length;n++){const a=e[n];l+=(a-t)*(a-t)}l/=e.length;return Math.sqrt(l)}function b(e,l,n,a){let u=0,s=0;for(let t=l[e]+1;t<=l[e+1];t++){const e=a[t];u+=n[t]*e,s+=e}s<=0&&t().warn("Exception in Natural Breaks calculation");const o=u/s;let r=0;for(let t=l[e]+1;t<=l[e+1];t++)r+=a[t]*(n[t]-o)**2;return{sbMean:o,sbSdcm:r}}


/***/ }),

/***/ 36321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dl: () => (/* binding */ f),
/* harmony export */   gf: () => (/* binding */ a),
/* harmony export */   jV: () => (/* binding */ s),
/* harmony export */   lF: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony export findToken */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32083);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6480);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44945);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(t,n){return n?{...n,query:{...t??{},...n.query}}:{query:t}}function f(t){return"string"==typeof t?(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(t):(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)}function u(t,n,r){const e={};for(const i in t){if("declaredClass"===i)continue;const o=t[i];if(null!=o&&"function"!=typeof o)if(Array.isArray(o))e[i]=o.map((t=>u(t)));else if("object"==typeof o)if(o.toJSON){const t=o.toJSON(r?.[i]);e[i]=n?t:JSON.stringify(t)}else e[i]=n?o:JSON.stringify(o);else e[i]=o}return e}function c(t,r){return t?r&&(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .supportsApiKey */ .Qc)(t)?r:(0,_support_apiKeyUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getApiKey */ .CG)(t)??_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id?.findCredential(t)?.token:null}async function a(r,e,i){const o=c(r,e);if(o)return o;!_kernel_js__WEBPACK_IMPORTED_MODULE_1__.id&&_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.request.useIdentity&&await __webpack_require__.e(/* import() */ 94018).then(__webpack_require__.bind(__webpack_require__, 94018));const s=await _kernel_js__WEBPACK_IMPORTED_MODULE_1__.id.getCredential(r,i);return s?.token}


/***/ }),

/***/ 76408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ U),
/* harmony export */   Ak: () => (/* binding */ L),
/* harmony export */   FM: () => (/* binding */ g),
/* harmony export */   G_: () => (/* binding */ p),
/* harmony export */   Rw: () => (/* binding */ E),
/* harmony export */   Vb: () => (/* binding */ d),
/* harmony export */   b3: () => (/* binding */ k),
/* harmony export */   gJ: () => (/* binding */ m),
/* harmony export */   jM: () => (/* binding */ P),
/* harmony export */   lv: () => (/* binding */ $),
/* harmony export */   oZ: () => (/* binding */ C),
/* harmony export */   qg: () => (/* binding */ v),
/* harmony export */   sU: () => (/* binding */ G),
/* harmony export */   z9: () => (/* binding */ f),
/* harmony export */   zS: () => (/* binding */ B)
/* harmony export */ });
/* unused harmony exports createClassBreaksDefinition, getEqualIntervalBins, statisticTypes */
/* harmony import */ var _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75809);
/* harmony import */ var _rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31405);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t="<Null>",l="equal-interval",i=1,a=5,o=10,u=/\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*/gi,r=new Set(["esriFieldTypeDate","esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeOID","esriFieldTypeBigInteger"]),s=new Set(["esriFieldTypeTimeOnly","esriFieldTypeDateOnly"]),c=["min","max","avg","stddev","count","sum","variance","nullcount","median"];function m(e){return null==e||"string"==typeof e&&!e?t:e}function d(e){const n=null!=e.normalizationField||null!=e.normalizationType,t=null!=e.minValue||null!=e.maxValue,l=!!e.sqlExpression&&e.supportsSQLExpression;return!n&&!t&&!l}function f(e){const{outStatisticTypes:n}=e,t=e.returnDistinct?[...new Set(e.values)]:e.values,l=t.filter((e=>null!=e)).sort(),i=l.length,a={count:i,min:l[0],max:l[i-1]};return e.supportsNullCount&&(a.nullcount=t.length-i),!e.percentileParams||n?.include?.length&&!n.include.includes("median")||n?.exclude?.length&&n.exclude.includes("median")||(a.median=v(t,e.percentileParams)),a}function p(e){const{values:n,useSampleStdDev:t,supportsNullCount:l,outStatisticTypes:i}=e;let a=Number.POSITIVE_INFINITY,o=Number.NEGATIVE_INFINITY,u=null,r=null,s=null,c=null,m=0;const d=null==e.minValue?-1/0:e.minValue,f=null==e.maxValue?1/0:e.maxValue;for(const v of n)Number.isFinite(v)?v>=d&&v<=f&&(u=null===u?v:u+v,a=Math.min(a,v),o=Math.max(o,v),m++):"string"==typeof v&&m++;if(m&&null!=u){r=u/m;let e=0;for(const t of n)Number.isFinite(t)&&t>=d&&t<=f&&(e+=(t-r)**2);c=t?m>1?e/(m-1):0:m>0?e/m:0,s=Math.sqrt(c)}else a=null,o=null;const p={avg:r,count:m,max:o,min:a,stddev:s,sum:u,variance:c};return l&&(p.nullcount=n.length-m),!e.percentileParams||i?.include?.length&&!i.include.includes("median")||i?.exclude?.length&&i.exclude.includes("median")||(p.median=v(n,e.percentileParams)),p}function v(e,n){const{fieldType:t,value:l,orderBy:i,isDiscrete:a}=n,o=g(t,"desc"===i);if(0===(e=[...e].filter((e=>null!=e)).sort(((e,n)=>o(e,n)))).length)return null;if(l<=0)return e[0];if(l>=1)return e[e.length-1];const u=(e.length-1)*l,r=Math.floor(u),s=r+1,c=u%1,m=e[r],d=e[s];return s>=e.length||a||"string"==typeof m||"string"==typeof d?m:m*(1-c)+d*c}function g(e,n){if(e){if(r.has(e))return N(n);if(s.has(e))return D(n,!1);if("esriFieldTypeTimestampOffset"===e)return F(n);const t=D(n,!0);if("esriFieldTypeString"===e)return t;if("esriFieldTypeGUID"===e||"esriFieldTypeGlobalID"===e)return(e,n)=>t(M(e),M(n))}const t=n?1:-1,l=N(n),i=D(n,!0),a=x(n);return(e,n)=>"number"==typeof e&&"number"==typeof n?l(e,n):"string"==typeof e&&"string"==typeof n?i(e,n):a(e,n)??t}const h=(e,n)=>null==e?null==n?0:1:null==n?-1:null,T=(e,n)=>null==e?null==n?0:-1:null==n?1:null;function x(e){return e?h:T}const y=(e,n)=>T(e,n)??(e===n?0:new Date(e).getTime()-new Date(n).getTime()),V=(e,n)=>h(e,n)??(e===n?0:new Date(n).getTime()-new Date(e).getTime());function F(e){return e?V:y}const I=(e,n)=>T(e,n)??(e===n?0:e<n?-1:1),b=(e,n)=>h(e,n)??(e===n?0:e<n?1:-1);function D(e,n){if(!n)return e?b:I;const t=x(e);return e?(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())>(n=n.toUpperCase())?-1:e<n?1:0}:(e,n)=>{const l=t(e,n);return null!=l?l:(e=e.toUpperCase())<(n=n.toUpperCase())?-1:e>n?1:0}}const z=(e,n)=>h(e,n)??n-e,S=(e,n)=>T(e,n)??e-n;function N(e){return e?z:S}function M(e){return e.slice(24,36)+e.slice(19,23)+e.slice(16,18)+e.slice(14,16)+e.slice(11,13)+e.slice(9,11)+e.slice(6,8)+e.slice(4,6)+e.slice(2,4)+e.slice(0,2)}function C(e,n,t){let l;for(l in e)n?.include?.length&&!n.include.includes(l)||n?.exclude?.length&&n.exclude.includes(l)?delete e[l]:c.includes(l)&&(Number.isFinite(e[l])||(e[l]=null));return t?(["avg","stddev","variance"].forEach((n=>{null!=e[n]&&(e[n]=Math.ceil(e[n]??0))})),e):e}function k(e){const n={};for(let t of e)(null==t||"string"==typeof t&&""===t.trim())&&(t=null),null==n[t]?n[t]={count:1,data:t}:n[t].count++;return{count:n}}function w(e){return"coded-value"!==e?.type?[]:e.codedValues.map((e=>e.code))}function $(e,n,t,l){const i=e.count,a=[];if(t&&n){const e=[],t=w(n[0]);for(const i of t)if(n[1]){const t=w(n[1]);for(const a of t)if(n[2]){const t=w(n[2]);for(const n of t)e.push(`${m(i)}${l}${m(a)}${l}${m(n)}`)}else e.push(`${m(i)}${l}${m(a)}`)}else e.push(i);for(const n of e)i.hasOwnProperty(n)||(i[n]={data:n,count:0})}for(const o in i){const e=i[o];a.push({value:e.data,count:e.count,label:e.label})}return{uniqueValueInfos:a}}function B(e,n,t,l){let i=null;switch(n){case"log":0!==e&&(i=Math.log(e)*Math.LOG10E);break;case"percent-of-total":Number.isFinite(l)&&0!==l&&(i=e/l*100);break;case"field":Number.isFinite(t)&&0!==t&&(i=e/t);break;case"natural-log":e>0&&(i=Math.log(e));break;case"square-root":e>0&&(i=e**.5)}return i}function E(e,t,l){const i=q({field:t.field,normalizationType:t.normalizationType,normalizationField:t.normalizationField,classificationMethod:t.classificationMethod,standardDeviationInterval:t.standardDeviationInterval,definedInterval:t.definedInterval,breakCount:t.numClasses||a});return e=O(e,t.minValue,t.maxValue),(0,_rest_support_generateRendererUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createGenerateRendererClassBreaks */ .t)({definition:i,values:e,normalizationTotal:t.normalizationTotal},l)}function O(e,n,t){const l=n??-1/0,i=t??1/0;return e.filter((e=>Number.isFinite(e)&&e>=l&&e<=i))}function q(n){const{breakCount:t,field:a,normalizationField:o,normalizationType:u}=n,r=n.classificationMethod||l,s="standard-deviation"===r?n.standardDeviationInterval||i:void 0,c="defined-interval"===r?n.definedInterval:void 0;return new _rest_support_ClassBreaksDefinition_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({breakCount:t,classificationField:a,classificationMethod:r,normalizationField:"field"===u?o:void 0,normalizationType:u,standardDeviationInterval:s,definedInterval:c})}function P(e,n){let t=e.classBreaks;const l=t.length,i=t[0]?.minValue,a=t[l-1]?.maxValue,o="standard-deviation"===n,r=u;return t=t.map((e=>{const n=e.label,t={minValue:e.minValue,maxValue:e.maxValue,label:n};if(o&&n){const e=n.match(r),l=e?.map((e=>+e.trim()))??[];2===l.length?(t.minStdDev=l[0],t.maxStdDev=l[1],l[0]<0&&l[1]>0&&(t.hasAvg=!0)):1===l.length&&(n.includes("<")?(t.minStdDev=null,t.maxStdDev=l[0]):n.includes(">")&&(t.minStdDev=l[0],t.maxStdDev=null))}return t})),{minValue:i,maxValue:a,classBreakInfos:t,normalizationTotal:e.normalizationTotal}}function U(e,n){const t=G(e,n);if(null==t.min&&null==t.max)return{bins:[],minValue:t.min,maxValue:t.max,normalizationTotal:n.normalizationTotal};const l=t.intervals,i=t.min??0,a=t.max??0,o=l.map(((e,n)=>({minValue:l[n][0],maxValue:l[n][1],count:0})));for(const u of e)if(null!=u&&u>=i&&u<=a){const e=L(l,u);e>-1&&o[e].count++}return{bins:o,minValue:i,maxValue:a,normalizationTotal:n.normalizationTotal}}function G(e,n,t=!1){const{field:l,classificationMethod:i,standardDeviationInterval:a,definedInterval:u,normalizationType:r,normalizationField:s,normalizationTotal:c,minValue:m,maxValue:f}=n,v=n.numBins||o;let g=null,h=null,T=null;if((!i||"equal-interval"===i)&&!r){if(null!=m&&null!=f)g=m,h=f;else{const n=p({values:e,minValue:m,maxValue:f,useSampleStdDev:!r,supportsNullCount:d({normalizationType:r,normalizationField:s,minValue:m,maxValue:f})});g=n.min??null,h=n.max??null}T=j(g??0,h??0,v)}else{const{classBreaks:n}=E(e,{field:l,normalizationType:r,normalizationField:s,normalizationTotal:c,classificationMethod:i,standardDeviationInterval:a,definedInterval:u,minValue:m,maxValue:f,numClasses:v},null!=m&&null!=f?[m,f]:void 0);g=n[0]?.minValue,h=n[n.length-1]?.maxValue,T=n.map((e=>[e.minValue,e.maxValue]))}if(t&&T.length){const e=T.at(-1)[1];T.push([e,e])}return{min:g,max:h,intervals:T}}function L(e,n){let t=-1;for(let l=e.length-1;l>=0;l--){if(n>=e[l][0]){t=l;break}}return t}function j(e,n,t){const l=(n-e)/t,i=[];let a,o=e;for(let u=1;u<=t;u++)a=o+l,a=Number(a.toFixed(16)),i.push([o,u===t?n:a]),o=a;return i}


/***/ })

};
;