(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46370],{46370:(t,e,n)=>{n.r(e),n.d(e,{ExampleTuiInputModule:()=>se});var i=n(88692),o=n(69900),u=n(91795),a=n(24007),r=n(64500),s=n(29297),l=n(53222),c=n(73588),p=n(84479),d=n(89570),m=n(75695),g=n(64537),f=n(82880),h=n(98204),T=n(54218),x=n(77027),Z=n(41360),_=n(91030),w=n(66596),U=n(79121),C=n(64374),b=n(6707),A=n(68874),v=n(10200),y=n(88494),q=n(3729),L=n(44998),J=n(89437),M=n(87205),N=n(84848),k=n(69956),I=n(33250),S=n(83074),O=n(10977),Q=n(62840),D=n(60404),P=n(43560),H=n(93525),V=n(38868),F=n(91473);let G=(()=>{var t;class e{constructor(){this.testForm=new o.cw({testValue:new o.NI("mail@mail.ru")})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-1"]],decls:4,vars:1,consts:[[3,"formGroup"],["formControlName","testValue"],["tuiTextfield","","type","email"]],template:function(t,e){1&t&&(g.TgZ(0,"form",0)(1,"tui-input",1),g._uU(2," Type an email "),g._UZ(3,"input",2),g.qZA()()),2&t&&g.Q6J("formGroup",e.testForm)},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.K,Z.w,_.M],encapsulation:2,changeDetection:0}),e})(),Y=(()=>{var t;class e{constructor(){this.testForm=new o.cw({testValue:new o.NI("mail@mail.ru")})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-2"]],decls:22,vars:8,consts:[[3,"formGroup"],["formControlName","testValue","tuiTextfieldSize","s",3,"tuiTextfieldCleaner"],["autocomplete","email","tuiTextfield","","type","email"],["formControlName","testValue","tuiTextfieldSize","m",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["formControlName","testValue","tuiTextfieldSize","m",3,"tuiTextfieldCleaner"],["formControlName","testValue",3,"tuiTextfieldCleaner","tuiTextfieldLabelOutside"],["autocomplete","email","placeholder","mail@mail.ru","tuiTextfield","","type","email"],["formControlName","testValue","tuiHintContent","It will be used for sending documents",3,"tuiTextfieldCleaner"],[1,"tui-required"]],template:function(t,e){1&t&&(g.TgZ(0,"form",0)(1,"p")(2,"tui-input",1),g._uU(3," Type an email "),g._UZ(4,"input",2),g.qZA()(),g.TgZ(5,"p")(6,"tui-input",3),g._uU(7," Type an email "),g._UZ(8,"input",2),g.qZA()(),g.TgZ(9,"p")(10,"tui-input",4),g._uU(11," Type an email "),g._UZ(12,"input",2),g.qZA()(),g.TgZ(13,"p")(14,"tui-input",5),g._uU(15," Type an email "),g._UZ(16,"input",6),g.qZA()(),g.TgZ(17,"p")(18,"tui-input",7),g._uU(19," Type an email "),g._UZ(20,"span",8)(21,"input",6),g.qZA()()()),2&t&&(g.Q6J("formGroup",e.testForm),g.xp6(2),g.Q6J("tuiTextfieldCleaner",!0),g.xp6(4),g.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),g.xp6(4),g.Q6J("tuiTextfieldCleaner",!0),g.xp6(4),g.Q6J("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),g.xp6(4),g.Q6J("tuiTextfieldCleaner",!0))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.K,Z.w,_.M,C.b,A.x,v.s,N.bZ],encapsulation:2,changeDetection:0}),e})();var E=n(1913),z=n(63916);let K=(()=>{var t;class e{constructor(){this.testForm=new o.cw({testValue1:new o.NI(""),testValue2:new o.NI("")}),this.maskOptions1={mask:[/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/,/\d/,/\d/]},this.maskOptions2={mask:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,"-",/\d/,/\d/]},this.unmask=t=>t.replaceAll("-","")}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-3"]],decls:14,vars:7,consts:[[3,"formGroup"],["formControlName","testValue1",3,"maskito"],["inputmode","numeric","tuiTextfield",""],["formControlName","testValue2",3,"maskito","tuiUnmaskHandler"]],template:function(t,e){1&t&&(g.TgZ(0,"form",0)(1,"p")(2,"tui-input",1),g._uU(3," Document number "),g._UZ(4,"input",2),g.qZA()(),g.TgZ(5,"p")(6,"tui-input",3),g._uU(7," Secret number "),g._UZ(8,"input",2),g.qZA()()(),g.TgZ(9,"p"),g._uU(10,"Value stored in control:"),g.qZA(),g.TgZ(11,"pre"),g._uU(12),g.ALo(13,"json"),g.qZA()),2&t&&(g.Q6J("formGroup",e.testForm),g.xp6(2),g.Q6J("maskito",e.maskOptions1),g.xp6(4),g.Q6J("maskito",e.maskOptions2)("tuiUnmaskHandler",e.unmask),g.xp6(6),g.Oqu(g.lcZ(13,5,e.testForm.value)))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.K,Z.w,_.M,E.ro,z.s,i.Ts],encapsulation:2,changeDetection:0}),e})();var R=n(73336),B=n(27969),$=n(98537),X=n(22436),j=n(44124),W=n(20933),tt=n(35065),et=n(52219),nt=n(50020),it=n(40939),ot=n(10650),ut=n(83653);const at=["avatar"];function rt(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"button",12),g.NdJ("click",(function(){const e=g.CHM(t).$implicit,n=g.oxw(4);return g.KtG(n.onSelected(e))})),g._uU(1),g.TgZ(2,"tui-avatar",13),g._uU(3),g.ALo(4,"tuiInitials"),g.qZA()()}if(2&t){const t=e.$implicit;g.Q6J("value",t.toString()),g.xp6(1),g.hij(" ",t," "),g.xp6(1),g.Q6J("src",t.avatarUrl),g.xp6(1),g.hij(" ",g.lcZ(4,4,t.toString())," ")}}function st(t,e){if(1&t&&(g.TgZ(0,"tui-data-list"),g.YNc(1,rt,5,6,"button",11),g.qZA()),2&t){const t=g.oxw(2).tuiLet;g.xp6(1),g.Q6J("ngForOf",t)}}function lt(t,e){1&t&&(g.ynx(0),g.YNc(1,st,2,1,"tui-data-list",10),g.BQk())}function ct(t,e){if(1&t&&(g.TgZ(0,"tui-input",7),g._uU(1," User "),g._UZ(2,"input",8),g.YNc(3,lt,2,0,"ng-container",9),g.qZA()),2&t){const t=e.tuiLet,n=g.oxw();g.Q6J("tuiTextfieldCustomContent",n.content),g.xp6(3),g.Q6J("ngIf",null==t?null:t.length)}}function pt(t,e){if(1&t&&(g.TgZ(0,"tui-avatar",15),g._uU(1),g.ALo(2,"tuiInitials"),g.qZA()),2&t){const t=g.oxw(2);g.Q6J("src",t.lastUser.avatarUrl),g.xp6(1),g.hij(" ",g.lcZ(2,2,t.lastUser.toString())," ")}}function dt(t,e){if(1&t&&g.YNc(0,pt,3,4,"tui-avatar",14),2&t){const t=g.oxw();g.Q6J("ngIf",t.lastUser)}}function mt(t,e){if(1&t&&g._UZ(0,"tui-data-list-wrapper",16),2&t){const t=g.oxw(),e=g.MAs(9);g.Q6J("itemContent",e)("items",t.accounts)}}function gt(t,e){if(1&t&&(g.TgZ(0,"div"),g._uU(1),g.TgZ(2,"span"),g._uU(3),g.ALo(4,"async"),g.ALo(5,"tuiAmount"),g.qZA()()),2&t){const t=e.$implicit;g.xp6(1),g.hij(" ",t.name," "),g.xp6(2),g.Oqu(g.lcZ(4,2,g.xi3(5,4,t.amount,"RUB")))}}class ft{constructor(t,e,n=null,i=[],o=""){this.firstName=t,this.lastName=e,this.avatarUrl=n,this.accounts=i,this.card=o}toString(){return`${this.firstName} ${this.lastName}`}}class ht{constructor(t,e,n,i,o){this.id=t,this.name=e,this.amount=n,this.currency=i,this.cardSvg=o}toString(){return this.name}}const Tt=[new ht("1","RUB",24876.55,a.TuiCurrency.Ruble,"https://ng-web-apis.github.io/dist/assets/images/common.svg"),new ht("2","USD",335,a.TuiCurrency.Dollar,"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg")],xt=[new ht("3","EUR",1e4,a.TuiCurrency.Euro,"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg"),new ht("4","PND",100,a.TuiCurrency.Pound,"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg")],Zt=[new ft("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368",Tt),new ft("Alex","Inkin",R.Ll`/images/avatar.jpg`,xt,"1234123412341234"),new ft("Dmitriy","Demenskiy"),new ft("Evgeniy","Mamaev"),new ft("Ivan","Ishmametiev"),new ft("Igor","Katsuba"),new ft("Yulia","Tsareva")];let _t=(()=>{var t;class e{constructor(){this.user=new o.NI(""),this.testForm=new o.cw({user:this.user,account:new o.NI(""),card:new o.NI("")}),this.lastUser=null,this.users$=(0,l.tuiControlValue)(this.user).pipe((0,B.U)((t=>{const e=Zt.filter((e=>(0,l.TUI_DEFAULT_MATCHER)(e,t)));return 1!==e.length||String(e[0]).toLowerCase()!==t.toLowerCase()?e:(this.onSelected(e[0]),[])})))}get card(){const t=this.testForm.get("card").value;if((t?.length??0)<7)return null;switch(t?.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}get isUserSelected(){return null!==this.lastUser&&this.lastUser.toString().toLowerCase()===this.testForm.get("user")?.value?.toLowerCase()}get content(){return this.avatar&&this.isUserSelected?this.avatar:""}get accounts(){return this.isUserSelected&&this.lastUser?.accounts||[]}onSelected(t){this.lastUser=t,this.testForm.get("card").setValue(t.card)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-4"]],viewQuery:function(t,e){if(1&t&&g.Gf(at,5),2&t){let t;g.iGM(t=g.CRH())&&(e.avatar=t.first)}},decls:12,vars:6,consts:[[1,"container",3,"formGroup"],["formControlName","user",3,"tuiTextfieldCustomContent",4,"tuiLet"],["avatar",""],["formControlName","account",1,"tui-space_vertical-5"],[3,"itemContent","items",4,"tuiDataList"],["accountContent",""],["formControlName","card",3,"cardSrc","tuiTextfieldCleaner"],["formControlName","user",3,"tuiTextfieldCustomContent"],["placeholder","Type your name or surname","tuiTextfield",""],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"value","click",4,"ngFor","ngForOf"],["tuiOption","",3,"value","click"],["size","xs",3,"src"],["size","s",3,"src",4,"ngIf"],["size","s",3,"src"],[3,"itemContent","items"]],template:function(t,e){1&t&&(g.TgZ(0,"form",0),g.YNc(1,ct,4,2,"tui-input",1),g.ALo(2,"async"),g.YNc(3,dt,1,1,"ng-template",null,2,g.W1O),g.TgZ(5,"tui-input",3),g._uU(6," Account "),g.YNc(7,mt,1,2,"tui-data-list-wrapper",4),g.YNc(8,gt,6,7,"ng-template",null,5,g.W1O),g.qZA(),g.TgZ(10,"tui-input-card",6),g._uU(11," Card number "),g.qZA()()),2&t&&(g.Q6J("formGroup",e.testForm),g.xp6(1),g.Q6J("tuiLet",g.lcZ(2,4,e.users$)),g.xp6(9),g.Q6J("cardSrc",e.card)("tuiTextfieldCleaner",!0))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,i.sg,i.O5,x.K,Z.w,_.M,$.z,X.a,j.J,C.b,b.B,W.q,tt.v,et.g,nt.e,it.L,i.Ov,ot.E,ut.X],styles:[".container[_ngcontent-%COMP%]{max-width:18rem}"],changeDetection:0}),e})();var wt=n(30644);let Ut=(()=>{var t;class e{constructor(){this.testForm=new o.cw({testValue:new o.NI("mail@mail.ru")})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-5"]],decls:21,vars:4,consts:[[3,"formGroup"],["routerLink","/directives/mode","tuiLink",""],["formControlName","testValue",3,"tuiTextfieldCleaner"],["placeholder","mail@mail.ru","tuiTextfield","","type","email"],[1,"wrapper","wrapper_dark"],["formControlName","testValue","tuiMode","onDark",3,"tuiTextfieldCleaner"],[1,"wrapper","wrapper_light"],["formControlName","testValue","tuiMode","onLight",3,"tuiTextfieldCleaner"]],template:function(t,e){1&t&&(g.TgZ(0,"form",0)(1,"tui-notification"),g._uU(2," Custom mode is set with "),g.TgZ(3,"a",1)(4,"code"),g._uU(5,"tuiMode"),g.qZA()(),g._uU(6," directive "),g.qZA(),g.TgZ(7,"p")(8,"tui-input",2),g._uU(9," Type an email "),g._UZ(10,"input",3),g.qZA()(),g.TgZ(11,"div")(12,"p",4)(13,"tui-input",5),g._uU(14," Type an email "),g._UZ(15,"input",3),g.qZA()()(),g.TgZ(16,"div")(17,"p",6)(18,"tui-input",7),g._uU(19," Type an email "),g._UZ(20,"input",3),g.qZA()()()()),2&t&&(g.Q6J("formGroup",e.testForm),g.xp6(8),g.Q6J("tuiTextfieldCleaner",!0),g.xp6(5),g.Q6J("tuiTextfieldCleaner",!0),g.xp6(5),g.Q6J("tuiTextfieldCleaner",!0))},dependencies:[u.rH,o._Y,o.JJ,o.JL,o.sg,o.u,x.K,Z.w,_.M,w.V,wt.w,U.L,C.b],styles:[".wrapper[_ngcontent-%COMP%]{padding:.75rem}.wrapper_dark[_ngcontent-%COMP%]{background-color:#30406a}.wrapper_light[_ngcontent-%COMP%]{background-color:#e5e7ea}"],changeDetection:0}),e})();var Ct=n(16753),bt=n(13735),At=n(50170),vt=n(1414),yt=n(19582),qt=n(96408),Lt=n(48598),Jt=n(62047),Mt=n(40813);function Nt(t,e){if(1&t&&g._UZ(0,"tui-data-list-wrapper",12),2&t){const t=g.oxw();g.Q6J("items",t.items)}}let kt=(()=>{var t;class e{constructor(){this.items=["Black","Gold","Silver"],this.form=new o.cw({name:new o.NI("",o.kI.required),date:new o.NI(null,o.kI.required),color:new o.NI(null,o.kI.required),quantity:new o.NI(null),sum:new o.NI(255)})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-6"]],decls:39,vars:3,consts:[["tuiTextfieldSize","m",3,"formGroup","tuiTextfieldLabelOutside"],["tuiTable","",1,"table"],["tuiTh","",1,"name"],["tuiTh",""],["tuiTd",""],["formControlName","name"],["placeholder","Ivan Ivanov","tuiTextfield",""],["formControlName","date"],["formControlName","color"],[3,"items",4,"tuiDataList"],["decimal","never","formControlName","quantity"],["formControlName","sum",3,"readOnly"],[3,"items"]],template:function(t,e){1&t&&(g.TgZ(0,"p")(1,"code"),g._uU(2,"tuiTable"),g.qZA(),g._uU(3," directive from "),g.TgZ(4,"code"),g._uU(5,"@taiga-ui/addon-table"),g.qZA()(),g.TgZ(6,"form",0)(7,"table",1)(8,"thead")(9,"tr")(10,"th",2),g._uU(11," Name "),g.qZA(),g.TgZ(12,"th",3),g._uU(13,"Date"),g.qZA(),g.TgZ(14,"th",3),g._uU(15,"Gender"),g.qZA(),g.TgZ(16,"th",3),g._uU(17,"Quantity"),g.qZA(),g.TgZ(18,"th",3),g._uU(19,"Sum, $"),g.qZA()()(),g.TgZ(20,"tbody")(21,"tr")(22,"td",4)(23,"tui-input",5),g._uU(24," Name "),g._UZ(25,"input",6),g.qZA()(),g.TgZ(26,"td",4)(27,"tui-input-date",7),g._uU(28,"Date"),g.qZA()(),g.TgZ(29,"td",4)(30,"tui-select",8),g._uU(31," Color "),g.YNc(32,Nt,1,1,"tui-data-list-wrapper",9),g.qZA()(),g.TgZ(33,"td",4)(34,"tui-input-number",10),g._uU(35," Quantity "),g.qZA()(),g.TgZ(36,"td",4)(37,"tui-input-number",11),g._uU(38," Sum "),g.qZA()()()()()()),2&t&&(g.xp6(6),g.Q6J("formGroup",e.form)("tuiTextfieldLabelOutside",!0),g.xp6(31),g.Q6J("readOnly",!0))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.K,Z.w,_.M,Ct.q,bt.g,At.u,vt.O,yt.c,qt.W,Lt.K,Jt.j,Mt.k,A.x,v.s,et.g,nt.e],styles:[".table[_ngcontent-%COMP%]{width:40rem}.name[_ngcontent-%COMP%]{width:10rem}"],changeDetection:0}),e})();var It=n(34880);function St(t,e){1&t&&g._UZ(0,"tui-svg",2)}let Ot=(()=>{var t;class e{constructor(){this.control=new o.NI("",[o.kI.required,o.kI.minLength(5)])}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-7"]],decls:4,vars:3,consts:[["tuiHintContent","Type 5 letters or more",3,"formControl","tuiTextfieldCleaner","tuiTextfieldCustomContent"],["success",""],["src","tuiIconCheck",1,"success","tui-space_left-3"]],template:function(t,e){if(1&t&&(g.TgZ(0,"tui-input",0),g._uU(1," Hello\n"),g.qZA(),g.YNc(2,St,1,0,"ng-template",null,1,g.W1O)),2&t){const t=g.MAs(3);g.Q6J("formControl",e.control)("tuiTextfieldCleaner",!0)("tuiTextfieldCustomContent",e.control.valid?t:"")}},dependencies:[o.JJ,o.oH,x.K,Z.w,It.P,C.b,b.B,N.bZ],styles:[".success[_ngcontent-%COMP%]{position:relative;color:var(--tui-success-fill)}"],changeDetection:0}),e})();var Qt=n(51927),Dt=n(61528),Pt=n(84945);function Ht(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"button",5),g.NdJ("click",(function(){const e=g.CHM(t).$implicit,n=g.oxw(4);return g.KtG(n.onClick(e))})),g.TgZ(1,"tui-avatar",6),g._uU(2),g.ALo(3,"tuiInitials"),g.qZA(),g.TgZ(4,"span",7),g._uU(5),g.qZA()()}if(2&t){const t=e.$implicit;g.Q6J("disabled",t.disabled)("value",t),g.xp6(1),g.Q6J("src",t.avatarUrl),g.xp6(1),g.hij(" ",g.lcZ(3,5,t.toString())," "),g.xp6(3),g.Oqu(t)}}function Vt(t,e){if(1&t&&(g.TgZ(0,"tui-data-list"),g.YNc(1,Ht,6,7,"button",4),g.qZA()),2&t){const t=g.oxw(2).tuiLet;g.xp6(1),g.Q6J("ngForOf",t)}}function Ft(t,e){1&t&&(g.ynx(0),g.YNc(1,Vt,2,1,"tui-data-list",3),g.BQk())}function Gt(t,e){if(1&t&&(g.TgZ(0,"tui-input",1),g._uU(1," Enter your name "),g.YNc(2,Ft,2,0,"ng-container",2),g.qZA()),2&t){const t=e.tuiLet,n=g.oxw();g.Q6J("formControl",n.control),g.xp6(2),g.Q6J("ngIf",null==t?null:t.length)}}class Yt{constructor(t,e,n=null,i=!1){this.firstName=t,this.lastName=e,this.avatarUrl=n,this.disabled=i}toString(){return`${this.firstName} ${this.lastName}`}}const Et=[new Yt("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new Yt("Alex","Inkin",R.Ll`/images/avatar.jpg`),new Yt("Gabriel José","de la Concordia «Gabo» García Márquez")];let zt=(()=>{var t;class e{constructor(){this.control=new o.NI(""),this.firstName="",this.lastName="",this.items$=this.control.valueChanges.pipe((0,Qt.O)(""),(0,Dt.w)((t=>this.request(t??"").pipe((0,B.U)((e=>1===e.length&&String(e[0])===t?(this.onClick(e[0]),[]):e))))),(0,Qt.O)(Et))}onClick({lastName:t,firstName:e}){this.lastName=t,this.firstName=e}request(t){return(0,Pt.of)(Et.filter((e=>(0,l.TUI_DEFAULT_MATCHER)(e,t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-8"]],decls:5,vars:5,consts:[[3,"formControl",4,"tuiLet"],[3,"formControl"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"disabled","value","click",4,"ngFor","ngForOf"],["tuiOption","",3,"disabled","value","click"],["size","xs",1,"avatar",3,"src"],[1,"name"]],template:function(t,e){1&t&&(g.YNc(0,Gt,3,2,"tui-input",0),g.ALo(1,"async"),g.TgZ(2,"p"),g._uU(3,"Parsed on complete match:"),g.qZA(),g._uU(4)),2&t&&(g.Q6J("tuiLet",g.lcZ(1,3,e.items$)),g.xp6(4),g.AsE("\n",e.firstName," ",e.lastName,"\n"))},dependencies:[o.JJ,o.oH,i.sg,i.O5,x.K,Z.w,j.J,W.q,tt.v,et.g,it.L,i.Ov,ut.X],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;margin-right:auto}"],changeDetection:0}),e})(),Kt=(()=>{var t;class e{constructor(){this.value=""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-9"]],decls:3,vars:2,consts:[["tuiHintContent","لا يدعمه Safari أدناه 12.1","tuiHintDirection","bottom-right","tuiTextfieldIconLeft","tuiIconSearchLarge",1,"input",3,"tuiTextfieldCleaner","ngModel","ngModelChange"],["placeholder","اكتب الاستعلام الخاص بك","tuiTextfield",""]],template:function(t,e){1&t&&(g.TgZ(0,"tui-input",0),g.NdJ("ngModelChange",(function(t){return e.value=t})),g._uU(1," بحث "),g._UZ(2,"input",1),g.qZA()),2&t&&g.Q6J("tuiTextfieldCleaner",!0)("ngModel",e.value)},dependencies:[o.JJ,o.On,x.K,Z.w,_.M,C.b,q.a,N.bZ],styles:[".input[_ngcontent-%COMP%]{width:20rem;direction:rtl;text-align:right}"],changeDetection:0}),e})(),Rt=(()=>{var t;class e{constructor(){this.testForm=new o.cw({testValue:new o.NI("")})}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=g.Xpm({type:t,selectors:[["tui-input-example-10"]],decls:21,vars:2,consts:[[3,"formGroup"],["formControlName","testValue"],["autocomplete","email","translate","no","tuiTextfield","","type","email"],[1,"tui-space_top-4","t-hr"],["href","https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password","rel","noreferrer","target","_blank","tuiLink",""],[1,"tui-space_vertical-4"],["autocomplete","new-password","translate","no","tuiTextfield","","type","email"],[1,"tui-space_top-4"]],template:function(t,e){1&t&&(g.TgZ(0,"form",0)(1,"tui-input",1),g._uU(2," Type an email "),g._UZ(3,"input",2),g.qZA()(),g._UZ(4,"hr",3),g.TgZ(5,"h4"),g._uU(6," Preventing autofilling - "),g.TgZ(7,"a",4),g._uU(8," MDN "),g.qZA()(),g.TgZ(9,"tui-notification",5)(10,"code"),g._uU(11,"autocomplete=off"),g.qZA(),g._uU(12," is largely ignored in modern browsers - primarily due to password managers etc.\n"),g.qZA(),g.TgZ(13,"form",0)(14,"tui-input",1),g._uU(15," Type an email "),g._UZ(16,"input",6),g.qZA()(),g.TgZ(17,"tui-notification",7),g._uU(18," This is a hint, which browsers are not required to comply with. However modern browsers have stopped autofilling elements with "),g.TgZ(19,"code"),g._uU(20,'autocomplete="new-password"'),g.qZA()()),2&t&&(g.Q6J("formGroup",e.testForm),g.xp6(13),g.Q6J("formGroup",e.testForm))},dependencies:[o._Y,o.JJ,o.JL,o.sg,o.u,x.K,Z.w,_.M,w.V,U.L],encapsulation:2,changeDetection:0}),e})();const Bt=["justLongText"];function $t(t,e){if(1&t&&(g.TgZ(0,"div",3),g._uU(1," Input — is a single-line textfield. It's not recommended to use it with numbers, because the value type of this component is a string "),g.qZA(),g.TgZ(2,"p"),g._uU(3,"Inputs for other types of data:"),g.qZA(),g.TgZ(4,"blockquote")(5,"ul")(6,"li")(7,"a",4)(8,"code"),g._uU(9,"Textarea"),g.qZA()(),g._uU(10," — for multiline text "),g.qZA(),g.TgZ(11,"li")(12,"a",5)(13,"code"),g._uU(14,"InputDate"),g.qZA()(),g._uU(15," — for dates "),g.qZA(),g.TgZ(16,"li")(17,"a",6)(18,"code"),g._uU(19,"InputDateRange"),g.qZA()(),g._uU(20," — for a range of dates "),g.qZA(),g.TgZ(21,"li")(22,"a",7)(23,"code"),g._uU(24,"InputNumber"),g.qZA()(),g._uU(25," — for number (with measurement postfix) "),g.qZA(),g.TgZ(26,"li")(27,"a",8)(28,"code"),g._uU(29,"InputPassword"),g.qZA()(),g._uU(30," — for passwords "),g.qZA(),g.TgZ(31,"li")(32,"a",9)(33,"code"),g._uU(34,"InputPhone"),g.qZA()(),g._uU(35," — for phone numbers "),g.qZA(),g.TgZ(36,"li")(37,"a",10)(38,"code"),g._uU(39,"InputTag"),g.qZA()(),g._uU(40," — for input tags "),g.qZA(),g.TgZ(41,"li")(42,"a",11)(43,"code"),g._uU(44,"InputRange"),g.qZA()(),g._uU(45," , "),g.TgZ(46,"a",12)(47,"code"),g._uU(48,"InputSlider"),g.qZA()(),g._uU(49," — for accurate number values "),g.qZA(),g.TgZ(50,"li")(51,"a",13)(52,"code"),g._uU(53,"Slider"),g.qZA()(),g._uU(54," , "),g.TgZ(55,"a",14)(56,"code"),g._uU(57,"Range"),g.qZA()(),g._uU(58," — for not accurate number values "),g.qZA()()(),g.TgZ(59,"tui-doc-example",15)(60,"tui-notification",16),g._uU(61," If you need to set some attributes or listen to events on native "),g.TgZ(62,"code"),g._uU(63,"input"),g.qZA(),g._uU(64," , you can put it inside with "),g.TgZ(65,"code"),g._uU(66,"Textfield"),g.qZA(),g._uU(67," directive as shown below "),g.qZA(),g._UZ(68,"tui-input-example-1"),g.qZA(),g.TgZ(69,"tui-doc-example",17),g._UZ(70,"tui-input-example-2"),g.qZA(),g.TgZ(71,"tui-doc-example",18)(72,"tui-notification"),g._uU(73," Taiga UI input is compatible with "),g.TgZ(74,"a",19),g._uU(75," Maskito "),g.qZA()(),g._UZ(76,"tui-input-example-3"),g.TgZ(77,"tui-notification")(78,"code"),g._uU(79,"TuiUnmaskHandlerModule"),g.qZA(),g._uU(80," allows to store value without mask in form control "),g.qZA()(),g.TgZ(81,"tui-doc-example",20),g._UZ(82,"tui-input-example-4"),g.qZA(),g.TgZ(83,"tui-doc-example",21),g._UZ(84,"tui-input-example-5"),g.qZA(),g.TgZ(85,"tui-doc-example",22),g._UZ(86,"tui-input-example-6"),g.qZA(),g.TgZ(87,"tui-doc-example",23),g._UZ(88,"tui-input-example-7"),g.qZA(),g.TgZ(89,"tui-doc-example",24),g._UZ(90,"tui-input-example-8"),g.qZA(),g.TgZ(91,"tui-doc-example",25),g._UZ(92,"tui-input-example-9"),g.qZA(),g.TgZ(93,"tui-doc-example",26),g._UZ(94,"tui-input-example-10"),g.qZA()),2&t){const t=g.oxw();g.xp6(59),g.Q6J("content",t.example1),g.xp6(10),g.Q6J("content",t.example2),g.xp6(2),g.Q6J("content",t.example3),g.xp6(10),g.Q6J("content",t.example4),g.xp6(2),g.Q6J("content",t.example5),g.xp6(2),g.Q6J("content",t.example6),g.xp6(2),g.Q6J("content",t.example7),g.xp6(2),g.Q6J("content",t.example8),g.xp6(2),g.Q6J("content",t.example9),g.xp6(2),g.Q6J("content",t.example10)}}function Xt(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"tui-input",35),g.NdJ("tuiDropdownOpenChange",(function(e){g.CHM(t);const n=g.oxw(2);return g.KtG(n.dropdownOpen.next(e))})),g.ALo(1,"async"),g._uU(2," Label "),g.TgZ(3,"strong"),g._uU(4,"strong text"),g.qZA(),g._UZ(5,"input",36),g.qZA()}if(2&t){const t=g.oxw(2);g.Udp("text-align",t.textAlign),g.Q6J("focusable",t.focusable)("formControl",t.control)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoInvalid",t.pseudoInvalid)("readOnly",t.readOnly)("tuiDropdownAlign",t.dropdownAlign)("tuiDropdownDirection",t.dropdownDirection)("tuiDropdownLimitWidth",t.dropdownLimitWidth)("tuiDropdownMaxHeight",t.dropdownMaxHeight)("tuiDropdownMinHeight",t.dropdownMinHeight)("tuiDropdownOffset",t.dropdownOffset)("tuiDropdownOpen",!!g.lcZ(1,28,t.dropdownOpen))("tuiHintAppearance",t.hintAppearance)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldCustomContent",t.customContent)("tuiTextfieldFiller",t.filler)("tuiTextfieldIcon",t.icon)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldPostfix",t.postfix)("tuiTextfieldPrefix",t.prefix)("tuiTextfieldSize",t.size),g.xp6(5),g.Q6J("placeholder",t.placeholder)}}function jt(t,e){if(1&t&&(g.TgZ(0,"div",37)(1,"div",38),g._uU(2),g.qZA(),g.TgZ(3,"span"),g._uU(4),g.ALo(5,"async"),g.ALo(6,"tuiAmount"),g.qZA()()),2&t){const t=e.$implicit;g.xp6(2),g.Oqu(t.name),g.xp6(2),g.Oqu(g.lcZ(5,2,g.xi3(6,4,t.balance,"RUB")))}}function Wt(t,e){1&t&&(g._uU(0," Disabled state (use "),g.TgZ(1,"code"),g._uU(2,"formControl.disable()"),g.qZA(),g._uU(3," ) "))}function te(t,e){1&t&&g._uU(0," Icon content. If content is a string, it is used as stringified svg or a name of an icon ")}function ee(t,e){1&t&&(g._uU(0," Placeholder (use external "),g._UZ(1,"code",39),g._uU(2," to set it) "))}function ne(t,e){1&t&&g._uU(0," Custom align content by text-align ")}function ie(t,e){if(1&t){const t=g.EpF();g.TgZ(0,"tui-doc-demo",27),g.YNc(1,Xt,6,30,"ng-template"),g.qZA(),g.YNc(2,jt,7,7,"ng-template",null,28,g.W1O),g.TgZ(4,"tui-doc-documentation"),g.YNc(5,Wt,4,0,"ng-template",29),g.NdJ("documentationPropertyValueChange",(function(e){g.CHM(t);const n=g.oxw();return g.KtG(n.disabled=e)})),g.YNc(6,te,1,0,"ng-template",30),g.NdJ("documentationPropertyValueChange",(function(e){g.CHM(t);const n=g.oxw();return g.KtG(n.icon=e)})),g.YNc(7,ee,3,0,"ng-template",31),g.NdJ("documentationPropertyValueChange",(function(e){g.CHM(t);const n=g.oxw();return g.KtG(n.placeholder=e)})),g.qZA(),g._UZ(8,"inherited-documentation",32),g.TgZ(9,"tui-doc-documentation",33),g.YNc(10,ne,1,0,"ng-template",34),g.NdJ("documentationPropertyValueChange",(function(e){g.CHM(t);const n=g.oxw();return g.KtG(n.textAlign=e)})),g.qZA()}if(2&t){const t=g.oxw();g.Q6J("control",t.control),g.xp6(5),g.Q6J("documentationPropertyValue",t.disabled),g.xp6(1),g.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon),g.xp6(1),g.Q6J("documentationPropertyValue",t.placeholder),g.xp6(1),g.Q6J("dropdown",!0),g.xp6(2),g.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function oe(t,e){if(1&t&&(g.TgZ(0,"ol",40)(1,"li")(2,"p"),g._uU(3," Import an Angular module for forms and "),g.TgZ(4,"code"),g._uU(5,"TuiInputModule"),g.qZA(),g._uU(6," in the same module where you want to use our component: "),g.qZA(),g._UZ(7,"tui-doc-code",41),g.qZA(),g.TgZ(8,"li")(9,"p"),g._uU(10," Declare a form ( "),g.TgZ(11,"code"),g._uU(12,"FormGroup"),g.qZA(),g._uU(13," ) or a control ( "),g.TgZ(14,"code"),g._uU(15,"FormControl"),g.qZA(),g._uU(16," ) in your component: "),g.qZA(),g._UZ(17,"tui-doc-code",42),g.qZA(),g.TgZ(18,"li")(19,"p"),g._uU(20,"Add to the template:"),g.qZA(),g._UZ(21,"tui-doc-code",43),g.qZA()()),2&t){const t=g.oxw();g.xp6(7),g.Q6J("code",t.exampleModule),g.xp6(10),g.Q6J("code",t.exampleForm),g.xp6(4),g.Q6J("code",t.exampleHtml)}}function ue(t,e){1&t&&g._uU(0,"LongTextContent")}const ae="<span>LongTextContent</span>";let re=(()=>{var t;class e extends f.b{constructor(){super(...arguments),this.iconVariants=["","tuiIconSearchLarge","tuiIconCalendarLarge"],this.iconLeft=this.iconVariants[0],this.control=new o.NI("111",o.kI.required),this.customContentVariants=["","tuiIconSearchLarge","tuiIconCalendarLarge","tuiIconVisaMono","tuiIconMastercardMono",ae],this.exampleModule=n.e(47026).then(n.t.bind(n,47026,17)),this.exampleHtml=n.e(14378).then(n.t.bind(n,14378,17)),this.exampleForm=n.e(54905).then(n.t.bind(n,54905,17)),this.example1={TypeScript:n.e(47109).then(n.t.bind(n,47109,17)),HTML:n.e(64867).then(n.t.bind(n,64867,17))},this.example2={TypeScript:n.e(96501).then(n.t.bind(n,96501,17)),HTML:n.e(91839).then(n.t.bind(n,91839,17))},this.example3={TypeScript:n.e(17161).then(n.t.bind(n,17161,17)),HTML:n.e(5232).then(n.t.bind(n,5232,17))},this.example4={TypeScript:n.e(81470).then(n.t.bind(n,81470,17)),HTML:n.e(57933).then(n.t.bind(n,57933,17)),LESS:n.e(8345).then(n.t.bind(n,8345,17))},this.example5={TypeScript:n.e(92727).then(n.t.bind(n,92727,17)),HTML:n.e(54879).then(n.t.bind(n,54879,17)),LESS:n.e(26492).then(n.t.bind(n,26492,17))},this.example6={TypeScript:n.e(95446).then(n.t.bind(n,95446,17)),HTML:n.e(49671).then(n.t.bind(n,49671,17)),LESS:n.e(94430).then(n.t.bind(n,94430,17))},this.example7={TypeScript:n.e(72092).then(n.t.bind(n,72092,17)),HTML:n.e(65945).then(n.t.bind(n,65945,17)),LESS:n.e(57150).then(n.t.bind(n,57150,17))},this.example8={TypeScript:n.e(11962).then(n.t.bind(n,11962,17)),HTML:n.e(71081).then(n.t.bind(n,71081,17)),LESS:n.e(99385).then(n.t.bind(n,99385,17))},this.example9={TypeScript:n.e(2132).then(n.t.bind(n,2132,17)),HTML:n.e(98252).then(n.t.bind(n,98252,17)),LESS:n.e(34183).then(n.t.bind(n,34183,17))},this.example10={TypeScript:n.e(65236).then(n.t.bind(n,65236,17)),HTML:n.e(11471).then(n.t.bind(n,11471,17))},this.icon=this.iconVariants[0],this.placeholder="Field placeholder"}get customContent(){return this.customContentSelected===ae?this.longTextRef:this.customContentSelected}set customContent(t){this.customContentSelected=t}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=g.n5z(t)))(n||t)}}(),t.ɵcmp=g.Xpm({type:t,selectors:[["example-tui-input"]],viewQuery:function(t,e){if(1&t&&g.Gf(Bt,7),2&t){let t;g.iGM(t=g.CRH())&&(e.longTextRef=t.first)}},features:[g._Bn([{provide:h.x,useExisting:(0,g.Gpc)((()=>t))}]),g.qOj],decls:6,vars:0,consts:[["header","Input","package","KIT","type","components"],["pageTab",""],["justLongText",""],[1,"tui-space_bottom-3"],["routerLink","/components/textarea","tuiLink",""],["routerLink","/components/input-date","tuiLink",""],["routerLink","/components/input-date-range","tuiLink",""],["routerLink","/components/input-number","tuiLink",""],["routerLink","/components/input-password","tuiLink",""],["routerLink","/components/input-phone","tuiLink",""],["routerLink","/components/input-tag","tuiLink",""],["routerLink","/components/input-range","tuiLink",""],["routerLink","/components/input-slider","tuiLink",""],["routerLink","/components/slider","tuiLink",""],["routerLink","/components/range","tuiLink",""],["id","base","heading","Basic",3,"content"],[1,"tui-space_bottom-4"],["id","sizes","heading","sizes",3,"content"],["id","mask","heading","Mask",3,"content"],["href","https://maskito.dev","rel","noreferrer","target","_blank","tuiLink",""],["id","autocomplete","heading","Autocomplete with dropdown",3,"content"],["id","modes","heading","Modes",3,"content"],["id","table","heading","Table",3,"content"],["id","success","description","A check mark by success validation","heading","Check",3,"content"],["id","datalist","heading","DataList",3,"content"],["id","rtl","heading","Direction: RTL",3,"content"],["id","autofill","heading","Disable browser autofill",3,"content"],[3,"control"],["itemContent",""],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","tuiTextfieldIcon","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","placeholder","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyName","style.text-align","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"focusable","formControl","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMaxHeight","tuiDropdownMinHeight","tuiDropdownOffset","tuiDropdownOpen","tuiHintAppearance","tuiHintContent","tuiHintDirection","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldFiller","tuiTextfieldIcon","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldPostfix","tuiTextfieldPrefix","tuiTextfieldSize","tuiDropdownOpenChange"],["tuiTextfield","",3,"placeholder"],[1,"account"],[1,"name"],["tuiText","<input tuiTextfield />"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(t,e){1&t&&(g.TgZ(0,"tui-doc-page",0),g.YNc(1,$t,95,10,"ng-template",1),g.YNc(2,ie,11,8,"ng-template",1),g.YNc(3,oe,22,3,"ng-template",1),g.qZA(),g.YNc(4,ue,1,0,"ng-template",null,2,g.W1O))},dependencies:[u.rH,T.w,o.JJ,o.oH,x.K,Z.w,_.M,w.V,U.L,C.b,b.B,A.x,v.s,y.A,q.a,L.A,J.T,M.k,N.bZ,k.o,I.Ek,S.c,O.F,Q.z,D.B,P.q,H.n,V.f,F.v,G,Y,K,_t,Ut,kt,Ot,zt,Kt,Rt,i.Ov,ot.E],styles:[".account[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:3.5rem;padding:.5rem 0;box-sizing:border-box}.name[_ngcontent-%COMP%]{opacity:.7}"],changeDetection:0}),e})(),se=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵmod=g.oAB({type:t}),t.ɵinj=g.cJS({imports:[u.Bz,m.f,o.UX,o.u5,i.ez,p.TuiInputModule,p.TuiInputNumberModule,p.TuiSelectModule,l.TuiMapperPipeModule,c.TuiLinkModule,c.TuiModeModule,s.TuiTableModule,p.TuiInputDateModule,c.TuiNotificationModule,l.TuiRepeatTimesModule,c.TuiSvgModule,p.TuiRadioListModule,c.TuiButtonModule,a.TuiInputCardModule,p.TuiAvatarComponent,c.TuiPrimitiveTextfieldModule,c.TuiTextfieldControllerModule,c.TuiHintModule,c.TuiDropdownModule,c.TuiDataListModule,p.TuiDataListWrapperModule,l.TuiLetModule,d.wq,r.fV,u.Bz.forChild((0,r.Ve)(re)),r.Zp,p.TuiUnmaskHandlerModule]}),e})()}}]);