import { toast } from 'react-toastify';

import { Auth } from 'firebase/auth';

import { IUser } from '@/models/user';
import { remoteUpdateEmail } from '@/services/user/update-email';

interface IUpdateEmail {
  email: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  auth: Auth;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  user: IUser;
}

/**
 *  Function is responsible for Update user profile
 */
async function updateEmail({
  setIsLoading,
  auth,
  setUser,
  user,
  email
}: IUpdateEmail) {
  if (!auth.currentUser) {
    return null;
  }

  setIsLoading(true);
  try {
    const newDataUser = { ...user, email };

    await remoteUpdateEmail({ currentUser: auth.currentUser, newEmail: email });

    setUser(newDataUser);
    toast.success('E-mail updated!');
  } catch (error) {
    toast.error('E-mail update error');
  } finally {
    setIsLoading(false);
  }
}

export { updateEmail };
