import React from 'react';
import styles from './footer.module.scss';
import cx from 'classnames';

interface TProps {}

/**
 * Footer componet
 *
 */
const Footer: React.FC<TProps> = (): JSX.Element => {
  return <div className={cx(styles.container)}>footer</div>;
};

export default Footer;
