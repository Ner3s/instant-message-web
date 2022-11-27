import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { ISignInDTO } from '@/models/sign-in.dto';
import { IUser } from '@/models/user';
import { remoteSignIn } from '@/services/auth/sign-in';
import { remoteGetUserData } from '@/services/user/get-user-data';
import storedUserDataMapper from '@/utils/mapping/stored-user-data-mapper';

type TSignIn = ISignInDTO & {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser>>;
};

async function signIn({
  auth,
  email,
  password,
  setIsLoading,
  setUser
}: TSignIn) {
  let userMapped: IUser | null = null;
  setIsLoading(true);
  try {
    const response = await remoteSignIn({ auth, email, password });

    const userData = await remoteGetUserData(response.user);

    if (!userData?.auth && !userData?.storedData) {
      toast.error('Data user not found!');
      return null;
    }

    userMapped = storedUserDataMapper({
      auth: userData?.auth,
      storedData: userData?.storedData
    });

    setUser(userMapped);
  } catch (error) {
    toast.error('User not found');
  } finally {
    setIsLoading(false);
  }
}

export { signIn };
