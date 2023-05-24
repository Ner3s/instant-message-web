import { UserCard } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'UserCard',
  component: UserCard
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <UserCard {...args} />
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
