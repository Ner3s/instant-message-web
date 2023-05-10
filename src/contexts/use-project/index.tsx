import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useReducer,
  useState
} from 'react';

import { reducer, TProjectAction, TProjectReducer } from './reducer';

import { IProject } from '@/models/project';

interface IProjectContextData {
  currentProject: IProject;
  setCurrentProject: Dispatch<SetStateAction<IProject>>;
  projects: TProjectReducer;
  dispatchProjects: Dispatch<TProjectAction>;
}

interface IProjectProvider {
  children: ReactNode;
}

const ProjectContext = createContext<IProjectContextData>(
  {} as IProjectContextData
);

const initialProjectState: TProjectReducer = {
  global: [],
  myProjects: [],
  members: []
};

function ProjectProvider({ children }: IProjectProvider) {
  const [currentProject, setCurrentProject] = useState<IProject>(
    {} as IProject
  );
  const [projects, dispatchProjects] = useReducer(reducer, initialProjectState);

  return (
    <ProjectContext.Provider
      value={{ currentProject, setCurrentProject, projects, dispatchProjects }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

function useProject() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error('useProject must be used within an ProjectProvider');
  }

  return context;
}

export { ProjectProvider, useProject };
