import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

interface IRemoteCreateListContact {
  uid: string;
}

async function remoteCreateListContact({ uid }: IRemoteCreateListContact) {
  const docRef = doc(firebaseDatabase, 'contacts', uid);

  return await setDoc(docRef, {});
}

export { remoteCreateListContact };
