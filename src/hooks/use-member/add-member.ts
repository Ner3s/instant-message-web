import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

import { IMember } from '@/models/member';
import { IMemberDTO } from '@/models/member/member.dto';
import { IProject } from '@/models/project';
import { remoteAddMember } from '@/services/project/add-member';
import { recursiveToCamel } from '@/utils/helpers/camelize';

interface IAddMember {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  uid: string;
  member: IMemberDTO;
  setCurrentProject: Dispatch<SetStateAction<IProject>>;
}

/**
 *  Function is responsible add member
 */
export async function addMember({
  setIsLoading,
  uid,
  member,
  setCurrentProject
}: IAddMember) {
  try {
    setIsLoading(true);

    await remoteAddMember({ uid, addMember: member });

    setCurrentProject((prevState) => {
      return {
        ...prevState,
        members: [...prevState.members, recursiveToCamel(member) as IMember]
      };
    });

    toast.success('You have become a member!');
  } catch (error: unknown) {
    toast.error('Error to add member!');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}
