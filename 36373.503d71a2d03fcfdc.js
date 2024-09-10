(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[36373],{36373:e=>{e.exports="import {CommonModule} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIsPresentPipe, TuiLet} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {delayWhen, of, Subject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [CommonModule, TuiButton, TuiIsPresentPipe, TuiLet],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly loadCountSubject = new Subject<void>();\n\n    protected readonly count$ = of(0).pipe(delayWhen(() => this.loadCountSubject));\n\n    protected loadCount(): void {\n        this.loadCountSubject.next();\n        this.loadCountSubject.complete();\n    }\n}\n"}}]);