"use strict";
exports.id = 47919;
exports.ids = [47919,13480];
exports.modules = {

/***/ 47919:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBatchExecutor: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6273);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80294);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13480);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t,e,s,i){return new h(t,e,s,i)}class o{constructor(t,s,i){this._executor=t,this._data=s,this._impl=i,this._closed=!1,this._resolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),this._impl.open(this)}assertOpen(){if(this._closed)throw new Error("Batch closed.")}get data(){return this.assertOpen(),this._data}get results(){return this._resolver.promise}send(){try{this.assertOpen(),this._closed=!0,this._executor.resume(this),this._impl.close(this),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .settleWithPromise */ .hn)(this._resolver,this._impl.execute(this._data))}catch(t){this._resolver.reject(t)}}}class h{constructor(t,i,n,o){if(this._runJob=i,this._maxRunning=n,this._abortSignal=o,this._jobIdSeq=0,this._running=new Set,this._blocked=new Set,this._openBatches=new Map,this._state="ready",this._runResolver=null,n<1)throw new Error(`_maxRunning=${n} but cannot be < 1`);this._todo=t[Symbol.iterator](),this._queue=new _core_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_2__.QueueProcessor({concurrency:1,process:async t=>{if("start"===t.type){const{id:i,args:r}=t,n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),o=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),h={id:i,interrupt:n,finished:o.promise};return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .settleWithPromise */ .hn)(o,this._runJob(r,{id:i,yieldFor:t=>this.yieldFor(h,t)}).then((()=>{this._blocked.has(i)&&this._fail(new Error(`job ${i} completed before resuming`)),this._running.delete(i)||this._fail(new Error(`job ${i} not running?`))}))),await Promise.race([n.promise,h.finished]),void this._tryQueue()}if("continue"===t.type)return t.job.interrupt=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),"fulfilled"===t.data.status?t.continuation.resolve(t.data.value):t.continuation.reject(t.data.reason),await Promise.race([t.job.interrupt.promise,t.job.finished]),void this._tryQueue()}})}openBatch(t,e){return new o(this,t,e)}_fail(t,e=!1){if(this._runResolver?.reject(t),this._state="stopped",!e)throw t}_schedule(t){this._queue.push(t).catch((t=>this._fail(t,!0)))}_tryQueue(){if("running"===this._state)if(this._abortSignal?.aborted)this._fail((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createAbortError */ .NK)(),!0);else{if(this._running.size<this._maxRunning){const t=this._todo.next();if(!t.done){const e=this._jobIdSeq++;return this._running.add(e),void this._schedule({type:"start",id:e,args:t.value})}}if(0===this._running.size)return this._runResolver?.resolve(),this._runResolver=null,void(this._state="stopped");if(this._blocked.size===this._running.size){let t=null,e=-1/0;for(const[s,i]of this._openBatches)i.size>e&&(t=s,e=i.size);return null==t&&this._fail(new Error("deadlock")),void t.send()}}}resume(t){const e=this._openBatches.get(t);if(this._openBatches.delete(t),null!=e)for(const s of e)this._blocked.delete(s)||this._fail(new Error(`job ${s} not suspended`))}async yieldFor(s,i){i.assertOpen(),this._running.has(s.id)||this._fail(new Error(`job ${s.id} not running`)),this._blocked.has(s.id)&&this._fail(new Error(`job ${s.id} already suspended`)),this._blocked.add(s.id),(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getOrCreateMapValue */ .tE)(this._openBatches,i,(()=>new Set)).add(s.id),null==s.interrupt&&this._fail(new Error(`job ${s.id} hasn't resumed yet`)),s.interrupt.resolve(),s.interrupt=null;const r=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)();let n;try{n={status:"fulfilled",value:await i.results}}catch(o){n={status:"rejected",reason:o}}return this._schedule({type:"continue",continuation:r,data:n,job:s}),r.promise}run(){"ready"!==this._state&&this._fail(new Error(`executor not ready to start. state=${this._state}`));const t=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)();return this._state="running",this._runResolver=t,this._tryQueue(),t.promise}}


/***/ }),

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