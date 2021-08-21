import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';

import { AlbumProps } from '../..';
import { TitlebarImageList } from '../../../components';

import { theme } from '../../../styles/theme';

export type AlbumListProps = {
  url: string;
  href: string;
} & AlbumProps;

interface TitlebarAlbumsListProps {
  albums: AlbumListProps[];
}

export const TitlebarAlbumsList = ({
  albums
}: TitlebarAlbumsListProps): JSX.Element => {
  const screenSize = {
    mobile: useMediaQuery(theme.breakpoints.down(400)),
    xs: useMediaQuery(theme.breakpoints.down('xs')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl'))
  };

  const getResponsiveData = () => {
    const { mobile, xs, md, lg, xl } = screenSize;
    if (mobile) {
      return { gap: 2, cols: 1 };
    }
    if (xs) {
      return { gap: 2.5, cols: 2 };
    }
    if (md) {
      return { gap: 2.5, cols: 3 };
    }
    if (lg) {
      return { gap: 3, cols: 4 };
    }
    if (xl) {
      return { gap: 3.5, cols: 5 };
    }
    return { gap: 3, cols: 4 };
  };

  return (
    <Box marginTop={theme.spacing(0.5)}>
      <TitlebarImageList
        imageList={albums}
        gap={getResponsiveData().gap}
        cols={getResponsiveData().cols}
      />
    </Box>
  );
};
