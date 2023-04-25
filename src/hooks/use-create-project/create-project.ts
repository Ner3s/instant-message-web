import { NextRouter } from 'next/router';
import { toast } from 'react-toastify';

import { IProjectDTO } from '@/models/project/project.dto';
import { remoteCreateProject } from '@/services/project/create';
import { ROUTE_LIST } from '@/utils/constants/route-list';

interface ICreateProject {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  data: IProjectDTO;
  router: NextRouter;
}

export async function createProject({
  data,
  setIsLoading,
  router
}: ICreateProject) {
  try {
    setIsLoading(true);

    const { uuid } = await remoteCreateProject({ data });

    toast.success('Project created successfully');

    router.push(ROUTE_LIST.PROJECT_SLUG.replace(':slug', uuid));
  } catch (error: unknown) {
    toast.error('Error creating project');
    console.error('error --> ', error);
  } finally {
    setIsLoading(false);
  }
}
