"use strict";
exports.id = 16132;
exports.ids = [16132];
exports.modules = {

/***/ 16132:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ v)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/deprecate.js
var deprecate = __webpack_require__(50220);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(59851);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js
var Point = __webpack_require__(97066);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/aaBoundingRect.js
var aaBoundingRect = __webpack_require__(80510);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(50508);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
var imageBitmapUtils = __webpack_require__(52775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(65228);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileKey.js
var TileKey = __webpack_require__(88061);
;// ../node_modules/@arcgis/core/layers/BaseTileLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var u;const h=new TileKey/* TileKey */.U("0/0/0",0,0,0,void 0);let g=u=class extends((0,BlendLayer/* BlendLayer */.dM)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)(Layer/* default */.A)))){constructor(){super(...arguments),this.tileInfo=TileInfo/* default */.A.create({spatialReference:SpatialReference/* default */.A.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new Extent/* default */.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,SpatialReference/* default */.A.WebMercator),this.spatialReference=SpatialReference/* default */.A.WebMercator}addResolvingPromise(e){super.addResolvingPromise(e)}getTileBounds(e,t,r,o){const s=o||(0,aaBoundingRect/* create */.vt)();return h.level=e,h.row=t,h.col=r,h.extent=s,this.tileInfo.updateTileInfo(h),h.extent=void 0,s}fetchTile(e,r,o,s={}){const{signal:i}=s,a=this.getTileUrl(e,r,o),p={responseType:"image",signal:i,query:{...this.refreshParameters}};return (0,request/* default */.A)(a??"",p).then((e=>e.data))}async fetchImageBitmapTile(e,r,o,s={}){const{signal:i}=s;if(this.fetchTile!==u.prototype.fetchTile){const t=await this.fetchTile(e,r,o,s);return (0,imageBitmapUtils/* createTileBitmap */.C)(t,e,r,o,i)}const a=this.getTileUrl(e,r,o)??"",p={responseType:"blob",signal:i,query:{...this.refreshParameters}},{data:l}=await (0,request/* default */.A)(a,p);return (0,imageBitmapUtils/* createTileBitmap */.C)(l,e,r,o,i)}getTileUrl(){throw new Error/* default */.A("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:TileInfo/* default */.A})],g.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],g.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({nonNullable:!0})],g.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],g.prototype,"spatialReference",void 0),g=u=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.BaseTileLayer")],g);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LOD.js
var LOD = __webpack_require__(50437);
;// ../node_modules/@arcgis/core/layers/BingMapsLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const BingMapsLayer_h=new jsonMap/* JSONMap */.J({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),b="https://dev.virtualearth.net";(0,deprecate/* deprecatedModule */.uW)(Logger/* default */.A.getLogger("esri.layers.BingMapsLayer"),"esri.layers.BingMapsLayer",{version:"4.33",warnOnce:!0});let w=class extends((0,BlendLayer/* BlendLayer */.dM)((0,OperationalLayer/* OperationalLayer */.q)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(g)))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new TileInfo/* default */.A({size:[256,256],dpi:96,origin:new Point/* default */.A({x:-20037508.342787,y:20037508.342787,spatialReference:SpatialReference/* default */.A.WebMercator}),spatialReference:SpatialReference/* default */.A.WebMercator,lods:[new LOD/* default */.A({level:1,resolution:78271.5169639999,scale:295828763.795777}),new LOD/* default */.A({level:2,resolution:39135.7584820001,scale:147914381.897889}),new LOD/* default */.A({level:3,resolution:19567.8792409999,scale:73957190.948944}),new LOD/* default */.A({level:4,resolution:9783.93962049996,scale:36978595.474472}),new LOD/* default */.A({level:5,resolution:4891.96981024998,scale:18489297.737236}),new LOD/* default */.A({level:6,resolution:2445.98490512499,scale:9244648.868618}),new LOD/* default */.A({level:7,resolution:1222.99245256249,scale:4622324.434309}),new LOD/* default */.A({level:8,resolution:611.49622628138,scale:2311162.217155}),new LOD/* default */.A({level:9,resolution:305.748113140558,scale:1155581.108577}),new LOD/* default */.A({level:10,resolution:152.874056570411,scale:577790.554289}),new LOD/* default */.A({level:11,resolution:76.4370282850732,scale:288895.277144}),new LOD/* default */.A({level:12,resolution:38.2185141425366,scale:144447.638572}),new LOD/* default */.A({level:13,resolution:19.1092570712683,scale:72223.819286}),new LOD/* default */.A({level:14,resolution:9.55462853563415,scale:36111.909643}),new LOD/* default */.A({level:15,resolution:4.77731426794937,scale:18055.954822}),new LOD/* default */.A({level:16,resolution:2.38865713397468,scale:9027.977411}),new LOD/* default */.A({level:17,resolution:1.19432856685505,scale:4513.988705}),new LOD/* default */.A({level:18,resolution:.597164283559817,scale:2256.994353}),new LOD/* default */.A({level:19,resolution:.298582141647617,scale:1128.497176}),new LOD/* default */.A({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return null!=this.bingMetadata?this.bingMetadata.copyright:null}get operationalLayerType(){return BingMapsLayer_h.toJSON(this.style)}get bingLogo(){return null!=this.bingMetadata?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((()=>this._getMetadata()))):this.addResolvingPromise(Promise.reject(new Error/* default */.A("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,r){if(!this.loaded||null==this.bingMetadata)return null;const o=this.bingMetadata.resourceSets[0].resources[0],a=o.imageUrlSubdomains[t%o.imageUrlSubdomains.length],s=this._getQuadKey(e,t,r);return o.imageUrl.replace("{subdomain}",a).replace("{quadkey}",s)}async fetchAttributionData(){return this.load().then((()=>{if(null==this.bingMetadata)return null;return{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map((e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]})))})))}}))}_getMetadata(){const e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return (0,request/* default */.A)(`${b}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((e=>{const t=e.data;if(200!==t.statusCode)throw new Error/* default */.A("bingmapslayer:getmetadata",t.statusDescription);if(this.bingMetadata=t,0===this.bingMetadata.resourceSets.length)throw new Error/* default */.A("bingmapslayer:getmetadata","no bing resourcesets");if(0===this.bingMetadata.resourceSets[0].resources.length)throw new Error/* default */.A("bingmapslayer:getmetadata","no bing resources")})).catch((e=>{throw new Error/* default */.A("bingmapslayer:getmetadata",e.message)}))}_getPortalBingKey(){return (0,request/* default */.A)(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((e=>{if(!e.data.bingKey)throw new Error/* default */.A("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey})).catch((e=>{throw new Error/* default */.A("bingmapslayer:getportalbingkey",e.message)}))}_getQuadKey(e,t,r){let o="";for(let a=e;a>0;a--){let e=0;const s=1<<a-1;0!==(r&s)&&(e+=1),0!==(t&s)&&(e+=2),o+=e.toString()}return o}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1},value:null})],w.prototype,"bingMetadata",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],w.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TileInfo/* default */.A})],w.prototype,"tileInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,write:!1}})],w.prototype,"copyright",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1,read:!1}})],w.prototype,"key",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:BingMapsLayer_h.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:BingMapsLayer_h.read}}})],w.prototype,"style",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],w.prototype,"operationalLayerType",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1,read:!1}})],w.prototype,"culture",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!1,read:!1}})],w.prototype,"region",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0,read:!0}})],w.prototype,"portalUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!1,read:!1}})],w.prototype,"hasAttributionData",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0})],w.prototype,"bingLogo",null),w=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.BingMapsLayer")],w);const v=w;


/***/ })

};
;