/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FiAtSign,
  FiCamera,
  FiCalendar,
  FiBookOpen,
  FiAlertCircle,
  FiXCircle
} from 'react-icons/fi';
import { toast } from 'react-toastify';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { FileInput } from '@/components/FileInput';
import { Input } from '@/components/Input';
import { ProfileBadge } from '@/components/ProfileBadge';
import { Textarea } from '@/components/Textarea';

import { validationSchema } from './validation';

import { useFileInput } from '@/hooks/use-file-input';

import { IMemberDTO } from '@/models/member/member.dto';
import { IProject } from '@/models/project';
import { CreateProject } from '@/models/project/create-project';
import { IProjectDTO } from '@/models/project/project.dto';
import { UpdateProject } from '@/models/project/update-project';
import { IUploadFile } from '@/models/upload-file';
import { convertDateToUsFormatter } from '@/utils/helpers/convert-date-to-us-formatter';
import { getUidImageProject } from '@/utils/helpers/get-uid-image-project';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

const ICON_SIZE = 22;

interface IHandleUploadImg {
  key: string;
  name: string;
  value: File;
}

export interface ProjectEditTemplateProps {
  handleUploadFile: (uploadFileData: IUploadFile) => Promise<string | null>;
  isLoading: boolean;
  handleUpdateProject: ({ project }: { project: IProjectDTO }) => void;
  projectData: IProject;
}

export function ProjectEditTemplate({
  handleUploadFile,
  isLoading,
  handleUpdateProject,
  projectData
}: ProjectEditTemplateProps) {
  const [members, setMembers] = useState<IMemberDTO[]>(
    projectData.members?.map(
      (member) =>
        ({
          uid: member.uid,
          name: member.name,
          image_url: member.imageUrl
        } ?? [])
    )
  );

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
  } = useForm({
    defaultValues: {
      name: projectData.name,
      description: projectData.description,
      start_date: String(convertDateToUsFormatter(projectData.startDate)),
      status: projectData.status
    } as UpdateProject,
    resolver: joiResolver(validationSchema)
  });

  const handleUploadImg = async ({ key, value, name }: IHandleUploadImg) => {
    let urlImage = '';

    try {
      const response = await handleUploadFile({ name, file: value });
      response && (urlImage = response);
    } catch (error) {
      toast.error(`Error uploading ${key}`);
    }

    return { [key]: urlImage };
  };

  function handleRenderImage(imageUrl: string, imageFromInput: string) {
    return imageFromInput ? imageFromInput : imageUrl;
  }

  const onSubmit = async (formData: CreateProject) => {
    let data: IProjectDTO = {
      ...formData,
      updated_at: new Date().toISOString(),
      created_at: projectData.createdAt,
      members,
      owner_id: projectData.ownerId,
      image_cover: projectData.imageCover,
      image_profile: projectData.imageProfile,
      uid: projectData.uid
    };

    coverFiles &&
      (data = {
        ...data,
        ...(await handleUploadImg({
          key: 'image_cover',
          value: coverFiles[0],
          name: getUidImageProject(String(projectData.imageCover))
        }))
      });

    profileFiles &&
      (data = {
        ...data,
        ...(await handleUploadImg({
          key: 'image_profile',
          value: profileFiles[0],
          name: getUidImageProject(String(projectData.imageProfile))
        }))
      });

    handleUpdateProject({ project: data });
  };

  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>Edit project</S.Title>
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
                  image_url={handleRenderImage(
                    projectData.imageCover || '',
                    showCoverImage[0]
                  )}
                  icon={<FiCamera size={26} />}
                  accept="image/*"
                  data-testid="image_cover"
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
                  image_url={handleRenderImage(
                    projectData.imageProfile || '',
                    showProfileImage[0]
                  )}
                  icon={<FiCamera size={26} />}
                  accept="image/*"
                  data-testid="image_profile"
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
                  placeholder="Start date"
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
                  data-testid="description"
                  errorMessage={errors.description?.message}
                  icon={<FiBookOpen size={ICON_SIZE} />}
                  {...props}
                />
              )}
            />

            <S.WrapperTitle>
              Status:
              {/* @TODO - CREATE TOOLTIP FOR DESCRIBE THIS  */}
              <FiAlertCircle size={ICON_SIZE} />
            </S.WrapperTitle>

            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <Checkbox
                  errorMessage={errors.status?.message}
                  checked={field.value || false}
                  label="Active"
                  {...field}
                />
              )}
            />

            <S.WrapperMembers>
              <S.WrapperTitle>Members: </S.WrapperTitle>
              <S.DGrid>
                {members?.map((member, index) => (
                  <S.WrapperMember key={member.uid}>
                    <ProfileBadge
                      imageUrl={member.image_url}
                      width="6rem"
                      height="6rem"
                      iconSize={24}
                    />
                    <S.Name>{member.name}</S.Name>
                    <S.RemoveMemberButton
                      type="button"
                      onClick={() => {
                        const newMembers = members.filter(
                          (_, i) => i !== index
                        );
                        setMembers(newMembers);
                      }}
                    >
                      <FiXCircle size={ICON_SIZE} />
                    </S.RemoveMemberButton>
                  </S.WrapperMember>
                ))}
                {members?.length === 0 && (
                  <span>This project dont have member</span>
                )}
              </S.DGrid>
            </S.WrapperMembers>
            <Button type="submit" isLoading={isLoading}>
              Update
            </Button>
          </S.WrapperInputs>
        </S.Form>
      </S.WrapperForm>
    </S.Container>
  );
}
