import { FiUser } from 'react-icons/fi';

import * as S from './styles';

export interface UserModalProps {
  imageUrl: string;
  name: string;
  description: string;
  handleGotoProfile: () => void;
}

function UserModal({
  imageUrl,
  name,
  description,
  handleGotoProfile
}: UserModalProps) {
  return (
    <S.Container onClick={handleGotoProfile} aria-label="Goto profile">
      <S.Content>
        <S.WrapperContent>
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
          </S.WrapperText>
        </S.WrapperContent>
      </S.Content>
    </S.Container>
  );
}

export { UserModal };
