import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search as SearchIcon } from '@material-ui/icons';

import { Header, Input } from '../components';

import { theme } from '../styles/theme';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    rightContent: {
      options: ['Null', 'Input'],
      mapping: {
        Null: null,
        Input: (
          <Input
            type='text'
            name='search'
            ariaLabel='Buscar usuários'
            placeholder='Buscar usuários'
            icon={<SearchIcon color='primary' />}
          />
        )
      }
    }
  },
  args: {
    title: 'Title'
  }
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});

export const WithRightContent = Template.bind({});
WithRightContent.args = {
  rightContent: 'Input'
};
