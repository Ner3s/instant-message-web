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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Border = Template.bind({});
Border.args = {
  appearance: 'secondary'
};

export const SolidColor = Template.bind({});
SolidColor.args = {
  bgColor: 'blue',
  txtColor: 'white'
};
