import { BalloonMessage } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'BalloonMessage',
  component: BalloonMessage
} as ComponentMeta<typeof BalloonMessage>;

export const Basic: ComponentStory<typeof BalloonMessage> = (args) => (
  <BalloonMessage {...args} />
);
