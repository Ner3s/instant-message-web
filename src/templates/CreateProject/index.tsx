/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useForm } from 'react-hook-form';
import {
  FiAtSign,
  FiCamera,
  FiCalendar,
  FiBookOpen,
  FiAlertCircle
} from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { FileInput } from '@/components/FileInput';
import { Input } from '@/components/Input';
import { Textarea } from '@/components/Textarea';

import { INITIAL_FORM_VALUES } from './form';
import { validationSchema } from './validation';

import { useFileInput } from '@/hooks/use-file-input';

import { CreateProject } from '@/models/project/create-project';
import { IProjectDTO } from '@/models/project/index.dto';
import { IUploadFile } from '@/models/upload-file';
import { uuidv4 } from '@firebase/util';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

const ICON_SIZE = 22;

interface IHandleUploadImg {
  key: string;
  value: File;
}

interface CreateProjectTemplateProps {
  handleUploadFile: (uploadFileData: IUploadFile) => Promise<string | null>;
  owner_id: string;
}

export function CreateProjectTemplate({
  handleUploadFile,
  owner_id
}: CreateProjectTemplateProps) {
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

  const handleUploadImg = async ({ key, value }: IHandleUploadImg) => {
    let urlImage = '';

    try {
      const response = await handleUploadFile({ name: uuidv4(), file: value });
      response && (urlImage = response);
    } catch (error) {
      toast.error(`Error uploading ${key}`);
    }

    return { [key]: urlImage };
  };

  const onSubmit = (formData: CreateProject) => {
    const data: Omit<IProjectDTO, 'uid'> = {
      ...formData,
      created_at: new Date().toISOString(),
      updated_at: undefined,
      members: [],
      owner_id
    };

    // coverFiles &&
    //   (data = {
    //     ...data,
    //     ...handleUploadImg({ key: 'image_cover', value: coverFiles[0] })
    //   });

    // profileFiles &&
    //   (data = {
    //     ...data,
    //     ...handleUploadImg({ key: 'image_profile', value: profileFiles[0] })
    //   });

    console.log(data);
  };

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
                  errorMessage={errors.name?.message}
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
                  errorMessage={errors.start_date?.message}
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
                  errorMessage={errors.description?.message}
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
              render={({ field }) => (
                <Checkbox
                  errorMessage={errors.status?.message}
                  checked={field.value || false}
                  label="Ativo"
                  {...field}
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
