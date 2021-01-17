import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { useInView } from 'react-intersection-observer';
import { useConsole } from '../hooks/useConsole';
import SEO from '../components/organisms/seo';
import { Sketch } from '../components/atoms/sketch';
import { loadableP5 as P5Wrapper } from '../utils/loadable';
import About from '../components/atoms/about';
import Header from '../components/molecules/header';
import Layout from '../components/organisms/layout';
import Project from '../components/atoms/project';
import Fade from '../components/atoms/fade';
import WeeklyAlbum from '../components/atoms/weeklyAlbum';

const IndexPage = ({ data }) => {
  useConsole();

  const { title, description } = data.homepage.nodes[0];

  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <Layout>
      <SEO />
      {/* <P5Wrapper sketch={Sketch} style={{ position: 'fixed', top: 0 }} /> */}
      <Header />
      <About description={description} />
      <section className="dark spacing-inner">
        <Project title="Kwera" />
        <Project title="Manuel Lorenz" />
        <Project title="KR8 Bureau" />
        <Project title="Georgia" subtitle="Zinnser-Krys" />
        <div ref={ref}>
          <Fade show={inView}>
            <p className="stories big">Stories</p>
          </Fade>
        </div>
        {/* <Story date={date} title={title} />
        <Story date={date} title={title} />
        <Story date={date} title={title} /> */}
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
      }
    }
  }
`;

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;
