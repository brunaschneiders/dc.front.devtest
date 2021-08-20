import React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

interface TitleProps extends TypographyProps {
  text: string;
}

export const Title = ({ text, ...props }: TitleProps): JSX.Element => {
  return (
    <Typography variant='h1' color='primary' {...props}>
      {text}
    </Typography>
  );
};
