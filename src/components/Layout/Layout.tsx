import React from 'react';
import Footer from './Footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, footer }) => {
  return (
    <>
      {/* {navbar} */}
      <main>{children}</main>
      {footer}
    </>
  );
}

export default Layout;

