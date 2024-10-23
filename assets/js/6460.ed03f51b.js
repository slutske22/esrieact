"use strict";
exports.id = 6460;
exports.ids = [6460];
exports.modules = {

/***/ 54421:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let s=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.tileStore.tileScheme.spatialReference;return e&&e.toJSON()||null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0})],s.prototype,"supportsTileUpdates",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({constructOnly:!0})],s.prototype,"remoteClient",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({constructOnly:!0})],s.prototype,"service",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],s.prototype,"spatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({constructOnly:!0})],s.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({constructOnly:!0})],s.prototype,"tileStore",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.2d.layers.features.processors.BaseProcessor")],s);const p=s;


/***/ }),

/***/ 16460:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(85569);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98849);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(64442);
/* harmony import */ var _renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27927);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43556);
/* harmony import */ var _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54421);
/* harmony import */ var _support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38955);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class n{constructor(e,t){this.offset=e,this.extent=t}}function d(e){const t=e.key,s=new Map,r=256,o=_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_9__/* .tileSize */ .CQ,d=e.tileInfoView.tileInfo.isWrappable;return s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,-1,-1,d).id,new n([-o,-o],[o-r,o-r,o,o])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,0,-1,d).id,new n([0,-o],[0,o-r,o,o])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,1,-1,d).id,new n([o,-o],[0,o-r,r,o])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,-1,0,d).id,new n([-o,0],[o-r,0,o,o])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,1,0,d).id,new n([o,0],[0,0,r,o])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,-1,1,d).id,new n([-o,o],[o-r,0,o,r])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,0,1,d).id,new n([0,o],[0,0,o,r])),s.set((0,_support_tileUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .getPow2NeighborKey */ .K)(t,1,1,d).id,new n([o,o],[0,0,r,r])),s}let l=class extends _BaseProcessor_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.addHandles([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];if("heatmap"!==r.type)return;(0,_core_accessorSupport_diffUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .diff */ .Ui)(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const i=this._tileKeyToFeatureSets.get(e.key.id);if(i&&null!=t.addOrUpdate&&t.addOrUpdate.hasFeatures&&i.set(t.addOrUpdate.instance,t),t.end){const t=[],i=d(e);this._tileKeyToFeatureSets.forEach(((s,r)=>{if(r===e.key.id)s.forEach((({addOrUpdate:e})=>{e&&t.push(e)}));else if(i.has(r)){const e=i.get(r),[o,a]=e.offset;s.forEach((({addOrUpdate:e})=>{if(e){const s=e.transform(o,a,1,1);t.push(s)}}))}}));const o=(0,_renderers_support_heatmapUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .calculateHeatmapIntensityInfoReaders */ .oQ)(t,this._schema.mesh,512,512),a={tileKey:e.key.id,intensityInfo:o},n=[o.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",a,{...s,transferList:n})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const p=l;


/***/ }),

/***/ 38955:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o,l,c,r){const e=o.clone(),n=1<<e.level,t=e.col+l,w=e.row+c;return r&&t<0?(e.col=t+n,e.world-=1):t>=n?(e.col=t-n,e.world+=1):e.col=t,e.row=w,e}


/***/ })

};
;