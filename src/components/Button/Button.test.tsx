import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('Button component', () => {
  it('renders correctly', () => {
    render(<Button text='Button Test' name='buttonTest' />);

    const buttonElement = screen.getByText('Button Test');
    expect(buttonElement).toBeInTheDocument();
  });
});
