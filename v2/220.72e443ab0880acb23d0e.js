(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{"W/yQ":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiAlertsModule",(function(){return Ae}));var o=n("An66"),a=n("3kIJ"),i=n("1VvW"),l=n("T8fS"),c=n("SVIu"),r=n("Qq0t"),s=n("dvRg"),u=n("cWK9"),m=n("kZht"),d=n("TLy2"),p=n("0/K7"),h=n("TxeG"),b=n("zV1d"),f=n("yZWP");let C=(()=>{class e{constructor(e){this.context=e,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.emitAndCloseHook(this.value)}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["tuiButton","","type","button","appearance","outline","size","m",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"span",0),m["\u0275\u0275text"](1,"Your balance:"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](2,"\n\xa0\n"),m["\u0275\u0275element"](3,"tui-money",1),m["\u0275\u0275elementStart"](4,"div",2),m["\u0275\u0275elementStart"](5,"button",3),m["\u0275\u0275listener"]("click",(function(){return t.submit()})),m["\u0275\u0275text"](6," Submit "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",4),m["\u0275\u0275listener"]("click",(function(){return t.increaseBalance()})),m["\u0275\u0275text"](8," Increase "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",t.value),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("pseudo",!0))},directives:[p.a,h.a,b.a,f.a],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var y=n("OZlg"),S=n("e0eB"),E=n("iyc4");let T=(()=>{class e{constructor(e){this.alertService=e}showNotification(){this.alertService.open("A simple option",{label:"With a heading!"}).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.ab))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",0),m["\u0275\u0275listener"]("click",(function(){return t.showNotification()})),m["\u0275\u0275text"](1," Show\n"),m["\u0275\u0275elementEnd"]())},directives:[b.a],encapsulation:2,changeDetection:0}),e})();const x=["withdrawTemplate"],v=["depositTemplate"];var _,w;function O(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,_),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275text"](3," Your balance: "),m["\u0275\u0275element"](4,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().withdraw()})),m["\u0275\u0275text"](6," Withdraw\xa0 "),m["\u0275\u0275element"](7,"tui-money",0),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("value",e.money),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",100)}}function A(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18nStart"](1,w),m["\u0275\u0275element"](2,"code"),m["\u0275\u0275element"](3,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"p"),m["\u0275\u0275text"](5," Your balance: "),m["\u0275\u0275element"](6,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",4),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().deposit()})),m["\u0275\u0275text"](8," Add\xa0 "),m["\u0275\u0275element"](9,"tui-money",0),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("value",e.money),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("value",100)}}_=$localize`:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`,w=$localize`:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChildren${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: instead of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChild${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `,w=m["\u0275\u0275i18nPostprocess"](w);let g=(()=>{class e{constructor(e){this.alertService=e,this.money=1e3}showWithdrawAlert(){this.alertService.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:!1}).subscribe()}showDepositAlert(){this.alertService.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:!1}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.ab))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-2"]],viewQuery:function(e,t){var n;1&e&&(m["\u0275\u0275viewQuery"](x,!0),m["\u0275\u0275viewQuery"](v,!0)),2&e&&(m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.withdrawTemplate=n.first),m["\u0275\u0275queryRefresh"](n=m["\u0275\u0275loadQuery"]())&&(t.depositTemplate=n.first))},decls:14,vars:2,consts:[[3,"value"],["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["withdrawTemplate",""],["depositTemplate",""],["tuiButton","","type","button","tuiMode","onLight","appearance","outline","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1," Your balance: "),m["\u0275\u0275element"](2,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.showWithdrawAlert()})),m["\u0275\u0275text"](4," Withdraw\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.showDepositAlert()})),m["\u0275\u0275text"](6," Add\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.withdraw()})),m["\u0275\u0275text"](8," Withdraw\xa0 "),m["\u0275\u0275element"](9,"tui-money",0),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](10,O,8,2,"ng-template",null,2,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275template"](12,A,10,2,"ng-template",null,3,m["\u0275\u0275templateRefExtractor"])),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("value",t.money),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("value",100))},directives:[p.a,b.a,h.a],encapsulation:2,changeDetection:0}),e})();var $=n("kuMc");let D=(()=>{class e{constructor(e){this.context=e}ok(){this.context.emitAndCloseHook(!0)}cancel(){this.context.emitAndCloseHook(!1)}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["tuiButton","","type","button","appearance","outline","size","s",3,"click"],["tuiButton","","type","button","appearance","outline","size","s",1,"tui-space_left-1",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275text"](1,"Yes?"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"div",0),m["\u0275\u0275elementStart"](3,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.ok()})),m["\u0275\u0275text"](4," Yes "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"button",2),m["\u0275\u0275listener"]("click",(function(){return t.cancel()})),m["\u0275\u0275text"](6," No "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},directives:[h.a,b.a],encapsulation:2,changeDetection:0}),e})();var P;P=$localize`:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`;let G=(()=>{class e{constructor(e,t,n){this.injector=n,this.notification=e.open(new u.b(D,this.injector),{label:"Question",status:"error",autoClose:!1}).pipe(Object(d.a)(t=>e.open("Got a value \u2014 "+t,{label:"Information"})),Object($.a)(t.events))}showNotification(){this.notification.subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.ab),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,P),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"button",0),m["\u0275\u0275listener"]("click",(function(){return t.showNotification()})),m["\u0275\u0275text"](3," Show\n"),m["\u0275\u0275elementEnd"]())},directives:[b.a],encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{constructor(e,t,n){this.injector=n,this.notification=e.open(new u.b(C,this.injector),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:!1}).pipe(Object(d.a)(t=>e.open("Got a value \u2014 "+t,{label:"Information"})),Object($.a)(t.events))}showNotification(){this.notification.subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.ab),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",0),m["\u0275\u0275listener"]("click",(function(){return t.showNotification()})),m["\u0275\u0275text"](1," Show\n"),m["\u0275\u0275elementEnd"]())},directives:[b.a],encapsulation:2,changeDetection:0}),e})();var V=n("D57K"),j=n("l4xa");const L=function(e){return{$implicit:e}};let R=(()=>{class e{constructor(e){this.context=e}get label(){return this.context.label}get status(){return this.context.$implicit}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](u.a))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:4,consts:[["polymorpheus-outlet","",3,"content","context"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"h4"),m["\u0275\u0275text"](1,"Start content"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](2,"label",0),m["\u0275\u0275elementStart"](3,"h4"),m["\u0275\u0275text"](4,"End content"),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",t.label)("context",m["\u0275\u0275pureFunction1"](2,L,t.status)))},directives:[u.d],encapsulation:2,changeDetection:0}),Object(V.b)([j.zd],e.prototype,"label",null),Object(V.b)([j.zd],e.prototype,"status",null),e})();var k=n("ONKv");let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"label",0),m["\u0275\u0275elementStart"](1,"span",1),m["\u0275\u0275text"](2,"From custom label component with"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](3,"tui-svg",2),m["\u0275\u0275elementEnd"]())},directives:[k.a],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:400;font-style:italic}"],changeDetection:0}),e})(),N=(()=>{class e{constructor(e,t,n){this.injector=n,this.notification=e.open(new u.b(R,this.injector),{label:({$implicit:e})=>"error"===e?"Error label from function":"Info label from function",status:"info",autoClose:!1}).pipe(Object($.a)(t.events)),this.notificationWithCustomLabel=e.open(new u.b(R,this.injector),{label:new u.b(z,this.injector),status:"warning",autoClose:!1}).pipe(Object($.a)(t.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.ab),m["\u0275\u0275directiveInject"](i.c),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-alerts-example-5"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tuiButton","","type","button","size","m",1,"tui-space_left-3",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"button",0),m["\u0275\u0275listener"]("click",(function(){return t.showNotification()})),m["\u0275\u0275text"](1," With custom label function\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"button",1),m["\u0275\u0275listener"]("click",(function(){return t.showNotificationWithCustomLabel()})),m["\u0275\u0275text"](3," With custom label component\n"),m["\u0275\u0275elementEnd"]())},directives:[b.a],encapsulation:2,changeDetection:0}),e})();var M,H,B,W=n("u8jZ"),U=n("yHor"),Q=n("zGJC");M=$localize`:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`,H=$localize`:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module to use it `,B=$localize`:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\ufffd#7\ufffd"}:START_TAG_STRONG:Singleton${"\ufffd/#7\ufffd"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `;const F=["heading",$localize`:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`],J=["heading",$localize`:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`];function Y(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,M),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,H),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"p"),m["\u0275\u0275i18nStart"](6,B),m["\u0275\u0275element"](7,"strong"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-example",2),m["\u0275\u0275element"](9,"tui-alerts-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"tui-doc-example",3),m["\u0275\u0275element"](11,"tui-alerts-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"tui-doc-example",4),m["\u0275\u0275element"](13,"tui-alerts-example-3"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"tui-doc-example",5),m["\u0275\u0275i18nAttributes"](15,F),m["\u0275\u0275element"](16,"tui-alerts-example-4"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"tui-doc-example",6),m["\u0275\u0275i18nAttributes"](18,J),m["\u0275\u0275element"](19,"tui-alerts-example-5"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](8),m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example2),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example3),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",e.example4),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example5)}}var K,Z,q,X,ee,te,ne,oe,ae,ie,le,ce,re,se,ue,me,de;function pe(e,t){1&e&&m["\u0275\u0275i18n"](0,q)}function he(e,t){1&e&&m["\u0275\u0275i18n"](0,X)}function be(e,t){1&e&&m["\u0275\u0275i18n"](0,ee)}function fe(e,t){1&e&&m["\u0275\u0275i18n"](0,te)}function Ce(e,t){1&e&&m["\u0275\u0275i18n"](0,ne)}function ye(e,t){1&e&&m["\u0275\u0275i18n"](0,oe)}function Se(e,t){1&e&&m["\u0275\u0275i18n"](0,ae)}function Ee(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"button",7),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().showNotification()})),m["\u0275\u0275text"](1," Show "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"div",8),m["\u0275\u0275i18nStart"](3,K),m["\u0275\u0275element"](4,"p"),m["\u0275\u0275element"](5,"tui-doc-code",9),m["\u0275\u0275element"](6,"code"),m["\u0275\u0275element"](7,"code"),m["\u0275\u0275element"](8,"code"),m["\u0275\u0275element"](9,"code"),m["\u0275\u0275elementStart"](10,"p"),m["\u0275\u0275element"](11,"code"),m["\u0275\u0275element"](12,"code"),m["\u0275\u0275element"](13,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](14,"tui-doc-documentation"),m["\u0275\u0275template"](15,pe,1,0,"ng-template",10),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().content=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"p"),m["\u0275\u0275i18nStart"](17,Z),m["\u0275\u0275element"](18,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"tui-doc-documentation"),m["\u0275\u0275template"](20,he,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().status=t})),m["\u0275\u0275template"](21,be,1,0,"ng-template",12),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().label=t})),m["\u0275\u0275template"](22,fe,1,0,"ng-template",13),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().data=t})),m["\u0275\u0275template"](23,Ce,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().autoClose=t})),m["\u0275\u0275template"](24,ye,1,0,"ng-template",15),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hasCloseButton=t})),m["\u0275\u0275template"](25,Se,1,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().hasIcon=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.method),m["\u0275\u0275advance"](10),m["\u0275\u0275property"]("documentationPropertyValues",e.contentVariants)("documentationPropertyValue",e.content),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("documentationPropertyValues",e.statusVariants)("documentationPropertyValue",e.status),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.label),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.data),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.autoCloseVariants)("documentationPropertyValue",e.autoClose),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.hasCloseButton),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",e.hasIcon)}}function Te(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",17),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,ie),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",18),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18nStart"](8,le),m["\u0275\u0275element"](9,"code"),m["\u0275\u0275element"](10,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](11,"tui-doc-code",19),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"li"),m["\u0275\u0275i18nStart"](13,ce),m["\u0275\u0275elementStart"](14,"a",20),m["\u0275\u0275element"](15,"code"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](16,"li"),m["\u0275\u0275elementStart"](17,"p"),m["\u0275\u0275i18nStart"](18,re),m["\u0275\u0275element"](19,"code"),m["\u0275\u0275element"](20,"code"),m["\u0275\u0275element"](21,"code"),m["\u0275\u0275element"](22,"code"),m["\u0275\u0275element"](23,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](24,"tui-doc-code",21),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](25,"li"),m["\u0275\u0275elementStart"](26,"p"),m["\u0275\u0275i18nStart"](27,se),m["\u0275\u0275element"](28,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](29,"tui-doc-code",19),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](30,"li"),m["\u0275\u0275elementStart"](31,"p"),m["\u0275\u0275i18nStart"](32,ue),m["\u0275\u0275element"](33,"code"),m["\u0275\u0275element"](34,"code"),m["\u0275\u0275element"](35,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](36,"tui-doc-code",22),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](37,"li"),m["\u0275\u0275elementStart"](38,"p"),m["\u0275\u0275i18nStart"](39,me),m["\u0275\u0275element"](40,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](41,"tui-doc-code",22),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](42,"li"),m["\u0275\u0275elementStart"](43,"p"),m["\u0275\u0275i18nStart"](44,de),m["\u0275\u0275element"](45,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](46,"tui-doc-code",18),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",e.exampleServiceUsage),m["\u0275\u0275advance"](13),m["\u0275\u0275property"]("code",e.exampleImportModuleComponent),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleServiceUsageComponent),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("code",e.exampleCustomAlert),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleLazyModule),m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleOptions)}}K=$localize`:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH:To show notification, use method${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:TuiAlertService${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:number${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:takeUntil${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: like tools from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:RxJs${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:`,K=m["\u0275\u0275i18nPostprocess"](K),Z=$localize`:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE: interface: `,q=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,X=$localize`:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `,ee=$localize`:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `,te=$localize`:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `,ne=$localize`:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `,oe=$localize`:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `,ae=$localize`:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `,ie=$localize`:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,le=$localize`:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:show${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:`,le=m["\u0275\u0275i18nPostprocess"](le),ce=$localize`:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\ufffd#14\ufffd"}:START_LINK:${"\ufffd#15\ufffd"}:START_TAG_CODE:your template${"\ufffd/#15\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#14\ufffd"}:CLOSE_LINK: . `,re=$localize`:␟b5030ce649b5c1e3eed72243728a574deb50a808␟5635433899377563977: You can also customize notification logic with a component. Use ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: is input data type. Do not forget to add notification component into ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd|\ufffd#23\ufffd]"}:START_TAG_CODE:entryComponents${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd|\ufffd/#23\ufffd]"}:CLOSE_TAG_CODE: of your module: `,re=m["\u0275\u0275i18nPostprocess"](re),se=$localize`:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\ufffd#28\ufffd"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\ufffd/#28\ufffd"}:CLOSE_TAG_CODE: to show notification component with a service: `,ue=$localize`:␟98b6e4b10f63846e7caeea56c097f345956709c4␟6964531271774145282: Use ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:emitHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:closeHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: and ${"[\ufffd#33\ufffd|\ufffd#34\ufffd|\ufffd#35\ufffd]"}:START_TAG_CODE:emitAndCloseHook${"[\ufffd/#33\ufffd|\ufffd/#34\ufffd|\ufffd/#35\ufffd]"}:CLOSE_TAG_CODE: methods to control notification from itself: `,ue=m["\u0275\u0275i18nPostprocess"](ue),me=$localize`:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\ufffd#40\ufffd"}:START_TAG_CODE:new TuiComponentContent Injector${"\ufffd/#40\ufffd"}:CLOSE_TAG_CODE: of component where you call it `,de=$localize`:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\ufffd#45\ufffd"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\ufffd/#45\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `;let xe=(()=>{class e{constructor(e,t){this.alertService=e,this.method=n.e(1857).then(n.bind(null,"saOG")),this.exampleImportModuleComponent=n.e(1852).then(n.bind(null,"P8kK")),this.exampleServiceUsage=n.e(1856).then(n.bind(null,"7EBq")),this.exampleServiceUsageComponent=n.e(1855).then(n.bind(null,"+aXI")),this.exampleCustomAlert=n.e(1850).then(n.bind(null,"3+23")),this.exampleLazyModule=n.e(1853).then(n.bind(null,"+c7y")),this.exampleModule=n.e(1854).then(n.bind(null,"mFhR")),this.exampleOptions=n.e(1851).then(n.bind(null,"lBL7")),this.example1={TypeScript:n.e(1827).then(n.bind(null,"3W6H")),HTML:n.e(1826).then(n.bind(null,"d1mN"))},this.example2={TypeScript:n.e(1829).then(n.bind(null,"ElNS")),HTML:n.e(1828).then(n.bind(null,"9m6S"))},this.example3={TypeScript:n.e(1834).then(n.bind(null,"d4Fa")),HTML:n.e(1833).then(n.bind(null,"XVd/")),"alert-example/alert-example.component.ts":n.e(1830).then(n.bind(null,"Kscg")),"alert-example/alert-example.template.html":n.e(1832).then(n.bind(null,"gz/L")),"alert-example/alert-example.module.ts":n.e(1831).then(n.bind(null,"uMpE"))},this.example4={TypeScript:n.e(1840).then(n.bind(null,"562+")),HTML:n.e(1839).then(n.bind(null,"e1FD")),"alert-example-with-data/alert-example-with-data.component.ts":n.e(1835).then(n.bind(null,"HOde")),"alert-example-with-data/alert-example-with-data.template.html":n.e(1838).then(n.bind(null,"Gwis")),"alert-example-with-data/alert-example-with-data.style.less":n.e(1837).then(n.bind(null,"Q1aP")),"alert-example-with-data/alert-example-with-data.module.ts":n.e(1836).then(n.bind(null,"jNUI"))},this.example5={TypeScript:n.e(1849).then(n.bind(null,"V+j+")),HTML:n.e(1848).then(n.bind(null,"jOIf")),"custom-label/custom-label.module.ts":n.e(1845).then(n.bind(null,"d55m")),"custom-label/custom-label.component.ts":n.e(1844).then(n.bind(null,"sJ5X")),"custom-label/custom-label.style.less":n.e(1846).then(n.bind(null,"PFGW")),"custom-label/custom-label.template.html":n.e(1847).then(n.bind(null,"R5fQ")),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":n.e(1842).then(n.bind(null,"7O1s")),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":n.e(1841).then(n.bind(null,"9RJQ")),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":n.e(1843).then(n.bind(null,"5dSZ"))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[!0,!1,5e3,1e3,500],this.autoClose=this.autoCloseVariants[0],this.hasCloseButton=!0,this.hasIcon=!0,this.component=new u.b(C,t)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alertService.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,hasCloseButton:this.hasCloseButton,hasIcon:this.hasIcon}).pipe(Object(d.a)(e=>this.alertService.open(e,{label:"Notification responded with:"}))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](r.ab),m["\u0275\u0275directiveInject"](m.Injector))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-alerts"]],decls:4,vars:0,consts:[["header","AlertService","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data",3,"content",6,"heading"],["id","label",3,"content",6,"heading"],["tuiButton","","type","button","size","m",3,"click"],[1,"b-full-width"],[1,"tui-space_bottom-4",3,"code"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","boolean | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasIcon","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["routerLink","/services/alert-service","fragment","example-template","tuiLink",""],["filename","myComponent.module.ts",3,"code"],["filename","customNotification.component.ts",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,Y,20,5,"ng-template",1),m["\u0275\u0275template"](2,Ee,26,11,"ng-template",1),m["\u0275\u0275template"](3,Te,47,7,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[y.a,S.a,E.a,T,g,G,I,N,b.a,W.a,U.a,Q.a,i.e,f.a],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),ve=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,r.cb,r.Jb,s.Gb,l.g]]}),e})(),_e=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,r.Jb,r.cb,r.Eb,l.g]]}),e})(),we=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,u.c]]}),e})(),Oe=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.bc]]}),e})(),Ae=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,r.cb,r.Jb,l.g,u.c,we,_e,ve,Oe,s.Cb,s.cb,r.Eb,a.FormsModule,c.m,i.f.forChild(Object(c.u)(xe))]]}),e})()}}]);