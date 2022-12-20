/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from 'next/link';
import { useForm, Controller } from 'react-hook-form';
import { FiAtSign } from 'react-icons/fi';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

import { INITIAL_FORM_VALUES } from './form';
import { validationSchema } from './validations';

import { IForgotPassword } from '@/models/forgot-password';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

export interface ForgotTemplateProps {
  handleForgotPassword: (data: IForgotPassword) => void;
  isLoading: boolean;
}

function ForgotTemplate({
  handleForgotPassword,
  isLoading
}: ForgotTemplateProps) {
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
        <h1>Forgot Password</h1>
        <S.Form onSubmit={handleSubmit(handleForgotPassword)}>
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

          <Button type="submit" appearance="primary" isLoading={isLoading}>
            Send Reset Password To Email
          </Button>

          <Link href={ROUTE_LIST.SIGN_IN}>I remember my account password!</Link>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { ForgotTemplate };
