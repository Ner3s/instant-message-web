import { collection, getDocs } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';

async function remoteGetAllProjects() {
  const projectsRef = collection(firebaseDatabase, 'projects');

  return await getDocs(projectsRef);
}

export { remoteGetAllProjects };
