(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[51105],{51105:n=>{n.exports="import {CommonModule} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe, TuiThumbnailCardComponent} from '@taiga-ui/addon-commerce';\nimport {\n    TuiButtonDirective,\n    TuiLabelModule,\n    TuiLinkDirective,\n    TuiScrollbarComponent,\n    TuiSurfaceDirective,\n} from '@taiga-ui/core';\nimport {TuiCardModule, TuiCellModule} from '@taiga-ui/experimental';\nimport {TuiAvatarComponent, TuiBadgeDirective} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiSurfaceDirective,\n        TuiThumbnailCardComponent,\n        TuiAvatarComponent,\n        TuiAmountPipe,\n        TuiLabelModule,\n        TuiBadgeDirective,\n        TuiButtonDirective,\n        TuiLinkDirective,\n        TuiCellModule,\n        TuiCardModule,\n        CommonModule,\n        TuiScrollbarComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less', './surface.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class ExampleComponent {\n    protected readonly reviews = [\n        {\n            name: 'Alex Inkin',\n            time: '2 days ago',\n            body: 'It is an absolute blast!',\n        },\n        {\n            name: 'Alex Inkin',\n            time: '3 days ago',\n            body: 'I am starting to kind of enjoy this library.',\n        },\n        {\n            name: 'Alex Inkin',\n            time: '4 days ago',\n            body: 'This library seems interesting but I hesitate refactoring our entire codebase...',\n        },\n    ];\n}\n"}}]);