(window.webpackJsonp=window.webpackJsonp||[]).push([[1148],{"W+6H":function(n,e,t){"use strict";t.r(e),e.default="import {\n    ChangeDetectorRef,\n    Component,\n    Inject,\n    Optional,\n    Self,\n    ViewChild,\n} from '@angular/core';\nimport {NgControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {AbstractTuiControl, TuiNativeFocusableElement} from '@taiga-ui/cdk';\nimport {TuiPrimitiveTextfieldComponent} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-primitive-textfield-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPrimitiveTextfieldExample1 extends AbstractTuiControl<string> {\n    @ViewChild(TuiPrimitiveTextfieldComponent)\n    private readonly textfield?: TuiPrimitiveTextfieldComponent;\n\n    private isPasswordHidden = true;\n\n    constructor(\n        @Optional()\n        @Self()\n        @Inject(NgControl)\n        control: NgControl | null,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        super(control, changeDetectorRef);\n    }\n\n    get nativeFocusableElement(): TuiNativeFocusableElement | null {\n        return this.computedDisabled || !this.textfield\n            ? null\n            : this.textfield.nativeFocusableElement;\n    }\n\n    get focused(): boolean {\n        return !!this.textfield && this.textfield.focused;\n    }\n\n    get icon(): string {\n        return this.isPasswordHidden ? 'tuiIconHideLarge' : 'tuiIconShowLarge';\n    }\n\n    get hint(): string {\n        return this.isPasswordHidden ? 'Show password' : 'Hide password';\n    }\n\n    get inputType(): string {\n        return this.isPasswordHidden ? 'password' : 'text';\n    }\n\n    onValueChange(textValue: string): void {\n        this.updateValue(textValue);\n    }\n\n    onFocused(focused: boolean): void {\n        this.updateFocused(focused);\n    }\n\n    togglePasswordVisibility(): void {\n        this.isPasswordHidden = !this.isPasswordHidden;\n    }\n\n    protected getFallbackValue(): string {\n        return '';\n    }\n}\n"}}]);