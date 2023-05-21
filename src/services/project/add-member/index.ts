import { doc, getDoc, updateDoc } from 'firebase/firestore';

import { firebaseDatabase } from '@/configs/firebase';
import { IMemberDTO } from '@/models/member/member.dto';

interface IAddMember {
  uid: string;
  addMember: IMemberDTO;
}

async function remoteAddMember({ uid, addMember }: IAddMember) {
  const docRef = doc(firebaseDatabase, 'projects', uid);
  const docSnap = await getDoc(docRef);
  const members = docSnap.data()?.members as IMemberDTO[];

  if (members.length === 0) {
    return await updateDoc(docRef, {
      ...docSnap.data(),
      members: [addMember]
    });
  }

  !members.map((member) => member.uid).includes(addMember.uid) &&
    members.push(addMember);

  return await updateDoc(docRef, {
    ...docSnap.data(),
    members: members
  });
}

export { remoteAddMember };
