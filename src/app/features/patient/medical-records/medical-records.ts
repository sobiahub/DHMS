import { Component } from '@angular/core';

interface MedicalRecord {
  id: number;
  title: string;
  doctor: string;
  department: string;
  date: string;
  type: string;
  description: string;
  icon: string;
  status: 'Available' | 'Pending';
}

@Component({
  selector: 'app-patient-medical-records',
  standalone: true,
  imports: [],
  templateUrl: './medical-records.html',
  styleUrl: './medical-records.css',
})
export class PatientMedicalRecords {

  activeFilter = 'All';

  readonly filters = [
    'All',
    'Consultations',
    'Lab Reports',
    'Prescriptions',
  ];

  readonly records: MedicalRecord[] = [

    {
      id: 1,
      title: 'Cardiology Consultation',
      doctor: 'Dr. Ahmed Khan',
      department: 'Cardiology',
      date: 'Aug 17, 2026',
      type: 'Consultations',
      description:
        'Routine cardiovascular consultation and follow-up assessment.',
      icon: 'bi-heart-pulse',
      status: 'Available',
    },

    {
      id: 2,
      title: 'Complete Blood Count',
      doctor: 'MediCare Laboratory',
      department: 'Laboratory',
      date: 'Aug 10, 2026',
      type: 'Lab Reports',
      description:
        'Complete blood count laboratory investigation report.',
      icon: 'bi-droplet',
      status: 'Available',
    },

    {
      id: 3,
      title: 'Medication Prescription',
      doctor: 'Dr. Sara Ali',
      department: 'Dermatology',
      date: 'Aug 10, 2026',
      type: 'Prescriptions',
      description:
        'Prescription issued during dermatology consultation.',
      icon: 'bi-prescription2',
      status: 'Available',
    },

    {
      id: 4,
      title: 'General Health Consultation',
      doctor: 'Dr. Usman Malik',
      department: 'General Medicine',
      date: 'Aug 05, 2026',
      type: 'Consultations',
      description:
        'General health assessment and medical consultation.',
      icon: 'bi-person-check',
      status: 'Available',
    },

    {
      id: 5,
      title: 'Lipid Profile',
      doctor: 'MediCare Laboratory',
      department: 'Laboratory',
      date: 'Jul 28, 2026',
      type: 'Lab Reports',
      description:
        'Blood lipid profile investigation and results.',
      icon: 'bi-file-medical',
      status: 'Available',
    },

    {
      id: 6,
      title: 'Follow-up Prescription',
      doctor: 'Dr. Ayesha Noor',
      department: 'Neurology',
      date: 'Jul 24, 2026',
      type: 'Prescriptions',
      description:
        'Updated prescription following the patient follow-up visit.',
      icon: 'bi-capsule',
      status: 'Available',
    },

  ];


  setFilter(filter: string): void {
    this.activeFilter = filter;
  }


  get filteredRecords(): MedicalRecord[] {

    if (this.activeFilter === 'All') {
      return this.records;
    }

    return this.records.filter(
      record => record.type === this.activeFilter
    );
  }


  viewRecord(record: MedicalRecord): void {
    console.log('View medical record:', record.id);
  }


  downloadRecord(record: MedicalRecord): void {
    console.log('Download medical record:', record.id);
  }

}