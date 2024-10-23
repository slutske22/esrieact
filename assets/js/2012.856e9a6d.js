"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2012],{82012:(n,t,e)=>{e.r(t),e.d(t,{l:()=>s});var r=e(42784);var o,i,a={exports:{}};o=a,void 0!==(i={load:function(n){const t=n.locateFile,e={};var r=void 0!==r?r:{};const i=(()=>{let n;return{resolve:t=>n(t),promise:new Promise((t=>n=t))}})();r.locateFile=t,r.onRuntimeInitialized=()=>{i.resolve(e)},e.Module=r,e.whenLoaded=()=>i.promise;var a,u={};for(a in r)r.hasOwnProperty(a)&&(u[a]=r[a]);var f,c,l,p,m,h="object"==typeof window,d="function"==typeof importScripts,y="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,g="";y?(g=d?require("path").dirname(g)+"/":__dirname+"/",f=function(n,t){return p||(p=require("fs")),m||(m=require("path")),n=m.normalize(n),p.readFileSync(n,t?null:"utf8")},l=function(n){var t=f(n,!0);return t.buffer||(t=new Uint8Array(t)),function(n,t){n||L("Assertion failed: "+t)}(t.buffer),t},c=function(n,t,e){p||(p=require("fs")),m||(m=require("path")),n=m.normalize(n),p.readFile(n,(function(n,r){n?e(n):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),o.exports=r,process.on("uncaughtException",(function(n){if(!(n instanceof Z))throw n})),process.on("unhandledRejection",L),r.inspect=function(){return"[Emscripten Module object]"}):(h||d)&&(d?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),g=0!==g.indexOf("blob:")?g.substr(0,g.lastIndexOf("/")+1):"",f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},d&&(l=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),c=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var v=r.print||console.log.bind(console),w=r.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(r[a]=u[a]);u=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit;var b,A,_=0;r.wasmBinary&&(b=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&L("no native wasm support detected");var E,R,P,S,T=!1,j="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function I(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&j)return j.decode(n.subarray(t,o));for(var i="";t<o;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var s=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&n[t++])<65536)i+=String.fromCharCode(a);else{var f=a-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}function x(n,t){return n%t>0&&(n+=t-n%t),n}function H(n){E=n,r.HEAP8=new Int8Array(n),r.HEAP16=new Int16Array(n),r.HEAP32=P=new Int32Array(n),r.HEAPU8=R=new Uint8Array(n),r.HEAPU16=new Uint16Array(n),r.HEAPU32=new Uint32Array(n),r.HEAPF32=new Float32Array(n),r.HEAPF64=new Float64Array(n)}r.INITIAL_MEMORY;var M=[],C=[],F=[];function k(n){M.unshift(n)}function q(n){F.unshift(n)}var O,W=0,U=null;function L(n){throw r.onAbort&&r.onAbort(n),w(n+=""),T=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}function B(n){return n.startsWith("data:application/octet-stream;base64,")}function D(n){return n.startsWith("file://")}function z(n){try{if(n==O&&b)return new Uint8Array(b);if(l)return l(n);throw"both async and sync fetching of the wasm failed"}catch(w){L(w)}}function N(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?S.get(e)():S.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(r)}}function G(n){try{return A.grow(n-E.byteLength+65535>>>16),H(A.buffer),1}catch(t){}}r.preloadedImages={},r.preloadedAudios={},B(O="libtess.wasm")||(O=function(n){return r.locateFile?r.locateFile(n,g):g+n}(O));var X={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=X.buffers[n];0===t||10===t?((1===n?v:w)(I(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return X.varargs+=4,P[X.varargs-4>>2]},getStr:function(n){return function(n,t){return n?I(R,n,t):""}(n)},get64:function(n,t){return n}},Y={h:function(){throw"longjmp"},l:function(n,t,e){R.copyWithin(n,t,t+e)},g:function(n){var t=R.length,e=2147483648;if((n>>>=0)>e)return!1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);if(o=Math.min(o,n+100663296),G(Math.min(e,x(Math.max(n,o),65536))))return!0}return!1},f:function(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var a=P[t+8*i>>2],u=P[t+(8*i+4)>>2],s=0;s<u;s++)X.printChar(n,R[a+s]);o+=u}return P[r>>2]=o,0},b:function(){return _},k:function(n){var t=K();try{return S.get(n)()}catch(o){if(Q(t),o!==o+0&&"longjmp"!==o)throw o;V(1,0)}},d:function(n,t){var r=K();try{return S.get(n)(t)}catch(e){if(Q(r),e!==e+0&&"longjmp"!==e)throw e;V(1,0)}},j:function(n,t,e){var o=K();try{return S.get(n)(t,e)}catch(r){if(Q(o),r!==r+0&&"longjmp"!==r)throw r;V(1,0)}},i:function(n,t,e,r){var o=K();try{return S.get(n)(t,e,r)}catch(i){if(Q(o),i!==i+0&&"longjmp"!==i)throw i;V(1,0)}},e:function(n,t){var r=K();try{S.get(n)(t)}catch(e){if(Q(r),e!==e+0&&"longjmp"!==e)throw e;V(1,0)}},c:function(n,t,e){var o=K();try{S.get(n)(t,e)}catch(r){if(Q(o),r!==r+0&&"longjmp"!==r)throw r;V(1,0)}},a:function(n){!function(n){_=n}(n)}};(function(){var n={a:Y};function t(n,t){var e=n.exports;r.asm=e,H((A=r.asm.m).buffer),S=r.asm.q,function(n){C.unshift(n)}(r.asm.n),function(){if(W--,r.monitorRunDependencies&&r.monitorRunDependencies(W),0==W&&U){var n=U;U=null,n()}}()}function e(n){t(n.instance)}function o(t){return function(){if(!b&&(h||d)){if("function"==typeof fetch&&!D(O))return fetch(O,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+O+"'";return n.arrayBuffer()})).catch((function(){return z(O)}));if(c)return new Promise((function(n,t){c(O,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return z(O)}))}().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){w("failed to asynchronously prepare wasm: "+n),L(n)}))}if(W++,r.monitorRunDependencies&&r.monitorRunDependencies(W),r.instantiateWasm)try{return r.instantiateWasm(n,t)}catch(s){return w("Module.instantiateWasm callback failed with error: "+s),!1}b||"function"!=typeof WebAssembly.instantiateStreaming||B(O)||D(O)||"function"!=typeof fetch?o(e):fetch(O,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return w("wasm streaming compile failed: "+n),w("falling back to ArrayBuffer instantiation"),o(e)}))}))})(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.n).apply(null,arguments)},r._malloc=function(){return(r._malloc=r.asm.o).apply(null,arguments)},r._free=function(){return(r._free=r.asm.p).apply(null,arguments)},r._triangulate=function(){return(r._triangulate=r.asm.r).apply(null,arguments)};var J,K=r.stackSave=function(){return(K=r.stackSave=r.asm.s).apply(null,arguments)},Q=r.stackRestore=function(){return(Q=r.stackRestore=r.asm.t).apply(null,arguments)},V=r._setThrew=function(){return(V=r._setThrew=r.asm.u).apply(null,arguments)};function Z(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function $(n){function t(){J||(J=!0,r.calledRun=!0,T||(N(C),r.onRuntimeInitialized&&r.onRuntimeInitialized(),function(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)q(r.postRun.shift());N(F)}()))}W>0||(function(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)k(r.preRun.shift());N(M)}(),W>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t()))}if(U=function n(){J||$(),J||(U=n)},r.run=$,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();$();let nn=null,tn=null,en=null,rn=null;const on=e.Module;let an=0;return e.triangulate=(n,t,e)=>{nn||(nn=on._triangulate);let r=on.HEAPF32;const o=on.HEAP32.BYTES_PER_ELEMENT,i=r.BYTES_PER_ELEMENT;e>an&&(an=e,en&&(on._free(en),en=0),tn&&(on._free(tn),tn=0)),en||(en=on._malloc(e*i)),rn||(rn=on._malloc(4e3*o));const a=2*e;tn||(tn=on._malloc(a*i)),r=on.HEAPF32,r.set(n,en/i),on.HEAP32.set(t,rn/o);const u=a/2,s=nn(en,rn,Math.min(t.length,4e3),2,tn,u),f=2*s;r=on.HEAPF32;const c=r.slice(tn/i,tn/i+f),l={};return l.buffer=c,l.vertexCount=s,l},e.whenLoaded()}})&&(o.exports=i);var u=a.exports;const s=function(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}({__proto__:null,default:(0,r.g)(u)},[u])}}]);