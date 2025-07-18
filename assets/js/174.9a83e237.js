"use strict";
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 7715:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ h)
/* harmony export */ });
/* harmony import */ var _chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21360);
/* harmony import */ var _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57079);
/* harmony import */ var _DisplayObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37353);
/* harmony import */ var _webgl_effects_highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25024);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class h extends _DisplayObject_js__WEBPACK_IMPORTED_MODULE_2__/* .DisplayObject */ .q{constructor(){super(...arguments),this._childrenSet=new Set,this._needsSort=!1,this.children=[],this._effectView=null,this._highlightOptions=null,this._highlightGradient=null}get blendMode(){return this._blendMode}set blendMode(e){this._blendMode=e,this.requestRender()}get clips(){return this._clips}set clips(e){this._clips=e,this.children.forEach((t=>t.clips=e))}get computedEffects(){return this._effectView?.effects??null}get effect(){return this._effectView?.effect??""}set effect(e){(this._effectView||e)&&(this._effectView||(this._effectView=new _layers_effects_EffectView_js__WEBPACK_IMPORTED_MODULE_1__/* .EffectView */ .$B),this._effectView.effect=e,this.requestRender())}get highlightOptions(){return this._highlightOptions}set highlightOptions(e){if(!e)return this._highlightOptions=null,void(this._highlightGradient&&(this._highlightGradient.destroy(),this._highlightGradient=null,this.requestRender()));this._highlightOptions&&this._highlightOptions.equals(e)||(this._highlightOptions=e,this._highlightGradient||(this._highlightGradient=new _webgl_effects_highlight_HighlightGradient_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A),this._highlightGradient.setHighlightOptions(e),this.requestRender())}get hasBlending(){return!!this.blendMode}get hasHighlight(){return this.children.some((e=>e.hasHighlight))}get hasLabels(){return this.children.some((e=>e.hasLabels))}get requiresDedicatedFBO(){return this.children.some((e=>"blendMode"in e&&e.blendMode&&"normal"!==e.blendMode))}updateTransitionProperties(e,t){super.updateTransitionProperties(e,t),this._effectView&&(this._effectView.transitionStep(e,t),this._effectView.transitioning&&this.requestRender())}doRender(e){const t=this.createRenderParams(e),{painter:i}=t;i.beforeRenderLayer(t,this._clips?.length?255:0,this.computedOpacity),this.renderChildren(t),i.afterRenderLayer(t,this.computedOpacity)}addChild(e){return this.addChildAt(e,this.children.length)}addChildAt(e,t=this.children.length){if(!e)return e;if(this.contains(e))return e;this._needsSort=!0;const i=e.parent;return i&&i!==this&&i.removeChild(e),t>=this.children.length?this.children.push(e):this.children.splice(t,0,e),this._childrenSet.add(e),e.parent=this,e.stage=this.stage,this!==this.stage&&(e.clips=this.clips),this.requestRender(),e}contains(e){return this._childrenSet.has(e)}endTransitions(){super.endTransitions(),this._effectView&&(this._effectView.endTransitions(),this.requestRender())}removeAllChildren(){this._childrenSet.clear(),this._needsSort=!0;for(const e of this.children)this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null;this.children.length=0}removeChild(e){return this.contains(e)?this.removeChildAt(this.children.indexOf(e)):e}removeChildAt(e){if(e<0||e>=this.children.length)return null;this._needsSort=!0;const t=this.children.splice(e,1)[0];return this._childrenSet.delete(t),this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null,t}sortChildren(e){this._needsSort&&(this.children.sort(e),this._needsSort=!1)}beforeRender(e){super.beforeRender(e);for(const t of this.children)t.beforeRender(e)}afterRender(e){super.afterRender(e);for(const t of this.children)t.afterRender(e)}_createTransforms(){return{dvs:(0,_chunks_mat3f32_js__WEBPACK_IMPORTED_MODULE_0__.c)()}}onAttach(){super.onAttach();const e=this.stage;for(const t of this.children)t.stage=e}onDetach(){super.onDetach();for(const e of this.children)e.stage=null}renderChildren(e){for(const t of this.children)t.processRender(e)}createRenderParams(e){return{...e,requireFBO:this.requiresDedicatedFBO,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:e.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition,highlightGradient:this._highlightGradient||e.highlightGradient}}}


/***/ }),

/***/ 37353:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17306);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40189);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s=1/(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("mapview-transitions-duration");class i extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A{constructor(){super(...arguments),this._fadeOutResolver=null,this._fadeInResolver=null,this._clips=null,this.computedVisible=!0,this.computedOpacity=1,this.fadeTransitionEnabled=!1,this.inFadeTransition=!1,this._isReady=!1,this._opacity=1,this.parent=null,this._stage=null,this._visible=!0}get clips(){return this._clips}set clips(e){this._clips=e,this.requestRender()}get isReady(){return this._isReady}get opacity(){return this._opacity}set opacity(e){this._opacity!==e&&(this._opacity=Math.min(1,Math.max(e,0)),this.requestRender())}get stage(){return this._stage}set stage(e){if(this._stage===e)return;const t=this._stage;this._stage=e,e?this._stage?.untrashDisplayObject(this)||(this.onAttach(),this.emit("attach")):t?.trashDisplayObject(this)}get transforms(){return this._getTransforms()}_getTransforms(){return null==this._transforms&&(this._transforms=this._createTransforms()),this._transforms}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.requestRender())}get hasLabels(){return!1}get hasHighlight(){return!1}get hasBlending(){return!1}fadeIn(){return this._fadeInResolver||(this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.opacity=1,this.computedOpacity=0,this.fadeTransitionEnabled=!0,this._fadeInResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createResolver */ .Tw)(),this.requestRender()),this._fadeInResolver.promise}fadeOut(){return this._fadeOutResolver||(this.opacity=0,this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this.fadeTransitionEnabled=!0,this._fadeOutResolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .createResolver */ .Tw)(),this.requestRender()),this._fadeOutResolver.promise}endTransitions(){this._fadeInResolver?.(),this._fadeInResolver=null,this._fadeOutResolver?.(),this._fadeOutResolver=null,this.computedOpacity=this.visible?this.opacity:0,this.requestRender()}beforeRender(e){this.updateTransitionProperties(e.deltaTime,e.state.scale),this.setTransform(e.state)}afterRender(e){this._fadeInResolver&&this.computedOpacity===this.opacity?(this._fadeInResolver(),this._fadeInResolver=null):this._fadeOutResolver&&0===this.computedOpacity&&(this._fadeOutResolver(),this._fadeOutResolver=null)}remove(){this.parent?.removeChild(this)}setTransform(e){}processRender(e){this.stage&&this.computedVisible&&this.doRender(e)}requestRender(){this.stage&&this.stage.requestRender()}processDetach(){this._fadeInResolver&&(this._fadeInResolver(),this._fadeInResolver=null),this._fadeOutResolver&&(this._fadeOutResolver(),this._fadeOutResolver=null),this.onDetach(),this.emit("detach")}updateTransitionProperties(e,t){if(this.fadeTransitionEnabled){const t=this._fadeOutResolver||!this.visible?0:this.opacity,i=this.computedOpacity;if(i===t)this.computedVisible=this.visible;else{const r=e*s;this.computedOpacity=i>t?Math.max(t,i-r):Math.min(t,i+r),this.computedVisible=this.computedOpacity>0;const a=t===this.computedOpacity;this.inFadeTransition=!a,a||this.requestRender()}}else this.computedOpacity=this.opacity,this.computedVisible=this.visible}onAttach(){}onDetach(){}doRender(e){}ready(){this._isReady||(this._isReady=!0,this.emit("isReady"),this.requestRender())}}


/***/ }),

/***/ 25024:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(539);
/* harmony import */ var _definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43556);
/* harmony import */ var _parameters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17746);
/* harmony import */ var _webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41746);
/* harmony import */ var _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6940);
/* harmony import */ var _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45758);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const s=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient");function a(o,i){i.fillColor[0]=o.color.r/255,i.fillColor[1]=o.color.g/255,i.fillColor[2]=o.color.b/255,i.fillColor[3]=o.color.a,o.haloColor?(i.outlineColor[0]=o.haloColor.r/255,i.outlineColor[1]=o.haloColor.g/255,i.outlineColor[2]=o.haloColor.b/255,i.outlineColor[3]=o.haloColor.a):(i.outlineColor[0]=i.fillColor[0],i.outlineColor[1]=i.fillColor[1],i.outlineColor[2]=i.fillColor[2],i.outlineColor[3]=i.fillColor[3]),i.fillColor[3]*=o.fillOpacity,i.outlineColor[3]*=o.haloOpacity,i.fillColor[0]*=i.fillColor[3],i.fillColor[1]*=i.fillColor[3],i.fillColor[2]*=i.fillColor[3],i.outlineColor[0]*=i.outlineColor[3],i.outlineColor[1]*=i.outlineColor[3],i.outlineColor[2]*=i.outlineColor[3],i.outlineWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.outlineWidth,i.outerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.outerHaloWidth,i.innerHaloWidth=_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.innerHaloWidth,i.outlinePosition=_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.outlinePosition}const u=[0,0,0,0];class d{constructor(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*.9,.54,.81,.9],outlinePosition:_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.outlinePosition,outlineWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.outlineWidth,innerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.innerHaloWidth,outerHaloWidth:_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .highlightSizing */ .No.outerHaloWidth},this._shadeTexChanged=!0,this._texelData=new Uint8Array(4*_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .shadeTextureSize */ .Ci),this._minMaxDistance=[0,0]}setHighlightOptions(o){const i=this._convertedHighlightOptions;a(o,i);const t=i.outlinePosition-i.outlineWidth/2-i.outerHaloWidth,r=i.outlinePosition-i.outlineWidth/2,n=i.outlinePosition+i.outlineWidth/2,h=i.outlinePosition+i.outlineWidth/2+i.innerHaloWidth,d=Math.sqrt(Math.PI/2)*_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .sigma */ .aY,C=Math.abs(t)>d?Math.round(10*(Math.abs(t)-d))/10:0,f=Math.abs(h)>d?Math.round(10*(Math.abs(h)-d))/10:0;let g;C&&!f?s.error("The outer rim of the highlight is "+C+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):!C&&f?s.error("The inner rim of the highlight is "+f+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):C&&f&&s.error("The highlight is "+Math.max(C,f)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];function m(o,i,t){c[0]=(1-t)*o[0]+t*i[0],c[1]=(1-t)*o[1]+t*i[1],c[2]=(1-t)*o[2]+t*i[2],c[3]=(1-t)*o[3]+t*i[3]}const{_texelData:p}=this;for(let l=0;l<_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .shadeTextureSize */ .Ci;++l)g=t+l/(_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .shadeTextureSize */ .Ci-1)*(h-t),g<t?(c[0]=0,c[1]=0,c[2]=0,c[3]=0):g<r?m(u,i.outlineColor,(g-t)/(r-t)):g<n?[c[0],c[1],c[2],c[3]]=i.outlineColor:g<h?m(i.outlineColor,i.fillColor,(g-n)/(h-n)):[c[0],c[1],c[2],c[3]]=i.fillColor,p[4*l]=255*c[0],p[4*l+1]=255*c[1],p[4*l+2]=255*c[2],p[4*l+3]=255*c[3];this._minMaxDistance[0]=t,this._minMaxDistance[1]=h,this._shadeTexChanged=!0}applyHighlightOptions(o,t){if(!this._shadeTex){const i=new _webgl_TextureDescriptor_js__WEBPACK_IMPORTED_MODULE_5__/* .TextureDescriptor */ .R;i.wrapMode=_webgl_enums_js__WEBPACK_IMPORTED_MODULE_3__/* .TextureWrapMode */ .pF.CLAMP_TO_EDGE,i.width=_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .shadeTextureSize */ .Ci,i.height=1,this._shadeTex=new _webgl_Texture_js__WEBPACK_IMPORTED_MODULE_4__/* .Texture */ .g(o,i)}this._shadeTexChanged&&(this._shadeTex.updateData(0,0,0,_parameters_js__WEBPACK_IMPORTED_MODULE_2__/* .shadeTextureSize */ .Ci,1,this._texelData),this._shadeTexChanged=!1),o.bindTexture(this._shadeTex,_definitions_js__WEBPACK_IMPORTED_MODULE_1__/* .textureBindingHighlight1 */ .CR),t.setUniform2fv("u_minMaxDistance",this._minMaxDistance)}destroy(){this._shadeTex?.dispose(),this._shadeTex=null}}


/***/ }),

/***/ 17746:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ci: () => (/* binding */ n),
/* harmony export */   HQ: () => (/* binding */ t),
/* harmony export */   No: () => (/* binding */ e),
/* harmony export */   XK: () => (/* binding */ i),
/* harmony export */   aY: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=1,t=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],i=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],n=256,e={outlineWidth:1.3,outerHaloWidth:.4,innerHaloWidth:.4,outlinePosition:0};


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
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(63863);
/* harmony import */ var _LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(40231);
/* harmony import */ var _layers_LayerView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9049);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let n=class extends((0,_LayerView2D_js__WEBPACK_IMPORTED_MODULE_8__/* .LayerView2DMixin */ .e)(_layers_LayerView_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)){constructor(e){super(e),this.layerViews=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}set layerViews(e){this._set("layerViews",(0,_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .referenceSetter */ .V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,r)=>e+r.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,r)=>this.container.addChildAt(e.container,r)))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({cast:_core_collectionUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .castForReferenceSetter */ .H})],n.prototype,"layerViews",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({readOnly:!0})],n.prototype,"updatingProgress",null),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],n);const c=n;


/***/ }),

/***/ 40231:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ m)
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
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/scaleUtils.js
var scaleUtils = __webpack_require__(61781);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/engine/Container.js
var Container = __webpack_require__(7715);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/2d/support/HighlightOptions.js
var HighlightOptions = __webpack_require__(14931);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
;// ../node_modules/@arcgis/core/views/layers/support/ClipArea.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let t=class extends JSONSupport/* JSONSupport */.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],t.prototype,"version",null),t=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.layers.support.ClipArea")],t);const p=t;

;// ../node_modules/@arcgis/core/views/layers/support/ClipRect.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;let i=s=class extends p{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],i.prototype,"left",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],i.prototype,"right",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],i.prototype,"top",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Number,String],json:{write:!0}})],i.prototype,"bottom",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.layers.support.ClipRect")],i);const ClipRect_p=i;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Geometry.js
var Geometry = __webpack_require__(88266);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(62802);
;// ../node_modules/@arcgis/core/views/layers/support/Geometry.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var y;const c={base:Geometry/* default */.A,key:"type",typeMap:{extent:Extent/* default */.A,polygon:Polygon/* default */.A}};let a=y=class extends p{constructor(r){super(r),this.type="geometry",this.geometry=null}clone(){return new y({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:c,json:{read:jsonUtils/* fromJSON */.rS,write:!0}})],a.prototype,"geometry",void 0),a=y=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.layers.support.Geometry")],a);const n=a;

;// ../node_modules/@arcgis/core/views/layers/support/Path.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let e=class extends p{constructor(r){super(r),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[[[Number]]],json:{write:!0}})],e.prototype,"path",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.layers.support.Path")],e);const Path_p=e;

;// ../node_modules/@arcgis/core/views/2d/layers/LayerView2D.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const f=Collection/* default */.A.ofType({key:"type",base:null,typeMap:{rect:ClipRect_p,path:Path_p,geometry:n}}),m=t=>{let d=class extends t{constructor(){super(...arguments),this.attached=!1,this.clips=new f,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new Error/* default */.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new Container/* Container */.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),reactiveUtils/* syncAndInitial */.pc),(0,reactiveUtils/* watch */.wB)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),reactiveUtils/* syncAndInitial */.pc)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:s,maxScale:i}=t;return (0,scaleUtils/* isInScaleRange */.zx)(e,s,i)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&(!!super.canResume()&&this.visibleAtCurrentScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,s=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),s&&(e.outsideScaleRange=s),e}addAttachHandles(e){this.addHandles(e,"attach")}};return (0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"attached",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:f,set(e){const t=(0,collectionUtils/* referenceSetter */.V)(e,this._get("clips"),f);this._set("clips",t)}})],d.prototype,"clips",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"container",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"moving",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"spatialReferenceSupported",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"updateParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"updateRequested",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"updating",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"view",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"visibleAtCurrentScale",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:HighlightOptions/* default */.A})],d.prototype,"highlightOptions",void 0),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.views.2d.layers.LayerView2D")],d),d};


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
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(63863);
/* harmony import */ var _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4238);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let d=class extends((0,_core_Identifiable_js__WEBPACK_IMPORTED_MODULE_3__/* .IdentifiableMixin */ .sA)((0,_core_Promise_js__WEBPACK_IMPORTED_MODULE_5__/* .EsriPromiseMixin */ .g)(_core_Evented_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.EventedMixin(_core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)))){constructor(e){super(e),this._updatingHandles=new _core_support_UpdatingHandles_js__WEBPACK_IMPORTED_MODULE_11__/* .UpdatingHandles */ .U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",r=this.layer?.title||"no title";_core_Logger_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${r}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_12__/* .destroyMaybe */ .pR)(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{},t=this;return t.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],d.prototype,"fullOpacity",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],d.prototype,"layer",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],d.prototype,"parent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],d.prototype,"suspended",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],d.prototype,"suspendInfo",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],d.prototype,"legendEnabled",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:Boolean,readOnly:!0})],d.prototype,"updating",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({readOnly:!0})],d.prototype,"updatingProgress",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],d.prototype,"visible",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)()],d.prototype,"view",void 0),d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.views.layers.LayerView")],d);const u=d;


/***/ }),

/***/ 12966:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ e)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Texture=0]="Texture",e[e.RenderBuffer=1]="RenderBuffer"}(e||(e={}));


/***/ }),

/***/ 6940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ T)
});

// UNUSED EXPORTS: clearUnestimatedTextures

// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/mathUtils.js
var mathUtils = __webpack_require__(92504);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/checkWebGLError.js
var checkWebGLError = __webpack_require__(16541);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/contextUtils.js
var contextUtils = __webpack_require__(21946);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/enums.js
var enums = __webpack_require__(41746);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/GLObjectType.js
var GLObjectType = __webpack_require__(12966);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/views/webgl/TextureDescriptor.js
var TextureDescriptor = __webpack_require__(45758);
;// ../node_modules/@arcgis/core/views/webgl/ValidatedTextureDescriptor.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class a extends TextureDescriptor/* TextureDescriptor */.R{constructor(t,a){switch(super(),this.context=t,Object.assign(this,a),this.internalFormat){case enums/* SizedPixelFormat */.H0.R16F:case enums/* SizedPixelFormat */.H0.R16I:case enums/* SizedPixelFormat */.H0.R16UI:case enums/* SizedPixelFormat */.H0.R32F:case enums/* SizedPixelFormat */.H0.R32I:case enums/* SizedPixelFormat */.H0.R32UI:case enums/* SizedPixelFormat */.H0.R8_SNORM:case enums/* SizedPixelFormat */.H0.R8:case enums/* SizedPixelFormat */.H0.R8I:case enums/* SizedPixelFormat */.H0.R8UI:this.pixelFormat=enums/* PixelFormat */.Ab.RED}}static validate(s,e){return new a(s,e)}}

;// ../node_modules/@arcgis/core/views/webgl/Texture.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const u=4;let T=class{constructor(e,i=null,o=null){if(this.type=GLObjectType/* GLObjectType */.p.Texture,this._glName=null,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._wasImmutablyAllocated=!1,"context"in e)this._descriptor=e,o=i;else{const r=a.validate(e,i);if(!r)throw new Error/* default */.A("Texture descriptor invalid");this._descriptor=r}if(this._descriptor.context.type!==contextUtils/* ContextType */.EL.WEBGL2&&(this._descriptor.isImmutable&&(this._descriptor.isImmutable=!1),R(this._descriptor.target)))throw new Error/* default */.A("3D and array textures are not supported in WebGL1");this._descriptor.target===enums/* TextureType */.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(o):this.setData(o)}get glName(){return this._glName}get descriptor(){return this._descriptor}get gpuMemoryUsage(){return P.delete(this),(0,TextureDescriptor/* estimateMemory */.e)(this._descriptor)}get isDirty(){return this._samplingModeDirty||this._wrapModeDirty}dispose(){this._glName&&this._descriptor.context.instanceCounter.decrement(enums/* ResourceType */.vt.Texture,this),this._descriptor.context.gl&&this._glName&&(this._descriptor.context.unbindTexture(this),this._descriptor.context.gl.deleteTexture(this._glName),this._glName=null)}release(){this.dispose()}resize(e,i){const r=this._descriptor;if(r.width!==e||r.height!==i){if(this._wasImmutablyAllocated)throw new Error/* default */.A("Immutable textures can't be resized!");r.width=e,r.height=i,this._descriptor.target===enums/* TextureType */.Ap.TEXTURE_CUBE_MAP?this._setDataCubeMap(null):this.setData(null)}}_setDataCubeMap(t=null){for(let e=enums/* TextureType */.Ap.TEXTURE_CUBE_MAP_POSITIVE_X;e<=enums/* TextureType */.Ap.TEXTURE_CUBE_MAP_NEGATIVE_Z;e++)this._setData(t,e)}setData(t){this._setData(t)}_setData(e,r){if(!this._descriptor.context?.gl)return;const s=this._descriptor.context.gl;(0,checkWebGLError/* checkWebGLError */.Y2)(s),this._glName||(this._glName=s.createTexture(),this._glName&&this._descriptor.context.instanceCounter.increment(enums/* ResourceType */.vt.Texture,this)),void 0===e&&(e=null);const a=this._descriptor,n=r??a.target,h=R(n);null===e&&(a.width=a.width||u,a.height=a.height||u,h&&(a.depth=a.depth??1));const p=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),g(this._descriptor.context,a),this._configurePixelStorage(),(0,checkWebGLError/* checkWebGLError */.Y2)(s);const l=this._deriveInternalFormat();if(D(e)){let t="width"in e?e.width:e.codedWidth,r="height"in e?e.height:e.codedHeight;const o=1;e instanceof HTMLVideoElement&&(t=e.videoWidth,r=e.videoHeight),a.width&&a.height,h&&a.depth,a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,l,a.hasMipmap,t,r,o),this._texImage(n,0,l,t,r,o,e),(0,checkWebGLError/* checkWebGLError */.Y2)(s),a.hasMipmap&&this.generateMipmap(),a.width||(a.width=t),a.height||(a.height=r),h&&!a.depth&&(a.depth=o)}else{const{width:r,height:o,depth:p}=a;if(null==r||null==o)throw new Error/* default */.A("Width and height must be specified!");if(h&&null==p)throw new Error/* default */.A("Depth must be specified!");if(a.isImmutable&&!this._wasImmutablyAllocated&&this._texStorage(n,l,a.hasMipmap,r,o,p),A(e)){const i=e.levels,h=b(n,r,o,p),d=Math.min(h-1,i.length-1);null!=this._descriptor.context.gl2?s.texParameteri(a.target,this._descriptor.context.gl2.TEXTURE_MAX_LEVEL,d):a.hasMipmap=a.hasMipmap&&h===i.length;const c=l;if(!w(c))throw new Error/* default */.A("Attempting to use compressed data with an uncompressed format!");this._forEachMipmapLevel(((t,e,r,s)=>{const o=i[Math.min(t,i.length-1)];this._compressedTexImage(n,t,c,e,r,s,o)}),d)}else this._texImage(n,0,l,r,o,p,e),(0,checkWebGLError/* checkWebGLError */.Y2)(s),a.hasMipmap&&this.generateMipmap()}x(s,this._descriptor),E(s,this._descriptor),f(this._descriptor.context,this._descriptor),(0,checkWebGLError/* checkWebGLError */.Y2)(s),this._descriptor.context.bindTexture(p,T.TEXTURE_UNIT_FOR_UPDATES)}updateData(e,i,r,s,o,a,n=0){a||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const h=this._descriptor.context.gl,p=this._descriptor.context.gl2,l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,target:m,isImmutable:u}=l;if(u&&!this._wasImmutablyAllocated)throw new Error/* default */.A("Cannot update immutable texture before allocation!");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES,!0);if((i<0||r<0||s>l.width||o>l.height||i+s>l.width||r+o>l.height)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),n){if(!p)return void console.error("Webgl2 must be enabled to use dataRowOffset!");h.pixelStorei(p.UNPACK_SKIP_ROWS,n)}if(D(a)?p?p.texSubImage2D(m,e,i,r,s,o,c,_,a):h.texSubImage2D(m,e,i,r,c,_,a):A(a)?h.compressedTexSubImage2D(m,e,i,r,s,o,d,a.levels[e]):h.texSubImage2D(m,e,i,r,s,o,c,_,a),n){if(!p)return void console.error("Webgl2 must be enabled to use dataRowOffset!");h.pixelStorei(p.UNPACK_SKIP_ROWS,0)}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}updateData3D(e,i,r,s,o,a,n,h){h||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");const p=this._descriptor.context.gl2;if(null==p)throw new Error/* default */.A("3D textures are not supported in WebGL1");const l=this._descriptor,d=this._deriveInternalFormat(),{pixelFormat:c,dataType:_,isImmutable:m,target:u}=l;if(m&&!this._wasImmutablyAllocated)throw new Error/* default */.A("Cannot update immutable texture before allocation!");R(u)||console.warn("Attempting to set 3D texture data on a non-3D texture");const g=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);if(this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES),(i<0||r<0||s<0||o>l.width||a>l.height||n>l.depth||i+o>l.width||r+a>l.height||s+n>l.depth)&&console.error("An attempt to update out of bounds of the texture!"),this._configurePixelStorage(),A(h))h=h.levels[e],p.compressedTexSubImage3D(u,e,i,r,s,o,a,n,d,h);else{const t=h;p.texSubImage3D(u,e,i,r,s,o,a,n,c,_,t)}this._descriptor.context.bindTexture(g,T.TEXTURE_UNIT_FOR_UPDATES)}generateMipmap(){const e=this._descriptor;if(!e.hasMipmap){if(this._wasImmutablyAllocated)throw new Error/* default */.A("Cannot add mipmaps to immutable texture after allocation");e.hasMipmap=!0,this._samplingModeDirty=!0,g(this._descriptor.context,e)}e.samplingMode===enums/* TextureSamplingMode */.Cj.LINEAR?(this._samplingModeDirty=!0,e.samplingMode=enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_NEAREST):e.samplingMode===enums/* TextureSamplingMode */.Cj.NEAREST&&(this._samplingModeDirty=!0,e.samplingMode=enums/* TextureSamplingMode */.Cj.NEAREST_MIPMAP_NEAREST);const i=this._descriptor.context.bindTexture(this,T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.setActiveTexture(T.TEXTURE_UNIT_FOR_UPDATES);this._descriptor.context.gl.generateMipmap(e.target),this._descriptor.context.bindTexture(i,T.TEXTURE_UNIT_FOR_UPDATES)}setSamplingMode(t){t!==this._descriptor.samplingMode&&(this._descriptor.samplingMode=t,this._samplingModeDirty=!0)}setWrapMode(t){t!==this._descriptor.wrapMode&&(this._descriptor.wrapMode=t,g(this._descriptor.context,this._descriptor),this._wrapModeDirty=!0)}applyChanges(){const t=this._descriptor.context.gl,e=this._descriptor;this._samplingModeDirty&&(x(t,e),this._samplingModeDirty=!1),this._wrapModeDirty&&(E(t,e),this._wrapModeDirty=!1)}_deriveInternalFormat(){if(this._descriptor.context.type===contextUtils/* ContextType */.EL.WEBGL1)return this._descriptor.internalFormat=this._descriptor.pixelFormat;if(null!=this._descriptor.internalFormat)return this._descriptor.internalFormat===enums/* PixelFormat */.Ab.DEPTH_STENCIL&&(this._descriptor.internalFormat=enums/* PixelFormat */.Ab.DEPTH24_STENCIL8),this._descriptor.internalFormat;switch(this._descriptor.dataType){case enums/* PixelType */.ld.FLOAT:switch(this._descriptor.pixelFormat){case enums/* PixelFormat */.Ab.RGBA:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGBA32F;case enums/* PixelFormat */.Ab.RGB:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGB32F;default:throw new Error/* default */.A("Unable to derive format")}case enums/* PixelType */.ld.UNSIGNED_BYTE:switch(this._descriptor.pixelFormat){case enums/* PixelFormat */.Ab.RGBA:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGBA8;case enums/* PixelFormat */.Ab.RGB:return this._descriptor.internalFormat=enums/* SizedPixelFormat */.H0.RGB8}}return this._descriptor.internalFormat=this._descriptor.pixelFormat===enums/* PixelFormat */.Ab.DEPTH_STENCIL?enums/* PixelFormat */.Ab.DEPTH24_STENCIL8:this._descriptor.pixelFormat}_configurePixelStorage(){const t=this._descriptor.context.gl,{unpackAlignment:e,flipped:i,preMultiplyAlpha:r}=this._descriptor;t.pixelStorei(t.UNPACK_ALIGNMENT,e),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,i?1:0),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,r?1:0)}_texStorage(e,i,r,s,o,a){const n=this._descriptor.context.gl2;if(null==n)throw new Error/* default */.A("Immutable textures are not supported in WebGL1");if(!M(i))throw new Error/* default */.A("Immutable textures must have a sized internal format");if(!this._descriptor.isImmutable)return;const h=r?b(e,s,o,a):1;if(R(e)){if(null==a)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");n.texStorage3D(e,h,i,s,o,a)}else n.texStorage2D(e,h,i,s,o);this._wasImmutablyAllocated=!0}_texImage(e,i,s,o,a,n,h){const p=this._descriptor.context.gl,l=R(e),{isImmutable:d,pixelFormat:c,dataType:_}=this._descriptor,m=this._descriptor.context.type===contextUtils/* ContextType */.EL.WEBGL2,u=m?p:null;if(m||!D(h))if(d){if(null!=h){const r=h;if(l){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");u.texSubImage3D(e,i,0,0,0,o,a,n,c,_,r)}else p.texSubImage2D(e,i,0,0,o,a,c,_,r)}}else{const r=h;if(l){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");u.texImage3D(e,i,s,o,a,n,0,c,_,r)}else p.texImage2D(e,i,s,o,a,0,c,_,r)}else p.texImage2D(e,0,s,c,_,h)}_compressedTexImage(e,i,s,o,a,n,h){const p=this._descriptor.context.gl;let l=null;const d=R(e),c=this._descriptor.isImmutable;if(d){if(this._descriptor.context.type!==contextUtils/* ContextType */.EL.WEBGL2)throw new Error/* default */.A("3D textures are not supported in WebGL1");l=p}if(c){if(null!=h)if(d){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");l.compressedTexSubImage3D(e,i,0,0,0,o,a,n,s,h)}else p.compressedTexSubImage2D(e,i,0,0,o,a,s,h)}else if(d){if(null==n)throw new Error/* default */.A("Missing depth dimension for 3D texture upload");l.compressedTexImage3D(e,i,s,o,a,n,0,h)}else p.compressedTexImage2D(e,i,s,o,a,0,h)}_forEachMipmapLevel(e,i=1/0){let{width:r,height:o,depth:a,hasMipmap:n,target:h}=this._descriptor;const p=h===enums/* TextureType */.Ap.TEXTURE_3D;if(null==r||null==o||p&&null==a)throw new Error/* default */.A("Missing texture dimensions for mipmap calculation");for(let t=0;e(t,r,o,a),n&&(1!==r||1!==o||p&&1!==a)&&!(t>=i);++t)r=Math.max(1,r>>1),o=Math.max(1,o>>1),p&&(a=Math.max(1,a>>1))}};function g(t,i){(null!=i.width&&i.width<0||null!=i.height&&i.height<0||null!=i.depth&&i.depth<0)&&console.error("Negative dimension parameters are not allowed!");const s=t.type===contextUtils/* ContextType */.EL.WEBGL2;if(s||!i.isImmutable&&!R(i.target)||console.error("Immutable and 3D-like textures are not supported in WebGL1!"),s)return;null!=i.width&&(0,mathUtils/* isPowerOfTwo */.r6)(i.width)&&null!=i.height&&(0,mathUtils/* isPowerOfTwo */.r6)(i.height)||("number"==typeof i.wrapMode?i.wrapMode!==enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):i.wrapMode.s===enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE&&i.wrapMode.t===enums/* TextureWrapMode */.pF.CLAMP_TO_EDGE||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),i.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))}function x(t,e){let i=e.samplingMode,r=e.samplingMode;i===enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_NEAREST||i===enums/* TextureSamplingMode */.Cj.LINEAR_MIPMAP_LINEAR?(i=enums/* TextureSamplingMode */.Cj.LINEAR,e.hasMipmap||(r=enums/* TextureSamplingMode */.Cj.LINEAR)):i!==enums/* TextureSamplingMode */.Cj.NEAREST_MIPMAP_NEAREST&&i!==enums/* TextureSamplingMode */.Cj.NEAREST_MIPMAP_LINEAR||(i=enums/* TextureSamplingMode */.Cj.NEAREST,e.hasMipmap||(r=enums/* TextureSamplingMode */.Cj.NEAREST)),t.texParameteri(e.target,t.TEXTURE_MAG_FILTER,i),t.texParameteri(e.target,t.TEXTURE_MIN_FILTER,r)}function E(t,e){"number"==typeof e.wrapMode?(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode)):(t.texParameteri(e.target,t.TEXTURE_WRAP_S,e.wrapMode.s),t.texParameteri(e.target,t.TEXTURE_WRAP_T,e.wrapMode.t))}function f(t,e){const i=t.capabilities.textureFilterAnisotropic;if(!i)return;t.gl.texParameterf(e.target,i.TEXTURE_MAX_ANISOTROPY,e.maxAnisotropy??1)}function M(t){return t in enums/* SizedPixelFormat */.H0}function w(t){return t in enums/* CompressedTextureFormat */.CQ}function A(t){return null!=t&&"type"in t&&"compressed"===t.type}function I(t){return null!=t&&"byteLength"in t}function D(t){return null!=t&&!A(t)&&!I(t)}function R(t){return t===enums/* TextureType */.Ap.TEXTURE_3D||t===enums/* TextureType */.Ap.TEXTURE_2D_ARRAY}function b(t,e,i,r=1){let o=Math.max(e,i);return t===enums/* TextureType */.Ap.TEXTURE_3D&&(o=Math.max(o,r)),Math.round(Math.log(o)/Math.LN2)+1}function U(){if(0===P.size)return;const t=new Array;return P.forEach(((e,i)=>t.push([i.gpuMemoryUsage,e]))),P.clear(),t.sort(((t,e)=>e[0]-t[0])),t.reduce(((t,e)=>`${t}\n\n${Math.round(e[0]/1024)}KB: ${e[1]}`),`Total unestimated texture memory: ${Math.round(t.reduce(((t,e)=>t+e[0]),0)/1024)}KB`)}T.TEXTURE_UNIT_FOR_UPDATES=0;const P=new Map;


/***/ }),

/***/ 45758:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ e),
/* harmony export */   e: () => (/* binding */ r)
/* harmony export */ });
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41746);
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19282);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(p=0,e=p){this.width=p,this.height=e,this.target=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureType */ .Ap.TEXTURE_2D,this.pixelFormat=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelFormat */ .Ab.RGBA,this.dataType=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .PixelType */ .ld.UNSIGNED_BYTE,this.samplingMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureSamplingMode */ .Cj.LINEAR,this.wrapMode=_enums_js__WEBPACK_IMPORTED_MODULE_0__/* .TextureWrapMode */ .pF.REPEAT,this.maxAnisotropy=1,this.flipped=!1,this.hasMipmap=!1,this.isOpaque=!1,this.unpackAlignment=4,this.preMultiplyAlpha=!1,this.depth=1,this.isImmutable=!1}}function r(t){return t.width<=0||t.height<=0?0:t.width*t.height*(t.hasMipmap?4/3:1)*(null==t.internalFormat?4:(0,_Util_js__WEBPACK_IMPORTED_MODULE_1__/* .getBytesPerElementFormat */ .IB)(t.internalFormat))}


/***/ }),

/***/ 19282:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hi: () => (/* binding */ o),
/* harmony export */   IB: () => (/* binding */ E),
/* harmony export */   WH: () => (/* binding */ a),
/* harmony export */   yu: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports getStride, vertexCount */
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _enums_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function a(e){const r=e.gl;switch(r.getError()){case r.NO_ERROR:return null;case r.INVALID_ENUM:return"An unacceptable value has been specified for an enumerated argument";case r.INVALID_VALUE:return"An unacceptable value has been specified for an argument";case r.INVALID_OPERATION:return"The specified command is not allowed for the current state";case r.INVALID_FRAMEBUFFER_OPERATION:return"The currently bound framebuffer is not framebuffer complete";case r.OUT_OF_MEMORY:return"Not enough memory is left to execute the command";case r.CONTEXT_LOST_WEBGL:return"WebGL context is lost"}return"Unknown error"}function n(e,r){return e.vertexBuffers[r].byteLength/R(e.layout[r])}function R(e){return e[0].stride}function i(e,r,t,s,c=0){const a=e.gl;e.bindBuffer(t);for(const n of s){const t=r.get(n.name);void 0===t&&console.error(`There is no location for vertex attribute '${n.name}' defined.`);const s=c*n.stride;if(n.count<=4)a.vertexAttribPointer(t,n.count,n.type,n.normalized,n.stride,n.offset+s),a.enableVertexAttribArray(t),n.divisor>0&&e.gl2?.vertexAttribDivisor(t,n.divisor);else if(9===n.count)for(let r=0;r<3;r++)a.vertexAttribPointer(t+r,3,n.type,n.normalized,n.stride,n.offset+12*r+s),a.enableVertexAttribArray(t+r),n.divisor>0&&e.gl2?.vertexAttribDivisor(t+r,n.divisor);else if(16===n.count)for(let r=0;r<4;r++)a.vertexAttribPointer(t+r,4,n.type,n.normalized,n.stride,n.offset+16*r+s),a.enableVertexAttribArray(t+r),n.divisor>0&&e.gl2?.vertexAttribDivisor(t+r,n.divisor);else console.error("Unsupported vertex attribute element count: "+n.count)}}function o(r,t,s,c){const a=r.gl;r.bindBuffer(s);for(const e of c){const s=t.get(e.name);if(e.count<=4)a.disableVertexAttribArray(s),e.divisor&&e.divisor>0&&r.gl2?.vertexAttribDivisor(s,0);else if(9===e.count)for(let t=0;t<3;t++)a.disableVertexAttribArray(s+t),e.divisor&&e.divisor>0&&r.gl2?.vertexAttribDivisor(s+t,0);else if(16===e.count)for(let t=0;t<4;t++)a.disableVertexAttribArray(s+t),e.divisor&&e.divisor>0&&r.gl2?.vertexAttribDivisor(s+t,0);else console.error("Unsupported vertex attribute element count: "+e.count)}r.unbindBuffer(_enums_js__WEBPACK_IMPORTED_MODULE_1__/* .BufferType */ .NZ.ARRAY_BUFFER)}function E(e){switch(e){case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.LUMINANCE:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RED:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RED_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.STENCIL_INDEX8:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.LUMINANCE_ALPHA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RG:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RG_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA4:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB565:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB5_A1:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT16:return 2;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.DEPTH_COMPONENT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGB:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGB_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.SRGB8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT24:return 3;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.DEPTH24_STENCIL8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGBA:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .PixelFormat */ .Ab.RGBA_INTEGER:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R11F_G11F_B10F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.R32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG16UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA8_SNORM:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.SRGB8_ALPHA8:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB9_E5:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB10_A2UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB10_A2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_STENCIL:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH_COMPONENT32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH24_STENCIL8:return 4;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .RenderbufferFormat */ .yQ.DEPTH32F_STENCIL8:return 5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB16UI:return 6;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RG32UI:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA16F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA16I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA16UI:return 8;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGB32UI:return 12;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA32F:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA32I:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .SizedPixelFormat */ .H0.RGBA32UI:return 16;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGB_S3TC_DXT1_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA_S3TC_DXT1_EXT:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA_S3TC_DXT3_EXT:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA_S3TC_DXT5_EXT:return 1;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SIGNED_R11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SRGB8_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:return.5;case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SIGNED_RG11_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_RGBA8_ETC2_EAC:case _enums_js__WEBPACK_IMPORTED_MODULE_1__/* .CompressedTextureFormat */ .CQ.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:return 1}return 0}


/***/ }),

/***/ 16541:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xc: () => (/* binding */ c),
/* harmony export */   Y2: () => (/* binding */ u),
/* harmony export */   en: () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export hasFeatureFlagWebGLDebug */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39831);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(539);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const o=_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.getLogger("esri.views.webgl.checkWebGLError");function t(e,r){switch(r){case e.INVALID_ENUM:return"Invalid Enum. An unacceptable value has been specified for an enumerated argument.";case e.INVALID_VALUE:return"Invalid Value. A numeric argument is out of range.";case e.INVALID_OPERATION:return"Invalid Operation. The specified command is not allowed for the current state.";case e.INVALID_FRAMEBUFFER_OPERATION:return"Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";case e.OUT_OF_MEMORY:return"Out of memory. Not enough memory is left to execute the command.";case e.CONTEXT_LOST_WEBGL:return"WebGL context has been lost";default:return"Unknown error"}}const n=!!(0,_core_has_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)("enable-feature:webgl-debug");function a(){return n}function c(){return n}function u(r){if(a()){const n=r.getError();if(n){const a=t(r,n),c=(new Error).stack;o.error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("webgl-error","WebGL error occurred",{message:a,stack:c}))}}}


/***/ })

};
;