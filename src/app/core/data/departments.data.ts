export interface Department {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: string;
  doctors: number;
  services: string[];
  available: boolean;
}

export const DEPARTMENTS: Department[] = [

  {
    id: 1,
    name: 'Cardiology',
    description:
      'Specialized cardiovascular care focused on heart health, prevention, assessment, and ongoing treatment.',

    image: '/assets/images/departments/cardiology.jpg',

    icon: 'bi bi-heart-pulse',

    doctors: 8,

    services: [
      'Cardiac Consultation',
      'Heart Health Assessment',
      'Preventive Cardiac Care',
      'Patient Monitoring'
    ],

    available: true
  },

  {
    id: 2,
    name: 'Neurology',
    description:
      'Comprehensive neurological consultation and care for conditions affecting the nervous system.',

    image: '/assets/images/departments/neurology.jpg',

    icon: 'bi bi-activity',

    doctors: 6,

    services: [
      'Neurological Consultation',
      'Condition Assessment',
      'Treatment Planning',
      'Follow-up Care'
    ],

    available: true
  },

  {
    id: 3,
    name: 'Dermatology',
    description:
      'Professional healthcare services for skin, hair, and common dermatological concerns.',

    image: '/assets/images/departments/dermatology.jpg',

    icon: 'bi bi-person-hearts',

    doctors: 7,

    services: [
      'Skin Consultation',
      'Hair & Scalp Care',
      'Skin Assessment',
      'Personalized Care'
    ],

    available: true
  },

  {
    id: 4,
    name: 'Pediatrics',
    description:
      'Dedicated healthcare services supporting children through routine care, prevention, and treatment.',

    image: '/assets/images/departments/pediatrics.jpg',

    icon: 'bi bi-emoji-smile',

    doctors: 9,

    services: [
      'Child Checkups',
      'Pediatric Consultation',
      'Growth Monitoring',
      'Preventive Care'
    ],

    available: true
  },

  {
    id: 5,
    name: 'Women Healthcare',
    description:
      'Comprehensive healthcare support designed around women’s health and wellbeing.',

    image: '/assets/images/departments/womens-healthcare.jpg',

    icon: 'bi bi-gender-female',

    doctors: 8,

    services: [
      'Women Health Consultation',
      'Preventive Care',
      'Routine Assessments',
      'Specialist Support'
    ],

    available: true
  },

  {
    id: 6,
    name: 'Orthopedics',
    description:
      'Specialized care for bones, joints, muscles, mobility, and musculoskeletal concerns.',

    image: '/assets/images/departments/orthopedics.jpg',

    icon: 'bi bi-bandaid',

    doctors: 6,

    services: [
      'Orthopedic Consultation',
      'Musculoskeletal Assessment',
      'Mobility Support',
      'Recovery Planning'
    ],

    available: true
  },

  {
    id: 7,
    name: 'General Medicine',
    description:
      'Primary healthcare for routine checkups, preventive care, common conditions, and general consultations.',

    image: '/assets/images/departments/general-medicine.jpg',

    icon: 'bi bi-heart-pulse-fill',

    doctors: 12,

    services: [
      'Routine Checkups',
      'General Consultation',
      'Preventive Healthcare',
      'Common Illness Management'
    ],

    available: true
  },

  {
    id: 8,
    name: 'Diagnostics',
    description:
      'Diagnostic support and testing services that help healthcare professionals make informed decisions.',

    image: '/assets/images/departments/diagnostics.jpg',

    icon: 'bi bi-clipboard2-pulse',

    doctors: 5,

    services: [
      'Diagnostic Testing',
      'Medical Assessment',
      'Digital Test Information',
      'Healthcare Reporting'
    ],

    available: true
  }

];