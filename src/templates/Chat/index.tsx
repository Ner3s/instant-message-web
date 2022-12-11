/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { FiArrowLeft, FiSend, FiUser } from 'react-icons/fi';

import { BalloonMessage } from '@/components/BalloonMessage';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { IUser, User } from '@/models/user';
import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

interface ChatTemplateProps {
  user?: IUser;
}

const mock: ChatTemplateProps = {
  user: new User(
    'userid',
    'name mock',
    'email@mock.com',
    'https://picsum.photos/200/300',
    '2000-01-01',
    'lorem ipsum description',
    new Date().toISOString(),
    new Date().toISOString()
  )
};

const WHITE_COLOR = '#fff';

function ChatTemplate({ user = mock.user }: ChatTemplateProps) {
  const router = useRouter();

  return (
    <S.Container>
      <S.NavBarUser>
        <S.WrapperArrowAndImage
          onClick={() => {
            router.back();
          }}
        >
          {/* @TODO - REFACTOR THIS */}
          <FiArrowLeft size={32} color={WHITE_COLOR} />
          {user?.imageUrl ? (
            <S.ImageProfile src={user.imageUrl} alt="User image profile" />
          ) : (
            <S.Circle>
              <FiUser size={32} color={WHITE_COLOR} />
            </S.Circle>
          )}
        </S.WrapperArrowAndImage>
        <S.UserName
          onClick={() => {
            router.push(
              ROUTE_LIST.PROFILE_SLUG.replace(':slug', `${user?.uid}`)
            );
          }}
        >
          {user?.name}
        </S.UserName>
      </S.NavBarUser>
      <S.Main>
        <h1>Mensagens</h1>
        <BalloonMessage side="LEFT">te enviei mensagem ontem</BalloonMessage>
        <BalloonMessage>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          alias ipsum at ducimus accusamus laboriosam voluptas, provident
          molestiae iste exercitationem sequi earum et. Itaque saepe velit minus
          ipsum soluta maxime?
        </BalloonMessage>
      </S.Main>
      <S.Form>
        <Input name="text_send" placeholder="Send message" />
        <Button>
          <FiSend />
        </Button>
      </S.Form>
    </S.Container>
  );
}

export { ChatTemplate };
