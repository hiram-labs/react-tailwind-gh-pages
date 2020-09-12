import React from 'react';
import styles from './footer.module.css';
import cx from 'classnames';

interface TProps {}

/**
 * Footer componet
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container, 'text-center w-full')}>
      <p>open-source project sponsored by</p>
      <p>Hiram Labs Ltd</p>
      <p>2020 | © CC0-1.0</p>
    </div>
  );
};

export default Footer;
