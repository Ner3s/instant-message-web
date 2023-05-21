import { IMember } from '../member';

export interface IProject {
  uid: string;
  startDate: string;
  name: string;
  description: string;
  status: boolean;
  imageProfile: string;
  imageCover: string;
  createdAt: string;
  updatedAt: string;
  ownerId: string;
  members: IMember[];
}

export class Project implements IProject {
  constructor(
    public uid: string,
    public startDate: string,
    public name: string,
    public description: string,
    public status: boolean,
    public imageProfile: string,
    public imageCover: string,
    public createdAt: string,
    public updatedAt: string,
    public ownerId: string,
    public members: IMember[]
  ) {}
}
