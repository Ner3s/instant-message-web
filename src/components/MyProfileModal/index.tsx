import { FiEdit, FiLogOut } from 'react-icons/fi';

import * as S from './styles';

export interface MyProfileModalProps {
  imageUrl: string;
  name: string;
  handleLogout: () => void;
  handleGotoProfile: () => void;
  handleGotoProfileEdit: () => void;
}

function MyProfileModal({
  imageUrl,
  name,
  handleLogout,
  handleGotoProfile,
  handleGotoProfileEdit
}: MyProfileModalProps) {
  return (
    <S.Container>
      <S.Content>
        <S.ProfileAreaClick
          aria-label="Goto profile"
          onClick={handleGotoProfile}
        >
          <S.ImageProfile src={imageUrl} alt="Your image profile" />
          <S.Title>{name}</S.Title>
        </S.ProfileAreaClick>
      </S.Content>
      <S.WrapperButtonActions>
        <S.ButtonAction
          aria-label="Goto edit profile"
          onClick={handleGotoProfileEdit}
        >
          <FiEdit size={26} />
          <span>Edit</span>
        </S.ButtonAction>
        <S.ButtonAction onClick={handleLogout}>
          <FiLogOut size={26} />
          <span>Logout</span>
        </S.ButtonAction>
      </S.WrapperButtonActions>
    </S.Container>
  );
}

export { MyProfileModal };
