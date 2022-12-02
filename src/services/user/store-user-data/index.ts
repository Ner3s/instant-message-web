import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { UserCredential } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { ISignUpDTO } from '@/models/sign-up.dto';
import { IStoredUserData } from '@/models/stored-user-data';
import { ROUTE_LIST } from '@/utils/constants/route-list';

type TFeedbackMessage = { success: string; error: string };

interface IStoreUserDataService {
  userCredential: UserCredential;
  signUpData: ISignUpDTO;
  router: NextRouter;
  redirect?: boolean;
  feedbackMessage?: TFeedbackMessage;
}

async function remoteStoreUserData({
  userCredential,
  signUpData,
  router,
  redirect = true,
  feedbackMessage = {
    success: 'User created!',
    error: 'Error, User not created!'
  }
}: IStoreUserDataService) {
  let responseData: IStoredUserData | null = null;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password, confirm_password, ...data } = signUpData;

  try {
    const docRef = doc(firebaseDatabase, 'users', userCredential.user.uid);
    await setDoc(docRef, data);

    responseData = { auth: userCredential.user, storedData: data };

    // Feedback de sucesso e redirect
    toast.success(feedbackMessage.success);

    redirect && router.push(ROUTE_LIST.USERS);
    // setTimeout(() => {
    // }, TIME_SECONDS.TWO);
  } catch (error) {
    toast.error(feedbackMessage.error);
  }

  return responseData;
}

export { remoteStoreUserData };
