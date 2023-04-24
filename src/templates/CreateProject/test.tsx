import { CreateProjectTemplate } from '.';

import { screen, render } from '@/utils/test';

jest.mock('@firebase/util', () => ({ uuidv4: () => 'uuidv4_mock' }));

describe('<CreateProjectTemplate />', () => {
  it('should render CreateProjectTemplate', () => {
    render(
      <CreateProjectTemplate
        handleUploadFile={jest.fn()}
        owner_id="owner_id_mock"
      />
    );

    expect(
      screen.getByRole('heading', {
        name: /Create project/i
      })
    ).toBeInTheDocument();
  });
});
