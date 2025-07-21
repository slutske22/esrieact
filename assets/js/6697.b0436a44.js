"use strict";
exports.id = 6697;
exports.ids = [6697];
exports.modules = {

/***/ 6697:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBatchExecutor: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39831);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82256);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40189);
/* harmony import */ var _core_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92746);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(t,e,s,i){return new h(t,e,s,i)}class o{constructor(t,s,i){this._executor=t,this._data=s,this._impl=i,this._closed=!1,this._resolver=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),this._impl.open(this)}assertOpen(){if(this._closed)throw new Error("Batch closed.")}get data(){return this.assertOpen(),this._data}get results(){return this._resolver.promise}send(){try{this.assertOpen(),this._closed=!0,this._executor.resume(this),this._impl.close(this),(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .settleWithPromise */ .hn)(this._resolver,this._impl.execute(this._data))}catch(t){this._resolver.reject(t)}}}class h{constructor(t,i,n,o){if(this._runJob=i,this._maxRunning=n,this._abortSignal=o,this._jobIdSeq=0,this._running=new Set,this._blocked=new Set,this._openBatches=new Map,this._state="ready",this._runResolver=null,n<1)throw new Error(`_maxRunning=${n} but cannot be < 1`);this._todo=t[Symbol.iterator](),this._queue=new _core_QueueProcessor_js__WEBPACK_IMPORTED_MODULE_2__.QueueProcessor({concurrency:1,process:async t=>{if("start"===t.type){const{id:i,args:r}=t,n=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),o=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),h={id:i,interrupt:n,finished:o.promise};return (0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .settleWithPromise */ .hn)(o,this._runJob(r,{id:i,yieldFor:t=>this.yieldFor(h,t)}).then((()=>{this._blocked.has(i)&&this._fail(new Error(`job ${i} completed before resuming`)),this._running.delete(i)||this._fail(new Error(`job ${i} not running?`))}))),await Promise.race([n.promise,h.finished]),void this._tryQueue()}if("continue"===t.type)return t.job.interrupt=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)(),"fulfilled"===t.data.status?t.continuation.resolve(t.data.value):t.continuation.reject(t.data.reason),await Promise.race([t.job.interrupt.promise,t.job.finished]),void this._tryQueue()}})}openBatch(t,e){return new o(this,t,e)}_fail(t,e=!1){if(this._runResolver?.reject(t),this._state="stopped",!e)throw t}_schedule(t){this._queue.push(t).catch((t=>this._fail(t,!0)))}_tryQueue(){if("running"===this._state)if(this._abortSignal?.aborted)this._fail((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createAbortError */ .NK)(),!0);else{if(this._running.size<this._maxRunning){const t=this._todo.next();if(!t.done){const e=this._jobIdSeq++;return this._running.add(e),void this._schedule({type:"start",id:e,args:t.value})}}if(0===this._running.size)return this._runResolver?.resolve(),this._runResolver=null,void(this._state="stopped");if(this._blocked.size===this._running.size){let t=null,e=-1/0;for(const[s,i]of this._openBatches)i.size>e&&(t=s,e=i.size);return null==t&&this._fail(new Error("deadlock")),void t.send()}}}resume(t){const e=this._openBatches.get(t);if(this._openBatches.delete(t),null!=e)for(const s of e)this._blocked.delete(s)||this._fail(new Error(`job ${s} not suspended`))}async yieldFor(s,i){i.assertOpen(),this._running.has(s.id)||this._fail(new Error(`job ${s.id} not running`)),this._blocked.has(s.id)&&this._fail(new Error(`job ${s.id} already suspended`)),this._blocked.add(s.id),(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .getOrCreateMapValue */ .tE)(this._openBatches,i,(()=>new Set)).add(s.id),null==s.interrupt&&this._fail(new Error(`job ${s.id} hasn't resumed yet`)),s.interrupt.resolve(),s.interrupt=null;const r=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)();let n;try{n={status:"fulfilled",value:await i.results}}catch(o){n={status:"rejected",reason:o}}return this._schedule({type:"continue",continuation:r,data:n,job:s}),r.promise}run(){"ready"!==this._state&&this._fail(new Error(`executor not ready to start. state=${this._state}`));const t=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .createResolver */ .Tw)();return this._state="running",this._runResolver=t,this._tryQueue(),t.promise}}


/***/ })

};
;