(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72036],{72036:(e,o,t)=>{t.r(o),t.d(o,{default:()=>F});var n=t(66094),i=t(85483),u=t(80486),r=t(48266),c=t(55495),a=t(29389),d=t(94344),l=t(43921),p=t(35548),s=t(70288),m=t(33701),f=t(55836),y=t(31136),h=t(72187),x=t(34962),g=t(61091),C=t(76970),Z=t(62753),T=t(82215),A=t(28402),P=t(29329),U=t(63708),I=t(38264),_=t(9148),w=t(75447),b=t(70254);function H(e,o){1&e&&(p._uU(0," Use "),p.TgZ(1,"code"),p._uU(2,"tuiSortCountries"),p.qZA(),p._uU(3," pipe from "),p.TgZ(4,"code"),p._uU(5,"TuiSortCountriesPipeModule"),p.qZA(),p._uU(6," to sort countries according to your current language. "))}function V(e,o){if(1&e&&(p.TgZ(0,"p"),p._uU(1,"Allows to input phone number in international format"),p.qZA(),p._UZ(2,"tui-doc-example",2),p.ALo(3,"tuiComponent"),p.ALo(4,"tuiExample"),p.TgZ(5,"tui-doc-example",3),p.ALo(6,"tuiComponent"),p.ALo(7,"tuiExample"),p.YNc(8,H,7,0,"ng-template",null,4,p.W1O),p.qZA()),2&e){const e=p.MAs(9);p.xp6(2),p.Q6J("component",p.lcZ(3,5,1))("content",p.lcZ(4,7,1)),p.xp6(3),p.Q6J("component",p.lcZ(6,9,2))("content",p.lcZ(7,11,2))("description",e)}}function q(e,o){if(1&e){const e=p.EpF();p.TgZ(0,"tui-input-phone-international",9),p.NdJ("countryIsoCodeChange",(function(o){p.CHM(e);const t=p.oxw(2);return p.KtG(t.countryIsoCode=o)})),p._uU(1," Type a phone number "),p.qZA()}if(2&e){const e=p.oxw(2);p.Q6J("countries",e.countries)("focusable",e.focusable)("formControl",e.control)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownOffset",e.dropdownOffset)("tuiHintAppearance",e.hintAppearance)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldFiller",e.filler)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldPostfix",e.postfix)("tuiTextfieldPrefix",e.prefix)("tuiTextfieldSize",e.size)("countryIsoCode",e.countryIsoCode)}}function D(e,o){1&e&&(p._uU(0," Disabled state (use "),p.TgZ(1,"code"),p._uU(2,"formControl.disable()"),p.qZA(),p._uU(3," ) "))}function M(e,o){1&e&&p._uU(0," Array of ISO-codes of countries to choose ")}function J(e,o){1&e&&p._uU(0," ISO-code of selected country ")}function N(e,o){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo",5),p.YNc(1,q,2,21,"ng-template"),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,D,4,0,"ng-template",6),p.NdJ("documentationPropertyValueChange",(function(o){p.CHM(e);const t=p.oxw();return p.KtG(t.disabled=o)})),p.YNc(4,M,1,0,"ng-template",7),p.NdJ("documentationPropertyValueChange",(function(o){p.CHM(e);const t=p.oxw();return p.KtG(t.countries=o)})),p.YNc(5,J,1,0,"ng-template",8),p.NdJ("documentationPropertyValueChange",(function(o){p.CHM(e);const t=p.oxw();return p.KtG(t.countryIsoCode=o)})),p.qZA(),p._UZ(6,"inherited-documentation")}if(2&e){const e=p.oxw();p.Q6J("control",e.control),p.xp6(3),p.Q6J("documentationPropertyValue",e.disabled),p.xp6(1),p.Q6J("documentationPropertyValues",e.countriesVariants)("documentationPropertyValue",e.countries),p.xp6(1),p.Q6J("documentationPropertyValues",e.countryIsoCodeVariants)("documentationPropertyValue",e.countryIsoCode)}}function O(e,o){if(1&e&&(p.TgZ(0,"ol",10)(1,"li",11)(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiInputPhoneInternationalComponent"),p.qZA(),p._uU(6," in the same module where you want to use our component: "),p.qZA(),p._UZ(7,"tui-doc-code",12),p.qZA(),p.TgZ(8,"li",11)(9,"p"),p._uU(10," Declare a form ( "),p.TgZ(11,"code"),p._uU(12,"FormGroup"),p.qZA(),p._uU(13," ) or a control ( "),p.TgZ(14,"code"),p._uU(15,"FormControl"),p.qZA(),p._uU(16," ) in your component: "),p.qZA(),p._UZ(17,"tui-doc-code",13),p.qZA(),p.TgZ(18,"li",11)(19,"p"),p._uU(20,"Add to the template:"),p.qZA(),p._UZ(21,"tui-doc-code",14),p.qZA()()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(10),p.Q6J("code",e.exampleForm),p.xp6(4),p.Q6J("code",e.exampleHtml)}}const F=(()=>{var e;class o extends d.b{constructor(){super(...arguments),this.cleaner=!1,this.labelOutside=!0,this.control=new n.NI("",[n.kI.required,n.kI.minLength(9)]),this.exampleForm=t.e(67698).then(t.t.bind(t,67698,17)),this.exampleModule=t.e(84308).then(t.t.bind(t,84308,17)),this.exampleHtml=t.e(18164).then(t.t.bind(t,18164,17)),this.countriesVariants=[["RU","KZ","UA","BY"],c.cl],this.countries=this.countriesVariants[0],this.countryIsoCodeVariants=["RU","KZ","UA","BY"],this.countryIsoCode=this.countryIsoCodeVariants[0]}}return(e=o).ɵfac=function(){let o;return function(t){return(o||(o=p.n5z(e)))(t||e)}}(),e.ɵcmp=p.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[p._Bn([(0,u.tuiProvide)(a.x,e)]),p.qOj,p.jDz],decls:4,vars:0,consts:[["header","InputPhoneInternational","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"component","content"],["id","all-countries","heading","All available countries",3,"component","content","description"],["sortPipeDescription",""],[3,"control"],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","countries","documentationPropertyType","ReadonlyArray<TuiCountryIsoCode>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input-output","documentationPropertyName","countryIsoCode","documentationPropertyType","TuiCountryIsoCode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"countries","focusable","formControl","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiDropdownDirection","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldFiller","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","countryIsoCode","countryIsoCodeChange"],[1,"tui-list","tui-list_ordered"],[1,"tui-list__item"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,o){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,V,10,13,"ng-template",1),p.YNc(2,N,7,6,"ng-template",1),p.YNc(3,O,22,3,"ng-template",1),p.qZA())},dependencies:[l.w,i.kG,s.c,m.F,f.z,y.B,h.f,x.q,g.n,C.R,Z.I,r.TuiDropdownModule,T.Ek,r.TuiHint,A.bZ,c.Q1,r.TuiTextfieldControllerModule,P.b,U.x,I.s,_.A,w.T,b.k,n.UX,n.JJ,n.oH],encapsulation:2,changeDetection:0}),o})()}}]);