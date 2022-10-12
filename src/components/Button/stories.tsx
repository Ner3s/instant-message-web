import { Button } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Text',
    disabled: false
  },
  argTypes: {
    onClick: { action: 'clicked' }
  }
} as ComponentMeta<typeof Button>;

export const Basic: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Border: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

Border.args = {
  appearance: 'secondary'
};
