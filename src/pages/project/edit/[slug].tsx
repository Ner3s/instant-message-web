import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Base } from '@/components/Base';
import { Spinner } from '@/components/Spinner';

import { ProjectEditTemplate } from '@/templates/ProjectEdit';

import { useAuth } from '@/contexts/use-auth';
import { useProject } from '@/contexts/use-project';

import { useGetProjectById } from '@/hooks/use-get-project-by-id';
import { useUpdateProject } from '@/hooks/use-update-project';
import { useUploadFile } from '@/hooks/use-upload-file';

import { IProjectDTO } from '@/models/project/project.dto';
import { ROUTE_LIST } from '@/utils/constants/route-list';

export default function EditProject() {
  const router = useRouter();

  const { isLoading: isLoadingFiles, handleUploadFile } = useUploadFile();
  const { user } = useAuth();
  const { isLoading, handleUpdateProject } = useUpdateProject();
  const { currentProject } = useProject();

  const { handleGetProjectById, isLoading: isLoadingProject } =
    useGetProjectById();

  const handleUpdateProjectAndRedirect = ({
    project
  }: {
    project: IProjectDTO;
  }) => {
    handleUpdateProject({ project });
    router.push(ROUTE_LIST.PROJECT_SLUG.replace(':slug', String(project.uid)));
  };

  useEffect(() => {
    currentProject.name &&
      currentProject.ownerId !== user.uid &&
      router.push(ROUTE_LIST.HOME);

    !currentProject.name &&
      router.query.slug &&
      handleGetProjectById({ uid: router.query.slug as string });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.query.slug, currentProject, isLoadingProject]);

  return (
    <Base>
      {isLoadingProject ? (
        <Spinner />
      ) : (
        <ProjectEditTemplate
          projectData={currentProject}
          handleUploadFile={handleUploadFile}
          isLoading={isLoading || isLoadingFiles}
          handleUpdateProject={handleUpdateProjectAndRedirect}
        />
      )}
    </Base>
  );
}
