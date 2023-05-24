import { UserModal } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UserModal',
  component: UserModal
} as ComponentMeta<typeof UserModal>;

const Template: ComponentStory<typeof UserModal> = (args) => (
  <UserModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
  description: 'Description',
  imageUrl: 'https://picsum.photos/200/300'
};
Default.argTypes = {
  handleGotoProfile: { action: 'handleGotoProfile - Called on click ' }
};
