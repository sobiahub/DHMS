import { Routes } from '@angular/router';

export const PATIENT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./patient-layout/patient-layout').then(
        (m) => m.PatientLayout
      ),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then(
            (m) => m.PatientDashboard
          ),
      },

      {
        path: 'appointments',
        loadComponent: () =>
          import('./appointments/appointments').then(
            (m) => m.PatientAppointments
          ),
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile').then(
            (m) => m.PatientProfile
          ),
      },

      {
        path: 'medical-records',
        loadComponent: () =>
          import('./medical-records/medical-records').then(
            (m) => m.PatientMedicalRecords
          ),
      },

      {
        path: 'notifications',
        loadComponent: () =>
          import('./notifications/notifications').then(
            (m) => m.PatientNotifications
          ),
      },

      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },

      {
        path: '**',
        redirectTo: 'dashboard',
      },
    ],
  },
];