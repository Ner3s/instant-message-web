/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';
import { FiArrowLeft, FiSend, FiUser } from 'react-icons/fi';

import { BalloonMessage } from '@/components/BalloonMessage';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { IFormSendMesage, INITIAL_FORM_VALUES } from './form';
import { validationSchema } from './validations';

import { IContact } from '@/models/contact';
import { IMessage } from '@/models/message';
import { ISendMessageDTO } from '@/models/send-message.dto';
import { IUser } from '@/models/user';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

export interface ChatTemplateProps {
  user: IUser;
  contact?: IContact;
  messages?: IMessage[];
  handleSendMessage: ({ text, senderId }: ISendMessageDTO) => void;
}

const WHITE_COLOR = '#fff';

function ChatTemplate({
  user,
  contact,
  messages,
  handleSendMessage
}: ChatTemplateProps) {
  const router = useRouter();

  const { control, reset, handleSubmit } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    resolver: joiResolver(validationSchema)
  });

  function onSubmit({ text }: IFormSendMesage) {
    handleSendMessage({ senderId: user.uid, text });
    reset();
  }

  return (
    <S.Container>
      <S.NavBarUser>
        <S.WrapperArrowAndImage
          aria-label="button to return contact page"
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
            <S.Circle aria-label="this icon represents the user image">
              <FiUser size={32} color={WHITE_COLOR} />
            </S.Circle>
          )}
        </S.WrapperArrowAndImage>
        <S.UserName
          aria-label="contact name, if clicked go to profile contact"
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
        {messages &&
          messages.map((message) => (
            <BalloonMessage
              key={message.uid}
              side={user.uid === message.senderId ? 'RIGHT' : 'LEFT'}
              dateTime={message.date}
            >
              {message.text}
            </BalloonMessage>
          ))}
      </S.Main>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="text"
          control={control}
          render={({ field: { ref, ...props } }) => (
            <Input placeholder="Send message" {...props} />
          )}
        />
        <Button type="submit">
          <FiSend />
        </Button>
      </S.Form>
    </S.Container>
  );
}

export { ChatTemplate };
