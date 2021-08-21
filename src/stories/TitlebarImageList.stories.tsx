import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TitlebarImageList } from '../components';

const imageList = [
  {
    id: 1,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'Image',
    href: '/'
  },
  {
    id: 2,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'Image',
    href: '/'
  },
  {
    id: 3,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'Image',
    href: '/'
  },
  {
    id: 4,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'Image',
    href: '/'
  },
  {
    id: 5,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'Image',
    href: '/'
  },
  {
    id: 6,
    url: 'https://via.placeholder.com/600/92c952',
    title: 'Image',
    href: '/'
  }
];

export default {
  title: 'Titlebar Image List',
  component: TitlebarImageList,
  args: {
    imageList
  }
} as ComponentMeta<typeof TitlebarImageList>;

const Template: ComponentStory<typeof TitlebarImageList> = (args) => (
  <TitlebarImageList {...args} />
);

export const Default = Template.bind({});
