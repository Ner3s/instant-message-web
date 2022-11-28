import { signInWithEmailAndPassword } from 'firebase/auth';

import { ISignInWithAuthDTO } from '@/models/sign-in.dto';

const remoteSignIn = async ({ auth, email, password }: ISignInWithAuthDTO) =>
  await signInWithEmailAndPassword(auth, email, password);

export { remoteSignIn };
