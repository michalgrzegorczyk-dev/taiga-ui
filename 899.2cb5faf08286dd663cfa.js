(window.webpackJsonp=window.webpackJsonp||[]).push([[899],{"X+f0":function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInputTimeOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-time-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: 'HH:MM',\n            maxValues: {HH: 11, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport class TuiInputTimeExample5 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n        isPm: new FormControl(false),\n    });\n\n    get postfix(): string {\n        return this.testForm.value?.isPm ? 'PM' : 'AM';\n    }\n}\n"}}]);