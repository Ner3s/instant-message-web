import { doc, updateDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IUser } from '@/models/user';

interface IRemoteUpdateConnection {
  combinedId: string;
  user: IUser;
}

async function remoteUpdateConnection({
  combinedId,
  user
}: IRemoteUpdateConnection) {
  const sendUserInfo = {
    [`${combinedId}.userInfo`]: {
      uid: user.uid,
      name: user.name,
      imageUrl: user.imageUrl
    },
    [`${combinedId}.date`]: new Date().toISOString()
  };

  const docRef = doc(firebaseDatabase, 'contacts', user.uid);

  return await updateDoc(docRef, sendUserInfo);
}

export { remoteUpdateConnection };
