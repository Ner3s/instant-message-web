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
          <S.ImageProfile src={imageUrl} alt="User image profile" />
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
