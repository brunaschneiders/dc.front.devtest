import React from 'react';

import {
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Table
} from '@material-ui/core';

import { useStyles } from './styles';

export type RowProps = {
  header: string;
  value: string;
};

interface VerticalTableProps {
  data: RowProps[];
}

export const VerticalTable = ({ data }: VerticalTableProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper className={classes.box}>
      <Table className={classes.table}>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.header} className={classes.row}>
              <TableCell component='th' variant='head'>
                {row.header}
              </TableCell>
              <TableCell> {row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
