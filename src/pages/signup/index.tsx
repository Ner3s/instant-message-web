import { SignUpTemplate } from '@/templates/SignUp';

import { useSignUp } from '@/hooks/use-sign-up';

export default function SignIn() {
  const { handleSignUp, isLoading } = useSignUp();

  return <SignUpTemplate handleSignUp={handleSignUp} isLoading={isLoading} />;
}
