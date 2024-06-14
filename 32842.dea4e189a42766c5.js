(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[32842],{32842:n=>{n.exports="import {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';\nimport {TuiConfirmService} from '@taiga-ui/kit';\nimport {TuiInputModule} from '@taiga-ui/legacy';\nimport type {PolymorpheusContent} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent8\",\n    imports: [TuiInputModule, FormsModule, TuiButtonDirective],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [TuiConfirmService],\n})\nexport default class ExampleComponent {\n    private readonly confirm = inject(TuiConfirmService);\n    private readonly dialogs = inject(TuiDialogService);\n\n    protected value = '';\n\n    protected onModelChange(value: string): void {\n        this.value = value;\n        this.confirm.markAsDirty();\n    }\n\n    protected onClick(content: PolymorpheusContent): void {\n        const closeable = this.confirm.withConfirm({\n            label: 'Are you sure?',\n            data: {\n                content: 'Your data will be <strong>lost</strong>',\n            },\n        });\n\n        this.dialogs.open(content, {closeable, dismissible: closeable}).subscribe({\n            complete: () => {\n                this.value = '';\n                this.confirm.markAsPristine();\n            },\n        });\n    }\n}\n"}}]);