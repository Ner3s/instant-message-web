import { toast } from 'react-toastify';

import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { firebaseStore } from '@/configs/firebase';
import { IStoredUserData } from '@/models/stored-user-data';
import { TStoredUserDTO } from '@/models/stored-user-data.dto';

async function remoteGetUserData(data?: User) {
  let responseData: IStoredUserData;

  if (!data) {
    return null;
  }

  try {
    const docRef = doc(firebaseStore, 'users', data?.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      toast.error('User not found!');
      return null;
    }

    responseData = {
      auth: data,
      storedData: docSnap.data() as TStoredUserDTO
    };

    toast.success('User logged!');
    return responseData;
  } catch (error) {
    toast.error('User not found or not exists!');
    return null;
  }
}

export { remoteGetUserData };
