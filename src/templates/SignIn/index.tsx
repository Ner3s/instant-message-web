import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLock, FiUser } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { ROUTE_LIST } from '@/utils/constants/route-list';

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
              router.push(ROUTE_LIST.USERS);
            }}
          >
            Sign In
          </Button>

          <Link href={ROUTE_LIST.FORGOT}>Forgot password?</Link>

          <Button
            appearance="secondary"
            onClick={() => {
              router.push(ROUTE_LIST.SIGN_UP);
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
