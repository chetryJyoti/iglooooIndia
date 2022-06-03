import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  form: FormGroup;
  constructor() {
    this.initForm();
  }

  ngOnInit() {}
  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required],
      }),
      phone: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(10),
        ],
      }),
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email],
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
