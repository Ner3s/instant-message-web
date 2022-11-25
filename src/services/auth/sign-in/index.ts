import { signInWithEmailAndPassword } from 'firebase/auth';

import { ISignInDTO } from '@/models/sign-in.dto';

const remoteSignIn = async ({ auth, email, password }: ISignInDTO) =>
  await signInWithEmailAndPassword(auth, email, password);

export { remoteSignIn };
