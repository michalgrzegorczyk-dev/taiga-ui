"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[68045],{68045:(t,e,i)=>{i.r(e),i.d(e,{ExampleTuiTabBarModule:()=>y});var n=i(12057),a=i(24751),o=i(33982),c=i(29851),r=i(75191),u=i(68807),s=i(3497),l=i(55908),p=i(74788),d=i(88331),m=i(37159),g=i(57068),b=i(81894),x=i(22313),T=i(79121),Z=i(53712),f=i(37772),h=i(81998);let I=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-2"]],decls:11,vars:0,consts:[["tuiTabBar",""],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/breadcrumbs","icon","tuiIconMoreHorizontalLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/pagination","icon","tuiIconCodeLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/stepper","icon","tuiIconTerminalLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/tab-bar","icon","tuiIconHrLarge"],["tuiTabBarItem","","routerLinkActive","","routerLink","/navigation/tabs","icon","tuiIconMenuLarge"]],template:function(t,e){1&t&&(p.TgZ(0,"nav",0),p.TgZ(1,"a",1),p._uU(2," Breadcrumbs "),p.qZA(),p.TgZ(3,"a",2),p._uU(4," Pagination "),p.qZA(),p.TgZ(5,"a",3),p._uU(6," Stepper "),p.qZA(),p.TgZ(7,"a",4),p._uU(8," TabBar "),p.qZA(),p.TgZ(9,"a",5),p._uU(10," Tabs "),p.qZA(),p.qZA())},directives:[Z.M,f.F,o.yS,h.Y,o.Od],encapsulation:2,changeDetection:0}),t})();function v(t,e){if(1&t&&(p.TgZ(0,"button",2),p._uU(1),p.qZA()),2&t){const t=e.$implicit;p.Q6J("icon",t.icon),p.xp6(1),p.hij(" ",t.text," ")}}let _=(()=>{class t{constructor(){this.items=[{text:"Home",icon:"tuiIconHomeLarge"},{text:"Photos",icon:"tuiIconImageLarge"},{text:"Navigation",icon:"tuiIconMapPinLarge"}]}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-3"]],decls:2,vars:1,consts:[["tuiTabBar","",1,"tabs"],["tuiTabBarItem","",3,"icon",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon"]],template:function(t,e){1&t&&(p.TgZ(0,"nav",0),p.YNc(1,v,2,2,"button",1),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngForOf",e.items))},directives:[Z.M,n.sg,f.F],styles:[".tabs[_ngcontent-%COMP%]{color:var(--tui-link);--tui-active-color: var(--tui-accent)}"],changeDetection:0}),t})();function A(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"button",2),p.NdJ("click",(function(){const e=p.CHM(t).$implicit;return p.oxw().onClick(e)})),p._uU(1),p.qZA()}if(2&t){const t=e.$implicit;p.Q6J("icon",t.icon)("badge",t.badge),p.xp6(1),p.hij(" ",t.text," ")}}let L=(()=>{class t{constructor(t){this.alerts=t,this.activeItemIndex=1,this.items=[{text:"Favorites",icon:"tuiIconHeartLarge",badge:3},{text:"Calls",icon:"tuiIconPhoneLarge",badge:1234},{text:"Profile",icon:"tuiIconUserLarge"},{text:"Settings and configuration",icon:"tuiIconSettingsLarge",badge:100},{text:"More",icon:"tuiIconMoreHorizontalLarge"}]}onClick(t){t.badge=0,this.alerts.open(this.activeItemIndex,{label:t.text}).subscribe()}}return t.ɵfac=function(e){return new(e||t)(p.Y36(s.TuiAlertService))},t.ɵcmp=p.Xpm({type:t,selectors:[["tui-tab-bar-example-1"]],decls:2,vars:2,consts:[["tuiTabBar","",3,"activeItemIndex","activeItemIndexChange"],["tuiTabBarItem","",3,"icon","badge","click",4,"ngFor","ngForOf"],["tuiTabBarItem","",3,"icon","badge","click"]],template:function(t,e){1&t&&(p.TgZ(0,"nav",0),p.NdJ("activeItemIndexChange",(function(t){return e.activeItemIndex=t})),p.YNc(1,A,2,3,"button",1),p.qZA()),2&t&&(p.Q6J("activeItemIndex",e.activeItemIndex),p.xp6(1),p.Q6J("ngForOf",e.items))},directives:[Z.M,n.sg,f.F],encapsulation:2,changeDetection:0}),t})();var M=i(76349);function k(t,e){1&t&&p._UZ(0,"tui-tab-bar-example-1",9)}function q(t,e){1&t&&p._UZ(0,"tui-tab-bar-example-1",11)}function U(t,e){if(1&t){const t=p.EpF();p.TgZ(0,"p"),p._uU(1,"Component for creating mobile navigation."),p.qZA(),p.TgZ(2,"tui-doc-example",3),p.TgZ(3,"tui-checkbox-labeled",4),p.NdJ("ngModelChange",(function(e){return p.CHM(t),p.oxw().fixed=e})),p._uU(4," Fixed "),p.qZA(),p.YNc(5,k,1,0,"tui-tab-bar-example-1",5),p.YNc(6,q,1,0,"ng-template",6),p.qZA(),p.TgZ(7,"tui-doc-example",7),p.TgZ(8,"tui-notification",8),p._uU(9," If you use "),p.TgZ(10,"code"),p._uU(11,"routerLink"),p.qZA(),p._uU(12," you must also add "),p.TgZ(13,"code"),p._uU(14,"routerLinkActive"),p.qZA(),p._uU(15," directive. "),p.qZA(),p._UZ(16,"tui-tab-bar-example-2",9),p.qZA(),p.TgZ(17,"tui-doc-example",10),p._UZ(18,"tui-tab-bar-example-3",9),p.qZA()}if(2&t){const t=p.oxw();p.xp6(2),p.Q6J("content",t.example1),p.xp6(1),p.Q6J("ngModel",t.fixed),p.xp6(2),p.Q6J("ngIf",!t.fixed),p.xp6(1),p.Q6J("tuiPortal",t.fixed),p.xp6(1),p.Q6J("content",t.example2),p.xp6(10),p.Q6J("content",t.example3)}}function B(t,e){if(1&t&&(p.TgZ(0,"ol",12),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiTabBarModule"),p.qZA(),p._uU(6," into your main module "),p.qZA(),p._UZ(7,"tui-doc-code",13),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10," Add to the template inside "),p.TgZ(11,"code"),p._uU(12,"Root"),p.qZA(),p._uU(13," component at the required layer: "),p.qZA(),p._UZ(14,"tui-doc-code",14),p.qZA(),p.qZA()),2&t){const t=p.oxw();p.xp6(7),p.Q6J("code",t.exampleModule),p.xp6(7),p.Q6J("code",t.exampleHtml)}}let C=(()=>{class t{constructor(){this.fixed=!1,this.exampleModule=i.e(44170).then(i.t.bind(i,44170,17)),this.exampleHtml=i.e(41133).then(i.t.bind(i,41133,17)),this.example1={TypeScript:i.e(57469).then(i.t.bind(i,57469,17)),HTML:i.e(44819).then(i.t.bind(i,44819,17))},this.example2={TypeScript:i.e(63717).then(i.t.bind(i,63717,17)),HTML:i.e(42944).then(i.t.bind(i,42944,17))},this.example3={TypeScript:i.e(54099).then(i.t.bind(i,54099,17)),HTML:i.e(37887).then(i.t.bind(i,37887,17)),LESS:i.e(81949).then(i.t.bind(i,81949,17))}}}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=p.Xpm({type:t,selectors:[["example-tui-tab-bar"]],decls:3,vars:0,consts:[["header","TabBar","package","ADDON-MOBILE","type","components"],["pageTab",""],["pageTab","Setup"],["id","buttons","heading","Buttons",3,"content"],["size","l",1,"tui-space_bottom-4",3,"ngModel","ngModelChange"],["class","bar",4,"ngIf"],[3,"tuiPortal"],["id","links","heading","Links",3,"content"],[1,"bar","tui-space_bottom-4"],[1,"bar"],["id","customization","heading","Customization",3,"content"],[1,"fixed"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(t,e){1&t&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,U,19,6,"ng-template",1),p.YNc(2,B,15,2,"ng-template",2),p.qZA())},directives:[d.q,m.n,g.f,b.p,a.JJ,a.On,n.O5,x.s,T.L,I,_,L,M.c],styles:[".bar[_ngcontent-%COMP%]{display:block;width:25rem}.fixed[_ngcontent-%COMP%]{position:fixed;bottom:0;width:100%}"],changeDetection:0}),t})(),y=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=p.oAB({type:t}),t.ɵinj=p.cJS({imports:[[n.ez,a.u5,s.TuiNotificationModule,l.TuiCheckboxLabeledModule,r.TuiTabBarModule,u.TuiPortalModule,c.fV,o.Bz.forChild((0,c.Ve)(C))]]}),t})()}}]);