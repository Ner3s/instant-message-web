import Link from 'next/link';
import {
  FiAtSign,
  FiBookOpen,
  FiCalendar,
  FiLock,
  FiUser
} from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import * as S from './styles';

function SignUpTemplate() {
  return (
    <S.Container>
      <S.Content>
        <h1>Register</h1>
        <S.Form>
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
          <Input
            name="confirm_password"
            iconAlign="left"
            placeholder="Password"
            showIconPassword
            icon={<FiLock size={22} />}
          />
          <Input
            name="password"
            iconAlign="left"
            placeholder="Password"
            showIconPassword
            icon={<FiLock size={22} />}
          />

          <Button appearance="primary">Register</Button>

          <Link href="/signin">
            <Button appearance="secondary">I have account</Button>
          </Link>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { SignUpTemplate };
