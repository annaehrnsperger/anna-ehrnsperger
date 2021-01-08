import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useConsole } from '../hooks/useConsole';
import SEO from '../components/organisms/seo';
import RichText from '../components/atoms/richtext';

const IndexPage = ({ data }) => {
  useConsole();

  const { title, _rawDescription } = data.homepage.nodes[0];

  return (
    <>
      <SEO />
      <h1>{title}</h1>
      <RichText blocks={_rawDescription} />
    </>
  );
};

export const query = graphql`
  query Homepage {
    homepage: allSanityHomepage {
      nodes {
        title
        _rawDescription
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
