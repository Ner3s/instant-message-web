import { SignInTemplate, SignInTemplateProps } from '.';

import { TSignInDTO } from '@/models/sign-in.dto';
import { screen, render, userEvent } from '@/utils/test';

const onSubmitMock = jest.fn();

const propsMock: SignInTemplateProps = {
  onSubmit: onSubmitMock,
  isLoading: false
};

const inputsMock: TSignInDTO = {
  email: 'mock@mock.com',
  password: 'mock'
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

  it('should fill in all the fields and send the form', async () => {
    const { user } = makeSut(propsMock);

    const allInputs = screen.getAllByRole('textbox') as HTMLInputElement[];

    await user.type(allInputs[0], inputsMock.email);
    await user.type(allInputs[1], inputsMock.password);

    await user.click(screen.getByRole('button', { name: /sign in/i }));

    expect(onSubmitMock).toBeCalledTimes(1);
  });

  it('should button is loading', () => {
    Object.assign(propsMock, { ...propsMock, isLoading: true });

    makeSut(propsMock);

    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
  });
});
