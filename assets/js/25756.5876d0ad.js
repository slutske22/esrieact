"use strict";
exports.id = 25756;
exports.ids = [25756];
exports.modules = {

/***/ 53244:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61985);
/* harmony import */ var _accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(26325);
/* harmony import */ var _accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89370);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles((0,_accessorSupport_trackingUtils_js__WEBPACK_IMPORTED_MODULE_5__/* .autorun */ .fm)((()=>this._refresh()),_reactiveUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .sync */ .OH))}destroy(){this.getCollections=null}_refresh(){const t=null!=this.getCollections?this.getCollections():null;if(null==t)return void this.removeAll();let o=0;for(const e of t)null!=e&&(o=this._processCollection(o,e));this.splice(o)}_createNewInstance(t){return new _Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(t)}_processCollection(t,o){if(!o)return t;const e=this.itemFilterFunction??(t=>!!t);for(const s of o)if(s){if(e(s)){const o=this.indexOf(s,t);o>=0?o!==t&&this.reorder(s,t):this.add(s,t),++t}if(this.getChildrenFunction){const o=this.getChildrenFunction(s);if(Array.isArray(o))for(const e of o)t=this._processCollection(t,e);else t=this._processCollection(t,o)}}return t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getCollections",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"getChildrenFunction",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)()],l.prototype,"itemFilterFunction",void 0),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .$)("esri.core.CollectionFlattener")],l);


/***/ }),

/***/ 25756:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ O)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/CollectionFlattener.js
var CollectionFlattener = __webpack_require__(53244);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(61985);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(57888);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(21332);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/config.js
var config = __webpack_require__(32083);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(6480);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingBox.js
var aaBoundingBox = __webpack_require__(46373);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/boundsUtils.js
var boundsUtils = __webpack_require__(70040);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(29221);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/layers/support/kmlUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const c={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function d(e){const o=e.folders||[],t=o.slice(),r=new Map,n=new Map,i=new Map,f=new Map,a=new Map,l={esriGeometryPoint:n,esriGeometryPolyline:i,esriGeometryPolygon:f};(e.featureCollection?.layers||[]).forEach((e=>{const o=(0,lang/* clone */.o8)(e);o.featureSet.features=[];const t=e.featureSet.geometryType;r.set(t,o);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===t?h(n,a,e.featureSet.features):"esriGeometryPolyline"===t?h(i,a,e.featureSet.features):"esriGeometryPolygon"===t&&h(f,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),o.forEach((o=>{o.networkLinkIds.forEach((r=>{const s=P(r,o.id,e.networkLinks);s&&t.push(s)}))})),t.forEach((e=>{if(e.featureInfos){e.points=(0,lang/* clone */.o8)(r.get("esriGeometryPoint")),e.polylines=(0,lang/* clone */.o8)(r.get("esriGeometryPolyline")),e.polygons=(0,lang/* clone */.o8)(r.get("esriGeometryPolygon")),e.mapImages=[];for(const o of e.featureInfos)switch(o.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const t=l[o.type].get(o.id);t&&e[c[o.type]]?.featureSet.features.push(t);break}case"GroundOverlay":{const t=a.get(o.id);t&&e.mapImages.push(t);break}}e.fullExtent=j([e])}}));const u=j(t);return{folders:o,sublayers:t,extent:u}}function g(t,s,i,f){const a=kernel.id?.findCredential(t);t=(0,urlUtils/* addQueryParameters */.a6)(t,{token:a?.token});const l=config/* default */.A.kmlServiceUrl;return (0,request/* default */.A)(l,{query:{url:t,model:"simple",folders:"",refresh:0!==i||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:f})}function S(e,o,t=null,r=[]){const s=[],n={},i=o.sublayers,f=new Set(o.folders.map((e=>e.id)));return i.forEach((o=>{const i=new e;if(t?i.read(o,t):i.read(o),r.length&&f.has(i.id)&&(i.visible=r.includes(i.id)),n[o.id]=i,null!=o.parentFolderId&&-1!==o.parentFolderId){const e=n[o.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers?.unshift(i)}else s.unshift(i)})),s}function h(e,o,t){t.forEach((t=>{e.set(t.attributes[o],t)}))}function G(e,o){let t;return o.some((o=>o.id===e&&(t=o,!0))),t}function P(e,o,t){const r=G(e,t);return r&&(r.parentFolderId=o,r.networkLink=r),r}async function b(e){const o=y.fromJSON(e.featureSet).features,r=e.layerDefinition,s=p(r.drawingInfo.renderer),n=t.fromJSON(e.popupInfo),i=[];for(const t of o){const e=await s.getSymbolAsync(t);t.symbol=e,t.popupTemplate=n,t.visible=!0,i.push(t)}return i}function j(e){const o=(0,aaBoundingBox/* create */.vt)(aaBoundingBox/* negativeInfinity */.qv),t=(0,aaBoundingBox/* create */.vt)(aaBoundingBox/* negativeInfinity */.qv);for(const r of e){if(r.polygons?.featureSet?.features)for(const e of r.polygons.featureSet.features)(0,boundsUtils/* getBoundsXYZ */.LJ)(o,e.geometry),(0,aaBoundingBox/* expandWithAABB */.RF)(t,o);if(r.polylines?.featureSet?.features)for(const e of r.polylines.featureSet.features)(0,boundsUtils/* getBoundsXYZ */.LJ)(o,e.geometry),(0,aaBoundingBox/* expandWithAABB */.RF)(t,o);if(r.points?.featureSet?.features)for(const e of r.points.featureSet.features)(0,boundsUtils/* getBoundsXYZ */.LJ)(o,e.geometry),(0,aaBoundingBox/* expandWithAABB */.RF)(t,o);if(r.mapImages)for(const e of r.mapImages)(0,boundsUtils/* getBoundsXYZ */.LJ)(o,e.extent),(0,aaBoundingBox/* expandWithAABB */.RF)(t,o)}return (0,aaBoundingBox/* equals */.aI)(t,aaBoundingBox/* negativeInfinity */.qv)?void 0:{xmin:t[0],ymin:t[1],zmin:t[2],xmax:t[3],ymax:t[4],zmax:t[5],spatialReference:SpatialReference/* default */.A.WGS84}}

;// ./node_modules/@arcgis/core/layers/support/KMLSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var KMLSublayer_j;let KMLSublayer_S=KMLSublayer_j=class extends(Evented/* default */.A.EventedMixin(JSONSupport/* default */.A.JSONSupportMixin(Loadable/* default */.A))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([(0,reactiveUtils.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=this,e.layer=this.layer}),reactiveUtils/* sync */.OH),(0,reactiveUtils.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),reactiveUtils/* sync */.OH)])}initialize(){(0,reactiveUtils/* whenOnce */.C_)((()=>this.networkLink)).then((()=>(0,reactiveUtils/* whenOnce */.C_)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const r=null!=e?e.signal:null,s=this._fetchService(this._get("networkLink")?.href??"",r).then((e=>{const r=j(e.sublayers);this.fullExtent=Extent/* default */.A.fromJSON(r),this.sourceJSON=e;const s=(0,ensureType/* ensureType */.dp)(Collection/* default */.A.ofType(KMLSublayer_j),S(KMLSublayer_j,e));this.sublayers?this.sublayers.addMany(s):this.sublayers=s,this.layer?.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return g(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>d(e.data)))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],KMLSublayer_S.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],KMLSublayer_S.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],KMLSublayer_S.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,value:null})],KMLSublayer_S.prototype,"networkLink",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{allowNull:!0}}})],KMLSublayer_S.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(KMLSublayer_S),json:{write:{allowNull:!0}}})],KMLSublayer_S.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:null,json:{read:{source:"name",reader:e=>(0,string/* stripHTML */._e)(e)}}})],KMLSublayer_S.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({value:!0})],KMLSublayer_S.prototype,"visible",null),(0,tslib_es6._)([(0,reader/* reader */.w)("visible",["visibility"])],KMLSublayer_S.prototype,"readVisible",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],KMLSublayer_S.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],KMLSublayer_S.prototype,"layer",void 0),KMLSublayer_S=KMLSublayer_j=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.KMLSublayer")],KMLSublayer_S);

;// ./node_modules/@arcgis/core/layers/KMLLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const w=["kml","xml"];let F=class extends((0,BlendLayer/* BlendLayer */.dM)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new CollectionFlattener/* default */.A({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=SpatialReference/* default */.A.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,r)=>{r&&r.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),reactiveUtils/* sync */.OH),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,r){return"string"==typeof e?{url:e,...r}:e}readSublayersFromItemOrWebMap(e,r){this._visibleFolders=r.visibleFolders}readSublayers(e,r,t){return S(KMLSublayer_S,r,t,this._visibleFolders)}writeSublayers(e,r){const t=[],o=e.toArray();for(;o.length;){const e=o[0];e.networkLink||(e.visible&&t.push(e.id),e.sublayers&&o.push(...e.sublayers.toArray())),o.shift()}r.visibleFolders=t}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,urlUtils/* getFilename */.e7)(this.url,w)||"KML":e}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,r=[],t=e=>{e.visible&&(r.push(e),e.sublayers&&e.sublayers.forEach(t))};return e&&e.forEach(t),r}get fullExtent(){return this._recomputeFullExtent()}load(e){const r=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(r)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const r=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:g(this.url??"",this.outSpatialReference,this.refreshInterval,e))),t=d(r.data);t&&this.read(t,{origin:"service"})}_recomputeFullExtent(){let e=null;null!=this.extent&&(e=this.extent.clone());const r=t=>{if(t.sublayers)for(const o of t.sublayers.items)r(o),o.visible&&o.fullExtent&&(null!=e?e.union(o.fullExtent):e=o.fullExtent.clone())};return r(this),e}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"allSublayers",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A})],F.prototype,"outSpatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],F.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1}})],F.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["KML"]})],F.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({})],F.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(KMLSublayer_S),json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)(["web-map","portal-item"],"sublayers",["visibleFolders"])],F.prototype,"readSublayersFromItemOrWebMap",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","sublayers",["sublayers"])],F.prototype,"readSublayers",null),(0,tslib_es6._)([(0,writer/* writer */.K)("sublayers")],F.prototype,"writeSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1}})],F.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],F.prototype,"title",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],F.prototype,"url",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],F.prototype,"visibleSublayers",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A})],F.prototype,"extent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],F.prototype,"fullExtent",null),F=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.KMLLayer")],F);const O=F;


/***/ })

};
;