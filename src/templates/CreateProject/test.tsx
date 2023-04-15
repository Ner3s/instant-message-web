import { CreateProjectTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<CreateProjectTemplate />', () => {
  it('should render CreateProjectTemplate', () => {
    render(<CreateProjectTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /CreateProjectTemplate/i
      })
    ).toBeInTheDocument();
  });
});
