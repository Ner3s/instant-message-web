import { IStoredUserData } from '@/models/stored-user-data';
import { IUser } from '@/models/user';

function storedUserDataMapper({ auth, storedData }: IStoredUserData): IUser {
  return {
    uid: auth?.uid || '',
    name: storedData?.name || '',
    email: storedData?.email || '',
    imageUrl: storedData?.image_url || '',
    birthDate: storedData?.birth_date || '',
    description: storedData?.description || '',
    createdAt: storedData?.created_at || '',
    updatedAt: storedData?.updated_at || ''
  };
}

export default storedUserDataMapper;
