import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import Nav from '../atoms/nav';
import { ease } from '../../utils/easing';
import { media } from '../../utils/media-queries';
import Marker from '../atoms/marker';

const Header = () => (
  <StyledHeader className="dark spacing-inner">
    <Nav />
    <h1 className="big">
      <Marker text="Anna Ehrnsperger" duration={2} delay={0.3} />
      <br />
      <Marker text="Design Code" duration={2} delay={1.2} />
    </h1>
    {/* <div className="grid small">
      <p className="contact">
        <p>E-Mail</p>
        <p>Insta</p>
        <p>GitHub</p>
      </p>
      <p className="intro">
        Freelance designer, web developer and student based in Munich. I create
        exciting digital experiences by combining precise design and
        cutting-edge technology.
      </p>
    </div> */}
  </StyledHeader>
);

const StyledHeader = styled.header`
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1 {
    padding-bottom: var(--v-spacing-L);

    span {
      display: inline-block;
      background: var(--white);
      color: var(--black);
      white-space: nowrap;
    }
  }

  @media ${media.M} {
    .grid {
      padding-bottom: var(--spacing-S);

      .contact {
        grid-column: 1 / 4;
      }

      .intro {
        grid-column: 4 / 7;
      }
    }
  }
`;

export default Header;
