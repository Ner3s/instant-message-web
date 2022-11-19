import Link from 'next/link';
import { FiLock, FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import * as S from './styles';

function SignInTemplate() {
  return (
    <S.Container>
      <S.Content>
        <h1>Sign In</h1>
        <S.Form>
          <Input
            name="name"
            placeholder="Name"
            iconAlign="left"
            icon={<FiUser size={22} />}
          />
          <Input
            name="password"
            iconAlign="left"
            placeholder="Password"
            showIconPassword
            icon={<FiLock size={22} />}
          />

          <Button appearance="primary">Sign In</Button>

          <Link href="/forgot">Forgot password?</Link>

          <Link href="/signup">
            <Button appearance="secondary">Register</Button>
          </Link>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { SignInTemplate };
