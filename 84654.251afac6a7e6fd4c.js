(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[84654],{84654:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiAlertService, TuiButtonDirective} from '@taiga-ui/core';\nimport {TuiAvatarComponent} from '@taiga-ui/kit';\nimport {type PolymorpheusContent} from '@taiga-ui/polymorpheus';\nimport {switchMap} from 'rxjs';\n\nimport {PromptService} from './prompt/prompt.service';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    selector: 'tui-dialogs-example-1',\n    imports: [TuiButtonDirective, TuiAvatarComponent],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiDialogsExample1 {\n    private readonly alerts = inject(TuiAlertService);\n    private readonly promptService = inject(PromptService);\n\n    protected onClick(\n        choose: PolymorpheusContent,\n        poorly: PolymorpheusContent,\n        wisely: PolymorpheusContent,\n    ): void {\n        this.promptService\n            .open(choose, {\n                heading: 'Taiga UI is the best',\n                buttons: ['Absolutely!', 'No way!'],\n            })\n            .pipe(\n                switchMap(response =>\n                    response\n                        ? this.alerts.open(wisely, {\n                              status: 'success',\n                          })\n                        : this.alerts.open(poorly, {\n                              status: 'error',\n                          }),\n                ),\n            )\n            .subscribe();\n    }\n}\n"}}]);