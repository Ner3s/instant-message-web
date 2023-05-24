import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { TProjectAction } from '@/contexts/use-project/reducer';

import { IProject } from '@/models/project';
import { remoteGetAllProjects } from '@/services/project/get-all';
import { addHoursOrMinutes } from '@/utils/helpers/addHoursOrMinutes';
import { recursiveToCamel } from '@/utils/helpers/camelize';
import { storage } from '@/utils/helpers/storage';

interface IGetAllProjects {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  dispatch: Dispatch<TProjectAction>;
  userId: string;
}

/**
 *  Function is responsible for Get all projects
 */
export async function getAllProjects({
  setIsLoading,
  dispatch,
  userId
}: IGetAllProjects) {
  try {
    setIsLoading(true);

    const querySnapshot = await remoteGetAllProjects();
    const globalProjects: IProject[] = [];
    const membersProjects: IProject[] = [];
    let myProjects: IProject[] = [];

    querySnapshot.forEach((doc) => {
      globalProjects.push({
        ...(recursiveToCamel(doc.data()) as IProject),
        uid: doc.id
      });
    });

    globalProjects.forEach(
      (project) =>
        project.members.map((member) => member.uid).includes(userId) &&
        membersProjects.push(project)
    );

    myProjects = globalProjects.filter((project) => project.ownerId === userId);

    dispatch({
      type: 'global',
      payload: globalProjects.filter((project) => project.status && project)
    });
    dispatch({ type: 'members', payload: membersProjects });
    dispatch({ type: 'myProjects', payload: myProjects });

    storage.setItem({
      key: 'instantMessage@cache:projects_expires_at',
      value: addHoursOrMinutes(new Date(), 2).toString()
    });
  } catch (error: unknown) {
    toast.error('Error while getting projects');
  } finally {
    setIsLoading(false);
  }
}
