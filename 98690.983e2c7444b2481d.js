(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98690],{98690:n=>{n.exports='<button\n    tuiChevron\n    tuiDropdownAlign="right"\n    tuiLink\n    type="button"\n    class="link"\n    [iconStart]="ascending ? \'@tui.chevron-up\' : \'@tui.chevron-down\'"\n    [tuiDropdown]="dropdown"\n    [(tuiDropdownOpen)]="open"\n>\n    {{ primary }}\n</button>\n\n<ng-template #dropdown>\n    <tui-data-list>\n        <tui-opt-group *ngFor="let group of items">\n            <button\n                *ngFor="let item of group"\n                tuiOption\n                type="button"\n                class="item"\n                (click)="onClick(item)"\n            >\n                {{ item }}\n                <tui-icon\n                    *ngIf="itemIsActive(item)"\n                    icon="@tui.check"\n                />\n            </button>\n        </tui-opt-group>\n    </tui-data-list>\n</ng-template>\n'}}]);