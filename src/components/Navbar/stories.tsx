import { Navbar } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});
