import { Base, BaseProps } from '.';

import { screen, render } from '@/utils/test';

const makeSut = (props: BaseProps) => {
  return render(<Base {...props} />);
};

const props: BaseProps = {
  children: <h1>Mock Children</h1>
};

describe('<Base />', () => {
  it('should render Base', () => {
    makeSut(props);

    expect(
      screen.getByRole('heading', {
        name: /mock/i
      })
    ).toBeInTheDocument();
  });

  it('should render <Navbar /> in Base screen', () => {
    makeSut(props);

    expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
  });
});
