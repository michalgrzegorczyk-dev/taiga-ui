(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70289],{70289:n=>{n.exports="```ts\nimport {ReactiveFormsModule} from '@angular/forms';\nimport {TuiInputPhoneInternational} from '@taiga-ui/kit';\n\n@Component({\n  standalone: true,\n  imports: [ReactiveFormsModule, TuiInputPhoneInternational],\n  // ...\n})\nexport class Example {\n  readonly testForm = new FormGroup({\n    testValue: new FormControl('+78005553535'),\n  });\n\n  readonly countries: ReadonlyArray<TuiCountryIsoCode> = [\n    TuiCountryIsoCode.RU,\n    TuiCountryIsoCode.KZ,\n    TuiCountryIsoCode.UA,\n    TuiCountryIsoCode.BY,\n  ];\n}\n```\n"}}]);