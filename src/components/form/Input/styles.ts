import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    marginRight: `${theme.spacing(2)}px`
  },
  inputBox: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.grey[100],
    boxShadow: '0 1px 3px #0003, 0 1px 1px #00000024, 0 2px 1px -1px #0000001f',
    borderRadius: '0.5rem',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  }
}));
