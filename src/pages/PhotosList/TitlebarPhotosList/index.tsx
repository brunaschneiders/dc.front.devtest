import React, { useState, useCallback } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';

import { PhotoProps } from '../..';
import { TitlebarImageList, Pagination } from '../../../components';

import { theme } from '../../../styles/theme';
import { useStyles } from './styles';

interface TitlebarPhotosListProps {
  photos: PhotoProps[];
}

export const TitlebarPhotosList = ({
  photos
}: TitlebarPhotosListProps): JSX.Element => {
  const classes = useStyles();
  const [currentPhotos, setCurrentPhotos] = useState(photos);
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

  const handleChangePage = useCallback((itemsOfCurrentPage: PhotoProps[]) => {
    setCurrentPhotos(itemsOfCurrentPage);
  }, []);

  return (
    <Box className={classes.box} component='main'>
      <TitlebarImageList
        imageList={currentPhotos}
        gap={getResponsiveData().gap}
        cols={getResponsiveData().cols}
      />

      <Box className={classes.paginationBox}>
        <Pagination
          items={photos}
          onHandlePageChanged={handleChangePage}
          itemsPerPage={12}
        />
      </Box>
    </Box>
  );
};
