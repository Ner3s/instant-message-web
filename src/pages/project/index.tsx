import { useEffect } from 'react';

import { Base } from '@/components/Base';

import { ProjectsTemplate } from '@/templates/Projects';

import { useAuth } from '@/contexts/use-auth';

import { useGetAllProjects } from '@/hooks/use-get-all-projects';

export default function Project() {
  const {
    isLoading,
    projects: projectsData,
    handleGetAllProjects
  } = useGetAllProjects();
  const { global, members: associate, myProjects } = projectsData;
  const { user } = useAuth();

  useEffect(() => {
    projectsData.global.length === 0 && user.name && handleGetAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsData, user]);

  return (
    <Base>
      <ProjectsTemplate
        projects={{
          global: global,
          associate: associate,
          myProjects: myProjects
        }}
        isLoading={isLoading}
      />
    </Base>
  );
}
