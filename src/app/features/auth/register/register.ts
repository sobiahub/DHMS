import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

function passwordsMatch(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (!password || !confirmPassword) {
    return null;
  }

  return password === confirmPassword
    ? null
    : { passwordsMismatch: true };
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  isSubmitting = false;

  showPassword = false;
  showConfirmPassword = false;

  registrationSuccess = false;
  serverError = '';

  registerForm = this.fb.group(
    {
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],

      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9+\-\s()]{7,20}$/)
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
        ]
      ],

      confirmPassword: [
        '',
        Validators.required
      ],

      terms: [
        false,
        Validators.requiredTrue
      ]
    },
    {
      validators: passwordsMatch
    }
  );

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get terms() {
    return this.registerForm.get('terms');
  }

  get passwordValue(): string {
    return this.password?.value ?? '';
  }

  get passwordStrength(): number {
    const password = this.passwordValue;

    if (!password) {
      return 0;
    }

    let strength = 0;

    if (password.length >= 8) {
      strength++;
    }

    if (/[A-Z]/.test(password)) {
      strength++;
    }

    if (/[a-z]/.test(password)) {
      strength++;
    }

    if (/\d/.test(password)) {
      strength++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
      strength++;
    }

    return strength;
  }

  get passwordStrengthLabel(): string {
    switch (this.passwordStrength) {
      case 1:
      case 2:
        return 'Weak';

      case 3:
        return 'Fair';

      case 4:
        return 'Good';

      case 5:
        return 'Strong';

      default:
        return '';
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  isInvalid(controlName: string): boolean {
    const control = this.registerForm.get(controlName);

    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched)
    );
  }

  onSubmit(): void {

    this.serverError = '';

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const formValue = this.registerForm.getRawValue();

    const request = {
      firstName: formValue.firstName!.trim(),
      lastName: formValue.lastName!.trim(),
      email: formValue.email!.trim().toLowerCase(),
      phone: formValue.phone!.trim(),
      password: formValue.password!
    };

    this.authService.register(request).subscribe({
      next: () => {

        this.isSubmitting = false;
        this.registrationSuccess = true;

        /*
         * Give the user a moment to see the success state,
         * then move to login.
         */
        setTimeout(() => {
          this.router.navigate(['/auth/login'], {
            queryParams: {
              registered: 'true'
            }
          });
        }, 1200);
      },

      error: (error: Error) => {
        this.isSubmitting = false;
        this.serverError =
          error?.message ||
          'Something went wrong. Please try again.';
      }
    });
  }
}