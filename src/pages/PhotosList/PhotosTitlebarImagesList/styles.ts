import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(5)
  },
  paginationBox: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2.5)
    }
  }
}));
