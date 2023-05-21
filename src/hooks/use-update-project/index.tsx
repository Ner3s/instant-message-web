import { useState } from 'react';

import { updateProject } from './update-project';

import { useProject } from '@/contexts/use-project';

import { IProjectDTO } from '@/models/project/project.dto';

function useUpdateProject() {
  const [isLoading, setIsLoading] = useState(false);
  const { setCurrentProject } = useProject();

  const handleUpdateProject = async ({ project }: { project: IProjectDTO }) => {
    await updateProject({
      project,
      setIsLoading,
      setCurrentProject
    });
  };

  return { isLoading, handleUpdateProject };
}

export { useUpdateProject };
