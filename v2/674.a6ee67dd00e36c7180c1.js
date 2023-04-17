(window.webpackJsonp=window.webpackJsonp||[]).push([[674],{"7va3":function(n,e,i){"use strict";i.r(e),e.default="import {Component, Inject, ViewChild} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_ATTACH_FILES_LOADER,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorAttachedFile,\n    TuiEditorNewComponent,\n    TuiEditorTool,\n} from '@taiga-ui/addon-editor';\nimport {forkJoin} from 'rxjs';\nimport {finalize} from 'rxjs/operators';\n\nimport {FileIoService} from './filesio.service';\n\n@Component({\n    selector: 'tui-editor-example-9',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/addon-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-style').then(({TextStyle}) => TextStyle),\n                import('@taiga-ui/addon-editor/extensions/link').then(\n                    ({TuiLink}) => TuiLink,\n                ),\n                import('@taiga-ui/addon-editor/extensions/jump-anchor').then(\n                    ({TuiJumpAnchor}) => TuiJumpAnchor,\n                ),\n                import('@taiga-ui/addon-editor/extensions/file-link').then(\n                    ({TuiFileLink}) => TuiFileLink,\n                ),\n            ],\n        },\n        {\n            provide: TUI_ATTACH_FILES_LOADER,\n            deps: [FileIoService],\n            useFactory: (service: FileIoService) => (files: File[]) => {\n                service.loading$.next(true);\n\n                return forkJoin(files.map(file => service.upload(file))).pipe(\n                    finalize(() => service.loading$.next(false)),\n                );\n            },\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNewExample9 {\n    @ViewChild(TuiEditorNewComponent)\n    private readonly wysiwyg?: TuiEditorNewComponent;\n\n    readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Link,\n        TuiEditorTool.Attach,\n    ];\n\n    control = new FormControl('');\n\n    constructor(@Inject(FileIoService) readonly fileIoService: FileIoService) {}\n\n    /**\n     * @note: attach file as a link\n     * you can also implement your own file mapping mechanism\n     * because you have all the necessary data for this\n     */\n    attach(files: TuiEditorAttachedFile[]): void {\n        files.forEach(file => this.wysiwyg?.editor?.setFileLink(file));\n    }\n}\n"}}]);