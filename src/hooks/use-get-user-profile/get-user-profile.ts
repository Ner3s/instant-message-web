import { toast } from 'react-toastify';

import { IUser } from '@/models/user';
import { remoteGetUserData } from '@/services/user/get-user-data';
import storedUserDataMapper from '@/utils/mappings/stored-user-data-mapper';
interface IGetUserProfile {
  slug: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUserProfile: React.Dispatch<React.SetStateAction<IUser>>;
}

async function getUserProfile({
  setIsLoading,
  setUserProfile,
  slug
}: IGetUserProfile) {
  setIsLoading(true);
  try {
    const response = await remoteGetUserData({ uid: slug } as never, false);

    if (!response) {
      return null;
    }

    if (!response.storedData) {
      toast.error(`Can't find user`);
      return null;
    }

    setUserProfile(
      storedUserDataMapper({
        auth: response.auth,
        storedData: response.storedData
      })
    );
  } catch (error: unknown) {
    toast.error(`Unexpected error`);
  } finally {
    setIsLoading(false);
  }
}

export { getUserProfile };
