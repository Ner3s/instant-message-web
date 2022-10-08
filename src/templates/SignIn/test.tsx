import { SignInTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<SignInTemplate />', () => {
  it('should render SignInTemplate', () => {
    render(<SignInTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /SignInTemplate/i
      })
    ).toBeInTheDocument();
  });
});
