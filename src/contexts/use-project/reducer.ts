import { IProject } from '@/models/project';

export type TProjectAction = {
  type: 'global' | 'members' | 'myProjects';
  payload: IProject[];
};

export type TProjectReducer = {
  global: IProject[];
  members: IProject[];
  myProjects: IProject[];
};

export function reducer(
  state: TProjectReducer,
  action: TProjectAction
): TProjectReducer {
  switch (action.type) {
    case 'global':
      return { ...state, global: action.payload };
    case 'members':
      return { ...state, members: action.payload };
    case 'myProjects':
      return { ...state, myProjects: action.payload };
    default:
      return { global: [], members: [], myProjects: [] };
  }
}
