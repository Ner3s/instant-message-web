import { ChatTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<ChatTemplate />', () => {
  it('should render ChatTemplate', () => {
    render(<ChatTemplate />);

    expect(
      screen.getByRole('heading', {
        name: /Mensagens/i
      })
    ).toBeInTheDocument();
  });
});
