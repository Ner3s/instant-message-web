import { Spinner, SpinnerProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const props: SpinnerProps = {};

const makeSut = (props: SpinnerProps) => {
  const user = userEvent.setup();

  const sut = render(<Spinner {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<Spinner />', () => {
  it('should render Spinner', () => {
    makeSut(props);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
