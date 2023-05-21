import { useRouter } from 'next/router';
import { useState } from 'react';

import { createProject } from './create-project';

import { IProjectDTO } from '@/models/project/project.dto';

interface IHandleCreateProjet {
  data: IProjectDTO;
}

function useCreateProject() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCreateProject = ({ data }: IHandleCreateProjet) => {
    createProject({ setIsLoading, data, router });
  };

  return { isLoading, setIsLoading, handleCreateProject };
}

export { useCreateProject };
