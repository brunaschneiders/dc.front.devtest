import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
    padding: theme.spacing(2)
  },
  table: {
    tableLayout: 'auto'
  },
  emptyTableBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));
