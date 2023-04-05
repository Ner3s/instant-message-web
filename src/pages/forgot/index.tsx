import { ForgotTemplate } from '@/templates/Forgot';

import { useForgotPassword } from '@/hooks/use-forgot-password';

export default function Forgot() {
  const { handleForgotPassword, isLoading } = useForgotPassword();

  return (
    <ForgotTemplate
      isLoading={isLoading}
      handleForgotPassword={handleForgotPassword}
    />
  );
}
