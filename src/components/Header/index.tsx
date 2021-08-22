import React, { ReactNode } from 'react';

import { Title } from '..';

import { useStyles } from './styles';

interface HeaderProps {
  title: string;
  rightContent?: ReactNode;
}

export const Header = ({ title, rightContent }: HeaderProps): JSX.Element => {
  const { header } = useStyles();

  return (
    <header data-testid='header-element' className={header}>
      <Title text={title} />
      {!!rightContent && rightContent}
    </header>
  );
};

Header.defaultProps = {
  rightContent: null
};
