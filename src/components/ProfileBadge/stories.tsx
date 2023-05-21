import { ProfileBadge } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ProfileBadge',
  component: ProfileBadge
} as ComponentMeta<typeof ProfileBadge>;

export const Basic: ComponentStory<typeof ProfileBadge> = (args) => (
  <ProfileBadge {...args} />
);
