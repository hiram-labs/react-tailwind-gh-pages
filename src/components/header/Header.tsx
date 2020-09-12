import React from 'react';
import styles from './header.module.css';
import cx from 'classnames';

interface TProps {}

/**
 * Header componet
 *
 */
const Header: React.FC<TProps> = (): JSX.Element => {
  return (
    <div className={cx(styles.container, 'my-4')}>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          <a href="https://github.com/hiram-labs/react-tailwind-gh-pages#readme">
            Documentation
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
