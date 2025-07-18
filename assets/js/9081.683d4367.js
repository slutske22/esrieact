"use strict";
exports.id = 9081;
exports.ids = [9081];
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

/***/ 49081:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ LineOfSightLayer_d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/analysis/Analysis.js
var Analysis = __webpack_require__(34538);
;// ../node_modules/@arcgis/core/analysis/featureReferenceUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,l){return t(e)===t(l)}function t(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let l=null;return l=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==l?null:`o-${t}-${l}`}const l={json:{write:{writer:r,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:n}}}};function r(e,t){null!=e?.layer?.objectIdField&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function n(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(24793);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/persistable.js
var persistable = __webpack_require__(77841);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/symbols/support/ElevationInfo.js + 1 modules
var ElevationInfo = __webpack_require__(60973);
;// ../node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let f=class extends((0,JSONSupport/* JSONSupportMixin */.Te)((0,Clonable/* ClonableMixin */.O)(Accessor/* default */.A))){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return (0,maybe/* equalsMaybe */.CM)(this.position,o.position)&&(0,maybe/* equalsMaybe */.CM)(this.elevationInfo,o.elevationInfo)&&e(this.feature,o.feature)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A,json:{write:{isRequired:!0}}})],f.prototype,"position",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ElevationInfo/* default */.A}),(0,persistable/* persistable */.P)()],f.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(l)],f.prototype,"feature",void 0),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LineOfSightAnalysisObserver")],f);const u=f;

;// ../node_modules/@arcgis/core/analysis/LineOfSightAnalysisTarget.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let LineOfSightAnalysisTarget_l=class extends((0,JSONSupport/* JSONSupportMixin */.Te)(Clonable/* Clonable */.P)){constructor(o){super(o),this.position=null,this.elevationInfo=null,this.feature=null}equals(o){return (0,maybe/* equalsMaybe */.CM)(this.position,o.position)&&(0,maybe/* equalsMaybe */.CM)(this.elevationInfo,o.elevationInfo)&&e(this.feature,o.feature)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Point/* default */.A}),(0,persistable/* persistable */.P)()],LineOfSightAnalysisTarget_l.prototype,"position",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ElevationInfo/* default */.A}),(0,persistable/* persistable */.P)()],LineOfSightAnalysisTarget_l.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(l)],LineOfSightAnalysisTarget_l.prototype,"feature",void 0),LineOfSightAnalysisTarget_l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LineOfSightAnalysisTarget")],LineOfSightAnalysisTarget_l);const LineOfSightAnalysisTarget_f=LineOfSightAnalysisTarget_l;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/projection.js
var projection = __webpack_require__(97303);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(4675);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/support/elevationInfoUtils.js
var elevationInfoUtils = __webpack_require__(27451);
;// ../node_modules/@arcgis/core/analysis/LineOfSightAnalysis.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const h=Collection/* default */.A.ofType(LineOfSightAnalysisTarget_f);let d=class extends Analysis/* default */.A{constructor(t){super(t),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._computeExtent()),(t=>{null==t?.pending&&this._set("extent",null!=t?t.extent:null)}),reactiveUtils/* syncAndInitial */.pc))}get targets(){return this._get("targets")||new h}set targets(t){this._set("targets",(0,collectionUtils/* referenceSetter */.V)(t,this.targets,h))}get spatialReference(){return null!=this.observer?.position?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){return[this.observer?.position]}async waitComputeExtent(){const t=this._computeExtent();return null!=t?t.pending:Promise.resolve()}_computeExtent(){const t=this.spatialReference;if(null==this.observer?.position||null==t)return null;const e=t=>"absolute-height"===(0,elevationInfoUtils/* getGeometryEffectiveElevationMode */.w7)(t.position,t.elevationInfo),r=this.observer.position,o=(0,aaBoundingBox/* fromValues */.fA)(r.x,r.y,r.z,r.x,r.y,r.z);for(const i of this.targets)if(null!=i.position){const e=(0,projection.projectOrLoad)(i.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:r,z:s}=e.geometry;(0,aaBoundingBox/* expandWithVec3 */.iT)(o,[t,r,s])}}const s=(0,aaBoundingBox/* toExtent */.w1)(o,t);return e(this.observer)&&this.targets.every(e)||(s.zmin=void 0,s.zmax=void 0),{pending:null,extent:s}}clear(){this.observer=null,this.targets.removeAll()}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["line-of-sight"]})],d.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{read:!0,write:!0}})],d.prototype,"observer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({cast:collectionUtils/* castForReferenceSetter */.H,type:h,nonNullable:!0,json:{read:!0,write:!0}})],d.prototype,"targets",null),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,readOnly:!0})],d.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"requiredPropertiesForEditing",null),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.analysis.LineOfSightAnalysis")],d);const v=d;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
;// ../node_modules/@arcgis/core/layers/LineOfSightLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const LineOfSightLayer_h=Collection/* default */.A.ofType(LineOfSightAnalysisTarget_f);let m=class extends((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new v,this.opacity=1}initialize(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this.analysis),((e,s)=>{null!=s&&s.parent===this&&(s.parent=null),null!=e&&(e.parent=this)}),reactiveUtils/* syncAndInitial */.pc))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){return this.analysis?.observer}set observer(e){const{analysis:s}=this;s&&(s.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new Collection/* default */.A}set targets(e){(0,collectionUtils/* referenceSetter */.V)(e,this.analysis?.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new v)}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0})],m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["LineOfSightLayer"]})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],m.prototype,"observer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LineOfSightLayer_h,json:{read:!0,write:{ignoreOrigin:!0}}})],m.prototype,"targets",null),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0,json:{read:!1,write:!1}})],m.prototype,"analysis",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],m.prototype,"fullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],m.prototype,"spatialReference",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],m.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],m.prototype,"listMode",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.LineOfSightLayer")],m);const LineOfSightLayer_d=m;


/***/ })

};
;