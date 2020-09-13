import React, { useRef } from 'react';
import { useResponsiveTypo } from '../../hooks/index';

interface TProps {
  header: JSX.Element;
  body: JSX.Element | string;
  footer: JSX.Element | string;
}

/**
 * Layout componet
 *
 * @property JSX.Element
 * @property JSX.Element
 * @property JSX.Element
 */
const Layout: React.FC<TProps> = ({ header, body, footer }): JSX.Element => {
  const thisComponent = useRef<HTMLDivElement>(null); // gets ref for component

  useResponsiveTypo(thisComponent); // trigger the hook on load
  return (
    <div
      className={
        'min-h-screen bg-black text-white flex flex-col justify-between'
      }
      ref={thisComponent}
    >
      {header}
      {body}
      {footer}
    </div>
  );
};

export default Layout;
