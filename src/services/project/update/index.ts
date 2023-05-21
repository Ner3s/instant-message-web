import { doc, updateDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IProjectDTO } from '@/models/project/project.dto';

interface IRemoteUpdateConnection {
  project: IProjectDTO;
}

async function remoteUpdateProject({ project }: IRemoteUpdateConnection) {
  const docRef = doc(firebaseDatabase, 'projects', String(project.uid));

  return await updateDoc(docRef, { ...project });
}

export { remoteUpdateProject };
