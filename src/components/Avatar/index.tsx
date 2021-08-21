import React from 'react';
import {
  Avatar as MaterialAvatar,
  AvatarProps as MaterialAvatarProps
} from '@material-ui/core';

import { useStyles } from './styles';

interface AvatarProps extends MaterialAvatarProps {
  url?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export const Avatar = ({
  size = 'medium',
  url,
  ...props
}: AvatarProps): JSX.Element => {
  const classes = useStyles();

  return (
    <MaterialAvatar
      className={classes[size]}
      src={url}
      alt='Avatar do Usuário'
      {...props}
    />
  );
};

Avatar.defaultProps = {
  size: 'medium',
  url: 'https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg'
};
