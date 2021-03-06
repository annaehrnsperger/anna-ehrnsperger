import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Marker from '../atoms/marker';
import { media } from '../../utils/media-queries';
import PreviewImage from '../atoms/previewImage';
import Fade from '../atoms/fade';
import { TLink } from '../atoms/tlink';

const Story = ({ date, title, imgSrc, imgAlt, slug }) => {
  const [hover, setHover] = useState(false);
  const [mouseImagePos, setMouseImagePos] = useState({ x: 0, y: 0 });

  const moveImageMouse = (e) => {
    const speed = 50;
    setMouseImagePos({
      x: e.pageX / speed,
      y: 0,
    });
  };

  const { ref, inView } = useInView({ threshold: 1 });

  return (
    <TLink to={`/${slug}/`}>
      <Fade show={inView}>
        <StyledStory
          ref={ref}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseMove={moveImageMouse}
        >
          <p className="date small">{date}</p>
          <div className="headline small">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {title}
            </motion.h2>
            <Marker active={hover} text={title} />
          </div>
          <PreviewImage
            mouseImagePos={mouseImagePos}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
          />
        </StyledStory>
      </Fade>
    </TLink>
  );
};

const StyledStory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: var(--spacing-M);
  margin-bottom: var(--v-spacing-M);
  position: relative;

  .date,
  .headline {
    height: 100%;
  }

  .date {
    min-width: 27vw;
  }

  .headline {
    position: relative;
    width: 100%;

    span {
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  @media ${media.M} {
    .headline {
      width: 30%;
    }
  }
`;

Story.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  imgSrc: PropTypes.object,
  imgAlt: PropTypes.string,
  slug: PropTypes.string,
};

export default Story;
