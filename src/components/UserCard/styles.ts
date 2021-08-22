import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(5),
    boxShadow:
      '0 10px 13px -6px #0003, 0 20px 31px 3px #00000024, 0 8px 38px 7px #0000001f',
    borderRadius: '0.5rem',
    width: '100%',
    height: '100%'
  },
  userData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: `${theme.spacing(3)}px 0`,

    '&& h4': {
      textAlign: 'center',
      marginBottom: theme.spacing(0.5)
    },
    '&& span': {
      color: theme.palette.grey[500],
      textAlign: 'center'
    }
  }
}));
