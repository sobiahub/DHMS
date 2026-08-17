import { Routes } from '@angular/router';

export const DOCTOR_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./doctor-layout/doctor-layout').then(
        (m) => m.DoctorLayout
      ),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then(
            (m) => m.DoctorDashboard
          ),
      },

      {
        path: 'appointments',
        loadComponent: () =>
          import('./appointments/appointments').then(
            (m) => m.DoctorAppointments
          ),
      },

      {
        path: 'patients',
        loadComponent: () =>
          import('./patients/patients').then(
            (m) => m.Patients
          ),
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile').then(
            (m) => m.DoctorProfile
          ),
      },

      {
        path: 'schedule',
        loadComponent: () =>
          import('./schedule/schedule').then(
            (m) => m.DoctorSchedule
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