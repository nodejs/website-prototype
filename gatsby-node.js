/* eslint-disable @typescript-eslint/no-var-requires */
// Use in this file CommonJS syntax see https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#convert-to-either-pure-commonjs-or-pure-es6
const path = require('path');
const createSlug = require('./util-node/createSlug');

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    const docTemplate = path.resolve('./src/templates/learn.tsx');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: {
                fields: { slug: { nin: ["", "nodejs-community", "homepage"] } }
              }
              sort: { fields: [fileAbsolutePath], order: ASC }
            ) {
              edges {
                node {
                  id
                  fileAbsolutePath
                  html
                  parent {
                    ... on File {
                      relativePath
                    }
                  }
                  frontmatter {
                    title
                    description
                    authors
                    section
                  }
                  fields {
                    slug
                  }
                }
                next {
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                  }
                }
                previous {
                  frontmatter {
                    title
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          // eslint-disable-next-line no-console
          console.log(result.errors);
          reject(result.errors);
        }
        const { edges } = result.data.allMarkdownRemark;
        let navigationData = {};
        const docPages = [];
        edges.forEach(({ node }, index) => {
          const {
            fields: { slug },
            frontmatter: { title, section },
            parent: { relativePath },
          } = node;

          let previousNodeData = null;
          const previousNode = index === 0 ? undefined : edges[index - 1].node;
          if (previousNode) {
            previousNodeData = {
              slug: previousNode.fields.slug,
              title: previousNode.frontmatter.title,
            };
          }

          let nextNodeData = null;
          const nextNode =
            index === edges.length - 1 ? undefined : edges[index + 1].node;
          if (nextNode) {
            nextNodeData = {
              slug: nextNode.fields.slug,
              title: nextNode.frontmatter.title,
            };
          }

          let data;
          if (!navigationData[section]) {
            data = { title, slug, section };
            navigationData = { ...navigationData, [section]: [data] };
          } else {
            data = { title, slug, section };
            navigationData = {
              ...navigationData,
              [section]: [...navigationData[section], data],
            };
          }
          docPages.push({
            slug,
            next: nextNodeData,
            previous: previousNodeData,
            relativePath,
          });
        });

        docPages.forEach(page => {
          createPage({
            path: `/learn/${page.slug}`,
            component: docTemplate,
            context: {
              slug: page.slug,
              next: page.next,
              previous: page.previous,
              relativePath: page.relativePath,
              navigationData,
            },
          });
          createRedirect({
            fromPath: `/${page.slug}`,
            toPath: `/learn/${page.slug}`,
            isPermanent: true,
          });
          if (page.slug === 'introduction-to-nodejs') {
            createPage({
              path: `/learn`,
              component: docTemplate,
              context: {
                slug: page.slug,
                next: page.next,
                previous: page.previous,
                relativePath: page.relativePath,
                navigationData,
              },
            });
          }
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;

    const slug = createSlug(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    let { authors } = node.frontmatter;
    if (authors) {
      authors = authors.split(',');
      createNodeField({
        node,
        name: 'authors',
        value: authors,
      });
    }
  }
};
