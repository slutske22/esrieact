"use strict";
exports.id = 9685;
exports.ids = [9685,7187];
exports.modules = {

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

/***/ 89685:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ K)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(19251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(35775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(76724);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(75094);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(77542);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(84698);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(68833);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/WebTileLayer.js
var WebTileLayer = __webpack_require__(47187);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(15305);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(41506);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(34722);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(50508);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(25389);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/imageBitmapUtils.js
var imageBitmapUtils = __webpack_require__(52775);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileInfo.js
var TileInfo = __webpack_require__(65228);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/TileInfoTilemapCache.js
var TileInfoTilemapCache = __webpack_require__(68820);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/WMTSLayerInfo.js
var WMTSLayerInfo = __webpack_require__(65476);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
;// ../node_modules/@arcgis/core/layers/support/TileMatrixSet.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var l;let n=l=class extends JSONSupport/* JSONSupport */.oY{constructor(t){super(t),this.fullExtent=null,this.id=null,this.tileInfo=null}clone(){const t=new l;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{read:{source:"fullExtent"}}})],n.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"id"}}})],n.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TileInfo/* default */.A,json:{read:{source:"tileInfo"}}})],n.prototype,"tileInfo",void 0),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layer.support.TileMatrixSet")],n);const p=n;

;// ../node_modules/@arcgis/core/layers/support/WMTSStyle.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var o;let i=o=class extends JSONSupport/* JSONSupport */.oY{constructor(r){super(r),this.id=null,this.title=null,this.description=null,this.legendUrl=null}clone(){const r=new o;return this.hasOwnProperty("description")&&(r.description=this.description),this.hasOwnProperty("id")&&(r.id=this.id),this.hasOwnProperty("isDefault")&&(r.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(r.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(r.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(r.title=this.title),r}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"id"}}})],i.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"title"}}})],i.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"abstract"}}})],i.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"legendUrl"}}})],i.prototype,"legendUrl",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"isDefault"}}})],i.prototype,"isDefault",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"keywords"}}})],i.prototype,"keywords",void 0),i=o=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layer.support.WMTSStyle")],i);const WMTSStyle_p=i;

;// ../node_modules/@arcgis/core/layers/support/WMTSSublayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var WMTSSublayer_p;let m=WMTSSublayer_p=class extends JSONSupport/* JSONSupport */.oY{constructor(t){super(t),this.description=null,this.fullExtent=null,this.fullExtents=null,this.id=null,this.imageFormats=null,this.layer=null,this.parent=null,this.styles=null,this.title=null,this.tileMatrixSetId=null,this.tileMatrixSets=null}readFullExtent(t,e){return(t=e.fullExtent)?Extent/* default */.A.fromJSON(t):null}readFullExtents(t,e){return e.fullExtents?.length?e.fullExtents.map((t=>Extent/* default */.A.fromJSON(t))):e.tileMatrixSets?.map((t=>Extent/* default */.A.fromJSON(t.fullExtent))).filter((t=>t))??[]}get imageFormat(){let t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t}set imageFormat(t){const e=this.imageFormats;t&&(t.includes("image/")||e&&!e.includes(t))&&(t.includes("image/")||(t="image/"+t),e&&!e.includes(t))?console.error("The layer doesn't support the format of "+t):this._set("imageFormat",t)}get styleId(){let t=this._get("styleId");return t||(t=this.styles?.at(0)?.id??""),t}set styleId(t){this._set("styleId",t)}get tileMatrixSet(){return this.tileMatrixSets?this.tileMatrixSets.find((t=>t.id===this.tileMatrixSetId)):null}clone(){const t=new WMTSSublayer_p;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent?.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles?.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets?.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t}};(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtent",["fullExtent"])],m.prototype,"readFullExtent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],m.prototype,"fullExtents",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("fullExtents",["fullExtents","tileMatrixSets"])],m.prototype,"readFullExtents",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"imageFormat",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"formats"}}})],m.prototype,"imageFormats",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"parent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"styleId",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(WMTSStyle_p),json:{read:{source:"styles"}}})],m.prototype,"styles",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{ignoreOrigin:!0}}})],m.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"tileMatrixSetId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],m.prototype,"tileMatrixSet",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(p),json:{read:{source:"tileMatrixSets"}}})],m.prototype,"tileMatrixSets",void 0),m=WMTSSublayer_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.WMTSSublayer")],m);const u=m;

// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/ellipsoidUtils.js
var ellipsoidUtils = __webpack_require__(47936);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/Point.js + 1 modules
var Point = __webpack_require__(78632);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/WKIDUnitConversion.js
var WKIDUnitConversion = __webpack_require__(83811);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/ogc/crsUtils.js
var crsUtils = __webpack_require__(2555);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/ogc/xmlUtils.js
var xmlUtils = __webpack_require__(91690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/layers/support/LOD.js
var LOD = __webpack_require__(50437);
;// ../node_modules/@arcgis/core/layers/support/wmtsUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const wmtsUtils_u=90.71428571428571;function wmtsUtils_p(e){const n=e.replaceAll(/ows:/gi,"");if(!g("Contents",(new DOMParser).parseFromString(n,"text/xml").documentElement))throw new Error/* default */.A("wmtslayer:wmts-capabilities-xml-is-not-valid","the wmts get capabilities response is not compliant",{text:e})}function f(e,n){e=e.replaceAll(/ows:/gi,"");const i=(new DOMParser).parseFromString(e,"text/xml").documentElement,r=new Map,l=new Map,o=g("Contents",i);if(!o)throw new Error/* default */.A("wmtslayer:wmts-capabilities-xml-is-not-valid");const s=g("OperationsMetadata",i),a=s?.querySelector("[name='GetTile']"),c=a?.getElementsByTagName("Get"),u=c&&Array.prototype.slice.call(c),p=n.url?.indexOf("https"),f=void 0!==p&&p>-1;let d,m,h=n.serviceMode,T=n?.url;if(u?.length&&u.some((e=>{const t=g("Constraint",e);return!t||C("AllowedValues","Value",h,t)?(T=e.attributes[0].nodeValue,!0):(!t||C("AllowedValues","Value","RESTful",t)||C("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!C("AllowedValues","Value","KVP",t)||(d=e.attributes[0].nodeValue),!1)})),!T)if(m)T=m,h="RESTful";else if(d)T=d,h="KVP";else{const e=g("ServiceMetadataURL",i);T=e?.getAttribute("xlink:href")}const y=T.indexOf("1.0.0/");-1===y&&"RESTful"===h?T+="/":y>-1&&(T=T.substring(0,y)),"KVP"===h&&(T+=y>-1?"":"?"),f&&(T=T.replace(/^http:/i,"https:"));const R=w("ServiceIdentification>ServiceTypeVersion",i),S=w("ServiceIdentification>AccessConstraints",i),A=S&&/^none$/i.test(S)?null:S,V=x("Layer",o),b=x("TileMatrixSet",o),E=V.map((e=>{const t=w("Identifier",e);return r.set(t,e),M(t,e,b,f,R)}));return{copyright:A,dimensionMap:l,layerMap:r,layers:E,serviceMode:h,tileUrl:T}}function d(e){return e.layers.forEach((e=>{e.tileMatrixSets?.forEach((e=>{const t=e.tileInfo;t&&96!==t.dpi&&(t.lods?.forEach((n=>{n.scale=96*n.scale/t.dpi,n.resolution=j(t.spatialReference?.wkid,n.scale*wmtsUtils_u/96,e.id)})),t.dpi=96)}))})),e}function wmtsUtils_m(e){return e.nodeType===Node.ELEMENT_NODE}function g(e,t){for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(wmtsUtils_m(i)&&i.nodeName===e)return i}return null}function x(e,t){const n=[];for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i];wmtsUtils_m(r)&&r.nodeName===e&&n.push(r)}return n}function h(t,n){const i=[];for(let e=0;e<n.childNodes.length;e++){const r=n.childNodes[e];wmtsUtils_m(r)&&r.nodeName===t&&i.push(r)}return i.map((e=>e.textContent)).filter(arrayUtils/* isSome */.Ru)}function w(e,t){return e.split(">").forEach((e=>{t&&(t=g(e,t))})),t&&t.textContent}function C(e,t,n,i){let r;return Array.prototype.slice.call(i.childNodes).some((i=>{if(i.nodeName.includes(e)){const e=g(t,i),l=e?.textContent;if(l===n||n.split(":")&&n.split(":")[1]===l)return r=i,!0}return!1})),r}function M(e,t,n,i,r){const l=w("Abstract",t),o=h("Format",t);return{id:e,fullExtent:A(t),fullExtents:V(t),description:l,formats:o,styles:b(t,i),title:w("Title",t),tileMatrixSets:E(r,t,n)}}function T(e,t){const n=[],i=e.layerMap?.get(t);if(!i)return null;const r=x("ResourceURL",i),l=x("Dimension",i);let o,s,a,c;return l.length&&(o=w("Identifier",l[0]),s=h("Default",l[0])||h("Value",l[0])),l.length>1&&(a=w("Identifier",l[1]),c=h("Default",l[1])||h("Value",l[1])),e.dimensionMap.set(t,{dimensions:s,dimensions2:c}),r.forEach((e=>{let t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(o&&s.length)if(t.includes("{"+o+"}"))t=t.replace("{"+o+"}","{dimensionValue}");else{const e=t.toLowerCase().indexOf("{"+o.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue}"+t.substring(e+o.length+2))}if(a&&c.length)if(t.includes("{"+a+"}"))t=t.replace("{"+a+"}","{dimensionValue2}");else{const e=t.toLowerCase().indexOf("{"+a.toLowerCase()+"}");e>-1&&(t=t.substring(0,e)+"{dimensionValue2}"+t.substring(e+a.length+2))}n.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}})),n}function y(e,t,n,i,r,l,o,s){const a=R(e,t,i);if(!(a?.length>0))return"";const{dimensionMap:c}=e,u=c.get(t).dimensions?.[0],p=c.get(t).dimensions2?.[0];return a[o%a.length].template.replaceAll(/\{Style\}/gi,r??"").replaceAll(/\{TileMatrixSet\}/gi,n??"").replaceAll(/\{TileMatrix\}/gi,l).replaceAll(/\{TileRow\}/gi,""+o).replaceAll(/\{TileCol\}/gi,""+s).replaceAll(/\{dimensionValue\}/gi,u).replaceAll(/\{dimensionValue2\}/gi,p)}function R(e,t,n){const i=T(e,t),r=i?.filter((e=>e.format===n));return(r?.length?r:i)??[]}function S(e,t,n,i){const{dimensionMap:r}=e,l=T(e,t);let o="";if(l&&l.length>0){const e=r.get(t).dimensions?.[0],s=r.get(t).dimensions2?.[0];o=l[0].template,o.indexOf(".xxx")===o.length-4&&(o=o.slice(0,-4)),o=o.replaceAll(/\{Style\}/gi,i),o=o.replaceAll(/\{TileMatrixSet\}/gi,n),o=o.replaceAll(/\{TileMatrix\}/gi,"{level}"),o=o.replaceAll(/\{TileRow\}/gi,"{row}"),o=o.replaceAll(/\{TileCol\}/gi,"{col}"),o=o.replaceAll(/\{dimensionValue\}/gi,e),o=o.replaceAll(/\{dimensionValue2\}/gi,s)}return o}function A(e){const t=g("WGS84BoundingBox",e),n=t?w("LowerCorner",t).split(" "):["-180","-90"],i=t?w("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(n[0]),ymin:parseFloat(n[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function V(e){const t=[];return (0,xmlUtils/* visitXML */.p)(e,{BoundingBox:e=>{if(!e.getAttribute("crs"))return;const n=e.getAttribute("crs").toLowerCase(),i=I(n),r=n.includes("epsg")&&(0,crsUtils/* isAxesOrderReversedForWkid */.m)(i.wkid);let l,a,c,u;(0,xmlUtils/* visitXML */.p)(e,{LowerCorner:e=>{[l,a]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([l,a]=[a,l])},UpperCorner:e=>{[c,u]=e.textContent.split(" ").map((e=>Number.parseFloat(e))),r&&([c,u]=[u,c])}}),t.push({xmin:l,ymin:a,xmax:c,ymax:u,spatialReference:i})}}),t}function b(e,t){return x("Style",e).map((e=>{const n=g("LegendURL",e),i=g("Keywords",e),r=i?h("Keyword",i):[];let l=n&&n.getAttribute("xlink:href");t&&(l=l&&l.replace(/^http:/i,"https:"));return{abstract:w("Abstract",e),id:w("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:r,legendUrl:l,title:w("Title",e)}}))}function E(e,t,n){return x("TileMatrixSetLink",t).map((t=>L(e,t,n)))}function L(e,t,n){const i=g("TileMatrixSet",t).textContent,r=h("TileMatrix",t),l=n.find((e=>{const t=g("Identifier",e),n=t?.textContent;return!!(n===i||i.split(":")&&i.split(":")[1]===n)})),o=g("TileMatrixSetLimits",t),s=o&&x("TileMatrixLimits",o),a=new Map;if(s?.length)for(const c of s){const e=g("TileMatrix",c).textContent,t=+g("MinTileRow",c).textContent,n=+g("MaxTileRow",c).textContent,i=+g("MinTileCol",c).textContent,r=+g("MaxTileCol",c).textContent;a.set(e,{minCol:i,maxCol:r,minRow:t,maxRow:n})}const u=w("SupportedCRS",l).toLowerCase(),p=N(l,u),f=p.spatialReference,d=g("TileMatrix",l),m=[parseInt(w("TileWidth",d),10),parseInt(w("TileHeight",d),10)],M=[];if(r.length)r.forEach(((e,t)=>{const n=C("TileMatrix","Identifier",e,l);M.push(k(n,u,t,i,a))}));else{x("TileMatrix",l).forEach(((e,t)=>{M.push(k(e,u,t,i,a))}))}const T=F(e,l,p,m,M[0]).toJSON(),y=new TileInfo/* default */.A({dpi:96,spatialReference:f,size:m,origin:p,lods:M}).toJSON();return{id:i,fullExtent:T,tileInfo:y}}function I(e){e=e.toLowerCase();let t=parseInt(e.split(":").pop(),10);900913!==t&&3857!==t||(t=102100);const n=D(e);return null!=n&&(t=n),{wkid:t}}function N(e,t){return v(g("TileMatrix",e),t)}function v(e,t){const n=I(t),[i,l]=w("TopLeftCorner",e).split(" ").map((e=>parseFloat(e))),s=t.includes("epsg")&&(0,crsUtils/* isAxesOrderReversedForWkid */.m)(n.wkid);return new Point/* default */.A(s?{x:l,y:i,spatialReference:n}:{x:i,y:l,spatialReference:n})}function F(e,t,n,r,l){const o=g("BoundingBox",t);let s,a,c,u,p,f;if(o&&(s=w("LowerCorner",o).split(" "),a=w("UpperCorner",o).split(" ")),s&&s.length>1&&a&&a.length>1)c=parseFloat(s[0]),p=parseFloat(s[1]),u=parseFloat(a[0]),f=parseFloat(a[1]);else{const e=g("TileMatrix",t),i=parseInt(w("MatrixWidth",e),10),o=parseInt(w("MatrixHeight",e),10);c=n.x,f=n.y,u=c+i*r[0]*l.resolution,p=f-o*r[1]*l.resolution}return O(e,n.spatialReference,n)?new Extent/* default */.A(p,c,f,u,n.spatialReference):new Extent/* default */.A(c,p,u,f,n.spatialReference)}function O(e,t,n){return"1.0.0"===e&&(0,crsUtils/* isAxesOrderReversedForWkid */.m)(t.wkid)&&!(n.spatialReference.isGeographic&&n.x<-90&&n.y>=-90)}var U;function D(e){return e.includes("crs84")||e.includes("crs:84")?U.CRS84:e.includes("crs83")||e.includes("crs:83")?U.CRS83:e.includes("crs27")||e.includes("crs:27")?U.CRS27:null}function k(e,t,n,i,r){const l=I(t),o=w("Identifier",e);let s=parseFloat(w("ScaleDenominator",e));const c=j(l.wkid,s,i);s*=96/wmtsUtils_u;const p=+w("MatrixWidth",e),f=+w("MatrixHeight",e),{maxCol:d=p-1,maxRow:m=f-1,minCol:g=0,minRow:x=0}=r.get(o)??{},{x:h,y:C}=v(e,t);return new LOD/* default */.A({cols:[g,d],level:n,levelValue:o,origin:[h,C],scale:s,resolution:c,rows:[x,m]})}function j(e,t,i){let r;return r=WKIDUnitConversion/* default */.A.hasOwnProperty(""+e)?WKIDUnitConversion/* default */.A.values[WKIDUnitConversion/* default */.A[e]]:"default028mm"===i?6370997*Math.PI/180:(0,ellipsoidUtils/* getReferenceEllipsoidFromWKID */.y7)(e).metersPerDegree,7*t/25e3/r}!function(e){e[e.CRS84=4326]="CRS84",e[e.CRS83=4269]="CRS83",e[e.CRS27=4267]="CRS27"}(U||(U={}));

;// ../node_modules/@arcgis/core/layers/WMTSLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var W;const WMTSLayer_F={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},WMTSLayer_V=new Set(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);let B=W=class extends((0,BlendLayer/* BlendLayer */.d)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)(Layer/* default */.A))))))){constructor(...e){super(...e),this.activeLayer=null,this.copyright="",this.customParameters=null,this.customLayerParameters=null,this.fullExtent=null,this.operationalLayerType="WebTiledLayer",this.resourceInfo=null,this.serviceMode="RESTful",this.sublayers=null,this.type="wmts",this.version="1.0.0",this.addHandles([(0,reactiveUtils/* watch */.wB)((()=>this.activeLayer),((e,t)=>{t&&!this.sublayers?.includes(t)&&(t.layer=null,t.parent=null),e&&(e.layer=this,e.parent=this)}),reactiveUtils/* sync */.OH),(0,reactiveUtils.on)((()=>this.sublayers),"after-add",(({item:e})=>{e.layer=this,e.parent=this}),reactiveUtils/* sync */.OH),(0,reactiveUtils.on)((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=null,e.parent=null}),reactiveUtils/* sync */.OH),(0,reactiveUtils/* watch */.wB)((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=null,r.parent=null;if(e)for(const r of e)r.layer=this,r.parent=this}),reactiveUtils/* sync */.OH)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((()=>this._fetchService(e))).catch((e=>{throw (0,promiseUtils/* throwIfAbortError */.QP)(e),new Error/* default */.A("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})}))),Promise.resolve(this)}readActiveLayerFromService(e,t,r){this.activeLayer||(this.activeLayer=new u);let i=t.layers.find((e=>e.id===this.activeLayer.id));return i||(i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer}readActiveLayerFromItemOrWebDoc(e,t){const{templateUrl:r,wmtsInfo:i}=t,s=r?this._getLowerCasedUrlParams(r):null,a=i?.layerIdentifier;let o=null;const l=i?.tileMatrixSet;l&&(Array.isArray(l)?l.length&&(o=l[0]):o=l);const n=s?.format,m=s?.style;return new u({id:a,imageFormat:n,styleId:m,tileMatrixSetId:o})}writeActiveLayer(e,t,r,i){const s=this.activeLayer;t.templateUrl=this.getUrlTemplate(s.id,s.tileMatrixSetId,s.imageFormat,s.styleId);const a=(0,object/* getDeepValue */.wc)("tileMatrixSet.tileInfo",s);t.tileInfo=a?a.toJSON(i):null,t.wmtsInfo={...t.wmtsInfo,layerIdentifier:s.id,tileMatrixSet:s.tileMatrixSetId}}readCustomParameters(e,t){const r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null}get fullExtents(){return this.activeLayer.fullExtents}readServiceMode(e,t){return t.templateUrl.includes("?")?"KVP":"RESTful"}readSublayersFromService(e,t,r){return $(t.layers,r)}get supportedSpatialReferences(){return this.activeLayer.tileMatrixSets?.map((e=>e.tileInfo?.spatialReference)).toArray().filter(arrayUtils/* isSome */.Ru)??[]}get tilemapCache(){const e=this.activeLayer?.tileMatrixSet?.tileInfo;return e?new TileInfoTilemapCache/* default */.A(e):void 0}get title(){return this.activeLayer?.title??"Layer"}set title(e){this._overrideIfSome("title",e)}get url(){return this._get("url")}set url(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)}createWebTileLayer(e){const t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r?.tileInfo,s=e.fullExtent,a=new WMTSLayerInfo/* WMTSLayerInfo */.x({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(a.customLayerParameters=this.customLayerParameters),this.customParameters&&(a.customParameters=this.customParameters),new WebTileLayer["default"]({fullExtent:s,urlTemplate:t,tileInfo:i,wmtsInfo:a})}async fetchTile(e,r,i,s={}){const{signal:a}=s,o=this.getTileUrl(e,r,i),{data:l}=await (0,request/* default */.A)(o,{responseType:"image",signal:a});return l}async fetchImageBitmapTile(e,r,i,s={}){const{signal:a}=s;if(this.fetchTile!==W.prototype.fetchTile){const t=await this.fetchTile(e,r,i,s);return (0,imageBitmapUtils/* createTileBitmap */.C)(t,e,r,i,a)}const o=this.getTileUrl(e,r,i),{data:l}=await (0,request/* default */.A)(o,{responseType:"blob",signal:a});return (0,imageBitmapUtils/* createTileBitmap */.C)(l,e,r,i,a)}findSublayerById(e){return this.sublayers?.find((t=>t.id===e))}getTileUrl(e,t,r){const i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),s=i?.tileInfo?.lods[e],a=s?s.levelValue||`${s.level}`:`${e}`;let o=this.resourceInfo?"":y({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,a,t,r);if(!o){o=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replaceAll(/\{level\}/gi,a).replaceAll(/\{row\}/gi,`${t}`).replaceAll(/\{col\}/gi,`${r}`)}return o=this._appendCustomLayerParameters(o),o}getUrlTemplate(e,t,r,i){if(!this.resourceInfo){const r=S({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(r)return r}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){let s="";return WMTSLayer_F[r.toLowerCase()]&&(s=WMTSLayer_F[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+s}return""}async _fetchService(e){let t;if(this.resourceInfo)"KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.includes("?")?"":"?"),t={ssl:!1,data:this.resourceInfo};else try{t=await this._getCapabilities(this.serviceMode,e),wmtsUtils_p(t.data)}catch{const i="KVP"===this.serviceMode?"RESTful":"KVP";try{t=await this._getCapabilities(i,e),wmtsUtils_p(t.data),this.serviceMode=i}catch(r){throw new Error/* default */.A("wmtslayer:unsupported-service-data","Services does not support RESTful or KVP service modes.",{error:r})}}this.resourceInfo?t.data=d(t.data):t.data=f(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"})}async _getCapabilities(e,r){const i=this._getCapabilitiesUrl(e);return await (0,request/* default */.A)(i,{...r,responseType:"text"})}_getTileMatrixSetById(e){const t=this.findSublayerById(this.activeLayer.id),r=t?.tileMatrixSets?.find((t=>t.id===e));return r}_appendCustomParameters(e){return this._appendParameters(e,this.customParameters)}_appendCustomLayerParameters(e){return this._appendParameters(e,{...(0,lang/* clone */.o8)(this.customParameters),...this.customLayerParameters})}_appendParameters(e,t){const r=(0,urlUtils/* urlToObject */.An)(e),i={...r.query,...t},s=(0,urlUtils/* objectToQuery */.x0)(i);return""===s?r.path:`${r.path}?${s}`}_getCapabilitiesUrl(e){this.url=(0,urlUtils/* urlToObject */.An)(this.url).path;let t=this.url;switch(e){case"KVP":t+=`?request=GetCapabilities&service=WMTS&version=${this.version}`;break;case"RESTful":{const e=`/${this.version}/WMTSCapabilities.xml`,r=new RegExp(e,"i");t=t.replace(r,""),t+=e;break}}return this._appendCustomParameters(t)}_getLowerCasedUrlParams(e){if(!e)return null;const t=(0,urlUtils/* urlToObject */.An)(e).query;if(!t)return null;const r={};return Object.keys(t).forEach((e=>{r[e.toLowerCase()]=t[e]})),r}_mergeParams(e,t){const r=this._getLowerCasedUrlParams(t);if(r){const t=Object.keys(r);t.length&&(e=e?(0,lang/* clone */.o8)(e):{},t.forEach((t=>{e.hasOwnProperty(t)||WMTSLayer_V.has(t)||(e[t]=r[t])})))}return e}};function $(e,t){return e.map((e=>{const r=new u;return r.read(e,t),r}))}(0,tslib_es6._)([(0,property/* property */.MZ)()],B.prototype,"dimensionMap",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],B.prototype,"layerMap",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:u,json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],B.prototype,"activeLayer",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","activeLayer",["layers"])],B.prototype,"readActiveLayerFromService",null),(0,tslib_es6._)([(0,reader/* reader */.w)(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],B.prototype,"readActiveLayerFromItemOrWebDoc",null),(0,tslib_es6._)([(0,writer/* writer */.K)(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:TileInfo/* default */.A},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],B.prototype,"writeActiveLayer",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,value:"",json:{write:!0}})],B.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!0,write:!0}})],B.prototype,"blendMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],B.prototype,"customParameters",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)(["portal-item","web-document"],"customParameters")],B.prototype,"readCustomParameters",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],B.prototype,"customLayerParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],B.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],B.prototype,"fullExtents",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["WebTiledLayer"]})],B.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],B.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],B.prototype,"serviceMode",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)(["portal-item","web-document"],"serviceMode",["templateUrl"])],B.prototype,"readServiceMode",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(u)})],B.prototype,"sublayers",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","sublayers",["layers"])],B.prototype,"readSublayersFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],B.prototype,"supportedSpatialReferences",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],B.prototype,"tilemapCache",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"title"}}})],B.prototype,"title",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},readOnly:!0,value:"wmts"})],B.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],B.prototype,"url",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],B.prototype,"version",void 0),B=W=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.WMTSLayer")],B);const K=B;


/***/ }),

/***/ 47187:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _geometry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17639);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86394);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98849);
/* harmony import */ var _core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35775);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96274);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20909);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77542);
/* harmony import */ var _Layer_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(68833);
/* harmony import */ var _mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(15305);
/* harmony import */ var _mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(41506);
/* harmony import */ var _mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(34722);
/* harmony import */ var _mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(50508);
/* harmony import */ var _mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(25389);
/* harmony import */ var _support_imageBitmapUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52775);
/* harmony import */ var _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(50437);
/* harmony import */ var _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(65228);
/* harmony import */ var _support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(65476);
/* harmony import */ var _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(84698);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(78983);
/* harmony import */ var _geometry_Point_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(78632);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var U;let L=U=class extends((0,_mixins_BlendLayer_js__WEBPACK_IMPORTED_MODULE_15__/* .BlendLayer */ .d)((0,_mixins_RefreshableLayer_js__WEBPACK_IMPORTED_MODULE_18__/* .RefreshableLayer */ .J)((0,_mixins_ScaleRangeLayer_js__WEBPACK_IMPORTED_MODULE_19__/* .ScaleRangeLayer */ .j)((0,_mixins_OperationalLayer_js__WEBPACK_IMPORTED_MODULE_16__/* .OperationalLayer */ .q)((0,_mixins_PortalLayer_js__WEBPACK_IMPORTED_MODULE_17__/* .PortalLayer */ .A)((0,_core_MultiOriginJSONSupport_js__WEBPACK_IMPORTED_MODULE_4__/* .MultiOriginJSONMixin */ .P)(_Layer_js__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A))))))){constructor(...e){super(...e),this.copyright="",this.fullExtent=new _geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.WebMercator,this.subDomains=null,this.tileInfo=new _support_TileInfo_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new _geometry_Point_js__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A({x:-20037508.342787,y:20037508.342787,spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.WebMercator}),spatialReference:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.WebMercator,lods:[new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:0,scale:591657527.591555,resolution:156543.033928}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:1,scale:295828763.795777,resolution:78271.5169639999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:2,scale:147914381.897889,resolution:39135.7584820001}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:3,scale:73957190.948944,resolution:19567.8792409999}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:4,scale:36978595.474472,resolution:9783.93962049996}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:5,scale:18489297.737236,resolution:4891.96981024998}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:6,scale:9244648.868618,resolution:2445.98490512499}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:7,scale:4622324.434309,resolution:1222.99245256249}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:8,scale:2311162.217155,resolution:611.49622628138}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:9,scale:1155581.108577,resolution:305.748113140558}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:10,scale:577790.554289,resolution:152.874056570411}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:11,scale:288895.277144,resolution:76.4370282850732}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:12,scale:144447.638572,resolution:38.2185141425366}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:13,scale:72223.819286,resolution:19.1092570712683}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:14,scale:36111.909643,resolution:9.55462853563415}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:15,scale:18055.954822,resolution:4.77731426794937}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:16,scale:9027.977411,resolution:2.38865713397468}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:17,scale:4513.988705,resolution:1.19432856685505}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:18,scale:2256.994353,resolution:.597164283559817}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:19,scale:1128.497176,resolution:.298582141647617}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:20,scale:564.248588,resolution:.14929107082380833}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:21,scale:282.124294,resolution:.07464553541190416}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:22,scale:141.062147,resolution:.03732276770595208}),new _support_LOD_js__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .Url */ .s0(this.urlTemplate);!(!!this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:r}=this,l=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .Url */ .s0(t),o=l.scheme?l.scheme+"://":"//",n=o+l.authority+"/",a=l.authority;if(a?.includes("{subDomain}")){if(r&&r.length>0&&a.split(".").length>1)for(const s of r)e.push(o+a.replaceAll(/\{subDomain\}/gi,s)+"/")}else e.push(n);return e.map(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .ensureTrailingSlash */ .Il)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .Url */ .s0(e),r=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.substring(r.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .isProtocolRelative */ .BQ)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .normalize */ .S8)(e)),t.templateUrl=e}fetchTile(e,r,l,o={}){const{signal:s}=o,i=this.getTileUrl(e,r,l),n={responseType:"image",signal:s,query:{...this.refreshParameters}};return (0,_request_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(i,n).then((e=>e.data))}async fetchImageBitmapTile(e,r,l,o={}){const{signal:s}=o;if(this.fetchTile!==U.prototype.fetchTile){const t=await this.fetchTile(e,r,l,o);return (0,_support_imageBitmapUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .createTileBitmap */ .C)(t,e,r,l,s)}const i=this.getTileUrl(e,r,l),n={responseType:"blob",signal:s,query:{...this.refreshParameters}},{data:a}=await (0,_request_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(i,n);return (0,_support_imageBitmapUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .createTileBitmap */ .C)(a,e,r,l,s)}getTileUrl(e,t,r){const{levelValues:l,tileServers:s,urlPath:i}=this;if(!l||!s||!i)return"";const n=l[e];return s[t%s.length]+(0,_core_string_js__WEBPACK_IMPORTED_MODULE_5__/* .replace */ .HC)(i,{level:n,z:n,col:r,x:r,row:t,y:t})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:String,value:"",json:{write:!0}})],L.prototype,"copyright",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:_geometry_Extent_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A,json:{write:!0},nonNullable:!0})],L.prototype,"fullExtent",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"legendEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:["show","hide"]})],L.prototype,"listMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({json:{read:!0,write:!0}})],L.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()],L.prototype,"levelValues",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],L.prototype,"isReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:["WebTiledLayer"],value:"WebTiledLayer"})],L.prototype,"operationalLayerType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"popupEnabled",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A})],L.prototype,"spatialReference",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__/* .reader */ .w)("spatialReference",["spatialReference","fullExtent.spatialReference"])],L.prototype,"readSpatialReference",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:[String],json:{write:!0}})],L.prototype,"subDomains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:_support_TileInfo_js__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A,json:{write:!0}})],L.prototype,"tileInfo",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({readOnly:!0})],L.prototype,"tileServers",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({json:{read:!1}})],L.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)()],L.prototype,"urlPath",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],L.prototype,"urlTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_11__/* .reader */ .w)("urlTemplate",["urlTemplate","templateUrl"])],L.prototype,"readUrlTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_13__/* .writer */ .K)("urlTemplate",{templateUrl:{type:String}})],L.prototype,"writeUrlTemplate",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_7__/* .property */ .MZ)({type:_support_WMTSLayerInfo_js__WEBPACK_IMPORTED_MODULE_23__/* .WMTSLayerInfo */ .x,json:{write:!0}})],L.prototype,"wmtsInfo",void 0),L=U=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_12__/* .subclass */ .$)("esri.layers.WebTileLayer")],L);const I=L;


/***/ }),

/***/ 27664:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LF: () => (/* binding */ n),
/* harmony export */   M9: () => (/* binding */ a),
/* harmony export */   zu: () => (/* binding */ i)
/* harmony export */ });
/* unused harmony exports fromJSON, toJSON */
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76724);
/* harmony import */ var _parser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81816);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(e,t,r){try{return c(e)}catch(s){r?.messages?.push(s)}return null}function a(e,r,s,n){try{const n=o(e);(0,_core_object_js__WEBPACK_IMPORTED_MODULE_1__/* .setDeepValue */ .sM)(s,n,r)}catch(a){n.messages&&n.messages.push(a)}}function o(e){const t=(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(e);return t?(0,_utils_js__WEBPACK_IMPORTED_MODULE_3__/* .isEffectFunctions */ .dw)(t)?t.map((e=>e.toJSON())):t.map((({scale:e,effects:t})=>({scale:e,value:t.map((e=>e.toJSON()))}))):null}function c(e){if(!e||0===e.length)return null;if(f(e)){const t=[];for(const r of e)t.push({scale:r.scale,value:i(r.value)});return t}return i(e)}function f(e){const t=e[0];return!!t&&"scale"in t}function i(e){if(!e?.length)return"";const t=[];for(const s of e){let e=[];switch(s.type){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":case"opacity":e=[u(s,"amount")];break;case"blur":e=[u(s,"radius","pt")];break;case"hue-rotate":e=[u(s,"angle","deg")];break;case"drop-shadow":e=[u(s,"xoffset","pt"),u(s,"yoffset","pt"),u(s,"blurRadius","pt"),l(s,"color")];break;case"bloom":e=[u(s,"strength"),u(s,"radius","pt"),u(s,"threshold")]}const n=`${s.type}(${e.filter(Boolean).join(" ")})`;(0,_parser_js__WEBPACK_IMPORTED_MODULE_2__/* .parse */ .q)(n),t.push(n)}return t.join(" ")}function u(t,r,s){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});return s?t[r]+s:""+t[r]}function l(t,r){if(null==t[r])throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("effect:missing-parameter",`Missing parameter '${r}' in ${t.type} effect`,{effect:t});const s=t[r];return`rgba(${s[0]||0}, ${s[1]||0}, ${s[2]||0}, ${s[3]/255||0})`}


/***/ }),

/***/ 81816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var _colorUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31415);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98849);
/* harmony import */ var _effects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78138);
/* harmony import */ var _chunks_commonjsHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42784);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var m,g,v={exports:{}};v.exports,g=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,r,n,u){var a=Error.call(this,t);return Object.setPrototypeOf&&Object.setPrototypeOf(a,e.prototype),a.expected=r,a.found=n,a.location=u,a.name="SyntaxError",a}function r(t,e,r){return r=r||" ",t.length>e?t:(e-=t.length,t+(r+=r.repeat(e)).slice(0,e))}function n(t,r){var n,u={},a=(r=void 0!==r?r:{}).grammarSource,o={start:Lt},c=Lt,i="none",s=")",f=",",l="(",p="%",h="px",m="cm",g="mm",v="in",d="pt",y="pc",A="deg",w="rad",x="grad",b="turn",C="#",F=".",E="e",j=/^[ \t\n\r]/,$=/^[a-z\-]/,O=/^[0-9a-fA-F]/,k=/^[+\-]/,q=/^[0-9]/,S=Bt("none"),z=Ut("none",!1),R=Ut(")",!1),I=Ut(",",!1),M=Bt("whitespace"),P=Ht([" ","\t","\n","\r"],!1,!1),N=Bt("function"),T=Ut("(",!1),U=Bt("identifier"),H=Ht([["a","z"],"-"],!1,!1),_=Bt("percentage"),B=Ut("%",!1),D=Bt("length"),G=Ut("px",!1),J=Ut("cm",!1),K=Ut("mm",!1),L=Ut("in",!1),Q=Ut("pt",!1),V=Ut("pc",!1),W=Bt("angle"),X=Ut("deg",!1),Y=Ut("rad",!1),Z=Ut("grad",!1),tt=Ut("turn",!1),et=Bt("number"),rt=Bt("color"),nt=Ut("#",!1),ut=Ht([["0","9"],["a","f"],["A","F"]],!1,!1),at=Ht(["+","-"],!1,!1),ot=Ht([["0","9"]],!1,!1),ct=Ut(".",!1),it=Ut("e",!1),st=function(){return[]},ft=function(t,e){return{type:"function",name:t,parameters:e||[]}},lt=function(t,e){return e.length>0?se(t,e,3):[t]},pt=function(t){return{type:"quantity",value:t.value,unit:t.unit}},ht=function(t){return{type:"color",colorType:t.type,value:t.value}},mt=function(t){return t},gt=function(){return Tt()},vt=function(t){return{value:t,unit:"%"}},dt=function(t){return{value:t,unit:"px"}},yt=function(t){return{value:t,unit:"cm"}},At=function(t){return{value:t,unit:"mm"}},wt=function(t){return{value:t,unit:"in"}},xt=function(t){return{value:t,unit:"pt"}},bt=function(t){return{value:t,unit:"pc"}},Ct=function(t){return{value:t,unit:"deg"}},Ft=function(t){return{value:t,unit:"rad"}},Et=function(t){return{value:t,unit:"grad"}},jt=function(t){return{value:t,unit:"turn"}},$t=function(t){return{value:t,unit:null}},Ot=function(){return{type:"hex",value:Tt()}},kt=function(t){return{type:"function",value:t}},qt=function(){return{type:"named",value:Tt()}},St=function(){return parseFloat(Tt())},zt=0,Rt=0,It=[{line:1,column:1}],Mt=0,Pt=[],Nt=0;if("startRule"in r){if(!(r.startRule in o))throw new Error("Can't start parsing from rule \""+r.startRule+'".');c=o[r.startRule]}function Tt(){return t.substring(Rt,zt)}function Ut(t,e){return{type:"literal",text:t,ignoreCase:e}}function Ht(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function _t(){return{type:"end"}}function Bt(t){return{type:"other",description:t}}function Dt(e){var r,n=It[e];if(n)return n;for(r=e-1;!It[r];)r--;for(n={line:(n=It[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return It[e]=n,n}function Gt(t,e,r){var n=Dt(t),u=Dt(e),o={source:a,start:{offset:t,line:n.line,column:n.column},end:{offset:e,line:u.line,column:u.column}};return r&&a&&"function"==typeof a.offset&&(o.start=a.offset(o.start),o.end=a.offset(o.end)),o}function Jt(t){zt<Mt||(zt>Mt&&(Mt=zt,Pt=[]),Pt.push(t))}function Kt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function Lt(){var t;return(t=Qt())===u&&(t=Vt()),t}function Qt(){var e,r;return Nt++,e=zt,Zt(),t.substr(zt,4)===i?(r=i,zt+=4):(r=u,0===Nt&&Jt(z)),r!==u?(Zt(),Rt=e,e=st()):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(S),e}function Vt(){var t,e;if(t=[],(e=Wt())!==u)for(;e!==u;)t.push(e),e=Wt();else t=u;return t}function Wt(){var e,r,n,a;return e=zt,Zt(),(r=te())!==u?(Zt(),(n=Xt())===u&&(n=null),Zt(),41===t.charCodeAt(zt)?(a=s,zt++):(a=u,0===Nt&&Jt(R)),a!==u?(Zt(),Rt=e,e=ft(r,n)):(zt=e,e=u)):(zt=e,e=u),e}function Xt(){var e,r,n,a,o,c,i,s;if(e=zt,(r=Yt())!==u){for(n=[],a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);a!==u;)n.push(a),a=zt,o=Zt(),44===t.charCodeAt(zt)?(c=f,zt++):(c=u,0===Nt&&Jt(I)),c===u&&(c=null),i=Zt(),(s=Yt())!==u?a=o=[o,c,i,s]:(zt=a,a=u);Rt=e,e=lt(r,n)}else zt=e,e=u;return e}function Yt(){var t,e;return t=zt,(e=re())===u&&(e=ne())===u&&(e=ue())===u&&(e=ae()),e!==u&&(Rt=t,e=pt(e)),(t=e)===u&&(t=zt,(e=oe())!==u&&(Rt=t,e=ht(e)),t=e),t}function Zt(){var e,r;for(Nt++,e=[],j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));r!==u;)e.push(r),j.test(t.charAt(zt))?(r=t.charAt(zt),zt++):(r=u,0===Nt&&Jt(P));return Nt--,r=u,0===Nt&&Jt(M),e}function te(){var e,r,n;return Nt++,e=zt,(r=ee())!==u?(40===t.charCodeAt(zt)?(n=l,zt++):(n=u,0===Nt&&Jt(T)),n!==u?(Rt=e,e=mt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&(r=u,0===Nt&&Jt(N)),e}function ee(){var e,r,n;if(Nt++,e=zt,r=[],$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H)),n!==u)for(;n!==u;)r.push(n),$.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(H));else r=u;return r!==u&&(Rt=e,r=gt()),Nt--,(e=r)===u&&(r=u,0===Nt&&Jt(U)),e}function re(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(37===t.charCodeAt(zt)?(n=p,zt++):(n=u,0===Nt&&Jt(B)),n!==u?(Rt=e,e=vt(r)):(zt=e,e=u)):(zt=e,e=u),Nt--,e===u&&0===Nt&&Jt(_),e}function ne(){var e,r,n;return Nt++,e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===h?(n=h,zt+=2):(n=u,0===Nt&&Jt(G)),n!==u?(Rt=e,e=dt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===m?(n=m,zt+=2):(n=u,0===Nt&&Jt(J)),n!==u?(Rt=e,e=yt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===g?(n=g,zt+=2):(n=u,0===Nt&&Jt(K)),n!==u?(Rt=e,e=At(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===v?(n=v,zt+=2):(n=u,0===Nt&&Jt(L)),n!==u?(Rt=e,e=wt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===d?(n=d,zt+=2):(n=u,0===Nt&&Jt(Q)),n!==u?(Rt=e,e=xt(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,Zt(),(r=ce())!==u?(t.substr(zt,2)===y?(n=y,zt+=2):(n=u,0===Nt&&Jt(V)),n!==u?(Rt=e,e=bt(r)):(zt=e,e=u)):(zt=e,e=u)))))),Nt--,e===u&&0===Nt&&Jt(D),e}function ue(){var e,r,n;return Nt++,e=zt,(r=ce())!==u?(t.substr(zt,3)===A?(n=A,zt+=3):(n=u,0===Nt&&Jt(X)),n!==u?(Rt=e,e=Ct(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,3)===w?(n=w,zt+=3):(n=u,0===Nt&&Jt(Y)),n!==u?(Rt=e,e=Ft(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===x?(n=x,zt+=4):(n=u,0===Nt&&Jt(Z)),n!==u?(Rt=e,e=Et(r)):(zt=e,e=u)):(zt=e,e=u),e===u&&(e=zt,(r=ce())!==u?(t.substr(zt,4)===b?(n=b,zt+=4):(n=u,0===Nt&&Jt(tt)),n!==u?(Rt=e,e=jt(r)):(zt=e,e=u)):(zt=e,e=u)))),Nt--,e===u&&(r=u,0===Nt&&Jt(W)),e}function ae(){var t,e;return Nt++,t=zt,Zt(),(e=ce())!==u?(Rt=t,t=$t(e)):(zt=t,t=u),Nt--,t===u&&0===Nt&&Jt(et),t}function oe(){var e,r,n,a;if(Nt++,e=zt,35===t.charCodeAt(zt)?(r=C,zt++):(r=u,0===Nt&&Jt(nt)),r!==u){if(n=[],O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut)),a!==u)for(;a!==u;)n.push(a),O.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ut));else n=u;n!==u?(Rt=e,e=Ot()):(zt=e,e=u)}else zt=e,e=u;return e===u&&(e=zt,(r=Wt())!==u&&(Rt=e,r=kt(r)),(e=r)===u&&(e=zt,(r=ee())!==u&&(Rt=e,r=qt()),e=r)),Nt--,e===u&&(r=u,0===Nt&&Jt(rt)),e}function ce(){var e,r,n,a,o,c,i;for(e=zt,k.test(t.charAt(zt))?(t.charAt(zt),zt++):0===Nt&&Jt(at),r=zt,n=[],q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));a!==u;)n.push(a),q.test(t.charAt(zt))?(a=t.charAt(zt),zt++):(a=u,0===Nt&&Jt(ot));if(46===t.charCodeAt(zt)?(a=F,zt++):(a=u,0===Nt&&Jt(ct)),a!==u){if(o=[],q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot)),c!==u)for(;c!==u;)o.push(c),q.test(t.charAt(zt))?(c=t.charAt(zt),zt++):(c=u,0===Nt&&Jt(ot));else o=u;o!==u?r=n=[n,a,o]:(zt=r,r=u)}else zt=r,r=u;if(r===u)if(r=[],q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot)),n!==u)for(;n!==u;)r.push(n),q.test(t.charAt(zt))?(n=t.charAt(zt),zt++):(n=u,0===Nt&&Jt(ot));else r=u;if(r!==u){if(n=zt,101===t.charCodeAt(zt)?(a=E,zt++):(a=u,0===Nt&&Jt(it)),a!==u){if(k.test(t.charAt(zt))?(o=t.charAt(zt),zt++):(o=u,0===Nt&&Jt(at)),o===u&&(o=null),c=[],q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot)),i!==u)for(;i!==u;)c.push(i),q.test(t.charAt(zt))?(i=t.charAt(zt),zt++):(i=u,0===Nt&&Jt(ot));else c=u;c!==u?n=a=[a,o,c]:(zt=n,n=u)}else zt=n,n=u;n===u&&(n=null),Rt=e,e=St()}else zt=e,e=u;return e}function ie(t,e){return t.map((function(t){return t[e]}))}function se(t,e,r){return[t].concat(ie(e,r))}if((n=c())!==u&&zt===t.length)return n;throw n!==u&&zt<t.length&&Jt(_t()),Kt(Pt,Mt<t.length?t.charAt(Mt):null,Mt<t.length?Gt(Mt,Mt+1):Gt(Mt,Mt))}return t(e,Error),e.prototype.format=function(t){var e="Error: "+this.message;if(this.location){var n,u=null;for(n=0;n<t.length;n++)if(t[n].source===this.location.source){u=t[n].text.split(/\r\n|\n|\r/g);break}var a=this.location.start,o=this.location.source&&"function"==typeof this.location.source.offset?this.location.source.offset(a):a,c=this.location.source+":"+o.line+":"+o.column;if(u){var i=this.location.end,s=r("",o.line.toString().length," "),f=u[a.line-1],l=(a.line===i.line?i.column:f.length+1)-a.column||1;e+="\n --\x3e "+c+"\n"+s+" |\n"+o.line+" | "+f+"\n"+s+" | "+r("",a.column-1," ")+r("",l,"^")}else e+="\n at "+c}return e},e.buildMessage=function(t,e){var r={literal:function(t){return'"'+u(t.text)+'"'},class:function(t){var e=t.parts.map((function(t){return Array.isArray(t)?a(t[0])+"-"+a(t[1]):a(t)}));return"["+(t.inverted?"^":"")+e.join("")+"]"},any:function(){return"any character"},end:function(){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function u(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function o(t){return r[t.type](t)}function c(t){var e,r,n=t.map(o);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function i(t){return t?'"'+u(t)+'"':"end of input"}return"Expected "+c(t)+" but "+i(e)+" found."},{SyntaxError:e,parse:n}},(m=v).exports&&(m.exports=g());var d=v.exports;function y(t){if(!t||0===t.length)return null;if("string"==typeof t){const e=A(t);return e&&0!==e.length?e:null}const e=t.map((t=>{if(!Number.isFinite(t.scale)||t.scale<=0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-scale","scale must be finite and greater than 0",{stop:t});return{scale:t.scale,effects:A(t.value)}}));e.sort(((t,e)=>e.effects.length-t.effects.length));for(let r=0;r<e.length-1;r++){if(!(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .canInterpolateEffects */ .mj)(e[r].effects,e[r+1].effects))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[r].effects,b:e[r+1].effects});(0,_utils_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeEffects */ .O9)(e[r].effects,e[r+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}function A(t){let e;if(!t)return[];try{e=d.parse(t)}catch(r){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:invalid-syntax","Invalid effect syntax",{value:t,error:r})}return e.map((t=>w(t)))}function w(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return x(t);case"opacity":return b(t);case"hue-rotate":return C(t);case"blur":return F(t);case"drop-shadow":return E(t);case"bloom":return j(t)}}catch(e){throw e.details.filter=t,e}throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function x(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .ColorMatrixEffect */ .yG(t.name,e)}function b(t){let e=1;return $(t.parameters,1),1===t.parameters.length&&(e=P(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .OpacityEffect */ .jm(e)}function C(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=T(t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .HueRotateEffect */ .Nd(e)}function F(t){let e=0;return $(t.parameters,1),1===t.parameters.length&&(e=U(t.parameters[0]),k(e,t.parameters[0])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BlurEffect */ .Fk(e)}function E(t){const e=[];let r=null;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","Accepts only one color",{});r=H(n)}else{const t=U(n);if(Object.isFrozen(e))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&k(t,n)}if(e.length<2||e.length>3)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .DropShadowEffect */ .$b(e[0],e[1],e[2]||0,r||_("black"))}function j(t){let e=1,r=0,n=0;return $(t.parameters,3),t.parameters[0]&&(e=P(t.parameters[0])),t.parameters[1]&&(r=U(t.parameters[1]),k(r,t.parameters[1])),t.parameters[2]&&(n=P(t.parameters[2])),new _effects_js__WEBPACK_IMPORTED_MODULE_2__/* .BloomEffect */ .bv(e,r,n)}function $(t,e){if(t.length>e)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function O(t){if("color"===t.type)return"<color>";if(t.unit){if(t.unit in I)return"<length>";if(t.unit in z)return"<angle>";if("%"===t.unit)return"<percentage>"}return"<double>"}function k(t,e){if(t<0)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}function q(t){if("quantity"!==t.type||null!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double>, Actual: ${O(t)}`,{term:t})}function S(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <double> or <percentage>, Actual: ${O(t)}`,{term:t})}const z={deg:1,grad:.9,rad:180/Math.PI,turn:360};function R(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=z[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <angle>, Actual: ${O(t)}`,{term:t})}const I={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/72};function M(t){if("quantity"!==t.type||!(0===t.value&&null===t.unit||t.unit&&null!=I[t.unit]))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:type-error",`Expected <length>, Actual: ${O(t)}`,{term:t})}function P(t){S(t);const e=t.value;return k(e,t),"%"===t.unit?.01*e:e}function N(t){return q(t),k(t.value,t),t.value}function T(t){return R(t),t.value*z[t.unit]||0}function U(t){return M(t),t.value*I[t.unit]||0}function H(e){switch(e.colorType){case"hex":return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hex2rgba */ .qh)(e.value);case"named":return _(e.value);case"function":return G(e.value)}}function _(t){if(!(0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isNamedColor */ .V6)(t))throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getNamedColorCopy */ .c4)(t)}const B=/^rgba?/i,D=/^hsla?/i;function G(t){if($(t.parameters,4),B.test(t.name))return[P(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1];if(D.test(t.name))return (0,_colorUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .hsla2rgba */ .z$)(N(t.parameters[0]),P(t.parameters[1]),P(t.parameters[2]),t.parameters[3]?P(t.parameters[3]):1);throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}


/***/ }),

/***/ 15305:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/* harmony import */ var _effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27664);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const i={read:{reader:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .read */ .LF},write:{allowNull:!0,writer:_effects_jsonUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .write */ .M9}},a=t=>{let s=class extends t{constructor(){super(...arguments),this.blendMode="normal",this.effect=null}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:["average","color-burn","color-dodge","color","darken","destination-atop","destination-in","destination-out","destination-over","difference","exclusion","hard-light","hue","invert","lighten","lighter","luminosity","minus","multiply","normal","overlay","plus","reflect","saturation","screen","soft-light","source-atop","source-in","source-out","vivid-light","xor"],nonNullable:!0,json:{read:!1,write:!1,origins:{"web-map":{read:!0,write:!0},"portal-item":{read:!0,write:!0}}}})],s.prototype,"blendMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({json:{read:!1,write:!1,origins:{"web-map":i,"portal-item":i}}})],s.prototype,"effect",void 0),s=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.BlendLayer")],s),s};


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

/***/ 34722:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21121);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86394);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12690);
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98849);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(539);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(6267);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40189);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(20909);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75094);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63863);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(77542);
/* harmony import */ var _support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(40454);
/* harmony import */ var _portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(10282);
/* harmony import */ var _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26099);
/* harmony import */ var _portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(68770);
/* harmony import */ var _portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(39532);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const j=j=>{let _=class extends j{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_21__/* .destroyMaybe */ .pR)(this.portalItem),this.resourceReferences.portalItem=null,this.resourceReferences.paths.length=0}set portalItem(e){e!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",e))}readPortalItem(e,t,r){if(t.itemId)return new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:t.itemId,portal:r?.portal})}writePortalItem(e,t){e?.id&&(t.itemId=e.id)}async loadFromPortal(e,t){if(this.portalItem?.id)try{const{load:r}=await __webpack_require__.e(/* import() */ 4085).then(__webpack_require__.bind(__webpack_require__, 14085));return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAborted */ .Te)(t),await r({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData,layerModuleTypeMap:e.layerModuleTypeMap},t)}catch(r){throw (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .isAbortError */ .zf)(r)||_core_Logger_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.getLogger(this).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${r}`),r}}async finishLoadEditablePortalLayer(e){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(e).catch((e=>((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(e),!0))))}async setUserPrivileges(e,r){if(!_config_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(r);if(this.url)try{const{features:{edit:t,fullEdit:s},content:{updateItem:i}}=await this._fetchUserPrivileges(e,r);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",s),this._set("userHasUpdateItemPrivileges",i)}catch(s){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(s)}}async _fetchUserPrivileges(e,t){let s=this.portalItem;if(!e||!s||!s.loaded||s.sourceUrl)return this._fetchFallbackUserPrivileges(t);const i=e===s.id;if(i&&s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s);let o,a;if(i)o=s.portal.url;else try{o=await (0,_support_layerUtils_js__WEBPACK_IMPORTED_MODULE_16__/* .getOwningPortalUrl */ .wI)(this.url,t)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}if(!o||!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSameCanonicalPortal */ .b8)(o,s.portal.url))return this._fetchFallbackUserPrivileges(t);try{const e=null!=t?t.signal:null;a=await(_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.getCredential(`${o}/sharing`,{prompt:!1,signal:e}))}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}const l=!0,n=!1,p=!1;if(!a)return{features:{edit:l,fullEdit:n},content:{updateItem:p}};try{if(i?await s.reload():(s=new _portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]({id:e,portal:{url:o}}),await s.load(t)),s.portal.user)return (0,_portal_support_portalItemUtils_js__WEBPACK_IMPORTED_MODULE_20__/* .getUserPrivileges */ .It)(s)}catch(m){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(m)}return{features:{edit:l,fullEdit:n},content:{updateItem:p}}}async _fetchFallbackUserPrivileges(e){let t=!0;try{t=await this._fetchUserHasEditingPrivileges(e)}catch(r){(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_7__/* .throwIfAbortError */ .QP)(r)}return{features:{edit:t,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(e){const t=this.url?_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id?.findCredential(this.url):null;if(!t)return!0;const s=E.credential===t?E.user:await this._fetchEditingUser(e);return E.credential=t,E.user=s,null==s?.privileges||s.privileges.includes("features:user:edit")}async _fetchEditingUser(e){const t=this.portalItem?.portal?.user;if(t)return t;const o=_kernel_js__WEBPACK_IMPORTED_MODULE_2__.id.findServerInfo(this.url??"");if(!o?.owningSystemUrl)return null;const a=`${o.owningSystemUrl}/sharing/rest`,l=_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault();if(l&&l.loaded&&(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(l.restUrl)===(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .normalize */ .S8)(a))return l.user;const n=`${a}/community/self`,p=null!=e?e.signal:null,u=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .result */ .Ke)((0,_request_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(n,{authMode:"no-prompt",query:{f:"json"},signal:p}));return u.ok?_portal_PortalUser_js__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.fromJSON(u.value.data):null}read(e,t){t&&(t.layer=this),super.read(e,t)}write(e,t){const r=t?.portal,s=this.portalItem?.id&&(this.portalItem.portal||_portal_Portal_js__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A.getDefault());return r&&s&&!(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .hasSamePortal */ .ut)(s.restUrl,r.restUrl)?(t.messages&&t.messages.push(new _core_Error_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(e,{...t,layer:this})}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:_portal_PortalItem_js__WEBPACK_IMPORTED_MODULE_18__["default"]})],_.prototype,"portalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_13__/* .reader */ .w)("web-document","portalItem",["itemId"])],_.prototype,"readPortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_15__/* .writer */ .K)("web-document","portalItem",{itemId:{type:String}})],_.prototype,"writePortalItem",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({clonable:!1})],_.prototype,"resourceReferences",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasFullEditingPrivileges",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_9__/* .property */ .MZ)({type:Boolean,readOnly:!0})],_.prototype,"userHasUpdateItemPrivileges",void 0),_=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_14__/* .subclass */ .$)("esri.layers.mixins.PortalLayer")],_),_},E={credential:null,user:null};


/***/ }),

/***/ 50508:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ RefreshableLayer_f)
});

// UNUSED EXPORTS: isRefreshableLayer

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(4130);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(73324);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(48982);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/asyncUtils.js
var asyncUtils = __webpack_require__(12690);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/watch.js
var watch = __webpack_require__(39425);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var trackingUtils = __webpack_require__(97996);
;// ../node_modules/@arcgis/core/layers/mixins/refresh.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=new Collection/* default */.A,o=new WeakMap;function n(e){f(e)&&t.push(new WeakRef(e))}function s(e){const r=t.find((r=>r.deref()===e));r&&t.remove(r)}function f(e){return null!=e&&"object"==typeof e&&"refreshInterval"in e&&"refresh"in e}function c(e,r){return Number.isFinite(e)&&Number.isFinite(r)?r<=0?e:c(r,e%r):0}let i=0,l=0;function a(){const e=Date.now();let r=!1;for(const n of t){const t=n.deref();if(t){if(t.refreshInterval){e-(o.get(t)??0)+5>=6e4*t.refreshInterval&&(o.set(t,e),t.refresh(e))}}else r=!0}if(r)for(let o=t.length-1;o>=0;o--){t.at(o).deref()||t.removeAt(o)}}(0,trackingUtils/* autorun */.fm)((()=>{const e=Date.now();let r=0;for(const n of t){const t=n.deref();t&&(r=c(Math.round(6e4*t.refreshInterval),r),t.refreshInterval?o.get(t)||o.set(t,e):o.delete(t))}if(r!==l){if(l=r,clearInterval(i),0===l)return void(i=0);i=setInterval(a,l)}}));const u={get hasRefreshTimer(){return i>0},get tickInterval(){return l},forceRefresh(){a()},hasLayer:e=>f(e)&&t.some((r=>r.deref()===e)),clear(){for(const e of t){const r=e.deref();r&&o.delete(r)}t.removeAll()}};

;// ../node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function RefreshableLayer_c(e){return null!=e&&"object"==typeof e&&"refreshTimestamp"in e&&"refresh"in e}const m=.1,RefreshableLayer_f=c=>{let f=class extends c{constructor(...e){super(...e),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=(0,promiseUtils/* debounce */.sg)((()=>this.hasDataChanged())),this.when().then((()=>{this.destroyed||n(this)}),(()=>{}))}destroy(){s(this)}castRefreshInterval(e){return e>=m?e:e<=0?0:m}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(e=Date.now()){(0,promiseUtils/* ignoreAbortErrors */.QZ)(this._debounceHasDataChanged()).then((r=>{r&&this._set("refreshTimestamp",e),this.emit("refresh",{dataChanged:r})}),(e=>{Logger/* default */.A.getLogger(this).error(e),this.emit("refresh",{dataChanged:!1,error:e})}))}async hasDataChanged(){return!0}get test(){const e=this;return{set refreshInterval(r){e._set("refreshInterval",r)}}}};return (0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],f.prototype,"refreshInterval",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("refreshInterval")],f.prototype,"castRefreshInterval",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"refreshTimestamp",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],f.prototype,"refreshParameters",null),f=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.RefreshableLayer")],f),f};


/***/ }),

/***/ 25389:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73446);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85569);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39831);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const t=t=>{let l=class extends t{constructor(){super(...arguments),this.minScale=0,this.maxScale=0}get effectiveScaleRange(){const e={minScale:this.minScale,maxScale:this.maxScale},a=this.parent;a&&"effectiveScaleRange"in a&&r(e,a.effectiveScaleRange);const c=this._get("effectiveScaleRange");return c&&c.minScale===e.minScale&&c.maxScale===e.maxScale?c:e}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"minScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"maxScale",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({readOnly:!0})],l.prototype,"effectiveScaleRange",null),l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ScaleRangeLayer")],l),l};function r(e,a){return e.minScale=e.minScale>0?a.minScale>0?Math.min(e.minScale,a.minScale):e.minScale:a.minScale,e.maxScale=e.maxScale>0?a.maxScale>0?Math.max(e.maxScale,a.maxScale):e.maxScale:a.maxScale,e}


/***/ }),

/***/ 2555:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const n=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];function o(o){return null!=o&&n.some((([n,t])=>o>=n&&o<=t))}


/***/ }),

/***/ 91690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   i: () => (/* binding */ n),
/* harmony export */   p: () => (/* binding */ o)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(n,c){if(n&&c)for(const f of n.children)if(f.localName in c){const n=c[f.localName];if("function"==typeof n){const c=n(f);c&&o(f,c)}else o(f,n)}}function*n(o,c){for(const f of o.children)if(f.localName in c){const o=c[f.localName];"function"==typeof o?yield o(f):yield*n(f,o)}}


/***/ }),

/***/ 68820:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
class e{constructor(l,t=0,i=l.lods[l.lods.length-1].level){this.tileInfo=l,this.minLOD=t,this.maxLOD=i,l.lodAt(t)||(this.minLOD=l.lods[0].level),l.lodAt(i)||(this.maxLOD=l.lods[l.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(l,t,i){const e=this.tileInfo?.lodAt(l);return!e||l<this.minLOD||l>this.maxLOD?"unavailable":e.cols&&e.rows?i>=e.cols[0]&&i<=e.cols[1]&&t>=e.rows[0]&&t<=e.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(i,e,o,s){await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .waitTick */ .NO)(s);const a=this.getAvailability(i,e,o);if("unavailable"===a)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("tile-map:tile-unavailable","Tile is not available",{level:i,row:e,col:o});return a}async fetchAvailabilityUpsample(l,e,o,s,a){await (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .waitTick */ .NO)(a),s.level=l,s.row=e,s.col=o;const n=this.tileInfo;return n.updateTileInfo(s),this.fetchAvailability(l,e,o,a).catch((l=>{if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isAbortError */ .zf)(l))throw l;if(n.upsampleTile(s))return this.fetchAvailabilityUpsample(s.level,s.row,s.col,s,a);throw l}))}}


/***/ }),

/***/ 65476:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   x: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66866);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21877);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19251);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21564);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(73446);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63863);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var i;let p=i=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__/* .JSONSupport */ .oY{constructor(r){super(r)}clone(){return new i({customLayerParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.customLayerParameters),customParameters:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=i=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layer.support.WMTSLayerInfo")],p);


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

/***/ 52775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ o),
/* harmony export */   m: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function t(t,o,a){let c;try{c=await createImageBitmap(t)}catch(l){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",`Unable to load ${o}`,{url:o,error:l})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(a),c}async function o(t,o,a,c,l){let n;try{n=await createImageBitmap(t)}catch(i){throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",`Unable to load tile ${o}/${a}/${c}`,{error:i,level:o,row:a,col:c})}return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(l),n}


/***/ }),

/***/ 39532:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ce: () => (/* binding */ f),
/* harmony export */   It: () => (/* binding */ p),
/* harmony export */   LG: () => (/* binding */ i),
/* harmony export */   OM: () => (/* binding */ a),
/* harmony export */   Y: () => (/* binding */ s),
/* harmony export */   bK: () => (/* binding */ c),
/* harmony export */   sQ: () => (/* binding */ l)
/* harmony export */ });
/* unused harmony export toggleTypeKeword */
/* harmony import */ var _geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13484);
/* harmony import */ var _geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78983);
/* harmony import */ var _geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96082);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
async function o(o){const i=o.spatialReference;if(i.isWGS84)return o.clone();if(i.isWebMercator)return (0,_geometry_support_webMercatorUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .webMercatorToGeographic */ .ci)(o);const s=_geometry_SpatialReference_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.WGS84;return await (0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.initializeProjection)(i,s),(0,_geometry_projection_js__WEBPACK_IMPORTED_MODULE_0__.project)(o,s)}function i(e,t){if(!s(e,t)){const r=e.typeKeywords;r?r.push(t):e.typeKeywords=[t]}}function s(e,t){return!!e.typeKeywords?.includes(t)}function c(e){return s(e,f.HOSTED_SERVICE)}function a(e,t){const r=e.typeKeywords;if(r){const e=r.indexOf(t);e>-1&&r.splice(e,1)}}function u(e,t,r){r?i(e,t):a(e,t)}async function l(e){const t=e.clone().normalize();let r;if(t.length>1)for(const n of t)r?n.width>r.width&&(r=n):r=n;else r=t[0];return o(r)}const f={DEVELOPER_BASEMAP:"DeveloperBasemap",JSAPI:"ArcGIS API for JavaScript",METADATA:"Metadata",MULTI_LAYER:"Multilayer",SINGLE_LAYER:"Singlelayer",TABLE:"Table",HOSTED_SERVICE:"Hosted Service",LOCAL_SCENE:"ViewingMode-Local",TILED_IMAGERY:"Tiled Imagery",GROUP_LAYER_MAP:"Map"};function p(e){const{portal:t,isOrgItem:r,itemControl:n}=e,o=t.user?.privileges;let i=!o||o.includes("features:user:edit"),s=!!r&&!!o?.includes("features:user:fullEdit");const c="update"===n||"admin"===n;return c?s=i=!0:s&&(i=!0),{features:{edit:i,fullEdit:s},content:{updateItem:c}}}


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