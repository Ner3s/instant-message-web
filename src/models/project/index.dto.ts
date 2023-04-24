import { IMemberDTO } from '../member/member.dto';

export interface IProjectDTO {
  uid: string;
  start_date: string;
  name: string;
  description: string;
  status: boolean;
  image_profile?: string;
  image_cover?: string;
  owner_id: string;
  members: IMemberDTO[];
  created_at: string;
  updated_at?: string;
}
