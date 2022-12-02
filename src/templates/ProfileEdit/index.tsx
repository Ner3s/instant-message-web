/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FiAtSign,
  FiBookOpen,
  FiCalendar,
  FiCamera,
  FiUser
} from 'react-icons/fi';

import { Button } from '@/components/Button';
import { FileInput } from '@/components/FileInput';
import { Input } from '@/components/Input';

import { INITIAL_FORM_VALUES, TProfileEditForm } from './form';
import { validationSchema } from './validation';

import { TProfileEdit } from '@/models/profile-edit';
import { IUploadFile } from '@/models/upload-file';
import { IUser } from '@/models/user';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

export interface IProfileEditTemplate {
  userProfile: Partial<IUser>;
  handleUploadFile: (uploadFileData: IUploadFile) => Promise<string | null>;
  handleUpdateProfile: (userData: TProfileEdit) => Promise<null | undefined>;
  handleUpdateEmail: (email: string) => Promise<void>;
  handlePasswordReset: (email: string) => Promise<void>;
  isLoadingPasswordReset: boolean;
  isLoading: boolean;
}

function ProfileEditTemplate({
  userProfile,
  handleUploadFile,
  handleUpdateEmail,
  handleUpdateProfile,
  handlePasswordReset,
  isLoading,
  isLoadingPasswordReset
}: IProfileEditTemplate) {
  const [file, setFile] = useState<File | null>(null);
  const [imageProfile, setImageProfile] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset
  } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    resolver: joiResolver(validationSchema),
    mode: 'onBlur'
  });

  // Reset form
  useEffect(() => {
    reset({
      name: userProfile.name,
      email: userProfile.email,
      birth_date: userProfile.birthDate,
      description: userProfile.description
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile]);

  function handleRenderImage(imageUrl: string, imageProfile: string) {
    return imageProfile ? imageProfile : imageUrl;
  }

  async function onSubmit(formData: TProfileEditForm) {
    const data: TProfileEdit = {
      ...formData,
      created_at: userProfile?.createdAt || '',
      updated_at: new Date().toISOString()
    };

    userProfile.email !== data.email && (await handleUpdateEmail(data.email));

    if (file) {
      handleUploadFile({ name: data.email, file }).then(async (response) => {
        await handleUpdateProfile({ ...data, image_url: response as never });
      });
    } else {
      handleUpdateProfile({ ...data, image_url: userProfile.imageUrl });
    }
  }

  // @TODO - Refactor this function
  function handleInputFile(e: React.ChangeEvent<HTMLInputElement>) {
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
        <h1>Profile Edit</h1>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="image_url"
            control={control}
            render={({ field: { ref, ...props } }) => (
              <FileInput
                fileClassName="file-input"
                placeholder="Image profile"
                image_url={handleRenderImage(
                  userProfile?.imageUrl || '',
                  imageProfile
                )}
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
          <Button type="submit" appearance="primary" isLoading={isLoading}>
            Save
          </Button>

          <Button
            appearance="secondary"
            type="button"
            isLoading={isLoadingPasswordReset}
            onClick={() => {
              handlePasswordReset(getValues('email'));
            }}
          >
            Change password
          </Button>
          {/* @TODO - Create delete profile and data */}
          <Button type="button" appearance="danger">
            Delete my profile
          </Button>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export { ProfileEditTemplate };
