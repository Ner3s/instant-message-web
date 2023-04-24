import { Base } from '@/components/Base';

import { CreateProjectTemplate } from '@/templates/CreateProject';

import { useAuth } from '@/contexts/use-auth';

import { useUploadFile } from '@/hooks/use-upload-file';

export default function CreateProject() {
  const { handleUploadFile } = useUploadFile();
  const { user } = useAuth();

  return (
    <Base>
      <CreateProjectTemplate
        owner_id={user.uid}
        handleUploadFile={handleUploadFile}
      />
    </Base>
  );
}
