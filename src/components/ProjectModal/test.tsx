import { ProjectModal, ProjectModalProps } from '.';

import { screen, render, userEvent } from '@/utils/test';

const gotoProjectMock = jest.fn();

const propsMock: ProjectModalProps = {
  imageUrl: 'image mock',
  name: 'name mock',
  description: 'description mock',
  startDate: '2023-02-01',
  handleGotoProject: gotoProjectMock
};

const makeSut = (props: ProjectModalProps) => {
  const user = userEvent.setup();

  const sut = render(<ProjectModal {...props} />);

  return {
    ...sut,
    user
  };
};

describe('<ProjectModal />', () => {
  it('should render ProjectModal', () => {
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
