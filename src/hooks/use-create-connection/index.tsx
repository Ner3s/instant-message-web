import { useRouter } from 'next/router';
import { useState } from 'react';

import { createConnection } from './create-connection';

import { useAuth } from '@/contexts/use-auth';

import { IUser } from '@/models/user';

function useCreateConnection() {
  const [isLoading, setIsLoading] = useState(false);
  const { user: currentUser } = useAuth();
  const router = useRouter();

  async function handleCreateConnection(user: IUser) {
    await createConnection({ setIsLoading, currentUser, user, router });
  }

  return { handleCreateConnection, isLoading };
}

export { useCreateConnection };
