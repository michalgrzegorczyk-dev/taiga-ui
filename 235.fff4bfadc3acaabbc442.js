(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[235],{235:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiDataListWrapperModule:()=>S});var i=n(12057),o=n(24751),a=n(33982),r=n(96292),s=n(55908),p=n(74788),u=n(43560),c=n(93525),l=n(33772),m=n(77027),d=n(41360),h=n(52219),y=n(50020),f=n(68800);function g(e,t){if(1&e&&(p._UZ(0,"tui-data-list-wrapper",2),p.ALo(1,"tuiFilterByInput")),2&e){const e=p.oxw();p.Q6J("disabledItemHandler",e.disabledItemHandler)("items",p.lcZ(1,2,e.items))}}let T=(()=>{class e{constructor(){this.control=new o.NI,this.items=["John Cleese","Eric Idle","Graham Chapman","Michael Palin","Terry Gilliam","Terry Jones"],this.disabledItemHandler=e=>e.startsWith("T")}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-data-list-wrapper-example-1"]],decls:3,vars:1,consts:[[3,"formControl"],["emptyContent","No results found","size","xs",3,"disabledItemHandler","items",4,"tuiDataList"],["emptyContent","No results found","size","xs",3,"disabledItemHandler","items"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input",0),p._uU(1," Account "),p.YNc(2,g,2,4,"tui-data-list-wrapper",1),p.qZA()),2&e&&p.Q6J("formControl",t.control)},directives:[m.K,d.w,o.JJ,o.oH,h.g,y.e],pipes:[f.b],encapsulation:2,changeDetection:0}),e})();var Z=n(30114),w=n(60666);function C(e,t){if(1&e&&(p._UZ(0,"tui-data-list-wrapper",2),p.ALo(1,"tuiFilterByInputWith"),p.ALo(2,"tuiStringifyContent")),2&e){const e=p.oxw();p.Q6J("items",p.xi3(1,2,e.items,e.stringify))("itemContent",p.lcZ(2,5,e.stringify))}}let x=(()=>{class e{constructor(){this.control=new o.NI,this.items=[{name:"John",surname:"Cleese"},{name:"Eric",surname:"Idle"},{name:"Graham",surname:"Chapman"},{name:"Michael",surname:"Palin"},{name:"Terry",surname:"Gilliam"},{name:"Terry",surname:"Jones"}],this.stringify=e=>`${e.name} ${e.surname}`}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-data-list-wrapper-example-2"]],decls:3,vars:1,consts:[[3,"formControl"],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input",0),p._uU(1," Account "),p.YNc(2,C,3,7,"tui-data-list-wrapper",1),p.qZA()),2&e&&p.Q6J("formControl",t.control)},directives:[m.K,d.w,o.JJ,o.oH,h.g,y.e],pipes:[Z.Y,w.Q],encapsulation:2,changeDetection:0}),e})();var b=n(76232);function _(e,t){if(1&e&&p._UZ(0,"tui-data-list-wrapper",2),2&e){const e=p.oxw();p.Q6J("items",e.items)("labels",e.labels)}}let A=(()=>{class e{constructor(){this.control=new o.NI,this.items=[["Caesar","Greek","Apple and Chicken"],["Broccoli Cheddar","Chicken and Rice","Chicken Noodle"]],this.labels=["Salad","Soup"]}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-data-list-wrapper-example-3"]],decls:3,vars:1,consts:[[3,"formControl"],[3,"items","labels",4,"tuiDataList"],[3,"items","labels"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-input",0),p._uU(1," Menu "),p.YNc(2,_,1,2,"tui-data-list-wrapper",1),p.qZA()),2&e&&p.Q6J("formControl",t.control)},directives:[m.K,d.w,o.JJ,o.oH,h.g,b.Q],encapsulation:2,changeDetection:0}),e})();var U=n(51192),N=n(60404),P=n(83074);function J(e,t){if(1&e&&(p.TgZ(0,"p"),p.TgZ(1,"code"),p._uU(2,"DataListWrapper"),p.qZA(),p._uU(3," is an abstraction over "),p.TgZ(4,"code"),p._uU(5,"DataList"),p.qZA(),p._uU(6," to simplify usage in common cases where precise control is not necessary. "),p.qZA(),p.TgZ(7,"tui-doc-example",2),p._UZ(8,"tui-data-list-wrapper-example-1"),p.qZA(),p.TgZ(9,"tui-doc-example",3),p._UZ(10,"tui-data-list-wrapper-example-2"),p.qZA(),p.TgZ(11,"tui-doc-example",4),p._UZ(12,"tui-data-list-wrapper-example-3"),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3)}}function q(e,t){1&e&&p._uU(0," Items to select ")}function M(e,t){1&e&&p._uU(0," Content of an item ")}function I(e,t){1&e&&p._uU(0," Content to display when there are no options inside ")}function L(e,t){1&e&&(p.TgZ(0,"div"),p._uU(1,"A handler that gets an item and returns true if it is disabled."),p.qZA(),p.TgZ(2,"strong"),p._uU(3,"Must be a pure function"),p.qZA())}function D(e,t){1&e&&p._uU(0," Size of items ")}function H(e,t){1&e&&p._uU(0," Group label ")}function v(e,t){1&e&&(p.TgZ(0,"h2"),p._uU(1,"DataListWrapper"),p.qZA(),p.TgZ(2,"tui-doc-documentation"),p.YNc(3,q,1,0,"ng-template",5),p.YNc(4,M,1,0,"ng-template",6),p.YNc(5,I,1,0,"ng-template",7),p.YNc(6,L,4,0,"ng-template",8),p.YNc(7,D,1,0,"ng-template",9),p.YNc(8,H,1,0,"ng-template",10),p.qZA())}function Q(e,t){if(1&e&&(p.TgZ(0,"ol",11),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiDataListWrapperModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",12),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",13),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let Y=(()=>{class e{constructor(){this.exampleModule=n.e(45827).then(n.t.bind(n,45827,17)),this.exampleHtml=n.e(99425).then(n.t.bind(n,99425,17)),this.example1={TypeScript:n.e(52292).then(n.t.bind(n,52292,17)),HTML:n.e(5440).then(n.t.bind(n,5440,17))},this.example2={TypeScript:n.e(27112).then(n.t.bind(n,27112,17)),HTML:n.e(99468).then(n.t.bind(n,99468,17))},this.example3={TypeScript:n.e(55745).then(n.t.bind(n,55745,17)),HTML:n.e(68463).then(n.t.bind(n,68463,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-data-list-wrapper"]],decls:4,vars:0,consts:[["header","DataListWrapper","package","KIT","type","components"],["pageTab",""],["id","disable","heading","Disables items that start with T",3,"content"],["id","custom","heading","Custom item content",3,"content"],["id","group-by","heading","Group by labels",3,"content"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","T[] | T[][] | null"],["documentationPropertyName","itemContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent<TuiValueContentContext<T>>"],["documentationPropertyName","emptyContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<T>"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeL | TuiSizeXS"],["documentationPropertyName","labels","documentationPropertyMode","input","documentationPropertyType","string[]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,J,13,3,"ng-template",1),p.YNc(2,v,9,0,"ng-template",1),p.YNc(3,Q,12,2,"ng-template",1),p.qZA())},directives:[u.q,c.n,l.f,T,x,A,U.z,N.B,P.c],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[i.ez,o.u5,o.UX,a.Bz.forChild((0,r.Ve)(Y)),r.fV,s.TuiDataListWrapperModule,s.TuiFilterByInputPipeModule,s.TuiInputModule,s.TuiStringifyContentPipeModule]]}),e})()}}]);