(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[72956],{72956:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {TuiInputDateMultiModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [ReactiveFormsModule, TuiInputDateMultiModule, TuiTextfieldControllerModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl([\n            new TuiDay(2017, 0, 7),\n            new TuiDay(2017, 0, 10),\n            new TuiDay(2017, 0, 15),\n        ]),\n    });\n}\n"}}]);