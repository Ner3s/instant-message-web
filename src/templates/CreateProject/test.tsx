import { CreateProjectTemplate, CreateProjectTemplateProps } from '.';

import { screen, render, userEvent, fireEvent, waitFor } from '@/utils/test';

jest.mock('@firebase/util', () => ({ uuidv4: () => 'uuidv4_mock' }));
const handleCreteProjectMock = jest.fn();
const handleUploadFileMock = jest.fn();

const propsMock: CreateProjectTemplateProps = {
  handleCreateProject: handleCreteProjectMock,
  isLoading: false,
  handleUploadFile: handleUploadFileMock,
  owner_id: 'owner_id_mock'
};

const makeSut = (props: CreateProjectTemplateProps) => {
  const user = userEvent.setup();
  const sut = render(<CreateProjectTemplate {...props} />);
  return { sut, user };
};

const mockForm = {
  name: 'name_mock',
  description: 'description_mock more than 20 characters',
  start_date: '2023-01-01',
  status: true
};

describe('<CreateProjectTemplate />', () => {
  it('should render CreateProjectTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /Create project/i
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
        name: /create/i
      })
    );

    expect(handleCreteProjectMock).toBeCalledTimes(1);
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
        name: /create/i
      })
    );

    expect(handleUploadFileMock).toBeCalledTimes(2);
    expect(handleCreteProjectMock).toBeCalledTimes(1);
  });
});
