import { IProjectSlugTemplateProps, ProjectSlugTemplate } from '.';

import { dateFormatter } from '@/utils/helpers/format-date';
import { screen, render } from '@/utils/test';

const projectSlugMock: IProjectSlugTemplateProps = {
  projectData: {
    name: 'Project Name',
    startDate: dateFormatter({ date: '2021-01-01' }) as string,
    description: 'lorem ipsum dolor sit amet',
    members: [
      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      },
      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      },
      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      },

      {
        uid: '1',
        name: 'Member 1',
        imageUrl: ''
      }
    ],
    uid: '',
    status: true,
    imageProfile: '',
    imageCover: '',
    createdAt: '',
    updatedAt: '',
    ownerId: '123123'
  },
  owner: { imageUrl: '', name: 'Owner', uid: '123123' },
  handleJoinProject: function (): void {
    console.log('JOIN');
  },
  handleEditProject: function (): void {
    console.log('EDIT');
  },
  handleUnsubscribeProject: function (): void {
    console.log('UN SUBSCRIBE');
  }
};

describe('<ProjectSlugTemplate />', () => {
  it('should render ProjectSlugTemplate', () => {
    render(<ProjectSlugTemplate {...projectSlugMock} />);

    expect(screen.getByText(/Project Name/i)).toBeInTheDocument();
  });
});
