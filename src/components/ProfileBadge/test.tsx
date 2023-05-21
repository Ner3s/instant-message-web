import { ProfileBadge } from '.';

import { screen, render } from '@/utils/test';

describe('<ProfileBadge />', () => {
  it('should render ProfileBadge with icon and props', () => {
    render(<ProfileBadge width="100%" />);

    expect(screen.getByRole('icon')).toBeInTheDocument();
  });

  it('should render ProfileBadge with icon and no props', () => {
    render(<ProfileBadge />);

    expect(screen.getByRole('icon')).toBeInTheDocument();
  });

  it('should render ProfileBadge with image and props', () => {
    render(
      <ProfileBadge
        width="100%"
        height="xxsmall"
        imageUrl="image_mock"
        imageAlt="image_mock"
      />
    );

    expect(
      screen.getByRole('img', {
        name: /image_mock/i
      })
    ).toBeInTheDocument();
  });

  it('should render ProfileBadge with image and no props', () => {
    render(<ProfileBadge imageUrl="image_mock" imageAlt="image_mock" />);

    expect(
      screen.getByRole('img', {
        name: /image_mock/i
      })
    ).toBeInTheDocument();
  });
});
