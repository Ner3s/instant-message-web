import { Auth } from 'firebase/auth';

export interface ISignInDTO {
  auth: Auth;
  email: string;
  password: string;
}
