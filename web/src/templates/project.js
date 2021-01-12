// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
// import Layout from '../components/organisms/layout';
// import SEO from '../components/organisms/seo';

// const Project = ({ data }) => (
//   <Layout>
//     <SEO siteTitle="Project" />
//     <div>
//       <h1>{data.projects.title}</h1>
//       <Link to="/projects/">Projects Overview</Link>
//     </div>
//   </Layout>
// );

// export const query = graphql`
//   query($slug: String!) {
//     projects: sanityProject(slug: { current: { eq: $slug } }) {
//       title
//     }
//   }
// `;

// Project.propTypes = {
//   data: PropTypes.object,
// };

// export default Project;
