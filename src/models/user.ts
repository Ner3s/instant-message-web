export interface IUser {
  uid: string;
  name: string;
  email: string;
  imageUrl: string;
  birthDate: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export class User implements IUser {
  constructor(
    public uid: string,
    public name: string,
    public email: string,
    public imageUrl: string,
    public birthDate: string,
    public description: string,
    public createdAt: string,
    public updatedAt: string
  ) {}
}
