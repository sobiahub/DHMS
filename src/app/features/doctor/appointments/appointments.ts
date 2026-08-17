import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Appointment {
  id: string;
  patient: string;
  initials: string;
  age: number;
  gender: string;
  date: string;
  time: string;
  type: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  reason: string;
}

@Component({
  selector: 'app-doctor-appointments',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
})
export class DoctorAppointments {

  searchTerm = '';
  selectedStatus = 'All';
  selectedDate = 'All';

  readonly appointments: Appointment[] = [
    {
      id: 'APT-001',
      patient: 'Sarah Ahmed',
      initials: 'SA',
      age: 29,
      gender: 'Female',
      date: 'Aug 17, 2026',
      time: '09:00 AM',
      type: 'General Consultation',
      status: 'Confirmed',
      reason: 'Regular checkup',
    },
    {
      id: 'APT-002',
      patient: 'Muhammad Ali',
      initials: 'MA',
      age: 42,
      gender: 'Male',
      date: 'Aug 17, 2026',
      time: '10:30 AM',
      type: 'Follow-up Visit',
      status: 'Confirmed',
      reason: 'Diabetes follow-up',
    },
    {
      id: 'APT-003',
      patient: 'Ayesha Khan',
      initials: 'AK',
      age: 35,
      gender: 'Female',
      date: 'Aug 17, 2026',
      time: '12:00 PM',
      type: 'Routine Checkup',
      status: 'Pending',
      reason: 'Headache and fatigue',
    },
    {
      id: 'APT-004',
      patient: 'Usman Tariq',
      initials: 'UT',
      age: 51,
      gender: 'Male',
      date: 'Aug 17, 2026',
      time: '02:30 PM',
      type: 'Consultation',
      status: 'Confirmed',
      reason: 'Cardiac follow-up',
    },
    {
      id: 'APT-005',
      patient: 'Hina Malik',
      initials: 'HM',
      age: 31,
      gender: 'Female',
      date: 'Aug 17, 2026',
      time: '04:00 PM',
      type: 'Follow-up Visit',
      status: 'Pending',
      reason: 'Medication review',
    },
    {
      id: 'APT-006',
      patient: 'Bilal Hassan',
      initials: 'BH',
      age: 38,
      gender: 'Male',
      date: 'Aug 18, 2026',
      time: '09:30 AM',
      type: 'General Consultation',
      status: 'Confirmed',
      reason: 'Routine consultation',
    },
    {
      id: 'APT-007',
      patient: 'Mariam Iqbal',
      initials: 'MI',
      age: 46,
      gender: 'Female',
      date: 'Aug 18, 2026',
      time: '11:00 AM',
      type: 'Follow-up Visit',
      status: 'Completed',
      reason: 'Blood pressure review',
    },
    {
      id: 'APT-008',
      patient: 'Hamza Raza',
      initials: 'HR',
      age: 27,
      gender: 'Male',
      date: 'Aug 19, 2026',
      time: '01:00 PM',
      type: 'Consultation',
      status: 'Cancelled',
      reason: 'General consultation',
    },
  ];


  get filteredAppointments(): Appointment[] {
    const search = this.searchTerm.trim().toLowerCase();

    return this.appointments.filter((appointment) => {

      const matchesSearch =
        !search ||
        appointment.patient.toLowerCase().includes(search) ||
        appointment.id.toLowerCase().includes(search) ||
        appointment.type.toLowerCase().includes(search);

      const matchesStatus =
        this.selectedStatus === 'All' ||
        appointment.status === this.selectedStatus;

      const matchesDate =
        this.selectedDate === 'All' ||
        appointment.date === this.selectedDate;

      return matchesSearch && matchesStatus && matchesDate;
    });
  }


  get totalAppointments(): number {
    return this.appointments.length;
  }


  get confirmedAppointments(): number {
    return this.appointments.filter(
      appointment => appointment.status === 'Confirmed'
    ).length;
  }


  get pendingAppointments(): number {
    return this.appointments.filter(
      appointment => appointment.status === 'Pending'
    ).length;
  }


  get completedAppointments(): number {
    return this.appointments.filter(
      appointment => appointment.status === 'Completed'
    ).length;
  }


  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = 'All';
    this.selectedDate = 'All';
  }


}
