import { Spinner } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Spinner',
  component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
