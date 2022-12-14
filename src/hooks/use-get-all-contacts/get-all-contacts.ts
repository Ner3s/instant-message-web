import { toast } from 'react-toastify';

import { onSnapshot } from 'firebase/firestore';

import { TMapContacts } from '@/models/contact';
import { IUser } from '@/models/user';
import { remoteGetAllContacts } from '@/services/contact/get-all-contacts';

interface IGetContacts {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setContacts: React.Dispatch<React.SetStateAction<TMapContacts>>;
  user: IUser;
}

async function getAllContacts({
  setIsLoading,
  user,
  setContacts
}: IGetContacts) {
  setIsLoading(true);

  try {
    const unset = onSnapshot(remoteGetAllContacts({ uid: user.uid }), (doc) => {
      const response = doc.data();
      const contacts = Object.entries(response as never).map((contact) => [
        contact[0],
        contact[1]
      ]) as TMapContacts;

      setContacts(contacts);
    });

    return () => {
      unset();
    };
  } catch (error: unknown) {
    toast.error('Error, unable to fetch contacts');
  } finally {
    setIsLoading(false);
  }
}

export { getAllContacts };
