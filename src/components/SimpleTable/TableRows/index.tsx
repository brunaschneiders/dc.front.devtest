import React from 'react';

import { TableBody, TableCell, TableRow } from '@material-ui/core';

import { ColumnDefinitionType, Button } from '../..';

import { useStyles } from './styles';

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  actionButton?: {
    text: string;
    onActionButtonClicked: (rowData: T) => void;
  };
};

export const TableRows = <T, K extends keyof T>({
  data,
  columns,
  actionButton
}: TableRowsProps<T, K>): JSX.Element => {
  const classes = useStyles();

  const rows = data.map((row) => {
    return (
      <TableRow key={Object.values(row)[0]} className={classes.row}>
        {columns.map((column) => {
          return <TableCell key={column.header}>{row[column.key]}</TableCell>;
        })}
        {!!actionButton && (
          <TableCell>
            <Button
              text={actionButton.text}
              name='actionButton'
              size='small'
              onClick={() => actionButton.onActionButtonClicked(row)}
            />
          </TableCell>
        )}
      </TableRow>
    );
  });

  return <TableBody>{rows}</TableBody>;
};

TableRows.defaultProps = {
  actionButton: null
};
