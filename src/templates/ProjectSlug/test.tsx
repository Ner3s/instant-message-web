import { ProjectSlugTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ProjectSlugTemplate />', () => {
  it('should render ProjectSlugTemplate', () => {
    render(<ProjectSlugTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /ProjectSlugTemplate/i
      })
    ).toBeInTheDocument();
  });
});
