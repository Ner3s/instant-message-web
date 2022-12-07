import { useState } from 'react';

import { getUserProfile } from './get-user-profile';

import { useUsers } from '@/contexts/use-users';

interface IUseGetUserProfile {
  slug: string;
}

function useGetUserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentUser, currentUser } = useUsers();

  async function handleGetUserProfile({ slug }: IUseGetUserProfile) {
    await getUserProfile({ slug, setIsLoading, setCurrentUser });
  }

  return { isLoading, currentUser, handleGetUserProfile };
}

export { useGetUserProfile };
