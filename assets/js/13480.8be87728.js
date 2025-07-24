"use strict";
exports.id = 13480;
exports.ids = [13480];
exports.modules = {

/***/ 13480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueueProcessor: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57725);
/* harmony import */ var _promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49175);
/* harmony import */ var _Queue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57882);
/* harmony import */ var _ReactiveMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51074);
/* harmony import */ var _scheduling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9987);
/* harmony import */ var _signal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39369);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class u{constructor(e,s){this.item=e,this.controller=s,this.promise=null}}class _{constructor(e){this._schedule=null,this._deferreds=new _ReactiveMap_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,this._controllers=new _ReactiveMap_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,this._processingItems=new _ReactiveMap_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,this._pausedSignal=(0,_signal_js__WEBPACK_IMPORTED_MODULE_4__/* .signal */ .v)(!1),this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new _Queue_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(e.peeker),this.process=e.process}destroy(){this.clear(),this._schedule=(0,_maybe_js__WEBPACK_IMPORTED_MODULE_5__/* .removeMaybe */ .xt)(this._schedule)}get updating(){return this.running}get length(){return this._processingItems.size+this._queue.length}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}abort(e){const s=this._controllers.get(e);s&&s.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach((s=>e.push(s))),this._controllers.clear(),e.forEach((e=>e.abort())),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach(((s,t)=>e(t)))}get(e){const s=this._deferreds.get(e);return s?s.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(e,h){const o=this.get(e);if(o)return o;const n=new AbortController;let c=null;h&&(c=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .onAbort */ .u7)(h,(()=>n.abort())));const l=()=>{const s=this._processingItems.get(e);s&&s.controller.abort(),u(),a.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .createAbortError */ .NK)())},u=()=>{_.remove(),null!=c&&c.remove(),this._removeItem(e),this._queue.remove(e),this._scheduleNext()},_=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .onAbortOrThrow */ .NY)(n.signal,l),a=(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .createResolver */ .Tw)();return this._deferreds.set(e,a),this._controllers.set(e,n),a.promise.then(u,u),this._queue.push(e),this._scheduleNext(),a.promise}last(){return this._queue.last()}lastPromise(){const e=this.last();return e?this.get(e):null}peek(){return this._queue.peek()}popLast(){const e=this._queue.popLast();return e&&(this._deferreds.get(e)?.reject((0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .createAbortError */ .NK)()),this._removeItem(e)),e}reset(){const e=Array.from(this._processingItems.values());this._processingItems.clear();for(const s of e)this._queue.push(s.item),s.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}_removeItem(e){this._deferreds.delete(e),this._controllers.delete(e),this._processingItems.delete(e)}_scheduleNext(){this._pausedSignal.value||this._schedule||(this._schedule=(0,_scheduling_js__WEBPACK_IMPORTED_MODULE_3__/* .schedule */ ._)((()=>{this._schedule=null,this._next()})))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(s))}_processError(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(s))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(null==e)return;let s;const t=new AbortController,r=new u(e,t);this._processingItems.set(e,r);try{s=this.process(e,t.signal)}catch(i){this._processError(r,i)}(0,_promiseUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPromiseLike */ .$X)(s)?(r.promise=s,s.then((e=>this._processResult(r,e)),(e=>this._processError(r,e)))):this._processResult(r,s)}}


/***/ }),

/***/ 51074:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99595);
/* harmony import */ var _accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29745);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
class s{constructor(e){this._observable=new _accessorSupport_tracking_SimpleObservable_js__WEBPACK_IMPORTED_MODULE_1__/* .SimpleObservable */ .I,this._map=new Map(e)}get size(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.size}clear(){this._map.size>0&&(this._map.clear(),this._observable.notify())}delete(e){const t=this._map.delete(e);return t&&this._observable.notify(),t}entries(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.entries()}forEach(t,s){(0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.forEach(((e,r)=>t.call(s,e,r,this)),s)}get(t){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.get(t)}has(t){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.has(t)}keys(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.keys()}set(e,t){return this._map.set(e,t),this._observable.notify(),this}values(){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map.values()}[Symbol.iterator](){return (0,_accessorSupport_tracking_js__WEBPACK_IMPORTED_MODULE_0__/* .trackAccess */ .gc)(this._observable),this._map[Symbol.iterator]()}[Symbol.dispose](){this._observable.destroy()}get[Symbol.toStringTag](){return this._map[Symbol.toStringTag]}}


/***/ })

};
;