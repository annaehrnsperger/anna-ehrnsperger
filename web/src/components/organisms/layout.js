import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import GlobalStyles from '../../styles/GlobalStyles';
import Normalize from '../../styles/Normalize';
import Variables from '../../styles/Variables';
import Footer from '../molecules/footer';

const Layout = ({ children, light }) => (
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
    <main>{children}</main>
    <Footer light={light} />
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
  light: PropTypes.string,
};

export default Layout;
