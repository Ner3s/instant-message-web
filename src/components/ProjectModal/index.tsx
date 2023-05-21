import { FiUser } from 'react-icons/fi';

import * as S from './styles';

export interface ProjectModalProps {
  imageUrl?: string;
  name: string;
  description: string;
  startDate: string;
  handleGotoProject: () => void;
}

// TODO - RENAME TO USER CARD
function ProjectModal({
  imageUrl,
  name,
  description,
  startDate,
  handleGotoProject
}: ProjectModalProps) {
  return (
    <S.Container onClick={handleGotoProject} aria-label="Goto profile">
      <S.Content>
        <S.WrapperContent>
          {/* @TODO - REFACTOR THIS, FOR NEW COMPONENT RULE */}
          {imageUrl ? (
            <S.ImageProfile src={imageUrl} alt="User image profile" />
          ) : (
            <S.Circle>
              <FiUser size={32} color="fff" />
            </S.Circle>
          )}
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

export { ProjectModal };
