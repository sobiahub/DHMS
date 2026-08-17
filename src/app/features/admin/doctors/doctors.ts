import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Doctor {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  specialization: string;
  experience: string;
  status: 'Active' | 'Inactive';
  initials: string;
}

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './doctors.html',
  styleUrl: './doctors.css',
})
export class Doctors {

  searchTerm = '';

  selectedDepartment = 'All Departments';

  selectedStatus = 'All Status';


  doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dr. Sarah Ahmed',
      email: 'sarah.ahmed@medicare.com',
      phone: '+92 300 1234567',
      department: 'Cardiology',
      specialization: 'Cardiologist',
      experience: '12 years',
      status: 'Active',
      initials: 'SA',
    },
    {
      id: 2,
      name: 'Dr. Ahmed Raza',
      email: 'ahmed.raza@medicare.com',
      phone: '+92 301 2345678',
      department: 'Neurology',
      specialization: 'Neurologist',
      experience: '9 years',
      status: 'Active',
      initials: 'AR',
    },
    {
      id: 3,
      name: 'Dr. Hina Malik',
      email: 'hina.malik@medicare.com',
      phone: '+92 302 3456789',
      department: 'Pediatrics',
      specialization: 'Pediatrician',
      experience: '8 years',
      status: 'Active',
      initials: 'HM',
    },
    {
      id: 4,
      name: 'Dr. Bilal Khan',
      email: 'bilal.khan@medicare.com',
      phone: '+92 303 4567890',
      department: 'Orthopedics',
      specialization: 'Orthopedic Surgeon',
      experience: '15 years',
      status: 'Active',
      initials: 'BK',
    },
    {
      id: 5,
      name: 'Dr. Maryam Shah',
      email: 'maryam.shah@medicare.com',
      phone: '+92 304 5678901',
      department: 'Dermatology',
      specialization: 'Dermatologist',
      experience: '7 years',
      status: 'Inactive',
      initials: 'MS',
    },
    {
      id: 6,
      name: 'Dr. Usman Tariq',
      email: 'usman.tariq@medicare.com',
      phone: '+92 305 6789012',
      department: 'General Medicine',
      specialization: 'General Physician',
      experience: '10 years',
      status: 'Active',
      initials: 'UT',
    },
  ];


  get filteredDoctors(): Doctor[] {

    const search = this.searchTerm
      .trim()
      .toLowerCase();

    return this.doctors.filter((doctor) => {

      const matchesSearch =
        !search ||
        doctor.name.toLowerCase().includes(search) ||
        doctor.email.toLowerCase().includes(search) ||
        doctor.phone.toLowerCase().includes(search) ||
        doctor.specialization.toLowerCase().includes(search) ||
        doctor.department.toLowerCase().includes(search);


      const matchesDepartment =
        this.selectedDepartment === 'All Departments' ||
        doctor.department === this.selectedDepartment;


      const matchesStatus =
        this.selectedStatus === 'All Status' ||
        doctor.status === this.selectedStatus;


      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }


  get activeDoctors(): number {
    return this.doctors.filter(
      doctor => doctor.status === 'Active'
    ).length;
  }


  get inactiveDoctors(): number {
    return this.doctors.filter(
      doctor => doctor.status === 'Inactive'
    ).length;
  }


  get hasFilters(): boolean {
    return !!(
      this.searchTerm ||
      this.selectedDepartment !== 'All Departments' ||
      this.selectedStatus !== 'All Status'
    );
  }


  clearFilters(): void {
    this.searchTerm = '';
    this.selectedDepartment = 'All Departments';
    this.selectedStatus = 'All Status';
  }


  addDoctor(): void {
    console.log('Add doctor');
  }


  viewDoctor(doctor: Doctor): void {
    console.log('View doctor:', doctor);
  }


  editDoctor(doctor: Doctor): void {
    console.log('Edit doctor:', doctor);
  }


  deleteDoctor(doctor: Doctor): void {

    const confirmed = window.confirm(
      `Are you sure you want to remove ${doctor.name}?`
    );

    if (!confirmed) {
      return;
    }

    this.doctors = this.doctors.filter(
      item => item.id !== doctor.id
    );
  }

}