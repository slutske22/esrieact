"use strict";
exports.id = 39994;
exports.ids = [39994];
exports.modules = {

/***/ 38682:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
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
;// ../node_modules/@arcgis/core/analysis/support/AnalysisOriginWebScene.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends Clonable/* default */.A{constructor(r){super(r),this.type="web-scene"}equals(r){return this.type===r.type}};(0,tslib_es6._)([(0,property/* property */.MZ)()],t.prototype,"type",void 0),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.support.AnalysisOriginWebScene")],t);const p=t;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Identifiable.js
var Identifiable = __webpack_require__(65667);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/analysis/Analysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Analysis_p=0,l=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A.ClonableMixin(Identifiable/* default */.A.IdentifiableMixin(Accessor/* default */.A)))){constructor(e){super(e),this.id=`${Date.now().toString(16)}-analysis-${Analysis_p++}`,this.origin=null}get parent(){return this._get("parent")}set parent(e){const s=this.parent;if(null!=s)switch(s.type){case"line-of-sight":case"dimension":case"viewshed":s.releaseAnalysis(this);break;case"2d":case"3d":s.analyses.includes(this)&&s.analyses.remove(this)}this._set("parent",e)}equals(e){return!0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,constructOnly:!0,clonable:!1})],l.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,value:null})],l.prototype,"parent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{"web-scene":p}}})],l.prototype,"origin",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.Analysis")],l);


/***/ }),

/***/ 39994:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/Analysis.js + 1 modules
var Analysis = __webpack_require__(38682);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A)){constructor(o){super(o),this.type="simple",this.color=new Color/* default */.A("black"),this.lineSize=2,this.fontSize=10,this.textColor=new Color/* default */.A("black"),this.textBackgroundColor=new Color/* default */.A([255,255,255,.6])}equals(o){return this===o||this.color.equals(o.color)&&this.lineSize===o.lineSize&&this.fontSize===o.fontSize&&this.textColor.equals(o.textColor)&&this.textBackgroundColor.equals(o.textBackgroundColor)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["simple"],readOnly:!0,json:{write:{isRequired:!0}}})],a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,nonNullable:!0,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],a.prototype,"color",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,nonNullable:!0,range:{min:(0,screenUtils/* px2pt */.PN)(1)},json:{write:{isRequired:!0}}})],a.prototype,"lineSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,cast:screenUtils/* toPt */.cr,nonNullable:!0,json:{write:{isRequired:!0}}})],a.prototype,"fontSize",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,nonNullable:!0,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],a.prototype,"textColor",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Color/* default */.A,nonNullable:!0,json:{type:[ensureType/* Integer */.jz],write:{isRequired:!0}}})],a.prototype,"textBackgroundColor",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.DimensionSimpleStyle")],a);

;// ../node_modules/@arcgis/core/analysis/dimensionUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var dimensionUtils_t;!function(t){t.Horizontal="horizontal",t.Vertical="vertical",t.Direct="direct"}(dimensionUtils_t||(dimensionUtils_t={}));const r=[dimensionUtils_t.Horizontal,dimensionUtils_t.Vertical,dimensionUtils_t.Direct];

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Cyclical.js
var Cyclical = __webpack_require__(17505);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
;// ../node_modules/@arcgis/core/analysis/LengthDimension.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends(JSONSupport/* default */.A.JSONSupportMixin(Clonable/* default */.A)){constructor(t){super(t),this.type="length",this.startPoint=null,this.endPoint=null,this.measureType=dimensionUtils_t.Direct,this.offset=0,this.orientation=0}get valid(){return null!=this.startPoint&&null!=this.endPoint}equals(t){return this===t||(0,maybe/* equalsMaybe */.CM)(this.startPoint,t.startPoint)&&(0,maybe/* equalsMaybe */.CM)(this.endPoint,t.endPoint)&&this.measureType===t.measureType&&this.offset===t.offset&&this.orientation===t.orientation}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["length"],json:{write:{isRequired:!0}}})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:{isRequired:!0}}})],c.prototype,"startPoint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:{isRequired:!0}}})],c.prototype,"endPoint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:r,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"measureType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}})],c.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,cast/* cast */.w)((t=>Cyclical/* cyclicalDegrees */.ie.normalize((0,ensureType/* ensureNumber */.GB)(t),0,!0)))],c.prototype,"orientation",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],c.prototype,"valid",null),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LengthDimension")],c);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projectionUtils.js + 2 modules
var projectionUtils = __webpack_require__(68490);
;// ../node_modules/@arcgis/core/analysis/DimensionAnalysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const y=Collection/* default */.A.ofType(c);let f=class extends Analysis/* default */.A{constructor(e){super(e),this.type="dimension",this.style=new a,this.extent=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._computeExtent()),(e=>{null==e?.pending&&this._set("extent",null!=e?e.extent:null)}),reactiveUtils/* syncAndInitial */.pc))}get dimensions(){return this._get("dimensions")||new y}set dimensions(e){this._set("dimensions",(0,collectionUtils/* referenceSetter */.V)(e,this.dimensions,y))}get spatialReference(){for(const e of this.dimensions){if(null!=e.startPoint)return e.startPoint.spatialReference;if(null!=e.endPoint)return e.endPoint.spatialReference}return null}get valid(){return this.dimensions.every((e=>e.valid))}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){const e=this.spatialReference;if(null==e)return{pending:null,extent:null};const t=[];for(const o of this.dimensions)null!=o.startPoint&&t.push(o.startPoint),null!=o.endPoint&&t.push(o.endPoint);const n=(0,projectionUtils.projectOrLoadMany)(t,e);if(null!=n.pending)return{pending:n.pending,extent:null};let s=null;return null!=n.geometries&&(s=n.geometries.reduce(((e,t)=>null==e?null!=t?Extent/* default */.A.fromPoint(t):null:null!=t?e.union(Extent/* default */.A.fromPoint(t)):e),null)),{pending:null,extent:s}}clear(){this.dimensions.removeAll()}equals(e){return this===e||super.equals(e)&&this.style.equals(e.style)&&(0,arrayUtils/* equals */.aI)(this.dimensions.toArray(),e.dimensions.toArray(),((e,t)=>e.equals(t)))}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["dimension"]})],f.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:collectionUtils/* castForReferenceSetter */.H,type:y,nonNullable:!0})],f.prototype,"dimensions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{simple:a}},nonNullable:!0})],f.prototype,"style",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,readOnly:!0})],f.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"valid",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.DimensionAnalysis")],f);

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
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let u=class extends((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))){constructor(e){if(super(e),this.type="dimension",this.operationalLayerType="ArcGISDimensionLayer",this.source=new f,this.opacity=1,e){const{source:s,style:t}=e;s&&t&&(s.style=t)}}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.source),((e,s)=>{null!=s&&s.parent===this&&(s.parent=null),null!=e&&(e.parent=this)}),reactiveUtils/* syncAndInitial */.pc)])}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get style(){return this.source.style}set style(e){this.source.style=e}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new f)}get analysis(){return this.source}set analysis(e){this.source=e}get dimensions(){return this.source.dimensions}set dimensions(e){this.source.dimensions=e}writeDimensions(e,s,t,r){s.dimensions=e.filter((({startPoint:e,endPoint:s})=>null!=e&&null!=s)).toJSON(r)}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISDimensionLayer"]})],u.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0})],u.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],u.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:{key:"type",base:null,typeMap:{simple:a}},json:{write:{ignoreOrigin:!0}}})],u.prototype,"style",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],u.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],u.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],u.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(c),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],u.prototype,"dimensions",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-scene","dimensions")],u.prototype,"writeDimensions",null),u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.DimensionLayer")],u);const d=u;


/***/ })

};
;