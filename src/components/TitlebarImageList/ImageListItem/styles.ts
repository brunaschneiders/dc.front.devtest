import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  imageContainer: {
    transition: 'transform .2s',

    '&:hover': {
      transform: 'scale(1.1)'
    }
  },
  imageBox: {
    backgroundColor: 'transparent',
    boxShadow:
      '0 5px 6px -3px #0003, 0 9px 12px 1px #00000024, 0 3px 16px 2px #0000001f',
    borderRadius: '0.5rem',
    overflow: 'hidden',
    position: 'relative',
    height: '150px',
    [theme.breakpoints.down('xs')]: {
      height: '180px'
    }
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));
