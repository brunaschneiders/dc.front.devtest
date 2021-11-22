import React from 'react';
import { render, screen } from '@testing-library/react';
import { TitlebarImageList } from '.';

describe('TitlebarImageList component', () => {
  it('renders correctly', () => {
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
      }
    ];

    render(<TitlebarImageList imageList={imageList} />);

    const titlebarImageListElement = screen.getByTestId('image-list-element');
    expect(titlebarImageListElement).toBeInTheDocument();

    const titlebarImageListItemElementsQty = screen.getAllByTestId(
      'image-list-item-element'
    ).length;
    expect(titlebarImageListItemElementsQty).toBe(imageList.length);
  });
});
