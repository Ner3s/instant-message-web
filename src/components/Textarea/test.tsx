import { Textarea, TextareaProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const props: TextareaProps = {
  name: 'test'
};

const makeSut = (props: TextareaProps) => {
  const user = userEvent.setup();

  const sut = render(<Textarea {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<Textarea />', () => {
  it('should render Textarea', () => {
    makeSut(props);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  it('should be type in Textarea', async () => {
    const { user } = makeSut(props);

    const TextareaText = screen.getByRole('textbox') as HTMLTextAreaElement;

    await user.type(TextareaText, '123');

    expect(TextareaText.value).toBe('123');
  });

  it('should error in Textarea', () => {
    // Add error in props
    makeSut({ ...props, errorMessage: 'Has error' });

    expect(screen.getByText(/has error/i)).toBeInTheDocument();
  });
});
