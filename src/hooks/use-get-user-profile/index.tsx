import { useState } from 'react';

import { getUserProfile } from './get-user-profile';

import { IUser } from '@/models/user';

interface IUseGetUserProfile {
  slug: string;
}

function useGetUserProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({} as IUser);

  async function handleGetUserProfile({ slug }: IUseGetUserProfile) {
    await getUserProfile({ slug, setIsLoading, setUserProfile });
  }

  return { isLoading, userProfile, handleGetUserProfile };
}

export { useGetUserProfile };
