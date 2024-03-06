(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9839],{9839:e=>{e.exports="import {Component, type EmbeddedViewRef, inject, type TemplateRef} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {TuiButtonModule, TuiSvgModule} from '@taiga-ui/core';\n\nimport {CustomPortalService} from './portal/custom-portal.service';\n\n@Component({\n    standalone: true,\n    selector: 'tui-portals-example-1',\n    imports: [TuiSvgModule, TuiButtonModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport class TuiPortalsExample1 {\n    private readonly customPortalService = inject(CustomPortalService);\n\n    protected templates: Array<EmbeddedViewRef<unknown>> = [];\n\n    protected addTemplate(template: TemplateRef<unknown>): void {\n        this.templates.push(this.customPortalService.addTemplate(template));\n    }\n\n    protected removeTemplate(): void {\n        const viewRef = this.templates.pop();\n\n        if (viewRef) {\n            this.customPortalService.removeTemplate(viewRef);\n        }\n    }\n}\n"}}]);