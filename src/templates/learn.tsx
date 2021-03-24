import { graphql } from 'gatsby';
import React from 'react';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Navigation from '../containers/Navigation';
import { LearnPageContext, LearnPageData } from '../types';

import '../styles/article-reader.scss';
import '../styles/learn.scss';
import Footer from '../components/Footer';

interface Props {
  data: LearnPageData;
  pageContext: LearnPageContext;
  location: Location;
}
const LearnLayout = ({
  data: {
    doc: {
      frontmatter: { title, description },
      html,
      tableOfContents,
      fields: { authors },
    },
  },
  pageContext: { slug, next, previous, relativePath, navigationData },
  location,
}: Props): React.ReactNode => {
  let previousSlug = '';

  if (typeof window !== 'undefined' && window.previousPath) {
    previousSlug =
      window.previousPath.split('/learn')[1]?.substr(1) ||
      'introduction-to-nodejs';
  }

  return (
    <>
      <Layout
        title={title}
        description={description}
        location={location}
        showFooter={false}
      >
        <main className="grid-container">
          <Navigation
            currentSlug={slug}
            previousSlug={previousSlug}
            label="Secondary"
            sections={navigationData}
          />
          <Article
            title={title}
            html={html}
            tableOfContents={tableOfContents}
            next={next}
            authors={authors}
            previous={previous}
            relativePath={relativePath}
          />
        </main>
      </Layout>
      <Footer />
    </>
  );
};
export default LearnLayout;

export const query = graphql`
  query DocBySlug($slug: String!) {
    doc: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      tableOfContents(absolute: false, pathToSlugField: "frontmatter.path")
      frontmatter {
        title
        description
      }
      fields {
        slug
        authors
      }
    }
  }
`;
