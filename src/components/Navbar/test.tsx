import { Navbar } from '.';

import { MENU_LINKS } from '@/utils/constants/menu-links';
import { screen, render, userEvent } from '@/utils/test';

const mockPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    pathname: '/home'
  })
}));

describe('<Navbar />', () => {
  userEvent.setup();

  it('should render Navbar', async () => {
    render(<Navbar menuLinks={MENU_LINKS} />);

    await userEvent.click(screen.getByRole('link', { name: /home/i }));

    expect(screen.getAllByRole('link')[0]).toBeInTheDocument();
    expect(mockPush).toBeCalled();
  });
});
