import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  tableBox: {
    height: '66vh',
    boxShadow:
      '0 10px 13px -6px #0003, 0 20px 31px 3px #00000024, 0 8px 38px 7px #0000001f',
    borderRadius: '0.5rem',
    overflow: 'hidden',

    [theme.breakpoints.down('xs')]: {
      height: '72vh'
    }
  }
}));
