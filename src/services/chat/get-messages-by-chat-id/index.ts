import { doc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

interface IRemoteGetMessagesByChatId {
  chatId: string;
}

function remoteGetMessagesByChatId({ chatId }: IRemoteGetMessagesByChatId) {
  return doc(firebaseDatabase, 'chats', chatId);
}

export { remoteGetMessagesByChatId };
