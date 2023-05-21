import { ProjectEditTemplate, ProjectEditTemplateProps } from '.';

import { IProject } from '@/models/project';
import { screen, render, userEvent, fireEvent, waitFor } from '@/utils/test';

const handleUpdateProject = jest.fn();
const handleUploadFileMock = jest.fn();

const propsMock: ProjectEditTemplateProps = {
  handleUpdateProject: handleUpdateProject,
  isLoading: false,
  handleUploadFile: handleUploadFileMock,
  projectData: {
    name: 'name_mock',
    description: 'description_mock',
    imageProfile: 'imageProfile_mock',
    imageCover: 'imageCover_mock',
    ownerId: 'ownerId_mock',
    members: [
      {
        uid: 'uid_member_mock',
        imageUrl: 'imageUrl_member_mock',
        name: 'name_member_mock'
      }
    ],
    status: true,
    uid: 'uid_mock',
    startDate: '01/01/2000',
    createdAt: 'createAt_mock',
    updatedAt: 'updatedAt_mock'
  } as IProject
};

const makeSut = (props: ProjectEditTemplateProps) => {
  const user = userEvent.setup();
  const sut = render(<ProjectEditTemplate {...props} />);
  return { sut, user };
};

const mockForm = {
  name: 'name_mock',
  description: 'description_mock more than 20 characters',
  start_date: '2023-01-01',
  status: true
};

// @TODO: fix test
describe.skip('<ProjectEditTemplate />', () => {
  it('should render ProjectEditTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /edit project/i
      })
    ).toBeInTheDocument();
  });

  it('should be type input and click in submit', async () => {
    const { user } = makeSut(propsMock);

    const nameInput = screen.getByRole('textbox', {
      name: /project name/i
    });
    const startDateInput = screen.getByRole('textbox', { name: /start date/i });
    const descriptionInput = screen.getByTestId('description');

    await user.type(nameInput, mockForm.name);
    await user.type(startDateInput, mockForm.start_date);
    await user.type(descriptionInput, mockForm.description);

    await user.click(
      screen.getByRole('button', {
        name: /update/i
      })
    );

    expect(handleUpdateProject).toBeCalledTimes(1);
  });

  it('should be type input and upload files and click in submit', async () => {
    const { user } = makeSut(propsMock);

    const files = [
      new File(['mock'], 'text/txt'),
      new File(['mock'], 'text/txt')
    ];

    const coverInput = screen.getByTestId('image_cover') as HTMLInputElement;
    const profileInput = screen.getByTestId(
      'image_profile'
    ) as HTMLInputElement;

    await waitFor(() => {
      fireEvent.change(coverInput, {
        target: { files: [files[0]] }
      });
      fireEvent.change(profileInput, {
        target: { files: [files[1]] }
      });
    });

    const nameInput = screen.getByRole('textbox', {
      name: /project name/i
    });
    const startDateInput = screen.getByRole('textbox', { name: /start date/i });
    const descriptionInput = screen.getByTestId('description');

    await user.type(nameInput, mockForm.name);
    await user.type(startDateInput, mockForm.start_date);
    await user.type(descriptionInput, mockForm.description);

    await user.click(
      screen.getByRole('button', {
        name: /update/i
      })
    );

    expect(handleUploadFileMock).toBeCalledTimes(2);
    expect(handleUpdateProject).toBeCalledTimes(1);
  });
});
