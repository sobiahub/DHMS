import { Routes } from '@angular/router';

export const routes: Routes = [

   {
    path: '',
    loadChildren: () =>
      import('./features/landing/landing-page/landing.routes')
        .then(m => m.LANDING_ROUTES)
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  },

   {
    path: 'doctor',
    loadChildren: () =>
      import('./features/doctor/doctor.routes')
        .then(m => m.DOCTOR_ROUTES)
  },


   {
    path: 'patient',
    loadChildren: () =>
      import('./features/patient/patient-routes')
        .then(m => m.PATIENT_ROUTES)
  },

  {
    path: '**',
    redirectTo: ''
  }

];