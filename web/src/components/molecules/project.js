import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Marker from '../atoms/marker';
import { media } from '../../utils/media-queries';
import PreviewImage from '../atoms/previewImage';
import Fade from '../atoms/fade';

const Project = ({ title, url, imgSrc, imgAlt }) => {
  const [hover, setHover] = useState(false);
  const [mouseImagePos, setMouseImagePos] = useState({ x: 0, y: 20 });

  const moveImageMouse = (e) => {
    const speed = 50;
    setMouseImagePos({
      x: e.pageX / speed,
      y: e.pageY / (speed * 2),
    });
  };

  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <Fade show={inView}>
        <StyledProjects
          ref={ref}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={moveImageMouse}
        >
          <div className="headline large">
            <Marker active={hover} text={title} duration={0.6} delay={0.15} />
            <motion.h2
              initial={{ opacity: 1 }}
              animate={{ opacity: hover ? 0 : 1 }}
              transition={{ delay: 0.15, duration: 0 }}
            >
              {title}
            </motion.h2>
          </div>
          <PreviewImage
            mouseImagePos={mouseImagePos}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
        </StyledProjects>
      </Fade>
    </a>
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

  @media ${media.L} {
  }
`;

Project.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  imgSrc: PropTypes.object,
  imgAlt: PropTypes.string,
};

export default Project;
