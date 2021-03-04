import React, { useContext } from 'react';
import { Link, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import { LayoutContext } from '../organisms/layoutProvider';

export const TLink = ({ to, children }) => {
  const { setTransition } = useContext(LayoutContext);

  return (
    <Link
      to={to}
      onClick={(e) => {
        e.preventDefault();

        setTransition(true);
        setTimeout(() => {
          navigate(to);
          setTransition(false);
        }, 800);
      }}
    >
      {children}
    </Link>
  );
};

TLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
};
