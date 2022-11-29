import { SignUpTemplate, SignUpTemplateProps } from '.';
import { TSignUpForm } from './form';

import { screen, render, userEvent } from '@/utils/test';

const onSubmitMock = jest.fn();

const propsMock: SignUpTemplateProps = {
  handleSignUp: onSubmitMock,
  isLoading: false
};

const inputsMock: TSignUpForm = {
  name: 'mock',
  email: 'mock@mock.com',
  description: 'mock description',
  password: 'mock',
  confirm_password: 'mock',
  birth_date: '2022-01-01'
};

const makeSut = (props: SignUpTemplateProps) => {
  const user = userEvent.setup();

  const sut = render(<SignUpTemplate {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<SignUpTemplate />', () => {
  it('should render SignUpTemplate', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('heading', {
        name: /register/i
      })
    ).toBeInTheDocument();
  });

  it('should type in the input and input must contain the value', async () => {
    const { user } = makeSut(propsMock);

    const inputName = screen.getByRole('textbox', {
      name: /name/i
    }) as HTMLInputElement;

    await user.type(inputName, 'teste mock');

    expect(inputName.value).toStrictEqual('teste mock');
  });

  it('should fill in all the fields and send the form', async () => {
    const { user } = makeSut(propsMock);

    const allInputs = screen.getAllByRole('textbox') as HTMLInputElement[];

    await user.type(allInputs[0], inputsMock.email);
    await user.type(allInputs[1], inputsMock.name);
    await user.type(allInputs[2], inputsMock.birth_date);
    await user.type(allInputs[3], inputsMock.description);
    await user.type(allInputs[4], inputsMock.password);
    await user.type(allInputs[5], inputsMock.confirm_password);

    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(onSubmitMock).toBeCalledTimes(1);
  });

  it('should button is loading', () => {
    Object.assign(propsMock, { ...propsMock, isLoading: true });

    makeSut(propsMock);

    expect(screen.getByRole('button', { name: '' })).toBeInTheDocument();
  });
});
