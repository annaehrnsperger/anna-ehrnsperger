import React, { useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Fade from '../atoms/fade';
import { media } from '../../utils/media-queries';
import Marker from '../atoms/marker';

const Footer = ({ light }) => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const year = new Date();

  const [hover, setHover] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);

  return (
    <StyledFooter ref={ref} className={`${light} spacing-inner-small`}>
      <Fade show={inView}>
        <p className="date">© {year.getFullYear()}</p>
        <div className="links">
          <a
            href="mailto:hallo@annaehrnsperger.de"
            style={{ color: light ? 'var(--black)' : 'var(--white)' }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
          >
            Email
            <Marker
              active={hover}
              light={light}
              text="Email"
              duration={0.8}
              style={{ pointerEvents: 'none' }}
            />
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
            <Marker
              active={hoverSecond}
              light={light}
              text="Instagram"
              duration={0.8}
              style={{ pointerEvents: 'none' }}
            />
          </a>
          <Link
            to="/legal"
            onMouseOver={() => setHoverThird(true)}
            onMouseLeave={() => setHoverThird(false)}
            onFocus={() => setHoverThird(true)}
          >
            Legal
            <Marker
              active={hoverThird}
              light={light}
              text="Legal"
              duration={0.8}
              style={{ pointerEvents: 'none' }}
            />
          </Link>
        </div>
      </Fade>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  font-size: var(--fontsize-2);
  padding-top: var(--v-spacing-XL);
  padding-bottom: var(--spacing-S);

  a {
    position: relative;

    span {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  div {
    display: flex;

    .date {
      min-width: 27vw;
    }

    .links {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  @media ${media.M} {
    padding-bottom: 0;

    div {
      .date {
        width: 70%;
      }

      .links {
        width: 30%;
      }
    }
  }
`;

Footer.propTypes = {
  light: PropTypes.string,
};

export default Footer;
