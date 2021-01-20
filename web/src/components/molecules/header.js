import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useViewportScroll } from 'framer-motion';
import Nav from './nav';
import { media } from '../../utils/media-queries';
import Marker from '../atoms/marker';

const Header = () => {
  const [hideLogo, setHideLogo] = useState(false);
  const [showSmall, setShowSmall] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange(() => {
      if (scrollYProgress.current > 0.04) {
        setHideLogo(true);
      } else {
        setHideLogo(false);
      }

      if (scrollYProgress.current > 0.08) {
        setShowSmall(true);
      } else {
        setShowSmall(false);
      }
    });
  }, [scrollYProgress]);

  return (
    <StyledHeader className="spacing-inner">
      <Nav active={showSmall} />
      <h1 className="large">
        <p>
          Anna Ehrnsperger
          <Marker
            text="Anna Ehrnsperger"
            duration={1}
            delay={0.15}
            active={!hideLogo}
          />
        </p>
        <p>
          Design Code
          <Marker
            text="Design Code"
            duration={1}
            delay={1}
            active={!hideLogo}
            style={{ transform: 'translateY(-2px)' }}
          />
        </p>
      </h1>
      <br />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    p {
      white-space: nowrap;
      position: relative;
      color: var(--black);

      span {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        white-space: nowrap;
      }
    }
  }

  @media ${media.M} {
  }
`;

export default Header;
