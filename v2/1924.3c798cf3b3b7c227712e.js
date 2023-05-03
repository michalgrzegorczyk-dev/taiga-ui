(window.webpackJsonp=window.webpackJsonp||[]).push([[1924],{u0us:function(n,t,e){"use strict";e.r(t),t.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {padStart} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-format-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample2 {\n    parametersForm = new FormGroup({\n        sourceString: new FormControl('Friend!'),\n        minResultLength: new FormControl(21),\n        padString: new FormControl('Hey, '),\n    });\n\n    get paddedStart(): string {\n        const {sourceString, minResultLength, padString} = this.parametersForm.value;\n\n        return padStart(sourceString || '', minResultLength || 0, padString || ' ');\n    }\n}\n"}}]);