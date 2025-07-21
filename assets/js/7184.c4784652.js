"use strict";
exports.id = 7184;
exports.ids = [7184];
exports.modules = {

/***/ 27184:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   executeAttachmentQuery: () => (/* binding */ c),
/* harmony export */   fetchAttachments: () => (/* binding */ i),
/* harmony export */   processAttachmentQueryResult: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28830);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86394);
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20909);
/* harmony import */ var _operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80323);
/* harmony import */ var _support_AttachmentInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44912);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(t){const o=t.toJSON();return o.attachmentTypes&&(o.attachmentTypes=o.attachmentTypes.join(",")),o.keywords&&(o.keywords=o.keywords.join(",")),o.globalIds&&(o.globalIds=o.globalIds.join(",")),o.objectIds&&(o.objectIds=o.objectIds.join(",")),o.size&&(o.size=o.size.join(",")),o.orderByFields&&(o.orderByFields=o.orderByFields.join(",")),o}function a(o,r){const s={};for(const a of r){const{parentObjectId:r,parentGlobalId:c,attachmentInfos:i}=a;for(const a of i){const{id:i}=a,d=(0,_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .addProxy */ .yM)((0,_kernel_js__WEBPACK_IMPORTED_MODULE_0__/* .addTokenParameter */ .Y3)(`${o.path}/${r}/attachments/${i}`)),m=_support_AttachmentInfo_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.fromJSON(a);m.set({url:d,parentObjectId:r,parentGlobalId:c}),s[r]?s[r].push(m):s[r]=[m]}}return s}function c(t,e,n){let a={query:(0,_operations_urlUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .mapParameters */ .z)({...t.query,f:"json",...s(e)})};return n&&(a={...n,...a,query:{...n.query,...a.query}}),(0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t.path+"/queryAttachments",a).then((t=>t.data.attachmentGroups))}async function i(t,e,r){const{objectIds:n}=e,s=[];for(const a of n)s.push((0,_request_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(t.path+"/"+a+"/attachments",r));return Promise.all(s).then((t=>n.map(((o,e)=>({parentObjectId:o,attachmentInfos:t[e].data.attachmentInfos})))))}


/***/ }),

/***/ 44912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ d)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(21877);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
;// ../node_modules/@arcgis/core/layers/support/exifUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){const{exifInfo:e,exifName:a,tagName:u}=n;if(!e||!a||!u)return null;const f=e.find((n=>n.name===a));return f?t({tagName:u,tags:f.tags}):null}function t(n){const{tagName:t,tags:e}=n;if(!e||!t)return null;const a=e.find((n=>n.name===t));return a?.value||null}

;// ../node_modules/@arcgis/core/rest/query/support/AttachmentInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;const p={1:{id:1,rotation:0,mirrored:!1},2:{id:2,rotation:0,mirrored:!0},3:{id:3,rotation:180,mirrored:!1},4:{id:4,rotation:180,mirrored:!0},5:{id:5,rotation:-90,mirrored:!0},6:{id:6,rotation:90,mirrored:!1},7:{id:7,rotation:90,mirrored:!0},8:{id:8,rotation:-90,mirrored:!1}};let d=s=class extends JSONSupport/* default */.A{constructor(o){super(o),this.contentType=null,this.exifInfo=null,this.id=null,this.globalId=null,this.keywords=null,this.name=null,this.parentGlobalId=null,this.parentObjectId=null,this.size=null,this.url=null}get orientationInfo(){const{exifInfo:o}=this,t=n({exifName:"Exif IFD0",tagName:"Orientation",exifInfo:o});return p[t]||null}clone(){return new s({contentType:this.contentType,exifInfo:this.exifInfo,id:this.id,globalId:this.globalId,keywords:this.keywords,name:this.name,parentGlobalId:this.parentGlobalId,parentObjectId:this.parentObjectId,size:this.size,url:this.url})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],d.prototype,"contentType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"exifInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],d.prototype,"orientationInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],d.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],d.prototype,"globalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],d.prototype,"keywords",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],d.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],d.prototype,"parentGlobalId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],d.prototype,"parentObjectId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:ensureType/* Integer */.jz})],d.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],d.prototype,"url",void 0),d=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.rest.query.support.AttachmentInfo")],d);


/***/ })

};
;