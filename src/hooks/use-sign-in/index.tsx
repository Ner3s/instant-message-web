import { useState } from 'react';

import { getAuth } from 'firebase/auth';

import { signIn } from './sign-in';

import { useAuth } from '@/contexts/use-auth';

import { ISignInDTO } from '@/models/sign-in.dto';

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
