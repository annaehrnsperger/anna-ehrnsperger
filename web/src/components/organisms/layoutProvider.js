import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [transition, setTransition] = useState(false);

  return (
    <LayoutContext.Provider value={{ transition, setTransition }}>
      {children}
    </LayoutContext.Provider>
  );
};

LayoutProvider.propTypes = {
  children: PropTypes.node,
};

export default LayoutProvider;
