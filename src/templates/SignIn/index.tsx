import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLock, FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import * as S from './styles';

function SignInTemplate() {
  const router = useRouter();

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

          <Button
            appearance="primary"
            onClick={() => {
              router.push('/profile');
            }}
          >
            Sign In
          </Button>

          <Link href="/forgot">Forgot password?</Link>

          <Button
            appearance="secondary"
            onClick={() => {
              router.push('/signup');
            }}
          >
            Register
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { SignInTemplate };
