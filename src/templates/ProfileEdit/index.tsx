import Image from 'next/image';
import { FiAtSign, FiBookOpen, FiCalendar, FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import * as S from './styles';

interface IProfileEditTemplate {
  name: string;
  email: string;
  birthDate: string;
  description: string;
  imageUrl: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProfileEditTemplate({ imageUrl }: Partial<IProfileEditTemplate>) {
  return (
    <S.Container>
      <S.Content>
        <h1>Profile EDIT</h1>
        <S.Form>
          <S.Circle>
            {imageUrl ? (
              <Image src={`${imageUrl}`} alt="Profile Picture" />
            ) : (
              <FiUser size={60} color="white" />
            )}
          </S.Circle>
          <Input
            name="email"
            placeholder="E-mail"
            iconAlign="left"
            icon={<FiAtSign size={22} />}
          />
          <Input
            name="name"
            placeholder="Name"
            iconAlign="left"
            icon={<FiUser size={22} />}
          />
          <Input
            name="birth_date"
            iconAlign="left"
            placeholder="Birthdate"
            icon={<FiCalendar size={22} />}
          />
          <Input
            name="description"
            iconAlign="left"
            placeholder="Description"
            icon={<FiBookOpen size={22} />}
          />

          <Button appearance="primary">Save</Button>

          <Button appearance="secondary">Change password</Button>

          <Button appearance="danger">Delete my profile</Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { ProfileEditTemplate };
