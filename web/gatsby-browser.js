/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from './src/components/organisms/layout';

const transitionDelay = 0;

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};
