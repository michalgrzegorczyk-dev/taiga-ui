(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{XebS:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_NUMBER_FORMAT} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-input-number-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_NUMBER_FORMAT,\n            useValue: {decimalSeparator: ',', thousandSeparator: '.'},\n        },\n    ],\n})\nexport class TuiInputNumberExample5 {\n    value = 123.56;\n}\n"}}]);