import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from '../atoms/nav';

const Header = () => (
  <StyledHeader className="dark">
    <h1>
      Header <Link to="/">Logo</Link>
    </h1>
    <Nav />
  </StyledHeader>
);

const StyledHeader = styled.header``;

export default Header;
