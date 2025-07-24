"use strict";
exports.id = 79314;
exports.ids = [79314];
exports.modules = {

/***/ 79314:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ v)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(61090);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(1817);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(30214);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(2532);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
var imageBitmapUtils = __webpack_require__(15089);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(26574);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TileKey.js
var TileKey = __webpack_require__(10259);
;// ./node_modules/@arcgis/core/layers/BaseTileLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var u;const h=new TileKey/* TileKey */.U("0/0/0",0,0,0,void 0);let g=u=class extends((0,BlendLayer/* BlendLayer */.dM)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)(Layer/* default */.A)))){constructor(){super(...arguments),this.tileInfo=TileInfo/* default */.A.create({spatialReference:SpatialReference/* default */.A.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new Extent/* default */.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,SpatialReference/* default */.A.WebMercator),this.spatialReference=SpatialReference/* default */.A.WebMercator}addResolvingPromise(e){super.addResolvingPromise(e)}getTileBounds(e,t,r,o){const s=o||(0,aaBoundingRect/* create */.vt)();return h.level=e,h.row=t,h.col=r,h.extent=s,this.tileInfo.updateTileInfo(h),h.extent=void 0,s}fetchTile(e,r,o,s={}){const{signal:i}=s,a=this.getTileUrl(e,r,o),p={responseType:"image",signal:i,query:{...this.refreshParameters}};return (0,request/* default */.A)(a??"",p).then((e=>e.data))}async fetchImageBitmapTile(e,r,o,s={}){const{signal:i}=s;if(this.fetchTile!==u.prototype.fetchTile){const t=await this.fetchTile(e,r,o,s);return (0,imageBitmapUtils/* createTileBitmap */.C)(t,e,r,o,i)}const a=this.getTileUrl(e,r,o)??"",p={responseType:"blob",signal:i,query:{...this.refreshParameters}},{data:l}=await (0,request/* default */.A)(a,p);return (0,imageBitmapUtils/* createTileBitmap */.C)(l,e,r,o,i)}getTileUrl(){throw new Error/* default */.A("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:TileInfo/* default */.A})],g.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],g.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0})],g.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],g.prototype,"spatialReference",void 0),g=u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.BaseTileLayer")],g);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LOD.js
var LOD = __webpack_require__(79083);
;// ./node_modules/@arcgis/core/layers/BingMapsLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const BingMapsLayer_h=new jsonMap/* JSONMap */.J({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),b="https://dev.virtualearth.net";(0,deprecate/* deprecatedModule */.uW)(Logger/* default */.A.getLogger("esri.layers.BingMapsLayer"),"esri.layers.BingMapsLayer",{version:"4.33",warnOnce:!0});let w=class extends((0,BlendLayer/* BlendLayer */.dM)((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(g)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new TileInfo/* default */.A({size:[256,256],dpi:96,origin:new Point/* default */.A({x:-20037508.342787,y:20037508.342787,spatialReference:SpatialReference/* default */.A.WebMercator}),spatialReference:SpatialReference/* default */.A.WebMercator,lods:[new LOD/* default */.A({level:1,resolution:78271.5169639999,scale:295828763.795777}),new LOD/* default */.A({level:2,resolution:39135.7584820001,scale:147914381.897889}),new LOD/* default */.A({level:3,resolution:19567.8792409999,scale:73957190.948944}),new LOD/* default */.A({level:4,resolution:9783.93962049996,scale:36978595.474472}),new LOD/* default */.A({level:5,resolution:4891.96981024998,scale:18489297.737236}),new LOD/* default */.A({level:6,resolution:2445.98490512499,scale:9244648.868618}),new LOD/* default */.A({level:7,resolution:1222.99245256249,scale:4622324.434309}),new LOD/* default */.A({level:8,resolution:611.49622628138,scale:2311162.217155}),new LOD/* default */.A({level:9,resolution:305.748113140558,scale:1155581.108577}),new LOD/* default */.A({level:10,resolution:152.874056570411,scale:577790.554289}),new LOD/* default */.A({level:11,resolution:76.4370282850732,scale:288895.277144}),new LOD/* default */.A({level:12,resolution:38.2185141425366,scale:144447.638572}),new LOD/* default */.A({level:13,resolution:19.1092570712683,scale:72223.819286}),new LOD/* default */.A({level:14,resolution:9.55462853563415,scale:36111.909643}),new LOD/* default */.A({level:15,resolution:4.77731426794937,scale:18055.954822}),new LOD/* default */.A({level:16,resolution:2.38865713397468,scale:9027.977411}),new LOD/* default */.A({level:17,resolution:1.19432856685505,scale:4513.988705}),new LOD/* default */.A({level:18,resolution:.597164283559817,scale:2256.994353}),new LOD/* default */.A({level:19,resolution:.298582141647617,scale:1128.497176}),new LOD/* default */.A({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return BingMapsLayer_h.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new Error/* default */.A("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,r){if(!this.loaded||null==this.bingMetadata)return null;const o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],s=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",s)}async fetchAttributionData(){return this.load().then((()=>{if(null==this.bingMetadata)return null;return{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return (0,request/* default */.A)(`${b}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new Error/* default */.A("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new Error/* default */.A("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new Error/* default */.A("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new Error/* default */.A("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return (0,request/* default */.A)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new Error/* default */.A("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new Error/* default */.A("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let a=e;a>0;a--){let e=0;const s=1<<a-1;0!==(r&s)&&(e+=1),0!==(t&s)&&(e+=2),o+=e.toString()}return o}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1},value:null})],w.prototype,"bingMetadata",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],w.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TileInfo/* default */.A})],w.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:!1}})],w.prototype,"copyright",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1,read:!1}})],w.prototype,"key",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:BingMapsLayer_h.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:BingMapsLayer_h.read}}})],w.prototype,"style",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],w.prototype,"operationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1,read:!1}})],w.prototype,"culture",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1,read:!1}})],w.prototype,"region",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,read:!0}})],w.prototype,"portalUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!1,read:!1}})],w.prototype,"hasAttributionData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],w.prototype,"bingLogo",null),w=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.BingMapsLayer")],w);const v=w;


/***/ }),

/***/ 79083:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var i;let l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{static{i=this}constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new i({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"cols",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__/* .Integer */ .jz,json:{write:!0}})],l.prototype,"level",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String,json:{write:!0}})],l.prototype,"levelValue",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{write:!0}})],l.prototype,"resolution",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],l.prototype,"rows",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:Number,json:{write:!0}})],l.prototype,"scale",void 0),l=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__/* .subclass */ .$)("esri.layers.support.LOD")],l);


/***/ }),

/***/ 26574:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5262);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8636);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48524);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(30214);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44153);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2532);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(67488);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(64672);
/* harmony import */ var _LOD_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(79083);
/* harmony import */ var _TileKey_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10259);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var w;const x=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONMap */ .J({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let j=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{static{w=this}static create(e={}){const{resolutionFactor:t=1,scales:o,size:r=256,spatialReference:i=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A.WebMercator,numLODs:l=24}=e;if(!(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .isValid */ .fn)(i)){const e=[];if(o)for(let t=0;t<o.length;t++){const s=o[t];e.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({level:t,scale:s,resolution:s}))}else{let t=5e-4;for(let o=l-1;o>=0;o--)e.unshift(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({level:o,scale:t,resolution:t})),t*=2}return new w({dpi:96,lods:e,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A(0,0,i),size:[r,r],spatialReference:i})}const n=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getInfo */ .Vp)(i),p=e.origin?new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A({x:e.origin.x,y:e.origin.y,spatialReference:i}):new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A(n?{x:n.origin[0],y:n.origin[1],spatialReference:i}:{x:0,y:0,spatialReference:i}),u=96,d=1/((0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getMetersPerUnitForSR */ .GA)(i)*39.37*u),g=[];if(o)for(let s=0;s<o.length;s++){const e=o[s],t=e*d;g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({level:s,scale:e,resolution:t}))}else{let e=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .isGeographic */ .EA)(i)?512/r*591657527.5917094:256/r*591657527.591555;const o=Math.ceil(l/t);g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({level:0,scale:e,resolution:e*d}));for(let s=1;s<o;s++){const o=e/2**t,r=o*d;g.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({level:s,scale:o,resolution:r})),e=o}}return new w({dpi:u,lods:g,origin:p,size:[r,r],spatialReference:i})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const o=(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .getInfo */ .Vp)(e);return e.isWrappable&&!!o&&Math.abs(o.origin[0]-t.x)<=o.dx}return!1}readOrigin(e,t){return _geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,o=0;const s=[],r=this._levelToLOD={};e&&(t=-1/0,o=1/0,e.forEach((e=>{s.push(e.scale),t=e.scale>t?e.scale:t,o=e.scale<o?e.scale:o,r[e.level]=e}))),this._set("scales",s),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const o=Math.floor(e),s=o+1;return t[o]/(t[o]/t[s])**(e-o)}scaleToZoom(e){const t=this.scales,o=t.length-1;let s=0;for(;s<o;s++){const o=t[s],r=t[s+1];if(o<=e)return s;if(r===e)return s+1;if(o>e&&r<e)return s+Math.log(o/e)/Math.log(o/r)}return s}tileAt(e,t,o,s){const r=this.lodAt(e);if(!r)return null;let i,l;if("number"==typeof t)i=t,l=o;else if((0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_14__/* .equals */ .aI)(t.spatialReference,this.spatialReference))i=t.x,l=t.y,s=o;else{const e=(0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_15__/* .project */ .Cv)(t,this.spatialReference);if(null==e)return null;i=e.x,l=e.y,s=o}const n=r.resolution*this.size[0],p=r.resolution*this.size[1];return s||(s=new _TileKey_js__WEBPACK_IMPORTED_MODULE_17__/* .TileKey */ .U(null,0,0,0,(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__/* .create */ .vt)())),s.level=e,s.row=Math.floor((this.origin.y-l)/p+.001),s.col=Math.floor((i-this.origin.x)/n+.001),this.updateTileInfo(s),s}updateTileInfo(e,t=w.ExtrapolateOptions.NONE){let o=this.lodAt(e.level);if(!o&&t===w.ExtrapolateOptions.POWER_OF_TWO){const t=this.lods[this.lods.length-1];t.level<e.level&&(o=t)}if(!o)return;const s=e.level-o.level,r=o.resolution*this.size[0]/2**s,i=o.resolution*this.size[1]/2**s;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_13__/* .create */ .vt)()),e.extent[0]=this.origin.x+e.col*r,e.extent[1]=this.origin.y-(e.row+1)*i,e.extent[2]=e.extent[0]+r,e.extent[3]=e.extent[1]+i}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||-1===t.parentLevel)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const o=this.lodAt(t.level);if(null==o)return null;const{resolution:s}=o,r=s*this.size[0],i=s*this.size[1];return e[0]=this.origin.x+t.col*r,e[1]=this.origin.y-(t.row+1)*i,e[2]=e[0]+r,e[3]=e[1]+i,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return w.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||256===this.size[0]&&512===e)return null;const t=(512===this.size[0]&&256===e?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&0===t)return this;const o=[],s=this.lods.length-t;for(let r=0;r<s;r++){const e=r+t,{scale:s,resolution:i}=e>=0?this.lods[e]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};o.push(new _LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A({level:r,scale:s,resolution:i}))}return new w({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:o})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let o=0;o<e.length;o++){const s=e[o];this._upsampleLevels[s.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/s.resolution:0},t=s}}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],j.prototype,"compressionQuality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:Number,json:{write:!0}})],j.prototype,"dpi",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:String,json:{read:x.read,write:x.write,origins:{"web-scene":{read:!1,write:!1}}}})],j.prototype,"format",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],j.prototype,"isWrappable",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_geometry_Point_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A,json:{write:!0}})],j.prototype,"origin",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("origin")],j.prototype,"readOrigin",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:[_LOD_js__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A],value:null,json:{write:!0}})],j.prototype,"lods",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({readOnly:!0})],j.prototype,"scales",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({cast:e=>Array.isArray(e)?e:"number"==typeof e?[e,e]:[256,256]})],j.prototype,"size",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_8__/* .reader */ .w)("size",["rows","cols"])],j.prototype,"readSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_10__/* .writer */ .K)("size",{cols:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .Integer */ .jz},rows:{type:_core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__/* .Integer */ .jz}})],j.prototype,"writeSize",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A,json:{write:!0}})],j.prototype,"spatialReference",void 0),j=w=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_9__/* .subclass */ .$)("esri.layers.support.TileInfo")],j),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(j||(j={}));


/***/ }),

/***/ 10259:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ t)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class t{constructor(t,s,i,o,e=void 0){this.id=t,this.level=s,this.row=i,this.col=o,this.extent=e}}


/***/ }),

/***/ 15089:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ o),
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62991);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,o,a){let c;try{c=await createImageBitmap(t)}catch(l){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",`Unable to load ${o}`,{url:o,error:l})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(a),c}async function o(t,o,a,c,l){let n;try{n=await createImageBitmap(t)}catch(i){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",`Unable to load tile ${o}/${a}/${c}`,{error:i,level:o,row:a,col:c})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(l),n}


/***/ })

};
;