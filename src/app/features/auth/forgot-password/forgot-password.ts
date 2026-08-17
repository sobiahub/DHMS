import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword {

  currentStep: 1 | 2 | 3 | 4 = 1;

  isSubmitting = false;

  errorMessage = '';

  submittedEmail = '';

  resetSuccess = false;

  showPassword = false;

  showConfirmPassword = false;


  forgotForm: FormGroup;

  verificationForm: FormGroup;

  resetForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

    // STEP 1
    this.forgotForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
  });


    // STEP 2
    this.verificationForm = this.fb.group({
      code: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{6}$/)
        ]
      ]
    });


    // STEP 3
    this.resetForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/
            )
          ]
        ],

        confirmPassword: [
          '',
          Validators.required
        ]
      },
      {
        validators: this.passwordMatchValidator
      }
    );
  }


  // -------------------------------------------------------
  // GETTERS
  // -------------------------------------------------------

  get email() {
    return this.forgotForm.get('email');
  }

  get code() {
    return this.verificationForm.get('code');
  }

  get password() {
    return this.resetForm.get('password');
  }

  get confirmPassword() {
    return this.resetForm.get('confirmPassword');
  }


  // -------------------------------------------------------
  // VALIDATION
  // -------------------------------------------------------

  isInvalid(
    form: FormGroup,
    controlName: string
  ): boolean {

    const control = form.get(controlName);

    return !!(
      control &&
      control.invalid &&
      control.touched
    );
  }


  private passwordMatchValidator(
    control: AbstractControl
  ): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (
      password &&
      confirmPassword &&
      password !== confirmPassword
    ) {
      return {
        passwordsMismatch: true
      };
    }

    return null;
  }


  // -------------------------------------------------------
  // STEP 1
  // SEND RESET CODE
  // -------------------------------------------------------

sendResetCode(): void {

  if (this.forgotForm.invalid) {
    this.forgotForm.markAllAsTouched();
    return;
  }

  this.isSubmitting = true;
  this.errorMessage = '';

  const email =
    this.forgotForm.value.email.trim().toLowerCase();

  this.authService
    .forgotPassword({ email })
    .subscribe({

      next: () => {

        this.isSubmitting = false;

        this.router.navigate([
          '/auth/verify-code'
        ], {
          queryParams: {
            email
          }
        });

      },

      error: (error) => {

        this.isSubmitting = false;

        this.errorMessage =
          error.message ??
          'Unable to send verification code.';

      }

    });
}

  // -------------------------------------------------------
  // STEP 2
  // VERIFY CODE
  // -------------------------------------------------------

  verifyCode(): void {

    this.errorMessage = '';

    if (this.verificationForm.invalid) {

      this.verificationForm.markAllAsTouched();

      return;
    }


    this.isSubmitting = true;


    const code = this.verificationForm.value.code;


    /*
     * BACKEND INTEGRATION:
     *
     * this.authService.verifyResetCode(
     *   this.submittedEmail,
     *   code
     * ).subscribe(...)
     */


    setTimeout(() => {

      this.isSubmitting = false;

      this.currentStep = 3;

    }, 1000);
  }


  // -------------------------------------------------------
  // RESEND CODE
  // -------------------------------------------------------

  resendCode(): void {

    this.errorMessage = '';

    this.isSubmitting = true;


    /*
     * BACKEND:
     *
     * this.authService.resendResetCode(
     *   this.submittedEmail
     * ).subscribe(...)
     */


    setTimeout(() => {

      this.isSubmitting = false;

    }, 800);
  }


  // -------------------------------------------------------
  // STEP 3
  // RESET PASSWORD
  // -------------------------------------------------------

  resetPassword(): void {

    this.errorMessage = '';

    if (this.resetForm.invalid) {

      this.resetForm.markAllAsTouched();

      return;
    }


    this.isSubmitting = true;


    const payload = {
      email: this.submittedEmail,
      code: this.verificationForm.value.code,
      password: this.resetForm.value.password,
      confirmPassword: this.resetForm.value.confirmPassword
    };


    /*
     * BACKEND INTEGRATION:
     *
     * this.authService.resetPassword(payload)
     *   .subscribe(...)
     */


    setTimeout(() => {

      this.isSubmitting = false;

      this.resetSuccess = true;

      this.currentStep = 4;

    }, 1000);
  }


  // -------------------------------------------------------
  // PASSWORD VISIBILITY
  // -------------------------------------------------------

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }


  toggleConfirmPassword(): void {
    this.showConfirmPassword =
      !this.showConfirmPassword;
  }


  // -------------------------------------------------------
  // BACK
  // -------------------------------------------------------

  goBack(): void {

    this.errorMessage = '';

    if (this.currentStep === 2) {

      this.currentStep = 1;

      return;
    }


    if (this.currentStep === 3) {

      this.currentStep = 2;

      return;
    }


    if (this.currentStep === 4) {

      this.router.navigate(['/auth/login']);

    }
  }
}