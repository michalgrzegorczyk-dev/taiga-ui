(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18778],{18778:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, Input} from '@angular/core';\nimport type {TuiCurrencyVariants} from '@taiga-ui/addon-commerce';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiIconPipe, TuiNumberFormat} from '@taiga-ui/core';\nimport type {PolymorpheusContent} from '@taiga-ui/polymorpheus';\nimport {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';\n\nexport interface MyAccount {\n    amount: number;\n    currency: TuiCurrencyVariants;\n    name: string;\n    paymentSystem: PolymorpheusContent;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Exampleaccount\",\n    selector: 'my-account',\n    imports: [\n        AsyncPipe,\n        PolymorpheusOutlet,\n        PolymorpheusTemplate,\n        TuiAmountPipe,\n        TuiIconPipe,\n        TuiNumberFormat,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleMyAccount {\n    @Input({required: true})\n    public account!: MyAccount;\n}\n"}}]);