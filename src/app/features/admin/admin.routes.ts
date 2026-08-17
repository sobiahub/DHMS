import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./admin-layout/admin-layout').then(
        (m) => m.AdminLayout
      ),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard').then(
            (m) => m.Dashboard
          ),
      },

      {
        path: 'doctors',
        loadComponent: () =>
          import('./doctors/doctors').then(
            (m) => m.Doctors
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
        path: 'appointments',
        loadComponent: () =>
          import('./appointments/appointments').then(
            (m) => m.Appointments
          ),
      },

      {
        path: 'departments',
        loadComponent: () =>
          import('./departments/departments').then(
            (m) => m.Departments
          ),
      },

      {
        path: 'users',
        loadComponent: () =>
          import('./users/users').then(
            (m) => m.Users
          ),
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./profile/profile').then(
            (m) => m.Profile
          ),
      },

      {
        path: 'settings',
        loadComponent: () =>
          import('./settings/settings').then(
            (m) => m.Settings
          ),
      },

      {
        path: 'reports',
        loadComponent: () =>
          import('./reports/reports').then(
            (m) => m.Reports
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