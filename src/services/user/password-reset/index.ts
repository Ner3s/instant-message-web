import { Auth, sendPasswordResetEmail } from 'firebase/auth';

interface IPasswordReset {
  auth: Auth;
  email: string;
}

async function remotePasswordReset({ auth, email }: IPasswordReset) {
  return await sendPasswordResetEmail(auth, email);
}

export { remotePasswordReset };
