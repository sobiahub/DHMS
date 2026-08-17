export interface HealthcareService {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  doctors: number;
  patients: string;
  available: boolean;
  features: string[];
}

export const SERVICES: HealthcareService[] = [

  {
    id: 1,
    title: 'General Medical Care',
    category: 'General Care',
    image: '/assets/images/services/general-medical-care.jpg',

    description:
      'Comprehensive healthcare for routine checkups, common conditions, and preventive care.',

    longDescription:
      'Our general medical care service provides accessible healthcare for routine consultations, health assessments, preventive care, and management of common medical conditions.',

    doctors: 12,
    patients: '2.5K+',
    available: true,

    features: [
      'Routine health checkups',
      'General consultations',
      'Preventive healthcare',
      'Common illness management'
    ]
  },

  {
    id: 2,
    title: 'Cardiology',
    category: 'Specialist Care',
    image: '/assets/images/services/cardiology.jpg',

    description:
      'Specialized cardiovascular care from experienced cardiology professionals.',

    longDescription:
      'Our cardiology service provides professional consultation and ongoing care for cardiovascular health, helping patients better understand and manage their heart health.',

    doctors: 8,
    patients: '1.8K+',
    available: true,

    features: [
      'Cardiac consultation',
      'Heart health assessment',
      'Preventive cardiac care',
      'Ongoing patient monitoring'
    ]
  },

  {
    id: 3,
    title: 'Neurology',
    category: 'Specialist Care',
    image: '/assets/images/services/neurology.jpg',

    description:
      'Expert neurological consultation and support for a range of nervous system conditions.',

    longDescription:
      'Our neurology service connects patients with experienced specialists for neurological consultation, assessment, treatment planning, and continued care.',

    doctors: 6,
    patients: '1.2K+',
    available: true,

    features: [
      'Neurological consultation',
      'Condition assessment',
      'Treatment planning',
      'Follow-up care'
    ]
  },

  {
    id: 4,
    title: 'Dermatology',
    category: 'Specialist Care',
    image: '/assets/images/services/dermatology.jpg',

    description:
      'Professional skin, hair, and dermatological healthcare services.',

    longDescription:
      'Our dermatology service provides consultation and care for common skin, hair, and dermatological concerns through qualified healthcare professionals.',

    doctors: 7,
    patients: '1.6K+',
    available: true,

    features: [
      'Skin consultation',
      'Hair and scalp care',
      'Dermatological assessment',
      'Personalized care plans'
    ]
  },

  {
    id: 5,
    title: 'Diagnostic Services',
    category: 'Diagnostics',
    image: '/assets/images/services/diagnostic-services.jpg',

    description:
      'Access reliable diagnostic support to help healthcare professionals make informed decisions.',

    longDescription:
      'Our diagnostic services support the healthcare journey by providing access to essential testing and diagnostic information required for appropriate medical assessment.',

    doctors: 5,
    patients: '3K+',
    available: true,

    features: [
      'Diagnostic testing',
      'Medical assessments',
      'Digital test information',
      'Healthcare reporting'
    ]
  },

  {
    id: 6,
    title: 'Pediatrics',
    category: 'Women & Children',
    image: '/assets/images/services/pediatrics.jpg',

    description:
      'Dedicated healthcare services focused on children and their growing healthcare needs.',

    longDescription:
      'Our pediatric service provides children with access to qualified healthcare professionals for routine checkups, common illnesses, preventive care, and ongoing health support.',

    doctors: 9,
    patients: '2.1K+',
    available: true,

    features: [
      'Child health checkups',
      'Pediatric consultation',
      'Preventive healthcare',
      'Growth monitoring'
    ]
  },

  {
    id: 7,
    title: 'Women’s Healthcare',
    category: 'Women & Children',
    image: '/assets/images/services/womens-healthcare.jpg',

    description:
      'Comprehensive healthcare support designed around women’s health and wellbeing.',

    longDescription:
      'Our women’s healthcare services provide access to qualified professionals for routine consultations, preventive care, and a range of women’s healthcare needs.',

    doctors: 8,
    patients: '2K+',
    available: true,

    features: [
      'Women’s health consultation',
      'Preventive care',
      'Routine assessments',
      'Specialist support'
    ]
  },

  {
    id: 8,
    title: 'Orthopedic Care',
    category: 'Specialist Care',
    image: '/assets/images/services/orthopedic-care.jpg',

    description:
      'Specialized support for bones, joints, muscles, and mobility-related concerns.',

    longDescription:
      'Our orthopedic service connects patients with healthcare professionals who provide consultation and care for musculoskeletal and mobility-related concerns.',

    doctors: 6,
    patients: '1.4K+',
    available: true,

    features: [
      'Orthopedic consultation',
      'Musculoskeletal assessment',
      'Mobility support',
      'Recovery planning'
    ]
  },

  {
    id: 9,
    title: 'Emergency Care',
    category: 'Emergency Care',
    image: '/assets/images/services/emergency-care.jpg',

    description:
      'Fast access to healthcare support when urgent medical attention is required.',

    longDescription:
      'Emergency care is designed to support patients who require urgent medical attention. For serious emergencies, patients should contact their local emergency services immediately.',

    doctors: 15,
    patients: '4K+',
    available: true,

    features: [
      'Urgent medical assessment',
      'Emergency consultation',
      'Rapid healthcare support',
      'Specialist coordination'
    ]
  },

  {
    id: 10,
    title: 'Health Consultation',
    category: 'General Care',
    image: '/assets/images/services/health-consultation.jpg',

    description:
      'Convenient digital healthcare consultation for general health concerns.',

    longDescription:
      'Our consultation service provides a convenient way for patients to connect with healthcare professionals, discuss health concerns, and determine appropriate next steps.',

    doctors: 14,
    patients: '3.2K+',
    available: true,

    features: [
      'Digital consultation',
      'Doctor communication',
      'Health guidance',
      'Follow-up support'
    ]
  }

];