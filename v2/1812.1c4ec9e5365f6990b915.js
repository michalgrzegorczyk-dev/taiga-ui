(window.webpackJsonp=window.webpackJsonp||[]).push([[1812],{aPhY:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-mapper-example1`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMapperExample1 {\n    readonly mapper = (amount: number, currencySymbol: string): string =>\n        `Total: ${amount} ${currencySymbol}`;\n}\n"}}]);