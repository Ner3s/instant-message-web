import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

interface IRemoteCreateChat {
  combinedId: string;
}

async function remoteCreateChat({ combinedId }: IRemoteCreateChat) {
  const docRef = doc(firebaseDatabase, 'chats', combinedId);

  return await setDoc(docRef, {
    messages: []
  });
}

export { remoteCreateChat };
