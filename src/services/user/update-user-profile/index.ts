import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { TProfileEdit } from '@/models/profile-edit';
import { IStoredUserData } from '@/models/stored-user-data';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { TIME_SECONDS } from '@/utils/constants/time';

type TFeedbackMessage = { success: string; error: string };

interface IStoreUserDataService {
  uid: string;
  userData: TProfileEdit;
  router: NextRouter;
  redirect?: boolean;
  feedbackMessage?: TFeedbackMessage;
}

async function remoteUpdateUserProfile({
  uid,
  userData,
  router,
  redirect = true,
  feedbackMessage = {
    success: 'User updated!',
    error: 'User update error!'
  }
}: IStoreUserDataService) {
  let responseData: IStoredUserData | null = null;

  try {
    const docRef = doc(firebaseDatabase, 'users', uid);
    await setDoc(docRef, userData);

    responseData = { auth: { uid: uid } as never, storedData: userData };

    toast.success(feedbackMessage.success);

    redirect &&
      setTimeout(() => {
        router.push(ROUTE_LIST.PROFILE);
      }, TIME_SECONDS.TWO);
  } catch (error) {
    toast.error(feedbackMessage.error);
  }

  return responseData;
}

export { remoteUpdateUserProfile };
