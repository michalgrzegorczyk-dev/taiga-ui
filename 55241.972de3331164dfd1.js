(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55241],{55241:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiRepeatTimes} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiElasticContainer} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiButton, TuiElasticContainer, TuiRepeatTimes],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected content = 1;\n\n    protected add(): void {\n        this.content++;\n    }\n\n    protected remove(): void {\n        this.content--;\n    }\n}\n"}}]);