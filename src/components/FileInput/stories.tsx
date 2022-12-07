import { FileInput } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'FileInput',
  component: FileInput,
  args: {
    placeholder: 'FileInput'
  }
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = (args) => (
  <FileInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'FileInput'
};
