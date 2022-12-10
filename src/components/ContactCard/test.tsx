import { ContactCard, ContactCardProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const goToChatMock = jest.fn();

const propsMock: ContactCardProps = {
  imageUrl: 'image mock',
  name: 'name mock',
  description: 'description mock',
  handleGoToChat: goToChatMock
};

const makeSut = (props: ContactCardProps) => {
  const user = userEvent.setup();

  const sut = render(<ContactCard {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ContactCard />', () => {
  it('should render ContactCard', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', {
        name: /The contact profile image/i
      })
    ).toBeInTheDocument();
  });

  it('should render ContactCard and dont have profileImage', () => {
    makeSut({ ...propsMock, imageUrl: undefined });

    expect(
      screen.getByLabelText(/The contact icon is shown/i)
    ).toBeInTheDocument();

    expect(
      screen.queryByRole('img', {
        name: /contact image profile/i
      })
    ).not.toBeInTheDocument();
  });

  it('should click in contact', async () => {
    const { user } = makeSut(propsMock);

    await user.click(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    );

    expect(goToChatMock).toBeCalledTimes(1);
  });
});
