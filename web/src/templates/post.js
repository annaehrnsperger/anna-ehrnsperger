import React, { useState } from 'react';
import { Link, graphql, navigate } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Richtext from '../components/atoms/richtext';
import SEO from '../components/organisms/seo';
import Layout from '../components/organisms/layout';
import Nav from '../components/atoms/nav';
import Fade from '../components/atoms/fade';
import PageTransition from '../components/atoms/pageTransition';

const PostTemplate = ({ data }) => {
  const [active, setActive] = useState(false);

  return (
    <Layout>
      <SEO />
      <Nav
        light
        onClick={() => {
          setActive(true);
          setTimeout(() => {
            navigate('/');
          }, 1000);
        }}
      />
      <StyledPost className="small light spacing-inner">
        <Fade show>
          <div className="title">
            <p className="left">12/12/2000</p>
            <p className="right">Build a Great Website without JavaScript</p>
          </div>
          <div className="content" />
          <div className="left">
            <h1>{data.posts.title}</h1>
            <span style={{ paddingLeft: 'var(--spacing-XXS)' }}>
              {data.posts.publishedAt}
            </span>
            <Richtext blocks={data.posts._rawContent} />

            <img src={Preview} />
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className="right" />

          {/* <div className="title">
          <h1>{data.posts.title}</h1>
          <span style={{ paddingLeft: 'var(--spacing-XXS)' }}>
          {data.posts.publishedAt}
          </span>
        </div> */}
          {/* <Richtext blocks={data.posts._rawContent} /> */}
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
  .content {
    display: flex;
    justify-content: space-between;
  }

  .title {
    padding-top: var(--v-spacing-XL);
  }

  .left {
    width: 70%;
    img {
      width: 100%;
    }
  }

  .right {
    width: 30%;
  }

  /*   
  padding: var(--spacing-XXS);
  @media (min-width: 768px) {
    padding: var(--spacing-XS);
  }

  h2 span {
    font-family: var(--font-1);
    background: var(--bg-color);
    color: var(--text-color);
  }

  .content {
    margin-top: 66vh;

    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--spacing-XS);
      h1 {
        width: 75%;
      }
    }

    p,
    ul {
      margin: var(--spacing-XXS) 0;
      @media (min-width: 768px) {
        margin: var(--spacing-XS) 0;
        width: 90%;
      }
    }

    h3 {
      margin-top: var(--spacing-S);
    }
  } */
`;
