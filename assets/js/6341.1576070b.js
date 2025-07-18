"use strict";
exports.id = 6341;
exports.ids = [6341,7519];
exports.modules = {

/***/ 16528:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42784);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n,t,r,x={exports:{}};x.exports,n=x,t=function(){function e(e,t,x){x=x||2;var i,u,v,o,y,p,a,l=t&&t.length,h=l?t[0]*x:e.length,s=n(e,0,h,x,!0),c=[];if(!s||s.next===s.prev)return c;if(l&&(s=f(e,t,s,x)),e.length>80*x){i=v=e[0],u=o=e[1];for(var Z=x;Z<h;Z+=x)(y=e[Z])<i&&(i=y),(p=e[Z+1])<u&&(u=p),y>v&&(v=y),p>o&&(o=p);a=0!==(a=Math.max(v-i,o-u))?1/a:0}return r(s,c,x,i,u,a),c}function n(e,n,t,r,x){var i,u;if(x===C(e,n,t,r)>0)for(i=n;i<t;i+=r)u=q(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=q(i,e[i],e[i+1],u);if(u&&m(u,u.next)){var v=u.next;A(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!m(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(A(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,o,y,p,a){if(e){!a&&p&&h(e,o,y,p);for(var l,s,c=e;e.prev!==e.next;)if(l=e.prev,s=e.next,p?i(e,o,y,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(s.i/f),A(e),e=s.next,c=s.next;else if((e=s)===c){a?1===a?r(e=u(t(e),n,f),n,f,o,y,p,2):2===a&&v(e,n,f,o,y,p):r(t(e),n,f,o,y,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,o=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,y=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=c(v,f,n,t,r),a=c(o,y,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!m(i,u)&&M(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),A(x),A(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var o=f.next.next;o!==f.prev;){if(f.i!==o.i&&d(f,o)){var y=_(f,o);return f=t(f,f.next),y=t(y,y.next),r(f,n,x,i,u,v),void r(y,n,x,i,u,v)}o=o.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,y=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),y.push(Z(f));for(y.sort(o),u=0;u<y.length;u++)x=t(x=p(y[u],x),x.next);return x}function o(e,n){return e.x-n.x}function y(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=_(r,e),i=t(r,r.next);let u=y(x);return t(u,u.next),i=y(i),y(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,o=t,y=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=y&&x!==r.x&&g(i<p?x:u,i,y,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==o);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{null===x.z&&(x.z=c(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,s(x)}function s(e){var n,t,r,x,i,u,v,f,o=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<o&&(v++,r=r.nextZ);n++);for(f=o;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,o*=2}while(u>1);return e}function c(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&H(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||m(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function m(e,n){return e.x===n.x&&e.y===n.y}function M(e,n,t,r){var x=b(w(e,n,t)),i=b(w(e,n,r)),u=b(w(t,r,e)),v=b(w(t,r,n));return x!==i&&u!==v||!(0!==x||!z(e,t,n))||!(0!==i||!z(e,r,n))||!(0!==u||!z(t,e,r))||!(0!==v||!z(t,n,r))}function z(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function b(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&M(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function H(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function _(e,n){var t=new B(e.i,e.x,e.y),r=new B(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function q(e,n,t,r){var x=new B(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function A(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function B(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function C(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}return e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(C(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var o=n[v]*t,y=v<f-1?n[v+1]*t:e.length;u-=Math.abs(C(e,o,y,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t},e},void 0!==(r=t())&&(n.exports=r);const i=(0,_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_0__.g)(x.exports);


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

/***/ 42609:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22279);
/* harmony import */ var _projectBuffer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84119);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(o,e,c,f=0){t[0]=o.x,t[1]=o.y;const n=o.z;return t[2]=void 0!==n?n:f,(0,_projectBuffer_js__WEBPACK_IMPORTED_MODULE_1__.projectBuffer)(t,o.spatialReference,0,e,c,0,1)}const t=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)();


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

/***/ 21104:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78118);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(93413);
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(29796);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;const u="esri.geometry.support.MeshComponent",h=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(u);let f=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{static from(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(p,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return (0,_MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_10__/* .castArray */ .b)(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},h)}castMaterial(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?_MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t)}clone(){return new p({faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,r){const s={faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new p(s)}get memoryUsage(){let t=0;return null!=this.faces&&(t+=this.faces.byteLength),null!=this.material&&(t+=this.material.memoryUsage),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],f.prototype,"faces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("faces")],f.prototype,"castFaces",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],f.prototype,"material",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("material")],f.prototype,"castMaterial",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],f.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean})],f.prototype,"trustSourceNormals",void 0),f=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)(u)],f);const g=f;


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

/***/ 97557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_8__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],c.prototype,"type",void 0),c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],c);const p=c;


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

/***/ 78118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34804);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94578);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY{constructor(o){super(o),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const e=null!=o?o.get(this):null;if(e)return e;const t=new n(this.clonePropertiesWithDeduplication(r));return null!=o&&o.set(this,t),t}clonePropertiesWithDeduplication(o){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(o),normalTexture:this.normalTexture?.cloneWithDeduplication(o),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let o=0;return o+=null!=this.color?16:0,null!=this.colorTexture&&(o+=this.colorTexture.memoryUsage),o+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(o+=this.normalTexture.memoryUsage),o+=null!=this.normalTextureTransform?20:0,o}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"doubleSided",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshMaterial")],u);const a=u;


/***/ }),

/***/ 93413:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96220);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78118);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(34804);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94578);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var n;let u=n=class extends _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,s){const t=null!=e?e.get(this):null;if(t)return t;const o=new n(this.clonePropertiesWithDeduplication(s));return null!=e&&e.set(this,o),o}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTextureTransform",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshMaterialMetallicRoughness")],u);const c=u;


/***/ }),

/***/ 34804:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25801);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(85569);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(77542);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63680);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var p;const h=new WeakMap;let d=0,u=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* .JSONSupport */ .oY{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),crossOrigin:t.crossOrigin};e[a]=s}else if(t instanceof HTMLCanvasElement){const r=t.getContext("2d").getImageData(0,0,t.width,t.height),s={type:"canvas-element",imageData:this._encodeImageData(r)};e[a]=s}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s}else if(t instanceof ImageData){const r={type:"image-data",imageData:this._encodeImageData(t)};e[a]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=this._decodeImageData(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return this._decodeImageData(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const t=this.data,e=this.url;if(t instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(t.getContext("2d").getImageData(0,0,t.width,t.height));if(t instanceof ImageData)return this._imageDataContainsTransparent(t);if(e){const t=e.substr(e.length-4,4).toLowerCase(),a=e.substr(0,15).toLocaleLowerCase();if(".png"===t||"data:image/png;"===a)return!0}return!1}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(h.has(this.data)||h.set(this.data,++d),e(h.get(this.data))):e()}get memoryUsage(){let t=0;if(t+=null!=this.url?this.url.length:0,null!=this.data){const e=this.data;"data"in e?t+=e.data.byteLength:e instanceof HTMLImageElement?t+=e.naturalWidth*e.naturalHeight*3:e instanceof HTMLCanvasElement&&(t+=e.width*e.height*3)}return t}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new p(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}}_decodeImageData(t){const a=atob(t.data),r=new Uint8ClampedArray(a.length);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return (0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .wrapImageData */ .eV)(r,t.width,t.height)}_imageDataContainsTransparent(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}static from(t){return"string"==typeof t?new p({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p({data:t}):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureClass */ .PZ)(p,t)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.w}})],u.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"data",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("data")],u.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("data")],u.prototype,"readData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],u.prototype,"wrap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"contentHash",null),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshTexture")],u);const m=u;


/***/ }),

/***/ 94578:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let p=class extends((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* .ClonableMixin */ .O)(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONSupport */ .oY)){constructor(o){super(o),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshTextureTransform")],p);const c=p;


/***/ }),

/***/ 8695:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(37046);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(56192);
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76743);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46991);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(22279);
/* harmony import */ var _axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(69175);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var v;let b=v=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.translation=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.c)(),this.rotationAxis=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.e)(_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__.up),this.rotationAngle=0,this.scale=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.f)(1,1,1)}get rotation(){return (0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .fromAxisAndAngle */ .i4)(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)((0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .axis */ .yo)(t)),this.rotationAngle=(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .angle */ .g7)(t)}get localMatrix(){const t=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__.a)();return (0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_9__.s)(M,(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .axis */ .yo)(this.rotation),(0,_axisAngleDegrees_js__WEBPACK_IMPORTED_MODULE_13__/* .angleRad */ .$I)(this.rotation)),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__.f)(t,M,this.translation,this.scale),t}get localMatrixInverse(){return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__.i)((0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_8__.a)(),this.localMatrix)}applyLocal(t,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__.e)(o,t,this.localMatrix)}applyLocalInverse(t,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_11__.e)(o,t,this.localMatrixInverse)}equals(t){return this===t||null!=t&&(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_7__.e)(this.localMatrix,t.localMatrix)}clone(){const t={translation:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.translation),rotationAxis:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_12__.g)(this.scale)};return new v(t)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"translation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"rotationAxis",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],b.prototype,"rotationAngle",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],b.prototype,"scale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],b.prototype,"rotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],b.prototype,"localMatrix",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],b.prototype,"localMatrixInverse",null),b=v=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshTransform")],b);const M=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_10__.a)(),N=b;


/***/ }),

/***/ 29796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ p),
/* harmony export */   b: () => (/* binding */ g)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4130);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;const l="esri.geometry.support.MeshVertexAttributes",c=_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(l);let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return g(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},c)}castPosition(t){t&&t instanceof Float32Array&&c.warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return g(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},c)}castUv(t){return g(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},c)}castNormal(t){return g(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},c)}castTangent(t){return g(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},c)}clone(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.position),uv:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.uv),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.tangent),color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.color)};return new i(t)}clonePositional(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.position),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.tangent),uv:this.uv,color:this.color};return new i(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,null!=this.uv&&(t+=this.uv.byteLength),null!=this.normal&&(t+=this.normal.byteLength),null!=this.tangent&&(t+=this.tangent.byteLength),null!=this.color&&(t+=this.color.byteLength),t}};function u(t,o,r,n){const{loggerTag:e,stride:s}=o;return t.length%s!=0?(n.error(e,`Invalid array length, expected a multiple of ${s}`),new r([])):t}function g(t,o,r,n,e){if(!t)return t;if(t instanceof o)return u(t,n,o,e);for(const s of r)if(t instanceof s)return u(new o(t),n,o,e);if(Array.isArray(t))return u(new o(t),n,o,e);{const n=r.map((t=>`'${t.name}'`));return e.error(`Failed to set property, expected one of ${n}, but got ${t.constructor.name}`),new o([])}}function y(t,o,r){o[r]=m(t)}function m(t){const o=new Array(t.length);for(let r=0;r<t.length;r++)o[r]=t[r];return o}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:y}})],p.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("color")],p.prototype,"castColor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({nonNullable:!0,json:{write:y}})],p.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("position")],p.prototype,"castPosition",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:y}})],p.prototype,"uv",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("uv")],p.prototype,"castUv",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:y}})],p.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("normal")],p.prototype,"castNormal",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:y}})],p.prototype,"tangent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("tangent")],p.prototype,"castTangent",null),p=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)(l)],p);


/***/ }),

/***/ 69175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $I: () => (/* binding */ w),
/* harmony export */   AU: () => (/* binding */ g),
/* harmony export */   Cr: () => (/* binding */ v),
/* harmony export */   Zz: () => (/* binding */ U),
/* harmony export */   g7: () => (/* binding */ x),
/* harmony export */   i4: () => (/* binding */ q),
/* harmony export */   up: () => (/* binding */ z),
/* harmony export */   vt: () => (/* binding */ h),
/* harmony export */   yo: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports copy, fromValues, setAngle, wrap, wrapAxisAngle */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76743);
/* harmony import */ var _chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46991);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22279);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function h(n=z){return[n[0],n[1],n[2],n[3]]}function j(n,r,t,u){return d(n,r,t,u,C)}function k(n,r){return d(n[0],n[1],n[2],r,C)}function b(n,r=h()){return d(n[0],n[1],n[2],n[3],r)}function d(n,r,t,u,o=h()){return o[0]=n,o[1]=r,o[2]=t,o[3]=u,o}function q(n,r,t=h()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.c)(l(t),n),t[3]=r,t}function v(n,r,t=h()){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.b)(t,n,r),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.n)(t,t),t[3]=-(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_3__.d)(n,r),t}function U(r,s,c=h()){return (0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.s)(A,l(r),w(r)),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.s)(B,l(s),w(s)),(0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.m)(A,B,A),y(c,(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .rad2deg */ .KJ)((0,_chunks_quat_js__WEBPACK_IMPORTED_MODULE_1__.g)(l(c),A)))}function g(n,r,t,u=h()){return q(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.U,n,D),q(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.b,r,E),q(_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.d,t,F),U(D,E,D),U(D,F,u),u}function l(n){return n}function x(n){return n[3]}function w(n){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(n[3])}function y(n,r){return n[3]=r,n}const z=[0,0,1,0],A=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(),B=(0,_chunks_quatf64_js__WEBPACK_IMPORTED_MODULE_2__.a)(),C=h(),D=h(),E=h(),F=h();


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

/***/ 21690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bq: () => (/* binding */ o),
/* harmony export */   Qp: () => (/* binding */ i),
/* harmony export */   WN: () => (/* binding */ A),
/* harmony export */   dK: () => (/* binding */ v),
/* harmony export */   eN: () => (/* binding */ h),
/* harmony export */   fH: () => (/* binding */ N),
/* harmony export */   "in": () => (/* binding */ y),
/* harmony export */   yr: () => (/* binding */ u)
/* harmony export */ });
/* unused harmony exports assetIsOnService, isDisplayAsset, isDisplaySource, sourceIsOnService */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85569);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40906);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class i{constructor(t,r,e){this.assetName=t,this.assetMimeType=r,this.parts=e}equals(t){return this===t||this.assetName===t.assetName&&this.assetMimeType===t.assetMimeType&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(this.parts,t.parts,((t,r)=>t.equals(r)))}isOnService(t){return this.parts.every((r=>r.isOnService(t)))}makeHash(){let t="";for(const r of this.parts)t+=r.partHash;return t}async toBlob(t){const{parts:r}=this;if(1===r.length)return r[0].toBlob(t);const s=await Promise.all(r.map((r=>r.toBlob(t))));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(t),new Blob(s)}}class o{constructor(t,r){this.partUrl=t,this.partHash=r}equals(t){return this===t||this.partUrl===t.partUrl&&this.partHash===t.partHash}isOnService(t){return this.partUrl.startsWith(`${t.path}/assets/`)}async toBlob(r){const{data:s}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(this.partUrl,{responseType:"blob"});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(r),s}}function u(t){return p(t?.source)}function c(t){if(!Array.isArray(t))return!1;return t.every((t=>t instanceof i))}const f=/^(model\/gltf\+json)|(model\/gltf-binary)$/,l=/\.(gltf|glb)/i;function p(t){if(!t)return!1;if(Array.isArray(t)){return t.some(m)}return m(t)}function m(t){if(t instanceof File){const{type:r,name:e}=t;return f.test(r)||l.test(e)}return f.test(t.assetMimeType)||l.test(t.assetName)}function h(t,r){if(!t)return!1;const{source:e}=t;return g(e,r)}function y(t,r){if(t===r)return!0;const{source:e}=t,{source:s}=r;if(e===s)return!0;if(c(e)&&c(s)){if(e.length!==s.length)return!1;const t=(t,r)=>t.assetName<r.assetName?-1:t.assetName>r.assetName?1:0,r=[...e].sort(t),n=[...s].sort(t);for(let e=0;e<r.length;++e)if(!r[e].equals(n[e]))return!1;return!0}return!1}function g(t,r){if(Array.isArray(t)){const e=t;return e.length>0&&e.every((t=>b(t,r)))}return b(t,r)}function b(t,r){return t instanceof i&&t.isOnService(r)}function N(t,r){return t instanceof File?(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__/* .getFileFormatId */ .rq)(t,r):(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__/* .getMimeTypeFormatId */ .R_)(t.assetMimeType,r)??(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_3__/* .getFilenameFormatId */ .E1)(t.assetName,r)}function A(t){return Array.isArray(t)?t:[t]}function v(t){return!!t.original}


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

/***/ 87773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ r),
/* harmony export */   O: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function r(e,r){return e.isGeographic||e.isWebMercator&&(r?.geographic??!0)}function o(r,o,g){const i=!r.isGeoreferenced;null!=g?.geographic&&g.geographic!==i&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger(o).warnOnce(`Specifying the 'geographic' parameter (${g.geographic}) for a Mesh vertex space of type "${r.type}" is not supported. This parameter will be ignored.`)}


/***/ }),

/***/ 97519:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $y: () => (/* binding */ U),
/* harmony export */   NW: () => (/* binding */ V),
/* harmony export */   YL: () => (/* binding */ D),
/* harmony export */   bA: () => (/* binding */ q),
/* harmony export */   h7: () => (/* binding */ E),
/* harmony export */   project: () => (/* binding */ I),
/* harmony export */   qD: () => (/* binding */ B)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76287);
/* harmony import */ var _chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37046);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46615);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97303);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(84119);
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90166);
/* harmony import */ var _MeshGeoreferencedRelativeVertexSpace_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(29317);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(97557);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(99218);
/* harmony import */ var _MeshTransform_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8695);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24121);
/* harmony import */ var _geographicUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(87773);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72188);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function U(n,t,e){return (0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .isGeographicMesh */ .D)(t.spatialReference,e)?W(n,t,e):L(n,t,e)}function V(n,t=_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I){const{position:e,normal:r,tangent:o}=n;return{position:(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(new Float64Array(e.length),e,t),normal:null!=r?(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .transformNormal */ .qs)(r,new Float32Array(r.length),t):null,tangent:null!=o?(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .transformTangent */ .KM)(o,new Float32Array(o.length),t):null}}function q(n,t,e,r){const{position:o,normal:i,tangent:a}=n;if(!t.isRelative)return{position:o,normal:i,tangent:a};return U(V(n,e?.localMatrix),t.getOriginPoint(r),{geographic:!t.isGeoreferenced})}function B(n,t,e){if(e?.useTransform){const{position:r,normal:o,tangent:i}=n,{x:a,y:s,z:l}=t,c=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.f)(a,s,l??0);return{vertexAttributes:{position:r,normal:o,tangent:i},vertexSpace:e.geographic??1?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A({origin:c}):new _MeshGeoreferencedRelativeVertexSpace_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A({origin:c}),transform:new _MeshTransform_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A}}return{vertexAttributes:U(n,t,e),vertexSpace:new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A,transform:null}}function D(n,t,e){return (0,_geographicUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .isGeographicMesh */ .D)(t.spatialReference,e)?K(n,t,e):J(n,t,e)}function E(n,t,e,r,o){if(!t.isRelative)return D(n,r,o);const{spatialReference:i}=r,a=q(n,t,e,i);return r.equals(t.getOriginPoint(i))?J(a,r,o):D(a,r,o)}function I({positions:n,transform:t,vertexSpace:e,inSpatialReference:i,outSpatialReference:a,outPositions:l,localMode:f}){const p=e.isRelative?e.origin:_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.Z,w=e.isRelative?t?.localMatrix??_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I:_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I;if(e.isGeoreferenced){const t=l??(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__/* .newDoubleArray */ .jh)(n.length);if((0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.a)(w,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.I)?(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__/* .copyInto */ .s)(t,n):(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(t,n,w),!(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.h)(p,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.Z)){const[n,e,r]=p;for(let o=0;o<t.length;o+=3)t[o]+=n,t[o+1]+=e,t[o+2]+=r}return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_10__.projectBuffer)(t,i,0,t,a,0,t.length/3),t}let A=i;const x=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getSphericalPCPF */ .lO)(i);A=a.isWebMercator&&f||!(0,_projection_js__WEBPACK_IMPORTED_MODULE_7__.canProjectWithoutEngine)(i,x)?A:x,(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_9__/* .computeTranslationToOriginAndRotation */ .l)(i,p,_,A),(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.m)(_,_,w);const v=l??(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_11__/* .newDoubleArray */ .jh)(n.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(v,n,_),(0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_10__.projectBuffer)(v,A,0,v,a,0,v.length/3),v}function L(n,t,e){const r=new Float64Array(n.position.length),o=n.position,i=t.x,a=t.y,s=t.z??0,l=$(e?e.unit:null,t.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=o[c]*l+i,r[c+1]=o[c+1]*l+a,r[c+2]=o[c+2]*l+s;return{position:r,normal:n.normal,tangent:n.tangent}}function W(n,t,e){const r=t.spatialReference,o=N(t,e,_),i=new Float64Array(n.position.length),a=Z(n.position,o,r,i),s=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_6__.n)(tn,o);return{position:a,normal:C(a,i,n.normal,s,r),tangent:H(a,i,n.tangent,s,r)}}function Z(n,t,e,r){(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(r,n,t);const o=new Float64Array(n.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectFromPCPF */ .$5)(r,o,e)}function C(n,t,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,e,r),(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectNormalFromPCPF */ .si)(i,n,t,o,i),i}function H(n,t,e,r,o){if(null==e)return null;const i=new Float32Array(e.length);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,e,r,4);for(let a=3;a<i.length;a+=4)i[a]=e[a];return (0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectTangentFromPCPF */ .Mv)(i,n,t,o,i),i}function J(n,t,e){const r=new Float64Array(n.position.length),o=n.position,i=t.x,a=t.y,s=t.z??0,l=$(e?e.unit:null,t.spatialReference);for(let c=0;c<o.length;c+=3)r[c]=(o[c]-i)/l,r[c+1]=(o[c+1]-a)/l,r[c+2]=(o[c+2]-s)/l;return{position:r,normal:n.normal,tangent:n.tangent}}function K(n,t,e){const r=t.spatialReference;N(t,e,_);const o=(0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.i)(nn,_),a=new Float64Array(n.position.length),s=Q(n.position,r,o,a),l=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_6__.n)(tn,o);return{position:s,normal:X(n.normal,n.position,a,r,l),tangent:Y(n.tangent,n.position,a,r,l)}}function N(n,t,e){(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_9__/* .computeTranslationToOriginAndRotation */ .l)(n.spatialReference,[n.x,n.y,n.z??0],e,(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .getSphericalPCPF */ .lO)(n.spatialReference));const r=$(t?t.unit:null,n.spatialReference);return (0,_chunks_mat4_js__WEBPACK_IMPORTED_MODULE_2__.b)(e,e,[r,r,r]),e}function Q(n,t,e,r){const o=(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectToPCPF */ .gr)(n,t,r),i=new Float64Array(o.length);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.t)(i,o,e),i}function X(n,t,e,r,o){if(null==n)return null;const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectNormalToPCPF */ .X4)(n,t,e,r,new Float32Array(n.length));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,i,o),i}function Y(n,t,e,r,o){if(null==n)return null;const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_18__/* .projectTangentToPCPF */ .xA)(n,t,e,r,new Float32Array(n.length));return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_16__.a)(i,i,o,4),i}function $(e,r){if(null==e)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerCartesianUnitForSR */ .KX)(r);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(o,"meters",e)}const _=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(),nn=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(),tn=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_1__.a)();


/***/ }),

/***/ 72188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ O),
/* harmony export */   KM: () => (/* binding */ M),
/* harmony export */   Mv: () => (/* binding */ v),
/* harmony export */   X4: () => (/* binding */ j),
/* harmony export */   gr: () => (/* binding */ h),
/* harmony export */   qs: () => (/* binding */ E),
/* harmony export */   si: () => (/* binding */ _),
/* harmony export */   xA: () => (/* binding */ R)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46615);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76287);
/* harmony import */ var _chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56192);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(22279);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84119);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87926);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96082);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57813);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24121);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const g=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.geometry.support.meshUtils.normalProjection");function j(r,e,o,t,n){return k(t)?(V(U.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n)),n):(g.error("Cannot convert spatial reference to PCPF"),n)}function _(r,e,o,t,n){return k(t)?(V(U.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n)),n):(g.error("Cannot convert to spatial reference from PCPF"),n)}function h(r,e,o){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,e,0,o,(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSphericalPCPF */ .lO)(e),0,r.length/3),o}function O(r,e,o){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSphericalPCPF */ .lO)(o),0,e,o,0,r.length/3),e}function E(r,t,n){return (0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.n)(N,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,r,N),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.i)(N)||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.n)(t,t),t}function M(r,t,n){if((0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.n)(N,n),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.a)(t,r,N,4),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.i)(N)||(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_12__.n)(t,t,4),r!==t)for(let e=3;e<r.length;e+=4)t[e]=r[e];return t}function R(r,e,o,t,n){if(!k(t))return g.error("Cannot convert spatial reference to PCPF"),n;V(U.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function v(r,e,o,t,n){if(!k(t))return g.error("Cannot convert to spatial reference from PCPF"),n;V(U.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(r,16),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(o),t,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_11__/* .BufferViewVec3f */ .xs.fromTypedArray(n,16));for(let f=3;f<r.length;f+=4)n[f]=r[f];return n}function V(r,e,o,f,a,c){if(!e)return;const u=o.count,y=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .getSphericalPCPF */ .lO)(a);if(B(a))for(let s=0;s<u;s++)f.getVec(s,b),e.getVec(s,S),(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(y,b,w,y),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.f)(N,w),r===U.FROM_PCPF&&(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.t)(N,N),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.t)(S,S,N),c.setVec(s,S);else for(let m=0;m<u;m++){f.getVec(m,b),e.getVec(m,S),(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(y,b,w,y),(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.f)(N,w);const a=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .y2lat */ .jg)(o.get(m,1));let u=Math.cos(a);r===U.TO_PCPF&&(u=1/u),N[0]*=u,N[1]*=u,N[2]*=u,N[3]*=u,N[4]*=u,N[5]*=u,r===U.FROM_PCPF&&(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_1__.t)(N,N),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.t)(S,S,N),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(S,S),c.setVec(m,S)}return c}function k(r){return B(r)||L(r)}function B(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isCGCS2000 */ .x1)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMars */ .q8)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .isMoon */ .KQ)(r)}function L(r){return r.isWebMercator}var U;!function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(U||(U={}));const b=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),S=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_5__.c)(),w=(0,_chunks_mat4f64_js__WEBPACK_IMPORTED_MODULE_3__.a)(),N=(0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__.a)();


/***/ }),

/***/ 50958:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ S),
/* harmony export */   Q7: () => (/* binding */ w)
/* harmony export */ });
/* unused harmony exports area2d, copy, create, distance2, fromValues, intersectRay, wrap */
/* harmony import */ var _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92114);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22279);
/* harmony import */ var _lineSegment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22759);
/* harmony import */ var _vectorStacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45573);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function j(t){return t?{p0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.g)(t.p0),p1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.g)(t.p1),p2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.g)(t.p2)}:{p0:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),p1:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),p2:(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)()}}function h(t,n,e){const r=x.get();return r.p0=t,r.p1=n,r.p2=e,r}function k(t,n=j()){return b(t.p0,t.p1,t.p2,n)}function b(t,e,r,o=j()){return n(o.p0,t),n(o.p1,e),n(o.p2,r),o}function l(t,n){const p=t.p0,c=t.p1,s=t.p2,i=e(m.get(),c,p),u=e(m.get(),s,c),f=e(m.get(),p,s),j=e(m.get(),n,p),h=e(m.get(),n,c),k=e(m.get(),n,s),b=r(i,i,f),l=o(r(m.get(),i,b),j),v=o(r(m.get(),u,b),h),S=o(r(m.get(),f,b),k);if(l>0&&v>0&&S>0){const t=o(b,j);return t*t/o(b,b)}const d=a(g(p,i,M.get()),n),w=a(g(c,u,M.get()),n),x=a(g(s,f,M.get()),n);return Math.min(d,w,x)}function v(t,n,e){const r=1e-5,{direction:o,origin:s}=n,{p0:i,p1:u,p2:f}=t,a=u[0]-i[0],g=u[1]-i[1],m=u[2]-i[2],j=f[0]-i[0],h=f[1]-i[1],k=f[2]-i[2],b=o[1]*k-h*o[2],l=o[2]*j-k*o[0],v=o[0]*h-j*o[1],S=a*b+g*l+m*v;if(S>-r&&S<r)return!1;const d=1/S,w=s[0]-i[0],M=s[1]-i[1],x=s[2]-i[2],O=d*(w*b+M*l+x*v);if(O<0||O>1)return!1;const V=M*m-g*x,q=x*a-m*w,y=w*g-a*M,z=d*(o[0]*V+o[1]*q+o[2]*y);if(z<0||O+z>1)return!1;if(e){p(e,o,d*(j*V+h*q+k*y)),c(e,s,e)}return!0}function S(t,n,e){const r=n[0]-t[0],o=n[1]-t[1],p=e[0]-t[0],c=e[1]-t[1];return.5*Math.abs(r*c-o*p)}function d(t){return S(t.p0,t.p1,t.p2)}function w(t,n,o){return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.f)(O,n,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.f)(V,o,t),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.l)((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_0__.b)(O,O,V))/2}const M=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I(_lineSegment_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt),x=new _core_ObjectStack_js__WEBPACK_IMPORTED_MODULE_4__/* .ObjectStack */ .I((()=>j())),O=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)(),V=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_1__.c)();


/***/ }),

/***/ 17566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Wq: () => (/* binding */ u),
/* harmony export */   jp: () => (/* binding */ g),
/* harmony export */   lO: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony export isCounterClockwise */
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16528);
/* harmony import */ var _Axis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58331);
/* harmony import */ var _coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65319);
/* harmony import */ var _DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90166);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42965);
/* harmony import */ var _meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52209);
/* harmony import */ var _views_3d_layers_graphics_polygonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92986);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function f(t){const e=g(t.rings,t.hasZ,u.CCW_IS_HOLE,t.spatialReference),s=new Array;let c=0,f=0;for(const r of e.polygons){const t=r.count,l=r.index,h=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .doubleSubArray */ .l5)(e.position,3*l,3*t),g=r.holeIndices.map((n=>n-l)),a=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__/* .compactIndices */ .Dg)((0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_0__.e)(h,g,3));s.push({position:h,faces:a}),c+=h.length,f+=a.length}const a=h(s,c,f),p=Array.isArray(a.position)?(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_5__/* .deduplicate */ .b)(a.position,3,{originalIndices:a.faces}):(0,_meshUtils_deduplicate_js__WEBPACK_IMPORTED_MODULE_5__/* .deduplicate */ .b)(a.position.buffer,6,{originalIndices:a.faces});return a.position=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .doubleArrayFrom */ .xm)(new Float64Array(p.buffer)),a.faces=p.indices,a}function h(n,t,e){if(1===n.length)return n[0];const o=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .newDoubleArray */ .jh)(t),r=new Array(e);let l=0,c=0,f=0;for(const s of n){for(let n=0;n<s.position.length;n++)o[l++]=s.position[n];for(const n of s.faces)r[c++]=n+f;f=l/3}return{position:o,faces:(0,_Indices_js__WEBPACK_IMPORTED_MODULE_4__/* .compactIndices */ .Dg)(r)}}function g(n,t,e,o){const r=n.length,i=new Array(r),l=new Array(r),c=new Array(r);let f=0,h=0,g=0,d=0;for(let s=0;s<r;++s)d+=n[s].length;const m=(0,_DoubleArray_js__WEBPACK_IMPORTED_MODULE_3__/* .newDoubleArray */ .jh)(3*d);let y=0;for(let s=r-1;s>=0;s--){const d=n[s],A=e===u.CCW_IS_HOLE&&p(d,t,o);if(A&&1!==r)i[f++]=d;else{let n=d.length;for(let t=0;t<f;++t)n+=i[t].length;const e={index:y,pathLengths:new Array(f+1),count:n,holeIndices:new Array(f)};e.pathLengths[0]=d.length,d.length>0&&(c[g++]={index:y,count:d.length}),y=A?a(d,d.length-1,-1,m,y,d.length,t):a(d,0,1,m,y,d.length,t);for(let o=0;o<f;++o){const n=i[o];e.holeIndices[o]=y,e.pathLengths[o+1]=n.length,n.length>0&&(c[g++]={index:y,count:n.length}),y=a(n,0,1,m,y,n.length,t)}f=0,e.count>0&&(l[h++]=e)}}for(let s=0;s<f;++s){const n=i[s];n.length>0&&(c[g++]={index:y,count:n.length}),y=a(n,0,1,m,y,n.length,t)}return l.length=h,c.length=g,{position:m,polygons:l,outlines:c}}function a(n,t,e,o,r,s,i){r*=3;for(let l=0;l<s;++l){const s=n[t];o[r++]=s[0],o[r++]=s[1],o[r++]=i?s[2]:0,t+=e}return r/3}function p(n,o,r){if(o){const o=n.length-1,s=(0,_views_3d_layers_graphics_polygonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .leastSignificantAxis */ .zB)(n,o,r);if(s===_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X)return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z);if(s===_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y)return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Z)}return!(0,_coordsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isClockwise */ .$3)(n,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.X,_Axis_js__WEBPACK_IMPORTED_MODULE_1__/* .Axis */ ._.Y)}var u;!function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(u||(u={}));


/***/ }),

/***/ 96341:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assetMapFromAssetMapsJSON: () => (/* binding */ meshFeatureSet_M),
  extractMesh: () => (/* binding */ meshFeatureSet_S),
  meshFeatureSetFromJSON: () => (/* binding */ meshFeatureSet_y)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(25707);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(45307);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(84410);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Geometry.js
var Geometry = __webpack_require__(88266);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js
var axisAngleDegrees = __webpack_require__(69175);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshComponent.js
var MeshComponent = __webpack_require__(21104);
;// ../node_modules/@arcgis/core/geometry/support/meshErrors.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class meshErrors_e extends core_Error/* default */.A{constructor(){super("mesh-not-loaded","Mesh must be loaded before applying operations")}}class t extends core_Error/* default */.A{constructor(){super("component-not-found","Provided component is not part of the list of components")}}class n extends core_Error/* default */.A{constructor(){super("invalid-polygon","expected polygon to be a Polygon instance")}}class s extends core_Error/* default */.A{constructor(){super("invalid-input:location","Expected location to be a Point instance")}}class meshErrors_r extends core_Error/* default */.A{constructor(){super("invalid-input:no-layer","A layer is needed to convert the files")}}class meshErrors_c extends core_Error/* default */.A{constructor(){super("invalid-input:no-model","No supported model found")}}class l extends core_Error/* default */.A{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedRelativeVertexSpace.js
var MeshGeoreferencedRelativeVertexSpace = __webpack_require__(29317);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(97557);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(99218);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshTransform.js
var MeshTransform = __webpack_require__(8695);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var MeshVertexAttributes = __webpack_require__(29796);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/triangulationUtils.js
var triangulationUtils = __webpack_require__(17566);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/georeference.js
var georeference = __webpack_require__(97519);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/bounds.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function bounds_e({xmin:t,xmax:e,ymin:i,ymax:o,zmin:r,zmax:x},s,c,f){r??=0,x??=0,a??=new Float64Array(24);const l=a;return l[0]=t,l[1]=i,l[2]=r,l[3]=t,l[4]=o,l[5]=r,l[6]=e,l[7]=o,l[8]=r,l[9]=e,l[10]=i,l[11]=r,l[12]=t,l[13]=i,l[14]=x,l[15]=t,l[16]=o,l[17]=x,l[18]=e,l[19]=o,l[20]=x,l[21]=e,l[22]=i,l[23]=x,(0,georeference.project)({positions:l,transform:s,vertexSpace:c,inSpatialReference:f,outSpatialReference:f,outPositions:l}),m(l,f)}let a=null;function m(n,e){let a=1/0,m=1/0,i=1/0,o=-1/0,r=-1/0,x=-1/0;const s=n.length;let c=0;for(;c<s;){const t=n[c++],e=n[c++],s=n[c++];a=Math.min(a,t),m=Math.min(m,e),i=Math.min(i,s),o=Math.max(o,t),r=Math.max(r,e),x=Math.max(x,s)}return new Extent/* default */.A({xmin:a,ymin:m,zmin:i,xmax:o,ymax:r,zmax:x,spatialReference:e})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(42609);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js
var geographicUtils = __webpack_require__(87773);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p="esri.geometry.support.meshUtils.centerAt";function centerAt_l(e,t,i){if(!e.vertexAttributes?.position)return;const{vertexSpace:r}=e,o=i?.origin??e.origin;if(r.isRelative)(0,geographicUtils/* validateGeographicFlag */.O)(r,p,i),f(e,t,o);else{(0,geographicUtils/* isGeographicMesh */.D)(e.spatialReference,i)?g(e,t,o):d(e,t,o)}}function f(n,s,a){const{vertexSpace:c}=n;if(!c.isRelative)return;const l=u,f=j;if(!(0,projectPointToVector/* projectPointToVector */.g)(s,f,n.spatialReference))return void Logger/* default */.A.getLogger(p).error(`Failed to project centerAt location (wkid:${s.spatialReference.wkid}) to mesh spatial reference (wkid:${n.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!(0,projectPointToVector/* projectPointToVector */.g)(a,l,n.spatialReference)){const t=n.origin;l[0]=t.x,l[1]=t.y,l[2]=t.z,Logger/* default */.A.getLogger(p).error(`Failed to project specified origin (wkid:${a.spatialReference.wkid}) to mesh spatial reference (wkid:${n.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const g=(0,vec3.f)(k,f,l),d=c.origin;c.origin=(0,vec3.g)((0,vec3f64.c)(),d,g)}function g(e,t,i){const r=(0,georeference/* ungeoreference */.YL)(e.vertexAttributes,i,{geographic:!0}),{position:o,normal:n,tangent:s}=(0,georeference/* georeference */.$y)(r,t,{geographic:!0});e.vertexAttributes.position=o,e.vertexAttributes.normal=n,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}function d(t,i,r){const n=u,s=j;if((0,projectPointToVector/* projectPointToVector */.g)(i,s,t.spatialReference)){if(!(0,projectPointToVector/* projectPointToVector */.g)(r,n,t.spatialReference)){const i=t.origin;n[0]=i.x,n[1]=i.y,n[2]=i.z,Logger/* default */.A.getLogger(p).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}centerAt_m(t.vertexAttributes.position,s,n),t.vertexAttributesChanged()}else Logger/* default */.A.getLogger(p).error(`Failed to project centerAt location (wkid:${i.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}function centerAt_m(e,t,i){if(e)for(let r=0;r<e.length;r+=3)for(let o=0;o<3;o++)e[r+o]+=t[o]-i[o]}const j=(0,vec3f64.c)(),u=(0,vec3f64.c)(),k=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/assets.js
var assets = __webpack_require__(99050);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function c(e,r,o){const{source:n}=r,{loadGLTFMesh:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 1596).then(__webpack_require__.bind(__webpack_require__, 91596)),o),a=await loadExternal_m(n,o);(0,promiseUtils/* throwIfAborted */.Te)(o);const c=i(new Point/* default */.A({x:0,y:0,z:0,spatialReference:e.spatialReference}),a.url,{resolveFile:loadExternal_u(a),requestFile:void 0,useTransform:!0,signal:o?.signal,expectedType:a.type});c.then((()=>a.dispose()),(()=>a.dispose()));const{vertexAttributes:f,components:p}=await c;e.vertexAttributes=f,e.components=p}function loadExternal_u(e){const t=(0,urlUtils/* removeFile */.nM)(e.url);return s=>{const r=(0,urlUtils/* makeRelative */.V1)(s,t,t),o=r?r.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??s}}async function loadExternal_m(t,s){if(Array.isArray(t)){if(!t.length)throw new core_Error/* default */.A("mesh-load-external:missing-assets","There must be at least one file to load");return t[0]instanceof File?h(t):w(t,s)}return loadExternal_p(t)}async function loadExternal_f(e,t){const{parts:r,assetMimeType:o,assetName:n}=e;if(1===r.length)return new T(r[0].partUrl);const i=await e.toBlob(t);return (0,promiseUtils/* throwIfAborted */.Te)(t),T.fromBlob(i,v(n,o))}function loadExternal_p(e){return T.fromBlob(e,v(e.name,e.type))}function h(e){return loadExternal_j(e.map((e=>({name:e.name,mimeType:e.type,source:loadExternal_p(e)}))))}async function w(e,t){const i=await (0,promiseUtils/* allSettledValues */.nA)(e.map((async e=>{const r=await loadExternal_f(e);return (0,promiseUtils/* throwIfAborted */.Te)(t),{name:e.assetName,mimeType:e.assetMimeType,source:r}})));if((0,promiseUtils/* isAborted */.G4)(t))throw i.forEach((e=>e.source.dispose())),(0,promiseUtils/* createAbortError */.NK)();return loadExternal_j(i)}const y=/^model\/gltf\+json$/,loadExternal_d=/^model\/gltf-binary$/,loadExternal_g=/\.gltf$/i,b=/\.glb$/i;function loadExternal_j(t){const s=new Map;let r,o=null;for(const{name:e,mimeType:n,source:i}of t)null===o&&(y.test(n)||loadExternal_g.test(e)?(o=i.url,r="gltf"):(loadExternal_d.test(n)||b.test(e))&&(o=i.url,r="glb")),s.set(e,i.url),i.files.forEach(((e,t)=>s.set(t,e)));if(null==o)throw new core_Error/* default */.A("mesh-load-external:missing-files","Missing files to load external mesh source");return new T(o,(()=>t.forEach((({source:e})=>e.dispose()))),s,r)}class T{constructor(e,t=(()=>{}),s=new Map,r){this.url=e,this.dispose=t,this.files=s,this.type=r}static fromBlob(e,t){const s=URL.createObjectURL(e);return new T(s,(()=>URL.revokeObjectURL(s)),void 0,t)}}function v(e,t){return y.test(t)||loadExternal_g.test(e)?"gltf":loadExternal_d.test(t)||loadExternal_g.test(e)?"glb":void 0}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(21690);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let Metadata_a=class extends Clonable/* Clonable */.P{constructor(){super(),this.externalSources=new Collection/* default */.A,this._explicitDisplaySource=null,this.addHandles((0,reactiveUtils.on)((()=>this.externalSources),"after-remove",(({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,External/* isDisplayExternal */.yr)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((r=>!(0,External/* externalSourcesAreEqual */["in"])(r,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((r=>(0,External/* externalIsOnService */.eN)(r,e)))}get _implicitDisplaySource(){return this.externalSources.find(External/* isDisplayExternal */.yr)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"externalSources",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"displaySource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"_implicitDisplaySource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"_explicitDisplaySource",void 0),Metadata_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.geometry.support.meshUtils.Metadata")],Metadata_a);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3.js
var mat3 = __webpack_require__(46615);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat3f64.js
var mat3f64 = __webpack_require__(76287);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var spatialReferenceEllipsoidUtils = __webpack_require__(32937);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js
var computeTranslationToOriginAndRotation = __webpack_require__(59538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var projection = __webpack_require__(72188);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/offset.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const offset_j="esri.geometry.support.meshUtils.offset";function offset_v(t,e,n){if(!t.vertexAttributes?.position)return;const{vertexSpace:r}=t;if(r.isRelative)(0,geographicUtils/* validateGeographicFlag */.O)(r,offset_j,n),x(r,e);else{(0,geographicUtils/* isGeographicMesh */.D)(t.spatialReference,n)?A(t,e):offset_b(t,e)}}function x(t,e){const n=t.origin;t.origin=(0,vec3.g)((0,vec3f64.c)(),n,e)}function A(e,n){const r=e.spatialReference,i=e.vertexAttributes.position,a=e.vertexAttributes.normal,u=e.vertexAttributes.tangent,j=new Float64Array(i.length),v=null!=a?new Float32Array(a.length):null,x=null!=u?new Float32Array(u.length):null,A=e.extent.center,b=offset_y;(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(r,[A.x,A.y,A.z],R,(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(r)),(0,mat3.f)(offset_d,R),(0,vec3.t)(b,n,offset_d),(0,projection/* projectToPCPF */.gr)(i,r,j),null!=a&&null!=v&&(0,projection/* projectNormalToPCPF */.X4)(a,i,j,r,v),null!=u&&null!=x&&(0,projection/* projectTangentToPCPF */.xA)(u,i,j,r,x),offset_k(j,b),(0,projection/* projectFromPCPF */.$5)(j,i,r),null!=a&&null!=v&&(0,projection/* projectNormalFromPCPF */.si)(v,i,j,r,a),null!=u&&null!=x&&(0,projection/* projectTangentFromPCPF */.Mv)(x,i,j,r,u),e.vertexAttributesChanged()}function offset_b(t,e){offset_k(t.vertexAttributes.position,e),t.vertexAttributesChanged()}function offset_k(t,e){if(t)for(let n=0;n<t.length;n+=3)for(let r=0;r<3;r++)t[n+r]+=e[r]}const offset_y=(0,vec3f64.c)(),R=(0,mat4f64.a)(),offset_d=(0,mat3f64.a)();

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:n}=primitives_y,r=4*t.length,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(2*t.length*3);let l=0,c=0,f=0,u=0;for(let h=0;h<t.length;h++){const r=t[h],p=l/3;for(const t of e)i[u++]=p+t;const w=r.corners;for(let t=0;t<4;t++){const e=w[t];let i=0;a[f++]=.25*n[t][0]+r.uvOrigin[0],a[f++]=r.uvOrigin[1]-.25*n[t][1];for(let t=0;t<3;t++)0!==r.axis[t]?(o[l++]=.5*r.axis[t],s[c++]=r.axis[t]):(o[l++]=.5*e[i++],s[c++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function primitives_l(t,e){const n=t.components[0],r=n.faces,s=primitives_d[e],a=6*s,i=new Array(6),l=new Array(r.length-6);let c=0,f=0;for(let o=0;o<r.length;o++)o>=a&&o<a+6?i[c++]=r[o]:l[f++]=r[o];if(null!=t.vertexAttributes.uv){const e=new Float32Array(t.vertexAttributes.uv),n=4*s*2,r=[0,1,1,1,1,0,0,0];for(let t=0;t<r.length;t++)e[n+t]=r[t];t.vertexAttributes.uv=e}return t.components=[new MeshComponent/* default */.A({faces:i,material:n.material}),new MeshComponent/* default */.A({faces:l})],t}function primitives_c(t=0){const e=Math.round(8*2**t),n=2*e,r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*((e-1)*n*2));let l=0,c=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,r=Math.cos(t),p=Math.sin(t);M[2]=p;const w=0===h||h===e,m=w?n-1:n;for(let v=0;v<=m;v++){const t=v/m*2*Math.PI;M[0]=-Math.sin(t)*r,M[1]=Math.cos(t)*r;for(let e=0;e<3;e++)o[l]=.5*M[e],s[l]=M[e],++l;a[c++]=(v+(w?.5:0))/n,a[c++]=h/e,0!==h&&v!==n&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-n),1!==h&&(i[f++]=u,i[f++]=u-n,i[f++]=u-n-1)),u++}}return{position:o,normal:s,uv:a,faces:i}}function primitives_f(t=0){const e=5,n=Math.round(16*2**t),r=(e-1)*(n+1)+2*n,o=new Float64Array(3*r),s=new Float32Array(3*r),a=new Float32Array(2*r),i=new Uint32Array(3*(4*n));let l=0,c=0,f=0,u=0,h=0;for(let p=0;p<=e;p++){const t=0===p||p===e,r=p<=1||p>=e-1,w=2===p||4===p,m=t?n-1:n;for(let v=0;v<=m;v++){const g=v/m*2*Math.PI,A=t?0:.5;M[0]=A*Math.sin(g),M[1]=A*-Math.cos(g),M[2]=p<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=M[t],s[c++]=r?2===t?p<=1?1:-1:0:2===t?0:M[t]/A;a[f++]=(v+(t?.5:0))/n,a[f++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,w||0===p||v===n||(p!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-n),1!==p&&(i[u++]=h,i[u++]=h-n,i[u++]=h-n-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function primitives_u(t,e){const n="number"==typeof e?e:null!=e?e.width:1,r="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:n,depth:r};case"north":case"south":return{width:n,height:r};case"east":case"west":return{depth:n,height:r}}}function primitives_h(t){const e=primitives_v.facingAxisOrderSwap[t],n=primitives_v.position,r=primitives_v.normal,o=new Float64Array(n.length),s=new Float32Array(r.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const l=e[i],c=Math.abs(l)-1,f=l>=0?1:-1;o[a]=n[t+c]*f,s[a]=r[t+c]*f,a++}}return{position:o,normal:s,uv:new Float32Array(primitives_v.uv),faces:new Uint32Array(primitives_v.faces),isPlane:!0}}const primitives_p=1,primitives_w=2,primitives_m=3,primitives_v={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[primitives_m,primitives_p,primitives_w],west:[-primitives_m,-primitives_p,primitives_w],north:[-primitives_p,primitives_m,primitives_w],south:[primitives_p,-primitives_m,primitives_w],up:[primitives_p,primitives_w,primitives_m],down:[primitives_p,-primitives_w,-primitives_m]}};function primitives_g(t,e,n){t.isPlane||primitives_A(t),primitives_x(t,n?.size);const{vertexAttributes:r,vertexSpace:i,transform:l}=(0,georeference/* georeferenceByTransform */.qD)(t,e,n);return{vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({...r,uv:t.uv}),vertexSpace:i,transform:l,components:[new MeshComponent/* default */.A({faces:t.faces,material:n?.material||null})],spatialReference:e.spatialReference}}function primitives_A(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function primitives_x(t,r){if(null==r)return;const o="number"==typeof r?[r,r,r]:[null!=r.width?r.width:1,null!=r.depth?r.depth:1,null!=r.height?r.height:1];F[0]=o[0],F[4]=o[1],F[8]=o[2];for(let n=0;n<t.position.length;n+=3){for(let e=0;e<3;e++)M[e]=t.position[n+e];(0,vec3.t)(M,M,F);for(let e=0;e<3;e++)t.position[n+e]=M[e]}if(o[0]!==o[1]||o[1]!==o[2]){F[0]=1/o[0],F[4]=1/o[1],F[8]=1/o[2];for(let r=0;r<t.normal.length;r+=3){for(let e=0;e<3;e++)M[e]=t.normal[r+e];(0,vec3.t)(M,M,F),(0,vec3.n)(M,M);for(let e=0;e<3;e++)t.normal[r+e]=M[e]}}}const primitives_y={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},primitives_d={south:0,east:1,north:2,west:3,up:4,down:5},M=(0,vec3f64.c)(),F=(0,mat3f64.a)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4.js
var mat4 = __webpack_require__(37046);
;// ../node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const rotate_T="esri.geometry.support.meshUtils.rotate";function U(t,e,r){if(!t.vertexAttributes?.position||0===e[3])return;const{spatialReference:o,vertexSpace:n}=t;if(n.isRelative){(0,geographicUtils/* validateGeographicFlag */.O)(n,rotate_T,r);const o=r?.origin??t.origin;t.transform??=new MeshTransform/* default */.A,z(t.transform,n,e,o)}else{const n=r?.origin??t.origin;(0,geographicUtils/* isGeographicMesh */.D)(o,r)?C(t,e,n):I(t,e,n)}}function z(t,e,r,o){const n=e.origin,l=(0,vec3.s)($,o.x,o.y,o.z??0),c=(0,vec3.f)($,l,n);t.applyLocalInverse(c,D),t.rotation=(0,axisAngleDegrees/* compose */.Zz)(t.rotation,r,(0,axisAngleDegrees/* create */.vt)()),t.applyLocalInverse(c,c),(0,vec3.f)(c,c,D),t.translation=(0,vec3.g)((0,vec3f64.c)(),t.translation,c)}function C(t,r,o){const n=t.spatialReference,i=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(n),s=S;(0,projectPointToVector/* projectPointToVector */.g)(o,s,i)||(0,projectPointToVector/* projectPointToVector */.g)(t.origin,s,i);const a=t.vertexAttributes.position,c=t.vertexAttributes.normal,f=t.vertexAttributes.tangent,p=new Float64Array(a.length),j=null!=c?new Float32Array(c.length):null,h=null!=f?new Float32Array(f.length):null;(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(i,s,rotate_M,i),(0,mat3.f)(O,rotate_M);const x=E;(0,vec3.t)((0,axisAngleDegrees/* axis */.yo)(E),(0,axisAngleDegrees/* axis */.yo)(r),O),x[3]=r[3],(0,projection/* projectToPCPF */.gr)(a,n,p),null!=c&&null!=j&&(0,projection/* projectNormalToPCPF */.X4)(c,a,p,n,j),null!=f&&null!=h&&(0,projection/* projectTangentToPCPF */.xA)(f,a,p,n,h),P(p,x,3,s),(0,projection/* projectFromPCPF */.$5)(p,a,n),null!=c&&null!=j&&(P(j,x,3),(0,projection/* projectNormalFromPCPF */.si)(j,a,p,n,c)),null!=f&&null!=h&&(P(h,x,4),(0,projection/* projectTangentFromPCPF */.Mv)(h,a,p,n,f)),t.vertexAttributesChanged()}function I(e,r,o){const n=S;if(!(0,projectPointToVector/* projectPointToVector */.g)(o,n,e.spatialReference)){const r=e.origin;n[0]=r.x,n[1]=r.y,n[2]=r.z,Logger/* default */.A.getLogger(rotate_T).error(`Failed to project specified origin (wkid:${o.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}P(e.vertexAttributes.position,r,3,n),P(e.vertexAttributes.normal,r,3),P(e.vertexAttributes.tangent,r,4),e.vertexAttributesChanged()}function P(t,e,r,n=vec3f64.Z){if(null!=t){(0,mat4.c)(rotate_M,(0,axisAngleDegrees/* angleRad */.$I)(e),(0,axisAngleDegrees/* axis */.yo)(e));for(let e=0;e<t.length;e+=r){for(let r=0;r<3;r++)$[r]=t[e+r]-n[r];(0,vec3.e)($,$,rotate_M);for(let r=0;r<3;r++)t[e+r]=$[r]+n[r]}}}const $=(0,vec3f64.c)(),D=(0,vec3f64.c)(),E=(0,axisAngleDegrees/* create */.vt)(),rotate_M=(0,mat4f64.a)(),O=(0,mat3f64.a)(),S=(0,vec3f64.c)();

;// ../node_modules/@arcgis/core/geometry/support/meshUtils/scale.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const scale_x="esri.geometry.support.meshUtils.scale";function scale_d(e,t,r){if(!e.vertexAttributes?.position)return;const{spatialReference:o,vertexSpace:n}=e;if(n.isRelative){(0,geographicUtils/* validateGeographicFlag */.O)(n,scale_x,r);const o=r?.origin??e.origin;e.transform??=new MeshTransform/* default */.A,scale_A(e.transform,n,t,o)}else{const n=(0,geographicUtils/* isGeographicMesh */.D)(o,r),i=r?.origin??e.origin;n?scale_b(e,t,i):scale_y(e,t,i)}}function scale_A(e,s,l,a){const c=s.origin,p=(0,vec3.s)(scale_R,a.x,a.y,a.z),f=(0,vec3.f)(scale_R,p,c);e.applyLocalInverse(f,scale_k);const u=(0,vec3.i)((0,vec3f64.c)(),e.scale,l);e.scale=u,e.applyLocalInverse(f,f),(0,vec3.f)(f,f,scale_k),e.translation=(0,vec3.g)((0,vec3f64.c)(),e.translation,f)}function scale_b(e,t,r){const o=e.spatialReference,n=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(o),i=scale_F;(0,projectPointToVector/* projectPointToVector */.g)(r,i,n)||(0,projectPointToVector/* projectPointToVector */.g)(e.origin,i,n);const s=e.vertexAttributes.position,c=e.vertexAttributes.normal,p=e.vertexAttributes.tangent,f=new Float64Array(s.length),x=null!=c?new Float32Array(c.length):null,d=null!=p?new Float32Array(p.length):null;(0,projection/* projectToPCPF */.gr)(s,o,f),null!=c&&null!=x&&(0,projection/* projectNormalToPCPF */.X4)(c,s,f,o,x),null!=p&&null!=d&&(0,projection/* projectTangentToPCPF */.xA)(p,s,f,o,d),scale_w(f,t,i),(0,projection/* projectFromPCPF */.$5)(f,s,o),null!=c&&null!=x&&(0,projection/* projectNormalFromPCPF */.si)(x,s,f,o,c),null!=p&&null!=d&&(0,projection/* projectTangentFromPCPF */.Mv)(d,s,f,o,p),e.vertexAttributesChanged()}function scale_y(t,r,o){const n=scale_F;if(!(0,projectPointToVector/* projectPointToVector */.g)(o,n,t.spatialReference)){const r=t.origin;n[0]=r.x,n[1]=r.y,n[2]=r.z,Logger/* default */.A.getLogger(scale_x).error(`Failed to project specified origin (wkid:${o.spatialReference.wkid}) to mesh spatial reference (wkid:${t.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}scale_w(t.vertexAttributes.position,r,n),t.vertexAttributesChanged()}function scale_w(e,t,r=vec3f64.Z){if(e)for(let n=0;n<e.length;n+=3){for(let t=0;t<3;t++)scale_R[t]=e[n+t]-r[t];(0,vec3.i)(scale_R,scale_R,t);for(let t=0;t<3;t++)e[n+t]=scale_R[t]+r[t]}}const scale_R=(0,vec3f64.c)(),scale_k=(0,vec3f64.c)(),scale_F=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(40906);
;// ../node_modules/@arcgis/core/support/zipUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function zipUtils_e(e){const r=[];for(const n of e)n.name.toLowerCase().endsWith(".zip")?r.push(zipUtils_t(n)):r.push(Promise.resolve(n));return(await Promise.all(r)).flat()}async function zipUtils_t(e){const{BlobReader:t,ZipReader:r,BlobWriter:n}=await __webpack_require__.e(/* import() */ 3345).then(__webpack_require__.bind(__webpack_require__, 13345)),a=[],i=new r(new t(e));return(await i.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new n,r=e.getData?.(t).then((t=>new File([t],e.filename)));r&&a.push(r)})),Promise.all(a)}

;// ../node_modules/@arcgis/core/geometry/Mesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var J;const Q="esri.geometry.Mesh",X={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:MeshGeoreferencedVertexSpace/* default */.A,"georeferenced-relative":MeshGeoreferencedRelativeVertexSpace/* default */.A,local:MeshLocalVertexSpace/* default */.A}};let Y=J=class extends(Loadable/* default */.A.LoadableMixin((0,core_Promise/* EsriPromiseMixin */.g)(Geometry/* default */.A))){constructor(e){super(e),this.components=null,this.vertexSpace=new MeshGeoreferencedVertexSpace/* default */.A,this.transform=null,this.metadata=new Metadata_a,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new MeshVertexAttributes/* MeshVertexAttributes */.H,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,reactiveUtils/* watch */.wB)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=this.metadata.displaySource?.extent}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:r,vertexSpace:s}=this,o=r.position;if(0===o.length||e&&0===e.length)return new Extent/* default */.A({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if("local"===s.type){const{_untransformedExtent:e,transform:r}=this;return bounds_e(e,r,s,t)}if("georeferenced-relative"===s.type){const{transform:e}=this,r=(0,georeference.project)({positions:o,transform:e,vertexSpace:s,inSpatialReference:t,outSpatialReference:t});return m(r,t)}return m(o,t)}get _untransformedExtent(){return m(this.vertexAttributes.position,this.spatialReference)}get anchor(){const{vertexSpace:e}=this;if(e.isRelative)return e.getOriginPoint(this.spatialReference);const{center:t,zmin:r}=this._transformedExtent;return new Point/* default */.A({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get origin(){const{vertexSpace:e}=this;return e.isRelative?e.getOriginPoint(this.spatialReference):this._transformedExtent.center}get extent(){return this.loaded||null==this.metadata?.displaySource?.extent?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){if(!this.loaded)return Logger/* default */.A.getLogger(this).error("addComponent()",(new meshErrors_e).message);this.components||(this.components=[]),this.components.push(MeshComponent/* default */.A.from(e)),this.notifyChange("components")}removeComponent(e){if(!this.loaded)return Logger/* default */.A.getLogger(this).error("removeComponent()",(new meshErrors_e).message);if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Logger/* default */.A.getLogger(this).error("removeComponent()",(new t).message)}rotate(e,t,r,s){return (0,axisAngleDegrees/* composeAxes */.AU)(e,t,r,ee),U(this,ee,s),this}offset(e,t,r,o){return this.loaded?(Mesh_$[0]=e,Mesh_$[1]=t,Mesh_$[2]=r,offset_v(this,Mesh_$,o),this):(Logger/* default */.A.getLogger(this).error("offset()",(new meshErrors_e).message),this)}scale(e,t){return this.loaded?(scale_d(this,e,t),this):(Logger/* default */.A.getLogger(this).error("scale()",(new meshErrors_e).message),this)}centerAt(e,t){return this.loaded?(centerAt_l(this,e,t),this):(Logger/* default */.A.getLogger(this).error("centerAt()",(new meshErrors_e).message),this)}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(c(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){let t=null;if(this.components){const e=new Map,r=new Map;t=this.components.map((t=>t.cloneWithDeduplication(e,r)))}const r={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new J(r)}cloneShallow(){return new J({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const t=__webpack_require__.e(/* import() */ 2038).then(__webpack_require__.bind(__webpack_require__, 72038)),r=this.load(),s=await Promise.all([t,r]),{toBinaryGLTF:o}=s[0];return o(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}static createBox(e,t){if(!(e instanceof Point/* default */.A))return Logger/* default */.A.getLogger(Q).error(".createBox()",(new s).message),null;const r=new J(primitives_g(i(),e,t));return t?.imageFace&&"all"!==t.imageFace?primitives_l(r,t.imageFace):r}static createSphere(e,t){return e instanceof Point/* default */.A?new J(primitives_g(primitives_c(t?.densificationFactor||0),e,t)):(Logger/* default */.A.getLogger(Q).error(".createSphere()",(new s).message),null)}static createCylinder(e,t){return e instanceof Point/* default */.A?new J(primitives_g(primitives_f(t?.densificationFactor||0),e,t)):(Logger/* default */.A.getLogger(Q).error(".createCylinder()",(new s).message),null)}static createPlane(e,t){if(!(e instanceof Point/* default */.A))return Logger/* default */.A.getLogger(Q).error(".createPlane()",(new s).message),null;const r=t?.facing??"up",o=primitives_u(r,t?.size);return new J(primitives_g(primitives_h(r),e,{...t,size:o}))}static createFromPolygon(e,t){if(!(e instanceof Polygon/* default */.A))return Logger/* default */.A.getLogger(Q).error(".createFromPolygon()",(new n).message),null;const r=(0,triangulationUtils/* triangulate */.lO)(e);return new J({vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({position:r.position}),components:[new MeshComponent/* default */.A({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new MeshGeoreferencedVertexSpace/* default */.A})}static async createFromGLTF(e,t,r){if(!(e instanceof Point/* default */.A)){const e=new s;throw Logger/* default */.A.getLogger(Q).error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:o}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 1596).then(__webpack_require__.bind(__webpack_require__, 91596)),r);return new J(await o(e,t,r))}static async createFromFiles(e,t,r){const o=e=>Logger/* default */.A.getLogger(Q).error(".createFromFiles()",e.message);if(!(e instanceof Point/* default */.A)){const e=new s;throw o(e),e}const n=r?.layer;if(!n){const e=new meshErrors_r;throw o(e),e}const i=await J.extractAndFilterFiles(t,n),a=i.reduce(((e,t)=>(0,infoFor3D/* isFileEditFormat */.oF)(n.infoFor3D,t)?e+1:e),0);if(0===a){const e=new meshErrors_c;throw o(e),e}if(a>1){const e=new l;throw o(e),e}const c=J.createWithExternalSource(e,i),[p]=await n.uploadAssets([c],r);return p}static async extractAndFilterFiles(e,t){const r=t?.infoFor3D;if(!r)return e;return(await zipUtils_e(e)).filter((e=>(0,infoFor3D/* isFileSupported */.fu)(r,e)))}static createWithExternalSource(e,t,r){const s=r?.extent??null,{x:o,y:n,z:i,spatialReference:a}=e,c=r?.transform?.clone()??new MeshTransform/* default */.A,p=r?.vertexSpace??new MeshLocalVertexSpace/* default */.A({origin:[o,n,i??0]}),m={source:t,extent:s},l=new Metadata_a;return l.externalSources.push(m),new J({metadata:l,transform:c,vertexSpace:p,spatialReference:a})}static createIncomplete(e,r){const{x:s,y:o,z:n,spatialReference:i}=e,a=r?.transform?.clone()??new MeshTransform/* default */.A,c=r?.vertexSpace??new MeshLocalVertexSpace/* default */.A({origin:[s,o,n??0]}),p=new J({transform:a,vertexSpace:c,spatialReference:i});return p.addResolvingPromise(Promise.reject(new core_Error/* default */.A("mesh-incomplete","Mesh resources are not complete"))),p}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[MeshComponent/* default */.A],json:{write:!0}})],Y.prototype,"components",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0,types:X,constructOnly:!0,json:{write:!0}})],Y.prototype,"vertexSpace",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:MeshTransform/* default */.A,json:{write:!0}})],Y.prototype,"transform",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Y.prototype,"metadata",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Y.prototype,"hasExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Y.prototype,"_transformedExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Y.prototype,"_untransformedExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Y.prototype,"anchor",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Y.prototype,"origin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],Y.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Y.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Y.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:MeshVertexAttributes/* MeshVertexAttributes */.H,nonNullable:!0,json:{write:!0}})],Y.prototype,"vertexAttributes",void 0),Y=J=(0,tslib_es6._)([(0,subclass/* subclass */.$)(Q)],Y);const Mesh_$=(0,vec3f64.c)(),ee=(0,axisAngleDegrees/* create */.vt)(),te=Y;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(57822);
;// ../node_modules/@arcgis/core/rest/support/meshFeatureSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const meshFeatureSet_h=()=>Logger/* default */.A.getLogger("esri.rest.support.meshFeatureSet");function meshFeatureSet_y(t,r,o){const n=o.features;o.features=[],delete o.geometryType;const s=FeatureSet/* default */.A.fromJSON(o);if(s.geometryType="mesh",!o.assetMaps)return s;const i=meshFeatureSet_M(r,o.assetMaps),u=t.sourceSpatialReference??SpatialReference/* default */.A.WGS84,c=o.globalIdFieldName,{outFields:f}=t,m=null!=f&&f.length>0?meshFeatureSet_E(f.includes("*")?null:new Set(f)):()=>({});for(const a of n){const t=meshFeatureSet_S(a,c,u,r,i);null!=t&&s.features.push(new Graphic/* default */.A({geometry:t,attributes:m(a)}))}return s}function meshFeatureSet_E(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function meshFeatureSet_S(e,t,r,o,i){const a=e.attributes[t],f=i.get(a);if(null==f)return meshFeatureSet_h().error("mesh-feature-set:asset-not-found","Service returned a feature which was not found in the asset map",e),null;if(!e.geometry)return meshFeatureSet_h().error("mesh-feature-set:no-geometry","Service returned a feature without geometry",e),null;const{originPoint:m,originVector:p}=meshFeatureSet_d(e,r,o),l=Extent/* default */.A.fromJSON(e.geometry);l.spatialReference=r;const g=meshFeatureSet_j(e.attributes,o),y=f.projectVertices?new MeshGeoreferencedRelativeVertexSpace/* default */.A({origin:p}):new MeshLocalVertexSpace/* default */.A({origin:p}),E=meshFeatureSet_T(f);return E?te.createWithExternalSource(m,E,{extent:l,transform:g,vertexSpace:y}):te.createIncomplete(m,{extent:l,transform:g,vertexSpace:y})}function meshFeatureSet_d({attributes:e},t,{transformFieldRoles:r}){const n=e[r.originX],s=e[r.originY],a=e[r.originZ];return{originPoint:new Point/* default */.A({x:n,y:s,z:a,spatialReference:t}),originVector:(0,vec3f64.f)(n,s,a)}}function meshFeatureSet_j(e,{transformFieldRoles:t}){return new MeshTransform/* default */.A({translation:[e[t.translationX],-e[t.translationZ],e[t.translationY]],rotationAxis:[e[t.rotationX],-e[t.rotationZ],e[t.rotationY]],rotationAngle:e[t.rotationDeg],scale:[e[t.scaleX],e[t.scaleZ],e[t.scaleY]]})}var meshFeatureSet_w;function meshFeatureSet_M(e,t){const o=new Map;for(const n of t){const t=n.parentGlobalId;if(null==t)continue;const s=n.assetName,i=n.assetType,a=n.assetHash,u=n.assetURL,c=n.conversionStatus,f=n.seqNo,m=(0,infoFor3D/* getFormatIdMimeType */.Fm)(i,e.supportedFormats);if(!m){meshFeatureSet_h().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${i}, but it does not list it as a supported type`);continue}const p=(0,MapUtils/* getOrCreateMapValue */.tE)(o,t,(()=>({projectVertices:meshFeatureSet_P(n.flags).projectVertices,files:new Map})));(0,MapUtils/* getOrCreateMapValue */.tE)(p.files,s,(()=>({name:s,type:i,mimeType:m,status:meshFeatureSet_D(c),parts:[]}))).parts[f]={hash:a,url:u}}return o}function meshFeatureSet_T(e){const t=Array.from(e.files.values()),r=new Array;for(const o of t){if(o.status!==meshFeatureSet_w.COMPLETED)return null;const e=new Array;for(const t of o.parts){if(!t)return null;e.push(new External/* ServiceAssetPart */.Bq(t.url,t.hash))}r.push(new External/* ServiceAsset */.Qp(o.name,o.mimeType,e))}return r}function meshFeatureSet_D(e){switch(e){case"COMPLETED":case"SUBMITTED":return meshFeatureSet_w.COMPLETED;case"INPROGRESS":return meshFeatureSet_w.PENDING;default:return meshFeatureSet_w.FAILED}}function meshFeatureSet_P(e){return{projectVertices:e.includes("PROJECT_VERTICES")}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"}(meshFeatureSet_w||(meshFeatureSet_w={}));


/***/ }),

/***/ 92986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JQ: () => (/* binding */ O),
/* harmony export */   SY: () => (/* binding */ D),
/* harmony export */   a4: () => (/* binding */ d),
/* harmony export */   dE: () => (/* binding */ A),
/* harmony export */   v7: () => (/* binding */ w),
/* harmony export */   zB: () => (/* binding */ j)
/* harmony export */ });
/* unused harmony export fitPlane */
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17639);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92976);
/* harmony import */ var _chunks_earcut_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16528);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21839);
/* harmony import */ var _geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58331);
/* harmony import */ var _geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42965);
/* harmony import */ var _geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38774);
/* harmony import */ var _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70807);
/* harmony import */ var _webgl_engine_lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(52997);
/* harmony import */ var _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59568);
/* harmony import */ var _webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(50645);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(84698);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(62802);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function h(t,o,n,a){const s=(t=>!Array.isArray(t[0]))(o)?(t,e)=>o[3*t+e]:(t,e)=>o[t][e],c=a?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getMetersPerUnitForSR */ .GA)(a)/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getMetersPerVerticalUnitForSR */ .G9)(a):1;return (0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__/* .fromManyPoints */ .lU)(t,((t,e)=>(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_4__.s)(t,s(e,0)*c,s(e,1)*c,s(e,2))),n)}function j(e,r,o){const i=h(y,e,r,o)?(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__/* .normal */ .qb)(y):[0,0,1];return Math.abs(i[2])>Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .deg2rad */ .kU)(80))?_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_5__/* .Axis */ ._.Z:Math.abs(i[1])>Math.abs(i[0])?_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_5__/* .Axis */ ._.Y:_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_5__/* .Axis */ ._.X}const y=(0,_geometry_support_plane_js__WEBPACK_IMPORTED_MODULE_7__/* .create */ .vt)();function w(t,e,r){const i=j(t,(e.length>0?e[0]:t.length/3)-1,r);if(i!==_geometry_support_Axis_js__WEBPACK_IMPORTED_MODULE_5__/* .Axis */ ._.Z){t=t.slice();for(let e=0;e<t.length;e+=3)t[e+i]=t[e+2]}return (0,_chunks_earcut_js__WEBPACK_IMPORTED_MODULE_3__.e)(t,e,3)}function d(t){const e=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.POSITION,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n(t.attributeData.position,t.indices,3,!0)]],r=(0,_geometry_support_Indices_js__WEBPACK_IMPORTED_MODULE_6__/* .getZeroIndexArray */ .EH)(t.indices.length);return null!=t.attributeData.colorFeature?e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.COLORFEATUREATTRIBUTE,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n([t.attributeData.colorFeature],r,1,!0)]):t.attributeData.color&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.COLOR,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n(t.attributeData.color,r,4,!0)]),t.attributeData.uvMapSpace&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.UVMAPSPACE,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n(t.attributeData.uvMapSpace,t.indices,4,!0)]),t.attributeData.boundingRect&&e.push([_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.BOUNDINGRECT,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n(t.attributeData.boundingRect,t.indices,9,!0)]),new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__/* .Geometry */ .V(t.material,e,t.mapPositions,_webgl_engine_lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_9__/* .ContentObjectType */ .X.Mesh,t.attributeData.objectAndLayerIdColor)}function D(t,e=null){const r=[[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.POSITION,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n(t.attributeData.position,t.indices,3,!0)],[_webgl_engine_lib_VertexAttribute_js__WEBPACK_IMPORTED_MODULE_11__/* .VertexAttribute */ .r.UV0,new _webgl_engine_lib_Attribute_js__WEBPACK_IMPORTED_MODULE_8__/* .Attribute */ .n(t.attributeData.uv0,t.indices,2,!0)]];return new _webgl_engine_lib_Geometry_js__WEBPACK_IMPORTED_MODULE_10__/* .Geometry */ .V(t.material,r,t.mapPositions,_webgl_engine_lib_ContentObjectType_js__WEBPACK_IMPORTED_MODULE_9__/* .ContentObjectType */ .X.Mesh,e)}function A(t){switch(t.type){case"extent":if(t instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)return _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.fromExtent(t);break;case"polygon":return t}return null}class O{constructor(t,e,r){this.renderData=t,this.layerUid=e,this.graphicUid=r,this.outGeometries=new Array}}


/***/ }),

/***/ 71077:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65061);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r{constructor(){this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__/* .generateUID */ .L)()}}


/***/ }),

/***/ 52997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(e||(e={}));


/***/ }),

/***/ 59568:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ I)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/mat4f64.js
var mat4f64 = __webpack_require__(56192);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(21839);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(42965);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o){if(o.length<typedArrayUtil/* nativeArrayMaxSize */.y9)return Array.from(o);if((0,typedArrayUtil/* isArray */.cy)(o))return Float64Array.from(o);if(!("BYTES_PER_ELEMENT"in o))return Array.from(o);switch(o.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(o);case 2:return (0,typedArrayUtil/* isUint16Array */.jq)(o)?Uint16Array.from(o):Int16Array.from(o);case 4:return Float32Array.from(o);default:return Float64Array.from(o)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/basicInterfaces.js
var basicInterfaces = __webpack_require__(91013);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/PooledArray.js + 1 modules
var PooledArray = __webpack_require__(63678);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec3f64.js
var vec3f64 = __webpack_require__(22279);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class BoundingInfo_o{constructor(i,e,o){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,(0,Util/* assert */.vA)(i.length>=1),(0,Util/* assert */.vA)(3===o.size||4===o.size);const{data:c,size:l,indices:m}=o;(0,Util/* assert */.vA)(m.length%this._numIndexPerPrimitive==0),(0,Util/* assert */.vA)(m.length>=i.length*this._numIndexPerPrimitive);const d=i.length;let u=l*m[this._numIndexPerPrimitive*i[0]];a.clear(),a.push(u);const f=(0,vec3f64.f)(c[u],c[u+1],c[u+2]),x=(0,vec3f64.g)(f);for(let t=0;t<d;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*m[e+i],a.push(u);let t=c[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=c[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=c[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2])}}this.bbMin=f,this.bbMax=x;const P=(0,vec3.p)((0,vec3f64.c)(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let p=this.radius*this.radius;for(let t=0;t<a.length;++t){u=a.at(t);const i=c[u]-P[0],e=c[u+1]-P[1],s=c[u+2]-P[2],r=i*i+e*e+s*s;if(r<=p)continue;const n=Math.sqrt(r),h=.5*(n-this.radius);this.radius=this.radius+h,p=this.radius*this.radius;const o=h/n;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o}this.center=P,a.clear()}getChildren(){if(this._children||(0,vec3.a)(this.bbMin,this.bbMax)<=1)return this._children;const i=(0,vec3.p)((0,vec3f64.c)(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c,indices:l}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let n=c*l[s],o=a[n],m=a[n+1],d=a[n+2];for(let i=1;i<this._numIndexPerPrimitive;++i){n=c*l[s+i];const t=a[n],e=a[n+1],r=a[n+2];t<o&&(o=t),e<m&&(m=e),r<d&&(d=r)}o<i[0]&&(e|=1),m<i[1]&&(e|=2),d<i[2]&&(e|=4),r[t]=e,++h[e]}let m=0;for(let t=0;t<8;++t)h[t]>0&&++m;if(m<2)return;const d=new Array(8);for(let t=0;t<8;++t)d[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=r[t];d[i][h[i]++]=this.primitiveIndices[t]}this._children=new Array;for(let t=0;t<8;++t)void 0!==d[t]&&this._children.push(new BoundingInfo_o(d[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){a.prune()}}const a=new PooledArray/* default */.A({deallocator:null});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js
var ContentObject = __webpack_require__(71077);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js
var ContentObjectType = __webpack_require__(52997);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/triangle.js
var triangle = __webpack_require__(50958);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function c(s,r){if(!s)return!1;const{size:c,data:i,indices:f}=s;(0,vec3.s)(r,0,0,0),(0,vec3.s)(m,0,0,0);let d=0,g=0;for(let p=0;p<f.length-2;p+=3){const s=f[p]*c,h=f[p+1]*c,j=f[p+2]*c;(0,vec3.s)(geometryDataUtils_a,i[s],i[s+1],i[s+2]),(0,vec3.s)(u,i[h],i[h+1],i[h+2]),(0,vec3.s)(l,i[j],i[j+1],i[j+2]);const z=(0,triangle/* areaPoints3d */.Q7)(geometryDataUtils_a,u,l);z?((0,vec3.g)(geometryDataUtils_a,geometryDataUtils_a,u),(0,vec3.g)(geometryDataUtils_a,geometryDataUtils_a,l),(0,vec3.i)(geometryDataUtils_a,geometryDataUtils_a,1/3*z),(0,vec3.g)(r,r,geometryDataUtils_a),d+=z):((0,vec3.g)(m,m,geometryDataUtils_a),(0,vec3.g)(m,m,u),(0,vec3.g)(m,m,l),g+=3)}return(0!==g||0!==d)&&(0!==d?((0,vec3.i)(r,r,1/d),!0):0!==g&&((0,vec3.i)(r,m,1/g),!0))}function geometryDataUtils_i(n,s){if(!n)return!1;const{size:r,data:o,indices:c}=n;(0,vec3.s)(s,0,0,0);let i=-1,f=0;for(let t=0;t<c.length;t++){const n=c[t]*r;i!==n&&(s[0]+=o[n],s[1]+=o[n+1],s[2]+=o[n+2],f++),i=n}return f>1&&(0,vec3.i)(s,s,1/f),f>0}function f(r,o,c){if(!r)return!1;(0,vec3.s)(c,0,0,0),(0,vec3.s)(m,0,0,0);let i=0,f=0;const{size:l,data:d,indices:g}=r,p=g.length-1,h=p+(o?2:0);for(let t=0;t<h;t+=2){const r=t<p?t+1:0,o=g[t<p?t:p]*l,h=g[r]*l;geometryDataUtils_a[0]=d[o],geometryDataUtils_a[1]=d[o+1],geometryDataUtils_a[2]=d[o+2],u[0]=d[h],u[1]=d[h+1],u[2]=d[h+2],(0,vec3.i)(geometryDataUtils_a,(0,vec3.g)(geometryDataUtils_a,geometryDataUtils_a,u),.5);const j=(0,vec3.r)(geometryDataUtils_a,u);j>0?((0,vec3.g)(c,c,(0,vec3.i)(geometryDataUtils_a,geometryDataUtils_a,j)),i+=j):0===i&&((0,vec3.g)(m,m,geometryDataUtils_a),f++)}return 0!==i?((0,vec3.i)(c,c,1/i),!0):0!==f&&((0,vec3.i)(c,m,1/f),!0)}const geometryDataUtils_a=(0,vec3f64.c)(),u=(0,vec3f64.c)(),l=(0,vec3f64.c)(),m=(0,vec3f64.c)();

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js
var Object3DStateID = __webpack_require__(22775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexAttribute.js
var VertexAttribute = __webpack_require__(50645);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js
var utils = __webpack_require__(29688);
;// ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class I extends ContentObject/* ContentObject */.J{constructor(t,i,e=null,s=ContentObjectType/* ContentObjectType */.X.Mesh,r=null,o=-1){super(),this.material=t,this.mapPositions=e,this.type=s,this.objectAndLayerIdColor=r,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[h,a]of i)this._attributes.set(h,{...a,indices:(0,Indices/* compactIndices */.Dg)(a.indices)}),h===VertexAttribute/* VertexAttribute */.r.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(h).indices.length:this.edgeIndicesLength)}instantiate(t={}){const i=new I(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((t,e)=>{t.exclusive=!1,i._attributes.set(e,t)})),i._boundingInfo=this._boundingInfo,i.transformation=t.transformation||this.transformation,i}get attributes(){return this._attributes}getMutableAttribute(t){let i=this._attributes.get(t);return i&&!i.exclusive&&(i={...i,exclusive:!0,data:o(i.data)},this._attributes.set(t,i)),i}setAttributeData(t,i){const e=this._attributes.get(t);e&&this._attributes.set(t,{...e,exclusive:!0,data:i})}get indexCount(){const t=this._attributes.values().next().value.indices;return t?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===ContentObjectType/* ContentObjectType */.X.Mesh?this._computeAttachmentOriginTriangles(t):this.type===ContentObjectType/* ContentObjectType */.X.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(null!=this._transformation&&(0,vec3.e)(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return c(i,t)}_computeAttachmentOriginLines(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return f(i,_(this.material.parameters,i),t)}_computeAttachmentOriginPoints(t){const i=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);return geometryDataUtils_i(i,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(VertexAttribute/* VertexAttribute */.r.POSITION);if(!t||0===t.indices.length)return null;const i=this.type===ContentObjectType/* ContentObjectType */.X.Mesh?3:1;(0,Util/* assert */.vA)(t.indices.length%i==0,"Indexing error: "+t.indices.length+" not divisible by "+i);const e=(0,Indices/* getContinuousIndexArray */.tM)(t.indices.length/i);return new BoundingInfo_o(e,i,t)}get transformation(){return this._transformation??mat4f64.I}set transformation(e){this._transformation=e&&e!==mat4f64.I?(0,mat4f64.b)(e):null}addHighlight(){const t=new Object3DStateID/* Object3DStateID */.X(basicInterfaces/* Object3DState */.Mg.Highlight);return this.highlights=(0,utils/* addObject3DStateID */.Ci)(this.highlights,t),t}removeHighlight(t){this.highlights=(0,utils/* removeObject3DStateID */.PC)(this.highlights,t)}}function _(t,i){return!(!("isClosed"in t)||!t.isClosed)&&i.indices.length>2}


/***/ }),

/***/ 22775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_uid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65061);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class r{constructor(r){this.channel=r,this.id=(0,_core_uid_js__WEBPACK_IMPORTED_MODULE_0__/* .generateUID */ .L)()}}


/***/ }),

/***/ 91013:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Am: () => (/* binding */ a),
/* harmony export */   ID: () => (/* binding */ i),
/* harmony export */   JS: () => (/* binding */ u),
/* harmony export */   Mg: () => (/* binding */ t),
/* harmony export */   dd: () => (/* binding */ N),
/* harmony export */   it: () => (/* binding */ n),
/* harmony export */   s2: () => (/* binding */ e),
/* harmony export */   sf: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony export RenderRequestType */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e,n,O,a,N,t,s,i,u;!function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(e||(e={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(O||(O={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(N||(N={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(t||(t={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(s||(s={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(i||(i={})),function(e){e.DDS_ENCODING="image/vnd-ms.dds",e.KTX2_ENCODING="image/ktx2",e.BASIS_ENCODING="image/x.basis"}(u||(u={}));


/***/ }),

/***/ 29688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ci: () => (/* binding */ n),
/* harmony export */   PC: () => (/* binding */ r),
/* harmony export */   Vk: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22279);
/* harmony import */ var _webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76698);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(t,e){return null==t&&(t=[]),t.push(e),t}function r(t,e){if(null==t)return null;const n=t.filter((t=>t!==e));return 0===n.length?null:n}function s(t,n,r,s,u){l[0]=t.get(n,0),l[1]=t.get(n,1),l[2]=t.get(n,2),(0,_webgl_doublePrecisionUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .encodeDoubleArray */ .jS)(l,o,3),r.set(u,0,o[0]),s.set(u,0,o[1]),r.set(u,1,o[2]),s.set(u,1,o[3]),r.set(u,2,o[4]),s.set(u,2,o[5])}const l=(0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),o=new Float32Array(6);


/***/ }),

/***/ 76698:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Zo: () => (/* binding */ o),
/* harmony export */   jA: () => (/* binding */ r),
/* harmony export */   jS: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony export decodeDoubleArray */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function t(t,n,o){for(let r=0;r<o;++r)n[2*r]=t[r],n[2*r+1]=t[r]-n[2*r]}function n(t,n,o){for(let r=0;r<o;++r)n[r]=t[2*r]+t[2*r+1]}function o(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],n[r]=e[0];return n}function r(t,n){const o=t.length;for(let r=0;r<o;++r)e[0]=t[r],e[1]=t[r]-e[0],n[r]=e[1];return n}const e=new Float32Array(2);


/***/ })

};
;