import { Auth } from 'firebase/auth';

export interface ISignInWithAuthDTO {
  auth: Auth;
  email: string;
  password: string;
}

export type TSignInDTO = Omit<ISignInWithAuthDTO, 'auth'>;
