/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { FiAtSign, FiLock } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { INITIAL_FORM_VALUES } from './form';
import { validationSchema } from './validations';

import { TSignInDTO } from '@/models/sign-in.dto';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

export interface SignInTemplateProps {
  onSubmit: (data: TSignInDTO) => void;
  isLoading: boolean;
}

function SignInTemplate({ onSubmit, isLoading }: SignInTemplateProps) {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    resolver: joiResolver(validationSchema)
  });

  return (
    <S.Container>
      <S.Content>
        <h1>Sign In</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                placeholder="E-mail"
                iconAlign="left"
                role="textbox"
                icon={<FiAtSign size={22} />}
                {...props}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                iconAlign="left"
                placeholder="Password"
                role="textbox"
                showIconPassword
                icon={<FiLock size={22} />}
                {...props}
                errorMessage={errors.password?.message}
              />
            )}
          />

          <Button type="submit" appearance="primary" isLoading={isLoading}>
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
