import { Navbar } from '.';

import { MENU_LINKS } from '@/utils/constants/menu-links';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Navbar',
  component: Navbar
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <Navbar menuLinks={MENU_LINKS} />
);

export const Default = Template.bind({});
