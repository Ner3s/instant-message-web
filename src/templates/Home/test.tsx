import { HomeTemplate, HomeTemplateProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const onFindUser = jest.fn();
const onLogout = jest.fn();
const onSetCurrentUser = jest.fn();
const onRouterPush = jest.fn();

const mockMyProfile = {
  name: 'my profile name mock',
  imageUrl: 'my profile image mock'
};

const userMock = (el: number) => ({
  name: `name mock ${el}`,
  imageUrl: `image mock ${el}`,
  uid: `${el}`,
  description: `Lorem ipsum ${el}`
});

const usersMock = Array.from({ length: 5 }, (_, index) => {
  return userMock(index);
}) as never[];

const propsMock: HomeTemplateProps = {
  handleFindUser: onFindUser,
  handleLogout: onLogout,
  isLoading: false,
  setCurrentUser: onSetCurrentUser,
  myProfile: mockMyProfile,
  users: usersMock
};

jest.mock('next/router', () => ({
  useRouter: () => ({ push: onRouterPush })
}));

const makeSut = (props: HomeTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<HomeTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<HomeTemplate />', () => {
  it('should render HomeTemplate', () => {
    makeSut(propsMock);

    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });

  it('should click on user', async () => {
    const { user } = makeSut(propsMock);

    await user.click(
      screen.getByRole('heading', {
        name: /name mock 0/i
      })
    );

    expect(onSetCurrentUser).toBeCalledTimes(1);
    expect(onRouterPush).toBeCalledTimes(1);
  });

  it('should render when not have users', async () => {
    makeSut({ ...propsMock, users: undefined });

    const result = screen.queryByText('result');

    expect(result).not.toBeInTheDocument();
  });

  it('should render user profile logged', async () => {
    makeSut({ ...propsMock });

    expect(screen.getByText(propsMock.myProfile.name)).toBeInTheDocument();
  });

  it('should click on logout', async () => {
    const { user } = makeSut({ ...propsMock });

    await user.click(screen.getByRole('button', { name: /logout/i }));
    expect(onLogout).toBeCalledTimes(1);
  });

  it('should click on edit profile', async () => {
    const { user } = makeSut({ ...propsMock });

    await user.click(screen.getByRole('button', { name: /edit/i }));
    expect(onRouterPush).toBeCalledTimes(1);
  });

  it('should call handleFindUser when typing in input', async () => {
    const { user } = makeSut({ ...propsMock });

    await user.type(screen.getByRole('searchbox'), 'a');

    setTimeout(() => {
      expect(onFindUser).toBeCalledTimes(1);
    }, 0);
  });

  it('should is loading', () => {
    makeSut({ ...propsMock, isLoading: true });

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
