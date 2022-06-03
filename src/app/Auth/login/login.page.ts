import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  constructor() {
    this.initForm();
  }

  ngOnInit() {}
  initForm() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(10)
        ],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
    });
  }
  onSubmit() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
