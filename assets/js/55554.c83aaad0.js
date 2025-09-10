"use strict";
exports.id = 55554;
exports.ids = [55554,35393,75089,57774,97470,33173];
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

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js
var domains = __webpack_require__(55797);
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
const V=(0,fieldProperties/* defineFieldProperties */.p)();function k(e){return"object"==typeof e&&null!=e&&"itemId"in e&&"portalUrl"in e}function J(e){return"object"==typeof e&&null!=e&&"url"in e}function H(e){if(null==e)return!0;const t=Object.keys(e);return!t.length||1===t.length&&"id"===t[0]}function K(e,t,r,i){const o=e.write({},i);H(o)||(t[r]=o)}let W=class extends((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,EditBusLayer/* EditBusLayer */.w6)((0,BlendLayer/* BlendLayer */.dM)((0,OrderedLayer/* OrderedLayer */.fY)((0,TemporalLayer/* TemporalLayer */.e)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Layer/* default */.A))))))))))))))){constructor(e){super(e),this.legendEnabled=!0,this._portals=new Map,this._layerToFootprint=new WeakMap,this.drawOrderField="cd_draworder",this.dynamicGroupLayer=new v({parent:this}),this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.floorInfo=null,this.footprintLayer=new P({parent:this}),this.itemNameField="cd_itemname",this.itemSourceField="cd_itemsource",this.itemTypeField="cd_itemtype",this.layers=new Collection/* default */.A([this.dynamicGroupLayer,this.footprintLayer]),this.maxScaleField="cd_maxscale",this.minScaleField="cd_minscale",this.orderBy=null,this.outFields=null,this.supportedSourceTypes=new Set(["Catalog Layer"]),this.source=new FeatureLayerSource["default"]({layer:this,supportedSourceTypes:this.supportedSourceTypes}),this.type="catalog",this.typeIdField=null,this.types=null}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{const{url:e,source:r,portalItem:o}=this;if(!e)throw new Error/* default */.A("catalog-layer:missing-url","Catalog layer must be created with a url");if(null==this.layerId){const r=await this._fetchFirstValidLayerId(t);if(null==r)throw new Error/* default */.A("catalog-layer:missing-layerId","There is no Catalog Layer in the service",{service:e});this.layerId=r}await r.load({signal:t});const{sourceJSON:s}=r;s&&(this.sourceJSON=s,this.read(s,{origin:"service",portalItem:o,portal:o?.portal,url:this.parsedUrl}))})).then((()=>{const e=[this.itemNameField,this.itemSourceField,this.itemTypeField,this.minScaleField,this.maxScaleField],t=e.filter((e=>!this.fieldsIndex.has(e)));if(t.length)throw new Error/* default */.A("catalog-layer:missing-fields","There are missing fields to operate properly",{requiredFields:e,missingFields:t})})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}destroy(){this.footprintLayer.destroy(),this.dynamicGroupLayer.destroy();for(const e of this._portals.values())e.destroy();this._portals.clear()}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return!1}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString())),e}async applyEdits(e,t){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,t)}on(e,t){return super.on(e,t)}async createLayerFromFootprint(e){const t=await this._createLayer(e);return this._configureLayer(t,e),this._layerToFootprint.set(t,e),t}createFootprintFromLayer(e){return this._layerToFootprint.get(e)?.clone()}createQuery(){const e=new Query/* default */.A,t=this.capabilities?.query;e.returnGeometry=!0,t&&(e.compactGeometryEnabled=t.supportsCompactGeometry,e.defaultSpatialReferenceEnabled=t.supportsDefaultSpatialReference),e.outFields=["*"];const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e.where=this.definitionExpression||"1=1",e}getFeatureType(e){return (0,featureLayerUtils/* getFeatureType */.xd)(this.types,this.typeIdField,e)}getFieldDomain(e,t){const r=t?.feature,i=this.getFeatureType(r);if(i){const t=i.domains&&i.domains[e];if(t&&"inherited"!==t.type)return t}return this.getField(e)?.domain}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(Query/* default */.A.from(e)??r.createQuery(),t);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=r.footprintLayer;return i}async queryObjectIds(e,t){return(await this.load()).source.queryObjectIds(Query/* default */.A.from(e)??this.createQuery(),t)}async queryFeatureCount(e,t){return(await this.load()).source.queryFeatureCount(Query/* default */.A.from(e)??this.createQuery(),t)}async queryExtent(e,t){return(await this.load()).source.queryExtent(Query/* default */.A.from(e)??this.createQuery(),t)}serviceSupportsSpatialReference(e){return this.loaded&&(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e)}read(e,t){if(super.read(e,t),e){const{footprintLayer:r,dynamicGroupLayer:i}=e;r&&this.footprintLayer.read(r,t),i&&this.dynamicGroupLayer.read(i,t)}}async queryAttributeBins(e,t){const{source:r,capabilities:i}=await this.load();(0,featureLayerUtils/* validateBinsQuery */.ZJ)(e,i,"CatalogLayer");const o=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 14232)),s=await r.queryAttributeBins(o.default.from(e),t);if(s.features)for(const a of s.features)a.layer=a.sourceLayer=this.footprintLayer;return s}async _fetchFirstValidLayerId(e){const{data:r}=await (0,request/* default */.A)(this.url,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e});if(this.applyPreferredHost(r),Array.isArray(r?.layers))return r.layers.find((({type:e})=>this.supportedSourceTypes.has(e)))?.id}async _createLayer(e){const t=e.getAttribute(this.itemSourceField);if(!t)throw new Error/* default */.A("catalog-layer:item-source-missing",`The footprint is missing the "${this.itemSourceField}" attribute`);const r=JSON.parse(t);if(k(r)){const{itemId:e,portalUrl:t}=r,i=(0,support_urlUtils/* normalizeArcGISOnlineOrgDomain */.qG)(t),s=this.portalItem?.portal,a=Portal/* default */.A.getDefault();let n,l=!0;s&&(0,urlUtils/* hasSamePortal */.ut)(t,s.url)?n=s:(0,urlUtils/* hasSamePortal */.ut)(t,a.url)?n=a:(n=(0,MapUtils/* getOrCreateMapValue */.tE)(this._portals,i,(()=>new Portal/* default */.A({url:i}))),l=!1);const y=await Layer/* default */.A.fromPortalItem(new PortalItem["default"]({id:e,portal:n}));return l||await $(y),y}if(J(r))return Layer/* default */.A.fromArcGISServerUrl({url:r.url});const{default:s}=await __webpack_require__.e(/* import() */ 94122).then(__webpack_require__.bind(__webpack_require__, 94122));return new s}_configureLayer(e,t){const r=t.getAttribute(this.itemNameField);r&&(e.title=r);const i=t.getAttribute(this.maxScaleField);null!=i&&"maxScale"in e&&(e.maxScale=i);const o=t.getAttribute(this.minScaleField);null!=o&&"minScale"in e&&(e.minScale=o)}};async function $(e){if("portalItem"in e&&e.portalItem){try{await e.load()}catch{}e.portalItem=null,"group"===e.type&&await Promise.allSettled([...e.layers.map((e=>$(e))),...e.tables.map((e=>$(e)))])}}(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],W.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"drawOrderField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:v,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:K}}})],W.prototype,"dynamicGroupLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.elevationInfo",read:!1,write:!1}}}})],W.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({...V.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],W.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(V.fieldsIndex)],W.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.floorInfo",read:!1,write:!1}}}})],W.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:P,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0,writer:K}}})],W.prototype,"footprintLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],W.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"itemNameField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"itemSourceField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"itemTypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"layers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"]})],W.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"maxScaleField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"minScaleField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:"CatalogLayer",type:["CatalogLayer"]})],W.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{name:"layerDefinition.orderBy",write:!0,read:!0}}}})],W.prototype,"orderBy",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(V.outFields)],W.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],W.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],W.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],W.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],W.prototype,"types",void 0),W=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.CatalogLayer")],W);const z=W;


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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js + 1 modules
var QueryTask = __webpack_require__(13255);
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

/***/ 13255:
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
async function a(a,m,e){const i=(0,utils/* parseUrl */.Dl)(a),s=await (0,query/* executeQueryForExtent */.Jf)(i,Query/* default */.A.from(m),{...e}),u=s.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:s.data.count,extent:null}:{count:s.data.count,extent:Extent/* default */.A.fromJSON(u)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeForIds.js
var executeForIds = __webpack_require__(30271);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeQueryJSON.js
var executeQueryJSON = __webpack_require__(500);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/executeQueryPBF.js + 1 modules
var executeQueryPBF = __webpack_require__(27216);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/layers/graphics/sources/support/QueryTask.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let S=class extends Accessor/* default */.A{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.uniqueIdFields=null,this.url=null}get parsedUrl(){return (0,urlUtils/* urlToObject */.An)(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),o=null!=e.outStatistics?.[0],s=(0,has/* default */.A)("featurelayer-pbf-statistics"),i=(!o||s)&&!0!==e.returnTrueCurves;let u;if(this.pbfSupported&&i)try{u=await (0,executeQueryPBF/* executeRawQueryPBF */.S)(this.url,r,t,{uniqueIdFields:this.uniqueIdFields})}catch(n){if("query:parsing-pbf"!==n.name)throw n;this.pbfSupported=!1}return this.pbfSupported&&i||(u=await (0,executeQueryJSON/* executeRawQueryJSON */.e)(this.url,r,t,{uniqueIdFields:this.uniqueIdFields})),this._normalizeFields(u.fields),u}async featureSetFromJSON(e,t,r){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!t.features)return FeatureSet/* default */.A.fromJSON(t);const{meshFeatureSetFromJSON:s}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 78621).then(__webpack_require__.bind(__webpack_require__, 78621)),r);return s(e,this.infoFor3D,t)}executeForCount(e,t){return (0,executeForCount/* executeForCount */.I)(this.url,this._normalizeQuery(e),t,{uniqueIdFields:this.uniqueIdFields})}executeForExtent(e,t){return a(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return (0,executeForIds/* executeForIds */.V)(this.url,this._normalizeQuery(e),t,{uniqueIdFields:this.uniqueIdFields})}async executeRelationshipQuery(e,t){const[{default:r},{executeRelationshipQuery:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63498)),__webpack_require__.e(/* import() */ 41213).then(__webpack_require__.bind(__webpack_require__, 41213))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeRelationshipQueryForCount(e,t){const[{default:r},{executeRelationshipQueryForCount:s}]=await (0,promiseUtils/* whenOrAbort */.qr)(Promise.all([Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 63498)),__webpack_require__.e(/* import() */ 41213).then(__webpack_require__.bind(__webpack_require__, 41213))]),t);return e=r.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),s(this.url,e,t)}async executeAttachmentQuery(e,t){const{executeAttachmentQuery:r,fetchAttachments:s,processAttachmentQueryResult:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 18740).then(__webpack_require__.bind(__webpack_require__, 18740)),t),u=(0,utils/* parseUrl */.Dl)(this.url);return i(u,await(this.queryAttachmentsSupported?r(u,e,t):s(u,e,t)))}async executeAttributeBinsQuery(e,t){const{executeAttributeBinsQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 68735).then(__webpack_require__.bind(__webpack_require__, 68735)),t);return r(this.parsedUrl,e,t)}async executeTopFeaturesQuery(e,t){const{executeTopFeaturesQuery:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 73304).then(__webpack_require__.bind(__webpack_require__, 50923)),t);return r(this.parsedUrl,e,this.sourceSpatialReference,t)}async executeForTopIds(e,t){const{executeForTopIds:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 9766).then(__webpack_require__.bind(__webpack_require__, 9766)),t);return r(this.parsedUrl,e,t)}async executeForTopExtents(e,t){const{executeForTopExtents:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 53981).then(__webpack_require__.bind(__webpack_require__, 53981)),t);return r(this.parsedUrl,e,t)}async executeForTopCount(e,t){const{executeForTopCount:r}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 52751).then(__webpack_require__.bind(__webpack_require__, 52751)),t);return r(this.parsedUrl,e,t)}_normalizeQuery(e){let t=Query/* default */.A.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?DataLayerSource/* DataLayerSource */.L.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:o}=this;if(null!=o&&this._queryIs3DObjectFormat(e)){if(t=t===e?t.clone():t,t.formatOf3DObjects=(0,infoFor3D/* getGltfQueryFormat */.Hz)(o),!t.formatOf3DObjects)throw new Error/* default */.A("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(t.outSpatialReference&&!(0,spatialReferenceUtils/* equals */.aI)(t.outSpatialReference,this.sourceSpatialReference))throw new Error/* default */.A("query:unsupported-out-spatial-reference","3D object feature services do not support projection of geometries");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:r,originY:s,originZ:i,translationX:u,translationY:n,translationZ:a,scaleX:c,scaleY:p,scaleZ:l,rotationX:d,rotationY:m,rotationZ:y,rotationDeg:h}=o.transformFieldRoles;t.outFields.push(r,s,i,u,n,a,c,p,l,d,m,y,h)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],S.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],S.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"pbfSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"queryAttachmentsSupported",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"sourceSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],S.prototype,"uniqueIdFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],S.prototype,"url",void 0),S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.support.QueryTask")],S);


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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js
var domains = __webpack_require__(55797);
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
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55797);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84700);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const t of Object.keys(o))r[t]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[t]);return r}writeDomains(o,r){const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],n.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],n.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],n.prototype,"templates",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],n);


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


/***/ })

};
;