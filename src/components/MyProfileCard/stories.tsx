import { MyProfileCard } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'MyProfileCard',
  component: MyProfileCard,
  args: {
    name: '',
    imageUrl: ''
  },
  argTypes: {
    handleLogout: { action: 'HANDLE_LOGOUT' },
    handleGotoProfile: { action: 'HANDLE_GOTO_PROPFILE' },
    handleGotoProfileEdit: { action: 'HANDLE_GOTO_PROFILE_EDIT' }
  }
} as ComponentMeta<typeof MyProfileCard>;

const Template: ComponentStory<typeof MyProfileCard> = (args) => (
  <MyProfileCard {...args} />
);

export const Default = Template.bind({});
