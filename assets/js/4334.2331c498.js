/*! For license information please see 4334.2331c498.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4334],{74334:(e,t,n)=>{n.r(t),n.d(t,{CalciteListItem:()=>E,defineCustomElement:()=>y});var i=n(36705),a=n(72936),s=n(50768),l=n(96068),o=n(52572),c=n(49263),r=n(82850),d=n(428),h=n(70999);const u="handle",g="handle--activated",m="drag",f=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteHandleNudge=(0,i.lh)(this,"calciteHandleNudge",6),this.calciteInternalHandleChange=(0,i.lh)(this,"calciteInternalHandleChange",6),this.handleKeyDown=e=>{switch(e.key){case" ":this.activated=!this.activated,e.preventDefault();break;case"ArrowUp":if(!this.activated)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"up"});break;case"ArrowDown":if(!this.activated)return;e.preventDefault(),this.calciteHandleNudge.emit({direction:"down"})}},this.handleBlur=()=>{this.activated=!1},this.activated=!1,this.dragHandle=void 0,this.messages=void 0,this.setPosition=void 0,this.setSize=void 0,this.label=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}handleAriaTextChange(){const e=this.getAriaText("live");e&&this.calciteInternalHandleChange.emit({message:e})}onMessagesChange(){}connectedCallback(){(0,c.c)(this),(0,o.c)(this)}async componentWillLoad(){(0,r.a)(this),await(0,c.s)(this)}componentDidLoad(){(0,r.s)(this)}disconnectedCallback(){(0,c.d)(this),(0,o.d)(this)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}async setFocus(){await(0,r.c)(this),this.handleButton?.focus()}getAriaText(e){const{setPosition:t,setSize:n,label:i,messages:a,activated:s}=this;if(!a||!i||"number"!=typeof n||"number"!=typeof t)return null;return("label"===e?s?a.dragHandleChange:a.dragHandleIdle:s?a.dragHandleActive:a.dragHandleCommit).replace("{position}",t.toString()).replace("{itemLabel}",i).replace("{total}",n.toString())}render(){return(0,i.h)("span",{"aria-label":this.getAriaText("label"),"aria-pressed":(0,a.t)(this.activated),class:{[u]:!0,[g]:this.activated},onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0",title:this.messages?.dragHandle,ref:e=>{this.handleButton=e}},(0,i.h)("calcite-icon",{icon:m,scale:"s"}))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messages:["handleAriaTextChange"],label:["handleAriaTextChange"],activated:["handleAriaTextChange"],setPosition:["handleAriaTextChange"],setSize:["handleAriaTextChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{display:flex}.handle{display:flex;cursor:move;align-items:center;justify-content:center;align-self:stretch;border-style:none;background-color:transparent;outline-color:transparent;color:var(--calcite-ui-border-input);padding-block:0.75rem;padding-inline:0.25rem;line-height:0}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{color:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-handle",{activated:[1540],dragHandle:[513,"drag-handle"],messages:[16],setPosition:[2,"set-position"],setSize:[2,"set-size"],label:[1],messageOverrides:[16],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function C(){if("undefined"==typeof customElements)return;["calcite-handle","calcite-icon"].forEach((e=>{switch(e){case"calcite-handle":customElements.get(e)||customElements.define(e,f);break;case"calcite-icon":customElements.get(e)||(0,h.d)()}}))}C();var p=n(48877);const v=new Map,b=(0,i.w$)(class extends i.wt{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListItemSelect=(0,i.lh)(this,"calciteListItemSelect",6),this.calciteListItemClose=(0,i.lh)(this,"calciteListItemClose",6),this.calciteInternalListItemSelect=(0,i.lh)(this,"calciteInternalListItemSelect",6),this.calciteInternalListItemActive=(0,i.lh)(this,"calciteInternalListItemActive",6),this.calciteInternalFocusPreviousItem=(0,i.lh)(this,"calciteInternalFocusPreviousItem",6),this.calciteInternalListItemChange=(0,i.lh)(this,"calciteInternalListItemChange",6),this.closeClickHandler=()=>{this.closed=!0,this.calciteListItemClose.emit()},this.handleContentSlotChange=e=>{this.hasCustomContent=(0,a.e)(e)},this.handleActionsStartSlotChange=e=>{this.hasActionsStart=(0,a.e)(e)},this.handleActionsEndSlotChange=e=>{this.hasActionsEnd=(0,a.e)(e)},this.handleContentStartSlotChange=e=>{this.hasContentStart=(0,a.e)(e)},this.handleContentEndSlotChange=e=>{this.hasContentEnd=(0,a.e)(e)},this.handleContentBottomSlotChange=e=>{this.hasContentBottom=(0,a.e)(e)},this.handleDefaultSlotChange=e=>{this.handleOpenableChange(e.target)},this.toggleOpen=()=>{this.open=!this.open},this.itemClicked=e=>{e.defaultPrevented||(this.toggleSelected(),this.calciteInternalListItemActive.emit())},this.toggleSelected=()=>{const{selectionMode:e,selected:t}=this;this.disabled||("multiple"===e||"single"===e?this.selected=!t:"single-persist"===e&&(this.selected=!0),this.calciteListItemSelect.emit())},this.handleItemKeyDown=e=>{if(e.defaultPrevented)return;const{key:t}=e,n=e.composedPath(),{containerEl:i,contentEl:a,actionsStartEl:s,actionsEndEl:l,open:o,openable:c}=this,r=[s,a,l].filter(Boolean),d=r.findIndex((e=>n.includes(e)));if("Enter"!==t||n.includes(s)||n.includes(l)){if("ArrowRight"===t){e.preventDefault();const t=d+1;-1===d?!o&&c?(this.open=!0,this.focusCell(null)):r[0]&&this.focusCell(r[0]):r[d]&&r[t]&&this.focusCell(r[t])}else if("ArrowLeft"===t){e.preventDefault();const t=d-1;-1===d?(this.focusCell(null),o&&c?this.open=!1:this.calciteInternalFocusPreviousItem.emit()):0===d?(this.focusCell(null),i.focus()):r[d]&&r[t]&&this.focusCell(r[t])}}else e.preventDefault(),this.toggleSelected()},this.focusCellNull=()=>{this.focusCell(null)},this.focusCell=(e,t=!0)=>{const{contentEl:n,actionsStartEl:i,actionsEndEl:a,parentListEl:s}=this;t&&v.set(s,null),[i,n,a].filter(Boolean).forEach(((n,i)=>{const a="tabindex";n===e?(n.setAttribute(a,"0"),t&&v.set(s,i)):n.removeAttribute(a)})),e?.focus()},this.active=!1,this.closable=!1,this.closed=!1,this.description=void 0,this.disabled=!1,this.dragHandle=!1,this.label=void 0,this.metadata=void 0,this.open=!1,this.setSize=null,this.setPosition=null,this.selected=!1,this.value=void 0,this.selectionMode=null,this.selectionAppearance=null,this.messageOverrides=void 0,this.messages=void 0,this.effectiveLocale="",this.defaultMessages=void 0,this.level=null,this.visualLevel=null,this.parentListEl=void 0,this.openable=!1,this.hasActionsStart=!1,this.hasActionsEnd=!1,this.hasCustomContent=!1,this.hasContentStart=!1,this.hasContentEnd=!1,this.hasContentBottom=!1}activeHandler(e){e||this.focusCell(null,!1)}handleClosedChange(){this.emitCalciteInternalListItemChange()}handleDisabledChange(){this.emitCalciteInternalListItemChange()}handleSelectedChange(){this.calciteInternalListItemSelect.emit()}onMessagesChange(){}handleCalciteInternalListDefaultSlotChanges(e){e.stopPropagation(),this.handleOpenableChange(this.defaultSlotEl)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}connectedCallback(){(0,s.c)(this),(0,o.c)(this),(0,c.c)(this);const{el:e}=this;this.parentListEl=e.closest("calcite-list"),this.level=(0,l.a)(e)+1,this.visualLevel=(0,l.a)(e,!0),this.setSelectionDefaults()}async componentWillLoad(){(0,r.a)(this),await(0,c.s)(this)}componentDidLoad(){(0,r.s)(this)}componentDidRender(){(0,s.u)(this)}disconnectedCallback(){(0,s.d)(this),(0,o.d)(this),(0,c.d)(this)}async setFocus(){await(0,r.c)(this);const{containerEl:e,contentEl:t,actionsStartEl:n,actionsEndEl:i,parentListEl:a}=this,s=v.get(a);if("number"!=typeof s)e?.focus();else{const a=[n,t,i].filter(Boolean);a[s]?this.focusCell(a[s]):e?.focus()}}renderSelected(){const{selected:e,selectionMode:t,selectionAppearance:n}=this;return"none"===t||"border"===n?null:(0,i.h)("td",{class:l.C.selectionContainer,key:"selection-container",onClick:this.itemClicked},(0,i.h)("calcite-icon",{icon:e?"multiple"===t?l.I.selectedMultiple:l.I.selectedSingle:l.I.unselected,scale:"s"}))}renderDragHandle(){return this.dragHandle?(0,i.h)("td",{class:l.C.dragContainer,key:"drag-handle-container"},(0,i.h)("calcite-handle",{label:this.label,setPosition:this.setPosition,setSize:this.setSize})):null}renderOpen(){const{el:e,open:t,openable:n,parentListEl:s}=this,o=(0,a.b)(e),c=n?t?l.I.open:"rtl"===o?l.I.closedRTL:l.I.closedLTR:l.I.blank,r=n?this.toggleOpen:this.itemClicked;return n||s?.openable?(0,i.h)("td",{class:l.C.openContainer,key:"open-container",onClick:r},(0,i.h)("calcite-icon",{icon:c,key:c,scale:"s"})):null}renderActionsStart(){const{label:e,hasActionsStart:t}=this;return(0,i.h)("td",{"aria-label":e,class:l.C.actionsStart,hidden:!t,key:"actions-start-container",role:"gridcell",ref:e=>this.actionsStartEl=e},(0,i.h)("slot",{name:l.S.actionsStart,onSlotchange:this.handleActionsStartSlotChange}))}renderActionsEnd(){const{label:e,hasActionsEnd:t,closable:n,messages:a}=this;return(0,i.h)("td",{"aria-label":e,class:l.C.actionsEnd,hidden:!(t||n),key:"actions-end-container",role:"gridcell",ref:e=>this.actionsEndEl=e},(0,i.h)("slot",{name:l.S.actionsEnd,onSlotchange:this.handleActionsEndSlotChange}),n?(0,i.h)("calcite-action",{appearance:"transparent",icon:l.I.close,key:"close-action",label:a.close,onClick:this.closeClickHandler,text:a.close}):null)}renderContentStart(){const{hasContentStart:e}=this;return(0,i.h)("div",{class:l.C.contentStart,hidden:!e},(0,i.h)("slot",{name:l.S.contentStart,onSlotchange:this.handleContentStartSlotChange}))}renderCustomContent(){const{hasCustomContent:e}=this;return(0,i.h)("div",{class:l.C.customContent,hidden:!e},(0,i.h)("slot",{name:l.S.content,onSlotchange:this.handleContentSlotChange}))}renderContentEnd(){const{hasContentEnd:e}=this;return(0,i.h)("div",{class:l.C.contentEnd,hidden:!e},(0,i.h)("slot",{name:l.S.contentEnd,onSlotchange:this.handleContentEndSlotChange}))}renderContentBottom(){const{hasContentBottom:e,visualLevel:t}=this;return(0,i.h)("div",{class:l.C.contentBottom,hidden:!e,style:{"--calcite-list-item-spacing-indent-multiplier":`${t}`}},(0,i.h)("slot",{name:l.S.contentBottom,onSlotchange:this.handleContentBottomSlotChange}))}renderDefaultContainer(){return(0,i.h)("div",{class:{[l.C.nestedContainer]:!0,[l.C.nestedContainerHidden]:this.openable&&!this.open}},(0,i.h)("slot",{onSlotchange:this.handleDefaultSlotChange,ref:e=>this.defaultSlotEl=e}))}renderContentProperties(){const{label:e,description:t,hasCustomContent:n}=this;return n||!e&&!t?null:(0,i.h)("div",{class:l.C.content,key:"content"},e?(0,i.h)("div",{class:l.C.label,key:"label"},e):null,t?(0,i.h)("div",{class:l.C.description,key:"description"},t):null)}renderContentContainer(){const{description:e,label:t,selectionMode:n,hasCustomContent:a}=this,s=a||!!t||!!e,o=[this.renderContentStart(),this.renderCustomContent(),this.renderContentProperties(),this.renderContentEnd()];return(0,i.h)("td",{"aria-label":t,class:{[l.C.contentContainer]:!0,[l.C.contentContainerSelectable]:"none"!==n,[l.C.contentContainerHasCenterContent]:s},key:"content-container",onClick:this.itemClicked,role:"gridcell",ref:e=>this.contentEl=e},o)}render(){const{openable:e,open:t,level:n,setPosition:s,setSize:o,active:c,label:r,selected:d,selectionAppearance:h,selectionMode:u,closed:g,visualLevel:m}=this,f="none"!==u&&"border"===h,C=f&&d,p=f&&!d;return(0,i.h)(i.xr,null,(0,i.h)("tr",{"aria-expanded":e?(0,a.t)(t):null,"aria-label":r,"aria-level":n,"aria-posinset":s,"aria-selected":(0,a.t)(d),"aria-setsize":o,class:{[l.C.container]:!0,[l.C.containerBorderSelected]:C,[l.C.containerBorderUnselected]:p},hidden:g,onFocus:this.focusCellNull,onKeyDown:this.handleItemKeyDown,role:"row",style:{"--calcite-list-item-spacing-indent-multiplier":`${m}`},tabIndex:c?0:-1,ref:e=>this.containerEl=e},this.renderDragHandle(),this.renderSelected(),this.renderOpen(),this.renderActionsStart(),this.renderContentContainer(),this.renderActionsEnd()),this.renderContentBottom(),this.renderDefaultContainer())}emitCalciteInternalListItemChange(){this.calciteInternalListItemChange.emit()}setSelectionDefaults(){const{parentListEl:e,selectionMode:t,selectionAppearance:n}=this;e&&(t||(this.selectionMode=e.selectionMode),n||(this.selectionAppearance=e.selectionAppearance))}handleOpenableChange(e){if(!e)return;const{parentListEl:t}=this,n=(0,l.g)(e);(0,l.u)(n);const i=!!n.length;i&&t&&!t.openable&&(t.openable=!0),this.openable=i,i||(this.open=!1)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["activeHandler"],closed:["handleClosedChange"],disabled:["handleDisabledChange"],selected:["handleSelectedChange"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;--calcite-list-item-icon-color:var(--calcite-ui-brand);--calcite-list-item-spacing-indent:1rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{box-sizing:border-box;display:flex;flex:1 1 0%;background-color:var(--calcite-ui-foreground-1);font-family:var(--calcite-sans-family);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.container *{box-sizing:border-box}.container:hover{cursor:pointer;background-color:var(--calcite-ui-foreground-2)}.container:active{background-color:var(--calcite-ui-foreground-1)}.container--border-selected{border-inline-start:4px solid var(--calcite-ui-brand)}.container--border-unselected{border-inline-start:4px solid transparent}.nested-container{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1)}.nested-container--hidden{display:none}.content-container{display:flex;flex:1 1 auto;align-items:stretch;padding:0px;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}tr,td{outline-color:transparent}tr:focus,td:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;padding-inline:0.75rem;padding-block:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375}.label,.description,.content-bottom{font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--2);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}.label:only-child,.description:only-child,.content-bottom:only-child{margin:0px;padding-block:0.25rem}.label{color:var(--calcite-ui-text-1)}.description{margin-block-start:0.125rem;color:var(--calcite-ui-text-3)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-bottom{display:flex;flex-direction:column;background-color:var(--calcite-ui-foreground-1);padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.selection-container{display:flex;padding-inline:0.75rem;color:var(--calcite-list-item-icon-color)}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.open-container,.selection-container{cursor:pointer}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:0.75rem;align-self:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}::slotted(calcite-list-item){border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item",{active:[4],closable:[516],closed:[1540],description:[1],disabled:[516],dragHandle:[4,"drag-handle"],label:[1],metadata:[16],open:[1540],setSize:[2,"set-size"],setPosition:[2,"set-position"],selected:[1540],value:[8],selectionMode:[1025,"selection-mode"],selectionAppearance:[1025,"selection-appearance"],messageOverrides:[1040],messages:[1040],effectiveLocale:[32],defaultMessages:[32],level:[32],visualLevel:[32],parentListEl:[32],openable:[32],hasActionsStart:[32],hasActionsEnd:[32],hasCustomContent:[32],hasContentStart:[32],hasContentEnd:[32],hasContentBottom:[32],setFocus:[64]},[[0,"calciteInternalListItemGroupDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"],[0,"calciteInternalListDefaultSlotChange","handleCalciteInternalListDefaultSlotChanges"]]]);function S(){if("undefined"==typeof customElements)return;["calcite-list-item","calcite-action","calcite-handle","calcite-icon","calcite-loader"].forEach((e=>{switch(e){case"calcite-list-item":customElements.get(e)||customElements.define(e,b);break;case"calcite-action":customElements.get(e)||(0,d.d)();break;case"calcite-handle":customElements.get(e)||C();break;case"calcite-icon":customElements.get(e)||(0,h.d)();break;case"calcite-loader":customElements.get(e)||(0,p.d)()}}))}S();const E=b,y=S},96068:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>o,M:()=>l,S:()=>s,a:()=>g,g:()=>h,u:()=>u});var i=n(36705);const a={container:"container",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",contentContainer:"content-container",contentContainerSelectable:"content-container--selectable",contentContainerHasCenterContent:"content-container--has-center-content",nestedContainer:"nested-container",nestedContainerHidden:"nested-container--hidden",content:"content",customContent:"custom-content",actionsStart:"actions-start",contentStart:"content-start",label:"label",description:"description",contentEnd:"content-end",contentBottom:"content-bottom",actionsEnd:"actions-end",selectionContainer:"selection-container",openContainer:"open-container",dragContainer:"drag-container"},s={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},l=0,o={selectedMultiple:"check-circle-f",selectedSingle:"circle-f",unselected:"blank",closedLTR:"caret-right",closedRTL:"caret-left",open:"caret-down",blank:"blank",close:"x"},c="calcite-list",r="calcite-list-item-group",d="calcite-list-item";function h(e){const t=e.assignedElements({flatten:!0}),n=t.filter((e=>e?.matches(r))).map((e=>Array.from(e.querySelectorAll(d)))).reduce(((e,t)=>[...e,...t]),[]),i=t.filter((e=>e?.matches(d)));return[...t.filter((e=>e?.matches(c))).map((e=>Array.from(e.querySelectorAll(d)))).reduce(((e,t)=>[...e,...t]),[]),...n,...i]}function u(e){e.forEach((t=>{t.setPosition=e.indexOf(t)+1,t.setSize=e.length}))}function g(e,t=!1){if(!i.L2.isBrowser)return 0;const n=t?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";return document.evaluate(n,e,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}}}]);