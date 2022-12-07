import { TProfileEdit } from '@/models/profile-edit';

export type TProfileEditForm = Omit<TProfileEdit, 'created_at' | 'updated_at'>;

const INITIAL_FORM_VALUES = {
  email: '',
  name: '',
  description: '',
  birth_date: '',
  image_url: ''
};

export { INITIAL_FORM_VALUES };
