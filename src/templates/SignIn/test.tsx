import { SignInTemplate, SignInTemplateProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const onSubmitMock = jest.fn();

const propsMock: SignInTemplateProps = {
  onSubmit: onSubmitMock,
  isLoading: false
};

const makeSut = (props: SignInTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<SignInTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<SignInTemplate />', () => {
  it('should render SignInTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /Sign/i
      })
    ).toBeInTheDocument();
  });

  it.skip('should send data in onSubmit', async () => {
    const { user } = makeSut(propsMock);

    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('should button is loading', () => {
    Object.assign(propsMock, { ...propsMock, isLoading: true });

    makeSut(propsMock);

    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
  });
});
