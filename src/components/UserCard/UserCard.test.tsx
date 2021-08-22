import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserCard } from '.';

describe('UserCard component', () => {
  it('renders correctly', () => {
    render(
      <UserCard
        name='User Name'
        company='Company Name'
        onShowAlbunsButtonClicked={jest.fn()}
      />
    );

    const userCardElement = screen.getByText('User Name');
    expect(userCardElement).toBeInTheDocument();
  });

  it('calls onShowAlbunsButtonClicked prop when clicked', () => {
    const handleClick = jest.fn();

    render(
      <UserCard
        name='User Name'
        company='Company Name'
        onShowAlbunsButtonClicked={handleClick}
      />
    );

    const buttonElement = screen.getByText('Ver Álbuns');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
