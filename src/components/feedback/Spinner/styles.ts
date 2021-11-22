import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  container: {
    content: '',
    display: 'block',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
  box: {
    position: 'fixed',
    zIndex: 1000000,
    height: '4rem',
    width: '4rem',
    overflow: 'visible',
    margin: 'auto',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
}));
