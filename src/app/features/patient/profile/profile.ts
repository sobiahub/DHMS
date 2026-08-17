import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class PatientProfile {

  profile = {
    firstName: 'Sobia',
    lastName: 'Mushtaq',
    email: 'sobia@example.com',
    phone: '+92 300 1234567',
    dateOfBirth: '15 March 2002',
    gender: 'Female',
    bloodGroup: 'O+',
    address: 'Bahawalpur, Pakistan',
    emergencyContact: '0300 9876543',
    emergencyName: 'Family Contact',
  };

  editProfile(): void {
    console.log('Edit profile');
  }

  changePassword(): void {
    console.log('Change password');
  }

}