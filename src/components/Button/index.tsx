import React from 'react';
import {
  Button as MaterialButton,
  ButtonProps as MaterialButtonProps
} from '@material-ui/core';

interface ButtonProps extends MaterialButtonProps {
  text: string;
  name: string;
}

export const Button = ({
  text,
  name,
  type = 'button',
  color = 'primary',
  variant = 'contained',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <MaterialButton
      name={name}
      type={type}
      color={color}
      variant={variant}
      {...props}
    >
      {text}
    </MaterialButton>
  );
};
