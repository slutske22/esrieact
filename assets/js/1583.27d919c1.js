"use strict";
exports.id = 1583;
exports.ids = [1583];
exports.modules = {

/***/ 41583:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17639);
/* harmony import */ var _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14321);
/* harmony import */ var _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8837);
/* harmony import */ var _rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32876);
/* harmony import */ var _rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20498);
/* harmony import */ var _rasterFunctions_rasterFunctionHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4171);
/* harmony import */ var _rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15995);
/* harmony import */ var _rasterFunctions_stretchUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80989);
/* harmony import */ var _rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(56889);
/* harmony import */ var _rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64318);
/* harmony import */ var _renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95903);
/* harmony import */ var _views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61820);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84698);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(78632);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class N{convertVectorFieldData(r){const t=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r.pixelBlock),s=(0,_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .convertVectorFieldData */ .FI)(t,r.type);return Promise.resolve(null!=s?s.toJSON():null)}computeStatisticsHistograms(r){const t=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r.pixelBlock),s=(0,_rasterFunctions_stretchUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .computeStatisticsHistograms */ .eH)(t);return Promise.resolve(s)}async decode(r){const e=await (0,_rasterFormats_RasterCodec_js__WEBPACK_IMPORTED_MODULE_2__/* .decode */ .D)(r.data,r.options);return e&&e.toJSON()}symbolize(r){r.pixelBlock=_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r.pixelBlock),r.extent=r.extent?_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(r.extent):null;const t=this.symbolizer.symbolize(r);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(r){this.symbolizer=_renderers_support_RasterSymbolizer_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms)}async updateRasterFunction(r){this.rasterFunction=(0,_rasterFunctions_rasterFunctionHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .create */ .vt)(r.rasterFunctionJSON)}async process(r){const t=this.rasterFunction.process({extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(r.extent),primaryPixelBlocks:r.primaryPixelBlocks.map((r=>null!=r?_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r):null)),primaryPixelSizes:r.primaryPixelSizes?.map((r=>null!=r?_geometry_Point_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.fromJSON(r):null)),primaryRasterIds:r.primaryRasterIds});return null!=t?t.toJSON():null}stretch(r){const t=this.symbolizer.simpleStretch(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(t?.toJSON())}estimateStatisticsHistograms(r){const t=(0,_rasterFunctions_stretchUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .estimateStatisticsHistograms */ .f4)(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r.srcPixelBlock));return Promise.resolve(t)}split(r){const t=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .split */ .lD)(_PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel);return t&&t.forEach(((r,e)=>{t.set(e,r?.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(r){const t=r.srcPixelBlocks.map((r=>r?new _PixelBlock_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(r):null)),s=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .mosaic */ .z7)(t,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let a,l=s;return r.coefs&&(l=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .approximateTransform */ .$i)(s,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(a=(0,_rasterFunctions_pixelUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getLocalArithmeticNorthRotations */ .QF)(r.destDimension,r.gcsGrid),l=(0,_rasterFunctions_vectorFieldUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .convertToLocalDirections */ .Y2)(l,r.isUV?"vector-uv":"vector-magdir",a)),{pixelBlock:l?.toJSON(),localNorthDirections:a}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s,indexData:o}=await (0,_views_2d_engine_flow_dataUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .createFlowMesh */ .CW)(r.meshType,r.simulationSettings,t,e.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(e.projectedExtent),s=_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new _geometry_support_GeographicTransformation_js__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .requirePE */ .xh)(t.spatialReference,s.spatialReference,o))&&await (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .load */ .Hh)();const i=e.rasterTransform?(0,_rasterTransforms_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .readTransform */ .l)(e.rasterTransform):null;return (0,_rasterFunctions_rasterProjectionHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .getProjectionOffsetGrid */ .l0)({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:i})}}


/***/ })

};
;