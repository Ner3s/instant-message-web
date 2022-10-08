import { Button } from '.';

import { render, screen, userEvent } from '@/utils/test';

const handleButtonClick = jest.fn();

describe('<Button />', () => {
  it('should render button and click', () => {
    render(<Button onClick={handleButtonClick}>Button</Button>);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();

    userEvent.click(btn);
    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });

  it('should is loading on button', () => {
    render(<Button isLoading>Button</Button>);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });

  it('should disabled button', () => {
    render(<Button disabled>Button</Button>);

    const btn = screen.getByRole('button');

    expect(btn).toBeDisabled();
  });
});
