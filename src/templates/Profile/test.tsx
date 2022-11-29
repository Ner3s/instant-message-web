import { ProfileTemplate, ProfileTemplateProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const handleClearSessionMock = jest.fn();

jest.mock('@/contexts/use-auth', () => ({
  useAuth: () => ({
    handleClearSession: handleClearSessionMock
  })
}));

const propsMock: ProfileTemplateProps = {
  name: 'NAME MOCK',
  birthDate: '2000-01-01',
  description: `DESCRIPTION MOCK`,
  imageUrl: 'IMG MOCK',
  myAccount: false
};

const makeSut = (props: ProfileTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<ProfileTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ProfileTemplate />', () => {
  it('should render ProfileTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /profile/i
      })
    ).toBeInTheDocument();
  });

  it('should render my profile and click in logout', async () => {
    Object.assign(propsMock, { ...propsMock, myAccount: true });

    const { user } = makeSut(propsMock);

    await user.click(screen.getByRole('button', { name: /sign out/i }));

    expect(handleClearSessionMock).toBeCalledTimes(1);
  });
});
