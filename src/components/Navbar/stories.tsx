import { Navbar } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

export const Basic: ComponentStory<typeof Navbar> = () => <Navbar />;
