import { Base } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base',
  component: Base,
  args: {
    children: <h1>Children</h1>
  }
} as ComponentMeta<typeof Base>;

const Template: ComponentStory<typeof Base> = (args) => <Base {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <h1>TESTE</h1>
};
