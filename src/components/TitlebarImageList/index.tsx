import React from 'react';
import { ImageList, Link } from '@material-ui/core';

import { ImageListItem } from './ImageListItem';

import { useStyles } from './styles';

type ImageListItemProps = {
  id: number;
  src: string;
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
            <ImageListItem src={item.src} title={item.title} margin={gap} />
          </Link>
        ) : (
          <ImageListItem src={item.src} title={item.title} margin={gap} />
        )
      )}
    </ImageList>
  );
};

TitlebarImageList.defaultProps = {
  cols: 4,
  gap: 3
};
