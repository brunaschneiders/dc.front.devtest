import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
    overflowY: 'auto',
    padding: theme.spacing(2)
  },
  table: {
    tableLayout: 'auto'
  },
  row: {
    '&& td': {
      padding: theme.spacing(1.45),
      borderBottom: `0.5px solid ${theme.palette.primary.light}`,
      color: theme.palette.grey[500],

      [theme.breakpoints.down(800)]: {
        padding: theme.spacing(0.5)
      }
    },

    '&& th': {
      padding: theme.spacing(1.45),
      borderBottom: `0.5px solid ${theme.palette.primary.light}`,
      fontWeight: 600,

      [theme.breakpoints.down(800)]: {
        padding: theme.spacing(0.5)
      }
    },

    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  }
}));
