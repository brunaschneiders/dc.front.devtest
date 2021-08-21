import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    color: theme.palette.grey[600],
    '&& td': {
      padding: theme.spacing(2.5),
      borderBottom: `0.5px solid ${theme.palette.primary.light}`,

      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1)
      }
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  }
}));
