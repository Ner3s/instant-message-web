import { toast } from 'react-toastify';

import { IMemberDTO } from '@/models/member/member.dto';
import { remoteAddMember } from '@/services/project/add-member';

interface IAddMember {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  uid: string;
  member: IMemberDTO;
}

/**
 *  Function is responsible add member
 */
export async function addMember({ setIsLoading, uid, member }: IAddMember) {
  try {
    setIsLoading(true);

    await remoteAddMember({ uid, addMember: member });

    toast.success('You have become a member!');
  } catch (error: unknown) {
    toast.error('Error to add member!');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}
