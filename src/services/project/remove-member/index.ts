import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IMemberDTO } from '@/models/member/member.dto';

interface IRemoveMember {
  uid: string;
  removeMember: IMemberDTO;
}

async function remoteRemoveMember({ uid, removeMember }: IRemoveMember) {
  const docRef = doc(firebaseDatabase, 'projects', uid);
  const docSnap = await getDoc(docRef);

  const members = docSnap
    .data()
    ?.members?.filter(
      (member: IMemberDTO) => member.uid !== removeMember.uid
    ) as IMemberDTO[];

  return updateDoc(docRef, {
    ...docSnap.data(),
    members: members ?? []
  });
}

export { remoteRemoveMember };
