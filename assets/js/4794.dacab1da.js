"use strict";
exports.id = 4794;
exports.ids = [4794];
exports.modules = {

/***/ 14794:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  createConnection: () => (/* binding */ o)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry.js
var geometry = __webpack_require__(17639);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/request.js
var request = __webpack_require__(86394);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(98849);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/promiseUtils.js
var promiseUtils = __webpack_require__(40189);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(20909);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(73446);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(85569);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/zscale.js
var zscale = __webpack_require__(8034);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Evented.js
var Evented = __webpack_require__(17306);
;// ../node_modules/@arcgis/core/layers/support/StreamConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let c=class extends Evented/* default */.A.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new Error/* default */.A("stream-connection",this.errorString):null}onFeature(r){this.emit("data-received",r)}onMessage(r){this.emit("message-received",r)}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],c.prototype,"connectionError",null),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.StreamConnection")],c);const i=c;

;// ../node_modules/@arcgis/core/layers/graphics/sources/connections/WebSocketConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
var h;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(h||(h={}));let d=class extends i{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:o,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=(0,zscale/* getGeometryZScaler */.N)(t,s,o),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),null!=this._websocket&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(null==this._websocket)return"disconnected";switch(this._websocket.readyState){case h.CONNECTING:case h.OPEN:return"connected";case h.CLOSING:case h.CLOSED:return"disconnected"}}sendMessageToSocket(e){null!=this._websocket?this._websocket.send(JSON.stringify(e)):this._outstandingMessages.push(e)}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,null!=this._websocket&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,r=1e3,i=0){try{if(this.destroyed)return;const t=(0,urlUtils/* addQueryParameters */.a6)(e,this._config.customParameters??{});this._websocket=await this._createWebSocket(t),this.notifyChange("connectionStatus")}catch(c){const n=r/1e3;return this._config.maxReconnectionAttempts&&i>=this._config.maxReconnectionAttempts?(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,c)),await (0,promiseUtils/* after */.Pl)(r),this._tryCreateWebSocket(e,Math.min(1.5*r,1e3*this._config.maxReconnectionInterval),i+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=e=>{try{const t=JSON.parse(e.data);this._onMessage(t)}catch(s){return void Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Failed to parse message, invalid JSON",{error:s}))}}}_createWebSocket(e){return new Promise(((t,o)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=e=>this._onClose(e),s.onerror=e=>this._onError(e),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=e=>{s.onopen=s.onclose=null,o(e)}}))}async _handshake(e=1e4){const s=this._websocket;if(null==s)return;const n=(0,promiseUtils/* createResolver */.Tw)(),i=s.onmessage,{filter:c,outFields:a,spatialReference:l}=this._config;return n.timeout(e),s.onmessage=e=>{let r=null;try{r=JSON.parse(e.data)}catch(h){}r&&"object"==typeof r||(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),n.reject(),this.destroy()),r.spatialReference?.wkid!==l?.wkid&&(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${l.wkid}`,e.data)),n.reject(),this.destroy()),"json"!==r.format&&(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),n.reject(),this.destroy()),c&&r.filter!==c&&Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Tried to set filter, but server doesn't support it")),a&&r.outFields!==a&&Logger/* default */.A.getLogger(this).error(new Error/* default */.A("websocket-connection","Tried to set outFields, but server doesn't support it")),s.onmessage=i;for(const t of this._outstandingMessages)s.send(JSON.stringify(t));this._outstandingMessages=[],n.resolve()},s.send(JSON.stringify({filter:c,outFields:a,format:"json",spatialReference:{wkid:l.wkid}})),n.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)null!=this._featureZScaler&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),Logger/* default */.A.getLogger(this).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&Logger/* default */.A.getLogger(this).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"connectionStatus",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],d.prototype,"errorString",void 0),d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.connections.WebSocketConnection")],d);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/query/operations/query.js
var query = __webpack_require__(8132);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/rest/support/Query.js
var Query = __webpack_require__(14474);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/support/jsonUtils.js
var jsonUtils = __webpack_require__(1171);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(78983);
;// ../node_modules/@arcgis/core/layers/graphics/sources/connections/GeoEventConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
const GeoEventConnection_h=1e4,GeoEventConnection_d={maxQueryDepth:5,maxRecordCountFactor:3};let g=class extends d{constructor(e){super({...GeoEventConnection_d,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||Logger/* default */.A.getLogger(this).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:o}=this._config;this.destroyed||this._setFilter(r,o)}_onMessage(e){if("attributes"in e){let o;try{o=this._enrich(e),null!=this._featureZScaler&&this._featureZScaler(o.geometry)}catch(t){return void Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Failed to parse message",t))}this.onFeature(o)}else this.onMessage(e)}async _fetchServiceDefinition(e){const r={f:"json",...this._config.customParameters},s=(0,request/* default */.A)(e.path,{query:r,responseType:"json"}),o=(await s).data;return this._serviceDefinition=o,o}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return (0,urlUtils/* addQueryParameters */.a6)(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(t.includes("wss"))return t;return Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const i=this._websocket;if(null==i||null==e&&null==t)return;const n=JSON.stringify({filter:this._serializeFilter(e,t)});let a=!1;const c=(0,promiseUtils/* createResolver */.Tw)(),u=()=>{a||(this.destroyed||this._websocket!==i||Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Server timed out when setting filter")),c.reject())},l=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),c.reject(t.error)),this._setWebSocketJSONParseHandler(i),a=!0,c.resolve())};return i.onmessage=l,i.send(n),setTimeout(u,GeoEventConnection_h),c.promise}_serializeFilter(e,t){const o={};if(null==e&&null==t)return o;if(e?.geometry)try{const t=(0,jsonUtils/* fromJSON */.rS)(e.geometry);if("extent"!==t.type)throw new Error/* default */.A(`Expected extent but found type ${t.type}`);o.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(i){Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Encountered an error when setting connection geometryDefinition",i))}return e?.where&&"1 = 1"!==e.where&&"1=1"!==e.where&&(o.where=e.where),null!=t&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,o=e.attributes[t],i=this._relatedFeatures.get(o);if(!i)return Logger/* default */.A.getLogger(this).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:n,geometry:a}=i;for(const r in n)e.attributes[r]=n[r];return a&&(e.geometry=a),e.geometry||e.centroid||Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const i of o.features)this.onFeature(this._enrich(i))}catch(e){Logger/* default */.A.getLogger(this).error(new Error/* default */.A("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 83780))).default)({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,i=r.query.supportsCentroid,n=this._config.maxRecordCountFactor,a=t.capabilities.query.maxRecordCount,l=s?a*n:a,h=new Query/* default */.A;if(h.outFields=this._config.outFields??["*"],h.where=this._config.filter?.where??"1=1",h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=SpatialReference/* default */.A.fromJSON(this._config.spatialReference),i&&(h.returnCentroid=!0),s&&(h.maxRecordCountFactor=n),o)return h.num=l,t.destroy(),this._queryPages(e,h);const d=await (0,query/* executeQuery */.eW)(e,h,this._config.sourceSpatialReference);return t.destroy(),d.data}async _queryPages(e,t,r=[],s=0){t.start=null!=t.num?s*t.num:null;const{data:o}=await (0,query/* executeQuery */.eW)(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<(this._config.maxQueryDepth??0)?(o.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,s+1)):(r.forEach((e=>o.features.push(e))),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const e=o.attributes[s];t.set(e,o)}this._relatedFeatures=t}};g=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.connections.GeoEventConnection")],g);const y=g;

;// ../node_modules/@arcgis/core/layers/support/ClientSideConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
let ClientSideConnection_c=class extends i{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:r,spatialReference:t,sourceSpatialReference:s}=e;this._featureZScaler=(0,zscale/* getGeometryZScaler */.N)(r,s,t)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const r of e.features)null!=this._featureZScaler&&this._featureZScaler(r.geometry),this.onFeature(r)}this.onMessage(e)}};(0,tslib_es6._)([(0,property/* property */.MZ)()],ClientSideConnection_c.prototype,"connectionStatus",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],ClientSideConnection_c.prototype,"errorString",void 0),ClientSideConnection_c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.ClientSideConnection")],ClientSideConnection_c);

;// ../node_modules/@arcgis/core/layers/graphics/sources/connections/createConnection.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.28/esri/copyright.txt for details.
*/
function o(o,r,s,i,c,a,m,p){const f={source:o,sourceSpatialReference:r,spatialReference:s,geometryType:i,filter:c,maxReconnectionAttempts:a,maxReconnectionInterval:m,customParameters:p};if(!o)return new ClientSideConnection_c(f);return o.path.startsWith("wss://")||o.path.startsWith("ws://")?new d(f):new y(f)}


/***/ })

};
;