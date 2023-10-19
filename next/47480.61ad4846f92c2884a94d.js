(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[47480],{47480:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {MaskitoOptions} from '@maskito/core';\nimport {maskitoDateOptionsGenerator} from '@maskito/kit';\nimport {TuiBooleanHandler, TuiDay} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-input-tag-example-9',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputTagExample9 {\n    readonly control = new FormControl([]);\n    readonly min = new Date(2000, 0, 1);\n    readonly max = new Date(2025, 4, 10);\n\n    readonly options: MaskitoOptions = maskitoDateOptionsGenerator({\n        mode: 'dd/mm/yyyy',\n        separator: '.',\n        min: this.min,\n        max: this.max,\n    });\n\n    tagValidator: TuiBooleanHandler<string> = (tag: string) => {\n        const {year, month, day} = TuiDay.parseRawDateString(tag);\n\n        return (\n            TuiDay.isValidDay(year, month, day) &&\n            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() >= this.min &&\n            TuiDay.normalizeOf(year, month, day).toLocalNativeDate() <= this.max\n        );\n    };\n}\n"}}]);