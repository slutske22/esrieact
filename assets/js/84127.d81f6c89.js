"use strict";
exports.id = 84127;
exports.ids = [84127];
exports.modules = {

/***/ 85012:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EM: () => (/* binding */ a),
/* harmony export */   b5: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export devHostnames */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,i.some((a=>null!=c?.match(a)))}function a(c,a){return c?(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(o)||null!=a.match(l)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c:null}const t=/^devext\.arcgis\.com$/,o=/^qaext\.arcgis\.com$/,s=/^[\w-]*\.mapsdevext\.arcgis\.com$/,l=/^[\w-]*\.mapsqa\.arcgis\.com$/,i=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local\.esri\.com$/,t,o,/^jsapps\.esri\.com$/,s,l];


/***/ }),

/***/ 84127:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  resolveWebStyleSymbol: () => (/* binding */ h)
});

// UNUSED EXPORTS: fetchSymbolFromStyle, getStyleItemFromStyle

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/devEnvironmentUtils.js
var devEnvironmentUtils = __webpack_require__(85012);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(62304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(55714);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/jsonUtils.js + 2 modules
var jsonUtils = __webpack_require__(42726);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/StyleOrigin.js
var StyleOrigin = __webpack_require__(14176);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/styleUtils.js + 1 modules
var styleUtils = __webpack_require__(56728);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/Thumbnail.js
var Thumbnail = __webpack_require__(51431);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/typeUtils.js + 1 modules
var typeUtils = __webpack_require__(59343);
;// ./node_modules/@arcgis/core/symbols/support/webStyleAcceptedFormats.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e=["web-gltf","web","cim"];

;// ./node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function h(t,e,o){const l=t.name;return null==l?Promise.reject(new Error/* default */.A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):"Esri2DPointSymbolsStyle"===t.styleName?U(l,e,o):(0,styleUtils/* fetchStyle */.cF)(t,e,o).then((t=>j(t,l,e,styleUtils/* symbolUrlFromStyleItem */.o5,o)))}function g(t,e){return e.items.find((e=>e.name===t))}async function j(i,u,f,h,j){const U=null!=f?.portal?f.portal:Portal/* default */.A.getDefault(),w={portal:U,url:(0,urlUtils/* urlToObject */.An)(i.baseUrl)},N=g(u,i.data);if(!N)throw new Error/* default */.A("symbolstyleutils:symbol-name-not-found",`The symbol name '${u}' could not be found`,{symbolName:u});const S=j?.acceptedFormats??e,D=h(N,S);if(!D)throw new Error/* default */.A("symbolstyleutils:symbol-reference-no-accepted-format",`The symbol name '${u}' does not have an accepted format (one of ${S})`,{symbolName:u});const{url:$,format:v}=D;let E=(0,persistableUrlUtils.f)($,w),O=N.thumbnail?.href??null;const P=N.thumbnail?.imageData;(0,devEnvironmentUtils/* isDevEnvironment */.b5)()&&(E=(0,devEnvironmentUtils/* adjustStaticAGOUrl */.EM)(E)??"",O=(0,devEnvironmentUtils/* adjustStaticAGOUrl */.EM)(O));const T={portal:U,url:(0,urlUtils/* urlToObject */.An)((0,urlUtils/* removeFile */.nM)(E)),origin:"portal-item"};return (0,styleUtils/* requestJSON */.yA)(E,j).then((t=>{const e="cim"===v?(0,styleUtils/* makeCIMSymbolRef */.bo)(t.data):t.data,r=(0,jsonUtils/* fromJSON */.rS)(e,T);if(r&&(0,typeUtils/* isSymbol3D */.wk)(r)){if(O){const t=(0,persistableUrlUtils.f)(O,w);r.thumbnail=new Thumbnail/* Thumbnail */.V({url:t})}else P&&(r.thumbnail=new Thumbnail/* Thumbnail */.V({url:`data:image/png;base64,${P}`}));i.styleUrl?r.styleOrigin=new StyleOrigin/* default */.A({portal:f.portal,styleUrl:i.styleUrl,name:u}):i.styleName&&(r.styleOrigin=new StyleOrigin/* default */.A({portal:f.portal,styleName:i.styleName,name:u}))}return r}))}function U(t,e,r){const s=styleUtils/* Style2DUrlTemplate */.jg.replaceAll(/\{SymbolName\}/gi,t),a=null!=e.portal?e.portal:Portal/* default */.A.getDefault();return (0,styleUtils/* requestJSON */.yA)(s,r).then((t=>{const e=(0,styleUtils/* makeCIMSymbolRef */.bo)(t.data);return (0,jsonUtils/* fromJSON */.rS)(e,{portal:a,url:(0,urlUtils/* urlToObject */.An)((0,urlUtils/* removeFile */.nM)(s)),origin:"portal-item"})}))}


/***/ })

};
;