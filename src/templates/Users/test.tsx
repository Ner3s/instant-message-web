import { UsersTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<UsersTemplate />', () => {
  it('should render UsersTemplate', () => {
    render(<UsersTemplate />);

    expect(screen.getByText(/edit/i)).toBeInTheDocument();
  });
});
