(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53047],{53047:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var i=n(16727),a=n(87742),s=n(42776),o=n(49493),r=n(7287),l=n(89684),c=n(78568),u=n(64204),m=n(25358),f=n(55514),p=n(76145),h=n(75407),d=n(7740),g=n(21154);function b(t,e){if(1&t){const t=h.RV6();h.j41(0,"button",5),h.bIt("click",(function(){const e=h.eBV(t).$implicit,n=h.XpG(4);return h.Njj(n.onClick(e))})),h.j41(1,"tui-avatar",6),h.EFF(2),h.nI1(3,"tuiInitials"),h.k0s(),h.j41(4,"span",7),h.EFF(5),h.k0s()()}if(2&t){const t=e.$implicit;h.Y8G("disabled",t.disabled)("value",t),h.R7$(1),h.Y8G("src",t.avatarUrl),h.R7$(1),h.SpI(" ",h.bMT(3,5,t.toString())," "),h.R7$(3),h.JRh(t)}}function k(t,e){if(1&t&&(h.j41(0,"tui-data-list"),h.DNE(1,b,6,7,"button",4),h.k0s()),2&t){const t=h.XpG(2).tuiLet;h.R7$(1),h.Y8G("ngForOf",t)}}function N(t,e){1&t&&(h.qex(0),h.DNE(1,k,2,1,"tui-data-list",3),h.bVm())}function v(t,e){if(1&t&&(h.j41(0,"tui-input",1),h.EFF(1," Enter your name "),h.DNE(2,N,2,0,"ng-container",2),h.k0s()),2&t){const t=e.tuiLet,n=h.XpG();h.Y8G("formControl",n.control),h.R7$(2),h.Y8G("ngIf",null==t?null:t.length)}}class F{constructor(t,e,n=null,i=!1){this.firstName=t,this.lastName=e,this.avatarUrl=n,this.disabled=i}toString(){return`${this.firstName} ${this.lastName}`}}const C=[new F("Roman","Sedov","https://avatars.githubusercontent.com/u/10106368"),new F("Alex","Inkin",s.mY`/images/avatar.jpg`),new F("Gabriel José","de la Concordia «Gabo» García Márquez")],E=(()=>{var t;class e{constructor(){this.control=new a.MJ(""),this.firstName="",this.lastName="",this.items$=this.control.valueChanges.pipe((0,u.Z)(""),(0,m.n)((t=>this.request(t??"").pipe((0,f.T)((e=>1===e.length&&e[0]&&String(e[0])===t?(this.onClick(e[0]),[]):e))))),(0,u.Z)(C))}onClick({lastName:t,firstName:e}){this.lastName=t,this.firstName=e}request(t){return(0,p.of)(C.filter((e=>(0,o.Gb0)(e,t))))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=h.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example8",features:[h.aNF],decls:5,vars:5,consts:[[3,"formControl",4,"tuiLet"],[3,"formControl"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","","type","button",3,"disabled","value","click",4,"ngFor","ngForOf"],["tuiOption","","type","button",3,"disabled","value","click"],["size","xs",1,"avatar",3,"src"],[1,"name"]],template:function(t,e){1&t&&(h.DNE(0,v,3,2,"tui-input",0),h.nI1(1,"async"),h.j41(2,"p"),h.EFF(3,"Parsed on complete match:"),h.k0s(),h.EFF(4)),2&t&&(h.Y8G("tuiLet",h.bMT(1,3,e.items$)),h.R7$(4),h.Lme("\n",e.firstName," ",e.lastName,"\n"))},dependencies:[i.Jj,i.Sq,i.bT,a.X1,a.BC,a.l_,l.Elh,r.uEM,r.WX9,r.aOZ,r.eoQ,c.ziW,d.m,g.W,o.cOJ],styles:[".avatar[_ngcontent-%COMP%]{margin:0 .5rem 0 0;flex-shrink:0}.name[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex-shrink:1;margin-right:auto}"],changeDetection:0}),e})()}}]);