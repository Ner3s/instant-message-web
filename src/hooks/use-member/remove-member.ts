import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { IMemberDTO } from '@/models/member/member.dto';
import { IProject } from '@/models/project';
import { remoteRemoveMember } from '@/services/project/remove-member';

interface IRemoveMember {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  uid: string;
  member: IMemberDTO;
  currentProject: IProject;
  setCurrentProject: Dispatch<SetStateAction<IProject>>;
}

/**
 *  Function is responsible remove member
 */
export async function removeMember({
  setIsLoading,
  uid,
  member,
  setCurrentProject
}: IRemoveMember) {
  try {
    setIsLoading(true);

    await remoteRemoveMember({ uid, removeMember: member });

    setCurrentProject((prevState) => {
      const members = prevState.members.filter(
        (prevMember) => member.uid !== prevMember.uid
      );

      return {
        ...prevState,
        members
      };
    });

    toast.success('You are no longer a member!');
  } catch (error: unknown) {
    toast.error('Error to remove member!');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}
