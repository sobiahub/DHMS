import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  loginForm: FormGroup;

  showPassword = false;
  isSubmitting = false;
  loginError = '';
  loginSuccess = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],

      rememberMe: [false]
    });
  }


  get email() {
    return this.loginForm.get('email');
  }


  get password() {
    return this.loginForm.get('password');
  }


  isInvalid(controlName: string): boolean {
    const control = this.loginForm.get(controlName);

    return !!(
      control &&
      control.invalid &&
      control.touched
    );
  }


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  onSubmit(): void {

    this.loginError = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    /*
     * Backend-ready authentication flow.
     *
     * Replace this section later with your AuthService/API call.
     */

    setTimeout(() => {

      this.isSubmitting = false;

      /*
       * Temporary successful login.
       *
       * When backend is integrated, replace this with:
       *
       * this.authService.login(this.loginForm.value).subscribe(...)
       */

      this.loginSuccess = true;

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 800);

    }, 1000);
  }
}