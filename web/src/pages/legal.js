import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import SEO from '../components/organisms/seo';

const LegalPage = ({ data }) => {
  const { title } = data.legalNotice.nodes[0];

  return (
    <>
      <SEO siteTitle="Legal" />
      <h2>{title}</h2>
    </>
  );
};

export const query = graphql`
  query LegalNotice {
    legalNotice: allSanityLegalNotice {
      nodes {
        title
        _rawContent
      }
    }
  }
`;

LegalPage.propTypes = {
  data: PropTypes.object,
};

export default LegalPage;
