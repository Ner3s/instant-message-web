import { useRouter } from 'next/router';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ProjectModal } from '@/components/ProjectModal';
import { Spinner } from '@/components/Spinner';

import { TProjectModalDTO } from '@/models/project/project-modal.dto';
import theme from '@/styles/theme';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { dateFormatter } from '@/utils/helpers/format-date';

import * as S from './styles';

export interface ProjectsTemplateProps {
  projects: {
    myProjects: TProjectModalDTO[];
    global: TProjectModalDTO[];
    associate: TProjectModalDTO[];
  };
  isLoading: boolean;
}

function ProjectsTemplate({ projects, isLoading }: ProjectsTemplateProps) {
  const [typeProject, setTypeProject] = useState<
    'global' | 'myProjects' | 'associate'
  >('global');
  const [search, setSearch] = useState('');

  const router = useRouter();

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Header>
          <h1>Projects</h1>
          <Button
            txtColor={theme.colors.primary}
            bgColor={theme.colors.deepWhite}
            onClick={() => {
              router.push(ROUTE_LIST.PROJECT_CREATE);
            }}
          >
            Create
          </Button>
        </S.Header>
        <S.Content>
          <S.Filter>
            <S.WrapperInput>
              <Input
                icon={<FiSearch size={24} />}
                iconAlign="left"
                type="serach"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                placeholder="Search projects"
                name="search_project"
                margin={false}
              />
            </S.WrapperInput>
            <hr />
            <S.WrapperButtons>
              <S.RadioButton>
                <input
                  type="radio"
                  name="type"
                  value="global"
                  onChange={() => setTypeProject('global')}
                  checked={typeProject === 'global'}
                />
                <span>Global</span>
              </S.RadioButton>
              <S.RadioButton>
                <input
                  type="radio"
                  name="type"
                  value="myProjects"
                  onChange={() => setTypeProject('myProjects')}
                />
                <span>My Projects</span>
              </S.RadioButton>
              <S.RadioButton>
                <input
                  type="radio"
                  name="type"
                  value="associate"
                  onChange={() => setTypeProject('associate')}
                />
                <span>Associate</span>
              </S.RadioButton>
            </S.WrapperButtons>
          </S.Filter>
          {isLoading && (
            <S.WrapperSpinner>
              <Spinner color="#fff" />
            </S.WrapperSpinner>
          )}
          {!isLoading && (
            <S.WrapperProjects>
              {projects[typeProject]
                .filter((project) => {
                  if (search === '') return true;

                  return project.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                })
                .map((project) => (
                  <ProjectModal
                    key={project.uid}
                    name={project.name}
                    description={project.description}
                    startDate={
                      project.startDate &&
                      String(dateFormatter({ date: project.startDate }))
                    }
                    imageUrl={project.imageProfile}
                    handleGotoProject={() =>
                      router.push(
                        ROUTE_LIST.PROJECT_SLUG.replace(':slug', project.uid)
                      )
                    }
                  />
                ))}

              {projects[typeProject].filter((project) => {
                if (search === '') return true;

                return project.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              }).length === 0 && <span>Sorry don´t projects to show!</span>}
            </S.WrapperProjects>
          )}
        </S.Content>
      </S.InnerContainer>
    </S.Container>
  );
}

export { ProjectsTemplate };
