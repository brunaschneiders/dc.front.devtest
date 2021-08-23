import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import {theme} from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: theme.palette.grey[100],
      },
      {
        name: 'primary',
        value: theme.palette.primary.main,
      },
    ],
  },
}
export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Story />
    </ThemeProvider>
  ),
];