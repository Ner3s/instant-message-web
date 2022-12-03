import { useState } from 'react';

import { getAuth } from 'firebase/auth';

import { passwordReset } from './password-reset';

function usePasswordReset() {
  const [isLoading, setIsLoading] = useState(false);

  const auth = getAuth();

  async function handlePasswordReset(email: string) {
    await passwordReset({ setIsLoading, email, auth });
  }

  return { isLoading, handlePasswordReset };
}

export { usePasswordReset };
