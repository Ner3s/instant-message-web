import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

import { getAuth } from 'firebase/auth';

import { useAuth } from '@/contexts/use-auth';

import { ISignInDTO } from '@/models/sign-in.dto';
import { IUser } from '@/models/user';
import { remoteSignIn } from '@/services/auth/sign-in';
import { remoteGetUserData } from '@/services/user/get-user-data';
import storedUserDataMapper from '@/utils/mapping/stored-user-data-mapper';

type TSignIn = ISignInDTO & {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<unknown>>;
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

function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const auth = getAuth();
  const { setUser } = useAuth();

  const handleSignIn = async ({ email, password }: ISignInDTO) => {
    await signIn({ auth, email, password, setIsLoading, setUser });
  };

  return { handleSignIn, isLoading };
}

export { useSignIn };
