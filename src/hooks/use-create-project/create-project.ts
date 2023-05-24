import { NextRouter } from 'next/router';
import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import {
  TProjectAction,
  TProjectReducer
} from '@/contexts/use-project/reducer';

import { IProject } from '@/models/project';
import { IProjectDTO } from '@/models/project/project.dto';
import { remoteCreateProject } from '@/services/project/create';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { recursiveToCamel } from '@/utils/helpers/camelize';

interface ICreateProject {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  data: IProjectDTO;
  router: NextRouter;
  dispatchProjects: Dispatch<TProjectAction>;
  projects: TProjectReducer;
}

export async function createProject({
  data,
  setIsLoading,
  router,
  projects,
  dispatchProjects
}: ICreateProject) {
  try {
    setIsLoading(true);

    const { uuid } = await remoteCreateProject({ data });

    toast.success('Project created successfully');

    router.push(ROUTE_LIST.PROJECT_SLUG.replace(':slug', uuid));

    dispatchProjects({
      type: 'global',
      payload: [
        ...projects.global,
        { ...(recursiveToCamel(data) as IProject), uid: uuid }
      ]
    });

    dispatchProjects({
      type: 'myProjects',
      payload: [
        ...projects.myProjects,
        { ...(recursiveToCamel(data) as IProject), uid: uuid }
      ]
    });
  } catch (error: unknown) {
    toast.error('Error creating project');
  } finally {
    setIsLoading(false);
  }
}
