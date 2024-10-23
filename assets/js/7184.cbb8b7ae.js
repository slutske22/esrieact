"use strict";
exports.id = 7184;
exports.ids = [7184];
exports.modules = {

/***/ 27184:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeAttachmentQuery: () => (/* binding */ c),
/* harmony export */   fetchAttachments: () => (/* binding */ m),
/* harmony export */   processAttachmentQueryResult: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86394);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80323);
/* harmony import */ var _support_AttachmentInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22531);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function s(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o}function a(o,n){const s={};for(const a of n){const{parentObjectId:n,parentGlobalId:c,attachmentInfos:m}=a;for(const a of m){const{id:m}=a,p=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .addProxy */ .yM)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__/* .addTokenParameter */ .Y3)(`${o.path}/${n}/attachments/${m}`)),i=_support_AttachmentInfo_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(a);i.set({url:p,parentObjectId:n,parentGlobalId:c}),s[n]?s[n].push(i):s[n]=[i]}}return s}function c(t,e,r){let a={query:(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .mapParameters */ .z)({...t.query,f:"json",...s(e)})};return r&&(a={...r,...a,query:{...r.query,...a.query}}),(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t.path+"/queryAttachments",a).then((t=>t.data.attachmentGroups))}async function m(t,e,n){const{objectIds:r}=e,s=[];for(const a of r)s.push((0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t.path+"/"+a+"/attachments",n));return Promise.all(s).then((t=>r.map(((o,e)=>({parentObjectId:o,attachmentInfos:t[e].data.attachmentInfos})))))}


/***/ }),

/***/ 22531:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ l)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
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
;// ../node_modules/@arcgis/core/layers/support/exifUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function n(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a?.value||null}

;// ../node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var s;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let a=s=class extends JSONSupport/* JSONSupport */.oY{constructor(t){super(t),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:t}=this,o=n({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:t});return p[o]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"contentType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],a.prototype,"exifInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],a.prototype,"orientationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],a.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"globalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"keywords",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],a.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],a.prototype,"parentGlobalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],a.prototype,"parentObjectId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],a.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],a.prototype,"url",void 0),a=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.AttachmentInfo")],a);const l=a;


/***/ })

};
;