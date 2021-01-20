import { navigate } from 'gatsby';
import React from 'react';
import Nav from '../components/molecules/nav';
import Layout from '../components/organisms/layout';
import SEO from '../components/organisms/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO siteTitle="404" />
    <Nav onClick={() => navigate('/')} />
    <div className="spacing-inner">
      <p style={{ paddingTop: 'var(--spacing-XXL)' }}>
        Oh no! This page doesn't exist.
      </p>
    </div>
  </Layout>
);

export default NotFoundPage;
