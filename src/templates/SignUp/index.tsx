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
  const [file, setFile] = useState<File | null>(null);
  const [imageProfile, setImageProfile] = useState('');
  const router = useRouter();

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

    if (file) {
      handleUploadFile({ name: data.email, file }).then(async (response) => {
        console.log('Value form', data);
        console.log('Value response', response);

        await handleSignUp({ ...data, image_url: response as never });
      });

      return null;
    }

    handleSignUp({ ...data, image_url: null as never });
  }

  function handleInputFile(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        setImageProfile(reader.result as string);
      };
    } else {
      setImageProfile('');
      setFile(null);
    }
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
                placeholder="Image profile"
                image_url={imageProfile && imageProfile}
                icon={<FiCamera size={26} />}
                accept="image/*"
                data-testid="input-file"
                {...props}
                onChange={(e) => {
                  handleInputFile(e);
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
