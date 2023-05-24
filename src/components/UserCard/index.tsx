import { ProfileBadge } from '../ProfileBadge';

import * as S from './styles';

export interface UserCardProps {
  imageUrl: string;
  name: string;
  description: string;
  handleGotoProfile: () => void;
}

function UserCard({
  imageUrl,
  name,
  description,
  handleGotoProfile
}: UserCardProps) {
  return (
    <S.Container onClick={handleGotoProfile} aria-label="Goto profile">
      <S.Content>
        <S.WrapperContent>
          <ProfileBadge imageUrl={imageUrl} imageAlt="User image profile" />
          <S.WrapperText>
            <S.Title>{name}</S.Title>
            <S.Description>{description}</S.Description>
          </S.WrapperText>
        </S.WrapperContent>
      </S.Content>
    </S.Container>
  );
}

export { UserCard };
