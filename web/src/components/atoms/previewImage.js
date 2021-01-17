import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useWindowSize } from '../../hooks/useWindowSize';

const PreviewImage = ({ mouseImagePos, imgSrc, imgAlt }) => {
  const size = useWindowSize();

  const [randomPos, setRandomPos] = useState({ x: 0 });

  useEffect(() => {
    setRandomPos({ x: size.width * (Math.random() / 1.2) });
  }, []);

  return (
    <StyledPreviewImage
      style={{
        left: randomPos.x,
        transform: `translate3d(${mouseImagePos.x}px,${mouseImagePos.y}px,0)`,
      }}
    >
      <img src={imgSrc} alt={imgAlt} />
      {/* <Img fluid="" /> */}
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

  img {
    width: 4vw;
    height: 4vw;
  }
`;

PreviewImage.propTypes = {
  mouseImagePos: PropTypes.object,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default PreviewImage;
