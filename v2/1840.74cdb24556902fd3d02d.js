(window.webpackJsonp=window.webpackJsonp||[]).push([[1840],{"V+j+":function(n,t,o){"use strict";o.r(t),t.default="import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiNotification} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleWithCustomLabelComponent} from './alert-example-with-custom-label/alert-example-with-custom-label.component';\nimport {CustomLabelComponent} from './custom-label/custom-label.component';\n\n@Component({\n    selector: 'tui-alerts-example-5',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiAlertsExampleComponent5 {\n    readonly notification: Observable<void>;\n    readonly notificationWithCustomLabel: Observable<void>;\n\n    constructor(\n        @Inject(TuiAlertService) alertService: TuiAlertService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = alertService\n            .open(\n                new PolymorpheusComponent(\n                    AlertExampleWithCustomLabelComponent,\n                    this.injector,\n                ),\n                {\n                    label: ({$implicit}: TuiContextWithImplicit<TuiNotification>) =>\n                        $implicit === TuiNotification.Error\n                            ? 'Error label from function'\n                            : 'Info label from function',\n                    status: TuiNotification.Info,\n                    autoClose: false,\n                },\n            )\n            .pipe(takeUntil(router.events));\n\n        this.notificationWithCustomLabel = alertService\n            .open(\n                new PolymorpheusComponent(\n                    AlertExampleWithCustomLabelComponent,\n                    this.injector,\n                ),\n                {\n                    label: new PolymorpheusComponent(CustomLabelComponent, this.injector),\n                    status: TuiNotification.Warning,\n                    autoClose: false,\n                },\n            )\n            .pipe(takeUntil(router.events));\n    }\n\n    showNotification(): void {\n        this.notification.subscribe();\n    }\n\n    showNotificationWithCustomLabel(): void {\n        this.notificationWithCustomLabel.subscribe();\n    }\n}\n"}}]);