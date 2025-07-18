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


/***/ })

};
;