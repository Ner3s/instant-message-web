import { IProjectDTO } from './project.dto';

export type CreateProject = Omit<
  IProjectDTO,
  'uid' | 'created_at' | 'updated_at' | 'owner_id' | 'members'
>;
