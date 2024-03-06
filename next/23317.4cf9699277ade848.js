(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23317],{23317:e=>{e.exports="import {Component, ViewEncapsulation} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TUI_TEXTFIELD_APPEARANCE_DIRECTIVE, TuiButtonModule} from '@taiga-ui/core';\nimport {\n    TuiCheckboxModule,\n    tuiCheckboxOptionsProvider,\n    TuiLabelDirective,\n} from '@taiga-ui/experimental';\nimport {TuiInputModule} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    selector: 'tui-wrapper-example-1',\n    imports: [\n        TuiInputModule,\n        FormsModule,\n        TuiLabelDirective,\n        TuiCheckboxModule,\n        TuiButtonModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    providers: [\n        {\n            provide: TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,\n            useValue: {\n                appearance: 'material-textfield',\n            },\n        },\n        tuiCheckboxOptionsProvider({\n            appearance: el =>\n                el.checked || el.indeterminate\n                    ? 'material-checkbox-on'\n                    : 'material-checkbox-off',\n        }),\n    ],\n})\nexport class TuiWrapperExample1 {\n    protected value = '';\n    protected checkbox = false;\n}\n"}}]);