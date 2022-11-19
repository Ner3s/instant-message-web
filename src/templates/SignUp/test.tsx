import { SignUpTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<SignUpTemplate />', () => {
  it('should render SignUpTemplate', () => {
    render(<SignUpTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /register/i
      })
    ).toBeInTheDocument();
  });
});
