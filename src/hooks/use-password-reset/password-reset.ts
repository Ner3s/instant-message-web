import { toast } from 'react-toastify';

import { Auth } from 'firebase/auth';

import { remotePasswordReset } from '@/services/user/password-reset';

interface IPasswordReset {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  auth: Auth;
  email: string;
}

/**
 *  Function is responsible for Password reset
 */
async function passwordReset({ setIsLoading, email, auth }: IPasswordReset) {
  setIsLoading(true);
  try {
    await remotePasswordReset({ auth, email });

    toast.success('Password reset sent to your email');
  } catch (error) {
    toast.error('Error unable to send password reset');
  } finally {
    setIsLoading(false);
  }
}

export { passwordReset };
