import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Preview from '../../assets/images/preview.png';
import { useWindowSize } from '../../hooks/useWindowSize';
import Marker from './marker';
import { ease } from '../../utils/easing';
import { media } from '../../utils/media-queries';
import PreviewImage from './previewImage';
import Fade from './fade';

const Projects = ({ title, subtitle }) => {
  const [hover, setHover] = useState(false);
  const [mouseImagePos, setMouseImagePos] = useState({ x: 0, y: 0 });

  const moveImageMouse = (e) => {
    const speed = 30;
    setMouseImagePos({
      x: e.pageX / speed,
      y: e.pageY / (speed * 9),
    });
  };

  const { ref, inView, entry } = useInView({ threshold: 1 });

  return (
    <Fade show={inView}>
      <StyledProjects
        ref={ref}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={moveImageMouse}
      >
        <div className="headline big">
          <Marker
            active={hover}
            text={title}
            subtitle={subtitle}
            duration={0.6}
            delay={0.15}
          />
          <motion.h2
            initial={{ opacity: 1 }}
            animate={{ opacity: hover ? 0 : 1 }}
            transition={{ delay: 0.15, duration: 0 }}
          >
            {title} <br />
            {subtitle}
          </motion.h2>
        </div>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="small"
          >
            2010
            <br />
            Slider
            <br />
            Carousel
            <br />
            Page Transitions
            <br />
          </motion.div>
        )}
        <PreviewImage mouseImagePos={mouseImagePos} imgSrc={Preview} />
      </StyledProjects>
    </Fade>
  );
};

const StyledProjects = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  margin-bottom: var(--v-spacing-M);

  .headline {
    span {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
  }

  .small {
    display: none;
  }

  @media ${media.L} {
    .small {
      display: block;
      width: 30%;
    }
  }
`;

export default Projects;
