import React from 'react';
import { graphql } from 'gatsby';
import { Page, NodeReleaseData, DataPage } from '../types';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Footer from '../components/Footer';
import '../styles/article-reader.scss';
import DownloadTable from '../components/DownloadReleases/DownloadTable';
import SideNavBar, { SideNavBarKeys } from '../components/SideNavBar';

export interface ReleasesNodeReleases {
  nodeReleases: {
    nodeReleasesData: NodeReleaseData[];
  };
}

interface ReleasesPageProps extends Page {
  data: ReleasesNodeReleases & DataPage;
}

export default function ReleasesPage({
  data: { page, nodeReleases },
}: ReleasesPageProps): JSX.Element {
  const { html, tableOfContents } = page;
  const { title, description } = page.frontmatter;
  const { authors } = page.fields;
  const { nodeReleasesData } = nodeReleases;

  return (
    <>
      <Layout title={title} description={description} showFooter={false}>
        <main className="grid-container">
          <SideNavBar pageKey={SideNavBarKeys.releases} />
          <Article
            title={title}
            html={html}
            tableOfContents={tableOfContents}
            authors={authors}
            editPath="content/about/releases.md"
          >
            <DownloadTable nodeReleasesData={nodeReleasesData} />
          </Article>
        </main>
      </Layout>
      <Footer />
    </>
  );
}

export const query = graphql`
  query {
    page: markdownRemark(fields: { slug: { eq: "releases" } }) {
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
    nodeReleases {
      nodeReleasesData {
        activeLTSStart
        codename
        endOfLife
        initialRelease
        maintenanceLTSStart
        release
        status
      }
    }
  }
`;
