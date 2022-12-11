import { ChatTemplate } from '.';

import { render } from '@/utils/test';

describe('<ChatTemplate />', () => {
  it('should render ChatTemplate', () => {
    const { container } = render(<ChatTemplate />);

    expect(container).toBeInTheDocument();
  });
});
