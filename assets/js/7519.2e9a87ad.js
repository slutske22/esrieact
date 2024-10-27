"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7519],{76743:(e,t,r)=>{r.d(t,{a:()=>h,c:()=>T,g:()=>y,j:()=>w,k:()=>d,m:()=>a,s:()=>c});var n=r(76287),s=r(46991),f=r(22279),i=r(57137),u=r(21839),o=r(25102);function c(e,t,r){r*=.5;const n=Math.sin(r);return e[0]=n*t[0],e[1]=n*t[1],e[2]=n*t[2],e[3]=Math.cos(r),e}function y(e,t){const r=2*Math.acos(t[3]),n=Math.sin(r/2);return n>(0,i.g)()?(e[0]=t[0]/n,e[1]=t[1]/n,e[2]=t[2]/n):(e[0]=1,e[1]=0,e[2]=0),r}function a(e,t,r){const n=t[0],s=t[1],f=t[2],i=t[3],u=r[0],o=r[1],c=r[2],y=r[3];return e[0]=n*y+i*u+s*c-f*o,e[1]=s*y+i*o+f*u-n*c,e[2]=f*y+i*c+n*o-s*u,e[3]=i*y-n*u-s*o-f*c,e}function l(e,t,r,n){const s=t[0],f=t[1],u=t[2],o=t[3];let c,y,a,l,h,p=r[0],d=r[1],T=r[2],b=r[3];return y=s*p+f*d+u*T+o*b,y<0&&(y=-y,p=-p,d=-d,T=-T,b=-b),1-y>(0,i.g)()?(c=Math.acos(y),a=Math.sin(c),l=Math.sin((1-n)*c)/a,h=Math.sin(n*c)/a):(l=1-n,h=n),e[0]=l*s+h*p,e[1]=l*f+h*d,e[2]=l*u+h*T,e[3]=l*o+h*b,e}function h(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e}function p(e,t){const r=t[0]+t[4]+t[8];let n;if(r>0)n=Math.sqrt(r+1),e[3]=.5*n,n=.5/n,e[0]=(t[5]-t[7])*n,e[1]=(t[6]-t[2])*n,e[2]=(t[1]-t[3])*n;else{let r=0;t[4]>t[0]&&(r=1),t[8]>t[3*r+r]&&(r=2);const s=(r+1)%3,f=(r+2)%3;n=Math.sqrt(t[3*r+r]-t[3*s+s]-t[3*f+f]+1),e[r]=.5*n,n=.5/n,e[3]=(t[3*s+f]-t[3*f+s])*n,e[s]=(t[3*s+r]+t[3*r+s])*n,e[f]=(t[3*f+r]+t[3*r+f])*n}return e}function d(e,t,r,n){const s=.5*Math.PI/180;t*=s,r*=s,n*=s;const f=Math.sin(t),i=Math.cos(t),u=Math.sin(r),o=Math.cos(r),c=Math.sin(n),y=Math.cos(n);return e[0]=f*o*y-i*u*c,e[1]=i*u*y+f*o*c,e[2]=i*o*c-f*u*y,e[3]=i*o*y+f*u*c,e}const T=o.c,b=o.s,B=o.a,m=a,E=o.b,g=o.d,A=o.l,M=o.f,O=M,S=o.g,L=S,_=o.n,w=o.h,x=o.e;const P=(0,f.c)(),C=(0,f.f)(1,0,0),R=(0,f.f)(0,1,0);const F=(0,s.a)(),v=(0,s.a)();const N=(0,n.a)();Object.freeze(Object.defineProperty({__proto__:null,add:B,calculateW:function(e,t){const r=t[0],n=t[1],s=t[2];return e[0]=r,e[1]=n,e[2]=s,e[3]=Math.sqrt(Math.abs(1-r*r-n*n-s*s)),e},conjugate:h,copy:T,dot:g,equals:x,exactEquals:w,fromEuler:d,fromMat3:p,getAxisAngle:y,identity:function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e},invert:function(e,t){const r=t[0],n=t[1],s=t[2],f=t[3],i=r*r+n*n+s*s+f*f,u=i?1/i:0;return e[0]=-r*u,e[1]=-n*u,e[2]=-s*u,e[3]=f*u,e},len:O,length:M,lerp:A,mul:m,multiply:a,normalize:_,random:function(e){const t=i.R,r=t(),n=t(),s=t(),f=Math.sqrt(1-r),u=Math.sqrt(r);return e[0]=f*Math.sin(2*Math.PI*n),e[1]=f*Math.cos(2*Math.PI*n),e[2]=u*Math.sin(2*Math.PI*s),e[3]=u*Math.cos(2*Math.PI*s),e},rotateX:function(e,t,r){r*=.5;const n=t[0],s=t[1],f=t[2],i=t[3],u=Math.sin(r),o=Math.cos(r);return e[0]=n*o+i*u,e[1]=s*o+f*u,e[2]=f*o-s*u,e[3]=i*o-n*u,e},rotateY:function(e,t,r){r*=.5;const n=t[0],s=t[1],f=t[2],i=t[3],u=Math.sin(r),o=Math.cos(r);return e[0]=n*o-f*u,e[1]=s*o+i*u,e[2]=f*o+n*u,e[3]=i*o-s*u,e},rotateZ:function(e,t,r){r*=.5;const n=t[0],s=t[1],f=t[2],i=t[3],u=Math.sin(r),o=Math.cos(r);return e[0]=n*o+s*u,e[1]=s*o-n*u,e[2]=f*o+i*u,e[3]=i*o-f*u,e},rotationTo:function(e,t,r){const n=(0,u.j)(t,r);return n<-.999999?((0,u.b)(P,C,t),(0,u.k)(P)<1e-6&&(0,u.b)(P,R,t),(0,u.n)(P,P),c(e,P,Math.PI),e):n>.999999?(e[0]=0,e[1]=0,e[2]=0,e[3]=1,e):((0,u.b)(P,t,r),e[0]=P[0],e[1]=P[1],e[2]=P[2],e[3]=1+n,_(e,e))},scale:E,set:b,setAxes:function(e,t,r,n){const s=N;return s[0]=r[0],s[3]=r[1],s[6]=r[2],s[1]=n[0],s[4]=n[1],s[7]=n[2],s[2]=-t[0],s[5]=-t[1],s[8]=-t[2],_(e,p(e,s))},setAxisAngle:c,slerp:l,sqlerp:function(e,t,r,n,s,f){return l(F,t,s,f),l(v,r,n,f),l(e,F,v,2*f*(1-f)),e},sqrLen:L,squaredLength:S,str:function(e){return"quat("+e[0]+", "+e[1]+", "+e[2]+", "+e[3]+")"}},Symbol.toStringTag,{value:"Module"}))},38394:(e,t,r)=>{r.d(t,{l:()=>c});var n=r(92504),s=r(37046),f=r(22279);function i(e,t,r){const n=Math.sin(e),s=Math.cos(e),f=Math.sin(t),i=Math.cos(t),u=r;return u[0]=-n,u[4]=-f*s,u[8]=i*s,u[12]=0,u[1]=s,u[5]=-f*n,u[9]=i*n,u[13]=0,u[2]=0,u[6]=i,u[10]=f,u[14]=0,u[3]=0,u[7]=0,u[11]=0,u[15]=1,u}var u=r(11473),o=r(87926);function c(e,t,r,n){if(null==e||null==n)return!1;const f=(0,u.Qk)(e,u.Wv),c=(0,u.Qk)(n,u.zp);if(f===c&&!y(c)&&(f!==u.rz.UNKNOWN||(0,o.aI)(e,n)))return(0,s.d)(r,t),!0;if(y(c)){const e=u.w5[f][u.rz.LON_LAT],n=u.w5[u.rz.LON_LAT][c];return null!=e&&null!=n&&(e(t,0,l,0),n(l,0,h,0),i(a*l[0],a*l[1],r),r[12]=h[0],r[13]=h[1],r[14]=h[2],!0)}if((c===u.rz.WEB_MERCATOR||c===u.rz.PLATE_CARREE)&&(f===u.rz.WGS84||f===u.rz.CGCS2000&&c===u.rz.PLATE_CARREE||f===u.rz.SPHERICAL_ECEF||f===u.rz.WEB_MERCATOR)){const e=u.w5[f][u.rz.LON_LAT],n=u.w5[u.rz.LON_LAT][c];return null!=e&&null!=n&&(e(t,0,l,0),n(l,0,h,0),f===u.rz.SPHERICAL_ECEF?function(e,t,r){i(e,t,r),(0,s.t)(r,r)}(a*l[0],a*l[1],r):(0,s.g)(r),r[12]=h[0],r[13]=h[1],r[14]=h[2],!0)}return!1}function y(e){return e===u.rz.SPHERICAL_ECEF||e===u.rz.SPHERICAL_MARS_PCPF||e===u.rz.SPHERICAL_MOON_PCPF}const a=(0,n.kU)(1),l=(0,f.c)(),h=(0,f.c)()},32937:(e,t,r)=>{r.d(t,{lO:()=>c});var n=r(47936),s=r(78983),f=r(87926);const i=new s.A(n.fv),u=new s.A(n.FY),o=new s.A(n.LJ);new s.A(n.Ro);function c(e){return e&&((0,f.q8)(e)||(0,f.aI)(e,u))?u:e&&((0,f.KQ)(e)||(0,f.aI)(e,o))?o:i}},19938:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(66866),s=r(24793),f=r(21877),i=(r(539),r(73446),r(85569),r(39831),r(98849),r(28902)),u=r(63863);let o=class extends((0,s.O)(f.oY)){constructor(){super({}),this.type="georeferenced",this.isRelative=!1,this.isGeoreferenced=!0}};(0,n._)([(0,i.e)({georeferenced:"georeferenced"},{readOnly:!0})],o.prototype,"type",void 0),o=(0,n._)([(0,u.$)("esri.geometry.support.MeshGeoreferencedVertexSpace")],o);const c=o},8695:(e,t,r)=>{r.d(t,{A:()=>b});var n,s=r(66866),f=r(21877),i=r(21564),u=(r(73446),r(85569),r(39831),r(63863)),o=r(37046),c=r(56192),y=r(76743),a=r(46991),l=r(21839),h=r(22279),p=r(69175);let d=n=class extends f.oY{constructor(e){super(e),this.translation=(0,h.c)(),this.rotationAxis=(0,h.e)(p.up),this.rotationAngle=0,this.scale=(0,h.f)(1,1,1)}get rotation(){return(0,p.i4)(this.rotationAxis,this.rotationAngle)}set rotation(e){this.rotationAxis=(0,h.g)((0,p.yo)(e)),this.rotationAngle=(0,p.g7)(e)}get localMatrix(){const e=(0,c.a)();return(0,y.s)(T,(0,p.yo)(this.rotation),(0,p.$I)(this.rotation)),(0,o.f)(e,T,this.translation,this.scale),e}get localMatrixInverse(){return(0,o.i)((0,c.a)(),this.localMatrix)}applyLocal(e,t){return(0,l.e)(t,e,this.localMatrix)}applyLocalInverse(e,t){return(0,l.e)(t,e,this.localMatrixInverse)}equals(e){return this===e||null!=e&&(0,o.e)(this.localMatrix,e.localMatrix)}clone(){const e={translation:(0,h.g)(this.translation),rotationAxis:(0,h.g)(this.rotationAxis),rotationAngle:this.rotationAngle,scale:(0,h.g)(this.scale)};return new n(e)}};(0,s._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"translation",void 0),(0,s._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAxis",void 0),(0,s._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],d.prototype,"rotationAngle",void 0),(0,s._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],d.prototype,"scale",void 0),(0,s._)([(0,i.MZ)()],d.prototype,"rotation",null),(0,s._)([(0,i.MZ)()],d.prototype,"localMatrix",null),(0,s._)([(0,i.MZ)()],d.prototype,"localMatrixInverse",null),d=n=(0,s._)([(0,u.$)("esri.geometry.support.MeshTransform")],d);const T=(0,a.a)(),b=d},69175:(e,t,r)=>{r.d(t,{$I:()=>p,AU:()=>a,Zz:()=>y,g7:()=>h,i4:()=>c,up:()=>d,vt:()=>o,yo:()=>l});var n=r(92504),s=r(76743),f=r(46991),i=r(21839),u=r(22279);function o(e=d){return[e[0],e[1],e[2],e[3]]}function c(e,t,r=o()){return(0,i.c)(r,e),r[3]=t,r}function y(e,t,r=o()){return(0,s.s)(T,e,p(e)),(0,s.s)(b,t,p(t)),(0,s.m)(T,b,T),function(e,t){return e[3]=t,e}(r,(0,n.KJ)((0,s.g)(r,T)))}function a(e,t,r,n=o()){return c(u.U,e,B),c(u.b,t,m),c(u.d,r,E),y(B,m,B),y(B,E,n),n}function l(e){return e}function h(e){return e[3]}function p(e){return(0,n.kU)(e[3])}const d=[0,0,1,0],T=(0,f.a)(),b=(0,f.a)(),B=(o(),o()),m=o(),E=o()},57813:(e,t,r)=>{r.d(t,{Y$:()=>l,qB:()=>E,Qt:()=>U,My:()=>W,bf:()=>I,jZ:()=>T,j0:()=>b,Sx:()=>B,E$:()=>m,h:()=>w,P:()=>R,SL:()=>O,gH:()=>h,si:()=>g,mJ:()=>q,UL:()=>Z,D6:()=>Y,Yi:()=>x,An:()=>F,LC:()=>S,xs:()=>p,Xm:()=>A,Vp:()=>V,zD:()=>$,m8:()=>z,nS:()=>P,H$:()=>v,eI:()=>L,Eq:()=>d,Aj:()=>M,E7:()=>X,Y4:()=>k,TX:()=>j,Uz:()=>C,ml:()=>N,XP:()=>_});class n{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=9;const f=this.TypedArrayConstructor;void 0===n&&(n=9*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<9;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let u=0;u<9;++u)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=9;class s{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=16;const f=this.TypedArrayConstructor;void 0===n&&(n=16*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)t[n]=this.typedBuffer[r++];return t}setMat(e,t){let r=e*this.typedBufferStride;for(let n=0;n<16;n++)this.typedBuffer[r++]=t[n]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;for(let u=0;u<16;++u)n[f++]=s[i++]}get buffer(){return this.typedBuffer.buffer}}s.ElementCount=16;class f{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=1;const f=this.TypedArrayConstructor;void 0===n&&(n=f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.stride=n,this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}get(e){return this.typedBuffer[e*this.typedBufferStride]}set(e,t){this.typedBuffer[e*this.typedBufferStride]=t}get buffer(){return this.typedBuffer.buffer}}f.ElementCount=1;var i=r(58680);class u{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=2;const f=this.TypedArrayConstructor;void 0===n&&(n=2*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,i.s)(t,this.typedBuffer[e],this.typedBuffer[e+1])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e]=t[1]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e]=r}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=2;var o=r(21839);class c{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.elementCount=3;const f=this.TypedArrayConstructor;void 0===n&&(n=3*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,o.s)(t,this.typedBuffer[e],this.typedBuffer[e+1],this.typedBuffer[e+2])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e]=t[2]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e]=n}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;var y=r(25102);class a{constructor(e,t,r=0,n,s){this.TypedArrayConstructor=e,this.start=r,this.elementCount=4;const f=this.TypedArrayConstructor;void 0===n&&(n=4*f.BYTES_PER_ELEMENT);const i=0===t.byteLength?0:r;this.typedBuffer=null==s?new f(t,i):new f(t,i,(s-r)/f.BYTES_PER_ELEMENT),this.typedBufferStride=n/f.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(e,t,r=this.count-t){const n=this.typedBuffer.byteOffset+t*this.stride;return new e(this.buffer,n,this.stride,n+r*this.stride)}getVec(e,t){return e*=this.typedBufferStride,(0,y.s)(t,this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e++],this.typedBuffer[e])}setVec(e,t){e*=this.typedBufferStride,this.typedBuffer[e++]=t[0],this.typedBuffer[e++]=t[1],this.typedBuffer[e++]=t[2],this.typedBuffer[e]=t[3]}get(e,t){return this.typedBuffer[e*this.typedBufferStride+t]}set(e,t,r){this.typedBuffer[e*this.typedBufferStride+t]=r}setValues(e,t,r,n,s){e*=this.typedBufferStride,this.typedBuffer[e++]=t,this.typedBuffer[e++]=r,this.typedBuffer[e++]=n,this.typedBuffer[e]=s}copyFrom(e,t,r){const n=this.typedBuffer,s=t.typedBuffer;let f=e*this.typedBufferStride,i=r*t.typedBufferStride;n[f++]=s[i++],n[f++]=s[i++],n[f++]=s[i++],n[f]=s[i]}get buffer(){return this.typedBuffer.buffer}}a.ElementCount=4;class l extends f{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}static fromTypedArray(e,t){return new l(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}l.ElementType="f32";class h extends u{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(h,e,t)}static fromTypedArray(e,t){return new h(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}h.ElementType="f32";class p extends c{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(p,e,t)}static fromTypedArray(e,t){return new p(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}p.ElementType="f32";class d extends a{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(d,e,t)}static fromTypedArray(e,t){return new d(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}d.ElementType="f32";class T extends n{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(T,e,t)}static fromTypedArray(e,t){return new T(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}T.ElementType="f32";class b extends n{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(b,e,t)}static fromTypedArray(e,t){return new b(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}b.ElementType="f64";class B extends s{constructor(e,t=0,r,n){super(Float32Array,e,t,r,n),this.elementType="f32"}slice(e,t){return this.sliceBuffer(B,e,t)}static fromTypedArray(e,t){return new B(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}B.ElementType="f32";class m extends s{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(m,e,t)}static fromTypedArray(e,t){return new m(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}m.ElementType="f64";class E extends f{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(E,e,t)}static fromTypedArray(e,t){return new E(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}E.ElementType="f64";class g extends u{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(g,e,t)}static fromTypedArray(e,t){return new g(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}g.ElementType="f64";class A extends c{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(A,e,t)}static fromTypedArray(e,t){return new A(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}A.ElementType="f64";class M extends a{constructor(e,t=0,r,n){super(Float64Array,e,t,r,n),this.elementType="f64"}slice(e,t){return this.sliceBuffer(M,e,t)}static fromTypedArray(e,t){return new M(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}M.ElementType="f64";class O extends f{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(O,e,t)}static fromTypedArray(e,t){return new O(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}O.ElementType="u8";class S extends u{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(S,e,t)}static fromTypedArray(e,t){return new S(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}S.ElementType="u8";class L extends c{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(L,e,t)}static fromTypedArray(e,t){return new L(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}L.ElementType="u8";class _ extends a{constructor(e,t=0,r,n){super(Uint8Array,e,t,r,n),this.elementType="u8"}slice(e,t){return this.sliceBuffer(_,e,t)}static fromTypedArray(e,t){return new _(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}_.ElementType="u8";class w extends f{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(w,e,t)}static fromTypedArray(e,t){return new w(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}w.ElementType="u16";class x extends u{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(x,e,t)}static fromTypedArray(e,t){return new x(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}x.ElementType="u16";class P extends c{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(P,e,t)}static fromTypedArray(e,t){return new P(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}P.ElementType="u16";class C extends a{constructor(e,t=0,r,n){super(Uint16Array,e,t,r,n),this.elementType="u16"}slice(e,t){return this.sliceBuffer(C,e,t)}static fromTypedArray(e,t){return new C(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}C.ElementType="u16";class R extends f{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(R,e,t)}static fromTypedArray(e,t){return new R(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}R.ElementType="u32";class F extends u{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(F,e,t)}static fromTypedArray(e,t){return new F(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}F.ElementType="u32";class v extends c{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(v,e,t)}static fromTypedArray(e,t){return new v(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}v.ElementType="u32";class N extends a{constructor(e,t=0,r,n){super(Uint32Array,e,t,r,n),this.elementType="u32"}slice(e,t){return this.sliceBuffer(N,e,t)}static fromTypedArray(e,t){return new N(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}N.ElementType="u32";class I extends f{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(I,e,t)}static fromTypedArray(e,t){return new I(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}I.ElementType="i8";class Y extends u{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(Y,e,t)}static fromTypedArray(e,t){return new Y(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Y.ElementType="i8";class z extends c{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(z,e,t)}static fromTypedArray(e,t){return new z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}z.ElementType="i8";class j extends a{constructor(e,t=0,r,n){super(Int8Array,e,t,r,n),this.elementType="i8"}slice(e,t){return this.sliceBuffer(j,e,t)}static fromTypedArray(e,t){return new j(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}j.ElementType="i8";class U extends f{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(U,e,t)}static fromTypedArray(e,t){return new U(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}U.ElementType="i16";class q extends u{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(q,e,t)}static fromTypedArray(e,t){return new q(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}q.ElementType="i16";class V extends c{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(V,e,t)}static fromTypedArray(e,t){return new V(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}V.ElementType="i16";class X extends a{constructor(e,t=0,r,n){super(Int16Array,e,t,r,n),this.elementType="i16"}slice(e,t){return this.sliceBuffer(X,e,t)}static fromTypedArray(e,t){return new X(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}X.ElementType="i16";class W extends f{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(W,e,t)}static fromTypedArray(e,t){return new W(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}W.ElementType="i32";class Z extends u{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(Z,e,t)}static fromTypedArray(e,t){return new Z(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}Z.ElementType="i32";class $ extends c{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer($,e,t)}static fromTypedArray(e,t){return new $(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}$.ElementType="i32";class k extends a{constructor(e,t=0,r,n){super(Int32Array,e,t,r,n),this.elementType="i32"}slice(e,t){return this.sliceBuffer(k,e,t)}static fromTypedArray(e,t){return new k(e.buffer,e.byteOffset,t,e.byteOffset+e.byteLength)}}k.ElementType="i32"},87773:(e,t,r)=>{r.d(t,{D:()=>s,O:()=>f});var n=r(539);function s(e,t){return e.isGeographic||e.isWebMercator&&(t?.geographic??!0)}function f(e,t,r){const s=!e.isGeoreferenced;null!=r?.geographic&&r.geographic!==s&&n.A.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${r.geographic}) for a Mesh vertex space of type "${e.type}" is not supported. This parameter will be ignored.`)}},97519:(e,t,r)=>{r.d(t,{$y:()=>A,NW:()=>M,YL:()=>L,bA:()=>O,h7:()=>_,project:()=>w,qD:()=>S});var n=r(92976),s=r(76287),f=r(37046),i=r(56192),u=r(21839),o=r(22279),c=r(46615),y=r(13484),a=r(32937),l=r(38394),h=r(84119),p=r(90166),d=r(29317),T=r(19938),b=r(99218),B=r(8695),m=r(24121),E=r(87773),g=r(72188);function A(e,t,r){return(0,E.D)(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference,s=R(t,r,I),f=new Float64Array(e.position.length),i=function(e,t,r,n){(0,m.t)(n,e,t);const s=new Float64Array(e.length);return(0,g.$5)(n,s,r)}(e.position,s,n,f),u=(0,c.n)(z,s);return{position:i,normal:x(i,f,e.normal,u,n),tangent:P(i,f,e.tangent,u,n)}}(e,t,r):function(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=N(r?r.unit:null,t.spatialReference);for(let c=0;c<s.length;c+=3)n[c]=s[c]*o+f,n[c+1]=s[c+1]*o+i,n[c+2]=s[c+2]*o+u;return{position:n,normal:e.normal,tangent:e.tangent}}(e,t,r)}function M(e,t=i.I){const{position:r,normal:n,tangent:s}=e;return{position:(0,m.t)(new Float64Array(r.length),r,t),normal:null!=n?(0,g.qs)(n,new Float32Array(n.length),t):null,tangent:null!=s?(0,g.KM)(s,new Float32Array(s.length),t):null}}function O(e,t,r,n){const{position:s,normal:f,tangent:i}=e;return t.isRelative?A(M(e,r?.localMatrix),t.getOriginPoint(n),{geographic:!t.isGeoreferenced}):{position:s,normal:f,tangent:i}}function S(e,t,r){if(r?.useTransform){const{position:n,normal:s,tangent:f}=e,{x:i,y:u,z:c}=t,y=(0,o.f)(i,u,c??0);return{vertexAttributes:{position:n,normal:s,tangent:f},vertexSpace:r.geographic??1?new b.A({origin:y}):new d.A({origin:y}),transform:new B.A}}return{vertexAttributes:A(e,t,r),vertexSpace:new T.A,transform:null}}function L(e,t,r){return(0,E.D)(t.spatialReference,r)?function(e,t,r){const n=t.spatialReference;R(t,r,I);const s=(0,f.i)(Y,I),i=new Float64Array(e.position.length),u=function(e,t,r,n){const s=(0,g.gr)(e,t,n),f=new Float64Array(s.length);return(0,m.t)(f,s,r),f}(e.position,n,s,i),o=(0,c.n)(z,s);return{position:u,normal:F(e.normal,e.position,i,n,o),tangent:v(e.tangent,e.position,i,n,o)}}(e,t,r):C(e,t,r)}function _(e,t,r,n,s){if(!t.isRelative)return L(e,n,s);const{spatialReference:f}=n,i=O(e,t,r,f);return n.equals(t.getOriginPoint(f))?C(i,n,s):L(i,n,s)}function w({positions:e,transform:t,vertexSpace:r,inSpatialReference:n,outSpatialReference:s,outPositions:c,localMode:d}){const T=r.isRelative?r.origin:o.Z,b=r.isRelative?t?.localMatrix??i.I:i.I;if(r.isGeoreferenced){const t=c??(0,p.jh)(e.length);if((0,f.a)(b,i.I)?(0,p.s)(t,e):(0,m.t)(t,e,b),!(0,u.h)(T,o.Z)){const[e,r,n]=T;for(let s=0;s<t.length;s+=3)t[s]+=e,t[s+1]+=r,t[s+2]+=n}return(0,h.projectBuffer)(t,n,0,t,s,0,t.length/3),t}let B=n;const E=(0,a.lO)(n);B=s.isWebMercator&&d||!(0,y.canProjectWithoutEngine)(n,E)?B:E,(0,l.l)(n,T,I,B),(0,f.m)(I,I,b);const g=c??(0,p.jh)(e.length);return(0,m.t)(g,e,I),(0,h.projectBuffer)(g,B,0,g,s,0,g.length/3),g}function x(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);return(0,m.a)(f,r,n),(0,g.si)(f,e,t,s,f),f}function P(e,t,r,n,s){if(null==r)return null;const f=new Float32Array(r.length);(0,m.a)(f,r,n,4);for(let i=3;i<f.length;i+=4)f[i]=r[i];return(0,g.Mv)(f,e,t,s,f),f}function C(e,t,r){const n=new Float64Array(e.position.length),s=e.position,f=t.x,i=t.y,u=t.z??0,o=N(r?r.unit:null,t.spatialReference);for(let c=0;c<s.length;c+=3)n[c]=(s[c]-f)/o,n[c+1]=(s[c+1]-i)/o,n[c+2]=(s[c+2]-u)/o;return{position:n,normal:e.normal,tangent:e.tangent}}function R(e,t,r){(0,l.l)(e.spatialReference,[e.x,e.y,e.z??0],r,(0,a.lO)(e.spatialReference));const n=N(t?t.unit:null,e.spatialReference);return(0,f.b)(r,r,[n,n,n]),r}function F(e,t,r,n,s){if(null==e)return null;const f=(0,g.X4)(e,t,r,n,new Float32Array(e.length));return(0,m.a)(f,f,s),f}function v(e,t,r,n,s){if(null==e)return null;const f=(0,g.xA)(e,t,r,n,new Float32Array(e.length));return(0,m.a)(f,f,s,4),f}function N(e,t){if(null==e)return 1;const r=(0,n.KX)(t);return 1/(0,n.oU)(r,"meters",e)}const I=(0,i.a)(),Y=(0,i.a)(),z=(0,s.a)()},72188:(e,t,r)=>{r.d(t,{$5:()=>E,KM:()=>A,Mv:()=>O,X4:()=>b,gr:()=>m,qs:()=>g,si:()=>B,xA:()=>M});var n=r(539),s=r(46615),f=r(76287),i=r(56192),u=r(21839),o=r(22279),c=r(32937),y=r(38394),a=r(84119),l=r(87926),h=r(96082),p=r(57813),d=r(24121);const T=n.A.getLogger("esri.geometry.support.meshUtils.normalProjection");function b(e,t,r,n,s){return L(n)?(S(w.TO_PCPF,p.xs.fromTypedArray(e),p.Xm.fromTypedArray(t),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s)),s):(T.error("Cannot convert spatial reference to PCPF"),s)}function B(e,t,r,n,s){return L(n)?(S(w.FROM_PCPF,p.xs.fromTypedArray(e),p.Xm.fromTypedArray(t),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s)),s):(T.error("Cannot convert to spatial reference from PCPF"),s)}function m(e,t,r){return(0,a.projectBuffer)(e,t,0,r,(0,c.lO)(t),0,e.length/3),r}function E(e,t,r){return(0,a.projectBuffer)(e,(0,c.lO)(r),0,t,r,0,e.length/3),t}function g(e,t,r){return(0,s.n)(F,r),(0,d.a)(t,e,F),(0,s.i)(F)||(0,d.n)(t,t),t}function A(e,t,r){if((0,s.n)(F,r),(0,d.a)(t,e,F,4),(0,s.i)(F)||(0,d.n)(t,t,4),e!==t)for(let n=3;n<e.length;n+=4)t[n]=e[n];return t}function M(e,t,r,n,s){if(!L(n))return T.error("Cannot convert spatial reference to PCPF"),s;S(w.TO_PCPF,p.xs.fromTypedArray(e,4*Float32Array.BYTES_PER_ELEMENT),p.Xm.fromTypedArray(t),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s,4*Float32Array.BYTES_PER_ELEMENT));for(let f=3;f<e.length;f+=4)s[f]=e[f];return s}function O(e,t,r,n,s){if(!L(n))return T.error("Cannot convert to spatial reference from PCPF"),s;S(w.FROM_PCPF,p.xs.fromTypedArray(e,16),p.Xm.fromTypedArray(t),p.Xm.fromTypedArray(r),n,p.xs.fromTypedArray(s,16));for(let f=3;f<e.length;f+=4)s[f]=e[f];return s}function S(e,t,r,n,f,i){if(!t)return;const o=r.count,a=(0,c.lO)(f);if(_(f))for(let c=0;c<o;c++)n.getVec(c,P),t.getVec(c,C),(0,y.l)(a,P,R,a),(0,s.f)(F,R),e===w.FROM_PCPF&&(0,s.t)(F,F),(0,u.t)(C,C,F),i.setVec(c,C);else for(let c=0;c<o;c++){n.getVec(c,P),t.getVec(c,C),(0,y.l)(a,P,R,a),(0,s.f)(F,R);const f=(0,h.jg)(r.get(c,1));let o=Math.cos(f);e===w.TO_PCPF&&(o=1/o),F[0]*=o,F[1]*=o,F[2]*=o,F[3]*=o,F[4]*=o,F[5]*=o,e===w.FROM_PCPF&&(0,s.t)(F,F),(0,u.t)(C,C,F),(0,u.n)(C,C),i.setVec(c,C)}return i}function L(e){return _(e)||function(e){return e.isWebMercator}(e)}function _(e){return e.isWGS84||(0,l.x1)(e)||(0,l.q8)(e)||(0,l.KQ)(e)}var w,x;(x=w||(w={}))[x.TO_PCPF=0]="TO_PCPF",x[x.FROM_PCPF=1]="FROM_PCPF";const P=(0,o.c)(),C=(0,o.c)(),R=(0,i.a)(),F=(0,f.a)()}}]);