(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[69835],{69835:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiLegendItemModule:()=>S});var o=n(12057),i=n(33982),a=n(50179),r=n(43731),c=n(96292),u=n(68807),l=n(3497),d=n(89570),s=n(74788),m=n(43560),p=n(93525),g=n(33772),h=n(57464),x=n(16996),f=n(57416),v=n(61369);function y(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-legend-item",5),s.NdJ("tuiHoveredChange",(function(t){const n=s.CHM(e).index;return s.oxw().onHover(n,t)})),s._UZ(1,"tui-money",2),s.qZA()}if(2&e){const e=t.$implicit,n=t.index,o=s.oxw();s.Q6J("color",o.getColor(n))("text",e)("active",o.isItemActive(n)),s.xp6(1),s.Q6J("singleColor",!0)("value",o.value[n])}}let C=(()=>{class e{constructor(){this.activeItemIndex=NaN,this.value=[13769,12367,10172,3018,2592],this.sum=(0,u.tuiSum)(...this.value),this.labels=["Food","Cafe","Open Source","Taxi","Other"]}isItemActive(e){return this.activeItemIndex===e}onHover(e,t){this.activeItemIndex=t?e:0}getColor(e){return`var(--tui-chart-${e})`}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-legend-item-example-1"]],decls:7,vars:5,consts:[[1,"wrapper"],[3,"value","activeItemIndex","activeItemIndexChange"],[3,"singleColor","value"],[1,"legend"],["size","s","class","item",3,"color","text","active","tuiHoveredChange",4,"ngFor","ngForOf"],["size","s",1,"item",3,"color","text","active","tuiHoveredChange"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"tui-ring-chart",1),s.NdJ("activeItemIndexChange",(function(e){return t.activeItemIndex=e})),s._UZ(2,"tui-money",2),s.TgZ(3,"div"),s._uU(4,"Total"),s.qZA(),s.qZA(),s.TgZ(5,"div",3),s.YNc(6,y,2,5,"tui-legend-item",4),s.qZA(),s.qZA()),2&e&&(s.xp6(1),s.Q6J("value",t.value)("activeItemIndex",t.activeItemIndex),s.xp6(1),s.Q6J("singleColor",!0)("value",t.sum),s.xp6(4),s.Q6J("ngForOf",t.labels))},directives:[h.i,x.o,o.sg,f._,v.c],styles:["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem}@media screen and (max-width: 47.9625em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),e})();var Z=n(64762),P=n(79121),b=n(80868),T=n(34880);function _(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-legend-item",4,5),s.NdJ("click",(function(){const t=s.CHM(e).index;return s.oxw().onClick(t)}))("keydown.delete",(function(){const t=s.CHM(e).index;return s.oxw().toggle(t)})),s._UZ(2,"tui-primitive-checkbox",6),s._UZ(3,"tui-money",7),s.TgZ(4,"tui-svg",8),s.NdJ("click.stop",(function(){const t=s.CHM(e).index;return s.oxw().toggle(t)})),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit,n=t.index,o=s.MAs(1),i=s.oxw();s.Q6J("color",i.getColor(n))("text",e)("disabled",!i.isEnabled(n)),s.xp6(2),s.Q6J("value",!o.disabled),s.xp6(1),s.Q6J("singleColor",!0)("value",i.data[n]),s.xp6(1),s.ekj("disable_rotated",o.disabled)}}class M{constructor(e){this.alerts=e,this.enabled=new Array(5).fill(!0),this.data=[13769,12367,10172,3018,2592],this.sum=(0,u.tuiSum)(...this.data),this.labels=["Axes","Faxes","Taxes","Saxes","Other"]}get value(){return this.getValue(this.data,this.enabled)}isEnabled(e){return this.enabled[e]}toggle(e){this.enabled=this.enabled.map(((t,n)=>n===e?!t:t))}onClick(e){this.isEnabled(e)?this.alerts.open(`Category spending: ${(0,l.tuiFormatNumber)(this.data[e])} ₽`,{label:this.labels[e]}).subscribe():this.toggle(e)}getColor(e){return`var(--tui-chart-${e})`}getValue(e,t){return e.map(((e,n)=>t[n]?e:0))}}M.ɵfac=function(e){return new(e||M)(s.Y36(l.TuiAlertService))},M.ɵcmp=s.Xpm({type:M,selectors:[["tui-legend-item-example-2"]],decls:6,vars:2,consts:[[1,"wrapper"],["size","s",1,"chart",3,"value"],[1,"legend"],["class","item",3,"color","text","disabled","click","keydown.delete",4,"ngFor","ngForOf"],[1,"item",3,"color","text","disabled","click","keydown.delete"],["item",""],[3,"value"],[3,"singleColor","value"],["src","tuiIconCloseLarge",1,"disable",3,"click.stop"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-notification"),s._uU(1," In case you need to be able to toggle a category by separate action, for example, if clicking on it should expand it for more details\n"),s.qZA(),s.TgZ(2,"div",0),s._UZ(3,"tui-ring-chart",1),s.TgZ(4,"div",2),s.YNc(5,_,5,8,"tui-legend-item",3),s.qZA(),s.qZA()),2&e&&(s.xp6(3),s.Q6J("value",t.value),s.xp6(2),s.Q6J("ngForOf",t.labels))},directives:[P.L,h.i,o.sg,f._,b.r,x.o,T.P],styles:["[_nghost-%COMP%]{--tui-chart-0: #c779d0;--tui-chart-1: #feac5e;--tui-chart-2: #ff5f6d;--tui-chart-3: #4bc0c8;--tui-chart-4: #9795cd}.chart[_ngcontent-%COMP%]{pointer-events:none}.wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:1rem}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{flex-direction:column}}.disable[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:.25rem;will-change:transform;color:var(--tui-text-02);pointer-events:auto}.disable[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.disable_rotated[_ngcontent-%COMP%]{transform:rotate(45deg)}.legend[_ngcontent-%COMP%]{margin:0 0 0 2rem;justify-content:center}@media screen and (max-width: 47.9625em){.legend[_ngcontent-%COMP%]{margin:2rem 0 0}}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}"],changeDetection:0}),(0,Z.gn)([u.tuiPure],M.prototype,"getValue",null);var w=n(10977),A=n(51192),V=n(60404),J=n(83074);function N(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1,"A button for a legend of ring or pie charts"),s.qZA(),s.TgZ(2,"tui-doc-example",2),s._UZ(3,"tui-legend-item-example-1"),s.qZA(),s.TgZ(4,"tui-doc-example",3),s._UZ(5,"tui-legend-item-example-2"),s.qZA()),2&e){const e=s.oxw();s.xp6(2),s.Q6J("content",e.example1),s.xp6(2),s.Q6J("content",e.example2)}}function q(e,t){1&e&&s._uU(0," Active state from outside ")}function I(e,t){1&e&&s._uU(0," Indicator color ")}function O(e,t){1&e&&s._uU(0," Disabled item (i.e. hidden from the related chart) ")}function U(e,t){1&e&&s._uU(0," Size ")}function Q(e,t){1&e&&s._uU(0," Text inside ")}function H(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo"),s.TgZ(1,"tui-legend-item",4),s._UZ(2,"tui-money",5),s.qZA(),s.TgZ(3,"p"),s.TgZ(4,"code"),s._uU(5,"tui-money"),s.qZA(),s._uU(6," is used to format currency and fraction "),s.qZA(),s.qZA(),s.TgZ(7,"tui-doc-documentation"),s.YNc(8,q,1,0,"ng-template",6),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().active=t})),s.YNc(9,I,1,0,"ng-template",7),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().color=t})),s.YNc(10,O,1,0,"ng-template",8),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().disabled=t})),s.YNc(11,U,1,0,"ng-template",9),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().size=t})),s.YNc(12,Q,1,0,"ng-template",10),s.NdJ("documentationPropertyValueChange",(function(t){return s.CHM(e),s.oxw().text=t})),s.qZA()}if(2&e){const e=s.oxw();s.xp6(1),s.Q6J("active",e.active)("disabled",e.disabled)("color",e.color)("text",e.text)("size",e.size),s.xp6(1),s.Q6J("value",123456)("singleColor",!0),s.xp6(6),s.Q6J("documentationPropertyValue",e.active),s.xp6(1),s.Q6J("documentationPropertyValues",e.colorVariants)("documentationPropertyValue",e.color),s.xp6(1),s.Q6J("documentationPropertyValue",e.disabled),s.xp6(1),s.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),s.xp6(1),s.Q6J("documentationPropertyValue",e.text)}}function k(e,t){if(1&e&&(s.TgZ(0,"ol",11),s.TgZ(1,"li"),s.TgZ(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiBarModule"),s.qZA(),s._uU(6," into a module where you want to use our component "),s.qZA(),s._UZ(7,"tui-doc-code",12),s.qZA(),s.TgZ(8,"li"),s.TgZ(9,"p"),s._uU(10,"Add to the template:"),s.qZA(),s._UZ(11,"tui-doc-code",13),s.qZA(),s.qZA()),2&e){const e=s.oxw();s.xp6(7),s.Q6J("code",e.exampleModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let z=(()=>{class e{constructor(){this.exampleModule=n.e(53914).then(n.t.bind(n,53914,17)),this.exampleHtml=n.e(20330).then(n.t.bind(n,20330,17)),this.example1={TypeScript:n.e(56292).then(n.t.bind(n,56292,17)),HTML:n.e(34778).then(n.t.bind(n,34778,17)),LESS:n.e(50623).then(n.t.bind(n,50623,17))},this.example2={TypeScript:n.e(90751).then(n.t.bind(n,90751,17)),HTML:n.e(50646).then(n.t.bind(n,50646,17)),LESS:n.e(20738).then(n.t.bind(n,20738,17))},this.text="Text inside",this.active=!1,this.sizeVariants=["s","m"],this.colorVariants=["var(--tui-support-04)","var(--tui-primary)","var(--tui-secondary)"],this.size=this.sizeVariants[0],this.disabled=!1,this.color=""}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-legend-item"]],decls:4,vars:0,consts:[["header","LegendItem","package","ADDON-CHARTS","type","components"],["pageTab",""],["id","ring","heading","With a ring chart",3,"content"],["id","toggle","heading","Toggling",3,"content"],[3,"active","disabled","color","text","size"],[3,"value","singleColor"],["documentationPropertyName","active","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","color","documentationPropertyMode","input","documentationPropertyType","TuiColor | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,N,6,2,"ng-template",1),s.YNc(2,H,13,14,"ng-template",1),s.YNc(3,k,12,2,"ng-template",1),s.qZA())},directives:[m.q,p.n,g.f,C,M,w.F,f._,x.o,A.z,V.B,J.c],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[[o.ez,a.TuiLegendItemModule,a.TuiRingChartModule,r.TuiMoneyModule,l.TuiPrimitiveCheckboxModule,l.TuiSvgModule,l.TuiNotificationModule,d.wq,u.TuiHoveredModule,c.fV,i.Bz.forChild((0,c.Ve)(z))]]}),e})()}}]);