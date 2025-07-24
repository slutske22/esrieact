"use strict";
exports.id = 78621;
exports.ids = [78621,84473];
exports.modules = {

/***/ 91814:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,t,x){x=x||2;var i,u,v,y,o,p,a,l=t&&t.length,h=l?t[0]*x:e.length,c=n(e,0,h,x,!0),s=[];if(!c||c.next===c.prev)return s;if(l&&(c=f(e,t,c,x)),e.length>80*x){i=v=e[0],u=y=e[1];for(var Z=x;Z<h;Z+=x)(o=e[Z])<i&&(i=o),(p=e[Z+1])<u&&(u=p),o>v&&(v=o),p>y&&(y=p);a=0!==(a=Math.max(v-i,y-u))?1/a:0}return r(c,s,x,i,u,a),s}function n(e,n,t,r,x){var i,u;if(x===E(e,n,t,r)>0)for(i=n;i<t;i+=r)u=B(i,e[i],e[i+1],u);else for(i=t-r;i>=n;i-=r)u=B(i,e[i],e[i+1],u);if(u&&M(u,u.next)){var v=u.next;C(u),u=v}return u}function t(e,n){if(!e)return e;n||(n=e);var t,r=e;do{if(t=!1,r.steiner||!M(r,r.next)&&0!==w(r.prev,r,r.next))r=r.next;else{var x=r.prev;if(C(r),(r=n=x)===r.next)break;t=!0}}while(t||r!==n);return n}function r(e,n,f,y,o,p,a){if(e){!a&&p&&h(e,y,o,p);for(var l,c,s=e;e.prev!==e.next;)if(l=e.prev,c=e.next,p?i(e,y,o,p):x(e))n.push(l.i/f),n.push(e.i/f),n.push(c.i/f),C(e),e=c.next,s=c.next;else if((e=c)===s){a?1===a?r(e=u(t(e),n,f),n,f,y,o,p,2):2===a&&v(e,n,f,y,o,p):r(t(e),n,f,y,o,p,1);break}}}function x(e){var n=e.prev,t=e,r=e.next;if(w(n,t,r)>=0)return!1;for(var x=e.next.next;x!==e.prev;){if(g(n.x,n.y,t.x,t.y,r.x,r.y,x.x,x.y)&&w(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function i(e,n,t,r){var x=e.prev,i=e,u=e.next;if(w(x,i,u)>=0)return!1;for(var v=x.x<i.x?x.x<u.x?x.x:u.x:i.x<u.x?i.x:u.x,f=x.y<i.y?x.y<u.y?x.y:u.y:i.y<u.y?i.y:u.y,y=x.x>i.x?x.x>u.x?x.x:u.x:i.x>u.x?i.x:u.x,o=x.y>i.y?x.y>u.y?x.y:u.y:i.y>u.y?i.y:u.y,p=s(v,f,n,t,r),a=s(y,o,n,t,r),l=e.prevZ,h=e.nextZ;l&&l.z>=p&&h&&h.z<=a;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;if(l=l.prevZ,h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}for(;l&&l.z>=p;){if(l!==e.prev&&l!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,l.x,l.y)&&w(l.prev,l,l.next)>=0)return!1;l=l.prevZ}for(;h&&h.z<=a;){if(h!==e.prev&&h!==e.next&&g(x.x,x.y,i.x,i.y,u.x,u.y,h.x,h.y)&&w(h.prev,h,h.next)>=0)return!1;h=h.nextZ}return!0}function u(e,n,r){var x=e;do{var i=x.prev,u=x.next.next;!M(i,u)&&z(i,x,x.next,u)&&j(i,u)&&j(u,i)&&(n.push(i.i/r),n.push(x.i/r),n.push(u.i/r),C(x),C(x.next),x=e=u),x=x.next}while(x!==e);return t(x)}function v(e,n,x,i,u,v){var f=e;do{for(var y=f.next.next;y!==f.prev;){if(f.i!==y.i&&d(f,y)){var o=A(f,y);return f=t(f,f.next),o=t(o,o.next),r(f,n,x,i,u,v),void r(o,n,x,i,u,v)}y=y.next}f=f.next}while(f!==e)}function f(e,r,x,i){var u,v,f,o=[];for(u=0,v=r.length;u<v;u++)(f=n(e,r[u]*i,u<v-1?r[u+1]*i:e.length,i,!1))===f.next&&(f.steiner=!0),o.push(Z(f));for(o.sort(y),u=0;u<o.length;u++)x=t(x=p(o[u],x),x.next);return x}function y(e,n){return e.x-n.x}function o(e){if(e.next.prev===e)return e;let n=e;for(;;){const t=n.next;if(t.prev===n||t===n||t===e)break;n=t}return n}function p(e,n){var r=a(e,n);if(!r)return n;var x=A(r,e),i=t(r,r.next);let u=o(x);return t(u,u.next),i=o(i),o(n===r?i:n)}function a(e,n){var t,r=n,x=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var v=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(v<=x&&v>u){if(u=v,v===x){if(i===r.y)return r;if(i===r.next.y)return r.next}t=r.x<r.next.x?r:r.next}}r=r.next}while(r!==n);if(!t)return null;if(x===u)return t;var f,y=t,o=t.x,p=t.y,a=1/0;r=t;do{x>=r.x&&r.x>=o&&x!==r.x&&g(i<p?x:u,i,o,p,i<p?u:x,i,r.x,r.y)&&(f=Math.abs(i-r.y)/(x-r.x),j(r,e)&&(f<a||f===a&&(r.x>t.x||r.x===t.x&&l(t,r)))&&(t=r,a=f)),r=r.next}while(r!==y);return t}function l(e,n){return w(e.prev,e,n.prev)<0&&w(n.next,e,e.next)<0}function h(e,n,t,r){var x=e;do{null===x.z&&(x.z=s(x.x,x.y,n,t,r)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next}while(x!==e);x.prevZ.nextZ=null,x.prevZ=null,c(x)}function c(e){var n,t,r,x,i,u,v,f,y=1;do{for(t=e,e=null,i=null,u=0;t;){for(u++,r=t,v=0,n=0;n<y&&(v++,r=r.nextZ);n++);for(f=y;v>0||f>0&&r;)0!==v&&(0===f||!r||t.z<=r.z)?(x=t,t=t.nextZ,v--):(x=r,r=r.nextZ,f--),i?i.nextZ=x:e=x,x.prevZ=i,i=x;t=r}i.nextZ=null,y*=2}while(u>1);return e}function s(e,n,t,r,x){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-t)*x)|e<<8))|e<<4))|e<<2))|e<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-r)*x)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function Z(e){var n=e,t=e;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==e);return t}function g(e,n,t,r,x,i,u,v){return(x-u)*(n-v)-(e-u)*(i-v)>=0&&(e-u)*(r-v)-(t-u)*(n-v)>=0&&(t-u)*(i-v)-(x-u)*(r-v)>=0}function d(e,n){return e.next.i!==n.i&&e.prev.i!==n.i&&!k(e,n)&&(j(e,n)&&j(n,e)&&q(e,n)&&(w(e.prev,e,n.prev)||w(e,n.prev,n))||M(e,n)&&w(e.prev,e,e.next)>0&&w(n.prev,n,n.next)>0)}function w(e,n,t){return(n.y-e.y)*(t.x-n.x)-(n.x-e.x)*(t.y-n.y)}function M(e,n){return e.x===n.x&&e.y===n.y}function z(e,n,t,r){var x=m(w(e,n,t)),i=m(w(e,n,r)),u=m(w(t,r,e)),v=m(w(t,r,n));return x!==i&&u!==v||(!(0!==x||!b(e,t,n))||(!(0!==i||!b(e,r,n))||(!(0!==u||!b(t,e,r))||!(0!==v||!b(t,n,r)))))}function b(e,n,t){return n.x<=Math.max(e.x,t.x)&&n.x>=Math.min(e.x,t.x)&&n.y<=Math.max(e.y,t.y)&&n.y>=Math.min(e.y,t.y)}function m(e){return e>0?1:e<0?-1:0}function k(e,n){var t=e;do{if(t.i!==e.i&&t.next.i!==e.i&&t.i!==n.i&&t.next.i!==n.i&&z(t,t.next,e,n))return!0;t=t.next}while(t!==e);return!1}function j(e,n){return w(e.prev,e,e.next)<0?w(e,n,e.next)>=0&&w(e,e.prev,n)>=0:w(e,n,e.prev)<0||w(e,e.next,n)<0}function q(e,n){var t=e,r=!1,x=(e.x+n.x)/2,i=(e.y+n.y)/2;do{t.y>i!=t.next.y>i&&t.next.y!==t.y&&x<(t.next.x-t.x)*(i-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next}while(t!==e);return r}function A(e,n){var t=new D(e.i,e.x,e.y),r=new D(n.i,n.x,n.y),x=e.next,i=n.prev;return e.next=n,n.prev=e,t.next=x,x.prev=t,r.next=t,t.prev=r,i.next=r,r.prev=i,r}function B(e,n,t,r){var x=new D(e,n,t);return r?(x.next=r.next,x.prev=r,r.next.prev=x,r.next=x):(x.prev=x,x.next=x),x}function C(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function D(e,n,t){this.i=e,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function E(e,n,t,r){for(var x=0,i=n,u=t-r;i<t;i+=r)x+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return x}e.deviation=function(e,n,t,r){var x=n&&n.length,i=x?n[0]*t:e.length,u=Math.abs(E(e,0,i,t));if(x)for(var v=0,f=n.length;v<f;v++){var y=n[v]*t,o=v<f-1?n[v+1]*t:e.length;u-=Math.abs(E(e,y,o,t))}var p=0;for(v=0;v<r.length;v+=3){var a=r[v]*t,l=r[v+1]*t,h=r[v+2]*t;p+=Math.abs((e[a]-e[h])*(e[l+1]-e[a+1])-(e[a]-e[l])*(e[h+1]-e[a+1]))}return 0===u&&0===p?0:Math.abs((p-u)/u)},e.flatten=function(e){for(var n=e[0][0].length,t={vertices:[],holes:[],dimensions:n},r=0,x=0;x<e.length;x++){for(var i=0;i<e[x].length;i++)for(var u=0;u<n;u++)t.vertices.push(e[x][i][u]);x>0&&(r+=e[x-1].length,t.holes.push(r))}return t};


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

/***/ 57290:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ n),
  b: () => (/* binding */ d),
  l: () => (/* binding */ c),
  n: () => (/* binding */ u),
  t: () => (/* binding */ o)
});

// UNUSED EXPORTS: c, d, e, s, v

// EXTERNAL MODULE: ./node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(36137);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
;// ./node_modules/@arcgis/core/geometry/support/buffer/math/common.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=()=>Logger/* default */.A.getLogger("esri.views.3d.support.buffer.math");

;// ./node_modules/@arcgis/core/chunks/vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t,e,r){if(t.count!==e.count)return;const f=t.count,n=r[0],o=r[1],u=r[2],i=r[3],s=r[4],c=r[5],d=r[6],a=r[7],l=r[8],p=r[9],y=r[10],B=r[11],m=r[12],h=r[13],S=r[14],g=r[15],M=t.typedBuffer,b=t.typedBufferStride,j=e.typedBuffer,v=e.typedBufferStride;for(let w=0;w<f;w++){const t=w*b,e=w*v,r=j[e],f=j[e+1],V=j[e+2],_=j[e+3];M[t]=n*r+s*f+l*V+m*_,M[t+1]=o*r+c*f+p*V+h*_,M[t+2]=u*r+d*f+y*V+S*_,M[t+3]=i*r+a*f+B*V+g*_}}function f(t,r,f,n=4,o=n){if(t.length/n!==r.length/o)return void e().error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],c=f[2],d=f[3],a=f[4],l=f[5],p=f[6],y=f[7],B=f[8],m=f[9],h=f[10],S=f[11],g=f[12],M=f[13],b=f[14],j=f[15];let v=0,w=0;for(let e=0;e<u;e++){const e=r[v],f=r[v+1],u=r[v+2],V=r[v+3];t[w]=i*e+a*f+B*u+g*V,t[w+1]=s*e+l*f+m*u+M*V,t[w+2]=c*e+p*f+h*u+b*V,t[w+3]=d*e+y*f+S*u+j*V,v+=o,w+=n}}function n(t,e,r){o(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function o(t,e,r,f=4,n=f){if(t.length/f!==e.length/n)return;const o=t.length/f,u=r[0],i=r[1],s=r[2],c=r[3],d=r[4],a=r[5],l=r[6],p=r[7],y=r[8];let B=0,m=0;for(let h=0;h<o;h++){const r=e[B],o=e[B+1],h=e[B+2],S=e[B+3];t[m]=u*r+c*o+l*h,t[m+1]=i*r+d*o+p*h,t[m+2]=s*r+a*o+y*h,t[m+3]=S,B+=n,m+=f}}function u(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,n=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;for(let i=0;i<r;i++){const t=i*n,e=i*u,r=o[e],s=o[e+1],c=o[e+2],d=r*r+s*s+c*c;if(d>0){const e=1/Math.sqrt(d);f[t]=e*r,f[t+1]=e*s,f[t+2]=e*c}}}function i(t,e,r){s(t.typedBuffer,e,r,t.typedBufferStride)}function s(t,e,r,f=4){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let i=0,s=0;for(let c=0;c<n;c++)t[s]=r*o[i],t[s+1]=r*o[i+1],t[s+2]=r*o[i+2],t[s+3]=r*o[i+3],i+=u,s+=f}function c(t,e,r,f){d(t.typedBuffer,e,r,f,t.typedBufferStride)}function d(e,r,f,n,o=4){const u=Math.min(e.length/o,r.count),i=r.typedBuffer,s=r.typedBufferStride;let c=0,d=0;const a=1/colorUtils/* colorGamma */.Tf;for(let t=0;t<u;t++)e[d]=n*(f*i[c])**a,e[d+1]=n*(f*i[c+1])**a,e[d+2]=n*(f*i[c+2])**a,e[d+3]=n*f*i[c+3],c+=s,d+=o}const a=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:d,linearToSRGBView:c,normalize:u,scale:s,scaleView:i,transformMat3:o,transformMat3View:n,transformMat4:f,transformMat4View:r},Symbol.toStringTag,{value:"Module"}));


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

/***/ 53334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ r),
/* harmony export */   Cc: () => (/* binding */ _),
/* harmony export */   Io: () => (/* binding */ m),
/* harmony export */   S8: () => (/* binding */ v),
/* harmony export */   WQ: () => (/* binding */ u),
/* harmony export */   e$: () => (/* binding */ I),
/* harmony export */   hZ: () => (/* binding */ o),
/* harmony export */   hs: () => (/* binding */ l),
/* harmony export */   jb: () => (/* binding */ B),
/* harmony export */   l0: () => (/* binding */ S)
/* harmony export */ });
/* unused harmony exports angle, ceil, cross, dist, div, divide, dot, equals, exactEquals, floor, inverse, len, length, max, min, mul, multiply, negate, projectAndScale, random, round, scaleAndAdd, sqrDist, sqrLen, squaredDistance, squaredLength, str, subtract, transformMat2, transformMat3, transformMat4, v */
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78115);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t,n){return t[0]=n[0],t[1]=n[1],t}function o(t,n,r){return t[0]=n,t[1]=r,t}function u(t,n,r){return t[0]=n[0]+r[0],t[1]=n[1]+r[1],t}function e(t,n,r){return t[0]=n[0]-r[0],t[1]=n[1]-r[1],t}function c(t,n,r){return t[0]=n[0]*r[0],t[1]=n[1]*r[1],t}function a(t,n,r){return t[0]=n[0]/r[0],t[1]=n[1]/r[1],t}function s(t,n){return t[0]=Math.ceil(n[0]),t[1]=Math.ceil(n[1]),t}function i(t,n){return t[0]=Math.floor(n[0]),t[1]=Math.floor(n[1]),t}function f(t,n,r){return t[0]=Math.min(n[0],r[0]),t[1]=Math.min(n[1],r[1]),t}function M(t,n,r){return t[0]=Math.max(n[0],r[0]),t[1]=Math.max(n[1],r[1]),t}function h(t,n){return t[0]=Math.round(n[0]),t[1]=Math.round(n[1]),t}function l(t,n,r){return t[0]=n[0]*r,t[1]=n[1]*r,t}function d(t,n,r,o){return t[0]=n[0]+r[0]*o,t[1]=n[1]+r[1]*o,t}function m(t,n){const r=n[0]-t[0],o=n[1]-t[1];return Math.sqrt(r*r+o*o)}function b(t,n){const r=n[0]-t[0],o=n[1]-t[1];return r*r+o*o}function q(t){const n=t[0],r=t[1];return Math.sqrt(n*n+r*r)}function p(t){const n=t[0],r=t[1];return n*n+r*r}function x(t,n){return t[0]=-n[0],t[1]=-n[1],t}function g(t,n){return t[0]=1/n[0],t[1]=1/n[1],t}function v(t,n){const r=n[0],o=n[1];let u=r*r+o*o;return u>0&&(u=1/Math.sqrt(u),t[0]=n[0]*u,t[1]=n[1]*u),t}function j(t,n){return t[0]*n[0]+t[1]*n[1]}function y(t,n,r){const o=n[0]*r[1]-n[1]*r[0];return t[0]=t[1]=0,t[2]=o,t}function _(t,n,r,o){const u=n[0],e=n[1];return t[0]=u+o*(r[0]-u),t[1]=e+o*(r[1]-e),t}function A(t,r=1){const o=2*(0,_common_js__WEBPACK_IMPORTED_MODULE_0__/* .RANDOM */ .Ov)()*Math.PI;return t[0]=Math.cos(o)*r,t[1]=Math.sin(o)*r,t}function P(t,n,r){const o=n[0],u=n[1];return t[0]=r[0]*o+r[2]*u,t[1]=r[1]*o+r[3]*u,t}function S(t,n,r){const o=n[0],u=n[1];return t[0]=r[0]*o+r[2]*u+r[4],t[1]=r[1]*o+r[3]*u+r[5],t}function z(t,n,r){const o=n[0],u=n[1];return t[0]=r[0]*o+r[3]*u+r[6],t[1]=r[1]*o+r[4]*u+r[7],t}function D(t,n,r){const o=n[0],u=n[1];return t[0]=r[0]*o+r[4]*u+r[12],t[1]=r[1]*o+r[5]*u+r[13],t}function I(t,n,r,o){const u=n[0]-r[0],e=n[1]-r[1],c=Math.sin(o),a=Math.cos(o);return t[0]=u*a-e*c+r[0],t[1]=u*c+e*a+r[1],t}function L(t,n){const r=t[0],o=t[1],u=n[0],e=n[1];let c=r*r+o*o;c>0&&(c=1/Math.sqrt(c));let a=u*u+e*e;a>0&&(a=1/Math.sqrt(a));const s=(r*u+o*e)*c*a;return s>1?0:s<-1?Math.PI:Math.acos(s)}function O(t){return"vec2("+t[0]+", "+t[1]+")"}function E(t,n){return t[0]===n[0]&&t[1]===n[1]}function T(n,r){const o=n[0],u=n[1],e=r[0],c=r[1],a=(0,_common_js__WEBPACK_IMPORTED_MODULE_0__/* .getEpsilon */ .FD)();return Math.abs(o-e)<=a*Math.max(1,Math.abs(o),Math.abs(e))&&Math.abs(u-c)<=a*Math.max(1,Math.abs(u),Math.abs(c))}function k(t,n,r,o,u){let e=n[0]-r[0],c=n[1]-r[1];const a=(o[0]*e+o[1]*c)*(u-1);return e=o[0]*a,c=o[1]*a,t[0]=n[0]+e,t[1]=n[1]+c,t}const w=q,B=e,C=c,F=a,G=m,H=b,J=p,K=Object.freeze(Object.defineProperty({__proto__:null,add:u,angle:L,ceil:s,copy:r,cross:y,dist:G,distance:m,div:F,divide:a,dot:j,equals:T,exactEquals:E,floor:i,inverse:g,len:w,length:q,lerp:_,max:M,min:f,mul:C,multiply:c,negate:x,normalize:v,projectAndScale:k,random:A,rotate:I,round:h,scale:l,scaleAndAdd:d,set:o,sqrDist:H,sqrLen:J,squaredDistance:b,squaredLength:p,str:O,sub:B,subtract:e,transformMat2:P,transformMat2d:S,transformMat3:z,transformMat4:D},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 84473:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mesh_q)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(71004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f64.js
var vec3f64 = __webpack_require__(19913);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Geometry.js
var Geometry = __webpack_require__(61064);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(30214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(46373);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/axisAngleDegrees.js
var axisAngleDegrees = __webpack_require__(43785);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshComponent.js
var MeshComponent = __webpack_require__(2366);
;// ./node_modules/@arcgis/core/geometry/support/meshErrors.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t="Mesh must be loaded before applying operations",meshErrors_e="Provided component is not part of the list of components",n="Expected polygon to be a Polygon instance",meshErrors_s="Expected location to be a Point instance";class i extends core_Error/* default */.A{constructor(){super("invalid-input:location",meshErrors_s)}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshGeoreferencedVertexSpace.js
var MeshGeoreferencedVertexSpace = __webpack_require__(58823);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshLocalVertexSpace.js
var MeshLocalVertexSpace = __webpack_require__(93320);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshTransform.js
var MeshTransform = __webpack_require__(77873);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/MeshVertexAttributes.js
var MeshVertexAttributes = __webpack_require__(47206);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshVertexSpaceUtils.js
var meshVertexSpaceUtils = __webpack_require__(28364);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/earcut.js
var earcut = __webpack_require__(91814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/Axis.js
var Axis = __webpack_require__(60929);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/coordsUtils.js
var coordsUtils = __webpack_require__(11021);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/DoubleArray.js
var DoubleArray = __webpack_require__(75644);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/Indices.js
var Indices = __webpack_require__(51831);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(4506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(5262);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/plane.js + 1 modules
var plane = __webpack_require__(76836);
;// ./node_modules/@arcgis/core/geometry/support/polygonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(t,o,s){const n=e(f,t,o,s)?(0,plane/* getNormal */.Qj)(f):[0,0,1];return Math.abs(n[2])>Math.cos((0,mathUtils/* deg2rad */.kU)(80))?Axis/* Axis */._.Z:Math.abs(n[1])>Math.abs(n[0])?Axis/* Axis */._.Y:Axis/* Axis */._.X}function e(r,i,a,n){const c=(r=>!Array.isArray(r[0]))(i)?(r,t)=>i[3*r+t]:(r,t)=>i[r][t],e=n?(0,unitUtils/* getMetersPerUnitForSR */.GA)(n)/(0,unitUtils/* getMetersPerVerticalUnitForSR */.G9)(n):1;return (0,plane/* fromManyPoints */.lU)(r,((r,t)=>(0,vec32.i)(r,c(t,0)*e,c(t,1)*e,c(t,2))),a)}const f=(0,plane/* create */.vt)();

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/deduplicate.js
var deduplicate = __webpack_require__(95431);
;// ./node_modules/@arcgis/core/geometry/support/triangulationUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function triangulationUtils_f(t){const e=a(t.rings,t.hasZ,p.CCW_IS_HOLE,t.spatialReference),s=new Array;let l=0,f=0;for(const r of e.polygons){const t=r.count,c=r.index,h=(0,DoubleArray/* doubleSubArray */.l5)(e.position,3*c,3*t),a=r.holeIndices.map((n=>n-c)),g=(0,Indices/* compactMeshIndices */.uW)((0,earcut.e)(h,a,3));s.push({position:h,faces:g}),l+=h.length,f+=g.length}const g=h(s,l,f),u=Array.isArray(g.position)?(0,deduplicate/* deduplicate */.b)(g.position,3,{originalIndices:g.faces}):(0,deduplicate/* deduplicate */.b)(g.position.buffer,6,{originalIndices:g.faces});return g.position=(0,DoubleArray/* doubleArrayFrom */.xm)(new Float64Array(u.buffer)),g.faces=u.indices,g}function h(n,t,e){if(1===n.length)return n[0];const o=(0,DoubleArray/* newDoubleArray */.jh)(t),r=new Array(e);let l=0,c=0,f=0;for(const s of n){for(let n=0;n<s.position.length;n++)o[l++]=s.position[n];for(const n of s.faces)r[c++]=n+f;f=l/3}return{position:o,faces:(0,Indices/* compactMeshIndices */.uW)(r)}}function a(n,t,e,o){const r=n.length,i=new Array(r),l=new Array(r),c=new Array(r);let f=0;for(let s=0;s<r;++s)f+=n[s].length;let h=0,a=0,m=0;const d=(0,DoubleArray/* newDoubleArray */.jh)(3*f);let y=0;for(let s=r-1;s>=0;s--){const f=n[s],A=e===p.CCW_IS_HOLE&&u(f,t,o);if(A&&1!==r)i[h++]=f;else{let n=f.length;for(let t=0;t<h;++t)n+=i[t].length;const e={index:y,pathLengths:new Array(h+1),count:n,holeIndices:new Array(h)};e.pathLengths[0]=f.length,f.length>0&&(c[m++]={index:y,count:f.length}),y=A?g(f,f.length-1,-1,d,y,f.length,t):g(f,0,1,d,y,f.length,t);for(let o=0;o<h;++o){const n=i[o];e.holeIndices[o]=y,e.pathLengths[o+1]=n.length,n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}h=0,e.count>0&&(l[a++]=e)}}for(let s=0;s<h;++s){const n=i[s];n.length>0&&(c[m++]={index:y,count:n.length}),y=g(n,0,1,d,y,n.length,t)}return l.length=a,c.length=m,{position:d,polygons:l,outlines:c}}function g(n,t,e,o,r,s,i){r*=3;for(let l=0;l<s;++l){const s=n[t];o[r++]=s[0],o[r++]=s[1],o[r++]=i&&s[2]?s[2]:0,t+=e}return r/3}function u(n,o,r){if(!o)return!(0,coordsUtils/* isClockwise */.$3)(n);const s=n.length-1;switch(c(n,s,r)){case Axis/* Axis */._.X:return!(0,coordsUtils/* isClockwise */.$3)(n,Axis/* Axis */._.Y,Axis/* Axis */._.Z);case Axis/* Axis */._.Y:return!(0,coordsUtils/* isClockwise */.$3)(n,Axis/* Axis */._.X,Axis/* Axis */._.Z);case Axis/* Axis */._.Z:return!(0,coordsUtils/* isClockwise */.$3)(n,Axis/* Axis */._.X,Axis/* Axis */._.Y)}}var p;!function(n){n[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(p||(p={}));

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectPointToVector.js
var projectPointToVector = __webpack_require__(64159);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(61090);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e,r){return e.isGeographic||e.isWebMercator&&(r??!0)}function geographicUtils_t(o,t,i,a){if(void 0!==a){(0,deprecate/* deprecated */.io)(o(),"option: geographic",{replacement:"Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.",version:"4.30",warnOnce:!0});const c="local"===t.type;if(!(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(t)||a===c)return i.isGeographic||i.isWebMercator&&a;o().warnOnce(`Specifying the 'geographic' parameter (${a}) for a Mesh vertex space of type "${t.type}" is not supported. This parameter will be ignored.`)}switch(t.type){case"georeferenced":return i.isGeographic;case"local":return i.isGeographic||i.isWebMercator}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/projection.js
var projection = __webpack_require__(90514);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/vertexSpaceConversion.js
var vertexSpaceConversion = __webpack_require__(81587);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const centerAt_g=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.centerAt");function centerAt_u(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:i}=e,o=r?.origin??e.origin,n=geographicUtils_t(centerAt_g,i,o.spatialReference,r?.geographic);(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(i)?x(e,t,o):n?v(e,t,o):R(e,t,o)}function x(e,o,s){const{vertexSpace:c}=e;if(!(0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(c))return;const f=centerAt_h,m=b;if(!(0,projectPointToVector/* projectPointToVector */.g)(o,m,e.spatialReference))return void (0,projection/* logProjectionError */.CN)(centerAt_g(),o.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP);if(!(0,projectPointToVector/* projectPointToVector */.g)(s,f,e.spatialReference)){const t=e.origin;return f[0]=t.x,f[1]=t.y,f[2]=t.z,void (0,projection/* logProjectionError */.CN)(centerAt_g(),s.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}const u=(0,vec32.d)(A,m,f);c.origin=(0,vec32.f)((0,vec3f64/* create */.vt)(),c.origin,u)}function v(e,t,r){const i=(0,vec3f64/* fromValues */.fA)(r.x,r.y,r.z??0),n=(0,vertexSpaceConversion/* convertVertexSpace */.UR)(e,new MeshLocalVertexSpace/* default */.A({origin:i}));if(!n)return;const a=(0,vec3f64/* fromValues */.fA)(t.x,t.y,t.z??0),f=(0,vertexSpaceConversion/* convertVertexSpace */.UR)({vertexAttributes:n,spatialReference:e.spatialReference,vertexSpace:new MeshLocalVertexSpace/* default */.A({origin:a})},MeshGeoreferencedVertexSpace/* default */.A.absolute);if(!f)return;const{position:p,normal:l,tangent:g}=f;e.vertexAttributes.position=p,e.vertexAttributes.normal=l,e.vertexAttributes.tangent=g,e.vertexAttributesChanged()}function R(e,t,r){const i=centerAt_h,o=b;if((0,projectPointToVector/* projectPointToVector */.g)(t,o,e.spatialReference)){if(!(0,projectPointToVector/* projectPointToVector */.g)(r,i,e.spatialReference)){const t=e.origin;return i[0]=t.x,i[1]=t.y,i[2]=t.z,void (0,projection/* logProjectionError */.CN)(centerAt_g(),r.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}j(e.vertexAttributes.position,o,i),e.vertexAttributesChanged()}else (0,projection/* logProjectionError */.CN)(centerAt_g(),t.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}function j(e,t,r){if(e)for(let i=0;i<e.length;i+=3)for(let o=0;o<3;o++)e[i+o]+=t[o]-r[o]}const b=(0,vec3f64/* create */.vt)(),centerAt_h=(0,vec3f64/* create */.vt)(),A=(0,vec3f64/* create */.vt)();

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat4f64.js
var mat4f64 = __webpack_require__(26110);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/spatialReferenceEllipsoidUtils.js
var spatialReferenceEllipsoidUtils = __webpack_require__(32159);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/computeTranslationToOriginAndRotation.js + 1 modules
var computeTranslationToOriginAndRotation = __webpack_require__(70600);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(88133);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(72449);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/extent.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(r){const{spatialReference:f,vertexSpace:l,untransformedBounds:d}=r,g=(0,aaBoundingBox/* toCorners */.gE)(d,extent_u);if((0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(l)&&r.transform&&(0,vec3.t)(g,g,r.transform.localMatrix),"georeferenced"===l.type){const r=l.origin;return r&&(0,vec3.a)(g,g,r),(0,aaBoundingBox/* toExtent */.w1)((0,aaBoundingBox/* fromBuffer */.vY)(g),f)}const y=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(f),B=l.origin;if(!(0,projectionUtils.canProjectWithoutEngine)(y,f)){const[r,t,e]=B;return new Extent/* default */.A({xmin:r,ymin:t,zmin:e,xmax:r,ymax:t,zmax:e,spatialReference:f})}return (0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(f,B,extent_x,y),(0,vec3.t)(g,g,extent_x),(0,projectBuffer.projectBuffer)(g,y,0,g,f,0),(0,aaBoundingBox/* toExtent */.w1)((0,aaBoundingBox/* fromBuffer */.vY)(g),f)}const extent_x=(0,mat4f64/* create */.vt)(),extent_u=(0,DoubleArray/* newDoubleArray */.jh)(24);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/compilerUtils.js
var compilerUtils = __webpack_require__(95039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function loadExternal_u(t,s,r){switch(s.source.type){case"client":case"service":return loadExternal_f(t,s,r);case"loadable":return s.source.load(t,r);default:(0,compilerUtils/* neverReached */.Xb)(s.source)}}async function loadExternal_f(e,t,n){const{source:o}=t,{loadGLTFMesh:i}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 62228).then(__webpack_require__.bind(__webpack_require__, 62228)),n),l=await loadExternal_p(o,n);(0,promiseUtils/* throwIfAborted */.Te)(n);const a=i(new Point/* default */.A({x:0,y:0,z:0,spatialReference:e.spatialReference}),l.url,{resolveFile:m(l),signal:n?.signal,expectedType:l.type,unitConversionDisabled:t.unitConversionDisabled});a.then((()=>l.dispose()),(()=>l.dispose()));const{vertexAttributes:u,components:f}=await a;e.vertexAttributes=u,e.components=f}function m(e){const t=(0,urlUtils/* removeFile */.nM)(e.url);return s=>{const r=(0,urlUtils/* makeRelative */.V1)(s,t,t),n=r?r.replace(/^ *\.\//,""):null;return(n?e.files.get(n):null)??s}}async function loadExternal_p(e,s){switch(e.type){case"client":return Array.isArray(e.files)?y(e.files):loadExternal_h(e.files);case"service":return w(e.assets,s);default:throw new core_Error/* default */.A("mesh-load-external:invalid-source","Invalid source type")}}async function d(e,t){const{parts:s,assetMimeType:n,assetName:o}=e;if(1===s.length)return new M(s[0].partUrl);const i=await e.toBlob(t);return (0,promiseUtils/* throwIfAborted */.Te)(t),M.fromBlob(i,loadExternal_R(o,n))}function loadExternal_h(e){return M.fromBlob(e,loadExternal_R(e.name,e.type))}function y(e){if(!e.length)throw new core_Error/* default */.A("mesh-load-external:missing-assets","There must be at least one file to load");return loadExternal_j(e.map((e=>({name:e.name,mimeType:e.type,source:loadExternal_h(e)}))))}async function w(e,s){if(!e.length)throw new core_Error/* default */.A("mesh-load-external:missing-assets","There must be at least one file to load");const l=await (0,promiseUtils/* allSettledValues */.nA)(e.map((async e=>{const t=await d(e);return (0,promiseUtils/* throwIfAborted */.Te)(s),{name:e.assetName,mimeType:e.assetMimeType,source:t}})));if((0,promiseUtils/* isAborted */.G4)(s))throw l.forEach((e=>e.source.dispose())),(0,promiseUtils/* createAbortError */.NK)();return loadExternal_j(l)}const loadExternal_g=/^model\/gltf\+json$/,loadExternal_b=/^model\/gltf-binary$/,loadExternal_v=/\.gltf$/i,loadExternal_x=/\.glb$/i;function T({mimeType:e,source:t,name:s}){return loadExternal_g.test(e)||loadExternal_v.test(s)?{url:t.url,type:"gltf"}:loadExternal_b.test(e)||loadExternal_x.test(s)?{url:t.url,type:"glb"}:null}function loadExternal_j(e){const s=new Map;let r=null,n=null;for(const t of e){const{source:e,name:o}=t;r??=T(t),"ESRI3DO_NORM.glb"===o&&(n=T(t)),s.set(o,e.url),e.files.forEach(((e,t)=>s.set(t,e)))}const o=n??r;if(null==o)throw new core_Error/* default */.A("mesh-load-external:missing-files","Missing files to load external mesh source");return new M(o.url,(()=>e.forEach((({source:e})=>e.dispose()))),s,o.type)}class M{constructor(e,t=()=>{},s=new Map,r){this.url=e,this.dispose=t,this.files=s,this.type=r}static fromBlob(e,t){const s=URL.createObjectURL(e);return new M(s,(()=>URL.revokeObjectURL(s)),void 0,t)}}function loadExternal_R(e,t){return loadExternal_g.test(t)||loadExternal_v.test(e)?"gltf":loadExternal_b.test(t)||loadExternal_v.test(e)?"glb":void 0}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/meshUtils/External.js
var External = __webpack_require__(28936);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Metadata_a=class extends Clonable/* default */.A{constructor(e){super(e),this.externalSources=new Collection/* default */.A,this._explicitDisplaySource=null,this.georeferenced=!1,this.addHandles((0,reactiveUtils.on)((()=>this.externalSources),"after-remove",(({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(null!=e&&!(0,External/* isDisplayExternal */.yr)(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((r=>!(0,External/* externalSourcesAreEqual */["in"])(r,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((r=>(0,External/* externalIsOnService */.eN)(r,e)))}get _implicitDisplaySource(){return this.externalSources.find(External/* isDisplayExternal */.yr)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"externalSources",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"displaySource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"_implicitDisplaySource",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"_explicitDisplaySource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Metadata_a.prototype,"georeferenced",void 0),Metadata_a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.geometry.support.meshUtils.Metadata")],Metadata_a);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/mat3f64.js
var mat3f64 = __webpack_require__(79441);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function primitives_c(){const{faceDescriptions:t,faceVertexOffsets:e,uvScales:r}=F,n=4*t.length,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(2*t.length*3);let l=0,c=0,f=0,u=0;for(let h=0;h<t.length;h++){const n=t[h],p=l/3;for(const t of e)i[u++]=p+t;const m=n.corners;for(let t=0;t<4;t++){const e=m[t];let i=0;a[f++]=.25*r[t][0]+n.uvOrigin[0],a[f++]=n.uvOrigin[1]-.25*r[t][1];for(let t=0;t<3;t++)0!==n.axis[t]?(o[l++]=.5*n.axis[t],s[c++]=n.axis[t]):(o[l++]=.5*e[i++],s[c++]=0)}}return{position:o,normal:s,uv:a,faces:i}}function primitives_f(t,e){const r=t.components[0],n=r.faces,s=primitives_b[e],a=6*s,i=new Array(6),l=new Array(n.length-6);let c=0,f=0;for(let o=0;o<n.length;o++)o>=a&&o<a+6?i[c++]=n[o]:l[f++]=n[o];if(null!=t.vertexAttributes.uv){const e=new Float32Array(t.vertexAttributes.uv),r=4*s*2,n=[0,1,1,1,1,0,0,0];for(let t=0;t<n.length;t++)e[r+t]=n[t];t.vertexAttributes.uv=e}return t.components=[new MeshComponent/* default */.A({faces:i,material:r.material}),new MeshComponent/* default */.A({faces:l})],t}function primitives_u(t=0){const e=Math.round(8*2**t),r=2*e,n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*((e-1)*r*2));let l=0,c=0,f=0,u=0;for(let h=0;h<=e;h++){const t=h/e*Math.PI+.5*Math.PI,n=Math.cos(t),p=Math.sin(t);O[2]=p;const m=0===h||h===e,w=m?r-1:r;for(let v=0;v<=w;v++){const t=v/w*2*Math.PI;O[0]=-Math.sin(t)*n,O[1]=Math.cos(t)*n;for(let e=0;e<3;e++)o[l]=.5*O[e],s[l]=O[e],++l;a[c++]=(v+(m?.5:0))/r,a[c++]=h/e,0!==h&&v!==r&&(h!==e&&(i[f++]=u,i[f++]=u+1,i[f++]=u-r),1!==h&&(i[f++]=u,i[f++]=u-r,i[f++]=u-r-1)),u++}}return{position:o,normal:s,uv:a,faces:i}}function primitives_h(t=0){const e=5,r=Math.round(16*2**t),n=(e-1)*(r+1)+2*r,o=new Float64Array(3*n),s=new Float32Array(3*n),a=new Float32Array(2*n),i=new Uint32Array(3*(4*r));let l=0,c=0,f=0,u=0,h=0;for(let p=0;p<=e;p++){const t=0===p||p===e,n=p<=1||p>=e-1,m=2===p||4===p,w=t?r-1:r;for(let v=0;v<=w;v++){const g=v/w*2*Math.PI,A=t?0:.5;O[0]=A*Math.sin(g),O[1]=A*-Math.cos(g),O[2]=p<=2?.5:-.5;for(let t=0;t<3;t++)o[l++]=O[t],s[c++]=n?2===t?p<=1?1:-1:0:2===t?0:O[t]/A;a[f++]=(v+(t?.5:0))/r,a[f++]=p<=1?1*p/3:p<=3?1*(p-2)/3+1/3:1*(p-4)/3+2/3,m||0===p||v===r||(p!==e&&(i[u++]=h,i[u++]=h+1,i[u++]=h-r),1!==p&&(i[u++]=h,i[u++]=h-r,i[u++]=h-r-1)),h++}}return{position:o,normal:s,uv:a,faces:i}}function primitives_p(t,e){const r="number"==typeof e?e:null!=e?e.width:1,n="number"==typeof e?e:null!=e?e.height:1;switch(t){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}function primitives_m(t){const e=primitives_A.facingAxisOrderSwap[t],r=primitives_A.position,n=primitives_A.normal,o=new Float64Array(r.length),s=new Float32Array(n.length);let a=0;for(let i=0;i<4;i++){const t=a;for(let i=0;i<3;i++){const l=e[i],c=Math.abs(l)-1,f=l>=0?1:-1;o[a]=r[t+c]*f,s[a]=n[t+c]*f,a++}}return{position:o,normal:s,uv:new Float32Array(primitives_A.uv),faces:new Uint32Array(primitives_A.faces),isPlane:!0}}const primitives_w=1,primitives_v=2,primitives_g=3,primitives_A={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[primitives_g,primitives_w,primitives_v],west:[-3,-1,primitives_v],north:[-1,primitives_g,primitives_v],south:[primitives_w,-3,primitives_v],up:[primitives_w,primitives_v,primitives_g],down:[primitives_w,-2,-3]}};function primitives_x(t,e,r){t.isPlane||primitives_y(t),primitives_M(t,primitives_d(r?.size,r?.unit,e.spatialReference));const n=(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e,r),l=e.spatialReference.isGeographic?(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e):n,c=(0,vertexSpaceConversion/* convertVertexSpace */.UR)({vertexAttributes:t,vertexSpace:l,spatialReference:e.spatialReference},n,{allowBufferReuse:!0});return{vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({...c,uv:t.uv}),vertexSpace:n,components:[new MeshComponent/* default */.A({faces:t.faces,material:r?.material||null})],spatialReference:e.spatialReference}}function primitives_y(t){for(let e=0;e<t.position.length;e+=3)t.position[e+2]+=.5}function primitives_d(t,e,r){const n=(0,vertexSpaceConversion/* getUnitToSpatialReferenceScaleConversion */.xK)(e,r);if(null==t&&1===n)return null;if(null==t)return[n,n,n];if("number"==typeof t){const e=t*n;return[e,e,e]}return[null!=t.width?t.width*n:n,null!=t.depth?t.depth*n:n,null!=t.height?t.height*n:n]}function primitives_M(t,n){if(null!=n){S[0]=n[0],S[4]=n[1],S[8]=n[2];for(let r=0;r<t.position.length;r+=3){for(let e=0;e<3;e++)O[e]=t.position[r+e];(0,vec32.o)(O,O,S);for(let e=0;e<3;e++)t.position[r+e]=O[e]}if(n[0]!==n[1]||n[1]!==n[2]){S[0]=1/n[0],S[4]=1/n[1],S[8]=1/n[2];for(let n=0;n<t.normal.length;n+=3){for(let e=0;e<3;e++)O[e]=t.normal[n+e];(0,vec32.o)(O,O,S),(0,vec32.n)(O,O);for(let e=0;e<3;e++)t.normal[n+e]=O[e]}}}}const F={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},primitives_b={south:0,east:1,north:2,west:3,up:4,down:5},O=(0,vec3f64/* create */.vt)(),S=(0,mat3f64/* create */.vt)();

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat3.js
var mat3 = __webpack_require__(82541);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/mat4.js
var mat4 = __webpack_require__(25336);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
var quat = __webpack_require__(31753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(19165);
;// ./node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const rotate_O=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.rotate");function B(t,e,r){if(!t.vertexAttributes?.position||0===e[3])return;const{spatialReference:o,vertexSpace:i}=t,n=r?.origin??t.origin,s=r?.geographic,a=geographicUtils_t(rotate_O,i,o,s);(0,meshVertexSpaceUtils/* isMeshWithRelativeVertexSpace */.CK)(t)?G(t,e,n):a?H(t,e,n):I(t,e,n)}function G(t,e,r){t.transform??=new MeshTransform/* default */.A;const{vertexSpace:l,transform:c,spatialReference:f}=t,[u,x,h]=l.origin,R=new Point/* default */.A({x:u,y:x,z:h,spatialReference:f}),d=K;if(R.equals(r))(0,vec32.i)(d,0,0,0);else if(!(0,vertexSpaceConversion/* projectPointToVertexSpace */.p5)(d,r,t))return void (0,projection/* logProjectionError */.CN)(rotate_O(),r.spatialReference,f,projection/* loadProjectErrorMessage */.JP);(0,quat/* setAxisAngle */.x8)(Z,(0,axisAngleDegrees/* axis */.yo)(e),(0,axisAngleDegrees/* angleRad */.$I)(e));const S=(0,mat4/* fromRotationTranslationScaleOrigin */.O7)(N,Z,vec3f64/* ZEROS */.uY,vec3f64/* ONES */.Un,d),{localMatrix:U}=c,q=(0,mat4/* multiply */.lw)(N,S,U);c.scale=(0,mat4/* getScale */.X_)((0,vec3f64/* create */.vt)(),q),(0,mat4/* scale */.hs)(q,q,(0,vec32.r)(K,c.scale));const z=c.rotationAxis;c.rotation=(0,axisAngleDegrees/* fromMatrix */.ui)(q),0===c.rotationAngle&&(c.rotationAxis=z),c.translation=(0,mat4/* getTranslation */.sC)((0,vec3f64/* create */.vt)(),q)}function H(t,r,o){const i=t.spatialReference,n=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(i),s=Y;if(!(0,projectPointToVector/* projectPointToVector */.g)(o,s,n)&&((0,projection/* logProjectionError */.CN)(rotate_O(),o.spatialReference,n,"Falling back to mesh origin"),!(0,projectPointToVector/* projectPointToVector */.g)(t.origin,s,n)))return void (0,projection/* logProjectionError */.CN)(rotate_O(),t.origin.spatialReference,n);const a=t.vertexAttributes.position,l=t.vertexAttributes.normal,c=t.vertexAttributes.tangent,m=new Float64Array(a.length),f=null!=l?new Float32Array(l.length):null,p=null!=c?new Float32Array(c.length):null;(0,computeTranslationToOriginAndRotation/* computeTranslationToOriginAndRotation */.l)(n,s,W,n),(0,mat3/* fromMat4 */.z0)(X,W);const g=Q;(0,vec32.o)((0,axisAngleDegrees/* axis */.yo)(Q),(0,axisAngleDegrees/* axis */.yo)(r),X),g[3]=r[3],(0,projection/* projectToPCPF */.gr)(a,i,m,n)&&(null==l||null==f||(0,projection/* projectNormalToPCPF */.X4)(l,a,i,m,n,f))&&(null==c||null==p||(0,projection/* projectTangentToPCPF */.xA)(c,a,i,m,n,p))?(J(m,g,3,s),(0,projection/* projectFromPCPF */.$5)(m,n,a,i)&&(null==l||null==f||(J(f,g,3),(0,projection/* projectNormalFromPCPF */.si)(f,a,i,m,n,l)))&&(null==c||null==p||(J(p,g,4),(0,projection/* projectTangentFromPCPF */.Mv)(p,a,i,m,n,c)))?t.vertexAttributesChanged():(0,projection/* logProjectionError */.CN)(rotate_O(),n,i)):(0,projection/* logProjectionError */.CN)(rotate_O(),i,n)}function I(t,e,r){const o=Y;if(!(0,projectPointToVector/* projectPointToVector */.g)(r,o,t.spatialReference)){const e=t.origin;return o[0]=e.x,o[1]=e.y,o[2]=e.z,void (0,projection/* logProjectionError */.CN)(rotate_O(),r.spatialReference,t.spatialReference,projection/* loadProjectErrorMessage */.JP)}J(t.vertexAttributes.position,e,3,o),J(t.vertexAttributes.normal,e,3),J(t.vertexAttributes.tangent,e,4),t.vertexAttributesChanged()}function J(t,e,r,o=vec3f64/* ZEROS */.uY){if(null!=t){(0,mat4/* fromRotation */.$0)(W,(0,axisAngleDegrees/* angleRad */.$I)(e),(0,axisAngleDegrees/* axis */.yo)(e));for(let e=0;e<t.length;e+=r){for(let r=0;r<3;r++)K[r]=t[e+r]-o[r];(0,vec32.t)(K,K,W);for(let r=0;r<3;r++)t[e+r]=K[r]+o[r]}}}const K=(0,vec3f64/* create */.vt)(),N=(0,mat4f64/* create */.vt)(),Q=(0,axisAngleDegrees/* create */.vt)(),W=(0,mat4f64/* create */.vt)(),X=(0,mat3f64/* create */.vt)(),Y=(0,vec3f64/* create */.vt)(),Z=(0,quatf64/* create */.vt)();

;// ./node_modules/@arcgis/core/geometry/support/meshUtils/scale.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const k=()=>Logger/* default */.A.getLogger("esri.geometry.support.meshUtils.scale");function q(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:o,spatialReference:i}=e,n=r?.origin??e.origin,s=r?.geographic,a=geographicUtils_t(k,o,i,s);(0,meshVertexSpaceUtils/* isMeshWithRelativeVertexSpace */.CK)(e)?z(e,t,n):a?L(e,t,n):scale_M(e,t,n)}function z(e,s,f){e.transform??=new MeshTransform/* default */.A;const{vertexSpace:u,transform:x,spatialReference:h}=e,[A,d,y]=u.origin,w=new Point/* default */.A({x:A,y:d,z:y,spatialReference:h}),F=scale_T;if(w.equals(f))(0,vec32.i)(F,0,0,0);else if(!(0,vertexSpaceConversion/* projectPointToVertexSpace */.p5)(F,f,e))return void (0,projection/* logProjectionError */.CN)(k(),f.spatialReference,h,projection/* loadProjectErrorMessage */.JP);const S=(0,vec32.i)(V,s,s,s),U=(0,mat4/* fromRotationTranslationScaleOrigin */.O7)(D,quatf64/* IDENTITY */.zK,vec3f64/* ZEROS */.uY,S,F),{localMatrix:q}=x,z=(0,mat4/* multiply */.lw)(D,U,q);x.scale=(0,mat4/* getScale */.X_)((0,vec3f64/* create */.vt)(),z),(0,mat4/* scale */.hs)(z,z,(0,vec32.r)(scale_T,x.scale));const L=x.rotationAxis;x.rotation=(0,axisAngleDegrees/* fromMatrix */.ui)(z),0===x.rotationAngle&&(x.rotationAxis=L),x.translation=(0,mat4/* getTranslation */.sC)((0,vec3f64/* create */.vt)(),z)}function L(e,t,r){const o=e.spatialReference,i=(0,spatialReferenceEllipsoidUtils/* getSphericalPCPF */.lO)(o),n=E;if(!(0,projectPointToVector/* projectPointToVector */.g)(r,n,i)&&((0,projection/* logProjectionError */.CN)(k(),r.spatialReference,i,"Falling back to mesh origin"),!(0,projectPointToVector/* projectPointToVector */.g)(e.origin,n,i)))return void (0,projection/* logProjectionError */.CN)(k(),e.origin.spatialReference,i);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),f=null!=a?new Float32Array(a.length):null,m=null!=l?new Float32Array(l.length):null;(0,projection/* projectToPCPF */.gr)(s,o,c,i)&&(null==a||null==f||(0,projection/* projectNormalToPCPF */.X4)(a,s,o,c,i,f))&&(null==l||null==m||(0,projection/* projectTangentToPCPF */.xA)(l,s,o,c,i,m))?(P(c,t,n),(0,projection/* projectFromPCPF */.$5)(c,i,s,o)&&(null==a||null==f||(0,projection/* projectNormalFromPCPF */.si)(f,s,o,c,i,a))&&(null==l||null==m||(0,projection/* projectTangentFromPCPF */.Mv)(m,s,o,c,i,l))?e.vertexAttributesChanged():(0,projection/* logProjectionError */.CN)(k(),i,o)):(0,projection/* logProjectionError */.CN)(k(),o,i)}function scale_M(e,t,r){const o=E;if(!(0,projectPointToVector/* projectPointToVector */.g)(r,o,e.spatialReference)){const t=e.origin;return o[0]=t.x,o[1]=t.y,o[2]=t.z,void (0,projection/* logProjectionError */.CN)(k(),r.spatialReference,e.spatialReference,projection/* loadProjectErrorMessage */.JP)}P(e.vertexAttributes.position,t,o),e.vertexAttributesChanged()}function P(e,t,r=vec3f64/* ZEROS */.uY){if(e)for(let o=0;o<e.length;o+=3){for(let t=0;t<3;t++)scale_T[t]=e[o+t]-r[t];(0,vec32.g)(scale_T,scale_T,t);for(let t=0;t<3;t++)e[o+t]=scale_T[t]+r[t]}}const scale_T=(0,vec3f64/* create */.vt)(),V=(0,vec3f64/* create */.vt)(),D=(0,mat4f64/* create */.vt)(),E=(0,vec3f64/* create */.vt)();

;// ./node_modules/@arcgis/core/geometry/Mesh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var Mesh_H;const Mesh_K={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:MeshGeoreferencedVertexSpace/* default */.A,local:MeshLocalVertexSpace/* default */.A}};let Mesh_q=Mesh_H=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(Geometry/* default */.A))){constructor(e){super(e),this.components=null,this.vertexSpace=new MeshGeoreferencedVertexSpace/* default */.A,this.transform=null,this.metadata=new Metadata_a,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new MeshVertexAttributes/* MeshVertexAttributes */.H,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles((0,reactiveUtils/* watch */.wB)((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=this.metadata.displaySource?.extent}get _transformedExtent(){const{spatialReference:e,vertexSpace:t}=this,r=this;return l({get transform(){return r.transform},vertexSpace:t,spatialReference:e,untransformedBounds:this._untransformedBounds})}get _untransformedBounds(){const{vertexAttributes:{position:e},components:t}=this;return 0===e.length||0===t?.length?(0,aaBoundingBox/* create */.vt)(aaBoundingBox/* zero */.v_):(0,aaBoundingBox/* fromBuffer */.vY)(e)}get origin(){const e=(0,meshVertexSpaceUtils/* vertexSpaceOriginToPoint */.MW)(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:r}=this._transformedExtent;return new Point/* default */.A({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get extent(){return this.loaded||null==this.metadata?.displaySource?.extent?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(MeshComponent/* default */.A.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Logger/* default */.A.getLogger(this).error("removeComponent()",meshErrors_e)}}rotate(e,t,r,o){return (0,axisAngleDegrees/* composeAxes */.AU)(e,t,r,Mesh_J),B(this,Mesh_J,o),this}offset(e,t,r){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:o,vertexAttributes:s}=this,n=s?.position;if(!n)return this;if((0,meshVertexSpaceUtils/* isRelativeVertexSpace */.Hq)(o)){const[s,n,i]=o.origin;o.origin=(0,vec3f64/* fromValues */.fA)(s+e,n+t,i+r)}else{for(let o=0;o<n.length;o+=3)n[o]+=e,n[o+1]+=t,n[o+2]+=r;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(q(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(centerAt_u(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(loadExternal_u(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(),this.vertexSpace.clone(),{preserveMetadata:!0})}cloneAndModifyVertexAttributes(e,t,r){let o=null;if(this.components){const e=new Map,t=new Map;o=this.components.map((r=>r.cloneWithDeduplication(e,t)))}const s={components:o,spatialReference:this.spatialReference,vertexAttributes:e,vertexSpace:t,transform:this.transform?.clone()??null,metadata:r?.preserveMetadata?this.metadata.clone():new Metadata_a};return new Mesh_H(s)}cloneShallow(){return new Mesh_H({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const[{toBinaryGLTF:t}]=await Promise.all([__webpack_require__.e(/* import() */ 26752).then(__webpack_require__.bind(__webpack_require__, 26752)),this.load(e)]);return (0,promiseUtils/* throwIfAborted */.Te)(e),await t(this,e)}get usedMemory(){return this.components?this.components.reduce(((e,t)=>e+t.memoryUsage),this.vertexAttributes.usedMemory):this.vertexAttributes.usedMemory}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(Logger/* default */.A.getLogger(this).error(e,t),!1)}static createBox(e,t){if(!(e instanceof Point/* default */.A))return Logger/* default */.A.getLogger(this.prototype).error(".createBox()",meshErrors_s),null;const r=new Mesh_H(primitives_x(primitives_c(),e,t));return t?.imageFace&&"all"!==t.imageFace?primitives_f(r,t.imageFace):r}static createSphere(e,t){return e instanceof Point/* default */.A?new Mesh_H(primitives_x(primitives_u(t?.densificationFactor||0),e,t)):(Logger/* default */.A.getLogger(this.prototype).error(".createSphere()",meshErrors_s),null)}static createCylinder(e,t){return e instanceof Point/* default */.A?new Mesh_H(primitives_x(primitives_h(t?.densificationFactor||0),e,t)):(Logger/* default */.A.getLogger(this.prototype).error(".createCylinder()",meshErrors_s),null)}static createPlane(e,t){if(!(e instanceof Point/* default */.A))return Logger/* default */.A.getLogger(this.prototype).error(".createPlane()",meshErrors_s),null;const r=t?.facing??"up",s=primitives_p(r,t?.size);return new Mesh_H(primitives_x(primitives_m(r),e,{...t,size:s}))}static createFromPolygon(e,t){if(!(e instanceof Polygon/* default */.A))return Logger/* default */.A.getLogger(this.prototype).error(".createFromPolygon()",n),null;const r=triangulationUtils_f(e);return new Mesh_H({vertexAttributes:new MeshVertexAttributes/* MeshVertexAttributes */.H({position:r.position}),components:[new MeshComponent/* default */.A({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new MeshGeoreferencedVertexSpace/* default */.A})}static async createFromGLTF(e,t,r){if(!(e instanceof Point/* default */.A)){const e=new i;throw Logger/* default */.A.getLogger(this.prototype).error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:s}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 62228).then(__webpack_require__.bind(__webpack_require__, 62228)),r);return new Mesh_H(await s(e,t,r))}static createWithExternalSource(e,t,r){const o=r?.extent??null,{spatialReference:s}=e,n=r?.transform?.clone()??new MeshTransform/* default */.A,i=(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e,r),a=r?.unitConversionDisabled,p={source:t,extent:o,unitConversionDisabled:a},c=new Metadata_a;return c.externalSources.push(p),new Mesh_H({metadata:c,transform:n,vertexSpace:i,spatialReference:s})}static createIncomplete(e,r){const{spatialReference:o}=e,s=r?.transform?.clone()??new MeshTransform/* default */.A,n=(0,meshVertexSpaceUtils/* selectVertexSpace */.TE)(e,r),i=new Mesh_H({transform:s,vertexSpace:n,spatialReference:o});return i.addResolvingPromise(Promise.reject(new core_Error/* default */.A("mesh-incomplete","Mesh resources are not complete"))),i}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[MeshComponent/* default */.A],json:{write:!0}})],Mesh_q.prototype,"components",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0,types:Mesh_K,constructOnly:!0,json:{write:!0}})],Mesh_q.prototype,"vertexSpace",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:MeshTransform/* default */.A,json:{write:!0}})],Mesh_q.prototype,"transform",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],Mesh_q.prototype,"metadata",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"hasExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"_transformedExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"_untransformedBounds",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Mesh_q.prototype,"origin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],Mesh_q.prototype,"extent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Mesh_q.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Mesh_q.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:MeshVertexAttributes/* MeshVertexAttributes */.H,nonNullable:!0,json:{write:!0}})],Mesh_q.prototype,"vertexAttributes",void 0),Mesh_q=Mesh_H=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.geometry.Mesh")],Mesh_q);const Mesh_J=(0,axisAngleDegrees/* create */.vt)();


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

/***/ 51831:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dg: () => (/* binding */ e),
/* harmony export */   my: () => (/* binding */ f),
/* harmony export */   tM: () => (/* binding */ A),
/* harmony export */   uW: () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports getZeroIndexArray, newIntArray, pruneIndexArrays */
/* harmony import */ var _core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62088);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(r){return e(r,!0)}function e(t,e){if(Array.isArray(t)){if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return t}else if(t.length<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return Array.from(t);let f=!0,a=!0;return t.some(((r,n)=>(f=f&&0===r,a=a&&r===n,!f&&!a))),f?U(t.length):a?A(t.length):(0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(t)&&t.BYTES_PER_ELEMENT===Uint16Array.BYTES_PER_ELEMENT?t:i(t,!e)}function i(r,t){for(const e of r){if(e>=65536)return (0,_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .isTypedArray */ .iu)(r)?r:new Uint32Array(r);e>=256&&(t=!1)}return t?new Uint8Array(r):new Uint16Array(r)}function f(n){return n<=_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?new Array(n):n<=65536?new Uint16Array(n):new Uint32Array(n)}function a(n){return n<=r?new Array(n):new Uint32Array(n)}let u=l(131072);const o=[0],y=(()=>{const r=new Uint16Array(65536);for(let n=0;n<r.length;++n)r[n]=n;return r})();function A(n){return 1===n?o:n<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9?Array.from(new Uint16Array(y.buffer,0,n)):n<y.length?new Uint16Array(y.buffer,0,n):(n>u.length&&(u=l(Math.max(2*u.length,n))),new Uint32Array(u.buffer,0,n))}function l(r){const n=new Uint32Array(r);for(let t=0;t<n.length;t++)n[t]=t;return n}let w=new Uint8Array(65536);function U(n){if(1===n)return o;if(n<_core_typedArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__/* .nativeArrayMaxSize */ .y9)return new Array(n).fill(0);if(n>w.length){const r=Math.max(2*w.length,n);w=new Uint8Array(r)}return new Uint8Array(w.buffer,0,n)}function c(){u=l(131072),w=new Uint8Array(65536)}


/***/ }),

/***/ 2366:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77380);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8636);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(93544);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(64855);
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78608);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var u;let h=u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{static from(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(u,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__/* .castArray */ .b)(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castMaterial(t){return (0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__/* .ensureClass */ .PZ)(t&&"object"==typeof t&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?_MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,t)}clone(){return new u({faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,r){const s={faces:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,r):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new u(s)}get memoryUsage(){let t=0;return null!=this.faces&&(t+=this.faces.byteLength),null!=this.material&&(t+=this.material.memoryUsage),t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_10__/* .writeTypedArray */ .B}})],h.prototype,"faces",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("faces")],h.prototype,"castFaces",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_MeshMaterial_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],h.prototype,"material",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("material")],h.prototype,"castMaterial",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],h.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:!0}})],h.prototype,"shading",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean})],h.prototype,"trustSourceNormals",void 0),h=u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshComponent")],h);


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

/***/ 93544:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93814);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46874);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82007);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let u=n=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(o){super(o),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const e=null!=o?o.get(this):null;if(e)return e;const t=new n(this.clonePropertiesWithDeduplication(r));return null!=o&&o.set(this,t),t}clonePropertiesWithDeduplication(o){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(o),normalTexture:this.normalTexture?.cloneWithDeduplication(o),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let o=0;return o+=null!=this.color?16:0,null!=this.colorTexture&&(o+=this.colorTexture.memoryUsage),o+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(o+=this.normalTexture.memoryUsage),o+=null!=this.normalTextureTransform?20:0,o}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"colorTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"normalTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"alphaCutoff",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({nonNullable:!0,json:{write:!0}})],u.prototype,"doubleSided",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshMaterial")],u);


/***/ }),

/***/ 64855:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93814);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93544);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46874);
/* harmony import */ var _MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82007);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let u=n=class extends _MeshMaterial_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,s){const o=null!=e?e.get(this):null;if(o)return o;const t=new n(this.clonePropertiesWithDeduplication(s));return null!=e&&e.set(this,t),t}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_Color_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveColor",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"emissiveTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"occlusionTextureTransform",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"metallic",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],u.prototype,"roughness",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTexture",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_MeshTextureTransform_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A,json:{write:!0}})],u.prototype,"metallicRoughnessTextureTransform",void 0),u=n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshMaterialMetallicRoughness")],u);


/***/ }),

/***/ 46874:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6273);
/* harmony import */ var _core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73027);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8636);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48524);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55714);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var p;const h=new WeakMap;let d=0,u=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{static{p=this}constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,e,a,r){if(t instanceof HTMLImageElement){const s={type:"image-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),crossOrigin:t.crossOrigin};e[a]=s}else if(t instanceof HTMLCanvasElement){const r={type:"canvas-element",imageData:m(t.getContext("2d").getImageData(0,0,t.width,t.height))};e[a]=r}else if(t instanceof HTMLVideoElement){const s={type:"video-element",src:(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.t)(t.src,r),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};e[a]=s}else if(t instanceof ImageData){const r={type:"image-data",imageData:m(t)};e[a]=r}}readData(t){switch(t.type){case"image-element":{const e=new Image;return e.src=t.src,e.crossOrigin=t.crossOrigin,e}case"canvas-element":{const e=g(t.imageData),a=document.createElement("canvas");return a.width=e.width,a.height=e.height,a.getContext("2d").putImageData(e,0,0),a}case"image-data":return g(t.imageData);case"video-element":{const e=document.createElement("video");return e.src=t.src,e.crossOrigin=t.crossOrigin,e.autoplay=t.autoplay,e.loop=t.loop,e.muted=t.muted,e.preload=t.preload,e}default:return}}get transparent(){const{data:t,url:e}=this,a=t=>t?.toLowerCase().endsWith(".png")||t?.toLocaleLowerCase().startsWith("data:image/png;");return t instanceof HTMLCanvasElement?f(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData?f(t):!(!e||!a(e))||!!(t instanceof HTMLImageElement&&a(t.src))}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",e=(e="")=>`d:${e},t:${this.transparent},w:${t}`;return null!=this.url?e(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?e(this.data.src):(h.has(this.data)||h.set(this.data,++d),e(h.get(this.data))):e()}get memoryUsage(){let t=0;if(t+=null!=this.url?this.url.length:0,null!=this.data){const e=this.data;"data"in e?t+=e.data.byteLength:e instanceof HTMLImageElement?t+=e.naturalWidth*e.naturalHeight*3:e instanceof HTMLCanvasElement&&(t+=e.width*e.height*3)}return t}clone(){const t={url:this.url,data:this.data,transparent:this.transparent,wrap:this._cloneWrap()};return new p(t)}cloneWithDeduplication(t){const e=t.get(this);if(e)return e;const a=this.clone();return t.set(this,a),a}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(t){return"string"==typeof t?new p({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new p({data:t}):(0,_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .ensureClass */ .PZ)(p,t)}};function m(t){let e="";for(let a=0;a<t.data.length;a++)e+=String.fromCharCode(t.data[a]);return{data:btoa(e),width:t.width,height:t.height}}function g(t){const a=atob(t.data),r=new Uint8ClampedArray(a.length);for(let e=0;e<a.length;e++)r[e]=a.charCodeAt(e);return (0,_core_imageUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .wrapImageData */ .eV)(r,t.width,t.height)}function f(t){for(let e=3;e<t.data.length;e+=4)if(255!==t.data[e])return!0;return!1}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{write:_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_10__.w}})],u.prototype,"url",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],u.prototype,"data",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("data")],u.prototype,"writeData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("data")],u.prototype,"readData",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],u.prototype,"transparent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:!0}})],u.prototype,"wrap",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],u.prototype,"contentHash",null),u=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshTexture")],u);


/***/ }),

/***/ 82007:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
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
let p=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"offset",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],p.prototype,"rotation",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],p.prototype,"scale",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.geometry.support.MeshTextureTransform")],p);


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

/***/ 47206:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77380);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _meshProperties_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78608);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var g;let p=g=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castPosition(t){t&&t instanceof Float32Array&&_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castUv(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castNormal(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}castTangent(t){return (0,_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .castArray */ .b)(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},_core_Logger_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.getLogger(this))}clone(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.position),uv:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.uv),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.tangent),color:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.color)};return new g(t)}clonePositional(){const t={position:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.position),normal:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.normal),tangent:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.tangent),uv:this.uv,color:this.color};return new g(t)}get usedMemory(){return this.position.byteLength+(this.uv?.byteLength??0)+(this.normal?.byteLength??0)+(this.tangent?.byteLength??0)+(this.color?.byteLength??0)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"color",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("color")],p.prototype,"castColor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({nonNullable:!0,json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"position",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("position")],p.prototype,"castPosition",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"uv",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("uv")],p.prototype,"castUv",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"normal",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("normal")],p.prototype,"castNormal",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{write:_meshProperties_js__WEBPACK_IMPORTED_MODULE_7__/* .writeTypedArray */ .B}})],p.prototype,"tangent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_cast_js__WEBPACK_IMPORTED_MODULE_5__/* .cast */ .w)("tangent")],p.prototype,"castTangent",null),p=g=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.support.MeshVertexAttributes")],p);


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

/***/ 10559:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y$: () => (/* binding */ f),
  XW: () => (/* binding */ a),
  qB: () => (/* binding */ B),
  Qt: () => (/* binding */ H),
  My: () => (/* binding */ P),
  bf: () => (/* binding */ z),
  jZ: () => (/* binding */ d),
  j0: () => (/* binding */ x),
  Sx: () => (/* binding */ E),
  E$: () => (/* binding */ A),
  h: () => (/* binding */ w),
  P: () => (/* binding */ v),
  SL: () => (/* binding */ I),
  gH: () => (/* binding */ y),
  ZD: () => (/* binding */ p),
  si: () => (/* binding */ b),
  mJ: () => (/* binding */ J),
  UL: () => (/* binding */ Q),
  D6: () => (/* binding */ C),
  Yi: () => (/* binding */ L),
  An: () => (/* binding */ S),
  LC: () => (/* binding */ j),
  xs: () => (/* binding */ o),
  EC: () => (/* binding */ h),
  Xm: () => (/* binding */ U),
  Vp: () => (/* binding */ K),
  zD: () => (/* binding */ R),
  m8: () => (/* binding */ D),
  nS: () => (/* binding */ V),
  H$: () => (/* binding */ k),
  eI: () => (/* binding */ O),
  Eq: () => (/* binding */ T),
  jz: () => (/* binding */ m),
  Aj: () => (/* binding */ F),
  E7: () => (/* binding */ N),
  Y4: () => (/* binding */ W),
  TX: () => (/* binding */ G),
  Uz: () => (/* binding */ M),
  ml: () => (/* binding */ q),
  XP: () => (/* binding */ g)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/float16.js
var float16 = __webpack_require__(81627);
;// ./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{static{this.ElementCount=9}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}

;// ./node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Mat4_t{static{this.ElementCount=16}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){this.copyFromTypedBuffer(t,e.typedBuffer,r*e.typedBufferStride)}copyFromTypedBuffer(t,e,r){const f=this.typedBuffer;let s=t*this.typedBufferStride;for(let i=0;i<16;++i)f[s++]=e[r++]}get buffer(){return this.typedBuffer.buffer}}

;// ./node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Scalar_t{static{this.ElementCount=1}constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(53334);
;// ./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{static{this.ElementCount=2}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2/* set */.hZ)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i]=s[d]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(80347);
;// ./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec3_e{static{this.ElementCount=3}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec32.i)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(74772);
;// ./node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec4_e{static{this.ElementCount=4}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec42.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(26421);
;// ./node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends Scalar_t{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}static{this.ElementType="f16"}}class f extends Scalar_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}static{this.ElementType="f32"}}class p extends e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(p,e,t)}static{this.ElementType="f16"}}class y extends e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(y,e,t)}static{this.ElementType="f32"}}class h extends Vec3_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(h,e,t)}static{this.ElementType="f16"}}class o extends Vec3_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f32"}}class m extends Vec4_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(m,e,t)}static{this.ElementType="f16"}}class T extends Vec4_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static{this.ElementType="f32"}}class d extends t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static{this.ElementType="f32"}}class x extends t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(x,e,t)}static{this.ElementType="f64"}}class E extends Mat4_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static{this.ElementType="f32"}}class A extends Mat4_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static{this.ElementType="f64"}}class B extends Scalar_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static{this.ElementType="f64"}}class b extends e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static{this.ElementType="f64"}}class U extends Vec3_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f64"}}class F extends Vec4_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(F,e,t)}static{this.ElementType="f64"}}class I extends Scalar_t{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(I,e,t)}static{this.ElementType="u8"}}class j extends e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(j,e,t)}static{this.ElementType="u8"}}class O extends Vec3_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="u8"}}class g extends Vec4_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static{this.ElementType="u8"}}class w extends Scalar_t{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static{this.ElementType="u16"}}class L extends e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static{this.ElementType="u16"}}class V extends Vec3_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(V,e,t)}static{this.ElementType="u16"}}class M extends Vec4_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static{this.ElementType="u16"}}class v extends Scalar_t{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static{this.ElementType="u32"}}class S extends e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(S,e,t)}static{this.ElementType="u32"}}class k extends Vec3_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(k,e,t)}static{this.ElementType="u32"}}class q extends Vec4_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(q,e,t)}static{this.ElementType="u32"}}class z extends Scalar_t{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static{this.ElementType="i8"}}class C extends e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(C,e,t)}static{this.ElementType="i8"}}class D extends Vec3_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(D,e,t)}static{this.ElementType="i8"}}class G extends Vec4_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(G,e,t)}static{this.ElementType="i8"}}class H extends Scalar_t{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(H,e,t)}static{this.ElementType="i16"}}class J extends e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(J,e,t)}static{this.ElementType="i16"}}class K extends Vec3_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(K,e,t)}static{this.ElementType="i16"}}class N extends Vec4_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(N,e,t)}static{this.ElementType="i16"}}class P extends Scalar_t{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(P,e,t)}static{this.ElementType="i32"}}class Q extends e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Q,e,t)}static{this.ElementType="i32"}}class R extends Vec3_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(R,e,t)}static{this.ElementType="i32"}}class W extends Vec4_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static{this.ElementType="i32"}}


/***/ }),

/***/ 81627:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SX: () => (/* binding */ r),
/* harmony export */   pX: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports disableNativeF16Array, makeFloat16Array, resetNativeF16Array */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=globalThis.Float16Array;function t(...t){return new(n??Float32Array)(...t)}function l(){return n}let r=!!n;function o(){n=null,r=!1}function a(){n=globalThis.Float16Array,r=!!n}


/***/ }),

/***/ 78608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ r),
/* harmony export */   b: () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,n,r,t){const{loggerTag:o,stride:f}=n;return e.length%f!==0?(t.error(o,`Invalid array length, expected a multiple of ${f}`),new r([])):e}function n(n,r,t,o,f){if(!n)return n;if(n instanceof r)return e(n,o,r,f);for(const i of t)if(n instanceof i)return e(new r(n),o,r,f);if(Array.isArray(n))return e(new r(n),o,r,f);{const e=t.map((e=>`'${e.name}'`));return f.error(`Failed to set property, expected one of ${e}, but got ${n.constructor.name}`),new r([])}}function r(e,n,r){n[r]=t(e)}function t(e){const n=new Array(e.length);for(let r=0;r<e.length;r++)n[r]=e[r];return n}


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

/***/ 95431:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/* harmony import */ var _Indices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(e,s,u){const c=Array.isArray(e),a=c?e.length/s:e.byteLength/(4*s),h=c?e:new Uint32Array(e,0,a*s),y=u?.minReduction??0,A=u?.originalIndices||null,g=A?A.length:0,m=u?.componentOffsets||null;let w=0;if(m)for(let t=0;t<m.length-1;t++){const n=m[t+1]-m[t];n>w&&(w=n)}else w=a;const U=Math.floor(1.1*w)+1;(null==i||i.length<2*U)&&(i=new Uint32Array((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .nextHighestPowerOfTwo */ .cU)(2*U)));for(let t=0;t<2*U;t++)i[t]=0;let b=0;const d=!!m&&!!A,p=d?g:a;let M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .newIndexArray */ .my)(a);const j=new Uint32Array(g),q=1.96;let I=0!==y?Math.ceil(4*q*q/(y*y)*y*(1-y)):p,k=1,x=m?m[1]:p;for(let t=0;t<p;t++){if(t===I){const n=1-b/t;if(n+q*Math.sqrt(n*(1-n)/t)<y)return null;I*=2}if(t===x){for(let t=0;t<2*U;t++)i[t]=0;if(A)for(let t=m[k-1];t<m[k];t++)j[t]=M[A[t]];x=m[++k]}const n=d?A[t]:t,r=n*s,e=f(h,r,s);let o=e%U,u=b;for(;0!==i[2*o+1];){if(i[2*o]===e){const t=i[2*o+1]-1;if(l(h,r,t*s,s)){u=M[t];break}}o++,o>=U&&(o-=U)}u===b&&(i[2*o]=e,i[2*o+1]=n+1,b++),M[n]=u}if(0!==y&&1-b/a<y)return null;if(d){for(let t=m[k-1];t<j.length;t++)j[t]=M[A[t]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactMeshIndices */ .uW)(j)}const C=c?new Array(b):new Uint32Array(b*s);b=0;for(let t=0;t<p;t++)if(M[t]===b){o(h,(d?A[t]:t)*s,C,b*s,s),b++}if(A&&!d){const t=new Uint32Array(g);for(let n=0;n<t.length;n++)t[n]=M[A[n]];M=(0,_Indices_js__WEBPACK_IMPORTED_MODULE_1__/* .compactMeshIndices */ .uW)(t)}return{buffer:Array.isArray(C)?C:C.buffer,indices:M,uniqueCount:b}}function l(t,n,r,e){for(let l=0;l<e;l++)if(t[n+l]!==t[r+l])return!1;return!0}function o(t,n,r,e,l){for(let o=0;o<l;o++)r[e+o]=t[n+o]}function f(t,n,r){let e=0;for(let l=0;l<r;l++)e=t[n+l]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let i=null;


/***/ }),

/***/ 90514:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ h),
/* harmony export */   CN: () => (/* binding */ F),
/* harmony export */   JP: () => (/* binding */ O),
/* harmony export */   KM: () => (/* binding */ C),
/* harmony export */   Mv: () => (/* binding */ G),
/* harmony export */   X4: () => (/* binding */ E),
/* harmony export */   gr: () => (/* binding */ g),
/* harmony export */   qs: () => (/* binding */ _),
/* harmony export */   si: () => (/* binding */ R),
/* harmony export */   xA: () => (/* binding */ w)
/* harmony export */ });
/* unused harmony exports VectorType, transformVectorENUPlateCarree, transformVectorWMPlateCarree */
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4506);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82541);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79441);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25336);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26110);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19913);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70600);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88133);
/* harmony import */ var _Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99263);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67488);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64672);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(10559);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(72449);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(57290);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O="Projection may be possible after calling projection.load().";function F(r,t,o,e){r.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${o.wkid}).${e?" ":""}${e}`)}function E(r,t,o,e,n,i){return B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function R(r,t,o,e,n,i){return B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function g(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function h(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function _(t,e,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(q,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.b)(e,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(e,e),e}function C(t,o,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(q,n),(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__.t)(o,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(o,o,4),o}function b(r,o,e,n){const i=o===V.NORMAL;return k(r,o,e,((r,o)=>{const e=Math.cos(t(r));o[0]=i?e:1/e,o[1]=1}),n)}function L(r,t,o,e){const n=t===V.NORMAL;return k(r,t,o,((r,t)=>{const o=Math.cosh(-r/l.radius);t[0]=1,t[1]=n?o:1/o}),e)}function k(r,t,o,e,n){const i=t===V.NORMAL?3:4,f=[0,0];for(let c=0,a=1;c<r.length;c+=i,a+=3){e(o[a],f);const t=r[c]*f[0],s=r[c+1]*f[1],m=r[c+2],u=1/Math.sqrt(t*t+s*s+m*m);n[c]=t*u,n[c+1]=s*u,n[c+2]=m*u,4===i&&(n[c+3]=r[c+3])}return n}function w(r,t,o,e,n,i){if(!B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}function G(r,t,o,e,n,i){if(!B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,16),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,16)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}var V,x;function v(r,t,n,f,c){switch((0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(f,n,Y,f),r===x.FROM_PCPF&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .invert */ .B8)(Y,Y),t){case V.NORMAL:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(c,Y);case V.TANGENT:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(c,Y)}}function B(r,t,o,e,n,i,f,s){if(!t)return;const m=e.count;if($(n))for(let a=0;a<m;a++)i.getVec(a,S),t.getVec(a,U),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,v(r,o,S,f,q)),s.setVec(a,U);else for(let u=0;u<m;u++){i.getVec(u,S),t.getVec(u,U);const n=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .y2lat */ .jg)(e.get(u,1));let m=Math.cos(n);o===V.TANGENT!=(r===x.TO_PCPF)&&(m=1/m),v(r,o,S,f,q),r===x.TO_PCPF?(q[0]*=m,q[1]*=m,q[2]*=m,q[3]*=m,q[4]*=m,q[5]*=m):(q[0]*=m,q[3]*=m,q[6]*=m,q[1]*=m,q[4]*=m,q[7]*=m),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,q),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(U,U),s.setVec(u,U)}return s}function $(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isCGCS2000 */ .x1)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMars */ .q8)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMoon */ .KQ)(r)}!function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"}(V||(V={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(x||(x={}));const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),Y=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),q=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 81587:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UR: () => (/* binding */ B),
/* harmony export */   p5: () => (/* binding */ k),
/* harmony export */   xK: () => (/* binding */ nt)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80861);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4506);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5262);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82541);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79441);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(25336);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26110);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80347);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19913);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32159);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70600);
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64159);
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(28364);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67488);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(72449);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(90514);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function k(t,n,{vertexSpace:r,spatialReference:e}){if("georeferenced"===r.type){const o=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,o,e))return!1;const{origin:i}=r;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.d)(t,o,i),!0}const o=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(e),i=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,i,o))return!1;const{origin:l}=r,a=lt;if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(e,l,a,o))return!1;const c=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(lt,a);return null!=c&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(t,i,c),!0)}function B(t,n,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=t,a=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isRelativeVertexSpace */ .Hq)(e)?o:null,s=X(t.spatialReference,r,at.SOURCE_AND_TARGET);if((0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .vertexSpaceEquals */ .yJ)(e,n)&&(!a||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .exactEquals */ .t2)(a.localMatrix,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK))&&Y(s)){const{position:t,normal:n,tangent:e}=i,o=r?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?e:e?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?H(t,t.vertexSpace,n.origin,r):P(t,t.vertexSpace,n.origin,r);case"georeferenced":return"local"===n.type?q(t,t.vertexSpace,n.origin,r):L(t,t.vertexSpace,n.origin,r)}}function L({vertexAttributes:t,transform:n,spatialReference:r},{origin:e},o,i){const l=X(r,i,at.SOURCE_AND_TARGET),a=e||!Y(l)?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(rt,n?.localMatrix??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK):null;a&&W(a,r,i,at.SOURCE_AND_TARGET);const{position:s,normal:u,tangent:f}=a?I(t,a):t,g=i?.allowBufferReuse,A=g?s:new Float64Array(s.length);let R=s;if(e&&(R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,e)),o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,t)}return{position:R!==t.position||g?R:R.slice(),normal:u!==t.normal||g?u:u?.slice(),tangent:f!==t.tangent||g?f:f?.slice()}}function V(t,n){return n?.useEllipsoid&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isEarth */ .B3)(t)?_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .WGS84ECEFSpatialReference */ .Y0:(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(t)}function P({spatialReference:t,vertexAttributes:n,transform:r},{origin:e},o,i){const l=V(t,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(t,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),t,l),null;r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),W(rt,t,i,at.SOURCE);const a=new Float64Array(n.position.length),s=J(n.position,rt,t,a,l);if(!s)return null;const c=K(s,t,a,l,n.normal,rt);if(n.normal&&!c)return null;const f=Q(s,t,a,l,n.tangent,rt);if(n.tangent&&!f)return null;if(o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(s,s,t)}return{position:s,normal:c,tangent:f}}function q({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},i,l){const c=V(n,l);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,i,rt,c))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,c),null;const u=1/X(n,l,at.TARGET);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(rt,rt,[u,u,u]);const f=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,rt),{position:m,normal:p,tangent:g}=z(t,e,r),A=new Float64Array(m.length),R=Z(m,n,f,A,c);if(!R)return null;const x=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__/* .normalFromMat4 */ .Ge)(ot,f),E=$(p,m,n,A,c,x,p!==t.normal?p:void 0);if(!E&&p)return null;const v=tt(g,m,n,A,c,x,g!==t.tangent?g:void 0);return!v&&g?null:{position:R,normal:E,tangent:v}}function z(t,n,r){if(!n)return t;if(!r){const{position:r,normal:e,tangent:o}=t;return{position:(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(new Float64Array(r.length),r,n),tangent:o,normal:e}}const e=I(t,r.localMatrix);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(e.position,e.position,n),e}function H({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},o,i){const l=V(n,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,l),null;if(r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,o,et,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),l,n),null;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,et);const a=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,et,rt);return W(a,n,i,at.SOURCE_AND_TARGET),I(t,a)}function I(t,n){const r=new Float64Array(t.position.length);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(r,t.position,n);const e=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return e&&t.normal&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(t.normal,e,n),o&&t.tangent&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(t.tangent,o,n),{position:r,normal:e,tangent:o}}function J(t,n,r,e,o){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(e,t,n);const i=new Float64Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectFromPCPF */ .$5)(e,o,i,r)?i:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),o,r),null)}function K(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalFromPCPF */ .si)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function Q(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentFromPCPF */ .Mv)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function W(t,n,r,e){const o=X(n,r,e);Y(o)||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(t,t,[o,o,o])}function X(t,n,r){const e=!!(r&at.SOURCE),o=!!(r&at.TARGET),i=n?.sourceUnit,l=n?.targetUnit;if(!i&&!l)return 1;let a=nt(i,t);e||!i||Y(a)||(M().warn("source unit conversion not supported"),a=1);let s=1/nt(l,t);return o||!l||Y(s)||(M().warn("target unit conversion not supported"),s=1),a*s}function Y(t){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualUlp */ .Io)(t,1)}function Z(t,n,r,e,o){const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectToPCPF */ .gr)(t,n,e,o);if(!i)return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,o),null;const l=new Float64Array(i.length);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(l,i,r),l}function $(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalToPCPF */ .X4)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function tt(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentToPCPF */ .xA)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i,4),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function nt(t,n){if(null==t)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getMetersPerCartesianUnitForSR */ .KX)(n);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .convertUnit */ .oU)(o,"meters",t)}const rt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),et=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),ot=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),it=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(),lt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)();var at;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(at||(at={}));


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

/***/ 74108:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ n),
/* harmony export */   f: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30214);
/* harmony import */ var _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77873);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(o,n,i=r){return new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({x:o[i.originX],y:o[i.originY],z:o[i.originZ],spatialReference:n})}function i(t,n=r){return new _geometry_support_MeshTransform_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({translation:[t[n.translationX],-t[n.translationZ],t[n.translationY]],rotationAxis:[t[n.rotationX],-t[n.rotationZ],t[n.rotationY]],rotationAngle:t[n.rotationDeg],scale:[t[n.scaleX],t[n.scaleZ],t[n.scaleY]]})}const r={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};


/***/ }),

/***/ 78621:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   assetMapFromAssetMapsJSON: () => (/* binding */ g),
/* harmony export */   extractMesh: () => (/* binding */ E),
/* harmony export */   meshFeatureSetFromJSON: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _Graphic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20857);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(80294);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8000);
/* harmony import */ var _geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84473);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28936);
/* harmony import */ var _layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(52360);
/* harmony import */ var _FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74704);
/* harmony import */ var _meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74108);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger("esri.rest.support.meshFeatureSet");function l(t,r,s){const o=s.features;s.features=[],delete s.geometryType;const a=_FeatureSet_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.fromJSON(s);if(a.geometryType="mesh",!s.assetMaps)return a;const u=g(r,s.assetMaps),i=t.sourceSpatialReference??_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.WGS84,c=s.globalIdFieldName,{outFields:m}=t,p=null!=m&&m.length>0?y(m.includes("*")?null:new Set(m)):()=>({});for(const n of o){const t=E(n,c,i,r,u);a.features.push(new _Graphic_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({geometry:t,attributes:p(n)}))}return a}function y(e){return({attributes:t})=>{if(!t)return{};if(!e)return t;for(const r in t)e.has(r)||delete t[r];return t}}function E(e,t,r,n,a){const u=e.attributes[t],i=a.get(u);if(null==i||!e.geometry)return null;const f=(0,_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_7__/* .extractMeshFeatureOrigin */ .V)(e.attributes,r,n.transformFieldRoles),p=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(e.geometry);p.spatialReference=r;const l=(0,_meshFeatureAttributes_js__WEBPACK_IMPORTED_MODULE_7__/* .extractMeshFeatureTransform */ .f)(e.attributes,n.transformFieldRoles),y=r.isGeographic?"local":"georeferenced",E=d(i);return E?_geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_3__["default"].createWithExternalSource(f,E,{extent:p,transform:l,vertexSpace:y,unitConversionDisabled:!0}):_geometry_Mesh_js__WEBPACK_IMPORTED_MODULE_3__["default"].createIncomplete(f,{extent:p,transform:l,vertexSpace:y})}var h;function g(e,t){const s=new Map;for(const o of t){const t=o.parentGlobalId;if(null==t)continue;const n=o.assetName,a=o.assetType,u=o.assetHash,f=o.assetURL,c=o.conversionStatus,m=o.seqNo,l=(0,_layers_support_infoFor3D_js__WEBPACK_IMPORTED_MODULE_8__/* .getFormatIdMimeType */ .Fm)(a,e.supportedFormats);if(!l){p().error("mesh-feature-set:unknown-format",`Service returned an asset of type ${a}, but it does not list it as a supported type`);continue}const y=(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getOrCreateMapValue */ .tE)(s,t,(()=>({files:new Map})));(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getOrCreateMapValue */ .tE)(y.files,n,(()=>({name:n,type:a,mimeType:l,status:S(c),parts:[]}))).parts[m]={hash:u,url:f}}return s}function d(e){const t=Array.from(e.files.values()),r=new Array;for(const s of t){if(s.status!==h.COMPLETED)return null;const e=new Array;for(const t of s.parts){if(!t)return null;e.push(new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_5__/* .ServiceAssetPart */ .Bq(t.url,t.hash))}r.push(new _geometry_support_meshUtils_External_js__WEBPACK_IMPORTED_MODULE_5__/* .ServiceAsset */ .Qp(s.name,s.mimeType,e))}return{type:"service",assets:r}}function S(e){switch(e){case"COMPLETED":case"SUBMITTED":return h.COMPLETED;case"INPROGRESS":return h.PENDING;default:return h.FAILED}}!function(e){e[e.FAILED=0]="FAILED",e[e.PENDING=1]="PENDING",e[e.COMPLETED=2]="COMPLETED"}(h||(h={}));


/***/ }),

/***/ 26421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O_: () => (/* binding */ i),
/* harmony export */   vA: () => (/* binding */ s)
/* harmony export */ });
/* unused harmony exports isTranslationMatrix, logWithBase, project, rayRay2D, setMatrixTranslation3, verify */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56560);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74772);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76982);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,r="Assertion"){if(!t){const t=new Error(r).stack;throw new o(`${r} at ${t}`)}}function c(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function i(t,r,n,e){let o,s=(n[0]-t[0])/r[0],c=(e[0]-t[0])/r[0];s>c&&(o=s,s=c,c=o);let i=(n[1]-t[1])/r[1],f=(e[1]-t[1])/r[1];if(i>f&&(o=i,i=f,f=o),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let a=(n[2]-t[2])/r[2],u=(e[2]-t[2])/r[2];return a>u&&(o=a,a=u,u=o),!(s>u||a>c)&&(u<c&&(c=u),!(c<0))}function f(r,n,e,o,s,c=t()){const i=(o[s]-e[s])*(n[0]-r[0])-(o[0]-e[0])*(n[s]-r[s]),f=(o[0]-e[0])*(r[s]-e[s])-(o[s]-e[s])*(r[0]-e[0]);if(0===i)return!1;const a=f/i;return c[0]=r[0]+a*(n[0]-r[0]),c[1]=r[s]+a*(n[s]-r[s]),!0}function a(t,n,o,c,i){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,r(e,e,n),i.length>2&&(i[2]=-e[2]),r(e,e,o),s(0!==e[3]),i[0]=e[0]/e[3],i[1]=e[1]/e[3],i[2]=e[2]/e[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function u(t,r){return Math.log(t)/Math.log(r)}function l(t,r,n,e){t[12]=r,t[13]=n,t[14]=e}function m(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


/***/ })

};
;