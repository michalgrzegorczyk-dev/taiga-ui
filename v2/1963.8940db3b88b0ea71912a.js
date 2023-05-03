(window.webpackJsonp=window.webpackJsonp||[]).push([[1963],{LbXo:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {isPresent} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample5 {\n    readonly items = ['String', 'null', 'undefined'];\n\n    parametersForm = new FormGroup({\n        value: new FormControl(null),\n    });\n\n    get isPresent(): boolean {\n        const {value} = this.parametersForm.value;\n        const objectedValue = this.objectifyValue(value);\n\n        return isPresent(objectedValue);\n    }\n\n    private objectifyValue(value: string): string | null | undefined {\n        if (value === 'null') {\n            return null;\n        }\n\n        if (value === 'undefined') {\n            return undefined;\n        }\n\n        return value;\n    }\n}\n"}}]);