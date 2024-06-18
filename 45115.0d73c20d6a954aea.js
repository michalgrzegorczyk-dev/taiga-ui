(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45115],{45115:n=>{n.exports="import {NgFor} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiDropdownModule, TuiGroupDirective} from '@taiga-ui/core';\nimport {TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiCell} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent6\",\n    imports: [\n        TuiCell,\n        TuiDropdownModule,\n        TuiGroupDirective,\n        TuiButton,\n        TuiDataListWrapper,\n        NgFor,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = [\n        {\n            icon: '@tui.phone',\n            toString: () => 'Call now',\n        },\n        {\n            icon: '@tui.star',\n            toString: () => 'Add to favorites',\n        },\n        {\n            icon: '@tui.trash',\n            toString: () => 'Remove item',\n        },\n    ];\n}\n"}}]);