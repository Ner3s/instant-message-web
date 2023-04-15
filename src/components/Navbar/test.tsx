import { Navbar } from '.';

import { MENU_LINKS } from '@/utils/constants/menu-links';
import { screen, render } from '@/utils/test';

// @TODO - Implements this test
describe('<Navbar />', () => {
  it('should render Navbar', () => {
    render(<Navbar menuLinks={MENU_LINKS} />);

    expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
  });
});
