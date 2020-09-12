import React from 'react';
import styles from './header.module.css';
import cx from 'classnames';

interface TProps {}

/**
 * Header componet
 *
 */
const Header: React.FC<TProps> = (): JSX.Element => {
  console.log(styles.container);
  return <div className={cx(styles.container)}>header</div>;
};

export default Header;
