import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#FBC7B7',
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
