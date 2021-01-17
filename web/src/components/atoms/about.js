import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { media } from '../../utils/media-queries';
import Fade from './fade';
import Marker from './marker';

const About = ({ description }) => {
  const { ref, inView } = useInView({ threshold: 1 });
  const [hover, setHover] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);

  return (
    <Fade show={inView}>
      <StyledDescription className="small spacing-inner" ref={ref}>
        <div className="contact">
          <a
            href="mailto:hallo@annaehrnsperger.de"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
          >
            Email
            <Marker active={hover} text="Email" duration={0.8} />
          </a>
          <a
            href="https://www.instagram.com/annaehrnsperger/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => setHoverSecond(true)}
            onMouseLeave={() => setHoverSecond(false)}
            onFocus={() => setHoverSecond(true)}
          >
            Instagram
            <Marker active={hoverSecond} text="Instagram" duration={0.8} />
          </a>
          <a
            href="https://github.com/annaehrnsperger"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={() => setHoverThird(true)}
            onMouseLeave={() => setHoverThird(false)}
            onFocus={() => setHoverThird(true)}
          >
            GitHub
            <Marker active={hoverThird} text="GitHub" duration={0.8} />
          </a>
        </div>
        <p className="intro">{description}</p>
      </StyledDescription>
    </Fade>
  );
};

const StyledDescription = styled.section`
  a {
    display: block;
    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  @media ${media.M} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .intro {
      width: 30%;
    }
  }
`;

About.propTypes = {
  description: PropTypes.string,
};

export default About;
