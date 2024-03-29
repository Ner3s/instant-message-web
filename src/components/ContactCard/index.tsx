import { FiUser } from 'react-icons/fi';

import * as S from './styles';

export interface ContactCardProps {
  imageUrl?: string;
  name: string;
  lastMessage?: string;
  handleGoToChat: () => void;
}

function ContactCard({
  imageUrl,
  name,
  lastMessage,
  handleGoToChat
}: ContactCardProps) {
  return (
    <S.Container onClick={handleGoToChat} aria-label="contact card">
      <S.Content>
        <S.WrapperContent>
          {imageUrl ? (
            <S.ImageProfile src={imageUrl} alt="The contact profile image" />
          ) : (
            <S.Circle aria-label="The contact icon is shown when the user doesn't have a profile image">
              <FiUser size={32} color="fff" />
            </S.Circle>
          )}
          <S.WrapperText>
            <S.Title>{name}</S.Title>
            <S.Description>{lastMessage}</S.Description>
          </S.WrapperText>
        </S.WrapperContent>
      </S.Content>
    </S.Container>
  );
}

export { ContactCard };
