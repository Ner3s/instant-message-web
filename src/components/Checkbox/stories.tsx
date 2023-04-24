import { Checkbox } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    name: 'checkbox-name',
    value: false
  },
  argTypes: {
    onChange: { action: 'onChange' }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Checkbox'
};
