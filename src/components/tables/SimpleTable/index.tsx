import React from 'react';

import { Table, Paper, Typography, Box } from '@material-ui/core';

import { TableHeader } from './TableHeader';
import { TableRows } from './TableRows';

import { useStyles } from './styles';

export type ColumnProps<T, K extends keyof T> = {
  key: K;
  header: string;
};

interface SimpleTableProps<T, K extends keyof T> {
  data: Array<T>;
  columns: Array<ColumnProps<T, K>>;
  actionButton?: {
    text: string;
    onActionButtonClicked: (rowData: T) => void;
  };
}

export const SimpleTable = <T, K extends keyof T>({
  data,
  columns,
  actionButton
}: SimpleTableProps<T, K>): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper className={classes.box}>
      <Table className={classes.table} size='small'>
        <TableHeader columns={columns} hasActionButtonColumn={!!actionButton} />
        {!!data.length && (
          <TableRows
            data={data}
            columns={columns}
            actionButton={actionButton}
          />
        )}
      </Table>
      {!data.length && (
        <Box className={classes.emptyTableBox}>
          <Typography>Sem resultados...</Typography>
        </Box>
      )}
    </Paper>
  );
};

SimpleTable.defaultProps = {
  actionButton: null
};
