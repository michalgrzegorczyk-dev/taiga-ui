(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-core-styles-markup-tui-space-less"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!../core/styles/markup/tui-space.less":
/*!********************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!../core/styles/markup/tui-space.less ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@sizes: 16;\n\n.generate-space(@direction, @i: 0) when (@i =< @sizes) {\n    .generate-space(@direction, @i + 1);\n\n    &_@{direction}-@{i} {\n        & when (@direction = all) {\n            margin: @space * @i;\n        }\n\n        & when (@direction = top) {\n            margin-top: @space * @i;\n        }\n\n        & when (@direction = bottom) {\n            margin-bottom: @space * @i;\n        }\n\n        & when (@direction = vertical) {\n            margin-top: @space * @i;\n            margin-bottom: @space * @i;\n        }\n\n        & when (@direction = left) {\n            margin-left: @space * @i;\n        }\n\n        & when (@direction = right) {\n            margin-right: @space * @i;\n        }\n\n        & when (@direction = horizontal) {\n            margin-right: @space * @i;\n            margin-left: @space * @i;\n        }\n    }\n}\n\n.tui-space {\n    .generate-space(all);\n    .generate-space(top);\n    .generate-space(bottom);\n    .generate-space(vertical);\n    .generate-space(left);\n    .generate-space(right);\n    .generate-space(horizontal);\n\n    &_auto {\n        margin-left: auto;\n        margin-right: auto;\n    }\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-core-styles-markup-tui-space-less.js.map