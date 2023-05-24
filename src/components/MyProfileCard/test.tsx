import { MyProfileCard, MyProfileCardProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const logoutMock = jest.fn();
const gotoProfileMock = jest.fn();
const gotoProfileEditMock = jest.fn();

const propsMock: MyProfileCardProps = {
  imageUrl: 'image mock',
  name: 'name mock',
  handleLogout: logoutMock,
  handleGotoProfile: gotoProfileMock,
  handleGotoProfileEdit: gotoProfileEditMock
};

const makeSut = (props: MyProfileCardProps) => {
  const user = userEvent.setup();

  const sut = render(<MyProfileCard {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<MyProfileCard />', () => {
  it('should render MyProfileCard', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('button', {
        name: /edit/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', {
        name: /your image profile/i
      })
    ).toBeInTheDocument();
  });

  it('should click in button profile', async () => {
    const { user } = makeSut(propsMock);

    await user.click(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    );

    expect(gotoProfileMock).toBeCalledTimes(1);
  });

  it('should click in button edit profile', async () => {
    const { user } = makeSut(propsMock);

    await user.click(
      screen.getByRole('button', {
        name: /edit/i
      })
    );

    expect(gotoProfileEditMock).toBeCalledTimes(1);
  });

  it('should click in button logout', async () => {
    const { user } = makeSut(propsMock);

    await user.click(
      screen.getByRole('button', {
        name: /logout/i
      })
    );

    expect(logoutMock).toBeCalledTimes(1);
  });
});
