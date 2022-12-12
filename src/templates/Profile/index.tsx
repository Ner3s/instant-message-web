import { useRouter } from 'next/router';
import { FiEdit, FiUser, FiMessageCircle, FiLogOut } from 'react-icons/fi';

import { Button } from '@/components/Button';

import { useAuth } from '@/contexts/use-auth';

import { IUser } from '@/models/user';
import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

export interface ProfileTemplateProps {
  name: string;
  birthDate: string;
  description: string;
  imageUrl: string;
  uid?: string;
  myAccount?: boolean;
  isLoading: boolean;
  handleCreateConnection?: (user: IUser) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProfileTemplate({
  name,
  birthDate,
  description,
  imageUrl,
  uid,
  isLoading,
  handleCreateConnection,
  myAccount = false
}: Partial<ProfileTemplateProps>) {
  const router = useRouter();

  const { handleClearSession } = useAuth();

  return (
    <S.Container>
      <S.Content>
        <S.TitlePage>Profile</S.TitlePage>
        <S.Form>
          <S.Circle>
            {imageUrl ? (
              <S.ImageProfile src={`${imageUrl}`} alt="Profile Picture" />
            ) : (
              <FiUser size={48} color="white" />
            )}
          </S.Circle>
          <S.Name>{name}</S.Name>
          <S.BirthDate>{birthDate}</S.BirthDate>
          <S.Description>{description}</S.Description>
          {myAccount ? (
            <>
              <Button
                appearance="primary"
                onClick={() => {
                  router.push(ROUTE_LIST.PROFILE_EDIT);
                }}
              >
                <FiEdit size={15} /> Edit
              </Button>
              <S.Logout role="button" onClick={() => handleClearSession()}>
                <FiLogOut size={15} /> Logout
              </S.Logout>
            </>
          ) : (
            <Button
              appearance="primary"
              onClick={() => {
                handleCreateConnection &&
                  handleCreateConnection({ uid, name, imageUrl } as never);
              }}
              isLoading={isLoading}
            >
              Send message <FiMessageCircle size={15} />
            </Button>
          )}
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { ProfileTemplate };
