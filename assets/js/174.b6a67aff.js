"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[174],{70174:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var a=s(66866),r=s(48982),i=s(4194),l=s(21564),n=(s(73446),s(85569),s(39831),s(63863)),h=s(40231),d=s(9049);let o=class extends((0,h.e)(d.A)){constructor(e){super(e),this.layerViews=new r.A}set layerViews(e){this._set("layerViews",(0,i.V)(e,this._get("layerViews")))}get updatingProgress(){return 0===this.layerViews.length?1:this.layerViews.reduce(((e,t)=>e+t.updatingProgress),0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",(()=>this._updateStageChildren())))}detach(){this.container.removeAllChildren()}update(e){}moveStart(){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};(0,a._)([(0,l.MZ)({cast:i.H})],o.prototype,"layerViews",null),(0,a._)([(0,l.MZ)({readOnly:!0})],o.prototype,"updatingProgress",null),o=(0,a._)([(0,n.$)("esri.views.2d.layers.KnowledgeGraphLayerView2D")],o);const c=o}}]);