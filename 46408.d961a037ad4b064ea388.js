"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[46408],{46408:(nF,m,u)=>{u.r(m),u.d(m,{FormModule:()=>iF});var c=u(12057),t=u(23738),C=u(33982),d=u(23121),_=u(29851),r=u(72002),i=u(753),F=u(74788),f=u(88331),Z=u(37159),A=u(57068),g=u(36692),E=u(48758),$=u(72817),S=u(77027),O=u(41360),I=u(84848),L=u(36951),M=u(41833),h=u(40813),x=u(52721),v=u(21991),b=u(16753),U=u(13735),R=u(44056),N=u(50170),w=u(1414),G=u(52219),P=u(78750),q=u(45303),V=u(39607),y=u(61423),J=u(86730),Q=u(81894),k=u(88135),z=u(68874),B=u(76189),H=u(50020),X=u(16996),W=u(7114),Y=u(99886);function K(D,o){if(1&D&&F._UZ(0,"tui-data-list-wrapper",57),2&D){const e=F.oxw();F.Q6J("items",e.persons)}}function j(D,o){if(1&D&&(F.TgZ(0,"div",58),F._uU(1),F.qZA()),2&D){const e=o.$implicit;F.xp6(1),F.AsE("",e.firstName," ",e.lastName,"")}}function FF(D,o){if(1&D&&F._UZ(0,"tui-data-list-wrapper",59),2&D){const e=F.oxw(),n=F.MAs(122);F.Q6J("items",e.accounts)("itemContent",n)}}function uF(D,o){if(1&D&&F._UZ(0,"tui-data-list-wrapper",59),2&D){const e=F.oxw(),n=F.MAs(122);F.Q6J("items",e.accounts)("itemContent",n)}}function DF(D,o){if(1&D&&(F.TgZ(0,"span",60),F._uU(1),F._UZ(2,"tui-money",61),F.qZA()),2&D){const e=o.$implicit;F.xp6(1),F.hij(" ",e.name," "),F.xp6(1),F.Q6J("value",e.amount)}}const a=function(){return[]};class p{constructor(o,e){this.firstName=o,this.lastName=e}toString(){return`${this.firstName} ${this.lastName}`}}class s{constructor(o,e,n,l,T){this.id=o,this.name=e,this.amount=n,this.currency=l,this.cardSvg=T}}let tF=(()=>{class D{constructor(){this.svgIcons={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",intersection:"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.persons=[new p("Roman","Sedov"),new p("Alex","Inkin")],this.accounts=[new s("1","Common",24876.55,"RUB",this.svgIcons.common),new s("2","Universal",335,"USD",this.svgIcons.universal),new s("3","Intersection",1e4,"EUR",this.svgIcons.intersection),new s("4","Mutation",100,"GBP",this.svgIcons.mutation)],this.testForm=new t.cw({nameValue:new t.NI("",t.kI.required),textValue:new t.NI("",t.kI.required),passwordValue:new t.NI("",t.kI.required),phoneValue:new t.NI("",t.kI.required),moneyValue:new t.NI("100",t.kI.required),periodValue:new t.NI(new g.TuiDay(2017,2,15),t.kI.required),timeValue:new t.NI(new g.TuiTime(12,30),t.kI.required),personValue:new t.NI(this.persons[0]),quantityValue:new t.NI(5e4,t.kI.required),radioValue:new t.NI("with-commission"),accountWherefrom:new t.NI(null),accountWhere:new t.NI(null),checkboxValue:new t.NI(!1),osnoValue:new t.NI(!1),usnValue:new t.NI(!1),eshnValue:new t.NI(!1),envdValue:new t.NI(!1),usn2Value:new t.NI(!1),patentValue:new t.NI(!1)})}}return D.\u0275fac=function(e){return new(e||D)},D.\u0275cmp=F.Xpm({type:D,selectors:[["tui-form-example-1"]],decls:123,vars:60,consts:[[1,"tui-container"],[1,"stepper"],[3,"activeItemIndex"],["tuiStep",""],["tuiStep","",3,"disabled"],[3,"formGroup"],[1,"tui-row","tui-row_sme"],[1,"tui-col_8"],[1,"tui-form__header","tui-form__header_margin-top_none"],[1,"tui-form__row"],["tuiTextfieldExampleText","Field placeholder","formControlName","nameValue","tuiHintContent","A tooltip"],[1,"tui-required"],["formControlName","nameValue",3,"error"],["tuiTextfieldExampleText","Placeholder","formControlName","periodValue"],["formControlName","periodValue",3,"error"],[1,"tui-form__row","tui-form__row_multi-fields"],[1,"tui-form__multi-field"],["formControlName","passwordValue"],["formControlName","passwordValue",3,"error"],["formControlName","moneyValue",3,"postfix"],["formControlName","moneyValue",3,"error"],["formControlName","quantityValue","postfix","\u20bd",3,"min","max","segments"],[1,"ticks-labels"],[1,"tui-form__field-note"],["formControlName","quantityValue",3,"error"],["formControlName","personValue",3,"valueContent"],[3,"items",4,"tuiDataList"],["personValueContent",""],["formControlName","personValue",3,"error"],["formControlName","phoneValue"],["formControlName","phoneValue",3,"error"],[1,"tui-form__header"],["tuiGroup","",1,"tui-form__row",3,"adaptive","collapsed"],["contentAlign","right","formControlName","radioValue","item","with-commission","size","l"],["contentAlign","right","formControlName","radioValue","item","without-commission","size","l"],[1,"tui-form__row","tui-form__row_half-width"],["formControlName","timeValue"],[1,"tui-form__row","tui-form__row_checkboxes"],["formControlName","osnoValue","size","l",1,"tui-form__checkbox"],["formControlName","usnValue","size","l",1,"tui-form__checkbox"],["formControlName","eshnValue","size","l",1,"tui-form__checkbox"],["formControlName","envdValue","size","l",1,"tui-form__checkbox"],["formControlName","usn2Value","size","l",1,"tui-form__checkbox"],["formControlName","patentValue","size","l",1,"tui-form__checkbox"],[1,"tui-form__header","tui-form__header_margin-bottom_small"],["tuiLabel","From"],["formControlName","accountWherefrom",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],[3,"items","itemContent",4,"tuiDataList"],["tuiLabel","To"],["formControlName","accountWhere",1,"accounts-select",3,"tuiTextfieldLabelOutside","valueContent"],["tuiTextfieldExampleText","Placeholder","formControlName","textValue","tuiHintContent","A tooltip"],[1,"tui-form__field-checkbox"],["formControlName","checkboxValue","size","l"],[1,"tui-form__buttons"],["tuiButton","","size","l","type","submit",1,"tui-form__button"],["tuiButton","","type","button","appearance","flat","size","l",1,"tui-form__button"],["accountContent",""],[3,"items"],[1,"uppercase-name"],[3,"items","itemContent"],[1,"account"],[3,"value"]],template:function(e,n){if(1&e&&(F.TgZ(0,"div",0),F.TgZ(1,"div",1),F.TgZ(2,"tui-stepper",2),F.TgZ(3,"button",3),F._uU(4,"First step"),F.qZA(),F.TgZ(5,"button",4),F._uU(6," Second step "),F.qZA(),F.TgZ(7,"button",4),F._uU(8," Third step "),F.qZA(),F.TgZ(9,"button",4),F._uU(10," Fourth step "),F.qZA(),F.qZA(),F.qZA(),F.TgZ(11,"form",5),F.TgZ(12,"div",6),F.TgZ(13,"div",7),F.TgZ(14,"h3",8),F._uU(15,"A header"),F.qZA(),F.TgZ(16,"div",9),F.TgZ(17,"tui-input",10),F._uU(18," Textfield "),F._UZ(19,"span",11),F.qZA(),F._UZ(20,"tui-error",12),F.ALo(21,"async"),F.ALo(22,"tuiFieldError"),F.qZA(),F.TgZ(23,"div",9),F.TgZ(24,"tui-input-date",13),F._uU(25," Input date "),F._UZ(26,"span",11),F.qZA(),F._UZ(27,"tui-error",14),F.ALo(28,"async"),F.ALo(29,"tuiFieldError"),F.qZA(),F.TgZ(30,"div",15),F.TgZ(31,"div",16),F.TgZ(32,"tui-input-password",17),F._uU(33,"Input password"),F.qZA(),F._UZ(34,"tui-error",18),F.ALo(35,"async"),F.ALo(36,"tuiFieldError"),F.qZA(),F.TgZ(37,"div",16),F.TgZ(38,"tui-input-number",19),F.ALo(39,"tuiCurrency"),F._uU(40," Input money "),F.qZA(),F._UZ(41,"tui-error",20),F.ALo(42,"async"),F.ALo(43,"tuiFieldError"),F.qZA(),F.qZA(),F.TgZ(44,"div",9),F.TgZ(45,"tui-input-slider",21),F._uU(46," Some slider "),F.qZA(),F.TgZ(47,"div",22),F.TgZ(48,"span"),F._uU(49,"from 50 000 \u20bd"),F.qZA(),F.TgZ(50,"span"),F._uU(51,"to 3 000 000 \u20bd"),F.qZA(),F.qZA(),F.TgZ(52,"div",23),F._uU(53,"Some additional text"),F.qZA(),F._UZ(54,"tui-error",24),F.ALo(55,"async"),F.ALo(56,"tuiFieldError"),F.qZA(),F.TgZ(57,"div",15),F.TgZ(58,"div",16),F.TgZ(59,"tui-select",25),F._uU(60," Choose a person "),F.YNc(61,K,1,1,"tui-data-list-wrapper",26),F.qZA(),F.YNc(62,j,2,2,"ng-template",null,27,F.W1O),F._UZ(64,"tui-error",28),F.ALo(65,"async"),F.ALo(66,"tuiFieldError"),F.qZA(),F.TgZ(67,"div",16),F.TgZ(68,"tui-input-phone",29),F._uU(69,"Input phone"),F.qZA(),F._UZ(70,"tui-error",30),F.ALo(71,"async"),F.ALo(72,"tuiFieldError"),F.qZA(),F.qZA(),F.TgZ(73,"h3",31),F._uU(74,"Header"),F.qZA(),F.TgZ(75,"div",32),F.TgZ(76,"tui-radio-block",33),F._uU(77," One option "),F.qZA(),F.TgZ(78,"tui-radio-block",34),F._uU(79," An alternative one "),F.qZA(),F.qZA(),F.TgZ(80,"div",35),F.TgZ(81,"tui-input-time",36),F._uU(82,"Input time"),F.qZA(),F.qZA(),F.TgZ(83,"div",37),F.TgZ(84,"tui-checkbox-labeled",38),F._uU(85," First option "),F.qZA(),F.TgZ(86,"tui-checkbox-labeled",39),F._uU(87," Other option "),F.qZA(),F.TgZ(88,"tui-checkbox-labeled",40),F._uU(89," Cool option "),F.qZA(),F.TgZ(90,"tui-checkbox-labeled",41),F._uU(91," Your personal option "),F.qZA(),F.TgZ(92,"tui-checkbox-labeled",42),F._uU(93," Doubtful option "),F.qZA(),F.TgZ(94,"tui-checkbox-labeled",43),F._uU(95," One more value "),F.qZA(),F.qZA(),F.TgZ(96,"h3",44),F._uU(97,"Header"),F.qZA(),F.TgZ(98,"div",9),F.TgZ(99,"label",45),F.TgZ(100,"tui-select",46),F._uU(101," Choose an account "),F.YNc(102,FF,1,2,"tui-data-list-wrapper",47),F.qZA(),F.qZA(),F.qZA(),F.TgZ(103,"div",9),F.TgZ(104,"label",48),F.TgZ(105,"tui-select",49),F._uU(106," Choose an account "),F.YNc(107,uF,1,2,"tui-data-list-wrapper",47),F.qZA(),F.qZA(),F.qZA(),F.TgZ(108,"h3",31),F._uU(109,"Header"),F.qZA(),F.TgZ(110,"div",9),F.TgZ(111,"tui-input",50),F._uU(112," Textfield "),F.qZA(),F.TgZ(113,"div",51),F.TgZ(114,"tui-checkbox-labeled",52),F._uU(115," Try this "),F.qZA(),F.qZA(),F.qZA(),F.TgZ(116,"div",53),F.TgZ(117,"button",54),F._uU(118," Submit "),F.qZA(),F.TgZ(119,"button",55),F._uU(120," Cancel "),F.qZA(),F.qZA(),F.qZA(),F.qZA(),F.YNc(121,DF,3,2,"ng-template",null,56,F.W1O),F.qZA(),F.qZA()),2&e){const l=F.MAs(63),T=F.MAs(122);F.xp6(2),F.Q6J("activeItemIndex",0),F.xp6(3),F.Q6J("disabled",!0),F.xp6(2),F.Q6J("disabled",!0),F.xp6(2),F.Q6J("disabled",!0),F.xp6(2),F.Q6J("formGroup",n.testForm),F.xp6(9),F.Q6J("error",F.lcZ(21,23,F.lcZ(22,25,F.DdM(53,a)))),F.xp6(7),F.Q6J("error",F.lcZ(28,27,F.lcZ(29,29,F.DdM(54,a)))),F.xp6(7),F.Q6J("error",F.lcZ(35,31,F.lcZ(36,33,F.DdM(55,a)))),F.xp6(4),F.Q6J("postfix",F.lcZ(39,35,"RUB")),F.xp6(3),F.Q6J("error",F.lcZ(42,37,F.lcZ(43,39,F.DdM(56,a)))),F.xp6(4),F.Q6J("min",5e4)("max",3e6)("segments",1),F.xp6(9),F.Q6J("error",F.lcZ(55,41,F.lcZ(56,43,F.DdM(57,a)))),F.xp6(5),F.Q6J("valueContent",l),F.xp6(5),F.Q6J("error",F.lcZ(65,45,F.lcZ(66,47,F.DdM(58,a)))),F.xp6(6),F.Q6J("error",F.lcZ(71,49,F.lcZ(72,51,F.DdM(59,a)))),F.xp6(5),F.Q6J("adaptive",!0)("collapsed",!0),F.xp6(25),F.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",T),F.xp6(5),F.Q6J("tuiTextfieldLabelOutside",!0)("valueContent",T)}},directives:[E.H,$.Q,t._Y,t.JL,t.sg,S.K,O.w,t.JJ,t.u,I.bZ,L.v,M.j,h.k,x.V,v.F,b.q,U.g,R.h,N.u,w.O,G.g,P.y,q.X,V.g,y._,J.G,Q.p,k.A,z.x,B.v,H.e,X.o],pipes:[c.Ov,W.A,Y.i],styles:["[_nghost-%COMP%]{display:block}.stepper[_ngcontent-%COMP%]{margin-bottom:2rem}.uppercase-name[_ngcontent-%COMP%]{text-transform:uppercase}.account[_ngcontent-%COMP%]{display:flex;flex:1;justify-content:space-between}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),D})();function eF(D,o){if(1&D&&(F.TgZ(0,"div",2),F.tHW(1,3),F._UZ(2,"strong"),F.N_p(),F.qZA(),F.TgZ(3,"ul",4),F.tHW(4,5),F.TgZ(5,"li",6),F._UZ(6,"code"),F.TgZ(7,"ul",7),F.TgZ(8,"li",6),F._UZ(9,"code"),F._UZ(10,"code"),F.qZA(),F.TgZ(11,"li",6),F._UZ(12,"code"),F._UZ(13,"code"),F.qZA(),F.TgZ(14,"li",6),F._UZ(15,"code"),F._UZ(16,"code"),F.qZA(),F.qZA(),F.qZA(),F.TgZ(17,"li",6),F._UZ(18,"code"),F.TgZ(19,"ul",7),F.TgZ(20,"li",6),F._UZ(21,"code"),F.qZA(),F.TgZ(22,"li",6),F._UZ(23,"code"),F.qZA(),F.TgZ(24,"li",6),F._UZ(25,"code"),F.qZA(),F.qZA(),F.qZA(),F.TgZ(26,"li",6),F._UZ(27,"code"),F._UZ(28,"code"),F.qZA(),F.TgZ(29,"li",6),F._UZ(30,"code"),F.qZA(),F.TgZ(31,"li",6),F._UZ(32,"code"),F.qZA(),F.TgZ(33,"li",6),F._UZ(34,"code"),F.qZA(),F.TgZ(35,"li",6),F._UZ(36,"code"),F.TgZ(37,"ul",7),F.TgZ(38,"li",6),F._UZ(39,"code"),F.qZA(),F.TgZ(40,"li",6),F._UZ(41,"code"),F.qZA(),F.qZA(),F.qZA(),F.TgZ(42,"li",6),F._UZ(43,"code"),F.qZA(),F.N_p(),F.qZA(),F.TgZ(44,"tui-doc-example",8),F._UZ(45,"tui-form-example-1"),F.qZA()),2&D){const e=F.oxw();F.xp6(44),F.Q6J("content",e.example1)}}let oF=(()=>{class D{constructor(){this.example1={TypeScript:u.e(94598).then(u.t.bind(u,94598,17)),HTML:u.e(95871).then(u.t.bind(u,95871,17)),LESS:u.e(59168).then(u.t.bind(u,59168,17))}}}return D.\u0275fac=function(e){return new(e||D)},D.\u0275cmp=F.Xpm({type:D,selectors:[["example-form"]],decls:2,vars:0,consts:function(){let o,e,n;return o=$localize`:␟010339e6584e1c44f5aa721080c96cf7bb471761␟6907807228975360219:Form`,e=$localize`:␟3e7d01c17450214c31f429856a73e5c12bb630a6␟2511572234011757136: Use global ${"\ufffd#2\ufffd"}:START_TAG_STRONG:.tui-form${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG: class and its modifications: `,n=$localize`:␟3918977fe679e3e44ddda056d7de56d98ca367c4␟2261033779633505076:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__header${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : form header. Margins: 32px top and 20px bottom. ${"[\ufffd#7\ufffd|\ufffd#19\ufffd|\ufffd#37\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__header_margin-top_none${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : nullifies ${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:margin-top${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__header_margin-bottom_none${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : nullifies ${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:margin-bottom${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__header_margin-bottom_small${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : reduced margin bottom (16px) ${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:margin-bottom${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#7\ufffd|\ufffd/#19\ufffd|\ufffd/#37\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__row${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : form row. Margin between rows is 20px. ${"[\ufffd#7\ufffd|\ufffd#19\ufffd|\ufffd#37\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__row_multi-fields${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : row with several inputs with 20px margin between them ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__row_half-width${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : a half width row ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__row_checkboxes${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : a row with two columns for checkboxes ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#7\ufffd|\ufffd/#19\ufffd|\ufffd/#37\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__multi-field${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : field in a row ${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:tui-form__row_multi-fields${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: . fields with 20px margin between ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__checkbox${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : checkbox with a label for two column case ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__field-note${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : a secondary text under field ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__field-checkbox${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : checkbox under a field ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__buttons${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : a block with buttons and margin top 32px ${"[\ufffd#7\ufffd|\ufffd#19\ufffd|\ufffd#37\ufffd]"}:START_UNORDERED_LIST:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__buttons_align_end${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : align buttons right ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__buttons_align_center${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : align buttons center ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd/#7\ufffd|\ufffd/#19\ufffd|\ufffd/#37\ufffd]"}:CLOSE_UNORDERED_LIST:${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#5\ufffd|\ufffd#8\ufffd|\ufffd#11\ufffd|\ufffd#14\ufffd|\ufffd#17\ufffd|\ufffd#20\ufffd|\ufffd#22\ufffd|\ufffd#24\ufffd|\ufffd#26\ufffd|\ufffd#29\ufffd|\ufffd#31\ufffd|\ufffd#33\ufffd|\ufffd#35\ufffd|\ufffd#38\ufffd|\ufffd#40\ufffd|\ufffd#42\ufffd]"}:START_LIST_ITEM:${"[\ufffd#6\ufffd|\ufffd#9\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd|\ufffd#15\ufffd|\ufffd#16\ufffd|\ufffd#18\ufffd|\ufffd#21\ufffd|\ufffd#23\ufffd|\ufffd#25\ufffd|\ufffd#27\ufffd|\ufffd#28\ufffd|\ufffd#30\ufffd|\ufffd#32\ufffd|\ufffd#34\ufffd|\ufffd#36\ufffd|\ufffd#39\ufffd|\ufffd#41\ufffd|\ufffd#43\ufffd]"}:START_TAG_CODE:.tui-form__button${"[\ufffd/#6\ufffd|\ufffd/#9\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd|\ufffd/#15\ufffd|\ufffd/#16\ufffd|\ufffd/#18\ufffd|\ufffd/#21\ufffd|\ufffd/#23\ufffd|\ufffd/#25\ufffd|\ufffd/#27\ufffd|\ufffd/#28\ufffd|\ufffd/#30\ufffd|\ufffd/#32\ufffd|\ufffd/#34\ufffd|\ufffd/#36\ufffd|\ufffd/#39\ufffd|\ufffd/#41\ufffd|\ufffd/#43\ufffd]"}:CLOSE_TAG_CODE: : a button of buttons block ${"[\ufffd/#8\ufffd|\ufffd/#11\ufffd|\ufffd/#14\ufffd|\ufffd/#5\ufffd|\ufffd/#20\ufffd|\ufffd/#22\ufffd|\ufffd/#24\ufffd|\ufffd/#17\ufffd|\ufffd/#26\ufffd|\ufffd/#29\ufffd|\ufffd/#31\ufffd|\ufffd/#33\ufffd|\ufffd/#38\ufffd|\ufffd/#40\ufffd|\ufffd/#35\ufffd|\ufffd/#42\ufffd]"}:CLOSE_LIST_ITEM:`,n=F.Zx4(n),[["header",o],["pageTab",""],[1,"tui-space_bottom-3"],e,[1,"tui-list","tui-list_small"],n,[1,"tui-list__item"],[1,"tui-list","tui-list_linear","tui-list_nested","tui-list_extra-small"],["id","form","heading","Basic",3,"content"]]},template:function(e,n){1&e&&(F.TgZ(0,"tui-doc-page",0),F.YNc(1,eF,46,1,"ng-template",1),F.qZA())},directives:[f.q,Z.n,A.f,tF],encapsulation:2,changeDetection:0}),D})(),iF=(()=>{class D{}return D.\u0275fac=function(e){return new(e||D)},D.\u0275mod=F.oAB({type:D}),D.\u0275inj=F.cJS({imports:[[c.ez,t.u5,t.UX,d.TuiMoneyModule,i.TuiStepperModule,i.TuiInputDateModule,i.TuiInputTimeModule,i.TuiTextAreaModule,i.TuiInputSliderModule,i.TuiInputRangeModule,i.TuiCheckboxLabeledModule,i.TuiRadioListModule,r.TuiButtonModule,r.TuiErrorModule,i.TuiFieldErrorPipeModule,i.TuiInputPasswordModule,i.TuiInputPhoneModule,i.TuiInputModule,i.TuiInputNumberModule,d.TuiCurrencyPipeModule,i.TuiInputTagModule,i.TuiInputCountModule,i.TuiSelectModule,r.TuiGroupModule,i.TuiRadioBlockModule,r.TuiTextfieldControllerModule,r.TuiHintModule,r.TuiDataListModule,i.TuiDataListWrapperModule,r.TuiLabelModule,_.fV,C.Bz.forChild((0,_.Ve)(oF))]]}),D})()}}]);