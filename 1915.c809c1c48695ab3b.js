(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1915],{1915:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport type {TemplateRef} from '@angular/core';\nimport {Component, inject, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport type {TuiAlertContext} from '@taiga-ui/core';\nimport {TuiAlertService, TuiButton} from '@taiga-ui/core';\nimport {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        AsyncPipe,\n        PolymorpheusOutlet,\n        PolymorpheusTemplate,\n        TuiAmountPipe,\n        TuiButton,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n\n    @ViewChild('withdrawTemplate')\n    protected withdrawTemplate?: TemplateRef<TuiAlertContext>;\n\n    @ViewChild('depositTemplate')\n    protected depositTemplate?: TemplateRef<TuiAlertContext>;\n\n    protected money = 1000;\n\n    protected showWithdrawAlert(): void {\n        this.alerts\n            .open(this.withdrawTemplate || '', {\n                label: 'A template sample',\n                appearance: 'warning',\n                autoClose: 0,\n            })\n            .subscribe();\n    }\n\n    protected showDepositAlert(): void {\n        this.alerts\n            .open(this.depositTemplate || '', {\n                label: 'A template sample',\n                appearance: 'success',\n                autoClose: 0,\n            })\n            .subscribe();\n    }\n\n    protected withdraw(): void {\n        this.money -= 100;\n    }\n\n    protected deposit(): void {\n        this.money += 100;\n    }\n}\n"}}]);