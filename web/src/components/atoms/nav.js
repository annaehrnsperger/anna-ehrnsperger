import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Marker from './marker';

const Nav = ({ active, light, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <StyledNav>
      <ul className="small spacing-inner-small">
        <li onClick={onClick}>
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
            Contact
          </a>
          <Marker active={hover} light={light} text="Contact" duration={0.8} />
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

      span {
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }

  .contact {
    width: 30%;
  }
`;

Nav.propTypes = {
  active: PropTypes.bool,
  light: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Nav;
