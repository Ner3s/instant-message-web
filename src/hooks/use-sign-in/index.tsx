/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useState } from 'react';
import { toast } from 'react-toastify';

import { getAuth } from 'firebase/auth';

import { useAuth } from '@/contexts/use-auth';

import { ISignInDTO } from '@/models/sign-in';
import { remoteSignIn } from '@/services/auth/sign-in';

type TSignIn = ISignInDTO & {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setUser: Dispatch<SetStateAction<unknown>>;
};

async function signIn({ auth, email, password }: TSignIn) {
  try {
    const response = await remoteSignIn({ auth, email, password });
  } catch (error: any) {
    toast.error(error);
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
