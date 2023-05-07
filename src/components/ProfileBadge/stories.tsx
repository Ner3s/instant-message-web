import { BadgeProfile } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'BadgeProfile',
  component: BadgeProfile
} as ComponentMeta<typeof BadgeProfile>;

export const Basic: ComponentStory<typeof BadgeProfile> = (args) => (
  <BadgeProfile {...args} />
);
