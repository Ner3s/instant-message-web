import { ContactsTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ContactsTemplate />', () => {
  it('should render ContactsTemplate', () => {
    render(<ContactsTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /ContactsTemplate/i
      })
    ).toBeInTheDocument();
  });
});
