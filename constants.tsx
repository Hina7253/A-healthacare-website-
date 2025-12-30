
import React from 'react';
import { Doctor, MedicalService } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiology',
    experience: 15,
    education: 'Johns Hopkins School of Medicine',
    image: 'https://picsum.photos/seed/doc1/400/400',
    bio: 'Specializing in interventional cardiology and heart failure management.',
    availability: ['Mon', 'Wed', 'Fri']
  },
  {
    id: '2',
    name: 'Dr. James Wilson',
    specialty: 'Neurology',
    experience: 12,
    education: 'Harvard Medical School',
    image: 'https://picsum.photos/seed/doc2/400/400',
    bio: 'Expert in neurodegenerative disorders and advanced migraine treatments.',
    availability: ['Tue', 'Thu']
  },
  {
    id: '3',
    name: 'Dr. Elena Rodriguez',
    specialty: 'Pediatrics',
    experience: 8,
    education: 'Stanford University',
    image: 'https://picsum.photos/seed/doc3/400/400',
    bio: 'Dedicated to compassionate care for children from infancy through adolescence.',
    availability: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  },
  {
    id: '4',
    name: 'Dr. Michael Chen',
    specialty: 'Orthopedics',
    experience: 20,
    education: 'Yale School of Medicine',
    image: 'https://picsum.photos/seed/doc4/400/400',
    bio: 'Specialist in sports medicine and joint replacement surgery.',
    availability: ['Mon', 'Thu']
  }
];

export const SERVICES: MedicalService[] = [
  {
    id: 's1',
    title: 'Emergency Care',
    description: '24/7 world-class emergency response and critical care units.',
    icon: '🚨'
  },
  {
    id: 's2',
    title: 'Diagnostic Imaging',
    description: 'Advanced MRI, CT, and X-ray facilities with rapid reporting.',
    icon: '🔬'
  },
  {
    id: 's3',
    title: 'Surgical Services',
    description: 'Minimally invasive and robotic-assisted surgical procedures.',
    icon: '🏥'
  },
  {
    id: 's4',
    title: 'Physical Therapy',
    description: 'Comprehensive rehabilitation and sports recovery programs.',
    icon: '🧘'
  }
];
