import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { VerticalTable } from '../../components';

const data = [
  {
    header: 'Header 1',
    value: 'Cell 1'
  },
  {
    header: 'Header 2',
    value: 'Cell 2'
  },
  {
    header: 'Header 3',
    value: 'Cell 3'
  },
  {
    header: 'Header 4',
    value: 'Cell 4'
  }
];

export default {
  title: 'Tables/Vertical Table',
  component: VerticalTable,
  args: {
    data
  }
} as ComponentMeta<typeof VerticalTable>;

const Template: ComponentStory<typeof VerticalTable> = (args) => (
  <VerticalTable {...args} />
);

export const Default = Template.bind({});
