import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import Nav from '../atoms/nav';
import { ease } from '../../utils/easing';
import { media } from '../../utils/media-queries';
import Project from '../atoms/project';
import WeeklyAlbum from '../atoms/weeklyAlbum';

const Projects = () => (
  <StyledProjects className="dark spacing-inner">
    <Project title="Kwera" />
    <Project title="Manuel Lorenz" />
    <Project title="KR8 Bureau" />
    <WeeklyAlbum />
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
    {/* <Nav /> */}
  </StyledProjects>
);

const StyledProjects = styled.section`
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

export default Projects;
