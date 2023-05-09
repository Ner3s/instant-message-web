import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react';

import { IProject } from '@/models/project';

interface IProjectContextData {
  currentProject: IProject;
  setCurrentProject: Dispatch<SetStateAction<IProject>>;
}

interface IProjectProvider {
  children: ReactNode;
}

const ProjectContext = createContext<IProjectContextData>(
  {} as IProjectContextData
);

function ProjectProvider({ children }: IProjectProvider) {
  const [currentProject, setCurrentProject] = useState<IProject>(
    {} as IProject
  );

  return (
    <ProjectContext.Provider value={{ currentProject, setCurrentProject }}>
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
