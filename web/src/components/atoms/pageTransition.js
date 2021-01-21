import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ease } from '../../utils/easing';

const PageTransition = ({ active, light = false, zIndex }) => (
  <StyledPageTransition
    className={light ? 'dark' : 'light'}
    initial={{ width: 0 }}
    animate={{ width: active ? '100vw' : 0 }}
    transition={{ duration: 0.8, ease: ease.inOutSnap }}
    style={{ zIndex }}
  />
);

const StyledPageTransition = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 3;
`;

PageTransition.propTypes = {
  active: PropTypes.bool,
  light: PropTypes.bool,
  zIndex: PropTypes.number,
};

export default PageTransition;
