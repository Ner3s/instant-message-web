import { Base } from '@/components/Base';

import { ProfileEditTemplate } from '@/templates/ProfileEdit';

import { useAuth } from '@/contexts/use-auth';

import { usePasswordReset } from '@/hooks/use-password-reset';
import { useUpdateUserProfile } from '@/hooks/use-update-user-profile';
import { useUploadFile } from '@/hooks/use-upload-file';

export default function ProfileEdit() {
  const { user } = useAuth();

  const { handleUploadFile, isLoading: isLoadingUploadFile } = useUploadFile();
  const {
    handleUpdateEmail,
    handleUpdateProfile,
    isLoading: isLoadingUpdateUserProfile
  } = useUpdateUserProfile();
  const { handlePasswordReset, isLoading: isLoadingPasswordReset } =
    usePasswordReset();

  return (
    <Base>
      <ProfileEditTemplate
        handleUpdateEmail={handleUpdateEmail}
        handleUploadFile={handleUploadFile}
        handleUpdateProfile={handleUpdateProfile}
        handlePasswordReset={handlePasswordReset}
        isLoadingPasswordReset={isLoadingPasswordReset}
        userProfile={user}
        isLoading={isLoadingUploadFile || isLoadingUpdateUserProfile}
      />
    </Base>
  );
}
