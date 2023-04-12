"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[72274],{72274:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiExpandModule:()=>P});var o=n(12057),a=n(24751),i=n(33982),d=n(29851),p=n(3497),s=n(74788),r=n(88331),c=n(37159),u=n(57068),l=n(76189),m=n(88618),h=n(84785);function g(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1,"NOBODY expects the Spanish Inquisition!"),s.qZA())}function x(e,t){if(1&e&&(s.TgZ(0,"div"),s.TgZ(1,"div"),s._uU(2),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Oqu(e)}}let f=(()=>{class e{constructor(){this.expanded=!1,this.subpages=["page1","page2","page3"]}toggle(){this.expanded=!this.expanded}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-expand-example-1"]],decls:8,vars:3,consts:[["tuiButton","","type","button",3,"click"],[3,"expanded"],["tuiExpandContent",""],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(s.TgZ(0,"p"),s._uU(1," Chapman: Mr Wentworth just told me to come in here and say that there was trouble at the mill, that's all - I didn't expect a kind of Spanish Inquisition.\n"),s.qZA(),s.TgZ(2,"button",0),s.NdJ("click",(function(){return t.toggle()})),s._uU(3," Show/Hide\n"),s.qZA(),s.TgZ(4,"tui-expand",1),s.YNc(5,g,2,0,"ng-template",2),s.qZA(),s.TgZ(6,"tui-expand",1),s.YNc(7,x,3,1,"div",3),s.qZA()),2&e&&(s.xp6(4),s.Q6J("expanded",t.expanded),s.xp6(2),s.Q6J("expanded",t.expanded),s.xp6(1),s.Q6J("ngForOf",t.subpages))},directives:[l.v,m.S,h.I,o.sg],encapsulation:2,changeDetection:0}),e})();var y=n(54476),Z=n(17023),b=n(76349);function T(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1,"Component to show expandable content"),s.qZA(),s.TgZ(2,"tui-doc-example",2),s._UZ(3,"tui-expand-example-1"),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Q6J("content",e.example1)}}function _(e,t){1&e&&(s.TgZ(0,"div"),s.TgZ(1,"p"),s._uU(2,"Luke's father."),s.qZA(),s.TgZ(3,"p",8),s._uU(4," Also Tyler Durden doesn't actually exist (hover for mode details) "),s.TgZ(5,"span",9),s._uU(6," Fight Club reference (notice how spoiler has "),s.TgZ(7,"code"),s._uU(8,"overflow: visible;"),s.qZA(),s._uU(9," when it's open). "),s.qZA(),s.qZA(),s.TgZ(10,"div"),s._uU(11,' A spoiler is an element of a disseminated summary or description of any piece of fiction that reveals any plot elements which threaten to give away important details. Typically, the details of the conclusion of the plot, including the climax and ending, are especially regarded as spoiler material. It can also be used to refer to any piece of information regarding any part of a given media that a potential consumer would not want to know beforehand. Because enjoyment of fiction depends a great deal upon the suspense of revealing plot details through standard narrative progression, the prior revelation of how things will turn out can "spoil" the enjoyment that some consumers of the narrative would otherwise have experienced. Spoilers can be found in message boards, articles, reviews, commercials, and movie trailers. '),s.qZA(),s.qZA())}function v(e,t){if(1&e&&s.YNc(0,_,12,0,"div",7),2&e){const e=s.oxw(2);s.Q6J("ngIf",!e.delayed)}}function w(e,t){1&e&&(s._uU(0," Waits for a custom event "),s.TgZ(1,"code"),s._uU(2,"TUI_EXPAND_LOADED"),s.qZA(),s._uU(3," before opening. Content is initialized when opening starts "))}function A(e,t){1&e&&s._uU(0," Open / close state ")}function q(e,t){if(1&e){const e=s.EpF();s._uU(0," Darth Vader is (spoilers below): "),s.TgZ(1,"tui-expand",3),s.YNc(2,v,1,1,"ng-template",4),s.qZA(),s.TgZ(3,"tui-doc-documentation"),s.YNc(4,w,4,0,"ng-template",5),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().async=t})),s.YNc(5,A,1,0,"ng-template",6),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().onExpandedChange(t)})),s.qZA()}if(2&e){const e=s.oxw();s.xp6(1),s.Q6J("expanded",e.expanded)("async",e.async),s.xp6(3),s.Q6J("documentationPropertyValue",e.async),s.xp6(1),s.Q6J("documentationPropertyValue",e.expanded)}}function C(e,t){if(1&e&&(s.TgZ(0,"ol",10),s.TgZ(1,"li"),s.TgZ(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiExpandModule"),s.qZA(),s._uU(6," into a module where you want to use our component "),s.qZA(),s._UZ(7,"tui-doc-code",11),s.qZA(),s.TgZ(8,"li"),s.TgZ(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",12),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let U=(()=>{class e{constructor(e){this.cdr=e,this.exampleModule=n.e(7916).then(n.t.bind(n,7916,17)),this.exampleHtml=n.e(17383).then(n.t.bind(n,17383,17)),this.example1={TypeScript:n.e(73109).then(n.t.bind(n,73109,17)),HTML:n.e(37863).then(n.t.bind(n,37863,17))},this.expanded=!1,this.async=!1,this.delayed=!1}onExpandedChange(e){this.expanded=e,this.delayed=this.async&&e,this.async&&this.expanded&&setTimeout((()=>{const e=new CustomEvent(p.TUI_EXPAND_LOADED,{bubbles:!0});this.delayed=!1,this.cdr.detectChanges(),this.expand&&this.expand.nativeElement.dispatchEvent(e)}),5e3)}}return e.ɵfac=function(t){return new(t||e)(s.Y36(s.sBO))},e.ɵcmp=s.Xpm({type:e,selectors:[["example-expand"]],viewQuery:function(e,t){if(1&e&&s.Gf(p.TuiExpandComponent,5,s.SBq),2&e){let e;s.iGM(e=s.CRH())&&(t.expand=e.first)}},decls:4,vars:0,consts:[["header","Expand","package","CORE","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],[1,"b-full-width",3,"expanded","async"],["tuiExpandContent",""],["documentationPropertyName","async","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","expanded","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[4,"ngIf"],[1,"tooltip"],[1,"bubble"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,T,4,1,"ng-template",1),s.YNc(2,q,6,4,"ng-template",1),s.YNc(3,C,12,2,"ng-template",1),s.qZA())},directives:[r.q,c.n,u.f,f,m.S,h.I,y.z,Z.B,o.O5,b.c],styles:['.tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-10px)}'],changeDetection:0}),e})(),P=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[p.TuiExpandModule,p.TuiButtonModule,o.ez,a.u5,a.UX,d.fV,i.Bz.forChild((0,d.Ve)(U))]]}),e})()}}]);