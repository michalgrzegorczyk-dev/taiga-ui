(window.webpackJsonp=window.webpackJsonp||[]).push([[1492],{"23jx":function(n,e,t){"use strict";t.r(e),e.default='<tui-tree\n    [tuiTreeController]="true"\n    [value]="data"\n    [content]="content"\n    [childrenHandler]="handler"\n></tui-tree>\n\n<ng-template\n    #content\n    let-value\n    let-node="node"\n>\n    <div\n        class="wrapper"\n        [style.opacity]="1 / node.level"\n    >\n        <tui-svg\n            *ngIf="value.icon"\n            [src]="value.icon"\n        ></tui-svg>\n        {{ value.text }}\n    </div>\n</ng-template>\n'}}]);