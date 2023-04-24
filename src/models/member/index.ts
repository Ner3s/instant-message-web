export interface IMember {
  uid: string;
  name: string;
  imageUrl: string;
}

export class Member implements IMember {
  constructor(
    public uid: string,
    public name: string,
    public imageUrl: string
  ) {}
}
