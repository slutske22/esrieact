"use strict";
exports.id = 84547;
exports.ids = [84547];
exports.modules = {

/***/ 22870:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _GeographicTransformationStep_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93372);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var p;let c=p=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.steps=[]}getInverse(){const r=new p;for(let s=this.steps.length-1;s>=0;s--){const o=this.steps[s];r.steps.push(o.getInverse())}return r}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_GeographicTransformationStep_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A],nonNullable:!0})],c.prototype,"steps",void 0),c=p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.operators.support.GeographicTransformation")],c);


/***/ }),

/***/ 93372:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var t;let i=t=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(r){super(r),this.isInverse=!1,this.wkt=null,this.wkid=null}getInverse(){return new t({isInverse:!this.isInverse,wkid:this.wkid,wkt:this.wkt})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"isInverse",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"wkt",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],i.prototype,"wkid",void 0),i=t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.geometry.operators.support.GeographicTransformationStep")],i);


/***/ }),

/***/ 84547:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ N)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/operators/support/GeographicTransformation.js
var GeographicTransformation = __webpack_require__(22870);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/PixelBlock.js
var PixelBlock = __webpack_require__(71509);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterFormats/RasterCodec.js + 3 modules
var RasterCodec = __webpack_require__(32876);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterFunctions/pixelUtils.js
var pixelUtils = __webpack_require__(20498);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterFunctions/rasterFunctionHelper.js + 60 modules
var rasterFunctionHelper = __webpack_require__(38712);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterFunctions/rasterProjectionHelper.js
var rasterProjectionHelper = __webpack_require__(15995);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterFunctions/stretchUtils.js
var stretchUtils = __webpack_require__(80989);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterFunctions/vectorFieldUtils.js
var vectorFieldUtils = __webpack_require__(56889);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterTransforms/GCSShiftTransform.js
var GCSShiftTransform = __webpack_require__(66556);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterTransforms/BaseRasterTransform.js
var BaseRasterTransform = __webpack_require__(65891);
;// ../node_modules/@arcgis/core/layers/support/rasterTransforms/IdentityTransform.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var e;let a=e=class extends BaseRasterTransform/* default */.A{constructor(){super(...arguments),this.type="identity"}clone(){return new e}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({IdentityXform:"identity"})],a.prototype,"type",void 0),a=e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.rasterTransforms.IdentityTransform")],a);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/rasterTransforms/PolynomialTransform.js
var PolynomialTransform = __webpack_require__(90073);
;// ../node_modules/@arcgis/core/layers/support/rasterTransforms/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const n={GCSShiftXform:GCSShiftTransform/* default */.A,IdentityXform:a,PolynomialXform:PolynomialTransform/* default */.A};function f(r){const o=r?.type;if(!o)return null;const t=n[r?.type];if(t){const o=new t;return o.read(r),o}return null}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/RasterSymbolizer.js
var RasterSymbolizer = __webpack_require__(95903);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/engine/flow/dataUtils.js
var dataUtils = __webpack_require__(61820);
;// ../node_modules/@arcgis/core/layers/support/RasterWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class N{convertVectorFieldData(r){const e=PixelBlock/* default */.A.fromJSON(r.pixelBlock),t=(0,vectorFieldUtils/* convertVectorFieldData */.FI)(e,r.type);return Promise.resolve(null!=t?t.toJSON():null)}computeStatisticsHistograms(r){const e=PixelBlock/* default */.A.fromJSON(r.pixelBlock),t=(0,stretchUtils/* computeStatisticsHistograms */.eH)(e);return Promise.resolve(t)}async decode(r){const e=await (0,RasterCodec/* decode */.D)(r.data,r.options);return e&&e.toJSON()}symbolize(e){e.pixelBlock=PixelBlock/* default */.A.fromJSON(e.pixelBlock),e.extent=e.extent?Extent/* default */.A.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(null!=t?t.toJSON():null)}async updateSymbolizer(r){this.symbolizer=RasterSymbolizer/* default */.A.fromJSON(r.symbolizerJSON),r.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=r.histograms)}async updateRasterFunction(r){this.rasterFunction=(0,rasterFunctionHelper/* create */.vt)(r.rasterFunctionJSON)}async process(t){const o=this.rasterFunction.process({extent:Extent/* default */.A.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map((r=>null!=r?PixelBlock/* default */.A.fromJSON(r):null)),primaryPixelSizes:t.primaryPixelSizes?.map((r=>null!=r?Point/* default */.A.fromJSON(r):null)),primaryRasterIds:t.primaryRasterIds});return null!=o?o.toJSON():null}stretch(r){const e=this.symbolizer.simpleStretch(PixelBlock/* default */.A.fromJSON(r.srcPixelBlock),r.stretchParams);return Promise.resolve(e?.toJSON())}estimateStatisticsHistograms(r){const e=(0,stretchUtils/* estimateStatisticsHistograms */.f4)(PixelBlock/* default */.A.fromJSON(r.srcPixelBlock));return Promise.resolve(e)}split(r){const e=(0,pixelUtils/* split */.lD)(PixelBlock/* default */.A.fromJSON(r.srcPixelBlock),r.tileSize,r.maximumPyramidLevel??0,!1===r.useBilinear);return e&&e.forEach(((r,t)=>{e.set(t,r?.toJSON())})),Promise.resolve(e)}clipTile(r){const e=PixelBlock/* default */.A.fromJSON(r.pixelBlock),t=(0,pixelUtils/* clipTile */.J$)({...r,pixelBlock:e});return Promise.resolve(t?.toJSON())}async mosaicAndTransform(r){const e=r.srcPixelBlocks.map((r=>r?new PixelBlock/* default */.A(r):null)),t=(0,pixelUtils/* mosaic */.z7)(e,r.srcMosaicSize,{blockWidths:r.blockWidths,alignmentInfo:r.alignmentInfo,clipOffset:r.clipOffset,clipSize:r.clipSize});let o,i=t;return r.coefs&&(i=(0,pixelUtils/* approximateTransform */.$i)(t,r.destDimension,r.coefs,r.sampleSpacing,r.interpolation)),r.projectDirections&&r.gcsGrid&&(o=(0,pixelUtils/* getLocalArithmeticNorthRotations */.QF)(r.destDimension,r.gcsGrid),i=(0,vectorFieldUtils/* convertToLocalDirections */.Y2)(i,r.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:i?.toJSON(),localNorthDirections:o}}async createFlowMesh(r,e){const t={data:new Float32Array(r.flowData.buffer),mask:new Uint8Array(r.flowData.maskBuffer),width:r.flowData.width,height:r.flowData.height},{vertexData:s,indexData:o}=await (0,dataUtils/* createFlowMesh */.CW)(r.meshType,r.simulationSettings,t,e.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const s=Extent/* default */.A.fromJSON(e.projectedExtent),o=Extent/* default */.A.fromJSON(e.srcBufferExtent);let i=null;e.datumTransformationSteps?.length&&(i=new GeographicTransformation/* default */.A({steps:e.datumTransformationSteps})),await (0,rasterProjectionHelper/* load */.Hh)();const n=e.rasterTransform?f(e.rasterTransform):null;return (0,rasterProjectionHelper/* getProjectionOffsetGrid */.l0)({...e,projectedExtent:s,srcBufferExtent:o,datumTransformation:i,rasterTransform:n})}}


/***/ })

};
;