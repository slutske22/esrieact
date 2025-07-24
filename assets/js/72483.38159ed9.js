"use strict";
exports.id = 72483;
exports.ids = [72483];
exports.modules = {

/***/ 3912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fA: () => (/* binding */ r),
/* harmony export */   o8: () => (/* binding */ t),
/* harmony export */   vt: () => (/* binding */ n)
/* harmony export */ });
/* unused harmony exports ONES, UNIT_X, UNIT_Y, UNIT_Z, ZEROS, ones, unitX, unitY, unitZ, v, zeros */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function t(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function r(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function e(){return n()}function o(){return r(1,1,1)}function u(){return r(1,0,0)}function c(){return r(0,1,0)}function i(){return r(0,0,1)}const a=e(),f=o(),l=u(),s=c(),_=i(),y=Object.freeze(Object.defineProperty({__proto__:null,ONES:f,UNIT_X:l,UNIT_Y:s,UNIT_Z:_,ZEROS:a,clone:t,create:n,fromValues:r,ones:o,unitX:u,unitY:c,unitZ:i,zeros:e},Symbol.toStringTag,{value:"Module"}));


/***/ }),

/***/ 93321:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PointCloudClassBreaksRenderer_a)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js
var RendererLegendOptions = __webpack_require__(49900);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var a;let p=a=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue",isRequired:!0}}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue",isRequired:!0}}})],p.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],p.prototype,"color",void 0),p=a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const u=p;

;// ../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var n;let PointCloudClassBreaksRenderer_a=n=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new n({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,lang/* clone */.o8)(this.colorClassBreakInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],PointCloudClassBreaksRenderer_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}},type:String})],PointCloudClassBreaksRenderer_a.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:RendererLegendOptions/* default */.A,json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],PointCloudClassBreaksRenderer_a.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[u],json:{write:{isRequired:!0}}})],PointCloudClassBreaksRenderer_a.prototype,"colorClassBreakInfos",void 0),PointCloudClassBreaksRenderer_a=n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudClassBreaksRenderer")],PointCloudClassBreaksRenderer_a);


/***/ }),

/***/ 42422:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ PointCloudRenderer_c)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],i.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],i.prototype,"maxValue",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorModulation")],i);const l=i;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const p=new jsonMap/* JSONMap */.J({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let PointSizeAlgorithm_i=class extends JSONSupport/* default */.A{};(0,tslib_es6._)([(0,property/* property */.MZ)({type:p.apiValues,readOnly:!0,nonNullable:!0,json:{type:p.jsonValues,read:!1,write:{writer:p.write,isRequired:!0}}})],PointSizeAlgorithm_i.prototype,"type",void 0),PointSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],PointSizeAlgorithm_i);const a=PointSizeAlgorithm_i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointSizeFixedSizeAlgorithm_i;let PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=class extends a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new PointSizeFixedSizeAlgorithm_i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudFixedSizeAlgorithm:"fixed-size"})],PointSizeFixedSizeAlgorithm_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],PointSizeFixedSizeAlgorithm_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"useRealWorldSymbolSizes",void 0),PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],PointSizeFixedSizeAlgorithm_p);const PointSizeFixedSizeAlgorithm_l=PointSizeFixedSizeAlgorithm_p;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointSizeSplatAlgorithm_p;let c=PointSizeSplatAlgorithm_p=class extends a{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new PointSizeSplatAlgorithm_p({scaleFactor:this.scaleFactor})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,value:1,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"scaleFactor",void 0),c=PointSizeSplatAlgorithm_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const PointSizeSplatAlgorithm_a=c;

;// ../node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const e={key:"type",base:a,typeMap:{"fixed-size":PointSizeFixedSizeAlgorithm_l,splat:PointSizeSplatAlgorithm_a}};

;// ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const u=(0,jsonMap/* strict */.O)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let PointCloudRenderer_c=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,lang/* clone */.o8)(this.pointSizeAlgorithm),colorModulation:(0,lang/* clone */.o8)(this.colorModulation),pointsPerInch:(0,lang/* clone */.o8)(this.pointsPerInch)}}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:{writer:u.write,isRequired:!0}}})],PointCloudRenderer_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:e,json:{write:!0}})],PointCloudRenderer_c.prototype,"pointSizeAlgorithm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:l,json:{write:!0}})],PointCloudRenderer_c.prototype,"colorModulation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0},nonNullable:!0,type:Number})],PointCloudRenderer_c.prototype,"pointsPerInch",void 0),PointCloudRenderer_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudRenderer")],PointCloudRenderer_c),function(o){o.fieldTransformTypeKebabDict=new jsonMap/* JSONMap */.J({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(PointCloudRenderer_c||(PointCloudRenderer_c={}));


/***/ }),

/***/ 36275:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28902);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(42422);
/* harmony import */ var _support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49900);
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5001);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_1__/* .clone */ .o8)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_5__/* .enumeration */ .e)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:{isRequired:!0}},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_support_RendererLegendOptions_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A],json:{write:{isRequired:!0}}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.renderers.PointCloudStretchRenderer")],d);


/***/ }),

/***/ 12954:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ u)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(28902);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(42422);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/support/RendererLegendOptions.js
var RendererLegendOptions = __webpack_require__(49900);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
;// ../node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let c=l=class extends JSONSupport/* default */.A{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,lang/* clone */.o8)(this.values),color:(0,lang/* clone */.o8)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],json:{write:{isRequired:!0}}})],c.prototype,"values",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],c.prototype,"color",void 0),c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

;// ../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var PointCloudUniqueValueRenderer_l;let u=PointCloudUniqueValueRenderer_l=class extends PointCloudRenderer/* default */.A{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new PointCloudUniqueValueRenderer_l({...this.cloneProperties(),field:(0,lang/* clone */.o8)(this.field),fieldTransformType:(0,lang/* clone */.o8)(this.fieldTransformType),colorUniqueValueInfos:(0,lang/* clone */.o8)(this.colorUniqueValueInfos),legendOptions:(0,lang/* clone */.o8)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.e)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}},type:String})],u.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default */.A.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],json:{write:{isRequired:!0}}})],u.prototype,"colorUniqueValueInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:RendererLegendOptions/* default */.A,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=PointCloudUniqueValueRenderer_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.renderers.PointCloudUniqueValueRenderer")],u);


/***/ }),

/***/ 72483:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86942);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/math/quat.js
var quat = __webpack_require__(42927);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/quatf64.js
var quatf64 = __webpack_require__(38911);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/vec32.js
var vec32 = __webpack_require__(24121);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/libs/gl-matrix-2/factories/vec3f32.js
var vec3f32 = __webpack_require__(3912);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection/projectBuffer.js
var projectBuffer = __webpack_require__(84119);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js + 1 modules
var PointCloudClassBreaksRenderer = __webpack_require__(93321);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var PointCloudStretchRenderer = __webpack_require__(36275);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js + 1 modules
var PointCloudUniqueValueRenderer = __webpack_require__(12954);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js + 2 modules
var I3SBinaryReader = __webpack_require__(44138);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js
var LEPCC = __webpack_require__(68538);
;// ../node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function PointCloudWorkerUtil_i(t,n,l,s){const{rendererJSON:i,isRGBRenderer:u}=t;let c=null,a=null;if(n&&u)c=n;else if(n&&"pointCloudUniqueValueRenderer"===i?.type){a=PointCloudUniqueValueRenderer/* default */.A.fromJSON(i);const e=a.colorUniqueValueInfos;c=new Uint8Array(3*s);const r=d(a.fieldTransformType);for(let o=0;o<s;o++){const t=(r?r(n[o]):n[o])+"";for(let r=0;r<e.length;r++)if(e[r].values.includes(t)){c[3*o]=e[r].color.r,c[3*o+1]=e[r].color.g,c[3*o+2]=e[r].color.b;break}}}else if(n&&"pointCloudStretchRenderer"===i?.type){a=PointCloudStretchRenderer/* default */.A.fromJSON(i);const e=a.stops;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let r=0;r<s;r++){const t=o?o(n[r]):n[r],l=e.length-1;if(t<e[0].value)c[3*r]=e[0].color.r,c[3*r+1]=e[0].color.g,c[3*r+2]=e[0].color.b;else if(t>=e[l].value)c[3*r]=e[l].color.r,c[3*r+1]=e[l].color.g,c[3*r+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(t<e[o].value){const n=(t-e[o-1].value)/(e[o].value-e[o-1].value);c[3*r]=e[o].color.r*n+e[o-1].color.r*(1-n),c[3*r+1]=e[o].color.g*n+e[o-1].color.g*(1-n),c[3*r+2]=e[o].color.b*n+e[o-1].color.b*(1-n);break}}}else if(n&&"pointCloudClassBreaksRenderer"===i?.type){a=PointCloudClassBreaksRenderer/* default */.A.fromJSON(i);const r=a.colorClassBreakInfos;c=new Uint8Array(3*s);const o=d(a.fieldTransformType);for(let e=0;e<s;e++){const t=o?o(n[e]):n[e];for(let o=0;o<r.length;o++)if(t>=r[o].minValue&&t<=r[o].maxValue){c[3*e]=r[o].color.r,c[3*e+1]=r[o].color.g,c[3*e+2]=r[o].color.b;break}}}else c=new Uint8Array(3*s).fill(255);if(l&&a?.colorModulation){const e=a.colorModulation.minValue,r=a.colorModulation.maxValue,o=.3;for(let t=0;t<s;t++){const n=l[t],s=n>=r?1:n<=e?o:o+(1-o)*(n-e)/(r-e);c[3*t]=s*c[3*t],c[3*t+1]=s*c[3*t+1],c[3*t+2]=s*c[3*t+2]}}return c}function u(e,r){if(null==e.encoding||""===e.encoding){const o=(0,I3SBinaryReader/* createGeometryIndexFromSchema */.wH)(r,e);if(null==o.vertexAttributes.position)return;const l=(0,I3SBinaryReader/* createTypedView */.MA)(r,o.vertexAttributes.position),s=o.header.fields,i=[s.offsetX,s.offsetY,s.offsetZ],u=[s.scaleX,s.scaleY,s.scaleZ],c=l.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=l[3*e]*u[0]+i[0],a[3*e+1]=l[3*e+1]*u[1]+i[1],a[3*e+2]=l[3*e+2]*u[2]+i[2];return a}if("lepcc-xyz"===e.encoding)return (0,LEPCC/* decodeXYZ */.Me)(r).result}function PointCloudWorkerUtil_c(e,r,o){return e?.attributeInfo.useElevation?r?a(r,o):null:e?.attributeInfo.storageInfo?(0,I3SBinaryReader/* readBinaryAttribute */.m0)(e.attributeInfo.storageInfo,e.buffer,o,!0):null}function a(e,r){const o=new Float64Array(r);for(let t=0;t<r;t++)o[t]=e[3*t+2];return o}function PointCloudWorkerUtil_f(e,r,o,t,n){const l=e.length/3;let s=0;for(let i=0;i<l;i++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:r}=t[e],o=n[e].values[i];switch(r.type){case"pointCloudValueFilter":{const e="exclude"===r.mode;r.values.includes(o)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=p(r.requiredSetBits),t=p(r.requiredClearBits);(o&e)===e&&0===(o&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&o,t=o>>>4&15,n=t>1,s=1===e,i=e===t;let u=!1;for(const o of r.includedReturns)if("last"===o&&i||"firstOfMany"===o&&s&&n||"lastOfMany"===o&&i&&n||"single"===o&&!n){u=!0;break}u||(l=!1);break}}}l&&(o[s]=i,e[3*s]=e[3*i],e[3*s+1]=e[3*i+1],e[3*s+2]=e[3*i+2],r[3*s]=r[3*i],r[3*s+1]=r[3*i+1],r[3*s+2]=r[3*i+2],s++)}return s}function d(e){switch(e){default:case null:case"none":return e=>e;case"low-four-bit":return e=>15&e;case"high-four-bit":return e=>(240&e)>>4;case"absolute-value":return e=>Math.abs(e);case"modulo-ten":return e=>e%10}}function p(e){let r=0;for(const o of e||[])r|=1<<o;return r}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js + 1 modules
var orientedBoundingBox = __webpack_require__(29709);
;// ../node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class c{transform(t){const e=this._transform(t),o=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&o.push(e.pointIdFilterMap.buffer);for(const a of e.attributes)"buffer"in a.values&&(0,typedArrayUtil/* isArrayBuffer */.mw)(a.values.buffer)&&a.values.buffer!==e.rgb.buffer&&o.push(a.values.buffer);return Promise.resolve({result:e,transferList:o})}_transform(r){const e=u(r.schema,r.geometryBuffer);let o=e.length/3,a=null;const i=new Array,f=PointCloudWorkerUtil_c(r.primaryAttributeData,e,o);null!=r.primaryAttributeData&&f&&i.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:f});const s=PointCloudWorkerUtil_c(r.modulationAttributeData,e,o);null!=r.modulationAttributeData&&s&&i.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:s});let c=PointCloudWorkerUtil_i(r.rendererInfo,f,s,o);if(r.filterInfo&&r.filterInfo.length>0&&null!=r.filterAttributesData){const f=r.filterAttributesData.filter(arrayUtils/* isSome */.Ru).map((t=>{const r=PointCloudWorkerUtil_c(t,e,o),a={attributeInfo:t.attributeInfo,values:r};return i.push(a),a}));a=new Uint32Array(o),o=PointCloudWorkerUtil_f(e,c,a,r.filterInfo,f)}for(const t of r.userAttributesData){const r=PointCloudWorkerUtil_c(t,e,o);i.push({attributeInfo:t.attributeInfo,values:r})}3*o<c.length&&(c=new Uint8Array(c.buffer.slice(0,3*o))),I(e,o,r.elevationOffset);const A=h(e,o,orientedBoundingBox/* Obb */.ab.fromData(r.obbData),SpatialReference/* default */.A.fromJSON(r.inSR),SpatialReference/* default */.A.fromJSON(r.outSR));return{obbData:r.obbData,points:A,rgb:c,attributes:i,pointIdFilterMap:a}}}function h(t,r,o,n,u){if(!(0,projectBuffer.projectBuffer)(t,n,0,t,u,0,r))throw new Error("Can't reproject");const l=(0,vec3f32/* clone */.o8)(o.center),m=(0,vec3f32/* create */.vt)(),b=(0,vec3f32/* create */.vt)(),p=(0,vec3f32/* clone */.o8)(o.halfSize);(0,quat/* conjugate */.Xr)(A,o.quaternion);const c=new Float32Array(3*r);for(let e=0;e<r;e++){let r=3*e;m[0]=t[r]-l[0],m[1]=t[r+1]-l[1],m[2]=t[r+2]-l[2],(0,vec32.v)(b,m,A),p[0]=Math.max(p[0],Math.abs(b[0])),p[1]=Math.max(p[1],Math.abs(b[1])),p[2]=Math.max(p[2],Math.abs(b[2])),c[r++]=m[0],c[r++]=m[1],c[r]=m[2]}return o.halfSize=p,c}function I(t,r,e){if(0!==e)for(let o=0;o<r;o++)t[3*o+2]+=e}const A=(0,quatf64/* create */.vt)();function g(){return new c}


/***/ })

};
;