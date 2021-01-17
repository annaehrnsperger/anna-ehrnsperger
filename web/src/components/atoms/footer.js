import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Fade from './fade';

const Footer = () => {
  const { ref, inView, entry } = useInView({ threshold: 0.8 });

  return (
    <Fade show={inView}>
      <StyledFooter ref={ref} className="spacing-inner-small">
        © 2021
      </StyledFooter>
    </Fade>
  );
};
const StyledFooter = styled.footer`
  font-size: var(--fontsize-2);
  margin-top: var(--spacing-XL);
`;

export default Footer;
