import { IProjectDTO } from './project.dto';

export type UpdateProject = Pick<
  IProjectDTO,
  | 'description'
  | 'image_cover'
  | 'image_profile'
  | 'name'
  | 'start_date'
  | 'status'
>;
