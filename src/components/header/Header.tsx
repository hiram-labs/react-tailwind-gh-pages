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
    <div className={cx(styles.container)}>
      <div className="text-center my-4">
        <h1>React Tailwind GH-Pages</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded-full">
          <a href="https://github.com/hiram-labs/react-tailwind-gh-pages#readme">
            Documentation
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
