import { createUserWithEmailAndPassword } from 'firebase/auth';

import { ISignUpWithAuthDTO } from '@/models/sign-up.dto';

const remoteSignUp = async ({ auth, email, password }: ISignUpWithAuthDTO) =>
  await createUserWithEmailAndPassword(auth, email, password);

export { remoteSignUp };
