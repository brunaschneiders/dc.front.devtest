import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header title='Header Test' />);

    const headerElement = screen.getByTestId('header-element');
    expect(headerElement).toBeInTheDocument();
  });
});
