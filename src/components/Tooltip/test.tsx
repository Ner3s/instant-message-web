import { Tooltip, TooltipProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const props: TooltipProps = {
  children: 'Message mock'
};

const makeSut = (props: TooltipProps) => {
  const user = userEvent.setup();

  const sut = render(<Tooltip {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<Tooltip />', () => {
  it('should render Tooltip', () => {
    makeSut(props);

    expect(screen.getByText(/message mock/i)).toBeInTheDocument();
  });
});
