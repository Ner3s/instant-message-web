import { toast } from 'react-toastify';

import { IMemberDTO } from '@/models/member/member.dto';
import { remoteRemoveMember } from '@/services/project/remove-member';

interface IRemoveMember {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  uid: string;
  member: IMemberDTO;
}

/**
 *  Function is responsible remove member
 */
export async function removeMember({
  setIsLoading,
  uid,
  member
}: IRemoveMember) {
  try {
    setIsLoading(true);

    await remoteRemoveMember({ uid, removeMember: member });

    toast.success('You are no longer a member!');
  } catch (error: unknown) {
    toast.error('Error to remove member!');
    console.error(error);
  } finally {
    setIsLoading(false);
  }
}
