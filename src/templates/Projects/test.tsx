import { ProjectsTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ProjectsTemplate />', () => {
  it('should render ProjectsTemplate', () => {
    render(<ProjectsTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /ProjectsTemplate/i
      })
    ).toBeInTheDocument();
  });
});
