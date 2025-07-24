"use strict";
exports.id = 18740;
exports.ids = [18740];
exports.modules = {

/***/ 18740:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  executeAttachmentQuery: () => (/* binding */ c),
  fetchAttachments: () => (/* binding */ i),
  processAttachmentQueryResult: () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/kernel.js
var kernel = __webpack_require__(6480);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/operations/urlUtils.js
var operations_urlUtils = __webpack_require__(49173);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
;// ./node_modules/@arcgis/core/layers/support/exifUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a?.value||null}

;// ./node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let AttachmentInfo_d=s=class extends JSONSupport/* default */.A{constructor(o){super(o),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:o}=this,t=n({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:o});return p[t]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],AttachmentInfo_d.prototype,"contentType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],AttachmentInfo_d.prototype,"exifInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],AttachmentInfo_d.prototype,"orientationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],AttachmentInfo_d.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],AttachmentInfo_d.prototype,"globalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],AttachmentInfo_d.prototype,"keywords",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],AttachmentInfo_d.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],AttachmentInfo_d.prototype,"parentGlobalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],AttachmentInfo_d.prototype,"parentObjectId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],AttachmentInfo_d.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],AttachmentInfo_d.prototype,"url",void 0),AttachmentInfo_d=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.query.support.AttachmentInfo")],AttachmentInfo_d);

;// ./node_modules/@arcgis/core/rest/query/operations/queryAttachments.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function queryAttachments_s(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o}function a(o,r){const s={};for(const a of r){const{parentObjectId:r,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,d=(0,urlUtils/* addProxy */.yM)((0,kernel/* addTokenParameter */.Y3)(`${o.path}/${r}/attachments/${i}`)),m=AttachmentInfo_d.fromJSON(a);m.set({url:d,parentObjectId:r,parentGlobalId:c}),s[r]?s[r].push(m):s[r]=[m]}}return s}function c(t,e,n){let a={query:(0,operations_urlUtils/* mapParameters */.z)({...t.query,f:"json",...queryAttachments_s(e)})};return n&&(a={...n,...a,query:{...n.query,...a.query}}),(0,request/* default */.A)(t.path+"/queryAttachments",a).then((t=>t.data.attachmentGroups))}async function i(t,e,r){const{objectIds:n}=e,s=[];for(const a of n)s.push((0,request/* default */.A)(t.path+"/"+a+"/attachments",r));return Promise.all(s).then((t=>n.map(((o,e)=>({parentObjectId:o,attachmentInfos:t[e].data.attachmentInfos})))))}


/***/ })

};
;