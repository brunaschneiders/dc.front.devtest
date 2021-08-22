import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { UserCard } from '../components';

export default {
  title: 'User Card',
  component: UserCard,
  args: {
    url: 'https://www.w3schools.com/howto/img_UserCard2.png',
    name: 'User Name',
    company: 'Company Name'
  }
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
  <div style={{ width: '20rem' }}>
    <UserCard {...args} />
  </div>
);

export const Default = Template.bind({});
