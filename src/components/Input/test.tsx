import { Input } from '.';

import { screen, render } from '@/utils/test';

describe('<Input />', () => {
  it('should render Input', () => {
    render(<Input name="teste" />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
