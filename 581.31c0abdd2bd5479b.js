(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[581],{581:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';\nimport {\n    TuiAvatar,\n    TuiBadgeNotification,\n    TuiCheckbox,\n    TuiSensitive,\n    TuiTooltip,\n} from '@taiga-ui/kit';\nimport {TuiCell} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [\n        FormsModule,\n        TuiAvatar,\n        TuiBadgeNotification,\n        TuiCell,\n        TuiCheckbox,\n        TuiIcon,\n        TuiLoader,\n        TuiSensitive,\n        TuiTitle,\n        TuiTooltip,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected value = false;\n}\n"}}]);