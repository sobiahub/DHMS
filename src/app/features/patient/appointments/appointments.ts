import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Appointment {
  id: number;
  doctor: string;
  specialty: string;
  department: string;
  date: string;
  time: string;
  type: string;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  icon: string;
}

@Component({
  selector: 'app-patient-appointments',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class PatientAppointments {

  activeFilter = 'All';

  readonly filters = [
    'All',
    'Upcoming',
    'Completed',
    'Cancelled',
  ];

  readonly appointments: Appointment[] = [

    {
      id: 1,
      doctor: 'Dr. Ahmed Khan',
      specialty: 'Cardiologist',
      department: 'Cardiology',
      date: 'Aug 17, 2026',
      time: '10:30 AM',
      type: 'In-person Consultation',
      status: 'Upcoming',
      icon: 'bi-heart-pulse',
    },

    {
      id: 2,
      doctor: 'Dr. Sara Ali',
      specialty: 'Dermatologist',
      department: 'Dermatology',
      date: 'Aug 22, 2026',
      time: '02:00 PM',
      type: 'In-person Consultation',
      status: 'Upcoming',
      icon: 'bi-person',
    },

    {
      id: 3,
      doctor: 'Dr. Usman Malik',
      specialty: 'General Physician',
      department: 'General Medicine',
      date: 'Aug 05, 2026',
      time: '11:00 AM',
      type: 'General Consultation',
      status: 'Completed',
      icon: 'bi-hospital',
    },

    {
      id: 4,
      doctor: 'Dr. Ayesha Noor',
      specialty: 'Neurologist',
      department: 'Neurology',
      date: 'Jul 24, 2026',
      time: '03:30 PM',
      type: 'Follow-up Visit',
      status: 'Completed',
      icon: 'bi-activity',
    },

    {
      id: 5,
      doctor: 'Dr. Hamza Ahmed',
      specialty: 'Orthopedic',
      department: 'Orthopedics',
      date: 'Jul 15, 2026',
      time: '01:00 PM',
      type: 'Consultation',
      status: 'Cancelled',
      icon: 'bi-person-walking',
    },

  ];


  setFilter(filter: string): void {
    this.activeFilter = filter;
  }


  get filteredAppointments(): Appointment[] {

    if (this.activeFilter === 'All') {
      return this.appointments;
    }

    return this.appointments.filter(
      appointment => appointment.status === this.activeFilter
    );
  }


  cancelAppointment(appointment: Appointment): void {
    console.log('Cancel appointment:', appointment.id);
  }


  viewAppointment(appointment: Appointment): void {
    console.log('View appointment:', appointment.id);
  }

}