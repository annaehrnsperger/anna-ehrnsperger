import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';

const RichText = ({ blocks, className }) => {
  const serializers = {
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

  return (
    <PortableText
      className={className}
      blocks={blocks}
      serializers={serializers}
    />
  );
};

RichText.propTypes = {
  blocks: PropTypes.array,
  className: PropTypes.string,
};

export default RichText;
