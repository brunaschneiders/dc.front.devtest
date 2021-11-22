import React from 'react';
import { render, screen } from '@testing-library/react';
import { VerticalTable } from '.';

describe('Simple Table component', () => {
  it('renders in table headers and data cells', () => {
    const data = [
      {
        header: 'Header 1',
        value: 'Cell 1'
      },
      {
        header: 'Header 2',
        value: 'Cell 2'
      },
      {
        header: 'Header 3',
        value: 'Cell 3'
      },
      {
        header: 'Header 4',
        value: 'Cell 4'
      }
    ];

    const { container } = render(<VerticalTable data={data} />);

    const firstHeaderElement = screen.getByText(data[0].header);
    expect(firstHeaderElement).toBeInTheDocument();

    const firstCellDataElement = screen.getByText(data[0].value);
    expect(firstCellDataElement).toBeInTheDocument();

    const tableElement = container.getElementsByTagName('table');
    expect(tableElement).toHaveLength(1);

    const headersElements = container.getElementsByTagName('th');
    expect(headersElements).toHaveLength(data.length);

    const rowsElements = container.getElementsByTagName('td');
    expect(rowsElements).toHaveLength(data.length);
  });
});
