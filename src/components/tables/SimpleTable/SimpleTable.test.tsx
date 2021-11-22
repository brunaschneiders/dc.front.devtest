import React from 'react';
import { render, screen } from '@testing-library/react';
import { SimpleTable, ColumnProps } from '.';

describe('Simple Table component', () => {
  it('renders in table rows based on provided columns', () => {
    type DataProps = {
      column1: string;
      column2: string;
      column3: string;
    };

    const tableRows: DataProps[] = [
      {
        column1: 'Coluna 1 - Linha 1',
        column2: 'Coluna 2 - Linha 1',
        column3: 'Coluna 3 - Linha 1'
      },
      {
        column1: 'Coluna 1 - Linha 2',
        column2: 'Coluna 2 - Linha 2',
        column3: 'Coluna 3 - Linha 2'
      },
      {
        column1: 'Coluna 1 - Linha 3',
        column2: 'Coluna 2 - Linha 3',
        column3: 'Coluna 3 - Linha 3'
      }
    ];

    const tableColumns: ColumnProps<DataProps, keyof DataProps>[] = [
      {
        key: 'column1',
        header: 'Coluna 1'
      },
      {
        key: 'column2',
        header: 'Coluna 2'
      },
      {
        key: 'column3',
        header: 'Coluna 3'
      }
    ];

    const { container } = render(
      <SimpleTable data={tableRows} columns={tableColumns} />
    );

    const firstHeaderElement = screen.getByText(tableColumns[0].header);
    expect(firstHeaderElement).toBeInTheDocument();

    const firstCellDataElement = screen.getByText(tableRows[0].column1);
    expect(firstCellDataElement).toBeInTheDocument();

    const tableElement = container.getElementsByTagName('table');
    expect(tableElement).toHaveLength(1);

    const theadElement = container.getElementsByTagName('thead');
    expect(theadElement).toHaveLength(1);

    const headersElements = container.getElementsByTagName('th');
    expect(headersElements).toHaveLength(tableColumns.length);

    const tbodyElement = container.getElementsByTagName('tbody');
    expect(tbodyElement).toHaveLength(1);

    // expected to have tableRows.length + 1 (header row) rows
    const rowsElements = container.getElementsByTagName('tr');
    expect(rowsElements).toHaveLength(tableRows.length + 1);
  });
});
