(window.webpackJsonp=window.webpackJsonp||[]).push([[1853],{"+c7y":function(n,o,e){"use strict";e.r(o),o.default="```ts\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {Injector} from '@angular/core';\n\nimport {CustomNotificationComponent} from './custom-notification.component';\n\n//...\nexport class MyComponent {\n  constructor(\n    @Inject(Injector) private injector: Injector,\n    @Inject(TuiAlertService) private readonly alertService: TuiAlertService,\n  ) {\n    //...\n    this.alertService\n      .open(new PolymorpheusComponent(CustomNotificationComponent, this.injector), {label: 'Heading'})\n      .subscribe();\n  }\n  //...\n}\n```\n"}}]);