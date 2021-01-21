import React, { useState } from 'react';
import { Link, graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Richtext from '../components/atoms/richtext';
import SEO from '../components/organisms/seo';
import Layout from '../components/organisms/layout';
import Nav from '../components/molecules/nav';
import Fade from '../components/atoms/fade';
import PageTransition from '../components/atoms/pageTransition';
import Marker from '../components/atoms/marker';
import { media } from '../utils/media-queries';

const PostTemplate = ({ data, pageContext }) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <Layout light="light">
      <SEO />
      <Nav
        light
        onClick={() => {
          setActive(true);
          setTimeout(() => {
            navigate('/');
          }, 800);
        }}
      />
      <StyledPost className=" light spacing-inner">
        <Fade>
          <div className="title small">
            <p className="left">{data.posts.publishedAt}</p>
            <h2 className="right">{data.posts.title}</h2>
          </div>
          <div className="left small">
            <Richtext blocks={data.posts._rawContent} />
          </div>
          <div className="right" />
          <div className="next">
            <p className="left" />
            <div
              className="right large"
              onMouseOver={() => setHover(true)}
              onFocus={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Marker
                active={hover}
                light
                text="Next story"
                style={{ pointerEvents: 'none' }}
              />
              <Link to={`/${pageContext.next}`}>Next story</Link>
            </div>
          </div>
        </Fade>
      </StyledPost>
      <PageTransition active={active} light zIndex={5} />
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    posts: sanityBlogPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt
      _rawContent
    }
  }
`;

const StyledPost = styled.div`
  .title,
  .content,
  .next {
    display: flex;
    justify-content: space-between;
  }

  .next {
    .right {
      margin-top: var(--spacing-M);
      padding-bottom: var(--v-spacing-XL);
      position: relative;

      a {
        color: var(--black);
        background: var(--white);
      }

      span {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .left {
      display: none;
    }
  }

  .title {
    padding-top: var(--v-spacing-XL);
    padding-bottom: var(--spacing-XS);

    .left {
      margin: 0;
      padding: 0;
    }
  }

  .left {
    min-width: 27vw;
  }

  .right {
    width: 100%;
  }

  p,
  ul,
  figure,
  .code {
    padding: var(--spacing-XXS) 0;
  }

  ul {
    li:before {
      padding-right: var(--spacing-S);
      content: '⬝';
    }
  }

  strong {
    font-family: var(--font-3);
    font-weight: inherit;
  }

  h3 {
    margin-top: var(--v-spacing-L);
    font-size: var(--fontsize-3);
  }

  a {
    background: var(--black);
    color: var(--white);

    &:hover {
      background: var(--white);
      color: var(--black);
    }
  }

  code {
    font-family: var(--font-2);
  }

  @media ${media.M} {
    .left {
      width: 70%;
    }

    .right {
      width: 30%;
    }

    .next {
      .right {
        font-size: var(--fontsize-2);
        letter-spacing: inherit;
        margin-top: var(--spacing-M);
      }

      .left {
        display: block;
      }
    }
  }
`;

PostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};
