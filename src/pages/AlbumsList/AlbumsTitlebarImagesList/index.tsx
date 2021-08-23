import React, { useEffect } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';

import { TitlebarImageList } from '../../../components';

import { useAlbums } from '../../../hooks';

import { theme } from '../../../styles/theme';
import { useStyles } from './styles';

export const AlbumsTitlebarImagesList = (): JSX.Element => {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();
  const { pathname } = useLocation();
  const { parsedActiveUserAlbums, requestActiveUserAlbums } = useAlbums();

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

  useEffect(() => {
    requestActiveUserAlbums(Number(userId), pathname);
  }, [userId, pathname, requestActiveUserAlbums]);

  return (
    <Box className={classes.box} component='main'>
      <TitlebarImageList
        imageList={parsedActiveUserAlbums}
        gap={getResponsiveData().gap}
        cols={getResponsiveData().cols}
      />
    </Box>
  );
};
