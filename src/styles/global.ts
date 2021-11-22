import withStyles from '@material-ui/core/styles/withStyles';
import { theme } from './theme';

export const GlobalCss = withStyles({
  '@global': {
    'html, body': {
      backgroundColor: theme.palette.primary.main,
      margin: 0
    }
  }
})(() => null);
