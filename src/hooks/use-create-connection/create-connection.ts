import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { ROUTE_LIST } from './../../utils/constants/route-list';

import { IUser } from '@/models/user';
import { remoteConnectionExists } from '@/services/chat/connection-exists';
import { remoteCreateChat } from '@/services/chat/create-chat';
import { remoteUpdateConnection } from '@/services/contact/update-connection';
import { combineUsersIds } from '@/utils/helpers/combine-users-ids';

interface ICreateConnection {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: IUser;
  user: IUser;
  router: NextRouter;
}

/**
 *  Function is responsible for Create connection
 */
async function createConnection({
  setIsLoading,
  currentUser,
  user,
  router
}: ICreateConnection) {
  setIsLoading(true);
  try {
    const combinedId = combineUsersIds({ currentUser, user });

    const isNoConnection = await remoteConnectionExists({ combinedId });

    if (!isNoConnection) {
      return null;
    }

    // Create chat in chats collection
    await remoteCreateChat({ combinedId });

    // Add user in currentUser list contact
    await remoteUpdateConnection({ combinedId, user: currentUser });

    // Add currentUser in user list contact
    await remoteUpdateConnection({ combinedId, user });

    router.push(ROUTE_LIST.CONTACT);
  } catch (error: unknown) {
    toast.error('Error, cannot create connection');

    console.error(error);
  } finally {
    setIsLoading(false);
  }
}

export { createConnection };
