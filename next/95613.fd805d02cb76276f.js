(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[95613],{95613:n=>{n.exports="import {\n    CdkFixedSizeVirtualScroll,\n    CdkVirtualForOf,\n    CdkVirtualScrollViewport,\n} from '@angular/cdk/scrolling';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiComparator} from '@taiga-ui/addon-table';\nimport {TuiTable} from '@taiga-ui/addon-table';\nimport {TuiDay, tuiToInt} from '@taiga-ui/cdk';\nimport {TuiScrollable, TuiScrollbar} from '@taiga-ui/core';\n\ninterface User {\n    readonly dob: TuiDay;\n    readonly name: string;\n}\n\nconst TODAY = TuiDay.currentLocal();\nconst FIRST = [\n    'John',\n    'Jane',\n    'Jack',\n    'Jill',\n    'James',\n    'Joan',\n    'Jim',\n    'Julia',\n    'Joe',\n    'Julia',\n];\n\nconst LAST = [\n    'Smith',\n    'West',\n    'Brown',\n    'Jones',\n    'Davis',\n    'Miller',\n    'Johnson',\n    'Jackson',\n    'Williams',\n    'Wilson',\n];\n\nconst DATA: readonly User[] = Array.from({length: 300}, () => ({\n    name: `${LAST[Math.floor(Math.random() * 10)]}, ${\n        FIRST[Math.floor(Math.random() * 10)]\n    }`,\n    dob: TODAY.append({day: -Math.floor(Math.random() * 4000) - 7500}),\n}));\n\nfunction getAge({dob}: User): number {\n    const years = TODAY.year - dob.year;\n    const months = TODAY.month - dob.month;\n    const days = TODAY.day - dob.day;\n    const offset = tuiToInt(months > 0 || (!months && days > 9));\n\n    return years + offset;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [\n        TuiTable,\n        TuiScrollbar,\n        CdkFixedSizeVirtualScroll,\n        CdkVirtualScrollViewport,\n        CdkVirtualForOf,\n        TuiScrollable,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly data = DATA;\n\n    protected readonly columns = ['name', 'dob', 'age'];\n\n    protected readonly getAge = getAge;\n\n    protected readonly ageSorter: TuiComparator<User> = (a: User, b: User) =>\n        getAge(a) - getAge(b);\n}\n"}}]);