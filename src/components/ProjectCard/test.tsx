import { ProjectCard, ProjectCardProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const gotoProjectMock = jest.fn();

const propsMock: ProjectCardProps = {
  imageUrl: 'image mock',
  name: 'name mock',
  description: 'description mock',
  startDate: '2023-02-01',
  handleGotoProject: gotoProjectMock
};

const makeSut = (props: ProjectCardProps) => {
  const user = userEvent.setup();

  const sut = render(<ProjectCard {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ProjectCard />', () => {
  it('should render ProjectCard', () => {
    makeSut(propsMock);

    expect(
      screen.getByRole('img', {
        name: /user image profile/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });

  it('should click in button profile', async () => {
    const { user } = makeSut(propsMock);

    await user.click(
      screen.getByRole('heading', {
        name: /name mock/i
      })
    );

    expect(gotoProjectMock).toBeCalledTimes(1);
  });
});
