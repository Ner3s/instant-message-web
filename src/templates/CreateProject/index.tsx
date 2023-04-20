/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FiAtSign,
  FiCamera,
  FiCalendar,
  FiBookOpen,
  FiAlertCircle
} from 'react-icons/fi';

import { Button } from '@/components/Button';
import { FileInput } from '@/components/FileInput';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

import { INITIAL_FORM_VALUES } from './form';
import { validationSchema } from './validation';

import { useFileInput } from '@/hooks/use-file-input';

import { CreateProject } from '@/models/project/create-project';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

const ICON_SIZE = 22;

export function CreateProjectTemplate() {
  const [status, setStatus] = useState(false);
  const {
    files: coverFiles,
    showImages: showCoverImage,
    handleFileInput: handleCoverFileInput
  } = useFileInput();
  const {
    files: profileFiles,
    showImages: showProfileImage,
    handleFileInput: handleProfileFileInput
  } = useFileInput();

  const {
    control,
    handleSubmit,
    formState: { errors }
    // getValues,
    // reset
  } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    resolver: joiResolver(validationSchema)
  });

  const onSubmit = (data: CreateProject) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>Create project</S.Title>
      </S.WrapperText>
      <S.WrapperForm>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperCoverFileInput>
            <Controller
              name="image_cover"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <FileInput
                  fileClassName="file-input"
                  placeholder="Image cover"
                  appearance="none"
                  className="cover"
                  image_url={showCoverImage[0]}
                  icon={<FiCamera size={26} />}
                  accept="image/*"
                  data-testid="input-file"
                  {...props}
                  onChange={(e) => {
                    handleCoverFileInput(e);
                    props.onChange(e);
                  }}
                />
              )}
            />
          </S.WrapperCoverFileInput>
          <S.WrapperProfileFileInput>
            <Controller
              name="image_profile"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <FileInput
                  placeholder="Image profile"
                  image_url={showProfileImage[0]}
                  icon={<FiCamera size={26} />}
                  accept="image/*"
                  data-testid="input-file"
                  {...props}
                  onChange={(e) => {
                    handleProfileFileInput(e);
                    props.onChange(e);
                  }}
                />
              )}
            />
          </S.WrapperProfileFileInput>
          <S.WrapperInputs>
            <Controller
              name="name"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <Input
                  placeholder="Project name"
                  iconAlign="left"
                  icon={<FiAtSign size={ICON_SIZE} />}
                  {...props}
                />
              )}
            />
            <S.Label aria-labelledby="start_date">Start date</S.Label>
            <Controller
              name="start_date"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <Input
                  id="start_date"
                  iconAlign="left"
                  placeholder="Birthdate"
                  type="date"
                  role="textbox"
                  containerStyles={{ marginTop: 0 }}
                  icon={<FiCalendar size={ICON_SIZE} />}
                  {...props}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <Textarea
                  placeholder="Give more information about your project, so that people can know more about it."
                  iconAlign="left"
                  icon={<FiBookOpen size={ICON_SIZE} />}
                  {...props}
                />
              )}
            />

            <S.WrapperStatus>
              Status:
              <FiAlertCircle size={ICON_SIZE} />
            </S.WrapperStatus>

            <Controller
              name="status"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <Input
                  placeholder="Ativo"
                  type="checkbox"
                  {...props}
                  checked={props.value}
                  onChange={(e) => props.onChange(e.target.checked)}
                />
              )}
            />
            <Button type="submit">Create</Button>
          </S.WrapperInputs>
        </S.Form>
      </S.WrapperForm>
    </S.Container>
  );
}
