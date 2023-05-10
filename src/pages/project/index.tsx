import { useEffect } from 'react';

import { Base } from '@/components/Base';

import { ProjectsTemplate } from '@/templates/Projects';

import { useGetAllProjects } from '@/hooks/use-get-all-projects';

export default function Project() {
  const { projects: projectsData, handleGetAllProjects } = useGetAllProjects();
  const { global, members: associate, myProjects } = projectsData;

  useEffect(() => {
    projectsData.global.length === 0 && handleGetAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectsData]);

  return (
    <Base>
      <ProjectsTemplate
        projects={{
          global: global,
          associate: associate,
          myProjects: myProjects
        }}
      />
    </Base>
  );
}
