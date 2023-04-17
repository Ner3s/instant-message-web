/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, useForm } from 'react-hook-form';
import { FiCamera } from 'react-icons/fi';

import { FileInput } from '@/components/FileInput';

import { INITIAL_FORM_VALUES } from './form';
import { validationSchema } from './validation';

import { useFileInput } from '@/hooks/use-file-input';

import { CreateProject } from '@/models/project/create-project';
import { joiResolver } from '@hookform/resolvers/joi';

import * as S from './styles';

function CreateProjectTemplate() {
  const { files, showImages, handleFileInput } = useFileInput();

  const {
    control,
    handleSubmit
    // formState: { errors }
    // getValues,
    // reset
  } = useForm({
    defaultValues: INITIAL_FORM_VALUES,
    resolver: joiResolver(validationSchema)
  });

  const onSubmit = (data: CreateProject) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.WrapperText>
        <S.Title>Create project</S.Title>
      </S.WrapperText>
      <S.WrapperForm>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperFileInput>
            <Controller
              name="image_cover"
              control={control}
              render={({ field: { ref, ...props } }) => (
                <FileInput
                  fileClassName="file-input"
                  placeholder="Image profile"
                  appearance="none"
                  className="test"
                  image_url={showImages[0]}
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
          </S.WrapperFileInput>
        </S.Form>
      </S.WrapperForm>
    </S.Container>
  );
}

export { CreateProjectTemplate };
