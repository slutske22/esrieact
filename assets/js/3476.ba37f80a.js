"use strict";
exports.id = 3476;
exports.ids = [3476];
exports.modules = {

/***/ 6371:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t){let r,e,i=[],u=!1;function f(...f){return u&&r===this&&n(f,i)||(e=t.apply(this,f),r=this,i=f,u=!0),e}return f}function n(t,n){if(t.length!==n.length)return!1;for(let r=0;r<t.length;++r)if(t[r]!==n[r])return!1;return!0}


/***/ }),

/***/ 22970:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81066);
/* harmony import */ var _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90814);
/* harmony import */ var _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75796);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class r extends _FeatureSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__/* .FeatureSnappingCandidate */ .w{constructor(n){super({...n,constraint:new _sketch_constraints_js__WEBPACK_IMPORTED_MODULE_0__/* .PointConstraint */ .i7(n.targetPoint)})}get hints(){return[new _hints_PointSnappingHint_js__WEBPACK_IMPORTED_MODULE_2__/* .PointSnappingHint */ ._(this.targetPoint,this.isDraped,this.domain)]}}


/***/ }),

/***/ 33476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatureCollectionSnappingSource: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_memoize_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6371);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85251);
/* harmony import */ var _core_sql_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(76859);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27451);
/* harmony import */ var _snappingUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61851);
/* harmony import */ var _queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(78200);
/* harmony import */ var _snappingCandidateElevationAlignment_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75662);
/* harmony import */ var _snappingCandidateElevationFilter_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60397);
/* harmony import */ var _symbologySnappingCandidates_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2344);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let f=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{get availability(){return 1}get _snappingElevationAligner(){const{view:e}=this,{layer:t}=this.layerSource,i=null!=e&&"3d"===e.type;if(!i||"subtype-group"===t.type)return (0,_snappingCandidateElevationAlignment_js__WEBPACK_IMPORTED_MODULE_12__/* .getSnappingCandidateElevationAligner */ .n)();const r=async(i,r)=>(await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .whenOrAbort */ .qr)(e.whenLayerView(t),r)).elevationAlignPointsInFeatures(i,r);return (0,_snappingCandidateElevationAlignment_js__WEBPACK_IMPORTED_MODULE_12__/* .getSnappingCandidateElevationAligner */ .n)(i,{elevationInfo:t.elevationInfo,alignPointsInFeatures:r})}get _snappingElevationFilter(){const{view:e}=this,t=null!=e&&"3d"===e.type&&"subtype-group"!==this.layerSource.layer.type;return (0,_snappingCandidateElevationFilter_js__WEBPACK_IMPORTED_MODULE_13__/* .getSnappingCandidateElevationFilter */ .z)(t)}get _symbologySnappingFetcher(){const{view:e}=this,{layer:t}=this.layerSource;return null!=e&&"3d"===e.type&&"subtype-group"!==t.type?(0,_symbologySnappingCandidates_js__WEBPACK_IMPORTED_MODULE_14__/* .getSymbologySnappingCandidatesFetcher */ .H)(this._symbologySnappingSupported,(async(i,n)=>{const o=await e.whenLayerView(t);return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(n),o.queryForSymbologySnapping({candidates:i,spatialReference:e.spatialReference},n)})):(0,_symbologySnappingCandidates_js__WEBPACK_IMPORTED_MODULE_14__/* .getSymbologySnappingCandidatesFetcher */ .H)()}get _layerView(){const{view:e}=this;if(null==e)return null;const{layer:t}=this.layerSource;return e.allLayerViews.find((e=>e.layer===t))}get _layerView3D(){const{view:e}=this;return null==e||"2d"===e.type?null:this._layerView}get _symbologySnappingSupported(){return null!=this._layerView3D&&this._layerView3D.symbologySnappingSupported}initialize(){const{view:e}=this,{layer:t}=this.layerSource;null!=e&&"3d"===e.type&&"subtype-group"!==t.type&&this.addHandles([e.elevationProvider.on("elevation-change",(({context:e})=>{const{elevationInfo:i}=t;(0,_support_elevationInfoUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .elevationContextAffectsAlignment */ .Up)(e,i)&&this._snappingElevationAligner.notifyElevationSourceChange()})),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .wB)((()=>t.elevationInfo),(()=>this._snappingElevationAligner.notifyElevationSourceChange()),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .initial */ .Vh),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .watch */ .wB)((()=>null!=this._layerView3D?this._layerView3D.layer?.renderer:null),(()=>this._symbologySnappingFetcher.notifySymbologyChange()),_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .initial */ .Vh),(0,_core_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_3__.on)((()=>this._layerView3D?.layer),["edits","apply-edits","graphic-update"],(()=>this._symbologySnappingFetcher.notifySymbologyChange()))])}constructor(e){super(e),this.view=null,this.updating=!1,this._memoizedMakeGetGroundElevation=(0,_core_memoize_js__WEBPACK_IMPORTED_MODULE_15__/* .memoize */ .B)(_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .makeGetGroundElevation */ .p)}refresh(){}async fetchCandidates(e,t){const{layer:i}=this.layerSource,{source:n}=i;if(!n?.querySnapping)return[];const o=i.createQuery();this._layerView&&"effectiveDisplayFilter"in this._layerView&&(o.where=(0,_core_sql_js__WEBPACK_IMPORTED_MODULE_16__/* .sqlAnd */ .mA)(o.where,this._layerView.effectiveDisplayFilter?.where));const a="returnZ"in i?i.returnZ:void 0,s=(0,_snappingUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .makeSnappingQuery */ .nf)({parameters:e,mode:this.view?.type??"2d",returnZ:a,filter:o}),p=await n.querySnapping(s,{signal:t});(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(t);const y=e.coordinateHelper.spatialReference,c=await this._snappingElevationAligner.alignCandidates(p.candidates,y,t);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(t);const h=await this._symbologySnappingFetcher.fetch(c,t);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(t);const m=0===h.length?c:[...c,...h],d=this._snappingElevationFilter.filter(s,m),v=this._memoizedMakeGetGroundElevation(this.view,y);return d.map((e=>(0,_queryEngineUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .convertSnappingCandidate */ .$)(e,v)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0})],f.prototype,"layerSource",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({constructOnly:!0})],f.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"_snappingElevationAligner",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"_snappingElevationFilter",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"_symbologySnappingFetcher",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"_layerView",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"_layerView3D",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],f.prototype,"_symbologySnappingSupported",null),f=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")],f);


/***/ }),

/***/ 78200:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ o),
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97847);
/* harmony import */ var _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46113);
/* harmony import */ var _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15991);
/* harmony import */ var _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22970);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a({x:e,y:n,z:d}){return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .fromValues */ .fA)(e,n,d??0)}function o(t,o){switch(t.type){case"edge":return t.draped?new _candidates_DrapedEdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_1__/* .DrapedEdgeSnappingCandidate */ .X({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .markAsTarget */ .de)(a(t.target)),objectId:t.objectId,getGroundElevation:o}):new _candidates_EdgeSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_2__/* .EdgeSnappingCandidate */ .z({edgeStart:a(t.start),edgeEnd:a(t.end),targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .markAsTarget */ .de)(a(t.target)),objectId:t.objectId,isDraped:!1});case"vertex":return new _candidates_VertexSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_3__/* .VertexSnappingCandidate */ .C({targetPoint:(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_0__/* .markAsTarget */ .de)(a(t.target)),objectId:t.objectId,isDraped:!1})}}function i(e,t){return null!=e&&"3d"===e.type?(n,d)=>e.elevationProvider.getElevation(n,d,0,t,"ground"):()=>null}


/***/ }),

/***/ 75662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89926);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(82256);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92976);
/* harmony import */ var _symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97046);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function i(e=!1,t){if(e){const{elevationInfo:e,alignPointsInFeatures:s}=t;return new c(e,s)}return new a}class a{async alignCandidates(e,t,s){return e}notifyElevationSourceChange(){}}const r=1024;class c{constructor(t,s){this._elevationInfo=t,this._alignPointsInFeatures=s,this._alignmentsCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_1__/* .LRUCache */ .q(r),this._cacheVersion=0}async alignCandidates(e,t,s){const n=this._elevationInfo;return null==n||"absolute-height"!==n.mode||n.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,s):(l(e,t,n),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,n,o){const i=new Map;for(const s of e)(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .getOrCreateMapValue */ .tE)(i,s.objectId,d).push(s);const[a,r,c]=this._prepareQuery(i,n),h=await this._alignPointsInFeatures(a,o);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .throwIfAborted */ .Te)(o);if(c!==this._cacheVersion)return this._alignComputedElevationCandidates(e,n,o);this._applyCacheAndResponse(a,h,r);const{drapedObjectIds:u,failedObjectIds:l}=h,p=[];for(const t of e){const{objectId:e}=t;u.has(e)&&"edge"===t.type&&(t.draped=!0),l.has(e)||p.push(t)}return p}_prepareQuery(e,t){const s=[],n=[];for(const[o,i]of e){const e=[];for(const t of i)this._addToQueriesOrCachedResult(o,t.target,e,n),"edge"===t.type&&(this._addToQueriesOrCachedResult(o,t.start,e,n),this._addToQueriesOrCachedResult(o,t.end,e,n));0!==e.length&&s.push({objectId:o,points:e})}return[{spatialReference:t.toJSON(),pointsInFeatures:s},n,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,s,n){const o=u(e,t),i=this._alignmentsCache.get(o);null==i?s.push(t):n.push(new h(t,i))}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:s,failedObjectIds:n},o){for(const r of o)r.apply();let i=0;const a=this._alignmentsCache;for(const{objectId:r,points:c}of e.pointsInFeatures){if(n.has(r)){i+=c.length;continue}const e=!s.has(r);for(const s of c){const n=u(r,s),o=t[i++];s.z=o,e&&a.put(n,o,1)}}}}class h{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function u(e,{x:t,y:s,z:n,spatialReference:o}){return`${e}-${t}-${s}-${n??0}}-wkid:${o?.wkid}`}function l(e,t,s){const{offset:i,unit:a}=s;if(null==i)return;const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getMetersPerVerticalUnitForSR */ .G9)(t),c=i*((0,_symbols_support_unitConversionUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getMetersPerUnit */ .Ao)(a??"meters")/r);for(const n of e)switch(n.type){case"edge":n.start.z+=c,n.end.z+=c;continue;case"vertex":n.target.z+=c;continue}}function d(){return[]}


/***/ }),

/***/ 60397:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{filter(t,n){return n}notifyElevationSourceChange(){}}class n{filter(t,n){const{point:r,distance:c}=t,{z:i}=r;if(!(null!=i))return n;if(0===n.length)return n;const o=s(c),u=this._updateCandidatesTo3D(n,r,o).filter(e);return u.sort(a),u}_updateCandidatesTo3D(t,n,e){for(const r of t)switch(r.type){case"edge":c(r,n,e);continue;case"vertex":o(r,n,e);continue}return t}}function e(t){return t.distance<=1}function r(e=!1){return e?new n:new t}function c(t,n,{x:e,y:r,z:c}){const{start:o,end:s,target:a}=t;t.draped||i(a,n,o,s);const u=(n.x-a.x)/e,d=(n.y-a.y)/r,f=(n.z-a.z)/c;t.distance=Math.sqrt(u*u+d*d+f*f)}function i(t,n,e,r){const c=r.x-e.x,i=r.y-e.y,o=r.z-e.z,s=c*c+i*i+o*o,a=(n.x-e.x)*c+(n.y-e.y)*i+o*(n.z-e.z),u=Math.min(1,Math.max(0,a/s)),d=e.x+c*u,f=e.y+i*u,x=e.z+o*u;t.x=d,t.y=f,t.z=x}function o(t,n,{x:e,y:r,z:c}){const{target:i}=t,o=(n.x-i.x)/e,s=(n.y-i.y)/r,a=(n.z-i.z)/c,u=Math.sqrt(o*o+s*s+a*a);t.distance=u}function s(t){return"number"==typeof t?{x:t,y:t,z:t}:t}function a(t,n){return t.distance-n.distance}


/***/ }),

/***/ 2344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89926);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96274);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t=!1,e){return t?new i(e):new c}class c{async fetch(){return[]}notifySymbologyChange(){}}const r=1024;class i{constructor(t){this._getSymbologyCandidates=t,this._candidatesCache=new _core_LRUCache_js__WEBPACK_IMPORTED_MODULE_2__/* .LRUCache */ .q(r),this._cacheVersion=0}async fetch(e,o){if(0===e.length)return[];const n=[],c=[],r=this._candidatesCache;for(const s of e){const e=a(s),o=r.get(e);if(o)for(const s of o)c.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(s));else n.push(s),r.put(e,[],1)}if(0===n.length)return c;const i=this._cacheVersion,{candidates:h,sourceCandidateIndices:d}=await this._getSymbologyCandidates(n,o);(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .throwIfAborted */ .Te)(o);if(i!==this._cacheVersion)return this.fetch(e,o);const f=[],{length:g}=h;for(let s=0;s<g;++s){const e=h[s],o=a(n[d[s]]),c=r.get(o);c.push(e),r.put(o,c,c.length),f.push((0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(e))}return c.concat(f)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function a(t){switch(t.type){case"vertex":{const{objectId:e,target:s}=t,n=`${e}-vertex-${s.x}-${s.y}-${s.z??0}`;return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_4__/* .numericHash */ .Wm)(n).toString()}case"edge":{const{objectId:e,start:s,end:n}=t,c=`${e}-edge-${s.x}-${s.y}-${s.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_4__/* .numericHash */ .Wm)(c).toString()}default:return""}}


/***/ }),

/***/ 75796:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24121);
/* harmony import */ var _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53830);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n extends _SnappingHint_js__WEBPACK_IMPORTED_MODULE_1__/* .SnappingHint */ .m{constructor(t,s,n){super(s,n),this.point=t}equals(s){return s instanceof n&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_0__.q)(this.point,s.point)}}


/***/ })

};
;