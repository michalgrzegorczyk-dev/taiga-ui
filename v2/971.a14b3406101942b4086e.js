(window.webpackJsonp=window.webpackJsonp||[]).push([[971],{D4Hu:function(n,e,i){"use strict";i.r(e),e.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <tui-notification i18n>\n        Custom mode is set with\n        <a\n            tuiLink\n            routerLink="/directives/mode"\n        >\n            <code>tuiMode</code>\n        </a>\n        directive\n    </tui-notification>\n\n    <p>\n        <tui-input\n            formControlName="testValue"\n            [tuiTextfieldCleaner]="true"\n        >\n            Type an email\n            <input\n                tuiTextfield\n                placeholder="mail@mail.ru"\n                type="email"\n            />\n        </tui-input>\n    </p>\n    <div>\n        <p class="wrapper wrapper_dark">\n            <tui-input\n                formControlName="testValue"\n                tuiMode="onDark"\n                [tuiTextfieldCleaner]="true"\n            >\n                Type an email\n                <input\n                    tuiTextfield\n                    placeholder="mail@mail.ru"\n                    type="email"\n                />\n            </tui-input>\n        </p>\n    </div>\n    <div>\n        <p class="wrapper wrapper_light">\n            <tui-input\n                formControlName="testValue"\n                tuiMode="onLight"\n                [tuiTextfieldCleaner]="true"\n            >\n                Type an email\n                <input\n                    tuiTextfield\n                    placeholder="mail@mail.ru"\n                    type="email"\n                />\n            </tui-input>\n        </p>\n    </div>\n</form>\n'}}]);