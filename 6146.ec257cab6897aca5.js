(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6146],{6146:e=>{e.exports='<p>\n    It has a fixed size and content scroll by default. But there is also an expandable mode with height increase from\n    content inside\n</p>\n\n<form [formGroup]="testForm">\n    <tui-textarea formControlName="testValue1">Type a text</tui-textarea>\n    <tui-textarea\n        formControlName="testValue2"\n        class="tui-space_top-4"\n        [expandable]="true"\n    >\n        Type a text\n    </tui-textarea>\n    <tui-textarea\n        #textarea\n        formControlName="testValue3"\n        class="tui-space_top-4"\n        [expandable]="textarea.focused"\n    >\n        Type a text (expandable on focus)\n    </tui-textarea>\n</form>\n'}}]);