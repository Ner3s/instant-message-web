import { Base } from '@/components/Base';

import { CreateProjectTemplate } from '@/templates/CreateProject';

import { useAuth } from '@/contexts/use-auth';

import { useCreateProject } from '@/hooks/use-create-project';
import { useUploadFile } from '@/hooks/use-upload-file';

export default function EditProject() {
  const { isLoading: isLoadingFiles, handleUploadFile } = useUploadFile();
  const { user } = useAuth();
  const { isLoading, handleCreateProject } = useCreateProject();

  return (
    <Base>
      <CreateProjectTemplate
        owner_id={user.uid}
        handleUploadFile={handleUploadFile}
        isLoading={isLoading || isLoadingFiles}
        handleCreateProject={handleCreateProject}
      />
    </Base>
  );
}
