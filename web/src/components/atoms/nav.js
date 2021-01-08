import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Nav = () => {
  const { projectsPage, aboutPage, legalNotice } = useStaticQuery(graphql`
    query Nav {
      projectsPage: allSanityProjectsPage {
        nodes {
          title
        }
      }
      aboutPage: allSanityAbout {
        nodes {
          title
        }
      }
      legalNotice: allSanityLegalNotice {
        nodes {
          title
        }
      }
    }
  `);

  return (
    <StyledNav className="dark">
      <ul>
        <li>
          <Link to="/">{projectsPage.nodes[0].title}</Link>
        </li>
        <li>
          <Link to="/">{aboutPage.nodes[0].title}</Link>
        </li>
        <li>
          <Link to="/">{legalNotice.nodes[0].title}</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

export default Nav;
