import { updateEmail, User } from 'firebase/auth';

interface IRemoteUpdateEmail {
  currentUser: User;
  newEmail: string;
}

async function remoteUpdateEmail({
  currentUser,
  newEmail
}: IRemoteUpdateEmail) {
  await updateEmail(currentUser, newEmail);
}

export { remoteUpdateEmail };
