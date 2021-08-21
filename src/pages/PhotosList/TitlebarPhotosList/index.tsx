import React, { useEffect, useState, useCallback } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';

import { PhotoProps } from '../..';
import { TitlebarImageList, Pagination } from '../../../components';

import { theme } from '../../../styles/theme';

interface TitlebarPhotosListProps {
  photos: PhotoProps[];
}

export const TitlebarPhotosList = ({
  photos
}: TitlebarPhotosListProps): JSX.Element => {
  const [currentPhotos, setCurrentPhotos] = useState(photos);
  const [gap, setGap] = useState(3);
  const [cols, setCols] = useState(4);
  const screenSize = {
    mobile: useMediaQuery(theme.breakpoints.down(400)),
    xs: useMediaQuery(theme.breakpoints.down('xs')),
    md: useMediaQuery(theme.breakpoints.down('md')),
    lg: useMediaQuery(theme.breakpoints.down('lg')),
    xl: useMediaQuery(theme.breakpoints.up('xl'))
  };

  useEffect(() => {
    const handleResponsiveData = () => {
      const { mobile, xs, md, lg, xl } = screenSize;
      if (mobile) {
        setGap(2);
        setCols(1);
      } else if (xs) {
        setGap(2.5);
        setCols(2);
      } else if (md) {
        setGap(2.5);
        setCols(3);
      } else if (lg) {
        setGap(3);
        setCols(4);
      } else if (xl) {
        setGap(3.5);
        setCols(5);
      }
    };

    handleResponsiveData();
  }, [screenSize]);

  const handleChangePage = useCallback((itemsOfCurrentPage: PhotoProps[]) => {
    setCurrentPhotos(itemsOfCurrentPage);
  }, []);

  return (
    <Box marginTop={theme.spacing(0.5)}>
      <TitlebarImageList imageList={currentPhotos} gap={gap} cols={cols} />

      <Box paddingY={4}>
        <Pagination
          items={photos}
          onHandlePageChanged={handleChangePage}
          itemsPerPage={12}
        />
      </Box>
    </Box>
  );
};
