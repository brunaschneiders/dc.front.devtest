import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '../../components';

export default {
  title: 'Text/Title',
  component: Title,
  args: {
    text: 'Title'
  }
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
