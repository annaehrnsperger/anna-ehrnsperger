import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

const sanityConfig = { projectId: 'yc7xvu8h', dataset: 'production' };

const RichText = ({ blocks }) => {
  const serializers = {
    types: {
      // eslint-disable-next-line react/display-name
      mainImage: ({ node }) => (
        <StyledAsset>
          <StyledImage
            fluid={getFluidGatsbyImage(
              node.image.asset._ref,
              { maxWidth: 3600 },
              sanityConfig
            )}
            alt={node.alt}
          />
        </StyledAsset>
      ),
      // eslint-disable-next-line react/display-name
      code: ({ node }) => (
        <SyntaxHighlighter
          language={node.language}
          style={dark}
          customStyle={{
            background: 'transparent',
            border: 'var(--border)',
            borderRadius: 'var(--border-radius)',
          }}
        >
          {node.code}
        </SyntaxHighlighter>
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

const StyledAsset = styled.figure`
  border: var(--border);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-XS);
`;

const StyledImage = styled(Img)`
  border-radius: var(--image-radius);
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export default RichText;
