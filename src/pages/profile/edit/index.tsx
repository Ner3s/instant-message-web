import { Base } from '@/components/Base';

import { ProfileEditTemplate } from '@/templates/ProfileEdit';

import { useAuth } from '@/contexts/use-auth';

import { useUpdateUserProfile } from '@/hooks/use-update-user-profile';
import { useUploadFile } from '@/hooks/use-upload-file';

export default function ProfileEdit() {
  const { user } = useAuth();

  // @TODO - ADD IsLoading in button ProfileEdit ---
  const { handleUploadFile } = useUploadFile();
  const { handleUpdateEmail, handleUpdateProfile } = useUpdateUserProfile();

  return (
    <Base>
      <ProfileEditTemplate
        handleUpdateEmail={handleUpdateEmail}
        handleUploadFile={handleUploadFile}
        handleUpdateProfile={handleUpdateProfile}
        userProfile={user}
      />
    </Base>
  );
}
