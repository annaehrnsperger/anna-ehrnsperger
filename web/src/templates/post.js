// import React from 'react';
// import PropTypes from 'prop-types';
// import { Link, graphql } from 'gatsby';
// import Layout from '../components/layout';

// const Project = ({ data }) => (
//   <Layout>
//     <div>
//       <h1>{data.projects.title}</h1>
//       <Link to="/projects/">projects Overview</Link>
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
