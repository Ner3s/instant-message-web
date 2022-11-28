import { SignInTemplate } from '@/templates/SignIn';

import { useSignIn } from '@/hooks/use-sign-in';

export default function SignIn() {
  const { handleSignIn, isLoading } = useSignIn();

  return <SignInTemplate onSubmit={handleSignIn} isLoading={isLoading} />;
}
