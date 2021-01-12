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
    <StyledNav>
      <ul className="small spacing-inner">
        <li>
          <Link to="/">Stories</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
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

  ul {
    display: flex;
    justify-content: space-between;
  }
`;

export default Nav;
