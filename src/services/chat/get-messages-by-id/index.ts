import { doc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

interface IRemoteGetMessagesById {
  chatId: string;
}

async function remoteGetMessagesById({ chatId }: IRemoteGetMessagesById) {
  return doc(firebaseDatabase, 'chats', chatId);
}

export { remoteGetMessagesById };
