(window.webpackJsonp=window.webpackJsonp||[]).push([[712],{"1mn1":function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiAppearance} from '@taiga-ui/core';\nimport {BehaviorSubject, Observable} from 'rxjs';\nimport {map} from 'rxjs/operators';\n\nenum Department {\n    IT = 'IT',\n    HR = 'HR',\n    HeadOffice = 'Heads',\n    Delivery = 'Delivery',\n}\n\n@Component({\n    selector: 'tui-filter-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample4 {\n    readonly items = Object.values(Department);\n\n    readonly filters$ = new BehaviorSubject<readonly string[]>([]);\n\n    @tuiPure\n    get model$(): Observable<readonly string[]> {\n        return this.filters$.pipe(\n            map(value => (value.length === this.items.length ? [] : value)),\n        );\n    }\n\n    @tuiPure\n    get buttonAppearance$(): Observable<TuiAppearance> {\n        return this.filters$.pipe(\n            map(value =>\n                value.length === this.items.length\n                    ? TuiAppearance.WhiteblockActive\n                    : TuiAppearance.Whiteblock,\n            ),\n        );\n    }\n\n    onModelChange(model: readonly string[]): void {\n        this.filters$.next(model);\n    }\n\n    toggleAll(): void {\n        this.filters$.next(\n            this.items.length === this.filters$.value.length ? [] : [...this.items],\n        );\n    }\n}\n"}}]);