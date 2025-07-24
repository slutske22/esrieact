"use strict";
exports.id = 70174;
exports.ids = [70174];
exports.modules = {

/***/ 7715:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41573);
/* harmony import */ var _core_accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62879);
/* harmony import */ var _core_libs_gl_matrix_2_factories_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99776);
/* harmony import */ var _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57079);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37353);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class n extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_4__/* .DisplayObject */ .q{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this._children=[],this._childrenObservable=new _core_accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__/* .SimpleObservable */ .I,this._effectView=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get children(){return (0,_core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._childrenObservable),this._children}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_3__/* .EffectView */ .$B,this.addTransitionable(this._effectView)),this._effectView.effect=e,this.requestRender())}get highlightGradient(){return this._highlightGradient}set highlightGradient(e){this._highlightGradient=e,this.requestRender()}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some((e=>e.hasHighlight))}get hasLabels(){return this.children.some((e=>e.hasLabels))}get requiresDedicatedFBO(){return this.children.some((e=>"blendMode"in e&&e.blendMode&&"normal"!==e.blendMode))}get isReady(){return this.children.every((e=>e.isReady))}get sortFunction(){return this._sortFunction}set sortFunction(e){this._sortFunction=e,e&&(this._needsSort=!0)}doRender(e){const t=this.createRenderParams(e),{painter:i}=t;i.beforeRenderLayer(t,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(t),i.afterRenderLayer(t,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),this._childrenObservable.notify(),e}contains(t){return (0,_core_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._childrenObservable),this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0,this._childrenObservable.notify()}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,this._childrenObservable.notify(),t}beforeRender(e){super.beforeRender(e),this.sortFunction&&this._needsSort&&(this.children.sort(this.sortFunction),this._needsSort=!1,this._childrenObservable.notify());for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{displayViewScreenMat3:(0,_core_libs_gl_matrix_2_factories_mat3f32_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .vt)()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}isTransitioning(){return super.isTransitioning()||this.children.some((e=>e.transitioning))}}


/***/ }),

/***/ 37353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85569);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17306);
/* harmony import */ var _transitions_FadeTransition_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87430);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class e extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(){super(...arguments),this._transitionables=null,this._clips=null,this._fadeTransition=null,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get computedOpacity(){return this._fadeTransition?.computedOpacity??this.opacity}get clips(){return this._clips}set clips(t){this._clips=t,this.requestRender()}get fadeTransitionEnabled(){return null!==this._fadeTransition}set fadeTransitionEnabled(t){!this._fadeTransition&&t?(this._fadeTransition=new _transitions_FadeTransition_js__WEBPACK_IMPORTED_MODULE_2__/* .FadeTransition */ .A({opacity:this.opacity,visible:this.visible}),this.addTransitionable(this._fadeTransition)):this._fadeTransition&&!t&&(this.removeTransitionable(this._fadeTransition),this._fadeTransition=null)}get inFadeTransition(){return this._fadeTransition?.transitioning??!1}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(t){this._opacity!==t&&(this._opacity=Math.min(1,Math.max(t,0)),this._fadeTransition&&(this._fadeTransition.opacity=this._opacity),this.requestRender())}get stage(){return this._stage}set stage(t){if(this._stage===t)return;const i=this._stage;this._stage=t,t?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):i?.trashDisplayObject(this)}get transforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get transitioning(){return this.isTransitioning()}get visible(){return this._visible}set visible(t){this._visible!==t&&(this._visible=t,this._fadeTransition&&(this._fadeTransition.visible=this._visible),this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}addTransitionable(t){this._transitionables??=[],this._transitionables.push(t),this.requestRender()}removeTransitionable(i){i.endTransition(),this._transitionables&&(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .remove */ .TF)(this._transitionables,i),this.requestRender()}fadeIn(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeIn();return this.opacity=1,this.requestRender(),t}fadeOut(){this.fadeTransitionEnabled=!0;const t=this._fadeTransition.fadeOut();return this.opacity=0,this.requestRender(),t}endTransitions(){if(this._transitionables){for(const t of this._transitionables)t.endTransition();this.requestRender()}}beforeRender(t){this.transitionStep(t.deltaTime,t.state.scale),this.setTransform(t.state)}afterRender(t){this.transitioning&&this.requestRender()}remove(){this.parent?.removeChild(this)}setTransform(t){}processRender(t){this.stage&&(this._fadeTransition?.computedVisible??this.visible)&&this.doRender(t)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this.endTransitions(),this.onDetach(),this.emit("detach")}isTransitioning(){return this._transitionables?.some((t=>t.transitioning))??!1}transitionStep(t,i){if(this._transitionables)for(const s of this._transitionables)s.transitionStep(t,i)}onAttach(){}onDetach(){}doRender(t){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}


/***/ }),

/***/ 87430:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40189);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21564);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let r=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.computedOpacity=1,this.computedVisible=!0,this.opacity=1,this.visible=!0,this._fadeOutResolver=null,this._fadeInResolver=null}get transitioning(){return(this._fadeOutResolver||!this.visible?0:this.opacity)!==this.computedOpacity}endTransition(){this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeInResolver=this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0}fadeIn(){return this._fadeInResolver||(this.opacity=1,this.computedOpacity=0,this._fadeOutResolver?.(),this._fadeOutResolver=null,this._fadeInResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)()),this._fadeOutResolver.promise}transitionStep(t,e){const i=(0,_core_has_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)("mapview-transitions-duration"),s=i?1/i:0;if(0===s)this.computedOpacity=this.opacity,this.computedVisible=this.visible;else{const e=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===e)this.computedVisible=this.visible;else{const o=t*s;this.computedOpacity=i>e?Math.max(e,i-o):Math.min(e,i+o),this.computedVisible=this.computedOpacity>0}}this.transitioning||(this._fadeInResolver?.(),this._fadeOutResolver?.(),this._fadeOutResolver=this._fadeInResolver=null)}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"computedOpacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"computedVisible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"opacity",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"visible",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"transitioning",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"_fadeOutResolver",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],r.prototype,"_fadeInResolver",void 0),r=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.views.2d.engine.transitions.FadeTransition")],r);


/***/ }),

/***/ 70174:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48982);
/* harmony import */ var _core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4194);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24342);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9049);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__/* .LayerView2DMixin */ .e)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)){constructor(e){super(e),this.layerViews=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}set layerViews(e){this._set("layerViews",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .referenceSetter */ .V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,r)=>e+r.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .castForReferenceSetter */ .H})],n.prototype,"layerViews",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({readOnly:!0})],n.prototype,"updatingProgress",null),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],n);const c=n;


/***/ }),

/***/ 24342:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ S)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/collectionUtils.js
var collectionUtils = __webpack_require__(4194);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/linkChart/utils.js
var utils = __webpack_require__(47393);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/engine/Container.js
var Container = __webpack_require__(7715);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(52495);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MapUtils.js
var MapUtils = __webpack_require__(82256);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ReactiveMap.js
var ReactiveMap = __webpack_require__(71416);
;// ../node_modules/@arcgis/core/views/2d/layers/support/HighlightCounter.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let i=class extends Accessor/* default */.A{constructor(){super(...arguments),this._idToCounters=new ReactiveMap/* default */.A}get size(){return this._idToCounters.size}get objectIds(){return this._idToCounters.keys()}get highlightNamesByObjectId(){return n(this._idToCounters)}add(e,t){let s=!1;for(const r of e){const e=(0,MapUtils/* getOrCreateMapValue */.tE)(this._idToCounters,r,(()=>(s=!0,new Map))),i=e.get(t)??0;i||(s=!0),e.set(t,i+1)}return s}delete(e,t){let o=!1;for(const s of e){const e=this._idToCounters.get(s);if(!e)continue;let r=e.get(t);null!=r&&(r--,r>0?e.set(t,r):(e.delete(t),o=!0),0===e.size&&(this._idToCounters.delete(s),o=!0))}return o}};function*n(e){for(const[t,o]of e)yield[t,o.keys()]}i=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.2d.layers.support.HighlightCounter")],i);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/layers/support/util.js + 2 modules
var util = __webpack_require__(19257);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/support/highlightOptionsUtils.js
var highlightOptionsUtils = __webpack_require__(41010);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/layers/support/ClipArea.js
var ClipArea = __webpack_require__(61226);
;// ../node_modules/@arcgis/core/views/layers/support/ClipRect.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let ClipRect_i=s=class extends ClipArea/* default */.A{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],ClipRect_i.prototype,"left",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],ClipRect_i.prototype,"right",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],ClipRect_i.prototype,"top",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],ClipRect_i.prototype,"bottom",void 0),ClipRect_i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.layers.support.ClipRect")],ClipRect_i);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/layers/support/Geometry.js
var Geometry = __webpack_require__(8565);
;// ../node_modules/@arcgis/core/views/layers/support/Path.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends ClipArea/* default */.A{constructor(r){super(r),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.layers.support.Path")],e);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/HighlightOptions.js
var HighlightOptions = __webpack_require__(96058);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/support/layerViewUtils.js
var layerViewUtils = __webpack_require__(38201);
;// ../node_modules/@arcgis/core/views/2d/layers/LayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const R=Collection/* default */.A.ofType({key:"type",base:null,typeMap:{rect:ClipRect_i,path:e,geometry:Geometry/* default */.A}}),_=new(Collection/* default */.A.ofType(HighlightOptions/* default */.A)),S=m=>{let f=class extends m{constructor(){super(...arguments),this._highlightCounter=new i,this.attached=!1,this.clips=new R,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const t=this.view?.spatialReferenceLocked??!0,e=this.view?.spatialReference;e&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new Error/* default */.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new Container/* Container */.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.updateSuspended),(t=>{this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.layer?.opacity??1),(t=>{this.container&&(this.container.opacity=t)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this._mergedHighlights.items.map((t=>({name:t.name,options:{fillColor:t.color,haloColor:t.haloColor,fillOpacity:t.fillOpacity,haloOpacity:t.haloOpacity,haloWidth:t.haloWidth,haloBlur:t.haloBlur}})))),(()=>{this.container.highlightGradient=(0,util/* createOrReuseHighlightGradient */.u4)(this.container.highlightGradient,this._mergedHighlights.items)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this._mergedHighlights.items.map((t=>t.name))),(()=>{this._processHighlight()})),(0,reactiveUtils.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:t,scaleRange:e})=>{const i=(0,layerViewUtils/* isInEffectiveScaleRange */.E5)(e,t);i!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=i)}),reactiveUtils/* syncAndInitial */.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return (0,highlightOptionsUtils/* getDefaultHighlightOptions */.a)(this)}set highlightOptions(t){(0,highlightOptionsUtils/* setDefaultHighlightOptions */.o)(this,t)}get hasHighlight(){return this._highlightCounter.size>0}get _mergedHighlights(){if(!this.view)return _;if(!this.highlights)return this.view.highlights;const t=this.view.highlights.clone();for(const e of this.highlights){const i=t.find((t=>t.name===e.name));i&&i.assignFrom(e)}return t}get highlightIds(){return Array.from(this._highlightCounter.objectIds)}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const t=this.view?.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,e){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":case"graphics":break;default:if((0,utils/* isLinkChartView */.O)(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),e=!this.spatialReferenceSupported;return e&&(t.spatialReferenceNotSupported=e),t}addAttachHandles(t){this.addHandles(t,"attach")}_addHighlights(t,e){this._highlightCounter.add(t,e)&&this._processHighlight()}_removeHighlights(t,e){this._highlightCounter.delete(t,e)&&this._processHighlight()}_processHighlight(){}_getHighlights(){const t=[];for(const[e,i]of this._highlightCounter.highlightNamesByObjectId){const s=this._getHighlightBits(i);t.push({objectId:e,highlightFlags:s})}return t}_getHighlightBits(t){const e=new Set(t);let i=1,s=0;if(!this.view)return 0;const r=this._mergedHighlights;for(const{name:h}of r)e.delete(h)&&(s=i),i<<=1;return s}};return (0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"attached",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:R,set(t){const e=(0,collectionUtils/* referenceSetter */.V)(t,this._get("clips"),R);this._set("clips",e)}})],f.prototype,"clips",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:HighlightOptions/* default */.A})],f.prototype,"highlightOptions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(HighlightOptions/* default */.A)})],f.prototype,"highlights",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"_mergedHighlights",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"moving",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"spatialReferenceSupported",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"updateParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"updateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],f.prototype,"_visibleAtCurrentScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"visibleAtCurrentScale",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.2d.layers.LayerView2D")],f),f};


/***/ }),

/***/ 9049:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52495);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17306);
/* harmony import */ var _core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65667);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6267);
/* harmony import */ var _core_Promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84410);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39831);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(63863);
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4238);
/* harmony import */ var _support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(38201);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let u=class extends(_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.IdentifiableMixin(_core_Promise_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A.EsriPromiseMixin(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)))){get spatialReferenceSupported(){return!0}constructor(e){super(e),this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_10__/* .UpdatingHandles */ .U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .destroyMaybe */ .pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const e=this.view.timeExtent,t=this.layer?.visibilityTimeExtent;return!e||!t||!e.intersection(t).isEmpty}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&this.parent&&!this.parent.suspended&&this.view?.ready&&(0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .validateScaleRange */ .g7)(e)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{},t=this;t.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0);const r=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return (0,_support_layerViewUtils_js__WEBPACK_IMPORTED_MODULE_11__/* .validateScaleRange */ .g7)(r)&&this.visibleAtCurrentScale||(e.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(e.outsideVisibilityTimeExtent=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"spatialReferenceSupported",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"view",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"fullOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"suspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"updateSuspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],u.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"visibleAtCurrentScale",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],u.prototype,"visibleAtCurrentTimeExtent",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.views.layers.LayerView")],u);


/***/ }),

/***/ 61226:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let t=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({readOnly:!0})],t.prototype,"version",null),t=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.views.layers.support.ClipArea")],t);


/***/ }),

/***/ 8565:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(539);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9272);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84698);
/* harmony import */ var _geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(88266);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62802);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1171);
/* harmony import */ var _ClipArea_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(61226);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var y;const c={base:_geometry_Geometry_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,key:"type",typeMap:{extent:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,polygon:_geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A}};let n=y=class extends _ClipArea_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A{constructor(o){super(o),this.type="geometry",this.geometry=null}clone(){return new y({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({types:c,json:{read:_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .fromJSON */ .rS,write:!0}})],n.prototype,"geometry",void 0),n=y=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.views.layers.support.Geometry")],n);


/***/ })

};
;