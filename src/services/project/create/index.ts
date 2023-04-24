import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IProjectDTO } from '@/models/project/index.dto';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { uuidv4 } from '@firebase/util';

type TFeedbackMessage = { success: string; error: string };

interface ICreateProjectService {
  projectData: IProjectDTO;
  router: NextRouter;
  redirect?: boolean;
  feedbackMessage?: TFeedbackMessage;
}

async function remoteCreateProject({
  projectData,
  router,
  redirect = true,
  feedbackMessage = {
    success: 'Project created!',
    error: 'Error, project not created!'
  }
}: ICreateProjectService) {
  try {
    const docRef = doc(firebaseDatabase, 'projects', uuidv4());
    await setDoc(docRef, projectData);

    // Feedback de sucesso e redirect
    toast.success(feedbackMessage.success);

    redirect && router.push(ROUTE_LIST.PROJECT);
    // setTimeout(() => {
    // }, TIME_SECONDS.TWO);
  } catch (error) {
    toast.error(feedbackMessage.error);
  }
}

export { remoteCreateProject };
