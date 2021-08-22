import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from '.';

describe('Avatar component', () => {
  it('renders correctly', () => {
    render(<Avatar />);

    const avatarElement = screen.getByAltText('Avatar do Usuário');
    expect(avatarElement).toBeInTheDocument();
  });
});
