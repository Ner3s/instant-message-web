import { IProfileEditTemplate, ProfileEditTemplate } from '.';

import { IUser } from '@/models/user';
import { screen, render, userEvent } from '@/utils/test';

const onUpdateProfile = jest.fn();
const onUploadFileMock = jest.fn();
const onUpdateEmail = jest.fn();
const onPasswordReset = jest.fn();

const inputsMock: IUser = {
  name: 'mock',
  email: 'mock@mock.com',
  description: 'mock description',
  birthDate: '2022-01-01',
  imageUrl: 'file-mock',
  uid: 'uid-mock',
  createdAt: '2022-01-01',
  updatedAt: '2022-01-01'
};

const propsMock: IProfileEditTemplate = {
  handleUpdateEmail: onUpdateEmail,
  handleUpdateProfile: onUpdateProfile,
  handleUploadFile: onUploadFileMock,
  handlePasswordReset: onPasswordReset,
  isLoadingPasswordReset: false,
  isLoading: false,
  userProfile: inputsMock
};

const makeSut = (props: IProfileEditTemplate) => {
  const user = userEvent.setup();

  const sut = render(<ProfileEditTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ProfileEditTemplate />', () => {
  it('should render ProfileEditTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /profile/i
      })
    ).toBeInTheDocument();
  });

  it('should type in the input and input must contain the value', async () => {
    const { user } = makeSut(propsMock);

    const inputName = screen.getByRole('textbox', {
      name: /name/i
    }) as HTMLInputElement;

    await user.clear(inputName);
    await user.type(inputName, 'teste mock');

    expect(inputName.value).toStrictEqual('teste mock');
  });

  it('should call password reset function', async () => {
    const { user } = makeSut(propsMock);

    const button = screen.getByRole('button', {
      name: /change password/i
    });

    await user.click(button);

    expect(onPasswordReset).toBeCalledTimes(1);
  });

  // @TODO - FIX THIS TEST
  it.skip('should fill in all the fields and send the form', async () => {
    const { user } = makeSut(propsMock);

    const allInputs = screen.getAllByRole('textbox') as HTMLInputElement[];
    const inputFile = screen.getByTestId('input-file');

    console.log(allInputs);

    const file = new File(['mock'], 'text/txt');

    await user.upload(inputFile, file);
    await user.type(allInputs[0], inputsMock.email);
    await user.type(allInputs[1], inputsMock.name);
    await user.type(allInputs[2], inputsMock.birthDate);
    await user.type(allInputs[3], inputsMock.description);

    await user.click(screen.getByRole('button', { name: /Save/i }));

    expect(onUploadFileMock).toBeCalledTimes(1);
  });
});
