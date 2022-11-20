import { useRouter } from 'next/router';
import { FiEdit, FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';

import * as S from './styles';

interface IProfileTemplate {
  name: string;
  email: string;
  birthDate: string;
  description: string;
  imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProfileTemplate({
  name = 'Alan',
  email = 'alan@mail.com',
  birthDate = '2000-01-01',
  description = `Lorem ipsum dolor sit
    amet, consectetur adipiscing elit. Morbi volutpat fermentum viverra.
    Pellentesque sit amet justo urna. Maecenas auctor sodales mauris, a
    laoreet purus posuere in. Ut nec ultricies dui. Vestibulum bibendum, nisl id maximus interdum, neque odio molestie mauris, eget viverra massa nulla in leo. Quisque posuere urna tellus, quis varius nisl luctus quis. Phasellus aliquet id velit eget tincidunt. Aliquam aliquam luctus ultricies. Fusce nec mollis diam.`,
  imageUrl = 'http://lorempixel.com.br/400/400'
}: Partial<IProfileTemplate>) {
  const router = useRouter();

  return (
    <S.Container>
      <S.Content>
        <S.TitlePage>Profile</S.TitlePage>
        <S.Form>
          <S.Circle>
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`${imageUrl}`} alt="Profile Picture" />
            ) : (
              <FiUser size={60} color="white" />
            )}
          </S.Circle>
          <S.Name>{name}</S.Name>
          <S.BirthDate>{birthDate}</S.BirthDate>
          <S.Email>{email}</S.Email>
          <S.Description>{description}</S.Description>

          <Button
            appearance="primary"
            onClick={() => {
              router.push('/profile/ID/edit');
            }}
          >
            <FiEdit size={15} /> Edit
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { ProfileTemplate };
