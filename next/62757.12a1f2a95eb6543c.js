(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[62757],{62757:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\nimport {interval, map, startWith} from 'rxjs';\n\n@Component({\n    selector: 'tui-tooltip-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [TuiDestroyService],\n})\nexport class TuiTooltipExample1 {\n    protected isLoading$ = interval(2000).pipe(\n        map(i => Boolean(i % 2)),\n        startWith(true),\n    );\n}\n"}}]);