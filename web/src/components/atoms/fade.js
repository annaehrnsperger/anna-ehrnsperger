import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ease } from '../../utils/easing';

const Fade = ({ children, show, duration = 0.9, delay }) => (
  <StyledFade
    initial={{ opacity: 0 }}
    animate={{ opacity: show ? 1 : 0 }}
    transition={{ duration, delay, ease: ease.inOutSmooth }}
  >
    {children}
  </StyledFade>
);

const StyledFade = styled(motion.div)``;

Fade.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  duration: PropTypes.number,
  delay: PropTypes.number,
};

export default Fade;
