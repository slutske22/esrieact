"use strict";
exports.id = 52242;
exports.ids = [52242];
exports.modules = {

/***/ 21839:
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
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function e(t,e,f){r(t.typedBuffer,e.typedBuffer,f,t.typedBufferStride,e.typedBufferStride)}function r(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return t;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[4],s=r[5],d=r[6],c=r[8],p=r[9],h=r[10],y=r[12],B=r[13],g=r[14];let S=0,m=0;for(let M=0;M<o;M++){const r=e[S],o=e[S+1],M=e[S+2];t[m]=i*r+a*o+c*M+y,t[m+1]=u*r+s*o+p*M+B,t[m+2]=l*r+d*o+h*M+g,S+=n,m+=f}return t}function f(t,e,r){n(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function n(t,e,r,f=3,n=f){if(t.length/f!==Math.ceil(e.length/n))return;const o=t.length/f,i=r[0],u=r[1],l=r[2],a=r[3],s=r[4],d=r[5],c=r[6],p=r[7],h=r[8];let y=0,B=0;for(let g=0;g<o;g++){const r=e[y],o=e[y+1],g=e[y+2];t[B]=i*r+a*o+c*g,t[B+1]=u*r+s*o+p*g,t[B+2]=l*r+d*o+h*g,y+=n,B+=f}}function o(t,e,r){i(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function i(t,e,r,f=3,n=f){const o=Math.min(t.length/f,e.length/n);let i=0,u=0;for(let l=0;l<o;l++)t[u]=r*e[i],t[u+1]=r*e[i+1],t[u+2]=r*e[i+2],i+=n,u+=f;return t}function u(t,e,r,f){l(t.typedBuffer,e.typedBuffer,r,f,t.typedBufferStride,e.typedBufferStride)}function l(e,r,f,n,o=3,i=o){const u=Math.min(e.length/o,r.length/i);let l=0,a=0;const s=1/_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .colorGamma */ .Tf;for(let t=0;t<u;t++)e[a]=n*(f*r[l])**s,e[a+1]=n*(f*r[l+1])**s,e[a+2]=n*(f*r[l+2])**s,l+=i,a+=o}function a(t,e,r,f=3,n=f){const o=t.length/f;if(o!==Math.ceil(e.length/n))return t;let i=0,u=0;for(let l=0;l<o;l++)t[u]=e[i]+r[0],t[u+1]=e[i+1]+r[1],t[u+2]=e[i+2]+r[2],i+=n,u+=f;return t}function s(t,e){d(t.typedBuffer,e.typedBuffer,t.typedBufferStride,e.typedBufferStride)}function d(t,e,r=3,f=r){const n=Math.min(t.length/r,e.length/f);let o=0,i=0;for(let u=0;u<n;u++){const n=e[o],u=e[o+1],l=e[o+2],a=n*n+u*u+l*l;if(a>0){const e=1/Math.sqrt(a);t[i]=e*n,t[i+1]=e*u,t[i+2]=e*l}o+=f,i+=r}}function c(t,e,r){const f=Math.min(t.count,e.count),n=t.typedBuffer,o=t.typedBufferStride,i=e.typedBuffer,u=e.typedBufferStride;let l=0,a=0;for(let s=0;s<f;s++)n[a]=i[l]>>r,n[a+1]=i[l+1]>>r,n[a+2]=i[l+2]>>r,l+=u,a+=o}const p=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:l,linearToSRGBView:u,normalize:d,normalizeView:s,scale:i,scaleView:o,shiftRight:c,transformMat3:n,transformMat3View:f,transformMat4:r,transformMat4View:e,translate:a},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 12364:
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

// EXTERNAL MODULE: ../node_modules/@arcgis/core/colorUtils.js
var colorUtils = __webpack_require__(31415);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
;// ../node_modules/@arcgis/core/geometry/support/buffer/math/common.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=()=>Logger/* default */.A.getLogger("esri.views.3d.support.buffer.math");

;// ../node_modules/@arcgis/core/chunks/vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function r(t,e,r){if(t.count!==e.count)return;const f=t.count,n=r[0],o=r[1],u=r[2],i=r[3],s=r[4],c=r[5],d=r[6],a=r[7],l=r[8],p=r[9],y=r[10],B=r[11],m=r[12],h=r[13],S=r[14],g=r[15],M=t.typedBuffer,b=t.typedBufferStride,j=e.typedBuffer,v=e.typedBufferStride;for(let w=0;w<f;w++){const t=w*b,e=w*v,r=j[e],f=j[e+1],V=j[e+2],_=j[e+3];M[t]=n*r+s*f+l*V+m*_,M[t+1]=o*r+c*f+p*V+h*_,M[t+2]=u*r+d*f+y*V+S*_,M[t+3]=i*r+a*f+B*V+g*_}}function f(t,r,f,n=4,o=n){if(t.length/n!==r.length/o)return void e().error("source and destination buffers need to have the same number of elements");const u=t.length/n,i=f[0],s=f[1],c=f[2],d=f[3],a=f[4],l=f[5],p=f[6],y=f[7],B=f[8],m=f[9],h=f[10],S=f[11],g=f[12],M=f[13],b=f[14],j=f[15];let v=0,w=0;for(let e=0;e<u;e++){const e=r[v],f=r[v+1],u=r[v+2],V=r[v+3];t[w]=i*e+a*f+B*u+g*V,t[w+1]=s*e+l*f+m*u+M*V,t[w+2]=c*e+p*f+h*u+b*V,t[w+3]=d*e+y*f+S*u+j*V,v+=o,w+=n}}function n(t,e,r){o(t.typedBuffer,e.typedBuffer,r,t.typedBufferStride,e.typedBufferStride)}function o(t,e,r,f=4,n=f){if(t.length/f!==e.length/n)return;const o=t.length/f,u=r[0],i=r[1],s=r[2],c=r[3],d=r[4],a=r[5],l=r[6],p=r[7],y=r[8];let B=0,m=0;for(let h=0;h<o;h++){const r=e[B],o=e[B+1],h=e[B+2],S=e[B+3];t[m]=u*r+c*o+l*h,t[m+1]=i*r+d*o+p*h,t[m+2]=s*r+a*o+y*h,t[m+3]=S,B+=n,m+=f}}function u(t,e){const r=Math.min(t.count,e.count),f=t.typedBuffer,n=t.typedBufferStride,o=e.typedBuffer,u=e.typedBufferStride;for(let i=0;i<r;i++){const t=i*n,e=i*u,r=o[e],s=o[e+1],c=o[e+2],d=r*r+s*s+c*c;if(d>0){const e=1/Math.sqrt(d);f[t]=e*r,f[t+1]=e*s,f[t+2]=e*c}}}function i(t,e,r){s(t.typedBuffer,e,r,t.typedBufferStride)}function s(t,e,r,f=4){const n=Math.min(t.length/f,e.count),o=e.typedBuffer,u=e.typedBufferStride;let i=0,s=0;for(let c=0;c<n;c++)t[s]=r*o[i],t[s+1]=r*o[i+1],t[s+2]=r*o[i+2],t[s+3]=r*o[i+3],i+=u,s+=f}function c(t,e,r,f){d(t.typedBuffer,e,r,f,t.typedBufferStride)}function d(e,r,f,n,o=4){const u=Math.min(e.length/o,r.count),i=r.typedBuffer,s=r.typedBufferStride;let c=0,d=0;const a=1/colorUtils/* colorGamma */.Tf;for(let t=0;t<u;t++)e[d]=n*(f*i[c])**a,e[d+1]=n*(f*i[c+1])**a,e[d+2]=n*(f*i[c+2])**a,e[d+3]=n*f*i[c+3],c+=s,d+=o}const a=Object.freeze(Object.defineProperty({__proto__:null,linearToSRGB:d,linearToSRGBView:c,normalize:u,scale:s,scaleView:i,transformMat3:o,transformMat3View:n,transformMat4:f,transformMat4View:r},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 4486:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ E),
/* harmony export */   w: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73345);
/* harmony import */ var _has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63678);
/* harmony import */ var _chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45973);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(t=9,i){this._compareMinX=u,this._compareMinY=d,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),Y.prune(),B.prune(),w.prune(),j.prune()}all(t){r(this._data,t)}search(t,i){let n=this._data;const e=this._toBBox;if(M(t,n))for(Y.clear();n;){for(let h=0,s=n.children.length;h<s;h++){const s=n.children[h],a=n.leaf?e(s):s;M(t,a)&&(n.leaf?i(s):g(t,a)?r(s,i):Y.push(s))}n=Y.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!M(t,i))return!1;for(Y.clear();i;){for(let e=0,h=i.children.length;e<h;e++){const h=i.children[e],s=i.leaf?n(h):h;if(M(t,s)){if(i.leaf||g(t,s))return!0;Y.push(h)}}i=Y.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const t=this._data;this._data=i,i=t}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new S([]),this}remove(i){if(!i)return this;let e,h=this._data,s=null,a=0,r=!1;const o=this._toBBox(i);for(w.clear(),j.clear();h||w.length>0;){if(h||(h=w.pop(),s=w.data[w.length-1],a=j.pop()??0,r=!0),h.leaf&&(e=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(h.children,(0,_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toConst */ .zI)(i),h.children.length,h.indexHint),-1!==e))return h.children.splice(e,1),w.push(h),this._condense(w),this;r||h.leaf||!g(h,o)?s?(a++,h=s.children[a],r=!1):h=null:(w.push(h),j.push(a),a=0,s=h,h=h.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,e){const h=n-i+1;let s=this._maxEntries;if(h<=s){const e=new S(t.slice(i,n+1));return l(e,this._toBBox),e}e||(e=Math.ceil(Math.log(h)/Math.log(s)),s=Math.ceil(h/s**(e-1)));const a=new y([]);a.height=e;const r=Math.ceil(h/s),o=r*Math.ceil(Math.sqrt(s));X(t,i,n,o,this._compareMinX);for(let l=i;l<=n;l+=o){const i=Math.min(l+o-1,n);X(t,l,i,r,this._compareMinY);for(let n=l;n<=i;n+=r){const h=Math.min(n+r-1,i);a.children.push(this._build(t,n,h,e-1))}}return l(a,this._toBBox),a}_insert(t,i,n){const e=this._toBBox,h=n?t:e(t);w.clear();const s=a(h,this._data,i,w);for(s.children.push(t),m(s,h);i>=0&&w.data[i].children.length>this._maxEntries;)this._split(w,i),i--;o(h,w,i)}_split(t,i){const n=t.data[i],e=n.children.length,h=this._minEntries;this._chooseSplitAxis(n,h,e);const s=this._chooseSplitIndex(n,h,e);if(!s)return;const a=n.children.splice(s,n.children.length-s),r=n.leaf?new S(a):new y(a);r.height=n.height,l(n,this._toBBox),l(r,this._toBBox),i?t.data[i-1].children.push(r):this._splitRoot(n,r)}_splitRoot(t,i){this._data=new y([t,i]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let e,h,s;e=h=1/0;for(let a=i;a<=n-i;a++){const i=c(t,0,a,this._toBBox),r=c(t,a,n,this._toBBox),o=p(i,r),l=f(i)+f(r);o<e?(e=o,s=a,h=l<h?l:h):o===e&&l<h&&(h=l,s=a)}return s}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:u,h=t.leaf?this._compareMinY:d;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,h)&&t.children.sort(e)}_allDistMargin(t,i,n,e){t.children.sort(e);const h=this._toBBox,s=c(t,0,i,h),a=c(t,n-i,n,h);let r=x(s)+x(a);for(let o=i;o<n-i;o++){const i=t.children[o];m(s,t.leaf?h(i):i),r+=x(s)}for(let o=n-i-1;o>=i;o--){const i=t.children[o];m(a,t.leaf?h(i):i),r+=x(a)}return r}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const h=i.data[n-1],s=h.children;s.splice((0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .indexOf */ .qh)(s,e,s.length,h.indexHint),1)}else this.clear();else l(e,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,h=1/0;for(let s=0,a=i.children.length;s<a;s++){const a=i.children[s],r=f(a),o=_(t,a)-r;o<h?(h=o,e=r<e?r:e,n=a):o===h&&r<e&&(e=r,n=a)}i=n||i.children[0]}return i}function r(t,i){let e=t;for(B.clear();e;){if(!0===e.leaf)for(const t of e.children)i((0,_compilerUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toConst */ .zI)(t));else B.pushArray(e.children);e=B.pop()??null}}function o(t,i,n){for(let e=n;e>=0;e--)m(i.data[e],t)}function l(t,i){c(t,0,t.children.length,i,t)}function c(t,i,n,e,h){h||(h=new S([])),h.minX=1/0,h.minY=1/0,h.maxX=-1/0,h.maxY=-1/0;for(let s,a=i;a<n;a++)s=t.children[a],m(h,t.leaf?e(s):s);return h}function m(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY)}function u(t,i){return t.minX-i.minX}function d(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function x(t){return t.maxX-t.minX+(t.maxY-t.minY)}function _(t,i){return(Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function p(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),h=Math.min(t.maxX,i.maxX),s=Math.min(t.maxY,i.maxY);return Math.max(0,h-n)*Math.max(0,s-e)}function g(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function M(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function X(t,i,n,e,s){const a=[i,n];for(;a.length;){const i=a.pop(),n=a.pop();if(i-n<=e)continue;const r=n+Math.ceil((i-n)/e/2)*e;(0,_chunks_quickselect_js__WEBPACK_IMPORTED_MODULE_4__.q)(t,r,n,i,s),a.push(n,r,r,i)}}const Y=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,B=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,w=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,j=new _PooledArray_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({deallocator:void 0});class E{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class b extends E{constructor(){super(...arguments),this.height=1,this.indexHint=new _arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .PositionHint */ .vW}}class S extends b{constructor(t){super(),this.children=t,this.leaf=!0}}class y extends b{constructor(t){super(),this.children=t,this.leaf=!1}}


/***/ }),

/***/ 97557:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var c;let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){static{c=this}constructor(e){super(e),this.type="georeferenced",this.origin=null}static{this.absolute=new c}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({georeferenced:"georeferenced"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!1,json:{write:!0}})],i.prototype,"origin",void 0),i=c=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],i);


/***/ }),

/***/ 99218:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24793);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(58359);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.type="local",this.origin=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_9__/* .create */ .vt)()}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_7__/* .enumeration */ .e)({local:"local"},{readOnly:!0})],i.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],i.prototype,"origin",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.geometry.support.MeshLocalVertexSpace")],i);


/***/ }),

/***/ 57813:
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

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/float16.js
var float16 = __webpack_require__(11449);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{static{this.ElementCount=9}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=9;const i=this.TypedArrayConstructor;void 0===f&&(f=9*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<9;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;for(let u=0;u<9;++u)f[i++]=s[d++]}get buffer(){return this.typedBuffer.buffer}}

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Mat4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Mat4_t{static{this.ElementCount=16}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=16;const i=this.TypedArrayConstructor;void 0===f&&(f=16*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)e[f]=this.typedBuffer[r++];return e}setMat(t,e){let r=t*this.typedBufferStride;for(let f=0;f<16;f++)this.typedBuffer[r++]=e[f]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}copyFrom(t,e,r){this.copyFromTypedBuffer(t,e.typedBuffer,r*e.typedBufferStride)}copyFromTypedBuffer(t,e,r){const f=this.typedBuffer;let s=t*this.typedBufferStride;for(let i=0;i<16;++i)f[s++]=e[r++]}get buffer(){return this.typedBuffer.buffer}}

;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Scalar.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Scalar_t{static{this.ElementCount=1}constructor(t,e,r=0,s,i){this.TypedArrayConstructor=t,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===s&&(s=f.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==i?new f(e,u):new f(e,u,(i-r)/f.BYTES_PER_ELEMENT),this.stride=s,this.typedBufferStride=s/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,e,r=this.count-e){const s=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,s,this.stride,s+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,e){this.typedBuffer[t*this.typedBufferStride]=e}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/vec2.js
var vec2 = __webpack_require__(60704);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec2.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e{static{this.ElementCount=2}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=2;const i=this.TypedArrayConstructor;void 0===f&&(f=2*i.BYTES_PER_ELEMENT);const d=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,d):new i(e,d,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec2/* set */.hZ)(r,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t]=e[1]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t]=r}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,d=r*e.typedBufferStride;f[i++]=s[d++],f[i]=s[d]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec3.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec3_e{static{this.ElementCount=3}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.elementCount=3;const i=this.TypedArrayConstructor;void 0===f&&(f=3*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec32.i)(r,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t]=e[2]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t]=f}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec42.js
var vec42 = __webpack_require__(2662);
;// ../node_modules/@arcgis/core/geometry/support/buffer/internals/Vec4.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class Vec4_e{static{this.ElementCount=4}constructor(t,e,r=0,f,s){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const i=this.TypedArrayConstructor;void 0===f&&(f=4*i.BYTES_PER_ELEMENT);const u=0===e.byteLength?0:r;this.typedBuffer=null==s?new i(e,u):new i(e,u,(s-r)/i.BYTES_PER_ELEMENT),this.typedBufferStride=f/i.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,e,r=this.count-e){const f=this.typedBuffer.byteOffset+e*this.stride;return new t(this.buffer,f,this.stride,f+r*this.stride)}getVec(e,r){return e*=this.typedBufferStride,(0,vec42.s)(r,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(t,e){t*=this.typedBufferStride,this.typedBuffer[t++]=e[0],this.typedBuffer[t++]=e[1],this.typedBuffer[t++]=e[2],this.typedBuffer[t]=e[3]}get(t,e){return this.typedBuffer[t*this.typedBufferStride+e]}set(t,e,r){this.typedBuffer[t*this.typedBufferStride+e]=r}setValues(t,e,r,f,s){t*=this.typedBufferStride,this.typedBuffer[t++]=e,this.typedBuffer[t++]=r,this.typedBuffer[t++]=f,this.typedBuffer[t]=s}copyFrom(t,e,r){const f=this.typedBuffer,s=e.typedBuffer;let i=t*this.typedBufferStride,u=r*e.typedBufferStride;f[i++]=s[u++],f[i++]=s[u++],f[i++]=s[u++],f[i]=s[u]}get buffer(){return this.typedBuffer.buffer}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/webgl-engine/lib/Util.js
var Util = __webpack_require__(58947);
;// ../node_modules/@arcgis/core/geometry/support/buffer/BufferView.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class a extends Scalar_t{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}static{this.ElementType="f16"}}class f extends Scalar_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}static{this.ElementType="f32"}}class p extends e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(p,e,t)}static{this.ElementType="f16"}}class y extends e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(y,e,t)}static{this.ElementType="f32"}}class h extends Vec3_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(h,e,t)}static{this.ElementType="f16"}}class o extends Vec3_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(o,e,t)}static fromTypedArray(e,t){return new o(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f32"}}class m extends Vec4_e{constructor(s,r=0,i,n){(0,Util/* assert */.vA)(float16/* hasNativeFloat16Array */.SX),super((0,float16/* getFloat16ArrayConstructor */.pX)(),s,r,i,n),this.elementType="f16"}slice(e,t){return this.sliceBuffer(m,e,t)}static{this.ElementType="f16"}}class T extends Vec4_e{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static{this.ElementType="f32"}}class d extends t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static{this.ElementType="f32"}}class x extends t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(x,e,t)}static{this.ElementType="f64"}}class E extends Mat4_t{constructor(e,t=0,s,r){super(Float32Array,e,t,s,r),this.elementType="f32"}slice(e,t){return this.sliceBuffer(E,e,t)}static{this.ElementType="f32"}}class A extends Mat4_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static{this.ElementType="f64"}}class B extends Scalar_t{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(B,e,t)}static{this.ElementType="f64"}}class b extends e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static{this.ElementType="f64"}}class U extends Vec3_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="f64"}}class F extends Vec4_e{constructor(e,t=0,s,r){super(Float64Array,e,t,s,r),this.elementType="f64"}slice(e,t){return this.sliceBuffer(F,e,t)}static{this.ElementType="f64"}}class I extends Scalar_t{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(I,e,t)}static{this.ElementType="u8"}}class j extends e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(j,e,t)}static{this.ElementType="u8"}}class O extends Vec3_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}static{this.ElementType="u8"}}class g extends Vec4_e{constructor(e,t=0,s,r){super(Uint8Array,e,t,s,r),this.elementType="u8"}slice(e,t){return this.sliceBuffer(g,e,t)}static{this.ElementType="u8"}}class w extends Scalar_t{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static{this.ElementType="u16"}}class L extends e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(L,e,t)}static{this.ElementType="u16"}}class V extends Vec3_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(V,e,t)}static{this.ElementType="u16"}}class M extends Vec4_e{constructor(e,t=0,s,r){super(Uint16Array,e,t,s,r),this.elementType="u16"}slice(e,t){return this.sliceBuffer(M,e,t)}static{this.ElementType="u16"}}class v extends Scalar_t{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static{this.ElementType="u32"}}class S extends e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(S,e,t)}static{this.ElementType="u32"}}class k extends Vec3_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(k,e,t)}static{this.ElementType="u32"}}class q extends Vec4_e{constructor(e,t=0,s,r){super(Uint32Array,e,t,s,r),this.elementType="u32"}slice(e,t){return this.sliceBuffer(q,e,t)}static{this.ElementType="u32"}}class z extends Scalar_t{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static{this.ElementType="i8"}}class C extends e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(C,e,t)}static{this.ElementType="i8"}}class D extends Vec3_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(D,e,t)}static{this.ElementType="i8"}}class G extends Vec4_e{constructor(e,t=0,s,r){super(Int8Array,e,t,s,r),this.elementType="i8"}slice(e,t){return this.sliceBuffer(G,e,t)}static{this.ElementType="i8"}}class H extends Scalar_t{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(H,e,t)}static{this.ElementType="i16"}}class J extends e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(J,e,t)}static{this.ElementType="i16"}}class K extends Vec3_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(K,e,t)}static{this.ElementType="i16"}}class N extends Vec4_e{constructor(e,t=0,s,r){super(Int16Array,e,t,s,r),this.elementType="i16"}slice(e,t){return this.sliceBuffer(N,e,t)}static{this.ElementType="i16"}}class P extends Scalar_t{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(P,e,t)}static{this.ElementType="i32"}}class Q extends e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Q,e,t)}static{this.ElementType="i32"}}class R extends Vec3_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(R,e,t)}static{this.ElementType="i32"}}class W extends Vec4_e{constructor(e,t=0,s,r){super(Int32Array,e,t,s,r),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static{this.ElementType="i32"}}


/***/ }),

/***/ 11449:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bg: () => (/* binding */ t),
/* harmony export */   SX: () => (/* binding */ r),
/* harmony export */   pX: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony exports disableNativeF16Array, resetNativeF16Array */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=globalThis.Float16Array;function t(...t){return new(n??Float32Array)(...t)}function l(){return n}let r=!!n;function o(){n=null,r=!1}function a(){n=globalThis.Float16Array,r=!!n}


/***/ }),

/***/ 52242:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4486);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97557);
/* harmony import */ var _vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5025);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n{async createIndex(t,r){const n=new Array;if(!t.vertexAttributes?.position)return new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__/* .PooledRBush */ .w;const o=a(t),s=null!=r?await r.invoke("createIndexThread",o,{transferList:n}):this.createIndexThread(o).result;return i().fromJSON(s)}createIndexThread(e){const t=i();if(!e)return{result:t.toJSON()};const r=new Float64Array(e.position);return e.components?s(t,r,e.components.map((e=>new Uint32Array(e)))):o(t,r)}}function o(e,t){const r=new Array(t.length/9);let n=0;for(let o=0;o<t.length;o+=9)r[n++]=c(t,o,o+3,o+6);return e.load(r),{result:e.toJSON()}}function s(e,t,r){let n=0;for(const a of r)n+=a.length/3;const o=new Array(n);let s=0;for(const a of r)for(let e=0;e<a.length;e+=3)o[s++]=c(t,3*a[e],3*a[e+1],3*a[e+2]);return e.load(o),{result:e.toJSON()}}function a(e){const{vertexAttributes:{position:n},vertexSpace:o,spatialReference:s,transform:a}=e,i=(0,_vertexSpaceConversion_js__WEBPACK_IMPORTED_MODULE_3__/* .convertVertexSpace */ .UR)({vertexAttributes:{position:n},vertexSpace:o,spatialReference:s,transform:a},_MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.absolute,{allowBufferReuse:!0})?.position;return i?!e.components||e.components.some((e=>!e.faces))?{position:i.buffer}:{position:i.buffer,components:e.components.map((e=>e.faces))}:null}function i(){return new _core_libs_rbush_PooledRBush_js__WEBPACK_IMPORTED_MODULE_1__/* .PooledRBush */ .w(9,(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("esri-csp-restrictions")?e=>e:[".minX",".minY",".maxX",".maxY"])}function c(e,t,r,n){return{minX:Math.min(e[t],e[r],e[n]),maxX:Math.max(e[t],e[r],e[n]),minY:Math.min(e[t+1],e[r+1],e[n+1]),maxY:Math.max(e[t+1],e[r+1],e[n+1]),p0:[e[t],e[t+1],e[t+2]],p1:[e[r],e[r+1],e[r+2]],p2:[e[n],e[n+1],e[n+2]]}}


/***/ }),

/***/ 72188:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $5: () => (/* binding */ h),
/* harmony export */   CN: () => (/* binding */ F),
/* harmony export */   GN: () => (/* binding */ L),
/* harmony export */   JP: () => (/* binding */ O),
/* harmony export */   KM: () => (/* binding */ C),
/* harmony export */   Mv: () => (/* binding */ G),
/* harmony export */   OD: () => (/* binding */ V),
/* harmony export */   X4: () => (/* binding */ E),
/* harmony export */   gZ: () => (/* binding */ b),
/* harmony export */   gr: () => (/* binding */ g),
/* harmony export */   qs: () => (/* binding */ _),
/* harmony export */   si: () => (/* binding */ R),
/* harmony export */   xA: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92504);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58359);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(84119);
/* harmony import */ var _Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(99817);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87926);
/* harmony import */ var _webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96082);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(57813);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21839);
/* harmony import */ var _chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(12364);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const O="Projection may be possible after calling projection.load().";function F(r,t,o,e){r.error(`Failed to project from (wkid:${t.wkid}) to (wkid:${o.wkid}).${e?" ":""}${e}`)}function E(r,t,o,e,n,i){return B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function R(r,t,o,e,n,i){return B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r),V.NORMAL,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i))?i:null}function g(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function h(r,t,o,e){return (0,_projection_projectBuffer_js__WEBPACK_IMPORTED_MODULE_8__.projectBuffer)(r,t,0,o,e,0)?o:null}function _(t,e,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(q,n),(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.b)(e,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(e,e),e}function C(t,o,n){return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(q,n),(0,_chunks_vec4_js__WEBPACK_IMPORTED_MODULE_14__.t)(o,t,q),(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hasScaling */ .or)(q)&&(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_13__.n)(o,o,4),o}function b(r,o,e,n){const i=o===V.NORMAL;return k(r,o,e,((r,o)=>{const e=Math.cos((0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .deg2rad */ .kU)(r));o[0]=i?e:1/e,o[1]=1}),n)}function L(r,t,o,e){const n=t===V.NORMAL;return k(r,t,o,((r,t)=>{const o=Math.cosh(-r/_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_9__/* .earth */ .$O.radius);t[0]=1,t[1]=n?o:1/o}),e)}function k(r,t,o,e,n){const i=t===V.NORMAL?3:4,f=[0,0];for(let c=0,a=1;c<r.length;c+=i,a+=3){e(o[a],f);const t=r[c]*f[0],s=r[c+1]*f[1],m=r[c+2],u=1/Math.sqrt(t*t+s*s+m*m);n[c]=t*u,n[c+1]=s*u,n[c+2]=m*u,4===i&&(n[c+3]=r[c+3])}return n}function w(r,t,o,e,n,i){if(!B(x.TO_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,4*Float32Array.BYTES_PER_ELEMENT),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,4*Float32Array.BYTES_PER_ELEMENT)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}function G(r,t,o,e,n,i){if(!B(x.FROM_PCPF,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(r,16),V.TANGENT,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(t),o,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f64 */ .Xm.fromTypedArray(e),n,_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_12__/* .BufferViewVec3f */ .xs.fromTypedArray(i,16)))return null;for(let f=3;f<r.length;f+=4)i[f]=r[f];return i}var V,x;function v(r,t,n,f,c){switch((0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_7__/* .computeTranslationToOriginAndRotation */ .l)(f,n,Y,f),r===x.FROM_PCPF&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_3__/* .invert */ .B8)(Y,Y),t){case V.NORMAL:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .normalFromMat4 */ .Ge)(c,Y);case V.TANGENT:return (0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_1__/* .fromMat4 */ .z0)(c,Y)}}function B(r,t,o,e,n,i,f,s){if(!t)return;const m=e.count;if($(n))for(let a=0;a<m;a++)i.getVec(a,S),t.getVec(a,U),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,v(r,o,S,f,q)),s.setVec(a,U);else for(let u=0;u<m;u++){i.getVec(u,S),t.getVec(u,U);const n=(0,_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .y2lat */ .jg)(e.get(u,1));let m=Math.cos(n);o===V.TANGENT!=(r===x.TO_PCPF)&&(m=1/m),v(r,o,S,f,q),r===x.TO_PCPF?(q[0]*=m,q[1]*=m,q[2]*=m,q[3]*=m,q[4]*=m,q[5]*=m):(q[0]*=m,q[3]*=m,q[6]*=m,q[1]*=m,q[4]*=m,q[7]*=m),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.o)(U,U,q),(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_5__.n)(U,U),s.setVec(u,U)}return s}function $(r){return r.isWGS84||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isCGCS2000 */ .x1)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMars */ .q8)(r)||(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .isMoon */ .KQ)(r)}!function(r){r[r.NORMAL=0]="NORMAL",r[r.TANGENT=1]="TANGENT"}(V||(V={})),function(r){r[r.TO_PCPF=0]="TO_PCPF",r[r.FROM_PCPF=1]="FROM_PCPF"}(x||(x={}));const S=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),U=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),Y=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),q=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();


/***/ }),

/***/ 5025:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UR: () => (/* binding */ B),
/* harmony export */   p5: () => (/* binding */ k),
/* harmony export */   xK: () => (/* binding */ nt)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92976);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25423);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(78607);
/* harmony import */ var _core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21742);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86128);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(24121);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58359);
/* harmony import */ var _spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(32937);
/* harmony import */ var _projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59538);
/* harmony import */ var _projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(42609);
/* harmony import */ var _meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1114);
/* harmony import */ var _spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87926);
/* harmony import */ var _chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21839);
/* harmony import */ var _projection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(72188);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const M=()=>_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.geometry.support.meshUtils.vertexSpaceConversion");function k(t,n,{vertexSpace:r,spatialReference:e}){if("georeferenced"===r.type){const o=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,o,e))return!1;const{origin:i}=r;return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.d)(t,o,i),!0}const o=(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(e),i=t;if(!(0,_projection_projectPointToVector_js__WEBPACK_IMPORTED_MODULE_11__/* .projectPointToVector */ .g)(n,i,o))return!1;const{origin:l}=r,a=lt;if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(e,l,a,o))return!1;const c=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(lt,a);return null!=c&&((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.t)(t,i,c),!0)}function B(t,n,r){const{vertexSpace:e,transform:o,vertexAttributes:i}=t,a=(0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .isRelativeVertexSpace */ .Hq)(e)?o:null,s=X(t.spatialReference,r,at.SOURCE_AND_TARGET);if((0,_meshVertexSpaceUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .vertexSpaceEquals */ .yJ)(e,n)&&(!a||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .exactEquals */ .t2)(a.localMatrix,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK))&&Y(s)){const{position:t,normal:n,tangent:e}=i,o=r?.allowBufferReuse;return{position:o?t:t.slice(),normal:o?n:n?.slice(),tangent:o?e:e?.slice()}}switch(t.vertexSpace.type){case"local":return"local"===n.type?H(t,t.vertexSpace,n.origin,r):P(t,t.vertexSpace,n.origin,r);case"georeferenced":return"local"===n.type?q(t,t.vertexSpace,n.origin,r):L(t,t.vertexSpace,n.origin,r)}}function L({vertexAttributes:t,transform:n,spatialReference:r},{origin:e},o,i){const l=X(r,i,at.SOURCE_AND_TARGET),a=e||!Y(l)?(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .copy */ .C)(rt,n?.localMatrix??_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .IDENTITY */ .zK):null;a&&W(a,r,i,at.SOURCE_AND_TARGET);const{position:s,normal:u,tangent:f}=a?I(t,a):t,g=i?.allowBufferReuse,A=g?s:new Float64Array(s.length);let R=s;if(e&&(R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,e)),o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);R=(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(A,R,t)}return{position:R!==t.position||g?R:R.slice(),normal:u!==t.normal||g?u:u?.slice(),tangent:f!==t.tangent||g?f:f?.slice()}}function V(t,n){return n?.useEllipsoid&&(0,_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .isEarth */ .B3)(t)?_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .WGS84ECEFSpatialReference */ .Y0:(0,_spatialReferenceEllipsoidUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .getSphericalPCPF */ .lO)(t)}function P({spatialReference:t,vertexAttributes:n,transform:r},{origin:e},o,i){const l=V(t,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(t,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),t,l),null;r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),W(rt,t,i,at.SOURCE);const a=new Float64Array(n.position.length),s=J(n.position,rt,t,a,l);if(!s)return null;const c=K(s,t,a,l,n.normal,rt);if(n.normal&&!c)return null;const f=Q(s,t,a,l,n.tangent,rt);if(n.tangent&&!f)return null;if(o){const t=(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_7__.u)(it,o);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(s,s,t)}return{position:s,normal:c,tangent:f}}function q({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},i,l){const c=V(n,l);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,i,rt,c))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,c),null;const u=1/X(n,l,at.TARGET);(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(rt,rt,[u,u,u]);const f=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,rt),{position:m,normal:p,tangent:g}=z(t,e,r),A=new Float64Array(m.length),R=Z(m,n,f,A,c);if(!R)return null;const x=(0,_core_libs_gl_matrix_2_math_mat3_js__WEBPACK_IMPORTED_MODULE_3__/* .normalFromMat4 */ .Ge)(ot,f),E=$(p,m,n,A,c,x,p!==t.normal?p:void 0);if(!E&&p)return null;const v=tt(g,m,n,A,c,x,g!==t.tangent?g:void 0);return!v&&g?null:{position:R,normal:E,tangent:v}}function z(t,n,r){if(!n)return t;if(!r){const{position:r,normal:e,tangent:o}=t;return{position:(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(new Float64Array(r.length),r,n),tangent:o,normal:e}}const e=I(t,r.localMatrix);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.a)(e.position,e.position,n),e}function H({vertexAttributes:t,spatialReference:n,transform:r},{origin:e},o,i){const l=V(n,i);if(!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,e,rt,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,l),null;if(r&&(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,rt,r.localMatrix),!(0,_projection_computeTranslationToOriginAndRotation_js__WEBPACK_IMPORTED_MODULE_10__/* .computeTranslationToOriginAndRotation */ .l)(n,o,et,l))return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),l,n),null;(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .invert */ .B8)(et,et);const a=(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .multiply */ .lw)(rt,et,rt);return W(a,n,i,at.SOURCE_AND_TARGET),I(t,a)}function I(t,n){const r=new Float64Array(t.position.length);(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(r,t.position,n);const e=t.normal?new Float32Array(t.normal.length):null,o=t.tangent?new Float32Array(t.tangent.length):null;return e&&t.normal&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(t.normal,e,n),o&&t.tangent&&(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(t.tangent,o,n),{position:r,normal:e,tangent:o}}function J(t,n,r,e,o){(0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(e,t,n);const i=new Float64Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectFromPCPF */ .$5)(e,o,i,r)?i:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),o,r),null)}function K(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformNormal */ .qs)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalFromPCPF */ .si)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function Q(t,n,r,e,o,i){if(null==o)return null;const l=new Float32Array(o.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .transformTangent */ .KM)(o,l,i),(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentFromPCPF */ .Mv)(l,t,n,r,e,l)?l:((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),e,n),null)}function W(t,n,r,e){const o=X(n,r,e);Y(o)||(0,_core_libs_gl_matrix_2_math_mat4_js__WEBPACK_IMPORTED_MODULE_5__/* .scale */ .hs)(t,t,[o,o,o])}function X(t,n,r){const e=!!(r&at.SOURCE),o=!!(r&at.TARGET),i=n?.sourceUnit,l=n?.targetUnit;if(!i&&!l)return 1;let a=nt(i,t);e||!i||Y(a)||(M().warn("source unit conversion not supported"),a=1);let s=1/nt(l,t);return o||!l||Y(s)||(M().warn("target unit conversion not supported"),s=1),a*s}function Y(t){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .floatEqualUlp */ .Io)(t,1)}function Z(t,n,r,e,o){const i=(0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectToPCPF */ .gr)(t,n,e,o);if(!i)return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),n,o),null;const l=new Float64Array(i.length);return (0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.t)(l,i,r),l}function $(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectNormalToPCPF */ .X4)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function tt(t,n,r,e,o,i,l){if(null==t)return null;const a=l??new Float32Array(t.length);return (0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .projectTangentToPCPF */ .xA)(t,n,r,e,o,a)?((0,_chunks_vec3_js__WEBPACK_IMPORTED_MODULE_14__.b)(a,a,i,4),a):((0,_projection_js__WEBPACK_IMPORTED_MODULE_15__/* .logProjectionError */ .CN)(M(),r,o),null)}function nt(t,n){if(null==t)return 1;const o=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getMetersPerCartesianUnitForSR */ .KX)(n);return 1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .convertUnit */ .oU)(o,"meters",t)}const rt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),et=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)(),ot=(0,_core_libs_gl_matrix_2_factories_mat3f64_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(),it=(0,_core_libs_gl_matrix_2_factories_vec3f64_js__WEBPACK_IMPORTED_MODULE_8__/* .create */ .vt)(),lt=(0,_core_libs_gl_matrix_2_factories_mat4f64_js__WEBPACK_IMPORTED_MODULE_6__/* .create */ .vt)();var at;!function(t){t[t.NONE=0]="NONE",t[t.SOURCE=1]="SOURCE",t[t.TARGET=2]="TARGET",t[t.SOURCE_AND_TARGET=3]="SOURCE_AND_TARGET"}(at||(at={}));


/***/ }),

/***/ 1114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CK: () => (/* binding */ c),
/* harmony export */   E9: () => (/* binding */ o),
/* harmony export */   Hq: () => (/* binding */ t),
/* harmony export */   MW: () => (/* binding */ u),
/* harmony export */   TE: () => (/* binding */ l),
/* harmony export */   yJ: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97066);
/* harmony import */ var _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97557);
/* harmony import */ var _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99218);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function o(e){return null==e.origin}function t(e){return null!=e.origin}function c(e){return t(e.vertexSpace)}function u(e,r){if(!t(e))return null;const[i,o,c]=e.origin;return new _Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:i,y:o,z:c,spatialReference:r})}function l(e,n){const{x:o,y:t,z:c,spatialReference:u}=e,l=[o,t,c??0];return"local"===(n?.vertexSpace??f(u))?new _MeshLocalVertexSpace_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A({origin:l}):new _MeshGeoreferencedVertexSpace_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({origin:l})}function f(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"}function a(n,r){return n.type===r.type&&(n.origin===r.origin||null!=n.origin&&null!=r.origin&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(n.origin,r.origin))}


/***/ }),

/***/ 58947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ f),
/* harmony export */   MX: () => (/* binding */ c),
/* harmony export */   O_: () => (/* binding */ i),
/* harmony export */   kL: () => (/* binding */ u),
/* harmony export */   vA: () => (/* binding */ s),
/* harmony export */   zH: () => (/* binding */ m)
/* harmony export */ });
/* unused harmony exports project, setMatrixTranslation3 */
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59646);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2662);
/* harmony import */ var _core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28152);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=(0,_core_libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)();class o{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,r="Assertion"){if(!t){const t=new Error(r).stack;throw new o(`${r} at ${t}`)}}function c(t,r){t||(r=r||"",console.warn("Verify failed: "+r+"\n"+new Error("verify").stack))}function i(t,r,n,e){let o,s=(n[0]-t[0])/r[0],c=(e[0]-t[0])/r[0];s>c&&(o=s,s=c,c=o);let i=(n[1]-t[1])/r[1],f=(e[1]-t[1])/r[1];if(i>f&&(o=i,i=f,f=o),s>f||i>c)return!1;i>s&&(s=i),f<c&&(c=f);let a=(n[2]-t[2])/r[2],u=(e[2]-t[2])/r[2];return a>u&&(o=a,a=u,u=o),!(s>u||a>c)&&(u<c&&(c=u),!(c<0))}function f(r,n,e,o,s,c=(0,_core_libs_gl_matrix_2_factories_vec2f64_js__WEBPACK_IMPORTED_MODULE_0__/* .create */ .vt)()){const i=(o[s]-e[s])*(n[0]-r[0])-(o[0]-e[0])*(n[s]-r[s]),f=(o[0]-e[0])*(r[s]-e[s])-(o[s]-e[s])*(r[0]-e[0]);if(0===i)return!1;const a=f/i;return c[0]=r[0]+a*(n[0]-r[0]),c[1]=r[s]+a*(n[s]-r[s]),!0}function a(t,n,o,c,i){e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=1,r(e,e,n),i.length>2&&(i[2]=-e[2]),r(e,e,o),s(0!==e[3]),i[0]=e[0]/e[3],i[1]=e[1]/e[3],i[2]=e[2]/e[3],i[0]=(.5*i[0]+.5)*c[2]+c[0],i[1]=(.5*i[1]+.5)*c[3]+c[1]}function u(t,r){return Math.log(t)/Math.log(r)}function l(t,r,n,e){t[12]=r,t[13]=n,t[14]=e}function m(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}


/***/ })

};
;