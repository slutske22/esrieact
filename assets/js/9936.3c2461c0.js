"use strict";
exports.id = 9936;
exports.ids = [9936];
exports.modules = {

/***/ 89936:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerFunctions: () => (/* binding */ V)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21121);
/* harmony import */ var _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52276);
/* harmony import */ var _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60886);
/* harmony import */ var _executionError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72234);
/* harmony import */ var _chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62261);
/* harmony import */ var _portalUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(55091);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88266);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68490);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96082);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26099);
/* harmony import */ var _rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(70727);
/* harmony import */ var _rest_knowledgeGraph_Entity_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61700);
/* harmony import */ var _rest_knowledgeGraph_GraphQueryStreaming_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82388);
/* harmony import */ var _rest_knowledgeGraph_ObjectValue_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(59351);
/* harmony import */ var _rest_knowledgeGraph_Path_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(96408);
/* harmony import */ var _rest_knowledgeGraph_Relationship_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(53181);
/* harmony import */ var _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(72387);
/* harmony import */ var _support_guards_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8701);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let N=null;async function F(r){const t=_config_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.geometryServiceUrl??"";if(!t){(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_7__.isLoaded)()||await (0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_7__.load)();for(const e of r)e.container[e.indexer]=(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_7__.project)(e.container[e.indexer],_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.WGS84);return}const n=r.map((e=>e.container[e.indexer])),o=new _rest_support_ProjectParameters_js__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A({geometries:n,outSpatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.WGS84}),a=await (0,_rest_geometryService_project_js__WEBPACK_IMPORTED_MODULE_12__/* .project */ .C)(t,o);for(let e=0;e<a.length;e++){const t=r[e];t.container[t.indexer]=a[e]}}async function M(e,r){const t=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_11__["default"]({portal:e,id:r});return await t.load(),null===N&&(N=await __webpack_require__.e(/* import() */ 563).then(__webpack_require__.bind(__webpack_require__, 90563))),await N.fetchKnowledgeGraph(t.url)}function Q(e,r,t,n,o){if(null===e)return null;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isString */ .Kg)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isNumber */ .Et)(e))return e;if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.e)(e))return e.toJSDate();if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.e)(e))return e.toJSDate();if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.f)(e))return e.toStorageFormat();if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.g)(e))return e.toStorageString();if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.n)(e)){const a={};for(const i of e.keys())a[i]=Q(e.field(i),r,t,n,o),a[i]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A&&o.push({container:a,indexer:i});return a}if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isArray */ .cy)(e)){const a=e.map((e=>Q(e,r,t,n,o)));for(let e=0;e<a.length;e++)a[e]instanceof _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A&&o.push({container:a,indexer:e});return a}return (0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.h)(e)?e.spatialReference.isWGS84?e:e.spatialReference.isWebMercator&&r?(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .webMercatorToGeographic */ .ci)(e):e:void 0}function B(e,r){if(!e)return e;if(e.spatialReference.isWGS84&&r.spatialReference.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .geographicToWebMercator */ .Gh)(e);if(e.spatialReference.equals(r.spatialReference))return e;throw new _executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(r,_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.WrongSpatialReference,null)}function E(e,r){if(!e)return null;const t={};for(const n in e)t[n]=K(e[n],r);return t}function K(e,r){return null===e?null:(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isArray */ .cy)(e)?e.map((e=>K(e,r))):e instanceof _rest_knowledgeGraph_Entity_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A?{graphTypeName:e.typeName,id:e.id,graphType:"entity",properties:E(e.properties,r)}:e instanceof _rest_knowledgeGraph_ObjectValue_js__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A?{graphType:"object",properties:E(e.properties,r)}:e instanceof _rest_knowledgeGraph_Relationship_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A?{graphTypeName:e.typeName,id:e.id,graphType:"relationship",originId:e.originId??null,destinationId:e.destinationId??null,properties:E(e.properties,r)}:e instanceof _rest_knowledgeGraph_Path_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A?{graphType:"path",path:e.path?e.path.map((e=>K(e,r))):null}:(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.h)(e)?B(e,r):(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isString */ .Kg)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isNumber */ .Et)(e)||(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isDate */ .$P)(e)?e:null}function V(e){"async"===e.mode&&(e.functions.knowledgegraphbyportalitem=function(t,s){return e.standardFunctionAsync(t,s,((e,p,l)=>{if((0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.B)(l,2,2,t,s),null===l[0])throw new _executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(t,_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.PortalRequired,s);if(l[0]instanceof _ArcadePortal_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A){const e=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.w)(l[1]);let r;r=t.services?.portal?t.services.portal:_portal_Portal_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.getDefault();return M((0,_portalUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getPortal */ .R)(l[0],r),e)}if(!1===(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isString */ .Kg)(l[0]))throw new _executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(t,_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.InvalidParameter,s);const c=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.w)(l[0]);return M(t.services?.portal??_portal_Portal_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.getDefault(),c)}))},e.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),e.functions.querygraph=function(r,i){return e.standardFunctionAsync(r,i,(async(e,c,f)=>{(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.B)(f,2,4,r,i);const u=f[0];if(!(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.o)(u))throw new _executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(r,_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.InvalidParameter,i);const m=f[1];if(!(0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isString */ .Kg)(m))throw new _executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(r,_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.InvalidParameter,i);null===N&&(N=await __webpack_require__.e(/* import() */ 563).then(__webpack_require__.bind(__webpack_require__, 90563)));let d=null;const h=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.J)(f[2],null);if(!(h instanceof _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A||null===h))throw new _executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExecutionError */ .D$(r,_executionError_js__WEBPACK_IMPORTED_MODULE_3__/* .ExecutionErrorCodes */ .TX.InvalidParameter,i);if(h){let e=[];d=Q(h,!0,!1,r,e),e=e.filter((e=>!e.container[e.indexer].spatialReference.isWGS84)),e.length>0&&await F(e)}const g=(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.J)(f[3],!1),w=new _rest_knowledgeGraph_GraphQueryStreaming_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A({openCypherQuery:m,bindParameters:d,provenanceBehavior:g?"include":"exclude"});(u?.serviceDefinition?.currentVersion??11.3)>11.2&&(w.outputSpatialReference=r.spatialReference);const y=(await N.executeQueryStreaming(u,w)).resultRowsStream.getReader(),j=[];try{for(;;){const{done:e,value:t}=await y.read();if(e)break;if((0,_support_guards_js__WEBPACK_IMPORTED_MODULE_19__/* .isArray */ .cy)(t))for(const n of t)j.push(K(n,r));else{const e=[];for(const n of t)e.push(K(t[n],r));j.push(e)}}}catch(S){throw S}return _Dictionary_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.convertJsonToArcade(j,(0,_chunks_languageUtils_js__WEBPACK_IMPORTED_MODULE_4__.K)(r),!1,!0)}))},e.signatures.push({name:"querygraph",min:2,max:4}))}


/***/ }),

/***/ 55091:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function l(l,t){if(null===l)return t;return new _portal_Portal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A({url:l.field("url")})}


/***/ }),

/***/ 61700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97066);
/* harmony import */ var _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68989);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.layoutGeometry=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{write:!0}})],p.prototype,"layoutGeometry",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.Entity")],p);


/***/ }),

/***/ 68989:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10444);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(r){super(r),this.typeName=null,this.id=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],s.prototype,"typeName",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],s.prototype,"id",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.GraphNamedObject")],s);


/***/ }),

/***/ 10444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.properties=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0}})],t.prototype,"properties",void 0),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.knowledgeGraph.GraphObject")],t);


/***/ }),

/***/ 82388:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ s)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
;// ../node_modules/@arcgis/core/rest/knowledgeGraph/GraphQuery.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends Accessor/* default */.A{constructor(r){super(r),this.openCypherQuery=""}};(0,tslib_es6._)([(0,property/* property */.MZ)()],p.prototype,"openCypherQuery",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.knowledgeGraph.GraphQuery")],p);

;// ../node_modules/@arcgis/core/rest/knowledgeGraph/GraphQueryStreaming.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let s=class extends p{constructor(r){super(r),this.bindParameters=null,this.bindGeometryQuantizationParameters=null,this.outputQuantizationParameters=null,this.outputSpatialReference=null,this.provenanceBehavior=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"bindParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"bindGeometryQuantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"outputQuantizationParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],s.prototype,"outputSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],s.prototype,"provenanceBehavior",void 0),s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.knowledgeGraph.GraphQueryStreaming")],s);


/***/ }),

/***/ 59351:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(539);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9272);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10444);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends _GraphObject_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A{constructor(r){super(r)}};e=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.ObjectValue")],e);


/***/ }),

/***/ 96408:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _GraphObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10444);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.path=[]}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_GraphObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A],json:{write:!0}})],p.prototype,"path",void 0),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.rest.knowledgeGraph.Path")],p);


/***/ }),

/***/ 53181:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(42238);
/* harmony import */ var _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68989);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends _GraphNamedObject_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(o){super(o),this.originId=null,this.destinationId=null,this.layoutGeometry=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"originId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String,json:{write:!0}})],i.prototype,"destinationId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:_geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,json:{write:!0}})],i.prototype,"layoutGeometry",void 0),i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.rest.knowledgeGraph.Relationship")],i);


/***/ })

};
;