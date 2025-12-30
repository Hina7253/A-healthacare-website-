
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  education: string;
  image: string;
  bio: string;
  availability: string[];
}

export interface MedicalService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED'
}
