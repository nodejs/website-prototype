import { graphql } from 'gatsby';
import React from 'react';
import Article from '../components/Article';
import Layout from '../components/Layout';

const title = 'Download Node.js';
const description = 'Come get me!';

interface Props {
  data: {
    doc: {
      edges: string[] | Record<string, unknown>;
    };
  };
}

const DocsLayout = ({ data }: Props): JSX.Element => {
  const authors = [''];
  return (
    <Layout title={title} description={description}>
      <main className="docs-container">
        <Article
          title=""
          html={data.doc.edges[105].node.html}
          authors={authors}
          editPath="node_modules/node-i18n/content/v12.x/en-US/doc/"
        />
        {console.log(data)}
      </main>
    </Layout>
  );
};
export default DocsLayout;

export const query = graphql`
  {
    doc: allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            title
          }
          html
          tableOfContents(absolute: true, pathToSlugField: "frontmatter.path")
        }
      }
    }
    allFile(
      filter: {
        absolutePath: { eq: "node_modules/node-i18n/content/v12.x/en-US/doc/" }
      }
    ) {
      edges {
        node {
          id
          absolutePath
        }
      }
    }
  }
`;
