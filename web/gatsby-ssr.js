/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Layout from './src/components/organisms/layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
