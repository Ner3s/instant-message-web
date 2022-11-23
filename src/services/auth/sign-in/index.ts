import { Auth, signInWithEmailAndPassword } from 'firebase/auth';

interface ISignInService {
  auth: Auth;
  email: string;
  password: string;
}

const remoteSignIn = async ({ auth, email, password }: ISignInService) =>
  await signInWithEmailAndPassword(auth, email, password);

export { remoteSignIn };
