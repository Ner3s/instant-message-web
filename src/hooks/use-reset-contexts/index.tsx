import { useContacts } from '@/contexts/use-contacts';
import { useUsers } from '@/contexts/use-users';

import { IContact, TMapContacts } from '@/models/contact';
import { IUser } from '@/models/user';

function useResetContexts() {
  const { setContacts, setCurrentContact, setImutableContacts } = useContacts();
  const { setCurrentUser, setUsers } = useUsers();

  function handleResetAllDataContexts() {
    setCurrentUser({} as IUser);
    setUsers([]);
    setContacts({} as TMapContacts);
    setCurrentContact({} as IContact);
    setImutableContacts({} as TMapContacts);
  }

  return { handleResetAllDataContexts };
}

export { useResetContexts };
