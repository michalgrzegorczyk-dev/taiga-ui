(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-component-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/services/alerts/examples/4/alert-example-with-data/alert-example-with-data.component.ts ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiNotificationContentContext} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-notifications-service-example-with-data`,\n    templateUrl: `./alert-example-with-data.template.html`,\n    styleUrls: [`./alert-example-with-data.style.less`],\n    changeDetection,\n})\nexport class AlertExampleWithDataComponent {\n    value: number;\n\n    constructor(\n        @Inject(POLYMORPHEUS_CONTEXT)\n        private readonly context: TuiNotificationContentContext<number, number>,\n    ) {\n        this.value = this.context.data;\n    }\n\n    increaseBalance(): void {\n        this.value += 10;\n    }\n\n    submit(): void {\n        this.context.emitAndCloseHook(this.value);\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-4-alert-example-with-data-alert-example-with-data-component-ts.js.map