import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../../styles/GlobalStyles';
import Normalize from '../../styles/Normalize';
import Variables from '../../styles/Variables';
import Footer from '../molecules/footer';
import LayoutProvider from './layoutProvider';
import PageTransition from '../atoms/pageTransition';
import { useClientSide } from '../../hooks/useClientSide';

const Layout = ({ children, light }) => {
  const isClient = useClientSide();
  const path = isClient && window.location.pathname;

  return (
    <LayoutProvider>
      {/**
       * Styles
       */}
      <Normalize />
      <GlobalStyles />
      <Variables />
      {/**
       * Content
       */}
      <PageTransition className={path === '/' ? 'light' : 'dark'} />
      <main>{children}</main>
      <Footer light={light} />
    </LayoutProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  light: PropTypes.string,
};

export default Layout;
