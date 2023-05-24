import { ProjectModal } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ProjectModal',
  component: ProjectModal
} as ComponentMeta<typeof ProjectModal>;

const Template: ComponentStory<typeof ProjectModal> = (args) => (
  <ProjectModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'Name',
  description: 'Description',
  imageUrl: 'https://picsum.photos/200/300'
};
Default.argTypes = {
  handleGotoProject: { action: 'handleGotoProject - Called on click ' }
};
