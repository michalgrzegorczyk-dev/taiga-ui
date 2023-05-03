(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[37536],{37536:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiRangeModule:()=>F});var o=n(12057),i=n(24751),a=n(33982),s=n(96292),r=n(3497),c=n(55908),l=n(74788),u=n(43560),g=n(93525),p=n(33772),m=n(48740),d=n(87231);let h=(()=>{class e{constructor(){this.control=new i.NI([4,6])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-range-example-1"]],decls:1,vars:3,consts:[[3,"formControl","max","step"]],template:function(e,t){1&e&&l._UZ(0,"tui-range",0),2&e&&l.Q6J("formControl",t.control)("max",10)("step",1)},directives:[m.U,d.H,i.JJ,i.oH],encapsulation:2,changeDetection:0}),e})();var _=n(70329);let Z=(()=>{class e{constructor(){this.smallRangeValue=[0,40],this.bigRangeControl=new i.NI([40,60])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-range-example-2"]],decls:20,vars:10,consts:[[1,"island"],[1,"tui-island__title"],["id","s-size-range","size","s",1,"range",3,"max","ngModel","ngModelChange"],[1,"tui-island__paragraph"],["for","s-size-range"],["id","m-size-range","size","m",1,"range",3,"formControl","max"],["for","m-size-range"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-island",0),l.TgZ(1,"h3",1),l._uU(2,"S-size"),l.qZA(),l.TgZ(3,"tui-range",2),l.NdJ("ngModelChange",(function(e){return t.smallRangeValue=e})),l.qZA(),l.TgZ(4,"p",3),l._uU(5," Control value: "),l.TgZ(6,"output",4),l.TgZ(7,"code"),l._uU(8),l.ALo(9,"json"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(10,"tui-island",0),l.TgZ(11,"h3",1),l._uU(12,"M-size"),l.qZA(),l._UZ(13,"tui-range",5),l.TgZ(14,"p",3),l._uU(15," Control value: "),l.TgZ(16,"output",6),l.TgZ(17,"code"),l._uU(18),l.ALo(19,"json"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(3),l.Q6J("max",100)("ngModel",t.smallRangeValue),l.xp6(5),l.Oqu(l.lcZ(9,6,t.smallRangeValue)),l.xp6(5),l.Q6J("formControl",t.bigRangeControl)("max",100),l.xp6(5),l.Oqu(l.lcZ(19,8,t.bigRangeControl.value)))},directives:[_.h,m.U,d.H,i.JJ,i.On,i.oH],pipes:[o.Ts],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;grid-row-gap:1rem;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width: 47.9625em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],changeDetection:0}),e})();var f=n(79121),P=n(34880);function x(e,t){if(1&e&&(l.ynx(0),l._uU(1),l.ALo(2,"i18nPlural"),l.BQk()),2&e){const e=l.oxw().$implicit,t=l.oxw();l.xp6(1),l.hij(" ",l.xi3(2,1,e,t.pluralMap)," ")}}function C(e,t){if(1&e&&(l.TgZ(0,"div"),l.YNc(1,x,3,4,"ng-container",6),l.qZA()),2&e){const e=t.$implicit;l.oxw();const n=l.MAs(4);l.xp6(1),l.Q6J("ngIf",750!==e)("ngIfElse",n)}}function y(e,t){1&e&&(l._UZ(0,"tui-svg",7),l.TgZ(1,"div"),l._uU(2,"3/4"),l.qZA())}let M=(()=>{class e{constructor(){this.min=0,this.max=1e3,this.step=250,this.segments=4,this.labels=[...new Array(this.segments+1).keys()].map((e=>this.min+this.step*e)),this.value=[0,250],this.pluralMap={"=0":"0","=1":"# item","=1000":"MAX",other:"# items"}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-range-example-3"]],decls:11,vars:9,consts:[["id","range-with-segments","size","m",1,"range",3,"min","max","step","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["labelWithIcon",""],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-segments"],[4,"ngIf","ngIfElse"],["src","tuiIconArrowUp"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-range",0),l.NdJ("ngModelChange",(function(e){return t.value=e})),l.qZA(),l.TgZ(1,"div",1),l.YNc(2,C,2,2,"div",2),l.YNc(3,y,3,0,"ng-template",null,3,l.W1O),l.qZA(),l.TgZ(5,"p",4),l._uU(6," Control value: "),l.TgZ(7,"output",5),l.TgZ(8,"code"),l._uU(9),l.ALo(10,"json"),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.Q6J("min",t.min)("max",t.max)("step",t.step)("segments",t.segments)("ngModel",t.value),l.xp6(2),l.Q6J("ngForOf",t.labels),l.xp6(7),l.Oqu(l.lcZ(10,7,t.value)))},directives:[m.U,d.H,i.JJ,i.On,o.sg,o.O5,P.P],pipes:[o.Ts,o.Gx],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),e})();function T(e,t){if(1&e&&(l.TgZ(0,"span"),l._uU(1),l.qZA()),2&e){const e=t.$implicit;l.xp6(1),l.Oqu(e)}}let b=(()=>{class e{constructor(){this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.stepPercentage=100/(2*this.segments),this.value=[0,1e5],this.keySteps=[[0,0],[25,1e4],[50,1e5],[75,5e5],[100,1e6]]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-range-example-4"]],decls:9,vars:8,consts:[["id","range-with-key-steps","size","m",1,"range",3,"step","keySteps","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-key-steps"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-range",0),l.NdJ("ngModelChange",(function(e){return t.value=e})),l.qZA(),l.TgZ(1,"div",1),l.YNc(2,T,2,1,"span",2),l.qZA(),l.TgZ(3,"p",3),l._uU(4," Control value: "),l.TgZ(5,"output",4),l.TgZ(6,"code"),l._uU(7),l.ALo(8,"json"),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.Q6J("step",t.stepPercentage)("keySteps",t.keySteps)("segments",t.segments)("ngModel",t.value),l.xp6(2),l.Q6J("ngForOf",t.ticksLabels),l.xp6(5),l.Oqu(l.lcZ(8,6,t.value)))},directives:[m.U,d.H,i.JJ,i.On,o.sg],pipes:[o.Ts],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),e})();var U=n(10977),A=n(51192),O=n(60404),q=n(83074);function k(e,t){if(1&e&&(l.TgZ(0,"p"),l._uU(1,"Component allows to choose a part of a range"),l.qZA(),l.TgZ(2,"tui-doc-example",2),l._UZ(3,"tui-range-example-1"),l.qZA(),l.TgZ(4,"tui-doc-example",3),l._UZ(5,"tui-range-example-2"),l.qZA(),l.TgZ(6,"tui-doc-example",4),l.TgZ(7,"tui-notification",5),l.TgZ(8,"p",6),l._uU(9," Use mixin "),l.TgZ(10,"code"),l._uU(11,"tui-slider-ticks-labels"),l.qZA(),l._uU(12," to arrange ticks' labels (it places them strictly below ticks). "),l.qZA(),l.TgZ(13,"p"),l._uU(14," The mixin accepts only a single argument – size of the slider ( "),l.TgZ(15,"code"),l._uU(16,"m"),l.qZA(),l._uU(17," or "),l.TgZ(18,"code"),l._uU(19,"s"),l.qZA(),l._uU(20," ). "),l.qZA(),l.qZA(),l._UZ(21,"tui-range-example-3"),l.qZA(),l.TgZ(22,"tui-doc-example",7),l._UZ(23,"tui-range-example-4"),l.qZA()),2&e){const e=l.oxw();l.xp6(2),l.Q6J("content",e.example1),l.xp6(2),l.Q6J("content",e.example2),l.xp6(2),l.Q6J("content",e.example3),l.xp6(16),l.Q6J("content",e.example4)}}function v(e,t){if(1&e&&l._UZ(0,"tui-range",16),2&e){const e=l.oxw(2);l.Q6J("formControl",e.control)("min",e.min)("max",e.max)("step",e.step)("segments",e.segments)("keySteps",e.keySteps)("size",e.size)}}function w(e,t){1&e&&(l._uU(0," Disabled state (use "),l.TgZ(1,"code"),l._uU(2,"formControl.disable()"),l.qZA(),l._uU(3," ) "))}function J(e,t){1&e&&(l._uU(0," The lowest value in the range of permitted values. "),l.TgZ(1,"p"),l._uU(2," The default is "),l.TgZ(3,"code"),l._uU(4,"0"),l.qZA(),l._uU(5," . "),l.qZA())}function V(e,t){1&e&&(l._uU(0," The greatest value in the range of permitted values. "),l.TgZ(1,"p"),l._uU(2," The default is "),l.TgZ(3,"code"),l._uU(4,"100"),l.qZA(),l._uU(5," . "),l.qZA())}function N(e,t){1&e&&(l._uU(0," A number that specifies the granularity that the value must adhere. "),l.TgZ(1,"p"),l._uU(2," The default is "),l.TgZ(3,"code"),l._uU(4,"1"),l.qZA(),l._uU(5," . "),l.qZA())}function S(e,t){1&e&&(l._uU(0," Size "),l.TgZ(1,"p"),l._uU(2," The default is "),l.TgZ(3,"code"),l._uU(4,"m"),l.qZA(),l._uU(5," . "),l.qZA())}function z(e,t){1&e&&(l._uU(0," A number of visual segments. "),l.TgZ(1,"p"),l._uU(2," The default is "),l.TgZ(3,"code"),l._uU(4,"1"),l.qZA(),l._uU(5," (no ticks). "),l.qZA())}function Q(e,t){1&e&&(l._uU(0," Anchor points of non-uniform format between value and position. "),l.TgZ(1,"p"),l._uU(2," The default is "),l.TgZ(3,"code"),l._uU(4,"null"),l.qZA(),l._uU(5," . "),l.qZA())}function H(e,t){if(1&e){const e=l.EpF();l.TgZ(0,"tui-doc-demo",8),l.YNc(1,v,1,7,"ng-template"),l.qZA(),l.TgZ(2,"tui-doc-documentation"),l.YNc(3,w,4,0,"ng-template",9),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().disabled=t})),l.YNc(4,J,6,0,"ng-template",10),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().min=t})),l.YNc(5,V,6,0,"ng-template",11),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().max=t})),l.YNc(6,N,6,0,"ng-template",12),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().step=t})),l.YNc(7,S,6,0,"ng-template",13),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().size=t})),l.YNc(8,z,6,0,"ng-template",14),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().segments=t})),l.YNc(9,Q,6,0,"ng-template",15),l.NdJ("documentationPropertyValueChange",(function(t){return l.CHM(e),l.oxw().keySteps=t})),l.qZA()}if(2&e){const e=l.oxw();l.Q6J("control",e.control),l.xp6(3),l.Q6J("documentationPropertyValue",e.disabled),l.xp6(1),l.Q6J("documentationPropertyValue",e.min),l.xp6(1),l.Q6J("documentationPropertyValue",e.max),l.xp6(1),l.Q6J("documentationPropertyValue",e.step),l.xp6(1),l.Q6J("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),l.xp6(1),l.Q6J("documentationPropertyValue",e.segments),l.xp6(1),l.Q6J("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps)}}function L(e,t){if(1&e&&(l.TgZ(0,"ol",17),l.TgZ(1,"li"),l._uU(2," Import an Angular module for forms and "),l.TgZ(3,"code"),l._uU(4,"TuiRangeModule"),l.qZA(),l._uU(5," in the same module where you want to use our component: "),l._UZ(6,"tui-doc-code",18),l.qZA(),l.TgZ(7,"li"),l.TgZ(8,"p"),l._uU(9," Declare a form ( "),l.TgZ(10,"code"),l._uU(11,"FormGroup"),l.qZA(),l._uU(12," ) or a control ( "),l.TgZ(13,"code"),l._uU(14,"FormControl"),l.qZA(),l._uU(15," ) in your component: "),l.qZA(),l._UZ(16,"tui-doc-code",19),l.qZA(),l.TgZ(17,"li"),l.TgZ(18,"p"),l._uU(19,"Add to the template:"),l.qZA(),l._UZ(20,"tui-doc-code",20),l.qZA(),l.qZA()),2&e){const e=l.oxw();l.xp6(6),l.Q6J("code",e.exampleModule),l.xp6(10),l.Q6J("code",e.exampleForm),l.xp6(4),l.Q6J("code",e.exampleHtml)}}let Y=(()=>{class e{constructor(){this.exampleModule=n.e(92677).then(n.t.bind(n,92677,17)),this.exampleHtml=n.e(38951).then(n.t.bind(n,38951,17)),this.exampleForm=n.e(92136).then(n.t.bind(n,92136,17)),this.example1={HTML:n.e(45417).then(n.t.bind(n,45417,17)),TypeScript:n.e(76697).then(n.t.bind(n,76697,17))},this.example2={HTML:n.e(25090).then(n.t.bind(n,25090,17)),TypeScript:n.e(34100).then(n.t.bind(n,34100,17)),LESS:n.e(96585).then(n.t.bind(n,96585,17))},this.example3={HTML:n.e(82509).then(n.t.bind(n,82509,17)),LESS:n.e(91770).then(n.t.bind(n,91770,17)),TypeScript:n.e(81679).then(n.t.bind(n,81679,17))},this.example4={HTML:n.e(85407).then(n.t.bind(n,85407,17)),TypeScript:n.e(7182).then(n.t.bind(n,7182,17)),LESS:n.e(67607).then(n.t.bind(n,67607,17))},this.control=new i.NI([0,0]),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.min=0,this.max=100,this.step=1,this.segments=1,this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["example-range"]],decls:4,vars:0,consts:[["header","Range","package","KIT","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],["id","sizes","heading","Sizes",3,"content"],["id","segments","heading","Visual segments + labels for ticks",3,"content"],[1,"tui-space_bottom-8"],[1,"tui-space_top-0"],["id","key-steps","heading","KeySteps",3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","step","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","step","segments","keySteps","size"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.YNc(1,k,24,4,"ng-template",1),l.YNc(2,H,10,10,"ng-template",1),l.YNc(3,L,21,3,"ng-template",1),l.qZA())},directives:[u.q,g.n,p.f,h,Z,f.L,M,b,U.F,A.z,O.B,m.U,d.H,i.JJ,i.oH,q.c],encapsulation:2,changeDetection:0}),e})(),F=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[c.TuiRadioListModule,c.TuiRangeModule,o.ez,i.u5,i.UX,r.TuiLinkModule,s.fV,c.TuiIslandModule,r.TuiNotificationModule,r.TuiSvgModule,a.Bz.forChild((0,s.Ve)(Y))]]}),e})()}}]);