import { graphql } from 'gatsby';
import React from 'react';
import { Page } from '../types';
import PageLayout from '../components/Layout/page';

export default function CommunityPage({ data, location }: Page): JSX.Element {
  const { title, description } = data.page.frontmatter;
  const { html, tableOfContents } = data.page;
  const { authors } = data.page.fields;

  return (
    <PageLayout
      title={title}
      description={description}
      html={html}
      authors={authors}
      tableOfContents={tableOfContents}
      editPath="content/community/index.md"
      location={location}
    />
  );
}

export const query = graphql`
  query {
    page: markdownRemark(fields: { slug: { eq: "nodejs-community" } }) {
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
