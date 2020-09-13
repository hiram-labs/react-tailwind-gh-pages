import React from 'react';
import styles from './header.module.css';
import cx from 'classnames';
import pkg from '../../../package.json';

interface TProps {}

/**
 * Header componet
 *
 */
const Header: React.FC<TProps> = (): JSX.Element => {
  console.log(pkg);
  return (
    <div className={cx(styles.container)}>
      <div className="flex flex-col items-center justify-center my-4">
        <div>
          <span className={'text-3xl'}>
            {pkg.name
              .split('-')
              .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join(' ')}
          </span>
        </div>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded-full">
            <a href="https://github.com/hiram-labs/react-tailwind-gh-pages#readme">
              Documentation
            </a>
          </button>
        </div>
        <div className={'w-1/2 text-center'}>
          <span className={'text-lg'}>{pkg.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
