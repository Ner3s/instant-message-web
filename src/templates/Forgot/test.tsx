import { ForgotTemplate, ForgotTemplateProps } from '.';

import { IForgotPassword } from '@/models/forgot-password';
import { screen, render, userEvent } from '@/utils/test';

const onHandleForgotPassword = jest.fn();

const propsMock: ForgotTemplateProps = {
  handleForgotPassword: onHandleForgotPassword,
  isLoading: false
};

const inputsMock: IForgotPassword = {
  email: 'mock@mock.com'
};

const makeSut = (props: ForgotTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<ForgotTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ForgotTemplate />', () => {
  it('should render ForgotTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /Forgot Password/i
      })
    ).toBeInTheDocument();
  });

  it('should fill email field and submit the form', async () => {
    const { user } = makeSut(propsMock);

    const input = screen.getByRole('textbox');

    await user.type(input, inputsMock.email);

    await user.click(
      screen.getByRole('button', { name: /Send Reset Password To Email/i })
    );

    expect(onHandleForgotPassword).toBeCalledTimes(1);
  });

  it('should button is loading', () => {
    makeSut({ ...propsMock, isLoading: true });

    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
  });
});
