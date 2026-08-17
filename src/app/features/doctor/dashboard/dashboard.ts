import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DoctorDashboard {

  readonly stats = [
    {
      label: 'Today’s Appointments',
      value: '12',
      change: '+3',
      description: 'from yesterday',
      icon: 'bi-calendar2-check',
    },
    {
      label: 'Total Patients',
      value: '248',
      change: '+8',
      description: 'this month',
      icon: 'bi-people',
    },
    {
      label: 'Pending Requests',
      value: '05',
      change: '2 new',
      description: 'need attention',
      icon: 'bi-clock-history',
    },
    {
      label: 'Completed Today',
      value: '07',
      change: '58%',
      description: 'of today’s visits',
      icon: 'bi-check2-circle',
    },
  ];


  readonly todayAppointments = [
    {
      time: '09:00 AM',
      patient: 'Sarah Ahmed',
      type: 'General Consultation',
      status: 'Confirmed',
      statusClass: 'confirmed',
      initials: 'SA',
    },
    {
      time: '10:30 AM',
      patient: 'Muhammad Ali',
      type: 'Follow-up Visit',
      status: 'Confirmed',
      statusClass: 'confirmed',
      initials: 'MA',
    },
    {
      time: '12:00 PM',
      patient: 'Ayesha Khan',
      type: 'Routine Checkup',
      status: 'Pending',
      statusClass: 'pending',
      initials: 'AK',
    },
    {
      time: '02:30 PM',
      patient: 'Usman Tariq',
      type: 'Consultation',
      status: 'Confirmed',
      statusClass: 'confirmed',
      initials: 'UT',
    },
    {
      time: '04:00 PM',
      patient: 'Hina Malik',
      type: 'Follow-up Visit',
      status: 'Pending',
      statusClass: 'pending',
      initials: 'HM',
    },
  ];


  readonly recentPatients = [
    {
      name: 'Sarah Ahmed',
      age: 29,
      gender: 'Female',
      condition: 'Hypertension',
      lastVisit: 'Today',
      initials: 'SA',
    },
    {
      name: 'Muhammad Ali',
      age: 42,
      gender: 'Male',
      condition: 'Diabetes',
      lastVisit: 'Today',
      initials: 'MA',
    },
    {
      name: 'Ayesha Khan',
      age: 35,
      gender: 'Female',
      condition: 'Migraine',
      lastVisit: 'Yesterday',
      initials: 'AK',
    },
    {
      name: 'Usman Tariq',
      age: 51,
      gender: 'Male',
      condition: 'Cardiac Follow-up',
      lastVisit: 'Aug 15',
      initials: 'UT',
    },
  ];


  readonly schedule = [
    {
      time: '09:00 AM',
      title: 'General Consultation',
      patient: 'Sarah Ahmed',
      duration: '30 min',
    },
    {
      time: '10:30 AM',
      title: 'Follow-up Visit',
      patient: 'Muhammad Ali',
      duration: '30 min',
    },
    {
      time: '12:00 PM',
      title: 'Routine Checkup',
      patient: 'Ayesha Khan',
      duration: '30 min',
    },
    {
      time: '02:30 PM',
      title: 'Consultation',
      patient: 'Usman Tariq',
      duration: '45 min',
    },
  ];


}
