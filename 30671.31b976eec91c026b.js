(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[30671],{30671:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiCurrencyPipe} from '@taiga-ui/addon-commerce';\nimport {TuiInputNumberModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        ReactiveFormsModule,\n        TuiCurrencyPipe,\n        TuiInputNumberModule,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(100),\n    });\n}\n"}}]);