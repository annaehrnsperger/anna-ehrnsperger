import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import Preview from '../../assets/images/preview.png';
import { useWindowSize } from '../../hooks/useWindowSize';
import Marker from './marker';
import { ease } from '../../utils/easing';
import { media } from '../../utils/media-queries';

const Projects = ({ title }) => {
  const size = useWindowSize();

  const [hover, setHover] = useState(false);
  const [randomPos, setRandomPos] = useState({ x: 0, y: 0 });
  const [mouseImagePos, setMouseImagePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setRandomPos({ x: size.width * (Math.random() / 1.2) });
  }, []);

  const moveImageMouse = (e) => {
    const speed = 50;
    setMouseImagePos({ x: e.pageX / speed, y: e.pageY / (speed * 3) });
  };

  return (
    <StyledProjects
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseMove={moveImageMouse}
    >
      <div className="headline big">
        <Marker active={hover} text={title} delay={0} duration={0.8} />
        <h3 style={{ opacity: hover ? 0 : 1 }}>{title}</h3>
      </div>
      {hover && (
        <motion.p
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
        </motion.p>
      )}
      <div
        className="preview"
        style={{
          left: randomPos.x,
          transform: `translate3d(${mouseImagePos.x}px,${mouseImagePos.y}px,0)`,
        }}
      >
        <img src={Preview} alt="" />
        {/* <Img fluid="" /> */}
      </div>
    </StyledProjects>
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
    h3 {
      position: relative;
    }

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

  .preview {
    z-index: 2;
    position: absolute;
    top: 0;
    overflow: hidden;
    height: 100%;
    width: auto;
    transition: all 0.3s ease-out;

    img {
      height: 100%;
      width: auto;
      object-fit: cover;
      clip-path: inset(0% 60% 60% 0%);
    }
  }

  @media ${media.L} {
    .small {
      display: block;
      text-align: right;
    }
  }
`;

export default Projects;
