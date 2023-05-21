import { doc, getDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

interface IGetProjectByIdService {
  uid: string;
}

async function remoteGetProjectById({ uid }: IGetProjectByIdService) {
  const docRef = doc(firebaseDatabase, 'projects', uid);
  const docSnap = await getDoc(docRef);
  return docSnap;
}

export { remoteGetProjectById };
