import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLogin = false;
  form: FormGroup;
  constructor(private authService: AuthService, private route: Router) {
    this.initForm();
  }

  ngOnInit() {}
  initForm() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(10),
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
    this.login(this.form);
    console.log(this.form.value);
  }
  login(form) {
    this.isLogin = true;
    // this.authService
    //   .login(form.value.phone, form.value.password)
    //   .then((data) => {
    //     console.log(data);
    //     this.route.navigateByUrl('/pages/tabs');
    //     this.isLogin = false;
    //     form.reset();
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //     this.isLogin = false;
    //   });
  }
}
