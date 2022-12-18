/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { FiArrowLeft, FiSend, FiUser } from 'react-icons/fi';

import { BalloonMessage } from '@/components/BalloonMessage';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { IContact } from '@/models/contact';
import { IMessage } from '@/models/message';
import { ROUTE_LIST } from '@/utils/constants/route-list';

import * as S from './styles';

interface ChatTemplateProps {
  contact?: IContact;
  messages?: IMessage[];
}

const WHITE_COLOR = '#fff';

function ChatTemplate({ contact }: ChatTemplateProps) {
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
          {contact?.userInfo?.imageUrl ? (
            <S.ImageProfile
              src={contact?.userInfo?.imageUrl}
              alt="User image profile"
            />
          ) : (
            <S.Circle>
              <FiUser size={32} color={WHITE_COLOR} />
            </S.Circle>
          )}
        </S.WrapperArrowAndImage>
        <S.UserName
          onClick={() => {
            router.push(
              ROUTE_LIST.PROFILE_SLUG.replace(
                ':slug',
                `${contact?.userInfo?.uid}`
              )
            );
          }}
        >
          {contact?.userInfo?.name}
        </S.UserName>
      </S.NavBarUser>
      <S.Main>
        <BalloonMessage side="LEFT" dateTime={new Date().toISOString()}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
        </BalloonMessage>
        <BalloonMessage>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          alias ipsum at ducimus accusamus laboriosam voluptas, provident
          molestiae iste exercitationem sequi earum et. Itaque saepe velit minus
          ipsum soluta maxime?
        </BalloonMessage>
      </S.Main>
      <S.Form>
        <Input name="text_send" placeholder="Send message" />
        <Button type="submit">
          <FiSend />
        </Button>
      </S.Form>
    </S.Container>
  );
}

export { ChatTemplate };
