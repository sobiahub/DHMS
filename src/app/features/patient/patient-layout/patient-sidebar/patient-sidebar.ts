import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {
  RouterLink,
  RouterLinkActive,
} from '@angular/router';


interface PatientNavItem {
  label: string;
  route: string;
  icon: string;
}

interface PatientNavSection {
  title: string;
  items: PatientNavItem[];
}


@Component({
  selector: 'app-patient-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './patient-sidebar.html',
  styleUrl: './patient-sidebar.css',
})
export class PatientSidebar {

  @Input() isOpen = false;

  @Output() closed = new EventEmitter<void>();


  readonly navigation: PatientNavSection[] = [

    // =====================================================
    // OVERVIEW
    // =====================================================

    {
      title: 'Overview',
      items: [
        {
          label: 'Dashboard',
          route: '/patient/dashboard',
          icon: 'bi-grid-1x2',
        },
      ],
    },


    // =====================================================
    // MY HEALTHCARE
    // =====================================================

    {
      title: 'My Healthcare',
      items: [
        {
          label: 'Appointments',
          route: '/patient/appointments',
          icon: 'bi-calendar2-check',
        },
        {
          label: 'Medical Records',
          route: '/patient/medical-records',
          icon: 'bi-file-earmark-medical',
        },
        {
          label: 'Notifications',
          route: '/patient/notifications',
          icon: 'bi-bell',
        },
      ],
    },


    // =====================================================
    // ACCOUNT
    // =====================================================

    {
      title: 'Account',
      items: [
        {
          label: 'Profile',
          route: '/patient/profile',
          icon: 'bi-person-circle',
        },
      ],
    },

  ];


  closeSidebar(): void {
    this.closed.emit();
  }

}