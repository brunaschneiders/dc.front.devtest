import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#F9D7C9',
      main: '#FE5200',
      dark: '#E6530F'
    }
  },
  props: {
    MuiTypography: {
      variantMapping: {
        caption: 'h2',
        subtitle1: 'h4',
        body1: 'span'
      }
    }
  },
  spacing: 8
});

theme.typography.h1 = {
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem'
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '2rem'
  },
  fontWeight: 600
};

theme.typography.subtitle1 = {
  [theme.breakpoints.down('md')]: {
    fontSize: '1rem'
  },

  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem'
  },
  fontWeight: 600
};
