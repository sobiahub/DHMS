import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class DoctorProfile {

  readonly doctor = {
    name: 'Dr. Ahmed Khan',
    initials: 'AK',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    experience: '8 Years',
    email: 'ahmed.khan@medicare.com',
    phone: '+92 300 1234567',
    license: 'PMDC-123456',
    qualification: 'MBBS, FCPS Cardiology',
    hospital: 'MediCare Hospital',
    location: 'Bahawalpur, Pakistan',
    joined: 'January 2022',
    status: 'Active',
  };

}