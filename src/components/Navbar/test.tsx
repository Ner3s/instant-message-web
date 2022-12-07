import { Navbar } from '.';

import { screen, render } from '@/utils/test';

// @TODO - Implements this test
describe('<Navbar />', () => {
  it('should render Navbar', () => {
    render(<Navbar />);

    expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
  });
});
