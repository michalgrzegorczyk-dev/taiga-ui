(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[99596],{99596:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiMediaModule:()=>S});var i=n(12057),o=n(24751),a=n(33982),u=n(96292),r=n(68807),c=n(3497),d=n(55908),p=n(74788),m=n(43560),s=n(93525),l=n(33772),g=n(1632),h=n(17678);function T(e,t){1&e&&p._UZ(0,"source",3)}let y=(()=>{class e{constructor(){this.currentTime=0,this.volume=1,this.paused=!0}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-media-example-1"]],decls:9,vars:6,consts:[["tuiMedia","","controls","","width","320",1,"video",3,"currentTime","paused","volume","currentTimeChange","pausedChange","volumeChange"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg",4,"tuiHighDpi"],["src","/assets/media/bbb.mp4","type","video/mp4"],["src","/assets/media/bbb_dpi.ogv","type","video/ogg"]],template:function(e,t){1&e&&(p.TgZ(0,"video",0),p.NdJ("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("volumeChange",(function(e){return t.volume=e})),p.YNc(1,T,1,0,"source",1),p._UZ(2,"source",2),p.qZA(),p.TgZ(3,"p"),p._uU(4),p.qZA(),p.TgZ(5,"p"),p._uU(6),p.qZA(),p.TgZ(7,"p"),p._uU(8),p.qZA()),2&e&&(p.Q6J("currentTime",t.currentTime)("paused",t.paused)("volume",t.volume),p.xp6(4),p.hij("currentTime: ",t.currentTime,""),p.xp6(2),p.hij("volume: ",t.volume,""),p.xp6(2),p.hij("paused: ",t.paused,""))},directives:[g.N,h.J],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{float:left;margin-right:1.5rem}"],changeDetection:0}),e})();var v=n(30644),Z=n(76189),f=n(47044);let x=(()=>{class e{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}getTime(e){const t=Math.round(e||0),n=t%r.SECONDS_IN_MINUTE,i=(t-n)/r.SECONDS_IN_MINUTE,o=String(n),a=String(i),u=1===o.length?`0${o}`:o;return`${1===a.length?`0${a}`:a}:${u}`}toggleState(){this.paused=!this.paused}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-media-example-2"]],decls:13,vars:9,consts:[[1,"player"],["tuiMedia","","width","320",1,"video",3,"currentTime","paused","currentTimeChange","pausedChange","click"],["video",""],["src","/assets/media/bbb.mp4","type","video/mp4"],["tuiMode","onDark",1,"controls"],["tuiIconButton","","type","button","title","Play/Pause","size","s","shape","rounded","appearance","flat",3,"icon","click"],["tuiSlider","","type","range","step","any",1,"slider",3,"max","ngModel","ngModelChange"],[1,"time"]],template:function(e,t){if(1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"video",1,2),p.NdJ("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e}))("click",(function(){return t.toggleState()})),p._UZ(3,"source",3),p.qZA(),p.TgZ(4,"div",4),p.TgZ(5,"button",5),p.NdJ("click",(function(){return t.toggleState()})),p.qZA(),p.TgZ(6,"input",6),p.NdJ("ngModelChange",(function(e){return t.currentTime=e})),p.qZA(),p.TgZ(7,"div",7),p.TgZ(8,"time"),p._uU(9),p.qZA(),p._uU(10," / "),p.TgZ(11,"time"),p._uU(12),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&e){const e=p.MAs(2);p.xp6(1),p.Q6J("currentTime",t.currentTime)("paused",t.paused),p.xp6(4),p.Q6J("icon",t.icon),p.xp6(1),p.Q6J("max",e.duration)("ngModel",t.currentTime),p.xp6(2),p.uIk("datetime",t.getTime(t.currentTime)),p.xp6(1),p.hij(" ",t.getTime(t.currentTime)," "),p.xp6(2),p.uIk("datetime",t.getTime(e.duration)),p.xp6(1),p.hij(" ",t.getTime(e.duration)," ")}},directives:[g.N,v.w,Z.v,f.i,o.eT,o.Fj,o.JJ,o.On],styles:["[_nghost-%COMP%]{display:block}.video[_ngcontent-%COMP%]{display:block}.player[_ngcontent-%COMP%]{position:relative;width:20rem}.controls[_ngcontent-%COMP%]{position:absolute;bottom:0;display:flex;width:100%;align-items:center;padding:.75rem .75rem .5rem;box-sizing:border-box;color:var(--tui-base-01);background:linear-gradient(to bottom,transparent,rgba(0,0,0,.56))}.slider[_ngcontent-%COMP%]{flex:1;margin-left:.75rem}.time[_ngcontent-%COMP%]{flex-shrink:0;margin-left:.75rem;font-size:.8125rem}"],changeDetection:0}),e})();var b=n(66596);let C=(()=>{class e{constructor(){this.currentTime=0,this.paused=!0}get icon(){return this.paused?"tuiIconPlayLarge":"tuiIconPauseLarge"}toggleState(){this.paused=!this.paused}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-media-example-3"]],decls:9,vars:5,consts:[[1,"tui-player"],["tuiMedia","","src","assets/media/strays.mp3",3,"currentTime","paused","currentTimeChange","pausedChange"],["audio",""],["tuiIconButton","","type","button","shape","rounded","appearance","secondary","title","Play/Pause",3,"icon","click"],["tuiLink","","href","https://waterplea.bandcamp.com/"],["tuiSlider","","type","range","step","any",1,"slider",3,"max","ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(p.TgZ(0,"div",0),p.TgZ(1,"audio",1,2),p.NdJ("currentTimeChange",(function(e){return t.currentTime=e}))("pausedChange",(function(e){return t.paused=e})),p.qZA(),p.TgZ(3,"button",3),p.NdJ("click",(function(){return t.toggleState()})),p.qZA(),p.TgZ(4,"div"),p.TgZ(5,"a",4),p._uU(6," Waterplea "),p.qZA(),p._uU(7," — Strays "),p.TgZ(8,"input",5),p.NdJ("ngModelChange",(function(e){return t.currentTime=e})),p.qZA(),p.qZA(),p.qZA()),2&e){const e=p.MAs(2);p.xp6(1),p.Q6J("currentTime",t.currentTime)("paused",t.paused),p.xp6(2),p.Q6J("icon",t.icon),p.xp6(5),p.Q6J("max",e.duration)("ngModel",t.currentTime)}},directives:[g.N,Z.v,b.V,f.i,o.eT,o.Fj,o.JJ,o.On],styles:[".tui-player{display:flex;width:20rem;border-radius:6.25rem;background:var(--tui-secondary);--tui-primary: var(--tui-link);--tui-primary-hover: var(--tui-link-hover);--tui-primary-active: var(--tui-link-hover)}.tui-player>div{flex:1;margin:.375rem 1.75rem 0 .375rem}\n"],encapsulation:2,changeDetection:0}),e})();var M=n(51192),P=n(60404),_=n(83074);function A(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1,"Directive for declarative work with HTML5 video and audio"),p.qZA(),p.TgZ(2,"tui-doc-example",2),p._UZ(3,"tui-media-example-1"),p.qZA(),p.TgZ(4,"tui-doc-example",3),p._UZ(5,"tui-media-example-2"),p.qZA(),p.TgZ(6,"tui-doc-example",4),p._UZ(7,"tui-media-example-3"),p.qZA()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3)}}function J(e,t){1&e&&p._uU(0," Current time ")}function N(e,t){1&e&&p._uU(0," Paused state ")}function k(e,t){1&e&&p._uU(0," Playback speed ")}function q(e,t){1&e&&p._uU(0," Volume ")}function U(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"audio",5),p.NdJ("pausedChange",(function(t){return p.CHM(e),p.oxw().paused=t}))("currentTimeChange",(function(t){return p.CHM(e),p.oxw().currentTime=t}))("volumeChange",(function(t){return p.CHM(e),p.oxw().volume=t})),p.qZA(),p.TgZ(1,"tui-doc-documentation"),p.YNc(2,J,1,0,"ng-template",6),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().currentTime=t})),p.YNc(3,N,1,0,"ng-template",7),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().paused=t})),p.YNc(4,k,1,0,"ng-template",8),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().playbackRate=t})),p.YNc(5,q,1,0,"ng-template",9),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().volume=t})),p.qZA()}if(2&e){const e=p.oxw();p.Q6J("playbackRate",e.playbackRate)("paused",e.paused)("currentTime",e.currentTime)("volume",e.volume),p.xp6(2),p.Q6J("documentationPropertyValue",e.currentTime),p.xp6(1),p.Q6J("documentationPropertyValue",e.paused),p.xp6(1),p.Q6J("documentationPropertyValue",e.playbackRate),p.xp6(1),p.Q6J("documentationPropertyValues",e.volumeVariants)("documentationPropertyValue",e.volume)}}function w(e,t){if(1&e&&(p.TgZ(0,"ol",10),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiMediaModule"),p.qZA(),p._uU(6," into your component module: "),p.qZA(),p._UZ(7,"tui-doc-code",11),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",12),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let V=(()=>{class e{constructor(){this.exampleModule=n.e(41662).then(n.t.bind(n,41662,17)),this.exampleHtml=n.e(26712).then(n.t.bind(n,26712,17)),this.example1={TypeScript:n.e(23856).then(n.t.bind(n,23856,17)),HTML:n.e(71713).then(n.t.bind(n,71713,17))},this.example2={TypeScript:n.e(48365).then(n.t.bind(n,48365,17)),HTML:n.e(74607).then(n.t.bind(n,74607,17)),LESS:n.e(42161).then(n.t.bind(n,42161,17))},this.example3={TypeScript:n.e(12258).then(n.t.bind(n,12258,17)),HTML:n.e(26349).then(n.t.bind(n,26349,17)),LESS:n.e(95604).then(n.t.bind(n,95604,17))},this.volumeVariants=[1,.5,.25,0],this.playbackRate=1,this.currentTime=0,this.volume=this.volumeVariants[0],this.paused=!0}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-tui-media"]],decls:4,vars:0,consts:[["header","Media","package","CDK","type","directives"],["pageTab",""],["id","native","heading","Native controls",3,"content"],["id","video","heading","Video",3,"content"],["id","audio","heading","Audio",3,"content"],["tuiMedia","","controls","","src","assets/media/strays.mp3",3,"playbackRate","paused","currentTime","volume","pausedChange","currentTimeChange","volumeChange"],["documentationPropertyName","currentTime","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","paused","documentationPropertyType","boolean","documentationPropertyMode","input-output",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","playbackRate","documentationPropertyType","number","documentationPropertyMode","input",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","volume","documentationPropertyType","number","documentationPropertyMode","input-output",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,A,8,3,"ng-template",1),p.YNc(2,U,6,9,"ng-template",1),p.YNc(3,w,12,2,"ng-template",1),p.qZA())},directives:[m.q,s.n,l.f,y,x,C,g.N,M.z,P.B,_.c],encapsulation:2,changeDetection:0}),e})(),S=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[i.ez,o.u5,r.TuiMediaModule,r.TuiHighDpiModule,c.TuiLinkModule,c.TuiButtonModule,d.TuiSliderModule,c.TuiModeModule,u.fV,a.Bz.forChild((0,u.Ve)(V))]]}),e})()}}]);