import { ProfileBadge } from '../ProfileBadge';

import * as S from './styles';

export interface ProjectCardProps {
  imageUrl?: string;
  name: string;
  description: string;
  startDate: string;
  handleGotoProject: () => void;
}

function ProjectCard({
  imageUrl,
  name,
  description,
  startDate,
  handleGotoProject
}: ProjectCardProps) {
  return (
    <S.Container onClick={handleGotoProject} aria-label="Goto profile">
      <S.Content>
        <S.WrapperContent>
          <ProfileBadge imageUrl={imageUrl} imageAlt="User image profile" />
          <S.WrapperText>
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
            <S.StartDate>{startDate}</S.StartDate>
          </S.WrapperText>
        </S.WrapperContent>
      </S.Content>
    </S.Container>
  );
}

export { ProjectCard };
