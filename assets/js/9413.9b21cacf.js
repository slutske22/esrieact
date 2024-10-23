"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9413],{34427:(e,t,n)=>{function i(e){return null!=a(e)||null!=o(e)}function s(e){return l.test(e)}function r(e){return a(e)??o(e)}function o(e){const t=new Date(e);return function(e,t){if(Number.isNaN(e.getTime()))return!1;let n=!0;if(c&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!u.test(e[i]),i++;n=!t}}return n}(t,e)?Number.isNaN(t.getTime())?null:t.getTime()-6e4*t.getTimezoneOffset():null}function a(e){const t=l.exec(e);if(!t?.groups)return null;const n=t.groups,i=+n.year,s=+n.month-1,r=+n.day,o=+(n.hours??"0"),a=+(n.minutes??"0"),u=+(n.seconds??"0");if(o>23)return null;if(a>59)return null;if(u>59)return null;const c=n.ms??"0",d=c?+c.padEnd(3,"0").substring(0,3):0;let h;if(n.isUTC||!n.offsetSign)h=Date.UTC(i,s,r,o,a,u,d);else{const e=+n.offsetHours,t=+n.offsetMinutes;h=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(i,s,r,o,a,u,d)}return Number.isNaN(h)?null:h}n.d(t,{Br:()=>s,Cq:()=>i,_U:()=>r});const l=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;const u=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,c=!Number.isNaN(new Date("technology 10").getTime())},4486:(e,t,n)=>{n.d(t,{w:()=>o});var i=n(85569),s=n(63678),r=n(45973);class o{constructor(e=9,t){this._compareMinX=c,this._compareMinY=d,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),x.prune(),b.prune(),N.prune()}all(e){this._all(this._data,e)}search(e,t){let n=this._data;const i=this._toBBox;if(_(e,n))for(I.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;_(e,o)&&(n.leaf?t(r):g(e,o)?this._all(r,t):I.push(r))}n=I.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!_(e,t))return!1;for(I.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(_(e,r)){if(t.leaf||g(e,r))return!0;I.push(s)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new B([]),this}remove(e){if(!e)return this;let t,n=this._data,s=null,r=0,o=!1;const a=this._toBBox(e);for(b.clear(),N.clear();n||b.length>0;){if(n||(n=b.pop(),s=b.data[b.length-1],r=N.pop()??0,o=!0),n.leaf&&(t=(0,i.qh)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),b.push(n),this._condense(b),this;o||n.leaf||!g(n,a)?s?(r++,n=s.children[r],o=!1):n=null:(b.push(n),N.push(r),r=0,s=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let n=e;for(x.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else x.pushArray(n.children);n=x.pop()??null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new B(e.slice(t,n+1));return a(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new E([]);o.height=i;const l=Math.ceil(s/r),u=l*Math.ceil(Math.sqrt(r));y(e,t,n,u,this._compareMinX);for(let a=t;a<=n;a+=u){const t=Math.min(a+u-1,n);y(e,a,t,l,this._compareMinY);for(let n=a;n<=t;n+=l){const s=Math.min(n+l-1,t);o.children.push(this._build(e,n,s,i-1))}}return a(o,this._toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=h(o),l=p(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this._toBBox,s=n?e:i(e);b.clear();const r=this._chooseSubtree(s,this._data,t,b);for(r.children.push(e),u(r,s);t>=0&&b.data[t].children.length>this._maxEntries;)this._split(b,t),t--;this._adjustParentBBoxes(s,b,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),l=n.leaf?new B(o):new E(o);l.height=n.height,a(n,this._toBBox),a(l,this._toBBox),t?e.data[t-1].children.push(l):this._splitRoot(n,l)}_splitRoot(e,t){this._data=new E([e,t]),this._data.height=e.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=l(e,0,o,this._toBBox),a=l(e,o,n,this._toBBox),u=m(t,a),c=h(t)+h(a);u<i?(i=u,r=o,s=c<s?c:s):u===i&&c<s&&(s=c,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this._compareMinX:c,s=e.leaf?this._compareMinY:d;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this._toBBox,r=l(e,0,t,s),o=l(e,n-t,n,s);let a=f(r)+f(o);for(let l=t;l<n-t;l++){const t=e.children[l];u(r,e.leaf?s(t):t),a+=f(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];u(o,e.leaf?s(t):t),a+=f(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)u(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const s=e.data[t-1],r=s.children;r.splice((0,i.qh)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function a(e,t){l(e,0,e.children.length,t,e)}function l(e,t,n,i,s){s||(s=new B([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],u(s,e.leaf?i(r):r);return s}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function c(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function h(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function f(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function m(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function _(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,n,i,s){const o=[t,n];for(;o.length;){const t=o.pop(),n=o.pop();if(t-n<=i)continue;const a=n+Math.ceil((t-n)/i/2)*i;(0,r.q)(e,a,n,t,s),o.push(n,a,a,t)}}const I=new s.A,x=new s.A,b=new s.A,N=new s.A({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class F extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new i.vW}}class B extends F{constructor(e){super(),this.children=e,this.leaf=!0}}class E extends F{constructor(e){super(),this.children=e,this.leaf=!1}}},89442:(e,t,n)=>{n.d(t,{B:()=>u,GP:()=>a,qg:()=>c});var i=n(96274),s=n(91109);const r={ar:[".",","],bg:[",","\xa0"],bs:[",","."],ca:[",","."],cs:[",","\xa0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xa0"],fi:[",","\xa0"],fr:[",","\u202f"],"fr-ch":[",","\u202f"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xa0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xa0"],lv:[",","\xa0"],mk:[",","."],nb:[",","\xa0"],nl:[",","."],pl:[",","\xa0"],pt:[",","."],"pt-pt":[",","\xa0"],ro:[",","."],ru:[",","\xa0"],sk:[",","\xa0"],sl:[",","."],sr:[",","."],sv:[",","\xa0"],th:[".",","],tr:[",","."],uk:[",","\xa0"],vi:[",","."],zh:[".",","]};function o(e=(0,s.JK)()){let t=(e=e.toLowerCase())in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=r[e];return{decimal:n,group:i,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:function(e,t,n){const i=(n=n||{}).customs.group,s=n.customs.decimal,r=t.split(";"),o=r[0];if((t=r[e<0?1:0]||"-"+o).includes("%"))e*=100;else if(t.includes("\u2030"))e*=1e3;else{if(t.includes("\xa4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const a=l,u=o.match(a);if(!u)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,function(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;s?r=n.places.substring(s+1):+r>=0||(r=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(i[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;+e>a.length&&(o[1]=a.padEnd(Number(e),"0")),+r<a.length&&(o[1]=a.substr(0,Number(r)))}else o[1]&&o.pop();const l=i[0].replace(",","");let u=l.indexOf("0");-1!==u&&(u=l.length-u,u>o[0].length&&(o[0]=o[0].padStart(u,"0")),l.includes("#")||(o[0]=o[0].substr(o[0].length-u)));let c,d,h=i[0].lastIndexOf(",");if(-1!==h){c=i[0].length-h-1;const e=i[0].substr(0,h);h=e.lastIndexOf(","),-1!==h&&(d=e.length-h-1)}const f=[];for(let p=o[0];p;){const e=p.length-c;f.push(e>0?p.substr(e):p),p=e>0?p.slice(0,e):"",d&&(c=d,d=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}(e,u[0],{decimal:s,group:i,places:n.places,round:n.round}))}(e,i,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function u(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,s=t.group,r=t.decimal;let a=1;if(n.includes("%"))a/=100;else if(n.includes("\u2030"))a/=1e3;else if(n.includes("\xa4"))throw new Error("currency notation not supported");const u=n.split(";");1===u.length&&u.push("-"+u[0]);const c=h(u,(t=>(t="(?:"+(0,i.Cj)(t,".")+")").replace(l,(t=>{const n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:r,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==a&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&+o<i[1].length&&(o+=","+i[1].length),n.places=o);const l=i[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+function(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=d(e),n=h(e.fractional,(t=>{let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+h(e.exponent,(t=>t?"([eE]"+d({signed:e.eSigned})+")":""))}(n)+")"}))),!0);return{regexp:c.replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:r,factor:a}}function c(e,t){const n=u(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let s=i[1];if(!i[1]){if(!i[2])return NaN;s=i[2],n.factor*=-1}return s=s.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function d(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,(e=>e?"[-+]":""),!0)+h(e.separator,(t=>{if(!t)return"(?:\\d+)";" "===(t=(0,i.Cj)(t))?t="\\s":"\xa0"===t&&(t="\\s\\xa0");const n=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+t+"]\\d{"+s+"})*["+t+"]\\d{"+n+"})";return n-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const h=(e,t,n)=>{if(!(e instanceof Array))return t(e);const i=[];for(let s=0;s<e.length;s++)i.push(t(e[s]));return f(i.join("|"),Boolean(n))},f=(e,t)=>"("+(t?"?:":"")+e+")"},39645:(e,t,n)=>{n.d(t,{F:()=>l});var i=n(39831),s=n(4486),r=n(80510);const o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.w(9,(0,i.A)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,i)=>{e[t++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.Ie)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},86680:(e,t,n)=>{n.d(t,{A:()=>F});var i=n(85569),s=n(98849),r=n(17306),o=n(539),a=n(4675),l=n(80510),u=n(21355),c=n(39645),d=n(95694);function h(e,t){return e?t?4:3:t?3:2}function f(e,t,n,i,s){if(!t?.lengths.length)return null;const r="upperLeft"===s?.originPosition?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const o=e.coords,a=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:c}=t,d=h(n,i);let f=0;for(const h of u){const e=p(l,c,f,h,n,i,r);e&&a.push(e),f+=h*d}if(a.sort(((e,t)=>{let i=r*e[2]-r*t[2];return 0===i&&n&&(i=e[4]-t[4]),i})),a.length){let e=6*a[0][2];o[0]=a[0][0]/e,o[1]=a[0][1]/e,n&&(e=6*a[0][4],o[2]=0!==e?a[0][3]/e:0),(o[0]<l[0]||o[0]>l[1]||o[1]<l[2]||o[1]>l[3]||n&&(o[2]<l[4]||o[2]>l[5]))&&(o.length=0)}if(!o.length){const e=t.lengths[0]?m(c,0,u[0],n,i):null;if(!e)return null;o[0]=e[0],o[1]=e[1],n&&e.length>2&&(o[2]=e[2])}return e}function p(e,t,n,i,s,r,o=1){const a=h(s,r);let l=n,u=n+a,c=0,d=0,f=0,p=0,m=0;for(let h=0,_=i-1;h<_;h++,l+=a,u+=a){const n=t[l],i=t[l+1],r=t[l+2],o=t[u],a=t[u+1],h=t[u+2];let g=n*a-o*i;p+=g,c+=(n+o)*g,d+=(i+a)*g,s&&(g=n*h-o*r,f+=(r+h)*g,m+=g),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),i<e[2]&&(e[2]=i),i>e[3]&&(e[3]=i),s&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(p*o>0&&(p*=-1),m*o>0&&(m*=-1),!p)return null;const g=[c,d,.5*p];return s&&(g[3]=f,g[4]=.5*m),g}function m(e,t,n,i,s){const r=h(i,s);let o=t,a=t+r,l=0,u=0,c=0,d=0;for(let h=0,f=n-1;h<f;h++,o+=r,a+=r){const t=e[o],n=e[o+1],s=e[o+2],r=e[a],h=e[a+1],f=e[a+2],p=i?_(t,n,s,r,h,f):g(t,n,r,h);if(p)if(l+=p,i){const e=I(t,n,s,r,h,f);u+=p*e[0],c+=p*e[1],d+=p*e[2]}else{const e=y(t,n,r,h);u+=p*e[0],c+=p*e[1]}}return l>0?i?[u/l,c/l,d/l]:[u/l,c/l]:n>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function g(e,t,n,i){const s=n-e,r=i-t;return Math.sqrt(s*s+r*r)}function _(e,t,n,i,s,r){const o=i-e,a=s-t,l=r-n;return Math.sqrt(o*o+a*a+l*l)}function y(e,t,n,i){return[e+.5*(n-e),t+.5*(i-t)]}function I(e,t,n,i,s,r){return[e+.5*(i-e),t+.5*(s-t),n+.5*(r-n)]}var x=n(32597),b=n(88443);const N={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new x.Om(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=f(new b.A,e.geometry,t.hasZ,t.hasM)),e.centroid)},w=(0,a.vt)();class F{constructor(e){this.geometryInfo=e,this._boundsStore=new c.F,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.A,this.featureAdapter=N}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,i,s]=this.fullBounds;return{xmin:t,ymin:n,xmax:i,ymax:s,spatialReference:(0,d.ag)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}upsertMany(e){const t=e.map((e=>this._upsert(e)));return this._emitChanged(),t.filter(i.Ru)}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,a.Jt)(w,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let i;if(this._markedIds.add(t),n?(e.displayId=n.displayId,i=this._boundsStore.get(t),this._boundsStore.delete(t)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),!e.geometry?.coords?.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);i=(0,u.jQ)(null!=i?i:(0,l.vt)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=i&&this._boundsStore.set(t,i),this._featuresById.set(t,e)}_upsert(e){const t=e?.objectId;if(null==t)return o.A.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.A("featurestore:invalid-feature","feature id is missing",{feature:e})),null;const n=this._featuresById.get(t);if(!n)return this._add(e),e;this._markedIds.add(t);const{geometry:i,attributes:r}=e;for(const s in r)n.attributes[s]=r[s];return i&&(n.geometry=i,this._boundsStore.set(t,(0,u.jQ)((0,l.vt)(),i,this.geometryInfo.hasZ,this.geometryInfo.hasM)??null)),n}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},41794:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});n(17639);var i=n(86394),s=n(12690),r=n(34427),o=n(98849),a=n(539),l=n(40189),u=n(20909),c=n(13484),d=n(27243),h=n(87926),f=n(96082),p=n(32597),m=n(88443),g=n(86680),_=n(23783),y=n(88776),I=n(89442),x=n(42453);const b=/^\s*"([\S\s]*)"\s*$/,N=/""/g,w=[","," ",";","|","\t"];function*F(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+t.length,n&&!r.trim()||(yield r)}}function B(e){const t=e.includes("\r\n")?"\r\n":"\n";return F(e,t,!0)}function E(e,t){return F(e,t,!1)}function T(e,t,n){e=e.trim(),t=t?.trim();const i=[],s=Array.from(new Set([n?.delimiter,...w])).filter((e=>null!=e));for(const o of s){const n=M(e,o).length,s=M(t,o).length??n;n>1&&i.push({weight:Math.min(n,s),delimiter:o})}const r=i.sort((({weight:e},{weight:t})=>t-e)).map((({delimiter:e})=>e));for(const o of r){const t=Y(v(e,o).names,n?.longitudeField,n?.latitudeField);if(t.longitudeFieldName&&t.latitudeFieldName)return{delimiter:o,locationInfo:t}}return{delimiter:r[0],locationInfo:null}}function*S(e,t,n,i=()=>Object.create(null)){const s=B(e);s.next();let r="",o="",a=0,l=i(),u=0;e:for(const c of s){const e=E(c,n);for(const s of e)if(r+=o+s,o="",a+=A(s),a%2==0){if(a>0){const e=b.exec(r);if(!e){l=i(),u=0,r="",a=0;continue e}l[t[u]]=e[1].replaceAll(N,'"'),u++}else l[t[u]]=r,u++;r="",a=0}else o=n;0===a?(yield l,l=i(),u=0):o="\n"}}function v(e,t){const n=M(e,t).filter((e=>null!=e)),i=n.map((e=>(0,x.rS)(e)));for(let s=i.length-1;s>=0;s--)i[s]||(i.splice(s,1),n.splice(s,1));return{names:i,aliases:n}}function M(e,t){if(!e?.length)return[];const n=[];let i="",s="",r=0;const o=E(e,t);for(const a of o)if(i+=s+a,s="",r+=A(a),r%2==0){if(r>0){const e=b.exec(i);e&&n.push(e[1].replaceAll(N,'"'))}else n.push(i);i="",r=0}else s=t;return n}function A(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}function Y(e,t,n){t=(0,x.rS)(t)?.toLowerCase(),n=(0,x.rS)(n)?.toLowerCase();const i=e.map((e=>e.toLowerCase())),s=t?e[i.indexOf(t)]:null,r=n?e[i.indexOf(n)]:null;return{longitudeFieldName:s||e[i.indexOf(j.find((e=>i.includes(e))))],latitudeFieldName:r||e[i.indexOf(X.find((e=>i.includes(e))))]}}function C(e){if(!e.length)return"string";const t=/[^+\-.,0-9]/;return e.map((e=>{if(""!==e){if(!t.test(e)){let t=O(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")){if(t=Number(e),!Number.isNaN(t))return"double";if(e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t)))return"double"}}return(0,r.Cq)(e)?"date":"string"}})).reduce(((e,t)=>void 0===e?t:void 0===t?e:e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0))}const O=function(){const e=(0,I.B)(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return s=>{const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),X=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],j=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"];var k=n(20061),q=n(79005),D=n(12129),R=n(78983);const P=(0,k.F0)("esriGeometryPoint"),V=["csv"],L=[0,0];class G{constructor(e,t){this.x=e,this.y=t}}class ${constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t={}){this._loadOptions=e;const[n]=await Promise.all([this._fetch(t.signal),this._checkProjection(e?.parsingOptions?.spatialReference)]),i=function(e,t){const n=t.parsingOptions||{},i={delimiter:n.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},s=i.layerDefinition={name:(0,u.e7)(t.url,V)||"csv",dateFieldsTimeReference:{timeZoneIANA:D.n$},drawingInfo:P,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:4326}}},r=B(e),a=r.next().value?.trim(),l=r.next().value?.trim();if(!a)throw new o.A("csv-layer:empty-csv","CSV is empty",{csv:e});const{delimiter:c,locationInfo:d}=T(a,l,n);if(!c)throw new o.A("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:a,secondLine:l,parsingOptions:n});if(!d)throw new o.A("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:a,secondLine:l,parsingOptions:n});i.locationInfo=d,i.delimiter=c;const{names:h,aliases:f}=v(a,c),p=function(e,t,n,i,s){const r=[],o=S(e,n,t),a=[];for(const l of o){if(10===a.length)break;a.push(l)}for(let l=0;l<n.length;l++){const e=n[l],t=i[l];if(e===s.longitudeFieldName||e===s.latitudeFieldName)r.push({name:e,type:"esriFieldTypeDouble",alias:t});else{let n;switch(C(a.map((t=>t[e])))){case"integer":n="esriFieldTypeInteger";break;case"double":n="esriFieldTypeDouble";break;case"date":n="esriFieldTypeDate";break;default:n="esriFieldTypeString"}r.push({name:e,type:n,alias:t,length:(0,x._b)(n)})}}return r}(e,i.delimiter,h,f,i.locationInfo);if(n.fields?.length){const e=new q.A(n.fields);for(const t of p){const n=e.get(t.name);n&&Object.assign(t,n)}}if(!p.some((e=>"esriFieldTypeOID"===e.type&&(s.objectIdField=e.name,!0)))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};s.objectIdField=e.name,p.unshift(e)}s.fields=p;const m=new q.A(s.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=m.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=m.get(i.locationInfo.longitudeFieldName).name),s.timeInfo){const e=s.timeInfo;if(e.startTimeField){const t=m.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=m.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=m.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(s.timeInfo=null)}return i}(n,e);this._locationInfo=i.locationInfo,this._delimiter=i.delimiter,this._queryEngine=this._createQueryEngine(i);const s=await this._createFeatures(n);this._queryEngine.featureStore.addMany(s);const{fullExtent:r,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(i.layerDefinition.extent=r,a){const{start:e,end:t}=a;i.layerDefinition.timeInfo.timeExtent=[e,t]}return i}async applyEdits(){throw new o.A("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,s.UT)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,l.zf)(e)||a.A.getLogger("esri.layers.CSVLayer").error(new o.A("csv-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete();const{fullExtent:t,timeExtent:n}=await this._queryEngine.fetchRecomputedExtents();return{extent:t,timeExtent:n}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions;if(!t)throw new o.A("csv-layer:invalid-source","url not defined");const s=(0,u.An)(t);return(await(0,i.A)(s.path,{query:{...s.query,...n},responseType:"text",signal:e})).data}_createQueryEngine(e){const{objectIdField:t,fields:n,extent:i,timeInfo:s}=e.layerDefinition,r=new g.A({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new y.d({fieldsIndex:q.A.fromLayerJSON({fields:n,dateFieldsTimeReference:{timeZoneIANA:D.n$}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:t,spatialReference:i.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:r})}async _createFeatures(e){const{latitudeFieldName:t,longitudeFieldName:n}=this._locationInfo,{objectIdField:i,fieldsIndex:s,spatialReference:o}=this._queryEngine;let a=[];const l=[],u=s.fields.filter((e=>e.name!==i)).map((e=>e.name));let g=0;const _={};for(const r of s.fields)if("esriFieldTypeOID"!==r.type&&"esriFieldTypeGlobalID"!==r.type){const e=(0,x.lD)(r);void 0!==e&&(_[r.name]=e)}const y=S(e,u,this._delimiter,(0,k.Vx)(_,i));for(const c of y){const e=this._parseCoordinateValue(c[t]),o=this._parseCoordinateValue(c[n]);if(null!=o&&null!=e&&!isNaN(e)&&!isNaN(o)){c[t]=e,c[n]=o;for(const e in c)if(e!==t&&e!==n)if(s.isDateField(e))c[e]=(0,r._U)(c[e]);else if(s.isNumericField(e)){const t=O(c[e]);isNaN(t)?c[e]=null:c[e]=t}c[i]=g,g++,a.push(new G(o,e)),l.push(c)}}if(!(0,h.aI)({wkid:4326},o))if((0,h.K8)(o))for(const r of a)[r.x,r.y]=(0,f.je)(r.x,r.y,L);else a=(0,c.projectMany)(d.g,a,R.A.WGS84,o,null,null);const I=[];for(let r=0;r<a.length;r++){const{x:e,y:t}=a[r],n=l[r];n[i]=r+1,I.push(new p.Om(new m.A([],[e,t]),n,null,n[i]))}return I}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=O(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await(0,_.Nk)(h.w5,e)}catch{throw new o.A("csv-layer:projection-not-supported","Projection not supported")}}}},20061:(e,t,n)=>{n.d(t,{F0:()=>a,Vx:()=>c,e2:()=>d,f:()=>h});var i=n(39831),s=n(19251),r=n(22567),o=n(23173);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.Cb:"esriGeometryPolyline"===e?o.yM:o.WR}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function c(e,t){if((0,i.A)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new i}catch(n){return()=>({[t]:null,...e})}}function d(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,s.o8)(e)}}]}function h(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:r.F,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}}}]);