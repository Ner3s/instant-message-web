import { IProject } from '.';

export type TProjectModalDTO = Pick<
  IProject,
  'uid' | 'name' | 'description' | 'imageProfile' | 'startDate' | 'status'
>;
