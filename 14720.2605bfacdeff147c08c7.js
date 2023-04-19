(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[14720],{14720:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiIsFalsy} from '@taiga-ui/cdk';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\nimport {interval, of} from 'rxjs';\nimport {map, scan, startWith} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-field-error-pipe-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                email: 'Enter a valid email',\n                maxlength: ({requiredLength}: {requiredLength: string}) =>\n                    `Maximum length — ${requiredLength}`,\n                minlength: ({requiredLength}: {requiredLength: string}) =>\n                    of(`Minimum length — ${requiredLength}`),\n                min: interval(2000).pipe(\n                    scan(tuiIsFalsy, false),\n                    map(val => (val ? 'Fix please' : 'Min number 3')),\n                    startWith('Min number 3'),\n                ),\n            },\n        },\n    ],\n})\nexport class TuiFieldErrorPipeExample2 {\n    readonly testValue1 = new FormControl('', [\n        Validators.minLength(4),\n        Validators.maxLength(4),\n    ]);\n\n    readonly testValue2 = new FormControl('', [Validators.required, Validators.email]);\n\n    readonly testValue3 = new FormControl(2, [Validators.min(3)]);\n\n    readonly testForm = new FormGroup({\n        testValue1: this.testValue1,\n        testValue2: this.testValue2,\n        testValue3: this.testValue3,\n    });\n\n    constructor() {\n        this.testValue1.valueChanges.subscribe(() => {\n            this.testValue1.markAsTouched();\n        });\n    }\n}\n"}}]);