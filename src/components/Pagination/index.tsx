import React, { useEffect, useState, useCallback } from 'react';
import MaterialPagination, {
  PaginationProps as MaterialPaginationProps
} from '@material-ui/lab/Pagination';

type PagerProps = {
  count: number;
  startIndex: number;
  endIndex: number;
  pageSize: number;
};

interface PaginationProps<T> extends MaterialPaginationProps {
  items: T[];
  onHandlePageChanged: (items: T[]) => void;
  itemsPerPage?: number;
  defaultPage?: number;
}

export const Pagination = <T,>({
  onHandlePageChanged,
  items,
  itemsPerPage = 10,
  defaultPage = 1,
  ...props
}: PaginationProps<T>) => {
  const [pager, setPager] = useState({} as PagerProps);

  const handlePager = useCallback(
    (currentPage: number) => {
      const totalItems = items.length;
      const pageSize = itemsPerPage;

      const startIdx = (currentPage - 1) * pageSize;

      setPager({
        count: Math.ceil(totalItems / pageSize),
        startIndex: (currentPage - 1) * pageSize,
        endIndex: Math.min(startIdx + pageSize - 1, totalItems - 1),
        pageSize
      });
    },
    [items.length, itemsPerPage]
  );

  useEffect(() => {
    if (items.length) handlePager(defaultPage);
  }, [items, defaultPage, handlePager]);

  useEffect(() => {
    if (pager) {
      const itemsOfCurrentPage = items.slice(
        pager.startIndex,
        pager.endIndex + 1
      );
      onHandlePageChanged(itemsOfCurrentPage);
    }
  }, [pager, onHandlePageChanged, items]);

  return (
    <MaterialPagination
      count={pager?.count}
      variant='outlined'
      defaultPage={defaultPage}
      onChange={(_, selectedPage) => handlePager(selectedPage)}
      {...props}
    />
  );
};

Pagination.defaultProps = {
  itemsPerPage: 10,
  defaultPage: 1
};
