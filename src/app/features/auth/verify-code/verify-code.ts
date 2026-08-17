import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { AuthService } from '../../../core/services/auth';


@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './verify-code.html',
  styleUrl: './verify-code.css'
})
export class VerifyCode implements OnInit {

  // =====================================================
  // DEPENDENCIES
  // =====================================================

  private readonly fb = inject(FormBuilder);

  private readonly router = inject(Router);

  private readonly route = inject(ActivatedRoute);

  private readonly authService = inject(AuthService);


  // =====================================================
  // FORM
  // =====================================================

  verifyForm: FormGroup;


  // =====================================================
  // STATE
  // =====================================================

  email = '';

  isSubmitting = false;

  isResending = false;

  errorMessage = '';

  successMessage = '';


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor() {

    this.verifyForm = this.fb.group({

      code: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{6}$/)
        ]
      ]

    });

  }


  // =====================================================
  // INIT
  // =====================================================

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {

      this.email =
        params['email'] ?? '';


      /*
       * User should not be able to open
       * verify-code directly without coming
       * through forgot-password.
       */

      if (!this.email) {

        this.router.navigate([
          '/auth/forgot-password'
        ]);

        return;
      }

    });

  }


  // =====================================================
  // GETTERS
  // =====================================================

  get code() {

    return this.verifyForm.get('code');

  }


  // =====================================================
  // CODE INVALID
  // =====================================================

  isCodeInvalid(): boolean {

    return !!(
      this.code &&
      this.code.invalid &&
      this.code.touched
    );

  }


  // =====================================================
  // VERIFY CODE
  // =====================================================

  verifyCode(): void {

    this.errorMessage = '';

    this.successMessage = '';


    // -----------------------------------------------
    // FORM VALIDATION
    // -----------------------------------------------

    if (this.verifyForm.invalid) {

      this.verifyForm.markAllAsTouched();

      return;

    }


    // -----------------------------------------------
    // PREVENT DOUBLE SUBMIT
    // -----------------------------------------------

    if (this.isSubmitting) {
      return;
    }


    this.isSubmitting = true;


    const code =
      this.verifyForm.value.code
        ?.toString()
        .trim();


    /*
     * AUTH SERVICE
     *
     * Frontend testing:
     * code = 123456
     *
     * Backend later:
     * AuthService will call Django API.
     */

    this.authService
      .verifyResetCode({
        email: this.email,
        code
      })
      .subscribe({

        // -------------------------------------------
        // SUCCESS
        // -------------------------------------------

        next: (response) => {

          this.isSubmitting = false;


          /*
           * Move to reset-password.
           *
           * The reset token returned by AuthService
           * is required for the next step.
           */

          this.router.navigate(
            ['/auth/reset-password'],
            {
              queryParams: {
                email: this.email,
                token: response.resetToken
              }
            }
          );

        },


        // -------------------------------------------
        // ERROR
        // -------------------------------------------

        error: (error) => {

          this.isSubmitting = false;


          this.errorMessage =
            error?.message ??
            'The verification code is incorrect. Please try again.';

        }

      });

  }


  // =====================================================
  // RESEND CODE
  // =====================================================

  resendCode(): void {

    this.errorMessage = '';

    this.successMessage = '';


    if (!this.email) {

      this.router.navigate([
        '/auth/forgot-password'
      ]);

      return;

    }


    if (this.isResending) {
      return;
    }


    this.isResending = true;


    this.authService
      .resendResetCode(this.email)
      .subscribe({

        // -------------------------------------------
        // SUCCESS
        // -------------------------------------------

        next: (response) => {

          this.isResending = false;


          this.successMessage =
            response?.message ??
            'A new verification code has been sent to your email.';


          /*
           * Clear previous code after
           * requesting a new one.
           */

          this.verifyForm.reset();

        },


        // -------------------------------------------
        // ERROR
        // -------------------------------------------

        error: (error) => {

          this.isResending = false;


          this.errorMessage =
            error?.message ??
            'Unable to resend the verification code. Please try again.';

        }

      });

  }


  // =====================================================
  // BACK
  // =====================================================

  goBack(): void {

    if (this.isSubmitting || this.isResending) {
      return;
    }


    this.router.navigate([
      '/auth/forgot-password'
    ]);

  }


  // =====================================================
  // ONLY ALLOW NUMBERS
  // =====================================================

  onCodeInput(event: Event): void {

    const input =
      event.target as HTMLInputElement;


    const numbersOnly =
      input.value.replace(/\D/g, '').slice(0, 6);


    input.value = numbersOnly;


    this.verifyForm
      .get('code')
      ?.setValue(
        numbersOnly,
        {
          emitEvent: false
        }
      );

  }

}