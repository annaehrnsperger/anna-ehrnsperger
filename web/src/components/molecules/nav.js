/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Marker from '../atoms/marker';
import { media } from '../../utils/media-queries';

const Nav = ({ active, light, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledNav>
      <ul className="small spacing-inner-small">
        <li onClick={onClick} style={{ cursor: 'pointer' }}>
          <Marker
            text="Anna Ehrnsperger"
            duration={1}
            active={active}
            light={light}
          />
          <br />
          <Marker
            text="Design Code"
            delay={1}
            active={active}
            light={light}
            style={{ transform: 'translateY(-2px)' }}
          />
        </li>
        <li
          className="contact"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onFocus={() => setHover(true)}
        >
          <a
            href="mailto:hallo@annaehrnsperger.de"
            style={{ color: light ? 'var(--black)' : 'var(--white)' }}
          >
            Get in touch
          </a>
          <Marker
            active={hover}
            light={light}
            text="Get in touch"
            duration={0.8}
            style={{ pointerEvents: 'none' }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 2px;
  z-index: 4;

  ul {
    display: flex;
    justify-content: space-between;

    li {
      position: relative;
    }

    .contact {
      position: relative;
      /* text-align: right; */

      span {
        /* text-align: right; */
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .contact {
    width: auto;
  }

  @media ${media.M} {
    .contact {
      width: 30%;
    }
  }
`;

Nav.propTypes = {
  active: PropTypes.bool,
  light: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Nav;
