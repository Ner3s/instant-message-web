import { useState } from 'react';

import { findUser } from './find-user';

import { useUsers } from '@/contexts/use-users';

function useFindUser() {
  const [isLoading, setIsLoading] = useState(false);
  const { users, setUsers, setCurrentUser } = useUsers();

  async function handleFindUser(search: string) {
    await findUser({ setIsLoading, search, setUsers });
  }

  return { users, isLoading, handleFindUser, setCurrentUser };
}

export { useFindUser };
