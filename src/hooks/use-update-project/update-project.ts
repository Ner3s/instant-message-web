import { toast } from 'react-toastify';

import { IProject } from '@/models/project';
import { IProjectDTO } from '@/models/project/project.dto';
import { remoteUpdateProject } from '@/services/project/update';
import { recursiveToCamel } from '@/utils/helpers/camelize';

interface IUpdateProject {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  project: IProjectDTO;
  setCurrentProject: React.Dispatch<React.SetStateAction<IProject>>;
}

/**
 *  Function is responsible for Update project
 */
export async function updateProject({
  setIsLoading,
  setCurrentProject,
  project
}: IUpdateProject) {
  try {
    setIsLoading(true);

    remoteUpdateProject({ project });

    setCurrentProject(recursiveToCamel(project) as IProject);
    toast.success('Project updated successfully!');
  } catch (error: unknown) {
    toast.error('Error updating project!');
  } finally {
    setIsLoading(false);
  }
}
