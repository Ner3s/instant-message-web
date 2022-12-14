import { useEffect, useState } from 'react';

import { getAllContacts } from './get-all-contacts';

import { useAuth } from '@/contexts/use-auth';
import { useContacts } from '@/contexts/use-contacts';

interface IUseGetAllContacts {
  execOnInit?: boolean;
}

function useGetAllContacts({ execOnInit = false }: IUseGetAllContacts) {
  const [isLoading, setIsLoading] = useState(false);

  const { setContacts } = useContacts();
  const { user } = useAuth();

  async function handleGetAllContacts() {
    await getAllContacts({ setIsLoading, user, setContacts });
  }

  //@TODO - Implements cache time
  useEffect(() => {
    user.uid && execOnInit && handleGetAllContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.uid, execOnInit]);

  return { isLoading, handleGetAllContacts };
}

export { useGetAllContacts };
