const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query Slug {
      posts: allSanityBlogPost {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const posts = result.data.posts.edges.map((edge) => edge.node);

  posts.forEach((post, i) => {
    actions.createPage({
      path: post.slug.current,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.slug.current,
        next:
          i === posts.length - 1
            ? posts[0].slug.current
            : posts[i + 1].slug.current,
      },
    });
  });
};
