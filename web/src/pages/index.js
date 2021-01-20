import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import SEO from '../components/organisms/seo';
import { Sketch } from '../components/atoms/sketch';
import { loadableP5 as P5Wrapper } from '../utils/loadable';
import About from '../components/molecules/about';
import Header from '../components/molecules/header';
import Layout from '../components/organisms/layout';
import Project from '../components/molecules/project';
import Story from '../components/molecules/story';
import Fade from '../components/atoms/fade';
import WeeklyAlbum from '../components/molecules/weeklyAlbum';
import { media } from '../utils/media-queries';

const IndexPage = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const { description, projects, posts } = data.homepage.nodes[0];

  return (
    <Layout>
      <SEO />
      <StyledCanvas>
        <P5Wrapper sketch={Sketch} />
      </StyledCanvas>
      <Header />
      <About description={description} />
      <section className="dark spacing-inner">
        {projects.map((project, i) => {
          const randomImg = Math.floor(Math.random() * project.images?.length);
          return (
            <Project
              key={i}
              title={project.title}
              url={project.url}
              imgSrc={project.images[randomImg].image.asset.fluid}
              imgAlt={project.images[randomImg].alt}
            />
          );
        })}
        <div ref={ref}>
          <Fade show={inView}>
            <p
              className="stories large"
              style={{ paddingBottom: 'var(--spacing-S)' }}
            >
              Stories
            </p>
          </Fade>
        </div>
        {posts.map((post, i) => (
          <Story
            key={i}
            date={post.publishedAt}
            title={post.title}
            imgSrc={post.previewImage.image.asset.fluid}
            imgAlt={post.previewImage.alt}
            slug={post.slug.current}
          />
        ))}
        <WeeklyAlbum />
      </section>
    </Layout>
  );
};

export const query = graphql`
  query Homepage {
    homepage: allSanityHomepage {
      nodes {
        description
        projects {
          title
          url
          images {
            alt
            image {
              asset {
                fluid(maxWidth: 3600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
        posts {
          title
          slug {
            current
          }
          publishedAt
          previewImage {
            alt
            image {
              asset {
                fluid(maxWidth: 3600) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

const StyledCanvas = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;
  pointer-events: none;
  display: none;

  @media ${media.M} {
    display: block;
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
