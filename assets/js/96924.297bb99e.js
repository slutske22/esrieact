"use strict";
exports.id = 96924;
exports.ids = [96924];
exports.modules = {

/***/ 68796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ s)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{}


/***/ }),

/***/ 68476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28300);
/* harmony import */ var _deepClone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94905);
/* harmony import */ var _executionError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90364);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82951);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61064);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42663);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function p(t,e,s=!1,r=!1){if(null==t)return null;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_5__/* .isNumber */ .Et)(t)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_5__/* .isBoolean */ .Lm)(t)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_5__/* .isString */ .Kg)(t)||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.e)(t)||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.f)(t)||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.g)(t))return t;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_5__/* .isArray */ .cy)(t)){const i=[];for(const n of t)i.push(p(n,e,s,r));return i}if(r&&(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.h)(t))return t;const i=new j;i.immutable=!1;for(const[n,o]of Object.entries(t))void 0!==o&&i.setField(n,p(o,e,s,r));return i.immutable=s,i}class j{constructor(t){this.declaredClass="esri.arcade.Dictionary",this.plain=!1,this.immutable=!0,t instanceof j?this.attributes=t.attributes:null==t?this.attributes=Object.create(null):null!=Object.getPrototypeOf(t)?this.attributes={__proto__:null,...t}:this.attributes=t}static containerEntry(t,e){return new j({__proto__:null,key:t,value:e})}static textFormatting(){const t=new j({__proto__:null,newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});return t.immutable=!1,t}field(t){const e=t.toLowerCase(),i=this.attributes[t];if(void 0!==i)return i;for(const s in this.attributes)if(s.toLowerCase()===e)return this.attributes[s];throw new _executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(null,_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.FieldNotFound,null,{key:t})}setField(e,n){if(this.immutable)throw new _executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(null,_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.Immutable,null);if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.i)(n))throw new _executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(null,_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.NoFunctionInDictionary,null);const o=e.toLowerCase();n instanceof Date&&(n=_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeDate */ .lY.dateJSToArcadeDate(n));if(void 0===this.attributes[e]){for(const t in this.attributes)if(t.toLowerCase()===o)return void(this.attributes[t]=n);this.attributes[e]=n}else this.attributes[e]=n}hasField(t){const e=t.toLowerCase();if(void 0!==this.attributes[t])return!0;for(const s in this.attributes)if(s.toLowerCase()===e)return!0;return!1}keys(){let t=[];for(const e in this.attributes)t.push(e);return t=t.sort(),t}castToText(t=!1){return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.c)(this.attributes,{useNumbersForDates:t})}static convertObjectToArcadeDictionary(t,e,s=!0,r=!1){const i=new j;i.immutable=!1;for(const n in t){const o=t[n];void 0!==o&&i.setField(n.toString(),p(o,e,s,r))}return i.immutable=s,i}static convertJsonToArcade(t,e,s=!1,r=!1){return p(t,e,s,r)}castAsJson(t=null){const e=Object.create(null);for(let s in this.attributes){const r=this.attributes[s];void 0!==r&&(t?.keyTranslate&&(s=t.keyTranslate(s)),e[s]=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.a)(r,t))}return e}async castDictionaryValueAsJsonAsync(t,e,s,r=null,i){const n=await (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.b)(s,r,i);return t[e]=n,n}async castAsJsonAsync(e=null,s=null){const r=Object.create(null),i=[];for(let n in this.attributes){const a=this.attributes[n];s?.keyTranslate&&(n=s.keyTranslate(n)),void 0!==a&&((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.d)(a)||a instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A||a instanceof _ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeDate */ .lY?r[n]=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.a)(a,s):i.push(this.castDictionaryValueAsJsonAsync(r,n,a,e,s)))}return i.length>0&&await Promise.all(i),r}deepClone(){const t=new j;t.immutable=!1;for(const s of this.keys())t.setField(s,(0,_deepClone_js__WEBPACK_IMPORTED_MODULE_1__/* .deepClone */ .G)(this.field(s)));return t}}


/***/ }),

/***/ 30225:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CU: () => (/* binding */ s),
/* harmony export */   UQ: () => (/* binding */ e),
/* harmony export */   fF: () => (/* binding */ r),
/* harmony export */   o6: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49175);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r{constructor(){}}function n(t,n,e){if(t instanceof r&&!(t instanceof s)){const r=new s;return r.fn=t,r.parameterEvaluator=e,r.context=n,r}return t}class e extends r{constructor(t){super(),this.fn=t}createFunction(t){return(...r)=>this.fn(t,{preparsed:!0,arguments:r})}call(t,r){return this.fn(t,r)}marshalledCall(e,a,l,c){return c(e,a,((a,o,i)=>{i=i.map((t=>t instanceof r&&!(t instanceof s)?n(t,e,c):t));const u=this.call(l,{args:i});return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPromiseLike */ .$X)(u)?u.then((t=>n(t,l,c))):u}))}}class s extends r{constructor(){super(...arguments),this.fn=null,this.context=null}createFunction(t){return this.fn.createFunction(this.context)}call(t,r){return this.fn.marshalledCall(t,r,this.context,this.parameterEvaluator)}marshalledCall(t,r,n){return this.fn.marshalledCall(t,r,this.context,this.parameterEvaluator)}}


/***/ }),

/***/ 72005:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t=[]){this._elements=t}length(){return this._elements.length}get(t){return this._elements[t]}toArray(){return this.slice()}slice(t=0,e=this.length()){const s=[];for(let r=t;r<e;r++)s.push(this.get(r));return s}}


/***/ }),

/***/ 30336:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72005);
/* harmony import */ var _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51025);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class h extends _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t,s,h,i,e){super(t),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=h,this._hasM=i,this._spRef=s,this._cacheId=e}get(t){if(void 0===this._lazyPath[t]){const h=this._elements[t];if(void 0===h)return;this._lazyPath[t]=new _ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(h,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]}equalityTest(t){return t===this||null!==t&&(t instanceof h!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()}}


/***/ }),

/***/ 51025:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72005);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30214);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class i extends _ImmutableArray_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t,s,i,h,e,a){super(t),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=s,this._hasZ=i,this._hasM=h,this._cacheId=e,this._partId=a}get(t){if(void 0===this._lazyPt[t]){const i=this._elements[t];if(void 0===i)return;const h=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(i[0],i[1],this._spRef);this._hasZ&&(h.z=i[2]),this._hasM&&(h.m=this._hasZ?i[3]:i[2]),h.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+t.toString(),this._lazyPt[t]=h}return this._lazyPt[t]}equalityTest(t){return t===this||null!==t&&(t instanceof i!=!1&&t.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}


/***/ }),

/***/ 25107:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ t),
/* harmony export */   _: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _executionError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90364);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){if("string"==typeof t)return t.toLowerCase();if("name"in t)return t.name.toLowerCase();if("string"!=typeof t.value)throw new _executionError_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeExecutionError */ .D$(null,_executionError_js__WEBPACK_IMPORTED_MODULE_0__/* .ExecutionErrorCodes */ .TX.InvalidIdentifier,null);return t.value.toLowerCase()}const n=Object.freeze({aborted:!1});


/***/ }),

/***/ 94905:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ f),
/* harmony export */   y: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _ArcadeModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68796);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82951);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42663);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(a){p=a}let p;function f(i){return null===i?null:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.e)(i)?i.clone():(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.d)(i)?i:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.h)(i)?i.clone():(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.j)(i)?i.toArray().map((a=>f(a))):(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_1__/* .isArray */ .cy)(i)?i.map((a=>f(a))):(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.k)(i)?p.createFromArcadeFeature(i):(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.l)(i)||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.m)(i)?i:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.n)(i)||"esri.arcade.Attachment"===i?.declaredClass?i.deepClone():("esri.arcade.Portal"===i?.declaredClass||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.o)(i)||i instanceof _ArcadeModule_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeModule */ .x||(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_0__.i)(i),i)}


/***/ }),

/***/ 76004:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $P: () => (/* binding */ d),
/* harmony export */   At: () => (/* binding */ b),
/* harmony export */   J6: () => (/* binding */ l),
/* harmony export */   JB: () => (/* binding */ J),
/* harmony export */   Lk: () => (/* binding */ m),
/* harmony export */   NI: () => (/* binding */ M),
/* harmony export */   Qi: () => (/* binding */ E),
/* harmony export */   eB: () => (/* binding */ x),
/* harmony export */   eg: () => (/* binding */ T),
/* harmony export */   f0: () => (/* binding */ g),
/* harmony export */   gO: () => (/* binding */ O),
/* harmony export */   ik: () => (/* binding */ D),
/* harmony export */   ke: () => (/* binding */ s),
/* harmony export */   nE: () => (/* binding */ y),
/* harmony export */   rX: () => (/* binding */ f),
/* harmony export */   yT: () => (/* binding */ P),
/* harmony export */   zl: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony exports callback, cloneAttributes, equalityTest, errback, isArray, isBoolean, isNumber, isString, sameGeomType, toEsriGeometryType */
/* harmony import */ var _ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28300);
/* harmony import */ var _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76902);
/* harmony import */ var _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3991);
/* harmony import */ var _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45352);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44641);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var o,l;function s(e){return _layers_support_Field_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(e.toJSON())}function y(e){return e.toJSON?e.toJSON():e}function p(e){return"string"==typeof e||e instanceof String}function u(e){return"boolean"==typeof e}function a(e){return"number"==typeof e}function c(e){return Array.isArray(e)}function d(e){return e instanceof Date}function m(e){return e instanceof luxon__WEBPACK_IMPORTED_MODULE_4__/* .DateTime */ .c9}function f(i){return i instanceof _ArcadeDate_js__WEBPACK_IMPORTED_MODULE_0__/* .ArcadeDate */ .lY}function g(e){return e instanceof _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_1__/* .DateOnly */ .n}function T(e){return e instanceof _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_2__/* .TimeOnly */ .k}function F(e,i){return e===i||!(!d(e)&&!f(e)||!d(i)&&!f(i))&&e.getTime()===i.getTime()}function G(e){const i={};for(const r in e)i[r]=e[r];return i}function S(e,i){return e===i||("point"===e&&"esriGeometryPoint"===i||("polyline"===e&&"esriGeometryPolyline"===i||("polygon"===e&&"esriGeometryPolygon"===i||("extent"===e&&"esriGeometryEnvelope"===i||("multipoint"===e&&"esriGeometryMultipoint"===i||("point"===i&&"esriGeometryPoint"===e||("polyline"===i&&"esriGeometryPolyline"===e||("polygon"===i&&"esriGeometryPolygon"===e||("extent"===i&&"esriGeometryEnvelope"===e||"multipoint"===i&&"esriGeometryMultipoint"===e)))))))))}!function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"}(o||(o={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(l||(l={}));const O=1e3;function v(e){return function(i){e.reject(i)}}function I(e,i){return function(){try{e.apply(null,arguments)}catch(r){i.reject(r)}}}const D={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},P={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},b={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function N(e){switch(e){case"point":default:return"esriGeometryPoint";case"polygon":return"esriGeometryPolygon";case"multipoint":return"esriGeometryMultipoint";case"polyline":return"esriGeometryPolyline"}}function E(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function J(e,i){i||(i={}),"function"==typeof i&&(i={cmp:i});const r="boolean"==typeof i.cycles&&i.cycles,t=i.cmp&&(n=i.cmp,function(e){return function(i,r){const t={key:i,value:e[i]},o={key:r,value:e[r]};return n(t,o)}});var n;const o=[];return function e(i){if(i?.toJSON&&"function"==typeof i.toJSON&&(i=i.toJSON()),void 0===i)return;if("number"==typeof i)return isFinite(i)?""+i:"null";if("object"!=typeof i)return JSON.stringify(i);let n,l;if(Array.isArray(i)){for(l="[",n=0;n<i.length;n++)n&&(l+=","),l+=e(i[n])||"null";return l+"]"}if(null===i)return"null";if(o.includes(i)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=o.push(i)-1,y=Object.keys(i).sort(t?.(i));for(l="",n=0;n<y.length;n++){const r=y[n],t=e(i[r]);t&&(l&&(l+=","),l+=JSON.stringify(r)+":"+t)}return o.splice(s,1),"{"+l+"}"}(e)}function M(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"knowledge-graph-sublayer":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function x(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return M(e)}}


/***/ }),

/***/ 96924:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BatchTranslationServiceFactory: () => (/* reexport safe */ _chunks_aiServices_js__WEBPACK_IMPORTED_MODULE_11__.B),
/* harmony export */   PortalTranslationService: () => (/* reexport safe */ _chunks_aiServices_js__WEBPACK_IMPORTED_MODULE_11__.P),
/* harmony export */   getTranslateParametersKey: () => (/* reexport safe */ _chunks_aiServices_js__WEBPACK_IMPORTED_MODULE_11__.g),
/* harmony export */   registerFunctions: () => (/* reexport safe */ _chunks_aiServices_js__WEBPACK_IMPORTED_MODULE_11__.r)
/* harmony export */ });
/* harmony import */ var _arcadeEnvironment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25107);
/* harmony import */ var _Dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68476);
/* harmony import */ var _executionError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90364);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82951);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62304);
/* harmony import */ var _rest_translate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56174);
/* harmony import */ var _rest_support_TranslateContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62533);
/* harmony import */ var _rest_support_TranslateParameters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82778);
/* harmony import */ var _rest_support_TranslateResult_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53571);
/* harmony import */ var _chunks_aiServices_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7636);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/



/***/ }),

/***/ 7636:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ v),
/* harmony export */   B: () => (/* binding */ S),
/* harmony export */   P: () => (/* binding */ g),
/* harmony export */   g: () => (/* binding */ w),
/* harmony export */   r: () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var _arcade_arcadeEnvironment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25107);
/* harmony import */ var _arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68476);
/* harmony import */ var _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(90364);
/* harmony import */ var _languageUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82951);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62991);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80294);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62304);
/* harmony import */ var _rest_translate_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56174);
/* harmony import */ var _rest_support_TranslateContent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62533);
/* harmony import */ var _rest_support_TranslateParameters_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82778);
/* harmony import */ var _rest_support_TranslateResult_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53571);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(42663);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class g{constructor(t,e){this.portal=t,this._debugLog=e}async translate(t){this.portal.loaded||await this.portal.load();const e=this.portal.helperServices?.aiUtilityServices;if(null==e)return{success:!1};const s=e.url+e.translateUtility;try{t.requestSource??="arcade";return{success:!0,results:(await (0,_rest_translate_js__WEBPACK_IMPORTED_MODULE_7__/* .translate */ .T)(s,t,{authMode:"no-prompt"})).map((t=>t.toJSON()))}}catch(r){return null!=this._debugLog&&(r instanceof Error||r instanceof _core_Error_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)&&this._debugLog(`TranslateText error: ${r.message}`),_core_Logger_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.getLogger("esri.arcade.functions.aiServices").error(r),{success:!1}}}}class y{constructor(t,e,s){this._parameters=t,this._maxTotalContentSize=e,this._maxContentsLength=s,this._requests=[],this._normalizedContents=new Map,this._contentsTotalSize=0}tryAdd(t){const e=new Set(t.filter((t=>!this._normalizedContents.has(t.text))).map((t=>t.text)));if(this._requests.length+e.size>this._maxContentsLength)return null;let s=0;for(const n of e)s+=n.length;if((s+this._contentsTotalSize)*(this._parameters.to.length??1)>this._maxTotalContentSize)return null;const r=this._requests.length;for(const{key:n,text:o}of t)(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getOrCreateMapValue */ .tE)(this._normalizedContents,o,(()=>[])).push({batchIdx:r,key:n});return this._requests.push(t),this._contentsTotalSize+=s,r}async send(t){const e=[],s=[];let r=0;for(const[i,c]of this._normalizedContents)e.push(new _rest_support_TranslateContent_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A({key:String(r++),text:i})),s.push(c);const n=new _rest_support_TranslateParameters_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A(this._parameters);n.contents=e;const o=await t.translate(n);if(!o.success)return Array.from(this._requests,(()=>o));const a=Array.from(this._requests,(()=>({success:!0,results:[]})));for(const i of o.results){const t=Number(i.key);for(const e of s[t])a[e.batchIdx].results.push({...i,key:e.key})}return a}}function w(t){const e=[...new Set(t.to)].sort(),s=t.from??null,r=t.portalUrl,n=t.translator,o=t.apiKey??null;return JSON.stringify([e,s,r,n,o])}async function x(t,e,s){try{return(await t.yieldFor(s))[e]}catch{return{success:!1}}}class S{constructor(t,e,{maxTotalContentSize:s=5e4,maxContentsLength:r=1e3}={}){this._executor=t,this._service=e,this._openBatches=new Map,this._maxTotalContentSize=s,this._maxContentsLength=r}create(t){return{translate:async e=>{const s=w(e),{contents:r,to:n,from:o,translator:a,portalUrl:i,apiKey:c}=e;if(null==n)return{success:!1};if(null==r||r.every((t=>0===t.text.length)))return{success:!1};const l=this._openBatches.get(s);if(null!=l){const e=l.data.tryAdd(r);if(null!=e)return await x(t,e,l);l.send()}const u=new y({to:n,from:o,translator:a,portalUrl:i,apiKey:c},this._maxTotalContentSize,this._maxContentsLength),h=u.tryAdd(r);if(null!=h){const e=this._executor.openBatch(u,{open:t=>{this._openBatches.set(s,t)},execute:t=>t.send(this._service),close:t=>{this._openBatches.get(s)===t&&this._openBatches.delete(s)}});return await x(t,h,e)}return await this._service.translate(e)}}}}function T(i){"async"===i.mode&&(i.functions[(0,_arcade_arcadeEnvironment_js__WEBPACK_IMPORTED_MODULE_0__/* .toSymbolId */ .X)("TranslateText")]=function(t,c){return i.standardFunctionAsync(t,c,(async(t,i,c)=>{if((0,_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.B)(c,2,3,t,i),!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_12__/* .isString */ .Kg)(c[0])&&!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_12__/* .isArray */ .cy)(c[0])&&!(0,_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.j)(c[0]))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(t,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.InvalidParameter,i);const l=(0,_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.L)(c[0]);if(!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_12__/* .isString */ .Kg)(c[1])&&!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_12__/* .isArray */ .cy)(c[1])&&!(0,_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.j)(c[1]))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(t,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.InvalidParameter,i);const h=(0,_languageUtils_js__WEBPACK_IMPORTED_MODULE_3__.L)(c[1]);let y=null;if(c.length>=3){if(!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_12__/* .isString */ .Kg)(c[2]))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(t,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.InvalidParameter,i);y=c[2]}const x=l.map(((t,e)=>new _rest_support_TranslateContent_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A({key:String(e),text:t}))),S=t.services?.portal??_portal_Portal_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getDefault(),T=new _rest_support_TranslateParameters_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A({to:h,contents:x,from:y,portalUrl:S.restUrl.replace(/\/sharing\/rest$/,"")}),v=new Map;let C=null;if(null!=t.lrucache){const e=t.lrucache;C??=w(T),T.contents=T.contents?.filter((t=>{const s=e.getCachedTranslation(C,t.text);return null==s||(v.set(t.key,{...s,key:t.key,text:t.text}),!1)}))}if(T.contents?.length){const n=t.services?.translation??new g(S,t.console),o=await n.translate(T);if(!o.success)return new _arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({__proto__:null,success:!1});for(const e of o.results){const n=T.contents?.find((t=>t.key===e.key))?.text;if(null==n)throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.NeverReach,null);v.set(e.key,e),null!=t.lrucache&&(C??=w(T),t.lrucache.setCachedTranslation(C,n,{detectedLanguage:e.detectedLanguage,translation:e.translation}))}}const j=Array.from(x,(n=>{const o=_rest_support_TranslateResult_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.fromJSON(v.get(n.key));if(null==o)throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_2__/* .ExecutionErrorCodes */ .TX.NeverReach,null);return o.text=n.text,_arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.convertJsonToArcade(o.toJSON(),t.timeZone??"system",!0)}));return new _arcade_Dictionary_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({__proto__:null,success:!0,results:j})}))})}const v=Object.freeze(Object.defineProperty({__proto__:null,BatchTranslationServiceFactory:S,PortalTranslationService:g,getTranslateParametersKey:w,registerFunctions:T},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 82951:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ qe),
/* harmony export */   A: () => (/* binding */ U),
/* harmony export */   B: () => (/* binding */ ae),
/* harmony export */   C: () => (/* binding */ we),
/* harmony export */   D: () => (/* binding */ ke),
/* harmony export */   E: () => (/* binding */ Me),
/* harmony export */   F: () => (/* binding */ Re),
/* harmony export */   G: () => (/* binding */ ve),
/* harmony export */   H: () => (/* binding */ Te),
/* harmony export */   I: () => (/* binding */ _),
/* harmony export */   J: () => (/* binding */ q),
/* harmony export */   K: () => (/* binding */ Ke),
/* harmony export */   L: () => (/* binding */ _e),
/* harmony export */   M: () => (/* binding */ E),
/* harmony export */   N: () => (/* binding */ Se),
/* harmony export */   O: () => (/* binding */ fe),
/* harmony export */   P: () => (/* binding */ ue),
/* harmony export */   Q: () => (/* binding */ Ue),
/* harmony export */   R: () => (/* binding */ v),
/* harmony export */   S: () => (/* binding */ Be),
/* harmony export */   T: () => (/* binding */ $e),
/* harmony export */   U: () => (/* binding */ We),
/* harmony export */   V: () => (/* binding */ He),
/* harmony export */   W: () => (/* binding */ je),
/* harmony export */   X: () => (/* binding */ B),
/* harmony export */   Y: () => (/* binding */ L),
/* harmony export */   Z: () => (/* binding */ Qe),
/* harmony export */   _: () => (/* binding */ ge),
/* harmony export */   a: () => (/* binding */ Le),
/* harmony export */   a0: () => (/* binding */ Pe),
/* harmony export */   a1: () => (/* binding */ Ce),
/* harmony export */   a2: () => (/* binding */ De),
/* harmony export */   a3: () => (/* binding */ Oe),
/* harmony export */   b: () => (/* binding */ Ve),
/* harmony export */   c: () => (/* binding */ ye),
/* harmony export */   d: () => (/* binding */ z),
/* harmony export */   e: () => (/* binding */ ne),
/* harmony export */   f: () => (/* binding */ re),
/* harmony export */   g: () => (/* binding */ ie),
/* harmony export */   h: () => (/* binding */ H),
/* harmony export */   i: () => (/* binding */ G),
/* harmony export */   j: () => (/* binding */ te),
/* harmony export */   k: () => (/* binding */ $),
/* harmony export */   l: () => (/* binding */ X),
/* harmony export */   m: () => (/* binding */ K),
/* harmony export */   n: () => (/* binding */ W),
/* harmony export */   o: () => (/* binding */ ee),
/* harmony export */   p: () => (/* binding */ et),
/* harmony export */   q: () => (/* binding */ P),
/* harmony export */   r: () => (/* binding */ Y),
/* harmony export */   s: () => (/* binding */ Q),
/* harmony export */   t: () => (/* binding */ he),
/* harmony export */   u: () => (/* binding */ Ne),
/* harmony export */   v: () => (/* binding */ I),
/* harmony export */   w: () => (/* binding */ pe),
/* harmony export */   x: () => (/* binding */ me),
/* harmony export */   y: () => (/* binding */ de),
/* harmony export */   z: () => (/* binding */ Ye)
/* harmony export */ });
/* unused harmony exports a4, a5, a6, a7, a8, a9, aa, ab */
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32083);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6480);
/* harmony import */ var _arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28300);
/* harmony import */ var _arcade_ArcadeModule_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(68796);
/* harmony import */ var _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90364);
/* harmony import */ var _arcade_FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30225);
/* harmony import */ var _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(72005);
/* harmony import */ var _arcade_ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30336);
/* harmony import */ var _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51025);
/* harmony import */ var _arcade_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76004);
/* harmony import */ var _core_number_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38192);
/* harmony import */ var _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(76902);
/* harmony import */ var _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3991);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8000);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61064);
/* harmony import */ var _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(67709);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(30214);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(65648);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(38648);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11021);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(56053);
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4631);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(42663);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(44641);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class v{constructor(e){this.value=e}}class _{constructor(e){this.value=e}}const I={type:"VOID"},P=Symbol("BREAK"),Y=Symbol("CONTINUE");function L(e,t,n){return""===t||null==t||t===n||t===n?e:e=e.split(t).join(n)}function G(e){return e instanceof _arcade_FunctionWrapper_js__WEBPACK_IMPORTED_MODULE_4__/* .ArcadeFunction */ .fF}function V(e){return e instanceof _arcade_ArcadeModule_js__WEBPACK_IMPORTED_MODULE_22__/* .ArcadeModule */ .x}function z(e){return!!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)||(!!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)||(!!ne(e)||(!!re(e)||(!!ie(e)||(!!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)||(null===e||(e===I||"number"==typeof e)))))))}function q(e,t){return void 0===e?t:e}function E(e){return null==e?"":(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)||te(e)?"Array":ne(e)?"Date":ie(e)?"Time":re(e)?"DateOnly":(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)?"String":(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)?"Boolean":(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)?"Number":"esri.arcade.Attachment"===e?.declaredClass?"Attachment":"esri.arcade.Portal"===e?.declaredClass?"Portal":"esri.arcade.Dictionary"===e?.declaredClass?"Dictionary":ee(e)?"KnowledgeGraph":e instanceof _arcade_ArcadeModule_js__WEBPACK_IMPORTED_MODULE_22__/* .ArcadeModule */ .x?"Module":$(e)?"Feature":e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A?"Point":e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A?"Polygon":e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A?"Polyline":e instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A?"Multipoint":e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A?"Extent":G(e)?"Function":K(e)?"FeatureSet":X(e)?"FeatureSetCollection":B(e)?"Voxel":e===I?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognized Type"}function U(e){return e===I}function H(e){return e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A}function $(e){return"esri.arcade.Feature"===e?.arcadeDeclaredClass}function B(e){return"esri.arcade.Voxel"===e?.arcadeDeclaredClass}function K(e){return"esri.arcade.featureset.support.FeatureSet"===e?.declaredRootClass}function W(e){return"esri.arcade.Dictionary"===e?.declaredClass}function Q(e){return W(e)||$(e)||B(e)}function X(e){return"esri.arcade.featureSetCollection"===e?.declaredRootClass}function ee(e){return"esri.rest.knowledgeGraph.KnowledgeGraph"===e?.declaredClass}function te(e){return e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A}function ne(e){return e instanceof _arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeDate */ .lY}function re(e){return e instanceof _core_sql_DateOnly_js__WEBPACK_IMPORTED_MODULE_9__/* .DateOnly */ .n}function ie(e){return e instanceof _core_sql_TimeOnly_js__WEBPACK_IMPORTED_MODULE_10__/* .TimeOnly */ .k}function oe(e){return null!=e&&"object"==typeof e}function ae(e,t,n,r,i){if(e.length<t||e.length>n)throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(r,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.WrongNumberOfParameters,i)}function ue(e){return e<0?-Math.round(-e):Math.round(e)}function se(e,t){return isNaN(e)||null==t||""===t?e.toString():(t=L(t,"‰",""),t=L(t,"¤",""),(0,_core_number_js__WEBPACK_IMPORTED_MODULE_8__/* .format */ .GP)(e,{pattern:t}))}function le(e,t){return null==t||""===t?e.toISOString(!0):e.toFormat(fe(t),{locale:(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_20__/* .getLocale */ .JK)(),numberingSystem:"latn"})}function fe(e,t=!1){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let n="";const r=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;for(const i of e.match(r)||[])switch(i){case"D":n+="d";break;case"DD":n+="dd";break;case"DDD":n+="o";break;case"d":n+="c";break;case"ddd":n+="ccc";break;case"dddd":n+="cccc";break;case"M":n+="L";break;case"MM":n+="LL";break;case"MMM":n+="LLL";break;case"MMMM":n+="LLLL";break;case"YY":n+="yy";break;case"Y":case"YYYY":n+="yyyy";break;case"Q":n+="q";break;case"Z":n+="Z";break;case"ZZ":n+="ZZ";break;case"ZZZ":n+="ZZZ";break;case"ZZZZ":n+=t?"[ZZZZ]":"ZZZZ";break;case"ZZZZZ":n+=t?"[ZZZZZ]":"ZZZZZ";break;case"S":n+="'S'";break;case"SS":n+="'SS'";break;case"SSS":n+="u";break;case"A":case"a":n+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":n+=i;break;default:i.length>=2&&"["===i.slice(0,1)&&"]"===i.slice(-1)?n+=`'${i.slice(1,-1)}'`:n+=`'${i}'`}return n}function ce(e,t,n){switch(n){case">":return e>t;case"<":return e<t;case">=":return e>=t;case"<=":return e<=t}return!1}function me(e,t,r){if(null===e){if(null===t||t===I)return ce(null,null,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(0,t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(0,Ne(t),r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(0,Ne(t),r);if(ne(t))return ce(0,t.toNumber(),r);if(ie(t))return ce(e,t.toNumber(),r);if(re(t))return ce(e,t.toNumber(),r)}if(e===I){if(null===t||t===I)return ce(null,null,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(0,t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(0,Ne(t),r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(0,Ne(t),r);if(ne(t))return ce(0,t.toNumber(),r);if(ie(t))return ce(e,t.toNumber(),r);if(re(t))return ce(e,t.toNumber(),r)}else if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(e,t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(e,Ne(t),r);if(null===t||t===I)return ce(e,0,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(e,Ne(t),r);if(ne(t))return ce(e,t.toNumber(),r);if(ie(t))return ce(e,t.toNumber(),r);if(re(t))return ce(e,t.toNumber(),r)}else if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(pe(e),pe(t),r);if(ne(t))return ce(Ne(e),t.toNumber(),r);if(ie(t))return ce(Ne(e),t.toNumber(),r);if(re(t))return ce(Ne(e),t.toNumber(),r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(Ne(e),t,r);if(null===t||t===I)return ce(Ne(e),0,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(Ne(e),Ne(t),r)}else if(ne(e)){if(ne(t))return e.timeZone!==t.timeZone&&(e.isUnknownTimeZone?e=_arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeDate */ .lY.arcadeDateAndZoneToArcadeDate(e,t.timeZone):t.isUnknownTimeZone&&(t=_arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeDate */ .lY.arcadeDateAndZoneToArcadeDate(t,e.timeZone))),ce(e.toNumber(),t.toNumber(),r);if(null===t||t===I)return ce(e.toNumber(),0,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(e.toNumber(),t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(e.toNumber(),Ne(t),r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(e.toNumber(),Ne(t),r);if(ie(t))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.CannotCompareDateAndTime,null);if(re(t))return ce(e.toNumber(),t.toNumber(),r)}else if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(e,t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(Ne(e),Ne(t),r);if(ne(t))return ce(Ne(e),t.toNumber(),r);if(ie(t))return ce(Ne(e),t.toNumber(),r);if(re(t))return ce(Ne(e),t.toNumber(),r);if(null===t||t===I)return ce(Ne(e),0,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(Ne(e),Ne(t),r)}else if(re(e)){if(ne(t))return ce(e.toNumber(),t.toNumber(),r);if(null===t||t===I)return ce(e.toNumber(),0,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(e.toNumber(),t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(e.toNumber(),Ne(t),r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(e.toNumber(),Ne(t),r);if(ie(t))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.CannotCompareDateAndTime,null);if(re(t))return ce(e.toNumber(),t.toNumber(),r)}else if(ie(e)){if(ne(t))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.CannotCompareDateAndTime,null);if(null===t||t===I)return ce(e.toNumber(),0,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(t))return ce(e.toNumber(),t,r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(t))return ce(e.toNumber(),Ne(t),r);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(t))return ce(e.toNumber(),Ne(t),r);if(ie(t))return ce(e.toNumber(),t.toNumber(),r);if(re(t))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.CannotCompareDateAndTime,null)}return!!de(e,t)&&("<="===r||">="===r)}function de(e,t){if(e===t)return!0;if(null===e&&t===I||null===t&&e===I)return!0;if(ne(e)&&ne(t))return e.equals(t);if(ie(e)&&ie(t))return e.equals(t);if(re(e)&&re(t))return e.equals(t);if(e instanceof _arcade_ImmutablePathArray_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)return e.equalityTest(t);if(e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)return e.equalityTest(t);if(e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A&&t instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A){const n=e.cache._arcadeCacheId,r=t.cache._arcadeCacheId;if(null!=n)return n===r}if(oe(e)&&oe(t)){if(e._arcadeCacheId===t._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId)return!0;if(e._underlyingGraphic===t._underlyingGraphic&&void 0!==e._underlyingGraphic&&null!==e._underlyingGraphic)return!0}return!1}function ye(e,{useNumbersForDates:t}){let n="";for(const r in e){""!==n&&(n+=",");const i=e[r];null==i?n+=JSON.stringify(r)+":null":(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(i)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(i)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(i)?n+=JSON.stringify(r)+":"+JSON.stringify(i):H(i)?n+=JSON.stringify(r)+":"+he(i):ie(i)||re(i)?n+=`${JSON.stringify(r)}:${JSON.stringify(i.toString())}`:te(i)||Array.isArray(i)?n+=JSON.stringify(r)+":"+he(i,null,t):ne(i)?n+=t?JSON.stringify(r)+":"+JSON.stringify(i.getTime()):JSON.stringify(r)+":"+i.stringify():null!==i&&"object"==typeof i&&"castToText"in i&&(n+=JSON.stringify(r)+":"+i.castToText(t))}return"{"+n+"}"}function pe(e,t){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e))return e;if(null===e)return"";if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e))return se(e,t);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e))return e.toString();if(ne(e))return le(e,t);if(ie(e))return e.toFormat(t);if(re(e))return e.toFormat(t);if(e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)return JSON.stringify(e.toJSON());if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)){const t=[];for(let n=0;n<e.length;n++)t[n]=be(e[n]);return"["+t.join(",")+"]"}if(e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A){const t=[];for(let n=0;n<e.length();n++)t[n]=be(e.get(n));return"["+t.join(",")+"]"}return null!==e&&"object"==typeof e&&"castToText"in e?e.castToText():G(e)?"object, Function":e===I?"":V(e)?"object, Module":""}function ge(e){const t=[];if(e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A){for(let n=0;n<e.length();n++)t[n]=Ne(e.get(n));return t}if(!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e))return null;for(let n=0;n<e.length;n++)t[n]=Ne(e[n]);return t}function he(e,t,n=!1){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e))return e;if(null===e)return"";if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e))return se(e,t);if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e))return e.toString();if(ne(e))return le(e,t);if(ie(e))return e.toFormat(t);if(re(e))return e.toFormat(t);if(e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)return e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+Fe(e.spatialReference)+"}":Fe(e.toJSON(),((e,t)=>e.key===t.key?0:"spatialReference"===e.key?1:"spatialReference"===t.key||e.key<t.key?-1:e.key>t.key?1:0));if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)){const t=[];for(let r=0;r<e.length;r++)t[r]=be(e[r],n);return"["+t.join(",")+"]"}if(e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A){const t=[];for(let r=0;r<e.length();r++)t[r]=be(e.get(r),n);return"["+t.join(",")+"]"}return null!==e&&"object"==typeof e&&"castToText"in e?e.castToText(n):G(e)?"object, Function":e===I?"":V(e)?"object, Module":""}function be(e,t=!1){if(null===e)return"null";if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e))return JSON.stringify(e);if(e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)return he(e,null,t);if(e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A)return he(e,null,t);if(Array.isArray(e))return he(e,null,t);if(ne(e))return t?JSON.stringify(e.getTime()):JSON.stringify(le(e,""));if(ie(e))return JSON.stringify(e.toString());if(re(e))return JSON.stringify(e.toString());if(null!==e&&"object"==typeof e){if("castToText"in e)return e.castToText(t)}else if(e===I)return"null";return"null"}function Ne(e,t){return (0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)?e:null===e||""===e?0:ne(e)||re(e)||ie(e)?NaN:(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)?e?1:0:(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)||""===e||void 0===e?NaN:void 0!==t&&(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)?(t=L(t,"‰",""),t=L(t,"¤",""),(0,_core_number_js__WEBPACK_IMPORTED_MODULE_8__/* .parse */ .qg)(e,{pattern:t})):e===I?0:Number(e)}function Se(e,t){if(ne(e))return e;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)){const r=Ze(e,t);if(r)return _arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeDate */ .lY.dateTimeToArcadeDate(r)}return null}function Ze(e,t){const n=/ (\d\d)/,i=(0,_arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__/* .createDateTimeZone */ .mT)(t);let o=luxon__WEBPACK_IMPORTED_MODULE_21__/* .DateTime */ .c9.fromISO(e,{zone:i});return o.isValid||n.test(e)&&(e=e.replace(n,"T$1"),o=luxon__WEBPACK_IMPORTED_MODULE_21__/* .DateTime */ .c9.fromISO(e,{zone:t}),o.isValid)?o:null}function Te(e){return (0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)?e:(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)?"true"===(e=e.toLowerCase()):!!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)&&(0!==e&&!isNaN(e))}function Ae(e,t){const n=JSON.parse(e);return n&&!n.spatialReference&&(n.spatialReference=t),(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_19__/* .fromJSON */ .rS)(n)}function ke(e,t){return null==e?null:(null!==e.spatialReference&&void 0!==e.spatialReference||(e.spatialReference=t),e)}function je(e){if(null===e)return null;if(e instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A)return"NaN"===e.x||null===e.x||isNaN(e.x)?null:e;if(e instanceof _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A){if(0===(e.curveRings??e.rings).length)return null;for(const t of e.curveRings??e.rings)if(t.length>0)return e;return null}if(e instanceof _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A){if(0===(e.curvePaths??e.paths).length)return null;for(const t of e.curvePaths??e.paths)if(t.length>0)return e;return null}return e instanceof _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A?0===e.points.length?null:e:e instanceof _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A?"NaN"===e.xmin||null===e.xmin||isNaN(e.xmin)?null:e:null}function De(e,t){if(!e)return t;if(!e.domain)return t;let n=null,r=null;if(ne(t))n=t.toNumber();else if(re(t))n=t.toString();else if(ie(t))n=t.toStorageString();else if("string"===e.field.type||"esriFieldTypeString"===e.field.type)n=pe(t);else{if(null==t)return null;if(""===t)return t;n=Ne(t)}for(let i=0;i<e.domain.codedValues.length;i++){const t=e.domain.codedValues[i];t.code===n&&(r=t)}return null===r?pe(t):r.name}function Oe(e,t){if(!e)return t;if(!e.domain)return t;let n=null;const r=pe(t);for(let i=0;i<e.domain.codedValues.length;i++){const t=e.domain.codedValues[i];t.name===r&&(n=t)}return null===n?t:n.code}function Ce(e,t,n=null,r=null){if(!t)return null;if(!t.fields)return null;let i,u,s=null;for(let o=0;o<t.fields.length;o++){const n=t.fields[o];n.name.toLowerCase()===e.toString().toLowerCase()&&(s=n)}if(null===s)throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.FieldNotFound,null,{key:e});let l=t.typeIdField,f="id",c=t.types;if(t.subtypeField&&(l=t.subtypeField,f="code",c=t.subtypes??[]),null===r&&n&&l)r=n.hasField(l)?n.field(l):null;else if(l&&null!==r){let e=!1;for(const t of c||[])if(r===t[f]){e=!0;break}if(!e)for(const t of c||[])if(r===t.name){r=t[f],e=!0;break}e||(r=null,n&&l&&(r=n.hasField(l)?n.field(l):null))}return null!=r&&c.some((e=>e[f]===r&&(i=e.domains?.[s.name],i&&"inherited"===i.type&&(i=xe(s.name,t),u=!0),!0))),u||i||(i=xe(e,t)),{field:s,domain:i}}function xe(e,t){let n;return t.fields.some((t=>(t.name.toLowerCase()===e.toLowerCase()&&(n=t.domain),!!n))),n}function Fe(e,t){t||(t={}),"function"==typeof t&&(t={cmp:t});const n="boolean"==typeof t.cycles&&t.cycles,r=t.cmp&&(i=t.cmp,function(e){return function(t,n){const r={key:t,value:e[t]},o={key:n,value:e[n]};return i(r,o)}});var i;const o=[];return function e(t){if(t?.toJSON&&"function"==typeof t.toJSON&&(t=t.toJSON()),void 0===t)return;if("number"==typeof t)return isFinite(t)?""+t:"null";if("object"!=typeof t)return JSON.stringify(t);let i,a;if(Array.isArray(t)){for(a="[",i=0;i<t.length;i++)i&&(a+=","),a+=e(t[i])||"null";return a+"]"}if(null===t)return"null";if(o.includes(t)){if(n)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const u=o.push(t)-1,s=Object.keys(t).sort(r?.(t));for(a="",i=0;i<s.length;i++){const n=s[i],r=e(t[n]);r&&(a&&(a+=","),a+=JSON.stringify(n)+":"+r)}return o.splice(u,1),"{"+a+"}"}(e)}function we(e){if(null===e)return null;const t=[];for(const n of e)$(n)?t.push(n.geometry()):t.push(n);return t}function Je(e,t){if(!(t instanceof _geometry_Point_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.InvalidParameter,null);e.push(t.hasZ?t.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])}function Me(e,t){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)||te(e)){let n=!1,r=!1,i=[],u=t;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)){for(const t of e)Je(i,t);i.length>0&&(u=e[0].spatialReference,n=e[0].hasZ,r=e[0].hasM)}else if(e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)i=e._elements,i.length>0&&(n=e._hasZ,r=e._hasM,u=e.get(0).spatialReference);else{if(!te(e))throw new _arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(null,_arcade_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.InvalidParameter,null);for(const t of e.toArray())Je(i,t);i.length>0&&(u=e.get(0).spatialReference,n=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}if(0===i.length)return null;return (0,_geometry_support_coordsUtils_js__WEBPACK_IMPORTED_MODULE_18__/* .isClockwise */ .$3)(i)||(i=i.slice().reverse()),new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A({rings:[i],spatialReference:u,hasZ:n,hasM:r})}return e}function Re(e,t){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)||te(e)){let n=!1,r=!1,i=[],o=t;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)){for(const t of e)Je(i,t);i.length>0&&(o=e[0].spatialReference,n=!0===e[0].hasZ,r=!0===e[0].hasM)}else if(e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)i=e._elements,i.length>0&&(n=e._hasZ,r=e._hasM,o=e.get(0).spatialReference);else if(te(e)){for(const t of e.toArray())Je(i,t);i.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({paths:[i],spatialReference:o,hasZ:n,hasM:r})}return e}function ve(e,t){if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)||te(e)){let n=!1,r=!1,i=[],o=t;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)){for(const t of e)Je(i,t);i.length>0&&(o=e[0].spatialReference,n=!0===e[0].hasZ,r=!0===e[0].hasM)}else if(e instanceof _arcade_ImmutablePointArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)i=e._elements,i.length>0&&(n=e._hasZ,r=e._hasM,o=e.get(0).spatialReference);else if(te(e)){for(const t of e.toArray())Je(i,t);i.length>0&&(o=e.get(0).spatialReference,n=!0===e.get(0).hasZ,r=!0===e.get(0).hasM)}return 0===i.length?null:new _geometry_Multipoint_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A({points:i,spatialReference:o,hasZ:n,hasM:r})}return e}function _e(e,t=!0){if(null==e)return[];if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy)(e)){const n=[];for(const r of e){const e=pe(r);(t||""!==e)&&n.push(e)}return n}if(te(e)){const n=[];for(let r=0;r<e.length();r++){const i=pe(e.get(r));(t||""!==i)&&n.push(i)}return n}if(z(e)){const n=pe(e);if(t||""!==n)return[n]}return[]}let Ie=0;function Pe(e){return Ie++,Ie%100==0?(Ie=0,new Promise((t=>{setTimeout((()=>{t(e)}),0)}))):e}function Ye(e,t,n){switch(n){case"&":return e&t;case"|":return e|t;case"^":return e^t;case"<<":return e<<t;case">>":return e>>t;case">>>":return e>>>t}}function Le(e,t=null){return null==e?null:(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg)(e)?e:e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A?!0===t?.keepGeometryType?e:e.toJSON():e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A?e.toArray().map((e=>Le(e,t))):Array.isArray(e)?e.map((e=>Le(e,t))):(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isDate */ .$P)(e)?e:ne(e)?e.toJSDate():ie(e)?e.toString():re(e)?e.toJSDate():null!==e&&"object"==typeof e&&void 0!==e.castAsJson?e.castAsJson(t):null}async function Ge(e,t,n,r,i){const o=await Ve(e,t,n);i[r]=o}async function Ve(e,t=null,n=null){if(e instanceof _arcade_ImmutableArray_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A&&(e=e.toArray()),null==e)return null;if(z(e)||e instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isDate */ .$P)(e)||ne(e))return Le(e,n);if(Array.isArray(e)){const r=[],i=[];for(const o of e)null===o||z(o)||o instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isDate */ .$P)(o)||ne(o)?i.push(Le(o,n)):(i.push(null),r.push(Ge(o,t,n,i.length-1,i)));return r.length>0&&await Promise.all(r),i}return null!==e&&"object"==typeof e&&void 0!==e.castAsJsonAsync?e.castAsJsonAsync(t,n):null}function ze(e){return qe(e)?e.parent:e}function qe(e){return e&&"declaredClass"in e&&"esri.layers.support.SubtypeSublayer"===e.declaredClass}function Ee(e){return e&&"declaredClass"in e&&"esri.layers.SubtypeGroupLayer"===e.declaredClass}function Ue(e,t,n){const r=ze(e.fullSchema());if(null===r)return null;if(!r.fields)return null;return Ce(t,r,e,n)}function He(e){const t=ze(e.fullSchema());return null===t?null:t.fields?t.subtypeField?{subtypeField:t.subtypeField,subtypes:t.subtypes?t.subtypes.map((e=>({name:e.name,code:e.code}))):[]}:t.typeIdField?{subtypeField:t.typeIdField,subtypes:t.types?t.types.map((e=>({name:e.name,code:e.id}))):[]}:null:null}function $e(e,t,n,r){const i=ze(e.fullSchema());if(null===i)return null;if(!i.fields)return null;const o=Ce(t,i,e,r);if(void 0===n)try{n=e.field(t)}catch(a){return null}return De(o,n)}function Be(e,t,n,r){const i=ze(e.fullSchema());if(null===i)return null;if(!i.fields)return null;if(void 0===n){try{n=e.field(t)}catch(o){return null}return n}return Oe(Ce(t,i,e,r),n)}function Ke(e){return e?.timeZone??"system"}function We(e){const t=ze(e.fullSchema());if(null===t)return null;if(!t.fields)return null;const n=[];for(const r of t.fields)n.push((0,_arcade_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__/* .esriFieldToJson */ .nE)(r));return{objectIdField:t.objectIdField,globalIdField:t.globalIdField??"",geometryType:void 0===_arcade_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__/* .layerGeometryEsriRestConstants */ .yT[t.geometryType]?"":_arcade_featureset_support_shared_js__WEBPACK_IMPORTED_MODULE_7__/* .layerGeometryEsriRestConstants */ .yT[t.geometryType],fields:n}}function Qe(r,i){const o=_arcade_ArcadeDate_js__WEBPACK_IMPORTED_MODULE_2__/* .ArcadeDate */ .lY.systemTimeZoneCanonicalName;return"system"===r&&(r=o),{version:Xe,engineVersion:_kernel_js__WEBPACK_IMPORTED_MODULE_1__/* .version */ .rE,timeZone:r,userTimeZone:o,spatialReference:i instanceof _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A?i.toJSON():i,application:_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.applicationName??"",engine:"web",locale:(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_20__/* .getLocale */ .JK)()}}const Xe="1.32",et=Object.freeze(Object.defineProperty({__proto__:null,ImplicitResult:_,ReturnResult:v,absRound:ue,arcadeVersion:Xe,autoCastArrayOfPointsToMultiPoint:ve,autoCastArrayOfPointsToPolygon:Me,autoCastArrayOfPointsToPolyline:Re,autoCastFeatureToGeometry:we,binaryOperator:Ye,breakResult:P,castAsJson:Le,castAsJsonAsync:Ve,castRecordToText:ye,continueResult:Y,defaultExecutingContext:Qe,defaultTimeZone:Ke,defaultUndefined:q,equalityTest:de,featureDomainCodeLookup:Be,featureDomainValueLookup:$e,featureFullDomain:Ue,featureSchema:We,featureSubtypes:He,fixNullGeometry:je,fixSpatialReference:ke,formatDate:le,formatNumber:se,getDomain:Ce,getDomainCode:Oe,getDomainValue:De,getType:E,greaterThanLessThan:me,isArray:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isArray */ .cy,isBoolean:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isBoolean */ .Lm,isDate:ne,isDateOnly:re,isDictionary:W,isDictionaryLike:Q,isFeature:$,isFeatureSet:K,isFeatureSetCollection:X,isFunctionParameter:G,isGeometry:H,isGraphic:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isGraphic */ .DU,isImmutableArray:te,isInteger:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isInteger */ .Fq,isJsDate:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isDate */ .$P,isKnowledgeGraph:ee,isModule:V,isNumber:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isNumber */ .Et,isObject:oe,isSimpleType:z,isString:_support_guards_js__WEBPACK_IMPORTED_MODULE_23__/* .isString */ .Kg,isSubtypeGrouplayer:Ee,isSubtypeSublayer:qe,isTime:ie,isVoid:U,isVoxel:B,multiReplace:L,parseGeometryFromJson:Ae,pcCheck:ae,stableStringify:Fe,standardiseDateFormat:fe,tick:Pe,toBoolean:Te,toDate:Se,toNumber:Ne,toNumberArray:ge,toString:pe,toStringArray:_e,toStringExplicit:he,voidOperation:I},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 38192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ c),
/* harmony export */   GP: () => (/* binding */ l),
/* harmony export */   qg: () => (/* binding */ p)
/* harmony export */ });
/* unused harmony exports getCustoms, regexp */
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21332);
/* harmony import */ var _intl_locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4631);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],no:[","," "],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function r(e=(0,_intl_locale_js__WEBPACK_IMPORTED_MODULE_1__/* .getLocale */ .JK)()){let r=(e=e.toLowerCase())in n;if(!r){const t=e.split("-");t.length>1&&t[0]in n&&(e=t[0],r=!0),r||(e="en")}const[l,s,o="#,##0.###"]=n[e];return{decimal:l,group:s,pattern:o}}function l(e,t){const n=r((t={...t}).locale);t.customs=n;const l=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:o(e,l,t)}const s=/[#0,]*[#0](?:\.0*#*)?/;function o(e,t,n){const r=(n=n||{}).customs.group,l=n.customs.decimal,o=t.split(";"),a=o[0];if((t=o[e<0?1:0]||"-"+a).includes("%"))e*=100;else if(t.includes("‰"))e*=1e3;else{if(t.includes("¤"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const c=s,p=a.match(c);if(!p)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(c,i(e,p[0],{decimal:l,group:r,places:n.places,round:n.round}))}function i(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const r=t.split("."),l="string"==typeof n.places&&n.places.indexOf(",");let s=n.places;l?s=n.places.slice(l+1):+s>=0||(s=(r[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(s))));const o=String(Math.abs(e)).split("."),i=o[1]||"";if(r[1]||n.places){l&&(n.places=n.places.slice(0,Math.max(0,l)));const e=void 0!==n.places?n.places:r[1]&&r[1].lastIndexOf("0")+1;+e>i.length&&(o[1]=i.padEnd(Number(e),"0")),+s<i.length&&(o[1]=i.slice(0,Math.max(0,Number(s))))}else o[1]&&o.pop();const a=r[0].replace(",","");let c=a.indexOf("0");-1!==c&&(c=a.length-c,c>o[0].length&&(o[0]=o[0].padStart(c,"0")),a.includes("#")||(o[0]=o[0].slice(-c)));let p,u,d=r[0].lastIndexOf(",");if(-1!==d){p=r[0].length-d-1;const e=r[0].slice(0,d);d=e.lastIndexOf(","),-1!==d&&(u=e.length-d-1)}const f=[];for(let g=o[0];g;){const e=g.length-p;f.push(e>0?g.slice(Math.max(0,e)):g),g=e>0?g.slice(0,e):"",u&&(p=u,u=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}function a(e){return c(e).regexp}function c(t){const n=r((t=t||{}).locale),l=t.pattern||n.pattern,o=n.group,i=n.decimal;let a=1;if(l.includes("%"))a/=100;else if(l.includes("‰"))a/=1e3;else if(l.includes("¤"))throw new Error("currency notation not supported");const c=l.split(";");1===c.length&&c.push("-"+c[0]);const p=f(c,(n=>(n="(?:"+(0,_string_js__WEBPACK_IMPORTED_MODULE_0__/* .escapeRegExpString */ .Cj)(n,".")+")").replace(s,(e=>{const n={signed:!1,separator:t.strict?o:[o,""],fractional:t.fractional,decimal:i,exponent:!1},r=e.split(".");let l=t.places;1===r.length&&1!==a&&(r[1]="###"),1===r.length||0===l?n.fractional=!1:(void 0===l&&(l=t.pattern?r[1].lastIndexOf("0")+1:1/0),l&&null==t.fractional&&(n.fractional=!0),!t.places&&+l<r[1].length&&(l+=","+r[1].length),n.places=l);const s=r[0].split(",");return s.length>1&&(n.groupSize=s.pop().length,s.length>1&&(n.groupSize2=s.pop().length)),"("+u(n)+")"}))),!0);return{regexp:p.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:o,decimal:i,factor:a}}function p(e,t){const n=c(t),r=new RegExp("^"+n.regexp+"$").exec(e);if(!r)return NaN;let l=r[1];if(!r[1]){if(!r[2])return NaN;l=r[2],n.factor*=-1}return l=l.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(l)*n.factor}function u(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=f(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let r=t+n;return n&&(r="(?:(?:"+r+")|(?:"+n+"))"),r+f(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}function d(t){"signed"in(t=t||{})||(t.signed=[!0,!1]),"separator"in t?"groupSize"in t||(t.groupSize=3):t.separator="";return f(t.signed,(e=>e?"[-+]":""),!0)+f(t.separator,(n=>{if(!n)return"(?:\\d+)";" "===(n=(0,_string_js__WEBPACK_IMPORTED_MODULE_0__/* .escapeRegExpString */ .Cj)(n))?n="\\s":" "===n&&(n="\\s\\xa0");const r=t.groupSize,l=t.groupSize2;if(l){const e="(?:0|[1-9]\\d{0,"+(l-1)+"}(?:["+n+"]\\d{"+l+"})*["+n+"]\\d{"+r+"})";return r-l>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(r-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(r-1)+"}(?:["+n+"]\\d{"+r+"})*)"}),!0)}const f=(e,t,n)=>{if(!Array.isArray(e))return t(e);const r=[];for(let l=0;l<e.length;l++)r.push(t(e[l]));return g(r.join("|"),Boolean(n))},g=(e,t)=>"("+(t?"?:":"")+e+")";


/***/ }),

/***/ 62533:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],e.prototype,"key",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],e.prototype,"text",void 0),e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__/* .subclass */ .$)("esri.rest.support.TranslateContent")],e);


/***/ }),

/***/ 82778:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26325);
/* harmony import */ var _commonProperties_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33650);
/* harmony import */ var _TranslateContent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62533);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.to=null,this.contents=null,this.portalUrl="https://www.arcgis.com",this.translator="esri",this.from=null,this.apiKey=null,this.requestSource=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[String],json:{write:!0}})],i.prototype,"to",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_TranslateContent_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A],json:{write:!0}})],i.prototype,"contents",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"portalUrl",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0,default:"esri"}})],i.prototype,"translator",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"from",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)(_commonProperties_js__WEBPACK_IMPORTED_MODULE_4__/* .apiKey */ .K)],i.prototype,"apiKey",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{name:"x-esri-request-source"}})],i.prototype,"requestSource",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__/* .subclass */ .$)("esri.rest.support.TranslateParameters")],i);


/***/ }),

/***/ 53571:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this.text=null,this.detectedLanguage="en",this.detectedLanguageScore=-1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],s.prototype,"key",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],s.prototype,"text",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{read:{source:"detectedLanguage.language"},write:{target:"detectedLanguage.language"}}})],s.prototype,"detectedLanguage",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{read:{source:"detectedLanguage.score"},write:{target:"detectedLanguage.score"}}})],s.prototype,"detectedLanguageScore",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Object,json:{write:!0}})],s.prototype,"translation",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_3__/* .subclass */ .$)("esri.rest.support.TranslateResult")],s);


/***/ }),

/***/ 33650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t={type:String,json:{read:{source:"token"},write:{target:"token"}}};


/***/ }),

/***/ 56174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36321);
/* harmony import */ var _support_TranslateResult_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53571);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function n(n,e,p){const i=e.toJSON();i.contents=JSON.stringify(i.contents),i.token=await (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .getToken */ .gf)(e.portalUrl,e.apiKey,{signal:p?.signal,prompt:"no-prompt"!==p?.authMode});const m=(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .parseUrl */ .Dl)(n),u=(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__/* .asValidOptions */ .jV)(m.query,{...p,query:i,method:"post",authMode:"anonymous"});return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(m.path,u)).data.results.map((t=>_support_TranslateResult_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.fromJSON(t)))}


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


/***/ })

};
;