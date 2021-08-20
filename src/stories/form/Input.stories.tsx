import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search as SearchIcon } from '@material-ui/icons';
import { Box } from '@material-ui/core';

import { Input } from '../../components';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    icon: {
      options: ['Null', 'Search'],
      mapping: {
        Null: null,
        Search: <SearchIcon color='primary' />
      }
    }
  },
  args: {
    placeholder: 'Placeholder',
    name: 'example',
    ariaLabel: 'Example Input'
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Box width='fit-content'>
    <Input {...args} />
  </Box>
);

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'Search'
};
