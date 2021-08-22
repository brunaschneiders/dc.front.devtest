import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '.';

describe('Input component', () => {
  it('renders correctly', () => {
    render(
      <Input
        placeholder='Placeholder'
        ariaLabel='Testar input'
        name='inputTest'
      />
    );

    const inputElement = screen.getByLabelText('Testar input');
    expect(inputElement).toBeInTheDocument();
  });
});
