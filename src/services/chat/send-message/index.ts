import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { uuidv4 } from '@firebase/util';

interface IRemoteSendMessage {
  chatId: string;
  text: string;
  senderId: string;
}

async function remoteSendMessage({
  chatId,
  senderId,
  text
}: IRemoteSendMessage) {
  const docRef = doc(firebaseDatabase, 'chats', chatId);
  return await updateDoc(docRef, {
    messages: arrayUnion({
      id: uuidv4(),
      text,
      senderId,
      date: new Date().toISOString()
    })
  });
}

export { remoteSendMessage };
