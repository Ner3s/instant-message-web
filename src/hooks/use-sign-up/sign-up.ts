import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { Auth } from 'firebase/auth';

import { ISignUpDTO } from '@/models/sign-up.dto';
import { IUser } from '@/models/user';
import { remoteSignUp } from '@/services/auth/sign-up';
import { remoteCreateListContact } from '@/services/contact/create-list';
import { remoteStoreUserData } from '@/services/user/store-user-data';
import storedUserDataMapper from '@/utils/mappings/stored-user-data-mapper';

interface ISignUp {
  auth: Auth;
  router: NextRouter;
  signUpData: ISignUpDTO;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser>>;
}

async function signUp({
  auth,
  router,
  signUpData,
  setIsLoading,
  setUser
}: ISignUp) {
  let userMapped: IUser | null = null;
  setIsLoading(true);

  try {
    const response = await remoteSignUp({
      auth,
      email: signUpData.email,
      password: signUpData.password
    });

    const userData = await remoteStoreUserData({
      router,
      signUpData,
      userCredential: response
    });

    await remoteCreateListContact({ uid: response.user.uid });

    if (!userData) {
      return null;
    }

    userMapped = storedUserDataMapper({
      auth: userData.auth,
      storedData: userData.storedData
    });

    setUser(userMapped);
  } catch (error) {
    toast.error('Error, Unexpected error!');
  } finally {
    setIsLoading(false);
  }
}

export { signUp };
