"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4899],{76287:(e,t,r)=>{function n(){return[1,0,0,0,1,0,0,0,1]}function i(e,t,r,n,i,o,s,c,a){return[e,t,r,n,i,o,s,c,a]}function o(e,t){return new Float64Array(e,t,9)}r.d(t,{a:()=>n,c:()=>o,f:()=>i});Object.freeze(Object.defineProperty({__proto__:null,clone:function(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]},create:n,createView:o,fromValues:i},Symbol.toStringTag,{value:"Module"}))},56192:(e,t,r)=>{function n(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]]}function o(e,t){return new Float64Array(e,t,16)}r.d(t,{I:()=>s,a:()=>n,b:()=>i,c:()=>o});const s=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:n,createView:o,fromValues:function(e,t,r,n,i,o,s,c,a,f,u,l,d,h,m,y){return[e,t,r,n,i,o,s,c,a,f,u,l,d,h,m,y]}},Symbol.toStringTag,{value:"Module"}))},46991:(e,t,r)=>{function n(){return[0,0,0,1]}function i(e){return[e[0],e[1],e[2],e[3]]}function o(e,t){return new Float64Array(e,t,4)}r.d(t,{I:()=>s,a:()=>n,b:()=>i,c:()=>o});const s=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:s,clone:i,create:n,createView:o,fromValues:function(e,t,r,n){return[e,t,r,n]}},Symbol.toStringTag,{value:"Module"}))},96245:(e,t,r)=>{r.d(t,{a:()=>w,c:()=>g,f:()=>S,g:()=>M,h:()=>_,j:()=>v,n:()=>F});r(39831);var n=r(539),i=r(92504),o=r(37046),s=r(21839),c=r(22279),a=r(25102),f=r(52712),u=r(57137),l=r(58331),d=r(32532),h=r(16597),m=r(45573);const y=g();function g(){return(0,f.c)()}const p=a.e,b=a.e;function _(e,t=g()){return(0,a.c)(t,e)}function w(e){return e[3]}function M(e){return e}function S(e,t,r,n){return(0,f.f)(e,t,r,n)}function A(e,t,r){if(null==t)return!1;if(!E(e,t,P))return!1;let{t0:n,t1:i}=P;if((n<0||i<n&&i>0)&&(n=i),n<0)return!1;if(r){const{origin:e,direction:i}=t;r[0]=e[0]+i[0]*n,r[1]=e[1]+i[1]*n,r[2]=e[2]+i[2]*n}return!0}const P={t0:0,t1:0};function E(e,t,r){const{origin:n,direction:i}=t,o=B;o[0]=n[0]-e[0],o[1]=n[1]-e[1],o[2]=n[2]-e[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),a=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(a<0)return!1;const f=Math.sqrt(a);return r.t0=(-c-f)/(2*s),r.t1=(-c+f)/(2*s),!0}const B=(0,c.c)();function v(e,t){return A(e,t,null)}function O(e,t,r){const n=m.rq.get(),i=m.Rc.get();(0,s.b)(n,t.origin,t.direction);const c=w(e);(0,s.b)(r,n,t.origin),(0,s.i)(r,r,1/(0,s.l)(r)*c);const a=I(e,t.origin),f=(0,h.g7)(t.origin,r);return(0,o.c)(i,f+a,n),(0,s.e)(r,r,i),r}function R(e,t,r){const n=(0,s.f)(m.rq.get(),t,e),i=(0,s.i)(m.rq.get(),n,e[3]/(0,s.l)(n));return(0,s.g)(r,i,e)}function I(e,t){const r=(0,s.f)(m.rq.get(),t,e),n=(0,s.l)(r),o=w(e),c=o+Math.abs(o-n);return(0,i.XM)(o/c)}const T=(0,c.c)();function L(e,t,r,n){const o=(0,s.f)(T,t,e);switch(r){case l._.X:{const e=(0,i.jU)(o,T)[2];return(0,s.s)(n,-Math.sin(e),Math.cos(e),0)}case l._.Y:{const e=(0,i.jU)(o,T),t=e[1],r=e[2],c=Math.sin(t);return(0,s.s)(n,-c*Math.cos(r),-c*Math.sin(r),Math.cos(t))}case l._.Z:return(0,s.n)(n,o);default:return}}function x(e,t){const r=(0,s.f)(C,t,e);return(0,s.l)(r)-e[3]}function F(e,t){const r=(0,s.a)(e,t),n=w(e);return r<=n*n}const C=(0,c.c)(),N=g();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:y,altitudeAt:x,angleToSilhouette:I,axisAt:L,clear:function(e){e[0]=e[1]=e[2]=e[3]=0},closestPoint:function(e,t,r){return A(e,t,r)?r:((0,d.oC)(t,e,r),R(e,r,r))},closestPointOnSilhouette:O,containsPoint:F,copy:_,create:g,distanceToSilhouette:function(e,t){const r=(0,s.f)(m.rq.get(),t,e),n=(0,s.m)(r),i=e[3]*e[3];return Math.sqrt(Math.abs(n-i))},elevate:function(e,t,r){return e!==r&&(0,s.c)(r,e),r[3]=e[3]+t,r},equals:b,exactEquals:p,fromCenterAndRadius:function(e,t){return(0,f.f)(e[0],e[1],e[2],t)},fromRadius:function(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e},fromValues:S,getCenter:M,getRadius:w,intersectLine:function(e,t,r){const n=(0,d.Cr)(t,r);if(!E(e,n,P))return[];const{origin:i,direction:o}=n,{t0:a,t1:f}=P,l=t=>{const r=(0,c.c)();return(0,s.q)(r,i,o,t),R(e,r,r)};return Math.abs(a-f)<(0,u.g)()?[l(a)]:[l(a),l(f)]},intersectRay:A,intersectRayClosestSilhouette:function(e,t,r){if(A(e,t,r))return r;const n=O(e,t,m.rq.get());return(0,s.g)(r,t.origin,(0,s.i)(m.rq.get(),t.direction,(0,s.o)(t.origin,n)/(0,s.l)(t.direction))),r},intersectsRay:v,projectPoint:R,setAltitudeAt:function(e,t,r,n){const i=x(e,t),o=L(e,t,l._.Z,C),c=(0,s.i)(C,o,r-i);return(0,s.g)(n,t,c)},setExtent:function(e,t,r){return n.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:_(e,r)},tmpSphere:N,union:function(e,t,r=g()){const n=(0,s.o)(e,t),i=e[3],o=t[3];return n+o<i?((0,a.c)(r,e),r):n+i<o?((0,a.c)(r,t),r):((0,s.p)(r,e,t,(n+o-i)/(2*n)),r[3]=(n+i+o)/2,r)},wrap:function(e){return e}},Symbol.toStringTag,{value:"Module"}))},24121:(e,t,r)=>{r.d(t,{a:()=>c,b:()=>s,c:()=>i,d:()=>u,e:()=>a,n:()=>l,s:()=>f,t:()=>o});var n=r(64521);function i(e,t,r){o(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function o(e,t,r,i=3,o=i){if(e.length/i!==Math.ceil(t.length/o))return n.J.error("source and destination buffers need to have the same number of elements"),e;const s=e.length/i,c=r[0],a=r[1],f=r[2],u=r[4],l=r[5],d=r[6],h=r[8],m=r[9],y=r[10],g=r[12],p=r[13],b=r[14];let _=0,w=0;for(let n=0;n<s;n++){const r=t[_],n=t[_+1],s=t[_+2];e[w]=c*r+u*n+h*s+g,e[w+1]=a*r+l*n+m*s+p,e[w+2]=f*r+d*n+y*s+b,_+=o,w+=i}return e}function s(e,t,r){c(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function c(e,t,r,i=3,o=i){if(e.length/i!==Math.ceil(t.length/o))return void n.J.error("source and destination buffers need to have the same number of elements");const s=e.length/i,c=r[0],a=r[1],f=r[2],u=r[3],l=r[4],d=r[5],h=r[6],m=r[7],y=r[8];let g=0,p=0;for(let n=0;n<s;n++){const r=t[g],n=t[g+1],s=t[g+2];e[p]=c*r+u*n+h*s,e[p+1]=a*r+l*n+m*s,e[p+2]=f*r+d*n+y*s,g+=o,p+=i}}function a(e,t,r){f(e.typedBuffer,t,r,e.typedBufferStride)}function f(e,t,r,n=3){const i=Math.min(e.length/n,t.count),o=t.typedBuffer,s=t.typedBufferStride;let c=0,a=0;for(let f=0;f<i;f++)e[a]=r*o[c],e[a+1]=r*o[c+1],e[a+2]=r*o[c+2],c+=s,a+=n}function u(e,t){l(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function l(e,t,r=3,n=r){const i=Math.min(e.length/r,t.length/n);let o=0,s=0;for(let c=0;c<i;c++){const i=t[o],c=t[o+1],a=t[o+2],f=i*i+c*c+a*a;if(f>0){const t=1/Math.sqrt(f);e[s]=t*i,e[s+1]=t*c,e[s+2]=t*a}o+=n,s+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:l,normalizeView:u,scale:f,scaleView:a,shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),i=e.typedBuffer,o=e.typedBufferStride,s=t.typedBuffer,c=t.typedBufferStride;let a=0,f=0;for(let u=0;u<n;u++)i[f]=s[a]>>r,i[f+1]=s[a+1]>>r,i[f+2]=s[a+2]>>r,a+=c,f+=o},transformMat3:c,transformMat3View:s,transformMat4:o,transformMat4View:i},Symbol.toStringTag,{value:"Module"}))},84858:(e,t,r)=>{var n;r.d(t,{u:()=>n}),function(e){e[e.KILOBYTES=1024]="KILOBYTES",e[e.MEGABYTES=1048576]="MEGABYTES",e[e.GIGABYTES=1073741824]="GIGABYTES"}(n||(n={}))},92114:(e,t,r)=>{r.d(t,{I:()=>i});var n=r(37103);class i{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,n.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},90166:(e,t,r)=>{r.d(t,{Ns:()=>a,jh:()=>i,l5:()=>s,s:()=>c,xm:()=>o});var n=r(86942);function i(e,t=!1){return e<=n.y9?t?new Array(e).fill(0):new Array(e):new Float64Array(e)}function o(e){return((0,n.cy)(e)?e.length:e.byteLength/8)<=n.y9?Array.from(e):new Float64Array(e)}function s(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}function c(e,t){for(let r=0;r<t.length;++r)e[r]=t[r];return e}function a(e){return Array.isArray(e)?new Float64Array(e):e}},29317:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(66866),i=r(24793),o=r(21877),s=r(21564),c=(r(73446),r(85569),r(39831),r(28902)),a=r(63863),f=r(22279),u=r(78632);let l=class extends((0,i.O)(o.oY)){constructor(e){super(e),this.type="georeferenced-relative",this.isRelative=!0,this.isGeoreferenced=!0,this.origin=(0,f.c)()}getOriginPoint(e){const[t,r,n]=this.origin;return new u.A({x:t,y:r,z:n,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:r}){this.origin=(0,f.f)(e,t,r??0)}};(0,n._)([(0,c.e)({georeferencedRelative:"georeferenced-relative"},{readOnly:!0})],l.prototype,"type",void 0),(0,n._)([(0,s.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"origin",void 0),l=(0,n._)([(0,a.$)("esri.geometry.support.MeshGeoreferencedRelativeVertexSpace")],l);const d=l},99218:(e,t,r)=>{r.d(t,{A:()=>d});var n=r(66866),i=r(24793),o=r(21877),s=r(21564),c=(r(73446),r(85569),r(39831),r(28902)),a=r(63863),f=r(22279),u=r(78632);let l=class extends((0,i.O)(o.oY)){constructor(e){super(e),this.type="local",this.isRelative=!0,this.isGeoreferenced=!1,this.origin=(0,f.c)()}getOriginPoint(e){const[t,r,n]=this.origin;return new u.A({x:t,y:r,z:n,spatialReference:e})}setOriginFromPoint({x:e,y:t,z:r}){this.origin=(0,f.f)(e,t,r??0)}};(0,n._)([(0,c.e)({local:"local"},{readOnly:!0})],l.prototype,"type",void 0),(0,n._)([(0,s.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"origin",void 0),l=(0,n._)([(0,a.$)("esri.geometry.support.MeshLocalVertexSpace")],l);const d=l},64521:(e,t,r)=>{r.d(t,{J:()=>n});const n=r(539).A.getLogger("esri.views.3d.support.buffer.math")},32532:(e,t,r)=>{r.d(t,{Cr:()=>f,LV:()=>a,oC:()=>u,vt:()=>s});r(85569);var n=r(92114),i=r(21839),o=r(22279);r(45573);function s(e){return e?c((0,o.g)(e.origin),(0,o.g)(e.direction)):c((0,o.c)(),(0,o.c)())}function c(e,t){return{origin:e,direction:t}}function a(e,t){const r=l.get();return r.origin=e,r.direction=t,r}function f(e,t,r=s()){return(0,i.c)(r.origin,e),(0,i.f)(r.direction,t,e),r}function u(e,t,r){const n=(0,i.j)(e.direction,(0,i.f)(r,t,e.origin));return(0,i.g)(r,e.origin,(0,i.i)(r,e.direction,n)),r}const l=new n.I((()=>s()))},16597:(e,t,r)=>{r.d(t,{g7:()=>s});var n=r(92504),i=r(21839),o=r(22279);function s(e,t){const r=(0,i.j)(e,t)/((0,i.l)(e)*(0,i.l)(t));return-(0,n.XM)(r)}(0,o.c)(),(0,o.c)()},45573:(e,t,r)=>{r.d(t,{Rc:()=>m,rq:()=>h});var n=r(84858),i=r(37103),o=r(76287),s=r(56192),c=r(46991),a=r(78286),f=r(22279),u=r(52712);class l{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,i.d)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=d){return new l(16,a.c,e)}static createVec3f64(e=d){return new l(24,f.a,e)}static createVec4f64(e=d){return new l(32,u.a,e)}static createMat3f64(e=d){return new l(72,o.c,e)}static createMat4f64(e=d){return new l(128,s.c,e)}static createQuatf64(e=d){return new l(32,c.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const d=4*n.u.KILOBYTES,h=(l.createVec2f64(),l.createVec3f64()),m=(l.createVec4f64(),l.createMat3f64(),l.createMat4f64());l.createQuatf64()},14899:(e,t,r)=>{r.r(t),r.d(t,{destroyContext:()=>E,dracoDecompressPointCloudData:()=>_,filterObbsForModifications:()=>w,filterObbsForModificationsSync:()=>T,initialize:()=>F,interpretObbModificationResults:()=>I,process:()=>b,project:()=>A,setLegacySchema:()=>S,setModifications:()=>M,setModificationsSync:()=>O,test:()=>N,transformNormals:()=>P});var n,i,o=r(78983),s=r(90166),c=r(29317),a=r(99218),f=r(24121);!function(e){e[e.None=0]="None",e[e.Int16=1]="Int16",e[e.Int32=2]="Int32"}(n||(n={})),function(e){e[e.Replace=0]="Replace",e[e.Outside=1]="Outside",e[e.Inside=2]="Inside",e[e.Finished=3]="Finished"}(i||(i={}));var u=r(99050);function l(e){return(0,u.s)(`esri/libs/i3s/${e}`)}let d;var h,m,y,g,p;r(96245);!function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"}(h||(h={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(m||(m={}));!function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"}(y||(y={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(g||(g={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(p||(p={}));async function b(e){v=await C();const t=[e.geometryBuffer];return{result:R(v,e,t),transferList:t}}async function _(e){v=await C();const t=[e.geometryBuffer],{geometryBuffer:r}=e,n=r.byteLength,i=v._malloc(n),o=new Uint8Array(v.HEAPU8.buffer,i,n);o.set(new Uint8Array(r));const s=v.dracoDecompressPointCloudData(i,o.byteLength);if(v._free(i),s.error.length>0)throw new Error(`i3s.wasm: ${s.error}`);const c=s.featureIds?.length>0?s.featureIds.slice():null,a=s.positions.slice();return c&&t.push(c.buffer),t.push(a.buffer),{result:{positions:a,featureIds:c},transferList:t}}async function w(e){await C(),T(e);const t={buffer:e.buffer};return{result:t,transferList:[t.buffer]}}async function M(e){await C(),O(e)}async function S(e){v=await C(),v.setLegacySchema(e.context,e.jsonSchema)}async function A(e){const{localMatrix:t,origin:n,positions:i,vertexSpace:f,localMode:u}=e,l=o.A.fromJSON(e.inSpatialReference),d=o.A.fromJSON(e.outSpatialReference);let h;if("georeferenced"===f.type){const[{projectBuffer:e},{initializeProjection:t}]=await Promise.all([Promise.resolve().then(r.bind(r,84119)),Promise.resolve().then(r.bind(r,13484))]);await t(l,d),h=new Float64Array(i.length),e(i,l,0,h,d,0,h.length/3)}else{const e="georeferencedRelative"===f.type?c.A.fromJSON(f):a.A.fromJSON(f),{project:n}=await r.e(7519).then(r.bind(r,97519));h=(0,s.Ns)(n({positions:i,transform:t?{localMatrix:t}:void 0,vertexSpace:e,inSpatialReference:l,outSpatialReference:d,localMode:u}))}const m=h.length,[y,g,p]=n;for(let r=0;r<m;r+=3)h[r]-=y,h[r+1]-=g,h[r+2]-=p;return{result:{projected:h,original:i},transferList:[h.buffer,i.buffer]}}async function P({normalMatrix:e,normals:t}){const r=new Float32Array(t.length);return(0,f.a)(r,t,e),(0,f.n)(r,r),{result:{transformed:r,original:t},transferList:[r.buffer,t.buffer]}}function E(e){L(e)}let B,v;function O(e){if(!v)return;const t=e.modifications,r=v._malloc(8*t.length),n=new Float64Array(v.HEAPU8.buffer,r,t.length);for(let i=0;i<t.length;++i)n[i]=t[i];v.setModifications(e.context,r,t.length,e.isGeodetic),v._free(r)}function R(e,t,r){const{context:i,localOrigin:o,globalTrafo:s,mbs:c,obb:a,elevationOffset:f,geometryBuffer:u,geometryDescriptor:l,indexToVertexProjector:d,vertexToRenderProjector:h}=t,m=e._malloc(u.byteLength),y=e._malloc(33*Float64Array.BYTES_PER_ELEMENT),g=new Uint8Array(e.HEAPU8.buffer,m,u.byteLength);g.set(new Uint8Array(u));const p=new Float64Array(e.HEAPU8.buffer,y,33);x(p,o);let b=p.byteOffset+3*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b);x(_,s),b+=16*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b),x(_,c),b+=4*p.BYTES_PER_ELEMENT,null!=a&&(_=new Float64Array(p.buffer,b),x(_,a.center),b+=3*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b),x(_,a.halfSize),b+=3*p.BYTES_PER_ELEMENT,_=new Float64Array(p.buffer,b),x(_,a.quaternion));const w=l,M={isDraco:!1,isLegacy:!1,color:t.layouts.some((e=>e.some((e=>"color"===e.name)))),normal:t.needNormals&&t.layouts.some((e=>e.some((e=>"normalCompressed"===e.name)))),uv0:t.layouts.some((e=>e.some((e=>"uv0"===e.name)))),uvRegion:t.layouts.some((e=>e.some((e=>"uvRegion"===e.name)))),featureIndex:w.featureIndex},S=e.process(i,!!t.obb,m,g.byteLength,w,M,y,f,d,h,t.normalReferenceFrame);if(e._free(y),e._free(m),S.error.length>0)throw new Error(`i3s.wasm: ${S.error}`);if(S.discarded)return null;const A=S.componentOffsets.length>0?S.componentOffsets.slice():null,P=S.featureIds.length>0?S.featureIds.slice():null,E=S.anchorIds.length>0?Array.from(S.anchorIds):null,B=S.anchors.length>0?Array.from(S.anchors):null,v=S.interleavedVertedData.slice().buffer,O=S.indicesType===n.Int16?new Uint16Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/2).slice():new Uint32Array(S.indices.buffer,S.indices.byteOffset,S.indices.byteLength/4).slice(),R=S.positions.slice(),I=S.positionIndicesType===n.Int16?new Uint16Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/2).slice():new Uint32Array(S.positionIndices.buffer,S.positionIndices.byteOffset,S.positionIndices.byteLength/4).slice(),T={layout:t.layouts[0],interleavedVertexData:v,indices:O,hasColors:S.hasColors,hasModifications:S.hasModifications,positionData:{data:R,indices:I}};return P&&r.push(P.buffer),A&&r.push(A.buffer),r.push(v),r.push(O.buffer),r.push(R.buffer),r.push(I.buffer),{componentOffsets:A,featureIds:P,anchorIds:E,anchors:B,transformedGeometry:T,obb:S.obb}}function I(e){return 0===e?m.Unmodified:1===e?m.PotentiallyModified:2===e?m.Culled:m.Unknown}function T(e){if(!v)return;const{context:t,buffer:r}=e,n=v._malloc(r.byteLength),i=r.byteLength/Float64Array.BYTES_PER_ELEMENT,o=new Float64Array(v.HEAPU8.buffer,n,i),s=new Float64Array(r);o.set(s),v.filterOBBs(t,n,i),s.set(o),v._free(n)}function L(e){v&&0===v.destroy(e)&&(v=null)}function x(e,t){for(let r=0;r<t.length;++r)e[r]=t[r]}async function F(){v||await C()}function C(){return v?Promise.resolve(v):(B||(B=(d||(d=new Promise((e=>r.e(3983).then(r.bind(r,13983)).then((e=>e.i)).then((({default:t})=>{const r=t({locateFile:l,onRuntimeInitialized:()=>e(r)});delete r.then})))).catch((e=>{throw e}))),d).then((e=>(v=e,B=null,v)))),B)}const N={transform:(e,t)=>v&&R(v,e,t),destroy:L}}}]);