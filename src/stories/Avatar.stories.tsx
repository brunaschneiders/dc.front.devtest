import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Avatar } from '../components';

export default {
  title: 'Avatar',
  component: Avatar,
  args: {
    url: 'https://www.w3schools.com/howto/img_avatar2.png'
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small'
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium'
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xlarge'
};
