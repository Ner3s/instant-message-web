import { useRouter } from 'next/router';
import { useState } from 'react';

import { createProject } from './create-project';

import { useProject } from '@/contexts/use-project';

import { IProjectDTO } from '@/models/project/project.dto';

interface IHandleCreateProjet {
  data: IProjectDTO;
}

function useCreateProject() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { dispatchProjects, projects } = useProject();

  const handleCreateProject = ({ data }: IHandleCreateProjet) => {
    createProject({ setIsLoading, data, router, projects, dispatchProjects });
  };

  return { isLoading, setIsLoading, handleCreateProject };
}

export { useCreateProject };
