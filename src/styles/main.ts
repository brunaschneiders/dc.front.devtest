import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    minHeight: '100vh',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 2rem'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      padding: '2rem 4rem'
    },

    [theme.breakpoints.up('md')]: {
      padding: '2rem 8rem'
    }
  }
}));
