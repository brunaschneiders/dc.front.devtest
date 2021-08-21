import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    '&& th': {
      padding: theme.spacing(1.5),
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.down('sm')]: {
        padding: `0 ${theme.spacing(0.5)}px`
      }
    }
  }
}));
