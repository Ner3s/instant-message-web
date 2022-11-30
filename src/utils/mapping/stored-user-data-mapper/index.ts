import { IStoredUserData } from '@/models/stored-user-data';
import { IUser } from '@/models/user';

function storedUserDataMapper({ auth, storedData }: IStoredUserData): IUser {
  return {
    uid: auth?.uid || '',
    name: storedData?.name || '',
    email: storedData?.email || '',
    image_url: storedData?.image_url || '',
    description: storedData?.description || '',
    createdAt: storedData?.created_at || '',
    updatedAt: storedData?.updated_at || ''
  };
}

export default storedUserDataMapper;
