import { toast } from 'react-toastify';

import { doc, getDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

interface IRemoteConnectionExists {
  combinedId: string;
}

async function remoteConnectionExists({ combinedId }: IRemoteConnectionExists) {
  try {
    const res = await getDoc(doc(firebaseDatabase, 'chats', combinedId));

    if (!res.exists()) {
      return true;
    }

    toast.warn('Oops, this connection has exists');
    return false;
  } catch (error) {
    toast.error('Error could not verify connection exists');
  }
}

export { remoteConnectionExists };
