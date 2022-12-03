import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { getAuth } from 'firebase/auth';

import { updateEmail } from './update-email';
import { updateProfile } from './update-profile';

import { useAuth } from '@/contexts/use-auth';

import { TProfileEdit } from '@/models/profile-edit';

function useUpdateUserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, user } = useAuth();
  const router = useRouter();
  const auth = getAuth();

  async function handleUpdateProfile(userData: TProfileEdit) {
    if (!auth.currentUser?.uid) {
      toast.error('User not found!');
      return null;
    }

    await updateProfile({
      setIsLoading,
      uid: auth.currentUser.uid,
      router,
      setUser,
      userData
    });
  }

  async function handleUpdateEmail(email: string) {
    await updateEmail({ setIsLoading, auth, email, setUser, user });
  }

  return { isLoading, handleUpdateEmail, handleUpdateProfile };
}

export { useUpdateUserProfile };
