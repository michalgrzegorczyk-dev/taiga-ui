(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[39402],{39402:n=>{n.exports='<h3>TODO:</h3>\n<p>(click on item if it is finished)</p>\n\n<ul class="tui-list">\n    <li\n        *ngFor="let task of todoTasks"\n        class="tui-list__item"\n        (click)="task.completed = !task.completed"\n    >\n        {{ task.title }}\n        <tui-icon\n            *ngIf="task.completed"\n            icon="@tui.check"\n            [@tuiScaleIn]="getAnimation((speed | async) || 0)"\n        />\n    </li>\n</ul>\n'}}]);