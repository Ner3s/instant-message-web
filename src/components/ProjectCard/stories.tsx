import { ProjectCard } from '.';

import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ProjectCard',
  component: ProjectCard
} as ComponentMeta<typeof ProjectCard>;

const Template: ComponentStory<typeof ProjectCard> = (args) => (
  <ProjectCard {...args} />
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
