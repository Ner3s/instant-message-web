import { ProfileTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ProfileTemplate />', () => {
  it('should render ProfileTemplate', () => {
    render(<ProfileTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /profile/i
      })
    ).toBeInTheDocument();
  });
});
