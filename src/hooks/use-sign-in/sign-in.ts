import { NextRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { ISignInWithAuthDTO } from '@/models/sign-in.dto';
import { IUser } from '@/models/user';
import { remoteSignIn } from '@/services/auth/sign-in';
import { remoteGetUserData } from '@/services/user/get-user-data';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import storedUserDataMapper from '@/utils/mapping/stored-user-data-mapper';

type TSignIn = ISignInWithAuthDTO & {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<IUser>>;
  router: NextRouter;
};

const TWO_SECONDS = 1500;

async function signIn({
  auth,
  email,
  password,
  setIsLoading,
  setUser,
  router
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
    setTimeout(() => {
      router.push(ROUTE_LIST.USERS);
    }, TWO_SECONDS);
  } catch (error) {
    toast.error('User not found');
  } finally {
    setIsLoading(false);
  }
}

export { signIn };
