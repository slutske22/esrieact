"use strict";
exports.id = 56262;
exports.ids = [56262,16730,94349,61492,39111];
exports.modules = {

/***/ 70345:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ V)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/SetUtils.js
var SetUtils = __webpack_require__(98592);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
;// ./node_modules/@arcgis/core/form/ExpressionInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* default */.A{constructor(e){super(e),this.expression=null,this.name=null,this.returnType="boolean",this.title=null}clone(){return new s({name:this.name,title:this.title,expression:this.expression,returnType:this.returnType})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"expression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["boolean","date","number","string"],json:{write:!0}})],i.prototype,"returnType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],i.prototype,"title",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.ExpressionInfo")],i);const p=i;

;// ./node_modules/@arcgis/core/form/elements/Element.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends JSONSupport/* default */.A{constructor(t){super(t),this.description=null,this.label=null,this.type=null,this.visibilityExpression=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],e.prototype,"visibilityExpression",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.Element")],e);const Element_i=e;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Input_p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_p.prototype,"type",void 0),Input_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.Input")],Input_p);const c=Input_p;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/support/utils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=["any","capture","upload"];

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/AudioInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AudioInput_p=class extends c{constructor(o){super(o),this.type="audio",this.inputMethod="any",this.maxDuration=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["audio"],readOnly:!0,json:{write:!0}})],AudioInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],AudioInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AudioInput_p.prototype,"maxDuration",void 0),AudioInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.AudioInput")],AudioInput_p);const AudioInput_i=AudioInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/DocumentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let DocumentInput_s=class extends c{constructor(o){super(o),this.type="document",this.maxFileSize=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["document"],readOnly:!0,json:{write:!0}})],DocumentInput_s.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],DocumentInput_s.prototype,"maxFileSize",void 0),DocumentInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.DocumentInput")],DocumentInput_s);const DocumentInput_p=DocumentInput_s;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/ImageInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let ImageInput_p=class extends c{constructor(t){super(t),this.type="image",this.inputMethod="any",this.maxImageSize=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["image"],readOnly:!0,json:{write:!0}})],ImageInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],ImageInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],ImageInput_p.prototype,"maxImageSize",void 0),ImageInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.ImageInput")],ImageInput_p);const ImageInput_i=ImageInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/SignatureInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let SignatureInput_p=class extends c{constructor(t){super(t),this.type="signature",this.inputMethod="any"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["signature"],readOnly:!0,json:{write:!0}})],SignatureInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],SignatureInput_p.prototype,"inputMethod",void 0),SignatureInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.SignatureInput")],SignatureInput_p);const SignatureInput_i=SignatureInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/VideoInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let VideoInput_p=class extends c{constructor(o){super(o),this.type="video",this.inputMethod="any",this.maxDuration=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["video"],readOnly:!0,json:{write:!0}})],VideoInput_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:a,json:{write:!0}})],VideoInput_p.prototype,"inputMethod",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],VideoInput_p.prototype,"maxDuration",void 0),VideoInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.VideoInput")],VideoInput_p);const VideoInput_i=VideoInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/support/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function u(e){return{nestableTypes:{base:c,key:"type",typeMap:{audio:AudioInput_i,document:DocumentInput_p,image:ImageInput_i,signature:SignatureInput_i,video:VideoInput_i}},allTypes:{base:c,key:"type",typeMap:{attachment:e,audio:AudioInput_i,document:DocumentInput_p,image:ImageInput_i,signature:SignatureInput_i,video:VideoInput_i}}}}function inputs_s(t,p,n){return t?t.map((t=>(0,ensureType/* ensureOneOfType */.aq)(n?p.nestableTypes:p.allTypes,t))):null}function inputs_i(e,t,p){if(!e)return null;const n=p?t.nestableTypes.typeMap:t.allTypes.typeMap;return e.filter((e=>n[e.type])).map((e=>n[e.type].fromJSON(e)))}function m(e,t,p){if(!e)return null;const n=p?t.nestableTypes.typeMap:t.allTypes.typeMap;return e.filter((e=>n[e.type])).map((e=>e.toJSON()))}

;// ./node_modules/@arcgis/core/form/elements/inputs/attachments/AttachmentInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let AttachmentInput_m=class extends c{constructor(t){super(t),this.type="attachment",this.attachmentAssociationType="exact",this.inputTypes=null}castInputs(t){return inputs_s(t,y,!0)}readInputs(t,r){return inputs_i(r.inputTypes,y,!0)}writeInputs(t,r){r.inputTypes=m(t,y,!0)}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],readOnly:!0,json:{write:!0}})],AttachmentInput_m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["any","exact","exactOrNone"],json:{write:!0}})],AttachmentInput_m.prototype,"attachmentAssociationType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:{isRequired:!0}}})],AttachmentInput_m.prototype,"inputTypes",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("inputTypes")],AttachmentInput_m.prototype,"castInputs",null),(0,tslib_es6._)([(0,reader/* reader */.w)("inputTypes")],AttachmentInput_m.prototype,"readInputs",null),(0,tslib_es6._)([(0,writer/* writer */.K)("inputTypes")],AttachmentInput_m.prototype,"writeInputs",null),AttachmentInput_m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.attachments.AttachmentInput")],AttachmentInput_m);const y=u(AttachmentInput_m),d=AttachmentInput_m;

;// ./node_modules/@arcgis/core/form/elements/AttachmentElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var r;const AttachmentElement_a=u(d);let AttachmentElement_p=r=class extends Element_i{constructor(t){super(t),this.allowUserRename=!0,this.attachmentKeyword=null,this.displayFilename=!1,this.editableExpression=null,this.filenameExpression="{attachmentKeyword}_{now}",this.input=null,this.maxAttachmentCount=null,this.minAttachmentCount=null,this.type="attachment",this.useOriginalFilename=!0}clone(){return new r({allowUserRename:this.allowUserRename,attachmentKeyword:this.attachmentKeyword,description:this.description,displayFilename:this.displayFilename,editableExpression:this.editableExpression,filenameExpression:this.filenameExpression,input:this.input?.clone(),label:this.label,maxAttachmentCount:this.maxAttachmentCount,minAttachmentCount:this.minAttachmentCount,useOriginalFilename:this.useOriginalFilename,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"allowUserRename",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:{isRequired:!0}}})],AttachmentElement_p.prototype,"attachmentKeyword",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"displayFilename",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],AttachmentElement_p.prototype,"filenameExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:AttachmentElement_a.allTypes,json:{read:{source:"inputType"},write:{target:"inputType",isRequired:!0}}})],AttachmentElement_p.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AttachmentElement_p.prototype,"maxAttachmentCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],AttachmentElement_p.prototype,"minAttachmentCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],AttachmentElement_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],AttachmentElement_p.prototype,"useOriginalFilename",void 0),AttachmentElement_p=r=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.AttachmentElement")],AttachmentElement_p);const AttachmentElement_m=AttachmentElement_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/Input.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let Input_e=class extends JSONSupport/* default */.A{constructor(o){super(o),this.type=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],Input_e.prototype,"type",void 0),Input_e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.Input")],Input_e);const inputs_Input_p=Input_e;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let TextInput_s=class extends inputs_Input_p{constructor(o){super(o),this.maxLength=null,this.minLength=0}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_s.prototype,"maxLength",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],TextInput_s.prototype,"minLength",void 0),TextInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextInput")],TextInput_s);const TextInput_p=TextInput_s;

;// ./node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var BarcodeScannerInput_s;let n=BarcodeScannerInput_s=class extends TextInput_p{constructor(r){super(r),this.type="barcode-scanner"}clone(){return new BarcodeScannerInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["barcode-scanner"],json:{read:!1,write:!0}})],n.prototype,"type",void 0),n=BarcodeScannerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.BarcodeScannerInput")],n);const BarcodeScannerInput_c=n;

;// ./node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var ComboBoxInput_s;let ComboBoxInput_p=ComboBoxInput_s=class extends inputs_Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="combo-box"}clone(){return new ComboBoxInput_s({showNoValueOption:this.showNoValueOption,noValueOptionLabel:this.noValueOptionLabel})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],ComboBoxInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],ComboBoxInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["combo-box"],json:{read:!1,write:!0}})],ComboBoxInput_p.prototype,"type",void 0),ComboBoxInput_p=ComboBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.ComboBoxInput")],ComboBoxInput_p);const ComboBoxInput_i=ComboBoxInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DatePickerInput_p;function DatePickerInput_s(r){return null!=r?r:null}function DatePickerInput_a(r){return null!=r?r:null}let DatePickerInput_m=DatePickerInput_p=class extends inputs_Input_p{constructor(r){super(r),this.max=null,this.min=null,this.type="date-picker"}readMax(r,t){return DatePickerInput_s(t.max)}writeMax(r,t){t.max=DatePickerInput_a(r)}readMin(r,t){return DatePickerInput_s(t.min)}writeMin(r,t){t.min=DatePickerInput_a(r)}clone(){return new DatePickerInput_p({max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_m.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DatePickerInput_m.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DatePickerInput_m.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DatePickerInput_m.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DatePickerInput_m.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DatePickerInput_m.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["date-picker"],json:{read:!1,write:!0}})],DatePickerInput_m.prototype,"type",void 0),DatePickerInput_m=DatePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DatePickerInput")],DatePickerInput_m);const DatePickerInput_c=DatePickerInput_m;

;// ./node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DateTimeOffsetPickerInput_s;function DateTimeOffsetPickerInput_p(t){return null!=t?t:null}function DateTimeOffsetPickerInput_m(t){return null!=t?t:null}let DateTimeOffsetPickerInput_u=DateTimeOffsetPickerInput_s=class extends inputs_Input_p{constructor(t){super(t),this.includeTimeOffset=!0,this.max=null,this.min=null,this.timeResolution="minutes",this.type="datetimeoffset-picker"}readMax(t,e){return DateTimeOffsetPickerInput_p(e.max)}writeMax(t,e){e.max=DateTimeOffsetPickerInput_m(t)}readMin(t,e){return DateTimeOffsetPickerInput_p(e.min)}writeMin(t,e){e.min=DateTimeOffsetPickerInput_m(t)}readTimeResolution(t,e){return DateTimeOffsetPickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=DateTimeOffsetPickerInput_m(t)}clone(){return new DateTimeOffsetPickerInput_s({includeTimeOffset:this.includeTimeOffset,max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimeOffsetPickerInput_u.prototype,"includeTimeOffset",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimeOffsetPickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimeOffsetPickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimeOffsetPickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimeOffsetPickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],DateTimeOffsetPickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],DateTimeOffsetPickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetimeoffset-picker"],json:{read:!1,write:!0}})],DateTimeOffsetPickerInput_u.prototype,"type",void 0),DateTimeOffsetPickerInput_u=DateTimeOffsetPickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimeOffsetPickerInput")],DateTimeOffsetPickerInput_u);const l=DateTimeOffsetPickerInput_u;

;// ./node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var DateTimePickerInput_p;function DateTimePickerInput_s(e){return null!=e?new Date(e):null}function DateTimePickerInput_m(e){return e?e.getTime():null}let DateTimePickerInput_a=DateTimePickerInput_p=class extends inputs_Input_p{constructor(e){super(e),this.includeTime=!1,this.max=null,this.min=null,this.type="datetime-picker"}readMax(e,r){return DateTimePickerInput_s(r.max)}writeMax(e,r){r.max=DateTimePickerInput_m(e)}readMin(e,r){return DateTimePickerInput_s(r.min)}writeMin(e,r){r.min=DateTimePickerInput_m(e)}clone(){return new DateTimePickerInput_p({includeTime:this.includeTime,max:this.max,min:this.min})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],DateTimePickerInput_a.prototype,"includeTime",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_a.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],DateTimePickerInput_a.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],DateTimePickerInput_a.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date,json:{type:Number,write:!0}})],DateTimePickerInput_a.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],DateTimePickerInput_a.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],DateTimePickerInput_a.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["datetime-picker"],json:{read:!1,write:!0}})],DateTimePickerInput_a.prototype,"type",void 0),DateTimePickerInput_a=DateTimePickerInput_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.DateTimePickerInput")],DateTimePickerInput_a);const DateTimePickerInput_c=DateTimePickerInput_a;

;// ./node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RadioButtonsInput_s;let RadioButtonsInput_p=RadioButtonsInput_s=class extends inputs_Input_p{constructor(o){super(o),this.noValueOptionLabel=null,this.showNoValueOption=!0,this.type="radio-buttons"}clone(){return new RadioButtonsInput_s({noValueOptionLabel:this.noValueOptionLabel,showNoValueOption:this.showNoValueOption})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RadioButtonsInput_p.prototype,"noValueOptionLabel",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],RadioButtonsInput_p.prototype,"showNoValueOption",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["radio-buttons"],json:{read:!1,write:!0}})],RadioButtonsInput_p.prototype,"type",void 0),RadioButtonsInput_p=RadioButtonsInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.RadioButtonsInput")],RadioButtonsInput_p);const RadioButtonsInput_i=RadioButtonsInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var SwitchInput_s;let SwitchInput_p=SwitchInput_s=class extends inputs_Input_p{constructor(o){super(o),this.offValue=null,this.onValue=null,this.type="switch"}clone(){return new SwitchInput_s({offValue:this.offValue,onValue:this.onValue})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"offValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String,Number],json:{write:!0}})],SwitchInput_p.prototype,"onValue",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["switch"],json:{read:!1,write:!0}})],SwitchInput_p.prototype,"type",void 0),SwitchInput_p=SwitchInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.SwitchInput")],SwitchInput_p);const SwitchInput_i=SwitchInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextAreaInput_s;let TextAreaInput_p=TextAreaInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-area"}clone(){return new TextAreaInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-area"],json:{read:!1,write:!0}})],TextAreaInput_p.prototype,"type",void 0),TextAreaInput_p=TextAreaInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextAreaInput")],TextAreaInput_p);const TextAreaInput_a=TextAreaInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextBoxInput_s;let TextBoxInput_p=TextBoxInput_s=class extends TextInput_p{constructor(t){super(t),this.type="text-box"}clone(){return new TextBoxInput_s({maxLength:this.maxLength,minLength:this.minLength})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text-box"],json:{read:!1,write:!0}})],TextBoxInput_p.prototype,"type",void 0),TextBoxInput_p=TextBoxInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TextBoxInput")],TextBoxInput_p);const TextBoxInput_n=TextBoxInput_p;

;// ./node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TimePickerInput_s;function TimePickerInput_p(t){return null!=t?t:null}function TimePickerInput_m(t){return null!=t?t:null}let TimePickerInput_u=TimePickerInput_s=class extends inputs_Input_p{constructor(t){super(t),this.max=null,this.min=null,this.timeResolution="minutes",this.type="time-picker"}readMax(t,e){return TimePickerInput_p(e.max)}writeMax(t,e){e.max=TimePickerInput_m(t)}readMin(t,e){return TimePickerInput_p(e.min)}writeMin(t,e){e.min=TimePickerInput_m(t)}readTimeResolution(t,e){return TimePickerInput_p(e.timeResolution)}writeTimeResolution(t,e){e.timeResolution=TimePickerInput_m(t)}clone(){return new TimePickerInput_s({max:this.max,min:this.min,timeResolution:this.timeResolution})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"max",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("max")],TimePickerInput_u.prototype,"readMax",null),(0,tslib_es6._)([(0,writer/* writer */.K)("max")],TimePickerInput_u.prototype,"writeMax",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"min",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("min")],TimePickerInput_u.prototype,"readMin",null),(0,tslib_es6._)([(0,writer/* writer */.K)("min")],TimePickerInput_u.prototype,"writeMin",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{type:String,write:!0}})],TimePickerInput_u.prototype,"timeResolution",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("timeResolution")],TimePickerInput_u.prototype,"readTimeResolution",null),(0,tslib_es6._)([(0,writer/* writer */.K)("timeResolution")],TimePickerInput_u.prototype,"writeTimeResolution",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["time-picker"],json:{read:!1,write:!0}})],TimePickerInput_u.prototype,"type",void 0),TimePickerInput_u=TimePickerInput_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.inputs.TimePickerInput")],TimePickerInput_u);const TimePickerInput_l=TimePickerInput_u;

;// ./node_modules/@arcgis/core/form/elements/inputs.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const inputs_c={base:inputs_Input_p,key:"type",typeMap:{"barcode-scanner":BarcodeScannerInput_c,"combo-box":ComboBoxInput_i,"date-picker":DatePickerInput_c,"datetime-picker":DateTimePickerInput_c,"datetimeoffset-picker":l,"radio-buttons":RadioButtonsInput_i,switch:SwitchInput_i,"text-area":TextAreaInput_a,"text-box":TextBoxInput_n,"time-picker":TimePickerInput_l}};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js + 2 modules
var domains = __webpack_require__(83611);
;// ./node_modules/@arcgis/core/form/elements/FieldElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var FieldElement_n;let FieldElement_l=FieldElement_n=class extends Element_i{constructor(e){super(e),this.domain=null,this.editable=null,this.editableExpression=null,this.fieldName=null,this.hint=null,this.input=null,this.requiredExpression=null,this.type="field",this.valueExpression=null}clone(){return new FieldElement_n({description:this.description,domain:this.domain,editable:this.editable,editableExpression:this.editableExpression,fieldName:this.fieldName,hint:this.hint,input:this.input,label:this.label,requiredExpression:this.requiredExpression,valueExpression:this.valueExpression,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({types:domains/* types */.gK,json:{read:{reader:domains/* fromJSON */.rS},write:!0}})],FieldElement_l.prototype,"domain",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{write:!0}})],FieldElement_l.prototype,"editable",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"fieldName",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"hint",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:inputs_c,json:{read:{source:"inputType"},write:{target:"inputType"}}})],FieldElement_l.prototype,"input",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"requiredExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],FieldElement_l.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],FieldElement_l.prototype,"valueExpression",void 0),FieldElement_l=FieldElement_n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.FieldElement")],FieldElement_l);const FieldElement_a=FieldElement_l;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/support/RelatedRecordsInfoFieldOrder.js
var RelatedRecordsInfoFieldOrder = __webpack_require__(10357);
;// ./node_modules/@arcgis/core/form/elements/RelationshipElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var RelationshipElement_p;let RelationshipElement_l=RelationshipElement_p=class extends Element_i{constructor(e){super(e),this.displayCount=null,this.displayType="list",this.editableExpression=null,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new RelationshipElement_p({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editableExpression:this.editableExpression,label:this.label,orderByFields:(0,lang/* clone */.o8)(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"displayCount",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["list"],json:{write:!0}})],RelationshipElement_l.prototype,"displayType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],RelationshipElement_l.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[RelatedRecordsInfoFieldOrder/* default */.A],json:{write:!0}})],RelationshipElement_l.prototype,"orderByFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],RelationshipElement_l.prototype,"relationshipId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["relationship"],json:{read:!1,write:!0}})],RelationshipElement_l.prototype,"type",void 0),RelationshipElement_l=RelationshipElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.RelationshipElement")],RelationshipElement_l);const RelationshipElement_n=RelationshipElement_l;

;// ./node_modules/@arcgis/core/form/elements/TextElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var TextElement_s;let TextElement_i=TextElement_s=class extends Element_i{constructor(t){super(t),this.text=null,this.textFormat="plain-text",this.type="text"}clone(){return new TextElement_s({text:this.text,textFormat:this.textFormat,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TextElement_i.prototype,"text",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],TextElement_i.prototype,"textFormat",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["text"],readOnly:!0,json:{read:!1,write:!0}})],TextElement_i.prototype,"type",void 0),TextElement_i=TextElement_s=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.TextElement")],TextElement_i);const TextElement_p=TextElement_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/popup/support/UtilityNetworkAssociationType.js
var UtilityNetworkAssociationType = __webpack_require__(45441);
;// ./node_modules/@arcgis/core/form/elements/UtilityNetworkAssociationsElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let UtilityNetworkAssociationsElement_p=class extends(Clonable/* default */.A.ClonableMixin(Element_i)){constructor(o){super(o),this.associationTypes=null,this.editableExpression=null,this.type="utilityNetworkAssociations"}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:[UtilityNetworkAssociationType/* default */.A],json:{write:{isRequired:!0}}})],UtilityNetworkAssociationsElement_p.prototype,"associationTypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],UtilityNetworkAssociationsElement_p.prototype,"editableExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["utilityNetworkAssociations"],json:{read:!1,write:!0}})],UtilityNetworkAssociationsElement_p.prototype,"type",void 0),UtilityNetworkAssociationsElement_p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.UtilityNetworkAssociationsElement")],UtilityNetworkAssociationsElement_p);const UtilityNetworkAssociationsElement_n=UtilityNetworkAssociationsElement_p;

;// ./node_modules/@arcgis/core/form/support/formUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const formUtils_s=t=>"field"===t.type,formUtils_u=t=>"group"===t.type,formUtils_m=t=>"text"===t.type,formUtils_y=t=>"relationship"===t.type,formUtils_l=t=>"utilityNetworkAssociations"===t.type;function formUtils_a(t){return f(t)||formUtils_c(t)}function f(t){return"text-area"===t.type}function formUtils_c(t){return"text-box"===t.type}function h(t){return{typesWithGroup:{base:Element_i,key:"type",typeMap:{attachment:AttachmentElement_m,field:FieldElement_a,group:t,relationship:RelationshipElement_n,text:TextElement_p,utilityNetworkAssociations:UtilityNetworkAssociationsElement_n}},typesWithoutGroup:{base:Element_i,key:"type",typeMap:{attachment:AttachmentElement_m,field:FieldElement_a,relationship:RelationshipElement_n,text:TextElement_p,utilityNetworkAssociations:UtilityNetworkAssociationsElement_n}}}}function x(t,e,o=!0){if(!t)return null;const p=o?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>p[t.type])).map((t=>p[t.type].fromJSON(t)))}function G(t,e,o=!0){if(!t)return null;const p=o?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>p[t.type])).map((t=>t.toJSON()))}function W(e,o,p=!0){return e?e.map((e=>(0,ensureType/* ensureOneOfType */.aq)(p?o.typesWithGroup:o.typesWithoutGroup,e))):null}

;// ./node_modules/@arcgis/core/form/elements/GroupElement.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var GroupElement_d;let GroupElement_u=GroupElement_d=class extends Element_i{constructor(e){super(e),this.elements=null,this.initialState="expanded",this.type="group"}castElements(e){return W(e,E,!1)}readElements(e,t){return x(t.formElements,E,!1)}writeElements(e,t){t.formElements=G(e,E,!1)}clone(){return new GroupElement_d({description:this.description,elements:(0,lang/* clone */.o8)(this.elements),initialState:this.initialState,label:this.label,visibilityExpression:this.visibilityExpression})}};(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],GroupElement_u.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],GroupElement_u.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],GroupElement_u.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],GroupElement_u.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["collapsed","expanded"],json:{write:!0}})],GroupElement_u.prototype,"initialState",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:!1,write:!0}})],GroupElement_u.prototype,"type",void 0),GroupElement_u=GroupElement_d=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.elements.GroupElement")],GroupElement_u);const E=h(GroupElement_u),j=GroupElement_u;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
;// ./node_modules/@arcgis/core/form/FormTemplate.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var I;const b=h(j);let F=I=class extends JSONSupport/* default */.A{constructor(e){super(e),this.description=null,this.elements=null,this.expressionInfos=null,this.preserveFieldValuesWhenHidden=!1,this.title=null}castElements(e){return W(e,b)}readElements(e,s){return x(s.formElements,b)}writeElements(e,s){s.formElements=G(e,b)}clone(){return new I({description:this.description,expressionInfos:(0,lang/* clone */.o8)(this.expressionInfos),elements:(0,lang/* clone */.o8)(this.elements),title:this.title,preserveFieldValuesWhenHidden:this.preserveFieldValuesWhenHidden})}async getFieldsUsed(e,s){const t=new Set,{description:r,elements:o,expressionInfos:i,title:n}=this;if(U(t,e,r),U(t,e,n),!o)return[];const l=k(o,i).map((s=>(0,fieldUtils/* collectArcadeFieldNames */.Dx)(t,e,s)));await Promise.all(l);for(const p of o)g(t,{fieldsIndex:e,relationships:s},p);return Array.from(t).sort()}};function g(e,s,t){const{fieldsIndex:r}=s;if(!r||r.fields.length!==e.size)switch(U(e,r,t.label),U(e,r,t.description),t.type){case"field":(0,fieldUtils/* collectField */.rq)(e,r,t.fieldName);break;case"group":t.elements.forEach((t=>g(e,s,t)));break;case"relationship":if(s.relationships){const o=s.relationships.find((e=>e.id===t.relationshipId));o&&(0,fieldUtils/* collectField */.rq)(e,r,o.keyField)}(0,fieldUtils/* collectFields */._w)(e,r,t.orderByFields?.map((e=>e.field)));break;case"text":U(e,r,t.text)}}function k(e,s){if(!s||0===s.length)return[];const t=H(e),r=[];for(const o of s)t.has(o.name)&&r.push(o.expression);return r}function H(e){const s=new Set;for(const t of e)if((0,SetUtils/* addMaybe */.kb)(s,t.visibilityExpression),!formUtils_m(t))if(formUtils_u(t))(0,SetUtils/* addMany */.FB)(s,H(t.elements));else if((0,SetUtils/* addMaybe */.kb)(s,t.editableExpression),formUtils_s(t)){const{requiredExpression:e,valueExpression:r}=t;(0,SetUtils/* addMany */.FB)(s,[e,r])}return s}function U(e,s,t){(0,fieldUtils/* collectFields */._w)(e,s,(0,fieldUtils/* extractSubstitutionTemplatesFromString */.nw)(t))}(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],F.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],F.prototype,"elements",void 0),(0,tslib_es6._)([(0,cast/* cast */.w)("elements")],F.prototype,"castElements",null),(0,tslib_es6._)([(0,reader/* reader */.w)("elements",["formElements"])],F.prototype,"readElements",null),(0,tslib_es6._)([(0,writer/* writer */.K)("elements")],F.prototype,"writeElements",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[p],json:{write:!0}})],F.prototype,"expressionInfos",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{default:!1,write:!0}})],F.prototype,"preserveFieldValuesWhenHidden",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],F.prototype,"title",void 0),F=I=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.form.FormTemplate")],F);const V=F;


/***/ }),

/***/ 21570:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3223);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5262);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97629);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(48524);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var d;const p=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({orthometric:"gravity-related-height",gravity_related_height:"gravity-related-height",ellipsoidal:"ellipsoidal"}),u=p.jsonValues.slice();(0,_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .removeUnordered */ .Xy)(u,"orthometric");const g=(0,_core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .strict */ .O)()({meter:"meters",foot:"feet","us-foot":"us-feet","clarke-foot":"clarke-feet","clarke-yard":"clarke-yards","clarke-link":"clarke-links","sears-yard":"sears-yards","sears-foot":"sears-feet","sears-chain":"sears-chains","benoit-1895-b-chain":"benoit-1895-b-chains","indian-yard":"indian-yards","indian-1937-yard":"indian-1937-yards","gold-coast-foot":"gold-coast-feet","sears-1922-truncated-chain":"sears-1922-truncated-chains","50-kilometers":"50-kilometers","150-kilometers":"150-kilometers"});let m=d=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A{constructor(e){super(e),this.heightModel="gravity-related-height",this.heightUnit="meters",this.vertCRS=null}writeHeightModel(e,t,r){return p.write(e,t,r)}readHeightModel(e,t,r){const i=p.read(e);return i||(r?.messages&&r.messages.push(f(e,{context:r})),null)}readHeightUnit(e,t,r){const i=g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readHeightUnitService(e,t,r){const i=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .unitFromRESTJSON */ .LA)(e)||g.read(e);return i||(r?.messages&&r.messages.push(y(e,{context:r})),null)}readVertCRS(e,t){return t.vertCRS||t.ellipsoid||t.geoid}clone(){return new d({heightModel:this.heightModel,heightUnit:this.heightUnit,vertCRS:this.vertCRS})}equals(e){return!!e&&(this===e||this.heightModel===e.heightModel&&this.heightUnit===e.heightUnit&&this.vertCRS===e.vertCRS)}static deriveUnitFromSR(e,t){const r=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getVerticalUnitStringForSR */ .k1)(t);return new d({heightModel:e.heightModel,heightUnit:r??void 0,vertCRS:e.vertCRS})}write(e,t){return t={origin:"web-scene",...t},super.write(e,t)}static fromJSON(e){if(!e)return null;const t=new d;return t.read(e,{origin:"web-scene"}),t}};function y(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-unit:unsupported",`Height unit of value '${e}' is not supported`,t)}function f(e,t){return new _core_Warning_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A("height-model:unsupported",`Height model of value '${e}' is not supported`,t)}(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:p.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:u,default:"ellipsoidal",write:{isRequired:!0}}}}})],m.prototype,"heightModel",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_11__/* .writer */ .K)("web-scene","heightModel")],m.prototype,"writeHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)(["web-scene","service"],"heightModel")],m.prototype,"readHeightModel",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:g.apiValues,constructOnly:!0,json:{origins:{"web-scene":{type:g.jsonValues,write:{writer:g.write,isRequired:!0}}}}})],m.prototype,"heightUnit",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("web-scene","heightUnit")],m.prototype,"readHeightUnit",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","heightUnit")],m.prototype,"readHeightUnitService",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_6__/* .property */ .MZ)({type:String,constructOnly:!0,json:{origins:{"web-scene":{write:!0}}}})],m.prototype,"vertCRS",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_9__/* .reader */ .w)("service","vertCRS",["vertCRS","ellipsoid","geoid"])],m.prototype,"readVertCRS",null),m=d=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_10__/* .subclass */ .$)("esri.geometry.HeightModelInfo")],m);


/***/ }),

/***/ 56262:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ f)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/FeatureLayer.js + 3 modules
var FeatureLayer = __webpack_require__(16730);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 5 modules
var workers = __webpack_require__(99722);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/layers/graphics/sources/CSVSource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let c=class extends Loadable/* default */.A{constructor(t){super(t),this.type="csv",this.refresh=(0,promiseUtils/* debounce */.sg)((async t=>{await this.load();const{extent:e,timeExtent:o}=await this._connection.invoke("refresh",t);return e&&(this.sourceJSON.extent=e),o&&(this.sourceJSON.timeInfo.timeExtent=[o.start,o.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(t){const e=null!=t?t.signal:null;return this.addResolvingPromise(this._startWorker(e)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(t,e={}){await this.load(e);const o=await this._connection.invoke("queryFeatures",t?t.toJSON():null,e);return FeatureSet/* default */.A.fromJSON(o)}async queryFeaturesJSON(t,e={}){return await this.load(e),this._connection.invoke("queryFeatures",t?t.toJSON():null,e)}async queryFeatureCount(t,e={}){return await this.load(e),this._connection.invoke("queryFeatureCount",t?t.toJSON():null,e)}async queryObjectIds(t,e={}){return await this.load(e),this._connection.invoke("queryObjectIds",t?t.toJSON():null,e)}async queryExtent(t,e={}){await this.load(e);const o=await this._connection.invoke("queryExtent",t?t.toJSON():null,e);return{count:o.count,extent:Extent/* default */.A.fromJSON(o.extent)}}async querySnapping(t,e={}){return await this.load(e),this._connection.invoke("querySnapping",t,e)}async queryAttributeBins(t,e={}){return await this.load(),this._connection.invoke("queryAttributeBins",t?t.toJSON():null,e)}async _startWorker(t){this._connection=await (0,workers/* open */.ho)("CSVSourceWorker",{strategy:(0,has/* default */.A)("feature-layers-workers")?"dedicated":"local",signal:t,registryTarget:this});const{url:e,delimiter:o,fields:i,latitudeField:s,longitudeField:n,spatialReference:a,timeInfo:c}=this.loadOptions,u=await this._connection.invoke("load",{url:e,customParameters:this.customParameters,parsingOptions:{delimiter:o,fields:i?.map((t=>t.toJSON())),latitudeField:s,longitudeField:n,spatialReference:a?.toJSON(),timeInfo:c?.toJSON()}},{signal:t});this.locationInfo=u.locationInfo,this.sourceJSON=u.layerDefinition,this.delimiter=u.delimiter}};(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"loadOptions",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"customParameters",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"locationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],c.prototype,"delimiter",void 0),c=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.CSVSource")],c);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/graphics/sources/support/clientSideDefaults.js
var clientSideDefaults = __webpack_require__(77159);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/persistableUrlUtils.js
var persistableUrlUtils = __webpack_require__(55714);
;// ./node_modules/@arcgis/core/layers/CSVLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function h(e,r){throw new Error/* default */.A(r,`CSVLayer (title: ${e.title}, id: ${e.id}) cannot be saved to a portal item`)}let m=class extends FeatureLayer["default"]{constructor(...e){super(...e),this.geometryType="point",this.capabilities=(0,clientSideDefaults/* createCapabilities */.f)(!1,!1),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,i=this.loadFromPortal({supportedTypes:["CSV"],supportsData:!1},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>this.initLayerProperties(await this.createGraphicsSource(t))));return this.addResolvingPromise(i),Promise.resolve(this)}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!t.layerDefinition?.drawingInfo?.labelingInfo}set url(e){if(!e)return void this._set("url",e);const t=(0,urlUtils/* urlToObject */.An)(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async createGraphicsSource(e){const t=new c({loadOptions:{delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField??void 0,longitudeField:this.longitudeField??void 0,spatialReference:this.spatialReference??void 0,timeInfo:this.timeInfo??void 0,url:this.url},customParameters:this.customParameters??void 0});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.delimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Query/* default */.A.from(e)||this.createQuery()))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}async queryObjectIds(e,t){return await this.load(),this.source.queryObjectIds(Query/* default */.A.from(e)||this.createQuery())}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Query/* default */.A.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Query/* default */.A.from(e)||this.createQuery())))}read(e,t){super.read(e,t),t&&"service"===t.origin&&this.revert(["latitudeField","longitudeField"],"service")}write(e,t){return super.write(e,{...t,writeLayerSchema:!0})}clone(){throw new Error/* default */.A("csv-layer:clone",`CSVLayer (title: ${this.title}, id: ${this.id}) cannot be cloned`)}async save(e){return h(this,"csv-layer:save")}async saveAs(e,t){return h(this,"csv-layer:save-as")}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,write:!1}})],m.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],m.prototype,"delimiter",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],m.prototype,"editingEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],m.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,readOnly:!0})],m.prototype,"isTable",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],m.prototype,"readWebMapLabelsVisible",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],m.prototype,"latitudeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"]})],m.prototype,"listMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],m.prototype,"locationType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],m.prototype,"longitudeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["CSV"]})],m.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],m.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],m.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},cast:null,type:c,readOnly:!0})],m.prototype,"source",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1},value:"csv",readOnly:!0})],m.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:persistableUrlUtils.r,write:{isRequired:!0,ignoreOrigin:!0,writer:persistableUrlUtils.w}}})],m.prototype,"url",null),m=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.CSVLayer")],m);const f=m;


/***/ }),

/***/ 16730:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Xe)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/PopupTemplate.js + 6 modules
var PopupTemplate = __webpack_require__(31352);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/request.js
var request = __webpack_require__(38116);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(62991);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(57725);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MultiOriginJSONSupport.js + 2 modules
var MultiOriginJSONSupport = __webpack_require__(33125);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/object.js
var object = __webpack_require__(21750);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/promiseUtils.js + 1 modules
var promiseUtils = __webpack_require__(49175);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/sql.js
var sql = __webpack_require__(80189);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/cast.js
var cast = __webpack_require__(77380);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/form/FormTemplate.js + 31 modules
var FormTemplate = __webpack_require__(70345);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/Layer.js + 1 modules
var Layer = __webpack_require__(41247);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Graphic.js
var Graphic = __webpack_require__(20857);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Loadable.js
var Loadable = __webpack_require__(11965);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Promise.js
var core_Promise = __webpack_require__(71004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/workers/workers.js + 5 modules
var workers = __webpack_require__(99722);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(8636);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/shared.js
var shared = __webpack_require__(50078);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Polygon.js
var Polygon = __webpack_require__(65648);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/support/typeUtils.js
var typeUtils = __webpack_require__(54483);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/editsZScale.js
var editsZScale = __webpack_require__(29323);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/query/operations/queryZScale.js
var queryZScale = __webpack_require__(11378);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/FeatureSet.js
var FeatureSet = __webpack_require__(74704);
;// ./node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let _=0,T=class extends(Loadable/* default */.A.LoadableMixin(core_Promise/* default */.A.EsriPromiseMixin(Collection/* default */.A))){constructor(e){super(e),this._idToClientGeometry=null,this.type="memory"}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}get _workerGeometryType(){const e=this.layer?.geometryType;return e?this._geometryTypeRequiresClientGraphicMapping(e)?"polygon":e:null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}async queryFeatures(e,t={}){await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);(0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r);const o=FeatureSet/* default */.A.fromJSON(r);if(!this._requiresClientGraphicMapping()||!this._idToClientGeometry)return o;const s=this.layer.objectIdField;for(const i of o.features){const e=i.attributes[s],t=this._idToClientGeometry.get(e);void 0!==t&&(i.geometry=t)}return o.geometryType=this.layer.geometryType,o}async queryFeaturesJSON(e,t={}){if(this._requiresClientGraphicMapping())throw new Error/* default */.A("query-features-json:unsupported","Cannot query in JSON format for client only geometry types (mesh and extent)");await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return (0,queryZScale/* applyFeatureSetZUnitScaling */.q)(e,this.layer.spatialReference,r),r}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:Extent/* default */.A.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}async queryAttributeBins(e,t={}){return await this.load(),this._connection.invoke("queryAttributeBins",e?.toJSON(),t)}async _applyEdits(e){if(!this._connection)throw new Error/* default */.A("feature-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField;let r=null;const s=[],i=[];await Promise.all([this._prepareClientMapping(e.addFeatures,null),this._prepareClientMapping(e.updateFeatures,null)]);const n=e=>"objectId"in e&&null!=e.objectId?e.objectId:"attributes"in e&&null!=e.attributes[t]?e.attributes[t]:null;if(e.addFeatures&&(r=this._prepareAddFeatures(e.addFeatures)),e.deleteFeatures)for(const o of e.deleteFeatures){const e=n(o);null!=e&&s.push(e)}const a=e.updateFeatures&&this._idToClientGeometry?new Map:null;if(e.updateFeatures)for(const o of e.updateFeatures)if(i.push(this._serializeFeature(o)),a&&null!=o.geometry){const e=n(o);null!=e&&a.set(e,o)}(0,editsZScale/* unapplyEditsZUnitScaling */.u)(r?r.features:null,i,this.layer.spatialReference);const{fullExtent:l,featureEditResults:u}=await this._connection.invoke("applyEdits",{adds:r?r.features:[],updates:i,deletes:s});return this.fullExtent=l,r&&r.finish(u.uidToObjectId),this._updateIdToClientGeometries(a,u),this._createEditsResult(u)}async _prepareClientMapping(e,t){if("mesh"!==this._layerOrSourceGeometryType||null==e)return;const r=[];for(const{geometry:o}of e)null==o||"mesh"!==o.type||o.hasExtent||o.loaded||r.push(o.load({signal:t}));r.length&&await Promise.all(r)}_updateIdToClientGeometries(e,t){if(this._idToClientGeometry){if(e)for(const r of t.updateResults){if(!r.success)continue;const t=e.get(r.objectId);null!=t&&this._addIdToClientGeometry(t)}for(const e of t.deleteResults)e.success&&this._idToClientGeometry.delete(e.objectId)}}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:""};return{objectId:e.objectId,globalId:e.globalId,error:t?new Error/* default */.A("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_prepareAddFeatures(e){const t=new Map,r=new Array(e.length);let o=null;for(let i=0;i<e.length;i++){const s=e[i],n=this._serializeFeature(s);o||null==s.geometry||(o=s.geometry.type),r[i]=n,t.set(`${n.uid}`,s)}const s=this;return{features:r,inferredGeometryType:o,finish(e){const r=s.sourceJSON.objectIdField;for(const o in e){const i=e[o],n=t.get(o);n&&(n.attributes||(n.attributes={}),-1===i?delete n.attributes[r]:n.attributes[r]=i,s._addIdToClientGeometry(n))}}}}_addIdToClientGeometry(e){if(!this._idToClientGeometry)return;const t=this.sourceJSON.objectIdField,r=e.attributes?.[t];null!=r&&this._idToClientGeometry.set(r,e.geometry??null)}get _layerOrSourceGeometryType(){return this.layer?.geometryType??this.sourceJSON?.geometryType}_requiresClientGraphicMapping(){return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType)}_geometryRequiresClientGraphicMapping(e){return this._geometryTypeRequiresClientGraphicMapping(e.type)}_geometryTypeRequiresClientGraphicMapping(e){return"mesh"===e||"multipatch"===e||"extent"===e}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e),o=(_++).toString();return r?{uid:o,geometry:r.toJSON(),attributes:t}:{uid:o,attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;if(null==t)return null;if(this._geometryRequiresClientGraphicMapping(t)){return t.extent?Polygon/* default */.A.fromExtent(t.extent):null}return t}async _startWorker(e){this._connection=await (0,workers/* open */.ho)("MemorySourceWorker",{strategy:(0,has/* default */.A)("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,objectIdField:o,hasM:s,hasZ:n,timeInfo:l,dateFieldsTimeZone:u}=this.layer,p="defaults"===this.layer.originOf("spatialReference");await this._prepareClientMapping(this.items,e);const c=this._prepareAddFeatures(this.items);this.addHandles(this.on("before-changes",(e=>{Logger/* default */.A.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"),e.preventDefault()})));const d={features:c.features,fields:t?.map((e=>e.toJSON())),geometryType:typeUtils/* typeKebabDictionary */.Ye.toJSON(this._workerGeometryType),hasM:"mesh"!==this._layerOrSourceGeometryType&&s,hasZ:"mesh"===this._layerOrSourceGeometryType||n,objectIdField:o,spatialReference:p?null:r&&r.toJSON(),timeInfo:l?.toJSON()??null,dateFieldsTimeZone:u},y=await this._connection.invoke("load",d,{signal:e});for(const a of y.warnings)Logger/* default */.A.getLogger(this.layer).warn("#load()",`${a.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:a});y.featureErrors.length&&Logger/* default */.A.getLogger(this.layer).warn("#load()",`Encountered ${y.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:y.featureErrors});const m=y.layerDefinition;this._geometryTypeRequiresClientGraphicMapping(c.inferredGeometryType)&&(m.geometryType=typeUtils/* typeKebabDictionary */.Ye.toJSON(c.inferredGeometryType)),this.sourceJSON=m,this._requiresClientGraphicMapping()&&(this._idToClientGeometry=new Map),c.finish(y.assignedObjectIds)}};(0,tslib_es6._)([(0,shared/* shared */.u)({Type:Graphic/* default */.A,ensureType:(0,ensureType/* ensureType */.dp)(Graphic/* default */.A)})],T.prototype,"itemType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0})],T.prototype,"layer",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],T.prototype,"_workerGeometryType",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],T.prototype,"sourceJSON",void 0),T=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.graphics.sources.MemorySource")],T);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
var APIKeyMixin = __webpack_require__(94763);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var ArcGISService = __webpack_require__(30179);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/BlendLayer.js
var BlendLayer = __webpack_require__(20923);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/CustomParametersMixin.js
var CustomParametersMixin = __webpack_require__(27303);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/DisplayFilteredLayer.js + 2 modules
var DisplayFilteredLayer = __webpack_require__(57546);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/EditBusLayer.js
var EditBusLayer = __webpack_require__(88940);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js + 2 modules
var FeatureEffectLayer = __webpack_require__(42383);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js + 4 modules
var FeatureLayerBase = __webpack_require__(13268);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/FeatureReductionLayer.js + 1 modules
var FeatureReductionLayer = __webpack_require__(46197);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OperationalLayer.js + 1 modules
var OperationalLayer = __webpack_require__(90296);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/OrderedLayer.js
var OrderedLayer = __webpack_require__(87917);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/PortalLayer.js
var PortalLayer = __webpack_require__(60368);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Accessor.js + 4 modules
var Accessor = __webpack_require__(93741);
;// ./node_modules/@arcgis/core/layers/support/PublishingInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let e=class extends Accessor/* default */.A{constructor(){super(...arguments),this.updating=!1,this.status="unknown"}};(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"updating",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],e.prototype,"status",void 0),e=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.PublishingInfo")],e);

;// ./node_modules/@arcgis/core/layers/mixins/PublishableLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o=Symbol();function i(t){return null!=t&&"object"==typeof t&&o in t}const n=i=>{var n;let a=class extends i{constructor(){super(...arguments),this[n]=!0}static{n=o}get publishingInfo(){if(this.destroyed)return null;const t=this._get("publishingInfo");if(t)return t;const s=new e;return this._checkPublishingStatus(s),s}_checkPublishingStatus(t){const s=250,e=125;let r=0;const o=async s=>{let n;t.updating=!0;try{n=await this.fetchPublishingStatus()}catch(a){n="unavailable"}"published"!==n&&"unavailable"!==n||("publishing"===t.status&&this.refresh(),i.remove()),t.status=n,t.updating=!1,i.removed||(r=setTimeout(o,s,s+e))},i={removed:!1,remove(){this.removed=!0,clearTimeout(r)}};this.when().catch((()=>i.remove())),o(s),this.addHandles(i)}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,clonable:!1})],a.prototype,"publishingInfo",null),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.PublishableLayer")],a),a};

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/RefreshableLayer.js + 1 modules
var RefreshableLayer = __webpack_require__(77222);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/ScaleRangeLayer.js
var ScaleRangeLayer = __webpack_require__(22111);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TemporalLayer.js
var TemporalLayer = __webpack_require__(2960);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/mixins/TrackableLayer.js + 2 modules
var TrackableLayer = __webpack_require__(6907);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureTemplate.js
var FeatureTemplate = __webpack_require__(84700);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/FeatureType.js
var FeatureType = __webpack_require__(52202);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldProperties.js
var fieldProperties = __webpack_require__(83693);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/fieldUtils.js
var fieldUtils = __webpack_require__(46227);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LabelClass.js
var LabelClass = __webpack_require__(47659);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/labelingInfo.js
var labelingInfo = __webpack_require__(6488);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(29093);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TimeInfo.js
var TimeInfo = __webpack_require__(72523);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/TitleCreator.js
var TitleCreator = __webpack_require__(52884);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/versionUtils.js
var versionUtils = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/source/DataLayerSource.js + 3 modules
var DataLayerSource = __webpack_require__(95298);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(29221);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/styleUtils.js
var styleUtils = __webpack_require__(99650);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/typeUtils.js + 11 modules
var support_typeUtils = __webpack_require__(94403);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/rest/support/Query.js + 1 modules
var Query = __webpack_require__(39609);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/guards.js
var guards = __webpack_require__(42663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/support/popupUtils.js
var popupUtils = __webpack_require__(95610);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/typeUtils.js + 1 modules
var symbols_support_typeUtils = __webpack_require__(59343);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/interfaces.js
var interfaces = __webpack_require__(29759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/webdoc/support/opacityUtils.js
var opacityUtils = __webpack_require__(93802);
;// ./node_modules/@arcgis/core/layers/FeatureLayer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const Ze="FeatureLayer";function He(e,t){return new Error/* default */.A("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}function ke(e){return e&&e instanceof Collection/* default */.A}const ze=(0,fieldProperties/* defineFieldProperties */.p)();function Ke(e,t,r){const i=!!r?.writeLayerSchema;return{enabled:i,ignoreOrigin:i}}let Xe=class extends((0,FeatureLayerBase/* FeatureLayerBase */.j)((0,FeatureReductionLayer/* FeatureReductionLayer */.J)((0,FeatureEffectLayer/* FeatureEffectLayer */.F)(n((0,EditBusLayer/* EditBusLayer */.w6)((0,DisplayFilteredLayer/* DisplayFilteredLayer */.FJ)((0,BlendLayer/* BlendLayer */.dM)((0,OrderedLayer/* OrderedLayer */.fY)((0,TemporalLayer/* TemporalLayer */.e)((0,TrackableLayer/* TrackableLayer */.d)((0,ScaleRangeLayer/* ScaleRangeLayer */.j)((0,RefreshableLayer/* RefreshableLayer */.J)((0,ArcGISService/* ArcGISService */.b)((0,OperationalLayer/* OperationalLayer */.q)((0,PortalLayer/* PortalLayer */.A)((0,MultiOriginJSONSupport/* MultiOriginJSONMixin */.P)((0,CustomParametersMixin/* CustomParametersMixin */.d)((0,APIKeyMixin/* APIKeyMixin */.p)(Clonable/* default */.A.ClonableMixin(Layer/* default */.A)))))))))))))))))))){constructor(...e){super(...e),this.attributeTableTemplate=null,this.charts=null,this.copyright=null,this.displayField=null,this.dynamicDataSource=null,this.fields=null,this.fieldsIndex=null,this.formTemplate=null,this.fullExtent=null,this.geometryType=null,this.hasM=void 0,this.hasZ=void 0,this.infoFor3D=null,this.isTable=!1,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="ArcGISFeatureLayer",this.outFields=null,this.path=null,this.popupEnabled=!0,this.popupTemplate=null,this.resourceInfo=null,this.screenSizePerspectiveEnabled=!0,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeCode=null,this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.templates=null,this.timeInfo=null,this.title=null,this.sublayerTitleMode="item-title",this.type="feature",this.typeIdField=null,this.types=null,this.visible=!0,this._debouncedSaveOperations=(0,promiseUtils/* debounce */.sg)((async(e,t,r)=>{const{save:i,saveAs:o}=await __webpack_require__.e(/* import() */ 10900).then(__webpack_require__.bind(__webpack_require__, 10900));switch(e){case interfaces/* SaveOperationType */.X.SAVE:return i(this,t);case interfaces/* SaveOperationType */.X.SAVE_AS:return o(this,r,t)}}))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;if(this.portalItem?.loaded&&this.source)return this.addResolvingPromise(this.createGraphicsSource(t).then((e=>this.initLayerProperties(e)))),Promise.resolve(this);const r=this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},e).catch(promiseUtils/* throwIfAbortError */.QP).then((async()=>{if(this.url&&null==this.layerId&&/FeatureServer|MapServer\/*$/i.test(this.url)){const e=await this._fetchFirstValidLayerId(t);null!=e&&(this.layerId=e)}if(!this.url&&!this._hasMemorySource())throw new Error/* default */.A("feature-layer:missing-url-or-source","Feature layer must be created with either a url or a source");return this.initLayerProperties(await this.createGraphicsSource(t))})).then((()=>(0,featureLayerUtils/* ensureLayerCredential */.VA)(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get _titleCreator(){const e=this._get("_titleCreator");return (0,maybe/* destroyMaybe */.pR)(e),new TitleCreator/* default */.A({fieldsIndex:this.fieldsIndex,objectIdField:this.objectIdField,fields:this.fields,displayField:this.displayField,effectivePopupTemplate:this.popupTemplate??this.defaultPopupTemplate})}readCapabilities(e,t){return t=t.layerDefinition||t,(0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("dynamicDataSource"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return!(this.loaded&&!this.capabilities?.operations.supportsEditing)&&(this._isOverridden("editingEnabled")?this._get("editingEnabled"):this._hasMemorySource()||this.userHasEditingPrivileges)}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}readEditingEnabled(e,t){return this._readEditingEnabled(t,!1)}readEditingEnabledFromWebMap(e,t,r){return this._readEditingEnabled(t,!0,r)}writeEditingEnabled(e,t){this._writeEditingEnabled(e,t,!1)}writeEditingEnabledToWebMap(e,t,r,i){this._writeEditingEnabled(e,t,!0,i)}get effectiveEditingEnabled(){return (0,featureLayerUtils/* computeEffectiveEditingEnabled */.C$)(this)}get featureTitleFields(){return[...this._titleCreator.requiredFields]}readIsTable(e,t){return"Table"===(t=t?.layerDefinition??t).type||!t.geometryType}writeIsTable(e,t,r,i){i?.writeLayerSchema&&(0,object/* setDeepValue */.sM)(r,e?"Table":"Feature Layer",t)}readGlobalIdField(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t.layerDefinition||t)}readObjectIdField(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t.layerDefinition||t)}get parsedUrl(){const e=(0,urlUtils/* urlToObject */.An)(this.url);return null!=e&&(null!=this.dynamicDataSource?e.path=(0,urlUtils/* join */.fj)(e.path,"dynamicLayer"):null!=this.layerId&&(e.path=(0,urlUtils/* join */.fj)(e.path,this.layerId.toString()))),e}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,fieldUtils/* fixRendererFields */.yp)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){t=t.layerDefinition||t;const i=t.drawingInfo?.renderer;if(i){const e=(0,jsonUtils/* read */.L)(i,t,r)??void 0;return e||Logger/* default */.A.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}return (0,featureLayerUtils/* createDefaultRenderer */.PD)(t,r)}set source(e){const t=this._get("source");t!==e&&(ke(t)&&this._resetMemorySource(t),ke(e)&&this._initMemorySource(e),this._set("source",e))}castSource(e){return e?Array.isArray(e)||e instanceof Collection/* default */.A?new T({layer:this,items:e}):e:null}readSource(e,t){const r=FeatureSet/* default */.A.fromJSON(t.featureSet);return new T({layer:this,items:r?.features??[]})}readTemplates(e,t){const r=t.editFieldsInfo,i=r?.creatorField,o=r?.editorField;return e=e?.map((e=>FeatureTemplate/* default */.A.fromJSON(e))),this._fixTemplates(e,i),this._fixTemplates(e,o),e}readTitle(e,t){const r=t.layerDefinition?.name??t.name,i=t.title||t.layerDefinition?.title;if(r){const e=this.portalItem?.title;if("item-title"===this.sublayerTitleMode)return this.url?(0,arcgisLayerUrl/* titleFromUrlAndName */.yG)(this.url,r):r;let t=r;if(!t&&this.url){const e=(0,arcgisLayerUrl/* parse */.qg)(this.url);null!=e&&(t=e.title)}if(!t)return;return"item-title-and-service-name"===this.sublayerTitleMode&&e&&e!==t&&(t=e+" - "+t),(0,arcgisLayerUrl/* cleanTitle */.cr)(t)}if("item-title"===this.sublayerTitleMode&&i)return i}readTitleFromWebMap(e,t){return t.title||t.layerDefinition?.name}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const e=t.fields.find((e=>e.name.toLowerCase()===r));e&&(r=e.name)}return r}readTypes(e,t){e=(t=t.layerDefinition||t).types;const r=t.editFieldsInfo,i=r?.creatorField,o=r?.editorField;return e?.map((e=>(e=FeatureType/* default */.A.fromJSON(e),this._fixTemplates(e.templates,i),this._fixTemplates(e.templates,o),e)))}readVisible(e,t){return null!=t.layerDefinition?.defaultVisibility?!!t.layerDefinition.defaultVisibility:null!=t.visibility?!!t.visibility:void 0}async addAttachment(e,t){const r=await (0,featureLayerUtils/* addAttachment */.Xl)(this,e,t,Ze);return this.lastEditsEventDate=new Date,r}async updateAttachment(e,t,r){const i=await (0,featureLayerUtils/* updateAttachment */.bt)(this,e,t,r,Ze);return this.lastEditsEventDate=new Date,i}async applyEdits(e,t){return (0,featureLayerUtils/* applyEdits */.ct)(this,e,t)}async uploadAssets(e,t){return (0,featureLayerUtils/* uploadAssets */.rn)(this,e,t)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return (0,popupUtils/* createPopupTemplate */.tn)(this,e)}async createGraphicsSource(e){if(this._hasMemorySource()&&this.source)return this.source.load({signal:e});const{default:t}=await (0,promiseUtils/* whenOrAbort */.qr)(__webpack_require__.e(/* import() */ 75089).then(__webpack_require__.bind(__webpack_require__, 97470)),e);return new t({layer:this,supportedSourceTypes:this.supportedSourceTypes}).load({signal:e})}createQuery(){const e=(0,featureLayerUtils/* createQuery */.VZ)(this);e.dynamicDataSource=this.dynamicDataSource;const t=null!=this.subtypeCode?`${this.subtypeField} = ${this.subtypeCode}`:null,r=(0,sql/* sqlAnd */.mA)(this.definitionExpression,t);return e.where=r||"1=1",e}async deleteAttachments(e,t){const r=await (0,featureLayerUtils/* deleteAttachments */.mm)(this,e,t,Ze);return this.lastEditsEventDate=new Date,r}async fetchRecomputedExtents(e){return (0,featureLayerUtils/* fetchRecomputedExtents */.WP)(this,e,Ze)}async getFeatureTitle(e,t){return this._titleCreator.getTitle(this,e,t)}async getFeatureTitles(e,t){return this._titleCreator.getTitles(this,e,t)}getFeatureType(e){return (0,featureLayerUtils/* getFeatureType */.xd)(this.types,this.typeIdField,e)}getFieldDomain(e,t){return (0,featureLayerUtils/* getFieldDomain */.Vq)(this,e,t,this.getField(e)?.domain??null)}async queryAttachments(e,t){return (0,featureLayerUtils/* queryAttachments */.lV)(this,e,t,Ze)}async queryFeatures(e,t){const r=await this.load(),i=await r.source.queryFeatures(Query/* default */.A.from(e)??r.createQuery(),t);if(i?.features)for(const o of i.features)o.layer=o.sourceLayer=r;return i}async queryObjectIds(e,t){return await (0,featureLayerUtils/* queryObjectIds */.sg)(this,e,t,Ze)}async queryFeatureCount(e,t){return (0,featureLayerUtils/* queryFeatureCount */.Ye)(this,e,t,Ze)}async queryExtent(e,t){return (0,featureLayerUtils/* queryExtent */.B5)(this,e,t,Ze)}async queryRelatedFeatures(e,t){return (0,featureLayerUtils/* queryRelatedFeatures */.hM)(this,e,t,Ze)}async queryRelatedFeaturesCount(e,t){return (0,featureLayerUtils/* queryRelatedFeaturesCount */.S2)(this,e,t,Ze)}async queryTopFeatures(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopFeatures||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryTopFeatures capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745)),a=await r.queryTopFeatures(o.default.from(e),t);if(a?.features)for(const s of a.features)s.layer=s.sourceLayer=this;return a}async queryAttributeBins(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryAttributeBins)throw new Error/* default */.A(Ze,"Layer source does not support queryAttributeBins capability");(0,featureLayerUtils/* validateBinsQuery */.ZJ)(e,i,Ze);const o=await __webpack_require__.e(/* import() */ 14232).then(__webpack_require__.bind(__webpack_require__, 14232)),a=await r.queryAttributeBins(o.default.from(e),t);if(a.features)for(const s of a.features)s.layer=s.sourceLayer=this;return a}async queryTopObjectIds(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopObjectIds||!i?.query.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryTopObjectIds capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745));return(await r.queryTopObjectIds(o.default.from(e),t)).filter(guards/* isNumber */.Et)}async queryTopFeaturesExtent(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopExtents||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryTopExtents capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745));return r.queryTopExtents(o.default.from(e),t)}async queryTopFeatureCount(e,t){const{source:r,capabilities:i}=await this.load();if(!r.queryTopCount||!i?.query?.supportsTopFeaturesQuery)throw new Error/* default */.A(Ze,"Layer source does not support queryFeatureCount capability");const o=await __webpack_require__.e(/* import() */ 86745).then(__webpack_require__.bind(__webpack_require__, 86745));return r.queryTopCount(o.default.from(e),t)}read(e,t){const r=e.featureCollection;if((r||"Feature Collection"===e.type)&&(this.resourceInfo=e),r){const{layers:e,showLegend:i}=r;1===e?.length&&(super.read(e[0],t),null!=i&&super.read({showLegend:i},t))}super.read(e,t),t&&"service"===t.origin&&(this.revert(["objectIdField","fields","timeInfo","dateFieldsTimeZone"],"service"),this.spatialReference||this.revert(["spatialReference"],"service"))}write(e,t){t={...t,origin:t?.origin??void 0,writeLayerSchema:t?.writeLayerSchema??this._hasMemorySource()};const{origin:r,layerContainerType:i,messages:o}=t;if(this.dynamicDataSource)return o?.push(He(this,"using a dynamic data source cannot be written to web scenes, web maps and feature service items")),null;if(this.isTable){if(("web-map"===r||"web-scene"===r)&&"tables"!==i)return o?.push(He(this,`a table source can only be written to tables, not ${i}`)),null;if(this._hasMemorySource())return o?.push(He(this,"using an in-memory table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&("web-map"===r||"web-scene"===r)&&"tables"===i)return o?.push(He(this,"using a non-table source cannot be written to tables in web maps or web scenes")),null;return super.write(e,t)}clone(){if(this._hasMemorySource())throw new Error/* default */.A(Ze,`FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);return super.clone()}serviceSupportsSpatialReference(e){return!!this.loaded&&("memory"===this.source?.type||(0,versionUtils/* serviceSupportsSpatialReference */.D)(this,e))}async save(e){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(interfaces/* SaveOperationType */.X.SAVE_AS,t,e)}_readEditingEnabled(e,t,r){let i=e.layerDefinition?.capabilities;return i?this._hasEditingCapability(i):(i=e.capabilities,t&&"web-map"===r?.origin&&!this._hasMemorySource()&&i?this._hasEditingCapability(i):void 0)}_hasEditingCapability(e){return e.toLowerCase().split(",").map((e=>e.trim())).includes("editing")}_writeEditingEnabled(e,t,r,i){if(!e){const e=this.capabilities?.operations?.supportsSync?"Query,Sync":"Query";(0,object/* setDeepValue */.sM)("layerDefinition.capabilities",e,t),r&&!i?.writeLayerSchema&&(t.capabilities=e)}}_fetchFirstValidLayerId(e){return (0,request/* default */.A)(this.url??"",{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e}).then((e=>{const t=e.data;if(t)return this.applyPreferredHost(t),this.findFirstValidLayerId(t)}))}async initLayerProperties(e){return this._set("source",e),e.sourceJSON&&(this.sourceJSON=e.sourceJSON,this.read(e.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl})),this._verifySource(),this._verifyFields(),(0,fieldUtils/* fixRendererFields */.yp)(this.renderer,this.fieldsIndex),(0,fieldUtils/* fixTimeInfoFields */.sv)(this.timeInfo,this.fieldsIndex),this._hasMemorySource()&&"mesh"===this.geometryType&&(this.capabilities.query.supportsReturnMesh=!0),(0,styleUtils/* loadStyleRenderer */.L)(this,{origin:"service"})}async hasDataChanged(){return (0,featureLayerUtils/* hasDataChanged */.jp)(this)}async fetchPublishingStatus(){const e=this.source;return e?.fetchPublishingStatus?e.fetchPublishingStatus():"unavailable"}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("FeatureLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||this._hasMemorySource()||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_fixTemplates(e,t){e&&e.forEach((e=>{const r=e.prototype?.attributes;r&&t&&delete r[t]}))}_verifySource(){if(this._hasMemorySource()){if(this.url)throw new Error/* default */.A("feature-layer:mixed-source-and-url","FeatureLayer cannot be created with both an in-memory source and a url")}else if(!this.url)throw new Error/* default */.A("feature-layer:source-or-url-required","FeatureLayer requires either a url, a valid portal item or a source")}_initMemorySource(e){e.forEach((e=>{e.layer=this,e.sourceLayer=this})),this.addHandles([e.on("after-add",(e=>{e.item.layer=this,e.item.sourceLayer=this})),e.on("after-remove",(e=>{e.item.layer=null,e.item.sourceLayer=null}))],"fl-source")}_resetMemorySource(e){e.forEach((e=>{e.layer=null,e.sourceLayer=null})),this.removeHandles("fl-source")}_hasMemorySource(){return!(this.url||!this.source)}findFirstValidLayerId(e){return Array.isArray(e.layers)&&e.layers.length>0?e.layers[0].id:Array.isArray(e.tables)&&e.tables.length>0?e.tables[0].id:void 0}};(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],Xe.prototype,"_titleCreator",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* attributeTableTemplate */.zQ)],Xe.prototype,"attributeTableTemplate",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],Xe.prototype,"readCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-scene":{write:!1}},write:!0}})],Xe.prototype,"charts",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"createQueryVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.copyrightText"}}})],Xe.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.displayField"}}})],Xe.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({types:symbols_support_typeUtils/* symbolTypes */.Es,readOnly:!0})],Xe.prototype,"defaultSymbol",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:DataLayerSource/* DataLayerSource */.L})],Xe.prototype,"dynamicDataSource",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],Xe.prototype,"editingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)(["portal-item","web-scene"],"editingEnabled",["layerDefinition.capabilities"])],Xe.prototype,"readEditingEnabled",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","editingEnabled",["capabilities","layerDefinition.capabilities"])],Xe.prototype,"readEditingEnabledFromWebMap",null),(0,tslib_es6._)([(0,writer/* writer */.K)(["portal-item","web-scene"],"editingEnabled",{"layerDefinition.capabilities":{type:String}})],Xe.prototype,"writeEditingEnabled",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","editingEnabled",{capabilities:{type:String},"layerDefinition.capabilities":{type:String}})],Xe.prototype,"writeEditingEnabledToWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1,readOnly:!0})],Xe.prototype,"featureTitleFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)({...ze.fields,json:{read:{source:"layerDefinition.fields"},origins:{service:{name:"fields"},"web-map":{write:{target:"layerDefinition.fields",overridePolicy:Ke}}}}})],Xe.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ze.fieldsIndex)],Xe.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:FormTemplate/* default */.A,json:{name:"formInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}})],Xe.prototype,"formTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent"}}})],Xe.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.geometryType",overridePolicy:Ke,writer(e,t,r){const i=e?featureLayerUtils/* geometryTypeKebabDict */.iX.toJSON(e):null;i&&(0,object/* setDeepValue */.sM)(r,i,t)}}}},read:{source:"layerDefinition.geometryType",reader:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}})],Xe.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasM"}}})],Xe.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.hasZ"}}})],Xe.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties.id)],Xe.prototype,"id",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],Xe.prototype,"infoFor3D",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.type"}}}}})],Xe.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type","geometryType"]),(0,reader/* reader */.w)("isTable",["layerDefinition.type","layerDefinition.geometryType"])],Xe.prototype,"readIsTable",null),(0,tslib_es6._)([(0,writer/* writer */.K)("web-map","isTable")],Xe.prototype,"writeIsTable",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* labelsVisible */.kF)],Xe.prototype,"labelsVisible",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[LabelClass/* default */.A],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:labelingInfo/* reader */.w,write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}})],Xe.prototype,"labelingInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* opacityDrawingInfo */.Ih);return e.json.origins["portal-item"]={write:{target:"layerDefinition.drawingInfo.transparency",writer(e,t,r){(0,object/* setDeepValue */.sM)(r,(0,opacityUtils/* opacityToTransparency */.p)(e),t)}}},e})())],Xe.prototype,"opacity",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* legendEnabled */.fV)],Xe.prototype,"legendEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["show","hide"],json:(()=>{const e=(0,lang/* clone */.o8)(commonProperties/* listMode */.C1.json);return e.origins["portal-item"]={read:!1,write:!1},e})()})],Xe.prototype,"listMode",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],Xe.prototype,"readGlobalIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{"web-map":{write:{target:"layerDefinition.objectIdField",overridePolicy:Ke}}}}})],Xe.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],Xe.prototype,"readObjectIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["ArcGISFeatureLayer"],json:{write:{target:"layerType",ignoreOrigin:!0,layerContainerTypes:layerContainerType/* excludeTables */.K}}})],Xe.prototype,"operationalLayerType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(ze.outFields)],Xe.prototype,"outFields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"parsedUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],Xe.prototype,"path",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* popupEnabled */.M6)],Xe.prototype,"popupEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:PopupTemplate/* default */.A,json:{name:"popupInfo",write:!0}})],Xe.prototype,"popupTemplate",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],Xe.prototype,"defaultPopupTemplate",null),(0,tslib_es6._)([(0,property/* property */.MZ)({types:support_typeUtils/* rendererTypes */.Hg,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{types:support_typeUtils/* webSceneRendererTypes */.XJ,name:"layerDefinition.drawingInfo.renderer",write:{layerContainerTypes:layerContainerType/* excludeTables */.K,overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema,layerContainerTypes:layerContainerType/* excludeTables */.K})}}},write:{target:"layerDefinition.drawingInfo.renderer",overridePolicy:(e,t,r)=>({ignoreOrigin:r?.writeLayerSchema,layerContainerTypes:layerContainerType/* excludeTables */.K})}}})],Xe.prototype,"renderer",null),(0,tslib_es6._)([(0,reader/* reader */.w)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,reader/* reader */.w)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],Xe.prototype,"readRenderer",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],Xe.prototype,"resourceInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* screenSizePerspectiveEnabled */.PY);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],Xe.prototype,"screenSizePerspectiveEnabled",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({clonable:!1})],Xe.prototype,"source",null),(0,tslib_es6._)([(0,cast/* cast */.w)("source")],Xe.prototype,"castSource",null),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","source",["featureSet"]),(0,reader/* reader */.w)("web-map","source",["featureSet"])],Xe.prototype,"readSource",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:{source:"layerDefinition.extent.spatialReference"}}})],Xe.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number})],Xe.prototype,"subtypeCode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureTemplate/* default */.A]})],Xe.prototype,"templates",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("templates",["editFieldsInfo","creatorField","editorField","templates"])],Xe.prototype,"readTemplates",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:TimeInfo/* default */.A})],Xe.prototype,"timeInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],Xe.prototype,"title",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","title",["name"]),(0,reader/* reader */.w)("portal-item","title",["layerDefinition.title","layerDefinition.name","title"])],Xe.prototype,"readTitle",null),(0,tslib_es6._)([(0,reader/* reader */.w)("web-map","title",["layerDefinition.name","title"])],Xe.prototype,"readTitleFromWebMap",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Xe.prototype,"sublayerTitleMode",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{read:!1}})],Xe.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],Xe.prototype,"typeIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","typeIdField"),(0,reader/* reader */.w)("typeIdField",["layerDefinition.typeIdField"])],Xe.prototype,"readTypeIdField",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[FeatureType/* default */.A]})],Xe.prototype,"types",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","types",["types"]),(0,reader/* reader */.w)("types",["layerDefinition.types"])],Xe.prototype,"readTypes",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{"portal-item":{write:{target:"layerDefinition.defaultVisibility",layerContainerTypes:layerContainerType/* excludeTables */.K}}}}})],Xe.prototype,"visible",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("portal-item","visible",["visibility","layerDefinition.defaultVisibility"])],Xe.prototype,"readVisible",null),Xe=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.FeatureLayer")],Xe);


/***/ }),

/***/ 94763:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function s(e){return"portalItem"in e}const i=i=>{let o=class extends i{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):s(this)?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .MZ)({type:String})],o.prototype,"apiKey",null),o=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.APIKeyMixin")],o),o};


/***/ }),

/***/ 30179:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6273);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26325);
/* harmony import */ var _support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const l=l=>{let p=class extends l{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const t=(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .parse */ .qg)(this.url);if(t?.title)return t.title}return this._get("title")||""}set title(t){this._set("title",t)}set url(t){this._set("url",(0,_support_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_6__/* .sanitizeUrl */ .Jf)(t,_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.getLogger(this)))}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)()],p.prototype,"title",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__/* .property */ .MZ)({type:String})],p.prototype,"url",null),p=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__/* .subclass */ .$)("esri.layers.mixins.ArcGISService")],p),p};


/***/ }),

/***/ 88940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mk: () => (/* binding */ p),
/* harmony export */   Zk: () => (/* binding */ c),
/* harmony export */   w6: () => (/* binding */ F)
/* harmony export */ });
/* unused harmony exports emitUpdateMomentEvent, isLayerWithGDBVersion, onApplyEditsEvent, onUpdateMomentEvent, versionMatches */
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57888);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15565);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49175);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/* harmony import */ var _versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6893);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new _core_Evented_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.EventEmitter;function l(t){return a.on("apply-edits",new WeakRef(t))}function h(t){return a.on("update-moment",new WeakRef(t))}function c(t,e,i=null,r=!1){const d=(0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createResolver */ .Tw)();return r=null==e||r,a.emit("apply-edits",{serviceUrl:t,layerId:e,gdbVersion:i,mayReceiveServiceEdits:r,result:d.promise}),d}function u(t,e,i=null,s){a.emit("update-moment",{serviceUrl:t,layerId:e,gdbVersion:i,moment:s})}const m=Symbol();function p(t){return null!=t&&"object"==typeof t&&m in t}function b(t){return null!=t&&"object"==typeof t&&"gdbVersion"in t}function g(t,e,i){const s=new URL(t).host,r=_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .defaultVersionNameLookup */ .Z3.get(s),d=t=>!t||t===r;return d(e)&&d(i)||e===i}const F=e=>{var s;let n=class extends e{static{s=m}constructor(...t){super(...t),this[s]=!0,this._applyEditsHandler=t=>{const{serviceUrl:e,layerId:s,gdbVersion:r,mayReceiveServiceEdits:d,result:o}=t,n=e===this.url,a=null!=s&&null!=this.layerId&&s===this.layerId,l=b(this),h=b(this)&&g(e,r,this.gdbVersion);if(!n||l&&!h||!a&&!d)return;const c=o.then((t=>{if(this.lastEditsEventDate=new Date,a&&(t.addedFeatures.length||t.updatedFeatures.length||t.deletedFeatures.length||t.addedAttachments.length||t.updatedAttachments.length||t.deletedAttachments.length))return this.emit("edits",(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t)),t;const s=t.editedFeatures?.find((({layerId:t})=>t===this.layerId));if(s){const{adds:e,updates:r,deletes:d}=s.editedFeatures,o={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:e?e.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],deletedFeatures:d?d.map((({attributes:t})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],updatedFeatures:r?r.map((({current:{attributes:t}})=>({objectId:this.objectIdField&&t[this.objectIdField],globalId:this.globalIdField&&t[this.globalIdField]}))):[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.historicMoment)};return this.emit("edits",o),o}const d={edits:null,addedAttachments:[],deletedAttachments:[],updatedAttachments:[],addedFeatures:[],deletedFeatures:[],updatedFeatures:[],editedFeatures:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.editedFeatures),exceededTransferLimit:!1,historicMoment:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_2__/* .clone */ .o8)(t.historicMoment)};return"historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,d.historicMoment)&&this.emit("edits",d),d})).then((t=>("historicMoment"in this&&this._shouldUpdateHistoricMoment(e,r,t.historicMoment)&&(this.historicMoment=t.historicMoment),t)));this.emit("apply-edits",{result:c})},this._updateMomentHandler=t=>{const{serviceUrl:e,gdbVersion:i,moment:s}=t,r=e===this.url,d=b(this),o=b(this)&&g(e,i,this.gdbVersion),n=b(this)&&!g(e,this.gdbVersion,null);r&&d&&o&&n&&"historicMoment"in this&&this.historicMoment!==s&&(this.historicMoment=s)},this.when().then((()=>{this.addHandles(l(this._applyEditsHandler)),"historicMoment"in this&&this.addHandles(h(this._updateMomentHandler))}),(()=>{}))}_shouldUpdateHistoricMoment(t,e,i){return"historicMoment"in this&&this.historicMoment!==i&&(0,_versionManagement_support_versionManagementUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .isVersionInEditSession */ .w5)(t,e)}};return (0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)()],n.prototype,"lastEditsEventDate",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.mixins.EditBusLayer")],n),n};


/***/ }),

/***/ 13268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  j: () => (/* binding */ k)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(82392);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Collection.js + 1 modules
var Collection = __webpack_require__(54192);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(15565);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(80861);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/urlUtils.js
var urlUtils = __webpack_require__(19759);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81482);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/reader.js
var reader = __webpack_require__(25376);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(26325);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(48524);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/layerContainerType.js
var layerContainerType = __webpack_require__(63910);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var PropertyOrigin = __webpack_require__(91101);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/Extent.js
var Extent = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/HeightModelInfo.js
var HeightModelInfo = __webpack_require__(21570);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(44153);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/commonProperties.js
var commonProperties = __webpack_require__(9014);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Clonable.js
var Clonable = __webpack_require__(14755);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js + 1 modules
var JSONSupport = __webpack_require__(22395);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/RandomLCG.js
var RandomLCG = __webpack_require__(67498);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/time/timeZoneUtils.js + 1 modules
var timeZoneUtils = __webpack_require__(75235);
;// ./node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let l=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.creatorField=null,this.creationDateField=null,this.editorField=null,this.editDateField=null,this.realm=null,this.timeZone=null}};(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"creatorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"creationDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"editorField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"editDateField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],l.prototype,"realm",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference",!0))],l.prototype,"timeZone",void 0),l=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.EditFieldsInfo")],l);

;// ./node_modules/@arcgis/core/layers/support/FeatureIndex.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let p=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o)}};(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"name",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"fields",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"isAscending",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"indexType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"isUnique",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({constructOnly:!0,json:{write:!0}})],p.prototype,"description",void 0),p=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.FeatureIndex")],p);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/featureLayerUtils.js + 1 modules
var featureLayerUtils = __webpack_require__(33039);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/unitUtils.js
var unitUtils = __webpack_require__(5262);
;// ./node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let a=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(e){super(e),this.shapeAreaField=null,this.shapeLengthField=null,this.units=null}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeAreaFieldName"}}})],a.prototype,"shapeAreaField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"shapeLengthFieldName"}}})],a.prototype,"shapeLengthField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:e=>unitUtils/* areaUnitsJSONMap */.dk.read(e)||unitUtils/* lengthUnitsJSONMap */.Sk.read(e)}})],a.prototype,"units",void 0),a=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.GeometryFieldsInfo")],a);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var LayerFloorInfo = __webpack_require__(76591);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/layerUtils.js + 1 modules
var layerUtils = __webpack_require__(44837);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/Relationship.js
var Relationship = __webpack_require__(46148);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js + 1 modules
var serviceCapabilitiesUtils = __webpack_require__(29093);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/domains.js + 2 modules
var domains = __webpack_require__(83611);
;// ./node_modules/@arcgis/core/layers/support/Subtype.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(Clonable/* default */.A.ClonableMixin(JSONSupport/* default */.A)){constructor(o){super(o),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(o){if(!o)return null;const r={};for(const t of Object.keys(o))r[t]=(0,domains/* fromJSON */.rS)(o[t]);return r}writeDomains(o,r){if(!o)return;const t={};for(const e of Object.keys(o))o[e]&&(t[e]=o[e]?.toJSON());r.domains=t}};(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{write:!0}})],n.prototype,"code",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Object,json:{write:!0}})],n.prototype,"defaultValues",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("domains")],n.prototype,"readDomains",null),(0,tslib_es6._)([(0,writer/* writer */.K)("domains")],n.prototype,"writeDomains",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{write:!0}})],n.prototype,"name",void 0),n=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.support.Subtype")],n);

// EXTERNAL MODULE: ./node_modules/@arcgis/core/portal/support/portalItemUtils.js
var portalItemUtils = __webpack_require__(86074);
;// ./node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const k=k=>{let L=class extends k{constructor(){super(...arguments),this.copyright=null,this.capabilities=null,this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.definitionExpression=null,this.displayField=null,this.editFieldsInfo=null,this.editingInfo=null,this.elevationInfo=null,this.fieldsIndex=null,this.floorInfo=null,this.fullExtent=null,this.gdbVersion=null,this.geometryFieldsInfo=null,this.geometryType=null,this.globalIdField=null,this.hasM=void 0,this.hasZ=void 0,this.heightModelInfo=null,this.historicMoment=null,this.indexes=new(Collection/* default */.A.ofType(p)),this.isTable=!1,this.layerId=void 0,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.preferredTimeZone=null,this.relationships=null,this.returnM=void 0,this.returnZ=void 0,this.serviceDefinitionExpression=null,this.serviceItemId=null,this.sourceJSON=null,this.spatialReference=SpatialReference/* default */.A.WGS84,this.subtypeField=null,this.subtypes=null,this.trackIdField=null,this.uniqueIdFields=null,this.version=void 0,this._isUrlHostModified=!1,this._isUrlHostModificationEnabled=!1}getFieldDomain(){throw new Error("Not implemented")}getField(e){return this.fieldsIndex.get(e)}get authenticationTriggerEvent(){if(!this.url)return null;const{capabilities:e}=this;if(e){const{query:t,operations:i,editing:r}=e;if(!t.supportsQueryByOthers||!t.supportsQueryByAnonymous)return"load";if(i.supportsEditing&&!(r.supportsUpdateByOthers&&r.supportsUpdateByAnonymous&&r.supportsDeleteByOthers&&r.supportsDeleteByAnonymous))return"load"}if((0,featureLayerUtils/* hasCurrentUser */.rQ)(this.serviceDefinitionExpression)||(0,featureLayerUtils/* hasCurrentUser */.rQ)(this.definitionExpression))return"load";if(this.userHasUpdateItemPrivileges){if((0,featureLayerUtils/* isLayerCacheStale */.tG)(this))return"load";if(this.hasUpdateItemRestrictions)return e.operations.supportsQuery?"editing":"load"}if(this.userHasFullEditingPrivileges&&this.hasFullEditingRestrictions)return"editing";const t=this.editFieldsInfo;return(t?.creatorField||t?.editorField)&&e?.operations.supportsEditing?"editing":null}readCapabilitiesFromService(e,t){return (0,serviceCapabilitiesUtils/* getFeatureLayerCapabilities */.S)(t,this.url)}readEditingInfo(e,t){const{editingInfo:i}=t;return i?{lastEditDate:null!=i.lastEditDate?new Date(i.lastEditDate):null}:null}get effectiveCapabilities(){const e=this.capabilities;if(!e)return null;const t=(0,lang/* clone */.o8)(e),{operations:r,editing:o}=t;return (0,featureLayerUtils/* supportsQueryOnly */.Pt)(this)?(this.userHasUpdateItemPrivileges&&(r.supportsQuery=!0),t):this.userHasUpdateItemPrivileges?(r.supportsAdd=r.supportsDelete=r.supportsEditing=r.supportsQuery=r.supportsUpdate=o.supportsDeleteByOthers=o.supportsGeometryUpdate=o.supportsUpdateByOthers=!0,t):(this.userHasFullEditingPrivileges&&r.supportsEditing&&(r.supportsAdd=r.supportsDelete=r.supportsUpdate=o.supportsGeometryUpdate=!0),t)}get effectiveEditingEnabled(){return!1}readGlobalIdFieldFromService(e,t){return (0,featureLayerUtils/* readGlobalIdField */.jD)(t)}get hasFullEditingRestrictions(){const e=this.capabilities;if(!e||(0,featureLayerUtils/* supportsQueryOnly */.Pt)(this))return!1;const{operations:t,editing:i}=e;return t.supportsEditing&&!(t.supportsAdd&&t.supportsDelete&&t.supportsUpdate&&i.supportsGeometryUpdate)}get hasUpdateItemRestrictions(){const e=this.capabilities;if(!e)return!1;const{operations:t,editing:i}=e;return (0,featureLayerUtils/* supportsQueryOnly */.Pt)(this)?!t.supportsQuery:!(t.supportsAdd&&t.supportsDelete&&t.supportsEditing&&t.supportsQuery&&t.supportsUpdate&&i.supportsDeleteByOthers&&i.supportsGeometryUpdate&&i.supportsUpdateByOthers)}readIsTableFromService(e,t){return"Table"===t.type}readMaxScale(e,t){return t.effectiveMaxScale||e||0}readMinScale(e,t){return t.effectiveMinScale||e||0}readObjectIdFieldFromService(e,t){return (0,featureLayerUtils/* readObjectIdField */.Zm)(t)}readServiceDefinitionExpression(e,t){return t.definitionQuery||t.definitionExpression}readUniqueIdFields(e,t){return t.uniqueIdInfo?.OIDFieldContainsHashValue?t.uniqueIdInfo.fields:null}set url(e){if(null==e)return void this._set("url",e);const t=(0,arcgisLayerUrl/* sanitizeUrlWithLayerId */.HZ)({layer:this,url:e,nonStandardUrlAllowed:!0,logger:Logger/* default */.A.getLogger(this)});this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)}writeUrl(e,t,i,r){(0,arcgisLayerUrl/* writeUrlWithLayerId */.LS)(this,e,null,t,r)}readVersion(e,t){return (0,featureLayerUtils/* readVersion */.$4)(t)}get isUrlHostModified(){const{loaded:e,url:t,_isUrlHostModified:i}=this;if(i)return!0;if(!e||!t)return!1;if(this.originIdOf("url")<PropertyOrigin/* OriginId */.Gr.USER)return!1;const r=this.sourceJSON?.preferredHost;if(!r)return!1;if(!(0,urlUtils/* hasSameOrigin */.FX)(t,`https://${r}`,!0))return!1;for(let s=PropertyOrigin/* OriginId */.Gr.USER-1;s>=PropertyOrigin/* OriginId */.Gr.PORTAL_ITEM;s--){const e=this.getAtOrigin("url",(0,PropertyOrigin/* idToName */.OL)(s));if(e)return!(0,urlUtils/* hasSameOrigin */.FX)(t,e,!0)}return!1}applyPreferredHost(e){const{url:t,portalItem:i}=this;if(!t||!(0,layerUtils/* isPreferredUrlApplicable */.OP)(i))return;const r=(0,layerUtils/* getPreferredUrl */.$x)();r&&this._isUrlHostModificationEnabled&&(this._set("url",r),this._isUrlHostModified=!0,i&&(0,layerUtils/* applyPreferredHostToPortalItem */.Gh)(i,(0,layerUtils/* getPreferredHost */.G$)()))}applyHostFromPortalItem(){const{url:e,portalItem:t}=this;if(!e||this.originIdOf("url")===PropertyOrigin/* OriginId */.Gr.USER||!t?.url||!(0,layerUtils/* isPreferredUrlApplicable */.OP)(t)||!(0,portalItemUtils/* hasTypeKeyword */.Y)(t,portalItemUtils/* typeKeyword */.mm.HOSTED_SERVICE)||(0,urlUtils/* hasSameOrigin */.FX)(e,t.url,!0)||!this._isUrlHostModificationEnabled)return;const i=(0,urlUtils/* getHost */.Ln)(t.url);this._set("url",(0,urlUtils/* changeHost */.hf)(e,i)),this._isUrlHostModified=!0}};return (0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"authenticationTriggerEvent",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"copyrightText"}}}}})],L.prototype,"copyright",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{read:!1,origins:{service:{read:{source:["advancedQueryCapabilities","allowGeometryUpdates","allowUpdateWithoutMValues","archivingInfo","capabilities","datesInUnknownTimezone","hasAttachments","hasM","hasZ","isDataBranchVersioned","isDataVersioned","maxRecordCount","maxRecordCountFactor","maxUniqueIDCount","ownershipBasedAccessControlForFeatures","standardMaxRecordCount","supportedQueryFormats","supportsAdvancedQueries","supportsApplyEditsWithGlobalIds","supportsAttachmentsByUploadId","supportsAttachmentsResizing","supportsCalculate","supportsCoordinatesQuantization","supportsExceedsLimitStatistics","supportsFieldDescriptionProperty","supportsQuantizationEditMode","supportsRollbackOnFailureParameter","supportsStatistics","supportsTruncate","supportsValidateSql","tileMaxRecordCount","useStandardizedQueries"]}}}}})],L.prototype,"capabilities",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","capabilities")],L.prototype,"readCapabilitiesFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("dateFieldsTimeReference"))],L.prototype,"dateFieldsTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"datesInUnknownTimezone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],L.prototype,"definitionExpression",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{origins:{service:{read:{source:"displayField"}}}}})],L.prototype,"displayField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:l})],L.prototype,"editFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"editingInfo",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("editingInfo")],L.prototype,"readEditingInfo",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"effectiveCapabilities",null),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"effectiveEditingEnabled",null),(0,tslib_es6._)([(0,property/* property */.MZ)((()=>{const e=(0,lang/* clone */.o8)(commonProperties/* elevationInfo */.Yj),t=e.json.origins;return t["web-map"]={read:!1,write:!1},t["portal-item"]={read:!1,write:!1},e})())],L.prototype,"elevationInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"fieldsIndex",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:LayerFloorInfo/* default */.A,json:{name:"layerDefinition.floorInfo",write:{layerContainerTypes:layerContainerType/* excludeTables */.K}}})],L.prototype,"floorInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Extent/* default */.A,json:{origins:{service:{read:{source:"extent"}}}}})],L.prototype,"fullExtent",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"gdbVersion",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:a,json:{read:{source:"geometryProperties"}}})],L.prototype,"geometryFieldsInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:["point","polygon","polyline","multipoint","multipatch","mesh"],json:{origins:{service:{read:featureLayerUtils/* geometryTypeKebabDict */.iX.read}}}})],L.prototype,"geometryType",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],L.prototype,"globalIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","globalIdField",["globalIdField","fields"])],L.prototype,"readGlobalIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"hasFullEditingRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],L.prototype,"hasM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"hasUpdateItemRestrictions",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean,json:{origins:{service:{read:!0}}}})],L.prototype,"hasZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,type:HeightModelInfo/* default */.A})],L.prototype,"heightModelInfo",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Date})],L.prototype,"historicMoment",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Collection/* default */.A.ofType(p),readOnly:!0})],L.prototype,"indexes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"isTable",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","isTable",["type"])],L.prototype,"readIsTableFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Number,json:{origins:{service:{read:{source:"id"}},"portal-item":{read:!1,write:{target:"id"}}},read:!1}})],L.prototype,"layerId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* maxScale */.hG)],L.prototype,"maxScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","maxScale",["maxScale","effectiveMaxScale"])],L.prototype,"readMaxScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* minScale */.hn)],L.prototype,"minScale",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","minScale",["minScale","effectiveMinScale"])],L.prototype,"readMinScale",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String})],L.prototype,"objectIdField",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","objectIdField",["objectIdField","fields"])],L.prototype,"readObjectIdFieldFromService",null),(0,tslib_es6._)([(0,property/* property */.MZ)((0,timeZoneUtils/* timeZoneProperty */.P6)("preferredTimeReference"))],L.prototype,"preferredTimeZone",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[Relationship/* default */.A],readOnly:!0})],L.prototype,"relationships",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"returnM",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:Boolean})],L.prototype,"returnZ",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0,json:{write:!1}})],L.prototype,"serverGens",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"serviceDefinitionExpression",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","serviceDefinitionExpression",["definitionQuery","definitionExpression"])],L.prototype,"readServiceDefinitionExpression",null),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],L.prototype,"serviceItemId",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)()],L.prototype,"sourceJSON",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:SpatialReference/* default */.A,json:{origins:{service:{read:{source:"extent.spatialReference"}}}}})],L.prototype,"spatialReference",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,readOnly:!0,json:{origins:{service:{read:!0}}}})],L.prototype,"subtypeField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[n],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],L.prototype,"subtypes",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:String,json:{read:{source:"timeInfo.trackIdField"}}})],L.prototype,"trackIdField",void 0),(0,tslib_es6._)([(0,property/* property */.MZ)({type:[String],readOnly:!0})],L.prototype,"uniqueIdFields",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","uniqueIdFields",["uniqueIdInfo.OIDFieldContainsHashValue","uniqueIdInfo.fields"])],L.prototype,"readUniqueIdFields",null),(0,tslib_es6._)([(0,property/* property */.MZ)(commonProperties/* url */.OZ)],L.prototype,"url",null),(0,tslib_es6._)([(0,writer/* writer */.K)("url")],L.prototype,"writeUrl",null),(0,tslib_es6._)([(0,property/* property */.MZ)({json:{origins:{service:{read:!0}},read:!1}})],L.prototype,"version",void 0),(0,tslib_es6._)([(0,reader/* reader */.w)("service","version",["currentVersion","capabilities","drawingInfo","hasAttachments","htmlPopupType","relationships","timeInfo","typeIdField","types"])],L.prototype,"readVersion",null),(0,tslib_es6._)([(0,property/* property */.MZ)({readOnly:!0})],L.prototype,"isUrlHostModified",null),L=(0,tslib_es6._)([(0,subclass/* subclass */.$)("esri.layers.mixins.FeatureLayerBase")],L),L};


/***/ }),

/***/ 52202:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25376);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(48524);
/* harmony import */ var _domains_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(83611);
/* harmony import */ var _FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(84700);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)){constructor(o){super(o),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(o){const r={};for(const t of Object.keys(o))r[t]=(0,_domains_js__WEBPACK_IMPORTED_MODULE_10__/* .fromJSON */ .rS)(o[t]);return r}writeDomains(o,r){const t={};for(const s of Object.keys(o))o[s]&&(t[s]=o[s]?.toJSON());r.domains=t}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{write:!0}})],n.prototype,"domains",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_reader_js__WEBPACK_IMPORTED_MODULE_7__/* .reader */ .w)("domains")],n.prototype,"readDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_writer_js__WEBPACK_IMPORTED_MODULE_9__/* .writer */ .K)("domains")],n.prototype,"writeDomains",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:[_FeatureTemplate_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A],json:{write:!0}})],n.prototype,"templates",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.FeatureType")],n);


/***/ }),

/***/ 76591:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54192);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var l;let i=l=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A{constructor(o){super(o),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A}clone(){return new l({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({type:String,json:{write:{isRequired:!0}}})],i.prototype,"floorField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_3__/* .property */ .MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_7__/* .subclass */ .$)("esri.layers.support.LayerFloorInfo")],i);


/***/ }),

/***/ 46148:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14755);
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22395);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80861);
/* harmony import */ var _core_RandomLCG_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(67498);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const a=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),l=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_2__/* .JSONMap */ .J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let n=class extends(_core_Clonable_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.ClonableMixin(_core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)){constructor(o){super(o),this.cardinality=null,this.catalogId=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:a.read,write:a.write}})],n.prototype,"cardinality",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{name:"catalogID"}})],n.prototype,"catalogId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"composite",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"id",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"keyField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"keyFieldInRelationshipTable",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"name",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"relatedTableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:!0,write:!0}})],n.prototype,"relationshipTableId",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_4__/* .property */ .MZ)({json:{read:l.read,write:l.write}})],n.prototype,"role",void 0),n=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.Relationship")],n);


/***/ }),

/***/ 52884:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82392);
/* harmony import */ var _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93741);
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3223);
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3132);
/* harmony import */ var _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54192);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81482);
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6273);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80861);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26325);
/* harmony import */ var _fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(46227);
/* harmony import */ var _support_loadArcade_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(68717);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const d="relationships/",p="expression/";let u=class extends _core_Accessor_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A{constructor(e){super(e),this._featureUtils=null,this.effectivePopupTemplate=null}get _arcadeTask(){if(this.expressionsUsedInTitle.length>0){return this._get("_arcadeTask")||(0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .createTask */ .UT)((()=>(0,_support_loadArcade_js__WEBPACK_IMPORTED_MODULE_10__/* .loadArcade */ .l)()))}return null}get featureUtilsPromise(){return this._get("featureUtilsPromise")??__webpack_require__.e(/* import() */ 79687).then(__webpack_require__.bind(__webpack_require__, 79687)).then((e=>this._featureUtils=e))}get calculatedExpressions(){const e=new _core_Collection_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A;if(!this.expressionsUsedInTitle.length)return e;if(!this._arcadeTask?.value){for(const t of this.expressionsUsedInTitle??[])e.push({name:t.name,invalid:!0});return e}for(const t of this.expressionsUsedInTitle)try{const s=this._arcadeTask.value.arcade.parseScript(t.expression,["$layer","$map","$datastore"]);if(s.isAsync){e.push({name:t.name,invalid:!0});break}e.push({name:t.name,syntax:s,invalid:!1,func:this._arcadeTask.value.arcade.compileScript(s,{vars:{$feature:"any"}})})}catch{e.push({name:t.name,invalid:!0});break}return e}get expressionsUsedInTitle(){let e=this.effectivePopupTemplate?.title??"";return"string"!=typeof e?[]:(e=e.toLowerCase(),this.effectivePopupTemplate?.expressionInfos?.filter((t=>e.includes(`{expression/${t.name.toLowerCase()}}`)))??[])}get fieldInfoMap(){return this._featureUtils?this._createFieldInfoMap(this._featureUtils.getAllFieldInfos(this.effectivePopupTemplate)):null}get hasBadExpressions(){return this.calculatedExpressions.some((e=>!0===e.invalid))}get requiredFields(){const e=new Set;if(this._arcadeTask?.value&&!this.hasBadExpressions)for(const s of this.calculatedExpressions?.toArray()??[])try{const t=this._arcadeTask.value.arcade.extractFieldLiterals(s.syntax);for(const s of t){const t=s.split("."),i=this.fieldsIndex.get(t.at(-1)??"");i&&e.add(i.name)}}catch{}const t=this._extractFieldNames(this.workingTitle);for(const s of t){const t=this.fieldsIndex.get(s);t&&e.add(t.name)}return null!=this.objectIdField&&e.add(this.objectIdField),e}get titleFromDisplayField(){let e="";return this.displayField&&(e=this.fieldsIndex.get(this.displayField)?.name??""),e||(e=this.fieldsIndex.get(this.objectIdField)?.name??""),e?`{${e}}`:""}get workingTitle(){const e=this.effectivePopupTemplate?this.effectivePopupTemplate.title:"";return""===e||null==e||this.hasBadExpressions||"string"!=typeof e?this.titleFromDisplayField:e}async getTitle(e,t,s){const i=t.getObjectId()??t.attributes[e.objectIdField];return(await this.getTitles(e,[t],s)).get(i)??""}async getTitles(e,t,s){const i=new Map,r=s?.timeZone??"system";try{const[{substituteFieldsInLinksAndAttributes:a}]=await Promise.all([this.featureUtilsPromise,this._arcadeTask?.promise]);s?.fetchMissingFields&&(t=await this._checkAndReQueryGraphics(e,t));const{fieldInfoMap:o,workingTitle:l}=this,n=l&&o;t.forEach((t=>{const s=t.getObjectId()??t.attributes[e.objectIdField],c=n?a({attributes:t.attributes,expressionAttributes:null,fieldInfoMap:o,globalAttributes:this._createFormattedAttributes(e,t,r).global,layer:e,text:l}):"";i.set(s,c)}))}catch{}return i}async _checkAndReQueryGraphics(e,t){const i=t.map((t=>t.getObjectId()??t.attributes[e.objectIdField])).filter(_core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .isSome */ .Ru);if(i.length!==t.length)return t;if(t.some((e=>!(0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .featureHasFields */ .Kl)(e,this.requiredFields)))){const s=e.createQuery();s.where="1=1",s.outFields=[...this.requiredFields],s.objectIds=i;const r=await e.queryFeatures(s);if(r?.features.length===t.length)return r.features}return t}_createFieldInfoMap(e){const t=new Map;if(!e)return t;for(const s of e){if(!s.fieldName)continue;const e=this.fieldsIndex.get(s.fieldName),i=e?.name??s.fieldName;s.fieldName=i,t.set(i.toLowerCase(),s)}return t}_createFormattedAttributes(e,t,s="system"){const i=this.effectivePopupTemplate?.fieldInfos??[],r={};if(!this._featureUtils)return{};if(!this.hasBadExpressions&&this.calculatedExpressions.length>0&&this._arcadeTask?.value){const s=this._arcadeTask.value.Feature.createFromGraphicLikeObject(t.geometry,t.attributes,e,null);for(const e of this.calculatedExpressions)try{r[`expression/${e.name}`]=e.func({vars:{$feature:s}})}catch{}}const a={...t.attributes,...r};return{global:this._featureUtils.formatAttributes({fieldInfos:i,attributes:a,graphic:t,timeZone:s,layer:e,fieldInfoMap:this.fieldInfoMap}),content:[]}}_extractFieldNames(e){return (0,_fieldUtils_js__WEBPACK_IMPORTED_MODULE_9__/* .extractSubstitutionTemplatesFromString */ .nw)(e).filter((e=>!(0===e.indexOf(d)||0===e.indexOf(p))))}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"_arcadeTask",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"_featureUtils",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"featureUtilsPromise",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)({readOnly:!0})],u.prototype,"calculatedExpressions",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"displayField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"effectivePopupTemplate",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"expressionsUsedInTitle",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fieldsIndex",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fieldInfoMap",null),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"fields",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"objectIdField",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_5__/* .property */ .MZ)()],u.prototype,"requiredFields",null),u=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_8__/* .subclass */ .$)("esri.layers.support.TitleCreator")],u);


/***/ }),

/***/ 52360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fm: () => (/* binding */ s),
/* harmony export */   Hz: () => (/* binding */ d),
/* harmony export */   JQ: () => (/* binding */ p),
/* harmony export */   JZ: () => (/* binding */ h),
/* harmony export */   ND: () => (/* binding */ F),
/* harmony export */   R_: () => (/* binding */ u),
/* harmony export */   U9: () => (/* binding */ a),
/* harmony export */   fu: () => (/* binding */ n),
/* harmony export */   nr: () => (/* binding */ m),
/* harmony export */   oF: () => (/* binding */ r),
/* harmony export */   rq: () => (/* binding */ c),
/* harmony export */   z$: () => (/* binding */ f)
/* harmony export */ });
/* unused harmony exports getFilePickerAcceptType, getFilenameFormatId, getFormatDescription, getFormatExtensions, getFormatId, getFormatMimeType, getGltfFormatId, getSupportedExtensions */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=[["binary","application/octet-stream","bin",""]];function n(t,n){return null!=L(n.name,t?.supportedFormats??[])}function r(t,n){if(!t)return!1;const r=c(n,t.supportedFormats??[]);return null!=r&&t.editFormats.includes(r)}function o(t){return w(t?.supportedFormats??[]).flatMap(j).map((t=>`.${t}`))}function e(t){const n={};for(const r of w(t?.supportedFormats??[])){const[t,o]=y(r).split(";"),e=t.trim().toLowerCase(),u=j(r).map((t=>`.${t}`));n[e]??=[],n[e].push(...u)}return{description:"3D Models",accept:n}}function u(t,n){return g(C(t,n))}function i(t,n){return g(L(t,n))}function s(t,n){return y(b(t,n))}function c(t,n){return i(t.name,n)??u(t.type,n)}function f(t,n,r){return u(t,r)??i(n,r)}function a({supportedFormats:t}){return f("model/gltf-binary","glb",t)}function p(t){const n=a(t);return null!=n&&t.editFormats.includes(n)}function l({supportedFormats:t}){return f("model/gltf+json","gltf",t)}function d(t){if(!t)return null;const n=a(t),r=l(t);let o=null;for(const e of t.queryFormats){if(e===n)return e;e===r&&(o=e)}return o}function m({supportedFormats:t}){return f("application/esri3do-SR_world","wld",t)}function F({supportedFormats:t}){return f("application/esri3do-SR_prj","prj",t)}function w(n){return[...t,...n]}function b(t,n){return w(n).find((n=>g(n)===t))}function C(t,n){const r=t.toLowerCase();return w(n).find((t=>y(t)===r))}function L(t,n){const r=t.toLowerCase();return w(n).find((t=>j(t).some((t=>r.endsWith(t)))))}function g(t){return t?.[0]}function y(t){return t?.[1].toLowerCase()}function j(t){return t?.[2].split(",").map((t=>t.toLowerCase()))??[]}function M(t){return t?.[3]}function h(t){return t.tables?.find((t=>"assetMaps"===t.role))}


/***/ }),

/***/ 29093:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ c),
  d: () => (/* binding */ A)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(6273);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var arcgisLayerUrl = __webpack_require__(63457);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/layers/support/infoFor3D.js
var infoFor3D = __webpack_require__(52360);
;// ./node_modules/@arcgis/core/rest/support/jsonUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function jsonUtils_n(n,r,u){return!!t(n,r,u)}function r(n,r,u){return t(n,r,u)}function t(n,r,t){return n&&n.hasOwnProperty(r)?n[r]:t}

;// ./node_modules/@arcgis/core/layers/support/serviceCapabilitiesUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const o={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function u(t){const s=t?.supportedSpatialAggregationStatistics?.map((t=>t.toLowerCase()));return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function n(t,s){const e=t?.supportedOperationsWithCacheHint?.map((t=>t.toLowerCase()));return!!e?.includes(s.toLowerCase())}function i(t){const s=t?.supportedStatisticTypes?.map((t=>t.toLowerCase()));return{count:!!s?.includes("count"),sum:!!s?.includes("sum"),min:!!s?.includes("min"),max:!!s?.includes("max"),avg:!!s?.includes("avg"),var:!!s?.includes("var"),stddev:!!s?.includes("stddev"),percentileContinuous:!!s?.includes("percentile_cont"),percentileDiscrete:!!s?.includes("percentile_disc"),envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function a(t){const s=t?.supportedNormalizationTypes?.map((t=>t.toLowerCase()));return{field:!!s?.includes("field"),log:!!s?.includes("log"),naturalLog:!!s?.includes("naturallog"),percentOfTotal:!!s?.includes("percentoftotal"),squareRoot:!!s?.includes("squareroot")}}function c(t,s){return{analytics:l(t),attachment:d(t),data:y(t),metadata:m(t),operations:g(t.capabilities,t,s),query:C(t,s),queryAttributeBins:S(t),queryRelated:v(t),queryTopFeatures:h(t),editing:f(t)}}function l(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryAnalytics")}}function d(t){const s=t.attachmentProperties,e={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:n(t.advancedQueryCapabilities,"queryAttachments"),supportsOrderByFields:jsonUtils_n(t.advancedQueryCapabilities,"supportsQueryAttachmentOrderByFields",!1),supportsResize:jsonUtils_n(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach((t=>{const s=o[t.name];s&&(e[s]=!!t.isEnabled)})),e}function y(t){return{isVersioned:jsonUtils_n(t,"isDataVersioned",!1),isBranchVersioned:jsonUtils_n(t,"isDataBranchVersioned",!1),supportsAttachment:jsonUtils_n(t,"hasAttachments",!1),supportsM:jsonUtils_n(t,"hasM",!1),supportsZ:jsonUtils_n(t,"hasZ",!1)}}function m(t){return{supportsAdvancedFieldProperties:jsonUtils_n(t,"supportsFieldDescriptionProperty",!1)}}function g(t,e,r){const o=t?.toLowerCase().split(",").map((t=>t.trim()))??[],u=r?(0,arcgisLayerUrl/* parse */.qg)(r):null,n=o.includes("MapServer"===u?.serverType?"data":"query"),i=o.includes("editing")&&!e.datesInUnknownTimezone&&!(!0===e.uniqueIdInfo?.OIDFieldContainsHashValue);let a=i&&o.includes("create"),c=i&&o.includes("delete"),l=i&&o.includes("update");const d=o.includes("changetracking"),y=e.advancedQueryCapabilities;return i&&!(a||c||l)&&(a=c=l=!0),{supportsCalculate:jsonUtils_n(e,"supportsCalculate",!1),supportsTruncate:jsonUtils_n(e,"supportsTruncate",!1),supportsValidateSql:jsonUtils_n(e,"supportsValidateSql",!1),supportsAdd:a,supportsDelete:c,supportsEditing:i,supportsChangeTracking:d,supportsQuery:n,supportsQueryAnalytics:jsonUtils_n(y,"supportsQueryAnalytic",!1),supportsQueryAttachments:jsonUtils_n(y,"supportsQueryAttachments",!1),supportsQueryBins:jsonUtils_n(y,"supportsQueryBins",!1)||!!e.queryBinsCapabilities,supportsQueryTopFeatures:jsonUtils_n(y,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:jsonUtils_n(e,"supportsAttachmentsResizing",!1),supportsSync:o.includes("sync"),supportsUpdate:l,supportsExceedsLimitStatistics:jsonUtils_n(e,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:jsonUtils_n(e,"supportsAsyncConvert3D",!1)}}function C(s,o){const i=s.advancedQueryCapabilities,a=s.ownershipBasedAccessControlForFeatures,c=s.archivingInfo,l=s.currentVersion,d=o?.includes("MapServer"),y=!d||l>=(0,has/* default */.A)("mapserver-pbf-version-support"),m=(0,arcgisLayerUrl/* isHostedAgolService */.Wo)(o),g=new Set((s.supportedQueryFormats??"").split(",").map((t=>t.toLowerCase().trim())));return{maxRecordCount:r(s,"maxRecordCount",void 0),maxRecordCountFactor:r(s,"maxRecordCountFactor",void 0),maxUniqueIDCount:r(s,"maxUniqueIDCount",void 0),standardMaxRecordCount:r(s,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:u(i),supportsCacheHint:jsonUtils_n(i,"supportsQueryWithCacheHint",!1)||n(i,"query"),supportsCentroid:jsonUtils_n(i,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:m,supportsCurrentUser:jsonUtils_n(i,"supportsCurrentUserQueries",!1),supportsDefaultSpatialReference:jsonUtils_n(i,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:jsonUtils_n(i,"supportsDisjointSpatialRel",!1),supportsDistance:jsonUtils_n(i,"supportsQueryWithDistance",!1),supportsDistinct:jsonUtils_n(i,"supportsDistinct",s.supportsAdvancedQueries),supportsExtent:jsonUtils_n(i,"supportsReturningQueryExtent",!1),supportsFormatPBF:y&&g.has("pbf"),supportsFullTextSearch:jsonUtils_n(i,"supportsFullTextSearch",!1),supportsGeometryProperties:jsonUtils_n(i,"supportsReturningGeometryProperties",!1),supportsHavingClause:jsonUtils_n(i,"supportsHavingClause",!1),supportsHistoricMoment:jsonUtils_n(c,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:jsonUtils_n(i,"supportsMaxRecordCountFactor",!1),supportsOrderBy:jsonUtils_n(i,"supportsOrderBy",s.supportsAdvancedQueries),supportsPagination:jsonUtils_n(i,"supportsPagination",!1),supportsPaginationOnAggregatedQueries:jsonUtils_n(i,"supportsPaginationOnAggregatedQueries",!1),supportsPercentileStatistics:jsonUtils_n(i,"supportsPercentileStatistics",!1),supportsQuantization:jsonUtils_n(s,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:jsonUtils_n(s,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:jsonUtils_n(a,"allowAnonymousToQuery",!0),supportsQueryByOthers:jsonUtils_n(a,"allowOthersToQuery",!0),supportsQueryGeometry:jsonUtils_n(s,"supportsReturningQueryGeometry",!1),supportsResultType:jsonUtils_n(i,"supportsQueryWithResultType",!1),supportsReturnMesh:!!(0,infoFor3D/* getGltfQueryFormat */.Hz)(s.infoFor3D),supportsSpatialAggregationStatistics:jsonUtils_n(i,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:jsonUtils_n(i,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:jsonUtils_n(s,"useStandardizedQueries",!1),supportsStatistics:jsonUtils_n(i,"supportsStatistics",s.supportsStatistics),supportsTopFeaturesQuery:jsonUtils_n(i,"supportsTopFeaturesQuery",!1),supportsTrueCurve:jsonUtils_n(i,"supportsTrueCurve",!1),tileMaxRecordCount:r(s,"tileMaxRecordCount",void 0)}}function v(t){const s=t.advancedQueryCapabilities,e=jsonUtils_n(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:jsonUtils_n(s,"supportsQueryRelatedPagination",!1),supportsCount:e,supportsOrderBy:e,supportsCacheHint:n(s,"queryRelated")}}function h(t){return{supportsCacheHint:n(t.advancedQueryCapabilities,"queryTopFilter")}}function S(t){const s=t?t.queryBinsCapabilities:void 0;return{supportsDate:jsonUtils_n(s,"supportsDateBin",!1),supportsFixedInterval:jsonUtils_n(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:jsonUtils_n(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:jsonUtils_n(s,"supportsFixedBoundariesBin",!1),supportsStackBy:jsonUtils_n(s,"supportsStackBy",!1),supportsSplitBy:jsonUtils_n(s,"supportsSplitBy",!1),supportsSnapToData:jsonUtils_n(s,"supportsSnapToData",!1),supportsReturnFullIntervalBin:jsonUtils_n(s,"supportsReturnFullIntervalBin",!1),supportsFirstDayOfWeek:jsonUtils_n(s,"supportsFirstDayOfWeek",!1),supportsNormalization:jsonUtils_n(s,"supportsNormalization",!1),supportedStatistics:i(s),supportedNormalizationTypes:a(s)}}function f(t){const s=t.ownershipBasedAccessControlForFeatures,e=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:jsonUtils_n(t,"allowGeometryUpdates",!0),supportsGlobalId:jsonUtils_n(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:jsonUtils_n(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:jsonUtils_n(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:jsonUtils_n(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:jsonUtils_n(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:jsonUtils_n(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:jsonUtils_n(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:jsonUtils_n(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:jsonUtils_n(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:jsonUtils_n(e,"supportsAsyncApplyEdits",!1),zDefault:r(t,"zDefault",void 0)}}function A(t){return{operations:{supportsAppend:jsonUtils_n(t,"supportsAppend",!1),supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1,supportsExportClip:jsonUtils_n(t,"supportsExportClip",!1),supportsExportFrameset:jsonUtils_n(t,"supportsExportFrameset",!1),supportsMensuration:jsonUtils_n(t,"supportsMensuration",!1),supportsPreviews:jsonUtils_n(t,"supportsPreviews",!1),supportsUpdate:jsonUtils_n(t,"supportsUpdate",!1)}}}


/***/ }),

/***/ 23123:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63457);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const r=[];function t(t,e){if((0,_arcgisLayerUrl_js__WEBPACK_IMPORTED_MODULE_0__/* .isHostedAgolService */ .Wo)(t.url??""))return!0;const{wkid:o}=e;for(const d of r){if((t.version??0)>=d[0])return!0;if("function"==typeof d[1]&&(d[1]=d[1]()),d[1].has(o))return!1}return!0}r.push([10.91,()=>{const d=new Set([9709,9716,9741,9761,9766]);for(let r=9712;r<=9713;r++)d.add(r);for(let r=9748;r<=9749;r++)d.add(r);for(let r=20904;r<=20932;r++)d.add(r);for(let r=21004;r<=21032;r++)d.add(r);for(let r=21207;r<=21264;r++)d.add(r);for(let r=21307;r<=21364;r++)d.add(r);for(let r=23301;r<=23333;r++)d.add(r);for(let r=102759;r<=102760;r++)d.add(r);for(let r=102934;r<=102955;r++)d.add(r);return d}]),r.push([10.9,()=>{const d=new Set([9300,9354,9364,9367,9373,9377,9387,9456,9473,9498,9678,9680,29874,103599,103872,104028]);for(let r=9356;r<=9360;r++)d.add(r);for(let r=9404;r<=9407;r++)d.add(r);for(let r=9476;r<=9482;r++)d.add(r);for(let r=9487;r<=9494;r++)d.add(r);for(let r=9697;r<=9699;r++)d.add(r);return d}]),r.push([10.81,()=>{const d=new Set([9265,9333,103598,103699]);for(let r=9248;r<=9254;r++)d.add(r);for(let r=9271;r<=9273;r++)d.add(r);for(let r=9284;r<=9285;r++)d.add(r);for(let r=21453;r<=21463;r++)d.add(r);return d}]),r.push([10.8,()=>{const d=new Set([8088,8395,8428,8433,8531,8687,8692,8694,8699,8900,9003,9006,9009,9012,9017,9191]);for(let r=8035;r<=8036;r++)d.add(r);for(let r=8455;r<=8456;r++)d.add(r);for(let r=8518;r<=8529;r++)d.add(r);for(let r=8533;r<=8536;r++)d.add(r);for(let r=8538;r<=8540;r++)d.add(r);for(let r=8677;r<=8679;r++)d.add(r);for(let r=8902;r<=8903;r++)d.add(r);for(let r=8907;r<=8910;r++)d.add(r);for(let r=8949;r<=8951;r++)d.add(r);for(let r=8972;r<=8987;r++)d.add(r);for(let r=9039;r<=9040;r++)d.add(r);for(let r=9068;r<=9069;r++)d.add(r);for(let r=9140;r<=9141;r++)d.add(r);for(let r=9148;r<=9150;r++)d.add(r);for(let r=9153;r<=9159;r++)d.add(r);for(let r=9205;r<=9218;r++)d.add(r);for(let r=9221;r<=9222;r++)d.add(r);for(let r=54098;r<=54101;r++)d.add(r);return d}]),r.push([10.71,()=>{const d=new Set([6316]);for(let r=8351;r<=8353;r++)d.add(r);for(let r=9294;r<=9297;r++)d.add(r);for(let r=22619;r<=22621;r++)d.add(r);for(let r=103586;r<=103594;r++)d.add(r);return d}]);


/***/ }),

/***/ 99650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   L: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3132);
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49175);
/* harmony import */ var _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97629);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
async function t(t,i,n){const s=t&&t.getAtOrigin&&t.getAtOrigin("renderer",i.origin);if(s&&"unique-value"===s.type&&s.styleOrigin){const a=await (0,_core_asyncUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .result */ .Ke)(s.populateFromStyle());if((0,_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .throwIfAborted */ .Te)(n),!1===a.ok){const e=a.error;i?.messages&&i.messages.push(new _core_Warning_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A("renderer:style-reference",`Failed to create unique value renderer from style reference: ${e.message}`,{error:e,context:i})),t.clear("renderer",i?.origin)}}}


/***/ }),

/***/ 29323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ i)
/* harmony export */ });
/* harmony import */ var _core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5262);
/* harmony import */ var _geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67488);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(n,e,t){if(null==n.hasM||n.hasZ)for(const i of e)for(const n of i)n.length>2&&(n[2]*=t)}function i(e,t,i){if(!e&&!t||!i)return;const s=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i);o(e,i,s),o(t,i,s)}function o(n,e,t){if(n)for(const i of n)s(i.geometry,e,t)}function s(i,o,s){if(!i?.spatialReference||(0,_geometry_support_spatialReferenceUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .equals */ .aI)(i.spatialReference,o))return;const f=(0,_core_unitUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .getMetersPerVerticalUnitForSR */ .G9)(i.spatialReference)/s;if(1!==f)if("x"in i)null!=i.z&&(i.z*=f);else if("rings"in i)t(i,i.rings,f);else if("paths"in i)t(i,i.paths,f);else if("points"in i&&(null==i.hasM||i.hasZ))for(const n of i.points)n.length>2&&(n[2]*=f)}


/***/ }),

/***/ 11378:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55792);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
function t(t,o,r){if(!r?.features||!r.hasZ)return;const f=(0,_geometry_support_zscale_js__WEBPACK_IMPORTED_MODULE_0__/* .getGeometryZScaler */ .N)(r.geometryType,o,t.outSpatialReference);if(null!=f)for(const e of r.features)f(e.geometry)}


/***/ }),

/***/ 6893:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TA: () => (/* binding */ t),
/* harmony export */   We: () => (/* binding */ o),
/* harmony export */   Z3: () => (/* binding */ n),
/* harmony export */   ZJ: () => (/* binding */ i),
/* harmony export */   w5: () => (/* binding */ c)
/* harmony export */ });
/* unused harmony exports versionCollection, versionCollectionCount */
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38116);
/* harmony import */ var _core_uuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1874);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
const t=(0,_core_uuid_js__WEBPACK_IMPORTED_MODULE_1__/* .generateLowercaseBracedUUID */ .vD)(),n=new Map,s=new Map,a=new Map;async function o(r,t,s){if(!r||!s)return!1;if(!t)return!0;const a=new URL(r).host;let o=n.get(a);if(!o){const t=r.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,"");o=(await (0,_request_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(t,{responseType:"json",query:{f:"json"}})).data.defaultVersionName}return o===t}async function i(e,r,n=!1){if(!e||!r)return!0;const a=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),o=s.get(a)?.entries();if(o)for(const[s,i]of o)if(i.name===r){const e=!i.stack?.hasForwardEdits();if(!e&&n){const[{deleteForwardEdits:e},{default:r}]=await Promise.all([__webpack_require__.e(/* import() */ 71611).then(__webpack_require__.bind(__webpack_require__, 71611)),__webpack_require__.e(/* import() */ 1767).then(__webpack_require__.bind(__webpack_require__, 1767))]),n=await e(a,s,new r({sessionId:t,moment:i.moment}));return n.success&&i.stack?.clearForwardEdits(),n.success}return e}return!0}function c(e,r){if(!e)return!1;const t=e.replace(/\/FeatureServer/i,"/VersionManagementServer").replace(/\/\d*$/,""),n=s.get(t)?.entries();if(n)for(const[s,a]of n)if(a.name===r){return"edit"===a.lockType}return!1}


/***/ }),

/***/ 29759:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ A)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.33/esri/copyright.txt for details.
*/
var A;!function(A){A[A.SAVE=0]="SAVE",A[A.SAVE_AS=1]="SAVE_AS"}(A||(A={}));


/***/ })

};
;