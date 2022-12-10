import { ContactCard } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ContactCard',
  component: ContactCard
} as ComponentMeta<typeof ContactCard>;

const Template: ComponentStory<typeof ContactCard> = (args) => (
  <ContactCard {...args} />
);

export const Default = Template.bind({});
