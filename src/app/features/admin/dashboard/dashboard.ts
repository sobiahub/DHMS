import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: string;
}

interface Appointment {
  patient: string;
  doctor: string;
  department: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  initials: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  stats: Stat[] = [
    {
      title: 'Total Patients',
      value: '1,248',
      change: '+12.5%',
      icon: 'bi-people',
    },
    {
      title: 'Total Doctors',
      value: '86',
      change: '+4.2%',
      icon: 'bi-person-badge',
    },
    {
      title: 'Appointments',
      value: '324',
      change: '+8.4%',
      icon: 'bi-calendar2-check',
    },
    {
      title: 'Departments',
      value: '14',
      change: 'Active',
      icon: 'bi-hospital',
    },
  ];


  appointments: Appointment[] = [
    {
      patient: 'Ayesha Khan',
      doctor: 'Dr. Sarah Ahmed',
      department: 'Cardiology',
      time: '09:30 AM',
      status: 'Confirmed',
      initials: 'AK',
    },
    {
      patient: 'Muhammad Ali',
      doctor: 'Dr. Ahmed Raza',
      department: 'Neurology',
      time: '10:15 AM',
      status: 'Pending',
      initials: 'MA',
    },
    {
      patient: 'Fatima Noor',
      doctor: 'Dr. Hina Malik',
      department: 'Pediatrics',
      time: '11:00 AM',
      status: 'Completed',
      initials: 'FN',
    },
    {
      patient: 'Usman Tariq',
      doctor: 'Dr. Bilal Khan',
      department: 'Orthopedics',
      time: '12:30 PM',
      status: 'Confirmed',
      initials: 'UT',
    },
  ];


  appointmentSummary = [
    {
      label: 'Confirmed',
      value: 186,
      percentage: 57,
      icon: 'bi-check-circle',
    },
    {
      label: 'Pending',
      value: 74,
      percentage: 23,
      icon: 'bi-clock',
    },
    {
      label: 'Completed',
      value: 52,
      percentage: 16,
      icon: 'bi-check2-all',
    },
    {
      label: 'Cancelled',
      value: 12,
      percentage: 4,
      icon: 'bi-x-circle',
    },
  ];

}