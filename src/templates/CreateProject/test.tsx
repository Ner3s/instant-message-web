import { CreateProjectTemplate } from '.';

import { screen, render } from '@/utils/test';

describe('<CreateProjectTemplate />', () => {
  it('should render CreateProjectTemplate', () => {
    render(
      <CreateProjectTemplate
        handleUploadFile={jest.fn()}
        owner_id="owner_id_mock"
      />
    );

    screen.logTestingPlaygroundURL();

    expect(
      screen.getByRole('heading', {
        name: /Create project/i
      })
    ).toBeInTheDocument();
  });
});
