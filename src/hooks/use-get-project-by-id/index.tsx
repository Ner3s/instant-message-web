import { useState } from 'react';

import { getProjectById } from './get-project-by-id';

import { useProject } from '@/contexts/use-project';

interface IHandleGetProjectById {
  uid: string;
}

function useGetProjectById() {
  const { currentProject, setCurrentProject } = useProject();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetProjectById = async ({ uid }: IHandleGetProjectById) => {
    await getProjectById({
      setIsLoading,
      setProject: setCurrentProject,
      uid
    });
  };

  return { isLoading, project: currentProject, handleGetProjectById };
}

export { useGetProjectById };
