import { useState } from 'react';

import { getAuth } from 'firebase/auth';

import { forgotPassword } from './forgot-password';

import { IForgotPassword } from '@/models/forgot-password';

function useForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  function handleForgotPassword({ email }: IForgotPassword) {
    forgotPassword({ setIsLoading, auth, email });
  }

  return { isLoading, handleForgotPassword };
}

export { useForgotPassword };
