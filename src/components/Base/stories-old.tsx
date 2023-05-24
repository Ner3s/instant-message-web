import { Base } from '.';

import { AppProvider } from '@/contexts';

import { ComponentMeta, ComponentStory } from '@storybook/react';

//@TODO - FIX THIS STORIES - NOT WORKING WITH AUTH CONTEXT
export default {
  title: 'Base',
  component: Base,
  args: {
    children: <h1>Children</h1>
  }
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => (
  <AppProvider>
    <Base {...args} />
  </AppProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: <h1>TESTE</h1>
};
