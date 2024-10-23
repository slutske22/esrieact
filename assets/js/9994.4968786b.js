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

/***/ 35775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  P: () => (/* binding */ m),
  L: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/defaultsStoreUtils.js
var defaultsStoreUtils = __webpack_require__(52700);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(94255);
;// ../node_modules/@arcgis/core/core/accessorSupport/MultiOriginStore.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class MultiOriginStore_r{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(PropertyOrigin/* OriginIdNum */.Qg),this._values=new Map,this.multipleOriginsSupported=!0}clone(i){const o=new MultiOriginStore_r,n=this._originStores[PropertyOrigin/* OriginId */.Gr.DEFAULTS];n&&n.forEach(((s,r)=>{o.set(r,(0,lang/* clone */.o8)(s),PropertyOrigin/* OriginId */.Gr.DEFAULTS)}));for(let r=PropertyOrigin/* OriginId */.Gr.SERVICE;r<PropertyOrigin/* OriginIdNum */.Qg;r++){const s=this._originStores[r];s&&s.forEach(((s,e)=>{i&&i.has(e)||o.set(e,(0,lang/* clone */.o8)(s),r)}))}return o}get(t,s){const e=void 0===s?this._values:this._originStores[s];return e?e.get(t):void 0}keys(t){const s=null==t?this._values:this._originStores[t];return s?[...s.keys()]:[]}set(t,s,r=PropertyOrigin/* OriginId */.Gr.USER){let i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,s),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){const e=this._values.get(t);return this._values.set(t,s),this._propertyOriginMap.set(t,r),e!==s}return!1}delete(t,s=PropertyOrigin/* OriginId */.Gr.USER){const r=this._originStores[s];if(!r)return;const i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===s){this._values.delete(t);for(let e=s-1;e>=0;e--){const s=this._originStores[e];if(s&&s.has(t)){this._values.set(t,s.get(t)),this._propertyOriginMap.set(t,e);break}}}return i}has(t,s){const e=void 0===s?this._values:this._originStores[s];return!!e&&e.has(t)}revert(t,s){for(;s>0&&!this.has(t,s);)--s;const e=this._originStores[s],r=e?.get(t),i=this._values.get(t);return this._values.set(t,r),this._propertyOriginMap.set(t,s),i!==r}originOf(t){return this._propertyOriginMap.get(t)||PropertyOrigin/* OriginId */.Gr.DEFAULTS}forEach(t){this._values.forEach(t)}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/utils.js
var utils = __webpack_require__(55135);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/core/ReadOnlyMultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=t=>{let u=class extends t{constructor(...r){super(...r);const t=(0,utils/* getProperties */.oY)(this),e=t.store,i=new MultiOriginStore_r;t.store=i,(0,defaultsStoreUtils/* setupConstructedDefaults */.k)(t,e,i)}read(r,t){(0,read/* read */.L)(this,r,t)}getAtOrigin(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t);if("string"==typeof r)return s.get(r,o);const i={};return r.forEach((r=>{i[r]=s.get(r,o)})),i}originOf(r){return (0,PropertyOrigin/* idToName */.OL)(this.originIdOf(r))}originIdOf(r){return a(this).originOf(r)}revert(r,t){const s=a(this),o=(0,PropertyOrigin/* nameToId */.aB)(t),i=(0,utils/* getProperties */.oY)(this);let c;c="string"==typeof r?"*"===r?s.keys(o):[r]:r,c.forEach((r=>{i.invalidate(r),s.revert(r,o),i.commit(r)}))}};return u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],u),u};function a(r){return (0,utils/* getProperties */.oY)(r).store}let f=class extends(u(Accessor/* default */.A)){};f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],f);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/get.js
var get = __webpack_require__(45066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const l=t=>{let s=class extends t{constructor(...r){super(...r)}clear(r,t="user"){return O(this).delete(r,(0,PropertyOrigin/* nameToId */.aB)(t))}write(r,t){return (0,write/* write */.M)(this,r=r||{},t),r}setAtOrigin(r,t,s){(0,utils/* getProperties */.oY)(this).setAtOrigin(r,t,(0,PropertyOrigin/* nameToId */.aB)(s))}removeOrigin(r){const t=O(this),s=(0,PropertyOrigin/* nameToId */.aB)(r),e=t.keys(s);for(const o of e)t.originOf(o)===s&&t.set(o,t.get(o,s),PropertyOrigin/* OriginId */.Gr.USER)}updateOrigin(r,t){const s=O(this),i=(0,PropertyOrigin/* nameToId */.aB)(t),c=(0,get/* get */.Jt)(this,r);for(let e=i+1;e<PropertyOrigin/* OriginIdNum */.Qg;++e)s.delete(r,e);s.set(r,c,i)}toJSON(r){return this.write({},r)}};return s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.WriteableMultiOriginJSONSupport")],s),s.prototype.toJSON.isDefaultToJSON=!0,s};function O(r){return (0,utils/* getProperties */.oY)(r).store}const m=t=>{let e=class extends(l(u(t))){constructor(...r){super(...r)}};return e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],e),e};let S=class extends(m(Accessor/* default */.A)){};S=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.core.MultiOriginJSONSupport")],S);


/***/ }),

/***/ 73324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ a)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const a=(a=>a)(["operational-layers","basemap","ground"]);


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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js + 1 modules
var projection = __webpack_require__(13484);
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


/***/ }),

/***/ 41506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ u)
});

// UNUSED EXPORTS: isOperationalLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/read.js
var read = __webpack_require__(83312);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/write.js
var write = __webpack_require__(77373);
;// ../node_modules/@arcgis/core/layers/mixins/operationalLayers.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const e={ArcGISAnnotationLayer:!0,ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BingMapsAerial:!0,BingMapsHybrid:!0,BingMapsRoad:!0,CSV:!0,GeoRSS:!0,GeoJSON:!0,GroupLayer:!0,KML:!0,MediaLayer:!0,OGCFeatureLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,WebTiledLayer:!0},r={ArcGISImageServiceLayer:!0,ArcGISImageServiceVectorLayer:!0,ArcGISMapServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,WMS:!0,WebTiledLayer:!0,BingMapsAerial:!0,BingMapsRoad:!0,BingMapsHybrid:!0},a={ArcGISFeatureLayer:!0},S={"web-scene/operational-layers":{ArcGISDimensionLayer:!0,ArcGISFeatureLayer:!0,ArcGISImageServiceLayer:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISTiledElevationServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,BuildingSceneLayer:!0,GroupLayer:!0,IntegratedMeshLayer:!0,OGCFeatureLayer:!0,PointCloudLayer:!0,WebTiledLayer:!0,CSV:!0,GeoJSON:!0,VectorTileLayer:!0,WFS:!0,WMS:!0,KML:!0,RasterDataLayer:!0,Voxel:!0,LineOfSightLayer:!0},"web-scene/basemap":{ArcGISTiledImageServiceLayer:!0,ArcGISTiledMapServiceLayer:!0,WebTiledLayer:!0,OpenStreetMap:!0,VectorTileLayer:!0,ArcGISImageServiceLayer:!0,WMS:!0,ArcGISMapServiceLayer:!0,ArcGISSceneServiceLayer:!0},"web-scene/ground":{ArcGISTiledElevationServiceLayer:!0,RasterDataElevationLayer:!0},"web-scene/tables":{ArcGISFeatureLayer:!0},"web-map/operational-layers":e,"web-map/basemap":r,"web-map/tables":a,"link-chart/operational-layers":{...e,LinkChartLayer:!0},"link-chart/basemap":r,"link-chart/tables":a,"portal-item/operational-layers":{ArcGISFeatureLayer:!0,ArcGISSceneServiceLayer:!0,ArcGISStreamLayer:!0,ArcGISImageServiceLayer:!0,ArcGISTiledImageServiceLayer:!0,PointCloudLayer:!0,BuildingSceneLayer:!0,IntegratedMeshLayer:!0,OrientedImageryLayer:!0,SubtypeGroupLayer:!0}};

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/commonProperties.js + 1 modules
var commonProperties = __webpack_require__(84356);
;// ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=u=>{let m=class extends u{constructor(){super(...arguments),this.persistenceEnabled=!0,this.title=null}readId(e,r,t){return"Group Layer"===t?.portalItem?.type?void 0:e}writeListMode(e,r,t,o){(o&&"ground"===o.layerContainerType||e&&(0,write/* willPropertyWrite */.R)(this,t,{},o))&&(r[t]=e)}writeOperationalLayerType(e,r,t,o){e&&"tables"!==o?.layerContainerType&&(r.layerType=e)}writeTitle(e,r){r.title=e??"Layer"}read(e,r){r&&(r.layer=this),(0,read/* readLoadable */.t)(this,e,(r=>super.read(e,r)),r)}write(e,o){if(!this.persistenceEnabled)return null;if(o?.origin){const e=`${o.origin}/${o.layerContainerType||"operational-layers"}`,t=S[e];let i=!!t?.[this.operationalLayerType];if("ArcGISTiledElevationServiceLayer"===this.operationalLayerType&&"web-scene/operational-layers"===e&&(i=!1),"ArcGISDimensionLayer"===this.operationalLayerType&&"web-map/operational-layers"===e&&(i=!1),!i)return o.messages?.push(new Error/* default */.A("layer:unsupported",`Layers (${this.title}, ${this.id}) of type '${this.declaredClass}' are not supported in the context of '${e}'`,{layer:this})),null}const i=super.write(e,{...o,layer:this}),s=!!o&&!!o.messages&&!!o.messages.filter((e=>e instanceof Error/* default */.A&&"web-document-write:property-required"===e.name)).length;return (0,urlUtils/* isBlobProtocol */.w8)(i?.url)?(o?.messages?.push(new Error/* default */.A("layer:invalid-url",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Blob URL cannot be written to web scenes and web maps`,{layer:this})),null):!this.url&&s?null:i}beforeSave(){}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0}},"portal-item":{write:!1}}}})],m.prototype,"id",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("id",["id"])],m.prototype,"readId",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* listMode */.C1)],m.prototype,"listMode",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("listMode")],m.prototype,"writeListMode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:{target:"layerType",ignoreOrigin:!0},origins:{"portal-item":{write:!1},"web-scene":{name:"layerType",read:!1,write:{enabled:!0,ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("operationalLayerType")],m.prototype,"writeOperationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* opacity */.ke)],m.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!1})],m.prototype,"persistenceEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0},origins:{"web-scene":{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}},"portal-item":{write:!1}}},value:"Layer"})],m.prototype,"title",void 0),(0,tslib_es6._)([(0,writer/* writer */.K)("title"),(0,writer/* writer */.K)(["web-scene"],"title")],m.prototype,"writeTitle",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"web-scene":{name:"visibility",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"visibility",write:!0}})],m.prototype,"visible",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.OperationalLayer")],m),m};function m(e){return"operationalLayerType"in e}


/***/ }),

/***/ 84356:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ui: () => (/* binding */ j),
  Yj: () => (/* binding */ f),
  id: () => (/* binding */ I),
  kF: () => (/* binding */ m),
  fV: () => (/* binding */ c),
  C1: () => (/* binding */ C),
  hG: () => (/* binding */ S),
  hn: () => (/* binding */ T),
  ke: () => (/* binding */ g),
  Ih: () => (/* binding */ b),
  M6: () => (/* binding */ y),
  Qo: () => (/* binding */ w),
  Fm: () => (/* binding */ v),
  PY: () => (/* binding */ p),
  OZ: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/TimeExtent.js
var TimeExtent = __webpack_require__(19790);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(63680);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/timeUtils.js
var timeUtils = __webpack_require__(46437);
;// ../node_modules/@arcgis/core/support/timeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function i(t){return void 0!==t.timeInfo}async function r(n,r){if(0===n.length)return t.allTime;const l=n.filter(i);await Promise.all(l.map((t=>t.load({signal:r}))));const s=[],o=[];for(const t of l)"feature"!==t?.type&&"map-image"!==t?.type||!t.timeInfo?.hasLiveData?o.push(t):s.push(t);const m=t=>null==t||t.isAllTime,u=o.map((t=>t.timeInfo?.fullTimeExtent));if(u.some(m))return t.allTime;const a=s.map((async t=>{const{timeExtent:e}=await t.fetchRecomputedExtents({signal:r});return e||t.timeInfo?.fullTimeExtent})),f=(await Promise.allSettled(a)).map((t=>"fulfilled"===t.status?t.value:null));if(f.some(m))return t.allTime;return[...f,...u].filter(e).reduce(((t,e)=>t.union(e)))}function timeUtils_l(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,-i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,-r.getTimezoneOffset(),"minutes"):r})}function timeUtils_s(e){if(!e)return e;const{start:i,end:r}=e;return new TimeExtent/* default */.A({start:null!=i?(0,timeUtils/* offsetDate */.S1)(i,i.getTimezoneOffset(),"minutes"):i,end:null!=r?(0,timeUtils/* offsetDate */.S1)(r,r.getTimezoneOffset(),"minutes"):r})}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(48904);
;// ../node_modules/@arcgis/core/layers/support/commonProperties.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const p={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},y={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(e,r)=>!r.disablePopup},write:{enabled:!0,writer(e,r,n){r[n]=!e}}}},m={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},d={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}},c={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},f={value:null,type:ElevationInfo/* default */.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}};function w(e){return{type:e,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const u={write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},read:!0},g={type:Number,json:{origins:{"web-document":u,"portal-item":{write:!0}}}},b={...g,json:{...g.json,origins:{"web-document":{...u,write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(e,r,n)=>n&&"service"!==n.origin||!r.drawingInfo||void 0===r.drawingInfo.transparency?r.layerDefinition?.drawingInfo&&void 0!==r.layerDefinition.drawingInfo.transparency?(0,opacityUtils/* transparencyToOpacity */.D)(r.layerDefinition.drawingInfo.transparency):void 0:(0,opacityUtils/* transparencyToOpacity */.D)(r.drawingInfo.transparency)}}},j={type:TimeExtent/* default */.A,readOnly:!0,get(){if(!this.layer?.timeInfo)return null;const{datesInUnknownTimezone:e,timeOffset:r,useViewTime:n}=this.layer,i=this.view?.timeExtent;let t=this.layer.timeExtent;e&&(t=timeUtils_s(t));let s=n?i&&t?i.intersection(t):i||t:t;if(!s||s.isEmpty||s.isAllTime)return s;r&&(s=s.offset(-r.value,r.unit)),e&&(s=timeUtils_l(s));const l=this._get("timeExtent");return s.equals(l)?l:s}},v={type:Extent/* default */.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(e,r)=>{const t=Extent/* default */.A.fromJSON(e);return null!=r.spatialReference&&"object"==typeof r.spatialReference&&(t.spatialReference=SpatialReference/* default */.A.fromJSON(r.spatialReference)),t}}}},read:!1}},I={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},T={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.minScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.minScale",write:!0}},S={type:Number,json:{origins:{service:{write:{enabled:!1}},"web-scene":{name:"layerDefinition.maxScale",write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}},name:"layerDefinition.maxScale",write:!0}},C={json:{write:{ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K},origins:{"web-map":{read:!1,write:!1}}}};


/***/ }),

/***/ 10301:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92976);
/* harmony import */ var _geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99817);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const m={unknown:1,inches:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","inches"),feet:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","feet"),"us-feet":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","us-feet"),yards:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","yards"),miles:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","miles"),"nautical-miles":(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","nautical-miles"),millimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","millimeters"),centimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","centimeters"),decimeters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","decimeters"),meters:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","meters"),kilometers:(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .convertUnit */ .oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .lengthToDegrees */ .vl)(1,"meters",_geometry_support_Ellipsoid_js__WEBPACK_IMPORTED_MODULE_1__/* .earth */ .$O.radius)};


/***/ }),

/***/ 60973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ h)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(6267);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(42453);
;// ../node_modules/@arcgis/core/symbols/support/FeatureExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r)}async collectRequiredFields(r,s){return (0,fieldUtils/* collectArcadeFieldNames */.Dx)(r,s,this.expression)}clone(){return new i({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],p.prototype,"title",void 0),p=i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureExpressionInfo")],p);const c=p;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/unitConversionUtils.js
var unitConversionUtils = __webpack_require__(97046);
;// ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;const m=(0,jsonMap/* strict */.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),d=new jsonMap/* JSONMap */.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let ElevationInfo_c=l=class extends JSONSupport/* JSONSupport */.oY{constructor(e){super(e),this.offset=null}readFeatureExpressionInfo(e,r){return null!=e?e:r.featureExpression&&0===r.featureExpression.value?{expression:"0"}:void 0}writeFeatureExpressionInfo(e,r,o,t){r[o]=e.write({},t),"0"===e.expression&&(r.featureExpression={value:0})}get mode(){const{offset:e,featureExpressionInfo:r}=this;return this._isOverridden("mode")?this._get("mode"):null!=e||r?"relative-to-ground":"on-the-ground"}set mode(e){this._override("mode",e)}set unit(e){this._set("unit",e)}write(e,r){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(e,r):null}clone(){return new l({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(e){return this.mode===e.mode&&this.offset===e.offset&&this.unit===e.unit&&(0,maybe/* equalsMaybe */.CM)(this.featureExpressionInfo,e.featureExpressionInfo)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:c,json:{write:!0}})],ElevationInfo_c.prototype,"featureExpressionInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],ElevationInfo_c.prototype,"readFeatureExpressionInfo",null),(0,tslib_es6._)([(0,writer/* writer */.K)("featureExpressionInfo",{featureExpressionInfo:{type:c},"featureExpression.value":{type:[0]}})],ElevationInfo_c.prototype,"writeFeatureExpressionInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],ElevationInfo_c.prototype,"mode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ElevationInfo_c.prototype,"offset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:unitConversionUtils/* supportedUnits */.KQ,json:{type:String,read:d.read,write:d.write}})],ElevationInfo_c.prototype,"unit",null),ElevationInfo_c=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ElevationInfo")],ElevationInfo_c);const h=ElevationInfo_c;


/***/ }),

/***/ 97046:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ r),
/* harmony export */   KQ: () => (/* binding */ o)
/* harmony export */ });
/* unused harmony export supportsUnit */
/* harmony import */ var _renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10301);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){return!!n&&null!=t[n]}function r(n){return 1/(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j[n]||1)}function e(){const n=Object.keys(_renderers_support_lengthUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .meterIn */ .j);return n.sort(),n}const o=e();


/***/ })

};
;