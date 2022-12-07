import { UserModal, UserModalProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const gotoProfileMock = jest.fn();

const propsMock: UserModalProps = {
  imageUrl: 'image mock',
  name: 'name mock',
  description: 'description mock',
  handleGotoProfile: gotoProfileMock
};

const makeSut = (props: UserModalProps) => {
  const user = userEvent.setup();

  const sut = render(<UserModal {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<UserModal />', () => {
  it('should render UserModal', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('img', {
        name: /user image profile/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/description/i)).toBeInTheDocument();
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
});
