(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35148],{35148:(t,e,n)=>{n.r(e),n.d(e,{default:()=>w});var r,i=n(84911),o=n(4594),a=n(66094),l=n(96038),c=n(42436),s=n(96092),u=n(81774),f=n(35548),d=n(57269),g=n(10188);function h(t,e){if(1&t&&(f.TgZ(0,"button",5),f._uU(1),f.qZA()),2&t){const t=e.$implicit;f.Q6J("value",t),f.xp6(1),f.hij(" ",t," ")}}function p(t,e){if(1&t&&(f.TgZ(0,"tui-data-list"),f.YNc(1,h,2,2,"button",4),f.qZA()),2&t){const t=f.oxw(2);f.xp6(1),f.Q6J("ngForOf",t.filtered)}}function m(t,e){1&t&&(f.ynx(0),f.YNc(1,p,2,1,"tui-data-list",3),f.BQk())}const v=function(){return[]},x=["The Midnight","FM-84","Timecop1983","GUNSHIP"];function Z(t){return!/\d/.test(t)}class T{constructor(){var t;this.search="",this.tagValidator=Z,this.control=new a.NI([],(t=Z,({value:e})=>(e?e.filter(t):l.LZ8).length>0?{tags:new l.T8v("Some tags are invalid")}:null))}get filtered(){return this.filterBy(this.search,this.control.value??[])}filterBy(t,e){return x.filter((n=>(0,l.LQM)(n,t)&&!e.includes(n)))}}(r=T).ɵfac=function(t){return new(t||r)},r.ɵcmp=f.Xpm({type:r,selectors:[["ng-component"]],standalone:!0,exportAs:"Example4",features:[f.jDz],decls:8,vars:12,consts:[[3,"formControl","tagValidator","tuiTextfieldLabelOutside","search","searchChange"],[4,"ngIf"],[3,"error","formControl"],[4,"tuiDataList"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(t,e){1&t&&(f.TgZ(0,"p"),f._uU(1,"In this sample, tags with digits are invalid"),f.qZA(),f.TgZ(2,"tui-input-tag",0),f.NdJ("searchChange",(function(t){return e.search=t})),f._uU(3," Try it "),f.YNc(4,m,2,0,"ng-container",1),f.qZA(),f._UZ(5,"tui-error",2),f.ALo(6,"async"),f.ALo(7,"tuiFieldError")),2&t&&(f.xp6(2),f.Q6J("formControl",e.control)("tagValidator",e.tagValidator)("tuiTextfieldLabelOutside",!0)("search",e.search),f.xp6(2),f.Q6J("ngIf",e.filtered.length),f.xp6(1),f.Q6J("error",f.lcZ(6,7,f.lcZ(7,9,f.DdM(11,v))))("formControl",e.control))},dependencies:[u.cB5,d.P,a.UX,a.JJ,a.oH,u.cnw,g.x,c.qiE,c.gXS,c.bHd,o.O5,o.sg,c.eRn,s.Agm,o.Ov],encapsulation:2,changeDetection:0}),(0,i.gn)([l.UMq],T.prototype,"filterBy",null);const w=T}}]);