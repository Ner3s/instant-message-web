import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { UserCredential } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { ISignUpDTO } from '@/models/sign-up.dto';
import { IStoredUserData } from '@/models/stored-user-data';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { TIME_SECONDS } from '@/utils/constants/time';

interface IStoreUserDataService {
  userCredential: UserCredential;
  signUpData: ISignUpDTO;
  router: NextRouter;
}

async function remoteStoreUserData({
  userCredential,
  signUpData,
  router
}: IStoreUserDataService) {
  let responseData: IStoredUserData | null = null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, confirm_password, ...data } = signUpData;

  try {
    const docRef = doc(firebaseDatabase, 'users', userCredential.user.uid);
    await setDoc(docRef, data);

    responseData = { auth: userCredential.user, storedData: data };

    // Feedback de sucesso e redirect
    toast.success('User created!');
    setTimeout(() => {
      router.push(ROUTE_LIST.USERS);
    }, TIME_SECONDS.TWO);
  } catch (error) {
    toast.error('Error, User not created!');
  }
  return responseData;
}

export { remoteStoreUserData };
