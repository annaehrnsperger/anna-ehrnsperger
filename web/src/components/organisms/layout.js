import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { injectGlobal } from 'emotion';
import { AnimatePresence, motion } from 'framer-motion';
import GlobalStyles from '../../styles/GlobalStyles';
import Normalize from '../../styles/Normalize';
import Variables from '../../styles/Variables';
import Header from '../molecules/header';
import Footer from '../atoms/footer';
import { ease } from '../../utils/easing';

const Layout = ({ children, location }) => (
  <>
    {/**
     * Styles
     */}
    <Normalize />
    <GlobalStyles />
    <Variables />
    {/**
     * Content
     */}
    {/* <AnimatePresence exitBeforeEnter initial={false}> */}
    <motion.main
    // key={location && `key${location.pathname}`}
    // initial={{ opacity: 0 }}
    // animate={{ opacity: 1 }}
    // exit={{ opacity: 0 }}
    // transition={{ duration: 4, ease: ease.outSmooth }}
    >
      {children}
    </motion.main>
    <Footer />
    {/* </AnimatePresence> */}
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default Layout;
