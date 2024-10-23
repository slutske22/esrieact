"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9705],{79705:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var r=s(66866),n=s(98849),i=s(20464),o=s(85251),a=s(21564),l=(s(73446),s(85569),s(39831),s(63863)),u=s(57822),d=s(65012),p=s(44778),c=s(25758);const h=e=>{let t=class extends e{resume(){this._isUserPaused=!1,this.suspended||this._doResume()}pause(){this._isUserPaused=!0,this.suspended||this._doPause()}constructor(...e){super(...e),this._isUserPaused=!1,this.filter=null}get connectionStatus(){return this._isUserPaused?"paused":this._streamConnectionStatus}_onSuspendedChange(e){e?this._doPause():this._isUserPaused||this._doResume()}};return(0,r._)([(0,a.MZ)()],t.prototype,"_isUserPaused",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],t.prototype,"connectionStatus",null),(0,r._)([(0,a.MZ)({type:c.A})],t.prototype,"filter",void 0),t=(0,r._)([(0,l.$)("esri.layers.mixins.StreamLayerView")],t),t};function y(e,t){if(null==e&&null==t)return null;const s={};return null!=t&&(s.geometry=t.toJSON()),null!=e&&(s.where=e),s}let m=class extends(h(d.default)){constructor(){super(...arguments),this.pipelineConnectionStatus="disconnected",this.pipelineErrorString=null,this._enabledEventTypes=new Set}initialize(){this.addHandles([(0,o.wB)((()=>this.layer.customParameters),(e=>this._proxy.updateCustomParameters(e))),this.layer.on("send-message-to-socket",(e=>this._proxy.sendMessageToSocket(e))),this.layer.on("send-message-to-client",(e=>this._proxy.sendMessageToClient(e))),(0,o.wB)((()=>this.layer.purgeOptions),(()=>this._update())),(0,o.wB)((()=>this.suspended),this._onSuspendedChange.bind(this))],"constructor")}get connectionError(){return this.pipelineErrorString?new n.A("stream-controller",this.pipelineErrorString):null}on(e,t){if(Array.isArray(e))return(0,i.vE)(e.map((e=>this.on(e,t))));const s=["data-received","message-received"].includes(e);s&&(this._enabledEventTypes.add(e),this._proxy.enableEvent(e,!0));const r=super.on(e,t),n=this;return(0,i.hA)((()=>{r.remove(),s&&(n._proxy.closed||n.hasEventListener(e)||n._proxy.enableEvent(e,!1))}))}queryLatestObservations(e,t){if(!(this.layer.timeInfo?.endField||this.layer.timeInfo?.startField||this.layer.timeInfo?.trackIdField))throw new n.A("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=u.A.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}detach(){super.detach(),this.pipelineConnectionStatus="disconnected"}get _streamConnectionStatus(){return this.pipelineConnectionStatus}_doPause(){this._proxy?.pauseStream()}_doResume(){this._proxy?.resumeStream()}_createClientOptions(){return{...super._createClientOptions(),setProperty:e=>{this.set(e.propertyName,e.value)}}}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(y(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,s=e.fields.map((e=>e.toJSON())),r=(0,p.eh)(e.geometryType),n=e.timeInfo?.toJSON()||null,i=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",isPaused:this._isUserPaused,fields:s,fieldsIndex:this.layer.fieldsIndex.toJSON(),geometryType:r,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:y(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enabledEventTypes:Array.from(this._enabledEventTypes.values()),spatialReference:i,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval,customParameters:e.customParameters}}};(0,r._)([(0,a.MZ)()],m.prototype,"pipelineConnectionStatus",void 0),(0,r._)([(0,a.MZ)()],m.prototype,"pipelineErrorString",void 0),(0,r._)([(0,a.MZ)({readOnly:!0})],m.prototype,"connectionError",null),(0,r._)([(0,a.MZ)({readOnly:!0})],m.prototype,"_streamConnectionStatus",null),m=(0,r._)([(0,l.$)("esri.views.2d.layers.StreamLayerView2D")],m);const _=m}}]);