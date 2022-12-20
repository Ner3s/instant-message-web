import { FiUser } from 'react-icons/fi';

import { Textarea } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Textarea',
  component: Textarea,
  args: {
    placeholder: 'Textarea'
  },
  argTypes: {
    onChange: { action: 'onChange' }
  }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Textarea'
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  icon: <FiUser size={22} color="grey" />,
  iconAlign: 'left'
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  containerStyles: {
    backgroundColor: 'black'
  },
  txtColor: 'white',
  icon: <FiUser size={22} color="white" />
};
