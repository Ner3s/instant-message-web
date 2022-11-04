import { Input, InputProps } from '.';

import { screen, render, userEvent, act } from '@/utils/test';

const props: InputProps = {
  name: 'test'
};

const makeSut = (props: InputProps) => {
  const user = userEvent.setup();

  const sut = render(<Input {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<Input />', () => {
  it('should render Input', () => {
    makeSut(props);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should be type in Input', async () => {
    const { user } = makeSut(props);

    const InputText = screen.getByRole('textbox') as HTMLInputElement;

    await user.type(InputText, '123');

    expect(InputText.value).toBe('123');
  });

  it('should be show password in Input', async () => {
    // Add showIconPassword in props
    const { user } = makeSut({ ...props, showIconPassword: true });

    const showPassword = screen.getAllByRole('button');

    await act(async () => await user.click(showPassword[0]));

    const InputText = screen.getByRole('textbox') as HTMLInputElement;

    expect(InputText.type).toBe('text');
  });

  it('should error in Input', () => {
    // Add error in props
    makeSut({ ...props, errorMessage: 'Has error' });

    expect(screen.getByText(/has error/i)).toBeInTheDocument();
  });
});
