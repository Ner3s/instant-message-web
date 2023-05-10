import { useState } from 'react';

import { addMember } from './add-member';
import { removeMember } from './remove-member';

import { useProject } from '@/contexts/use-project';

import { IMemberDTO } from '@/models/member/member.dto';

interface IHandleMembers {
  uid: string;
  member: IMemberDTO;
}

function useMember() {
  const [isLoading, setIsLoading] = useState(false);
  const { currentProject, setCurrentProject } = useProject();

  const handleAddMember = async ({ uid, member }: IHandleMembers) => {
    await addMember({
      setIsLoading,
      uid,
      member,
      setCurrentProject
    });
  };

  const handleRemoveMember = async ({ uid, member }: IHandleMembers) => {
    await removeMember({
      setIsLoading,
      uid,
      member,
      currentProject,
      setCurrentProject
    });
  };

  return { isLoading, handleAddMember, handleRemoveMember };
}

export { useMember };
