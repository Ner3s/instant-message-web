import Link from 'next/link';
import { FiLock, FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import * as S from './styles';

function SignInTemplate() {
  return (
    <S.Container>
      <S.Title>Sign In</S.Title>
      <S.Content>
        <Input
          name="email"
          placeholder="E-mail"
          icon={<FiUser size={22} />}
          iconAlign="left"
          margin
        />
        <Input
          iconAlign="left"
          name="password"
          placeholder="Password"
          icon={<FiLock size={22} />}
          showIconPassword
          margin
        />
        <Button type="submit" containerStyles={{ margin: '1.2rem 0' }}>
          Sign In
        </Button>

        <Link href="/forgot">
          <S.LinkToForgot
            tabIndex={0}
            aria-label="link to forgot password"
            role="link"
          >
            Forgot password
          </S.LinkToForgot>
        </Link>

        <Link href="/signup">
          <Button
            aria-label="link to sign up"
            type="button"
            role="link"
            containerStyles={{ margin: '1.2rem 0' }}
            appearance="secondary"
          >
            Sign Up
          </Button>
        </Link>
      </S.Content>
    </S.Container>
  );
}

export { SignInTemplate };
