import { Tooltip } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Tooltip',
  component: Tooltip
} as ComponentMeta<typeof Tooltip>;

export const Basic: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);
