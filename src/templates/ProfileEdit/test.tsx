import { ProfileEditTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ProfileEditTemplate />', () => {
  it('should render ProfileEditTemplate', () => {
    render(<ProfileEditTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /profile/i
      })
    ).toBeInTheDocument();
  });
});
