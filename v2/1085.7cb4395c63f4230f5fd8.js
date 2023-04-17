(window.webpackJsonp=window.webpackJsonp||[]).push([[1085],{s7CU:function(n,e,i){"use strict";i.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiContextWithImplicit,\n    TuiIdentityMatcher,\n    TuiStringHandler,\n} from '@taiga-ui/cdk';\n\ninterface Hero {\n    readonly id: number;\n    readonly name: string;\n}\n\n@Component({\n    selector: 'tui-multi-select-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMultiSelectExample3 {\n    readonly items: readonly Hero[] = [\n        {id: 1, name: 'Luke Skywalker'},\n        {id: 2, name: 'Leia Organa Solo'},\n        {id: 3, name: 'Darth Vader'},\n        {id: 4, name: 'Han Solo'},\n        {id: 5, name: 'Obi-Wan Kenobi'},\n        {id: 6, name: 'Yoda'},\n    ];\n\n    readonly control = new FormControl([this.items[3], this.items[4]]);\n\n    readonly stringify: TuiStringHandler<Hero | TuiContextWithImplicit<Hero>> = item =>\n        'name' in item ? item.name : item.$implicit.name;\n\n    readonly identityMatcher: TuiIdentityMatcher<Hero> = (hero1, hero2) =>\n        hero1.id === hero2.id;\n}\n"}}]);