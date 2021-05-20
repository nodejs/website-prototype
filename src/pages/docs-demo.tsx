import { graphql } from 'gatsby';
import React from 'react';
import dompurify from 'dompurify';
import Layout from '../components/Layout';

const sanitizer = dompurify.sanitize;
const title = 'Download Node.js';
const description = 'Come get me!';

interface Props {
  data: {
    doc: {
      edges: string[] | {};
    };
  };
}

const DocsLayout = ({ data }: Props): React.ReactNode => (
  <Layout title={title} description={description} style={{width: '100%'}}>
    <main>
      {console.log(data)}
      <p
        dangerouslySetInnerHTML={{
          __html: sanitizer(data.doc.edges[102].node.html),
        }}
      />
    </main>
  </Layout>
);
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