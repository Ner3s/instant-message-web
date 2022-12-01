import { SignUpTemplate } from '@/templates/SignUp';

import { useSignUp } from '@/hooks/use-sign-up';
import { useUploadFile } from '@/hooks/use-upload-file';

export default function SignIn() {
  const { handleSignUp, isLoading: isLoadingSignUp } = useSignUp();
  const { handleUploadFile, isLoading: isLoadingUploadFile } = useUploadFile();

  return (
    <SignUpTemplate
      handleUploadFile={handleUploadFile}
      handleSignUp={handleSignUp}
      isLoadingSignUp={isLoadingSignUp}
      isLoadingUploadFile={isLoadingUploadFile}
    />
  );
}
