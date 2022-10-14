import { FiUser } from 'react-icons/fi';

import { Input } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Input',
  component: Input,
  args: {
    placeholder: 'Input'
  },
  argTypes: {
    onChange: { action: 'onChange' }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Input'
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

export const Password = Template.bind({});
Password.args = {
  showIconPassword: true
};
