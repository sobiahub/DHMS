import { Routes } from '@angular/router';
import { Contact } from '../sections/contact/contact';
import { About } from '../sections/about/about';
import { Departments } from '../sections/departments/departments';
import { Doctors } from '../sections/doctors/doctors';
import { Services } from '../sections/services/services';

export const LANDING_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./landing-page')
        .then(m => m.LandingPage)
  },

   // Services
    {
      path: 'services',
      component: Services
    },
  
    // Doctors
    {
      path: 'doctors',
      component: Doctors
    },
  
    // Departments
    {
      path: 'departments',
      component: Departments
    },
  
     {
      path: 'about',
      component: About
    },
  
     {
      path: 'contact',
      component: Contact
    },
  
];