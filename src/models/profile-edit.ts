import { ISignUpDTO } from './sign-up.dto';

export type TProfileEdit = Omit<ISignUpDTO, 'password' | 'confirm_password'>;
