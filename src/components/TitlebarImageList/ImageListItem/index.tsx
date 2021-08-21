import React from 'react';
import {
  Box,
  ImageListItem as MaterialImageListItem,
  ImageListItemBar
} from '@material-ui/core';

import { useStyles } from './styles';

interface ImageListItemProps {
  src: string;
  title: string;
  margin?: number;
}

export const ImageListItem = ({ src, title, margin }: ImageListItemProps) => {
  const classes = useStyles();

  return (
    <MaterialImageListItem className={classes.imageContainer}>
      <Box className={classes.imageBox} m={margin}>
        <img className={classes.image} src={src} alt={title} />

        <ImageListItemBar title={title} />
      </Box>
    </MaterialImageListItem>
  );
};

ImageListItem.defaultProps = {
  margin: 3
};
