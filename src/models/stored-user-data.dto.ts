import { ISignUpDTO } from './sign-up.dto';

export type TStoredUserDTO = Omit<ISignUpDTO, 'password' | 'confirm_password'>;
