import React from 'react';
import { ImageList, Link, Box } from '@material-ui/core';

import { ImageListItem } from './ImageListItem';

import { useStyles } from './styles';

type ImageListItemProps = {
  id: number;
  url: string;
  title: string;
  href?: string;
};

interface TitlebarImageListProps {
  imageList: ImageListItemProps[];
  cols?: number;
  gap?: number;
}

export const TitlebarImageList = ({
  imageList,
  cols,
  gap
}: TitlebarImageListProps) => {
  const classes = useStyles();

  return (
    <ImageList
      className={classes.imageList}
      rowHeight='auto'
      cols={cols}
      gap={0}
      style={{ margin: -(gap || 0) * 8 }}
    >
      {imageList.map((item) =>
        item.href ? (
          <Link key={item.id} href={item.href}>
            <ImageListItem url={item.url} title={item.title} margin={gap} />
          </Link>
        ) : (
          <Box key={item.id}>
            <ImageListItem url={item.url} title={item.title} margin={gap} />
          </Box>
        )
      )}
    </ImageList>
  );
};

TitlebarImageList.defaultProps = {
  cols: 4,
  gap: 3
};
