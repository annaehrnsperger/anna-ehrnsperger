import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import clientConfig from '../../../client-config';

const RichText = ({ blocks }) => {
  const serializers = {
    types: {
      // eslint-disable-next-line react/display-name
      mainImage: ({ node }) => {
        const imageData = getGatsbyImageData(
          node.image.asset._ref,
          { maxWidth: 3600 },
          clientConfig.sanity
        );

        return (
          <figure>
            <GatsbyImage image={imageData} alt={node.alt} />
          </figure>
        );
      },
      // eslint-disable-next-line react/display-name
      code: ({ node }) => (
        <div className="code">
          <SyntaxHighlighter
            language={node.language}
            style={nord}
            customStyle={{
              background: 'var(--black)',
              padding: 'var(--v-spacing-S)',
            }}
          >
            {node.code}
          </SyntaxHighlighter>
        </div>
      ),
    },
    marks: {
      /* eslint-disable-next-line */
      link: ({ mark, children }) => {
        /* eslint-disable-next-line */
        const { blank, href } = mark;
        return blank ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        ) : (
          <a href={href}>{children}</a>
        );
      },
    },
  };

  return <PortableText blocks={blocks} serializers={serializers} />;
};

RichText.propTypes = {
  blocks: PropTypes.array,
};

export default RichText;
