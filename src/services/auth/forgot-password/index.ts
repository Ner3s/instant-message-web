import { Auth, sendPasswordResetEmail } from 'firebase/auth';

interface IResetPasswordService {
  auth: Auth;
  email: string;
}

const remoteForgotPassword = async ({ auth, email }: IResetPasswordService) =>
  await sendPasswordResetEmail(auth, email);

export { remoteForgotPassword };
