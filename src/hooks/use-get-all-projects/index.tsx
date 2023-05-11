import { useState } from 'react';

import { getAllProjects } from './get-all-projects';

import { useAuth } from '@/contexts/use-auth';
import { useProject } from '@/contexts/use-project';

function useGetAllProjects() {
  const { projects, dispatchProjects } = useProject();

  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetAllProjects = async () => {
    await getAllProjects({
      setIsLoading,
      dispatch: dispatchProjects,
      userId: user.uid
    });
  };

  return { isLoading, handleGetAllProjects, projects };
}

export { useGetAllProjects };
