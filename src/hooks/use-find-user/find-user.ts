import { toast } from 'react-toastify';

import { TStoredUserDTO } from '@/models/stored-user-data.dto';
import { IUser } from '@/models/user';
import { remoteFindUser } from '@/services/user/find-user';
import storedUserDataMapper from '@/utils/mappings/stored-user-data-mapper';

interface IFindUser {
  search: string;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

async function findUser({ setIsLoading, search, setUsers }: IFindUser) {
  setIsLoading(true);
  try {
    const users: IUser[] = [];
    const querySnapshot = await remoteFindUser(search);

    if (querySnapshot.size === 0) {
      return;
    }

    querySnapshot.forEach((doc) => {
      users.push(
        storedUserDataMapper({
          auth: { uid: doc.id } as never,
          storedData: { ...(doc.data() as TStoredUserDTO) }
        })
      );
    });

    setUsers(users);
  } catch (error: unknown) {
    toast.error('Error in find user');
  } finally {
    setIsLoading(false);
  }
}

export { findUser };
