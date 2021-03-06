import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
    boxShadow:
      '0 10px 13px -6px #0003, 0 20px 31px 3px #00000024, 0 8px 38px 7px #0000001f',
    borderRadius: '0.5rem',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      padding: theme.spacing(2)
    },

    '& h1': {
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(0.5)
      }
    }
  }
}));
