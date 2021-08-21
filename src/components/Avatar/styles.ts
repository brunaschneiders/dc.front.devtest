import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4)
  },
  medium: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  xlarge: {
    width: theme.spacing(15),
    height: theme.spacing(15)
  }
}));
