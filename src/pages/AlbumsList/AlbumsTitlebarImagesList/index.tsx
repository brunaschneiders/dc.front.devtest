import React, { useEffect } from 'react';
import { Box, useMediaQuery } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TitlebarImageList, Spinner } from '../../../components';

import { useAlbums, useLoading } from '../../../hooks';

import { theme } from '../../../styles/theme';
import { useStyles } from './styles';

export const AlbumsTitlebarImagesList = (): JSX.Element => {
  const classes = useStyles();
  const { userId } = useParams<{ userId: string }>();
  const { pathname } = useLocation();
  const { parsedActiveUserAlbums, requestActiveUserAlbums } = useAlbums();
  const { isLoading } = useLoading();

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
    const getActiveUserAlbums = async () => {
      try {
        await requestActiveUserAlbums(Number(userId), pathname);
      } catch (error) {
        toast.error(
          'Ops... Algo deu errado ao buscar os dados, tente novamente!'
        );
      }
    };

    getActiveUserAlbums();
  }, [userId, pathname, requestActiveUserAlbums]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Box className={classes.box} component='main'>
          <TitlebarImageList
            imageList={parsedActiveUserAlbums}
            gap={getResponsiveData().gap}
            cols={getResponsiveData().cols}
          />
        </Box>
      )}
    </>
  );
};
