import React, { ReactNode } from 'react';

import { TableBody, TableCell, TableRow, Link } from '@material-ui/core';

import { ColumnDefinitionType } from '..';

import { useStyles } from './styles';

type TableRowsProps<T, K extends keyof T> = {
  data: Array<T>;
  columns: Array<ColumnDefinitionType<T, K>>;
  actionButton?: ReactNode;
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
        {!!actionButton && <TableCell>{actionButton}</TableCell>}
      </TableRow>
    );
  });

  return <TableBody>{rows}</TableBody>;
};

TableRows.defaultProps = {
  actionButton: null
};
