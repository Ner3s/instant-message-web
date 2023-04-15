import { IProjectDTO } from './index.dto';

export type CreateProject = Omit<
  IProjectDTO,
  'uid' | 'created_at' | 'updated_at'
>;
