(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78446,20332,61386,99503,50517,11820,61505,99781,50023],{20332:(t,e,i)=>{i.d(e,{W:()=>M});var n,s=i(84911),r=i(20755),o=i(87882),a=i(17628),u=i(69781),c=i(8610),h=i(77355),m=i(42463),g=i(96954),l=i(76893),p=i(17085),d=i(2255);const v=function(t){return{$implicit:t}};function f(t,e){if(1&t){const t=r.EpF();r.O4$(),r.TgZ(0,"path",5),r.NdJ("tuiHoveredChange",(function(e){const i=r.CHM(t).$implicit,n=r.oxw();return r.KtG(n.onHovered(e,i))})),r.qZA()}if(2&t){const t=e.$implicit,i=r.oxw();r.Udp("color",i.getColor(t)),r.Q6J("tuiHint",i.hintContent)("tuiHintContext",r.VKq(6,v,t))("tuiPieChart",i.segments[t]),r.uIk("transform",i.getTransform(t))}}const I={xs:"50",s:"50",m:"77.8",l:"81.9",xl:"81.3"},C={xs:1.15,s:1.25,m:1.11,l:1.09,xl:1.08};class M{constructor(){this.hintOptions=(0,r.f3M)(a.TuiHintOptionsDirective,{optional:!0}),this.autoIdString=(0,r.f3M)(o.TuiIdService).generate(),this.value=[],this.size="m",this.masked=!1,this.activeItemIndex=NaN,this.activeItemIndexChange=new r.vpe,this.hintOptions&&(this.hintOptions.showDelay=0,this.hintOptions.hideDelay=0)}get empty(){return!this.getSum(this.value)}get hintContent(){return this.hintOptions?.content||""}get maskId(){return`tui-ring-chart-${this.autoIdString}`}get mask(){return this.masked?`url(#${this.maskId})`:null}get radius(){return I[this.size]}get segments(){return this.getSegments(this.value)}getTransform(t){const e=this.masked?`scale(${C[this.size]})`:`scale(${C.xs})`;return t===this.activeItemIndex?e:null}onHovered(t,e){this.updateActiveItemIndex(t?e:NaN)}getColor(t){return`var(--tui-chart-${t})`}getSum(t){return(0,o.tuiSum)(...t)}getSegments(t){return t.map(((t,e,i)=>i.reduce(((t,i,n)=>n<e?this.getDeg(i)+t:t),this.getDeg(t)))).map(((t,e,i)=>[i[e-1]||0,Math.min(t,359.9999)]))}getDeg(t){return t/this.getSum(this.value)*360}updateActiveItemIndex(t){t!==this.activeItemIndex&&(this.activeItemIndex=t,this.activeItemIndexChange.next(t))}}(n=M).ɵfac=function(t){return new(t||n)},n.ɵcmp=r.Xpm({type:n,selectors:[["tui-pie-chart"]],hostVars:3,hostBindings:function(t,e){2&t&&(r.uIk("data-size",e.size),r.ekj("_empty",e.empty))},inputs:{value:"value",size:"size",masked:"masked",activeItemIndex:"activeItemIndex"},outputs:{activeItemIndexChange:"activeItemIndexChange"},features:[r._Bn([],[(0,a.tuiHintOptionsProvider)({direction:"top-right",appearance:"dark"})])],decls:8,vars:5,consts:[["focusable","false","height","100%","viewBox","-100 -100 200 200","width","100%","xmlns","http://www.w3.org/2000/svg",1,"t-svg"],["fill","white","height","400","width","400","x","-200","y","-200"],["cx","0","cy","0"],["cx","0","cy","0","r","100",1,"t-placeholder"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","","class","t-segment",3,"color","tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange",4,"tuiRepeatTimes","tuiRepeatTimesOf"],["automation-id","tui-pie-chart__segment","d","","fill","currentColor","tuiHintPointer","",1,"t-segment",3,"tuiHint","tuiHintContext","tuiPieChart","tuiHoveredChange"]],template:function(t,e){1&t&&(r.O4$(),r.TgZ(0,"svg",0)(1,"defs")(2,"mask"),r._UZ(3,"rect",1)(4,"circle",2),r.qZA()(),r.TgZ(5,"g"),r._UZ(6,"circle",3),r.YNc(7,f,1,8,"path",4),r.qZA()()),2&t&&(r.xp6(2),r.uIk("id",e.maskId),r.xp6(2),r.uIk("r",e.radius),r.xp6(1),r.Udp("mask",e.mask),r.xp6(2),r.Q6J("tuiRepeatTimesOf",e.segments.length))},dependencies:[u.X,c.c,h.D,m.x,g.t,l.q,p.D,d.K],styles:["[_nghost-%COMP%]{position:relative;display:block;width:var(--t-size);height:var(--t-size)}[data-size=xs][_nghost-%COMP%]{--t-size: 2rem;pointer-events:none}[data-size=s][_nghost-%COMP%]{--t-size: 4rem}[data-size=m][_nghost-%COMP%]{--t-size: 9rem}[data-size=l][_nghost-%COMP%]{--t-size: 11rem}[data-size=xl][_nghost-%COMP%]{--t-size: 16rem}.t-svg[_ngcontent-%COMP%]{position:relative;overflow:visible;transform:rotate(-90deg)}.t-segment[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}._empty[_nghost-%COMP%]   .t-segment[_ngcontent-%COMP%]{display:none}.t-placeholder[_ngcontent-%COMP%]{fill:var(--tui-base-03)}"],changeDetection:0}),(0,s.gn)([o.tuiPure],M.prototype,"getSum",null),(0,s.gn)([o.tuiPure],M.prototype,"getSegments",null)},2255:(t,e,i)=>{i.d(e,{K:()=>p});var n=i(20755),s=i(62022),r=i(5393),o=i(569),a=i(87882),u=i(17628),c=i(56424),h=i(74114),m=i(84787),g=i(92425),l=i(85228);let p=(()=>{var t;class e{constructor(){this.sector$=new c.X([0,0]);const t=(0,a.tuiInjectElement)(),e=(0,n.f3M)(r.KS),i=(0,n.f3M)(r.L1),p=(0,n.f3M)(u.TUI_ANIMATIONS_SPEED);this.sector$.pipe((0,h.G)(),(0,m.w)((([t,n])=>{const s=e.now(),r=n[0]-t[0],o=n[1]-t[1];return i.pipe((0,g.U)((t=>(0,a.tuiEaseInOutQuad)((0,a.tuiClamp)((t-s)/(0,u.tuiGetDuration)(p),0,1)))),(0,l.o)((t=>t<1),!0),(0,g.U)((e=>[t[0]+r*e,n[1]>359?n[1]:t[1]+o*e])))})),(0,a.tuiZonefree)((0,n.f3M)(n.R0b)),(0,s.sL)()).subscribe((([e,i])=>t.setAttribute("d",(0,o.IP)(e,i))))}set tuiPieChart(t){this.sector$.next(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=n.lG2({type:t,selectors:[["path","tuiPieChart",""]],inputs:{tuiPieChart:"tuiPieChart"}}),e})()},569:(t,e,i)=>{i.d(e,{IP:()=>r,iP:()=>u});var n=i(87882);const s="M 100 0 A 100 100 0 1 1 100 0 L 0 0";function r(t,e){const i=(0,n.tuiToRadians)(t),r=(0,n.tuiToRadians)(e),o=100*Math.cos(i),a=100*Math.sin(i),u=100*Math.cos(r),c=100*Math.sin(r),h=["M",o,a,"A 100 100 0",(0,n.tuiToInt)(e-t>180),1,u,c,"L 0 0"];return Number.isNaN(u)?s:h.join(" ")}function o(t,e,i,n=!1,s=.2){const r=e||t,o=i||t,a=function(t,e){const i=e[0]-t[0],n=e[1]-t[1];return Math.atan2(n,i)}(r,o)+(n?Math.PI:0),u=function(t,e){const i=e[0]-t[0],n=e[1]-t[1];return Math.sqrt(i**2+n**2)}(r,o)*s;return[t[0]+Math.cos(a)*u,t[1]+Math.sin(a)*u]}const a=500;function u(t,e,i){return i?function(t,e,i){const[n,s]=o(t[e-1],t[e-2],t[e],!1,i),[r,a]=o(t[e],t[e-1],t[e+1],!0,i);return`C ${n},${s} ${r},${a} ${t[e][0]},${t[e][1]}`}(t,e,i/a):`L ${[t[e][0],t[e][1]]}`}},10882:(t,e,i)=>{i.d(e,{Fb:()=>o,UR:()=>s,bM:()=>r});var n=i(87882);const s={currency:null,currencyAlign:"right",sign:"negative-only"},r=(0,n.tuiCreateToken)(s);function o(t){return(0,n.tuiProvideOptions)(r,t,s)}},61386:(t,e,i)=>{i.d(e,{E:()=>c});var n=i(20755),s=i(93517),r=i(87882),o=i(17628),a=i(92425),u=i(10882);let c=(()=>{var t;class e{constructor(){this.options=(0,n.f3M)(u.bM),this.format=(0,n.f3M)(o.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,i=this.options.currencyAlign){return this.format.pipe((0,a.U)((n=>{const a=(0,s.$v)(t,this.options.sign),u=(0,s.BP)(e),c=(0,o.tuiFormatNumber)(Math.abs(t),{...n,precision:Number.isNaN(n.precision)?2:n.precision}),h=u?.length>1||"right"===i?r.CHAR_NO_BREAK_SPACE:"";return"right"===i?`${a}${c}${h}${u}`:`${a}${u}${h}${c}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=n.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})()}}]);