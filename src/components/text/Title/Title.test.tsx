import React from 'react';
import { render, screen } from '@testing-library/react';
import { Title } from '.';

describe('Title component', () => {
  it('renders correctly', () => {
    render(<Title text='Title Test' />);

    const titleElement = screen.getByText('Title Test');
    expect(titleElement).toBeInTheDocument();
  });
});
