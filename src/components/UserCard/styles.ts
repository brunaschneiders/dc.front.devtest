import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(3),
    boxShadow:
      '0 10px 13px -6px #0003, 0 20px 31px 3px #00000024, 0 8px 38px 7px #0000001f',
    borderRadius: '0.5rem',
    width: '20rem'
  },
  userData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',

    '&& h4': {
      fontWeight: 600
    },
    '&& span': {
      color: theme.palette.grey[500]
    }
  }
}));
