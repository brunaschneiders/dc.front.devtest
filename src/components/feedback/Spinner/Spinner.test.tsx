import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '.';

describe('Spinner component', () => {
  it('renders correctly', () => {
    render(<Spinner />);

    const spinnerElement = screen.getByTestId('spinner-element');
    expect(spinnerElement).toBeInTheDocument();
  });
});
