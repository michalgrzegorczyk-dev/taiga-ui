(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[69500],{69500:n=>{n.exports='<div class="island">\n    <tui-line-clamp\n        [content]="daenerys"\n        [lineHeight]="20"\n        [linesLimit]="2"\n    />\n</div>\n\n<tui-notification class="tui-space_bottom-4">\n    Use\n    <code>white-space: nowrap</code>\n    to expand to the right\n</tui-notification>\n\n<div class="island">\n    <tui-line-clamp\n        [content]="mormont"\n        [lineHeight]="20"\n        [linesLimit]="1"\n    />\n</div>\n<ng-template #daenerys>\n    <div class="hint">\n        Daenerys of the House Targaryen, the First of Her Name, The Unburnt, Queen of the Andals, the Rhoynar and the\n        First Men, Queen of Meereen, Khaleesi of the Great Grass Sea, Protector of the Realm, Lady Regent of the Seven\n        Kingdoms, Breaker of Chains and Mother of Dragons\n    </div>\n</ng-template>\n<ng-template #mormont>\n    <div class="hint no-wrap">Jorah Mormont of House Mormont, Lord of Bear Island</div>\n</ng-template>\n\n<div\n    *ngIf="value$ | async as value; else loading"\n    class="wrapper"\n>\n    <div class="result">\n        <div class="content">\n            <tui-line-clamp\n                [content]="value"\n                [lineHeight]="20"\n                [linesLimit]="1"\n            />\n        </div>\n    </div>\n</div>\n\n<ng-template #loading>Loading...</ng-template>\n'}}]);