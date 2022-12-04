/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FiAtSign,
  FiBookOpen,
  FiCalendar,
  FiCamera,
  FiLock,
  FiUser
} from 'react-icons/fi';

import { Button } from '@/components/Button';
import { FileInput } from '@/components/FileInput';
import { Input } from '@/components/Input';

import { INITIAL_FORM_VALUES, TSignUpForm } from './form';
import { validationSchema } from './validations';

import { useFileInput } from '@/hooks/use-file-input';

import { ISignUpDTO } from '@/models/sign-up.dto';
import { IUploadFile } from '@/models/upload-file';
import { ROUTE_LIST } from '@/utils/constants/route-list';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

export interface SignUpTemplateProps {
  handleSignUp: (signUpData: ISignUpDTO) => Promise<void>;
  handleUploadFile: (uploadFileData: IUploadFile) => Promise<string | null>;
  isLoadingSignUp: boolean;
  isLoadingUploadFile: boolean;
}

function SignUpTemplate({
  handleSignUp,
  isLoadingSignUp,
  handleUploadFile,
  isLoadingUploadFile
}: SignUpTemplateProps) {
  const router = useRouter();

  const { handleFileInput, showImages, files } = useFileInput();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    resolver: joiResolver(validationSchema)
  });

  function onSubmit(formData: TSignUpForm) {
    const data: ISignUpDTO = {
      ...formData,
      created_at: new Date().toISOString(),
      updated_at: null
    };

    if (files) {
      handleUploadFile({ name: data.email, file: files[0] }).then(
        async (response) => {
          await handleSignUp({ ...data, image_url: response as never });
        }
      );

      return null;
    }

    handleSignUp({ ...data, image_url: null as never });
  }

  return (
    <S.Container>
      <S.Content>
        <h1>Register</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="image_url"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <FileInput
                fileClassName="file-input"
                placeholder="Image profile"
                image_url={showImages && showImages[0]}
                icon={<FiCamera size={26} />}
                accept="image/*"
                data-testid="input-file"
                {...props}
                onChange={(e) => {
                  handleFileInput(e);
                  props.onChange(e);
                }}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                placeholder="E-mail"
                iconAlign="left"
                role="textbox"
                icon={<FiAtSign size={22} />}
                errorMessage={errors.email?.message}
                {...props}
              />
            )}
          />
          <Controller
            name="name"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                placeholder="Name"
                iconAlign="left"
                role="textbox"
                icon={<FiUser size={22} />}
                errorMessage={errors.name?.message}
                {...props}
              />
            )}
          />
          <Controller
            name="birth_date"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                iconAlign="left"
                placeholder="Birthdate"
                type="date"
                role="textbox"
                icon={<FiCalendar size={22} />}
                errorMessage={errors.birth_date?.message}
                {...props}
              />
            )}
          />

          <Controller
            name="description"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                iconAlign="left"
                placeholder="Description"
                role="textbox"
                icon={<FiBookOpen size={22} />}
                errorMessage={errors.description?.message}
                {...props}
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
                errorMessage={errors.password?.message}
                {...props}
              />
            )}
          />
          <Controller
            name="confirm_password"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <Input
                iconAlign="left"
                placeholder="Confirm password"
                role="textbox"
                showIconPassword
                icon={<FiLock size={22} />}
                errorMessage={errors.confirm_password?.message}
                {...props}
              />
            )}
          />

          <Button
            type="submit"
            appearance="primary"
            isLoading={isLoadingSignUp || isLoadingUploadFile}
          >
            Register
          </Button>

          <Button
            appearance="secondary"
            onClick={() => {
              router.push(ROUTE_LIST.SIGN_IN);
            }}
          >
            I have account
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { SignUpTemplate };
