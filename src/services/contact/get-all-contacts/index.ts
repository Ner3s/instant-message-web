import { doc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

function remoteGetAllContacts({ uid }: { uid: string }) {
  const docRef = doc(firebaseDatabase, 'contacts', uid);
  return docRef;
}

export { remoteGetAllContacts };
