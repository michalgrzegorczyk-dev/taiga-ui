(window.webpackJsonp=window.webpackJsonp||[]).push([[1215],{"3TD+":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-radio-block-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiRadioBlockExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl('orange'),\n    });\n}\n"}}]);