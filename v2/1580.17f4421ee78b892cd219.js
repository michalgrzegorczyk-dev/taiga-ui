(window.webpackJsonp=window.webpackJsonp||[]).push([[1580],{gbLi:function(n,e,t){"use strict";t.r(e),e.default='<tui-text-area\n    #textarea\n    tuiDropdownSelectionPosition="word"\n    [tuiDropdownContent]="dropdown"\n    [tuiDropdownSelection]="predicate"\n    [pseudoFocused]="focused"\n    [(ngModel)]="value"\n    (keydown.arrowUp)="onArrow($event, \'last\')"\n    (keydown.arrowDown)="onArrow($event, \'first\')"\n>\n    Type a message\n</tui-text-area>\n<ng-template #dropdown>\n    <tui-data-list\n        *ngIf="textarea.nativeFocusableElement"\n        class="menu"\n        (keydown.escape)="textarea.nativeFocusableElement.focus()"\n    >\n        <button\n            *ngFor="let item of filterItems(textarea.nativeFocusableElement)"\n            tuiOption\n            (click)="onClick(item.login, textarea.nativeFocusableElement)"\n        >\n            {{ item.name }}\n            <tui-avatar\n                size="s"\n                [rounded]="true"\n                [avatarUrl]="item.avatar"\n                [text]="item.name"\n            ></tui-avatar>\n        </button>\n    </tui-data-list>\n</ng-template>\n'}}]);