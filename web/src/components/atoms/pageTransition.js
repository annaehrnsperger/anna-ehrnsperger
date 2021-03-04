import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ease } from '../../utils/easing';
import { LayoutContext } from '../organisms/layoutProvider';

const PageTransition = ({ className }) => {
  const { transition } = useContext(LayoutContext);

  return (
    <AnimatePresence>
      {transition && (
        <StyledPageTransition
          className={className}
          key="transition"
          initial={{ clipPath: 'inset(0 100% 0 0%)' }}
          animate={{ clipPath: 'inset(0 0% 0 0%)' }}
          exit={{ clipPath: 'inset(0 0% 0 100%)' }}
          transition={{ duration: 0.8, ease: ease.inOutSnap }}
        />
      )}
    </AnimatePresence>
  );
};

const StyledPageTransition = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
`;

PageTransition.propTypes = {
  className: PropTypes.string,
};

export default PageTransition;
