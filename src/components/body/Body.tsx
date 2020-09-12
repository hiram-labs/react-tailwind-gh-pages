import React from 'react';
import styles from './body.module.css';
import cx from 'classnames';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container, 'flex justify-center')}>
      <img
        style={{ width: '400px', height: '400px' }}
        src="images/logo/logo_white.png"
        alt="hiram labs ltd - logo"
      />
    </div>
  );
};

export default Body;
