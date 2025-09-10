"use strict";
exports.id = 14822;
exports.ids = [14822];
exports.modules = {

/***/ 79207:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,r,f,n,h){o(t,r,f||0,n||t.length-1,h||a)}function o(t,a,f,n,h){for(;n>f;){if(n-f>600){var M=n-f+1,i=a-f+1,u=Math.log(M),c=.5*Math.exp(2*u/3),e=.5*Math.sqrt(u*c*(M-c)/M)*(i-M/2<0?-1:1);o(t,a,Math.max(f,Math.floor(a-i*c/M+e)),Math.min(n,Math.floor(a+(M-i)*c/M+e)),h)}var l=t[a],v=f,x=n;for(r(t,f,a),h(t[n],l)>0&&r(t,f,n);v<x;){for(r(t,v,x),v++,x--;h(t[v],l)<0;)v++;for(;h(t[x],l)>0;)x--}0===h(t[f],l)?r(t,f,x):r(t,++x,n),x<=a&&(f=x+1),a<=x&&(n=x-1)}}function r(t,o,r){var a=t[o];t[o]=t[r],t[r]=a}function a(t,o){return t<o?-1:t>o?1:0}


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

/***/ 73027:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M5: () => (/* binding */ p),
/* harmony export */   eV: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export createEmptyImageData */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62991);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49175);
/* harmony import */ var _urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19759);
/* harmony import */ var _support_base64Utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98593);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=null,o=!0;function s(t,e,r){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e)}catch(a){o=!1}return m(t,e,r)}function c(t,e,r,a){if(!e||!r)throw new Error("Cannot construct image data without dimensions");if(o)try{return new ImageData(t,e,r)}catch(i){o=!1}const n=m(e,r,a);return n.data.set(t,0),n}function f(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function m(t,e,r){return r||(r=f()),r.getContext("2d").createImageData(t,e)}async function u(a,n){const i=window.URL.createObjectURL(a);try{const{data:e}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(i,{...n,responseType:"image"});return e}catch(o){if(!(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isAbortError */ .zf)(o))throw new _Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("invalid-image",`Could not fetch requested image at ${i}`);throw o}finally{window.URL.revokeObjectURL(i)}}async function p(t,e){const{arrayBuffer:r,mediaType:a}=await d(t,e),n="image/png"===a;if("image/gif"===a){const{isAnimatedGIF:t,parseGif:a}=await __webpack_require__.e(/* import() */ 4989).then(__webpack_require__.bind(__webpack_require__, 4989));if(t(r))return a(r,e)}if(n){const{isAnimatedPNG:t,parseApng:a}=await __webpack_require__.e(/* import() */ 23034).then(__webpack_require__.bind(__webpack_require__, 23034));if(t(r))return a(r,e)}return u(new Blob([r],{type:a}),e)}async function d(e,r){const i=(0,_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .dataComponents */ .r$)(e);if(i?.isBase64)return{arrayBuffer:(0,_support_base64Utils_js__WEBPACK_IMPORTED_MODULE_4__/* .base64ToArrayBuffer */ .M)(i.data),mediaType:i.mediaType};const o=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(e,{responseType:"array-buffer",...r});return{arrayBuffer:o.data,mediaType:o.getHeader?.("Content-Type")??""}}


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

/***/ 21120:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   w: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3223);
/* harmony import */ var _compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95039);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11268);
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79207);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t=9,i){this._compareMinX=u,this._compareMinY=d,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),Y.prune(),B.prune(),w.prune(),j.prune()}all(t){r(this._data,t)}search(t,i){let n=this._data;const e=this._toBBox;if(M(t,n))for(Y.clear();n;){for(let h=0,s=n.children.length;h<s;h++){const s=n.children[h],a=n.leaf?e(s):s;M(t,a)&&(n.leaf?i(s):g(t,a)?r(s,i):Y.push(s))}n=Y.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!M(t,i))return!1;for(Y.clear();i;){for(let e=0,h=i.children.length;e<h;e++){const h=i.children[e],s=i.leaf?n(h):h;if(M(t,s)){if(i.leaf||g(t,s))return!0;Y.push(h)}}i=Y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(i){if(!i)return this;let e,h=this._data,s=null,a=0,r=!1;const o=this._toBBox(i);for(w.clear(),j.clear();h||w.length>0;){if(h||(h=w.pop(),s=w.data[w.length-1],a=j.pop()??0,r=!0),h.leaf&&(e=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(h.children,(0,_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toConst */ .zI)(i),h.children.length,h.indexHint),-1!==e))return h.children.splice(e,1),w.push(h),this._condense(w),this;r||h.leaf||!g(h,o)?s?(a++,h=s.children[a],r=!1):h=null:(w.push(h),j.push(a),a=0,s=h,h=h.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,e){const h=n-i+1;let s=this._maxEntries;if(h<=s){const e=new S(t.slice(i,n+1));return l(e,this._toBBox),e}e||(e=Math.ceil(Math.log(h)/Math.log(s)),s=Math.ceil(h/s**(e-1)));const a=new y([]);a.height=e;const r=Math.ceil(h/s),o=r*Math.ceil(Math.sqrt(s));X(t,i,n,o,this._compareMinX);for(let l=i;l<=n;l+=o){const i=Math.min(l+o-1,n);X(t,l,i,r,this._compareMinY);for(let n=l;n<=i;n+=r){const h=Math.min(n+r-1,i);a.children.push(this._build(t,n,h,e-1))}}return l(a,this._toBBox),a}_insert(t,i,n){const e=this._toBBox,h=n?t:e(t);w.clear();const s=a(h,this._data,i,w);for(s.children.push(t),m(s,h);i>=0&&w.data[i].children.length>this._maxEntries;)this._split(w,i),i--;o(h,w,i)}_split(t,i){const n=t.data[i],e=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,e);const s=this._chooseSplitIndex(n,h,e);if(!s)return;const a=n.children.splice(s,n.children.length-s),r=n.leaf?new S(a):new y(a);r.height=n.height,l(n,this._toBBox),l(r,this._toBBox),i?t.data[i-1].children.push(r):this._splitRoot(n,r)}_splitRoot(t,i){this._data=new y([t,i]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,h,s;e=h=1/0;for(let a=i;a<=n-i;a++){const i=c(t,0,a,this._toBBox),r=c(t,a,n,this._toBBox),o=p(i,r),l=f(i)+f(r);o<e?(e=o,s=a,h=l<h?l:h):o===e&&l<h&&(h=l,s=a)}return s}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:u,h=t.leaf?this._compareMinY:d;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,h)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const h=this._toBBox,s=c(t,0,i,h),a=c(t,n-i,n,h);let r=x(s)+x(a);for(let o=i;o<n-i;o++){const i=t.children[o];m(s,t.leaf?h(i):i),r+=x(s)}for(let o=n-i-1;o>=i;o--){const i=t.children[o];m(a,t.leaf?h(i):i),r+=x(a)}return r}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const h=i.data[n-1],s=h.children;s.splice((0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(s,e,s.length,h.indexHint),1)}else this.clear();else l(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,h=1/0;for(let s=0,a=i.children.length;s<a;s++){const a=i.children[s],r=f(a),o=_(t,a)-r;o<h?(h=o,e=r<e?r:e,n=a):o===h&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}function r(t,i){let e=t;for(B.clear();e;){if(!0===e.leaf)for(const t of e.children)i((0,_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toConst */ .zI)(t));else B.pushArray(e.children);e=B.pop()??null}}function o(t,i,n){for(let e=n;e>=0;e--)m(i.data[e],t)}function l(t,i){c(t,0,t.children.length,i,t)}function c(t,i,n,e,h){h||(h=new S([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=i;a<n;a++)s=t.children[a],m(h,t.leaf?e(s):s);return h}function m(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function u(t,i){return t.minX-i.minX}function d(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function x(t){return t.maxX-t.minX+(t.maxY-t.minY)}function _(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function p(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),h=Math.min(t.maxX,i.maxX),s=Math.min(t.maxY,i.maxY);return Math.max(0,h-n)*Math.max(0,s-e)}function g(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function M(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function X(t,i,n,e,s){const a=[i,n];for(;a.length;){const i=a.pop(),n=a.pop();if(i-n<=e)continue;const r=n+Math.ceil((i-n)/e/2)*e;(0,_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_4__.q)(t,r,n,i,s),a.push(n,r,r,i)}}const Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,w=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,j=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({deallocator:void 0});class E{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends E{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionHint */ .vW}}class S extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class y extends b{constructor(t){super(),this.children=t,this.leaf=!1}}


/***/ }),

/***/ 13190:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W5: () => (/* binding */ t)
});

// UNUSED EXPORTS: additionalAllowedTags, safeAttrs

;// ./node_modules/@esri/arcgis-html-sanitizer/dist/esm/index.js
/*!
 * @esri/arcgis-html-sanitizer - v4.1.0 - Tue Dec 03 2024 09:13:28 GMT-0500 (Eastern Standard Time)
 * Copyright (c) 2024 - Environmental Systems Research Institute, Inc.
 * Apache-2.0
 * 
 * js-xss
 * Copyright (c) 2012-2018 Zongmin Lei(雷宗民) <leizongmin@gmail.com>
 * http://ucdok.com
 * MIT License, see https://github.com/leizongmin/js-xss/blob/master/LICENSE for details
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var lib$1 = {exports: {}};

var _default$1 = {};

var lib = {exports: {}};

var _default = {};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList$1 () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue$1(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


_default.whiteList = getDefaultWhiteList$1();
_default.getDefaultWhiteList = getDefaultWhiteList$1;
_default.onAttr = onAttr;
_default.onIgnoreAttr = onIgnoreAttr;
_default.safeAttrValue = safeAttrValue$1;

var util$1 = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _$3 = util$1;


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle$1 (css, onAttr) {
  css = _$3.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _$3.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _$3.trim(source.slice(0, j));
        var value = _$3.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) ; else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _$3.trim(retCSS);
}

var parser$2 = parseStyle$1;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT$1 = _default;
var parseStyle = parser$2;


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull$1 (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject$1 (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS$2 (options) {
  options = shallowCopyObject$1(options || {});
  options.whiteList = options.whiteList || DEFAULT$1.whiteList;
  options.onAttr = options.onAttr || DEFAULT$1.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT$1.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT$1.safeAttrValue;
  this.options = options;
}

FilterCSS$2.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull$1(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull$1(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


var css = FilterCSS$2;

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

(function (module, exports) {
	var DEFAULT = _default;
	var FilterCSS = css;


	/**
	 * XSS过滤
	 *
	 * @param {String} css 要过滤的CSS代码
	 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
	 * @return {String}
	 */
	function filterCSS (html, options) {
	  var xss = new FilterCSS(options);
	  return xss.process(html);
	}


	// 输出
	exports = module.exports = filterCSS;
	exports.FilterCSS = FilterCSS;
	for (var i in DEFAULT) exports[i] = DEFAULT[i];
} (lib, lib.exports));

var libExports$1 = lib.exports;

var util = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  },
};

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS$1 = libExports$1.FilterCSS;
var getDefaultCSSWhiteList = libExports$1.getDefaultWhiteList;
var _$2 = util;

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width",
    ],
  };
}

var defaultCSSFilter = new FilterCSS$1();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _$2.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
// var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
  /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
  /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _$2.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _$2.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end,
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;
      _$2.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    },
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i = html.indexOf("<!--", lastPos);
    if (i === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i);
    var j = html.indexOf("-->", i);
    if (j === -1) {
      break;
    }
    lastPos = j + 3;
  }
  return retHtml;
}

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

_default$1.whiteList = getDefaultWhiteList();
_default$1.getDefaultWhiteList = getDefaultWhiteList;
_default$1.onTag = onTag;
_default$1.onIgnoreTag = onIgnoreTag;
_default$1.onTagAttr = onTagAttr;
_default$1.onIgnoreTagAttr = onIgnoreTagAttr;
_default$1.safeAttrValue = safeAttrValue;
_default$1.escapeHtml = escapeHtml;
_default$1.escapeQuote = escapeQuote;
_default$1.unescapeQuote = unescapeQuote;
_default$1.escapeHtmlEntities = escapeHtmlEntities;
_default$1.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
_default$1.clearNonPrintableCharacter = clearNonPrintableCharacter;
_default$1.friendlyAttrValue = friendlyAttrValue;
_default$1.escapeAttrValue = escapeAttrValue;
_default$1.onIgnoreTagStripAll = onIgnoreTagStripAll;
_default$1.StripTagBody = StripTagBody;
_default$1.stripCommentTag = stripCommentTag;
_default$1.stripBlankChar = stripBlankChar;
_default$1.cssFilter = defaultCSSFilter;
_default$1.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

var parser$1 = {};

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _$1 = util;

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _$1.spaceIndex(html);
  var tagName;
  if (i === -1) {
    tagName = html.slice(1, -1);
  } else {
    tagName = html.slice(1, i + 1);
  }
  tagName = _$1.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag$1(html, onTag, escapeHtml) {

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c === '"' || c === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr$1(html, onAttr) {

  var lastPos = 0;
  var lastMarkPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _$1.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastMarkPos
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _$1.trim(html.slice(lastMarkPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _$1.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_$1.trim(html.slice(lastPos))));
    }
  }

  return _$1.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findNextQuotationMark(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "'" || c === '"') return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

parser$1.parseTag = parseTag$1;
parser$1.parseAttr = parseAttr$1;

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = libExports$1.FilterCSS;
var DEFAULT = _default$1;
var parser = parser$1;
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = util;

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing,
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

function keysToLowerCase(obj) {
  var ret = {};
  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      ret[i.toLowerCase()] = obj[i].map(function (item) {
        return item.toLowerCase();
      });
    } else {
      ret[i.toLowerCase()] = obj[i];
    }
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }
  if (options.whiteList || options.allowList) {
    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
  } else {
    options.whiteList = DEFAULT.whiteList;
  }

  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag),
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

var xss = FilterXSS;

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

(function (module, exports) {
	var DEFAULT = _default$1;
	var parser = parser$1;
	var FilterXSS = xss;

	/**
	 * filter xss function
	 *
	 * @param {String} html
	 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
	 * @return {String}
	 */
	function filterXSS(html, options) {
	  var xss = new FilterXSS(options);
	  return xss.process(html);
	}

	exports = module.exports = filterXSS;
	exports.filterXSS = filterXSS;
	exports.FilterXSS = FilterXSS;

	(function () {
	  for (var i in DEFAULT) {
	    exports[i] = DEFAULT[i];
	  }
	  for (var j in parser) {
	    exports[j] = parser[j];
	  }
	})();

	// using `xss` on the WebWorker, output `filterXSS` to the globals
	function isWorkerEnv() {
	  return (
	    typeof self !== "undefined" &&
	    typeof DedicatedWorkerGlobalScope !== "undefined" &&
	    self instanceof DedicatedWorkerGlobalScope
	  );
	}
	if (isWorkerEnv()) {
	  self.filterXSS = module.exports;
	} 
} (lib$1, lib$1.exports));

var libExports = lib$1.exports;

/**
 * Determine if the value is a plain object.
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 */
var isPlainObject = function (value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    if (Object.prototype.toString.call(value) !== "[object Object]") {
        return false;
    }
    var proto = Object.getPrototypeOf(value);
    if (proto === null) {
        return true;
    }
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(value) === proto;
};

/**
 * The Sanitizer Class
 *
 * @export
 * @class Sanitizer
 */
var Sanitizer = /** @class */ (function () {
    function Sanitizer(filterOptions, extendDefaults) {
        var _this = this;
        // Supported HTML Spec: https://doc.arcgis.com/en/arcgis-online/reference/supported-html.htm
        this.arcgisWhiteList = {
            a: ["href", "style", "target"],
            abbr: ["title"],
            article: ["style"],
            aside: ["style"],
            audio: ["autoplay", "controls", "loop", "muted", "preload"],
            b: [],
            blockquote: ["style"],
            br: [],
            code: ["style"],
            dd: ["style"],
            del: ["style"],
            details: ["open", "style"],
            div: ["align", "aria-hidden", "aria-label", "style"],
            dl: ["style"],
            dt: ["style"],
            em: [],
            figcaption: ["style"],
            figure: ["style"],
            font: ["color", "face", "size", "style"],
            footer: ["style"],
            h1: ["style"],
            h2: ["style"],
            h3: ["style"],
            h4: ["style"],
            h5: ["style"],
            h6: ["style"],
            header: ["style"],
            hr: [],
            i: [],
            img: ["alt", "border", "height", "src", "style", "width"],
            li: [],
            main: ["style"],
            mark: ["style"],
            nav: ["style"],
            ol: [],
            p: ["style"],
            pre: ["style"],
            section: ["style"],
            source: ["media", "src", "type"],
            span: ["aria-hidden", "aria-label", "style"],
            strong: [],
            sub: ["style"],
            summary: ["style"],
            sup: ["style"],
            table: ["border", "cellpadding", "cellspacing", "height", "style", "width"],
            tbody: [],
            tr: ["align", "height", "style", "valign"],
            td: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width",
            ],
            th: [
                "align",
                "colspan",
                "height",
                "nowrap",
                "rowspan",
                "style",
                "valign",
                "width",
            ],
            time: ["style"],
            u: [],
            ul: [],
            video: [
                "autoplay",
                "controls",
                "height",
                "loop",
                "muted",
                "poster",
                "preload",
                "width",
            ],
        };
        this.arcgisCSSWhiteList = __assign(__assign({}, libExports.getDefaultCSSWhiteList()), { "align-items": true, "align-self": true, "flex": true, "flex-basis": true, "flex-direction": true, "flex-flow": true, "flex-grow": true, "flex-shrink": true, "flex-wrap": true, "float": true, "gap": true, "grid": true, "grid-area": true, "grid-auto-columns": true, "grid-auto-flow": true, "grid-auto-rows": true, "grid-column": true, "grid-column-end": true, "grid-column-start": true, "grid-row": true, "grid-row-end": true, "grid-row-start": true, "grid-template": true, "grid-template-areas": true, "grid-template-columns": true, "grid-template-rows": true, "justify-content": true, "justify-items": true, "justify-self": true, "line-height": true, "overflow": true });
        this.allowedProtocols = [
            "http",
            "https",
            "mailto",
            "iform",
            "tel",
            "flow",
            "lfmobile",
            "arcgis-navigator",
            "arcgis-appstudio-player",
            "arcgis-survey123",
            "arcgis-collector",
            "arcgis-workforce",
            "arcgis-explorer",
            "arcgis-trek2there",
            "arcgis-quickcapture",
            "mspbi",
            "comgooglemaps",
            "pdfefile",
            "pdfehttp",
            "pdfehttps",
            "boxapp",
            "boxemm",
            "awb",
            "awbs",
            "gropen",
            "radarscope",
        ];
        this.arcgisFilterOptions = {
            allowCommentTag: true,
            safeAttrValue: function (tag, name, value, cssFilter) {
                // Take over safe attribute filtering for `a` `href`, `img` `src`,
                // and `source` `src` attributes, otherwise pass onto the
                // default `XSS.safeAttrValue` method.
                if ((tag === "a" && name === "href") ||
                    ((tag === "img" || tag === "source") && name === "src")) {
                    return _this.sanitizeUrl(value);
                }
                return libExports.safeAttrValue(tag, name, value, cssFilter);
            },
        };
        this._entityMap = {
            "&": "&#x38;",
            "<": "&#x3C;",
            ">": "&#x3E;",
            '"': "&#x22;",
            "'": "&#x27;",
            "/": "&#x2F;",
        };
        var xssFilterOptions;
        if (filterOptions && !extendDefaults) {
            // Override the defaults
            xssFilterOptions = filterOptions;
        }
        else if (filterOptions && extendDefaults) {
            // Extend the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
            Object.keys(filterOptions).forEach(function (key) {
                if (key === "whiteList") {
                    // Extend the whitelist by concatenating arrays
                    xssFilterOptions.whiteList = _this._extendObjectOfArrays([
                        _this.arcgisWhiteList,
                        filterOptions.whiteList || {},
                    ]);
                }
                else if (key === "css") {
                    var cssExtensions_1 = filterOptions.css.whiteList;
                    if (cssExtensions_1 != null && filterOptions.css instanceof Object) {
                        Object.keys(cssExtensions_1).forEach(function (attr) {
                            return (xssFilterOptions.css.whiteList[attr] =
                                cssExtensions_1[attr]);
                        });
                    }
                }
                else {
                    xssFilterOptions[key] = filterOptions[key];
                }
            });
        }
        else {
            // Only use the defaults
            xssFilterOptions = Object.create(this.arcgisFilterOptions);
            xssFilterOptions.whiteList = this.arcgisWhiteList;
            xssFilterOptions.css = { whiteList: this.arcgisCSSWhiteList };
        }
        this.xssFilterOptions = xssFilterOptions;
        // Make this readable to tests
        this._xssFilter = new libExports.FilterXSS(xssFilterOptions);
    }
    /**
     * Sanitizes value to remove invalid HTML tags.
     *
     * Note: If the value passed does not contain a valid JSON data type (String,
     * Number, JSON Object, Array, Boolean, or null), the value will be nullified.
     *
     * @param {any} value The value to sanitize.
     * @returns {any} The sanitized value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitize = function (value, options) {
        if (options === void 0) { options = {}; }
        switch (typeof value) {
            case "number":
                if (isNaN(value) || !isFinite(value)) {
                    return null;
                }
                return value;
            case "boolean":
                return value;
            case "string":
                return this._xssFilter.process(value);
            case "object":
                return this._iterateOverObject(value, options);
            default:
                if (options.allowUndefined && typeof value === "undefined") {
                    return;
                }
                return null;
        }
    };
    /**
     * Sanitizes a URL string following the allowed protocols and sanitization rules.
     *
     * @param {string} value The URL to sanitize.
     * @param {{ isProtocolRequired: boolean }} options Configuration options for URL checking.
     * @returns {string} The sanitized URL if it's valid, or an empty string if the URL is invalid.
     */
    Sanitizer.prototype.sanitizeUrl = function (value, options) {
        var _a = (options !== null && options !== void 0 ? options : {}).isProtocolRequired, isProtocolRequired = _a === void 0 ? true : _a;
        var protocol = this._trim(value.substring(0, value.indexOf(":")));
        var isRootUrl = value === "/";
        var isUrlFragment = /^#/.test(value);
        var isValidProtocol = protocol && this.allowedProtocols.indexOf(protocol.toLowerCase()) > -1;
        if (isRootUrl || isUrlFragment || isValidProtocol) {
            return libExports.escapeAttrValue(value);
        }
        if (!protocol && !isProtocolRequired) {
            return libExports.escapeAttrValue("https://".concat(value));
        }
        return "";
    };
    /**
     * Sanitizes an HTML attribute value.
     *
     * @param {string} tag The tagname of the HTML element.
     * @param {string} attribute The attribute name of the HTML element.
     * @param {string} value The raw value to be used for the HTML attribute value.
     * @param {XSS.ICSSFilter} [cssFilter] The CSS filter to be used.
     * @returns {string} The sanitized attribute value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.sanitizeHTMLAttribute = function (tag, attribute, value, cssFilter) {
        // use the custom safeAttrValue function if provided
        if (typeof this.xssFilterOptions.safeAttrValue === "function") {
            return this.xssFilterOptions.safeAttrValue(tag, attribute, value, 
            // @ts-expect-error safeAttrValue does handle undefined cssFilter
            cssFilter);
        }
        // otherwise use the default
        // @ts-ignore safeAttrValue does handle undefined cssFilter
        return libExports.safeAttrValue(tag, attribute, value, cssFilter);
    };
    /**
     * Checks if a value only contains valid HTML.
     *
     * @param {any} value The value to validate.
     * @returns {boolean}
     * @memberof Sanitizer
     */
    Sanitizer.prototype.validate = function (value, options) {
        if (options === void 0) { options = {}; }
        var sanitized = this.sanitize(value, options);
        return {
            isValid: value === sanitized,
            sanitized: sanitized,
        };
    };
    /**
     * Encodes the following characters, `& < > \" ' /` to their hexadecimal HTML entity code.
     * Example: "&middot;" => "&#x38;middot;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.encodeHTML = function (value) {
        var _this = this;
        return String(value).replace(/[&<>"'\/]/g, function (s) {
            return _this._entityMap[s];
        });
    };
    /**
     * Encodes all non-alphanumeric ASCII characters to their hexadecimal HTML entity codes.
     * Example: "alert(document.cookie)" => "alert&#x28;document&#x2e;cookie&#x29;"
     *
     * @param {string} value The value to encode.
     * @returns {string} The encoded string value.
     * @memberof Sanitizer
     */
    Sanitizer.prototype.encodeAttrValue = function (value) {
        var alphanumericRE = /^[a-zA-Z0-9]$/;
        return String(value).replace(/[\x00-\xFF]/g, function (c, idx) {
            return !alphanumericRE.test(c)
                ? "&#x".concat(Number(value.charCodeAt(idx)).toString(16), ";")
                : c;
        });
    };
    /**
     * Extends an object of arrays by by concatenating arrays of the same object
     * keys. If the if the previous key's value is not an array, the next key's
     * value will replace the previous key. This method is used for extending the
     * whiteList in the XSS filter options.
     *
     * @private
     * @param {Array<{}>} objects An array of objects.
     * @returns {{}} The extended object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._extendObjectOfArrays = function (objects) {
        var finalObj = {};
        objects.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (Array.isArray(obj[key]) && Array.isArray(finalObj[key])) {
                    finalObj[key] = finalObj[key].concat(obj[key]);
                }
                else {
                    finalObj[key] = obj[key];
                }
            });
        });
        return finalObj;
    };
    /**
     * Iterate over a plain object or array to deeply sanitize each value.
     *
     * @private
     * @param {object} obj The object to iterate over.
     * @returns {(object | null)} The sanitized object.
     * @memberof Sanitizer
     */
    Sanitizer.prototype._iterateOverObject = function (obj, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        try {
            var hasChanged_1 = false;
            var changedObj = void 0;
            if (Array.isArray(obj)) {
                changedObj = obj.reduce(function (prev, value) {
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        return prev.concat([value]);
                    }
                    else {
                        hasChanged_1 = true;
                        return prev.concat([validation.sanitized]);
                    }
                }, []);
            }
            else if (!isPlainObject(obj)) {
                if (options.allowUndefined && typeof obj === "undefined") {
                    return;
                }
                return null;
            }
            else {
                var keys = Object.keys(obj);
                changedObj = keys.reduce(function (prev, key) {
                    var value = obj[key];
                    var validation = _this.validate(value, options);
                    if (validation.isValid) {
                        prev[key] = value;
                    }
                    else {
                        hasChanged_1 = true;
                        prev[key] = validation.sanitized;
                    }
                    return prev;
                }, {});
            }
            if (hasChanged_1) {
                return changedObj;
            }
            return obj;
        }
        catch (err) {
            return null;
        }
    };
    /**
     * Trim whitespace from the start and ends of a string.
     * @param {string} val The string to trim.
     * @returns {string} The trimmed string.
     */
    Sanitizer.prototype._trim = function (val) {
        // @ts-ignore This is used by Jest,
        // but TypeScript errors since it assumes `trim` is always available.
        return String.prototype.trim
            ? val.trim()
            : val.replace(/(^\s*)|(\s*$)/g, "");
    };
    return Sanitizer;
}());



;// ./node_modules/@arcgis/core/core/sanitizerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["dd","dl","dt","h1","h2","h3","h4","h5","h6","sub","sup",...["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]],i=a.reduce(((e,a)=>(e[a]=[],e)),{}),r=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","d","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"],t=new Sanitizer({whiteList:i,onTagAttr:(e,a,i)=>{const t=`${a}="${i}"`;if(r.includes(a))return t},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0);


/***/ }),

/***/ 36176:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b3: () => (/* binding */ a),
/* harmony export */   jZ: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony export CutVertical */
/* harmony import */ var _core_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46030);
/* harmony import */ var _aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2532);
/* harmony import */ var _boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70040);
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11021);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56053);
/* harmony import */ var _normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75981);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67488);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(t){return f(t,!0)}function a(t){return f(t,!1)}function f(i,n){if(null==i)return null;const p=i.spatialReference,a=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getInfo */ .Vp)(p),f=(0,_core_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isSerializable */ .W)(i)?i.toJSON():i;if(!a)return f;const I=(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .isWebMercator */ .K8)(p)?102100:4326,g=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .cutParams */ .j7[I].maxX,v=_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .cutParams */ .j7[I].minX;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .isPoint */ .fT)(f))return y(f,g,v);if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .isMultipoint */ .U9)(f))return f.points=f.points.map((t=>y(t,g,v))),f;if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .isExtent */ .ZC)(f))return d(f,a);if((0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .isPolygon */ .Bi)(f)||(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .isPolyline */ .Rg)(f)){const t=(0,_boundsUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getBoundsXY */ .Rg)(T,f),i={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},e=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .offsetMagnitude */ .kd)(i.xmin,v)*(2*g),h=0===e?f:(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .updatePolyGeometry */ .kS)(f,e);return i.xmin+=e,i.xmax+=e,i.xmax>g?C(h,g,n):i.xmin<v?C(h,v,n):h}return f}function d(t,i){if(!i)return t;const s=I(t,i).map((t=>t.extent));return s.length<2?s[0]||t:s.length>2?(t.xmin=i.valid[0],t.xmax=i.valid[1],t):{rings:s.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function y(t,i,s){if(Array.isArray(t)){const n=t[0];if(n>i){const s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .offsetMagnitude */ .kd)(n,i);t[0]=n+s*(-2*i)}else if(n<s){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .offsetMagnitude */ .kd)(n,s);t[0]=n+i*(-2*s)}}else{const n=t.x;if(n>i){const s=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .offsetMagnitude */ .kd)(n,i);t.x+=s*(-2*i)}else if(n<s){const i=(0,_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_4__/* .offsetMagnitude */ .kd)(n,s);t.x+=i*(-2*s)}}return t}function I(t,i){const s=[],{ymin:n,ymax:e,xmin:h,xmax:o}=t,u=t.xmax-t.xmin,[r,m]=i.valid,{x,frameId:l}=g(t.xmin,i),{x:_,frameId:c}=g(t.xmax,i),p=x===_&&u>0;if(u>2*m){const t={xmin:h<o?x:_,ymin:n,xmax:m,ymax:e},i={xmin:r,ymin:n,xmax:h<o?_:x,ymax:e},u={xmin:0,ymin:n,xmax:m,ymax:e},p={xmin:r,ymin:n,xmax:0,ymax:e},a=[],f=[];v(t,u)&&a.push(l),v(t,p)&&f.push(l),v(i,u)&&a.push(c),v(i,p)&&f.push(c);for(let s=l+1;s<c;s++)a.push(s),f.push(s);s.push(new P(t,[l]),new P(i,[c]),new P(u,a),new P(p,f))}else x>_||p?s.push(new P({xmin:x,ymin:n,xmax:m,ymax:e},[l]),new P({xmin:r,ymin:n,xmax:_,ymax:e},[c])):s.push(new P({xmin:x,ymin:n,xmax:_,ymax:e},[l]));return s}function g(t,i){const[s,n]=i.valid,e=2*n;let h,o=0;return t>n?(h=Math.ceil(Math.abs(t-n)/e),t-=h*e,o=h):t<s&&(h=Math.ceil(Math.abs(t-s)/e),t+=h*e,o=-h),{x:t,frameId:o}}function v(t,i){const{xmin:s,ymin:n,xmax:e,ymax:h}=i;return O(t,s,n)&&O(t,s,h)&&O(t,e,h)&&O(t,e,n)}function O(t,i,s){return i>=t.xmin&&i<=t.xmax&&s>=t.ymin&&s<=t.ymax}function C(t,i,s=!0){const e=!(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .isPolyline */ .Rg)(t);if(e&&(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .closeRings */ .m3)(t),s){return(new S).cut(t,i)}const h=e?t.rings:t.paths,o=e?4:2,u=h.length,m=-2*i;for(let n=0;n<u;n++){const t=h[n];if(t&&t.length>=o){const i=[];for(const s of t)i.push([s[0]+m,s[1]]);h.push(i)}}return e?t.rings=h:t.paths=h,t}class P{constructor(t,i){this.extent=t,this.frameIds=i}}const T=(0,_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)();class S{constructor(){this._linesIn=[],this._linesOut=[]}cut(t,i){let s;if(this._xCut=i,t.rings)this._closed=!0,s=t.rings,this._minPts=4;else{if(!t.paths)return null;this._closed=!1,s=t.paths,this._minPts=2}for(const e of s){if(!e||e.length<this._minPts)continue;let t=!0;for(const i of e)t?(this.moveTo(i),t=!1):this.lineTo(i);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),s=[];for(const e of this._linesIn)e&&e.length>=this._minPts&&s.push(e);const n=-2*this._xCut;for(const e of this._linesOut)if(e&&e.length>=this._minPts){for(const t of e)t[0]+=n;s.push(e)}return this._closed?t.rings=s:t.paths=s,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const i=this._side(t[0]);if(i*this._prevSide===-1){const s=this._intersect(this._prevPt,t);this._lineTo(this._xCut,s,0),this._prevSide=0,this._lineTo(t[0],t[1],i)}else this._lineTo(t[0],t[1],i);this._prevSide=i,this._prevPt=t}close(){const t=this._firstPt,i=this._prevPt;t[0]===i[0]&&t[1]===i[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(t,i,s){this._closed?(this._lineIn.push([s<=0?t:this._xCut,i]),this._lineOut.push([s>=0?t:this._xCut,i])):(s<=0&&this._lineIn.push([t,i]),s>=0&&this._lineOut.push([t,i]))}_lineTo(t,i,s){this._closed?(j(this._lineIn,s<=0?t:this._xCut,i),j(this._lineOut,s>=0?t:this._xCut,i)):s<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([t,i])):s>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([t,i])):this._prevSide<0?(this._lineIn.push([t,i]),this._lineOut.push([t,i])):this._prevSide>0&&(this._lineOut.push([t,i]),this._lineIn.push([t,i]))}_checkClosingPt(t){const i=t.length;i>3&&t[0][0]===this._xCut&&t[i-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[i-2][1],t.pop())}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,i){const s=(this._xCut-t[0])/(i[0]-t[0]);return t[1]+s*(i[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}function j(t,i,s){const n=t.length;n>1&&t[n-1][0]===i&&t[n-2][0]===i?t[n-1][1]=s:t.push([i,s])}


/***/ }),

/***/ 14822:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MediaLayer_E)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(82541);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(79441);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(53334);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
;// ./node_modules/@arcgis/core/core/perspectiveUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const f=(0,vec3f64/* create */.vt)(),n=(0,mat3f64/* create */.vt)(),l=(0,mat3f64/* create */.vt)(),u=(0,mat3f64/* create */.vt)();function perspectiveUtils_p(r,s,i){return (0,vec32.i)(f,s[0],s[1],1),(0,vec32.o)(f,f,(0,mat3/* transpose */.mg)(n,i)),0===f[2]?(0,vec2/* set */.hZ)(r,f[0],f[1]):(0,vec2/* set */.hZ)(r,f[0]/f[2],f[1]/f[2])}function j(t,i,o){return x(l,i[0],i[1],i[2],i[3],i[4],i[5],i[6],i[7]),x(u,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),(0,mat3/* multiply */.lw)(t,(0,mat3/* adjoint */.KC)(l,l),u),0!==t[8]&&(t[0]/=t[8],t[1]/=t[8],t[2]/=t[8],t[3]/=t[8],t[4]/=t[8],t[5]/=t[8],t[6]/=t[8],t[7]/=t[8],t[8]/=t[8]),t}function x(o,m,c,l,u,p,j,x,b){(0,mat3/* set */.hZ)(o,m,l,p,c,u,j,1,1,1),(0,vec32.i)(f,x,b,1),(0,mat3/* adjoint */.KC)(n,o);const[g,h,v]=(0,vec32.o)(f,f,(0,mat3/* transpose */.mg)(n,n));return (0,mat3/* set */.hZ)(n,g,0,0,0,h,0,0,0,v),(0,mat3/* multiply */.lw)(o,n,o)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(23572);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec2f64.js
var vec2f64 = __webpack_require__(56560);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(30214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
;// ./node_modules/@arcgis/core/layers/support/GeoreferenceBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends Clonable/* default */.A{projectOrWarn(e,r){if(null==e)return e;const{geometry:t,pending:c}=(0,projectionUtils.projectOrLoad)(e,r);return c?null:c||t?t:(Logger/* default */.A.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:e,sourceSpatialReference:e.spatialReference,targetSpatialReference:r}),null)}};c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeoreferenceBase")],c);

;// ./node_modules/@arcgis/core/layers/support/ControlPointsGeoreference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const S=(0,mat3f64/* create */.vt)(),C=(0,vec2f64/* create */.vt)();let N=class extends JSONSupport/* default */.A{};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{isRequired:!0}}})],N.prototype,"x",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:{isRequired:!0}}})],N.prototype,"y",void 0),N=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ControlPointsGeoreference.ControlPointJSONType")],N);let q=class extends Clonable/* default */.A{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],q.prototype,"sourcePoint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],q.prototype,"mapPoint",void 0),q=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ControlPointsGeoreference.ControlPoint")],q);let O=class extends(JSONSupport/* default */.A.JSONSupportMixin(c)){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,o){const e=SpatialReference/* default */.A.fromJSON(o.spatialReference),r=(0,mat3f64/* fromValues */.fA)(...o.coefficients,1);return t.map((t=>((0,vec2/* set */.hZ)(C,t.x,t.y),perspectiveUtils_p(C,C,r),{sourcePoint:t,mapPoint:new Point/* default */.A({x:C[0],y:C[1],spatialReference:e})})))}writeControlPoints(t,o,r,i){if(null!=this.transform)null!=t&&T(t[0])&&(o.controlPoints=t.map((t=>{const o=t.sourcePoint;return{x:o.x,y:o.y}})),o.spatialReference=t[0].mapPoint.spatialReference.toJSON(),o.coefficients=this.transform.slice(0,8));else{const t=new Error/* default */.A("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration. Make sure the parent media element is loaded i.e. the ImageElement or VideoElement set as 'MediaLayer.source'.",{layer:i?.layer,georeference:this});i?.messages?i.messages.push(t):Logger/* default */.A.getLogger(this).error(t.name,t.message)}}get coords(){if(null==this.controlPoints)return null;const t=this._updateTransform(S);if(null==t||!T(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return K(t,this.width,this.height,o)}set coords(t){if(null==this.controlPoints||!T(this.controlPoints[0]))return;const o=this.controlPoints[0].mapPoint.spatialReference;if(null==(t=this.projectOrWarn(t,o)))return;const{width:e,height:r}=this,{rings:[[n,s,c,a]]}=t,p={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(0,r),mapPoint:new Point/* default */.A({x:n[0],y:n[1],spatialReference:o})},u={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(0,0),mapPoint:new Point/* default */.A({x:s[0],y:s[1],spatialReference:o})},m={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(e,0),mapPoint:new Point/* default */.A({x:c[0],y:c[1],spatialReference:o})},f={sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(e,r),mapPoint:new Point/* default */.A({x:a[0],y:a[1],spatialReference:o})};T(p)&&T(u)&&T(m)&&T(f)&&(B(S,p,u,m,f),this.controlPoints=this.controlPoints.map((({sourcePoint:t})=>((0,vec2/* set */.hZ)(C,t.x,t.y),perspectiveUtils_p(C,C,S),{sourcePoint:t,mapPoint:new Point/* default */.A({x:C[0],y:C[1],spatialReference:o})}))))}get inverseTransform(){return null==this.transform?null:(0,mat3/* invert */.B8)((0,mat3f64/* create */.vt)(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(null==t||null==this.transform||null==this.controlPoints||!T(this.controlPoints[0]))return null;(0,vec2/* set */.hZ)(C,t.x,t.y);const o=this.controlPoints[0].mapPoint.spatialReference;return perspectiveUtils_p(C,C,this.transform),new Point/* default */.A({x:C[0],y:C[1],spatialReference:o})}toSource(t){if(null==t||null==this.inverseTransform||null==this.controlPoints||!T(this.controlPoints[0]))return null;const o=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),null==(t=(0,projectionUtils.projectOrLoad)(t,o).geometry)?null:((0,vec2/* set */.hZ)(C,t.x,t.y),perspectiveUtils_p(C,C,this.inverseTransform),(0,screenUtils/* createScreenPoint */.tc)(C[0],C[1]))}toSourceNormalized(t){const o=this.toSource(t);return null!=o&&(o.x/=this.width,o.y/=this.height),o}_updateTransform(t){const{controlPoints:o,width:e,height:r}=this;if(!(null!=o&&e>0&&r>0))return null;const[n,i,s,l]=o;if(!T(n))return null;const c=n.mapPoint.spatialReference,a=this._projectControlPoint(i,c),p=this._projectControlPoint(s,c),u=this._projectControlPoint(l,c);if(!a.valid||!p.valid||!u.valid)return null;if(!T(a.controlPoint))return null;null==t&&(t=(0,mat3f64/* create */.vt)());let m=null;return m=T(p.controlPoint)&&T(u.controlPoint)?B(t,n,a.controlPoint,p.controlPoint,u.controlPoint):T(p.controlPoint)?V(t,n,a.controlPoint,p.controlPoint):A(t,n,a.controlPoint),m.every((t=>0===t))?null:m}_projectControlPoint(t,o){if(!T(t))return{valid:!0,controlPoint:t};const{sourcePoint:e,mapPoint:r}=t,{geometry:i,pending:s}=(0,projectionUtils.projectOrLoad)(r,o);return s?{valid:!1,controlPoint:null}:s||i?{valid:!0,controlPoint:{sourcePoint:e,mapPoint:i}}:(Logger/* default */.A.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:r.spatialReference,targetSpatialReference:o}),{valid:!1,controlPoint:null})}};function T(t){return null!=t?.sourcePoint&&null!=t.mapPoint}(0,tslib_es6._)([(0,property/* property */.MZ)({type:[q],json:{write:{allowNull:!1,isRequired:!0,target:{controlPoints:{type:[N],isRequired:!0},coefficients:{type:[Number],isRequired:!0},spatialReference:{type:SpatialReference/* default */.A,isRequired:!0}}}}})],O.prototype,"controlPoints",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("controlPoints")],O.prototype,"readControlPoints",null),(0,tslib_es6._)([(0,writer/* writer */.K)("controlPoints")],O.prototype,"writeControlPoints",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],O.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],O.prototype,"height",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"inverseTransform",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],O.prototype,"transform",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],O.prototype,"width",void 0),O=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ControlPointsGeoreference")],O);const _=(0,vec2f64/* create */.vt)(),M=(0,vec2f64/* create */.vt)(),G=(0,vec2f64/* create */.vt)(),I=(0,vec2f64/* create */.vt)(),J=(0,vec2f64/* create */.vt)(),L=(0,vec2f64/* create */.vt)(),E=(0,vec2f64/* create */.vt)(),U=(0,vec2f64/* create */.vt)(),k=Math.PI/2;function z(t,o,e){(0,vec2/* set */.hZ)(t,e.sourcePoint.x,e.sourcePoint.y),(0,vec2/* set */.hZ)(o,e.mapPoint.x,e.mapPoint.y)}function A(t,o,e){return z(_,J,o),z(M,L,e),(0,vec2/* rotate */.e$)(G,M,_,k),(0,vec2/* rotate */.e$)(I,_,M,k),(0,vec2/* rotate */.e$)(E,L,J,-k),(0,vec2/* rotate */.e$)(U,J,L,-k),H(t,_,M,G,I,J,L,E,U)}function V(t,o,e,r){return z(_,J,o),z(M,L,e),z(G,E,r),(0,vec2/* lerp */.Cc)(I,_,M,.5),(0,vec2/* rotate */.e$)(I,G,I,Math.PI),(0,vec2/* lerp */.Cc)(U,J,L,.5),(0,vec2/* rotate */.e$)(U,E,U,Math.PI),H(t,_,M,G,I,J,L,E,U)}function B(t,o,e,r,n){return z(_,J,o),z(M,L,e),z(G,E,r),z(I,U,n),H(t,_,M,G,I,J,L,E,U)}const W=new Array(8).fill(0),D=new Array(8).fill(0);function F(t,o,e,r,n){return t[0]=o[0],t[1]=o[1],t[2]=e[0],t[3]=e[1],t[4]=r[0],t[5]=r[1],t[6]=n[0],t[7]=n[1],t}function H(t,o,e,r,n,i,l,c,a){return j(t,F(W,o,e,r,n),F(D,i,l,c,a))}function K(t,o,e,r){const n=(0,vec2f64/* fromValues */.fA)(0,e),s=(0,vec2f64/* fromValues */.fA)(0,0),l=(0,vec2f64/* fromValues */.fA)(o,0),c=(0,vec2f64/* fromValues */.fA)(o,e);return perspectiveUtils_p(n,n,t),perspectiveUtils_p(s,s,t),perspectiveUtils_p(l,l,t),perspectiveUtils_p(c,c,t),new Polygon/* default */.A({rings:[[n,s,l,c,n]],spatialReference:r})}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/imageUtils.js
var imageUtils = __webpack_require__(73027);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/uuid.js
var uuid = __webpack_require__(1874);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(23377);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
;// ./node_modules/@arcgis/core/layers/support/CornersGeoreference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const CornersGeoreference_u=(0,vec2f64/* create */.vt)();let y=class extends c{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:o,bottomLeft:e,bottomRight:r}=this;if(null==t||null==o||null==e||null==r)return null;const s=t.spatialReference;return o=this.projectOrWarn(o,s),e=this.projectOrWarn(e,s),r=this.projectOrWarn(r,s),null==o||null==e||null==r?null:new Polygon/* default */.A({rings:[[[e.x,e.y],[t.x,t.y],[o.x,o.y],[r.x,r.y],[e.x,e.y]]],spatialReference:s})}set coords(t){const{topLeft:o}=this;if(null==o)return;const e=o.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{rings:[[r,s,i,l]]}=t;this.bottomLeft=new Point/* default */.A({x:r[0],y:r[1],spatialReference:e}),this.topLeft=new Point/* default */.A({x:s[0],y:s[1],spatialReference:e}),this.topRight=new Point/* default */.A({x:i[0],y:i[1],spatialReference:e}),this.bottomRight=new Point/* default */.A({x:l[0],y:l[1],spatialReference:e})}toSourceNormalized(t){const{topLeft:s,topRight:i,bottomRight:p,bottomLeft:c}=this;if(null==t||null==s||null==i||null==p||null==c)return null;const m=s.spatialReference;t=t.normalize();const f=(0,projectionUtils.projectOrLoad)(t,m).geometry;if(null==f)return null;(0,vec2/* set */.hZ)(CornersGeoreference_u,f.x,f.y);const y=j((0,mat3f64/* create */.vt)(),[s.x,s.y,c.x,c.y,i.x,i.y,p.x,p.y],[0,0,0,1,1,0,1,1]);return perspectiveUtils_p(CornersGeoreference_u,CornersGeoreference_u,y),(0,screenUtils/* createScreenPoint */.tc)(CornersGeoreference_u[0],CornersGeoreference_u[1])}};(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],y.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"bottomLeft",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"bottomRight",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"topLeft",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A})],y.prototype,"topRight",void 0),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.CornersGeoreference")],y);const h=y;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/common.js
var common = __webpack_require__(78115);
;// ./node_modules/@arcgis/core/layers/support/ExtentAndRotationGeoreference.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends c{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:r,ymax:o,spatialReference:n}=this.extent;let s;if(this.rotation){const{x:n,y:i}=this.extent.center,a=ExtentAndRotationGeoreference_x(n,i,this.rotation);s=[a(t,e),a(t,o),a(r,o),a(r,e)],s.push(s[0])}else s=[[t,e],[t,o],[r,o],[r,e],[t,e]];return new Polygon/* default */.A({rings:[s],spatialReference:n})}set coords(t){if(null==t||null==this.extent)return;const r=this.extent.spatialReference;if(t=this.projectOrWarn(t,r),null==t?.extent)return;const{rings:[[o,n,s]],extent:{center:{x:i,y:c}}}=t,l=(0,mathUtils/* rad2deg */.KJ)(Math.PI/2-Math.atan2(n[1]-o[1],n[0]-o[0])),m=ExtentAndRotationGeoreference_x(i,c,-l),[p,u]=m(o[0],o[1]),[f,h]=m(s[0],s[1]);this.extent=new Extent/* default */.A({xmin:p,ymin:u,xmax:f,ymax:h,spatialReference:r}),this.rotation=l}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(null==t||null==e)return null;const{xmin:s,ymin:i,xmax:a,ymax:c,center:m,spatialReference:p}=e;t=t.normalize();const u=(0,projectionUtils.projectOrLoad)(t,p).geometry;if(null==u)return null;let f=u.x,h=u.y;return n&&([f,h]=ExtentAndRotationGeoreference_x(m.x,m.y,-n)(f,h)),(0,screenUtils/* createScreenPoint */.tc)((0,mathUtils/* scale */.hs)(f,s,a,0,1),(0,mathUtils/* scale */.hs)(h,c,i,0,1))}};function ExtentAndRotationGeoreference_x(t,e,r){const o=(0,common/* toRadian */.DF)(r),n=Math.cos(o),s=Math.sin(o);return(r,o)=>[n*(r-t)+s*(o-e)+t,n*(o-e)-s*(r-t)+e]}(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],p.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],p.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],p.prototype,"rotation",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ExtentAndRotationGeoreference")],p);const ExtentAndRotationGeoreference_u=p;

;// ./node_modules/@arcgis/core/layers/support/mediaUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const mediaUtils_l=100,mediaUtils_y=.5;async function m(e,t){e.loaded||await e.load();const{contentWidth:n,contentHeight:a}=e,{spatialReference:c}=t,p=i(c);let m=!1;if(p){const e=p.valid[1]-p.valid[0];t.width>e&&(t=new o({xmin:p.valid[0],ymin:t.ymin,xmax:p.valid[1],ymax:t.ymax,spatialReference:t.spatialReference}),m=!0)}const f=t.expand(mediaUtils_y),{center:u,width:P,height:d}=f,x=n/a,w=m||x>1,g=w?mediaUtils_l:mediaUtils_l*x,h=w?mediaUtils_l/x:mediaUtils_l,R=w?P:d*x,j=w?P/x:d,v=u.x-R/2,O=u.x+R/2,b=u.y+j/2,G=u.y-j/2;return new s({controlPoints:[{sourcePoint:{x:g,y:a-h},mapPoint:new r({x:v,y:G,spatialReference:c})},{sourcePoint:{x:g,y:h},mapPoint:new r({x:v,y:b,spatialReference:c})},{sourcePoint:{x:n-g,y:h},mapPoint:new r({x:O,y:b,spatialReference:c})},{sourcePoint:{x:n-g,y:a-h},mapPoint:new r({x:O,y:G,spatialReference:c})}],width:n,height:a})}function mediaUtils_f(e){const t=e.georeference;if("control-points"!==t.type)return null;const n={wkid:0},{width:o,height:i}=t,a=t.controlPoints;return new s({controlPoints:a.map((e=>{const{x:t,y:o}=e.sourcePoint;return{sourcePoint:{x:t,y:o},mapPoint:new r({x:t,y:i-o,spatialReference:n})}})),width:o,height:i})}function mediaUtils_u(e){return"media"===e?.type}function P(e,o){const r=(0,PropertyOrigin/* nameToId */.aB)(o);return mediaUtils_u(e)&&!!e.portalItem&&null!=r&&r>PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM}function d(t,n,o){if(!t||"control-points"===t.type)return t;const{coords:i}=t;if(5!==i?.rings[0]?.length)return null;const[a,c,p,l]=i.rings[0],{spatialReference:y}=i;return new O({controlPoints:[{mapPoint:new Point/* default */.A({x:a[0],y:a[1],spatialReference:y}),sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(0,o)},{mapPoint:new Point/* default */.A({x:c[0],y:c[1],spatialReference:y}),sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(0,0)},{mapPoint:new Point/* default */.A({x:p[0],y:p[1],spatialReference:y}),sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(n,0)},{mapPoint:new Point/* default */.A({x:l[0],y:l[1],spatialReference:y}),sourcePoint:(0,screenUtils/* createScreenPoint */.tc)(n,o)}],width:n,height:o})}function mediaUtils_x(e,t,n){return{enabled:!P(n?.layer,n?.origin),ignoreOrigin:!0}}const w={json:{name:"url",type:String,write:{overridePolicy:mediaUtils_x}}},g={readOnly:!0,json:{read:!1,write:{target:"mediaType",overridePolicy:mediaUtils_x}}},mediaUtils_h={types:{key:"type",base:c,typeMap:{"control-points":O,corners:h,"extent-and-rotation":ExtentAndRotationGeoreference_u}},json:{types:{key:"type",base:c,typeMap:{"control-points":O}},write:{overridePolicy:()=>({enabled:!0,ignoreOrigin:!0})}}};

;// ./node_modules/@arcgis/core/layers/support/MediaElementBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let MediaElementBase_u=class extends(Identifiable/* default */.A.NumericIdentifiableMixin((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Loadable/* default */.A))){constructor(e){super(e),this.georeference=null,this.opacity=1}readGeoreference(e){return O.fromJSON(e)}writeGeoreference(e,o,t,n){const i=n?.resources?.pendingOperations,c=()=>{const i=d(this.georeference,this.contentWidth,this.contentHeight);if(i){if("control-points"!==e.type&&Logger/* default */.A.getLogger(this).warn(`only georeference of type 'control-points' may be persisted. The georeference of type '${e.type}' has been automatically converted.`),4!==i.controlPoints?.length&&n?.messages)return void n.messages.push(new Error/* default */.A("property:unsupported","only 'control-points' georeference with 4 control points may be persisted."));o[t]=i.write({},n)}};if("control-points"!==e.type&&!this.loaded&&i)return o[t]={},void i.push(this.load().then(c));c()}get contentWidth(){return 0}get contentHeight(){return 0}toSource(e){const{georeference:r,contentWidth:o,contentHeight:t}=this;if(null==e||null==r||0===o||0===t)return null;const s=r.toSourceNormalized(e);return null==s?null:(s.x*=o,s.y*=t,s)}};(0,tslib_es6._)([(0,property/* property */.MZ)(mediaUtils_h)],MediaElementBase_u.prototype,"georeference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("georeference")],MediaElementBase_u.prototype,"readGeoreference",null),(0,tslib_es6._)([(0,writer/* writer */.K)("georeference")],MediaElementBase_u.prototype,"writeGeoreference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1}})],MediaElementBase_u.prototype,"opacity",void 0),MediaElementBase_u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.MediaElementBase")],MediaElementBase_u);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/resourceExtension.js
var resourceExtension = __webpack_require__(80925);
;// ./node_modules/@arcgis/core/support/mediaLayerUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const mediaLayerUtils_n=Symbol("ImageElementInstance"),e=Symbol("VideoElementInstance");function t(e){return null!=e&&"object"==typeof e&&mediaLayerUtils_n in e}function mediaLayerUtils_o(n){return null!=n&&"object"==typeof n&&e in n}function mediaLayerUtils_c(n){return t(n)||mediaLayerUtils_o(n)}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(55714);
;// ./node_modules/@arcgis/core/layers/support/ImageElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var ImageElement_E;let ImageElement_U=class extends MediaElementBase_u{static{ImageElement_E=mediaLayerUtils_n}constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this[ImageElement_E]=!0,this.image=null}load(){const t=this.image;if("string"==typeof t){const e=(0,imageUtils/* getImageData */.M5)(t).then((t=>{this._set("content",t)}));this.addResolvingPromise(e)}else if(t instanceof HTMLImageElement){const e=t.decode().then((()=>{this._set("content",t)}));this.addResolvingPromise(e)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new Error/* default */.A("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,e,r){return (0,persistableUrlUtils.f)(e.url,r)}writeImage(t,e,r,o){if(null==t)return;const n=o?.portalItem,s=o?.resources;if(!n||!s)return void("string"==typeof t&&(e[r]=(0,persistableUrlUtils.t)(t,o)));const a=ImageElement_H(t)?t:null;if(a){if(null==(0,persistableUrlUtils.i)(a))return void(e[r]=a);const t=(0,persistableUrlUtils.t)(a,{...o,verifyItemRelativeUrls:o?.verifyItemRelativeUrls?{writtenUrls:o.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},persistableUrlUtils.M.NO);if(n&&t&&!(0,urlUtils/* isAbsolute */.oP)(t))return s.toKeep.push({resource:n.resourceFromPath(t),compress:!1}),void(e[r]=t)}e[r]="<pending>",s.pendingOperations.push(ImageElement_L(t).then((t=>{const o=ImageElement_P(t,n);e[r]=o.itemRelativeUrl,s.toAdd.push({resource:o,content:{type:"blob",blob:t},compress:!1,finish:t=>{this.image=t.url}})})))}};function ImageElement_H(t){return"string"==typeof t&&!(0,urlUtils/* isDataProtocol */.DB)(t)&&!(0,urlUtils/* isBlobProtocol */.w8)(t)}async function ImageElement_L(t){if("string"==typeof t){if((0,urlUtils/* isDataProtocol */.DB)(t))return (0,urlUtils/* dataToBlob */.N9)(t);return(await (0,request/* default */.A)(t,{responseType:"blob"})).data}return new Promise((e=>ImageElement_M(t).toBlob(e)))}function ImageElement_M(t){if(t instanceof HTMLCanvasElement)return t;const e=t instanceof HTMLImageElement?t.naturalWidth:t.width,r=t instanceof HTMLImageElement?t.naturalHeight:t.height,o=document.createElement("canvas"),i=o.getContext("2d");return o.width=e,o.height=r,t instanceof HTMLImageElement?i.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&i.putImageData(t,0,0),o}function ImageElement_P(t,e){const r=(0,uuid/* generateUUID */.lk)(),o=`${(0,urlUtils/* join */.fj)("media",r)}.${(0,resourceExtension/* getResourceContentExtension */.n)({type:"blob",blob:t})}`;return e.resourceFromPath(o)}(0,tslib_es6._)([(0,property/* property */.MZ)()],ImageElement_U.prototype,"animationOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ImageElement_U.prototype,"content",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ImageElement_U.prototype,"contentWidth",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],ImageElement_U.prototype,"contentHeight",null),(0,tslib_es6._)([(0,property/* property */.MZ)(w)],ImageElement_U.prototype,"image",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("image",["url"])],ImageElement_U.prototype,"readImage",null),(0,tslib_es6._)([(0,writer/* writer */.K)("image")],ImageElement_U.prototype,"writeImage",null),(0,tslib_es6._)([(0,property/* property */.MZ)(g)],ImageElement_U.prototype,"type",void 0),ImageElement_U=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ImageElement")],ImageElement_U);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(48);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(57888);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(71004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(2532);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/intersectsBase.js
var intersectsBase = __webpack_require__(19387);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/data/BoundsStore.js
var BoundsStore = __webpack_require__(64411);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/normalizeUtilsSync.js
var normalizeUtilsSync = __webpack_require__(36176);
;// ./node_modules/@arcgis/core/layers/support/MediaElementView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let MediaElementView_i=class extends Accessor/* default */.A{constructor(o){super(o)}get bounds(){const o=this.coords;return null==o?.extent?null:(0,aaBoundingRect/* fromExtent */.VY)(o.extent)}get coords(){const o=this.element.georeference?.coords;return (0,projectionUtils.projectOrLoad)(o,this.spatialReference).geometry}get normalizedCoords(){return Polygon/* default */.A.fromJSON((0,normalizeUtilsSync/* normalizeCentralMeridianSync */.jZ)(this.coords))}get normalizedBounds(){const o=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=o?(0,aaBoundingRect/* fromExtent */.VY)(o):null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementView_i.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementView_i.prototype,"element",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementView_i.prototype,"bounds",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementView_i.prototype,"coords",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementView_i.prototype,"normalizedCoords",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaElementView_i.prototype,"normalizedBounds",null),MediaElementView_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.MediaElementView")],MediaElementView_i);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/sanitizerUtils.js + 1 modules
var sanitizerUtils = __webpack_require__(13190);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/videoUtils.js
var videoUtils = __webpack_require__(40102);
;// ./node_modules/@arcgis/core/layers/support/VideoElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var b;const VideoElement_w=Symbol("canplay");let VideoElement_V=class extends MediaElementBase_u{static{b=e}constructor(e){super(e),this.autoplay=!0,this.content=null,this.type="video",this[b]=!0}load(){const e=this.video;return"string"==typeof e?this.addResolvingPromise(this._preProcessVideoUrl(e).then((async e=>{const t=document.createElement("video");return t.src=sanitizerUtils/* renderingSanitizer */.W5.sanitizeUrl((0,urlUtils/* makeAbsolute */.s2)(e)),t.crossOrigin="anonymous",t.autoplay=this.autoplay,t.muted=!0,t.loop=!0,t.playsInline=!0,this._loadVideo(t).then((()=>{this._set("content",t)}))}))):e instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e)}))):this.addResolvingPromise(Promise.reject(new Error/* default */.A("video-element:invalid-video-type","Invalid video type",{video:e}))),Promise.resolve(this)}get contentWidth(){return this.content?.videoWidth??0}get contentHeight(){return this.content?.videoHeight??0}get currentTime(){return this.content?.currentTime}set currentTime(e){if(!this.content)return;const t=(0,mathUtils/* clamp */.qE)(e,0,this.content.duration);"fastSeek"in this.content?this.content.fastSeek(t):this.content.currentTime=t,this.content.play().then((()=>{this.content?.pause()})).catch((()=>{}))}get duration(){return this.content?.duration}set video(e){"not-loaded"===this.loadStatus?this._set("video",e):Logger/* default */.A.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}writeVideo(e,t,r,s){if(!e)return void(s?.messages&&s.messages.push(new Error/* default */.A("video-element:unsupported-video","video source is missing")));const i=VideoElement_(e)?e:null;if(!i)return void(s?.messages&&s.messages.push(new Error/* default */.A("video-element:unsupported-video","video source must be an absolute url")));!(0,urlUtils/* isAbsolute */.oP)(i)&&s?.blockedRelativeUrls&&s.blockedRelativeUrls.push(i);const c=(0,urlUtils/* makeAbsolute */.s2)(i);!(0,persistableUrlUtils.i)(c)?t[r]=c:s?.messages&&s.messages.push(new Error/* default */.A("video-element:unsupported-video","video source cannot be an item resource"))}async _preProcessVideoUrl(e){if((0,urlUtils/* getProxyRule */.zs)(e))return (0,urlUtils/* addProxy */.yM)(e);try{return await (0,request/* default */.A)(e,{method:"head"}),e}catch{try{return (0,urlUtils/* addProxy */.yM)(e,!0)}catch{return e}}}async _loadVideo(e){"anonymous"!==e.crossOrigin&&(e.crossOrigin="anonymous",(0,urlUtils/* isBlobProtocol */.w8)(e.src)||(e.src=e.src));try{await (0,videoUtils/* whenVideoPlayable */.i)(e,(e=>this.addHandles(e,VideoElement_w))),this.autoplay&&await e.play().catch((e=>{throw console.error(e),e}))}finally{this.removeHandles(VideoElement_w)}}};function VideoElement_(e){return"string"==typeof e&&!(0,urlUtils/* isDataProtocol */.DB)(e)&&!(0,urlUtils/* isBlobProtocol */.w8)(e)}(0,tslib_es6._)([(0,property/* property */.MZ)()],VideoElement_V.prototype,"autoplay",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],VideoElement_V.prototype,"content",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],VideoElement_V.prototype,"contentWidth",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],VideoElement_V.prototype,"contentHeight",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],VideoElement_V.prototype,"currentTime",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],VideoElement_V.prototype,"duration",null),(0,tslib_es6._)([(0,property/* property */.MZ)(w)],VideoElement_V.prototype,"video",null),(0,tslib_es6._)([(0,writer/* writer */.K)("video")],VideoElement_V.prototype,"writeVideo",null),(0,tslib_es6._)([(0,property/* property */.MZ)(g)],VideoElement_V.prototype,"type",void 0),VideoElement_V=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.VideoElement")],VideoElement_V);

;// ./node_modules/@arcgis/core/layers/support/LocalMediaElementSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const LocalMediaElementSource_w={key:"type",defaultKeyValue:"image",base:MediaElementBase_u,typeMap:{image:ImageElement_U,video:VideoElement_V}},LocalMediaElementSource_M=Collection/* default */.A.ofType(LocalMediaElementSource_w);let LocalMediaElementSource_I=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(Evented/* default */.A.EventedAccessor))){constructor(e){super(e),this._index=new BoundsStore/* BoundsStore */.F,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=e=>{for(const s of e.removed){const e=this._elementViewsMap.get(s);this._elementViewsMap.delete(s),this._index.delete(e),this.removeHandles(e),e.destroy(),this.notifyChange("fullExtent")}const{spatialReference:t}=this;for(const s of e.added){if(this._elementViewsMap.get(s))continue;const e=new MediaElementView_i({spatialReference:t,element:s});this._elementViewsMap.set(s,e);const r=(0,reactiveUtils/* watch */.wB)((()=>e.coords),(()=>this._updateIndexForElement(e,!1)));this._updateIndexForElement(e,!0),this.addHandles(r,e)}this._elementsIndexes.clear(),this.elements.forEach(((e,t)=>this._elementsIndexes.set(e,t))),this.emit("refresh")},this.elements=new LocalMediaElementSource_M}async load(e){if((0,promiseUtils/* throwIfAborted */.Te)(e),!this.spatialReference){const e=this.elements.find((e=>null!=e.georeference?.coords));this._set("spatialReference",e?e.georeference.coords.spatialReference:SpatialReference/* default */.A.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",(0,collectionUtils/* referenceSetter */.V)(e,this._get("elements"),LocalMediaElementSource_M))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const e=this._index.fullBounds;return null==e?null:new Extent/* default */.A({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){"not-loaded"===this.loadStatus?this._set("spatialReference",e):Logger/* default */.A.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,t){await this.load(),await (0,projectionUtils.initializeProjection)(e.spatialReference,this.spatialReference,null,t);const s=(0,spatialReferenceUtils/* equals */.aI)(e.spatialReference,this.spatialReference)?e:(0,projectionUtils.project)(e,this.spatialReference);if(!s)return[];const r=s.normalize(),o=[];for(const n of r)this._index.forEachInBounds((0,aaBoundingRect/* fromExtent */.VY)(n),(({normalizedCoords:e,element:t})=>{null!=e&&(0,intersectsBase/* extentIntersectsPolygon */.fA)(n,e)&&o.push(t)}));return o.sort(((e,t)=>this._elementsIndexes.get(e)-this._elementsIndexes.get(t))),o}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,t){const s=e.normalizedBounds,r=this._index.has(e),o=null!=s;this._index.delete(e),o&&this._index.set(e,s),this.notifyChange("fullExtent"),t||(r!==o?this.emit("refresh"):this.emit("change",{element:e.element}))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],LocalMediaElementSource_I.prototype,"elements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],LocalMediaElementSource_I.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],LocalMediaElementSource_I.prototype,"spatialReference",null),LocalMediaElementSource_I=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.LocalMediaElementSource")],LocalMediaElementSource_I);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
;// ./node_modules/@arcgis/core/layers/MediaLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let MediaLayer_b=class extends((0,BlendLayer/* BlendLayer */.dM)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A)))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,r,o)=>{const{save:t,saveAs:s}=await __webpack_require__.e(/* import() */ 84022).then(__webpack_require__.bind(__webpack_require__, 61641));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return t(this,r);case interfaces/* SaveOperationType */.X.SAVE_AS:return s(this,o,r)}})),this.source=new LocalMediaElementSource_I}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let t=this.source;if(!t)throw new Error/* default */.A("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const s=this._getSourceOverride(t,this.georeference);s&&(this.setAtOrigin("source",s,"web-map"),this.setAtOrigin("source",s,"web-scene"),t=s);const i=mediaLayerUtils_c(t)?new LocalMediaElementSource_I({elements:new Collection/* default */.A([t])}):t;this._set("effectiveSource",i),this.spatialReference&&(i.spatialReference=this.spatialReference),await i.load(e),this.spatialReference=i.spatialReference}destroy(){this.effectiveSource?.destroy(),this.effectiveSource!==this.source&&this.source?.destroy()}readGeoreference(e,r){return e&&"itemId"in r&&r.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}get source(){return this._get("source")}set source(e){"loaded"!==this.loadStatus&&"failed"!==this.loadStatus?this._set("source",e):Logger/* default */.A.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new LocalMediaElementSource_I({elements:new Collection/* default */.A(e)}):e instanceof Collection/* default */.A?new LocalMediaElementSource_I({elements:e}):e:null}readSource(e,r,o){if("itemId"in r&&r.itemId)return;const t=this._createSource(r);return t?.read(r,o),t}writeSource(e,r,t,s){if(e&&e instanceof LocalMediaElementSource_I){const r=e.elements.length;if(1!==r)return void(s?.messages&&s.messages.push(new Error/* default */.A("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${r}.`)));e=e.elements.at(0)}mediaLayerUtils_c(e)?e.write(r,s):s?.messages&&(e?s.messages.push(new Error/* default */.A("media-layer:unsupported-source","only media elements of type 'ImageElement' or 'VideoElement' can be persisted")):s.messages.push(new Error/* default */.A("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,r){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,r,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new ImageElement_U;case"video":return new VideoElement_V}return null}_getSourceOverride(e,r){if(mediaLayerUtils_c(e)&&this.originIdOf("source")===PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM&&r&&(this.originIdOf("georeference")===PropertyOrigin/* OriginId */.Gr.WEB_MAP||this.originIdOf("georeference")===PropertyOrigin/* OriginId */.Gr.WEB_SCENE)){const o=e.toJSON(),t=this._createSource(o);return t.read({...o},{origin:"portal-item"}),t.read({georeference:r},{origin:"web-map"}),t.read({georeference:r},{origin:"web-scene"}),t}return null}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],MediaLayer_b.prototype,"effectiveSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],MediaLayer_b.prototype,"georeference",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("web-document","georeference")],MediaLayer_b.prototype,"readGeoreference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],MediaLayer_b.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],MediaLayer_b.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["MediaLayer"]})],MediaLayer_b.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],MediaLayer_b.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image","video"]},georeference:{type:O}},overridePolicy(e,r,o){return{enabled:!0,allowNull:!1,ignoreOrigin:P(this,o?.origin)&&mediaLayerUtils_c(e)&&!!e.georeference&&e.originIdOf("georeference")>PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM}}}}})],MediaLayer_b.prototype,"source",null),(0,tslib_es6._)([(0,cast/* cast */.w)("source")],MediaLayer_b.prototype,"castSource",null),(0,tslib_es6._)([(0,reader/* reader */.w)("source",["url"])],MediaLayer_b.prototype,"readSource",null),(0,tslib_es6._)([(0,writer/* writer */.K)("source")],MediaLayer_b.prototype,"writeSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],MediaLayer_b.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],MediaLayer_b.prototype,"type",void 0),MediaLayer_b=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.MediaLayer")],MediaLayer_b);const MediaLayer_E=MediaLayer_b;


/***/ }),

/***/ 64411:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6273);
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21120);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d=5e4,n={minX:0,minY:0,maxX:0,maxY:0};function t(i){n.minX=i[0],n.minY=i[1],n.maxX=i[2],n.maxY=i[3]}function e(i,s,d){t(s),i.search(n,d)}class o{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__/* .PooledRBush */ .w(9,(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-csp-restrictions")?i=>({minX:i[0],minY:i[1],maxX:i[2],maxY:i[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const i=new Array(this._idByBounds.size);let s=0;this._idByBounds.forEach(((d,n)=>{i[s++]=n})),this._indexInvalid=!1,this._index.clear(),this._index.load(i)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((i=>this._idByBounds.has(i)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const i=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__/* .empty */ .Ie)();for(const s of this._boundsById.values())s&&(i[0]=Math.min(s[0],i[0]),i[1]=Math.min(s[1],i[1]),i[2]=Math.max(s[2],i[2]),i[3]=Math.max(s[3],i[3]));return i}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(i){const s=this._boundsById.get(i);this._boundsById.delete(i),s&&(this._idByBounds.delete(s),this._indexInvalid||this._index.remove(s))}forEachInBounds(i,s){this._loadIndex(),e(this._index,i,(i=>s(this._idByBounds.get(i))))}get(i){return this._boundsById.get(i)}has(i){return this._boundsById.has(i)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(i,s){if(!this._indexInvalid){const s=this._boundsById.get(i);s&&(this._index.remove(s),this._idByBounds.delete(s))}this._boundsById.set(i,s),s&&(this._idByBounds.set(s,i),this._indexInvalid||(this._boundsToLoad.push(s),this._boundsToLoad.length>d&&this._loadIndex()))}}


/***/ }),

/***/ 40102:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92840);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(r,t){return new Promise(((n,o)=>{r.readyState>=HTMLMediaElement.HAVE_CURRENT_DATA?n():(t((0,_core_events_js__WEBPACK_IMPORTED_MODULE_0__/* .once */ .Oo)(r,"canplay",n)),t((0,_core_events_js__WEBPACK_IMPORTED_MODULE_0__/* .once */ .Oo)(r,"error",o)))}))}


/***/ }),

/***/ 80925:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19759);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(i){return o[t(i)]||e}function t(i){return"json"===i.type?"application/json":"blob"===i.type?i.blob.type:n(i.url)}function n(p){const t=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getPathExtension */ .Zo)(p);return g[t]||a}const o={},a="text/plain",e=o[a],g={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const l in g)o[g[l]]=l;


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


/***/ })

};
;