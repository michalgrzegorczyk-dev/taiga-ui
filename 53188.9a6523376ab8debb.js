(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53188],{53188:n=>{n.exports="import {NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {toSignal} from '@angular/core/rxjs-interop';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiBreakpointService,\n    TuiButton,\n    TuiDataList,\n    TuiIcon,\n    TuiLink,\n} from '@taiga-ui/core';\nimport {TuiActionBar, TuiFilter} from '@taiga-ui/kit';\nimport {map} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        NgIf,\n        ReactiveFormsModule,\n        TuiActionBar,\n        TuiButton,\n        TuiDataList,\n        TuiFilter,\n        TuiIcon,\n        TuiLink,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected items = ['one', 'two', 'three'];\n    protected control = new FormControl<string[]>([]);\n    protected expanded = false;\n\n    protected readonly isMobile = toSignal(\n        inject(TuiBreakpointService).pipe(map((size) => size === 'mobile')),\n    );\n\n    protected get value(): string[] {\n        return this.control.value || [];\n    }\n\n    protected get open(): boolean {\n        return this.value.length > 0;\n    }\n\n    protected get selected(): number {\n        return this.value.length;\n    }\n\n    protected toggleSelect(): void {\n        this.control.setValue(this.selected < this.items.length ? this.items : []);\n    }\n\n    protected close(): void {\n        this.control.setValue([]);\n        this.expanded = false;\n    }\n}\n"}}]);