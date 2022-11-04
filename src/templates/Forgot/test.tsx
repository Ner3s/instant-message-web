import { ForgotTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ForgotTemplate />', () => {
  it('should render ForgotTemplate', () => {
    render(<ForgotTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /ForgotTemplate/i
      })
    ).toBeInTheDocument();
  });
});
