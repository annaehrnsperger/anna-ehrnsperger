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

  const [hover, setHover] = useState(false);
  const [hoverSecond, setHoverSecond] = useState(false);
  const [hoverThird, setHoverThird] = useState(false);

  return (
    <StyledFooter ref={ref} className={`${light}`}>
      <Fade show={inView}>
        <div className="mail">
          <p className="date">© 2021 </p>
          <a
            href="mailto:hallo@annaehrnsperger.de"
            style={{ color: light ? 'var(--black)' : 'var(--white)' }}
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onFocus={() => setHover(true)}
          >
            hallo at annaehrnsperger.de
            <Marker
              active={hover}
              light={light}
              text="hallo at annaehrnsperger.de"
              duration={0.8}
              style={{ pointerEvents: 'none' }}
            />
          </a>
        </div>
        <div className="links">
          <a
            className="instagram"
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
            Disclaimer &<br /> Privacy Policy
            <Marker
              active={hoverThird}
              light={light}
              text="Disclaimer & Privacy Policy"
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
  padding: var(--v-spacing-XL) var(--v-spacing-M) var(--v-spacing-M)
    var(--v-spacing-M);

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
    align-items: flex-end;

    .mail {
      white-space: nowrap;
      width: 100%;
      .date {
        padding-right: 10px;
        display: none;
      }
    }

    .links {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      .instagram {
        display: none;
      }
    }
  }

  @media ${media.M} {
    padding: var(--v-spacing-XL) var(--v-spacing-M) var(--v-spacing-S)
      var(--v-spacing-M);

    div {
      .mail {
        width: 70%;
        .date {
          display: block;
        }
      }

      .links {
        width: 30%;
        justify-content: space-between;
        .instagram {
          display: block;
        }
      }
    }
  }
`;

Footer.propTypes = {
  light: PropTypes.string,
};

export default Footer;
