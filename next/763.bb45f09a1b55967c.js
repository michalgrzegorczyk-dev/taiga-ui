(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[763],{763:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputPhoneModule:()=>_t});var o=n(88692),i=n(69900),u=n(91795),r=n(64206),a=n(4136),c=n(78129),l=n(20995),s=n(89570),p=n(75695),d=n(64537),m=n(82880),h=n(98204),f=n(69956),g=n(33250),x=n(64374),y=n(6707),T=n(68874),C=n(10200),Z=n(3729),A=n(44998),w=n(89437),_=n(87205),M=n(84848),b=n(96895),U=n(45303),v=n(79121),P=n(54218),q=n(83074),J=n(10977),N=n(62840),O=n(60404),L=n(43560),k=n(93525),D=n(38868),H=n(76189),V=n(91030);let F=(()=>{var t;class e{constructor(){this.testForm=new i.cw({testValue:new i.NI("+77777777777",i.kI.required)})}setValue(){this.testForm.get("testValue").setValue("+79926775676")}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=d.Xpm({type:t,selectors:[["tui-input-phone-example-1"]],decls:9,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"],["autocomplete","tel","tuiTextfield",""],[1,"tui-space_bottom-3"],["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(d.TgZ(0,"form",0)(1,"tui-input-phone",1),d._uU(2," Type a phone number "),d._UZ(3,"input",2),d.qZA(),d.TgZ(4,"pre",3),d._uU(5),d.ALo(6,"json"),d.qZA()(),d.TgZ(7,"button",4),d.NdJ("click",(function(){return e.setValue()})),d._uU(8," Set +79926775676\n"),d.qZA()),2&t&&(d.Q6J("formGroup",e.testForm),d.xp6(5),d.hij("Form value: ",d.lcZ(6,2,e.testForm.value),""))},dependencies:[i._Y,i.JJ,i.JL,i.sg,i.u,H.v,b.y,U.X,V.M,o.Ts],encapsulation:2,changeDetection:0}),e})(),I=(()=>{var t;class e{constructor(){this.control=new i.NI("",i.kI.minLength(12))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=d.Xpm({type:t,selectors:[["tui-input-phone-example-2"]],decls:5,vars:4,consts:[[1,"b-form",3,"formControl"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-input-phone",0),d._uU(1," Type phone number\n"),d.qZA(),d.TgZ(2,"pre"),d._uU(3),d.ALo(4,"json"),d.qZA()),2&t&&(d.Q6J("formControl",e.control),d.xp6(3),d.hij("Form value: ",d.lcZ(4,2,e.control.value),""))},dependencies:[i.JJ,i.oH,b.y,U.X,o.Ts],encapsulation:2,changeDetection:0}),e})();var Q=n(64762),$=n(98497),S=n(38023),Y=n(21860),E=n(61528),z=n(27969),B=n(98168),G=n(51927),j=n(15696),K=n(84945),X=n(26903),W=n(40939),R=n(20933),tt=n(35065),et=n(52219),nt=n(44124);let ot,it;function ut(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"button",6),d.NdJ("click",(function(){const e=d.CHM(t).$implicit,n=d.oxw(4);return d.KtG(n.onClick(e))})),d._UZ(1,"tui-avatar",7),d.TgZ(2,"span",8)(3,"span"),d._uU(4),d.qZA(),d.TgZ(5,"span",9),d._uU(6),d.qZA()()()}if(2&t){const t=e.$implicit;d.Q6J("disabled",t.disabled)("value",t.phone),d.xp6(1),d.Q6J("avatarUrl",t.avatarUrl||null)("text",t.firstName),d.xp6(3),d.AsE("",t.firstName," ",t.lastName,""),d.xp6(2),d.Oqu(t.phone)}}function rt(t,e){if(1&t&&(d.TgZ(0,"tui-data-list"),d.YNc(1,ut,7,7,"button",5),d.qZA()),2&t){const t=d.oxw(2).tuiLet;d.xp6(1),d.Q6J("ngForOf",t)}}function at(t,e){1&t&&(d.ynx(0),d.YNc(1,rt,2,1,"tui-data-list",4),d.BQk())}function ct(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-input-phone",2),d.NdJ("ngModelChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.value=e)}))("searchChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.onSearch(e))})),d._uU(1),d.ALo(2,"async"),d.YNc(3,at,2,0,"ng-container",3),d.qZA()}if(2&t){const t=e.tuiLet,n=d.oxw(),o=d.MAs(3);d.Q6J("allowText",!0)("tuiTextfieldCustomContent",o)("ngModel",n.value),d.xp6(1),d.hij(" ",d.lcZ(2,5,n.placeholder$)," "),d.xp6(2),d.Q6J("ngIf",null==t?null:t.length)}}function lt(t,e){if(1&t&&d._UZ(0,"tui-avatar",11),2&t){const t=e.ngIf;d.Q6J("avatarUrl",t.avatarUrl||null)("rounded",!0)("text",t.firstName)}}function st(t,e){if(1&t&&(d.YNc(0,lt,1,3,"tui-avatar",10),d.ALo(1,"async")),2&t){const t=d.oxw();d.Q6J("ngIf",d.lcZ(1,1,t.user$))}}class pt{constructor(t,e,n,o=null,i=!1){this.firstName=t,this.lastName=e,this.phone=n,this.avatarUrl=o,this.disabled=i}toString(){return`${this.firstName} ${this.lastName}`}}const dt=[new pt("Roman","Sedov","+75678901234","https://avatars.githubusercontent.com/u/10106368"),new pt("Alex","Inkin","+75678901234",(0,$.L)(ot||(ot=(t=>t)`/images/avatar.jpg`)))];class mt{constructor(){this.search$=new S.x,this.selected$=new S.x,this.value="",this.user$=(0,Y.T)(this.selected$,this.search$.pipe((0,E.w)((t=>this.request(t).pipe((0,z.U)((e=>this.isFullMatch(e,t)?e[0]:null))))))).pipe((0,B.b)((t=>{t&&(this.value=t.phone)}))),this.items$=this.search$.pipe((0,G.O)(""),(0,E.w)((t=>this.request(t).pipe((0,z.U)((e=>this.isFullMatch(e,t)?[]:e)))))),this.placeholder$=(0,j.a)([this.user$,this.search$]).pipe((0,z.U)((([t,e])=>t||this.getPlaceholder(e))),(0,G.O)("Phone number or name"))}onSearch(t){this.search$.next(t)}onClick(t){this.selected$.next(t)}request(t){return(0,K.of)(dt.filter((e=>(0,a.TUI_DEFAULT_MATCHER)(e,t)||(0,a.TUI_DEFAULT_MATCHER)(e.phone,t)))).pipe((0,X.B)())}getPlaceholder(t){return t?t.startsWith("+")?"Phone number":"Name":"Phone number or name"}isFullMatch(t,e){return 1===t.length&&(String(t[0])===e||t[0].phone===e)}}function ht(t,e){if(1&t&&(d.TgZ(0,"p")(1,"code"),d._uU(2,"InputPhone"),d.qZA(),d._uU(3," allows to input a phone number "),d.qZA(),d.TgZ(4,"tui-doc-example",2)(5,"tui-notification",3),d._uU(6," If you need to set some attributes or listen to events on native "),d.TgZ(7,"code"),d._uU(8,"input"),d.qZA(),d._uU(9," , you can put it inside with "),d.TgZ(10,"code"),d._uU(11,"Textfield"),d.qZA(),d._uU(12," directive as shown below "),d.qZA(),d._UZ(13,"tui-input-phone-example-1"),d.qZA(),d.TgZ(14,"tui-doc-example",4),d._UZ(15,"tui-input-phone-example-2"),d.qZA(),d.TgZ(16,"tui-doc-example",5),d._UZ(17,"tui-input-phone-example-3"),d.qZA()),2&t){const t=d.oxw();d.xp6(4),d.Q6J("content",t.example1),d.xp6(10),d.Q6J("content",t.example2),d.xp6(2),d.Q6J("content",t.example3)}}function ft(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-input-phone",14),d.NdJ("tuiDropdownOpenChange",(function(e){d.CHM(t);const n=d.oxw(2);return d.KtG(n.dropdownOpen.next(e))})),d.ALo(1,"async"),d._uU(2," Type a phone number "),d.qZA()}if(2&t){const t=d.oxw(2);d.Udp("text-align",t.textAlign),d.Q6J("countryCode",t.countryCode)("focusable",t.focusable)("formControl",t.control)("phoneMaskAfterCountryCode",t.phoneMaskAfterCountryCode)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoInvalid",t.pseudoInvalid)("readOnly",t.readOnly)("tuiDropdownAlign",t.dropdownAlign)("tuiDropdownDirection",t.dropdownDirection)("tuiDropdownLimitWidth",t.dropdownLimitWidth)("tuiDropdownMaxHeight",t.dropdownMaxHeight)("tuiDropdownMinHeight",t.dropdownMinHeight)("tuiDropdownOffset",t.dropdownOffset)("tuiDropdownOpen",!!d.lcZ(1,28,t.dropdownOpen))("tuiHintAppearance",t.hintAppearance)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContent)("tuiTextfieldFiller",t.filler)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldPostfix",t.postfix)("tuiTextfieldPrefix",t.prefix)("tuiTextfieldSize",t.size)}}function gt(t,e){1&t&&(d._uU(0," Disabled state (use "),d.TgZ(1,"code"),d._uU(2,"formControl.disable()"),d.qZA(),d._uU(3," ) "))}function xt(t,e){1&t&&d._uU(0," Country code ")}function yt(t,e){1&t&&(d._uU(0," Text mask after country code. You can use "),d.TgZ(1,"code"),d._uU(2,"#"),d.qZA(),d._uU(3," , "),d.TgZ(4,"code"),d._uU(5,"-"),d.qZA(),d._uU(6," and spaces as a template symbol "))}function Tt(t,e){1&t&&d._uU(0," Textfield value to subscribe on input or setting it from the outside ")}function Ct(t,e){1&t&&d._uU(0," Custom align content by text-align ")}function Zt(t,e){if(1&t){const t=d.EpF();d.TgZ(0,"tui-doc-demo",6),d.YNc(1,ft,3,30,"ng-template"),d.qZA(),d.TgZ(2,"tui-doc-documentation"),d.YNc(3,gt,4,0,"ng-template",7),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.disabled=e)})),d.YNc(4,xt,1,0,"ng-template",8),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.countryCode=e)})),d.YNc(5,yt,7,0,"ng-template",9),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.phoneMaskAfterCountryCode=e)})),d.YNc(6,Tt,1,0,"ng-template",10),d.qZA(),d._UZ(7,"inherited-documentation",11),d.TgZ(8,"tui-doc-documentation",12),d.YNc(9,Ct,1,0,"ng-template",13),d.NdJ("documentationPropertyValueChange",(function(e){d.CHM(t);const n=d.oxw();return d.KtG(n.textAlign=e)})),d.qZA()}if(2&t){const t=d.oxw();d.Q6J("control",t.control),d.xp6(3),d.Q6J("documentationPropertyValue",t.disabled),d.xp6(1),d.Q6J("documentationPropertyValues",t.countryCodes)("documentationPropertyValue",t.countryCode),d.xp6(1),d.Q6J("documentationPropertyValues",t.phoneMasksAfterCountryCode)("documentationPropertyValue",t.phoneMaskAfterCountryCode),d.xp6(2),d.Q6J("dropdown",!0),d.xp6(2),d.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function At(t,e){if(1&t&&(d.TgZ(0,"ol",15)(1,"li")(2,"p"),d._uU(3," Import an Angular module for forms and "),d.TgZ(4,"code"),d._uU(5,"TuiInputPhoneModule"),d.qZA(),d._uU(6," in the same module where you want to use our component: "),d.qZA(),d._UZ(7,"tui-doc-code",16),d.qZA(),d.TgZ(8,"li")(9,"p"),d._uU(10," Declare a form ( "),d.TgZ(11,"code"),d._uU(12,"FormGroup"),d.qZA(),d._uU(13," ) or a control ( "),d.TgZ(14,"code"),d._uU(15,"FormControl"),d.qZA(),d._uU(16," ) in your component: "),d.qZA(),d._UZ(17,"tui-doc-code",17),d.qZA(),d.TgZ(18,"li")(19,"p"),d._uU(20,"Add to the template:"),d.qZA(),d._UZ(21,"tui-doc-code",18),d.qZA()()),2&t){const t=d.oxw();d.xp6(7),d.Q6J("code",t.exampleModule),d.xp6(10),d.Q6J("code",t.exampleForm),d.xp6(4),d.Q6J("code",t.exampleHtml)}}it=mt,it.ɵfac=function(t){return new(t||it)},it.ɵcmp=d.Xpm({type:it,selectors:[["tui-input-phone-example-3"]],decls:6,vars:4,consts:[["class","b-form",3,"allowText","tuiTextfieldCustomContent","ngModel","ngModelChange","searchChange",4,"tuiLet"],["avatar",""],[1,"b-form",3,"allowText","tuiTextfieldCustomContent","ngModel","ngModelChange","searchChange"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["tuiOption","",3,"disabled","value","click"],["size","s",1,"tui-space_right-3",3,"avatarUrl","text"],[1,"user"],[1,"phone"],["size","s",3,"avatarUrl","rounded","text",4,"ngIf"],["size","s",3,"avatarUrl","rounded","text"]],template:function(t,e){1&t&&(d.YNc(0,ct,4,7,"tui-input-phone",0),d.ALo(1,"async"),d.YNc(2,st,2,3,"ng-template",null,1,d.W1O),d.TgZ(4,"p"),d._uU(5),d.qZA()),2&t&&(d.Q6J("tuiLet",d.lcZ(1,2,e.items$)),d.xp6(5),d.hij("Value: ",e.value,""))},dependencies:[o.sg,o.O5,i.JJ,i.On,W.L,R.q,tt.v,et.g,nt.J,y.B,b.y,U.X,o.Ov],styles:[".user[_ngcontent-%COMP%]{margin-right:auto}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);display:block;color:var(--tui-text-03)}"],changeDetection:0}),(0,Q.gn)([a.tuiPure],mt.prototype,"request",null);let wt=(()=>{var t;class e extends m.b{constructor(){super(...arguments),this.exampleForm=n.e(2207).then(n.t.bind(n,2207,17)),this.exampleModule=n.e(81627).then(n.t.bind(n,81627,17)),this.exampleHtml=n.e(43560).then(n.t.bind(n,9832,17)),this.example1={TypeScript:n.e(95894).then(n.t.bind(n,95894,17)),HTML:n.e(30508).then(n.t.bind(n,30508,17))},this.example2={TypeScript:n.e(81831).then(n.t.bind(n,81831,17)),HTML:n.e(9604).then(n.t.bind(n,9604,17))},this.example3={TypeScript:n.e(893).then(n.t.bind(n,893,17)),HTML:n.e(77707).then(n.t.bind(n,77707,17)),LESS:n.e(96912).then(n.t.bind(n,96912,17))},this.cleaner=!1,this.control=new i.NI("",[i.kI.required,i.kI.minLength(12)]),this.countryCodes=["+7","+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasksAfterCountryCode=["(###) ###-##-##","(####)+____:-#############","### ###-####"],this.phoneMaskAfterCountryCode=this.phoneMasksAfterCountryCode[0]}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=d.n5z(t)))(n||t)}}(),t.ɵcmp=d.Xpm({type:t,selectors:[["example-tui-input-phone"]],features:[d._Bn([{provide:h.x,useExisting:(0,d.Gpc)((()=>t))}]),d.qOj],decls:4,vars:0,consts:[["header","InputPhone","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4","b-form"],["id","validated","heading","With length validator",3,"content"],["id","autocomplete","description","By number and by name","heading","With autocomplete",3,"content"],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","countryCode","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","phoneMaskAfterCountryCode","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","search","documentationPropertyType","string"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"countryCode","focusable","formControl","phoneMaskAfterCountryCode","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiDropdownOpen","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldFiller","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","tuiDropdownOpenChange"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(d.TgZ(0,"tui-doc-page",0),d.YNc(1,ht,18,3,"ng-template",1),d.YNc(2,Zt,10,9,"ng-template",1),d.YNc(3,At,22,3,"ng-template",1),d.qZA())},dependencies:[i.JJ,i.oH,f.o,g.Ek,x.b,y.B,T.x,C.s,Z.a,A.A,w.T,_.k,M.bZ,b.y,U.X,v.L,P.w,q.c,J.F,N.z,O.B,L.q,k.n,D.f,F,I,mt,o.Ov],styles:[".item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;margin:-.625rem 0}.avatar[_ngcontent-%COMP%]{margin-left:.75rem}.name[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{margin:0}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}"],changeDetection:0}),e})(),_t=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=d.oAB({type:t}),t.ɵinj=d.cJS({imports:[o.ez,i.u5,i.UX,s.wq,a.TuiLetModule,c.TuiDataListModule,c.TuiButtonModule,c.TuiSvgModule,l.TuiAvatarModule,c.TuiDropdownModule,c.TuiTextfieldControllerModule,c.TuiHintModule,l.TuiInputPhoneModule,c.TuiLinkModule,c.TuiNotificationModule,p.f,r.fV,u.Bz.forChild((0,r.Ve)(wt))]}),e})()}}]);