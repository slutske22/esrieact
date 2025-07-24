"use strict";
exports.id = 58193;
exports.ids = [58193];
exports.modules = {

/***/ 58193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ g)
});

// EXTERNAL MODULE: ../node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(66866);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/intl.js + 1 modules
var intl = __webpack_require__(17791);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/string.js
var string = __webpack_require__(96274);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(21564);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39831);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(539);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(9272);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(63863);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations/VisibleElements.js
var VisibleElements = __webpack_require__(88292);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/componentsUtils.js + 1 modules
var componentsUtils = __webpack_require__(17199);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/globalCss.js
var globalCss = __webpack_require__(35251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/widgetUtils.js
var widgetUtils = __webpack_require__(99484);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/jsxFactory.js
var jsxFactory = __webpack_require__(96704);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/FeatureUtilityNetworkAssociationsViewModel.js + 2 modules
var FeatureUtilityNetworkAssociationsViewModel = __webpack_require__(36056);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/ReactiveMap.js
var ReactiveMap = __webpack_require__(71416);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/core/reactiveUtils.js
var reactiveUtils = __webpack_require__(85251);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/Widget.js + 4 modules
var Widget = __webpack_require__(46928);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js
var messageBundle = __webpack_require__(43955);
// EXTERNAL MODULE: ../node_modules/@arcgis/core/intl/substitute.js
var substitute = __webpack_require__(48187);
;// ../node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/UtilityNetworkAssociationList.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d="esri-utility-network-association-list",p={featureObserver:`${d}__feature-observer`,filterContainer:`${d}__filter-container`,limitNoticeContainer:`${d}__limit-notice-container`,loadingContainer:`${d}__loading-container`};let m=class extends Widget/* default */.A{constructor(e,o){super(e,o),this._isFeatureCountNoticeOpen=!0,this._observer=new IntersectionObserver((([e])=>{e?.isIntersecting&&this._increaseFeaturePage()}),{root:window.document}),this._observerNode=null,this.featuresPerPage=50,this.filterText="",this.headingLevel=5,this.maxFeatureCount=1e3,this.messagesFeature=null,this.messagesCommon=null,this.selectedLayer=null,this.tooltipReferenceMap=new ReactiveMap/* default */.A,this.viewModel=new FeatureUtilityNetworkAssociationsViewModel/* default */.A}initialize(){this.setUpObserver()}loadDependencies(){return (0,componentsUtils/* loadCalciteComponents */.W)({icon:()=>__webpack_require__.e(/* import() */ 96446).then(__webpack_require__.bind(__webpack_require__, 96446)),input:()=>__webpack_require__.e(/* import() */ 7311).then(__webpack_require__.bind(__webpack_require__, 7311)),loader:()=>__webpack_require__.e(/* import() */ 32524).then(__webpack_require__.bind(__webpack_require__, 32524)),notice:()=>__webpack_require__.e(/* import() */ 98566).then(__webpack_require__.bind(__webpack_require__, 98566))})}destroy(){this.tooltipReferenceMap.clear()}get associatedFeatureCount(){const e=this.viewModel.associationViewModels,t=this.selectedLayer?e.get(this.selectedLayer):null;return t?t.length:0}set currentFeaturePage(e){const{featuresPerPage:t,associatedFeatureCount:o}=this,i=Math.ceil(o/t)||1,r=Math.max(Math.min(e,i),1);this._set("currentFeaturePage",r)}get currentFeaturePage(){return this._get("currentFeaturePage")??1}get endIndex(){const{currentFeaturePage:e,featuresPerPage:t,maxFeatureCount:o}=this;return Math.min(e*t,o)}renderConnectivityIcon(e,t){const{tooltipReferenceMap:o}=this;let i;switch(e){case"junction-edge-from-connectivity":i="connection-end-left";break;case"junction-edge-to-connectivity":i="connection-end-right";break;case"junction-edge-midspan-connectivity":i="connection-middle";break;default:i="connection-to-connection"}return (0,jsxFactory/* tsx */.K)("calcite-icon",{afterCreate:e=>o.set(t,e),afterRemoved:()=>o.delete(t),icon:i,scale:"s",slot:"content-start"})}renderFeatureCountWarning(){const{associatedFeatureCount:e,maxFeatureCount:t,messagesFeature:o}=this;return e>t?(0,jsxFactory/* tsx */.K)("calcite-notice",{class:this._isFeatureCountNoticeOpen?p.limitNoticeContainer:void 0,closable:!0,icon:"information",kind:"info",open:!0,scale:"s",width:"full",onCalciteNoticeBeforeOpen:()=>this._isFeatureCountNoticeOpen=!0,onCalciteNoticeClose:()=>this._isFeatureCountNoticeOpen=!1},(0,jsxFactory/* tsx */.K)("div",{slot:"title"},o.associationsLimitNoticeTitle),(0,jsxFactory/* tsx */.K)("div",{slot:"message"},(0,substitute/* substitute */.V)(o.associationsLimitNoticeMessage,{number:t}))):null}renderFeatureObserver(){return (0,jsxFactory/* tsx */.K)("div",{afterCreate:this._onObserverCreate,bind:this,class:p.featureObserver,key:"feature-observer"})}renderFilter(){return (0,jsxFactory/* tsx */.K)("div",{class:p.filterContainer,key:"filter"},(0,jsxFactory/* tsx */.K)("calcite-input",{icon:"search",placeholder:this.messagesFeature.associationFilterPlaceholder,type:"search",onCalciteInputInput:e=>{this.filterText=e.currentTarget.value.trim().toLowerCase(),this.currentFeaturePage=1}}))}renderLoading(){return (0,jsxFactory/* tsx */.K)("div",{class:p.loadingContainer,key:"loading-container"},this.renderLoadingIcon())}renderLoadingIcon(){return (0,jsxFactory/* tsx */.K)("calcite-loader",{inline:!0,label:this.messagesCommon.loading})}getConnectivityTooltip(e){const{messagesFeature:t}=this;switch(e){case"connectivity":case"junction-junction-connectivity":return t.associationsJunctionJunction;case"junction-edge-from-connectivity":return t.associationsJunctionEdgeFrom;case"junction-edge-midspan-connectivity":return t.associationsJunctionEdgeMidspan;case"junction-edge-to-connectivity":return t.associationsJunctionEdgeTo;default:return""}}setUpObserver(){this.addHandles((0,reactiveUtils/* watch */.wB)((()=>this._observerNode),(()=>this._onObserverChange())))}_increaseFeaturePage(){this.currentFeaturePage++}async _onObserverChange(){this._observerNode&&this._observer.unobserve(this._observerNode);const{state:e,showAllEnabled:t}=this.viewModel;this._observerNode&&"ready"===e&&t&&this._observer.observe(this._observerNode)}_onObserverCreate(e){this._observerNode=e}};(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"_observer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"_observerNode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"associatedFeatureCount",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"currentFeaturePage",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"endIndex",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"featuresPerPage",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"filterText",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"headingLevel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"maxFeatureCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(),(0,messageBundle/* messageBundle */.G)("esri/widgets/Feature/t9n/Feature")],m.prototype,"messagesFeature",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(),(0,messageBundle/* messageBundle */.G)("esri/t9n/common")],m.prototype,"messagesCommon",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"selectedLayer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"tooltipReferenceMap",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FeatureUtilityNetworkAssociationsViewModel/* default */.A})],m.prototype,"viewModel",void 0),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")],m);

// EXTERNAL MODULE: ../node_modules/@arcgis/core/intl/number.js
var number = __webpack_require__(46930);
;// ../node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/formatPercentAlong.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function n(n){const{percentAlong:r}=n;return null==r?"":(0,number/* formatNumber */.ZV)(r,{style:"percent",maximumFractionDigits:2})}

;// ../node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivity.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function isConnectivity_n(n){const{associationType:t}=n;return"connectivity"===t||"junction-junction-connectivity"===t||"junction-edge-from-connectivity"===t||"junction-edge-midspan-connectivity"===t||"junction-edge-to-connectivity"===t}

;// ../node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivityMidspan.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function isConnectivityMidspan_n(n){return"junction-edge-midspan-connectivity"===n.associationType}

;// ../node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociationList.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var w;const y="esri-feature-utility-network-associations",f={base:y,listItemHidden:`${y}__list-item--hidden`},b="nested";let v=w=class extends m{constructor(e,t){super(e,t),this.description=null,this.flowItems=null,this.flowType="feature-utility-network-association-type",this.listType=null,this.parentFeatureViewModel=null,this.title=null,this.viewModel=new FeatureUtilityNetworkAssociationsViewModel/* default */.A,this.visibleElements=new VisibleElements/* default */.A}initialize(){this.setUpObserver()}loadDependencies(){return (0,componentsUtils/* loadCalciteComponents */.W)({chip:()=>__webpack_require__.e(/* import() */ 70375).then(__webpack_require__.bind(__webpack_require__, 70375)),icon:()=>__webpack_require__.e(/* import() */ 96446).then(__webpack_require__.bind(__webpack_require__, 96446)),list:()=>__webpack_require__.e(/* import() */ 22678).then(__webpack_require__.bind(__webpack_require__, 22678)),"list-item":()=>__webpack_require__.e(/* import() */ 69183).then(__webpack_require__.bind(__webpack_require__, 69183)),tooltip:()=>__webpack_require__.e(/* import() */ 17230).then(__webpack_require__.bind(__webpack_require__, 17230))})}destroy(){this.tooltipReferenceMap.clear()}render(){const e=this.viewModel.associationViewModels,{state:t,showAllEnabled:i}=this.viewModel,{state:s}=this.parentFeatureViewModel??{};return (0,jsxFactory/* tsx */.K)("div",{class:this.classes(f.base,globalCss/* globalCss */.D.widget)},"loading"===t||"querying"===t||"loading"===s?this.renderLoading():(0,jsxFactory/* tsx */.K)("calcite-list",{displayMode:b,label:this.selectedLayer?.title??this.messagesCommon.untitled},i&&this.selectedLayer?(0,jsxFactory/* tsx */.K)(jsxFactory/* tsxFragment */.w,null,this.renderFilter(),this.renderFeatureCountWarning(),this._renderAssociatedFeatureListPage(),this.renderFeatureObserver()):Array.from(e.keys(),(t=>this._renderTypeList(t,e.get(t))))))}_showAllAssociations(e){const{flowItems:t,viewModel:i,description:s}=this;if(!t||!e)return;i.showAllEnabled=!0;const l=new w({selectedLayer:e,title:e?.title,flowItems:t,parentFeatureViewModel:this.parentFeatureViewModel,featureVisibleElements:this.featureVisibleElements,description:s,visibleElements:new VisibleElements/* default */.A({title:!1,description:!1}),viewModel:i});t.push(l)}_renderAssociatedFeatureListPage(){const e=this.viewModel.associationViewModels.get(this.selectedLayer).filter((e=>e.title.toLowerCase().includes(this.filterText))).slice(0,this.endIndex);return[...this._renderTooltips(e),...this._renderAssociatedFeatureList(e)]}_renderItemTooltip(e){const{tooltipReferenceMap:t}=this;return isConnectivity_n(e.association)?(0,jsxFactory/* tsx */.K)("calcite-tooltip",{key:`tooltip-${e.featureViewModel.uid}`,overlayPositioning:"fixed",referenceElement:t.get(e.featureViewModel.uid)},this.getConnectivityTooltip(e.association.associationType)):null}_renderAssociatedFeature(e){const{featureViewModel:i,title:s}=e,o="loading"===i.state,l=this._findFlowItem(i),r=l<0&&this._isParentFeature(i),a=r||l>=0;return (0,jsxFactory/* tsx */.K)("calcite-list-item",{class:o?f.listItemHidden:void 0,description:(0,string/* stripHTML */._e)(e.terminalName??""),key:`associated-feature-type-${i.uid}`,label:(0,string/* stripHTML */._e)(s),onCalciteListItemSelect:()=>this._handleFeatureClick(r,l,i)},isConnectivity_n(e.association)?this.renderConnectivityIcon(e.association.associationType,e.featureViewModel.uid):null,isConnectivityMidspan_n(e.association)?(0,jsxFactory/* tsx */.K)("calcite-chip",{label:n(e.association),scale:"s",slot:"content-end"},n(e.association)):null,this._renderChevronIconNode(a))}async _selectAssociation(e){const{flowItems:t,featureVisibleElements:i}=this;if(!t)return;e.abilities={utilityNetworkAssociationsContent:!0};const{default:s}=await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 48596));t.push(new s({flowItems:t,flowType:"feature-association",viewModel:e,visibleElements:i}))}_handleFeatureClick(e,t,i){if(e)this.flowItems.drain((e=>{"showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),e.viewModel=null,e.destroy()}));else if(t<0||!this.flowItems)this._selectAssociation(i);else for(;this.flowItems.length>t+1;){const e=this.flowItems.pop();e&&("showAllEnabled"in e.viewModel&&(e.viewModel.showAllEnabled=!1),e.viewModel=null,e.destroy())}}_featureViewModelMatch(e,t){const i=e.graphic,s=i?.layer;let o=null;"subtype-sublayer"===s?.type&&s.parent?o=s.parent.globalIdField??null:s&&"globalIdField"in s&&(o=s.globalIdField);const l=o?i?.attributes[o]:null,r=t.graphic,n=r?.layer;let a=null;"subtype-sublayer"===n?.type&&n.parent?a=n.parent.globalIdField??null:n&&"globalIdField"in n&&(a=n.globalIdField);const c=a?r?.attributes[a]:null;return l&&c&&l===c}_isParentFeature(e){const t=this.flowItems?.getItemAt(0);if(!t)return!1;const i=t.parentFeatureViewModel;return this._featureViewModelMatch(i,e)}_findFlowItem(e){return this.flowItems?.findIndex((t=>{if("feature-association"!==t.flowType)return!1;const i=t.viewModel;return this._featureViewModelMatch(i,e)}))??-1}_renderTooltips(e){return e.toArray().map((e=>this._renderItemTooltip(e)))}_renderAssociatedFeatureList(e){return e.toArray().map((e=>this._renderAssociatedFeature(e)))}_renderChevronIconNode(e){return (0,jsxFactory/* tsx */.K)("calcite-icon",{flipRtl:!0,icon:e?"move-up":"chevron-right",scale:"s",slot:"content-end"})}_renderTypeList(e,t){const{messagesFeature:i}=this,{displayCount:s}=this.viewModel,o=t.slice(0,s),l=o.length<t.length;return (0,jsxFactory/* tsx */.K)("calcite-list-item",{expanded:!0,key:"show-all",label:e.title,value:e.id},(0,jsxFactory/* tsx */.K)("calcite-chip",{label:String(t.length),scale:"s",slot:"content-end"},t.length),(0,jsxFactory/* tsx */.K)("calcite-list",{group:e.id,label:e.title??""},[this._renderTooltips(o),this._renderAssociatedFeatureList(o)],l?(0,jsxFactory/* tsx */.K)("calcite-list-item",{description:(0,substitute/* substitute */.V)(i?.numberRecords,{number:t.length.toString()}),key:"show-all-item",label:i.showAll,onCalciteListItemSelect:()=>this._showAllAssociations(e)},(0,jsxFactory/* tsx */.K)("calcite-icon",{icon:"list",scale:"s",slot:"content-end"})):null))}};(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"featureVisibleElements",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"flowItems",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"flowType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"listType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"parentFeatureViewModel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],v.prototype,"title",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FeatureUtilityNetworkAssociationsViewModel/* default */.A})],v.prototype,"viewModel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:VisibleElements/* default */.A,nonNullable:!0})],v.prototype,"visibleElements",void 0),v=w=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")],v);const g=v;


/***/ })

};
;