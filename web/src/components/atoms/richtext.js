import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import PropTypes from 'prop-types';

const sanityConfig = { projectId: 'o1wghi20', dataset: 'production' };

const RichText = ({ blocks }) => {
  const serializers = {
    types: {
      // eslint-disable-next-line react/display-name
      mainImage: ({ node }) => (
        <figure>
          <Img
            fluid={getFluidGatsbyImage(
              node.image.asset._ref,
              { maxWidth: 3600 },
              sanityConfig
            )}
            alt={node.alt}
          />
        </figure>
      ),
      // eslint-disable-next-line react/display-name
      code: ({ node }) => (
        <div className="code">
          <SyntaxHighlighter
            language={node.language}
            style={dark}
            customStyle={{ background: 'var(--black)' }}
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
