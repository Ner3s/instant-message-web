import { useState } from 'react';

import { getProjectById } from './get-project-by-id';

import { IProject } from '@/models/project';

interface IHandleGetProjectById {
  uid: string;
}

function useGetProjectById() {
  const [project, setProject] = useState<IProject>({} as IProject);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetProjectById = async ({ uid }: IHandleGetProjectById) => {
    await getProjectById({
      setIsLoading,
      setProject,
      uid
    });
  };

  return { isLoading, project, handleGetProjectById };
}

export { useGetProjectById };
