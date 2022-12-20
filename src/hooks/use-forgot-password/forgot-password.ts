import { toast } from 'react-toastify';

import { Auth } from 'firebase/auth';

import { remotePasswordReset } from '@/services/user/password-reset';

interface IForgotPassword {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  auth: Auth;
}

/**
 *  Function is responsible for Forgot password
 */
async function forgotPassword({ setIsLoading, auth, email }: IForgotPassword) {
  setIsLoading(true);
  try {
    await remotePasswordReset({ email, auth });
    toast.success(`Sent the password reset  to your email`);
  } catch (error: unknown) {
    toast.error(`Error did not work sending password reset email!`);
  } finally {
    setIsLoading(false);
    //
  }
}

export { forgotPassword };
