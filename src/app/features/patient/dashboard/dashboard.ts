import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Appointment {
  doctor: string;
  specialty: string;
  date: string;
  time: string;
  status: string;
  icon: string;
}

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class PatientDashboard {

  readonly patient = {
    name: 'Sobia Mushtaq',
    initials: 'SM',
    bloodGroup: 'O+',
    age: 24,
    gender: 'Female',
  };


  readonly nextAppointment = {
    doctor: 'Dr. Ahmed Khan',
    specialty: 'Cardiologist',
    date: 'Monday, Aug 17, 2026',
    time: '10:30 AM',
    type: 'In-person Consultation',
  };


  readonly appointments: Appointment[] = [
    {
      doctor: 'Dr. Ahmed Khan',
      specialty: 'Cardiology',
      date: 'Aug 17, 2026',
      time: '10:30 AM',
      status: 'Upcoming',
      icon: 'bi-heart-pulse',
    },
    {
      doctor: 'Dr. Sara Ali',
      specialty: 'Dermatology',
      date: 'Aug 10, 2026',
      time: '02:00 PM',
      status: 'Completed',
      icon: 'bi-person-check',
    },
    {
      doctor: 'Dr. Usman Malik',
      specialty: 'General Medicine',
      date: 'Jul 28, 2026',
      time: '11:00 AM',
      status: 'Completed',
      icon: 'bi-hospital',
    },
  ];

}
