import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { uuidv4 } from '@firebase/util';

interface IRemoteSendMessage {
  chatId: string;
  text: string;
  userId: string;
}

async function remoteSendMessage({ chatId, userId, text }: IRemoteSendMessage) {
  const docRef = doc(firebaseDatabase, 'chats', chatId);
  return await updateDoc(docRef, {
    messages: arrayUnion({
      id: uuidv4(),
      text,
      userId,
      date: new Date().toISOString()
    })
  });
}

export { remoteSendMessage };
