import { Auth } from 'firebase/auth';

export interface ISignUpWithAuthDTO {
  auth: Auth;
  email: string;
  password: string;
}

export interface ISignUpDTO {
  email: string;
  name: string;
  image_url?: string;
  password: string;
  confirm_password: string;
  description: string;
  birth_date: string;
  created_at: string;
  updated_at: string | null;
}
