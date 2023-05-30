import { useEffect } from 'react';

import { Base } from '@/components/Base';

import { ProjectsTemplate } from '@/templates/Projects';

import { useAuth } from '@/contexts/use-auth';

import { useGetAllProjects } from '@/hooks/use-get-all-projects';

// import { IProject } from '@/models/project';
// import { storage } from '@/utils/helpers/storage';

export default function Project() {
  const {
    isLoading,
    projects: projectsData,
    handleGetAllProjects
  } = useGetAllProjects();
  const { global, members: associate, myProjects } = projectsData;
  const { user } = useAuth();

  // @TODO - REMOVE CACHE TIME
  // const handleRulesToGetProjects = (projects: IProject[], hasUser: boolean) => {
  //   const DateTimeCache = storage.getItem<string>({
  //     key: 'instantMessage@cache:projects_expires_at'
  //   });

  //   if (DateTimeCache && hasUser) {
  //     const now = new Date();
  //     const cacheTime = new Date(DateTimeCache);

  //     if (now > cacheTime) {
  //       return true;
  //     }
  //   }

  //   if (projects.length === 0 && hasUser) {
  //     return true;
  //   }

  //   return false;
  // };

  useEffect(() => {
    // @TODO - REMOVE CACHE TIME
    // handleRulesToGetProjects(projectsData.global, !!user.name) &&
    !!user.name && handleGetAllProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
