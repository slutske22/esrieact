"use strict";
exports.id = 89156;
exports.ids = [89156];
exports.modules = {

/***/ 89156:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  registerFunctions: () => (/* binding */ V)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/arcade/ArcadePortal.js
var ArcadePortal = __webpack_require__(42754);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/arcade/Dictionary.js
var Dictionary = __webpack_require__(68476);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/arcade/executionError.js
var executionError = __webpack_require__(90364);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/languageUtils.js
var languageUtils = __webpack_require__(82951);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/arcade/portalUtils.js
var portalUtils = __webpack_require__(15193);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Geometry.js
var Geometry = __webpack_require__(61064);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projectionUtils.js + 3 modules
var projectionUtils = __webpack_require__(27646);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/webMercatorUtils.js
var webMercatorUtils = __webpack_require__(64672);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/Portal.js + 2 modules
var Portal = __webpack_require__(62304);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/PortalItem.js + 2 modules
var PortalItem = __webpack_require__(11969);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(56053);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/utils.js
var utils = __webpack_require__(36321);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/geometryService/utils.js
var geometryService_utils = __webpack_require__(96905);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/spatialReferenceUtils.js
var spatialReferenceUtils = __webpack_require__(67488);
;// ./node_modules/@arcgis/core/rest/support/ProjectParameters.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends JSONSupport/* default */.A{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const r=this.geometries.map((r=>r.toJSON())),o=this.geometries[0],t={};return t.outSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(this.outSpatialReference),t.inSR=(0,spatialReferenceUtils/* srToRESTValue */.YX)(o.spatialReference),t.geometries=JSON.stringify({geometryType:(0,jsonUtils/* getJsonType */.$B)(o),geometries:r}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"geometries",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{read:{source:"outSR"}}})],p.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"transformation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"transformForward",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.support.ProjectParameters")],p);

;// ./node_modules/@arcgis/core/rest/geometryService/project.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const i=(0,ensureType/* ensureType */.dp)(p);async function project_n(o,m,n){m=i(m);const u=(0,utils/* parseUrl */.Dl)(o),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=(0,jsonUtils/* getJsonType */.$B)(m.geometries[0]),f=(0,utils/* asValidOptions */.jV)(c,n);return (0,request/* default */.A)(u.path+"/project",f).then((({data:{geometries:r}})=>(0,geometryService_utils/* decodeGeometries */.V)(r,a,j)))}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/knowledgeGraph/Entity.js
var Entity = __webpack_require__(81114);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreaming.js + 1 modules
var GraphQueryStreaming = __webpack_require__(86022);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/knowledgeGraph/ObjectValue.js
var ObjectValue = __webpack_require__(60097);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/knowledgeGraph/Path.js
var Path = __webpack_require__(6149);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/knowledgeGraph/Relationship.js
var Relationship = __webpack_require__(72943);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(42663);
;// ./node_modules/@arcgis/core/arcade/functions/knowledgegraph.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let N=null;async function F(r){const t=config/* default */.A.geometryServiceUrl??"";if(!t){(0,projectionUtils.isLoaded)()||await (0,projectionUtils.load)();for(const e of r)e.container[e.indexer]=(0,projectionUtils.project)(e.container[e.indexer],SpatialReference/* default */.A.WGS84);return}const n=r.map((e=>e.container[e.indexer])),o=new p({geometries:n,outSpatialReference:SpatialReference/* default */.A.WGS84}),a=await project_n(t,o);for(let e=0;e<a.length;e++){const t=r[e];t.container[t.indexer]=a[e]}}async function M(e,r){const t=new PortalItem["default"]({portal:e,id:r});return await t.load(),null===N&&(N=await __webpack_require__.e(/* import() */ 53921).then(__webpack_require__.bind(__webpack_require__, 53921))),await N.fetchKnowledgeGraph(t.url)}function Q(e,r,t,n,o){if(null===e)return null;if((0,guards/* isString */.Kg)(e)||(0,guards/* isNumber */.Et)(e))return e;if((0,languageUtils.e)(e))return e.toJSDate();if((0,languageUtils.e)(e))return e.toJSDate();if((0,languageUtils.f)(e))return e.toStorageFormat();if((0,languageUtils.g)(e))return e.toStorageString();if((0,languageUtils.n)(e)){const a={};for(const i of e.keys())a[i]=Q(e.field(i),r,t,n,o),a[i]instanceof Geometry/* default */.A&&o.push({container:a,indexer:i});return a}if((0,guards/* isArray */.cy)(e)){const a=e.map((e=>Q(e,r,t,n,o)));for(let e=0;e<a.length;e++)a[e]instanceof Geometry/* default */.A&&o.push({container:a,indexer:e});return a}return (0,languageUtils.h)(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&r?(0,webMercatorUtils/* webMercatorToGeographic */.ci)(e):e:void 0}function B(e,r){if(!e)return e;if(e.spatialReference.isWGS84&&r.spatialReference.isWebMercator)return (0,webMercatorUtils/* geographicToWebMercator */.Gh)(e);if(e.spatialReference.equals(r.spatialReference))return e;throw new executionError/* ArcadeExecutionError */.D$(r,executionError/* ExecutionErrorCodes */.TX.WrongSpatialReference,null)}function E(e,r){if(!e)return null;const t={};for(const n in e)t[n]=K(e[n],r);return t}function K(e,r){return null===e?null:(0,guards/* isArray */.cy)(e)?e.map((e=>K(e,r))):e instanceof Entity/* default */.A?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:E(e.properties,r)}:e instanceof ObjectValue/* default */.A?{graphType:"object",properties:E(e.properties,r)}:e instanceof Relationship/* default */.A?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:E(e.properties,r)}:e instanceof Path/* default */.A?{graphType:"path",path:e.path?e.path.map((e=>K(e,r))):null}:(0,languageUtils.h)(e)?B(e,r):(0,guards/* isString */.Kg)(e)||(0,guards/* isNumber */.Et)(e)||(0,guards/* isDate */.$P)(e)?e:null}function V(e){"async"===e.mode&&(e.functions.knowledgegraphbyportalitem=function(t,s){return e.standardFunctionAsync(t,s,((e,p,l)=>{if((0,languageUtils.B)(l,2,2,t,s),null===l[0])throw new executionError/* ArcadeExecutionError */.D$(t,executionError/* ExecutionErrorCodes */.TX.PortalRequired,s);if(l[0]instanceof ArcadePortal/* default */.A){const e=(0,languageUtils.w)(l[1]);let r;r=t.services?.portal?t.services.portal:Portal/* default */.A.getDefault();return M((0,portalUtils/* getPortal */.R)(l[0],r),e)}if(!1===(0,guards/* isString */.Kg)(l[0]))throw new executionError/* ArcadeExecutionError */.D$(t,executionError/* ExecutionErrorCodes */.TX.InvalidParameter,s);const c=(0,languageUtils.w)(l[0]);return M(t.services?.portal??Portal/* default */.A.getDefault(),c)}))},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r,i){return e.standardFunctionAsync(r,i,(async(e,c,f)=>{(0,languageUtils.B)(f,2,4,r,i);const u=f[0];if(!(0,languageUtils.o)(u))throw new executionError/* ArcadeExecutionError */.D$(r,executionError/* ExecutionErrorCodes */.TX.InvalidParameter,i);const m=f[1];if(!(0,guards/* isString */.Kg)(m))throw new executionError/* ArcadeExecutionError */.D$(r,executionError/* ExecutionErrorCodes */.TX.InvalidParameter,i);null===N&&(N=await __webpack_require__.e(/* import() */ 53921).then(__webpack_require__.bind(__webpack_require__, 53921)));let d=null;const h=(0,languageUtils.J)(f[2],null);if(!(h instanceof Dictionary/* default */.A||null===h))throw new executionError/* ArcadeExecutionError */.D$(r,executionError/* ExecutionErrorCodes */.TX.InvalidParameter,i);if(h){let e=[];d=Q(h,!0,!1,r,e),e=e.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),e.length>0&&await F(e)}const g=(0,languageUtils.J)(f[3],!1),w=new GraphQueryStreaming/* default */.A({openCypherQuery:m,bindParameters:d,provenanceBehavior:g?"include":"exclude"});(u?.serviceDefinition?.currentVersion??11.3)>11.2&&(w.outputSpatialReference=r.spatialReference);const y=(await N.executeQueryStreaming(u,w)).resultRowsStream.getReader(),j=[];try{for(;;){const{done:e,value:t}=await y.read();if(e)break;if((0,guards/* isArray */.cy)(t))for(const n of t)j.push(K(n,r));else{const e=[];for(const n of t)e.push(K(t[n],r));j.push(e)}}}catch(S){throw S}return Dictionary/* default */.A.convertJsonToArcade(j,(0,languageUtils.K)(r),!1,!0)}))},e.signatures.push({name:"querygraph",min:2,max:4}))}


/***/ }),

/***/ 15193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62304);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(l,t){if(null===l)return t;return new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({url:l.field("url")})}


/***/ }),

/***/ 81114:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(30214);
/* harmony import */ var _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80211);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.layoutGeometry=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{write:!0}})],p.prototype,"layoutGeometry",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.Entity")],p);


/***/ }),

/***/ 80211:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92450);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(r){super(r),this.typeName=null,this.id=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],s.prototype,"typeName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],s.prototype,"id",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.GraphNamedObject")],s);


/***/ }),

/***/ 92450:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.properties=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0}})],t.prototype,"properties",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.knowledgeGraph.GraphObject")],t);


/***/ }),

/***/ 86022:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ s)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
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
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
;// ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends Accessor/* default */.A{constructor(r){super(r),this.openCypherQuery=""}};(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"openCypherQuery",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.knowledgeGraph.GraphQuery")],p);

;// ./node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreaming.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends p{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"bindParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"bindGeometryQuantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"outputQuantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],s.prototype,"outputSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"provenanceBehavior",void 0),s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.knowledgeGraph.GraphQueryStreaming")],s);


/***/ }),

/***/ 60097:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67498);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62991);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92450);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(r){super(r)}};e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.ObjectValue")],e);


/***/ }),

/***/ 6149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92450);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.path=[]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_GraphObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A],json:{write:!0}})],p.prototype,"path",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.knowledgeGraph.Path")],p);


/***/ }),

/***/ 72943:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38648);
/* harmony import */ var _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80211);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"originId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"destinationId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{write:!0}})],i.prototype,"layoutGeometry",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.Relationship")],i);


/***/ })

};
;