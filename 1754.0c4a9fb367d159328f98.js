(window.webpackJsonp=window.webpackJsonp||[]).push([[1754],{zmd9:function(o,e,n){"use strict";n.r(e),e.default="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiTableBarsService} from '@taiga-ui/addon-tablebars';\nimport {Injector} from '@angular/core';\nimport {CustomTableBarsComponent} from 'customTableBars.component';\n// ...\n\nexport class LazyModule {\n  constructor(@Inject(TuiTableBarsService) private readonly tableBarsService: TuiTableBarsService) {\n    // ...\n    this.tableBarsService.showTableBar(new PolymorpheusComponent(CustomTableBarsComponent, this.injector)).subscribe();\n    // ...\n  }\n}\n```\n"}}]);