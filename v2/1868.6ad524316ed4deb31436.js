(window.webpackJsonp=window.webpackJsonp||[]).push([[1868],{bfyz:function(n,t,e){"use strict";e.r(t),t.default='<button\n    tuiButton\n    type="button"\n    size="m"\n    (click)="showTableBar()"\n>\n    Show TableBar\n</button>\n\n<ng-template\n    #tableBarTemplate\n    let-close\n>\n    <div\n        tuiMode="onDark"\n        class="content"\n    >\n        <button\n            tuiButton\n            type="button"\n            size="m"\n        >\n            Save\n        </button>\n        <button\n            tuiButton\n            type="button"\n            appearance="flat"\n            size="m"\n            class="tui-space_left-3"\n            (click)="close()"\n        >\n            Cancel\n        </button>\n        <button\n            tuiButton\n            type="button"\n            appearance="outline"\n            size="m"\n            icon="tuiIconTrashLarge"\n            class="delete-button"\n        >\n            Delete\n        </button>\n    </div>\n</ng-template>\n'}}]);