import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
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
      style={{
        left: randomPos.x,
        transform: `translate3d(${mouseImagePos.x}px,${mouseImagePos.y}px,0)`,
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

const StyledPreviewImage = styled.figure`
  position: absolute;
  z-index: 2;
  transition: all 0.3s ease-out;
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
