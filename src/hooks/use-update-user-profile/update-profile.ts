import { NextRouter } from 'next/router';

import { TProfileEdit } from '@/models/profile-edit';
import { IUser } from '@/models/user';
import { remoteUpdateUserProfile } from '@/services/user/update-user-profile';
import storedUserDataMapper from '@/utils/mappings/stored-user-data-mapper';

interface IUpdateProfile {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  uid: string;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  userData: TProfileEdit;
  router: NextRouter;
}

/**
 *  Function is responsible for Update user profile
 */
async function updateProfile({
  setIsLoading,
  userData,
  setUser,
  uid,
  router
}: IUpdateProfile) {
  setIsLoading(true);
  try {
    const response = await remoteUpdateUserProfile({
      router,
      uid,
      userData,
      redirect: false
    });

    if (!response) {
      return null;
    }

    setUser(storedUserDataMapper(response));
  } catch (error) {
    //
  } finally {
    setIsLoading(false);
  }
}

export { updateProfile };
