import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import { useWindowSize } from '../../hooks/useWindowSize';
import { media } from '../../utils/media-queries';

const PreviewImage = ({ album, mouseImagePos, imgSrc, imgAlt }) => {
  const size = useWindowSize();

  const [randomPos, setRandomPos] = useState({ x: 0 });

  useEffect(() => {
    setRandomPos({ x: size.width * (Math.random() / 1.2) });
  }, [size]);

  return (
    <StyledPreviewImage
      animate={{
        left: randomPos.x + mouseImagePos.x,
        top: mouseImagePos.y,
      }}
    >
      {album ? (
        <img src={imgSrc} alt="Cover" />
      ) : (
        <Img fluid={imgSrc} alt={imgAlt} />
      )}
    </StyledPreviewImage>
  );
};

const StyledPreviewImage = styled(motion.figure)`
  position: absolute;
  z-index: 2;
  width: auto;
  top: 15%;
  display: flex;

  .gatsby-image-wrapper,
  img {
    width: 7vw;
    height: 7vw;
  }

  @media ${media.M} {
    .gatsby-image-wrapper,
    img {
      width: 4vw;
      height: 4vw;
    }
  }
`;

PreviewImage.propTypes = {
  album: PropTypes.bool,
  mouseImagePos: PropTypes.object,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default PreviewImage;
