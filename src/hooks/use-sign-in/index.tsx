import { useRouter } from 'next/router';
import { useState } from 'react';

import { getAuth } from 'firebase/auth';

import { signIn } from './sign-in';

import { useAuth } from '@/contexts/use-auth';

import { TSignInDTO } from '@/models/sign-in.dto';

function useSignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const auth = getAuth();
  const { setUser } = useAuth();

  const handleSignIn = async ({ email, password }: TSignInDTO) => {
    await signIn({
      auth,
      email,
      password,
      setIsLoading,
      setUser,
      router
    });
  };

  return { handleSignIn, isLoading };
}

export { useSignIn };
