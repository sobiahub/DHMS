import { Routes } from '@angular/router';
import { VerifyCode } from './verify-code/verify-code';
import { ResetPassword } from './reset-password/reset-password';
import { ForgotPassword } from './forgot-password/forgot-password';
import { TermsOfService } from './terms-of-service/terms-of-service';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';
import { MedicalRecords } from './medical-records/medical-records';
import { Appointments } from './appointments/appointments';
import { Profile } from './profile/profile';
import { Register } from './register/register';
import { Login } from './login/login';

export const AUTH_ROUTES: Routes = [
 // Account pages 
   {
    path: 'login',
    component: Login
  },


   {
    path: 'register',
    component: Register
  },

   {
    path: 'profile',
    component: Profile
  },

   {
    path: 'appointments',
    component: Appointments
  },


  {
    path: 'medical-records',
    component: MedicalRecords
  },

  {
    path: 'privacy-policy',
    component: PrivacyPolicy
  },

  {
    path: 'terms-of-service',
    component: TermsOfService
  },

  {
    path: 'forgot-password',
    component: ForgotPassword
  },

  {
    path: 'reset-password',
    component: ResetPassword
  },

  {
    path: 'verify-code',
    component: VerifyCode
  },
]