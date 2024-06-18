(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51546],{51546:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport type {TuiCard} from '@taiga-ui/addon-commerce';\nimport {TUI_INPUT_CARD_GROUPED_TEXTS, TuiInputCardGroup} from '@taiga-ui/addon-commerce';\nimport {of} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent5\",\n    imports: [TuiInputCardGroup, ReactiveFormsModule],\n    templateUrl: './index.html',\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_INPUT_CARD_GROUPED_TEXTS,\n            useValue: of({\n                cardNumberText: 'Number',\n                expiryText: 'MM/YY',\n                cvcText: 'Code',\n            }),\n        },\n    ],\n})\nexport default class Example {\n    protected readonly control = new FormControl<Partial<TuiCard>>({\n        card: '558620******2158',\n        expire: '12/25',\n    });\n}\n"}}]);