import { useState } from 'react';

import { addMember } from './add-member';
import { removeMember } from './remove-member';

import { IMemberDTO } from '@/models/member/member.dto';

interface IHandleMembers {
  uid: string;
  member: IMemberDTO;
}

function useMember() {
  const [isLoading, setIsLoading] = useState(false);

  const handleAddMember = async ({ uid, member }: IHandleMembers) => {
    console.log('dados do add', uid, member);
    await addMember({ setIsLoading, uid, member });
  };

  const handleRemoveMember = async ({ uid, member }: IHandleMembers) => {
    await removeMember({ setIsLoading, uid, member });
  };

  return { isLoading, handleAddMember, handleRemoveMember };
}

export { useMember };
