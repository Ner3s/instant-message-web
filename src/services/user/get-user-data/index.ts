import { toast } from 'react-toastify';

import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IStoredUserData } from '@/models/stored-user-data';
import { TStoredUserDTO } from '@/models/stored-user-data.dto';

async function remoteGetUserData(data?: User, enableToast = true) {
  let responseData: IStoredUserData;

  if (!data) {
    return null;
  }

  try {
    const docRef = doc(firebaseDatabase, 'users', data?.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      toast.error('User not found!');
      return null;
    }

    responseData = {
      auth: data,
      storedData: docSnap.data() as TStoredUserDTO
    };

    enableToast && toast.success('User logged!');
    return responseData;
  } catch (error) {
    toast.error('User not found or not exists!');
    return null;
  }
}

export { remoteGetUserData };
