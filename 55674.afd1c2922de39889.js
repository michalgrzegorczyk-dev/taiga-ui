(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55674],{55674:n=>{n.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiTable} from '@taiga-ui/addon-table';\nimport type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiButton, TuiFormatNumberPipe, TuiTextfield} from '@taiga-ui/core';\nimport {TuiButtonSelect, TuiDataListWrapper, TuiPagination} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example7\",\n    imports: [\n        AsyncPipe,\n        FormsModule,\n        NgForOf,\n        TuiButton,\n        TuiButtonSelect,\n        TuiDataListWrapper,\n        TuiFormatNumberPipe,\n        TuiPagination,\n        TuiTable,\n        TuiTextfield,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly data = [\n        {\n            name: 'Alex Inkin',\n            balance: 1323525,\n        },\n        {\n            name: 'Roman Sedov',\n            balance: 423242,\n        },\n    ] as const;\n\n    protected index = 4;\n    protected length = 10;\n    protected size = 10;\n    protected readonly items = [10, 50, 100];\n    protected readonly content: TuiStringHandler<TuiContext<number>> = ({$implicit}) =>\n        `${$implicit} items per page`;\n}\n"}}]);