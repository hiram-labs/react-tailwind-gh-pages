import React from 'react';
import styles from './body.module.scss';
import cx from 'classnames';

interface TProps {}

/**
 * Body componet
 *
 */
const Body: React.FC<TProps> = (): JSX.Element => {
  return <div className={cx(styles.container)}>Body</div>;
};

export default Body;
