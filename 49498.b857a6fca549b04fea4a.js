(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[49498],{49498:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiEditorEmbedIframeModule:()=>q});var o=n(12057),i=n(24751),r=n(33982),u=n(96292),l=n(48014),s=n(68807),a=n(3497),d=n(74788),c=n(43560),p=n(66596),m=n(33772),f=n(64762),h=n(91211),b=n(69303),g=n(62939),T=n(33250),v=n(76189),Z=n(17163),_=n(87623);const w=["dropdown"];function y(e,t){if(1&e){const e=d.EpF();d.TgZ(0,"div",4),d.TgZ(1,"label",5),d.TgZ(2,"div",6),d._uU(3,"Embed URL"),d.qZA(),d.TgZ(4,"div",7),d.TgZ(5,"tui-input-inline",8),d.NdJ("ngModelChange",(function(t){return d.CHM(e),d.oxw().url=t}))("keydown.enter",(function(){d.CHM(e);const t=d.oxw();return t.embedSource(t.url)})),d._uU(6),d.qZA(),d.qZA(),d.qZA(),d.qZA()}if(2&e){const e=t.$implicit,n=d.oxw();d.Q6J("tuiActiveZoneParent",e),d.xp6(5),d.ekj("t-input_filled",n.url),d.Q6J("ngModel",n.url),d.xp6(1),d.hij(" ",n.placeholder," ")}}let M=(()=>{class e{constructor(e){this.editor=e,this.placeholder="https://my-embed.site.com/etc1235",this.url=""}embedSource(e){var t;e&&(this.editor.setIframe({src:e}),this.url="",null===(t=this.dropdown)||void 0===t||t.close())}}return e.ɵfac=function(t){return new(t||e)(d.Y36(l.TuiTiptapEditorService))},e.ɵcmp=d.Xpm({type:e,selectors:[["embed-tool"]],viewQuery:function(e,t){if(1&e&&d.Gf(w,5),2&e){let e;d.iGM(e=d.CRH())&&(t.dropdown=e.first)}},decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","appearance","icon","automation-id","embed-tool__button","icon","tuiIconCodeLarge",1,"tool-button",3,"pseudoActive","focusable"],["youtubeDropdown",""],[1,"embed-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(e,t){if(1&e&&(d.TgZ(0,"tui-hosted-dropdown",0,1),d._UZ(2,"button",2),d.YNc(3,y,7,5,"ng-template",null,3,d.W1O),d.qZA()),2&e){const e=d.MAs(1),t=d.MAs(4);d.Q6J("content",t),d.xp6(2),d.Q6J("pseudoActive",e.open)("focusable",e.open)}},directives:[g.o,T.Ek,v.v,Z.e,_.l,i.JJ,i.On],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.embed-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),e})();var A=n(82707),x=n(34880);class E{constructor(e,t){this.sanitizer=e,this.isCypress=t,this.builtInTools=[l.TuiEditorTool.Undo],this.control=new i.NI(`\n        <p>Here is an online IDE:</p>\n        <iframe\n         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${this.isCypress?"":"%2Cresult"}&editable=true"\n         height="375"\n         width="100%"\n         scrolling="no"\n         frameborder="no"\n         loading="lazy"\n         allowtransparency="true"\n         data-type="iframe-editor"\n         allowfullscreen="true">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"\n            height="42"\n            width="100%"\n            data-type="iframe-editor">\n        </iframe>\n        <p></p>\n    `,i.kI.required)}safe(e){return this.sanitizer.bypassSecurityTrustHtml(e)}}E.ɵfac=function(e){return new(e||E)(d.Y36(h.H7),d.Y36(s.TUI_IS_CYPRESS))},E.ɵcmp=d.Xpm({type:E,selectors:[["tui-editor-embed-iframe-example-1"]],features:[d._Bn([{provide:l.TUI_EDITOR_EXTENSIONS,deps:[d.zs3],useFactory:e=>[Promise.resolve().then(n.bind(n,2823)).then((({StarterKit:e})=>e)),Promise.resolve().then(n.bind(n,20854)).then((({createIframeEditorExtension:t})=>t(e)))]}])],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-editor",0),d.ynx(1,1),d._UZ(2,"embed-tool",2),d.TgZ(3,"span",3),d._UZ(4,"tui-svg",4),d._uU(5," click it "),d.qZA(),d.BQk(),d.qZA(),d.TgZ(6,"h4"),d._uU(7,"HTML:"),d.qZA(),d._UZ(8,"div",5),d.TgZ(9,"h4"),d._uU(10,"Text:"),d.qZA(),d.TgZ(11,"p"),d._uU(12),d.qZA()),2&e&&(d.Q6J("formControl",t.control)("tools",t.builtInTools),d.xp6(8),d.Q6J("innerHTML",t.safe(t.control.value),d.oJD),d.xp6(4),d.Oqu(t.control.value))},directives:[b.a,i.JJ,i.oH,M,A.w,x.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,f.gn)([s.tuiPure],E.prototype,"safe",null);let I=(()=>{class e{constructor(){this.example1={HTML:n.e(80726).then(n.t.bind(n,80726,17)),TypeScript:n.e(92714).then(n.t.bind(n,92714,17)),LESS:n.e(48302).then(n.t.bind(n,48302,17)),"embed-tool/embed-tool.component.ts":n.e(7320).then(n.t.bind(n,7320,17)),"embed-tool/embed-tool.template.html":n.e(2015).then(n.t.bind(n,2015,17)),"embed-tool/embed-tool.styles.less":n.e(99326).then(n.t.bind(n,99326,17)),"embed-tool/embed-tool.module.ts":n.e(78475).then(n.t.bind(n,78475,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["editor-embed-iframe"]],features:[d._Bn([{provide:l.TUI_EDITOR_EXTENSIONS,useValue:l.defaultEditorExtensions}])],decls:11,vars:1,consts:[["header","Editor","package","ADDON-EDITOR","type","components"],["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","iframe","heading","Resizable iframe",3,"content"]],template:function(e,t){1&e&&(d.TgZ(0,"tui-doc-page",0),d.TgZ(1,"p"),d._uU(2," Rich Text Editor based on "),d.TgZ(3,"a",1),d._uU(4," TipTap Editor "),d.qZA(),d._uU(5," for using with Angular forms. For safety reasons use a "),d.TgZ(6,"a",2),d._uU(7," sanitizer "),d.qZA(),d._uU(8," with this component. "),d.qZA(),d.TgZ(9,"tui-doc-example",3),d._UZ(10,"tui-editor-embed-iframe-example-1"),d.qZA(),d.qZA()),2&e&&(d.xp6(9),d.Q6J("content",t.example1))},directives:[c.q,p.V,r.yS,m.f,E],encapsulation:2,changeDetection:0}),e})();var C=n(55908);let U=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[[o.ez,a.TuiButtonModule,a.TuiHostedDropdownModule,s.TuiActiveZoneModule,a.TuiDropdownModule,C.TuiInputInlineModule,i.u5]]}),e})(),q=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=d.oAB({type:e}),e.ɵinj=d.cJS({imports:[[o.ez,s.TuiActiveZoneModule,a.TuiSvgModule,a.TuiLinkModule,a.TuiHostedDropdownModule,a.TuiButtonModule,u.fV,i.u5,i.UX,l.TuiEditorModule,l.TuiEditorSocketModule,U,r.Bz.forChild((0,u.Ve)(I))]]}),e})()}}]);