import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    marginTop: theme.spacing(5),

    [theme.breakpoints.up(800)]: {
      height: 'auto',
      maxHeight: 'calc(100vh - 12.5rem)'
    },

    [theme.breakpoints.down(800)]: {
      flexDirection: 'column'
    }
  },
  tableBox: {
    width: '100%',
    boxShadow:
      '0 10px 13px -6px #0003, 0 20px 31px 3px #00000024, 0 8px 38px 7px #0000001f',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down(800)]: {
      marginLeft: 0,
      marginTop: theme.spacing(4)
    }
  },
  userCardBox: {
    width: '20rem',
    [theme.breakpoints.down(800)]: {
      width: '100%'
    }
  }
}));
