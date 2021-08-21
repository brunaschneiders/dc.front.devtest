import React, { ReactNode } from 'react';
import { InputBase, InputBaseProps, Box } from '@material-ui/core';

import { useStyles } from './styles';

interface InputProps extends InputBaseProps {
  ariaLabel: string;
  name: string;
  icon?: ReactNode;
}

export const Input = ({
  name,
  ariaLabel,
  icon,
  ...props
}: InputProps): JSX.Element => {
  const { inputBox, iconBox } = useStyles();

  return (
    <Box className={inputBox}>
      {!!icon && <Box className={iconBox}>{icon}</Box>}
      <InputBase name={name} aria-label={ariaLabel} {...props} />
    </Box>
  );
};

Input.defaultProps = {
  icon: null
};
