import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ease } from '../../utils/easing';

const Marker = ({ active = true, text, delay, duration }) => (
  <AnimatePresence exitBeforeEnter>
    {active && (
      <StyledMarker
        key="marker"
        initial={{ clipPath: 'inset(0 100% 0 0%)' }}
        animate={{ clipPath: 'inset(0 0% 0 0%)' }}
        exit={{ clipPath: 'inset(0 0% 0 100%)' }}
        transition={{ duration, ease: ease.outSnap, delay }}
      >
        {text}
      </StyledMarker>
    )}
  </AnimatePresence>
);

const StyledMarker = styled(motion.span)`
  color: var(--black);
  background: var(--white);
`;

Marker.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
};

export default Marker;
