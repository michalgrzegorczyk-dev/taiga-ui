(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[57645],{57645:e=>{e.exports="import {JsonPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {TuiInputDateTimeModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [JsonPipe, ReactiveFormsModule, TuiInputDateTimeModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl([new TuiDay(2017, 2, 15), null]),\n    });\n}\n"}}]);