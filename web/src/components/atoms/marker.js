import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import PropTypes from 'prop-types';
import { ease } from '../../utils/easing';

const Marker = ({
  active = true,
  text,
  delay = 0,
  duration,
  style,
  light = false,
}) => (
  <AnimatePresence>
    {active && (
      <motion.span
        className={light ? 'dark' : 'light'}
        key="marker"
        initial={{ clipPath: 'inset(0 100% 0 0%)' }}
        animate={{ clipPath: 'inset(0 0% 0 0%)' }}
        exit={{ clipPath: 'inset(0 0% 0 100%)' }}
        transition={{ duration, ease: ease.outSnap, delay }}
        style={style}
      >
        {text}
      </motion.span>
    )}
  </AnimatePresence>
);

Marker.propTypes = {
  active: PropTypes.bool,
  text: PropTypes.string,
  delay: PropTypes.number,
  duration: PropTypes.number,
  style: PropTypes.object,
  light: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default Marker;
