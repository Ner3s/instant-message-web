import { Button, ButtonProps } from '.';

import { render, screen, userEvent } from '@/utils/test';

const handleButtonClick = jest.fn();

const makeSut = (props: ButtonProps) => {
  const user = userEvent.setup();

  const sut = render(<Button {...props} />);

  return {
    ...sut,
    user
  };
};

const props: ButtonProps = {
  children: 'Button',
  onClick: handleButtonClick
};

describe('<Button />', () => {
  it('should render button and click', async () => {
    makeSut(props);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();

    await userEvent.click(btn);
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should is loading on button', () => {
    makeSut({ ...props, isLoading: true });

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  it('should disabled button', () => {
    makeSut({ ...props, disabled: true });

    const btn = screen.getByRole('button');

    expect(btn).toBeDisabled();
  });
});
