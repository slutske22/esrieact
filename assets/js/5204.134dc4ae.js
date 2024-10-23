"use strict";
exports.id = 5204;
exports.ids = [5204,9989];
exports.modules = {

/***/ 19382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EM: () => (/* binding */ a),
/* harmony export */   b5: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony export devHostnames */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function c(c){return c=c||globalThis.location.hostname,l.some((a=>null!=c?.match(a)))}function a(c,a){return c&&(a=a||globalThis.location.hostname)?null!=a.match(t)||null!=a.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=a.match(o)||null!=a.match(i)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c}const t=/^devext.arcgis.com$/,o=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,i=/^[\w-]*\.mapsqa.arcgis.com$/,l=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,t,o,/^jsapps.esri.com$/,s,i];


/***/ }),

/***/ 59346:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vd: () => (/* binding */ e),
/* harmony export */   Vo: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports direct3DObjectFeatureLayerDisplayEnabled, disableDirect3DObjectFeatureLayerDisplay, disableI3SPatching, disableIDBCache, disableSceneLayerEditing, enableDirect3DObjectFeatureLayerDisplay, enableI3SPatching, enableSceneLayerEditing, i3sPatchingEnabled */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:force-wosr"),a=()=>!!has("enable-feature:direct-3d-object-feature-layer-display"),t=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!0,!0,!0),i=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:direct-3d-object-feature-layer-display",!1,!0,!0),r=()=>!!has("enable-i3s-patching"),d=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!0,!0,!0),c=()=>_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-i3s-patching",!1,!0,!0),n=()=>!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)("enable-feature:SceneLayer-editing"),l=(e="i3s-patching")=>{switch(c(),i(),_core_has_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.add("enable-feature:SceneLayer-editing",!0,!0,!0),e){case"feature-layer-view":t();break;case"i3s-patching":d()}},s=()=>{c(),i(),has.add("enable-feature:SceneLayer-editing",!1,!0,!0)},b=()=>has.add("disable-feature:idb-cache",!0,!0,!0);l("i3s-patching");


/***/ }),

/***/ 38463:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  rS: () => (/* binding */ b),
  M9: () => (/* binding */ l),
  oO: () => (/* binding */ i)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols.js + 1 modules
var symbols = __webpack_require__(30822);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/layerUtils.js
var layerUtils = __webpack_require__(40454);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/Symbol3D.js
var Symbol3D = __webpack_require__(50626);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/WebStyleSymbol.js
var WebStyleSymbol = __webpack_require__(75162);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PointSymbol3D.js
var PointSymbol3D = __webpack_require__(66960);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleLineSymbol.js + 2 modules
var SimpleLineSymbol = __webpack_require__(40241);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LineSymbol3D.js
var LineSymbol3D = __webpack_require__(68324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleMarkerSymbol.js
var SimpleMarkerSymbol = __webpack_require__(23369);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PictureMarkerSymbol.js
var PictureMarkerSymbol = __webpack_require__(72001);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/SimpleFillSymbol.js
var SimpleFillSymbol = __webpack_require__(68882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/MeshSymbol3D.js
var MeshSymbol3D = __webpack_require__(50151);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/PolygonSymbol3D.js
var PolygonSymbol3D = __webpack_require__(65216);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/TextSymbol.js
var TextSymbol = __webpack_require__(42602);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/LabelSymbol3D.js
var LabelSymbol3D = __webpack_require__(27372);
;// ../node_modules/@arcgis/core/symbols/support/symbolConversion.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a={retainId:!1,ignoreDrivers:!1,hasLabelingContext:!0};function S(S,c=a){if(!S)return{symbol:null};const{retainId:u=a.retainId,ignoreDrivers:d=a.ignoreDrivers,hasLabelingContext:j=a.hasLabelingContext,retainCIM:D=a.retainCIM}=c;let g=null;if((0,symbols/* isSymbol3D */.wk)(S)||S instanceof WebStyleSymbol/* default */.A)g=S.clone();else if("cim"===S.type){const o=S.data?.symbol?.type;if("CIMPointSymbol"!==o)return{error:new Error/* default */.A("symbol-conversion:unsupported-cim-symbol",`CIM symbol of type '${o||"unknown"}' is unsupported in 3D`,{symbol:S})};g=D?S.clone():PointSymbol3D/* default */.A.fromCIMSymbol(S)}else if(S instanceof SimpleLineSymbol/* default */.A)g=LineSymbol3D/* default */.A.fromSimpleLineSymbol(S);else if(S instanceof SimpleMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromSimpleMarkerSymbol(S);else if(S instanceof PictureMarkerSymbol/* default */.A)g=PointSymbol3D/* default */.A.fromPictureMarkerSymbol(S);else if(S instanceof SimpleFillSymbol/* default */.A)g=c.geometryType&&"mesh"===c.geometryType?MeshSymbol3D/* default */.A.fromSimpleFillSymbol(S):PolygonSymbol3D/* default */.A.fromSimpleFillSymbol(S);else{if(!(S instanceof TextSymbol/* default */.A))return{error:new Error/* default */.A("symbol-conversion:unsupported-2d-symbol",`2D symbol of type '${S.type||S.declaredClass}' is unsupported in 3D`,{symbol:S})};g=j?LabelSymbol3D/* default */.A.fromTextSymbol(S):PointSymbol3D/* default */.A.fromTextSymbol(S)}return u&&g&&"cim"!==g.type&&(g.id=S.id),d&&(0,symbols/* isSymbol3D */.wk)(g)&&g.symbolLayers.forEach((o=>o.ignoreDrivers=!0)),{symbol:g}}

;// ../node_modules/@arcgis/core/symbols/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function l(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!1});null!=s&&(e[n]=s)}function i(o,e,n,t){const s=jsonUtils_a(o,{},{context:t,isLabelSymbol:!0});null!=s&&(e[n]=s)}function m(o){return o instanceof Symbol3D/* default */.A||o instanceof WebStyleSymbol/* default */.A}function jsonUtils_a(o,t,r){if(null==o)return null;const{context:l,isLabelSymbol:i}=r,a=l?.origin,b=l?.messages;if("web-scene"===a&&!m(o)){const n=S(o,{retainCIM:!0,hasLabelingContext:i});return null!=n.symbol?n.symbol.write(t,l):(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`,{symbol:o,context:l,error:n.error})),null)}return("web-map"===a||"portal-item"===a&&!(0,layerUtils/* isSceneServiceLayer */.TU)(l?.layer))&&m(o)?(b?.push(new Error/* default */.A("symbol:unsupported",`Symbols of type '${o.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`,{symbol:o,context:l})),null):o.write(t,l)}function b(e,n){return (0,symbols/* readSymbol */.Bu)(e,null,n)}


/***/ }),

/***/ 28051:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bo: () => (/* binding */ p),
/* harmony export */   cF: () => (/* binding */ c),
/* harmony export */   jg: () => (/* binding */ w),
/* harmony export */   o5: () => (/* binding */ d),
/* harmony export */   yA: () => (/* binding */ b)
/* harmony export */ });
/* unused harmony exports cachedStyles, cleanupStyleUtilsCache */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99990);
/* harmony import */ var _support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59346);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let u={};async function f(e,t){try{return{data:(await b(e,t)).data,baseUrl:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .nM)(e),styleUrl:e}}catch(o){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(o),null}}function i(e,t,r){const o=null!=t.portal?t.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault();let s;const l=`${o.url} - ${o.user&&o.user.username} - ${e}`;return u[l]||(u[l]=y(e,o,r).then((e=>(s=e,e.fetchData()))).then((t=>({data:t,baseUrl:s.itemUrl??"",styleName:e})))),u[l]}function m(){u&&(u={})}function y(e,r,o){return r.load(o).then((()=>{const t=new _portal_PortalQueryParams_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A({disableExtraQuery:!0,query:`owner:${h} AND type:${j} AND typekeywords:"${e}"`});return r.queryItems(t,o)})).then((({results:r})=>{let s=null;const n=e.toLowerCase();if(r&&Array.isArray(r))for(const e of r){const t=e.typeKeywords?.some((e=>e.toLowerCase()===n));if(t&&e.type===j&&e.owner===h){s=e;break}}if(!s)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-not-found",`The style '${e}' could not be found`,{styleName:e});return s.load(o)}))}function c(e,r,o){return null!=e?.styleUrl?f(e.styleUrl,o):null!=e?.styleName?i(e.styleName,r,o):Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function p(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function d(e,t,r=["gltf"]){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!(0,_support_featureFlags_js__WEBPACK_IMPORTED_MODULE_6__/* .enableWebStyleForceWOSR */ .Vd)())for(const o of r){const t=e.formatInfos.find((e=>e.type===o));if(t)return t.href}return e.webRef}function b(t,r){const s={responseType:"json",query:{f:"json"},...r};return (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .normalize */ .S8)(t),s)}const h="esri_en",j="Style",w="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json";


/***/ }),

/***/ 19989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ j),
/* harmony export */   resolveWebStyleSymbol: () => (/* binding */ g)
/* harmony export */ });
/* unused harmony export fetchSymbolFromStyle */
/* harmony import */ var _symbols_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30822);
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19382);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98849);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63680);
/* harmony import */ var _jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38463);
/* harmony import */ var _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80822);
/* harmony import */ var _styleUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(28051);
/* harmony import */ var _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43937);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function g(t,e,r,o){const n=t.name;return null==n?Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName?d(n,e,o):(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .fetchStyle */ .cF)(t,e,o).then((t=>h(t,n,e,r,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .symbolUrlFromStyleItem */ .o5,o)))}function j(t,e){return e.items.find((e=>e.name===t))}function h(u,y,c,g,h,d){const U=null!=c?.portal?c.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault(),N={portal:U,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(u.baseUrl),origin:"portal-item"},w=j(y,u.data);if(!w){const t=`The symbol name '${y}' could not be found`;return Promise.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("symbolstyleutils:symbol-name-not-found",t,{symbolName:y}))}let S=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(h(w,g),N),D=w.thumbnail?.href??null;const O=w.thumbnail?.imageData;(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isDevEnvironment */ .b5)()&&(S=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .adjustStaticAGOUrl */ .EM)(S)??"",D=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .adjustStaticAGOUrl */ .EM)(D));const P={portal:U,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .nM)(S)),origin:"portal-item"};return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .requestJSON */ .yA)(S,d).then((e=>{const r="cimRef"===g?(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .makeCIMSymbolRef */ .bo)(e.data):e.data,l=(0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .fromJSON */ .rS)(r,P);if(l&&(0,_symbols_js__WEBPACK_IMPORTED_MODULE_0__/* .isSymbol3D */ .wk)(l)){if(D){const t=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)(D,N);l.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__/* .Thumbnail */ .V({url:t})}else O&&(l.thumbnail=new _Thumbnail_js__WEBPACK_IMPORTED_MODULE_9__/* .Thumbnail */ .V({url:`data:image/png;base64,${O}`}));u.styleUrl?l.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A({portal:c.portal,styleUrl:u.styleUrl,name:y}):u.styleName&&(l.styleOrigin=new _StyleOrigin_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A({portal:c.portal,styleName:u.styleName,name:y}))}return l}))}function d(t,e,r){const l=_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .Style2DUrlTemplate */ .jg.replaceAll(/\{SymbolName\}/gi,t),m=null!=e.portal?e.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault();return (0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .requestJSON */ .yA)(l,r).then((t=>{const e=(0,_styleUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .makeCIMSymbolRef */ .bo)(t.data);return (0,_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .fromJSON */ .rS)(e,{portal:m,url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)((0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .removeFile */ .nM)(l)),origin:"portal-item"})}))}


/***/ }),

/***/ 15204:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCIMSymbolReference: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19382);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20909);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10282);
/* harmony import */ var _chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63680);
/* harmony import */ var _symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28051);
/* harmony import */ var _symbols_support_webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(19989);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function f(t,r,s){if(!t.name)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("style-symbol-reference-name-missing","Missing name in style symbol reference");if(t.styleName&&"Esri2DPointSymbolsStyle"===t.styleName)return p(t,s);try{return b(await (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .fetchStyle */ .cF)(t,r,s),t.name,r,s)}catch(l){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(l),null}}async function p(t,r){const o=_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .Style2DUrlTemplate */ .jg.replaceAll(/\{SymbolName\}/gi,t.name);try{const t=await (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .requestJSON */ .yA)(o,r);return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .makeCIMSymbolRef */ .bo)(t.data)}catch(s){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(s),null}}async function b(m,a,f,p){const b={portal:null!=f?.portal?f.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getDefault(),url:(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .urlToObject */ .An)(m.baseUrl),origin:"portal-item"},j=(0,_symbols_support_webStyleSymbolUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .getStyleItemFromStyle */ .p)(a,m.data);if(!j){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("symbolstyleutils:symbol-name-not-found",`The symbol name '${a}' could not be found`,{symbolName:a})}let w=(0,_chunks_persistableUrlUtils_js__WEBPACK_IMPORTED_MODULE_5__.f)((0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .symbolUrlFromStyleItem */ .o5)(j,"cimRef"),b);(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isDevEnvironment */ .b5)()&&(w=(0,_core_devEnvironmentUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .adjustStaticAGOUrl */ .EM)(w));try{const t=await (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .requestJSON */ .yA)(w,p);return (0,_symbols_support_styleUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .makeCIMSymbolRef */ .bo)(t.data)}catch(U){return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAbortError */ .QP)(U),null}}


/***/ })

};
;