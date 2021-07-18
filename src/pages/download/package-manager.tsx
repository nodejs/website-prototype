import React from 'react';
import { graphql } from 'gatsby';
import { Page } from '../../types';
import Layout from '../../components/Layout';
import Article from '../../components/Article';
import Footer from '../../components/Footer';
import '../../styles/article-reader.scss';
import SideNavBar, { SideNavBarKeys } from '../../components/SideNavBar';

export default function PackageManagerPage({ data }: Page): JSX.Element {
  const { title, description } = data.page.frontmatter;
  const { html, tableOfContents } = data.page;
  const { authors } = data.page.fields;
  return (
    <>
      <Layout title={title} description={description} showFooter={false}>
        <main className="grid-container">
          <SideNavBar pageKey={SideNavBarKeys.packageManager} />
          <Article
            title={title}
            html={html}
            tableOfContents={tableOfContents}
            authors={authors}
            editPath="content/download/package-manager.md"
          />
        </main>
      </Layout>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    page: markdownRemark(
      fields: { slug: { eq: "installing-nodejs-via-package-manager" } }
    ) {
      html
      tableOfContents(absolute: false, pathToSlugField: "frontmatter.path")
      frontmatter {
        title
        description
      }
      fields {
        authors
      }
    }
  }
`;
