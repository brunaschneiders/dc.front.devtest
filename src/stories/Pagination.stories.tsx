import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pagination } from '../components';

const items = ['1', '2', '3', '4', '5'];

export default {
  title: 'Pagination',
  component: Pagination,
  args: {
    items,
    itemsPerPage: 2
  }
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
