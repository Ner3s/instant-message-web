import { toast } from 'react-toastify';

import { IProject } from '@/models/project';
import { remoteGetProjectById } from '@/services/project/get-by-id';
import { recursiveToCamel } from '@/utils/helpers/camelize';
import { dateFormatter } from '@/utils/helpers/format-date';

interface IGetProjectById {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProject: React.Dispatch<React.SetStateAction<IProject>>;
  uid: string;
}

/**
 *  Function is responsible for Get project by id
 */
export async function getProjectById({
  setIsLoading,
  setProject,
  uid
}: IGetProjectById) {
  try {
    setIsLoading(true);
    const projectSnapshot = await remoteGetProjectById({ uid });

    if (!projectSnapshot.exists()) {
      toast.warn('Project not found');
    }

    const project = recursiveToCamel(projectSnapshot.data()) as IProject;

    setProject({
      ...project,
      startDate: dateFormatter({ date: project.startDate }) as string
    });
  } catch (error: unknown) {
    toast.error('Error to get project by id');
    console.error('Error no firebase', error);
  } finally {
    setIsLoading(false);
  }
}
