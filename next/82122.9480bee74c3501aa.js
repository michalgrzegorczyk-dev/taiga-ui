(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[82122],{82122:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiPrimitiveTextfieldModule:()=>Te});var i=n(88692),o=n(69900),a=n(91795),u=n(64206),r=n(78129),l=n(20995),c=n(89570),d=n(64537);let s=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[o.u5,i.ez,u.Lx,u.mG,r.TuiModeModule,l.TuiAccordionModule]}),t})(),p=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({}),t})();var m=n(77788),f=n(75695),h=n(82387),g=n(98204),x=n(57750),y=n(54218),v=n(16406),C=n(15800),T=n(63060),P=n(62733),b=n(64374),M=n(6707),V=n(68874),w=n(10200),Z=n(88494),_=n(3729),A=n(44998),U=n(89437),N=n(87205),H=n(79121),J=n(44124),I=n(66596),O=n(34880),L=n(84848),q=n(83074),F=n(10977),S=n(62840),Q=n(60404),k=n(43560),D=n(93525),G=n(38868),Y=n(4136),z=n(91030),B=n(67446),E=n(29070),K=n(54255),j=n(15491),R=n(2697);function W(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-svg",4),d.NdJ("click",(function(){d.CHM(e);const t=d.oxw();return d.KtG(t.togglePasswordVisibility())})),d.qZA()}if(2&e){const e=d.oxw(),t=d.MAs(6);d.Q6J("src",e.icon)("tuiHint",t)}}function X(e,t){if(1&e&&d._uU(0),2&e){const e=d.oxw();d.Oqu(e.hint)}}const $=["*"];let ee=(()=>{var e;class t extends Y.AbstractTuiControl{constructor(e,t){super(e,t),this.isPasswordHidden=!0}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var e;return!(null===(e=this.textfield)||void 0===e||!e.focused)}get icon(){return this.isPasswordHidden?"tuiIconEyeLarge":"tuiIconEyeOffLarge"}get hint(){return this.isPasswordHidden?"Show password":"Hide password"}get inputType(){return this.isPasswordHidden?"password":"text"}onFocused(e){this.updateFocused(e)}togglePasswordVisibility(){this.isPasswordHidden=!this.isPasswordHidden}getFallbackValue(){return""}}return(e=t).ɵfac=function(t){return new(t||e)(d.Y36(o.a5,10),d.Y36(d.sBO))},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(e,t){if(1&e&&d.Gf(r.TuiPrimitiveTextfieldComponent,5),2&e){let e;d.iGM(e=d.CRH())&&(t.textfield=e.first)}},features:[d.qOj],ngContentSelectors:$,decls:7,vars:7,consts:[[3,"disabled","focusable","invalid","readOnly","tuiTextfieldIcon","value","valueChange","focusedChange"],["tuiTextfield","",3,"type"],["iconContent",""],["hintContent",""],["appearance","icon","tuiWrapper","",1,"icon",3,"src","tuiHint","click"]],template:function(e,t){if(1&e&&(d.F$t(),d.TgZ(0,"tui-primitive-textfield",0),d.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),d.Hsn(1),d._UZ(2,"input",1),d.qZA(),d.YNc(3,W,1,2,"ng-template",null,2,d.W1O),d.YNc(5,X,1,1,"ng-template",null,3,d.W1O)),2&e){const e=d.MAs(4);d.Q6J("disabled",t.disabled)("focusable",t.focusable)("invalid",t.computedInvalid)("readOnly",t.readOnly)("tuiTextfieldIcon",e)("value",t.value),d.xp6(2),d.Q6J("type",t.inputType)}},dependencies:[T.y,P.B,z.M,Z.A,O.P,B.D,E.x,K.t,j.D,R.o],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),t})();var te=n(88135);let ne=(()=>{var e;class t extends Y.AbstractTuiControl{constructor(e,t){super(e,t)}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){var e;return!(null===(e=this.textfield)||void 0===e||!e.focused)}onFocused(e){this.updateFocused(e)}getFallbackValue(){return""}}return(e=t).ɵfac=function(t){return new(t||e)(d.Y36(o.a5,10),d.Y36(d.sBO))},e.ɵcmp=d.Xpm({type:e,selectors:[["tui-primitive-textfield-example-2"]],viewQuery:function(e,t){if(1&e&&d.Gf(r.TuiPrimitiveTextfieldComponent,5),2&e){let e;d.iGM(e=d.CRH())&&(t.textfield=e.first)}},features:[d._Bn([(0,r.tuiTextfieldOptionsProvider)({iconCleaner:"tuiIconEdit2",hintOnDisabled:!0})]),d.qOj],decls:9,vars:5,consts:[["tuiTextfieldSize","m",1,"b-form",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["tuiLabel","Modified cleaner icon"],[3,"value","valueChange","focusedChange"],["tuiTextfield","","type","email"],["tuiLabel","Override modified cleaner icon",1,"tui-space_top-4"],["iconCleaner","tuiIconEdit2","tuiHintContent","Hint is shown for disabled control",3,"disabled","value","valueChange","focusedChange"]],template:function(e,t){1&e&&(d.TgZ(0,"form",0)(1,"label",1)(2,"tui-primitive-textfield",2),d.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),d._uU(3," Type an email "),d._UZ(4,"input",3),d.qZA()(),d.TgZ(5,"label",4)(6,"tui-primitive-textfield",5),d.NdJ("valueChange",(function(e){return t.value=e}))("focusedChange",(function(e){return t.onFocused(e)})),d._uU(7," Type an email "),d._UZ(8,"input",3),d.qZA()()()),2&e&&(d.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),d.xp6(2),d.Q6J("value",t.value),d.xp6(4),d.Q6J("disabled",!0)("value",t.value))},dependencies:[o._Y,o.JL,o.F,T.y,P.B,z.M,b.b,V.x,w.s,L.bZ,te.A],encapsulation:2,changeDetection:0}),t})();const ie=["interactiveContent"];function oe(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"p"),d._uU(1," PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. "),d.TgZ(2,"strong"),d._uU(3,"Does not work with Angular forms"),d.qZA()(),d.TgZ(4,"tui-doc-example",2)(5,"tui-notification",3),d._uU(6," Simplified version of "),d.TgZ(7,"a",4)(8,"code"),d._uU(9,"InputPassword"),d.qZA()()(),d.TgZ(10,"tui-primitive-textfield-example-1",5),d.NdJ("ngModelChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.password=t)})),d._uU(11," Type a password "),d.qZA()(),d.TgZ(12,"tui-doc-example",6)(13,"tui-notification",3),d._uU(14," If you need to set some attributes or listen to events on native "),d.TgZ(15,"code"),d._uU(16,"input"),d.qZA(),d._uU(17," , you can put it inside with "),d.TgZ(18,"code"),d._uU(19,"Textfield"),d.qZA(),d._uU(20," directive as shown below "),d.qZA(),d.TgZ(21,"tui-primitive-textfield-example-2",7),d.NdJ("ngModelChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.example2Value=t)})),d.qZA()()}if(2&e){const e=d.oxw();d.xp6(4),d.Q6J("content",e.example1),d.xp6(6),d.Q6J("ngModel",e.password),d.xp6(2),d.Q6J("content",e.example2),d.xp6(9),d.Q6J("ngModel",e.example2Value)}}function ae(e,t){if(1&e&&(d._UZ(0,"tui-avatar",22),d._uU(1)),2&e){const e=t.$implicit;d.Q6J("text",e),d.xp6(1),d.hij(" ",e," ")}}function ue(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-svg",23),d.NdJ("click",(function(){d.CHM(e);const t=d.oxw(2);return d.KtG(t.onClick())})),d.qZA()}}function re(e,t){1&e&&d._uU(0," Disabled state ")}function le(e,t){1&e&&d._uU(0," Native input allows inputting ")}function ce(e,t){1&e&&(d._uU(0," Pale text suggestion for input (e.g. HH:MM:SS for time). Use "),d.TgZ(1,"code"),d._uU(2,"tuiTextfieldFiller"),d.qZA(),d._uU(3," instead "))}function de(e,t){1&e&&(d._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of icon registered in "),d.TgZ(1,"a",24)(2,"code"),d._uU(3,"SvgService"),d.qZA()(),d.TgZ(4,"p"),d._uU(5," Requires you to import "),d.TgZ(6,"code"),d._uU(7,"TuiTextfieldControllerModule"),d.qZA()())}function se(e,t){1&e&&(d._uU(0," Uneditable text before value. For example, currency symbol in "),d.TgZ(1,"a",25)(2,"code"),d._uU(3,"InputNumber"),d.qZA()(),d._uU(4," . "))}function pe(e,t){1&e&&(d._uU(0," Uneditable text after value. For example, currency symbol in "),d.TgZ(1,"a",25)(2,"code"),d._uU(3,"InputNumber"),d.qZA()(),d._uU(4," . "))}function me(e,t){1&e&&d._uU(0," Component is read only ")}function fe(e,t){1&e&&d._uU(0," Invalid state ")}function he(e,t){1&e&&d._uU(0," Value ")}function ge(e,t){1&e&&d._uU(0," Custom align content by text-align ")}function xe(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"tui-doc-demo")(1,"tui-primitive-textfield",8),d.NdJ("valueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.value=t)})),d._uU(2," Component label "),d.qZA()(),d.YNc(3,ae,2,2,"ng-template",null,9,d.W1O),d.YNc(5,ue,1,0,"ng-template",null,10,d.W1O),d.TgZ(7,"tui-doc-documentation"),d.YNc(8,re,1,0,"ng-template",11),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.disabled=t)})),d.YNc(9,le,1,0,"ng-template",12),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.editable=t)})),d.YNc(10,ce,4,0,"ng-template",13),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.filler=t)})),d.YNc(11,de,8,0,"ng-template",14),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.selectedIcon=t)})),d.YNc(12,se,5,0,"ng-template",15),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.prefix=t)})),d.YNc(13,pe,5,0,"ng-template",16),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.postfix=t)})),d.YNc(14,me,1,0,"ng-template",17),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.readOnly=t)})),d.YNc(15,fe,1,0,"ng-template",18),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.invalid=t)})),d.YNc(16,he,1,0,"ng-template",19),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.value=t)})),d.qZA(),d._UZ(17,"hint-controller-documentation")(18,"textfield-controller-documentation")(19,"inherited-documentation"),d.TgZ(20,"tui-doc-documentation",20),d.YNc(21,ge,1,0,"ng-template",21),d.NdJ("documentationPropertyValueChange",(function(t){d.CHM(e);const n=d.oxw();return d.KtG(n.textAlign=t)})),d.qZA()}if(2&e){const e=d.oxw();d.xp6(1),d.Udp("text-align",e.textAlign),d.Q6J("disabled",e.disabled)("editable",e.editable)("filler",e.filler)("focusable",e.focusable)("invalid",e.invalid)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("readOnly",e.readOnly)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldFiller",e.filler)("tuiTextfieldIcon",e.iconContent)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldPostfix",e.postfix)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldSize",e.size)("value",e.value),d.xp6(7),d.Q6J("documentationPropertyValue",e.disabled),d.xp6(1),d.Q6J("documentationPropertyValue",e.editable),d.xp6(1),d.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.filler),d.xp6(1),d.Q6J("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.selectedIcon),d.xp6(1),d.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.prefix),d.xp6(1),d.Q6J("documentationPropertyDeprecated",!0)("documentationPropertyValue",e.postfix),d.xp6(1),d.Q6J("documentationPropertyValue",e.readOnly),d.xp6(1),d.Q6J("documentationPropertyValue",e.invalid),d.xp6(1),d.Q6J("documentationPropertyValue",e.value),d.xp6(5),d.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function ye(e,t){if(1&e&&(d.TgZ(0,"ol",26)(1,"li")(2,"p"),d._uU(3," Import "),d.TgZ(4,"code"),d._uU(5,"TuiPrimitiveTextfieldModule"),d.qZA(),d._uU(6," into a module where you want to use our component "),d.qZA(),d._UZ(7,"tui-doc-code",27),d.qZA(),d.TgZ(8,"li")(9,"p"),d._uU(10,"Add to the template:"),d.qZA(),d._UZ(11,"tui-doc-code",28),d.qZA()()),2&e){const e=d.oxw();d.xp6(7),d.Q6J("code",e.exampleModule),d.xp6(4),d.Q6J("code",e.exampleHtml)}}const ve="Bell";let Ce=(()=>{var e;class t extends x.O{constructor(){super(...arguments),this.example1={TypeScript:n.e(75945).then(n.t.bind(n,75945,17)),HTML:n.e(34943).then(n.t.bind(n,34943,17)),LESS:n.e(35047).then(n.t.bind(n,35047,17))},this.example2={TypeScript:n.e(74039).then(n.t.bind(n,74039,17)),HTML:n.e(80036).then(n.t.bind(n,80036,17))},this.exampleModule=n.e(67875).then(n.t.bind(n,67875,17)),this.exampleHtml=n.e(83057).then(n.t.bind(n,83057,17)),this.themes=["Taiga UI","Bootstrap","Material"],this.theme=this.themes[0],this.iconVariants=["","tuiIconSearchLarge","Interactive content"],this.selectedIcon=this.iconVariants[0],this.iconLeftVariants=["","tuiIconPieChartLarge","tuiIconCreditCardLarge"],this.iconLeft="",this.typeVariants=["text","email","password","tel","url"],this.cleaner=!1,this.editable=!0,this.filler="",this.prefix="",this.postfix="",this.maxLengthVariants=[10],this.maxLength=null,this.inputModeVariants=["text","numeric"],this.inputMode=this.inputModeVariants[0],this.customContentVariants=["",ve,"<span>LongTextContent</span>"],this.customContentSelected=this.customContentVariants[0],this.password="",this.example2Value="mail@example.com",this.value="",this.exampleText="",this.disabled=!1,this.readOnly=!1,this.labelOutside=!1,this.sizeVariants=["s","m","l"],this.size=this.sizeVariants[2],this.hintContentVariants=["","Ivan Ivanov"],this.hintDirectionVariants=r.TUI_HINT_DIRECTIONS,this.hintAppearanceVariants=["","error","onDark"],this.invalid=!1,this.hintContent=this.hintContentVariants[0],this.hintDirection=this.hintDirectionVariants[0],this.hintAppearance=this.hintAppearanceVariants[0]}get customContent(){return this.customContentSelected===ve?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':this.customContentSelected}get iconContent(){return""===this.selectedIcon?"":this.interactiveIcon&&"tuiIconSearchLarge"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearchLarge"}get isBootstrap(){return this.theme===this.themes[1]}get isMaterial(){return this.theme===this.themes[2]}get placeholder(){return this.isBootstrap?"Type a value":"Theming sample"}get customizationSize(){return this.isBootstrap?"s":"l"}onClick(){console.info("Interactive icon clicked")}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=d.n5z(e)))(n||e)}}(),e.ɵcmp=d.Xpm({type:e,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(e,t){if(1&e&&d.Gf(ie,5),2&e){let e;d.iGM(e=d.CRH())&&(t.interactiveIcon=e.first)}},features:[d._Bn([{provide:g.x,useExisting:(0,d.Gpc)((()=>e))}]),d.qOj],decls:4,vars:0,consts:[["header","PrimitiveTextfield","package","CORE","type","components"],["pageTab",""],["id","example-size","heading","sizes",3,"content"],[1,"tui-space_bottom-4","b-form"],["routerLink","/components/input-password","tuiLink",""],[1,"b-form",3,"ngModel","ngModelChange"],["id","options","heading","Options",3,"content"],[3,"ngModel","ngModelChange"],[3,"disabled","editable","filler","focusable","invalid","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldFiller","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","value","valueChange"],["template",""],["interactiveContent",""],["documentationPropertyMode","input","documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","editable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","filler","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldIcon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","prefix","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","postfix","documentationPropertyType","string",3,"documentationPropertyDeprecated","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","readOnly","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","invalid","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","value","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar",3,"text"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],["routerLink","/services/svg-service","tuiLink",""],["routerLink","/components/input-number","tuiLink",""],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,oe,22,4,"ng-template",1),d.YNc(2,xe,22,39,"ng-template",1),d.YNc(3,ye,12,2,"ng-template",1),d.qZA())},dependencies:[o.JJ,o.On,y.w,v.F,C.O,T.y,P.B,b.b,M.B,V.x,w.s,Z.A,_.a,A.A,U.T,N.k,H.L,J.J,I.V,O.P,L.bZ,q.c,F.F,S.z,Q.B,k.q,D.n,G.f,a.rH,ee,ne],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],changeDetection:0}),t})(),Te=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[i.ez,o.u5,o.UX,f.f,m.I,h.J,r.TuiPrimitiveTextfieldModule,r.TuiTextfieldControllerModule,r.TuiNotificationModule,l.TuiAvatarModule,r.TuiLinkModule,r.TuiSvgModule,r.TuiButtonModule,c.wq,r.TuiHintModule,l.TuiRadioListModule,s,r.TuiLabelModule,r.TuiWrapperModule,p,u.fV,a.Bz.forChild((0,u.Ve)(Ce))]}),t})()}}]);