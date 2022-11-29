import { ISignUpDTO } from '@/models/sign-up.dto';

export type TSignUpForm = Omit<ISignUpDTO, 'created_at' | 'updated_at'>;

const INITIAL_FORM_VALUES: TSignUpForm = {
  email: '',
  password: '',
  name: '',
  confirm_password: '',
  description: '',
  birth_date: ''
};

export { INITIAL_FORM_VALUES };
