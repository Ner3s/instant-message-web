import { HomeTemplate } from '.';

import { screen, render } from '@/utils/test';

// @TODO - Create this test
describe('<HomeTemplate />', () => {
  it('should render HomeTemplate', () => {
    render(<HomeTemplate />);

    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });
});
