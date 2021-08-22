import React from 'react';

import { TableCell, TableHead, TableRow } from '@material-ui/core';

import { ColumnProps } from '..';

import { useStyles } from './styles';

type TableHeaderProps<T, K extends keyof T> = {
  columns: Array<ColumnProps<T, K>>;
  hasActionButtonColumn?: boolean;
};

export const TableHeader = <T, K extends keyof T>({
  columns,
  hasActionButtonColumn
}: TableHeaderProps<T, K>): JSX.Element => {
  const classes = useStyles();

  const headers = columns.map((column) => {
    return <TableCell key={column.header}>{column.header}</TableCell>;
  });

  return (
    <TableHead>
      <TableRow className={classes.row}>
        {headers}
        {hasActionButtonColumn && <TableCell>Ação</TableCell>}
      </TableRow>
    </TableHead>
  );
};

TableHeader.defaultProps = {
  hasActionButtonColumn: false
};
