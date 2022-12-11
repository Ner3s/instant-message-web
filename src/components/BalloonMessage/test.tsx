import { BalloonMessage, BalloonMessageProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const props: BalloonMessageProps = {
  children: 'Message mock',
  side: 'RIGHT'
};

const makeSut = (props: BalloonMessageProps) => {
  const user = userEvent.setup();

  const sut = render(<BalloonMessage {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<BalloonMessage />', () => {
  it('should render BalloonMessage', () => {
    makeSut(props);

    expect(screen.getByText(/message mock/i)).toBeInTheDocument();
  });
});
