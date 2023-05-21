import { ProjectsTemplate, ProjectsTemplateProps } from '.';

import { screen, render } from '@/utils/test';

const projectsMock: ProjectsTemplateProps = {
  projects: {
    myProjects: [
      {
        name: 'Project 2',
        description: 'Description 2',
        uid: '2',
        startDate: '2021-01-01',
        status: true,
        imageProfile: ''
      }
    ],
    global: [
      {
        name: 'Project 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ligula nisi, vehicula at dapibus sed, vulputate quis ligula. Suspendisse potenti. Cras et lacinia justo. Nulla consectetur sapien sed quam sollicitudin, ullamcorper pulvinar metus tristique. Quisque urna metus, pulvinar vel consequat quis, auctor eu ipsum. Vestibulum nibh nisl, laoreet non faucibus non, tincidunt vel odio. Praesent placerat tellus at facilisis dignissim. Nullam ex augue, tincidunt porttitor nisl a, laoreet sollicitudin ante. Morbi malesuada pharetra ex a bibendum. Vivamus at bibendum eros. Duis maximus imperdiet magna, et semper ligula lobortis rhoncus.',
        uid: '1',
        startDate: '2021-01-01',
        status: true,
        imageProfile: ''
      },
      {
        name: 'Project 2',
        description: 'Description 2',
        uid: '2',
        startDate: '2021-01-01',
        status: true,
        imageProfile: ''
      },
      {
        name: 'Project 3',
        description: 'Description 3',
        uid: '3',
        startDate: '2021-01-01',
        status: true,
        imageProfile: ''
      },
      {
        name: 'Project 4',
        description: 'Description 4',
        uid: '4',
        startDate: '2021-01-01',
        status: true,
        imageProfile: ''
      }
    ],
    associate: [
      {
        name: 'Project 4',
        description: 'Description 4',
        uid: '4',
        startDate: '2021-01-01',
        status: true,
        imageProfile: ''
      }
    ]
  },
  isLoading: false
};

//@TODO MAKE TESTS
describe('<ProjectsTemplate />', () => {
  it('should render ProjectsTemplate', () => {
    render(<ProjectsTemplate {...projectsMock} />);

    expect(
      screen.getByRole('heading', {
        name: /Projects/i
      })
    ).toBeInTheDocument();
  });
});
