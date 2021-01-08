// const path = require(`path`);

// exports.createPages = async ({ actions, graphql }) => {
//   const result = await graphql(`
//     query Slug {
//       post: allSanityJournalPost {
//         nodes {
//           slug {
//             current
//           }
//         }
//       }
//     }
//   `);

//   const { nodes } = result.data.post;

//   nodes.forEach((post, i) => {
//     actions.createPage({
//       path: `/journal/${post.slug.current}`,
//       component: path.resolve(`./src/templates/post.js`),
//       context: {
//         slug: post.slug.current,
//       },
//     });
//   });
// };
