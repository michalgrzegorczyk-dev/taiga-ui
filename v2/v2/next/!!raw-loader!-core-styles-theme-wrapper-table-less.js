(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-core-styles-theme-wrapper-table-less"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../core/styles/theme/wrapper/table.less":
/*!***********************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!../core/styles/theme/wrapper/table.less ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import '../../taiga-ui-local';\n\n/* stylelint-disable order/order */\ntui-wrapper[data-appearance='table'],\n[tuiWrapper][data-appearance='table'] {\n    border-radius: 0;\n    background: transparent;\n    color: var(--tui-text-01);\n\n    &:before,\n    &[data-appearance='table']:after {\n        position: fixed;\n        top: -1px;\n        left: -1px;\n        right: -1px;\n        bottom: -1px;\n    }\n\n    &:before {\n        .transition(background);\n        content: '';\n        z-index: -1;\n        background-repeat: no-repeat;\n        background-position: top right;\n        background-size: 0.5rem 0.5rem;\n    }\n\n    table &[data-appearance='table']:not(._focused):after {\n        border-width: 0;\n    }\n\n    table &._focused {\n        z-index: 1;\n    }\n\n    &[data-appearance='table']:after {\n        border-width: 1px;\n        color: var(--tui-base-04);\n    }\n\n    &[data-mode='onDark'] {\n        .wrapper-focus({\n            --tui-focus: var(--tui-text-01-night);\n        });\n    }\n\n    .wrapper-hover({\n        &:not(._focused):before {\n            background-color: var(--tui-clear-disabled);\n        }\n    });\n\n    .wrapper-focus({\n        background: transparent;\n    });\n\n    .wrapper-invalid({\n        &:before {\n            background-image: linear-gradient(to top right, transparent 0%, transparent 50%, var(--tui-error-fill) 50%, var(--tui-error-fill) 100%);\n        }\n\n        &:not(._focused):before {\n            background-color: var(--tui-error-bg);\n        }\n\n        .wrapper-hover({\n            &:not(._focused):before {\n                background-color: var(--tui-error-bg-hover);\n            }\n        });\n\n        .wrapper-disabled({\n            background: transparent;\n        });\n\n        .wrapper-focus({\n            background: transparent;\n\n            --tui-focus: var(--tui-error-fill);\n\n            &:after {\n                border-width: 1px;\n            }\n        });\n    });\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-core-styles-theme-wrapper-table-less.js.map