import React, { useState, useCallback, useEffect } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Box } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { PhotoProps } from '../..';
import { TitlebarImageList, Pagination, Spinner } from '../../../components';

import { usePhotos, useLoading } from '../../../hooks';

import { theme } from '../../../styles/theme';
import { useStyles } from './styles';

export const PhotosTitlebarImagesList = (): JSX.Element => {
  const classes = useStyles();
  const { albumId } = useParams<{ albumId: string }>();
  const { activeUserAlbumPhotos, requestActiveUserAlbumPhotos } = usePhotos();
  const { isLoading } = useLoading();

  const [currentPhotos, setCurrentPhotos] = useState(activeUserAlbumPhotos);
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

  useEffect(() => {
    const getActiveUserAlbumPhotos = async () => {
      try {
        await requestActiveUserAlbumPhotos(Number(albumId));
      } catch (error) {
        toast.error(
          'Ops... Algo deu errado ao buscar os dados, tente novamente!'
        );
      }
    };

    getActiveUserAlbumPhotos();
  }, [albumId, requestActiveUserAlbumPhotos]);

  useEffect(() => {
    setCurrentPhotos(activeUserAlbumPhotos);
  }, [activeUserAlbumPhotos]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Box className={classes.box} component='main'>
          <TitlebarImageList
            imageList={currentPhotos}
            gap={getResponsiveData().gap}
            cols={getResponsiveData().cols}
          />

          <Box className={classes.paginationBox}>
            <Pagination
              items={activeUserAlbumPhotos}
              onHandlePageChanged={handleChangePage}
              itemsPerPage={12}
            />
          </Box>
        </Box>
      )}
    </>
  );
};
