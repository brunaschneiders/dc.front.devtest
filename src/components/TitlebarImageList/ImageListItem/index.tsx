import React from 'react';
import {
  Box,
  ImageListItem as MaterialImageListItem,
  ImageListItemBar
} from '@material-ui/core';

import { useStyles } from './styles';

interface ImageListItemProps {
  url: string;
  title: string;
  margin?: number;
}

export const ImageListItem = ({ url, title, margin }: ImageListItemProps) => {
  const classes = useStyles();

  return (
    <MaterialImageListItem
      className={classes.imageContainer}
      data-testid='image-list-item-element'
    >
      <Box className={classes.imageBox} m={margin}>
        <img className={classes.image} src={url} alt={title} />

        <ImageListItemBar title={title} />
      </Box>
    </MaterialImageListItem>
  );
};

ImageListItem.defaultProps = {
  margin: 3
};
