import { doc, setDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IProjectDTO } from '@/models/project/project.dto';
import { uuidv4 } from '@firebase/util';

interface ICreateProjectService {
  data: IProjectDTO;
}

async function remoteCreateProject({ data }: ICreateProjectService) {
  const uuid = uuidv4();
  const docRef = doc(firebaseDatabase, 'projects', uuid);
  return await setDoc(docRef, data), { uuid };
}

export { remoteCreateProject };
