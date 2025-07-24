"use strict";
exports.id = 20090;
exports.ids = [20090];
exports.modules = {

/***/ 70835:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ o),
/* harmony export */   b: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=50,t=5;


/***/ }),

/***/ 60143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ge: () => (/* binding */ l),
/* harmony export */   WT: () => (/* binding */ u),
/* harmony export */   XV: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97066);
/* harmony import */ var _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42238);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_geodesicUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22256);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87926);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96082);
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(70835);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function a(e,t){return Math.log(e)/Math.log(t)}function l(e,t,r){const o=1===e?10:e;return o**(r?Math.round(a(_constants_js__WEBPACK_IMPORTED_MODULE_8__/* .pixelsPerCell */ .X/t,o)):0)}function f(e){const{isGeographic:t,isWebMercator:r}=e;return!t&&!r}function u(c,a,l){const u="number"==typeof c?null:c,y=l??u?.spatialReference;if(null==y||!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isValid */ .fn)(y)||f(y))return (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerUnitForSR */ .GA)(y);let g=u?.x??c,j=u?.y??a;const h=1/Math.sqrt(2);let M=g+h,x=j+h;const{isWebMercator:R,isGeographic:U}=y;let b=U&&!(0,_geometry_support_geodesicUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .isSupported */ .TT)(y)?_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84:y;if(R){let e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:g,y:j,spatialReference:y});(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .webMercatorToGeographic */ .ci)(e,!0,e),g=e.x,j=e.y,e=new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A({x:M,y:x,spatialReference:y}),(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .webMercatorToGeographic */ .ci)(e,!0,e),M=e.x,x=e.y,b=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.WGS84}const w=new _geometry_Polyline_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A({paths:[[[g,j],[M,x]]],spatialReference:b}),G=(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .straightLineDensify */ .XX)(w,10);let W;try{[W]=(0,_geometry_support_geodesicUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .geodesicLengths */ .l1)([G],"meters")}catch{return (0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerUnitForSR */ .GA)(y)}return W}


/***/ }),

/***/ 20090:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridSnappingEngine: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92504);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92976);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63863);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(24121);
/* harmony import */ var _geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68490);
/* harmony import */ var _geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(65231);
/* harmony import */ var _geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61781);
/* harmony import */ var _2d_grid_constants_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(70835);
/* harmony import */ var _2d_grid_gridUtils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60143);
/* harmony import */ var _sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(97847);
/* harmony import */ var _snappingUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(61851);
/* harmony import */ var _candidates_IntersectionSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(62627);
/* harmony import */ var _candidates_LineSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(59250);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let w=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.options=null}destroy(){this._set("options",null)}get grid(){return this.view.grid}get effectiveViewRotation(){return this.grid?.rotateWithMap?0:(0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .deg2rad */ .kU)(this.view.rotation??0)}get gridRotation(){return (0,_core_mathUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .deg2rad */ .kU)(this.grid?.rotation??0)}get gridCenter(){const{spatialReference:t,grid:e}=this;if(!e||!t||!(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_10__.isLoadedOrLoadFor)(e.center.spatialReference,t))return null;try{const r=(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_10__.project)(e.center,t),i=t.isWrappable&&null!=this.view?.center?(0,_geometry_support_normalizeUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getClosestDenormalizedXToReference */ .O7)(r.x,this.view.center.x,t):r.x;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .vt)(i,r.y,r.z)}catch(i){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.",i),null}}get offsetScaleFactor(){const{pixelsPerStride:t,grid:e}=this;if(!e||!t)return 1;const{majorLineInterval:r,dynamicScaling:i}=e;return r<1?null:(0,_2d_grid_gridUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .getScaleFactor */ .Ge)(r,t,i)}get spatialReference(){return this.view.spatialReference}get gridMetersPerStride(){const{grid:t}=this;return t?(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .convertUnit */ .oU)(t.spacing,t.units,"meters"):null}get viewMetersPerPixel(){const{viewMetersPerSRUnit:t}=this;return null==t?null:t*(0,_geometry_support_scaleUtils_js__WEBPACK_IMPORTED_MODULE_12__/* .getResolutionForScale */ .i1)(this.view.scale,this.view.spatialReference)}get viewMetersPerSRUnit(){const{spatialReference:t}=this.view;return this.gridCenter?(0,_2d_grid_gridUtils_js__WEBPACK_IMPORTED_MODULE_13__/* .measureMetersPerUnitAtReferencePoint */ .WT)(this.gridCenter[0],this.gridCenter[1],t):null}get pixelsPerStride(){const{gridMetersPerStride:t,viewMetersPerPixel:e}=this;return e&&t?t/e:null}get updating(){return null!=this.grid&&null!=this.spatialReference&&null==this.viewMetersPerSRUnit}async fetchCandidates(t,e,r){const{options:i,view:n}=this;if(!i?.effectiveGridEnabled||!n.grid||r.feature?.attributes&&_snappingUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .gridPlacementGraphicSymbol */ .io in r.feature.attributes)return[];const o=r.coordinateHelper.arrayToPoint(t),s=i.distance*("touch"===r.pointer?i.touchSensitivityMultiplier:1);return this.fetchCandidatesSync(o,s)}fetchCandidatesSync(t,e){const r=[],{grid:i,effectiveViewRotation:n,gridRotation:o,gridCenter:s,viewMetersPerPixel:a,viewMetersPerSRUnit:c,offsetScaleFactor:u,spatialReference:g,gridMetersPerStride:f,pixelsPerStride:m}=this;if(!(i&&a&&c&&s&&g&&u&&f&&m))return r;if(!i.dynamicScaling&&m<_2d_grid_constants_js__WEBPACK_IMPORTED_MODULE_18__/* .minimumPixelsPerStrideForDisplayWhenScalingOff */ .b)return r;if(!(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_10__.isLoadedOrLoadFor)(t.spatialReference,g))return r;const S=(0,_geometry_projectionUtils_js__WEBPACK_IMPORTED_MODULE_10__.project)(t,g),w=(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .vt)(S.x,S.y,S.z),x=P(w,-o,s,-n),C=f/c*u,U=j(x,C,s),{shouldSnapX:b,shouldSnapY:L}=R(U,x,e,a,c);if(!b&&!L)return[];const z=(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .vt)((b?U:x)[0],(L?U:x)[1]),E=P(z,o,s,n),F=P(U,o,s,n);if(L){const t=M(U,x,C,"y"),e=P(t,o,s,n);r.push(new _candidates_LineSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_17__/* .LineSnappingCandidate */ .o({lineStart:F,lineEnd:e,targetPoint:E,isDraped:!1}))}if(b){const t=M(U,x,C,"x"),e=P(t,o,s,n);r.push(new _candidates_LineSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_17__/* .LineSnappingCandidate */ .o({lineStart:F,lineEnd:e,targetPoint:E,isDraped:!1}))}return b&&L&&r.push(new _candidates_IntersectionSnappingCandidate_js__WEBPACK_IMPORTED_MODULE_16__/* .IntersectionSnappingCandidate */ .N(E,r[0],r[1],!1)),r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({constructOnly:!0})],w.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"options",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"grid",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"effectiveViewRotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"gridRotation",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"gridCenter",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"offsetScaleFactor",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"gridMetersPerStride",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"viewMetersPerPixel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"viewMetersPerSRUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"pixelsPerStride",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],w.prototype,"updating",null),w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.views.interactive.snapping.GridSnappingEngine")],w);const P=(t,e,r,i)=>{const n=(0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .createWritable */ .Hh)(t[0],t[1],t[2]);return (0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__.K)(n,(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_9__.K)(n,n,r,e),r,i)},j=(t,e,r)=>{const i=(t[0]-r[0])/e,n=(t[1]-r[1])/e,o=Math.trunc(i),s=Math.trunc(n),a=Math.round(i%1),p=Math.round(n%1),l=r[0]+(o+a)*e,c=r[1]+(s+p)*e;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .vt)(l,c)},R=(t,e,r,i,n)=>{if(i<=0)return{shouldSnapX:!1,shouldSnapY:!1};const o=(t[0]-e[0])/i,s=(t[1]-e[1])/i;return{shouldSnapX:Math.abs(o*n)<r,shouldSnapY:Math.abs(s*n)<r}},M=(t,e,r,i)=>{if("y"===i){const i=e[0]>t[0]?1:-1;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .vt)(t[0]+r*i,t[1])}const n=e[1]>t[1]?1:-1;return (0,_sketch_normalizedPoint_js__WEBPACK_IMPORTED_MODULE_14__/* .create */ .vt)(t[0],t[1]+r*n)};


/***/ })

};
;