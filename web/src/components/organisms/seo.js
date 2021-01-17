import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ lang = 'de', siteTitle = '' }) => {
  const data = useStaticQuery(
    graphql`
      query Settings {
        settings: allSanitySettings {
          nodes {
            title
            description
            favicon {
              asset {
                url
              }
            }
            image {
              asset {
                url
              }
            }
          }
        }
      }
    `
  );

  const { title, description, favicon, image } = data.settings.nodes[0];

  return (
    <Helmet titleTemplate={`${title} ${siteTitle ? `• ${siteTitle}` : ''}`}>
      <html lang={lang} />
      <title>{title}</title>
      <link rel="icon" type="image/png" href={favicon.asset.url} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:image" content={image?.asset.url} />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:site_name" content={siteTitle} key="ogsitetitle" />
      <meta
        property="og:description"
        content={description}
        key="ogdescription"
      />
    </Helmet>
  );
};

SEO.propTypes = {
  lang: PropTypes.string,
  siteTitle: PropTypes.string,
};

export default SEO;
