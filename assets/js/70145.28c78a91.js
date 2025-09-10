"use strict";
exports.id = 70145;
exports.ids = [70145];
exports.modules = {

/***/ 60861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ U),
/* harmony export */   IB: () => (/* binding */ i),
/* harmony export */   Iy: () => (/* binding */ T),
/* harmony export */   N2: () => (/* binding */ B),
/* harmony export */   RH: () => (/* binding */ H),
/* harmony export */   ZD: () => (/* binding */ C)
/* harmony export */ });
/* unused harmony exports BrightnessThreshold, colorEquals, colorVectorEquals, colorVectorToColorAndOpacity, darken, desaturate, getColorLuminance, getColorTheme, getContrast, multiplyOpacity, multiplyOpacityToUnitRGBA, unitRGBAFromColor, validateColor, validateColorAndOpacity */
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93814);
/* harmony import */ var _arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4506);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74772);
/* harmony import */ var _libs_gl_matrix_2_factories_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76982);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(n){return"r"in n&&"g"in n&&"b"in n}function a(n){return"h"in n&&"s"in n&&"v"in n}function s(n){return"l"in n&&"a"in n&&"b"in n}function f(n){return"l"in n&&"c"in n&&"h"in n}function h(n){return"x"in n&&"y"in n&&"z"in n}const l=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],g=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function b(n,t){const r=[];let o,e;if(n[0].length!==t.length)throw new Error("dimensions do not match");const u=n.length,c=n[0].length;let i=0;for(o=0;o<u;o++){for(i=0,e=0;e<c;e++)i+=n[o][e]*t[e];r.push(i)}return r}function m(n){const t=[n.r/255,n.g/255,n.b/255].map((n=>n<=.04045?n/12.92:((n+.055)/1.055)**2.4)),r=b(l,t);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function M(n){const t=b(g,[n.x/100,n.y/100,n.z/100]).map((n=>{const t=n<=.0031308?12.92*n:1.055*n**(1/2.4)-.055;return Math.min(1,Math.max(t,0))}));return{r:Math.round(255*t[0]),g:Math.round(255*t[1]),b:Math.round(255*t[2])}}function d(n){const t=[n.x/95.047,n.y/100,n.z/108.883].map((n=>n>(6/29)**3?n**(1/3):1/3*(29/6)**2*n+4/29));return{l:116*t[1]-16,a:500*(t[0]-t[1]),b:200*(t[1]-t[2])}}function p(n){const t=n.l,r=[(t+16)/116+n.a/500,(t+16)/116,(t+16)/116-n.b/200].map((n=>n>6/29?n**3:3*(6/29)**2*(n-4/29)));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function w(n){const t=n.l,r=n.a,o=n.b,e=Math.sqrt(r*r+o*o);let u=Math.atan2(o,r);return u=u>0?u:u+2*Math.PI,{l:t,c:e,h:u}}function x(n){const t=n.l,r=n.c,o=n.h;return{l:t,a:r*Math.cos(o),b:r*Math.sin(o)}}function k(n){return d(m(n))}function y(n){return M(p(n))}function j(n){return w(d(m(n)))}function v(n){return M(p(x(n)))}function z(n){const t=n.r,r=n.g,o=n.b,e=Math.max(t,r,o),u=e-Math.min(t,r,o);let c=e,i=0===u?0:e===t?(r-o)/u%6:e===r?(o-t)/u+2:(t-r)/u+4,a=0===u?0:u/c;return i<0&&(i+=6),i*=60,a*=100,c*=100/255,{h:i,s:a,v:c}}function A(n){const t=(n.h+360)%360/60,r=n.s/100,o=n.v/100*255,e=o*r,u=e*(1-Math.abs(t%2-1));let c;switch(Math.floor(t)){case 0:c={r:e,g:u,b:0};break;case 1:c={r:u,g:e,b:0};break;case 2:c={r:0,g:e,b:u};break;case 3:c={r:0,g:u,b:e};break;case 4:c={r:u,g:0,b:e};break;case 5:case 6:c={r:e,g:0,b:u};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+o-e),c.g=Math.round(c.g+o-e),c.b=Math.round(c.b+o-e),c}function U(n){return i(n)?n:f(n)?v(n):s(n)?y(n):h(n)?M(n):a(n)?A(n):n}function B(n){if(a(n))return n;return z(U(n))}function C(n){return s(n)?n:k(U(n))}function H(n){return f(n)?n:j(U(n))}function q(n){return G(n).isBright?"light":"dark"}function G(t){let{r,g:o,b:e,a:u}=t;return u<1&&(r=Math.round(u*r+255*(1-u)),o=Math.round(u*o+255*(1-u)),e=Math.round(u*e+255*(1-u))),new n({r,g:o,b:e})}function L(n,t){const{r,g:o,b:e}=t?.ignoreAlpha?n:G(n);return.2126*r+.7152*o+.0722*e}var R;function E(t,r=R.High){return L(t,{ignoreAlpha:!0})>r?new n([0,0,0,t.a]):new n([255,255,255,t.a])}function I(n,t){const r=C(n);r.l*=1-t;const o=U(r),e=n.clone();return e.setColor(o),e.a=n.a,e}function P(n,t){const r=n.clone();return r.a*=t,r}function D(n,t){const r=B(n);r.s*=t;const o=U(r),e=n.clone();return e.setColor(o),e.a=n.a,e}function F(t){return n.toUnitRGBA(t)}function J(n,t){return n===t||null!=n&&n.equals(t)}function K(n,t){return n===t||null!=n&&null!=t&&u(n,t)}function N(n){return c(n[0],n[1],n[2],n.length>3?n[3]:1)}function O(n){return n[0]??=0,n[1]??=0,n[2]??=0,n}function Q(n){return n.length=4,O(n),n[3]??=1,e(n[3],0,1),n}function S(t,r){const o=n.toUnitRGBA(t);return o[3]*=r,o}function T(r,e,u={}){if(0===r.length||e<=0)return[];if(1===(r=r.map((t=>"string"==typeof t?new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(t):t))).length||1===e){const n=[],t=r[0];for(let r=0;r<e;r++)n.push(t.clone());return n}if(u.shuffle&&(r=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .shuffle */ .k4)((0,_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(r),u.seed)),r.length>=e){const n=[],t=(r.length-1)/(e-1);for(let o=0;o<e;o++){const e=Math.round(o*t);n.push(r[e].clone())}return n}return V(r,e,u)}function V(n,r,o={}){const e=[],u=n.length-1,c=Math.ceil((r-n.length)/u);n:for(let t=0;t<u;t++){const u=n[t],i=n[t+1];for(let t=1;t<=c;t++){const a=t/(c+1);if(e.push(X(u,i,a,o)),e.length+n.length===r)break n}}return[...n.map((n=>n.clone())),...(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .shuffle */ .k4)(e,o.seed??1)]}!function(n){n[n.Low=160]="Low",n[n.High=225]="High"}(R||(R={}));const W=(n,t)=>{const r=Math.floor(10*t())-5;return Math.min(255,Math.max(0,n+r))};function X(t,o,e,u={}){const c=t.r,i=t.g,a=t.b,s=o.r,f=o.g,h=o.b,l=Math.round(c+(s-c)*e),g=Math.round(i+(f-i)*e),b=Math.round(a+(h-a)*e);if(!u.offset)return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([l,g,b]);const m=(0,_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .getRandomNumberGenerator */ .Mo)(u.seed);return new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A([W(l,m),W(g,m),W(b,m)])}


/***/ }),

/***/ 70145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  OverrideHelper: () => (/* binding */ v)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(93814);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/colorUtils.js
var colorUtils = __webpack_require__(60861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FieldsIndex.js
var FieldsIndex = __webpack_require__(51387);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/ArcadeExpression.js
var ArcadeExpression = __webpack_require__(46279);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/cim/utils.js
var utils = __webpack_require__(77234);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/quantizationUtils.js
var quantizationUtils = __webpack_require__(66220);
;// ./node_modules/@arcgis/core/views/2d/arcade/callExpressionWithFeature.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function callExpressionWithFeature_s(e,t,o,n,a,s){if(null==e)return null;const u=e.references("geometry")&&s?i(t,n,s):t,c=e.repurposeFeature(u,a);try{return e.evaluate(c,o)}catch(m){return Logger/* default */.A.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",m),null}}const u=new Map;function i(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;u.has(r)||u.set(r,c(r));const s=u.get(r)(e.geometry,o,n,a);return{...e,geometry:s}}function c(s){const u={};switch(s){case"esriGeometryPoint":return(e,r,t,o)=>(0,quantizationUtils/* unquantizePoint */.Tr)(r,u,e,t,o);case"esriGeometryPolygon":return(e,r,t,o)=>(0,quantizationUtils/* unquantizePolygon */.$X)(r,u,e,t,o);case"esriGeometryPolyline":return(e,r,t,n)=>(0,quantizationUtils/* unquantizePolyline */.P5)(r,u,e,t,n);case"esriGeometryMultipoint":return(e,r,o,n)=>(0,quantizationUtils/* unquantizeMultipoint */.SW)(r,u,e,o,n);default:return Logger/* default */.A.getLogger("esri.views.2d.support.arcadeOnDemand").error(new Error/* default */.A("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}

;// ./node_modules/@arcgis/core/symbols/cim/OverrideHelper.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const y=e=>{if(!e)return[0,0,0,0];const{r,g:i,b:s,a:t}=e;return[r,i,s,255*t]};class v{static findApplicableOverrides(e,r,i){if(e&&r){if(e.primitiveName){let s=!1;for(const r of i)if(r.primitiveName===e.primitiveName){s=!0;break}if(!s)for(const t of r)t.primitiveName===e.primitiveName&&i.push(t)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const s of e.effects)v.findApplicableOverrides(s,r,i);if(e.symbolLayers)for(const s of e.symbolLayers)v.findApplicableOverrides(s,r,i);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMSolidFill":case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMVectorMarker":case"CIMCharacterMarker":case"CIMPictureMarker":if(e.effects)for(const s of e.effects)v.findApplicableOverrides(s,r,i);if(e.markerPlacement&&v.findApplicableOverrides(e.markerPlacement,r,i),"CIMVectorMarker"===e.type){if(e.markerGraphics)for(const s of e.markerGraphics)v.findApplicableOverrides(s,r,i),v.findApplicableOverrides(s.symbol,r,i)}else"CIMCharacterMarker"===e.type?v.findApplicableOverrides(e.symbol,r,i):"CIMHatchFill"===e.type?v.findApplicableOverrides(e.lineSymbol,r,i):"CIMPictureMarker"===e.type&&v.findApplicableOverrides(e.animatedSymbolProperties,r,i)}}}static findEffectOverrides(e,r){if(!e)return null;if("CIMGeometricEffectDashes"===e.type&&(0,utils/* normalizeDashEffectTemplate */.FH)(e),!r||!e.primitiveName)return{type:"cim-effect-param",effect:e,overrides:[]};const i=(0,utils/* toLowerCaseProps */.rB)(e),s=e.primitiveName,t=[];for(const o of r)o.primitiveName===s&&t.push((0,utils/* toLowerCaseProps */.rB)(o));return{type:"cim-effect-param",effect:i,overrides:(0,utils/* normalizePrimitiveOverrideProps */.pk)(t)}}static async resolveSymbolOverrides(e,r,t,o,a,c,n){if(!e?.symbol)return null;let{symbol:p,primitiveOverrides:f}=e;const m=!!f;if(!m&&!o)return p;p=(0,lang/* clone */.o8)(p),f=(0,lang/* clone */.o8)(f);let y=!0;if(r||(r={attributes:{}},y=!1),m){if(y||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$feature")))),n||(f=f.filter((e=>!e.valueExpressionInfo?.expression.includes("$view")))),f.length>0){const e=(0,utils/* attributesToFields */.O2)(r.attributes),i={spatialReference:t,fields:e,geometryType:a};await v.createRenderExpressions(f,i),v.evaluateOverrides(f,r,a??"esriGeometryPoint",c,n,new FieldsIndex/* default */.A(e))}v.applyOverrides(p,f)}return o&&v.applyDictionaryTextOverrides(p,r,o,null),p}static{this._expressionToRenderExpression=new Map}static async createRenderExpressions(e,r){const i=[];for(const s of e){const e=s.valueExpressionInfo;if(!e||v._expressionToRenderExpression.has(e.expression))continue;const o=(0,ArcadeExpression/* createRendererExpression */.Ad)(e.expression,r.spatialReference);i.push(o),o.then((r=>v._expressionToRenderExpression.set(e.expression,r)))}i.length>0&&await Promise.all(i)}static evaluateOverrides(e,i,s,t,o,a){const c={$view:{scale:o?.scale}};for(const l of e){l.value&&"object"==typeof l.value&&(0,colorUtils/* isRGB */.IB)(l.value)&&("Color"===l.propertyName||"StrokeColor"===l.propertyName)&&(l.value=y(l.value));const e=l.valueExpressionInfo;if(!e)continue;const o=v._expressionToRenderExpression.get(e.expression);o&&(l.value=callExpressionWithFeature_s(o,i,c,s,a,t))}}static applyDictionaryTextOverrides(e,r,i,s,t="Normal"){if(e?.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":case"CIMTextSymbol":{const o=e.symbolLayers;if(!o)return;for(const a of o)a&&"CIMVectorMarker"===a.type&&v.applyDictionaryTextOverrides(a,r,i,s,"CIMTextSymbol"===e.type?e.textCase:t)}break;case"CIMVectorMarker":{const t=e.markerGraphics;if(!t)return;for(const e of t)e&&v.applyDictionaryTextOverrides(e,r,i,s)}break;case"CIMMarkerGraphic":{const o=e.textString;if(o&&o.includes("[")){const a=(0,utils/* analyzeTextParts */.gQ)(o,i);e.textString=(0,utils/* assignTextValuesFromFeature */.FM)(r,a,s,t)}}}}static applyOverrides(e,r,i,s){if(e.primitiveName)for(const t of r)if(t.primitiveName===e.primitiveName){const r=(0,utils/* uncapitalize */.YF)(t.propertyName);if(s&&s.push({cim:e,nocapPropertyName:r,value:e[r]}),i){let r=!1;for(const s of i)s.primitiveName===e.primitiveName&&(r=!0);r||i.push(t)}null!=t.value&&(e[r]=t.value)}switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.effects)for(const t of e.effects)v.applyOverrides(t,r,i,s);if(e.symbolLayers)for(const t of e.symbolLayers)v.applyOverrides(t,r,i,s);break;case"CIMTextSymbol":break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.effects)for(const t of e.effects)v.applyOverrides(t,r,i,s);if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const t of e.markerGraphics)v.applyOverrides(t,r,i,s),v.applyOverrides(t.symbol,r,i,s)}}static restoreOverrides(e){for(const r of e)r.cim[r.nocapPropertyName]=r.value}static buildOverrideKey(e){let r="";for(const i of e)void 0!==i.value&&(r+=`${i.primitiveName}${i.propertyName}${JSON.stringify(i.value)}`);return r}static toValue(r,i){if("DashTemplate"===r)return i.split(" ").map((e=>Number(e)));if("Color"===r){const r=new Color/* default */.A(i).toRgba();return r[3]*=255,r}return i}}


/***/ })

};
;