import { Base } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Base',
  component: Base
} as ComponentMeta<typeof Base>;

export const Basic: ComponentStory<typeof Base> = (args) => <Base {...args} />;
