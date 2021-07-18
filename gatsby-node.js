// Use in this file CommonJS syntax see https://www.gatsbyjs.org/docs/migrating-from-v1-to-v2/#convert-to-either-pure-commonjs-or-pure-es6
const path = require('path');
const fetch = require('node-fetch');
const createSlug = require('./util-node/createSlug');
const getReleaseStatus = require('./util-node/getReleaseStatus');

const BLOG_POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)\.md$/;

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  return new Promise((resolve, reject) => {
    const docTemplate = path.resolve('./src/templates/learn.tsx');
    const blogTemplate = path.resolve('./src/templates/blog.tsx');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              filter: {
                fields: {
                  slug: {
                    nin: [
                      ""
                      "nodejs-community"
                      "homepage"
                      "trademark-policy"
                      "working-groups"
                      "resources"
                      "privacy-policy"
                      "about"
                      "governance"
                      "security"
                      "package-manager"
                    ]
                  }
                }
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
                    category
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
            frontmatter: { title, section, category },
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
            data = { title, slug, section, category };
            navigationData = {
              ...navigationData,
              [section]: { data: [data], category },
            };
          } else {
            data = { title, slug, section, category };
            navigationData = {
              ...navigationData,
              [section]: {
                data: [...navigationData[section].data, data],
                category: navigationData[section].category,
              },
            };
          }
          docPages.push({
            slug,
            next: nextNodeData,
            previous: previousNodeData,
            relativePath,
            category,
          });
        });

        docPages.forEach(page => {
          const context = {
            slug: page.slug,
            next: page.next,
            previous: page.previous,
            relativePath: page.relativePath,
            navigationData,
            category: page.category,
          };

          if (page.category === 'blog') {
            createPage({
              path: page.slug,
              component: blogTemplate,
              context,
            });
          } else if (page.category === 'learn') {
            createPage({
              path: `/learn/${page.slug}`,
              component: docTemplate,
              context,
            });
            createRedirect({
              fromPath: `/${page.slug}`,
              toPath: `/learn/${page.slug}`,
              isPermanent: true,
            });
          }

          if (page.slug === 'introduction-to-nodejs') {
            createPage({
              path: `/learn`,
              component: docTemplate,
              context,
            });
          }
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const { createNodeField } = actions;

    const { fileAbsolutePath } = node;
    let relativePath = '';
    if (node.parent && getNode(node.parent))
      relativePath = getNode(node.parent).relativePath;

    let slug;

    if (fileAbsolutePath && fileAbsolutePath.includes('/blog/')) {
      const match = BLOG_POST_FILENAME_REGEX.exec(relativePath || '');
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const filename = match[4];

      slug = `/blog/${year}/${month}/${day}/${filename}`;

      const date = new Date(year, month - 1, day);

      createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });
    } else slug = createSlug(node.frontmatter.title);

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

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
  reporter: { activityTimer },
}) => {
  let activity = activityTimer('Fetching Node release data');
  activity.start();
  try {
    const releasesDataDetailURL = 'https://nodejs.org/dist/index.json';
    const releasesDataURL =
      'https://raw.githubusercontent.com/nodejs/Release/main/schedule.json';

    const releasesDataDetailResponse = await fetch(releasesDataDetailURL);
    const releasesDataDetailResult = await releasesDataDetailResponse.json();

    const releasesDataResponse = await fetch(releasesDataURL);
    const releasesDataResult = await releasesDataResponse.json();

    const mappedReleasesDataDetail = releasesDataDetailResult
      .map(release => ({
        ...release,
        lts: release.lts || '',
      }))
      .slice(0, 50);

    const filteredReleasesData = Object.keys(releasesDataResult)
      .filter(key => {
        const release = releasesDataResult[key];
        const end = new Date(release.end);
        return end >= new Date();
      })
      .map(key => {
        const release = releasesDataResult[key];

        return {
          endOfLife: release.end,
          maintenanceLTSStart: release.maintenance || '',
          activeLTSStart: release.lts || '',
          codename: release.codename || '',
          initialRelease: release.start,
          release: key,
          status: getReleaseStatus(release),
        };
      });

    const nodeReleasesData = {
      nodeReleasesDataDetail: mappedReleasesDataDetail,
      nodeReleasesData: filteredReleasesData,
    };

    const nodeReleasesDataContent = JSON.stringify(nodeReleasesData);

    const nodeReleasesMeta = {
      id: createNodeId('node-releases'),
      parent: null,
      children: [],
      internal: {
        type: 'NodeReleases',
        mediaType: 'application/json',
        content: nodeReleasesDataContent,
        contentDigest: createContentDigest(nodeReleasesData),
      },
    };

    const nodeReleases = {
      ...nodeReleasesData,
      ...nodeReleasesMeta,
    };

    await createNode(nodeReleases);

    activity.end();
    activity = activityTimer('Fetching Banners');
    activity.start();

    const siteResponse = await fetch(
      'https://raw.githubusercontent.com/nodejs/nodejs.org/master/locale/en/site.json'
    );
    const siteData = await siteResponse.json();
    const { banners: bannersData } = siteData;

    const bannersContent = JSON.stringify(bannersData);

    const bannersMeta = {
      id: createNodeId('banners'),
      parent: null,
      children: [],
      internal: {
        type: 'Banners',
        mediaType: 'application/json',
        content: bannersContent,
        contentDigest: createContentDigest(bannersData),
      },
    };

    const banners = {
      ...bannersData,
      ...bannersMeta,
    };

    await createNode(banners);

    activity.end();
  } catch (err) {
    activity.panic(err);
  }
};
