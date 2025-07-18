"use strict";
exports.id = 9994;
exports.ids = [9994];
exports.modules = {

/***/ 34538:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85569);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24793);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65667);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=0,l=class extends((0,_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_5__/* .JSONSupportMixin */ .Te)((0,_core_Clonable_js__WEBPACK_IMPORTED_MODULE_3__/* .ClonableMixin */ .O)((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_4__/* .IdentifiableMixin */ .sA)(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${n++}`,this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSome */ .Ru)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String})],l.prototype,"title",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({constructOnly:!0})],l.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({clonable:!1,value:null})],l.prototype,"parent",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],l.prototype,"isEditable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],l.prototype,"requiredPropertiesForEditing",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.analysis.Analysis")],l);const c=l;


/***/ }),

/***/ 39994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DimensionLayer_d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/Analysis.js
var Analysis = __webpack_require__(34538);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(96220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(89882);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends((0,JSONSupport/* JSONSupportMixin */.Te)(Clonable/* Clonable */.P)){constructor(o){super(o),this.type="simple",this.color=new Color/* default */.A("black"),this.lineSize=2,this.fontSize=10,this.textColor=new Color/* default */.A("black"),this.textBackgroundColor=new Color/* default */.A([255,255,255,.6])}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,nonNullable:!0,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],c.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,nonNullable:!0,range:{min:(0,screenUtils/* px2pt */.PN)(1)},json:{write:{isRequired:!0}}})],c.prototype,"lineSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"fontSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,nonNullable:!0,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],c.prototype,"textColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,nonNullable:!0,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],c.prototype,"textBackgroundColor",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.DimensionSimpleStyle")],c);const a=c;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
;// ../node_modules/@arcgis/core/analysis/dimensionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct"}(t||(t={}));const r=[t.Horizontal,t.Vertical,t.Direct];

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(17505);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
;// ../node_modules/@arcgis/core/analysis/LengthDimension.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let l=class extends((0,JSONSupport/* JSONSupportMixin */.Te)(Clonable/* Clonable */.P)){constructor(o){super(o),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=t.Direct,this.offset=0,this.orientation=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["length"],json:{write:{isRequired:!0}}})],l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:!0}})],l.prototype,"startPoint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:!0}})],l.prototype,"endPoint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"measureType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],l.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,cast/* cast */.w)((o=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(o),0,!0)))],l.prototype,"orientation",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LengthDimension")],l);const u=l;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js
var projection = __webpack_require__(97303);
;// ../node_modules/@arcgis/core/analysis/DimensionAnalysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const d=Collection/* default */.A.ofType(u);let y=class extends Analysis/* default */.A{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),reactiveUtils/* syncAndInitial */.pc))}get dimensions(){return this._get("dimensions")||new d}set dimensions(e){this._set("dimensions",(0,collectionUtils/* referenceSetter */.V)(e,this.dimensions,d))}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get requiredPropertiesForEditing(){return this.dimensions.reduce(((e,t)=>(e.push(t.startPoint,t.endPoint),e)),[])}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return{pending:null,extent:null};const t=[];for(const s of this.dimensions)null!=s.startPoint&&t.push(s.startPoint),null!=s.endPoint&&t.push(s.endPoint);const n=(0,projection.projectOrLoadMany)(t,e);if(null!=n.pending)return{pending:n.pending,extent:null};let o=null;return null!=n.geometries&&(o=n.geometries.reduce(((e,t)=>null==e?null!=t?Extent/* default */.A.fromPoint(t):null:null!=t?e.union(Extent/* default */.A.fromPoint(t)):e),null)),{pending:null,extent:o}}clear(){this.dimensions.removeAll()}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["dimension"]})],y.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:collectionUtils/* castForReferenceSetter */.H,type:d,nonNullable:!0})],y.prototype,"dimensions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],y.prototype,"style",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,readOnly:!0})],y.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],y.prototype,"requiredPropertiesForEditing",null),y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.DimensionAnalysis")],y);const f=y;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
;// ../node_modules/@arcgis/core/layers/DimensionLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let DimensionLayer_u=class extends((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new f,this.opacity=1,e){const{source:s,style:r}=e;s&&r&&(s.style=r)}}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.source),((e,s)=>{null!=s&&s.parent===this&&(s.parent=null),null!=e&&(e.parent=this)}),reactiveUtils/* syncAndInitial */.pc)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new f)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,s,r,t){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>null!=e&&null!=s)).map((e=>e.toJSON(t))).toJSON()}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],DimensionLayer_u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISDimensionLayer"]})],DimensionLayer_u.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0})],DimensionLayer_u.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],DimensionLayer_u.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],DimensionLayer_u.prototype,"style",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],DimensionLayer_u.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],DimensionLayer_u.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],DimensionLayer_u.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(u),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],DimensionLayer_u.prototype,"dimensions",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","dimensions")],DimensionLayer_u.prototype,"writeDimensions",null),DimensionLayer_u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.DimensionLayer")],DimensionLayer_u);const DimensionLayer_d=DimensionLayer_u;


/***/ })

};
;