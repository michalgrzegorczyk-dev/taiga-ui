(window.webpackJsonp=window.webpackJsonp||[]).push([[1001],{WaLi:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-label-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLabelExample1 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(),\n    });\n}\n"}}]);