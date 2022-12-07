import { useRouter } from 'next/router';
import { useState } from 'react';

import { getAuth } from 'firebase/auth';

import { signUp } from './sign-up';

import { useAuth } from '@/contexts/use-auth';

import { ISignUpDTO } from '@/models/sign-up.dto';

function useSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();
  const router = useRouter();
  const auth = getAuth();

  async function handleSignUp(signUpData: ISignUpDTO) {
    await signUp({ auth, router, setIsLoading, setUser, signUpData });
  }

  return { isLoading, handleSignUp };
}

export { useSignUp };
