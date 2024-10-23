"use strict";
exports.id = 5106;
exports.ids = [5106];
exports.modules = {

/***/ 85106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   execute: () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98849);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function e(e,s){let a=s.responseType;a?"array-buffer"!==a&&"blob"!==a&&"json"!==a&&"native"!==a&&"native-request-init"!==a&&"text"!==a&&(a="text"):a="json",s.responseType=a;const r=s.signal;return delete s.signal,globalThis.invokeStaticMessage("request",{url:e,options:s},{signal:r}).then((async n=>{let o,i,l,u,c;if(n.data)if(n.data instanceof ArrayBuffer){if(!("json"!==a&&"text"!==a&&"blob"!==a||(o=new Blob([n.data]),"json"!==a&&"text"!==a||(u=await o.text(),"json"!==a)))){try{i=JSON.parse(u||null)}catch(p){const a={...p,url:e,requestOptions:s};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",p.message,a)}if(i.error){const a={...i.error,url:e,requestOptions:s};throw new _Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A("request:server",i.error.message,a)}}}else"native"===a&&(n.data.signal=r,l=await fetch(n.data.url,n.data),n.httpStatus=l.status);switch(a){case"blob":c=o;break;case"json":c=i;break;case"native":c=l;break;case"text":c=u;break;default:c=n.data}return{data:c,httpStatus:n.httpStatus,requestOptions:s,ssl:n.ssl,url:e}}))}


/***/ })

};
;