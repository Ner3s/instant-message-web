import { Input } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Input',
  component: Input
} as ComponentMeta<typeof Input>;

export const Basic: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
