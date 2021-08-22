import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from '.';

describe('Pagination component', () => {
  it('renders correctly', () => {
    const items = [1, 2, 3, 4, 5];

    render(<Pagination items={items} onHandlePageChanged={jest.fn()} />);

    const paginationElement = screen.getByLabelText('pagination navigation');
    expect(paginationElement).toBeInTheDocument();
  });

  it('shows buttons qty correctly', () => {
    const items = [1, 2, 3, 4, 5];

    const { container } = render(
      <Pagination
        items={items}
        onHandlePageChanged={jest.fn()}
        itemsPerPage={3}
      />
    );

    const buttonsElementsQty = container.getElementsByClassName(
      'MuiPaginationItem-page'
    ).length;
    expect(buttonsElementsQty).toBe(4);
  });

  it('changes button style when selected', () => {
    const items = [1, 2, 3, 4, 5];

    render(
      <Pagination
        items={items}
        onHandlePageChanged={jest.fn()}
        itemsPerPage={3}
      />
    );

    const selectedButtonElement = screen.getByText('2');
    fireEvent.click(selectedButtonElement);
    expect(selectedButtonElement).toHaveClass('Mui-selected');
  });
});

describe('Filter items', () => {
  it('return filtered items correctly', () => {
    const items = [1, 2, 3, 4, 5];

    const expectedItemsFiltered = [3, 4];
    const notExpectedItemsFiltered = [1, 2];
    let filteredItemsReceived;

    const paginate = (filteredItems: number[]) => {
      filteredItemsReceived = filteredItems;
    };

    render(
      <Pagination
        items={items}
        itemsPerPage={2}
        onHandlePageChanged={paginate}
      />
    );
    const selectedButtonElement = screen.getByText('2');
    fireEvent.click(selectedButtonElement);

    expect(filteredItemsReceived).toEqual(expectedItemsFiltered);
    expect(filteredItemsReceived).not.toEqual(notExpectedItemsFiltered);
  });
});

describe('Acessibility Label', () => {
  it('shows previous page button label correctly', () => {
    const items = [1, 2, 3, 4, 5];

    render(<Pagination items={items} onHandlePageChanged={jest.fn()} />);

    const previousPageButtonElement = screen.getByLabelText(
      'Go to previous page'
    );
    expect(previousPageButtonElement).toBeInTheDocument();
  });

  it('shows next page button label correctly', () => {
    const items = [1, 2, 3, 4, 5];

    render(<Pagination items={items} onHandlePageChanged={jest.fn()} />);

    const nextPageButtonElement = screen.getByLabelText('Go to next page');
    expect(nextPageButtonElement).toBeInTheDocument();
  });
});
